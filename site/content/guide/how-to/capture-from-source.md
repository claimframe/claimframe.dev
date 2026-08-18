+++
title = "Capture claims from a source"
description = "Import transcript or document material, review extracted candidates, and decide which claims enter the vault."
layout = "docs"
doc_type = "How-to guide"
doc_section = "How-to guides"
[[related]]
label = "Assertion fields"
url = "/guide/reference/assertion-fields/"
[[related]]
label = "Provenance and confidence"
url = "/guide/concepts/provenance-and-confidence/"
[next]
label = "Inspect provenance"
url = "/guide/how-to/inspect-provenance/"
+++

1. Open **Source Intake**.
2. Paste transcript text or select a supported local file. For prepared document assertions, supply a source title.
3. Preview the detected speaker segments, timestamps, or document assertions before importing.
4. Send extracted candidates to **Claim Review**.
5. For each candidate, correct the subject, predicate, or object if extraction failed to represent the source.
6. **Accept** candidates that should enter the vault, **Defer** candidates needing later attention, and **Reject** candidates that should not be captured.
7. Open **Assertions** and confirm accepted candidates have the intended source and evidence locator.

Rejecting an extraction candidate is not the same as marking a stored assertion `rejected`: the candidate has not yet entered the vault as an assertion.

If speaker detection or segmentation is poor, correct the source material or capture the important claims manually rather than accepting ambiguous provenance.
