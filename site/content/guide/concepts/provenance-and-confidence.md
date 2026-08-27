+++
title = "Provenance, evidence, confidence, and status"
description = "Five related dimensions answer different questions about where an assertion came from and how it should be used."
layout = "docs"
doc_type = "Concept"
doc_section = "Concepts"
[[related]]
label = "Assertion fields"
url = "/guide/reference/assertion-fields/"
[next]
label = "Disagreement and conflicts"
url = "/guide/concepts/disagreement-and-conflicts/"
+++

Provenance is optional context, not a requirement for entering a claim. When that context matters, Claimframe keeps several dimensions separate so a reviewer can distinguish origin, inspectability, extraction certainty, and human judgment.

| Dimension | Question it answers |
| --- | --- |
| Source | Who or what made the claim? |
| Evidence locator | Where inside that source can it be checked? |
| Capture method | How did it enter the vault? |
| Confidence | How certain was the capture or assessment? |
| Status | What is its present review state? |

## Source and evidence

The source is an entity: a person, document, call, repository, or extraction run. The evidence locator points inside that source. A source can be credible while a particular passage is ambiguous; a precise locator lets the user make that judgment directly.

## Capture method and confidence

Capture method describes the route into Claimframe, such as manual entry or transcript extraction. Confidence is a number from zero through one. It can express extraction confidence or the recorder's stated certainty, but it is not a probability that Claimframe has independently verified.

A manually captured assertion with confidence `1.0` can still be false. The number says something about the capture or assessment, not universal truth.

## Status is a workflow judgment

Status records how the assertion should presently be treated: active, awaiting review, confirmed, disputed, stale, superseded, rejected, or inferred. It can change as work proceeds while the original provenance remains intact.

Avoid collapsing these dimensions. Low confidence does not automatically mean rejected. A disputed claim may have excellent provenance. An inferred claim can be well supported while still being different from a direct statement.
