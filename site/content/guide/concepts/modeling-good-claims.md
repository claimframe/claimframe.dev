+++
title = "Modeling good claims"
description = "Choose stable subjects, precise predicates, focused objects, and useful context."
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

A useful Claimframe model does not need a perfect ontology but it benefits from a good one. The goal is to capture knowledge -- even partial or conflicting knowledge -- from conversations, documents, meetings, presentations, and even the back of napkins.

When modeling, the goal is to create a "good" graph. Goodness depends on queryability. It's not helpful to have hundreds of verbs with precise shades of meaning if you can't query for them all. Likewise, it's not helpful to proliferate trivial variations of the same idea.

A good graph is connected. Orphaned and disconnected entities are less useful than rich relationships to entities that appear as both subjects and objects.

## Prefer stable subjects

Name the thing being discussed. Reuse the vault's canonical entity when autocomplete offers it. Prefer specific identifiers even if they are verbose.

| Weak                        | Better                                    | Why                                                                 |
| --------------------------- | ----------------------------------------- | ------------------------------------------------------------------- |
| `the-service owns invoices` | `billing-service owns invoice-generation` | The subject remains identifiable outside the original conversation. |
| `new-api calls erp`         | `billing-api-v2 calls erp-adapter`        | The name distinguishes the specific system version.                 |

Do not put time, confidence, or source into an entity name merely to keep claims apart. Those dimensions belong in provenance or review metadata.

## Reuse entities and meaningful relationships

Most useful connectivity comes from reusing canonical entities. Before creating an entity, check whether the same thing already exists under another name. When the entity is genuinely new, connect it to established entities through meaningful relationships such as classification, composition, dependency, or responsibility.

```text
integration-platform comprises message-broker
invoice-service depends-on message-broker
```

An isolated entity sometimes indicates a missing connection, but it might also be something captured on the fly for later investigation. Add relationships as you learn them.

## Give predicates one consistent meaning

A predicate should express a relationship or property that can be reused. Prefer a precise verb such as `owns`, `depends-on`, `stores`, or `named` over a vague predicate such as `has` or `related-to`.

Reuse existing predicates before creating new ones. Normalize grammatical variants and synonyms when they answer the same question. Keep separate predicates when they carry meaningfully different semantics: `requires`, `supports`, and `causes` are not interchangeable.

Configure the predicate to match its meaning. A display name may have one value; dependencies normally have many. Use set semantics for most relationships. List semantics should be used only when order and duplicates are meaningful.

Cardinality is part of the model. Configure a relationship as many-valued before capturing several objects for the same subject, or later claims may replace earlier current values.

Predicate settings are ordinary claims and may precede the predicate's first domain use:

```text
depends-on :db:doc "Identifies a dependency of the subject" @modeling-policy
depends-on :db:valueType :db.type:ref @modeling-policy
depends-on :db:cardinality :db.cardinality:many @modeling-policy
depends-on :db:unique :db.unique:none @modeling-policy
depends-on :cf:valueSemantics :cf.semantic:set @modeling-policy
depends-on :cf:conflictPredicate false @modeling-policy
```

Treat schema choices as modeling decisions. When they follow a shared policy or vocabulary, cite that source. Otherwise, record them as the analyst's decisions rather than attributing them to a document or person that supplied only the domain claims.

## Keep each claim focused

Capture one relationship or property per assertion. Split compound prose so each part can be queried and reviewed independently.

| Weak                                                             | Better                                                             | Why                                                   |
| ---------------------------------------------------------------- | ------------------------------------------------------------------ | ----------------------------------------------------- |
| `billing-service is-owned-by-alice-and-stores-invoices postgres` | `alice owns billing-service` and `billing-service stores invoices` | Ownership and storage can change independently.       |
| `checkout status "slow and unreliable"`                          | `checkout latency "high"` and `checkout reliability "degraded"`    | Each property can gather its own evidence and status. |

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

## Build an ontology as you go

Most models benefit from adopting the [RDF/RDFS 1.1 and OWL 2 Core vocabularies](/guide/how-to/manage-vocabulary/). They provide standard terms for describing instances, classes, and properties. You can add that structure as the model grows instead of designing a complete ontology in advance.

Use `rdf:type` to assign an entity to a class. Declare classes and properties when you first need them, then organize specific terms under broader ones with `rdfs:subClassOf` and `rdfs:subPropertyOf`:

```text
software-system rdf:type owl:Class
service rdf:type owl:Class
service rdfs:subClassOf software-system
billing-service rdf:type service

depends-on rdf:type owl:ObjectProperty
calls rdf:type owl:ObjectProperty
calls rdfs:subPropertyOf depends-on
billing-service calls erp-adapter
```

With RDFS inference active, `billing-service` is also a `software-system`, and the `calls` assertion also answers a query for `depends-on`. The model keeps the more precise terms without forcing every query to name them.

Use `owl:ObjectProperty` for relationships between entities and `owl:DatatypeProperty` for properties whose values are strings, numbers, dates, or other scalar values. `rdf:Property` is sufficient when that distinction is not useful. OWL can also express equivalent classes and properties, inverse properties, transitivity, symmetry, and other characteristics. Add those semantics when they describe the domain, because they create additional inferred claims.

## Keep relationship direction and formal semantics consistent

Choose one canonical direction for a relationship, such as `system comprises component`, and use it consistently. Do not conflate composition with classification: a component of a system is not necessarily a subclass of that system.

Apply RDFS and OWL characteristics only when their inferred consequences are wanted. A transitive composition property can infer indirect containment. A reflexive property also asserts that every entity relates to itself, which is often unhelpful in a practical model.

## Preserve meaning when working from a source

Normalize names and predicates, but do not strengthen a source's wording. “May depend on Postgres” should not silently become a confirmed dependency. Preserve uncertainty through wording, confidence, status, or a follow-up question.

Use `?` when an object is known to exist but its value is unknown:

```text
billing-service owned-by ? @architecture-review
```

This is more useful than inventing a placeholder entity because Claimframe automatically marks the assertion for review and tags it as missing.

Keep source assertions separate from modeling decisions. A source can support a domain claim, but predicate definitions, cardinality choices, and ontology characteristics should cite a modeling policy or vocabulary source instead.

## Add reproducible evidence when it matters

When a claim comes from a document, recording, repository, or other inspectable source, an evidence locator should help another person find the relevant passage: a timestamp, section, stable URL fragment, file and line, or commit ID. “Meeting notes” names a source; `^00:32:18` identifies evidence within it.

Not every claim begins with an external source. An analyst may record an observation, working assumption, or synthesis directly and add attribution later if it becomes important. Confidence, status, and tags can distinguish provisional knowledge without blocking capture.

Good modeling is not maximal detail. Capture the smallest claim that will support a later question, then add the context appropriate to how the claim will be used.

## Before importing a model

- Find compound objects and hidden enumerations.
- Review compound phrases that may be established concepts.
- Resolve new names against existing entities and add only meaningful relationships.
- Reuse existing entities and predicates; normalize inflections and synonyms.
- Audit repeated subject-predicate pairs for cardinality-many.
- Define predicate metadata before repeated domain use.
- Use RDF, RDFS, and OWL terms to declare types, classes, properties, and their hierarchies.
- For sourced claims, verify the source and evidence locator when later inspection matters.
- Check for duplicate claims and unintended entity variants.
- Review direction, transitivity, reflexivity, uniqueness, and conflict semantics deliberately.
