+++
title = "Find facts and save a query"
description = "Find the facts you need, narrow the results, and save the query pattern so you can run it again."
layout = "docs"
doc_type = "How-to guide"
doc_section = "How-to guides"
[[related]]
label = "Query syntax"
url = "/guide/reference/query-syntax/"
[next]
label = "Inspect provenance"
url = "/guide/how-to/inspect-provenance/"
+++

1. Open **Assertions** or **Graph Recall**.
2. Enter the smallest subject–predicate–object pattern that describes the needed result, then run it.
3. Narrow the results with source, predicate, object, status, or conflicts-only filters where available. You can also select a value in an assertion row to pivot to a related result.
4. Beside the query field, choose **Save current query**.
5. In the **Query name** field, enter a recognizable name such as `Invoice ownership`.
6. Choose **Save query**. A success message confirms that the query pattern—not the matching facts—was saved in the current vault.
7. Open the app menu and choose **Manage queries** to run, rename, or delete the saved query.

{{< guide-shot src="/assets/guide/save-query.png" alt="Assertion Recall with the save-query name dialog highlighted" x="53%" y="22%" width="23%" height="15%" caption="The save control beside the query opens this naming dialog. Name the query, then choose Save." >}}

For example:

```text
? owns invoice-generation
```

If a structured query returns nothing, remove one exact value or replace it with `?`. If you remember wording but not its position, use a shorter text search.

Saving a query does not copy or freeze its current results. Running it later evaluates the saved pattern against the vault's then-current facts.

## Export the result

Open **Export** to copy the current vault assertions as Markdown for notes, documentation, or handoff. Check the preview or copied output before using it: export carries the selected assertion material forward but does not replace the original vault or its interactive provenance views.
