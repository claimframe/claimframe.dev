+++
title = "Explore related claims in the graph"
description = "Begin with a focused result, expand its neighborhood, and keep the working graph readable."
layout = "docs"
doc_type = "How-to guide"
doc_section = "How-to guides"
[[related]]
label = "Query syntax"
url = "/guide/reference/query-syntax/"
[next]
label = "Resolve disagreement"
url = "/guide/how-to/resolve-disagreement/"
+++

1. Open **Graph Recall** and run a focused query rather than starting with the entire vault.
2. Use source, predicate, object, status, or conflicts-only filters to remove unrelated claims.
3. Select a node to inspect its assertions and available relationships.
4. Add inbound or outbound neighbors to expand only the direction relevant to your question.
5. Select an edge to inspect the sourced assertion behind that relationship.
6. Drag nodes to clarify the working subgraph; Claimframe remembers usable positions.

If the graph becomes difficult to read, undo the exploration by rerunning the original query or narrowing filters. A graph is a working view of query results, not a requirement to display the whole vault at once.
