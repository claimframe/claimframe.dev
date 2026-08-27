+++
title = "FOAF 0.99"
description = "A vocabulary for describing people, organizations, groups, projects, documents, online accounts, and the relationships among them."
layout = "docs"
doc_type = "Vocabulary reference"
doc_section = "Bundled vocabularies"
url = "/guide/vocabularies/foaf/"
prefix = "foaf:"
version = "0.99"
publisher = "Dan Brickley and Libby Miller"
[[related]]
label = "Manage a vocabulary"
url = "/guide/how-to/manage-vocabulary/"
+++

## What FOAF is

FOAF—“Friend of a Friend”—is an RDF vocabulary for describing agents and the connections around them. Its classes include people, organizations, groups, projects, documents, images, and online accounts. Its predicates cover names, membership, authorship, accounts, homepages, interests, and interpersonal links.

Claimframe’s bundle contains 76 terms, including 63 predicates, plus a small set of schema statements. Imported terms use stable namespaced tokens such as `foaf:Person`, `foaf:Organization`, `foaf:member`, and `foaf:knows`.

## When an analyst would use it

Use FOAF when the model needs a portable vocabulary for the human and organizational side of a system:

- Map stakeholders, teams, organizations, and project membership.
- Connect people or organizations to documents, accounts, projects, or homepages.
- Record who made or maintains an artifact when a generic local predicate is not specific enough.
- Exchange people-and-organization data with an RDF or linked-data model that already uses FOAF identifiers.

FOAF is usually more useful for stakeholder and ecosystem context than for detailed software architecture. You do not need to adopt it merely to store an ordinary person or team as a Claimframe entity.

## Example captures

```text
alice rdf:type foaf:Person @client-directory
payments-team rdf:type foaf:Group @org-chart
payments-team foaf:member alice @org-chart ^page-7
alice foaf:made architecture-decision-17 @project-wiki
```

> `foaf:knows` means that one person knows another in FOAF’s broad sense. Do not silently interpret it as friendship, trust, reporting structure, or verified identity. Keep the source attached.

## Defining authority

The vocabulary is defined by Dan Brickley and Libby Miller in the [FOAF Vocabulary Specification](https://xmlns.com/foaf/spec/). Claimframe bundles release 0.99 and preserves the vocabulary’s stable term identifiers and attribution.
