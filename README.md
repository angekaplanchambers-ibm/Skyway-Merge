# Pocket Product Designer (PPD)

Pocket Product Designer is an agent-first workspace that turns meeting transcripts into design artifacts and a reviewable UI showcase.

Core flow:

Transcript -> Meeting Notes -> Strategy -> Journey Map -> PDR Chain -> Wireframe Stories -> Showcase HTML

## What this repo is for

Use this repo when you want to move from raw discussion to concrete product design output with traceability.

It is built for:
- Product designers
- PMs and design leads
- Platform or product teams that need reviewable design artifacts

It is not a generic starter app. It is a guided design-production pipeline.

## Agent-first usage model

This project is meant to be used through an AI coding and design agent.

High-level onboarding flow:
1. Install an agent environment that can read repository instructions.
2. Download this repository and open it as the active workspace.
3. Run the repository setup once.
4. Ask the agent to read the repo and onboard you to PPD.
5. Start with a transcript or an existing set of meeting notes.

If you are onboarding someone new, this single prompt is enough:

"Read this repo and onboard me to PPD."

## New setup guide: VS Code + OpenCode + GitHub Copilot

Use this if you are setting up from scratch.

1. Request GitHub Copilot access (auto-approved):
   - https://next.doormat.hashicorp.services/catalog/corporate-apps/access/github/access/github-copilot-users/new

2. Install Homebrew (if you do not already have it):

   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

3. Install OpenCode:

   ```bash
   brew install anomalyco/tap/opencode
   ```

4. Start OpenCode in terminal:

   ```bash
   opencode
   ```

5. Connect OpenCode to GitHub Copilot:
   - Run `/connect`
   - Select `GitHub Copilot`
   - Follow the device auth flow (open the GitHub device page and enter the code shown in terminal)

6. Select a model:
   - Run `/models`
   - Pick a GitHub model

7. Start working in this repo:
   - Open this folder in terminal
   - Run `opencode`
   - Ask: `Read this repo and onboard me to PPD.`

8. Optional VS Code workflow:
   - Open this repo in VS Code
   - Use the integrated terminal to run `opencode` in the repo folder
   - Keep OpenCode running in that terminal while you edit files in VS Code

Notes:
- If terminal theming looks off in your default terminal, try Ghostty or the VS Code integrated terminal.
- Video walkthrough: https://youtu.be/e9j2iEwJru0?si=F1PhuljW_bqyRcZF
- The second half of the video goes deeper than required for first-time setup.

## How to work with the agent

Use natural-language requests that map to pipeline stages.

Typical prompts:
- "Here is a transcript from a meeting"
- "Synthesize these meetings"
- "Build a journey map for [CUJ]"
- "Write PDR-001 for [topic]"
- "Build stories for [wireframe]"
- "Build a showcase for [feature]"

The agent should produce the next valid artifact and keep dependencies intact.

## Pipeline stages

### 1) Meeting Notes
Input: transcript

Output:
- TL;DR
- key discussion points
- decisions and action items
- open questions
- full raw transcript preserved

### 2) Strategy Synthesis
Input: two or more related meeting notes

Output:
- scope boundaries (in and out)
- personas grounded in real roles
- critical user journeys (CUJs)
- technical context
- downstream deliverables plan

### 3) Journey Map
Input: strategy document with CUJs

Output:
- full 10-stage journey
- persona actions by stage
- touchpoints, system calls, data in and out
- failure modes and durations

### 4) PDR Chain
Input: completed journey map

Output sequence:
- PDR-001 Architecture
- PDR-002 Scenario
- PDR-003 JourneyMap Data Contracts
- PDR-004 Wireframe Plan

Each PDR depends on the prior artifact. No circular dependencies.

### 5) Storybook Wireframes
Input: PDR-004

Output:
- wireframe story files
- fixture data files
- one story set per component and view in the plan

### 6) Showcase Build
Input: completed wireframe stories

Output:
- single-file HTML showcase suitable for review

## Repository map (human view)

- `example/` - complete reference project from notes to showcase
- `templates/` - source templates for each artifact type
- `skill/` - skills and reference methods
- `storybook/` - wireframe stories and tokens
- `showcase/` - assembled narrative showcase
- `output/` - generated artifacts and final HTML outputs

## Skills included

- `hashi-designer` - personas, JTBD, CUJs, OOUX, journey and wireframe structure
- `microinteractions-expert` - trigger, feedback, timing, validation, and recovery behavior
- `commit` - focused conventional commit workflow
- `helios-design-system` - design system references for UI implementation and accessibility

## Where new work should be written

Write zones:
- `output/`
- `storybook/stories/`
- `showcase/showcases/`

Everything else should be treated as source or reference material.

## Quality gates (what done means)

An artifact is done only when its gate passes:

- Meeting Notes: decisions fully captured, attendees complete, transcript preserved.
- Strategy: CUJs are specific and grounded, scope is explicit.
- Journey Map: all stages complete, technically grounded, no placeholder cells.
- PDR-001: architecture and rollback model are explicit.
- PDR-002: stage script includes concrete operator action and agent response.
- PDR-003: data contracts, state machine, service map, and timing budget are complete.
- PDR-004: file manifest, fixtures, story specs, and QA checklist are complete.
- Stories: all planned stories render cleanly.
- Showcase: final HTML works as a standalone artifact.

## Naming convention for generated docs

Generated artifact filenames follow this pattern:

`{NNN}.{YY}.{MM}.{DD}.{Slug}`

This keeps chronology and dependencies readable.

## Suggested onboarding path for a new teammate

1. Ask the agent to onboard you to the repo.
2. Read the `example/` artifacts in pipeline order.
3. Ask the agent to explain how each artifact depends on the previous one.
4. Give the agent one short transcript and ask it to generate Stage 1 output.
5. Continue through Stage 4 (PDR-001) before creating stories.
6. Build one end-to-end mini showcase.

Outcome target: produce one complete artifact chain from transcript to standalone HTML without breaking dependency order.
