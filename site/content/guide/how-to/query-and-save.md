+++
title = "Query and save claims"
description = "Run a focused pattern, narrow the result, save it for reuse, and export the current assertion set when needed."
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
2. Enter the smallest subject–predicate–object pattern that describes the needed result.
3. Run the query, then narrow it with source, predicate, object, status, or conflicts-only filters where available.
4. Select a value in an assertion row to pivot directly to a related result.
5. Choose the query's save control, give it a clear name, and save it.
6. Open **Manage queries** to run, rename, or delete the saved query.

For example:

```text
? owns invoice-generation
```

If a structured query returns nothing, remove one exact value or replace it with `?`. If you remember wording but not its position, use a shorter text search.

## Export the result

Open **Export** to copy the current vault assertions as Markdown for notes, documentation, or handoff. Check the preview or copied output before using it: export carries the selected assertion material forward but does not replace the original vault or its interactive provenance views.
