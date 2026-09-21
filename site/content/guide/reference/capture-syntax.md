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

## Current entity names

Each entity has one stable ID and one current name, unique within its vault. Names compare case-insensitively: capturing `Billing` after `billing` reuses the same entity and keeps its original display spelling. Only an explicit rename changes that spelling; a case-only rename is allowed.

Surrounding Unicode whitespace is trimmed. Interior spaces, punctuation, and Unicode composition are preserved: `billing-service`, `billing_service`, and `"billing service"` are distinct names, as are names with one versus two interior spaces. Comparison uses Unicode 17.0 simple case folding without multi-character expansions: `Équipe` and `équipe` match, but `ß` and `ss` do not. Composed and decomposed accents remain distinct.

Rename preserves the entity ID and stored relationships, rejects a name owned by another entity, and releases the old name for reuse. Old names no longer resolve to the renamed entity. Distinct people or systems with the same human name need different current names. These rules also apply to source names; quote a source containing spaces, such as `@"Design review"`.

Sourced naming facts such as `aka` remain ordinary claims; they do not create lookup aliases. Original capture text and evidence keep their historical wording.

## Body forms

| Form | Result |
| --- | --- |
| `customer-portal` | Creates or reuses an entity without capturing an assertion. |
| `billing-service owns invoice-generation` | Captures an assertion with the default source placeholder and metadata defaults. |
| `service-a contains component-1, component-2` | Captures the remaining body as the object. Predicate schema determines how values are stored. |

The first body token is the subject and the second is the predicate. All remaining body tokens form the object. Metadata must follow a complete body: an entity name, or a subject, predicate, and object. Once metadata begins, another body token is invalid.

An entity may carry metadata for grammar consistency even though creating or reusing it does not create an assertion. The metadata is accepted but does not create assertion provenance or tag the entity:

```text
customer-portal @"Architecture review" #observed
```

## Metadata tokens

| Token | Meaning | Default |
| --- | --- | --- |
| `@source` | Person, document, call, repository, or other origin of the assertion | `source` placeholder in the capture preview |
| `^evidence` | Locator within the source, such as a timestamp, section, URL fragment, or commit | Not recorded |
| `!status` | Assertion review state | `active` |
| `%confidence` | Decimal confidence from `0` through `1` | `1.0` |
| `#tag` | Retrieval tag | None |

Source, evidence, status, and confidence may each appear at most once. Repeating one is an error. More than one tag may be supplied, and tag order is preserved.

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

A quoted subject or object is one value. Autocomplete adds quotes when a known entity name contains spaces. Quoting a complete metadata-looking value makes it ordinary body data: `"@literal"` is not source metadata. To quote a metadata value, keep the prefix outside the quotes, such as `@"Design review"` or `#"customer claim"`.

Inside a quoted token, these escapes are supported:

| Escape | Stored character |
| --- | --- |
| `\\` | Backslash |
| `\"` | Double quote |
| `\n` | Newline |
| `\r` | Carriage return |
| `\t` | Tab |

Other escapes are invalid. A quoted value must close and must be followed by whitespace, a comma, or another structural delimiter.

## Object lists and literal delimiters

An unquoted comma separates object values. Whitespace around a comma is optional, but every item must contain a value; leading, trailing, and consecutive commas are invalid on submission.

```text
service-a contains component-1, component-2
service-a named "Research, Development"
```

Quote a comma, equals sign, or plus sign when it is data. An unquoted equals sign is invalid in Capture. A standalone plus surrounded by whitespace is a reserved Capture separator and is ignored; a plus attached to a value is invalid, so quote literal plus data.

```text
service-a named "tier=a"
service-a supports "C++"
```

Capture has no comment syntax. A `//` pair is ordinary data in Capture, including in an unquoted URL. CFText uses `//` for comments outside quotes, so the same value must be quoted when it appears in a CFText file.

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
- Status must be `active`, `needs_review`, `confirmed`, `disputed`, `stale`, `superseded`, `rejected`, or `inferred`.
- Metadata values cannot be empty, and metadata cannot precede or interrupt the body.
- A one-token body, optionally followed by metadata, creates or reuses an entity.
- An assertion requires at least a subject, predicate, and object.
- Input must be consumed completely: malformed quotes, escapes, delimiters, repeated singleton metadata, and trailing body data are rejected with a positioned diagnostic.
- The predicate's value type, cardinality, uniqueness, and set/list semantics determine how the object is interpreted and stored.

While editing, Capture distinguishes empty, incomplete, complete, and invalid drafts. Commit is enabled only for a complete draft. Incomplete input such as two body tokens, an open quote, an empty metadata prefix, or a trailing comma keeps safe preview data without showing a notification; invalid input shows one localized explanation. The Rust parser validates the complete input again before any mutation.

Capture autocomplete searches current names and suggests existing entities, predicates, sources, tags, and adopted vocabulary terms. Selecting a suggestion inserts the current name with syntax-safe quoting and escaping as plain text. It does not bind an entity ID; submission resolves that text against the current names at that moment. `Ctrl/Cmd` + `Space` explicitly opens suggestions at the cursor.
