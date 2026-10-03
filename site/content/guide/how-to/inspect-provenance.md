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

1. Find the assertion in **Query**, **Graph**, **Sources** (via **Tools → Manage Sources**), or **Conflicts**.
2. Select its row or graph edge to open the provenance panel on the right. If it is hidden, choose **View → Show Details**.
3. Review the source and evidence locator. Confirm that the locator is precise enough to revisit the evidence.
4. Check capture time, extraction method, confidence, status, and tags.
5. Review related events to see edits, status changes, or later judgments.
6. If the assertion is suitable to carry forward, choose **Copy Citation**.

{{< guide-shot src="/assets/guide/inspect-provenance.png" alt="Query workspace with a selected assertion and its provenance panel on the right" x="78.3%" y="4.7%" width="21.6%" height="89%" caption="Select an assertion to inspect its source, evidence, status, original text, and review actions on the right." >}}

The copied citation contains the assertion, source, and evidence locator when one is available. It is a convenient handoff, not a substitute for checking the underlying source when the decision is consequential.

If provenance is missing or ambiguous, mark the assertion `needs_review` and capture a better-sourced replacement or supporting claim rather than inventing a locator.
