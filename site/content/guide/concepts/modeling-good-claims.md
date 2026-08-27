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

Good modeling builds a linked graph rather than a collection of isolated labels. Every relationship should still be supported by the source: connectivity is a quality signal, not permission to invent links.

## Prefer stable subjects

Name the thing being discussed, not the sentence in which it appeared. Reuse the vault's canonical entity when autocomplete offers it.

| Weak | Better | Why |
| --- | --- | --- |
| `the-service owns invoices` | `billing-service owns invoice-generation` | The subject remains identifiable outside the original conversation. |
| `new-api calls erp` | `billing-api-v2 calls erp-adapter` | The name distinguishes the specific system version. |

Do not put time, confidence, or source into an entity name merely to keep claims apart. Those dimensions belong in provenance or review metadata.

## Connect new entities to the graph

When introducing an entity, relate it to established entities through supported relationships such as classification, composition, dependency, responsibility, or provenance.

```text
integration-platform comprises message-broker
invoice-service depends-on message-broker
```

An isolated entity often signals incomplete modeling. Query the vault before capture so you can reuse canonical entities and discover meaningful connection points. If the source provides no relationship, keep the entity isolated and flag it for review rather than fabricating an edge.

## Give predicates one consistent meaning

A predicate should express a relationship or property that can be reused. Prefer a precise verb such as `owns`, `depends-on`, `stores`, or `named` over a vague predicate such as `has` or `related-to`.

Reuse existing predicates before creating new ones. Normalize grammatical variants and synonyms when they answer the same question. Keep separate predicates when they carry meaningfully different semantics: `requires`, `supports`, and `causes` are not interchangeable.

Configure the predicate to match its meaning. A display name may have one value; dependencies normally have many. A list should be used only when order and duplicates are meaningful.

Cardinality is part of the model, not a storage afterthought. Configure a relationship as many-valued before capturing several objects for the same subject, or later claims may replace earlier current values.

Predicate settings are ordinary claims and may precede the predicate's first domain use:

```text
depends-on :db:doc "Identifies a dependency of the subject" @modeling-policy
depends-on :db:valueType :db.type:ref @modeling-policy
depends-on :db:cardinality :db.cardinality:many @modeling-policy
depends-on :db:unique :db.unique:none @modeling-policy
depends-on :cf:valueSemantics :cf.semantic:set @modeling-policy
depends-on :cf:conflictPredicate false @modeling-policy
```

Use a modeling-policy or vocabulary source for schema choices. Do not attribute them to a document or person that only supplied domain claims.

## Keep each claim focused

Capture one relationship or property per assertion. Split compound prose so each part can be queried and reviewed independently.

| Weak | Better |
| --- | --- |
| `billing-service is-owned-by-alice-and-stores-invoices postgres` | `alice owns billing-service` and `billing-service stores invoices` | Ownership and storage can change independently. |
| `checkout status "slow and unreliable"` | `checkout latency "high"` and `checkout reliability "degraded"` | Each property can gather its own evidence and status. |

Split enumerated objects into separate assertions when the members can vary independently:

```text
deployment-strategy comprises blue-green-deployment
deployment-strategy comprises canary-deployment
deployment-strategy comprises rolling-deployment
```

Do not split mechanically. A phrase containing “and” may name one established concept. Domain identity, not punctuation, determines whether it is one entity.

## Use intermediate abstractions

Avoid attaching every detail directly to the top-level actor. Model the structure that explains how the concepts relate:

```text
application implements security-architecture
security-architecture requires threat-modeling
threat-modeling identifies attack-surfaces
```

Intermediate entities make the graph easier to query and let later claims reuse the same concepts.

## Keep relationship direction and formal semantics consistent

Choose one canonical direction for a relationship, such as `system comprises component`, and use it consistently. Do not conflate composition with classification: a component of a system is not necessarily a subclass of that system.

Apply RDFS and OWL characteristics only when their inferred consequences are wanted. A transitive composition property can infer indirect containment. A reflexive property also asserts that every entity relates to itself, which is often unhelpful in a practical model.

## Preserve the source's meaning

Normalize names and predicates, but do not strengthen a source's wording. “May depend on Postgres” should not silently become a confirmed dependency. Preserve uncertainty through wording, confidence, status, or a follow-up question.

Use `?` when an object is known to exist but its value is unknown:

```text
billing-service owned-by ? @architecture-review
```

This is more useful than inventing a placeholder entity because Claimframe automatically marks the assertion for review and tags it as missing.

Keep source assertions separate from modeling decisions. A source can support a domain claim, but predicate definitions, cardinality choices, and ontology characteristics should cite a modeling policy or vocabulary source instead.

## Make evidence locators reproducible

An evidence locator should help another person find the relevant passage: a timestamp, section, stable URL fragment, file and line, or commit ID. “Meeting notes” names a source; `^00:32:18` identifies evidence within it.

Good modeling is not maximal detail. Capture the smallest claim that will support a later question, then attach enough provenance to inspect it responsibly.

## Before importing a model

- Find compound objects and hidden enumerations.
- Review compound phrases that may be established concepts.
- Connect new entities through evidence-supported relationships and review unavoidable isolates.
- Reuse existing entities and predicates; normalize inflections and synonyms.
- Audit repeated subject-predicate pairs for cardinality-many.
- Define predicate metadata before repeated domain use.
- Verify source and reproducible evidence on every atomic claim.
- Check for duplicate claims and unintended entity variants.
- Review direction, transitivity, reflexivity, uniqueness, and conflict semantics deliberately.
