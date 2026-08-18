+++
title = "Modeling good claims"
description = "Choose stable subjects, precise predicates, focused objects, and evidence that another person can inspect."
layout = "docs"
doc_type = "Concept"
doc_section = "Concepts"
[[related]]
label = "Capture syntax"
url = "/guide/reference/capture-syntax/"
[next]
label = "Provenance, evidence, confidence, and status"
url = "/guide/concepts/provenance-and-confidence/"
+++

A useful Claimframe model does not need a perfect ontology. It needs claims that remain understandable, searchable, and attributable after the conversation has moved on.

## Prefer stable subjects

Name the thing being discussed, not the sentence in which it appeared. Reuse the vault's canonical entity when autocomplete offers it.

| Weak | Better | Why |
| --- | --- | --- |
| `the-service owns invoices` | `billing-service owns invoice-generation` | The subject remains identifiable outside the original conversation. |
| `new-api calls erp` | `billing-api-v2 calls erp-adapter` | The name distinguishes the specific system version. |

Do not put time, confidence, or source into an entity name merely to keep claims apart. Those dimensions belong in provenance or review metadata.

## Give predicates one consistent meaning

A predicate should express a relationship or property that can be reused. Prefer a precise verb such as `owns`, `depends-on`, `stores`, or `named` over a vague predicate such as `has` or `related-to`.

Configure the predicate to match its meaning. A display name may have one value; dependencies normally have many. A list should be used only when order and duplicates are meaningful.

## Keep each claim focused

Capture one relationship or property per assertion. Split compound prose so each part can be queried and reviewed independently.

| Weak | Better |
| --- | --- |
| `billing-service is-owned-by-alice-and-stores-invoices postgres` | `alice owns billing-service` and `billing-service stores invoices` | Ownership and storage can change independently. |
| `checkout status "slow and unreliable"` | `checkout latency "high"` and `checkout reliability "degraded"` | Each property can gather its own evidence and status. |

## Preserve the source's meaning

Normalize names and predicates, but do not strengthen a source's wording. “May depend on Postgres” should not silently become a confirmed dependency. Preserve uncertainty through wording, confidence, status, or a follow-up question.

Use `?` when an object is known to exist but its value is unknown:

```text
billing-service owned-by ? @architecture-review
```

This is more useful than inventing a placeholder entity because Claimframe automatically marks the assertion for review and tags it as missing.

## Make evidence locators reproducible

An evidence locator should help another person find the relevant passage: a timestamp, section, stable URL fragment, file and line, or commit ID. “Meeting notes” names a source; `^00:32:18` identifies evidence within it.

Good modeling is not maximal detail. Capture the smallest claim that will support a later question, then attach enough provenance to inspect it responsibly.
