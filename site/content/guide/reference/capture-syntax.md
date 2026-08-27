+++
title = "Capture syntax"
description = "The grammar, metadata tokens, defaults, quoting rules, and validation behavior for direct capture."
layout = "docs"
[[related]]
label = "Assertion fields"
url = "/guide/reference/assertion-fields/"
[next]
label = "Query syntax"
url = "/guide/reference/query-syntax/"
+++

Direct capture accepts either an entity name or a subject–predicate–object assertion followed by optional metadata tokens.

```text
subject predicate object @source ^evidence !status %confidence #tag
```

## Body forms

| Form | Result |
| --- | --- |
| `customer-portal` | Creates or reuses an entity without capturing an assertion. |
| `billing-service owns invoice-generation` | Captures an assertion with the default source placeholder and metadata defaults. |
| `service-a contains component-1, component-2` | Captures the remaining body as the object. Predicate schema determines how values are stored. |

The first body token is the subject and the second is the predicate. All remaining non-metadata tokens form the object. Metadata tokens may appear anywhere after tokenization, but placing them after the object is easiest to read.

## Metadata tokens

| Token | Meaning | Default |
| --- | --- | --- |
| `@source` | Person, document, call, repository, or other origin of the assertion | `source` placeholder in the capture preview |
| `^evidence` | Locator within the source, such as a timestamp, section, URL fragment, or commit | Not recorded |
| `!status` | Assertion review state | `active` |
| `%confidence` | Decimal confidence from `0` through `1` | `1.0` |
| `#tag` | Retrieval tag | None |

Only the first source, evidence, status, and confidence token is used. More than one tag may be supplied.

```text
billing-service owns invoice-generation @alice ^00:32:18 !needs_review %0.8 #ownership #billing
```

These examples combine elements in different ways:

```text
customer-portal
billing-service owns invoice-generation
billing-service owns invoice-generation @alice #ownership
billing-service owns invoice-generation @alice ^00:32:18 !confirmed %0.84 #ownership #billing
billing-service owned-by ? @client-call #missing-owner
billing-service deployed-to us-east-1, us-west-2 @platform-team #deployment
```

## Quoting

Double quotes keep whitespace inside a single token. The quote characters are not stored as part of the value.

```text
billing-service named "Billing Service" @"Architecture review"
"Order Management Service" depends-on postgres @architecture-team
customer-portal calls "Identity API" @repo:customer-portal ^commit:9f32c1
```

A quoted subject or object is one entity name. Autocomplete adds quotes when a known entity name contains spaces.

Inside a quoted token, use `\"` for a literal double quote.

## Unknown objects

Use `?` as the object when the value is known to exist but is not yet known.

```text
billing-service owned-by ? @alice
```

An unknown object is rendered as `unknown`. Unless explicitly supplied, its status becomes `needs_review`, and Claimframe adds the `missing` tag.

## Claim references

An object beginning with `claim:` targets an existing assertion. Claimframe uses this form when drafting dispute and contradiction claims.

```text
bob disputes claim:ASSERTION_ID @client-call #dispute
architect supports claim:ASSERTION_ID @review-notes ^decision-7 #judgment
```

The new assertion gets its own source and evidence. The target assertion remains intact, so support, dispute, and contradiction can be reviewed as sourced claims in their own right.

## Validation

- Confidence must be a finite number from `0` through `1`, inclusive.
- A one-token body creates or reuses an entity.
- An assertion requires at least a subject, predicate, and object.
- The predicate's value type, cardinality, uniqueness, and set/list semantics determine how the object is interpreted and stored.

Capture autocomplete suggests existing entities, predicates, sources, tags, and adopted vocabulary terms. `Ctrl/Cmd` + `Space` explicitly opens suggestions at the cursor.
