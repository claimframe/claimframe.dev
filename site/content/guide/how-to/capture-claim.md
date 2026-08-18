+++
title = "Capture a sourced claim"
description = "Record one focused subject–predicate–object assertion and attach enough provenance to inspect it later."
layout = "docs"
doc_type = "How-to guide"
doc_section = "How-to guides"
[[related]]
label = "Capture syntax"
url = "/guide/reference/capture-syntax/"
[[related]]
label = "Modeling good claims"
url = "/guide/concepts/modeling-good-claims/"
[next]
label = "Query and save claims"
url = "/guide/how-to/query-and-save/"
+++

1. Open **Capture**, or press `Cmd/Ctrl` + `Shift` + `C`.
2. Enter the subject, predicate, and object. Reuse autocomplete suggestions where they match the intended entities.
3. Add `@source` and, when possible, an evidence locator such as a timestamp or section.
4. Add status, confidence, or tags only when they contribute useful review or retrieval information.
5. Review the syntax preview and commit the assertion.
6. Confirm the new assertion appears with the intended source and object.

For example:

```text
billing-service owns invoice-generation @alice ^00:32:18 #ownership
```

Use quotes to keep a multi-word value together:

```text
billing-service named "Billing Service" @architecture-review
```

If the stored wording misrepresents the source, select the assertion and use **Edit** to correct the transcription. If the source was accurately recorded but later proved wrong, leave the original intact and record the disagreement instead.
