+++
title = "RDF/RDFS 1.1"
description = "The foundational RDF and RDF Schema vocabulary for classes, properties, labels, domains, ranges, containers, lists, and basic schema relationships."
layout = "vocabulary"
url = "/guide/vocabularies/rdf-rdfs/"
prefix = "rdf: · rdfs:"
version = "2014-02-25"
publisher = "World Wide Web Consortium (W3C)"
+++

## What RDF and RDFS are

RDF defines a graph data model based on subject–predicate–object statements. RDF Schema adds a small vocabulary for describing classes, properties, subclass and subproperty relationships, domains, ranges, labels, and comments.

Claimframe’s bundle contains the 32 named RDF/RDFS terms used by the W3C recommendation and 79 explicit schema statements. Common tokens include `rdf:type`, `rdfs:Class`, `rdfs:subClassOf`, `rdfs:subPropertyOf`, `rdfs:domain`, `rdfs:range`, and `rdfs:label`.

## When an analyst would use it

Use RDF/RDFS when the vault is modeling the model itself:

- Define or import classes and predicates with stable semantic-web identifiers.
- Express basic taxonomies with subclass or subproperty relationships.
- Add interoperable labels, comments, domains, and ranges to schema terms.
- Bring a Claimframe model into alignment with an RDF dataset or ontology that already depends on RDF/RDFS.

Most analysts do not need RDF/RDFS for routine facts about systems, people, or decisions. Adopt it when schema interoperability or explicit type structure is a real requirement—not simply because Claimframe stores triples.

## Example captures

```text
payment-service rdf:type architecture:Service @model-review
architecture:Microservice rdfs:subClassOf architecture:Service @model-definition
architecture:owns rdfs:domain architecture:Team @model-definition
architecture:owns rdfs:range architecture:Service @model-definition
```

> Claimframe stores the imported schema assertions, but adopting RDF/RDFS does not turn on automatic RDFS entailment. Only assertions actually present in the vault are available as claims.

## Defining authority

The World Wide Web Consortium defines the vocabulary in the [RDF Schema 1.1 Recommendation](https://www.w3.org/TR/rdf11-schema/). The broader data model is specified in [RDF 1.1 Concepts and Abstract Syntax](https://www.w3.org/TR/rdf11-concepts/).

