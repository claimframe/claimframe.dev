+++
title = "Manage a vault"
description = "Create, open, switch, rename, and safely back up a local Claimframe vault."
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

## Open or switch vaults

1. Choose a recent vault on the start screen, or open the app menu and choose **Manage vaults**.
2. Select a recent vault or browse for a local vault file.
3. Open it in the current window to switch context, or choose the new-window action to keep both vaults open.
4. Confirm the intended vault path before capturing or querying.

## Rename the display name

In **Manage vaults**, choose **Rename**, enter the new display name, and save it. This changes application metadata; it does not rename or move the underlying SQLite file.

## Back up a vault

1. Find the active vault path in application settings.
2. Close Claimframe and stop any local MCP process using that vault.
3. Copy the vault file into the project's encrypted backup location.
4. Confirm the copied file exists and has a plausible modification time and size.

Do not rely on a manual copy taken while writers are active. SQLite may have recent changes in write-ahead-log sidecar files.
