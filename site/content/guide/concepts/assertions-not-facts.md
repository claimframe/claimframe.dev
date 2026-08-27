+++
title = "Assertions, not facts"
description = "Why Claimframe records assertions without silently turning every statement into authoritative truth."
layout = "docs"
doc_type = "Concept"
doc_section = "Concepts"
[[related]]
label = "Assertion fields"
url = "/guide/reference/assertion-fields/"
[next]
label = "Modeling good claims"
url = "/guide/concepts/modeling-good-claims/"
+++

Claimframe's basic unit is an assertion: a claim entered at a particular time about a subject. It may be attributed to a person, document, repository, or other source, or it may be captured directly by an analyst while the work is unfolding. In either case, recording the assertion does not certify that it is universally true.

That distinction matters because technical work begins with incomplete knowledge and conflicting accounts. A service owner, repository, architecture diagram, incident timeline, and analyst's current understanding may each describe the same system differently. Treating any one of them as settled fact too early hides uncertainty and disagreement.

## Useful claims can be wrong

A false or outdated assertion can still explain a decision, reveal an assumption, or show when understanding changed. Claimframe therefore permits claims to be active, stale, disputed, superseded, rejected, inferred, or awaiting review. When provenance was recorded, it remains attached as the claim moves through those states.

Depending on the work, useful questions about a claim include:

- Who or what asserted it?
- Where can the evidence be inspected?
- When did it enter the vault?
- Has anyone reviewed or challenged it?
- What did later evidence add or replace?

## Correction is different from disagreement

Edit a claim when Claimframe contains a transcription or capture error—for example, when the stored wording fails to represent its source or the analyst entered the wrong entity.

Do not edit a correctly recorded claim merely because its source or author was mistaken. Record the correction, dispute, contradiction, or replacement as another assertion. Then update review states as appropriate. This preserves both the historical account and the current judgment.

## Current state without erased history

Claimframe's datom model can retract a value from the current projection without deleting the transaction that originally asserted it. This allows current queries to remain useful while historical and provenance views retain the path by which the model changed.

The result is not indecision. It is an explicit separation between evidence, interpretation, and present operational use.
