Meeting Notes

“Can we also add a thought exercise here of if it would make sense to bring these things into the same UI vs keeping them separate?” - Mary Clarke
Next Steps: QA w/ leadership to determine hypothesis. Then a thought exercise workshop (TF Search, IG, Explorer View).
Primary people to include in workshop:
	•	Core People: PD’s (me + rep’s for TFE Search and IG).
	•	Prod Management / Prod Owner for each area.
	•	Eng Partner (tech lead or Sr. SWE / EM).
	•	UXR (research insights).
Secondary people to include in workshop (only in kickoff, and then at the end):
	•	Customer support/success/sales/solutions - to give real insights into pain points and edge cases.
	•	Biz / Strategy – stakeholders/leader(ship) with decision power (Director et al.)
	•	Determine problem framing 
	•	“Should Infragraph, Explorer View and TFE Search live under one UI”
	•	What kind of decision is this (exploratory, directional, commitment)?
	•	What does “combine” actually mean (shared nav, single entry point, fully merged interaction model)?
	•	Determine User/JTBD clarity by collecting:
	•	Primary user types for each surface (Who uses Infragraph, who uses Explorer View, who uses TFE Search)
	•	Core jobs/tasks each surface supports
	•	Known overlaps vs distinct use cases
	•	Any evidence of users moving between these tools today
	•	CORE QUESTION: DO USERS THINK OF THIS AS ONE JOB OR THREE?
	•	High-level journey sketch or 2-3 real user quotes from previous UXR (helpful but not necessary at this stage).
	•	Current-State understanding of each individual surface.
	•	One-pager for each Surface (purpose/value proposition, entry points, key interactions, what the [thing] does well, known pain points/confusion).
	•	Terminology differences that could cause friction.
	•	Technical/Product constraints.
	•	Know/Clarify: 
	•	Are these backed by the same or different data models?
	•	Is search fundamentally different from graph exploration?
	•	Performance or scale constraints that affect unification
	•	Any near‑term roadmap commitments that limit change
	•	This will prevent a “great idea but It’s impossible to ship” or worse, “We decided to merge and discovered the cost too late”.
	•	
	•	Decision criteria (how we’ll judge “combine” vs “separate”)
	•	Define 4–6 criteria up front (Improves user mental model, reduces cognitive load, supports future feature growth, minimizes navigation friction, aligns with platform strategy, and is technically sustainable).
	•	Make it explicit: This workshop is about evaluating tradeoffs, not designing the final UI.
	•	Ownership & Authority clarity - Before starting we need to answer these Q’s - 
	•	Who owns the “final decision”
	•	Are we advising, or are we making a big decision?
	•	What happens because of the workshop?

Skyway Merge Workshop Leadership Q's
Skyway Merge Pre-Work Q Answers.docx
Skyway Merge Workshop Pre-Read (w/ Summary of problem space)
Skyway Merge Workshop Agenda
Slack private channel: Skyway

Reference Material: https://docs.google.com/document/d/1EQ7a8RRWVlDS1hKvFY8XCVaDCT_M_YxQIkfBHVM_-Hk/edit?usp=sharing


3/10/26 Kickoff ( @Marisa Chan  @Liz Chen  @Ange Kaplan-Chambers  )
	•	Previously, there was interest in search (which lives in workspace layer) helping to track unmanaged resources (on Org layer) - but was shut down due to technical constraints.
	•	Search+import is now combined under one managed umbrella.
	•	Infra potentially moved from HCP to TF (one suite). Unsure of timeline. Just an idea for now.
	•	Next Steps: Liz will invite us to the Org in HCP so we can play with IG.


-------------------------------------------------
Skyway Initiative
A Cross‑Product Alignment and Experience Strategy
Products involved: Explorer, TFE Search, Project Infragraph.

Purpose of the Skyway Initiative
The Skyway Initiative works to ensure deliberate alignment and cohesion across Explorer, Terraform Enterprise Search (TFE Search), and Project Infragraph, addressing concerns regarding overlapping scope and potentially fragmented user experiences. This initiative supports a continuous alignment effort to respect product independence while ensuring cohesion in shared workflows and integration points.

Problems Skyway Addresses
Need for clear product boundaries between Explorer, Search, and Infragraph.
Need for a unified Brand identity to prevent duplicated engineering and ensure a single import workflow across all surfaces. 
Need for cross-product CUJs and aligned integration requirements.
Need for higher-quality, marketable releases (MMP instead of MVP).
Fear of overlapping user experience across Explorer, TFE Search, and Infragraph.

What is Skyway?
Skyway is a structured initiative that establishes:
	•	Clear product boundaries so that Explorer, Search, and Infragraph do not duplicate or compete.
	•	Shared UX workflow patterns to enable cross-product discovery and deep-linking efforts.
	•	A recurring alignment rhythm across design, PM, and engineering.
	•	Allows these Products to evolve independently while delivering a cohesive experience.

Pillars of the Skyway Initiative
Pillar 1: Product Boundary Clarity Define and document the intended role of each product, so teams understand where scope begins and ends.
Explorer: reporting and Workspace-level insight.
TFE Search: Resource discovery and quick navigation.
Infragraph: broad metadata context across Organizations, Providers, and Resources.

Pillar 2: Unified Brand Identity Layer Skyway homes and owns this identity standard. This is critical to prevent redundant engineering and to support the unified Terraform import workflow.

Pillar 3. Consistent Cross‑Product Workflows Shared patterns that define how users jump between Explorer, Search, and Infragraph. This mitigates UX overlap and fragmentation.
Examples include:
	•	Standardized deep linking (Level 1 integration).
	•	Bidirectional recommendations (Level 2 integration).
	•	Context preservation across surfaces.

Pillar 4. Monthly Alignment Participants are product design representatives for Explorer View, TFE Search and Infragraph. This creates cohesive visibility across the three surfaces.
Purpose: Share upcoming work, surface overlap risks early, maintain shared UX patterns, and escalate to EPDs as-needed.

‏Pillar 5. Product Management Sync PM’s should stay in regular conversation, to advise on escalation paths to EPDs across Explorer, Search, and Infragraph.

‏Operating Model
‏Monthly Alignment to include standing monthly meetings across the three areas. 
‏Living documentation in a shared space focusing on product boundary definitions, workflow patterns, and UX conventions for cross-tool navigation. AI tooling will act as a supplemental support for pattern recognition.
‏Structured escalation supports where designers identify overlap risks and confer with their EPD to identify potential scoping or roadmap risks.

‏Intended Outcome Support leadership visibility into how the three surfaces relate without forcing them into a single product.
‏Skyway ensures:
‏	•	No unintentional overlap between Explorer, Search, and Infragraph.
‏	•	No duplicated engineering efforts around import or identity models.
‏	•	Higher quality releases aligned with the MMP (Minimum Marketable Product) .
‏	•	Cohesive UX patterns across all surfaces.
‏	•	Predictable cross-product alignment rhythms.
‏	•	Enabling clear lines of EPD communication.

‏Meeting Talking Points
‏Why We Are Meeting
‏Skyway brings Explorer, TFE Search, and Infragraph together to address concerns about overlapping scope and fragmented experiences. This is our first step in creating an ongoing, structured alignment rhythm across our three surfaces. 
‏What We Are Solving
‏We need clear product boundaries between Explorer, Search, and Infragraph to prevent duplication and confusion.
‏There is a specific concern that Explorer and TFE Search have the highest overlap risk, which this group will help monitor.
‏We need a unified brand identity model.
‏What Skyway Is
‏Skyway is a structured initiative that defines shared workflows, identity models, and product boundaries across our three surfaces.
‏How We Will Work Together
‏Monthly alignment meetings will serve as our main collaboration space to share work, surface risks, and maintain cohesion.
‏We will maintain shared documentation that outlines boundaries, workflows, and UX conventions across Explorer, Search, and Infragraph.
‏Designers will identify overlap risks early and escalate them through our EPD partners when needed. 
‏Expected Outcomes
‏Clearer role definitions for all three products.
‏Limited duplicate engineering efforts.
‏A more cohesive user experience across all surfaces.
‏Higher quality releases that match the Minimum Marketable Product standard.
‏Predictable communication paths between design, product, and engineering.








