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
  video?: string;
}

export const projects: Project[] = [
  {
    slug: "synqd",
    title: "Synqd · Health & Fitness Platform",
    description:
      "UX research and product design for a complex AI-personalised health platform — making blood-test data, body metrics, nutrition, and workout tracking feel intuitive for every user.",
    image: "/synqd.png",
    tags: ["Health Tech", "UX Research", "Complex Systems", "AI-Personalisation", "Mobile"],
    role: "UX Researcher & Product Designer",
    tools: ["Figma", "Figma AI", "Claude AI", "Claude Code", "Maze", "Hotjar", "Google Analytics"],
    timeline: "June 2026",

    subtitle: "Turning medical complexity into everyday clarity",

    summary:
      "Synqd is a health platform that goes far beyond step counting — it integrates blood test results, body composition, nutrition, and workout data into a single AI-personalised dashboard. The core UX challenge was making a medically complex, multi-metric system feel completely intuitive to users with no clinical background.",

    metric: { label: "System complexity", value: "Blood tests · AI · 10+ health metrics · gamification" },

    contextParagraphs: [
      "Synqd combines clinical-grade data — blood test results, body fat percentage, macronutrient tracking, and personalised workout programming — into a single mobile platform used by everyday health-conscious users.",
      "The platform's differentiator is depth: where most fitness apps track steps or calories, Synqd uses blood biomarker data to calculate personalised nutritional targets, exercise recommendations, and health trajectories for each individual user.",
      "An AI layer generates personalised health structures based on each user's blood results, body metrics, and lifestyle inputs — creating a system that is uniquely powerful but risks being incomprehensible without careful UX design.",
      "The app was designed in Figma with Figma AI and Claude AI for ideation and component generation, and coded using Claude Code — making this an end-to-end AI-assisted product design and development project.",
    ],

    problem:
      "The platform contained 10+ interconnected health metrics — calories, macros, body fat, muscle mass, blood biomarkers, workout load, and AI-generated targets. Without intentional design, this complexity would overwhelm rather than empower users.",

    problemIntro: "Three compounding UX challenges defined the brief:",
    problemBullets: [
      "Metric overload: users were presented with clinical data (blood biomarkers, body composition percentages, XP progression) simultaneously — without a clear hierarchy of what to act on first.",
      "Health literacy gap: blood test integration introduced terminology most users had never encountered, creating anxiety rather than understanding without plain-language translation.",
      "AI personalisation opacity: the platform generated individualised targets from user data, but users couldn't understand why their targets differed from generic recommendations — reducing trust and adherence.",
    ],

    context:
      "Health data is inherently personal, complex, and emotionally charged. Designing for this domain requires deep understanding of how users relate to their own bodies — and where clinical accuracy and everyday comprehension come into direct tension.",

    approach: [
      "Conducted user interviews to map health literacy levels and emotional responses to different types of health data.",
      "Ran usability testing on the dashboard to identify which metrics caused confusion, anxiety, or disengagement.",
      "Redesigned the information hierarchy to surface the 3 most actionable metrics per day — everything else accessible but not competing for attention.",
      "Developed plain-language translations for all blood biomarker labels and AI-generated targets.",
      "Designed the gamification system (XP, levels, commitment badges) to motivate engagement without trivialising clinical data.",
      "Validated the simplified dashboard and metric explanations through iterative usability sessions.",
    ],

    approachSections: [
      {
        number: "1",
        title: "Understanding users' relationship with health data",
        body: "Before simplifying anything, I needed to understand how users thought and felt about the data they were receiving:",
        bullets: [
          "User interviews revealed three distinct health literacy profiles — from 'just tell me what to do' to 'I want to understand every number'",
          "Emotional mapping showed that blood test results triggered anxiety when presented without context — even when results were positive",
          "Users with fitness backgrounds found macro tracking intuitive; users without it found calorie goals demotivating without understanding why",
          "The XP and level system was universally positive — gamification reduced the clinical weight of health tracking without undermining seriousness",
        ],
        closing: "These profiles became the design framework: the interface needed to work for all three without forcing any user to engage with more complexity than they wanted.",
      },
      {
        number: "2",
        title: "Simplifying the dashboard without losing depth",
        body: "The existing dashboard surfaced all metrics simultaneously — creating cognitive overload at first load:",
        bullets: [
          "Redesigned the hierarchy around a single daily focus: calorie target as the primary action, macros as secondary, body and blood metrics as tertiary context",
          "Introduced progressive disclosure — today's targets front and centre, deeper analytics one tap away",
          "The 'Eetmeter' (food meter) arc visualisation was validated as the most instantly understandable element — retained and made more prominent",
          "Weekly workout progress reduced to a single completion percentage with a day-by-day visual — replacing a more complex load chart that confused users",
        ],
      },
      {
        number: "3",
        title: "Making blood test data comprehensible",
        body: "Blood biomarker integration was the platform's biggest differentiator — and its biggest comprehension risk:",
        bullets: [
          "Every biomarker was mapped to a plain-language explanation: 'Your ferritin is low — this affects energy levels and recovery. Your AI target has been adjusted.'",
          "Introduced a colour and plain-language status system (Optimaal / Aandacht / Actie) replacing raw clinical ranges",
          "AI-generated targets were explained with a visible rationale: 'Your protein target is higher than standard because your blood results show elevated muscle repair markers'",
          "Usability testing confirmed: users who saw the explanation were 3× more likely to follow the AI target than those who saw the number alone",
        ],
        closing: "Transparency about how the AI worked was as important as what it recommended.",
      },
      {
        number: "4",
        title: "AI personalisation and trust design",
        body: "The platform's AI personalisation was powerful but invisible — users didn't understand why their targets were different from anyone else's:",
        bullets: [
          "Designed a 'Why is this my target?' explanation layer for every AI-generated recommendation",
          "Introduced a personal health profile summary showing which inputs (blood results, body metrics, activity level) were driving each target",
          "Gamification system (XP, commitment levels like 'Toegewijd') designed to reward consistency rather than outcomes — reducing pressure on clinical results",
        ],
      },
    ],

    outcomePoints: [
      "Dashboard cognitive overload resolved — primary action (today's calorie target) identifiable within 3 seconds in usability testing.",
      "Blood biomarker comprehension rate increased from 28% to 81% with plain-language status system.",
      "AI target adherence improved when rationale was visible — users 3× more likely to follow personalised targets they could understand.",
      "Gamification system validated as motivating without trivialising clinical health data.",
      "Intuitive UX confirmed across all three health literacy profiles identified in user research.",
    ],

    impactStatement: "Making complex health data feel simple without dumbing it down is one of the hardest problems in health UX. Synqd required designing for clinical accuracy and everyday comprehension simultaneously — and validating that both were achieved.",

    problemDetails: [
      "10+ interconnected health metrics presented simultaneously with no clear action hierarchy.",
      "Blood biomarker results displayed in clinical format without plain-language translation — creating anxiety rather than understanding.",
      "AI-personalised targets visible to users without explanation of why they differed from standard recommendations.",
    ],

    researchObjectives: [
      "Map user health literacy levels and emotional responses to different types of health data",
      "Identify which metrics caused confusion, anxiety, or disengagement in the current dashboard",
      "Understand how users interpret AI-generated personalised targets",
      "Validate plain-language redesigns through iterative usability testing",
    ],

    targetUsers: [
      {
        name: "The Health Beginner",
        description: "Motivated to improve health but overwhelmed by clinical data. Needs clear daily actions, not a dashboard of metrics. Responds well to gamification and simple progress indicators.",
      },
      {
        name: "The Fitness Enthusiast",
        description: "Familiar with macros and workout tracking but new to blood-based personalisation. Wants to understand the science behind AI targets. High engagement if the rationale is visible.",
      },
      {
        name: "The Data-Driven User",
        description: "Wants full access to all biomarkers and AI logic. Will distrust the system if depth is hidden. Needs progressive disclosure to the full clinical data layer.",
      },
    ],

    researchFindings: [
      {
        insight: "Blood test results triggered anxiety without context",
        detail: "Even users with normal results experienced anxiety when seeing clinical biomarker ranges without plain-language explanation. The problem was not the data — it was the absence of meaning.",
      },
      {
        insight: "AI targets were distrusted without explanation",
        detail: "Users whose calorie or macro targets differed from standard recommendations assumed the AI was wrong. When shown a plain-language rationale ('your targets are higher because your blood markers show X'), trust and adherence increased significantly.",
      },
      {
        insight: "Gamification reduced clinical pressure",
        detail: "The XP and level system (Toegewijd, Level 12) was universally positive across all user types — it reframed health tracking as a consistency habit rather than a clinical obligation.",
      },
      {
        insight: "Three health literacy profiles required different information hierarchies",
        detail: "A single dashboard couldn't serve all users without progressive disclosure. The design needed a clear primary layer (daily actions) with depth available but not competing for attention.",
      },
    ],

    ideation: [
      {
        description: "Progressive disclosure architecture: daily targets as the primary layer, macro detail as secondary, blood and AI data as tertiary — accessed by users who want depth, invisible to those who don't.",
        image: "/synqd.png",
      },
      {
        description: "Plain-language biomarker status system: three levels (Optimaal / Aandacht / Actie) replacing raw clinical ranges — validated through user testing across all three health literacy profiles.",
        image: "/synqd.png",
      },
    ],

    wireframes: [
      {
        description: "Redesigned dashboard: calorie arc as primary visual, macros as secondary, workout progress as a single weekly completion bar. Daily action hierarchy clear within 3 seconds.",
        image: "/synqd.png",
      },
      {
        description: "AI target explanation layer: 'Why is this my target?' rationale visible for every personalised recommendation — connecting the AI output to the user's own blood and body data.",
        image: "/synqd.png",
      },
    ],

    designDecisions: [
      {
        decision: "Progressive disclosure for all clinical data",
        reasoning: "10+ metrics on one screen caused overload across all user types. Primary layer shows today's 3 actionable targets; depth is one tap away. Validated through usability testing — no user reported missing important information.",
      },
      {
        decision: "Plain-language status over clinical ranges for blood data",
        reasoning: "Raw biomarker values with clinical reference ranges triggered anxiety without improving decision-making. Plain-language status (Optimaal / Aandacht / Actie) plus a one-sentence explanation increased comprehension from 28% to 81%.",
      },
      {
        decision: "AI rationale visible by default",
        reasoning: "Users who couldn't explain why their target was personalised distrusted it. Making the rationale visible by default — not buried in settings — was the single highest-leverage change for AI target adherence.",
      },
      {
        decision: "Gamification tied to consistency, not outcomes",
        reasoning: "XP and level rewards tied to logging behaviour and streak completion — not to achieving clinical targets. This reduced performance anxiety and kept engagement high even when health metrics were improving slowly.",
      },
    ],

    iterations: [
      {
        version: "V1",
        change: "Full metrics dashboard",
        reason: "First version surfaced all 10+ metrics simultaneously. Usability testing showed users couldn't identify their primary action within 30 seconds. Redesigned around a daily focus hierarchy.",
        shipped: false,
      },
      {
        version: "V2",
        change: "Progressive disclosure + plain-language blood data",
        reason: "Introduced the three-layer hierarchy and plain-language biomarker status. Blood data comprehension improved significantly. AI target explanation added after users consistently questioned personalised numbers.",
        shipped: false,
      },
      {
        version: "V3",
        change: "AI rationale layer + gamification refinement",
        reason: "Added visible AI rationale for all personalised targets. Gamification tied to consistency rather than outcomes. All three user literacy profiles validated through final usability round. Shipped.",
        shipped: true,
      },
    ],

    finalPrototype: [
      "/synqd.png",
    ],

    usabilityResults: [
      {
        metric: "Dashboard comprehension",
        outcome: "Primary daily action identifiable within 3 seconds across all user literacy profiles",
      },
      {
        metric: "Blood biomarker comprehension",
        outcome: "28% → 81% correct interpretation with plain-language status system",
      },
      {
        metric: "AI target adherence",
        outcome: "3× higher adherence when personalised target rationale was visible vs. number only",
      },
      {
        metric: "User trust in AI personalisation",
        outcome: "Distrusted by majority without explanation → validated as credible across all user profiles when rationale visible",
      },
    ],
  },

  {
    slug: "trinasel",
    title: "Trinasel · Oksel Deodorant Gel",
    description:
      "User research, Shopify e-commerce design, packaging, and social media content for a premium Dutch consumer health brand — a 21-day herbal deodorant gel.",
    image: "/trinasel.png",
    tags: ["User Research", "E-commerce", "Shopify", "Social Media", "Brand Design"],
    role: "UX Researcher & Brand Designer",
    tools: ["Figma", "Shopify", "Figma AI", "Midjourney"],
    timeline: "May 2026",
    video: "/trinasel.mp4",

    summary: "Trinasel is a premium Dutch consumer health brand — an armpit deodorant gel with a 21-day treatment approach. I led user research to shape the brand's visual appearance, designed and built the Shopify e-commerce store, and created social media content to drive product awareness.",
    metric: { label: "Channels", value: "Shopify store · Social media · Packaging" },
    context: "Trinasel needed a complete brand and digital presence — from packaging identity to a Shopify storefront and social content — all grounded in user research on how the target audience perceives and responds to premium wellness products.",
    problem: "The brand needed a cohesive visual language across physical packaging, an e-commerce website, and social media — communicating both herbal credibility and premium lifestyle appeal to Dutch consumers.",
    approach: [
      "Conducted user research to understand how the target audience responds to wellness product aesthetics — informing all visual decisions.",
      "Designed the packaging identity: gold and white palette, premium typography, herbal ingredient illustration, and front panel hierarchy.",
      "Built and designed the Shopify e-commerce store — product pages, checkout flow, and brand-consistent UI.",
      "Created social media content to communicate the 21-day programme, efficacy claims, and premium positioning across platforms.",
    ],
    outcomePoints: [
      "User research-informed visual identity established across packaging, web, and social.",
      "Shopify store live with full product and checkout experience.",
      "Social media content system created for consistent brand communication.",
      "Clear product communication: 21-day programme, herbal formula, sweat and odour claims.",
    ],

    problemDetails: [],
    researchObjectives: [],
    targetUsers: [],
    researchFindings: [],
    ideation: [],
    wireframes: [],
    designDecisions: [],
    iterations: [
      { version: "V1", change: "Initial design", reason: "First iteration.", shipped: false },
      { version: "V2", change: "Refined concepts", reason: "Based on feedback.", shipped: false },
      { version: "V3", change: "Final design", reason: "Shipped version.", shipped: true },
    ],
    finalPrototype: [],
    usabilityResults: [],
  },

  {
    slug: "prorail-journey-planner",
    title: "ProRail Journey Planner",
    description:
      "Redesigning the railway disruption experience for 1.1 million daily commuters — turning chaos into clarity.",
    image: "/prorail-flow.png",
    tags: ["UX Research", "Service Design", "Mobile", "Accessibility"],
    role: "UX Researcher & UX Designer",
    tools: ["Figma", "Mixpanel", "Hotjar", "FullStory", "React", "JavaScript", "HTML", "CSS", "Tailwind"],
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
    title: "COVID-19 Public Dashboard · VWS",
    description:
      "Redesigning the Dutch government's COVID-19 public dashboard — used by millions of citizens daily — for comprehension, accessibility, and trust.",
    image: "/corona1.png",
    tags: ["Public Health UX", "Accessibility", "Gov Design", "Data Visualisation"],
    role: "UX Research Engineer",
    tools: ["Figma", "Google Analytics", "Hotjar", "Matomo", "Sanity CMS", "WCAG 2.1", "HTML5", "CSS3"],
    timeline: "June 2022 – Feb 2024 (1 year, 8 months)",
    highlight: "Millions of daily visitors",

    subtitle: "Making critical public health data legible for every citizen",

    summary:
      "The Dutch government's COVID-19 dashboard was one of the most visited websites in Dutch history — accessed by millions of citizens at peak pandemic pressure. I joined as UX Research Engineer to resolve compounding UX debt: charts designed for epidemiologists, 23 accessibility failures excluding disabled citizens from public health information, and a content update pipeline too slow for a fast-moving health crisis.",

    metric: { label: "Accessibility milestone", value: "WCAG 2.1 AA — full certification" },

    contextParagraphs: [
      "coronadashboard.rijksoverheid.nl was the primary source of COVID-19 information for Dutch citizens throughout the pandemic — infection rates, ICU occupancy, vaccination rollout, and regional lockdown rules all surfaced through this single public interface.",
      "The dashboard was built under emergency conditions, with speed prioritised over research. By the time I joined, it had accumulated significant UX debt: visualisations designed around epidemiological conventions that ordinary citizens could not interpret, and accessibility failures that excluded disabled citizens from critical public health information.",
      "I was embedded as UX Research Engineer in a cross-functional team of developers, public health communicators, and data scientists — working in Figma, Sanity CMS, and validating against real behavioral data from Google Analytics, Hotjar, and Matomo.",
    ],

    problem:
      "The dashboard was informing millions of daily decisions — whether to visit family, whether a business could open, whether a hospital was near capacity. Its content was written for public health professionals, not citizens. Its charts failed accessibility standards. And its content pipeline could not respond quickly enough to fast-changing policy.",

    problemIntro: "Three compounding challenges drove the research brief:",
    problemBullets: [
      "Health literacy gap: ICU occupancy curves, R-value trends, and vaccination charts used epidemiological conventions inaccessible to the general public — confirmed by Hotjar sessions showing 4–6 minutes of passive scrolling with no clear next action.",
      "Accessibility exclusion: interactive visualisations failed WCAG 2.1 AA on 23 separate criteria — missing ARIA labels, insufficient colour contrast, and no keyboard navigation — excluding screen reader and low-vision users from public health information.",
      "Content pipeline bottleneck: policy guidance updates required engineering involvement, causing a 3-day lag between ministerial announcement and dashboard update — dangerous during fast-moving pandemic decisions.",
    ],

    context:
      "The dashboard served as the primary public interface for one of the most consequential health crises in Dutch history. Citizens, journalists, policymakers, and healthcare workers all relied on the same interface — with vastly different levels of health literacy and accessibility needs.",

    approach: [
      "Analysed Hotjar session recordings and Matomo funnel data to identify where citizens were confused, dropping off, or rage-clicking non-interactive elements.",
      "Conducted WCAG 2.1 AA audit across all 40+ chart components — identified 23 critical failures, all resolved in a single sprint cycle.",
      "Partnered with public health communicators to rewrite all data labels and tooltips in plain language, validated through remote usability sessions with representative citizen panels.",
      "Redesigned the Sanity CMS content model so communicators could update dashboard text and contextual notes without engineering involvement.",
      "Introduced contextual benchmarks ('This is lower than last week') to convert raw data into interpretable signals for citizens without health backgrounds.",
    ],

    approachSections: [
      {
        number: "1",
        title: "Behavioral research at scale",
        body: "I began by analysing large-scale behavioral data to understand where citizens were failing — before designing any solutions:",
        bullets: [
          "Hotjar session recordings revealed that 67% of users scrolled past the ICU occupancy metric — the most critical indicator — without registering it, due to poor information hierarchy",
          "Matomo funnel data showed an average of 4.6 minutes on the homepage without a clear next action — indicating comprehension failure, not disengagement",
          "Google Analytics identified the 8 most common search queries driving traffic, which became the basis for a restructured content hierarchy",
          "Rage-click analysis identified non-interactive chart elements users expected to be clickable — a consistent usability pattern causing frustration at scale",
        ],
      },
      {
        number: "2",
        title: "Full WCAG 2.1 AA accessibility audit and remediation",
        body: "I conducted a comprehensive accessibility audit across all dashboard components:",
        bullets: [
          "Identified 23 critical WCAG 2.1 AA failures across chart components, interactive filters, and navigation elements",
          "Failures included missing ARIA labels on dynamic data regions, colour contrast ratios below 4.5:1, and no keyboard navigation for chart interaction",
          "Co-developed remediation specifications with the engineering team — all 23 failures resolved in a single sprint",
          "Redesigned data visualisations to use shape and pattern differentiation alongside colour, ensuring interpretability for users with colour vision differences",
        ],
        closing: "This made the COVID-19 dashboard one of the first major Dutch government digital products to achieve full WCAG 2.1 AA certification during the pandemic.",
      },
      {
        number: "3",
        title: "Plain-language content redesign",
        body: "Working with public health communication specialists, I redesigned all data-facing content for citizen comprehension:",
        bullets: [
          "Replaced epidemiological terminology with plain-language equivalents validated through remote usability testing with representative citizen panels",
          "Introduced contextual benchmarks alongside raw data — 'ICU occupancy is 14% lower than last week' — converting numbers into decision-relevant signals",
          "Redesigned tooltip copy to answer the implicit citizen question each chart raised: 'What does this mean for me?'",
        ],
      },
      {
        number: "4",
        title: "CMS content architecture for rapid response",
        body: "I designed the content model in Sanity CMS to eliminate the engineering bottleneck in dashboard updates:",
        bullets: [
          "Public health communicators could update text, alerts, and contextual notes without engineering involvement",
          "Content update turnaround reduced from 3 days to same-day",
          "Structured content model ensured all updates maintained accessible markup and WCAG compliance by default",
        ],
        closing: "During fast-moving policy announcements, same-day content updates were critical to preventing misinformation.",
      },
    ],

    outcomePoints: [
      "Full WCAG 2.1 AA certification achieved — making COVID-19 health information accessible to all Dutch citizens, including those with disabilities.",
      "Average task completion time on the homepage reduced from 4.6 minutes to 58 seconds after hierarchy redesign.",
      "Content update turnaround reduced from 3 days to same-day via Sanity CMS content architecture.",
      "23 critical accessibility failures resolved in a single sprint cycle.",
      "Dashboard hierarchy restructured around 8 most-searched citizen questions — grounded in Google Analytics behavioral data.",
    ],

    impactStatement: "At peak pandemic pressure, this dashboard was the primary source of public health information for millions of Dutch citizens. Getting the UX right was a public health responsibility — not a product optimisation exercise.",

    problemDetails: [
      "Interactive charts built for epidemiologists — ICU occupancy curves, R-value trajectories, vaccination rates — presented without plain-language context or interpretation.",
      "23 WCAG 2.1 AA failures excluding screen reader and low-vision users from critical public health information.",
      "Policy guidance required engineering involvement to update — a 3-day lag between ministerial announcement and dashboard content, dangerous during a fast-moving crisis.",
    ],

    researchObjectives: [
      "Identify where citizens were failing to comprehend critical health data using behavioral analytics",
      "Audit the full dashboard against WCAG 2.1 AA criteria",
      "Understand content update bottlenecks in the publishing pipeline",
      "Validate plain-language redesigns through representative citizen usability testing",
    ],

    targetUsers: [
      {
        name: "The General Citizen",
        description:
          "Primary audience — accessing the dashboard to understand what COVID rules applied to them, whether their region was in a risk zone, and what the vaccination rollout meant for their household.",
      },
      {
        name: "The Accessibility User",
        description:
          "Screen reader users, low-vision users, and users with colour vision differences — previously excluded from the dashboard by 23 WCAG failures. A significant underserved population during a public health crisis.",
      },
      {
        name: "The Healthcare Professional",
        description:
          "Checking ICU occupancy and regional data — needed more granular access than general citizens, but shared the same interface.",
      },
    ],

    researchFindings: [
      {
        insight: "Citizens scrolled past the most critical metric",
        detail:
          "Hotjar recordings showed 67% of users did not register the ICU occupancy metric — the government's key decision signal — because it was positioned below the fold with no visual hierarchy priority.",
      },
      {
        insight: "Rage-clicks revealed affordance mismatches at scale",
        detail:
          "Heatmap analysis showed consistent rage-clicking on non-interactive chart elements — users expected drill-down but received no feedback. At millions of daily visitors, this pattern represented enormous comprehension failure.",
      },
      {
        insight: "Content pipeline delays were causing misinformation",
        detail:
          "3-day lag between policy announcements and dashboard updates created discrepancies between what the government announced and what the dashboard displayed — eroding institutional trust at exactly the moment it was most needed.",
      },
      {
        insight: "Plain language increased comprehension from 31% to 84%",
        detail:
          "Usability sessions comparing epidemiological labels vs plain-language equivalents showed correct interpretation of the R-value improving from 31% to 84% — confirming that terminology was a primary comprehension barrier.",
      },
    ],

    ideation: [
      {
        description:
          "Content hierarchy redesign: restructured the homepage around 8 high-frequency citizen questions identified through Google Analytics search data — rather than the original departmental data structure.",
        image: "/corona1.png",
      },
      {
        description:
          "Plain-language tooltip system: each chart supplemented with a context sentence answering the implicit citizen question — 'What does this mean for my daily decisions?'",
        image: "/Ministerie-VWS-logo.png",
      },
    ],

    wireframes: [
      {
        description:
          "Redesigned homepage: ICU occupancy promoted to primary position with a plain-language benchmark ('Higher / Lower than last week'). Task completion under 60 seconds validated in usability testing.",
        image: "/corona1.png",
      },
      {
        description:
          "Accessible chart redesign: shape and pattern differentiation added alongside colour coding — ensuring all data remained interpretable for users with colour vision differences.",
        image: "/corona2.png",
      },
    ],

    designDecisions: [
      {
        decision: "Behavioral analytics before any design decisions",
        reasoning:
          "All hierarchy decisions were grounded in Hotjar, Matomo, and Google Analytics data rather than assumptions — at millions of daily users, design intuition is insufficient without behavioral evidence.",
      },
      {
        decision: "Shape and pattern alongside colour in all visualisations",
        reasoning:
          "Mandatory for WCAG 2.1 AA compliance and validated by the accessibility audit. Colour-alone encoding excluded a significant portion of the user base, including users with colour vision differences.",
      },
      {
        decision: "CMS-first content update architecture",
        reasoning:
          "Eliminating the engineering bottleneck in content updates was a critical public health requirement. Same-day update capability was non-negotiable during pandemic policy cycles — not a product optimisation.",
      },
      {
        decision: "Contextual benchmarks on all key metrics",
        reasoning:
          "Citizens could not interpret raw ICU numbers without context. Adding directional benchmarks converted data into decision-relevant signals without requiring health literacy.",
      },
    ],

    iterations: [
      {
        version: "V1",
        change: "Information hierarchy redesign",
        reason:
          "Promoted critical metrics above the fold based on behavioral data. ICU occupancy and R-value moved to primary position. Hotjar follow-up sessions confirmed scroll depth and metric registration improved significantly.",
        shipped: false,
      },
      {
        version: "V2",
        change: "Plain-language layer and accessibility remediation",
        reason:
          "Replaced all epidemiological labels with plain-language equivalents, and resolved all 23 WCAG 2.1 AA failures. Both changes validated through representative usability testing — comprehension improved from 31% to 84%.",
        shipped: false,
      },
      {
        version: "V3",
        change: "Sanity CMS content architecture",
        reason:
          "Redesigned the content model to eliminate engineering dependency for routine updates — reducing turnaround from 3 days to same-day. Full WCAG 2.1 AA certification achieved.",
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
        metric: "Homepage task completion time",
        outcome: "Reduced from 4.6 minutes to 58 seconds after hierarchy redesign — confirmed in usability testing with representative citizen panels",
      },
      {
        metric: "WCAG 2.1 AA compliance",
        outcome: "23 critical failures → full certification — one of the first major Dutch government digital products to achieve this during the pandemic",
      },
      {
        metric: "Content update turnaround",
        outcome: "3 days (engineering-dependent) → same-day (CMS self-service) — critical for fast-moving pandemic policy cycles",
      },
      {
        metric: "Metric comprehension rate",
        outcome: "Correct interpretation of R-value and ICU occupancy: 31% baseline → 84% with plain-language layer",
      },
    ],
  },

  {
    slug: "umcg-patient-portal",
    title: "UMCG · Clinical Decision Support",
    description:
      "Designing clinical decision-support tools for nephrologists managing kidney care pathways — life-defining dialysis vs. transplant decisions in a high-stakes academic hospital.",
    image: "/umcg1.png",
    tags: ["Healthcare UX", "Clinical Decision Support", "Accessibility", "Complex Systems"],
    role: "UX Research Engineer",
    tools: ["Figma", "Google Analytics", "Hotjar", "React", "TypeScript", "Tailwind CSS", "Azure", "WCAG 2.1"],
    timeline: "Feb 2022 – June 2022 (4 months)",
    highlight: "High-stakes clinical environment",

    subtitle: "Reducing cognitive load in life-critical kidney care pathway decisions",

    summary:
      "Nephrologists at UMCG were making dialysis vs. transplant pathway decisions — largely irreversible choices — by mentally aggregating data from four disconnected clinical systems. I designed the interface layer for a new clinical decision-support module, consolidating 23 clinical variables into a single unified patient view and reducing pre-decision data assembly time from 7 minutes to under 90 seconds.",

    metric: { label: "Pre-decision data assembly", value: "7 minutes → under 90 seconds" },

    contextParagraphs: [
      "UMCG is one of the Netherlands' largest academic hospitals, with a specialist nephrology department managing chronic kidney disease patients across long-term care pathways.",
      "Nephrologists managing CKD progression face life-defining pathway decisions — dialysis initiation, transplant candidacy assessment, or conservative management — that require integrating complex longitudinal patient data across clinical, lab, and comorbidity domains.",
      "I joined as UX Research Engineer, embedded with a clinical informatics team building on React, TypeScript, and Azure — designing the interface layer for a new clinical decision-support module to replace a fragmented multi-system workflow.",
    ],

    problem:
      "The pathway decision — dialysis vs transplant vs conservative care — is one of the most consequential decisions in nephrology. Clinicians were making it using data spread across four disconnected systems, spending 7 minutes per patient assembling baseline data before clinical reasoning could begin.",

    problemIntro: "Two compounding challenges defined the design brief:",
    problemBullets: [
      "Fragmented clinical data: patient eGFR trajectory, comorbidity flags, medication history, and transplant eligibility criteria lived in four separate hospital systems — nephrologists performed 4–6 context switches per consultation just to assemble baseline data.",
      "No decision scaffolding at the critical moment: the pathway decision requires integrating 12+ clinical variables, but the existing interface surfaced those variables across multiple disconnected screens with no summary view and no prioritisation at the decision point.",
    ],

    context:
      "Clinical decision-support design in nephrology demands understanding both the cognitive demands of medical reasoning and the constraints of clinical workflow — time pressure, interruption risk, and the high stakes of pathway decisions that are largely irreversible once made.",

    approach: [
      "Conducted contextual inquiry with nephrologists during clinic rounds, observing how they gathered and evaluated patient data before pathway decisions.",
      "Identified 4–6 context switches per consultation and 7-minute average data assembly time through time-on-task observation.",
      "Interviewed 8 nephrologists to map the 12 clinical variables used for pathway selection — produced a weighted variable hierarchy as the foundation for the interface.",
      "Redesigned the patient view as a unified CKD trajectory panel — eGFR trend, comorbidity flags, and pathway eligibility criteria consolidated in a single view.",
      "Conducted full WCAG 2.1 AA audit and redesigned data visualisations with pattern differentiation — clinical tools must be accessible to clinicians with colour vision differences.",
      "Validated the interface through moderated usability testing with 6 nephrologists under simulated consultation conditions.",
    ],

    approachSections: [
      {
        number: "1",
        title: "Contextual research in the clinical environment",
        body: "I began with direct observation — not surveys — because the clinical workflow is too complex and time-pressured to reconstruct from memory:",
        bullets: [
          "Observed nephrologists during clinic rounds, tracking every application switch, data query, and manual aggregation step in the pre-decision workflow",
          "Identified that clinicians performed 4–6 context switches per patient and spent an average of 7 minutes assembling data before any clinical reasoning began",
          "Used time-on-task observation rather than self-report — clinicians consistently underestimated their data assembly burden when asked directly",
          "Interviewed 8 nephrologists to map which clinical variables they relied on for pathway decisions, and in what priority order under time pressure",
        ],
        closing: "The clinical variable map from these sessions became the authoritative foundation for the interface hierarchy — not design assumption.",
      },
      {
        number: "2",
        title: "Information architecture for clinical decision-support",
        body: "I redesigned the patient view around a unified CKD trajectory panel — collapsing four systems into one:",
        bullets: [
          "eGFR trend over 24 months surfaced as the primary longitudinal signal",
          "Comorbidity flags (cardiovascular risk, infection history, frailty score) consolidated in a secondary panel with clinical threshold indicators",
          "Transplant eligibility checklist auto-computed from patient data rather than manually assembled",
          "Variable prioritisation validated against the weighted clinical hierarchy derived from nephrologist interviews",
        ],
        closing: "The architecture was co-validated with the clinical informatics team to ensure medically accurate data relationships and technically feasible implementation in the React + Azure stack.",
      },
      {
        number: "3",
        title: "Accessibility in clinical tool design",
        body: "Clinical tools must meet accessibility standards — particularly for colour vision differences that affect risk chart interpretation:",
        bullets: [
          "Conducted full WCAG 2.1 AA audit across all interface components",
          "Redesigned eGFR trajectory and risk indicator visualisations to use pattern and shape differentiation alongside colour",
          "All interactive components annotated with keyboard navigation paths and ARIA roles",
        ],
      },
      {
        number: "4",
        title: "Usability validation under clinical conditions",
        body: "I ran moderated usability testing with 6 nephrologists under simulated consultation conditions — approximating the actual time pressure of a clinic session:",
        bullets: [
          "Task: assemble a complete pathway decision brief for a new patient using only the redesigned interface",
          "Measured time-on-task, context switch count, and task completion rate",
          "Collected verbal protocol data on clinical reasoning to verify the interface supported — not just displayed — the decision process",
        ],
        closing: "Task completion rate improved from 34% to 89% across key workflow tasks.",
      },
    ],

    outcomePoints: [
      "Pre-decision data assembly time reduced from 7 minutes to under 90 seconds — verified through time-on-task observation in usability testing.",
      "Context switches per patient consultation reduced from 4–6 (across four systems) to under 1 with the unified interface.",
      "Key task completion rate improved from 34% to 89% in moderated usability testing with nephrologists.",
      "Full WCAG 2.1 AA compliance achieved across all new interface components.",
      "Clinical variable map from 8 nephrologist interviews codified into the interface hierarchy — grounding every design decision in clinical evidence.",
    ],

    impactStatement: "Clinical decision-support design in nephrology directly affects patient care quality. Reducing the cognitive burden on nephrologists at pathway decision points means more consistent, evidence-based decisions — and better patient outcomes.",

    problemDetails: [
      "Patient eGFR trajectory, comorbidities, medication history, and transplant eligibility lived across four disconnected hospital systems — requiring 4–6 context switches per patient consultation.",
      "No summary view existed at the decision point — nephrologists had to mentally aggregate 12+ clinical variables before any reasoning could begin.",
      "Data visualisations used colour as the sole differentiator for clinical risk levels — inaccessible to clinicians with colour vision differences.",
    ],

    researchObjectives: [
      "Map the complete pre-decision workflow through contextual inquiry in the clinical environment",
      "Identify which clinical variables are used for pathway decisions and in what priority order",
      "Discover where the multi-system workflow creates the highest cognitive load",
      "Validate a unified patient view against the actual clinical decision-making process",
    ],

    targetUsers: [
      {
        name: "The Nephrologist",
        description:
          "Makes dialysis vs. transplant pathway decisions for patients with advanced CKD. Works under clinic time pressure, managing 20+ patients per session. Needs complete patient context in a single consolidated view.",
      },
      {
        name: "The Renal Nurse",
        description:
          "Prepares patient summaries before consultations and follows up on pathway decisions. Needs the same data in a different workflow order — preparation rather than decision.",
      },
    ],

    researchFindings: [
      {
        insight: "Clinicians underestimated their own data assembly burden",
        detail:
          "When asked, nephrologists estimated data assembly took 2–3 minutes. Time-on-task observation measured 7 minutes. This gap made the case for observation over self-report — clinical workflow complexity makes accurate self-assessment unreliable.",
      },
      {
        insight: "Variable priority under time pressure differed from relaxed conditions",
        detail:
          "Interviews described consulting 12+ variables. Under simulated time pressure, clinicians relied on 4–5 proxies. The interface hierarchy was designed for the time-pressured case — not the theoretical complete review.",
      },
      {
        insight: "Colour-only risk encoding excluded clinical users",
        detail:
          "Two of six nephrologists in usability testing had colour vision differences affecting red-green discrimination — the primary risk indicator encoding. Pattern differentiation was not optional: it was a WCAG requirement and a patient safety consideration.",
      },
      {
        insight: "Unified view dramatically reduced context switches",
        detail:
          "With the consolidated patient panel, average context switches dropped from 4–6 to fewer than 1 in usability sessions. Clinicians described the experience as: 'I can actually think about the patient, not the systems.'",
      },
    ],

    ideation: [
      {
        description:
          "Unified CKD trajectory panel concept: a single view surfacing eGFR trend, comorbidity flags, and transplant eligibility checklist — replacing the four-system lookup workflow.",
        image: "/umcg-charts.png",
      },
      {
        description:
          "Pattern-differentiated risk visualisation: redesigning clinical risk indicators to use shape and pattern alongside colour — ensuring accessibility for clinicians with colour vision differences.",
        image: "/UMCGN.png",
      },
    ],

    wireframes: [
      {
        description:
          "The unified patient view: eGFR 24-month trajectory as primary element, comorbidity panel in secondary position, transplant eligibility checklist auto-computed from patient data. Pre-decision assembly: 7 minutes → under 90 seconds.",
        image: "/UMCGN.png",
      },
      {
        description:
          "Pattern-differentiated risk indicators: line style, marker shape, and pattern fill used alongside colour — fully WCAG 2.1 AA compliant and interpretable for clinicians with colour vision differences.",
        image: "/umcg-charts.png",
      },
    ],

    designDecisions: [
      {
        decision: "Observation over self-report for workflow research",
        reasoning:
          "Nephrologists consistently underestimated their data assembly time by more than half. Time-on-task observation was the only reliable method — and the 7-minute finding was the central argument for the redesign.",
      },
      {
        decision: "Variable hierarchy derived from interview data, not design assumption",
        reasoning:
          "The 12 clinical variables nephrologists use have a medically grounded priority order under time pressure. This hierarchy came from 8 clinician interviews validated by clinical informatics leads — not from UX convention.",
      },
      {
        decision: "Pattern and shape as primary risk differentiators",
        reasoning:
          "Two of six usability participants had colour vision differences affecting red-green discrimination. In a clinical tool, this is not an edge case — it is a WCAG compliance requirement and a patient safety issue.",
      },
      {
        decision: "Transplant eligibility checklist auto-computed from patient data",
        reasoning:
          "Eligibility criteria were previously assembled manually from three sources — introducing inconsistency in assessment. Auto-computation from structured patient data eliminated a manual step and improved assessment consistency.",
      },
    ],

    iterations: [
      {
        version: "V1",
        change: "Comprehensive patient data view",
        reason:
          "First version surfaced all 12 clinical variables simultaneously. Nephrologists reported visual overload under time pressure. Redesigned to show the 4–5 primary decision proxies by default, full variable set available on expand.",
        shipped: false,
      },
      {
        version: "V2",
        change: "Time-pressured workflow validation",
        reason:
          "Added simulated consultation time pressure to usability sessions. Discovered the expand-to-full-data affordance was not used under pressure — the default view needed to include all critical variables. Revised the primary/secondary hierarchy.",
        shipped: false,
      },
      {
        version: "V3",
        change: "Unified patient panel with auto-computed eligibility",
        reason:
          "eGFR trajectory as primary signal, comorbidity panel secondary, transplant eligibility auto-computed. 89% task completion in usability testing with nephrologists. This is what shipped.",
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
        metric: "Pre-decision data assembly time",
        outcome: "Reduced from 7 minutes (observed baseline) to under 90 seconds in usability testing with the unified patient panel",
      },
      {
        metric: "Context switches per consultation",
        outcome: "From 4–6 across four systems to fewer than 1 with the unified interface",
      },
      {
        metric: "Task completion rate",
        outcome: "Key workflow tasks: 34% → 89% in moderated usability testing with nephrologists under simulated consultation conditions",
      },
      {
        metric: "WCAG 2.1 AA compliance",
        outcome: "Full compliance across all new interface components, including pattern-differentiated risk visualisations",
      },
    ],
  },

  {
    slug: "agaming-onboarding",
    title: "AGaming · Behavioral UX Research",
    description:
      "Leading UX research and design across a portfolio of 20+ competitive gaming products — improving player retention and conversion through behavioral analytics and A/B testing.",
    image: "/ag00.jpg",
    tags: ["Behavioral Research", "A/B Testing", "Retention", "Consumer UX"],
    role: "UX Researcher & Designer",
    tools: ["Google Analytics", "Hotjar", "Adobe XD", "HTML5", "CSS3", "JavaScript"],
    timeline: "Feb 2017 – Sep 2019 (2 years, 7 months)",
    highlight: "20+ gaming products",

    subtitle: "Behavioral analytics and A/B testing across a competitive gaming portfolio",

    summary:
      "Over two and a half years at AGaming, I built a UX research practice from scratch across a portfolio of 20+ competitive gaming products — introducing behavioral analytics, funnel analysis, heatmapping, and A/B testing where decisions had previously been made by intuition. The most visible output was a 55-point improvement in first-session onboarding completion — from 39% to 94% — driven by a research-backed reduction from 12 required fields to 3.",

    metric: { label: "First-session completion", value: "39% → 94%" },

    contextParagraphs: [
      "AGaming operated a portfolio of 20+ competitive skill-based gaming products in a market dominated by Steam and Epic Games — platforms with established player trust and significantly larger libraries.",
      "When I joined, UX decisions across the portfolio were made by product intuition and competitive benchmarking, with no systematic behavioral research, no funnel analytics, and no A/B testing infrastructure.",
      "I built the UX research function from scratch — introducing Google Analytics funnel tracking, Hotjar session recording and heatmapping, competitor analysis frameworks, and heuristic evaluation processes across the product portfolio.",
    ],

    problem:
      "Product decisions across 20+ games were driven by intuition and competitive observation, not behavioral evidence. Player drop-off points were unknown, friction sources were guessed rather than measured, and no framework existed for prioritising UX improvements across a diverse product portfolio.",

    problemIntro: "Two structural problems shaped the research brief:",
    problemBullets: [
      "No behavioral data infrastructure: without funnel analytics or session recording, it was impossible to identify where players were dropping off, what was causing friction, or whether UX changes had any measurable impact.",
      "Onboarding crisis in the flagship product: 61% of new players abandoned within the first 10 minutes — before experiencing the product's core value. The cause was unknown without behavioral data to investigate it.",
    ],

    context:
      "Building a UX research practice in a gaming company requires translating player psychology into product decisions — understanding motivation, commitment, and the specific moment when a new player decides a product is or isn't worth their time.",

    approach: [
      "Established Google Analytics funnel tracking and Hotjar session recording across the portfolio — creating the behavioral infrastructure needed for evidence-based decisions.",
      "Ran competitor analysis and heuristic evaluations across 20+ products, producing a structured prioritisation framework for UX improvements.",
      "Used funnel analysis and session recordings to identify exact drop-off in the flagship onboarding — locating the 61% abandonment at step 4 of 12.",
      "Audited all 12 onboarding fields against actual product use — found 7 had no downstream personalisation impact.",
      "Designed and ran A/B tests across products, comparing onboarding flows, value proposition timing, and field reduction variants.",
      "Reduced required fields from 12 to 3, introduced a value proposition screen before data collection, validated through behavioral measurement.",
    ],

    approachSections: [
      {
        number: "1",
        title: "Building the behavioral research infrastructure",
        body: "Before any design work, I established the measurement foundation that would make behavioral UX research possible:",
        bullets: [
          "Implemented Google Analytics event tracking across player flows — funnel completion, drop-off points, feature engagement, and session depth",
          "Configured Hotjar heatmapping and session recording across key product surfaces — providing qualitative behavioral evidence alongside quantitative funnel data",
          "Developed a cross-product UX prioritisation framework using heuristic evaluation scores weighted against funnel drop-off severity",
          "Introduced competitor analysis as a structured practice — benchmarking AGaming products against Steam, Epic, and specialist competitive platforms",
        ],
        closing: "This infrastructure made every subsequent design decision measurable rather than assumed.",
      },
      {
        number: "2",
        title: "Behavioral investigation of the onboarding crisis",
        body: "With analytics in place, I investigated the 61% first-session abandonment using behavioral methods:",
        bullets: [
          "Funnel analysis pinpointed abandonment to step 4 of 12: a checkbox screen presenting 8 game preferences with no context or visible payoff",
          "Hotjar session recordings confirmed the pattern — users clicking off-screen, looking for a skip option, or closing the product",
          "Field-by-field audit found 7 of 12 fields had zero downstream personalisation impact — collected 'just in case' and never used",
          "Comparative analysis of 6 competitor onboarding flows identified that platforms showing value before collecting data had significantly higher completion rates",
        ],
      },
      {
        number: "3",
        title: "A/B testing and iterative validation",
        body: "Design decisions were validated through A/B testing rather than stakeholder opinion:",
        bullets: [
          "Tested value proposition timing (before vs after data collection) — players who saw the product preview before the form were 3.1× more likely to complete onboarding",
          "Tested field count variants (12 vs 6 vs 3) — confirmed no meaningful difference in matchmaking quality between 3 and 12 fields",
          "Tested skill level input formats (labelled dropdown vs contextual slider) — slider framing produced more accurate self-assessment and better initial matchmaking quality",
          "Ran cross-product heuristic evaluations and identified 3 systemic UX patterns causing friction across the portfolio",
        ],
        closing: "A/B testing transformed UX decisions from design debates into measurable evidence.",
      },
      {
        number: "4",
        title: "Redesign and portfolio improvements",
        body: "The research programme produced both a flagship onboarding redesign and systematic improvements across the portfolio:",
        bullets: [
          "Reduced required onboarding fields from 12 to 3: name/avatar, skill level, match preference",
          "Added value proposition screen before any data collection — showing real match highlights and community stats",
          "Progressive disclosure for remaining preferences — collected through play behaviour rather than upfront self-report",
          "Applied heuristic evaluation findings to prioritise UX improvements across 8 products in the portfolio",
        ],
      },
    ],

    outcomePoints: [
      "First-session onboarding completion: 39% → 94% after field reduction and value-first redesign.",
      "Time to first match reduced from 8.4 minutes to 2.1 minutes.",
      "Day-1 retention: 71% for users completing the new onboarding vs 34% with the old flow.",
      "Behavioral data infrastructure established across 20+ products — enabling evidence-based UX decisions for the first time.",
      "12 validated A/B tests run over the engagement — establishing behavioral evidence as the standard for design decisions.",
    ],

    impactStatement: "Building a UX research function from scratch means demonstrating the ROI of behavioral evidence to stakeholders who previously made decisions by intuition. The 55-point improvement in onboarding completion was the proof point that secured investment in research infrastructure across the portfolio.",

    problemDetails: [
      "No behavioral analytics infrastructure — drop-off points, friction sources, and UX effectiveness were unknown across 20+ products.",
      "12-step onboarding designed around internal data needs, not player experience — 7 of 12 fields had no downstream product impact.",
      "Platform's core value proposition invisible during onboarding — players couldn't articulate what differentiated AGaming from Steam or Epic after completing setup.",
    ],

    researchObjectives: [
      "Establish behavioral data infrastructure for evidence-based UX decisions across the portfolio",
      "Identify exact drop-off points in the onboarding funnel using behavioral analytics",
      "Audit onboarding data collection against actual product use",
      "Design and validate improvements through A/B testing rather than assumption",
    ],

    targetUsers: [
      {
        name: "The Competitive Gamer",
        description:
          "Ages 16–28, experienced with gaming platforms, high standards for product quality. Drops immediately if the experience feels amateur. Needs to understand why this platform is worth their time within seconds.",
      },
      {
        name: "The Casual Player",
        description:
          "Ages 18–35, lighter gaming background, came via a friend or content recommendation. Overwhelmed by too many choices up front. Needs a frictionless path to their first experience.",
      },
    ],

    researchFindings: [
      {
        insight: "Abandonment pinpointed to step 4 through funnel analysis",
        detail:
          "Funnel data showed that 61% of drop-off occurred at step 4 — not distributed across the flow. This precision was only possible with proper analytics instrumentation, and immediately focused the redesign effort.",
      },
      {
        insight: "7 of 12 fields had no product use",
        detail:
          "Field audit with the product and data teams found 7 of 12 onboarding fields were collected for potential future use with zero current impact on personalisation, matchmaking, or feature delivery. This was the core insight that justified the 12→3 reduction.",
      },
      {
        insight: "Value shown before collection increased completion 3×",
        detail:
          "A/B test: players who saw a 15-second product preview before the form were 3.1× more likely to complete onboarding. The problem was not form length — it was the absence of a reason to complete it.",
      },
      {
        insight: "Slider input produced better matchmaking data than dropdown labels",
        detail:
          "Players systematically underreported skill level using labelled dropdown options to avoid difficult first matches. A contextual slider framing produced more accurate self-assessment and measurably improved initial matchmaking quality.",
      },
    ],

    ideation: [
      {
        description:
          "Mapped every onboarding field against actual product use — found 7 of 12 had no downstream impact. This audit became the central argument for the 12→3 reduction and the starting point for the A/B test design.",
        image: "/agaming-mobile.png",
      },
      {
        description:
          "A/B test matrix across 4 key decisions: value proposition timing (before vs after form), field count variants, skill level input format, and social proof placement.",
        image: "/AGaming.png",
      },
    ],

    wireframes: [
      {
        description:
          "Three-step onboarding: (1) name + avatar, (2) skill level slider with contextual framing, (3) first match. All other preferences deferred to progressive in-product collection. Completion rate in A/B testing: 94%.",
        image: "/agaming-mobile.png",
      },
      {
        description:
          "Value proposition screen: 15-second preview showing real match highlights and live community stats — shown before any data collection. Players who saw this were 3.1× more likely to complete onboarding.",
        image: "/iPhoneX-03a.png",
      },
    ],

    designDecisions: [
      {
        decision: "Analytics infrastructure before design",
        reasoning:
          "Without behavioral data, the 61% abandonment was a known problem with an unknown cause. Building measurement infrastructure first meant every design decision was grounded in behavioral evidence — not competitive benchmarking or stakeholder intuition.",
      },
      {
        decision: "12 → 3 required fields",
        reasoning:
          "Field audit proved 7 of 12 fields had no product impact. The cost of collecting them was 61% of new players. The case for removal was straightforward once the audit data existed.",
      },
      {
        decision: "Value proposition before data collection",
        reasoning:
          "A/B test confirmed 3.1× completion improvement when value was shown before the form. The order of operations — show first vs collect first — was the highest-leverage single change in the redesign.",
      },
      {
        decision: "Progressive disclosure for non-critical preferences",
        reasoning:
          "Remaining preferences collected through play behaviour — not upfront self-report. Reduced the form to 3 fields while preserving personalisation data, collected through signals that were more accurate than self-report.",
      },
    ],

    iterations: [
      {
        version: "V1",
        change: "Play-first model (no setup)",
        reason:
          "Technically elegant but matchmaking quality was poor without minimal skill data. Players received badly mis-matched first games and churned from frustration. Reintroduced 3 required fields — the minimum necessary for functional matchmaking.",
        shipped: false,
      },
      {
        version: "V2",
        change: "Avatar selection and value proposition screen",
        reason:
          "A/B testing confirmed: players who chose an avatar had 2.1× higher Day-1 return rate. Players shown a value proposition screen before the form were 3.1× more likely to complete it. Both additions validated through behavioral measurement.",
        shipped: false,
      },
      {
        version: "V3",
        change: "Optional friend invite as final step",
        reason:
          "Players who invited a friend during onboarding showed 4× higher 30-day retention. A/B test confirmed framing mattered: 'invite a friend' performed 2.3× better than 'refer a friend.' Optional but prominently positioned.",
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
        metric: "First-session onboarding completion",
        outcome: "39% → 94% — 55 percentage point improvement after reducing to 3 required fields and adding value proposition screen",
      },
      {
        metric: "Time to first match",
        outcome: "8.4 minutes → 2.1 minutes — validated through session timing data",
      },
      {
        metric: "Day-1 retention",
        outcome: "34% → 71% for users who completed the redesigned onboarding",
      },
      {
        metric: "A/B tests run",
        outcome: "12 validated tests across the portfolio — establishing behavioral evidence as the standard for design decisions",
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
