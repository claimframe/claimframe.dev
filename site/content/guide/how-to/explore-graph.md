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

Use Graph Recall when you want to understand how a small set of facts connects. Begin with a question expressed as a query, then add nearby facts only when they help answer that question. You do not need to load the entire vault into one graph.

## Build a focused graph

1. Open **Graph Recall**.
2. Enter a query that identifies a useful starting point. For example, `? owns invoice-generation` finds every current ownership claim about `invoice-generation`.
3. Choose **Run**.
4. If the result is too broad, narrow it with the **Source**, **Predicate**, **Object**, or **Status** filters. Select **Conflicts** when you only want assertions participating in a detected conflict.
5. Confirm that the entity and relationship counts describe a manageable working graph.

{{< guide-shot src="/assets/guide/explore-graph.png" alt="Graph Recall showing a focused relationship graph with billing-service selected and the Add neighbors control visible" x="15.2%" y="79.7%" width="24.2%" height="16.7%" caption="Select a node to reveal its neighborhood controls. The matched relationships remain available below the graph." >}}

## Add nearby facts

1. Select the entity whose context you want to expand.
2. Choose **Add neighbors** to add missing inbound and outbound facts connected to that entity.
3. To expand only one direction, open the arrow beside **Add neighbors** and choose **Add inbound** or **Add outbound**. With the graph focused, you can also press `N` to add neighbors in both directions.
4. Repeat only where another hop contributes to your investigation. Claimframe does not change the original query or the assertions when it adds graph context.

Select an edge or a connected node to select the sourced assertion behind that relationship. The selection summary appears below the graph, and the provenance inspector opens at the right when assertion evidence is available.

Drag nodes when two relationships overlap or when a different arrangement makes the result easier to explain. Claimframe preserves node positions for later use.

## Reset the working view

If the graph becomes difficult to read, rerun the original query to discard added neighbors, or narrow the query and filters to build a smaller graph. Graph Recall is a working view of vault facts; changing its layout or neighborhood does not change the stored assertions.
