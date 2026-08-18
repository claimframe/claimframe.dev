+++
title = "Manage a vocabulary"
description = "Preview, adopt, verify, and—while still unused—remove a vocabulary release from the current vault."
layout = "docs"
doc_type = "How-to guide"
doc_section = "How-to guides"
[[related]]
label = "Vault and vocabulary boundaries"
url = "/guide/concepts/vault-and-vocabulary-boundaries/"
[[related]]
label = "Predicate settings"
url = "/guide/reference/predicate-settings/"
+++

Use a vocabulary when you want the current vault to share established names, predicate shapes, or general domain knowledge. Adoption imports an immutable release into one vault; it does not change any other vault.

## Preview a release

1. Open the app menu and choose **Manage vocabularies**.
2. Select a supplied release from **Library**, or choose **Import file** to preview a local `.cfvocab` package.
3. Review the publisher, namespace, license, release number, attribution, and content counts.
4. Scan **Contents** for the terms and predicates you expect. If the preview reports local name collisions, review the replacement tokens before continuing.

Claimframe does not overwrite a colliding local name. It preserves the vocabulary's stable identifier and shows the vault token it will use instead.

## Choose what to adopt

Under **Import content**, choose the kinds of content the vault needs:

- **Terms** imports classes, datatypes, schemes, and named concepts.
- **Predicates** imports properties and their value shapes.
- **General knowledge** imports the package's assertions connecting those terms. It is available only when both terms and predicates are selected.

{{< guide-shot src="/assets/guide/manage-vocabulary.png" alt="Vocabulary preview showing its contents, import-content choices, attribution, and Adopt vocabulary button" x="35.7%" y="72.8%" width="62.2%" height="16.8%" caption="Choose the content categories the vault needs, review the attribution, and then adopt the release." >}}

1. Confirm the attribution displayed below the import choices.
2. Choose **Adopt vocabulary**.
3. Confirm that the release appears under **Adopted by this vault**.
4. Verify that imported terms and predicates appear in capture and query autocomplete.

Claimframe blocks another release with the same vocabulary ID rather than treating it as an upgrade. Review and manage each adopted release as an immutable package.

## Undo an adoption

1. Return to **Manage vocabularies**.
2. Find the release under **Adopted by this vault**.
3. Choose **Undo unused import**, then confirm with **Remove**.

Undo succeeds only while no assertion, saved query, or other adopted vocabulary depends on the imported content. When the button is disabled, its explanation identifies why the release cannot be removed.

If Claimframe reports dependencies, leave the release installed. Removing or rewriting dependent domain data solely to force an undo can damage the vault's historical model.
