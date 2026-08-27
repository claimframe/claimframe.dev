+++
title = "OWL 2 Core"
description = "Claimframe’s bundle of OWL 2 vocabulary terms for formal ontology constructs, packaged with the RDF, RDFS, and XML Schema dependencies needed to state them explicitly."
layout = "vocabulary"
url = "/guide/vocabularies/owl-2-core/"
prefix = "owl:"
version = "2012-12-11"
publisher = "World Wide Web Consortium (W3C)"
+++

## What OWL 2 Core is

OWL 2 is a formal ontology language layered on RDF. It can describe equivalence and disjointness, property characteristics, class expressions, restrictions, keys, identity, and ontology version relationships.

“OWL 2 Core” is the name of Claimframe’s bundled package, not a separate W3C conformance profile. The bundle contains the 77 OWL-specific terms from the OWL 2 RDF-Based vocabulary plus the RDF, RDFS, and XML Schema dependency terms needed for explicit schema statements: 88 terms and 207 statements in total.

## When an analyst would use it

Use OWL terms when the analysis must preserve or exchange a formally defined ontology:

- Record that two classes or properties are equivalent or disjoint.
- Describe inverse, symmetric, transitive, functional, or inverse-functional properties.
- Preserve explicit restrictions, cardinalities, property chains, keys, or ontology version metadata from an external model.
- Inspect or hand off a semantic model that already uses OWL identifiers.

OWL is rarely the best starting point for ordinary discovery notes or a first domain model. Its terms carry formal meanings that deserve deliberate modeling and review.

## Example captures

```text
architecture:Application owl:disjointWith architecture:Team @ontology
architecture:ownedBy owl:inverseOf architecture:owns @ontology
customer-record owl:sameAs crm:customer-4821 @identity-review
architecture:legacyService owl:deprecated true @ontology-review
```

> Claimframe does not perform OWL reasoning, entailment, validation, or ontology imports. It stores the adopted terms and explicit assertions; it does not calculate everything an OWL reasoner could infer.

## Defining authority

The World Wide Web Consortium defines these terms in [OWL 2 Web Ontology Language: RDF-Based Semantics](https://www.w3.org/TR/owl2-rdf-based-semantics/). For a more approachable introduction, see the [OWL 2 Primer](https://www.w3.org/TR/owl2-primer/).

