+++
title = "Inspect provenance"
description = "Check where an assertion came from, how it entered the vault, and what has happened to it before repeating it."
layout = "docs"
doc_type = "How-to guide"
doc_section = "How-to guides"
[[related]]
label = "Provenance and confidence"
url = "/guide/concepts/provenance-and-confidence/"
[[related]]
label = "Assertion fields"
url = "/guide/reference/assertion-fields/"
[next]
label = "Explore related claims in the graph"
url = "/guide/how-to/explore-graph/"
+++

1. Find the assertion in **Assertions**, **Graph Recall**, **Sources**, or **Conflicts**.
2. Select its row or graph edge to open the provenance inspector.
3. Review the source and evidence locator. Confirm that the locator is precise enough to revisit the evidence.
4. Check capture time, extraction method, confidence, status, and tags.
5. Review related events to see edits, status changes, or later judgments.
6. If the assertion is suitable to carry forward, choose **Copy Citation**.

The copied citation contains the assertion, source, and evidence locator when one is available. It is a convenient handoff, not a substitute for checking the underlying source when the decision is consequential.

If provenance is missing or ambiguous, mark the assertion `needs_review` and capture a better-sourced replacement or supporting claim rather than inventing a locator.
