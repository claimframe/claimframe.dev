+++
title = "Assertions, not facts"
description = "Why Claimframe records what a source claimed instead of silently turning every statement into authoritative truth."
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

Claimframe's basic unit is a sourced assertion: a claim made by a source, at a time, about a subject. The assertion records what entered the working model. It does not certify that the claim is universally true.

That distinction matters because technical work begins with incomplete and conflicting accounts. A service owner, repository, architecture diagram, and incident timeline can each describe the same system differently. Flattening those accounts into one fact too early destroys useful information: who believed it, when it was recorded, and what evidence supported it.

## Useful claims can be wrong

A false or outdated assertion can still explain a decision, reveal an assumption, or show when understanding changed. Claimframe therefore permits claims to be active, stale, disputed, superseded, rejected, inferred, or awaiting review while retaining their provenance.

The question stored with a claim is not only “Is this true?” It is also:

- Who or what asserted it?
- Where can the evidence be inspected?
- When did it enter the vault?
- Has anyone reviewed or challenged it?
- What did later evidence add or replace?

## Correction is different from disagreement

Edit a claim when Claimframe contains a transcription or capture error—when the stored wording fails to represent the source.

Do not edit a correctly recorded claim merely because the source was mistaken. Record the correction, dispute, contradiction, or replacement as another sourced assertion. Then update review states as appropriate. This preserves both the historical account and the current judgment.

## Current state without erased history

Claimframe's datom model can retract a value from the current projection without deleting the transaction that originally asserted it. This allows current queries to remain useful while historical and provenance views retain the path by which the model changed.

The result is not indecision. It is an explicit separation between evidence, interpretation, and present operational use.
