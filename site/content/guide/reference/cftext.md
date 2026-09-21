+++
title = "CFText snapshots"
description = "Transfer current vault content as editable text, with fresh IDs on import and no historical backup guarantee."
layout = "docs"
[[related]]
label = "Back up and upgrade a vault"
url = "/guide/how-to/manage-vault/"
+++

New in 0.4.0, CFText is an editable UTF-8 snapshot of a vault's current logical content. Export produces a `.cftext` file; import reconstructs its content in a fresh vault. It is not an identity-preserving clone or a full-history backup.

## Share vault content with another person

CFText is the recommended way to share vault content with another person instead of passing SQLite database files around. The sender exports one `.cftext` snapshot and sends it through their chosen channel. The recipient imports that file into a fresh vault and reviews the result.

Follow [Share a vault](/guide/how-to/share-vault/) for the sender and recipient steps.

The recipient gets an independent copy of current logical content with new IDs. Source and evidence metadata carried by the snapshot remain available, but full transaction/review history, saved queries, settings, and other excluded data do not transfer. This is a one-time handoff, not synchronization or a shared live vault; later edits in either vault do not update the other.

## What carries over

A snapshot includes current entities, predicate and kernel schema, current explicit claims, capture-level source and evidence metadata, status, confidence, tags, typed values, claim-to-claim references, and installed rule profiles. Vocabulary terms and knowledge represented as ordinary logical data carry over, including their stable identifiers.

Import creates new entity IDs, assertion IDs, transactions, and timestamps. It does not restore original transaction order, retractions, correction or review history, transcript and extraction records, vocabulary-adoption history, saved queries, settings, or credentials. Use a consistent [SQLite backup](/guide/how-to/manage-vault/#back-up-a-vault) to preserve identity and history.

## Export, edit, and import

1. Export the current vault as a `.cftext` file.
2. Keep the original export and edit a copy in a UTF-8 text editor.
3. Import the edited file into a fresh vault, then review its contents. The original vault remains separate.

Entity names follow the same [current-name comparison rules](/guide/reference/capture-syntax/#current-entity-names) as Capture. Exports contain current names and ordinary sourced naming claims, without lookup aliases.

## Text and validation

Files begin with `claimframe-text 1`, `content-schema 1`, `source-name`, and `exported-at` headers, followed by `[entities]`, `[schema]`, `[claims]`, and `[profiles]` sections in that order. Double quotes preserve spaces and literal delimiters. `//` starts a comment outside quotes, so quote URLs and other values containing it.

Claim anchors are labels local to the file. Import resolves `claim:<anchor>` references, including forward references, without preserving source-vault IDs. Invalid structure, schema, or anchors produce positioned diagnostics. Import stages its writes and publishes the final vault only after validation succeeds. Export and import support cancellation and progress reporting.

The reference performance check uses 100,000 current claims, with budgets of three seconds for export and 3.5 seconds for parsing plus reconstruction. These are reference-machine release checks, not a claim-count limit or a promise for every computer.

## Troubleshooting development or pre-release files

CFText did not ship before 0.4.0; ordinary released-version users have no legacy CFText cleanup step. If you have a file from a development or pre-release build containing `alias <entity-name> <alias>` directives, import rejects them with a line and column and instructions to remove them. Edit a copy, remove those directives, and retry the fresh-vault import. This rejection does not create a destination vault.

Retain sourced domain `aka` or naming claims. They are ordinary claims, distinct from lookup alias directives, and do not grant alternate names for lookup.
