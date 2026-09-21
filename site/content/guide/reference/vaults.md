+++
title = "Vaults"
description = "Local storage, active-vault behavior, recent-vault metadata, backup requirements, and MCP path selection."
layout = "docs"
[[related]]
label = "Assertion fields"
url = "/guide/reference/assertion-fields/"
[next]
label = "Keyboard shortcuts"
url = "/guide/reference/keyboard-shortcuts/"
+++

A vault is a local SQLite database containing Claimframe's domain data, schema, provenance, and workflow state. The active vault supplies the context for capture, queries, graph recall, review, and export.

## Contents

A vault contains:

- Entities and predicate schema
- Transactions and datoms
- Assertion provenance and review metadata
- Transcript intake and review state
- Saved queries
- Adopted vocabulary releases and imported content
- Full-text search data derived from rendered assertions

The core stored unit is a datom. The interface renders assertion groups from the datoms created by a capture transaction.

## Files and display names

Claimframe can create or open vault files with `.sqlite3`, `.sqlite`, `.db`, or `.cfvault` extensions. A renamed vault display name is application metadata; it does not rename or move the underlying file.

Recent-vault tracking and display names are stored in application settings outside the vault. Opening a vault in a new window lets two vaults remain open at the same time.

## Backup

The vault file is the authoritative local store. Include it in the project's encrypted backup process. Close Claimframe and pause other writers before taking a simple manual file copy so the copy represents a consistent point in time.

The database uses SQLite write-ahead logging when accessed by Claimframe integrations. Copying only the main database while a writer is active can omit recent changes still represented by SQLite sidecar files.

## Naming upgrades and snapshots

Schema 17 uses current names only. Upgrading an older supported vault requires explicit desktop confirmation and a recoverable SQLite backup. See [upgrade and recovery steps](/guide/how-to/manage-vault/#upgrade-an-older-vault-to-current-name-naming).

[CFText export/import](/guide/reference/cftext/) transfers current logical content into a fresh vault with new IDs. It omits saved queries and historical workflow data, so use a SQLite backup when you need full history and identity.

## Local MCP server

The standalone Rust MCP server uses the same vault core and normalized SQLite schema as the desktop application. It does not require Python or a running desktop app, and it can share a vault with the desktop application. Select the vault path in this order:

1. Pass `--vault /path/to/vault.sqlite3`.
2. If omitted, set `CLAIMFRAME_VAULT`.
3. Otherwise, the server uses `.claimframe/vault.sqlite3` relative to its working directory.

The active desktop vault path is shown in application settings. The MCP process and desktop application use WAL mode and a busy timeout to coordinate access to the same local file.
