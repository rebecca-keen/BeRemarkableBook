import type { GuideCapability } from "@/lib/guides";
import { capabilityOrder } from "@/lib/guides";

export type WorkbookCapability = GuideCapability;

export type WorkbookFieldType = "short" | "long" | "lines" | "rating" | "checkbox";

export type WorkbookField = {
  id: string;
  label: string;
  hint?: string;
  type: WorkbookFieldType;
  lines?: number;
  options?: string[];
  scale?: { min: number; max: number; labels?: [string, string] };
};

export type WorkbookExercise = {
  id: string;
  title: string;
  instructions: string;
  fields: WorkbookField[];
};

export type WorkbookWorksheet = {
  id: string;
  title: string;
  description?: string;
  fields: WorkbookField[];
};

export type WorkbookFramework = {
  title: string;
  description: string;
  items: string[];
};

export type WorkbookSelfAssessmentItem = {
  id: string;
  statement: string;
  category?: string;
};

export type WorkbookActionPlanDay = {
  day: number | string;
  focus: string;
  tasks: string[];
  reflection?: string;
};

export type WorkbookSource = {
  citation: string;
};

export type Workbook = {
  slug: string;
  title: string;
  description: string;
  capability: WorkbookCapability;
  priceUsd: number;
  pageCount: number;
  exerciseCount: number;
  relatedGuideSlug: string;
  intro: { paragraphs: string[]; whatYouGet: string[] };
  selfAssessment: {
    title: string;
    instructions: string;
    items: WorkbookSelfAssessmentItem[];
    scoringGuide?: string;
  };
  frameworks: WorkbookFramework[];
  exercises: WorkbookExercise[];
  worksheets: WorkbookWorksheet[];
  actionPlan: {
    title: string;
    duration: string;
    instructions: string;
    days: WorkbookActionPlanDay[];
  };
  sources: WorkbookSource[];
};

const line = (id: string, label: string, lines = 2, hint?: string): WorkbookField => ({
  id,
  label,
  hint,
  type: "lines",
  lines,
});

const long = (id: string, label: string, hint?: string, lines = 4): WorkbookField => ({
  id,
  label,
  hint,
  type: "long",
  lines,
});

const short = (id: string, label: string, hint?: string): WorkbookField => ({
  id,
  label,
  hint,
  type: "short",
});

export const workbooks: Workbook[] = [
  {
    slug: "storytelling-workbook",
    title: "Storytelling Workbook",
    description:
      "Turn experiences into stories people remember. CLEAR framework worksheets, five story templates, a SUCCESs audit, and a seven-day practice plan for interviews, meetings, and introductions.",
    capability: "Storytelling",
    priceUsd: 99,
    pageCount: 22,
    exerciseCount: 8,
    relatedGuideSlug: "storytelling-that-gets-you-remembered",
    intro: {
      paragraphs: [
        "Free guides teach the concepts. This workbook helps you apply them. You will audit your current stories, build five ready-to-use templates, and practice for a full week until storytelling feels natural, not rehearsed.",
        "Research from Chip and Dan Heath shows that 63 percent of people remember stories from a talk, while only 5 percent remember a statistic. Nancy Duarte adds that your listener is the hero, not you. This workbook puts both insights into daily practice.",
        "Print this workbook or fill it in on screen. Block 45 to 60 minutes for the initial exercises, then 15 minutes per day for the action plan.",
      ],
      whatYouGet: [
        "Storytelling self-assessment across clarity, emotion, and relevance",
        "CLEAR framework worksheet with a worked example",
        "Story audit of your five strongest professional moments",
        "Five fill-in story templates: interview, intro, meeting, pitch, feedback",
        "SUCCESs checklist for every story before you tell it",
        "Seven-day story practice plan with daily prompts",
      ],
    },
    selfAssessment: {
      title: "Storytelling self-assessment",
      instructions:
        "Rate yourself honestly on each statement from 1 (rarely true) to 5 (almost always true). No one sees this but you. Low scores point to where the exercises will help most.",
      items: [
        { id: "st-1", statement: "I can tell a professional story in under two minutes without rambling.", category: "Clarity" },
        { id: "st-2", statement: "My stories include a specific result, number, or visible change.", category: "Clarity" },
        { id: "st-3", statement: "I end stories by connecting to what my listener cares about.", category: "Clarity" },
        { id: "st-4", statement: "People repeat my stories or examples after I share them.", category: "Impact" },
        { id: "st-5", statement: "I use concrete details (names, places, actions) instead of generalities.", category: "Impact" },
        { id: "st-6", statement: "My stories show judgment under pressure, not just good outcomes.", category: "Impact" },
        { id: "st-7", statement: "I prepare at least three go-to stories before high-stakes conversations.", category: "Preparation" },
        { id: "st-8", statement: "I practice stories out loud, not only in my head.", category: "Preparation" },
        { id: "st-9", statement: "I adjust the same core story for different audiences without losing authenticity.", category: "Preparation" },
        { id: "st-10", statement: "I make the listener the hero in how I frame the relevance of my story.", category: "Audience" },
      ],
      scoringGuide:
        "Scores below 3 in any category are your priority. Clarity and Preparation gaps usually fix themselves once you complete the CLEAR worksheet and five templates. Audience scores below 3 mean spend extra time on the relevance line in every template.",
    },
    frameworks: [
      {
        title: "CLEAR framework",
        description:
          "A practical beat structure for professional stories under two minutes. Each letter is one sentence, not one paragraph.",
        items: [
          "Context: Set the scene. Where were you and what was at stake?",
          "Line: Name the tension. What was broken, missing, or unclear?",
          "Effort: Describe your choices. Focus on what you did, not the whole team.",
          "Aftermath: Share the result. Use a number, quote, or visible change.",
          "Relevance: Connect to this room. Why does this story matter here and now?",
        ],
      },
      {
        title: "SUCCESs checklist (Heath brothers)",
        description:
          "From Made to Stick. You do not need every element in a short answer, but check at least three before any high-stakes story.",
        items: [
          "Simple: One core idea, not three.",
          "Unexpected: A tension or surprise that earns attention.",
          "Concrete: Specific details people can picture.",
          "Credible: Evidence, not adjectives.",
          "Emotional: Stakes someone can feel.",
          "Stories: A narrative arc, not a list of facts.",
        ],
      },
      {
        title: "Audience as hero (Duarte)",
        description:
          "In Resonate, Nancy Duarte found that persuasive speakers cast the audience as the hero. You are the mentor who helps them see the path.",
        items: [
          "Do not end with why you are great.",
          "End with what becomes possible for them.",
          "Frame your effort as a model they can apply.",
          "Ask yourself: what decision does this story help them make?",
        ],
      },
    ],
    exercises: [
      {
        id: "clear-worksheet",
        title: "CLEAR framework worksheet",
        instructions:
          "Pick one real professional moment. Work through each CLEAR beat in one sentence. Read it out loud and time yourself. Target under two minutes.",
        fields: [
          line("clear-context", "Context (one sentence)"),
          line("clear-line", "Line: the tension or problem"),
          line("clear-effort", "Effort: your choices and actions"),
          line("clear-aftermath", "Aftermath: result with evidence"),
          line("clear-relevance", "Relevance: why this matters to your current audience"),
          long("clear-full", "Full story draft (combine all five beats)", "Read aloud and note your time:"),
        ],
      },
      {
        id: "story-audit",
        title: "Story audit",
        instructions:
          "List five professional moments worth turning into stories. Score each 1 to 5 on readiness (1 = raw memory, 5 = ready to tell). Pick the top two to develop in the templates below.",
        fields: [
          long("audit-1", "Story 1: brief description and readiness score (1-5)"),
          long("audit-2", "Story 2: brief description and readiness score (1-5)"),
          long("audit-3", "Story 3: brief description and readiness score (1-5)"),
          long("audit-4", "Story 4: brief description and readiness score (1-5)"),
          long("audit-5", "Story 5: brief description and readiness score (1-5)"),
          line("audit-priority", "Top two stories to develop first"),
        ],
      },
      {
        id: "interview-template",
        title: "Interview story template",
        instructions:
          "Use CLEAR for a behavioral interview answer. Map to a common prompt like \"Tell me about a time you solved a hard problem.\"",
        fields: [
          short("int-prompt", "Interview prompt you are preparing for"),
          line("int-context", "Context"),
          line("int-line", "Line"),
          line("int-effort", "Effort"),
          line("int-aftermath", "Aftermath"),
          line("int-relevance", "Relevance for this role"),
        ],
      },
      {
        id: "intro-template",
        title: "Introduction story template",
        instructions:
          "Craft a 30-second professional intro that includes one mini-story, not a job title list.",
        fields: [
          line("intro-hook", "Opening hook (one sentence)"),
          line("intro-story", "Mini-story in CLEAR format"),
          line("intro-bridge", "Bridge to why you are in this conversation"),
        ],
      },
      {
        id: "meeting-template",
        title: "Meeting update story template",
        instructions:
          "Open a status update with context and result before the details. Duarte's research shows audiences decide in seconds whether to keep listening.",
        fields: [
          line("meet-context", "Context: what was at stake"),
          line("meet-result", "Aftermath: outcome in one sentence"),
          line("meet-details", "Three bullet points of what changed"),
        ],
      },
      {
        id: "pitch-template",
        title: "Pitch story template",
        instructions:
          "Cast your listener as the hero. Your story should show a path they can walk, not a trophy you won.",
        fields: [
          line("pitch-audience", "Who is the hero (your listener)?"),
          line("pitch-problem", "Their problem in their words"),
          line("pitch-path", "The path your story models for them"),
          line("pitch-proof", "Evidence that the path works"),
        ],
      },
      {
        id: "feedback-template",
        title: "Feedback story template",
        instructions:
          "Use a story to make feedback concrete. Replace \"you need to be more proactive\" with a specific moment and a clear alternative.",
        fields: [
          line("fb-situation", "Situation you observed (concrete moment)"),
          line("fb-impact", "Impact on the team or outcome"),
          line("fb-request", "Specific behavior you are asking for"),
          line("fb-support", "How you will support the change"),
        ],
      },
      {
        id: "success-checklist",
        title: "SUCCESs pre-flight checklist",
        instructions:
          "Before your next high-stakes story, check each element. Mark which ones you will deliberately include.",
        fields: [
          {
            id: "success-items",
            label: "Check each element you will include",
            type: "checkbox",
            options: [
              "Simple: one core idea",
              "Unexpected: tension or surprise",
              "Concrete: specific details",
              "Credible: evidence included",
              "Emotional: stakes are felt",
              "Stories: clear narrative arc",
            ],
          },
          line("success-gap", "Weakest element to strengthen before you tell this story"),
        ],
      },
    ],
    worksheets: [
      {
        id: "story-prep-card",
        title: "Story prep card (print and keep)",
        description: "Fill one card per story. Keep in your notebook or phone notes.",
        fields: [
          short("card-title", "Story title (internal label)"),
          line("card-trigger", "When to use this story"),
          line("card-clear", "CLEAR beats (one line each)"),
          line("card-relevance", "Relevance line for current goal"),
        ],
      },
    ],
    actionPlan: {
      title: "Seven-day story practice plan",
      duration: "7 days · 15 minutes per day",
      instructions:
        "One small practice beat per day. Say stories out loud, even alone. The Heath research on memory applies to you too: hearing yourself builds recall.",
      days: [
        { day: 1, focus: "Audit", tasks: ["Complete the story audit exercise", "Pick your top two stories", "Read the CLEAR framework aloud once"] },
        { day: 2, focus: "Interview", tasks: ["Fill the interview template", "Practice out loud three times", "Time yourself: under two minutes"] },
        { day: 3, focus: "Introduction", tasks: ["Fill the intro template", "Record a 30-second version on your phone", "Listen back for filler words"] },
        { day: 4, focus: "Meeting", tasks: ["Fill the meeting template", "Use it in one real update or rehearsal", "Ask: did I lead with result?"] },
        { day: 5, focus: "Pitch", tasks: ["Fill the pitch template", "Identify the hero in your next pitch", "Remove one sentence about yourself"] },
        { day: 6, focus: "Feedback", tasks: ["Fill the feedback template", "Replace one vague feedback phrase with a story", "Practice the conversation"] },
        { day: 7, focus: "Integration", tasks: ["Run SUCCESs checklist on all five templates", "Pick one story to tell this week", "Schedule when and where you will use it"], reflection: "What changed in how you think about storytelling?" },
      ],
    },
    sources: [
      { citation: "Chip Heath and Dan Heath, Made to Stick: Why Some Ideas Survive and Others Die (Random House, 2007)" },
      { citation: "Nancy Duarte, Resonate: Present Visual Stories that Transform Audiences (Wiley, 2010)" },
      { citation: "Nancy Duarte, audience-as-hero principle, Stanford Graduate School of Business featured research" },
    ],
  },
  {
    slug: "leadership-workbook",
    title: "Leadership Workbook",
    description:
      "Lead before you have the title. Kouzes and Posner self-assessment, Multipliers audit, influence mapping, stakeholder worksheet, and a 30-day lead-without-title plan.",
    capability: "Leadership",
    priceUsd: 99,
    pageCount: 24,
    exerciseCount: 7,
    relatedGuideSlug: "lead-before-you-have-the-title",
    intro: {
      paragraphs: [
        "Leadership is a set of behaviors, not a job description. Kouzes and Posner studied thousands of leaders and found five practices common to those who deliver extraordinary results. Liz Wiseman found that Multipliers get two times the capability from the same team compared to Diminishers.",
        "This workbook helps you assess where you are today, map who you influence, and build a 30-day plan to lead without waiting for permission.",
        "Block 60 to 90 minutes for the core exercises. Revisit the stakeholder worksheet weekly.",
      ],
      whatYouGet: [
        "Leadership self-assessment based on the Five Practices of Exemplary Leadership",
        "Multipliers vs Diminishers audit with Accidental Diminisher triggers",
        "Influence mapping exercise for your current role",
        "Stakeholder worksheet with conversation prompts",
        "Lead without title 30-day action plan",
        "Weekly reflection template",
      ],
    },
    selfAssessment: {
      title: "Five Practices self-assessment",
      instructions:
        "Inspired by the Leadership Practices Inventory (LPI) research by Kouzes and Posner. Rate how often you engage in each behavior from 1 (almost never) to 5 (very frequently).",
      items: [
        { id: "lp-1", statement: "I set an example by aligning my actions with shared values.", category: "Model the Way" },
        { id: "lp-2", statement: "I find ways to celebrate small wins and recognize contributions.", category: "Model the Way" },
        { id: "lp-3", statement: "I describe a compelling image of what our group can achieve.", category: "Inspire a Shared Vision" },
        { id: "lp-4", statement: "I appeal to others to share an exciting dream of the future.", category: "Inspire a Shared Vision" },
        { id: "lp-5", statement: "I search outside the formal organization for new ideas.", category: "Challenge the Process" },
        { id: "lp-6", statement: "I treat mistakes as opportunities for learning.", category: "Challenge the Process" },
        { id: "lp-7", statement: "I develop cooperative relationships with people I work with.", category: "Enable Others to Act" },
        { id: "lp-8", statement: "I give people freedom and choice in how they do their work.", category: "Enable Others to Act" },
        { id: "lp-9", statement: "I praise people for a job well done.", category: "Encourage the Heart" },
        { id: "lp-10", statement: "I actively listen to diverse points of view.", category: "Encourage the Heart" },
      ],
      scoringGuide:
        "Average your scores within each practice. Your lowest practice is your starting point for the 30-day plan. Kouzes and Posner's research shows leadership is learnable: increasing the frequency of these behaviors makes you more effective.",
    },
    frameworks: [
      {
        title: "Five Practices of Exemplary Leadership (Kouzes & Posner)",
        description:
          "From The Leadership Challenge. Leadership is measurable, learnable, and teachable.",
        items: [
          "Model the Way: Clarify values and set the example.",
          "Inspire a Shared Vision: Envision the future and enlist others.",
          "Challenge the Process: Search for opportunities and experiment.",
          "Enable Others to Act: Foster collaboration and strengthen others.",
          "Encourage the Heart: Recognize contributions and celebrate wins.",
        ],
      },
      {
        title: "Multipliers vs Diminishers (Wiseman)",
        description:
          "Multipliers access 70 to 100 percent of their team's capability. Diminishers access only 20 to 50 percent, often by accident.",
        items: [
          "Talent Magnet: Attract and optimize talent vs Empire Builder.",
          "Liberator: Create space for best thinking vs Tyrant.",
          "Challenger: Extend challenges vs Know-It-All.",
          "Debate Maker: Drive sound decisions vs Decision Maker.",
          "Investor: Give ownership and accountability vs Micromanager.",
        ],
      },
    ],
    exercises: [
      {
        id: "multipliers-audit",
        title: "Multipliers audit: are you an Accidental Diminisher?",
        instructions:
          "Most diminishing is accidental. Circle behaviors you recognize. Pick one trigger and one experiment to replace it this month.",
        fields: [
          {
            id: "dim-tendencies",
            label: "Accidental Diminisher tendencies I recognize",
            type: "checkbox",
            options: [
              "Idea Fountain: I share ideas before others can think",
              "Rescuer: I jump in to fix problems for others",
              "Pacesetter: I set a pace others cannot match",
              "Optimist: I dismiss concerns too quickly",
              "Protector: I shield people from hard feedback",
              "Always On: I expect others to match my energy",
            ],
          },
          line("dim-trigger", "My trigger: when, where, and with whom does this show up?"),
          line("dim-experiment", "One Multiplier experiment I will run this month"),
          long("dim-feedback", "Who will give me candid feedback on this experiment?"),
        ],
      },
      {
        id: "influence-map",
        title: "Influence mapping exercise",
        instructions:
          "Leadership without title starts with understanding who you affect and who affects your work. Map your influence network.",
        fields: [
          long("inf-peers", "Peers I influence (who comes to me for help or direction?)"),
          long("inf-up", "Leaders I need to influence (who decides on my priorities?)"),
          long("inf-cross", "Cross-functional partners (who controls resources I need?)"),
          line("inf-gap", "Biggest gap: who should I influence more?"),
          line("inf-action", "One concrete action to strengthen that relationship this week"),
        ],
      },
      {
        id: "stakeholder-worksheet",
        title: "Stakeholder worksheet",
        instructions:
          "For each key stakeholder, clarify what they need, what you need, and your next conversation.",
        fields: [
          short("sh-1-name", "Stakeholder 1: name and role"),
          line("sh-1-needs", "What they care about most"),
          line("sh-1-need-from-you", "What they need from you"),
          line("sh-1-next", "Your next conversation goal"),
          short("sh-2-name", "Stakeholder 2: name and role"),
          line("sh-2-needs", "What they care about most"),
          line("sh-2-need-from-you", "What they need from you"),
          line("sh-2-next", "Your next conversation goal"),
          short("sh-3-name", "Stakeholder 3: name and role"),
          line("sh-3-needs", "What they care about most"),
          line("sh-3-need-from-you", "What they need from you"),
          line("sh-3-next", "Your next conversation goal"),
        ],
      },
      {
        id: "lead-without-title",
        title: "Lead without title: 30-day commitment",
        instructions:
          "Pick one practice from your lowest-scoring Five Practice area. Commit to three specific behaviors for 30 days.",
        fields: [
          line("lwt-practice", "Lowest-scoring practice to focus on"),
          line("lwt-behavior-1", "Behavior 1 I will do weekly"),
          line("lwt-behavior-2", "Behavior 2 I will do weekly"),
          line("lwt-behavior-3", "Behavior 3 I will do weekly"),
          line("lwt-evidence", "How I will know it is working"),
        ],
      },
      {
        id: "vision-draft",
        title: "Shared vision draft",
        instructions:
          "Inspire a Shared Vision does not require a company strategy deck. Draft a one-paragraph vision for your team, project, or working group.",
        fields: [
          line("vis-audience", "Who is this vision for?"),
          long("vis-draft", "Vision paragraph (what we can achieve together)"),
          line("vis-enlist", "One person you will share this with this week"),
        ],
      },
      {
        id: "enable-others",
        title: "Enable Others to Act: delegation worksheet",
        instructions:
          "Identify one task you should hand off. Define the outcome, not the steps.",
        fields: [
          line("eo-task", "Task I currently own that someone else could grow into"),
          line("eo-person", "Who could take this on?"),
          line("eo-outcome", "Outcome they own (not the steps)"),
          line("eo-support", "Support I will provide without rescuing"),
        ],
      },
      {
        id: "recognition-plan",
        title: "Encourage the Heart: recognition plan",
        instructions:
          "Kouzes and Posner found that recognizing contributions is one of the most overlooked leadership practices.",
        fields: [
          line("rec-who", "Three people whose work I will recognize this week"),
          line("rec-how", "How I will recognize them (specific, public or private)"),
          line("rec-why", "What behavior I am reinforcing"),
        ],
      },
    ],
    worksheets: [
      {
        id: "weekly-leadership-review",
        title: "Weekly leadership review",
        description: "Complete every Friday. Takes 10 minutes.",
        fields: [
          line("wr-win", "One leadership win this week"),
          line("wr-miss", "One moment I diminished instead of multiplied"),
          line("wr-next", "One behavior to repeat next week"),
        ],
      },
    ],
    actionPlan: {
      title: "30-day lead without title plan",
      duration: "30 days · weekly themes",
      instructions:
        "Four weeks, four practices. Adjust based on your self-assessment scores. Ask one colleague for feedback at the end of each week.",
      days: [
        { day: "Week 1", focus: "Model the Way", tasks: ["Align one daily action with a value you want to model", "Share why you made one decision transparently", "Complete the stakeholder worksheet for your top three"] },
        { day: "Week 2", focus: "Enable Others to Act", tasks: ["Complete the delegation worksheet", "Hand off one task without rescuing", "Ask for input before sharing your opinion in two meetings"] },
        { day: "Week 3", focus: "Challenge the Process", tasks: ["Propose one small experiment to improve how work gets done", "Treat one setback as a learning conversation", "Run your Multiplier experiment daily"] },
        { day: "Week 4", focus: "Inspire and Encourage", tasks: ["Share your vision draft with two people", "Execute your recognition plan three times", "Complete the weekly review and ask for feedback"] },
      ],
    },
    sources: [
      { citation: "James M. Kouzes and Barry Z. Posner, The Leadership Challenge, 6th ed. (Wiley, 2017)" },
      { citation: "James M. Kouzes and Barry Z. Posner, Leadership Practices Inventory (LPI) research, leadershipchallenge.com" },
      { citation: "Liz Wiseman, Multipliers: How the Best Leaders Make Everyone Smarter (HarperBusiness, 2010)" },
      { citation: "Liz Wiseman, Accidental Diminisher research, The Wiseman Group" },
    ],
  },
  {
    slug: "executive-presence-workbook",
    title: "Executive Presence Workbook",
    description:
      "Project calm confidence under pressure. Gravitas, communication, and appearance scorecard, presence audit, high-stakes prep worksheet, voice and body language checklist, and a 14-day plan.",
    capability: "Executive Presence",
    priceUsd: 99,
    pageCount: 23,
    exerciseCount: 6,
    relatedGuideSlug: "calm-confidence-under-pressure",
    intro: {
      paragraphs: [
        "Coqual research led by Sylvia Ann Hewlett found that executive presence accounts for 26 percent of what senior leaders say it takes to get promoted. It breaks into three dimensions: gravitas (67 percent), communication (28 percent), and appearance (5 percent).",
        "Presence is not performance. It is the ability to project confidence, credibility, and composure when others are watching. This workbook helps you audit where you are, prepare for high-stakes moments, and build habits over 14 days.",
        "Video yourself once during the action plan. Self-observation is uncomfortable and effective.",
      ],
      whatYouGet: [
        "Gravitas, communication, and appearance scorecard",
        "Executive presence audit across six gravitas behaviors",
        "High-stakes moment prep worksheet",
        "Voice and body language checklist",
        "14-day presence practice plan",
        "Pre-meeting ritual template",
      ],
    },
    selfAssessment: {
      title: "Executive presence scorecard",
      instructions:
        "Based on Coqual's three dimensions of executive presence. Rate each statement 1 (needs work) to 5 (consistent strength). Gravitas carries the most weight in promotion decisions.",
      items: [
        { id: "ep-g1", statement: "I stay composed when plans change unexpectedly.", category: "Gravitas" },
        { id: "ep-g2", statement: "I speak truth to power with respect and evidence.", category: "Gravitas" },
        { id: "ep-g3", statement: "People trust my judgment in ambiguous situations.", category: "Gravitas" },
        { id: "ep-g4", statement: "I demonstrate emotional intelligence under pressure.", category: "Gravitas" },
        { id: "ep-c1", statement: "I can summarize a complex point in one clear sentence.", category: "Communication" },
        { id: "ep-c2", statement: "I read the room and adjust my message accordingly.", category: "Communication" },
        { id: "ep-c3", statement: "I command attention without dominating the conversation.", category: "Communication" },
        { id: "ep-a1", statement: "My attire and grooming match the context I am entering.", category: "Appearance" },
        { id: "ep-a2", statement: "My virtual presence (camera, lighting, background) is professional.", category: "Appearance" },
        { id: "ep-a3", statement: "My body language supports my words (posture, eye contact, stillness).", category: "Appearance" },
      ],
      scoringGuide:
        "Weight gravitas scores most heavily. Communication gaps often show up as over-explaining or failing to read the room. Appearance is a first filter: Coqual found that blunders here can remove you from consideration before gravitas gets a chance to show.",
    },
    frameworks: [
      {
        title: "Three dimensions of executive presence (Coqual / Hewlett)",
        description:
          "From Cracking the C-Suite Code and Executive Presence 2.0 research.",
        items: [
          "Gravitas (67%): Confidence, grace under fire, emotional intelligence, decisiveness.",
          "Communication (28%): Speaking persuasively, commanding a room, reading audiences.",
          "Appearance (5%): Grooming, polish, and context-appropriate presentation.",
        ],
      },
      {
        title: "Six gravitas behaviors",
        description: "Coqual focus groups identified these as the core of gravitas.",
        items: [
          "Exuding confidence and grace under fire.",
          "Speaking truth to power.",
          "Demonstrating emotional intelligence.",
          "Burnishing reputation and standing.",
          "Showing teeth (appropriate assertiveness).",
          "Radiating vision and credibility.",
        ],
      },
    ],
    exercises: [
      {
        id: "presence-audit",
        title: "Presence audit",
        instructions:
          "Think of three recent high-stakes moments (meeting, presentation, difficult conversation). Score each 1 to 5 on how you showed up.",
        fields: [
          long("pa-moment-1", "Moment 1: describe and score (1-5)"),
          long("pa-moment-2", "Moment 2: describe and score (1-5)"),
          long("pa-moment-3", "Moment 3: describe and score (1-5)"),
          line("pa-pattern", "Pattern you notice across all three"),
          line("pa-focus", "One behavior to improve first"),
        ],
      },
      {
        id: "high-stakes-prep",
        title: "High-stakes moment prep worksheet",
        instructions:
          "Complete before your next important meeting, interview, or presentation. Preparation builds the composure that reads as gravitas.",
        fields: [
          short("hs-event", "Event: what, when, who is in the room"),
          line("hs-outcome", "Desired outcome in one sentence"),
          line("hs-message", "Core message (one sentence)"),
          line("hs-objection", "Likely pushback and your response"),
          line("hs-ask", "Clear ask or close"),
          line("hs-ritual", "Pre-event ritual (breath, review, arrival time)"),
        ],
      },
      {
        id: "voice-body-checklist",
        title: "Voice and body language checklist",
        instructions:
          "Use during rehearsal or review a recording. Check what you observe.",
        fields: [
          {
            id: "vbc-items",
            label: "Observations from rehearsal or recording",
            type: "checkbox",
            options: [
              "Pace: slow enough to be understood",
              "Pauses: used before key points",
              "Filler words: minimized (um, like, so)",
              "Posture: open, grounded, not slouched",
              "Eye contact: steady, not darting",
              "Hands: purposeful, not fidgeting",
              "Voice: varied tone, not monotone",
              "Opening: first sentence is clear and confident",
            ],
          },
          line("vbc-fix", "Top one fix for next time"),
        ],
      },
      {
        id: "room-read",
        title: "Read the room worksheet",
        instructions:
          "Coqual identifies reading an audience as a top communication trait. Plan how you will adapt in real time.",
        fields: [
          line("rr-audience", "Who is in the room and what do they care about?"),
          line("rr-energy", "Expected energy level (skeptical, rushed, supportive)"),
          line("rr-adjust", "How I will adjust my opening based on that energy"),
          line("rr-signal", "Signals I will watch for (body language, questions, silence)"),
        ],
      },
      {
        id: "virtual-presence",
        title: "Virtual presence checklist",
        instructions:
          "Hewlett's updated research highlights command of Zoom and hybrid settings as essential to modern executive presence.",
        fields: [
          {
            id: "vp-items",
            label: "Virtual setup checklist",
            type: "checkbox",
            options: [
              "Camera at eye level",
              "Lighting on face, not behind",
              "Background clean or intentional",
              "Notifications off",
              "Look at camera when making key points",
              "Name visible if new group",
              "Test audio before joining",
            ],
          },
          line("vp-improve", "One setup change to make before next call"),
        ],
      },
      {
        id: "truth-to-power",
        title: "Speaking truth to power worksheet",
        instructions:
          "Gravitas includes respectful directness. Plan a conversation where you need to disagree or raise a hard topic.",
        fields: [
          line("ttp-topic", "Topic I need to address"),
          line("ttp-stake", "What is at stake if I stay silent"),
          line("ttp-evidence", "Evidence or example I will use"),
          line("ttp-ask", "Specific request or recommendation"),
          line("ttp-tone", "Tone I will aim for (calm, direct, curious)"),
        ],
      },
    ],
    worksheets: [
      {
        id: "pre-meeting-ritual",
        title: "Pre-meeting ritual card",
        description: "Five minutes before any high-stakes moment.",
        fields: [
          line("pmr-breath", "Breath: two slow breaths, shoulders down"),
          line("pmr-message", "Message: one-sentence core point"),
          line("pmr-posture", "Posture: feet grounded, chin level"),
          line("pmr-intent", "Intent: how I want others to feel when I finish"),
        ],
      },
    ],
    actionPlan: {
      title: "14-day presence plan",
      duration: "14 days · 10 to 15 minutes per day",
      instructions:
        "Alternate between preparation and practice. Record yourself on days 7 and 14.",
      days: [
        { day: 1, focus: "Baseline", tasks: ["Complete the presence scorecard", "Identify lowest dimension (gravitas, communication, or appearance)"] },
        { day: 2, focus: "Audit", tasks: ["Complete the presence audit", "Pick one pattern to change"] },
        { day: 3, focus: "Prep", tasks: ["Fill high-stakes prep for your next important event", "Set a pre-meeting ritual"] },
        { day: 4, focus: "Voice", tasks: ["Rehearse opening sentence out loud ten times", "Run voice and body checklist"] },
        { day: 5, focus: "Virtual", tasks: ["Complete virtual presence checklist", "Fix one setup issue"] },
        { day: 6, focus: "Room", tasks: ["Complete read the room worksheet", "Use it in one real meeting"] },
        { day: 7, focus: "Review", tasks: ["Record a two-minute update", "Score yourself with the checklist"], reflection: "What surprised you on video?" },
        { day: 8, focus: "Gravitas", tasks: ["Complete truth to power worksheet", "Have or rehearse one direct conversation"] },
        { day: 9, focus: "Pause", tasks: ["Practice pausing three seconds before answering questions", "Notice filler words"] },
        { day: 10, focus: "Appearance", tasks: ["Audit wardrobe for next week", "Prepare one context-appropriate outfit"] },
        { day: 11, focus: "Feedback", tasks: ["Ask one trusted colleague how you show up in meetings", "Compare to your self-score"] },
        { day: 12, focus: "High stakes", tasks: ["Use prep worksheet before a real event", "Run pre-meeting ritual"] },
        { day: 13, focus: "Integrate", tasks: ["Combine message, ritual, and body checklist in one rehearsal"] },
        { day: 14, focus: "Measure", tasks: ["Re-take the scorecard", "Record again and compare to day 7"], reflection: "What will you keep doing weekly?" },
      ],
    },
    sources: [
      { citation: "Sylvia Ann Hewlett, Executive Presence: The Missing Link Between Merit and Success (HarperBusiness, 2014)" },
      { citation: "Sylvia Ann Hewlett, Executive Presence 2.0: Leadership in an Age of Inclusion (HarperBusiness, 2023)" },
      { citation: "Coqual (formerly Center for Talent Innovation), Cracking the C-Suite Code and Executive Presence research" },
    ],
  },
  {
    slug: "leadership-through-ai-workbook",
    title: "Leadership through AI Workbook",
    description:
      "Lead with AI, not behind it. AI literacy self-assessment, co-intelligence principles, human edge audit, workflow templates, and a team AI policy draft.",
    capability: "Leadership through AI",
    priceUsd: 99,
    pageCount: 21,
    exerciseCount: 6,
    relatedGuideSlug: "lead-with-ai-not-behind-it",
    intro: {
      paragraphs: [
        "Ethan Mollick's research on co-intelligence shows that AI works best when humans stay in the loop for judgment, context, and accountability. McKinsey estimates generative AI could automate 60 to 70 percent of employee time on current tasks, but leaders who outsource thinking lose the edge that matters.",
        "This workbook helps you assess your AI literacy, define where AI helps and where it hurts, and draft a team policy that protects quality and judgment.",
        "Complete the workflow templates with real tasks from your current role.",
      ],
      whatYouGet: [
        "AI literacy self-assessment for leaders",
        "Co-intelligence principles worksheet",
        "Human edge audit: what AI cannot replace in your role",
        "When to use AI vs not decision template",
        "Team AI policy draft template",
        "14-day AI leadership practice plan",
      ],
    },
    selfAssessment: {
      title: "AI literacy self-assessment",
      instructions:
        "Rate each statement 1 (not yet) to 5 (consistent habit). Inspired by Mollick's co-intelligence framework and McKinsey AI adoption research.",
      items: [
        { id: "ai-1", statement: "I can explain to my team when AI output needs human verification.", category: "Literacy" },
        { id: "ai-2", statement: "I know which tasks in my role AI handles well vs poorly.", category: "Literacy" },
        { id: "ai-3", statement: "I treat AI as a collaborator, not an authority.", category: "Co-intelligence" },
        { id: "ai-4", statement: "I stay in the loop on decisions AI assists with.", category: "Co-intelligence" },
        { id: "ai-5", statement: "I add context and judgment AI cannot access.", category: "Co-intelligence" },
        { id: "ai-6", statement: "My team knows what is acceptable AI use on shared work.", category: "Governance" },
        { id: "ai-7", statement: "I protect time for deep thinking without AI assistance.", category: "Human edge" },
        { id: "ai-8", statement: "I can articulate my human edge in three sentences.", category: "Human edge" },
      ],
      scoringGuide:
        "Governance and human edge scores below 3 are urgent. Mollick warns that leaders who default to AI for all drafting lose the specificity that makes their work valuable.",
    },
    frameworks: [
      {
        title: "Co-intelligence principles (Mollick)",
        description: "From Co-Intelligence: Living and Working with AI. Humans and AI work best together.",
        items: [
          "Always invite AI to the table: use it for drafts, options, and structure.",
          "Be the human in the loop: verify facts, add context, own decisions.",
          "Treat AI like a person (but tell it what kind): specify role and audience.",
          "Assume this is the worst AI you will ever use: build habits that scale.",
        ],
      },
      {
        title: "When to use AI vs not",
        description: "McKinsey and Mollick agree: automate tasks, not judgment.",
        items: [
          "Use AI: first drafts, brainstorming, summarizing, formatting, research starting points.",
          "Use caution: factual claims, sensitive data, final client deliverables.",
          "Do not outsource: ethical calls, relationship conversations, novel strategy under uncertainty.",
          "Always verify: numbers, names, dates, and anything with legal or reputational risk.",
        ],
      },
    ],
    exercises: [
      {
        id: "human-edge-audit",
        title: "Human edge audit",
        instructions:
          "List what you bring that AI cannot replicate in your role. Be specific, not generic.",
        fields: [
          long("he-relationships", "Relationships and trust I have built"),
          long("he-context", "Organizational context only I know"),
          long("he-judgment", "Judgment calls I am accountable for"),
          line("he-edge", "My human edge in three sentences"),
        ],
      },
      {
        id: "ai-workflow-template",
        title: "AI workflow template",
        instructions:
          "Pick one recurring task. Map where AI helps, where you intervene, and where AI stays out.",
        fields: [
          short("wf-task", "Task name"),
          line("wf-ai-step", "Step 1: what AI does"),
          line("wf-human-step", "Step 2: what I add or verify"),
          line("wf-final-step", "Step 3: final human-owned output"),
          line("wf-never", "What AI must never do on this task"),
        ],
      },
      {
        id: "when-not-ai",
        title: "When not to use AI worksheet",
        instructions:
          "Name three situations where reaching for AI would weaken your leadership or quality.",
        fields: [
          long("wna-1", "Situation 1: why AI would hurt"),
          long("wna-2", "Situation 2: why AI would hurt"),
          long("wna-3", "Situation 3: why AI would hurt"),
          line("wna-rule", "One rule I will tell my team"),
        ],
      },
      {
        id: "team-ai-policy",
        title: "Team AI policy draft",
        instructions:
          "Draft a one-page policy your team can follow. Adjust for your industry and compliance requirements.",
        fields: [
          line("pol-purpose", "Purpose: why we use AI on this team"),
          line("pol-allowed", "Allowed uses (bullets)"),
          line("pol-prohibited", "Prohibited uses (bullets)"),
          line("pol-verify", "Verification requirements"),
          line("pol-data", "Data and confidentiality rules"),
          line("pol-owner", "Who approves exceptions"),
        ],
      },
      {
        id: "ai-meeting-lead",
        title: "Leading meetings with AI worksheet",
        instructions:
          "Plan how you will use AI before, during, and after a meeting without letting it replace your leadership.",
        fields: [
          line("mtg-before", "Before: AI-assisted prep (agenda, research)"),
          line("mtg-during", "During: what stays human-only (facilitation, conflict, decisions)"),
          line("mtg-after", "After: AI-assisted follow-up and what you verify"),
        ],
      },
      {
        id: "co-intelligence-practice",
        title: "Co-intelligence practice log",
        instructions:
          "Log one AI collaboration per day during the action plan. Note what worked and what you corrected.",
        fields: [
          long("ci-day1", "Day 1: task, AI role, my correction"),
          long("ci-day2", "Day 2: task, AI role, my correction"),
          long("ci-day3", "Day 3: task, AI role, my correction"),
        ],
      },
    ],
    worksheets: [
      {
        id: "ai-decision-matrix",
        title: "AI decision matrix",
        description: "Quick reference for any new task.",
        fields: [
          short("dm-task", "Task"),
          line("dm-risk", "Risk if wrong (low / medium / high)"),
          line("dm-ai", "AI role (none / draft / assist / automate)"),
          line("dm-verify", "Verification step"),
        ],
      },
    ],
    actionPlan: {
      title: "14-day AI leadership plan",
      duration: "14 days · daily micro-practices",
      instructions:
        "Build co-intelligence habits before rolling out team policy.",
      days: [
        { day: 1, focus: "Assess", tasks: ["Complete AI literacy self-assessment", "Complete human edge audit"] },
        { day: 2, focus: "Workflow", tasks: ["Fill AI workflow template for one task", "Use it today"] },
        { day: 3, focus: "Boundaries", tasks: ["Complete when not to use AI worksheet"] },
        { day: 4, focus: "Verify", tasks: ["Fact-check one AI output you would normally trust", "Note errors found"] },
        { day: 5, focus: "Deep work", tasks: ["Block 45 minutes with no AI", "Notice what thinking feels different"] },
        { day: 6, focus: "Meeting", tasks: ["Complete leading meetings with AI worksheet", "Apply in one meeting"] },
        { day: 7, focus: "Log", tasks: ["Complete co-intelligence practice log day 1"], reflection: "Where did AI save time vs create risk?" },
        { day: 8, focus: "Policy draft", tasks: ["Draft team AI policy sections 1 to 3"] },
        { day: 9, focus: "Policy draft", tasks: ["Complete policy draft", "Share with one colleague for feedback"] },
        { day: 10, focus: "Revise", tasks: ["Incorporate feedback into policy", "Add verification rules"] },
        { day: 11, focus: "Team", tasks: ["Discuss draft with team or manager", "Document questions raised"] },
        { day: 12, focus: "Matrix", tasks: ["Fill AI decision matrix for three common tasks"] },
        { day: 13, focus: "Teach", tasks: ["Explain co-intelligence to one colleague", "Share one workflow template"] },
        { day: 14, focus: "Commit", tasks: ["Re-take self-assessment", "Set one monthly review date for policy"], reflection: "What will you never outsource to AI?" },
      ],
    },
    sources: [
      { citation: "Ethan Mollick, Co-Intelligence: Living and Working with AI (Portfolio, 2024)" },
      { citation: "Ethan Mollick, One Useful Thing newsletter and Wharton research on AI at work" },
      { citation: "McKinsey Global Institute, The economic potential of generative AI (2023)" },
    ],
  },
  {
    slug: "critical-thinking-workbook",
    title: "Critical Thinking Workbook",
    description:
      "Think one layer deeper than the first answer. VERIFY framework practice, bias spotting exercises, decision journal, second opinion worksheet, and Paul and Elder intellectual standards rubric.",
    capability: "Critical Thinking",
    priceUsd: 99,
    pageCount: 22,
    exerciseCount: 7,
    relatedGuideSlug: "critical-thinking-beyond-the-first-answer",
    intro: {
      paragraphs: [
        "Daniel Kahneman's research on System 1 and System 2 thinking shows we default to fast, intuitive judgments. That works until the stakes rise or everyone in the room shares the same first answer from the same AI prompt.",
        "This workbook builds slower, better thinking habits: VERIFY for decisions, a decision journal for patterns, and Paul and Elder's intellectual standards as a quality rubric.",
        "Use the decision journal for every significant choice this month, not only the big ones.",
      ],
      whatYouGet: [
        "Critical thinking self-assessment",
        "VERIFY framework practice sheets",
        "Bias spotting exercises with common workplace traps",
        "Decision journal template (reusable)",
        "Second opinion worksheet",
        "Paul and Elder intellectual standards rubric",
        "21-day critical thinking practice plan",
      ],
    },
    selfAssessment: {
      title: "Critical thinking self-assessment",
      instructions:
        "Rate each statement 1 (rarely) to 5 (almost always). Low scores flag where VERIFY and the decision journal will help most.",
      items: [
        { id: "ct-1", statement: "I question the first answer before acting on it.", category: "Depth" },
        { id: "ct-2", statement: "I seek evidence that contradicts my initial view.", category: "Depth" },
        { id: "ct-3", statement: "I can explain why I believe what I believe.", category: "Clarity" },
        { id: "ct-4", statement: "I separate facts from assumptions in discussions.", category: "Clarity" },
        { id: "ct-5", statement: "I notice when groupthink is shaping a decision.", category: "Fairness" },
        { id: "ct-6", statement: "I ask what would change my mind before committing.", category: "Fairness" },
        { id: "ct-7", statement: "I document major decisions and revisit outcomes.", category: "Discipline" },
        { id: "ct-8", statement: "I invite dissent without punishing it.", category: "Discipline" },
      ],
      scoringGuide:
        "Kahneman notes that slowing down is not always right, but it is essential when stakes are high, emotions run hot, or the problem is novel. Discipline scores below 3 mean start the decision journal this week.",
    },
    frameworks: [
      {
        title: "VERIFY framework",
        description: "A practical sequence for decisions that matter.",
        items: [
          "Validate: What is the actual question? Restate it in one sentence.",
          "Examine: What evidence supports and contradicts the leading option?",
          "Recognize assumptions: What are we taking for granted?",
          "Identify alternatives: What else could we do? Include a null option.",
          "Frame consequences: What happens in best, worst, and most likely cases?",
          "Yield to review: Who will challenge this before we commit?",
        ],
      },
      {
        title: "Intellectual standards (Paul & Elder)",
        description:
          "From the Foundation for Critical Thinking. Use as a rubric for any recommendation or memo.",
        items: [
          "Clarity: Could someone misunderstand this?",
          "Accuracy: Are the facts verifiable?",
          "Precision: Is it specific enough to act on?",
          "Relevance: Does this bear on the question?",
          "Depth: Does it address complexity?",
          "Breadth: Did we consider other viewpoints?",
          "Logic: Does the conclusion follow from the evidence?",
          "Fairness: Did we consider vested interests and bias?",
        ],
      },
    ],
    exercises: [
      {
        id: "verify-practice",
        title: "VERIFY framework practice sheet",
        instructions:
          "Apply VERIFY to one real decision you face this week. Write before you decide.",
        fields: [
          line("v-validate", "Validate: the decision in one sentence"),
          line("v-examine", "Examine: evidence for and against"),
          line("v-assume", "Recognize assumptions"),
          line("v-alt", "Identify alternatives (at least two)"),
          line("v-conseq", "Frame consequences (best / worst / likely)"),
          line("v-yield", "Yield to review: who will challenge this?"),
          line("v-decision", "Final decision and date to revisit"),
        ],
      },
      {
        id: "bias-spotting",
        title: "Bias spotting exercise",
        instructions:
          "Kahneman identifies common biases that feel like intuition. Spot them in a recent team decision.",
        fields: [
          long("bs-situation", "Recent decision or meeting"),
          {
            id: "bs-biases",
            label: "Biases that may have been present",
            type: "checkbox",
            options: [
              "Confirmation: we sought evidence that matched our view",
              "Anchoring: first number or idea stuck too hard",
              "Availability: recent vivid example overweighted",
              "Sunk cost: past investment drove the call",
              "Groupthink: dissent was quiet or absent",
              "Halo: one trait colored the whole judgment",
            ],
          },
          line("bs-counter", "One question that would have surfaced the bias"),
        ],
      },
      {
        id: "decision-journal",
        title: "Decision journal template",
        instructions:
          "Record decisions to build a feedback loop. Review monthly to see patterns in your judgment.",
        fields: [
          short("dj-date", "Date"),
          line("dj-decision", "Decision made"),
          line("dj-context", "Context and stakes"),
          line("dj-alternatives", "Alternatives considered"),
          line("dj-reasoning", "Reasoning at the time"),
          line("dj-confidence", "Confidence level (1-10)"),
          line("dj-revisit", "Date to revisit outcome"),
          line("dj-outcome", "Outcome (fill in later)"),
        ],
      },
      {
        id: "second-opinion",
        title: "Second opinion worksheet",
        instructions:
          "Before a high-stakes call, structure how you invite challenge. Yield is the last step of VERIFY for a reason.",
        fields: [
          line("so-decision", "Decision pending"),
          line("so-person", "Who will play devil's advocate"),
          line("so-question", "Exact question you will ask them"),
          line("so-mind-change", "What evidence would change your mind"),
          line("so-response", "Space for their response (after conversation)"),
        ],
      },
      {
        id: "intellectual-standards-rubric",
        title: "Paul and Elder intellectual standards rubric",
        instructions:
          "Score a recent memo, recommendation, or presentation 1 (weak) to 5 (strong) on each standard.",
        fields: [
          short("ier-topic", "Document or recommendation reviewed"),
          line("ier-clarity", "Clarity score (1-5) and one fix"),
          line("ier-accuracy", "Accuracy score (1-5) and one fix"),
          line("ier-logic", "Logic score (1-5) and one fix"),
          line("ier-fairness", "Fairness score (1-5) and one fix"),
          long("ier-revised", "Revised recommendation after rubric review"),
        ],
      },
      {
        id: "ai-first-answer",
        title: "Beyond the AI first answer",
        instructions:
          "When everyone has the same AI output, critical thinking is the differentiator. Stress-test one AI-generated recommendation.",
        fields: [
          line("ai-rec", "AI recommendation summary"),
          line("ai-verify", "Facts to verify independently"),
          line("ai-missing", "Context AI likely missed"),
          line("ai-better", "Your improved recommendation"),
        ],
      },
      {
        id: "premortem",
        title: "Premortem exercise",
        instructions:
          "Kahneman and Klein recommend premortems: assume the decision failed. Work backward to find risks.",
        fields: [
          line("pm-decision", "Decision or plan"),
          line("pm-fail", "Imagine it failed badly. Why?"),
          line("pm-prevent", "Top two preventable causes"),
          line("pm-action", "Actions to take now"),
        ],
      },
    ],
    worksheets: [
      {
        id: "quick-verify",
        title: "Quick VERIFY card",
        description: "For decisions under time pressure. Two minutes minimum.",
        fields: [
          line("qv-question", "Question"),
          line("qv-assume", "Top assumption"),
          line("qv-alt", "One alternative"),
          line("qv-challenger", "Who challenges?"),
        ],
      },
    ],
    actionPlan: {
      title: "21-day critical thinking plan",
      duration: "21 days · one habit per day",
      instructions:
        "Slow thinking is a muscle. Daily reps matter more than one big workshop.",
      days: [
        { day: 1, focus: "Assess", tasks: ["Complete self-assessment", "Start decision journal entry 1"] },
        { day: 2, focus: "VERIFY", tasks: ["Complete VERIFY practice sheet on a real decision"] },
        { day: 3, focus: "Bias", tasks: ["Complete bias spotting exercise", "Journal entry 2"] },
        { day: 4, focus: "Standards", tasks: ["Run intellectual standards rubric on one email or slide"] },
        { day: 5, focus: "Second opinion", tasks: ["Complete second opinion worksheet", "Have the conversation"] },
        { day: 6, focus: "AI check", tasks: ["Complete beyond the AI first answer exercise"] },
        { day: 7, focus: "Review", tasks: ["Read journal entries 1-2", "Note one pattern"], reflection: "Where does your thinking rush?" },
        { day: 8, focus: "Premortem", tasks: ["Run premortem on upcoming project", "Journal entry 3"] },
        { day: 9, focus: "Assumptions", tasks: ["List ten assumptions in a current project", "Validate top three"] },
        { day: 10, focus: "Dissent", tasks: ["Ask one person to disagree with you in a meeting", "Journal entry 4"] },
        { day: 11, focus: "Quick VERIFY", tasks: ["Use quick VERIFY card three times today"] },
        { day: 12, focus: "Evidence", tasks: ["Find one counter-evidence source for your main project"] },
        { day: 13, focus: "Logic", tasks: ["Check one argument for logic gaps using Paul and Elder rubric"] },
        { day: 14, focus: "Midpoint", tasks: ["Re-take self-assessment", "Compare to day 1"], reflection: "What improved?" },
        { day: 15, focus: "Team", tasks: ["Introduce VERIFY in one team discussion"] },
        { day: 16, focus: "Journal", tasks: ["Entries 5 and 6 on recent decisions"] },
        { day: 17, focus: "Premortem", tasks: ["Team premortem on one shared plan"] },
        { day: 18, focus: "Fairness", tasks: ["Identify vested interests in a pending decision"] },
        { day: 19, focus: "Revisit", tasks: ["Review outcomes for journal entries 1-3"] },
        { day: 20, focus: "Teach", tasks: ["Explain VERIFY to a colleague", "Give them a quick VERIFY card"] },
        { day: 21, focus: "Commit", tasks: ["Set monthly decision journal review", "Pick one standard to always check"], reflection: "What decision will you revisit next month?" },
      ],
    },
    sources: [
      { citation: "Daniel Kahneman, Thinking, Fast and Slow (Farrar, Straus and Giroux, 2011)" },
      { citation: "Gary Klein and Daniel Kahneman, premortem research, Harvard Business Review" },
      { citation: "Richard Paul and Linda Elder, Critical Thinking: Tools for Taking Charge of Your Professional and Personal Life (FT Press, 2013)" },
      { citation: "Foundation for Critical Thinking, intellectual standards framework" },
    ],
  },
  {
    slug: "emerging-leaders-workbook",
    title: "Emerging Leaders Workbook",
    description:
      "Your first ninety days as a leader. Watkins transition map, STARS situation diagnosis, early wins planner, stakeholder conversation scripts, and 30-60-90 day plan template.",
    capability: "Emerging Leaders",
    priceUsd: 99,
    pageCount: 25,
    exerciseCount: 7,
    relatedGuideSlug: "emerging-leaders-first-ninety-days",
    intro: {
      paragraphs: [
        "Michael Watkins found that transitions are periods of acute vulnerability and opportunity. How you enter a new leadership role shapes whether you earn trust fast or spend months recovering from early missteps.",
        "Gallup research shows that managers account for up to 70 percent of variance in team engagement. The Center for Creative Leadership emphasizes that emerging leaders need support, not sink-or-swim expectations.",
        "This workbook is for new managers, first-time team leads, and anyone stepping into expanded responsibility. Complete the STARS diagnosis before you announce big changes.",
      ],
      whatYouGet: [
        "First 90 days transition map",
        "STARS situation diagnosis worksheet",
        "Early wins planner",
        "Stakeholder conversation scripts",
        "30-60-90 day plan template",
        "Gallup-inspired team engagement checklist",
        "Weekly emerging leader reflection",
      ],
    },
    selfAssessment: {
      title: "Emerging leader readiness self-assessment",
      instructions:
        "Rate each statement 1 (not yet) to 5 (strong). Be honest. This is your baseline before the transition map.",
      items: [
        { id: "el-1", statement: "I have mapped my key stakeholders in the new role.", category: "Transition" },
        { id: "el-2", statement: "I understand whether my situation needs quick wins or careful listening.", category: "Transition" },
        { id: "el-3", statement: "My team can state our top three priorities.", category: "Clarity" },
        { id: "el-4", statement: "I run meetings with clear agendas and closes.", category: "Clarity" },
        { id: "el-5", statement: "I give feedback weekly, not only at review time.", category: "People" },
        { id: "el-6", statement: "I develop others instead of doing their work.", category: "People" },
        { id: "el-7", statement: "I manage up with context, not only problems.", category: "Alignment" },
        { id: "el-8", statement: "I know what success looks like at day 90.", category: "Alignment" },
      ],
      scoringGuide:
        "Transition and alignment scores below 3 mean start with the STARS diagnosis and stakeholder scripts before pursuing early wins. Watkins warns that the wrong strategy in the wrong situation accelerates failure.",
    },
    frameworks: [
      {
        title: "STARS model (Watkins)",
        description:
          "Diagnose your situation before you act. From The First 90 Days.",
        items: [
          "Startup: build from scratch. Move fast, set culture early.",
          "Turnaround: fix crisis. Decisive action, clear priorities.",
          "Accelerated growth: scale fast. Build systems before chaos wins.",
          "Realignment: change resistant organization. Build coalition before big moves.",
          "Sustaining success: preserve and extend. Respect what works, innovate selectively.",
        ],
      },
      {
        title: "First 90 days transition map",
        description: "Watkins' core phases for any leadership transition.",
        items: [
          "Days 1-30: Learn, listen, map stakeholders, secure early wins.",
          "Days 31-60: Publish priorities, align team, fix key processes.",
          "Days 61-90: Establish rhythms, develop people, measure outcomes.",
          "Day 90: Answer: Does the team know our priorities? Do problems come early? Did we ship something that mattered?",
        ],
      },
    ],
    exercises: [
      {
        id: "stars-diagnosis",
        title: "STARS situation diagnosis",
        instructions:
          "Which situation best describes your new role? Your strategy depends on the answer.",
        fields: [
          {
            id: "stars-type",
            label: "Primary situation type",
            type: "checkbox",
            options: [
              "Startup",
              "Turnaround",
              "Accelerated growth",
              "Realignment",
              "Sustaining success",
            ],
          },
          long("stars-evidence", "Evidence that supports this diagnosis"),
          line("stars-implication", "What this means for your first 30 days (listen vs act)"),
          line("stars-risk", "Biggest risk if you choose the wrong approach"),
        ],
      },
      {
        id: "transition-map",
        title: "First 90 days transition map",
        instructions:
          "Plot your transition across three phases. Be specific about learning goals and wins.",
        fields: [
          long("tm-30", "Days 1-30: learning goals, stakeholders, one early win"),
          long("tm-60", "Days 31-60: priorities to publish, processes to fix"),
          long("tm-90", "Days 61-90: rhythms to establish, people to develop"),
          line("tm-success", "Day 90 success statement in one sentence"),
        ],
      },
      {
        id: "early-wins",
        title: "Early wins planner",
        instructions:
          "Watkins defines early wins as visible progress that builds credibility without boiling the ocean. Pick one win for your first 30 days.",
        fields: [
          line("ew-win", "Early win (specific, visible, achievable in 30 days)"),
          line("ew-why", "Why this win matters to stakeholders"),
          line("ew-team", "Who on the team owns what"),
          line("ew-blockers", "Blockers and how you will remove them"),
          line("ew-measure", "How you will know it worked"),
        ],
      },
      {
        id: "stakeholder-scripts",
        title: "Stakeholder conversation scripts",
        instructions:
          "Prepare for three essential conversations: your boss, your team, and one key cross-functional partner.",
        fields: [
          long("sc-boss", "Boss conversation: questions to ask, alignment to confirm"),
          long("sc-team", "Team conversation: what I will say in first team meeting"),
          long("sc-partner", "Cross-functional partner: what I need and what I offer"),
        ],
      },
      {
        id: "thirty-sixty-ninety",
        title: "30-60-90 day plan template",
        instructions:
          "Turn your transition map into a shareable plan. Share with your manager by day 14.",
        fields: [
          long("369-30", "Days 1-30: objectives, actions, metrics"),
          long("369-60", "Days 31-60: objectives, actions, metrics"),
          long("369-90", "Days 61-90: objectives, actions, metrics"),
          line("369-review", "Scheduled review dates with manager"),
        ],
      },
      {
        id: "team-engagement",
        title: "Team engagement checklist",
        instructions:
          "Gallup finds that manager behavior drives engagement. Check what you have done in your first 30 days.",
        fields: [
          {
            id: "te-items",
            label: "Engagement behaviors",
            type: "checkbox",
            options: [
              "One-on-ones scheduled with every direct report",
              "Clear expectations set for each role",
              "Recognition given in the last two weeks",
              "Development conversation held with each person",
              "Team priorities posted where everyone sees them",
              "Feedback given within 48 hours of important work",
            ],
          },
          line("te-gap", "Biggest engagement gap to close this month"),
        ],
      },
      {
        id: "ccl-support",
        title: "Support you need worksheet",
        instructions:
          "Center for Creative Leadership research shows emerging leaders fail when support is assumed, not requested. Name what you need.",
        fields: [
          line("sup-manager", "What I need from my manager"),
          line("sup-peer", "What I need from a peer mentor"),
          line("sup-team", "What my team needs from me"),
          line("sup-ask", "Specific ask I will make this week"),
        ],
      },
    ],
    worksheets: [
      {
        id: "weekly-reflection",
        title: "Weekly emerging leader reflection",
        description: "Complete every Friday during your first 90 days.",
        fields: [
          line("wr-learned", "What I learned about the organization this week"),
          line("wr-win", "Win shipped or progress made"),
          line("wr-people", "One person I invested in"),
          line("wr-adjust", "One adjustment for next week"),
        ],
      },
    ],
    actionPlan: {
      title: "First 90 days action plan",
      duration: "90 days · phase-based",
      instructions:
        "Follow Watkins' sequence: learn before you restructure, win before you announce transformation.",
      days: [
        { day: "Days 1-7", focus: "Listen", tasks: ["Complete STARS diagnosis", "Schedule stakeholder conversations", "Hold first team listening session"] },
        { day: "Days 8-14", focus: "Map", tasks: ["Complete transition map", "Draft 30-60-90 plan", "Share plan with manager"] },
        { day: "Days 15-30", focus: "Early win", tasks: ["Execute early wins planner", "Complete team engagement checklist", "Weekly reflection 1-4"] },
        { day: "Days 31-45", focus: "Priorities", tasks: ["Publish three team priorities with owners", "Fix one broken process", "Run meetings with agenda and close"] },
        { day: "Days 46-60", focus: "Align", tasks: ["Midpoint review with manager", "Adjust 60-90 plan based on feedback", "Request support using CCL worksheet"] },
        { day: "Days 61-75", focus: "Develop", tasks: ["Hold development conversation with each report", "Delegate one task you used to own", "Weekly reflection 9-11"] },
        { day: "Days 76-90", focus: "Measure", tasks: ["Answer Watkins' day 90 questions", "Review engagement checklist again", "Document lessons for next transition"] },
      ],
    },
    sources: [
      { citation: "Michael D. Watkins, The First 90 Days: Critical Success Strategies for New Leaders at All Levels (Harvard Business Review Press, 2013)" },
      { citation: "Gallup, State of the Global Workplace and manager development research" },
      { citation: "Center for Creative Leadership, emerging leader support research (2021)" },
    ],
  },
];

export function getWorkbookBySlug(slug: string): Workbook | undefined {
  return workbooks.find((workbook) => workbook.slug === slug);
}

export function getAllWorkbookSlugs(): string[] {
  return workbooks.map((workbook) => workbook.slug);
}

export function getWorkbooksByCapability(
  capability: WorkbookCapability,
): Workbook[] {
  return workbooks.filter((workbook) => workbook.capability === capability);
}

export { capabilityOrder };
