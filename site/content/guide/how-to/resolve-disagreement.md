+++
title = "Resolve disagreement"
description = "Compare conflicting claims, correct transcription errors, record challenges, and update review states without erasing history."
layout = "docs"
doc_type = "How-to guide"
doc_section = "How-to guides"
[[related]]
label = "Disagreement and conflicts"
url = "/guide/concepts/disagreement-and-conflicts/"
[[related]]
label = "Assertion statuses"
url = "/guide/reference/statuses/"
[next]
label = "Manage a vocabulary"
url = "/guide/how-to/manage-vocabulary/"
+++

Use the Conflicts workspace to compare competing source claims and record what an analyst concludes. A judgment does not erase the source assertions or make the structural conflict disappear. It adds a sourced claim about one of those assertions and changes the conflict's review state.

## Review the conflict

1. Open **Conflicts** and select a conflict from the queue.
2. Confirm that the dossier says **Conflict active** and inspect the detection rule beneath the title. If the conflict is unexpected, review the predicate's [settings](/guide/reference/predicate-settings/) before judging the source claims.
3. Under **Original assertions**, select each participating claim in turn.
4. Compare its exact wording, source, evidence locator, capture time, and provenance in the inspector at the right.
5. Use **Explore relationships** when nearby facts would help explain the disagreement. Added neighbors provide context; they do not change which assertions participate in the conflict.

{{< guide-shot src="/assets/guide/resolve-disagreement.png" alt="Conflict dossier showing three original assertions, active conflict and review-state badges, and the analyst judgment form" x="75.7%" y="9.7%" width="6.4%" height="7%" caption="The conflict condition and its review state are separate. Recording a judgment changes the review state while the conflict remains active." >}}

## Record an analyst judgment

1. Under **Add analyst judgment**, confirm the analyst identity. Use **Change in settings** if the effective identity is not the person performing the review.
2. Choose the relationship that expresses the conclusion: **supports**, **disputes**, or **contradicts**.
3. Choose the source assertion that the judgment targets.
4. Leave **Source** as **Analyst review**, or choose the appropriate review source when another option is available.
5. Enter a rationale that explains the evidence and reasoning behind the judgment.
6. Choose **Add judgment assertion**.

Confirm that the queue now says **Judgment recorded**, the original assertions remain unchanged, and the dossier still says **Conflict active**. The new judgment is an append-only assertion with its own provenance.

Correct a source assertion only when it was transcribed incorrectly or fails to represent its source. Leave **Conflicts**, open that assertion, and use **Edit** from its provenance inspector. Do not rewrite a correctly captured claim merely because another source is more persuasive.

## Finish and revisit the review

Choose **View report** to check that the report distinguishes **Current condition** from **Review state** and includes the participating claims, citations, judgment rationale, and transaction trail. Copy or export the report when you need to share the analysis.

If a later source claim changes the conflict membership, Claimframe marks the conflict **Needs re-review** while preserving the earlier judgment. Review the new evidence and add another judgment; the revision is appended rather than replacing the earlier review.
