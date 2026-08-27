+++
title = "Assertion fields"
description = "The domain values and transaction provenance displayed together as a Claimframe assertion."
layout = "docs"
[[related]]
label = "Assertion statuses"
url = "/guide/reference/statuses/"
[next]
label = "Assertion statuses"
url = "/guide/reference/statuses/"
+++

Claimframe displays an assertion by grouping domain datoms created in one capture transaction. Provenance and review metadata belong to that transaction rather than to a separate fact row.

## Displayed fields

| Field | Required for direct capture | Default | Meaning |
| --- | --- | --- | --- |
| Subject | Yes | — | Entity the assertion describes |
| Predicate | Yes | — | Attribute, relationship, or property being asserted |
| Object | Yes | — | One or more entity references or scalar values |
| Source | No in the desktop parser | `source` preview placeholder | Person, document, call, repository, or other origin |
| Evidence locator | No | Not recorded | Location within the source |
| Status | No | `active` | Current review state |
| Confidence | No | `1.0` | Numeric confidence from `0` through `1` |
| Extraction method | No | `manual` | How the assertion entered the vault |
| Tags | No | None | Retrieval labels; multiple values are allowed |
| Capture time | Generated | Current transaction time | When the capture transaction was recorded |
| Assertion ID | Generated | — | Stable rendered group identifier derived from transaction, entity, and attribute |

The local MCP capture tool requires `subject`, `predicate`, `object`, and `source`. Desktop capture can preview and submit an assertion without an explicit `@source`; for useful provenance, supply the real source whenever it is known.

## Object values

Predicate schema controls object storage:

- Reference values point to another entity.
- Scalar values may contain text, a number, an instant, a boolean, or a keyword.
- Cardinality-one predicates retain at most one current value.
- Cardinality-many predicates may retain multiple values.
- Set semantics deduplicate and do not preserve order.
- List semantics preserve order and duplicates.

## Provenance and history

Each capture creates a first-class transaction with a durable order and timestamp. Domain datoms and their metadata share the transaction ID. Later edits, status changes, and retractions add history rather than rewriting the original transaction in place.

Claimframe uses the durable transaction and datom order—not wall-clock timestamps alone—to determine current state.
