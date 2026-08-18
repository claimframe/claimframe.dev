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

1. Open the app menu and choose **Manage vocabularies**.
2. Select a supplied release, or choose **Import file** to preview a local `.cfvocab` package.
3. Review namespace, publisher, license, release, attribution, included terms, predicates, statements, and local name collisions.
4. Select the terms, predicates, and optional general knowledge that should enter the vault.
5. Choose **Adopt vocabulary**.
6. Confirm that imported terms and predicates appear in capture or query autocomplete.

Claimframe does not overwrite a colliding local name; the preview shows the namespaced token it will use. The current importer also blocks a second release with the same vocabulary ID rather than upgrading or comparing it.

## Undo an adoption

Return to **Manage vocabularies**, select the adopted release, and choose the remove or undo action. Removal succeeds only while no assertion, saved query, or other adopted vocabulary depends on its imported content.

If Claimframe reports dependencies, leave the release installed. Removing or rewriting dependent domain data solely to force an undo can damage the vault's historical model.
