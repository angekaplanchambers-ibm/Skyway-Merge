Skyway Merge Design Workshop — Summary
Date: March 30, 2026  Duration: ~1h 40m  Primary surfaces discussed: Terraform Search, Explorer View, Infragraph  Goal: Evaluate whether and how Search, Explorer View, and Infragraph should converge—and what “unification” should actually mean—for Terraform’s evolving platform.

1. Why This Workshop Happened
Terraform is evolving toward a more consolidated platform experience. Leadership anticipates increasing user confusion as Search, Explorer View, and Infragraph begin to overlap in purpose—especially around discovering, understanding, and acting on infrastructure.
Key concerns driving the conversation:
	•	Users (and even internal teams) struggle to explain when and why to use each surface.
	•	Overlapping workflows risk higher cognitive load and inefficiency.
	•	There is no single escalation or metric forcing change—this is a proactive, design-led exploration, not a pre-decided consolidation mandate.
The workshop is meant to inform strategy, not dictate platform decisions. “Do nothing” is considered a valid outcome.

2. Shared Mental Model: A Common User Journey
The group aligned on a three-stage infrastructure journey that all three tools partially support:
	•	Find / Investigate 
	•	Search, filters, queries, alerts
	•	Discover managed and unmanaged resources
	•	View / Understand 
	•	Context, metadata, dependencies, blast radius
	•	Relationships between resources
	•	Remediate / Act 
	•	Imports, fixes, automation, plans, guided workflows
	•	Often action happens outside the current surface
A major question was whether this is one continuous journey or multiple distinct journeys that only look similar.

3. What Each Surface Is “For” Today
Terraform Search
Primary job:
	•	Find and manage resources across cloud providers, especially unmanaged resources
	•	Enable import into Terraform with strong guidance
Strengths:
	•	Import-focused workflows (generate import blocks, PRs, VCS write-back)
	•	Policy evaluation before import
	•	CLI workflow
Limitations:
	•	Constrained to workspace-level context
	•	Limited visibility into resource relationships beyond import

Explorer View
Primary job:
	•	Give org-level users (admins) a high-level snapshot of Terraform-managed infrastructure
Strengths:
	•	RUM-only (managed resources)
	•	Fast, tabular, scalable overview
	•	Governance, compliance, optimization insights
	•	Runs on-prem with Terraform Enterprise (air-gapped environments)
Limitations:
	•	No unmanaged resources
	•	No historical view (only “latest state”)
	•	Limited remediation insight beyond observation

Infragraph
Primary job:
	•	Provide a relationship graph / inventory of infrastructure across products and clouds
Strengths:
	•	Shows managed and unmanaged resources
	•	Reveals dependencies, lineage, blast radius
	•	Cross-product context (Terraform, Packer today)
	•	Identifies unmanaged resources by comparing cloud vs Terraform state
	•	Path to future multi-cloud and live data
Limitations:
	•	No direct remediation actions (guides users elsewhere to act)
	•	Configuration-heavy (connections must be set up manually)
	•	Not on-prem
	•	Graph visualization is powerful but users often prefer tables in many cases

4. Key Areas of Overlap and Confusion
The workshop surfaced real overlap pain, especially in the Find / Investigate stage:
	•	Search and Infragraph can both: 
	•	Discover unmanaged resources
	•	Run queries
	•	Explorer View and Infragraph overlap on: 
	•	Querying managed resources
	•	Viewing metadata
	•	Users often ask: 
“Which tool should I use right now?”
The distinction between discovery vs. deep context vs. action is not obvious in practice, even for internal teams.

5. Decision Criteria for Any Unification
Any recommendation must demonstrate meaningful improvement across:
	•	User mental model clarity – Is it easier to understand where to go and why?
	•	Learnability & cognitive load – Faster orientation, less context switching
	•	Efficiency for power users, not just beginners
	•	Platform clarity – Stronger Terraform “single pane of glass” story
	•	Technical & org feasibility – Sustainable to build and maintain
	•	Cost vs. benefit – Integration must be worth the engineering lift
If unification does not materially improve these areas, it is not justified.

6. What Must Remain Distinct (Even if Unified)
Strong boundaries emerged:
	•	Import workflows should remain clearly distinct (Search-led)
	•	On-prem support (Explorer View) is a hard boundary
	•	Deep relationship modeling is unique to Infragraph
	•	Action vs. insight must stay separated conceptually, even if surfaced together
The group strongly agreed that user goals, not product ownership, should define boundaries:
	•	Understand & view resources
	•	Decide & plan changes
	•	Execute imports or remediation

7. Emerging Direction (Not a Final Decision)
A promising direction discussed toward the end:
	•	Extract shared capabilities (e.g., querying, discovery) into a more global or umbrella experience in Terraform
	•	Keep specialized end states (Search → Import, Explorer → Admin overview, Infragraph → Relationship analysis)
	•	Potential future: 
	•	A unified query entry point
	•	Contextual routing to the appropriate surface based on user intent
	•	AI / natural language–assisted querying as a top-level entry

8. Key Takeaway
The workshop did not conclude that full unification is the right answer today. Instead, it clarified that:
	•	The overlap is real and confusing, especially early in the workflow
	•	Each surface still serves a distinct and valuable purpose
	•	Any consolidation must be design-led, incremental, and clearly justified by user value
The next step is to translate these insights into concrete design explorations (workflows, wireframes, prototypes) that leadership can evaluate against the agreed success criteria.








Skyway Merge Design-only Workshop-20260330_135550-Meeting Recording
March 30, 2026, 6:55PM
1h 40m 27s


 Ange Kaplan-Chambers   9:56 Search, Infragraph, and Explorer View converge. If we're going to do that, how are we going to do that? Does it make sense to bring Search, Explorer View, and Infragraph into a single unified UI, or are users better served by keeping them separate? And by unified, it can mean a whole bunch of different things, like... a single entry point, shared workflows or mental models, or a fully unified interaction experience. It was like a fully interactive experience. So we need to clarify what unification means, if any, and how it actually benefits users. and how that's a key outcome and how that result is a key outcome of this work. So. Why are we doing this right now? Why is this coming up right? So Terraform is evolving. It's becoming a more consolidated platform. The people who make decisions are thinking about converging everything into Terraform, basically. So we need to figure out what that means. I know there's been some conversations about where Infragraph should live within the Terraform UI. And if Infragraph is introduced alongside Explorer View and Search, like we risk presenting users with like multiple overlapping experiences and overlapping ways to find, view, and act. Those 3 are very important key. milestones in the user journey. find, view, and act on their infrastructure and make choices. So there's been no specific escalation that's sourced this conversation or specific metric that has triggered this discussion, but leadership anticipates further confusion around. you know, questions like... Where do I go to do this specific thing? Or what's the difference between these three features, search, explorer, view, and Infragraph? So what we're doing right now is supposed to be design-led and very proactive. It's not to preempt any platform decisions. But we should unify to have a clear design-based decision on where we're going from here and what a consolidation decision looks like. So again, we're not making huge decisions on the platform. This is a thought exercise. So. In terms of leadership intent and expectations, from previous discussions I've had, success looks like clarity on the platform for both internal teams and external users, reducing the cognitive load and ambiguity over where people go to do specific things. improved power user efficiency, not just beginner usability, a compelling step towards a single pane of glass for infrastructure insight, and directionally it could support increased engagement like increased ROM and downstream commercial outcomes. So basically increased ROM. Increased. Increase compensation. Major success. So here's what we're expecting. In the exploration, we should opt to give a design led recommendations, which we all know what we're doing. Some sort of clearly articulated workflow, like denote the job to be done, if we can figure out what that is. Maybe some low fidelity concepts, wireframes. rough prototype workflow, that sort of thing. I don't expect us to do that level of design work in here. This is mostly discussion-led stuff. But when I do end up generating a prototype after this workshop, I want to have us all look at it and make decisions on it before I send it off to Mary. we still have sign off on it because we are all part of it. And also this exploration should produce like an honest assessment of the trade-offs of the risks of doing whatever it is we are. telling them that they should do. So the context of the decision should be that the final decision authority sits with ILM and higher ups, et cetera. Or they could do absolutely nothing. They can keep the tool separate. That's an acceptable outcome as well. And this work is meant to inform the strategic side of it. not really rubber stamp a predetermined solution. So it's sort of up to them to make the final decision. So let's talk about how leadership sees these tools. What are their pictures of it? So it's not a definitive truth, but all three are variations of the same underlying workflow. where each specializes in like different aspects. There is ambiguity that's acknowledged about why all three exist independently. And the distinction between them is not often clear, like even internally. So externally, I have gotten feedback where they brought up Infragraph and they do ponder the differences between. Infragraphic Explorer V, for example. So because of all of these things, it reinforces the need to ground this exploration in like user workflows and mental models and not who owns what or the tiny implementation details. So... And then moving over here. Potentially, we do have a working customer journey workflow, one that would span all three surfaces. So there is, one is find slash investigate slash be alerted, which includes like searching, filtering, queries, getting signals, alerts. Two is to view and understand the context, and that's seeing the relationships, the metadata, dependencies is the big one, and like the present state of things. And then third is to remediate or take action, whether that's through making fixes or automation or creating a plan or a guided workflow of remediation. or suggested AI agentic insights, whatever that means in terms of remediation. So what we're going to do is we're going to pressure test whether it's truly like one journey through all of those three steps or multiple distinct journeys that only appear similar on the surface. Like that's what we're here to talk about. So the decision criteria. Any recommendations we make should be evaluated against this criteria, obviously not personal preference, even though that can influence you as a designer. The user mental model clarity, so do users more easily understand where to go and why? So these are all the criteria we're going to judge after our conversation to see if we can make a decision based on what. what we have. Learnability and cognitive load, is it easier to get oriented and be successful? How are users were taking into consideration in terms of efficiency? Does it reduce context switching and speed up complex tasks or simplify them? Platform clarity and the product story, is Terraform easier? to explain and position as a platform. Are we defining Terraform easier because of how we're making our decision, what the result of our decision is going to be? Technical and organizational sustainability. Is this viable to do? Is our decision? viable to do, actually do? And how can it evolve? How can we maintain it? Is it plausible to maintain it? And then the cost versus the benefit. Are the gains worth the integration complexity? So are we going to have any value from this effort, from all this engineering effort, from all this effort that we're putting in here? Is there going to be a payoff? And then some explicit non-goals are, you know, designing the final UO. Liz, do you have a question?
 Liz Chen   18:26 Yeah, so this decision criteria, is it for leadership outside this workshop or is this part of this workshop's recommendation?
 Ange Kaplan-Chambers   18:36 So this is us to the best of our ability, and then leadership is also going to use this decision criteria.

 Ange Kaplan-Chambers   19:46 Okay, thank you. Yeah, to the best of our ability, based on what we know about like filling engineering pids.  So our key question to answer, would users genuinely better off, be better off from a simplicity and efficiency standpoint if these experiences were unified and whatever unification means? So then our final deliverable will be the summarizing report and hopefully clickable wireframes. From this workshop together, our final literal right now, we'll just be completing this workshop board and our discussion. OK. So... In terms of ground rules, it's design thinking. Don't have to worry about defending your solution. It's like kind of an improv session. If you've ever done improv, you can use the term yes, and to keep it going. Boxes and arrows are better than a pub. polished UI, so don't worry about the final details. You can be as messy as you like, it doesn't matter. And obviously it's okay to disagree. It's a signal, not a failure. Nobody's wrong. You know, we're all here to kind of like figure this out. And then for the overview in terms of our agenda, 5 minutes just sort of introing, which we're already doing. And then the next. Fifty-ish minutes or so, we'll be, you know, doing the individual exercises and the boards that I've already set up, and then the last 10 minutes we'll just talk and et cetera, and then the previous linked right there, but we kind of already talked it out. OK. So each board, there's, let me see, one, two, how many did I put here? Three, 4, I think I put five. Yeah, I know the boards look humongous. I swear they're not crazy. I just wanted to give you guys like a lot of space to mess around in. So it's five questions and it's mostly heads down quiet time. If you would like me to turn on the music, I totally can. Or if you don't, that's cool too, just let me know. Okay, so the first question here. What job does each surface actually do for the user? So in here, we're going to be clarifying the purpose and not the feature. So we're talking about... what your product is for, what's it doing, what's it solving, what's it, why is it here, what's it trying to accomplish? So when a user opens a product, what are they fundamentally trying to accomplish? Not technically what the feature does, like, oh, it delivers data, like, cool, but what does that do for the user? So in here. I'd love it if you guys could individually write post-its for the primary job that your product serves, like its primary job. And then any sort of secondary beneficiary assignments. Yeah, Liz, do you have a question?
 Liz Chen   22:55 Yeah, should we focus on what the product does today or in the near future or both?
 Ange Kaplan-Chambers   23:02 Probably both or the end goal if you know it or the most ideal version of your product if you know what it is.
 Liz Chen   23:08 Okay.
 Ange Kaplan-Chambers   23:21 So, we can phrase these outcomes saying,  The good outcome would be like understanding the blast radius of a change. Bad way to phrase it shows a graph of resources. That's a very technical way to describe it. And then again, why this matters is if the jobs are fundamentally the same, unification is plausible. But if not. then it could be harmful. So that's what we're trying to figure out here. Where do the lines blur? Do they blur totally? Maybe in some places, not at all, et cetera. So why don't we start? I have 3 sections for everyone. And then we can start the timer. How much time do you guys think you need? You need like 8 minutes or 10 minutes or something? There's only 5 questions. I figure we could spend like 10 minutes on each one so that we have time now.
 Liz Chen   23:49 OK.
 Ange Kaplan-Chambers   24:10 Actually, like, think and work through this. Is 10 minutes alright?
 Liz Chen   24:32 Thank you.
 Ange Kaplan-Chambers   25:46 Okay, how are we feeling on time? Do we need more time? 
 
 Ange Kaplan-Chambers   34:56 Okay. So this isn't so much sectional as it is what happens where on this potential like 3 section milestone, 3 section successional milestones. So where would users hesitate or feel confused today? So what we're doing is we're diagnosing any potential overlap pain here. So, say it's merged, okay. Where are users going to freak out? At what moments would a reasonable user hesitate and ask, what tool should I use? For this part, we're going to still do the post-its. And we're going to rate them for specific decision points where there might be potential handoffs between services, where would they jump? from one to the other, and what could be a redundant step? Like, I'm here, I'm doing this thing, and then I have to go to this thing and do this thing, but then I just did that. I don't know where the overlap is to work. We could find, you know, steps. optional framing aids on the board for your post-its are like, here's a user goal, here's a decision moment, here's why this is confusing. And then for the sticky note colors, the suggestion in case you want to use different color, it's fine. So pink could be the decision point, orange can be the handoff. between surfaces, and then blue could be any sort of redundant step. And a prompt we can use is, where does the user ask, which tool should I use right now? And then for the expected output is, we're going to have some concrete decision points along this route. And then... We're going to pinpoint any repeated confusion patterns across all three surfaces. So... Is this confusing to anybody? Oh yeah.
 Liz Chen   36:55 I have a question. I feel like I don't know the other two area enough to make a judgment right now. Especially right now, Infragraph doesn't actually integrate with Explorer or TFT Search.
 Ange Kaplan-Chambers   37:02 Okay. It doesn't, you're right.
Okay, so Explorer View in a nutshell is basically a table showing the most recent data of Terraform managed infra. That's all it is. 

‏Ange Kaplan-Chambers   37:44 The action that users can do is they can export it to a CSV and they can go and take that data and make decisions based on that. And the decisions they make are about like operational cost or performance or how they manage it or making decisions, even charge back decisions.  A little more in depth than that general statement is the primary job is that it gives orgs a single high level view of their infra. You have to think of an umbrella that protects a whole bunch of heads against the rain. It's an umbrella. It gives orgs the ability to understand and analyze from that top level and to make governance decisions based on it, which is offline after they interact with Explorer View. It can help users see what they have and how it's configured; to see their managed infra scales without inspecting each individual workspace or state file. And it can offer the most current snapshot of their Terraform managed infra data. So some secondary things are basically what users do after they look at all of this data. Like what do they do with it? Well, it can drive decisions for their cost management or performance evaluation. It gives them an ability to view risk patterns such as drift or outdated versions or disparate VCS connections. We can support governance and decision making via standardization, compliance is a big thing, optimization. We can enable users to discover what modules, providers, and Terraform versions are in use. Okay, so that's the TLDR of what Explorer View is.
 Liz Chen   39:58 One question, does the user have to configure anything to enable this service or just come out of the box?
 Ange Kaplan-Chambers   39:59 It’s available by default, provided the user has the right permissions. They need to be an Org owner. Explorer View shows insights based on existing Workspaces, Runs, Modules, Providers and Versions so if none exist then nothing shows. 
 Liz Chen   40:17 Okay, cool. Thank you. So let's move on to Infragraph. So I keep this job very high level, so I didn't go into much detail, like a secondary feature, like Ange did with the Explorer. The main job for Infragraph right now, today you can do is you have visibility over your AWS real estate. And it gives you a relatively up-to-date view of everything you have in your Infragraph. When I say relatively up-to-date is right now we are relying on manual updates. Users have to trigger the update action. And soon, maybe in the next couple of months, we're going to do automatic updates. So maybe every 24 hours or 72 hours, depending on the size of your infrastructure. And then the purpose is you get a single pane of glass to understand how things are related, for example, their dependencies, lineage, and metadata. So we give you relatively comprehensive metadata and like all the properties values for your AWS resources and how it's related to Packer resources and Terraform resources. so you can know their management status. And then insights about security, if you can verify the configuration of your resources, are they secure or not? It's not exactly like out of box, you have to go some digging right now. But in the future, we want to do some policy-based work detection where you can see those insights about security, drift, health directly. And then another major workflow for Infragraph is the cross-product automation. For example, if you today are using Terraform and Packer, this is the two connectors we support today for HashiCorp products. We can show you how things are related among those two products. So you can have a single view instead of going back and forth to the different product areas to complete operational task. One caveat I want to mention here is right now we only show the information about how they're related and we don't give you any actions to take here. We can link you to, the Terraform resource UI. I'm not sure about Packer yet, but the goal is we're going to link you to the data source destination UI if we have it. And then secondary job for all the admin to do is in Infragraph, you have to configure the connection. Like it doesn't come out of the box, even for Terraform you have to provide a certain token to configure it. So that's configuration for like AWS, Terraform, Packer. It's up to the user and it's their responsibility to maintain the connection to make sure there's no error. 
 Ange Kaplan-Chambers   43:07 Is Infragraph exclusive to AWS as a provider?
 Liz Chen   43:10 Today, yes.
 Ange Kaplan-Chambers   43:12 Okay. Is it always going to be exclusive to AWS?
 Liz Chen   43:13 No, we are aiming actually towards multi-cloud estate. So AWS, GCP, and Azure. Azure is actually on the roadmap.
 Ange Kaplan-Chambers   43:25 OK.
 Liz Chen   43:37 in GA. And then we want a live view. So instead of relatively updated to date, it's a live view. Very, it's very minimum delay, like minutes. And then you can see all the same things that I mentioned earlier. And we might surface all the insights more upfront, like we do the calculation, comparison, and directly show you what is being misconfigured, what the drift is. And then another important vision is. Yeah, when you see the misconfiguration, you should be able to see the affected teams and resources. This is again another pain point across the IBM observability suites like Turbonomic, Instana, Concert, where it's really hard for them to correlate applications and teams, and they are hoping Infragraph can help them to do that, which is also kind of tied to this cross-product automation thing. All the IBM services and all the Hashable products, you can see how they are related in one place. So the unified data layer, it's another initiative they are working on. And then the secondary job is very similar, which is to configure all the connections. This is mostly an admin job, not the consumer's job. 
 Ange Kaplan-Chambers   44:59 So it sounds like there's a lot of remediation insights that can be taken in Infragraph.
 Liz Chen   45:07 We're going to guide you to the destination tool to do it.
 Ange Kaplan-Chambers   45:15 Okay.
 Liz Chen   45:16 Yeah, so like Infragraph doesn't want to be the central software to replace everything,  that's just not possible.
 Ange Kaplan-Chambers   45:27 Why is it? Why is it impossible?
 Liz Chen   45:33 Um, I think it's hard to maintain, for example, all the actions, all the API layer from Terraform into Infragraph. And you think about how that could multiply by each of the product. Like how could we maintain a interface layer where it's up to date with all the underlying products API to take actions.
 Ange Kaplan-Chambers   46:00 Okay, so is it more like a giant engineering lift to be able to do something like that?
 Liz Chen   46:01 Yeah. I think so, yeah. And we don't want to do that from the product perspective. We just want to provide you with visibility, but we don't handle any actions.
 Ange Kaplan-Chambers   46:06 I'm wondering, is it more supporting like insights for remediation or does it support remediation actions? Where does remediation stand in this whole thing?
 Liz Chen   46:26 It helps remediation in terms of giving you the necessary context to start the remediation, but the user has to go somewhere to take the action. 
 Marisa Chan   46:52 I want to clarify that search is not just TFE. It's also available in HTTP Terraform, so it's both TFC and TFE. I framed my Primary Goals job as statements that are pain points for the users and not what the platform or what the function feature can do. 

So primarily it helps users look for and manage resources across cloud providers and provide an easy way to import them, which are the two biggest pain points today for import. Then in order to import, you have to search for them first. So the way we address the import issue is to reduce time needed to write import blocks. It would automatically generate import and resource blocks for you with this feature. And it also reduces time needed to write PRs for the import itself. So it could automatically write, we call it VCS write back, writes PRs for you. And something we're working on right now is to evaluate those resources that you found against policies in your workspace. So if it doesn't meet the criteria, then it would alert you and you would have to remediate that before the import. So this is to ensure a successful import.
 Ange Kaplan-Chambers   48:34 So it sounds like there's remediation in all of ours to some extent, like whether that's suggested insights or it's like actionable steps to complete the flow to interact with our features.
 Marisa Chan   48:50 I mean, I think there's always going to be remediation with these, digital flows, you can always run into an error, but I would say the remediation in search is very different.
 Ange Kaplan-Chambers   48:58 Sure.
 Marisa Chan   49:06 When you are remediating things that are you that you are already managing, I almost see more similarities between Infragraph and Explorer because they both fall under managed resources, whereas search is the step before that, and I can see them all integrating together, but...
 Marisa Chan   49:28 That's kind of the division where it turns the unmanaged into manage.
 Ange Kaplan-Chambers   49:34 Yeah, that's what I was thinking too when I'm visualizing how all three of our features are related. I'm seeing search at the front line of it because you're utilizing unmanaged and managed resources. Explorer view is only RUM. And then I feel like Infragraph is kind of like a step after that, where it's all about drilling down to relationships between Resources.
 Liz Chen   50:07 InfraGraph actually can show you unmanaged resource as well, because it can ingest all the cloud data and do a comparison with your Terraform state file. So if a resource in the cloud does not have a relationship to a Terraform state file, it's unmanaged.
 Ange Kaplan-Chambers   50:25 Okay.
 Liz Chen   50:25 So it can tell you both managed and unmanaged.
 Marisa Chan   50:28 Mhm.
 Ange Kaplan-Chambers   50:29 Interesting. Okay.
 Liz Chen   50:30 It's more like the first step of TF search, where you look for a managed resource, but instead of look for unmanaged, we show you everything, whether it's managed or not.
 Ange Kaplan-Chambers   50:41 Okay.
 Marisa Chan   50:44 Did you mean that in Infragraph it could also tell you if it's managed or unmanaged?
 Liz Chen   50:54 Yes, because what it does, it ingests all the resources across the cloud provider, and because it also ingests all the Terraform resources like a state file, and it can infer relationships among those resources. So if, for example, an EC2 instance has a relationship with a Terraform state file,

 Liz Chen   51:14 that means it is under management by Terraform. If the relationship is absent, that means the relationship, that probably means it's unmanaged or your data ingesting is not complete. So it can give you a good estimate of whether it's managed or unmanaged.
 Ange Kaplan-Chambers   51:36 We have familiarity between all of our products. Okay, do we have enough context for the next section?
 Liz Chen   52:17 I don't know if it helps if I give you a very quick demo of Infragraph.
 Ange Kaplan-Chambers   52:22 Okay.
 Liz Chen   52:23 One minute. Okay. The core job you do in Infragraph is, so you have Infragraph, which right now is inventory of everything you have. These are the supported resources we havtoday;y, it was Terraform Packer. What you do is you go to this UI and you can ask a query. This query builder is not good, but for example, Do I have any VMs not managed by Terraform? Okay, you can see a graph like this. These are separate nodes, not related to any of the Terraform things. So all the relationship here has nothing to do with Terraform. So we conclude that this EC2 instance is not managed by Terraform. If I say, show me all the VMs that actually is managed by Terraform, you will see a relationship between a Terraform state file and all the resources that it manages. And this is filtered out to only VMs. If you go click into this Terraform state version, you can actually see everything it manages, not just the EC. So this is this Terraform state version and everything is managed. And this is all it does. You can stack it in some way. This is a group by resource type. So this Terraform version belongs to, this Terraform state version belongs to this Terraform workspace and it manages all these resources. 
 Ange Kaplan-Chambers   53:52 Can I ask a question about like this visualization? Can you tell me the driving factor to decide to actually do this whole visualization?
 Liz Chen   54:05 One of the thing is you can, for example, evaluate the downstream impact. For example, if you update this Terraform workspace, what resources will affect it by it?
 Ange Kaplan-Chambers   54:16 Okay.
 Liz Chen   54:17 Yeah.
 Ange Kaplan-Chambers   54:18 Is that why they wanted an actual visualization of the resource relationship?
 Liz Chen   54:21 Sometimes it's actually they prefer just to be the to have the table. For example, these are the list of resources this Terraform manages, so it depends and only see the graph is not the best visualization yet, but this is the simple simplest thing we can do right now, which is just these nodes and how they're connected.

 Liz Chen   54:51 We are thinking about how can we group it better, visualize better, but that's a secondary step. Right now it's just nodes which represent resources and the connection or line representing their relationships.
 
 Ange Kaplan-Chambers   56:33 Did you test users on it? Which one they preferred?
 Liz Chen   56:38 Many of the users we tested, they preferred a table, even though internally we were very excited about the graph and Infragraph is called Infragraph because of the graph. But there are certain situations, for example, showing lineage.
 Ange Kaplan-Chambers   56:43 Okay.
 Liz Chen   57:00 Not everything is suitable for the graph. Sometimes the table is better.

 Marisa Chan   57:21 So is Infragraph able to look for unmanaged resources? 
 Marisa Chan   57:31 Um... It sounds like what Infragraph does is the first step of Search. Like. how you just link up the cloud provider and then query it and then it tells you what if they're unmanaged or not.
 Liz Chen   57:52 Yeah, so the way you do this is you configure a connection. You create a connection, you say these are the AWS accounts I want to scan, okay? And then you do a sync right after you create this connection.  And then on the back end, it's going to generate those relationships automatically. And then it can tell you what is not managed by Terraform. 

So honestly, I have heard that we should work with import team to figure out a next step. For example, if I find all these not managed, I can imagine a check box of select all and then action column and then import. And then it will open a new tab within Terraform import, which with all these resources already somehow pre-selected or has some information sent over.
 Marisa Chan   58:32 Yeah, that's what we have right now.
 Liz Chen   58:45 Then import does the actual import, and then when you can go back to Infragraph; you will notice all these resources are gone from this query.
 Marisa Chan   58:54 Yeah, because I'm looking at like this second task here, like in terms of find and investigate, that's what I'm trying to get at. Like it sounds like that would be a decision point where the users don't know which tool to use, because I honestly don't know what the difference is either. It's exactly the same. The way it's connecting it is a little different.
 Marisa Chan   59:18 Like in search, you would declare the provider block instead of using the account ID. I think that's the only difference, but the outcome is the same.
 Liz Chen   59:30 I think so.

 Marisa Chan   59:40 And then also one more point about the relationship is - it was a blocker for us because we didn't know how to show how one resource can be related to another and you also mentioned what its like to partially import. I forgot what the term you used was, but it means that like linked resources, some of them are importers and some of them are not, or managed and some of them are not. We still haven't figured out how to show the relationship between the resources that you have searched for.
 Liz Chen   1:00:09 Mm.
 Marisa Chan   1:00:20 So I almost think like Infragraph is a step in between where the user can gain more insights and then they can decide what to actually import.
 Liz Chen   1:00:34 Yeah, I'm not sure what you mean by a partial import. Lei.
 Marisa Chan   1:00:41 I guess the example you gave was the relationship between the EC2 instance and the state file, which then tells you whether it's managed or not. But there could also be an example where maybe one EC2 is related to like another S3 bucket. Like they have.
 Liz Chen   1:00:48 Okay.
 Marisa Chan   1:01:00 they only work together, like they have some relationship. So if you import only one thing and not the other, then it doesn't really work. Like there's no point of doing that. And we wanted to service that in the search workflow, but we're not really there yet. So I feel like Infragraph kind of solved that already.
 Liz Chen   1:01:01 Oh, I see. Another feature we're developing is you can expand this query to do another. So this is showing me the first level connected resource.
 Marisa Chan   1:01:29 Yeah.
 Liz Chen   1:01:39 We can undo the secondary level connected resource. So you can imagine a region could expand to show all its surrounding resources. Infragraph showed you a dependency and you can see this region is actually managed by Terraform, but this is not. Something that I depend on is managed by Terraform, but I myself is not.
 Marisa Chan   1:02:07 Yeah, I think it's clear that if you need to import, then you would use the search and import flow, like regarding remediate and act, but it could totally come from the inner Infragraph interface where you have multi-select and then you just click generate import based on your selection, which is what we have in search.
 Yeah, yeah, that makes sense to me.
 
 Ange Kaplan-Chambers   1:04:00 Alright, we're at #2.
 Liz Chen   1:04:03 What do we number two? Okay.
 Ange Kaplan-Chambers   1:04:09 I feel unmanaged resources limits Explorer view quite a lot. I mean, it's a very top level view and we can't see unmanaged resources. We can only see managed
‏And the goal is to display and enable customers to create more managed resources which differs from Search and Infragraph because they show both managed and unmanaged resources.
 Liz Chen   1:11:15 Infragraph in the near term does not have any plan to run on-prem. That's a differentiator of Explorer, where you can run on-prem.
 Ange Kaplan-Chambers   1:11:49 Alrighty.
 Liz Chen   1:11:52 Question for Marisa. What kind of cloud provider do you support to scan and find unmanaged resources today?
 Marisa Chan   1:12:03 It's whatever provider that supports the list blocks, but for right now it's still pretty limiting, but they're looking to expand it. 
 Ange Kaplan-Chambers   1:12:17 Number 3 is how about ”the world that can be”. What must be meaningfully better if we unify these experiences? 

‏We're going to create post-its for improvements, descrbing what we have to have if we're combining or overlapping our UIs; or have any specific benefit from a combined UI. 
‏A constraint could be that if unification doesn't materially improve these, then it's not justified. And the output we want is basically a short list of non-negotiable benefits, and the ability to share success criteria that we all agree on.   And then, we'll have a clear success bar for any combined UI. You would group these contextually into each of these four categories:
‏	•	speed and efficiency
‏	•	clarity and learnability
‏	•	remediation confidence
‏	•	context and insight.
‏ For explorer view:
‏	•	Speed and efficiency
‏	•	Performance on the front end in terms of delivering actual data. 
‏	•	Clarity and learnability - 
‏	•	Enriching the query to make it more supportive.
‏	•	Connecting to deep diving in Infragraph for resource relationship data. I think that would be highly beneficial to reach across the bridge. 
‏	•	Cross org views.
‏	•	Context and insight
‏	•	Historical context is like a big wish for us. We don't do it. We justoffere the latest and greatest data, anditss sort of set in stone, but we can't really help users make decisions at all in the time being. It's just the actual most current data. And then a lot of users just source information from the state file. What they do is they grab the state file and they pluck out all the data that they need, and they compare it to previous state files manually. 
‏	•	For remediation I put historical context again to drive decision making and management and then remediation suggestions based on alerts from thrown from stuff like drift detection to hopefully kickoff a change and creating a release. 
 Liz Chen   1:22:23 For historical context, so far all the things I mentioned about Infragraph is about real time. We haven't written this in any PRD, but there was some ask about including temporal data, like how a resource property changes over time. That is kind of required by the observability portfolio, and it's possible we're going to do that in the future, but not in the near term.

‏ Ange Kaplan-Chambers   1:22:48 That would be great because our users do ask for historical context, but we just don't have the engineering bandwidth to be able to do that in Explorer View or set like a timeline or a timestamp or any of that. We just deliver like the most latest and greatest. 
 Liz Chen   1:23:31 I can talk about the things I added. One thing I added for power user, which are admins, is right now given is 2 platforms, users have to provision and manage all the users and teams, including their permissions, twice. So that's a big painpoint. We're trying to alleviate that by enable the scheme feature soon on HCP. It's gonna be GA in June, so that should help a lot, but still you'd have to do it twice, even though it's kind of automated now with scheme clarity and vulnerability. One thing I think about is we can reduce the need for the user to learn a completely different UI, like HCP, and how do we how to navigate that to get things done even though we're trying to consolidate our patterns, but it's not entirely consistent yet. We can terraform and HCP. Remediation confidence, I also thought about, yeah, two different platforms, they don't share the same cadence for syncing from a data source like AWS. So it's possible you view something in HCP. Infragraph, it has a different property when you do a sync or check using Terraform search. So you might be confused about data remediate or not. Contact and inside, yeah, less contact switching between the two different platforms using different tabs. Infragraph and Terraform features. Yeah, and then every time you have to share data or share context among the two platform, there is a possibility of having data transferring errors during the transition, so that might cause a loss of context. Yeah, those are the things I added.
 Marisa Chan   1:25:22 Search is limited to the Workspace level right now, which creates a disconnect between that and how Infragraph can sit on a more higher level. Infragraph can display Resources across different products and accounts, which is just not the case for search. So we can't unify entirely until it’s solved for Search. 
 Liz Chen   1:26:13 Do you have to support cross accounts, cross provider import? Or are you here to?
 Marisa Chan   1:26:21 No, that's still, that's still supported, but you could only do that within a constraint of 1 workspace.
 Liz Chen   1:26:29 Okay, I see.
 Ange Kaplan-Chambers   1:26:35 Last question is what should remain very distinct in our own products, even if we unify somehow, somewhere? What distinctions are valuable enough that we should protect them? What makes us unique?   And call out any complexity that should not be collapsed. I know there's very specific resource details in Infragraph that definitely need to exist in there for sure. 


No overlap between Explorer View and Infragraph:
	•	Explorer view is RUM-exclusive and only shows managed Resources. Explorer View is also run exclusively inside Terraform Enterprise making it a closed system – where it’s deployed in the customers’ own infra - Terraform Enterprise is self‑hosted and fully controlled by the organization (customer).

‏Potential overlap between Explorer View and Infragraph:
‏	•	Query builder.
‏	•	View top level metadata for RUM.
‏	•	Export data.
‏	•	Suggested insights into management efficiency
‏	•	Resource details with attributes. 

‏Overlap between Explorer View and Search:
‏	•	Find individual managed-only Resources (not unmanaged).
‏	•	View Workspace that a Resource is managed by.
‏	•	Resource metadata: name, tags, relationships, attr’s.
‏	•	Query

‏No overlap between Explorer View and Search:
‏	•	Import exclusive to Search
‏	•	Unmanaged Resources not in Explorer View

‏Overlap between Search and IG:
‏	•	Query
‏	•	Unmanaged and Managed Resources
‏	•	Discoverability.

‏No Overlap between Search and IG:
‏	•	Import is exclusive to Search.
‏	•	Relationships are exclusive to IG.
‏	•	Relationships between managed and unmanaged resources are exclusive to IG.
‏	•	Search has ability to guide user to write a specific PR for a chosen Workspace for import, Infragraph does not.
‏ Liz Chen   1:34:29 
‏Features exclusive to Infragraph:
‏	•	Infragraph isnt able to guide the user to write a specific PR for a chosen Workspace on import.
‏	•	Infragraph is not on-prem.

‏Features that can overlap:
‏	•	Infragraph would benefit from a CLI, the whole HTTP CLI workflow is not that robust. Many services don't have the corresponding CLI workflow, mostly just UI.
‏	•	Infragraph would benefit from Provider-based workflow to ingest data.

‏Search has the ability to guide user to write a specific PR for a chosen workspace to import them. It has more context about how to write a PR. I think Infragraph may not have that. So I want to keep those separate. And then Terraform Explorer works on-prem for Terraform Enterprise users, you know, air gap environment especially. And using Infragraph will force them to be using the HTTP cloud. So that's a hard boundary, in my opinion. 

‏Soft connections, I think Infragraph right now doesn't have a CLI or provider-based workflow to ingest data. You have to create all the connections using the UI. So there might be a... But as a requested feature to ingest, for example, AWS accounts at scale automatically, like when new accounts are being provisioned, they want to ingest them into Infragraph. So there could be a new integration between the Terraform list function in the provider and the connection creation UI.

 Marisa Chan   1:36:11 I think some of these are more like how it works today, but I think it could still... Like the query strings one, I think all of us have some sort of query in our part of the future, and I could see a future where... It could be supported in the same. like unified, but with nuances. So I think these are very loosely held understanding of how it works today. Like TF search has a CLI workflow, but does that mean it couldn't stem from Infragraph? I don't think so. I think.

Overlap for Search:
	•	Query with nuances.
‏	•	CLI workflow.


 Liz Chen   1:36:38 Yeah.
 Marisa Chan   1:36:54 It's not so much which part of the product right now needs to be differentiated, but more so the user goal needs to be clear. So like understanding and viewing resources versus when you import them needs to be very clearly separated, but they can still live in like a unified view. And then.

User goal needs to be differentiated:
	•	Understand and view Resources.
	•	Import Resources.


 Ange Kaplan-Chambers   1:37:13 Mm-hmm.
 Marisa Chan   1:37:15 some of the things that are already existing today that are overlapping are like select, or actually that has not overlapping yet, but selection of resources to act on, which we briefly talked about, and then the resource relationships, which I can see totally overlapping.
 
 Liz Chen   1:37:35 Yeah, and I forgot to mention, we're going to work on natural language to query very soon this July. So initially it will just be one round. You give us a description, we'll translate that into query, but post-GA after June, we're going to do those chat bot-like experience. So it would just be initially just one text input box. You type in something, it would generate a query for you. You cannot say, okay, now modify this to that. It doesn't remember the previous thing for now.
