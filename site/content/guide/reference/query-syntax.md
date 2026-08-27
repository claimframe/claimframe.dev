+++
title = "Query syntax"
description = "Structured subject–predicate–object patterns, wildcard behavior, text search, claim lookup, and result filters."
layout = "docs"
[[related]]
label = "Capture syntax"
url = "/guide/reference/capture-syntax/"
[next]
label = "Assertion fields"
url = "/guide/reference/assertion-fields/"
+++

Queries accept a structured subject–predicate–object pattern or a shorter text search.

## Structured patterns

Use three tokens to query the current assertion projection. Put `?` in any position that should match any value.

| Query | Matches |
| --- | --- |
| `? owns invoice-generation` | Any subject that owns invoice generation |
| `billing-service ? ?` | Any current assertion about the billing service |
| `? depends-on postgres` | Any subject that depends on Postgres |
| `? ? ?` | Every current assertion |

Subjects and predicates match known canonical entities. An object matches when any value in the rendered assertion group equals the requested value. Structured queries operate over current datoms, not retracted historical values.

## Quoted values and aliases

Double quotes preserve spaces within one query position.

```text
"Network International" owns ?
? connects-to "Network International"
```

Entity display names and aliases resolve to their canonical entities where available.

## Text search

An input with fewer than three tokens performs text-oriented recall across indexed assertions and visible assertion fields.

```text
invoice
architecture review
```

Use a three-position pattern when you need exact structural matching. Use a shorter phrase when you are searching for remembered wording or a term without knowing its position.

## Claim lookup

An input beginning with `claim:` or `tx:` retrieves the assertion groups associated with that capture transaction.

```text
claim:ASSERTION_ID
```

## Filters

Graph Recall and Assertions can further narrow query results with filters. Available filters include source, predicate, object, status, and conflicts-only display where offered by the workspace. Filters are combined with the query: a result must match both.

Selecting a subject, predicate, object, source, status, or tag in an assertion row can pivot directly to a corresponding query or filtered result.

## Autocomplete

Query autocomplete uses the same canonical tokens as capture. Suggestions include existing entities, predicates, sources, tags, and adopted vocabulary terms. `Ctrl/Cmd` + `Space` explicitly opens suggestions at the cursor.
