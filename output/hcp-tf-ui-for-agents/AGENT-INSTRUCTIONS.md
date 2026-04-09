# Agent Instructions: Using HCP Terraform UI Documentation

This document provides guidance for AI agents on how to effectively use the HCP Terraform UI documentation for design collaboration, feature planning, and UI/UX questions.

## Overview

This repository contains ~24 markdown files in the `pages/` folder documenting the complete HCP Terraform web UI. Each file describes a specific page with:
- URL patterns and routing
- Visual layouts with ASCII diagrams
- Functional zones and their purposes
- Clickable elements and navigation flows
- UI patterns and components
- Data structures and field definitions
- Extensibility points for new features

## Quick Start

### Initial Context Loading

When a user asks about HCP Terraform UI, load files in this order:

1. **Start with orientation** (always):
   - Load `quick-reference.md` for URL → page mappings
   - This gives you the navigation structure and common patterns

2. **Add relevant page context** (as needed):
   - If user mentions a specific URL or page name, load that page's `.md` file from `pages/`
   - If user asks about a feature area (e.g., "workspaces"), load all `pages/workspace-*.md` files
   - If user asks about layout/structure, load `pages/_index.md` for the global overview

### Example Loading Strategies

**User asks: "Where do I manage workspace variables?"**
```
→ Load: quick-reference.md (find the page)
→ Load: pages/workspace-variables.md (get details)
→ Answer with specifics from the documentation
```

**User asks: "How does the run detail page work?"**
```
→ Load: pages/workspace-run-detail.md
→ Reference: Layout section, Zones section, Clickable elements
→ Answer with page structure and functionality
```

**User asks: "Where should a new drift notification feature go?"**
```
→ Load: pages/workspace-health.md (existing drift page)
→ Load: pages/workspace-overview.md (dashboard context)
→ Review: Zones with extensibility notes
→ Suggest: Specific zone placement with rationale
```

## Understanding the Documentation Structure

### Page File Anatomy

Each page file follows this structure:

```markdown
# Page Name

**URL**: `/app/{org}/...`
**Purpose**: What this page does

## Layout
[ASCII diagram of the page structure]

## Zones
[Detailed zone descriptions with extensibility notes]

## Patterns
[Reusable UI components and structures]

## Clickable Elements
[Navigation mapping: what goes where when clicked]

## Data Structures
[Field definitions and data formats]
```

### Key Sections to Reference

| Section | Use When |
|---------|----------|
| **URL** | User provides a URL and wants to know what page it is |
| **Layout** | User asks about visual structure or where elements are positioned |
| **Zones** | User asks about functional areas or where to add new features |
| **Patterns** | User asks about UI components (tabs, filters, status pills, etc.) |
| **Clickable Elements** | User asks about navigation or "what happens when I click X?" |
| **Data Structures** | User asks about form fields, filters, or data displayed |

### Interpreting Layout Diagrams

Layout diagrams use ASCII art to show visual structure:

```
┌─────────────────────────────────────────────────────────────┐
│ HEADER: Logo | OrgSwitcher | Help | UserMenu                │  ← Global header (on all pages)
├───────────┬─────────────────────────────────────────────────┤
│           │ BREADCRUMB: {org} / Workspaces / {ws}           │  ← Shows current location
│ SIDEBAR   ├─────────────────────────────────────────────────┤
│           │ PAGE_TITLE + ACTIONS                            │  ← Page-specific title and buttons
│           ├─────────────────────────────────────────────────┤
│           │ CONTENT_AREA                                    │  ← Main functional area
│           │                                                 │
└───────────┴─────────────────────────────────────────────────┘
```

**Key elements:**
- `HEADER` = Always visible global navigation
- `SIDEBAR` = Context-specific navigation (changes by org/workspace)
- `BREADCRUMB` = Shows current page hierarchy
- `PAGE_TITLE + ACTIONS` = Page name + primary action buttons
- `CONTENT_AREA` = Where the main UI lives (tables, forms, cards, etc.)

### Understanding Zones

Zones describe functional areas of a page. Look for:

**Extensibility notes:**
```markdown
**Extensibility**:
- Add new tabs here for future workspace-level features
- Consider adding quick filters above the table
```
These tell you where new features can naturally fit into the existing UI.

**Purpose statements:**
```markdown
**Purpose**: Displays workspace status, latest run, and resource summary
```
These help you understand if a new feature belongs on this page.

## Common Agent Tasks

### Task 1: Finding a Page by URL

**User says:** "What page is `/app/my-org/workspaces/my-ws/runs/run-abc123`?"

**Process:**
1. Load `quick-reference.md`
2. Match URL pattern: `/app/{org}/workspaces/{ws}/runs/{run}`
3. Find page: "Run Detail"
4. Load `pages/workspace-run-detail.md` for details

### Task 2: Recommending Where a New Feature Should Go

**User says:** "Where should we add a cost estimation chart for workspaces?"

**Process:**
1. Identify context: "workspace" → workspace-level feature
2. Load `pages/workspace-overview.md` (dashboard is common place for summaries)
3. Load `pages/workspace-runs.md` (runs show cost estimation data)
4. Review zones with extensibility notes
5. Recommend specific zone with rationale:
   - "Add to the Overview Stats Zone on pages/workspace-overview.md"
   - "Place after Resources Card, before Latest Run Card"
   - "Rationale: Overview is the natural place for high-level metrics"

### Task 3: Explaining UI Navigation

**User says:** "How do I get from the workspaces list to a specific run?"

**Process:**
1. Load `pages/workspaces-list.md` → find "Clickable Elements" section
2. See: Workspace name → workspace-overview.md
3. Load `pages/workspace-overview.md` → find "Clickable Elements" section
4. See: Latest run card → workspace-run-detail.md
5. Answer: "Click workspace name → click latest run card or 'See details'"

### Task 4: Identifying UI Patterns

**User says:** "How does TFC show status for workspaces?"

**Process:**
1. Load `pages/workspaces-list.md`
2. Find "Patterns" section
3. Look for "Status Pill" pattern:
   ```
   Pattern: Status Pill
   Usage: Clickable status indicators that also act as filters
   Example: "⚠ 20 Errored" - shows count and allows filtering
   ```
4. Answer with pattern details and where else it's used

## Best Practices

### DO:

✓ **Always load `quick-reference.md` first** for orientation
✓ **Load relevant page files** before answering specific questions
✓ **Reference specific sections** ("According to the Zones section of workspace-overview.md...")
✓ **Quote extensibility notes** when recommending new feature placement
✓ **Use URL patterns** from the docs when explaining navigation
✓ **Mention multiple relevant pages** if a feature spans areas

### DON'T:

✗ **Don't guess** page structures without loading the docs
✗ **Don't invent** UI patterns that aren't documented
✗ **Don't recommend** feature placement without checking extensibility notes
✗ **Don't ignore** navigation hierarchy when explaining flows
✗ **Don't load** all files at once—be strategic based on the question

## File Categories

### Essential Reference
- `quick-reference.md` - Load first for URL mappings and patterns
- `pages/_index.md` - Load for overall navigation structure

### Workspace Features (Most Common)
- `pages/workspaces-list.md` - Entry point for all workspace work
- `pages/workspace-overview.md` - Dashboard view (most visited page)
- `pages/workspace-runs.md` - Run history
- `pages/workspace-run-detail.md` - Individual run details
- `pages/workspace-variables.md` - Variable management
- `pages/workspace-settings.md` - Configuration
- `pages/workspace-health.md` - Drift detection and continuous validation

### Organization Features
- `pages/organizations-list.md` - Org selection (entry point)
- `pages/projects-list.md` - Project management
- `pages/org-settings.md` - Org configuration
- `pages/usage.md` - Billing and usage stats

### Registry Features
- `pages/registry-modules.md` - Module browser
- `pages/registry-providers.md` - Provider browser
- `pages/registry-design.md` - Config designer wizard

### Other
- `pages/explorer.md` - Org-wide data queries
- `pages/stacks-list.md` - Stacks (Terraform Stacks feature)

## Handling Ambiguous Requests

When a user's request is ambiguous, use these strategies:

**"Where should this feature go?"**
→ Ask clarifying questions:
- "Is this a workspace-level or organization-level feature?"
- "Should this be always visible or accessed via navigation?"
- "Does this relate to runs, resources, or configuration?"

**"How does X work?"**
→ Load relevant page and synthesize:
- Layout (visual structure)
- Zones (functional areas)
- Clickable elements (interactions)
- Patterns (UI components used)

**"Can I do Y in TFC?"**
→ Search across files:
- Check quick-reference.md for relevant pages
- Load those pages and look for matching functionality
- If not found, say "Not documented in current UI" (don't guess)

## Response Format

Structure your answers like this:

```markdown
[Brief direct answer]

**Page**: [Page name] (`[filename].md`)
**URL**: `/app/{org}/...`

[Detailed explanation referencing specific sections of the docs]

[If relevant: Layout diagram excerpt or zone description]

[If recommending placement: Quote extensibility notes and provide rationale]
```

Example:
```markdown
The workspace variables are managed on the **Variables** page.

**Page**: Variables (`pages/workspace-variables.md`)
**URL**: `/app/{org}/workspaces/{ws}/variables`

This page shows both Terraform variables and environment variables in a tabbed interface. According to the Zones section, the page includes:

- **Tab Group**: Switches between Terraform Variables and Environment Variables
- **Variables Table**: Lists all variables with name, value, category, and actions
- **Action Buttons**: "Add variable" button to create new variables

To access: Navigate to your workspace → click "Variables" in the sidebar.
```

## When to Load Multiple Files

Load multiple files when:

1. **Feature spans multiple pages**
   - Example: "How do runs work?" → Load pages/workspace-runs.md + pages/workspace-run-detail.md

2. **Comparing patterns across contexts**
   - Example: "How are lists displayed?" → Load pages/workspaces-list.md + pages/projects-list.md + pages/registry-modules.md

3. **Understanding navigation flow**
   - Example: "User journey from org selection to viewing a run"
   - Load: pages/organizations-list.md → pages/workspaces-list.md → pages/workspace-overview.md → pages/workspace-run-detail.md

4. **Recommending feature placement**
   - Load similar pages to see patterns and extensibility notes
   - Example: Adding a new health feature → Load pages/workspace-health.md + pages/workspace-overview.md

## Summary

**Key principle**: This documentation is designed for reference, not memorization. Always load the relevant files before answering specific questions about layouts, navigation, or feature placement.

**Efficiency tip**: Start with `quick-reference.md`, then load only the specific page files you need based on the user's question.

**Accuracy tip**: Quote directly from the documentation when possible, especially for extensibility recommendations and navigation patterns.
