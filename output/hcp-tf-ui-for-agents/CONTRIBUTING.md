# Contributing to HCP Terraform UI Reference

Thank you for your interest in improving this design reference. This document provides guidelines for contributions.

## Types of Contributions

### Adding a New Page

1. Create a new `.md` file following the naming convention:
   - List pages: `{thing}s-list.md`
   - Detail pages: `{thing}-detail.md` or `{thing}-{subpage}.md`

2. Include all required sections:

```markdown
# Page Title

**URL**: `/app/{org}/path/to/page`
**Title**: Page Title
**Purpose**: Brief description of what this page does

## Layout

[ASCII diagram of the page layout]

## Zones

| Zone | Purpose | Contents | Extensibility |
|------|---------|----------|---------------|
| ZONE_NAME | What it does | What's in it | Where new items go |

## Patterns

| Pattern | Structure | Example | Used For |
|---------|-----------|---------|----------|
| Pattern Name | How it's structured | Concrete example | When to use it |

## Clickable Elements

| Element | Location | Destination | File |
|---------|----------|-------------|------|
| Element name | Which zone | Where it goes | Which .md file |
```

3. Update `_index.md` to include the new page
4. Update `README.md` page index table

### Updating Existing Pages

- Keep the existing section structure
- Update the relevant tables with new information
- Ensure clickable elements map to valid destinations
- Note any new patterns in the Patterns table

### ASCII Layout Guidelines

- Use box-drawing characters for clean diagrams
- Label zones in ALL_CAPS
- Show hierarchical relationships with indentation
- Include the standard HEADER, SIDEBAR, and FOOTER zones
- Show content areas relevant to the specific page

Example structure:
```
┌─────────────────────────────────────────────────────────────┐
│ HEADER: Logo | OrgSwitcher | Help | UserMenu                │
├───────────┬─────────────────────────────────────────────────┤
│ SIDEBAR   │ BREADCRUMB                                      │
│           ├─────────────────────────────────────────────────┤
│           │ PAGE_SPECIFIC_CONTENT                           │
├───────────┴─────────────────────────────────────────────────┤
│ FOOTER: Support | Terms | Privacy | Security                │
└─────────────────────────────────────────────────────────────┘
```

## Zone Documentation

Each zone should specify:

| Field | Description |
|-------|-------------|
| Zone | Zone name (ALL_CAPS) |
| Purpose | What this area is for |
| Contents | What elements appear here |
| Extensibility | Where new items would be added |

## Pattern Documentation

Patterns capture reusable UI conventions:

| Field | Description |
|-------|-------------|
| Pattern | Name of the pattern |
| Structure | Template showing structure |
| Example | Real example from the UI |
| Used For | When to apply this pattern |

Common patterns include:
- Copyable ID
- Status Badge
- Action Button
- Card Section
- Empty State
- Tab Group
- Detail Row

## Pull Request Process

1. Fork the repository
2. Create a branch for your changes
3. Make your changes following the guidelines above
4. Ensure all internal links are valid
5. Submit a pull request with a clear description

## Questions

Open an issue for questions about:
- Where a feature should be documented
- Clarification on existing documentation
- Suggestions for new patterns or conventions
