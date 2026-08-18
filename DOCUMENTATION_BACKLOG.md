# Documentation Backlog

This backlog tracks the restructuring of the Claimframe user guide around the
four Diataxis documentation modes. All sections will ship as one documentation
release. The implementation order follows content dependencies so tutorials,
how-to guides, and concepts can link to authoritative reference material rather
than duplicating it.

## Implementation status

Completed on 2026-08-17. The product-specific content was checked against the
local `claimframe-app` source and product documentation. Hugo builds 24 pages,
and every internal `/guide/` link resolves to generated output. Export remains a
section of `Find facts and save a query`; the current export workflow is not complex
enough to warrant a separate page. The former monolithic guide layout was
removed after its content was migrated. Three current-UI screenshots from a
disposable synthetic demo vault orient readers to manual capture, query saving,
and the provenance inspector without turning every procedure into a screenshot
walkthrough.

## Target quality

| Documentation mode | Target tier |
| --- | --- |
| Tutorial | B or better |
| How-to guides | S |
| Reference | B or better |
| Explanation | B or better |

## Proposed information architecture

```text
/guide/
├── index
├── start/
│   └── first-claim
├── how-to/
│   ├── manage-vault
│   ├── capture-claim
│   ├── capture-from-source
│   ├── query-and-save
│   ├── inspect-provenance
│   ├── explore-graph
│   ├── resolve-disagreement
│   └── manage-vocabulary
├── reference/
│   ├── capture-syntax
│   ├── query-syntax
│   ├── assertion-fields
│   ├── statuses
│   ├── predicate-settings
│   ├── vaults
│   └── keyboard-shortcuts
└── concepts/
    ├── assertions-not-facts
    ├── modeling-good-claims
    ├── provenance-and-confidence
    ├── disagreement-and-conflicts
    └── vault-and-vocabulary-boundaries
```

## 1. Establish the documentation framework

- [x] Create the `start`, `how-to`, `reference`, and `concepts` content groups.
- [x] Define templates for the documentation home, tutorial, how-to, reference,
      and concept pages.
- [x] Add breadcrumbs and section navigation for the reference section.
- [x] Add compact `Related` and `Next` link components to the shared docs layout.
- [x] Support page descriptions, stable heading anchors, and active navigation in the shared docs layout.
- [x] Keep unfinished pages out of published navigation.

## 2. Implement reference material

Reference is implemented first because all other modes depend on it. Verify all
statements against actual product behavior before treating a page as complete.

### Capture syntax

- [x] Document subject-predicate-object grammar.
- [x] Document sources, evidence, statuses, confidence, and tags.
- [x] Document unknown values and quoting.
- [x] State defaults, valid ranges, and optional versus required components.
- [x] Document multiple tags and validation behavior.
- [x] Provide representative examples.

### Query syntax

- [x] Document three-position patterns and wildcards.
- [x] Document exact values and quoting.
- [x] Document available filters and filter combinations.
- [x] Describe match behavior and empty/all-assertions queries.
- [x] Provide representative examples with expected matches.

### Assertion fields

- [x] Provide an authoritative field table.
- [x] State whether each field is required.
- [x] State defaults, valid values, and precise meanings.
- [x] Verify source requirements and documented validation rules in the product.

### Assertion statuses

- [x] Document every status and its intended meaning.
- [x] Document verified behavioral effects on defaults, filtering, and review.
- [x] Describe transition guidance and the absence of a fixed workflow.
- [x] Explain how status changes are preserved in history.

### Predicate settings

- [x] Document cardinality, uniqueness, collection semantics, value type, and conflict predicates.
- [x] Explain how the constraint settings affect storage and conflict detection.
- [x] Include safe definitions and permitted schema transitions.
- [x] Warn about changing predicate semantics in an established vault.

### Vaults

- [x] Document the file format and stored contents.
- [x] Document active-vault behavior and recent-vault tracking.
- [x] Document backup requirements.
- [x] Distinguish display names from paths.
- [x] Document MCP path behavior and relevant limitations.

### Keyboard shortcuts

- [x] Provide compact, platform-aware tables organized by scope.

## 3. Implement conceptual guides

Keep each guide focused enough to read in roughly five minutes. Link technical
terms to reference instead of restating their complete definitions.

### Assertions are not facts

- [x] Explain why a claim belongs to a source and a moment.
- [x] Explain the value of correct, false, stale, partial, and disputed claims.
- [x] Explain why Claimframe records assertions rather than silently selecting
      one truth.
- [x] Explain when to record a new claim instead of editing an old one.

### Modeling good claims

- [x] Replace the empty `Making good models` placeholder.
- [x] Explain stable subjects and clear, consistent predicates.
- [x] Recommend one relationship or property per assertion.
- [x] Explain how to preserve a source's meaning without unnecessary wording.
- [x] Explain useful evidence locators and deliberate unknown values.
- [x] Warn against encoding confidence or time into entity names.
- [x] Include at least three good-versus-weak examples.

### Provenance, evidence, confidence, and status

- [x] Explain the distinct question answered by each dimension.
- [x] Include source, evidence locator, confidence, status, and capture method.
- [x] Link each dimension to its reference entry.

### Disagreement and conflicts

- [x] Explain structural conflict, explicit dispute, explicit contradiction,
      and disputed status.
- [x] Explain why these mechanisms are related but not interchangeable.
- [x] Explain why deleting a losing claim damages the record.

### Vault and vocabulary boundaries

- [x] Explain when to split or combine vaults.
- [x] Discuss the costs of splitting and combining context.
- [x] Explain what vocabulary adoption provides.
- [x] Explain namespaces and collision handling.
- [x] Explain why vocabularies do not replace local knowledge.

## 4. Implement the tutorial

Create one controlled tutorial titled **Create your first sourced claim**.

- [x] State installation and startup prerequisites.
- [x] Create a disposable tutorial vault.
- [x] Capture two predetermined sourced claims.
- [x] Query for the claims.
- [x] Inspect provenance.
- [x] Introduce and review a disagreement.
- [x] Update a claim's review state.
- [x] Save the query.
- [x] Show the exact final result the learner should have.
- [x] Explain safe cleanup.
- [x] Link optional detail to capture syntax, assertion concepts, and statuses.
- [x] Test the tutorial from a clean installation without requiring another
      page to complete it.

Every tutorial step must contain one exact action, exact sample input where
applicable, and the visible result to expect. Keep extended explanation out of
the tutorial path.

## 5. Implement how-to guides

Each page represents one recognizable user intention. Closely related lifecycle
actions may share a page. Target 150-400 words, three to seven primary steps,
and no more than three related links.

### Manage a vault

- [x] Create a vault.
- [x] Open or switch vaults.
- [x] Back up the vault file safely.
- [x] Rename its display name.
- [x] Confirm which vault is active.
- [x] Link to the vault reference.

### Record facts by hand

- [x] Enter a subject-predicate-object claim.
- [x] Attach source and evidence.
- [x] Add optional metadata.
- [x] Confirm the captured result.
- [x] Correct a transcription mistake.
- [x] Link to capture syntax, assertion fields, and modeling good claims.

### Capture claims from a source

- [x] Import transcript text or a file.
- [x] Preview speaker segments.
- [x] Move candidates to Claim Review.
- [x] Edit candidates.
- [x] Accept, defer, or reject candidates.
- [x] Link to assertion fields and the provenance concept.

### Find facts and save a query

- [x] Run a query.
- [x] Narrow results with filters.
- [x] Pivot from an assertion value.
- [x] Save a useful query.
- [x] Run, rename, or delete saved queries.
- [x] Link to query syntax.
- [x] Include exporting results here if export does not warrant its own page.

### Inspect provenance

- [x] Open the provenance inspector.
- [x] Review source, evidence locator, confidence, status, and capture method.
- [x] Review event history.
- [x] Copy a citation.
- [x] Link to assertion fields and the provenance concept.

### Explore related claims in the graph

- [x] Start with a focused query.
- [x] Open Graph Recall.
- [x] Select a node or edge.
- [x] Add inbound or outbound relationships.
- [x] Reduce a busy graph with filters.
- [x] Arrange the working graph.
- [x] Link to query syntax.

### Export claims

- [x] Decide whether export has enough choices, behavior, or caveats for a
      separate page.
- [x] Cover export briefly in `Find facts and save a query`; it does not warrant a
      separate page in the current product.

### Resolve disagreement

- [x] Review a conflict group.
- [x] Compare provenance and exact wording.
- [x] Correct transcription mistakes without rewriting history.
- [x] Record a dispute or contradiction.
- [x] Update each assertion's status.
- [x] Preserve superseded or rejected claims.
- [x] Link to statuses, predicate settings, and the disagreement concept.

### Manage a vocabulary

- [x] Browse supplied vocabularies or import a `.cfvocab` package.
- [x] Review metadata, included content, and name collisions.
- [x] Adopt selected terms, predicates, and general knowledge.
- [x] Confirm adopted terms are available.
- [x] Undo an unused adoption.
- [x] Handle dependency and duplicate-release blocks.
- [x] Link to vault and vocabulary boundaries.

### S-tier how-to quality gate

Every how-to page must:

- [x] Address one recognizable user goal.
- [x] State the outcome at the beginning.
- [x] Contain no more than seven primary steps.
- [x] Explain how to confirm success.
- [x] Include material warnings before risky actions.
- [x] Cover the most likely failure case or variation.
- [x] Link technical detail instead of duplicating reference.
- [x] Use terminology that exactly matches the interface.
- [x] Work independently when opened from search.
- [x] Be tested against the supported product release.

## 6. Build the documentation landing page

Implement `/guide/` after its destination pages exist. It is a routing page, not
a comprehensive guide.

- [x] Add a `Get started` entry linking to the tutorial.
- [x] Show no more than six common tasks: manage a vault, record facts by hand,
      capture from a source, query and save, inspect provenance, and resolve
      disagreement.
- [x] Add a secondary `View all how-to guides` link.
- [x] Show capture syntax, query syntax, statuses, and shortcuts under
      `Look something up`.
- [x] Show assertions, modeling, and disagreement under `Understand Claimframe`.
- [x] Keep the complete documentation index visually secondary.

## 7. Add intentional cross-linking

- [x] Give each how-to at most one relevant reference link, one relevant concept
      link, and one likely next task.
- [x] Give the tutorial a single recommended next action.
- [x] Let reference pages link to all directly applicable how-to guides.
- [x] Avoid indiscriminate and circular related-link lists.

## 8. Migrate and retire the current monolithic guide

- [x] Move vault procedures to `Manage a vault`.
- [x] Move vocabulary procedures to `Manage a vocabulary`.
- [x] Move capture grammar to `Capture syntax`.
- [x] Move direct capture procedure to `Record facts by hand`.
- [x] Move query grammar to `Query syntax`.
- [x] Move query procedure to `Find facts and save a query`.
- [x] Move recall material to provenance and graph how-to guides.
- [x] Move reconciliation procedure to `Resolve disagreement`.
- [x] Move the status list to `Assertion statuses`.
- [x] Move conceptual introductions to the relevant conceptual guides.
- [x] Replace the empty `Making good models` section with its concept page.
- [x] Replace the monolithic guide with the new landing page.
- [x] Retire the old fragment-only navigation. URL fragments cannot be redirected
      independently by the static host; the parent `/guide/` URL remains valid
      and now routes readers to the documentation home.
- [x] Remove duplication once all material has a canonical home.

## 9. Verify the complete documentation system

### Product accuracy

- [x] Check UI names, defaults, constraints, and workflows against the release.
- [x] Test every input example, shortcut, and documented action.
- [x] Confirm platform differences.

### Diataxis separation

- [x] Tutorials teach through a controlled experience.
- [x] How-to guides direct real work.
- [x] Reference describes without becoming procedural.
- [x] Concepts explain without turning into instructions.

### Reader-load review

- [x] No how-to exceeds one primary goal.
- [x] No prominent navigation group presents more than six choices.
- [x] Long tables appear only in reference.
- [x] Optional details are linked rather than expanded inline.
- [x] Screenshots are used only where they materially improve orientation.

### Link and presentation QA

- [x] Validate internal links and heading anchors.
- [x] Test narrow and wide layouts.
- [x] Confirm breadcrumbs and active navigation.
- [x] Verify page titles and descriptions for search.
- [x] Check code, keyboard, table, callout, and print rendering.

## Completion criteria

- [x] Every how-to links to authoritative reference instead of redefining terms.
- [x] The tutorial succeeds from a clean starting state.
- [x] No placeholder or empty page appears in navigation.
- [x] Every passage in the current guide has been migrated or intentionally
      removed.
- [x] All internal links pass validation.
- [x] Tutorial material grades B or better.
- [x] How-to material grades S.
- [x] Reference material grades B or better.
- [x] Explanation material grades B or better.
