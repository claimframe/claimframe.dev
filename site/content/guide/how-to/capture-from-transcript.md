+++
title = "Capture claims from a transcript"
description = "Import a timestamped transcript, review candidate claims, and decide which candidates become facts in the vault."
aliases = ["/guide/how-to/capture-from-source/"]
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

Use transcript workflows when a meeting, interview, or recording contains several statements worth reviewing individually. Claimframe keeps the imported words, speaker, and timestamp as evidence; extraction proposes structured claims from that evidence. Nothing becomes a stored assertion until you accept its candidate.

This page describes the transcript-driven workflow. If you need to extract claims from unstructured documents, use the **Document Intake** tab.

## Transcript import

1. Open **Transcript Claims** and choose **New**.
2. Give the workflow a recognizable name. The name is optional but useful when several interviews are in progress.
3. Paste the transcript, or choose **Load transcript file** to read a local text file.
4. Choose **Import and create workflow**.
5. Confirm the workflow appears under **In progress** and that the workflow timeline advances beyond **Import transcript**.

{{< guide-shot src="/assets/guide/transcript-import-timeline.png" alt="Transcript Claims import form containing the deterministic transcript at the start of a new workflow" caption="Start a new transcript workflow by naming it and adding the transcript you want to review." >}}

### Transcript file format

Use UTF-8 plain text with one speaker segment per nonblank line:

```text
[timestamp] Speaker: segment text
```

- Text inside leading square brackets becomes the segment's evidence timestamp. Claimframe accepts labels such as `[00:01]`, `[00:32:18]`, or another source-specific position.
- Text before the first colon becomes the speaker.
- Everything after the first colon becomes the segment text.
- A line without a timestamp is still imported and receives its sequence number as its position.
- A line without a colon is imported with an unknown speaker.
- Put multi-word capture values in double quotes when using structured capture syntax.

For example:

```text
[00:01] Alice: billing-service sends-invoices-to netsuite
[00:02] Bob: billing-service sends-invoices-to netsuite
[00:03] Alice: api calls "customer database"
```

Import stores the source and its segments. It does not by itself create facts in the assertion ledger.

## Candidate review

After import, Claimframe prepares candidate claims from the structured transcript lines and advances the workflow to **Review claims**. Review each candidate against the transcript before deciding whether it should become a fact in the vault.

1. Select the workflow under **In progress** and inspect the proposed candidates and extraction issues.
2. Compare each candidate's subject, predicate, and object with the displayed source words and supporting excerpts.
3. Correct the structured fields when the proposal does not faithfully represent the source, then save the edits.
4. Choose **Accept** to create an assertion, **Defer** to leave the candidate unfinished, or **Reject** to make a final decision without creating an assertion.
5. Use the status tabs to revisit accepted, deferred, or rejected candidates. **Undo last defer/reject** reverses the most recent reversible decision.
6. Open **Assertions** and confirm accepted candidates retain the transcript source and exact segment evidence.

{{< guide-shot src="/assets/guide/transcript-candidates.png" alt="Transcript Claims candidate review with a selected candidate, its transcript evidence, and controls for configuring a new predicate" x="81.3%" y="8.7%" width="17.7%" height="72.7%" caption="Select a candidate to compare its proposed fields with the exact transcript evidence and configure any new predicate before accepting it." >}}

When a candidate uses a predicate that is not yet in the vault, the evidence panel marks it as **New predicate**. Under **Values per subject**, choose **One value** when each subject should have at most one current value for the predicate, or **Multiple values** when several values may be current at once. See [Predicate settings](/guide/reference/predicate-settings/) for the consequences of this choice and the other available predicate settings.

The same normalized claim may appear in more than one transcript segment. Claimframe can present it as one candidate with multiple supporting excerpts. Similar but non-identical claims remain separate for review, and a line that cannot be parsed appears as an extraction issue rather than becoming a fact silently.

Rejecting an extraction candidate is not the same as marking an existing assertion `rejected`: an unaccepted candidate has never entered the assertion ledger. If speaker detection, segmentation, or extraction is ambiguous, correct the source or candidate before accepting it.

## Complete the workflow

There is no separate completion button. Claimframe completes the workflow automatically when every candidate has a final decision.

1. Open **Remaining** and decide each unfinished candidate.
2. **Accept** candidates that should become facts in the vault, or **Reject** candidates that should not. A deferred candidate remains unfinished, so return to **Deferred** and give it a final decision when you are ready.
3. Confirm the timeline reaches **Complete** and the message **Transcript claim review complete** appears.
4. Confirm the workflow moves from **In progress** to **Completed** in the workflow list.

Accepted candidates are available under **Assertions**. Rejected candidates remain part of the transcript workflow's review history but do not become assertions.
