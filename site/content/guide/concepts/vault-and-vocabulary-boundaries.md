+++
title = "Vault and vocabulary boundaries"
description = "Choose where a body of work ends and when shared terminology improves capture without replacing local knowledge."
layout = "docs"
doc_type = "Concept"
doc_section = "Concepts"
[[related]]
label = "Vaults reference"
url = "/guide/reference/vaults/"
+++

A vault is both a storage boundary and a working-context boundary. A vocabulary is a reusable language that can enter that context. They solve different problems.

## Choosing a vault boundary

Keep claims together when they are regularly queried, compared, or reconciled together. Separate them when they have different confidentiality, retention, backup, or client boundaries.

Splitting too aggressively hides useful relationships and requires switching context. Combining unrelated work creates noisy autocomplete, busy graphs, and accidental disclosure risk. A client, system landscape, or sustained engagement is often a useful starting boundary, but operational constraints take precedence.

Because a vault is a local file, its boundary also determines backup and file-access practices. Do not rely on the display name to enforce separation.

## What a vocabulary adds

A vocabulary release supplies stable identifiers, predicates, optional general knowledge, attribution, and licensing metadata. Adoption makes selected content available to capture and query autocomplete.

The release is immutable inside the vault. Claimframe records which release was adopted, and local name collisions are namespaced rather than overwritten.

## What a vocabulary does not do

A vocabulary does not replace local entities or make imported statements automatically authoritative. Local claims still need sources, evidence, and review appropriate to the work.

Adopt a vocabulary when shared identifiers improve exchange or reduce ambiguous naming. Skip it when a small local model is clearer. Once vault data depends on an adopted release, Claimframe prevents undoing it because removing the vocabulary would break those references.
