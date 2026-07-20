export type GuideCapability =
  | "Storytelling"
  | "Leadership"
  | "Executive Presence"
  | "Leadership through AI"
  | "Critical Thinking"
  | "Emerging Leaders";

export type GuideSection =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "list"; items: string[] }
  | { type: "blockquote"; text: string; attribution: string };

export type Guide = {
  slug: string;
  title: string;
  description: string;
  capability: GuideCapability;
  publishedAt: string;
  readingTimeMinutes: number;
  sections: GuideSection[];
};

export const guides: Guide[] = [
  {
    slug: "storytelling-that-gets-you-remembered",
    title: "Storytelling That Gets You Remembered",
    description:
      "A practical framework for turning your experiences into stories that stick in interviews, meetings, and introductions. Built for professionals at any career stage who need substance, not scripts.",
    capability: "Storytelling",
    publishedAt: "2026-07-19",
    readingTimeMinutes: 12,
    sections: [
      {
        type: "paragraph",
        text: "Most people treat storytelling like a gift you are born with. The research says otherwise. Chip and Dan Heath, who studied why some ideas stick while others fade, found that stories are not decoration. They are how humans encode meaning, emotion, and judgment in a form other people can actually remember.",
      },
      {
        type: "paragraph",
        text: "That matters more now, not less. AI can generate a polished answer in seconds. What it cannot generate is your specific experience, the tradeoff you made under pressure, or the reason you care about the work. Storytelling is how you show those things without sounding rehearsed. This guide translates decades of narrative research into a framework you can use in your next interview, meeting, or introduction.",
      },
      {
        type: "heading",
        level: 2,
        text: "What the research shows",
      },
      {
        type: "paragraph",
        text: "In the classroom experiment described in Made to Stick, Chip Heath asked Stanford students to deliver one-minute speeches on crime policy. The average speech included 2.5 statistics. Only one student in ten told a story. Ten minutes later, audiences remembered almost nothing from the data-heavy talks. Only 5% recalled any individual statistic. But 63% remembered the stories.",
      },
      {
        type: "blockquote",
        text: "When students are asked to recall the speeches, 63 percent remember the stories. Only 5 percent remember any individual statistic.",
        attribution: "Chip Heath and Dan Heath, Made to Stick (2007)",
      },
      {
        type: "paragraph",
        text: "The Heaths call this the SUCCESs framework: Simple, Unexpected, Concrete, Credible, Emotional, Stories. You do not need every element in a two-minute answer. You do need a concrete story with emotional stakes when you want people to remember you, not just agree with you.",
      },
      {
        type: "paragraph",
        text: "Nancy Duarte, whose Resonate research analyzed history's most persuasive speeches, adds a second insight: in professional settings, you are not the hero of the story. Your listener is. Your job is to be the mentor who helps them see themselves in the outcome you are describing.",
      },
      {
        type: "blockquote",
        text: "You are not the hero who will save the audience; the audience is your hero.",
        attribution: "Nancy Duarte, Resonate (2010)",
      },
      {
        type: "paragraph",
        text: "Stanford Graduate School of Business featured Duarte's work on audience-centered communication for a reason. When your story connects to what the listener needs to decide, adopt, or believe, it stops being self-promotion and starts being useful.",
      },
      {
        type: "heading",
        level: 2,
        text: "Why storytelling matters when AI can write the words",
      },
      {
        type: "paragraph",
        text: "Generative AI raises the floor on fluency. Everyone in the room can sound articulate. The scarce skill is specificity: evidence that you have done real work, judgment under ambiguity, and the ability to make someone else care about an outcome.",
      },
      {
        type: "paragraph",
        text: "In early career settings, stories do three jobs at once. They prove you have handled real situations. They show how you think when the answer is not obvious. They give hiring managers and teammates something concrete to repeat after you leave the room. A well-structured two-minute story often outperforms a ten-slide deck because people remember people, not bullet points.",
      },
      {
        type: "heading",
        level: 2,
        text: "The CLEAR framework for professional stories",
      },
      {
        type: "paragraph",
        text: "CLEAR combines narrative research with practical constraints: keep the whole story under two minutes unless someone asks you to go deeper. Each letter is a beat, not a paragraph.",
      },
      {
        type: "list",
        items: [
          "Context: Set the scene in one sentence. Where were you, and what was at stake?",
          "Line: Name the tension or problem. What was not working, missing, or unclear?",
          "Effort: Describe what you did. Focus on your choices, not a team credit list.",
          "Aftermath: Share the result. Use a number, a quote, or a visible change when you can.",
          "Relevance: Connect the story to the room you are in now. Why does this matter here?",
        ],
      },
      {
        type: "paragraph",
        text: "Pair CLEAR with Duarte's audience-as-hero principle on the relevance line. Do not end with \"and that is why I am great.\" End with \"and that is the same approach I would take here: find the friction, fix the first touchpoint, measure whether it worked.\"",
      },
      {
        type: "heading",
        level: 3,
        text: "Example: A project update in a team meeting",
      },
      {
        type: "paragraph",
        text: "Context: \"Last month our onboarding docs were confusing new hires.\" Line: \"People were asking the same three questions in Slack every week.\" Effort: \"I interviewed five new teammates, rewrote the top ten pages, and added a one-page start-here guide.\" Aftermath: \"Support tickets dropped by half in two weeks.\" Relevance: \"That is the same approach I would take here: find the friction, fix the first touchpoint, measure whether it worked.\"",
      },
      {
        type: "heading",
        level: 2,
        text: "What works in practice",
      },
      {
        type: "heading",
        level: 3,
        text: "Interviews",
      },
      {
        type: "paragraph",
        text: "Prepare five stories before any interview: a time you solved a problem, a time you failed and recovered, a time you influenced someone without authority, a time you learned something fast, and a time you delivered under pressure. Map each one to CLEAR and practice out loud until you can hit every beat in under two minutes.",
      },
      {
        type: "paragraph",
        text: "When you hear \"Tell me about a time when...,\" do not invent a new story. Pick from your five and adjust the relevance line for the role you want.",
      },
      {
        type: "heading",
        level: 3,
        text: "Meetings",
      },
      {
        type: "paragraph",
        text: "Open status updates with a one-sentence context and a one-sentence result before you explain the steps. \"We were losing signups after step two. We simplified the form and recovered eighteen percent in a week. Here is what we changed.\" That structure respects people's time and makes your contribution easy to repeat.",
      },
      {
        type: "heading",
        level: 3,
        text: "Introductions",
      },
      {
        type: "paragraph",
        text: "Replace job titles with a short story when you meet someone new. Instead of \"I am an analyst,\" try \"I help teams turn messy data into decisions people actually use. Last month that meant rebuilding a report so our ops lead could spot delays before customers called.\" You give people something to remember and something to ask about.",
      },
      {
        type: "heading",
        level: 2,
        text: "Common mistakes the research warns against",
      },
      {
        type: "list",
        items: [
          "Leading with chronology instead of stakes. The Heaths found that concrete tension beats timeline.",
          "Hiding behind \"we\" when you need to show your specific contribution.",
          "Adding every detail instead of the one detail that makes the scene real.",
          "Making yourself the hero instead of connecting the story to the listener's decision.",
          "Sounding rehearsed. Practice the beats, not a word-for-word script.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Your weekly practice checklist",
      },
      {
        type: "list",
        items: [
          "Every Friday, write down one moment from the week that taught you something.",
          "Run it through CLEAR in five sentences.",
          "Say it out loud once and time yourself (under two minutes).",
          "Build a story bank of five core narratives you can adapt to any room.",
          "Before high-stakes conversations, ask: who is the hero, and what do they need to hear?",
        ],
      },
      {
        type: "paragraph",
        text: "Storytelling is not about being entertaining. It is about being clear enough that people remember you for the right reasons. That is a professional skill, and it compounds every time you use it on purpose.",
      },
      {
        type: "paragraph",
        text: "Want more field guides like this? Join the waitlist for launch updates, early excerpts, and new practical resources on storytelling, leadership, and the capabilities AI cannot replace.",
      },
      {
        type: "heading",
        level: 2,
        text: "Sources",
      },
      {
        type: "list",
        items: [
          "Chip Heath and Dan Heath, Made to Stick: Why Some Ideas Survive and Others Die (Random House, 2007)",
          "Nancy Duarte, Resonate: Present Visual Stories That Transform Audiences (Wiley, 2010)",
          "Stanford Graduate School of Business, \"It's Not About You: Why Effective Communicators Put Others First\" (2023)",
        ],
      },
    ],
  },
  {
    slug: "lead-before-you-have-the-title",
    title: "How to Lead Before You Have the Title",
    description:
      "Practical ways to lead with clarity and influence without formal authority. For professionals at any stage who want to move work forward in any setting.",
    capability: "Leadership",
    publishedAt: "2026-07-19",
    readingTimeMinutes: 12,
    sections: [
      {
        type: "paragraph",
        text: "Leadership is often treated like a promotion you wait for. Decades of research say the opposite. James Kouzes and Barry Posner, who surveyed thousands of leaders for The Leadership Challenge, found that leadership is not a title. It is a relationship built on trust, clarity, and shared purpose.",
      },
      {
        type: "paragraph",
        text: "The professionals who advance fastest are usually leading long before their title changes. They clarify messy problems. They bring others along. They make hard calls visible instead of hiding behind group indecision. This guide translates that research into behaviors you can use this week, with or without formal authority.",
      },
      {
        type: "heading",
        level: 2,
        text: "What the research shows",
      },
      {
        type: "blockquote",
        text: "Leadership is a relationship between those who aspire to lead and those who choose to follow.",
        attribution: "James M. Kouzes and Barry Z. Posner, The Leadership Challenge (2012)",
      },
      {
        type: "paragraph",
        text: "Kouzes and Posner define leadership as \"the art of mobilizing others to want to struggle for shared aspirations.\" That definition matters because it removes the excuse that you need a team, a budget, or a corner office to start. You need clarity, follow-through, and the willingness to take responsibility for outcomes instead of tasks.",
      },
      {
        type: "blockquote",
        text: "Leadership is not about titles, positions, or work hours. It is about relationships.",
        attribution: "James M. Kouzes, The Leadership Challenge",
      },
      {
        type: "paragraph",
        text: "Liz Wiseman's Multipliers research adds a practical lens. Across 150 executives in 35 countries, Wiseman found that Diminishers got less than half of their team's available intelligence. Multipliers got nearly all of it, roughly 1.97 times more capability from the same people. The difference was not charisma. It was behavior: asking questions, creating space for others to think, and treating people as capable of figuring things out.",
      },
      {
        type: "blockquote",
        text: "Diminishers got less than half of their team's intelligence, knowledge and capabilities. Multipliers got all of it.",
        attribution: "Liz Wiseman, Multipliers (2017 revised edition)",
      },
      {
        type: "paragraph",
        text: "You do not need seniority to lead like a Multiplier. You need to stop hoarding the thinking and start pulling intelligence into the room.",
      },
      {
        type: "heading",
        level: 2,
        text: "Leadership without authority starts with clarity",
      },
      {
        type: "paragraph",
        text: "Most groups stall because no one names the real problem. Leading without a title often means being the person who says, \"Here is what I think we are actually trying to solve.\" That single move creates direction.",
      },
      {
        type: "paragraph",
        text: "Clarity does not mean having all the answers. It means separating facts from assumptions, naming what is blocked, and proposing a next step small enough to start today. Kouzes and Posner's research consistently shows that people follow clarity more readily than confidence alone.",
      },
      {
        type: "heading",
        level: 2,
        text: "Five behaviors that signal leadership early",
      },
      {
        type: "heading",
        level: 3,
        text: "1. Make the invisible work visible",
      },
      {
        type: "paragraph",
        text: "Early in your career, much of your impact happens in the background: research, coordination, follow-ups, quality checks. Leadership means summarizing that work so others can act on it. Send short updates with decisions needed, not long activity logs.",
      },
      {
        type: "paragraph",
        text: "Example: \"I reviewed the last three launch retros. Two delays came from missing sign-offs. I propose we add a forty-eight-hour approval window starting next sprint. Need a yes or no by Thursday.\"",
      },
      {
        type: "heading",
        level: 3,
        text: "2. Own the handoff",
      },
      {
        type: "paragraph",
        text: "Leaders reduce friction between people. When your part is done, do not drop it. Confirm who owns the next step, what they need from you, and when you will check back. This is one of the fastest ways to earn trust across teams.",
      },
      {
        type: "heading",
        level: 3,
        text: "3. Disagree with respect and propose an alternative",
      },
      {
        type: "paragraph",
        text: "Saying \"I disagree\" without a path forward creates noise. Saying \"I see it differently because X. Here is what I would try instead\" creates progress. You do not need seniority to offer a better option. You need evidence and a recommendation.",
      },
      {
        type: "heading",
        level: 3,
        text: "4. Protect the group's time",
      },
      {
        type: "paragraph",
        text: "Volunteer to write the agenda. Cut topics that need a doc, not a meeting. End with named owners and dates. People notice who makes meetings shorter and more useful. That is leadership in practice.",
      },
      {
        type: "heading",
        level: 3,
        text: "5. Follow through in public",
      },
      {
        type: "paragraph",
        text: "Do what you said you would do, then close the loop. \"You asked for competitive notes by Friday. They are in the shared doc. Open question: do we want pricing or positioning first?\" Reliability builds influence faster than charisma.",
      },
      {
        type: "heading",
        level: 2,
        text: "How to influence when you are not the decision maker",
      },
      {
        type: "paragraph",
        text: "Influence without authority is a sequence, not a personality type. Use this flow when you need someone with power to act on your idea.",
      },
      {
        type: "list",
        items: [
          "Understand their priority first. What does this person need to look good this quarter?",
          "Frame your idea in their language. Connect your proposal to their goal, not your preference.",
          "Bring proof, not opinion. One example, one metric, or one quote from a customer beats a long pitch.",
          "Offer a low-risk trial. Suggest a small test with a clear review date.",
          "Make yes easy. Draft the message, outline, or checklist they would need to approve.",
        ],
      },
      {
        type: "paragraph",
        text: "You are not manipulating. You are doing the thinking that makes good ideas easy to say yes to.",
      },
      {
        type: "heading",
        level: 2,
        text: "Leading up without sounding entitled",
      },
      {
        type: "paragraph",
        text: "Leading up means helping your manager and skip-level leaders succeed. It does not mean bypassing your manager or claiming credit for their strategy.",
      },
      {
        type: "paragraph",
        text: "Good leading up sounds like: \"I noticed we keep revisiting the same blocker in standup. I drafted three options with tradeoffs. Happy to walk through them if useful.\" Bad leading up sounds like: \"Leadership does not know what they are doing.\" One builds trust. The other ends careers quietly.",
      },
      {
        type: "heading",
        level: 2,
        text: "What to avoid when you are building influence",
      },
      {
        type: "list",
        items: [
          "Performing leadership on social media while dropping basics at work.",
          "Taking ownership of every problem instead of the ones where you can actually move the outcome.",
          "Confusing urgency with importance. Not every fire needs your name on the hose.",
          "Waiting for permission on reversible decisions. Move on small calls. Ask on big ones.",
          "Hoarding information to stay essential. Multipliers share context so the team gets stronger.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Your weekly leadership checklist",
      },
      {
        type: "list",
        items: [
          "Pick one recurring problem on your team.",
          "Write a one-page brief: what is happening, why it matters, two options, and your recommendation.",
          "Share it with the person who can act.",
          "Ask one question that invites others' thinking instead of presenting a finished answer.",
          "Close the loop publicly on one commitment you made last week.",
        ],
      },
      {
        type: "paragraph",
        text: "Titles come and go. The habit of creating clarity, earning trust, and moving work forward is what people remember. That is how you lead before the title catches up.",
      },
      {
        type: "paragraph",
        text: "Want more field guides like this? Join the waitlist for launch updates, early excerpts, and new practical resources on leadership, influence, and the capabilities AI cannot replace.",
      },
      {
        type: "heading",
        level: 2,
        text: "Sources",
      },
      {
        type: "list",
        items: [
          "James M. Kouzes and Barry Z. Posner, The Leadership Challenge, 6th edition (Wiley, 2017)",
          "Liz Wiseman, Multipliers: How the Best Leaders Make Everyone Smarter, revised edition (Harper Business, 2017)",
          "Harvard Business Review, research on informal leadership and influence without authority",
        ],
      },
    ],
  },
  {
    slug: "calm-confidence-under-pressure",
    title: "Executive Presence Under Pressure",
    description:
      "How to project presence in high-stakes moments through preparation, body language, voice, and mindset. For professionals who need to be heard when the room gets tense.",
    capability: "Executive Presence",
    publishedAt: "2026-07-19",
    readingTimeMinutes: 12,
    sections: [
      {
        type: "paragraph",
        text: "Pressure has a way of shrinking people. Voices get faster. Posture folds in. Answers turn into rambling. The irony is that the moment you most need to be heard is often the moment you feel least ready.",
      },
      {
        type: "paragraph",
        text: "Executive presence is not a mystery trait reserved for executives. Sylvia Ann Hewlett's research at the Center for Talent Innovation (now Coqual) found that presence accounts for 26 percent of what senior leaders say it takes to get promoted. It is learnable, measurable, and especially valuable when your experience on paper is still catching up to your capability.",
      },
      {
        type: "heading",
        level: 2,
        text: "What the research shows",
      },
      {
        type: "blockquote",
        text: "It is executive presence, and no man or woman attains a top job, lands an extraordinary deal, or develops a significant following without this heady combination of confidence, poise, and authenticity that convinces the rest of us we are in the presence of someone who is the real deal.",
        attribution: "Sylvia Ann Hewlett, Executive Presence (2014)",
      },
      {
        type: "paragraph",
        text: "Hewlett's nationwide survey and focus groups identified three universal dimensions of executive presence: gravitas (how you act), communication (how you speak), and appearance (how you look). Senior executives rated gravitas as the most important by far, cited by 67 percent of respondents compared with 28 percent for communication and 5 percent for appearance.",
      },
      {
        type: "paragraph",
        text: "The top gravitas signal in her research was grace under fire: keeping your cool when the room turns tense. That is not pretending you are unfazed. It is having enough preparation and self-awareness that your presence matches your substance.",
      },
      {
        type: "paragraph",
        text: "Coqual's research also found that performance and hard work alone do not guarantee advancement. Leaders who lack presence often stall, while those who project steadiness earn the trust that unlocks bigger rooms. The good news: presence is built through repeatable habits, not innate charisma.",
      },
      {
        type: "heading",
        level: 2,
        text: "What calm confidence actually looks like",
      },
      {
        type: "paragraph",
        text: "Calm confidence is readable. People can tell when someone is grounded: they pause before answering, they speak at a pace others can follow, and they do not rush to fill silence. You do not need to dominate the room. You need to be the person whose words land.",
      },
      {
        type: "paragraph",
        text: "That presence is especially valuable early in your career. When experience is thin on paper, how you show up in a tense meeting or final interview round often decides whether people trust you with real responsibility.",
      },
      {
        type: "heading",
        level: 2,
        text: "The three-pillar framework: gravitas, communication, appearance",
      },
      {
        type: "paragraph",
        text: "Use Hewlett's framework as a pre-flight checklist before high-stakes moments. Gravitas: Are you centered and decisive under pressure? Communication: Are you clear, concise, and tuned to the room? Appearance: Do you look prepared and appropriate for the context (without obsessing over perfection)?",
      },
      {
        type: "heading",
        level: 2,
        text: "What works in practice: before the moment",
      },
      {
        type: "heading",
        level: 3,
        text: "Posture and grounding",
      },
      {
        type: "paragraph",
        text: "Before you speak, set your feet shoulder-width apart or sit with both feet flat. Relax your shoulders down and back. Unclench your jaw. These small physical resets signal safety to your nervous system and change how others read you before you say a word.",
      },
      {
        type: "paragraph",
        text: "If you are on video, raise your camera to eye level and leave a few inches of space above your head. Fill the frame without leaning in. Stillness on camera reads as confidence. Constant movement reads as anxiety.",
      },
      {
        type: "heading",
        level: 3,
        text: "Breath as a reset button",
      },
      {
        type: "paragraph",
        text: "Use a four-count breath before high-stakes moments: inhale for four, hold for four, exhale for four, hold for four. Do it once in the hallway, once before you unmute, once before you walk on stage. It is discreet, fast, and more effective than telling yourself to calm down.",
      },
      {
        type: "heading",
        level: 2,
        text: "What works in practice: during the moment",
      },
      {
        type: "paragraph",
        text: "Nerves speed everything up. Your job is to slow the signal so people can receive it.",
      },
      {
        type: "list",
        items: [
          "Start your first sentence slower than feels natural. The opening pace sets the room.",
          "End statements with a downward inflection. Upward inflection turns statements into questions.",
          "Pause after key points. Silence gives weight to what you just said.",
          "Keep sentences short under pressure. One idea per sentence reduces rambling.",
          "Lower your volume slightly instead of raising it. Quiet steadiness holds attention.",
        ],
      },
      {
        type: "paragraph",
        text: "Record yourself answering one hard question for sixty seconds. Most people discover they speak thirty percent faster than they think. Practice until you sound like someone who expects to be listened to.",
      },
      {
        type: "heading",
        level: 2,
        text: "Prepare for the moment, not just the content",
      },
      {
        type: "paragraph",
        text: "Content prep alone is not enough. You also need process prep: how you will enter, how you will handle a tough question, and how you will close.",
      },
      {
        type: "heading",
        level: 3,
        text: "The three-thing rule",
      },
      {
        type: "paragraph",
        text: "Before any high-stakes conversation, write down three things you must land. Not thirty. Three. Example for a panel interview: a story that shows judgment, one question that proves you researched the company, and a clear statement of what you want to learn in the role. If nerves hit, return to those three anchors.",
      },
      {
        type: "heading",
        level: 3,
        text: "Script your first ten seconds",
      },
      {
        type: "paragraph",
        text: "The hardest part is starting. Write and rehearse your opening line exactly. \"Thanks for making time. I will keep this brief. Here is the one thing I want you to walk away with.\" A strong opening buys you calm for everything that follows.",
      },
      {
        type: "heading",
        level: 3,
        text: "Plan for the pushback",
      },
      {
        type: "paragraph",
        text: "Decide in advance how you will handle a challenge. When someone pushes back, use: pause, acknowledge, answer. \"That is a fair push. The reason I see it this way is...\" You do not need to win the exchange. You need to stay composed inside it. That is gravitas in action.",
      },
      {
        type: "heading",
        level: 2,
        text: "Mindset shifts that hold up under pressure",
      },
      {
        type: "paragraph",
        text: "Confidence grows when your internal story matches the room you are in. Replace \"They are judging me\" with \"I am here to be useful.\" Replace \"I have to be perfect\" with \"I have to be clear.\" Replace \"I do not belong here\" with \"I prepared for this specific moment.\"",
      },
      {
        type: "paragraph",
        text: "Nerves are energy. The goal is not to eliminate them. The goal is to channel them into focus. Athletes call this arousal control. Professionals can use the same idea: a little edge keeps you sharp. Too much edge makes you sloppy.",
      },
      {
        type: "heading",
        level: 2,
        text: "Your executive presence checklist",
      },
      {
        type: "list",
        items: [
          "Before: Run the gravitas, communication, appearance check. Write your three must-land points.",
          "During: Start slow. Pause after key statements. Use short sentences.",
          "After: Debrief within an hour. What landed? Where did you rush? What surprised you?",
          "Weekly: Record one sixty-second answer to a hard question and review it.",
          "Monthly: Ask one trusted colleague for specific feedback on how you show up under pressure.",
        ],
      },
      {
        type: "paragraph",
        text: "Calm confidence is cumulative. Each prepared entrance, each steady answer, each clean close teaches your body that you can handle pressure without shrinking. That is executive presence in the making, and it is available long before the title says so.",
      },
      {
        type: "paragraph",
        text: "Want more field guides like this? Join the waitlist for launch updates, early excerpts, and new practical resources on executive presence and the capabilities AI cannot replace.",
      },
      {
        type: "heading",
        level: 2,
        text: "Sources",
      },
      {
        type: "list",
        items: [
          "Sylvia Ann Hewlett, Executive Presence: The Missing Link Between Merit and Success (HarperBusiness, 2014)",
          "Center for Talent Innovation (Coqual), Executive Presence: Key Findings research report (2012)",
          "Coqual, Cracking the Code: Unlocking the Potential of Multicultural Professionals (2020)",
        ],
      },
    ],
  },
  {
    slug: "lead-with-ai-not-behind-it",
    title: "How to Lead with AI Without Falling Behind It",
    description:
      "A practical guide to using AI as a leadership tool without outsourcing your judgment, voice, or credibility. For managers and individual contributors at every career stage.",
    capability: "Leadership through AI",
    publishedAt: "2026-07-20",
    readingTimeMinutes: 12,
    sections: [
      {
        type: "paragraph",
        text: "AI is now part of how work gets done. McKinsey's 2024 global survey found that 65 percent of organizations were regularly using generative AI, nearly double the rate from ten months earlier. The mistake is treating it as a shortcut that replaces thinking. The opportunity is treating it as leverage that amplifies the judgment, clarity, and leadership you already bring.",
      },
      {
        type: "paragraph",
        text: "Ethan Mollick, who researches human-AI collaboration at the Wharton School, puts it plainly: you cannot know what these tools are good or bad at until you use them in your own work. Leadership through AI means staying accountable for outcomes while the tool handles repeatable tasks. You own the frame, the recommendation, and the conversation with stakeholders.",
      },
      {
        type: "heading",
        level: 2,
        text: "What the research shows",
      },
      {
        type: "blockquote",
        text: "My argument has always been to use it for everything, and that is how you figure out what it is good or bad at.",
        attribution: "Ethan Mollick, Co-Intelligence (2024)",
      },
      {
        type: "paragraph",
        text: "Mollick's research with Boston Consulting Group found that consultants using AI on familiar tasks moved faster, but only when they stayed in the loop: evaluating outputs, correcting course, and knowing when to take work back. AI expanded options. Humans still owned the recommendation.",
      },
      {
        type: "blockquote",
        text: "As managers and leaders, you get to make these choices about how to deploy these systems to increase human flourishing.",
        attribution: "Ethan Mollick, Big Think interview on leading with AI",
      },
      {
        type: "paragraph",
        text: "McKinsey's research on the human side of generative AI reinforces this. Organizations that set a people-centric talent strategy, where AI augments judgment rather than replacing it, gain a competitive edge as more work is affected by these tools.",
      },
      {
        type: "paragraph",
        text: "Mollick's organizational framework is simple: you need leadership (to set incentives), a lab (to experiment safely), and a crowd (everyone using the tools and sharing what works). Leaders who hide from AI lose credibility. Leaders who paste AI output without editing lose trust just as fast.",
      },
      {
        type: "heading",
        level: 2,
        text: "What leadership through AI actually means",
      },
      {
        type: "paragraph",
        text: "Leadership through AI means you stay accountable for outcomes while AI handles drafting, summarizing, researching, and structuring options. The tool assists. You decide.",
      },
      {
        type: "paragraph",
        text: "This matters at every level. Early career professionals who use AI to think more clearly stand out next to peers who paste generic answers. Job changers who use AI to translate experience into new contexts move faster. Experienced hires who sharpen analysis without dulling their voice keep the edge that got them hired.",
      },
      {
        type: "heading",
        level: 2,
        text: "Mollick's co-intelligence principles in practice",
      },
      {
        type: "list",
        items: [
          "Always invite AI to the table. Use it on tasks you know well so you can evaluate the output.",
          "Be the human in the loop. Never send what you have not edited. Verify facts, numbers, and names.",
          "Treat AI like a person (but remember it is software). Give it role, context, and constraints.",
          "Ask it to be a skeptic. \"What is wrong with this plan? What am I missing?\"",
          "Make your recommendation visible. Leaders name a point of view. Tools do not.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "What works in practice: meetings and decisions",
      },
      {
        type: "heading",
        level: 3,
        text: "Before the meeting",
      },
      {
        type: "paragraph",
        text: "Use AI to stress-test your agenda, surface likely objections, and draft three questions that move the conversation forward. Then cut anything that does not serve the decision you need. Your job is curation, not volume.",
      },
      {
        type: "heading",
        level: 3,
        text: "During the meeting",
      },
      {
        type: "paragraph",
        text: "Do not read AI output aloud. Use it to stay prepared: key facts at hand, options already mapped, tradeoffs named. When someone asks a hard question, pause and answer from what you know. If you need to follow up, say so clearly. That honesty reads as leadership.",
      },
      {
        type: "heading",
        level: 3,
        text: "After the meeting",
      },
      {
        type: "paragraph",
        text: "AI can draft recaps fast. You add what matters: decisions made, owners named, risks flagged, and the one thing that still needs a human conversation. Send the version you would sign your name to.",
      },
      {
        type: "heading",
        level: 2,
        text: "Prompts that build leadership, not dependency",
      },
      {
        type: "paragraph",
        text: "Weak prompts produce weak thinking. Strong prompts force clarity. Mollick notes that managers, teachers, and parents often prompt AI better than coders because they know how to give a person clear instructions. Try these patterns on real work this week.",
      },
      {
        type: "list",
        items: [
          "\"Here is the situation and the decision we need. Give me three options with tradeoffs and a recommendation I can defend to my team.\"",
          "\"Play the skeptic. What is wrong with this plan? What am I missing?\"",
          "\"Rewrite this for a busy executive: one paragraph, clear ask, no jargon.\"",
          "\"Compare these two paths using criteria I care about: speed, risk, cost, and team capacity.\"",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "What to avoid when leading with AI",
      },
      {
        type: "list",
        items: [
          "Hiding AI use when accuracy or authorship matters. Transparency builds trust.",
          "Letting AI flatten your voice into corporate filler. Edit until it sounds like you.",
          "Using AI to avoid hard conversations. No tool replaces showing up in the room.",
          "Chasing every new feature instead of mastering one workflow that saves real time.",
          "Assuming AI output is correct. Mollick's research shows confident wrong answers are common.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Your weekly AI leadership checklist",
      },
      {
        type: "list",
        items: [
          "Pick one recurring task you own: status updates, briefs, client emails, or team agendas.",
          "Build a personal template: input you always provide, edits you always make, final check you never skip.",
          "Run it for four weeks and track time saved versus quality maintained.",
          "Share one useful workflow with your team (that is leading, not hoarding).",
          "Once a month, ask AI to challenge your own recommendation before you send it.",
        ],
      },
      {
        type: "paragraph",
        text: "AI is not the competition. Professionals who combine tool speed with human judgment are. Leadership through AI is how you stay on the right side of that line.",
      },
      {
        type: "paragraph",
        text: "Want more field guides like this? Join the waitlist for launch updates, early excerpts, and new practical resources on leadership through AI and the capabilities that still require a human in the loop.",
      },
      {
        type: "heading",
        level: 2,
        text: "Sources",
      },
      {
        type: "list",
        items: [
          "Ethan Mollick, Co-Intelligence: Living and Working with AI (Portfolio, 2024)",
          "McKinsey Global Survey, The State of AI in Early 2024",
          "McKinsey, The Human Side of Generative AI: Creating a Path to Productivity (2023)",
        ],
      },
    ],
  },
  {
    slug: "critical-thinking-beyond-the-first-answer",
    title: "Critical Thinking When Everyone Has the Same Answer",
    description:
      "How to evaluate ideas, challenge assumptions, and make better decisions when AI makes the first draft easy for everyone. Practical tools for any role or career stage.",
    capability: "Critical Thinking",
    publishedAt: "2026-07-20",
    readingTimeMinutes: 12,
    sections: [
      {
        type: "paragraph",
        text: "When anyone can generate a plausible answer in seconds, the scarce skill is not information. It is judgment. Daniel Kahneman, whose research on decision-making won the Nobel Prize in Economics, showed that our minds take shortcuts constantly. Often we answer an easier question than the one in front of us, and we do not notice the swap.",
      },
      {
        type: "paragraph",
        text: "Critical thinking is how you decide what to trust, what to test, and what to recommend when the easy answer is already on the table. Richard Paul and Linda Elder of the Foundation for Critical Thinking define it as disciplined thinking that analyzes, assesses, and improves itself. This guide turns that research into habits you can use in meetings, emails, and project plans this week.",
      },
      {
        type: "heading",
        level: 2,
        text: "What the research shows",
      },
      {
        type: "blockquote",
        text: "This is the essence of intuitive heuristics: when faced with a difficult question, we often answer an easier one instead, usually without noticing the substitution.",
        attribution: "Daniel Kahneman, Thinking, Fast and Slow (2011)",
      },
      {
        type: "paragraph",
        text: "Kahneman's System 1 (fast, intuitive) and System 2 (slow, deliberate) framework explains why polished AI drafts feel convincing. System 1 reads fluency as truth. Critical thinking is the practice of engaging System 2 when the stakes are high: hiring, budgets, strategy, and anything that is hard to undo.",
      },
      {
        type: "blockquote",
        text: "Everyone thinks; it is our nature to do so. But much of our thinking, left to itself, is biased, distorted, partial, uninformed or down-right prejudiced.",
        attribution: "Richard Paul and Linda Elder, The Miniature Guide to Critical Thinking (2006)",
      },
      {
        type: "paragraph",
        text: "Paul and Elder's intellectual standards give you a practical audit: clarity, accuracy, precision, relevance, depth, breadth, significance, logic, and fairness. You do not need all nine in every email. You do need them before the group commits to an expensive yes.",
      },
      {
        type: "heading",
        level: 2,
        text: "Why critical thinking is a career differentiator now",
      },
      {
        type: "paragraph",
        text: "Teams drown in good-enough drafts. Slides look polished. Emails sound confident. The gap is between output that looks complete and decisions that actually hold up. The person who asks the right next question becomes indispensable fast.",
      },
      {
        type: "paragraph",
        text: "Critical thinking shows up as better recommendations, fewer rework cycles, and conversations that get to the real problem. It is valuable for early career hires proving they add more than execution, job changers translating old instincts into new contexts, and experienced professionals who need to stay sharp when the baseline keeps rising.",
      },
      {
        type: "heading",
        level: 2,
        text: "The VERIFY framework for any proposal",
      },
      {
        type: "paragraph",
        text: "Use VERIFY when you receive a plan, a deck, an AI draft, or a colleague's recommendation. It takes five minutes and prevents expensive yeses. Pair it with Paul and Elder's habit of asking: what is the purpose, what is the evidence, and what are we assuming?",
      },
      {
        type: "list",
        items: [
          "Valid sources: Where did this come from? Can you trace the facts?",
          "Evidence quality: Is this anecdote, data, or guesswork dressed up as certainty?",
          "Relevance: Does this answer the actual decision in front of us?",
          "Incentives: Who benefits if we say yes? What are they not saying?",
          "Feasibility: Do we have the time, people, and budget to do this well?",
          "Yield: If this works, what changes? If it fails, what does failure cost?",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "What works in practice: questions that upgrade any meeting",
      },
      {
        type: "paragraph",
        text: "The best critical thinkers sound curious, not combative. Kahneman's research suggests the best we can do is learn to recognize situations where mistakes are likely and try harder when the stakes are high.",
      },
      {
        type: "list",
        items: [
          "\"What would have to be true for this to work?\"",
          "\"What are we optimizing for, and what are we willing to trade off?\"",
          "\"What did we see last time we tried something similar?\"",
          "\"What is the smallest test that would tell us if this is worth scaling?\"",
          "\"If we are wrong, how will we know, and how fast?\"",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Thinking clearly with AI in the loop",
      },
      {
        type: "paragraph",
        text: "AI is useful for generating options and spotting gaps. It is weak at knowing your company's history, your customer's nuance, or your team's capacity this week. Use it to expand the option set, then apply VERIFY before you act.",
      },
      {
        type: "paragraph",
        text: "Try this workflow: ask AI for three approaches to a problem. For each one, write one sentence on why it might fail in your specific context. Pick the approach with the most manageable failure mode, or combine pieces into a fourth option AI did not propose. That last step is where your thinking shows.",
      },
      {
        type: "heading",
        level: 2,
        text: "Common traps that look like thinking",
      },
      {
        type: "list",
        items: [
          "Confusing confidence with accuracy. Kahneman showed we are often confident when we are wrong.",
          "Anchoring on the first answer because it arrived fastest.",
          "Treating consensus as proof. Groups can agree on the wrong frame.",
          "Over-researching to avoid deciding. Analysis without a deadline is avoidance.",
          "Critique without alternatives. Point out the flaw and offer a path forward.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Your daily critical thinking checklist",
      },
      {
        type: "list",
        items: [
          "Pick one claim you accepted without question today: a metric, an assumption, or an AI summary.",
          "Spend ten minutes checking it. Follow one source upstream.",
          "Run VERIFY on one proposal before your next meeting.",
          "Write one sentence on what you learned.",
          "Ask one question that tests the frame, not just the details.",
        ],
      },
      {
        type: "paragraph",
        text: "Critical thinking is not about being negative. It is about being responsible. When everyone has the same first answer, the person who thinks one layer deeper is the one people follow.",
      },
      {
        type: "paragraph",
        text: "Want more field guides like this? Join the waitlist for launch updates, early excerpts, and new practical resources on critical thinking and the capabilities AI cannot replace.",
      },
      {
        type: "heading",
        level: 2,
        text: "Sources",
      },
      {
        type: "list",
        items: [
          "Daniel Kahneman, Thinking, Fast and Slow (Farrar, Straus and Giroux, 2011)",
          "Richard Paul and Linda Elder, Critical Thinking: Tools for Taking Charge of Your Learning and Your Life (Pearson, 2021)",
          "Foundation for Critical Thinking, The Miniature Guide to Critical Thinking: Concepts and Tools (2006)",
        ],
      },
    ],
  },
  {
    slug: "emerging-leaders-first-ninety-days",
    title: "The Emerging Leader's First Ninety Days",
    description:
      "A field guide for new and newly promoted leaders who need to earn trust, set direction, and show up with substance fast. For first-time managers and rising contributors.",
    capability: "Emerging Leaders",
    publishedAt: "2026-07-20",
    readingTimeMinutes: 13,
    sections: [
      {
        type: "paragraph",
        text: "The first ninety days as an emerging leader are not about proving you belong. They are about proving others can rely on you. Michael Watkins, whose Harvard Business Review research on leadership transitions has guided thousands of new leaders, found that small differences in your early actions can have disproportionate impact because everyone is forming impressions from very little data.",
      },
      {
        type: "paragraph",
        text: "That shift from individual contributor to leader is where many talented people stumble. Not because they lack skill, but because no one taught them what to prioritize when the title changes. Gallup's research adds urgency: managers account for 70 percent of the variance in team engagement, yet many first-time managers receive little or no formal training.",
      },
      {
        type: "heading",
        level: 2,
        text: "What the research shows",
      },
      {
        type: "blockquote",
        text: "The president of the United States gets 100 days to prove himself; you get 90. The actions you take during your first few months in a new role will largely determine whether you succeed or fail.",
        attribution: "Michael D. Watkins, The First 90 Days (2003)",
      },
      {
        type: "paragraph",
        text: "Watkins surveyed more than 1,300 senior HR leaders. Nearly 90 percent said transitions into new roles are the most challenging times in a leader's professional life. About three-quarters agreed that success or failure during the first few months strongly predicts overall success in the job.",
      },
      {
        type: "blockquote",
        text: "Leadership ultimately is about influence and leverage. You are, after all, only one person. To be successful, you need to mobilize the energy of many others in your organization.",
        attribution: "Michael D. Watkins, The First 90 Days",
      },
      {
        type: "paragraph",
        text: "The Center for Creative Leadership's research on emerging leaders found that personal, structural, and cultural barriers often keep young professionals from stepping into leadership or succeeding once they do. CCL's study of more than 10,000 Gen Z and Millennial workers found that 60 percent feel leadership opportunities for young adults are inequitable. Organizations that reduce those barriers and align values retain emerging talent.",
      },
      {
        type: "paragraph",
        text: "Gallup's manager development research reinforces Watkins' timeline. Managers who receive coaching and people development training see up to 18 percent higher engagement on their teams. The first ninety days is when you set the habits that determine whether you join that group or struggle alone.",
      },
      {
        type: "heading",
        level: 2,
        text: "The job in the first ninety days",
      },
      {
        type: "paragraph",
        text: "Your real job is not to fix everything. It is to build clarity, trust, and momentum in that order. Watkins calls this reaching the break-even point: the moment when you contribute more value than the disruption of your arrival cost the organization.",
      },
      {
        type: "paragraph",
        text: "Skip clarity and you get busy teams going in different directions. Skip trust and your best ideas die in silence. Skip momentum and leadership starts to look like meetings about meetings.",
      },
      {
        type: "heading",
        level: 2,
        text: "Days 1 to 30: Listen and learn",
      },
      {
        type: "paragraph",
        text: "Watkins' first imperative is to accelerate your learning. Effective learning gives you the foundational insights you need before you build your plan for the next sixty days.",
      },
      {
        type: "heading",
        level: 3,
        text: "Schedule the right conversations",
      },
      {
        type: "paragraph",
        text: "Meet one-on-one with every direct report, peer you depend on, and key stakeholder your manager names. Ask the same four questions: What is working? What is blocked? What should I know that is not in any doc? What would make your job easier in the next sixty days? Take notes. Look for repeats, not outliers.",
      },
      {
        type: "heading",
        level: 3,
        text: "Map the real workflow",
      },
      {
        type: "paragraph",
        text: "Watch how work actually moves: handoffs, approvals, bottlenecks, and the informal fixes people built while no one was looking. Emerging leaders who respect existing work before changing it earn trust faster than those who arrive with a new framework on day three.",
      },
      {
        type: "heading",
        level: 3,
        text: "Win one small visible improvement",
      },
      {
        type: "paragraph",
        text: "Watkins calls these early wins. Pick a pain point everyone mentions and fix it fast: a confusing ritual, a missing template, a recurring miscommunication. Keep it small. Ship it in thirty days. Early wins prove you listen and act.",
      },
      {
        type: "heading",
        level: 2,
        text: "Days 31 to 60: Set direction",
      },
      {
        type: "paragraph",
        text: "By day thirty you should see patterns. Turn them into a simple team narrative: where we are, where we are going, and what we will not do this quarter. Share it in a short written doc and a live conversation. Invite pushback. Revise once. Then hold the line.",
      },
      {
        type: "list",
        items: [
          "Name three priorities maximum. More than three is a wish list, not a strategy.",
          "Connect each priority to a metric or observable outcome the team can track.",
          "Assign one owner per priority, even if the owner is you for now.",
          "Publish how decisions get made: who decides, who advises, who needs to know.",
        ],
      },
      {
        type: "paragraph",
        text: "Direction without decision rules creates anxiety. People stop acting because they are afraid of guessing wrong. Make the rules explicit.",
      },
      {
        type: "heading",
        level: 2,
        text: "Days 61 to 90: Build leadership habits",
      },
      {
        type: "heading",
        level: 3,
        text: "Run meetings that respect time",
      },
      {
        type: "paragraph",
        text: "Send agendas twenty-four hours ahead. Start with decisions needed. End with named owners and dates. Cancel meetings that should be docs. Your team will notice immediately.",
      },
      {
        type: "heading",
        level: 3,
        text: "Give feedback that builds capability",
      },
      {
        type: "paragraph",
        text: "Gallup found that employees who receive meaningful feedback at least weekly are three times more likely to be engaged than those who receive it once a year or less. Use behavior, impact, next step: \"When the update went out without the numbers, the exec team lost confidence in our timeline. Next time, loop me in before you send.\"",
      },
      {
        type: "heading",
        level: 3,
        text: "Protect your own learning time",
      },
      {
        type: "paragraph",
        text: "Emerging leaders burn out when they stop growing. Block two hours weekly for reading, coaching, or reflection on what is not working. You cannot develop a team you are too exhausted to develop yourself.",
      },
      {
        type: "heading",
        level: 2,
        text: "Mistakes to avoid in the first ninety days",
      },
      {
        type: "list",
        items: [
          "Changing systems before you understand why they exist.",
          "Taking credit for team output instead of amplifying contributors.",
          "Avoiding hard conversations until they become crises.",
          "Managing up perfectly while your team waits for direction.",
          "Confusing activity with progress because you feel pressure to look busy.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Your ninety-day checklist",
      },
      {
        type: "list",
        items: [
          "Days 1-30: Complete stakeholder conversations. Map workflow. Ship one early win.",
          "Days 31-60: Publish three priorities with owners and decision rules.",
          "Days 61-90: Establish weekly feedback rhythm. Run meetings with agendas and clear closes.",
          "Day 90: Answer in writing: Can my team state our top three priorities? Do people bring me problems early? Did we ship something that mattered?",
          "Ongoing: Invest in manager development. Gallup shows trained managers lift team engagement up to 18 percent.",
        ],
      },
      {
        type: "paragraph",
        text: "Emerging leadership is not a personality type. It is a set of repeatable behaviors: listen, clarify, decide, follow through, develop others. Master those in your first ninety days and the title starts to mean something real.",
      },
      {
        type: "paragraph",
        text: "Want more field guides like this? Join the waitlist for launch updates, early excerpts, and new practical resources for emerging leaders at every career stage.",
      },
      {
        type: "heading",
        level: 2,
        text: "Sources",
      },
      {
        type: "list",
        items: [
          "Michael D. Watkins, The First 90 Days: Critical Success Strategies for New Leaders at All Levels (Harvard Business Review Press, 2003)",
          "Gallup, Manager Development Strategy and State of the Global Workplace reports",
          "Center for Creative Leadership, It's You, Not Them: Why Emerging Leaders Need Your Support to Succeed (2021)",
        ],
      },
    ],
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((guide) => guide.slug === slug);
}

export function getAllGuideSlugs(): string[] {
  return guides.map((guide) => guide.slug);
}

export function getGuidesByCapability(capability: GuideCapability): Guide[] {
  return guides.filter((guide) => guide.capability === capability);
}

export const capabilityHomeAnchors: Record<GuideCapability, string> = {
  Storytelling: "/#skills",
  Leadership: "/#skills",
  "Executive Presence": "/#skills",
  "Leadership through AI": "/#skills",
  "Critical Thinking": "/#skills",
  "Emerging Leaders": "/#skills",
};

export const capabilityOrder: GuideCapability[] = [
  "Storytelling",
  "Leadership",
  "Executive Presence",
  "Leadership through AI",
  "Critical Thinking",
  "Emerging Leaders",
];
