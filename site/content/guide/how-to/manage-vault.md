+++
title = "Manage a vault"
description = "Create, open, rename, and safely back up a local Claimframe vault."
layout = "docs"
doc_type = "How-to guide"
doc_section = "How-to guides"
[[related]]
label = "Vaults reference"
url = "/guide/reference/vaults/"
[next]
label = "Record facts by hand"
url = "/guide/how-to/capture-claim/"
+++

Use these procedures to manage the local file that holds one body of Claimframe work.

## Create a vault

1. On the start screen, choose **New vault**.
2. Select a folder covered by your normal encrypted backup process.
3. Give the file a name that identifies the client, system, or engagement.
4. Save it. Confirm the new path is shown as the active vault.

Normal vaults start empty. Supported file extensions include `.sqlite3`, `.sqlite`, `.db`, and `.cfvault`.

## Open another vault

1. On the start screen, choose a recent vault or use **File → Open Vault** to browse for a local file. **File → Recent vaults** also lists tracked files.
2. With a vault open, choose the **Vaults** icon and then **Recent vaults** in its sidebar, or choose **File → Manage Vaults**.
3. The first vault binds the current process. Opening another vault while one is active opens it in a new window; use **Open in New Window** from the recent-vault list.
4. Confirm the intended vault path before capturing or querying.

## Rename the display name

In **Vaults → Recent vaults**, choose **Rename**, enter the new display name, and save it. This changes application metadata; it does not rename or move the underlying SQLite file.

## Back up a vault

1. Find the active vault path under **Vaults → Current vault**.
2. Close Claimframe and stop any local MCP process using that vault.
3. Copy the vault file into the project's encrypted backup location.
4. Confirm the copied file exists and has a plausible modification time and size.

Do not rely on a manual copy taken while writers are active. SQLite may have recent changes in write-ahead-log sidecar files.

## Upgrade an older vault to current-name naming

Before installing 0.4.1, close Claimframe and all MCP sessions, copy the vault to a safe backup
location, and keep the previous installer. Opening an older vault asks for confirmation before
migration and creates an automatic backup. Do not interrupt that operation.

The upgraded vault uses current entity names. Renaming replaces the name used for lookup;
previous names no longer resolve automatically. Capitalization is ignored, but punctuation and
spaces distinguish names. Update saved queries that refer to renamed entities.

Older application versions cannot open an upgraded vault. If you need to return to the previous
version, close the new application, retain the upgraded file separately, reinstall the previous
version, and open the pre-upgrade backup. Changes made after the backup will not be present there.
Do not overwrite your only copy of either file. CFText exports preserve current content, not the
full transaction history, and do not replace a vault backup.
