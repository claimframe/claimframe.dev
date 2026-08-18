+++
title = "Assertion statuses"
description = "The eight review-state labels available for assertions and their intended use."
layout = "docs"
[[related]]
label = "Assertion fields"
url = "/guide/reference/assertion-fields/"
[next]
label = "Predicate settings"
url = "/guide/reference/predicate-settings/"
+++

Status records the current review state of an individual assertion. It does not declare universal truth, replace source provenance, or erase the assertion's history.

| Status | Intended use |
| --- | --- |
| `active` | Usable and not in a special review state. This is the default. |
| `needs_review` | Requires human attention before confident reuse. |
| `confirmed` | Checked against sufficient evidence for the user's present purpose. |
| `disputed` | Actively challenged. |
| `stale` | Once useful but possibly out of date. |
| `superseded` | Replaced by a newer assertion or judgment. |
| `rejected` | Reviewed and not accepted for use. |
| `inferred` | Derived rather than directly asserted by the cited source. |

## Behavior

- New direct captures default to `active`.
- A capture whose object is `?` defaults to `needs_review` unless another status is supplied.
- Status can be used as a result filter in assertion and graph recall workspaces.
- Changing status records a new transaction-level metadata value; the underlying history remains available.
- A status applies only to the selected assertion. Related or conflicting assertions retain their own statuses.

Claimframe does not require a fixed status workflow. Choose the state that describes the assertion, and preserve the source's correctly recorded claim even when later evidence rejects or supersedes it.
