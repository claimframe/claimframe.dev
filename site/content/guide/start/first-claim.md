+++
title = "Create your first sourced claim"
description = "In about ten minutes, create a disposable vault, capture two sourced claims, retrieve them, inspect provenance, and save the query."
layout = "docs"
doc_type = "Tutorial"
doc_section = "Get started"
[[related]]
label = "Why assertions are not facts"
url = "/guide/concepts/assertions-not-facts/"
[next]
label = "Modeling good claims"
url = "/guide/concepts/modeling-good-claims/"
+++

You will build a small, disposable model of invoice ownership. No prior Claimframe knowledge is required.

> Before starting, install and open Claimframe. This tutorial creates a local SQLite file that you may delete afterward.

## 1. Create the tutorial vault

On the start screen, choose **New vault**. Save the file as `claimframe-tutorial.sqlite3` in a temporary or practice folder.

**Expected result:** Claimframe opens an empty workspace with the new vault active.

## 2. Capture Alice's claim

Open **Capture**, enter the following text exactly, and commit it:

```text
billing-service owns invoice-generation @alice ^00:32:18 #ownership
```

**Expected result:** the assertion appears with `billing-service` as subject, `owns` as predicate, `invoice-generation` as object, and Alice as source.

## 3. Capture Bob's different account

Enter and commit:

```text
accounting-platform owns invoice-generation @bob ^00:41:03 #ownership
```

**Expected result:** both claims remain in the vault. Claimframe does not silently choose one owner.

## 4. Retrieve the ownership claims

Open **Assertions**. In the query field, enter:

```text
? owns invoice-generation
```

Run the query.

**Expected result:** two matching assertions appear, one sourced to Alice and one to Bob.

## 5. Inspect the evidence

Select Alice's assertion. In the provenance inspector, locate the source, evidence locator, capture time, status, confidence, and raw capture text.

**Expected result:** the source is `alice`, the locator is `00:32:18`, and the default status is `active`.

## 6. Mark the uncertainty

With Alice's assertion selected, change its status to `needs_review`.

**Expected result:** Alice's claim changes review state. Bob's claim remains unchanged, and Alice's original capture remains in its event history.

## 7. Save the query

Return to the query field and choose **Save current query**. Enter `Invoice ownership` in the **Query name** field, then choose **Save query**.

Open the app menu, choose **Manage queries**, and run `Invoice ownership`.

**Expected result:** the same two ownership claims return without retyping the pattern.

## What you built

Your vault now contains two independently sourced assertions, precise evidence locators, one explicit review state, and a reusable query. You can retrieve the disagreement without erasing either account.

To clean up, close Claimframe and delete `claimframe-tutorial.sqlite3` from the folder where you saved it. Do this only for this disposable tutorial vault.
