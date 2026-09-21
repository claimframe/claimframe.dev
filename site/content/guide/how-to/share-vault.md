+++
title = "Share a vault"
description = "Send current vault content to another person so they can work with an independent local copy."
layout = "docs"
doc_type = "How-to guide"
doc_section = "How-to guides"
[[related]]
label = "CFText snapshots"
url = "/guide/reference/cftext/"
[[related]]
label = "Back up a vault"
url = "/guide/how-to/manage-vault/#back-up-a-vault"
[[related]]
label = "0.4.0 release notes"
url = "/releases/0.4.0/"
+++

Use CFText to share vault content with another person. It is the recommended handoff format instead of sending SQLite database files: you export one `.cftext` snapshot, send it through your chosen channel, and the other person imports it into a fresh vault.

Both people need a Claimframe version that supports CFText, starting with 0.4.0. Claimframe requires no account or cloud service for this workflow. Sending the file happens outside the app.

## Sender: prepare and send the snapshot

1. Open the vault you intend to share. Open the app menu and choose **Manage vaults**. Under **Current vault**, check its name and file path so you export the intended content.
2. Choose **Export CFText**. In **Export CFText vault snapshot**, choose a folder and filename ending in `.cftext`, then save.
3. Wait for export to finish and check the success notification showing the exported file path. Do not send an incomplete export.
4. Open the file in a UTF-8 text editor and review the content you intend to share, including claims, source names, evidence locators, and other included metadata. The export contains the vault's current logical content; it is not limited to the current query or selected assertions.
5. If you want to change the snapshot before sending it, keep the original export and edit a copy. Follow the [CFText format rules](/guide/reference/cftext/#text-and-validation). Import the edited copy into a fresh vault using the steps below and check the result before sending it.
6. Send the reviewed `.cftext` file through your chosen external channel, such as email or a file-sharing service. Tell the recipient which vault and snapshot they are receiving.

Exporting or editing the text file does not change the original vault. Keep that vault and its normal backups.

## Recipient: import a fresh vault

1. Save the received `.cftext` file locally. On Claimframe's start screen, choose **Import CFText**. If you already have a vault open, use the app menu to open **Manage vaults**, then choose **Import CFText**.
2. In **Import CFText as a new vault**, select the received file. Wait while Claimframe validates it.
3. When **CFText is ready to import** appears, check **Source vault**, **Exported**, and the entity and claim counts. Review **Included**, **Not carried over**, and any warnings to confirm the snapshot is what you expect.
4. Enter a **New vault name**, then choose **Choose destination**.
5. In **Create imported Claimframe vault**, choose a new file path for the imported vault and save. Import creates a fresh vault; it does not merge into or replace your open vault.
6. Wait for completion. Claimframe opens the imported vault in a new window. Check its name and path under **Manage vaults**, then browse or query a few expected claims. Select claims to inspect their source and evidence metadata against what the sender intended to share.

If validation reports **CFText import needs attention**, read the error and choose **Close**. Correct a copy of the source file, or ask the sender for a corrected export, and retry. A failed import does not publish a usable final vault.

## What the recipient receives

The fresh vault contains current logical content, including current entities and schema, explicit claims, supported source/evidence metadata, status, confidence, tags, claim references, and installed rule profiles. Import creates new entity and assertion IDs, transactions, and timestamps.

It does not carry complete transaction or review history, retractions, original transcript/extraction records, saved queries, settings, or credentials. An evidence locator can identify an external document or recording without including that underlying file. See the [snapshot boundary](/guide/reference/cftext/#what-carries-over) for details.

The recipient's vault is an independent copy. Later edits on either side do not update the other; this workflow provides neither synchronization nor a shared live vault. For recovery that preserves original IDs and full history, use a [SQLite backup](/guide/how-to/manage-vault/#back-up-a-vault), not a CFText handoff.
