+++
title = "Disagreement and conflicts"
description = "How structural conflicts, disputes, contradictions, and review states represent different kinds of disagreement."
layout = "docs"
doc_type = "Concept"
doc_section = "Concepts"
[[related]]
label = "Predicate settings"
url = "/guide/reference/predicate-settings/"
[next]
label = "Vault and vocabulary boundaries"
url = "/guide/concepts/vault-and-vocabulary-boundaries/"
+++

Claimframe treats disagreement as information to inspect, not corruption to erase. Several mechanisms surface different kinds of disagreement.

## Structural conflict

A structural conflict is derived from predicate schema and current values. For example, a uniqueness rule may say that one value identifies at most one subject. Two subjects using that value then create a conflict even if neither source explicitly mentions the other claim.

Structural conflicts describe incompatibility under the vault's current schema. They do not decide which assertion should prevail.

## Explicit dispute and contradiction

A dispute or contradiction is itself a sourced claim targeting another assertion. It records who challenged the claim and where their evidence can be found.

`disputes` is appropriate for a challenge that may concern interpretation, evidence, or applicability. `contradicts` expresses a more direct incompatibility. Both preserve the challenged assertion instead of editing it away.

## Disputed status

The `disputed` status is a review state on one assertion. It is useful for filtering and workflow, but it does not record who disputed the claim or why. A sourced dispute claim supplies that missing relationship and provenance.

## Reconciliation

Reconciliation is the work of comparing assertions, evidence, dates, and wording, then recording the current judgment. It may result in confirmation, rejection, supersession, a new clarifying claim, or no immediate resolution.

Deleting the losing claim would remove part of the evidence trail. Preserving it explains why earlier decisions were reasonable, who needs updated information, and how the model evolved.
