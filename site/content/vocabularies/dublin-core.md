+++
title = "Dublin Core Metadata Terms"
description = "A maintained vocabulary for describing documents, datasets, software, standards, services, and other resources."
layout = "vocabulary"
url = "/guide/vocabularies/dublin-core/"
prefix = "dcterms:"
version = "2020-01-20"
publisher = "Dublin Core Metadata Initiative"
+++

## What Dublin Core is

Dublin Core Metadata Terms is a general-purpose vocabulary for resource description. It supplies familiar metadata such as title, creator, contributor, publisher, dates, format, identifier, language, rights, license, provenance, subject, and relationships between versions or parts.

Claimframe’s bundle contains 114 terms, including 58 predicates, DCMI resource types such as Dataset, Service, Software, and Text, and supporting classes, encoding schemes, and datatypes. Imported terms use tokens such as `dcterms:title`, `dcterms:creator`, and `dcterms:isPartOf`.

## When an analyst would use it

Use Dublin Core when the analysis depends on the identity, lifecycle, or provenance of artifacts:

- Describe architecture documents, policies, standards, datasets, APIs, repositories, and software releases.
- Record creators, contributors, publishers, licenses, identifiers, and important dates.
- Relate a resource to its source, parts, versions, replacement, required resources, or referenced material.
- Align a Claimframe vault with document catalogs, data catalogs, digital libraries, or other metadata systems.

For a small vault that only needs domain assertions, local predicates may be simpler. Dublin Core earns its keep when resource metadata must be consistent or exchanged outside Claimframe.

## Example captures

```text
architecture-doc dcterms:title "Billing Architecture v2.1" @document-register
architecture-doc dcterms:creator alice @document-register
architecture-doc dcterms:modified "2026-08-03" @document-register
architecture-doc dcterms:conformsTo security-standard @governance-review
```

## Defining authority

The Dublin Core Metadata Initiative maintains the [DCMI Metadata Terms specification](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/). Claimframe bundles the issued 2020-01-20 release under the package’s stated CC BY 4.0 terms.

