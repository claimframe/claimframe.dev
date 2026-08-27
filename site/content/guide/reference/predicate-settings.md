+++
title = "Predicate settings"
description = "Value type, cardinality, uniqueness, collection semantics, and explicit-conflict behavior for predicates."
layout = "docs"
[[related]]
label = "Assertion fields"
url = "/guide/reference/assertion-fields/"
[next]
label = "Vaults"
url = "/guide/reference/vaults/"
+++

A predicate is an attribute entity described by schema datoms. Its settings determine how Claimframe stores values and derives structural conflicts.

## Value cardinality

| Setting | Meaning |
| --- | --- |
| One value | The subject has at most one current value for this predicate. A later value retracts the prior current value. |
| Many values | The subject may have multiple current values for this predicate. |

Changing cardinality from one to many is allowed. Changing an established predicate from many to one is rejected; create a new predicate when that semantic change is required.

## Uniqueness

| Setting | Meaning |
| --- | --- |
| No uniqueness | Values may repeat without a uniqueness conflict. |
| Identity unique | A matching value identifies the same entity. |
| Value unique | A value may identify at most one entity. |

Uniqueness may be added only when current data has no collisions. Conversion directly between identity and value uniqueness is rejected. Removing uniqueness is allowed.

## Collection semantics

| Setting | Meaning |
| --- | --- |
| Set | Values are unordered and deduplicated within a transaction. |
| List | Values preserve order and duplicates. |

Changing set semantics to list semantics is allowed. Changing list semantics back to set semantics is rejected because it could discard meaningful order or duplicates.

## Value type

Predicates may contain entity references or scalar strings, instants, booleans, doubles, or keywords. Changing the value type of an established predicate is rejected.

## Claim-reference and conflict predicates

A claim-reference predicate targets an assertion transaction rather than an ordinary domain entity. A conflict predicate marks that relationship as explicit disagreement. Built-in predicates such as `disputes` and `contradicts` use these semantics.

These settings affect conflict detection throughout the vault. Review current data and intended meaning before changing them.

> If an incompatible schema change is necessary, create a new predicate and leave the old predicate available for historical claims.
