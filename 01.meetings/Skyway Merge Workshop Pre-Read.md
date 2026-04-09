Exploring a Unified UI for TFE Search, Explorer View, and Infragraph

Mural: https://app.mural.co/t/ilmtf3743/m/ilmtf3743/1774286932502/d19565637347799b2f8d049b31f5231de605c3a0?sender=u00f753ed733bd81d10cf0893

Why this workshop exploration, and why now?
As Terraform evolves toward a more consolidated platform experience (including the transition from HCP to MCSP), conversations have surfaced about where Infragraph should live within the Terraform UI. If Infragraph is introduced alongside Explorer View and TFE Search, we risk presenting users with multiple, overlapping ways to find, view, and act on their infrastructure.
While no explicit customer escalation or metric triggered this discussion, leadership anticipates future user confusion around:
	•	“Where do I go to do this?”
	•	“What’s the difference between Search, Explorer, and Infragraph?”
This exploration is intentionally design‑led and proactive. The goal is not to pre‑empt a platform decision, but to ensure we have a clear design point of view ready when consolidation decisions are made.
This is a thought exercise, not a commitment to build.

The core question
Does it make sense to bring TFE Search, Explorer View, and Infragraph into a single, unified UI; or are users better served by keeping them separate?
“Unified” may mean different things:
	•	A single entry point
	•	Shared workflows and mental models
	•	Or a fully unified interaction model
Clarifying what kind of unification (if any) actually benefits users is a key outcome of this work.

Leadership intent & expectations
From leadership discussions, several points are clear:
What success looks like:
	•	Greater platform clarity for both internal teams and external users
	•	Reduced cognitive load and ambiguity around where to go for common tasks
	•	Improved power‑user efficiency, not just beginner usability
	•	A compelling step toward a “single pane of glass” for infrastructure insight
	•	Directionally, this could support increased engagement (RUM) and downstream commercial outcomes
What this exploration should produce:
	•	A design‑led recommendation
	•	Clearly articulated workflows / JTBD
	•	Low‑fidelity concepts or rough prototypes to visualize options
	•	An honest assessment of tradeoffs
Decision context
	•	Final decision authority sits with ILM LT.
	•	“Do nothing” (keeping tools separate) is an acceptable outcome
	•	This work is meant to inform strategy, not rubber‑stamp a predetermined solution

How leadership currently views these tools
Leadership perception (not definitive truth):
	•	TFE Search, Explorer View, and Infragraph are variations of the same underlying workflow, each specializing in different aspects.
	•	There is acknowledged ambiguity today around why all three exist independently.
	•	The distinction between them is not always clear (even internally).
This reinforces the need to ground the exploration in user workflows and mental models, not current ownership or implementation details.

Working user model (draft)
A potential shared core workflow that spans all three surfaces:
	•	Find / Investigate / Be alerted (Search, filters, queries, signals).
	•	View & understand context (Relationships, metadata, dependencies, state).
	•	Remediate / Take action (Fix, automate, create an action plan, or be guided).
The workshop will pressure‑test whether this is truly one user journey, or multiple distinct journeys that only appear similar on the surface.

Decision criteria
Any recommendation should be evaluated against these criteria (not personal preference):
	•	User mental model clarity: Do users more easily understand where to go and why?
	•	Learnability & cognitive load: Is it easier to get oriented and succeed?
	•	Power‑user efficiency: Does this reduce context switching and speed up complex tasks?
	•	Platform clarity & product story: Is Terraform easier to explain and position as a platform?
	•	Technical & organizational sustainability: Is this viable to build, evolve, and maintain?
	•	Cost vs. Benefit: Are the gains worth the integration complexity?

Explicit non‑goals
	•	Designing final UI
	•	Making a binding product decision
	•	Solving all platform problems
This exploration is about clarity of direction, not delivery.

Key question to answer
Would users genuinely be better off (from a simplicity and efficiency standpoint) if these experiences were unified?

‏Expected Deliverables
‏	•	Summarizing Report
‏	•	Clickable wireframes


