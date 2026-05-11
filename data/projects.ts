export interface ApproachSection {
  number: string;
  title: string;
  body: string;
  bullets?: string[];
  closing?: string;
}

export interface IdeationItem {
  description: string;
  image?: string;
}

export interface WireframeItem {
  description: string;
  image?: string;
}

export interface IterationItem {
  version: string;
  change: string;
  reason: string;
  shipped?: boolean;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  role: string;
  tools: string[];
  timeline: string;
  problem: string;
  problemDetails: string[];
  researchObjectives: string[];
  targetUsers: {
    name: string;
    description: string;
  }[];
  researchFindings: {
    insight: string;
    detail: string;
  }[];
  ideation: IdeationItem[];
  wireframes: WireframeItem[];
  designDecisions: {
    decision: string;
    reasoning: string;
  }[];
  iterations: IterationItem[];
  finalPrototype: string[];
  usabilityResults: {
    metric: string;
    outcome: string;
  }[];
  highlight?: string;
  summary: string;
  metric: { label: string; value: string };
  context: string;
  approach: string[];
  outcomePoints: string[];
  // Rich optional fields for senior case studies
  subtitle?: string;
  roleTeam?: string;
  roleConstraints?: string;
  contextParagraphs?: string[];
  problemIntro?: string;
  problemBullets?: string[];
  approachSections?: ApproachSection[];
  leadership?: { intro: string; bullets: string[] };
  impactStatement?: string;
}

export const projects: Project[] = [
  {
    slug: "prorail-journey-planner",
    title: "ProRail Journey Planner",
    description:
      "Redesigning the railway disruption experience for 1.1 million daily commuters — turning chaos into clarity.",
    image: "/prorail-flow.png",
    tags: ["UX Research", "Service Design", "Mobile", "Accessibility"],
    role: "Lead UX Designer",
    tools: ["Figma", "Miro", "Maze", "Hotjar"],
    timeline: "Feb 2024 – July 2025 (1 year, 2 months)",
    highlight: "1.1M users / day",

    summary:
      "ProRail's rail-traffic controllers manage live disruptions on the Dutch national network. A misread status there cascades into operational delay. I rebuilt the console around one canonical state per event, cutting the redundant codes and mental re-translation steps that had crept in over the years.",

    metric: { label: "In context", value: "Up to 40% lower expected stress under load" },

    problem:
      "The console kept forcing controllers to re-translate every alarm before acting on it. The job was to cut that re-translation step without losing the operational nuance they actually use.",

    context:
      "Controllers run several concurrent incidents under time pressure from regional control rooms across the Dutch network. The legacy interface had grown by accretion: overlapping alarm streams, redundant status codes for the same operational state, and elements whose meaning shifted depending on which subsystem raised them. Controllers were mentally re-translating every event before acting, exactly when they had no spare attention to spend.",

    approach: [
      "Shadowed controllers in regional operations rooms during live and simulated incidents, marking every spot where the interface forced re-interpretation instead of helping the decision.",
      "Rebuilt the information architecture around one canonical state per event. One state, one location on screen, one expected response.",
      "Prototyped the patterns in Figma and tested them in moderated sessions under simulated incident load.",
      "Ran workshops with controllers, engineers, and policy stakeholders to agree on shared definitions for alarms, statuses, and escalation thresholds, instead of leaving each team with its own.",
      "Turned the patterns into a learning programme so the console's behaviour and the controller's mental model were taught from the same source.",
    ],

    problemDetails: [
      "Real-time data is presented without context — passengers see 'delayed 14 min' but don't know if their connection is affected.",
      "The alternative route flow required 7 taps to reach a decision — under stress, most users abandoned it entirely.",
      "Screen layouts prioritised schedule data over actionable guidance, inverting what commuters actually needed in a disruption.",
    ],

    researchObjectives: [
      "Understand how commuters mentally process disruption information under time pressure",
      "Identify which information is 'need to know' versus 'nice to know' during a disruption",
      "Discover where current touchpoints break down — app, platform, staff",
      "Map the emotional journey from notification to arrival",
    ],

    targetUsers: [
      {
        name: "The Daily Commuter",
        description:
          "Ages 25–45, commutes 5 days a week, memorised their route, becomes highly anxious during unexpected changes. They need fast, decisive guidance — not options.",
      },
      {
        name: "The Occasional Traveller",
        description:
          "Ages 30–65, unfamiliar with the network, relies entirely on digital guidance. They need contextual orientation — 'you are here, go there.'",
      },
      {
        name: "The Accessibility User",
        description:
          "Uses step-free routes and requires advance notice to plan alternatives. The current system fails them first and hardest — alternatives shown are often inaccessible.",
      },
    ],

    researchFindings: [
      {
        insight: "Users make decisions in under 8 seconds",
        detail:
          "Field observation and eye-tracking showed that commuters scan platform information for less than 8 seconds before acting. The existing UI required reading 3+ screens to reach an action.",
      },
      {
        insight: "Trust collapses after one wrong prediction",
        detail:
          "In interviews, 11 of 16 participants said they stopped trusting the app after it gave them incorrect disruption info once. Recovery from a single failure required months of consistent accuracy.",
      },
      {
        insight: "People want answers, not data",
        detail:
          "Consistently, users expressed frustration with raw delay times. They wanted conclusions: 'Take platform 4b, next train in 6 minutes' — not '14 min delay, alternative IC service available.'",
      },
      {
        insight: "Accessibility users are disproportionately harmed",
        detail:
          "Step-free alternatives were shown in the same list as standard alternatives, with no visual differentiation. Users relying on lifts regularly followed guidance that led them to inaccessible routes.",
      },
    ],

    ideation: [
      {
        description: "Empathy Map",
        image: "/EmpathyMap.png",
      },
      {
        description:
          "Early sketching sessions explored a 'disruption mode' that would completely override the standard UI — replacing timetable views with a single, directive card: 'Your train is disrupted. Here's exactly what to do.'",
        image: "/earlyProrail.png",
      },
      {
        description:
          "We mapped the emotional journey alongside the information journey, identifying 'panic peaks' where users needed the most reassurance but received the least guidance. This became the framework for our hierarchy decisions.",
        image: "/earlyProrail-2.png",
      },
      {
        description:
          "Card sorting with 24 participants revealed that users grouped information by action required, not by type — they wanted 'do this now', 'do this next', 'background context.' This inverted our original taxonomy.",
        image: "/earlyProrail-3.png",
      },
    ],

    wireframes: [
      {
        description:
          "Low-fidelity disruption flow: a single-screen directive replacing multi-tab navigation. We tested 3 variants — full-screen takeover, bottom sheet, and inline banner — before choosing the takeover for high-stress disruptions.",
        image: "/low1.png",
      },
      {
        description:
          "Alternative route flow reduced from 7 steps to 2: 'Disruption detected → Tap to see your alternative.' User flow testing showed 89% task completion vs 41% baseline.",
        image: "/low2.png",
      },
    ],

    designDecisions: [
      {
        decision: "Single-action disruption card instead of information list",
        reasoning:
          "Users struggled to process lists of alternatives under stress. We changed to a primary-action card because eye-tracking showed users' gaze fixated on the first item and they rarely scrolled. One clear CTA eliminated the choice paralysis.",
      },
      {
        decision: "Accessibility badge on every route option",
        reasoning:
          "We simplified the route display to always show a step-free indicator because three accessibility users during testing followed non-step-free routes and were stranded. It was unacceptable to make accessibility a secondary consideration.",
      },
      {
        decision: "Removed departure time as primary information",
        reasoning:
          "Counterintuitively, showing departure time first increased anxiety. Users fixated on the countdown and became paralysed. Moving platform number to primary position gave them something to act on immediately.",
      },
      {
        decision: "Haptic + visual alert for disruption, not just push notification",
        reasoning:
          "25% of commuters had notifications disabled. We pushed the disruption card to appear the moment the app is opened, regardless of notification settings, because missing a disruption had serious downstream consequences.",
      },
    ],

    iterations: [
      {
        version: "V1",
        change: "One unified incident view, severity-tagged",
        reason:
          "First instinct: put every live incident on a single severity-sorted board so a controller could see the whole network at a glance. It tested badly on night shifts. With four or five concurrent events, the board read as a wall of red and the severity tag stopped doing work. Controllers were back to scanning region-by-region in their heads.",
        shipped: false,
      },
      {
        version: "V2",
        change: "Region-first split with severity as colour",
        reason:
          "Split the canvas by regional control area and dropped severity to a colour cue. Region-level legibility came back, but cross-region correlation went away. Controllers missed the pattern when one incident was upstream of another, exactly the moment the console was supposed to help with.",
        shipped: false,
      },
      {
        version: "V3",
        change: "Severity-first IA with regional drill-down",
        reason:
          "Settled on one canonical state per event, sorted by operational severity, with region as a drill-down rather than a partition. Cross-region correlation stayed visible at the top level; the wall-of-red effect went away because severity was paired with predicted action, not just colour. This is what shipped.",
        shipped: true,
      },
    ],

    finalPrototype: [
      "/ProRail1.png",
      "/ProRail2.png",
      "/ProRail3.png",
      "/ProRail4.png",
      "/ProRail.svg",
    ],

    usabilityResults: [
      {
        metric: "Task completion rate",
        outcome: "Increased from 41% to 91% for finding alternative route during simulated disruption",
      },
      {
        metric: "Time to decision",
        outcome: "Reduced from 47 seconds average to 11 seconds — well within the 8-second attention window observed in field research",
      },
      {
        metric: "Accessibility route errors",
        outcome: "Zero participants followed an inaccessible route in final usability testing (previously 3/5 accessibility users did)",
      },
      {
        metric: "User confidence score",
        outcome: "Post-task confidence rating improved from 2.8/5 to 4.4/5 across all user types",
      },
    ],

    subtitle: "Reducing cognitive overload in railway operations control systems",
    roleTeam: "1 junior UX designer (mentored by me), cross-functional collaboration with engineers and operations stakeholders",
    roleConstraints: "Limited delivery timeline — project executed under tight deadlines",

    contextParagraphs: [
      "ProRail operates one of the most complex railway infrastructures in Europe, managing real-time train operations across the Netherlands.",
      "The control centre staff were responsible for monitoring and reacting to live system data across multiple disconnected tools and dashboards.",
      "Operators were expected to continuously track up to 12 separate screens simultaneously, which created severe cognitive overload in high-pressure situations.",
      "At the same time, onboarding new employees was extremely slow and resource-intensive, taking up to 2 years before a new operator could fully work independently.",
    ],

    problemIntro: "The system suffered from four critical issues:",
    problemBullets: [
      "Cognitive overload: operators had to monitor 12 fragmented screens, leading to reduced focus and increased risk of missed critical events.",
      "Fragmented tools: core applications were not connected, forcing users to switch context constantly.",
      "Long onboarding time: complex system structure made training new employees inefficient and slow — up to 2 years.",
      "Inefficient workload distribution: each operator was responsible for very narrow geographic areas, requiring a high number of staff per region.",
    ],

    approachSections: [
      {
        number: "1",
        title: "System simplification through consolidation",
        body: "I redesigned the interface architecture by consolidating multiple applications into three unified primary screens:",
        bullets: [
          "Screen 1: Core operational monitoring",
          "Screen 2: Live system status and alerts",
          "Screen 3: Supporting tools and secondary applications",
        ],
        closing: "This reduced the need to constantly switch attention across 12 fragmented systems.",
      },
      {
        number: "2",
        title: "Information hierarchy redesign",
        body: "I introduced a clear visual hierarchy for critical vs. non-critical information:",
        bullets: [
          "High-priority events were visually highlighted in real time",
          "Stable system states were visually de-emphasised",
          "Attention-demanding alerts were surfaced contextually instead of continuously displayed",
        ],
        closing: "This allowed operators to shift between high-focus and low-focus states naturally, depending on system conditions.",
      },
      {
        number: "3",
        title: "Cognitive load reduction",
        body: "The new design significantly reduced mental effort by:",
        bullets: [
          "Removing redundant UI elements",
          "Grouping related actions into logical clusters",
          "Reducing screen switching and context fragmentation",
        ],
      },
      {
        number: "4",
        title: "Workflow optimisation across applications",
        body: "I worked on integrating previously disconnected applications into a more unified workflow, reducing operational friction and improving task flow continuity.",
      },
      {
        number: "5",
        title: "Operational restructuring impact",
        body: "The redesigned system enabled a shift in how workload was distributed:",
        bullets: [
          "Operators could now manage larger geographic regions instead of narrowly defined areas",
          "This reduced the total number of staff required per region",
          "Improved scalability of the control centre operations",
        ],
      },
    ],

    leadership: {
      intro: "As Lead UX Designer, I was responsible for:",
      bullets: [
        "Defining UX strategy and system structure",
        "Mentoring a junior UX designer and reviewing their work",
        "Aligning stakeholders across operations and engineering teams",
        "Prioritising requirements under strict time constraints",
      ],
    },

    outcomePoints: [
      "Training time reduced from 2 years to approximately 6 months.",
      "Cognitive load for operators significantly decreased through interface consolidation.",
      "Simultaneous system monitoring reduced from 12 screens to 3.",
      "More efficient workforce allocation across regional operations.",
      "Simplified daily workflows and improved system clarity.",
    ],

    impactStatement: "This project transformed a fragmented, high-complexity control environment into a structured, cognitively manageable operational system — improving both human performance and organisational efficiency.",
  },

  {
    slug: "ministerie-vws-dashboard",
    title: "VWS Policy Dashboard",
    description:
      "Designing a decision-support tool for Dutch health policy makers — turning complex data into clear, actionable insight.",
    image: "/corona1.png",
    tags: ["Data Visualisation", "Gov Design", "Complex Data", "B2B"],
    role: "Senior UX Designer",
    tools: ["Figma", "Miro", "D3.js prototyping", "Optimal Workshop"],
    timeline: "June 2022 – Feb 2024 (1 year, 8 months)",
    highlight: "40+ analysts",

    summary:
      "Forty-plus analysts at the Ministry of Health were each rebuilding the same briefing data from scratch every week. I designed a dashboard that made the recurring briefing automatic and the ad-hoc question fast — built around the one thing analysts needed before they would use any of it: visible provenance.",

    metric: { label: "Weekly briefing prep", value: "3.2 hours → 45 minutes in pilot" },

    problem:
      "Policy analysts at the Ministry of Health spent an average of 3.2 hours preparing data for weekly briefings — not because the data didn't exist, but because it was distributed across 11 disconnected systems. Decisions were being made on stale, incomplete information.",

    context:
      "VWS policy analysts were pulling data from eleven disconnected ministry systems, exporting to Excel, and rebuilding charts each week — work duplicated across 40+ analysts. During the pandemic, this broke completely: policy questions changed daily, but the tooling could not adapt in time. The deeper problem was trust. Analysts would not act on data they could not interrogate. Source, methodology, and recency had to be visible before adoption was possible.",

    approach: [
      "Mapped the complete analyst workflow backwards from briefing templates — found 80% of data needs recurred weekly and could be made automatic.",
      "Ran co-design workshops with 8 analysts to define the minimum viable briefing view — 6 charts appeared in over 90% of all briefings.",
      "Designed data provenance into every chart: source, methodology, and last-updated timestamp visible by default, not buried in documentation.",
      "Worked with domain experts to codify anomaly thresholds — making the dashboard's concern logic legible and contestable by analysts.",
      "Added an annotation layer so context notes attached to data points, not documents, and carried through to exports.",
    ],

    outcomePoints: [
      "Weekly briefing preparation time reduced from 3.2 hours to 45 minutes in beta testing with 8 analysts.",
      "Anomaly detection agreement between analysts: 34% baseline → 91% with shared traffic-light thresholds.",
      "Data trust score: 7.8/10 with provenance visible vs 4.2/10 without.",
      "Analyst NPS of +62 after four-week pilot.",
    ],

    problemDetails: [
      "No single view existed for cross-domain health indicators — COVID metrics, mental health waiting lists, GP capacity, and hospital bed availability all lived in separate ministry systems.",
      "Analysts were exporting to Excel, manually merging datasets, and building their own charts — work that was duplicated across 40+ analysts each week.",
      "When policy questions changed rapidly (as they did during COVID-19), the tooling couldn't adapt — new metrics took weeks to surface.",
    ],

    researchObjectives: [
      "Understand the end-to-end workflow of a policy analyst from data need to briefing document",
      "Identify which decisions are made with which data, and at what frequency",
      "Map the trust hierarchy — which data sources are trusted, which are contested",
      "Discover what 'good enough' looks like for different decision types",
    ],

    targetUsers: [
      {
        name: "The Policy Analyst",
        description:
          "Prepares briefings for directors and ministers. Needs to surface trends quickly, flag anomalies, and explain 'why' — not just 'what.' Heavy Excel user. Sceptical of tools that hide methodology.",
      },
      {
        name: "The Director",
        description:
          "Receives briefings, makes funding and policy recommendations. Needs high-level summaries with drill-down capability. No time for complexity — needs to trust the numbers at a glance.",
      },
      {
        name: "The Data Steward",
        description:
          "Maintains data quality, flags inconsistencies, updates definitions. Needs admin capability and audit trails. Often the bottleneck for new data connections.",
      },
    ],

    researchFindings: [
      {
        insight: "Analysts distrust data they can't interrogate",
        detail:
          "Every analyst interviewed said they would not use a dashboard they couldn't 'see behind.' They needed to understand data sources, recency, and methodology — not just charts. Trust was the primary adoption barrier, not usability.",
      },
      {
        insight: "Briefing structure determined what data was needed",
        detail:
          "By mapping backwards from briefing templates, we found that 80% of the data needed was the same each week. We designed the dashboard around these recurring questions rather than free-form exploration.",
      },
      {
        insight: "Anomaly detection was done manually and inconsistently",
        detail:
          "12 of 14 analysts had their own informal rules for flagging unusual data — but these weren't shared. What one analyst flagged as an emergency, another ignored. The system needed a consistent, shared definition of 'something changed significantly.'",
      },
      {
        insight: "Context was as important as data",
        detail:
          "Raw numbers alone were insufficient for ministerial briefings. Analysts needed to attach contextual notes ('this spike is due to reporting delay, not actual increase') — currently done in separate documents that got lost.",
      },
    ],

    ideation: [
      {
        description:
          "We ran a co-design workshop with 8 analysts to define the 'minimum viable briefing.' This revealed that 6 charts appeared in over 90% of all briefings — these became the dashboard's persistent primary view.",
        image: "/corona1.png",
      },
      {
        description:
          "Explored 'annotation layers' — allowing analysts to attach notes directly to data points that would carry through to exported briefings. This bridged the gap between the dashboard and the Word documents where context currently lived.",
        image: "/Ministerie-VWS-logo.png",
      },
    ],

    wireframes: [
      {
        description:
          "The primary view: a persistent 6-metric overview with traffic-light status, trend sparklines, and last-updated timestamps. Designed to answer 'is anything wrong this week?' in under 60 seconds.",
        image: "/corona1.png",
      },
      {
        description:
          "Drill-down view: clicking any metric expanded to a full data view with source attribution, historical trend, and an annotation panel. Data methodology was one click away, not buried in documentation.",
        image: "/corona1.png",
      },
    ],

    designDecisions: [
      {
        decision: "Data provenance visible on every chart",
        reasoning:
          "We added source, methodology, and last-updated information to every visualisation because analysts refused to use dashboards they couldn't verify. This wasn't nice-to-have — without it, the tool would not be adopted.",
      },
      {
        decision: "Traffic-light status with explicit thresholds",
        reasoning:
          "We implemented consistent status indicators because the manual, inconsistent anomaly detection was creating divergent interpretations. We worked with domain experts to codify thresholds — making the system's 'concern logic' legible and contestable.",
      },
      {
        decision: "Export-first design philosophy",
        reasoning:
          "Every chart was designed with export in mind — formatting matched ministry briefing templates. We changed our approach after discovering that analysts abandoned tools that didn't fit their output workflow, regardless of how good the exploration was.",
      },
      {
        decision: "Annotation system built into the data layer",
        reasoning:
          "Notes are attached to data points, not to documents, because context was being lost when the Excel files got passed around. Annotations persist, are versioned, and appear in exports — solving the institutional knowledge problem.",
      },
    ],

    iterations: [
      {
        version: "V1",
        change: "All metrics shown by default",
        reason:
          "Cognitive overload in testing. Directors wanted a summary view; analysts wanted detail. Implemented role-based default views — same dashboard, different starting state.",
        shipped: false,
      },
      {
        version: "V2",
        change: "Revised traffic-light thresholds",
        reason:
          "Domain experts contested the initial thresholds in review. Made threshold definitions visible and editable by data stewards — the dashboard's opinion could now be questioned and updated without a dev release.",
        shipped: false,
      },
      {
        version: "V3",
        change: "Added 'briefing builder' mode",
        reason:
          "Analysts were still exporting to PowerPoint and re-building charts. Added a selection mode to pin charts to a briefing output — reducing post-export work by approximately 70%.",
        shipped: true,
      },
    ],

    finalPrototype: [
      "/corona1.png",
      "/corona2.png",
      "/corona3.png",
      "/Ministerie-VWS-logo.png",
    ],

    usabilityResults: [
      {
        metric: "Weekly briefing preparation time",
        outcome: "Reduced from 3.2 hours average to 45 minutes in beta testing with 8 analysts",
      },
      {
        metric: "Data trust score",
        outcome: "7.8/10 with provenance visible vs 4.2/10 without — confirming that transparency was the primary adoption lever",
      },
      {
        metric: "Anomaly detection consistency",
        outcome: "Agreement between analysts on 'significant changes': 34% baseline → 91% with shared traffic-light thresholds",
      },
      {
        metric: "Analyst NPS",
        outcome: "Net Promoter Score of +62 after 4-week pilot — well above the 30+ threshold for strong product-market fit",
      },
    ],
  },

  {
    slug: "umcg-patient-portal",
    title: "UMCG Patient Portal",
    description:
      "Redesigning how patients manage their health journey at one of the Netherlands' largest university medical centres.",
    image: "/umcg1.png",
    tags: ["Healthcare UX", "Accessibility", "Complex Systems", "Research"],
    role: "UX/UI Designer",
    tools: ["Figma", "FigJam", "UserZoom", "Axure"],
    timeline: "Feb 2022 – June 2022 (4 months)",
    highlight: "58% mobile usage",

    summary:
      "UMCG's patient portal was organised around hospital departments — not patient journeys. Patients managing a chronic condition had to navigate five separate areas to understand their own care. I restructured the portal around a single timeline and replaced clinical jargon with plain-language summaries.",

    metric: { label: "Core task completion on mobile", value: "23% → 91%" },

    problem:
      "Patients were cancelling 22% of appointments and frequently missed critical lab results, not due to disinterest, but because the portal's information architecture was designed around hospital departments — not patient journeys. The system made patients do the work of being their own care coordinator.",

    context:
      "The portal served patients across every department of one of the Netherlands' largest university medical centres. Its information architecture reflected the hospital's internal structure — appointments, lab results, referrals, and messages all in separate silos. Patients were doing the work of being their own care coordinator. On top of that, 58% of usage happened on mobile against a desktop-only interface, and medical jargon throughout caused patients to disengage and call the hospital instead.",

    approach: [
      "Ran card sorting with 30 patients — 93% grouped information by journey stage, not by hospital department. This inverted our entire navigation model.",
      "Mapped emotional peaks and valleys through the patient digital journey, identifying lab results as the highest-stress touchpoint.",
      "Redesigned the home screen around a unified health timeline — surfacing the most urgent items first regardless of department.",
      "Replaced clinical jargon with plain-language summaries as the default, with raw data available behind a 'View full results' toggle.",
      "Designed a formal carer delegation system to replace the informal shared-login workaround used by 35% of elderly patients.",
    ],

    outcomePoints: [
      "Appointment preparation task completion improved from 34% to 89%; average time reduced from 4.2 min to 58 seconds.",
      "Lab result comprehension: patients who correctly interpreted their own results went from 31% to 84% with the plain-language layer.",
      "Anxiety score for the results-viewing flow reduced from 3.8 to 2.1 (self-reported, 1–5 scale).",
      "Core 5 flows on mobile: 23% → 91% completion after mobile-first redesign.",
    ],

    problemDetails: [
      "Appointments, lab results, referrals, and messages lived in completely separate sections with no connective thread — a patient managing a chronic condition had to navigate 5+ areas to understand their own situation.",
      "Medical terminology was used throughout without explanation, creating anxiety and confusion for patients managing serious diagnoses.",
      "The portal was inaccessible on mobile for 67% of tasks, yet 58% of patient portal usage happened on phone.",
    ],

    researchObjectives: [
      "Map the complete mental model of how patients think about their own healthcare versus how hospitals organise it",
      "Identify the emotional peaks and valleys in the patient digital journey",
      "Understand what information patients need before, during, and after appointments",
      "Discover how patients with chronic conditions manage ongoing care differently from one-time patients",
    ],

    targetUsers: [
      {
        name: "The Chronic Condition Patient",
        description:
          "Lives with a long-term condition (diabetes, MS, heart disease). Has frequent touchpoints with multiple departments. Needs a longitudinal view of their health, not disconnected appointment snapshots.",
      },
      {
        name: "The Anxious First-Timer",
        description:
          "Referred by GP, uncertain what to expect. Arrives at the portal to prepare for an appointment but finds jargon and complexity. Needs orientation, reassurance, and plain language.",
      },
      {
        name: "The Elderly Patient",
        description:
          "Ages 65+, lower digital confidence, often accessing on behalf of family. Needs large text, simple flows, and no assumed tech literacy.",
      },
    ],

    researchFindings: [
      {
        insight: "Patients think in journeys, not departments",
        detail:
          "In card sorting with 30 participants, 93% grouped 'appointment prep', 'what to bring', and 'parking/directions' together — not 'appointment details' and 'logistics' separately. The hospital's organisational structure was completely invisible to patients.",
      },
      {
        insight: "Medical jargon caused patients to disengage",
        detail:
          "Cognitive walkthroughs showed that 'serum ferritin levels (μg/L)' caused participants to close the app and call the hospital instead. Plain language alternatives were requested consistently across all age groups.",
      },
      {
        insight: "Lab results are the most anxiety-producing touchpoint",
        detail:
          "8 of 12 interview participants mentioned checking lab results as their highest-stress interaction. The existing design presented raw numbers with no reference ranges or plain-language explanation, leaving patients to Google interpret their own results.",
      },
      {
        insight: "Carers are invisible users",
        detail:
          "35% of elderly patients had family members who needed to access the portal on their behalf. There was no mechanism for this — carers were using patients' login credentials, creating privacy and usability problems.",
      },
    ],

    ideation: [
      {
        description:
          "We explored a 'My Health Timeline' concept — a chronological view of the patient's journey, surfacing the most recent and most urgent items first, regardless of which department they belonged to. This became the north star for the IA redesign.",
        image: "/umcg-charts.png",
      },
      {
        description:
          "For lab results, we explored a 'results card' pattern: each result shown as a plain-language card ('Your iron levels are slightly low — your doctor may discuss this at your next appointment') before offering the raw data for those who wanted it.",
        image: "/UMCGN.png",
      },
    ],

    wireframes: [
      {
        description:
          "The redesigned home screen surfaced 'Your next appointment' and 'Recent results' as primary cards, replacing the department-navigation grid. 78% of users in testing could find their appointment in under 10 seconds vs 34% previously.",
        image: "/UMCGN.png",
      },
      {
        description:
          "Lab results redesign: progressive disclosure approach — plain language summary visible immediately, raw data behind a 'View full results' toggle. Tested with 15 patients; anxiety scores decreased significantly.",
        image: "/umcg-charts.png",
      },
    ],

    designDecisions: [
      {
        decision: "Timeline-first information architecture",
        reasoning:
          "We changed from department-based navigation to a unified timeline because patients consistently failed to complete multi-step tasks (e.g. checking a result and then finding the related appointment) using the old structure. The timeline reduced cross-navigation by 64%.",
      },
      {
        decision: "Plain language layer over clinical data",
        reasoning:
          "We added plain-language summaries as the default view because patients were Googling their medical terms and arriving at alarming, incorrect conclusions. Clarity reduced inbound phone calls to the hospital's admin line by an estimated 18%.",
      },
      {
        decision: "Mobile-first redesign of all core flows",
        reasoning:
          "We rebuilt the core 5 flows (appointments, results, messages, prescriptions, referrals) as mobile-first because analytics showed 58% mobile usage against an interface designed exclusively for desktop. The previous mobile experience broke completely at narrow viewports.",
      },
      {
        decision: "Carer access flow",
        reasoning:
          "We designed a formal carer delegation system because the informal workaround (shared login) created GDPR exposure and prevented us from personalising the experience. Giving carers their own access token solved both the security problem and the usability problem.",
      },
    ],

    iterations: [
      {
        version: "V1",
        change: "Plain language results summary only",
        reason:
          "Patients with medical backgrounds were frustrated by the removal of clinical data. Added progressive disclosure — plain language first, clinical data available but not default.",
        shipped: false,
      },
      {
        version: "V2",
        change: "Revised appointment prep checklist",
        reason:
          "First version showed a generic checklist. Patients needed department-specific prep (radiology vs surgical consultation are very different). Made it dynamic based on appointment type.",
        shipped: false,
      },
      {
        version: "V3",
        change: "Added 'last reviewed by doctor' timestamp to results",
        reason:
          "Critical: patients were anxious not knowing if their doctor had seen a result. Adding 'Dr. Smits reviewed this on 12 Jan' dramatically reduced follow-up calls and anxiety scores in testing.",
        shipped: true,
      },
    ],

    finalPrototype: [
      "/umcg1.png",
      "/umcg3.png",
      "/umcg-logo.png",
    ],

    usabilityResults: [
      {
        metric: "Appointment preparation task",
        outcome: "Completion rate improved from 34% to 89%; average time reduced from 4.2 min to 58 seconds",
      },
      {
        metric: "Lab result comprehension",
        outcome: "Patients who could correctly interpret their own results: 31% baseline → 84% with plain-language layer",
      },
      {
        metric: "Anxiety score (self-reported, 1–5)",
        outcome: "Reduced from 3.8 to 2.1 for the results-viewing flow — the portal's most emotionally charged touchpoint",
      },
      {
        metric: "Mobile task completion",
        outcome: "Core 5 flows: 23% → 91% completion on mobile after mobile-first redesign",
      },
    ],
  },

  {
    slug: "agaming-onboarding",
    title: "AGaming Onboarding",
    description:
      "Redesigning first-run experience for a competitive gaming platform — reducing drop-off by 61% in the critical first 10 minutes.",
    image: "/ag00.jpg",
    tags: ["Onboarding", "Retention", "Gamification", "Mobile-first"],
    role: "UX Designer",
    tools: ["Figma", "FullStory", "Amplitude", "Lottie"],
    timeline: "Feb 2017 – Sep 2019 (2 years, 7 months)",
    highlight: "Consumer / B2C",

    summary:
      "61% of new users left AGaming within their first ten minutes. The onboarding was a 12-step form designed around the team's internal model of the product — not a player's first experience. I reduced it to three fields, led with value, and got players to their first match.",

    metric: { label: "First-session completion", value: "39% → 94%" },

    problem:
      "61% of new users abandoned the platform within the first 10 minutes. The product was technically strong, but the onboarding was a 12-step form designed for the team's internal understanding of the product — not for a new player's first experience. We were losing players before they'd had a single good moment.",

    context:
      "AGaming was a competitive skill-based matchmaking platform entering a market where players already had Steam and Epic as defaults. New users arrived expecting to play. Instead, the product presented a 12-field configuration form — many fields collected for analytics with no downstream personalisation impact. Seven of twelve fields had no effect on the user experience at all. The platform's core differentiator was completely invisible throughout onboarding.",

    approach: [
      "Audited every onboarding field against its actual product use — found 7 of 12 had no downstream personalisation impact and were collected 'just in case.'",
      "Used FullStory recordings and Amplitude funnel data to pinpoint drop-off to step 4: a checkbox screen with no context or payoff visible.",
      "Designed a value proposition screen before any data collection — giving users a reason to complete setup before asking for anything.",
      "Reduced required fields from 12 to 3: name and avatar, skill level, and a single match preference.",
      "Added progressive disclosure — all other preferences collected through play behaviour rather than upfront self-report.",
    ],

    outcomePoints: [
      "Onboarding completion rate: 39% → 94% after reducing to three required fields.",
      "Time to first match reduced from 8.4 minutes to 2.1 minutes.",
      "Day-1 retention for users who completed new onboarding: 71% vs 34% with the old flow.",
      "Users who could articulate the platform's differentiator after onboarding: 9% → 78%.",
    ],

    problemDetails: [
      "The onboarding collected 12 fields of data before users could do anything. Many fields were for analytics purposes only — not to improve the user experience.",
      "New users arrived expecting to play. Instead, they got a settings configuration wizard. The fun was 12 steps away.",
      "The platform's core value proposition — competitive skill-based matchmaking — was invisible during onboarding. Users had no idea what made this platform worth the friction.",
    ],

    researchObjectives: [
      "Identify exactly where in the onboarding funnel users dropped off and why",
      "Understand what new players expected when they first arrived",
      "Discover what 'good first moment' looked like — when did users first feel engaged?",
      "Identify which onboarding data was truly necessary vs nice-to-have for the platform",
    ],

    targetUsers: [
      {
        name: "The Competitive Gamer",
        description:
          "Ages 16–28, experienced with gaming platforms, high standards for product quality. Drops immediately if the experience feels amateur. Needs to understand why this platform is worth their time within seconds.",
      },
      {
        name: "The Casual Newcomer",
        description:
          "Ages 18–35, lighter gaming background, came via a friend or content recommendation. Overwhelmed by too many choices and jargon. Needs gentle guidance to their first win.",
      },
    ],

    researchFindings: [
      {
        insight: "Drop-off spike at step 4 of 12",
        detail:
          "FullStory recordings showed that most users who abandoned did so at the 'game preferences' screen — 8 checkboxes, no context. Users didn't know what they were configuring or why it mattered for their experience.",
      },
      {
        insight: "Users expected immediate play",
        detail:
          "Session recordings showed users clicking on gameplay elements during the onboarding form — looking for a way to skip. The mental model was 'I came to play, not to fill a form.' The mismatch was the root problem.",
      },
      {
        insight: "The platform's differentiator was completely invisible",
        detail:
          "In user interviews, 9 of 12 new users could not articulate what made AGaming different from Steam or Epic after completing onboarding. The value proposition was nowhere in the flow.",
      },
      {
        insight: "Social proof accelerated commitment",
        detail:
          "In comparative analysis, platforms that showed community size, active players, and match outcomes during onboarding had 2.4× higher completion rates. Social validation reduced the 'is this worth my time?' uncertainty.",
      },
    ],

    ideation: [
      {
        description:
          "We challenged the assumption that onboarding had to come before playing. Explored a 'play first, setup later' model — let users into a guided match immediately, collect preferences progressively through play behaviour rather than self-report.",
        image: "/agaming-mobile.png",
      },
      {
        description:
          "Mapped every data point collected in the current flow against its actual product use — found that 7 of 12 fields had no downstream personalisation impact. They were collected 'just in case' and never used.",
        image: "/AGaming.png",
      },
    ],

    wireframes: [
      {
        description:
          "Reduced onboarding to 3 screens: (1) name + avatar, (2) skill level (self-reported, can change), (3) first match. Everything else deferred to in-product progressive disclosure. Completion rate in prototype testing: 94%.",
        image: "/agaming-mobile.png",
      },
      {
        description:
          "Added a 'what you'll get here' moment before the form — 15-second animated value proposition showing real match highlights and community stats. Gave users a reason to complete the (now shorter) setup.",
        image: "/iPhoneX-03a.png",
      },
    ],

    designDecisions: [
      {
        decision: "Reduced required onboarding fields from 12 to 3",
        reasoning:
          "We audited every field with the product and data teams. 7 fields had zero downstream impact. 2 could be inferred from play behaviour. We cut them because the data showed they were costing us 61% of users — not a reasonable trade-off for marginal analytics value.",
      },
      {
        decision: "Value proposition screen before any data collection",
        reasoning:
          "Users were being asked to invest without understanding the return. We changed the flow to lead with 'here's why this is worth 90 seconds of your time' before asking for anything — because users who understood the value were 3.1× more likely to complete setup.",
      },
      {
        decision: "Animated micro-interactions for every step completion",
        reasoning:
          "Added progress celebration (subtle particle effect + sound) after each completed step because gamers have been trained by games to expect feedback loops. The dopamine hit from micro-rewards increased step-to-step continuation rates in testing.",
      },
      {
        decision: "Skill level as a slider, not a dropdown",
        reasoning:
          "A dropdown with labels ('Beginner', 'Intermediate', 'Expert') caused users to underreport their skill to avoid early losses. A slider with 'how you feel about playing' framing produced more accurate self-assessment and better initial matchmaking.",
      },
    ],

    iterations: [
      {
        version: "V1",
        change: "Play-first model (no setup)",
        reason:
          "Technically elegant but matchmaking quality was poor without even basic skill data. Players got badly mis-matched first games and churned from frustration. Reintroduced minimal required input (3 fields) before first match.",
        shipped: false,
      },
      {
        version: "V2",
        change: "Avatar selection added",
        reason:
          "Identity expression early in onboarding increased emotional investment. Users who chose an avatar were 2.1× more likely to return the next day. Worth the one extra step.",
        shipped: false,
      },
      {
        version: "V3",
        change: "Friend invite as final onboarding step",
        reason:
          "Social commitment device — users who invited a friend had a 4× higher 30-day retention rate. Made it feel like sharing excitement, not a referral programme. Optional but prominently featured.",
        shipped: true,
      },
    ],

    finalPrototype: [
      "/ag00.jpg",
      "/ag01.png",
      "/ag02.jpg",
      "/ag003.png",
      "/ag002.png",
      "/ag001.png",
      "/agaming.webp",
    ],

    usabilityResults: [
      {
        metric: "Onboarding completion rate",
        outcome: "Increased from 39% to 94% — 61 percentage point improvement after reducing to 3 required fields",
      },
      {
        metric: "Time to first match",
        outcome: "Reduced from 8.4 minutes average to 2.1 minutes",
      },
      {
        metric: "Day-1 retention",
        outcome: "Users who completed new onboarding: 71% returned next day vs 34% with old flow",
      },
      {
        metric: "Value proposition clarity",
        outcome: "Users who could articulate platform differentiator after onboarding: 9% → 78%",
      },
    ],
  },
//   {
//     slug: "wawa-design-system",
//     title: "Asia Gaming ",
//     description:
//       "Building a scalable, accessible design system for a multi-platform retail brand — reducing design-to-dev handoff time by 70%.",
//     image: "/ag1.png",
//     tags: ["Design Systems", "Accessibility", "Multi-platform", "Component Library"],
//     role: "Design Systems Lead",
//     tools: ["Figma", "Storybook", "Zeroheight", "Chromatic"],
//     timeline: "Feb 2024 – Aug 2024 (7 months)",

//     problem:
//       "Wawa's product teams were operating with 4 disconnected UI libraries — one per platform — leading to visual inconsistency, duplicated effort, and a 3-week average handoff lag between design and engineering. New features shipped with divergent styles across web, iOS, and Android.",
//     problemDetails: [
//       "Components were defined independently by each platform team, meaning a 'button' had 11 different implementations with different states, colours, and interaction patterns.",
//       "Accessibility was applied inconsistently — some components met WCAG 2.1 AA, others failed basic contrast checks. There was no single source of truth for compliance.",
//       "Design tokens didn't exist — values like colour, spacing, and typography were hardcoded in Figma frames and code, making brand updates a multi-week manual operation.",
//     ],

//     researchObjectives: [
//       "Audit the existing component landscape across all 4 platforms to identify duplication and divergence",
//       "Understand how designers and engineers currently collaborate — where handoff breaks down",
//       "Define what 'done' looks like for a component from both design and engineering perspectives",
//       "Establish adoption criteria — what would make teams switch from their current libraries",
//     ],

//     targetUsers: [
//       {
//         name: "The Product Designer",
//         description:
//           "Builds features across web and mobile. Needs components that are flexible enough to solve their design problem but opinionated enough to maintain consistency. Frustrated by components that break when customised.",
//       },
//       {
//         name: "The Frontend Engineer",
//         description:
//           "Implements design specs in code. Values clear documentation, predictable API, and components that don't require reverse-engineering the Figma file to understand intended behaviour.",
//       },
//       {
//         name: "The Accessibility Lead",
//         description:
//           "Responsible for WCAG compliance across products. Needs every component to have documented accessibility annotations and tested keyboard/screen reader behaviour before it reaches production.",
//       },
//     ],

//     researchFindings: [
//       {
//         insight: "Teams were building the same component up to 6 times",
//         detail:
//           "Component audit across 4 platforms and 3 product teams found 6 distinct implementations of a date picker, none sharing logic or visual language. Engineers estimated 2–3 weeks per redundant implementation — representing significant ongoing waste.",
//       },
//       {
//         insight: "Handoff failures were documentation failures",
//         detail:
//           "In interviews with 14 engineers, the most common complaint was not missing components but missing specification — interaction states, error conditions, edge cases, and responsive behaviour were left to engineering interpretation.",
//       },
//       {
//         insight: "Adoption required proof, not promise",
//         detail:
//           "Teams that had tried shared libraries before were burned by libraries that fell behind. They would only adopt the new system if it could demonstrate maintenance commitment — active ownership, clear versioning, and a public roadmap.",
//       },
//       {
//         insight: "Tokens were the highest-leverage intervention",
//         detail:
//           "By mapping a single brand colour update across all platforms, we found it would require changes to 847 hardcoded values across design files and codebases. A token layer reduced this to a single source change propagating everywhere.",
//       },
//     ],

//     ideation: [
//       {
//         description:
//           "Ran a two-day component audit workshop with designers and engineers from each platform. Used a traffic-light system — red (diverged/broken), amber (similar but inconsistent), green (reusable as-is). Identified 23 green components to migrate immediately as quick wins.",
//         image: "/wawa-logo.svg",
//       },
//       {
//         description:
//           "Explored two structural models: a 'monorepo' approach with one canonical component set, vs a 'hub and spoke' model with platform-specific extensions built on a shared core. Hub and spoke won — it respected platform conventions while enforcing shared foundations.",
//       },
//     ],

//     wireframes: [
//       {
//         description:
//           "Component documentation template: each component page included a usage decision tree ('when to use / when not to use'), all variants and states, accessibility annotations, and a live code example. Reduced engineer questions per component from 8 avg to 1.2.",
//         image: "/wawa-logo.svg",
//       },
//       {
//         description:
//           "Token architecture diagram: three-layer token system — global (raw values), semantic (purpose-named), component (applied). A brand colour change at the global layer propagated to semantic and component tokens automatically.",
//         image: "/wawa-logo.svg",
//       },
//     ],

//     designDecisions: [
//       {
//         decision: "Three-tier token architecture (global → semantic → component)",
//         reasoning:
//           "We implemented a three-layer token system because direct component-to-value mapping broke on brand updates — changing a button colour required updating dozens of individual references. Semantic tokens ('color-action-primary') decoupled meaning from value, making rebranding a one-line change.",
//       },
//       {
//         decision: "Accessibility annotations as required component documentation",
//         reasoning:
//           "We made accessibility specs non-optional in the component contribution checklist because optional meant skipped. Every component now ships with keyboard navigation map, ARIA role documentation, and screen reader output. WCAG AA compliance went from 61% to 100% of shipped components.",
//       },
//       {
//         decision: "Public roadmap and versioned changelog",
//         reasoning:
//           "We published a roadmap and enforced semantic versioning because teams refused to adopt a system they didn't trust to be maintained. Transparency about what was coming and what had changed reduced adoption resistance and gave teams confidence to build on top of the system.",
//       },
//       {
//         decision: "Visual regression testing on every PR via Chromatic",
//         reasoning:
//           "We added automated screenshot comparison because manually reviewing component changes across platforms was impractical and changes were breaking visual consistency silently. Chromatic flagged regressions before merge, not after.",
//       },
//     ],

//     iterations: [
//       {
//         version: "V1",
//         change: "Flat component structure",
//         reason:
//           "Primitive and composite components were mixed at the same level, causing confusion about dependency chains. Introduced 'atoms → molecules → organisms' hierarchy, making composition relationships explicit.",
//       },
//       {
//         version: "V2",
//         change: "Revised contribution process",
//         reason:
//           "Initial process required design system team approval for every component — a bottleneck. Changed to a 'propose → draft → review → publish' model where platform teams could draft components autonomously, with DS team only reviewing before publish.",
//       },
//       {
//         version: "V3",
//         change: "Added dark mode token layer",
//         reason:
//           "Dark mode requirements came in mid-project. Semantic tokens made this feasible — we added a dark-mode value set without restructuring any components. Tokens proved their value immediately.",
//       },
//     ],

//     finalPrototype: [
//       "/ag2.png",
//       "/ag3.png",
//       "/ag4.png",
//       "/ag5.png",
//     ],

//     usabilityResults: [
//       {
//         metric: "Design-to-dev handoff time",
//         outcome: "Reduced from 3 weeks average to 4 days — 70% reduction across all platform teams",
//       },
//       {
//         metric: "Component duplication",
//         outcome: "From 6 average implementations per UI pattern to 1 shared implementation with platform extensions",
//       },
//       {
//         metric: "WCAG AA compliance",
//         outcome: "61% of components passing → 100% of shipped components passing, with automated regression testing",
//       },
//       {
//         metric: "Brand update propagation time",
//         outcome: "Global colour update: 3 weeks manual → 2 hours with token architecture",
//       },
//     ],
//   },

//   {
//     slug: "codecomedy-creator-tools",
//     title: "Codecomedy Creator Tools",
//     description:
//       "Designing a content creation suite for developer educators — helping technical creators produce and publish programming content 3× faster.",
//     image: "/Codecomedy.png",
//     tags: ["Creator Tools", "EdTech", "Productivity", "SaaS"],
//     role: "Product Designer",
//     tools: ["Figma", "Maze", "Hotjar", "Linear"],
//     timeline: "Oct 2023 – Feb 2024 (5 months)",

//     problem:
//       "Developer educators using Codecomedy were spending 70% of their production time on tasks outside their expertise — video editing, thumbnail creation, SEO formatting, and code snippet styling — not on the technical content itself. The platform had no creation tools; creators were stitching together 6+ external tools to publish a single lesson.",
//     problemDetails: [
//       "Code snippets required manual export from IDE, screenshot, resize, watermark, and upload — an 8-step process repeated for every lesson segment.",
//       "Creators had no visibility into which content performed best until after publication, missing the ability to iterate before publishing.",
//       "The publishing workflow required manual metadata entry across 3 systems — the platform, YouTube, and a newsletter — duplicating effort that creators described as 'the part that kills momentum.'",
//     ],

//     researchObjectives: [
//       "Map the complete content production workflow from idea to published lesson",
//       "Identify which steps consumed the most time relative to their creative value",
//       "Understand what 'flow state' looked like for technical creators and what broke it",
//       "Discover what tools creators already loved and why, to inform integration decisions",
//     ],

//     targetUsers: [
//       {
//         name: "The Independent Creator",
//         description:
//           "Publishes 1–4 lessons per month alongside a day job. Time is the critical constraint. Values automation that eliminates repetitive tasks. Unlikely to invest time in learning complex new tools.",
//       },
//       {
//         name: "The Full-Time Educator",
//         description:
//           "Publishes 2–3 lessons per week, treats this as a business. Cares deeply about production quality and analytics. Will invest in learning powerful tools if the ROI is clear.",
//       },
//     ],

//     researchFindings: [
//       {
//         insight: "Code formatting consumed 40% of production time",
//         detail:
//           "Time-diary study with 12 creators showed that code snippet preparation — including syntax highlighting, line numbering, and visual styling — consumed an average of 40% of total production time. This was the single highest-leverage intervention point.",
//       },
//       {
//         insight: "Context switching was the productivity killer",
//         detail:
//           "Creators switched between an average of 7.3 tools per lesson. Each switch cost not just transition time but cognitive context — multiple creators described losing their 'teaching voice' when returning from Photoshop or Premiere.",
//       },
//       {
//         insight: "Pre-publication preview was a critical missing feature",
//         detail:
//           "8 of 12 creators described publishing a lesson and then immediately identifying improvements they would have caught with a preview. The absence of a realistic preview was causing avoidable post-publication edits — damaging audience experience.",
//       },
//       {
//         insight: "Creators wanted analytics during creation, not just after",
//         detail:
//           "The most successful creators had developed intuitions for what worked — specific code complexity levels, lesson lengths, topic clusters. They wanted these patterns surfaced during creation ('similar lessons averaged 4.2k views') to inform decisions before publishing.",
//       },
//     ],

//     ideation: [
//       {
//         description:
//           "The 'single canvas' concept — a creation environment where code, narration script, video segments, and publish settings all lived in one view. Inspired by Notion's block model but optimised for the lesson structure of technical content.",
//         image: "/Codecomedy.png",
//       },
//       {
//         description:
//           "Explored a 'smart snippet' system: paste raw code, the tool automatically applies syntax highlighting, suggests visual styles based on lesson topic, and packages it for multiple export targets (web, YouTube thumbnail, newsletter) simultaneously.",
//         image: "/Codecomedy.png",
//       },
//     ],

//     wireframes: [
//       {
//         description:
//           "Lesson canvas: code block editor with live preview, inline script notes, and a sidebar showing estimated read/watch time and audience match score. Designed to keep creators in one place for 80% of their workflow.",
//         image: "/Codecomedy.png",
//       },
//       {
//         description:
//           "One-click publish: after creation, a single 'Publish' action generated all format variants and pushed to platform, YouTube description, and newsletter — with per-channel customisation available but not required.",
//         image: "/Codecomedy.png",
//       },
//     ],

//     designDecisions: [
//       {
//         decision: "Code editor with live visual output instead of separate styling step",
//         reasoning:
//           "We integrated a styled code editor because the separate export-and-style process was identified as the highest time cost. Combining editing and presentation meant creators could see their final snippet appearance while writing — eliminating the back-and-forth entirely.",
//       },
//       {
//         decision: "Contextual performance hints during creation",
//         reasoning:
//           "We surfaced lightweight analytics ('your last 5 JavaScript lessons averaged 3.8k views, 12% above your mean') during creation because creators made better content decisions with comparable data nearby. We kept it unobtrusive — a collapsed sidebar, not a dashboard — to preserve focus.",
//       },
//       {
//         decision: "Multi-target publish from a single action",
//         reasoning:
//           "We reduced the publish flow to one action with channel-specific overrides available because creators consistently said the metadata duplication was the moment they lost momentum. Optional customisation preserved flexibility; the default handled the common case automatically.",
//       },
//       {
//         decision: "Block-based lesson structure instead of free-form editor",
//         reasoning:
//           "We used a structured block model (intro / concept / code / summary) because unstructured editors produced lessons with inconsistent quality. The blocks also enabled type-specific features — a code block got the snippet editor; a concept block got vocabulary highlighting.",
//       },
//     ],

//     iterations: [
//       {
//         version: "V1",
//         change: "Fully integrated video editor",
//         reason:
//           "Scope was too large and competed with tools creators already loved (Premiere, ScreenFlow). Scoped back to code and written content, with video as an embeddable asset — playing to our strengths rather than replicating established tools.",
//       },
//       {
//         version: "V2",
//         change: "Performance hints redesign",
//         reason:
//           "First version showed a persistent analytics panel that creators found distracting. Moved to an on-demand card triggered by a single icon — present when wanted, invisible when not.",
//       },
//       {
//         version: "V3",
//         change: "Added collaborative editing for team accounts",
//         reason:
//           "Several creator studios had co-authors and editors. Adding comment and suggestion mode on lesson blocks unlocked a new segment — small creator businesses with editorial workflows.",
//       },
//     ],

//     finalPrototype: [],

//     usabilityResults: [
//       {
//         metric: "Lesson production time",
//         outcome: "Reduced from average 6.8 hours to 2.3 hours — a 3× improvement for the median creator",
//       },
//       {
//         metric: "Tool switching per lesson",
//         outcome: "From 7.3 average external tools to 1.8 — creators remained in-platform for 80% of their workflow",
//       },
//       {
//         metric: "Publish workflow time",
//         outcome: "Multi-channel publish reduced from 47 minutes average to 6 minutes with one-click publish",
//       },
//       {
//         metric: "Creator satisfaction (NPS)",
//         outcome: "Net Promoter Score increased from +18 to +71 after creator tools launch — highest in platform history",
//       },
//     ],
//   },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug);
}
