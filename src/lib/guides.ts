export type GuideCapability =
  | "Storytelling"
  | "Leadership"
  | "Calm Confidence";

export type GuideSection =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "list"; items: string[] };

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
      "A practical framework for turning your experiences into stories that stick in interviews, meetings, and introductions. Built for early career professionals who need substance, not scripts.",
    capability: "Storytelling",
    publishedAt: "2026-07-19",
    readingTimeMinutes: 9,
    sections: [
      {
        type: "paragraph",
        text: "Most people think storytelling is a talent you either have or you do not. In practice, it is a skill you can build. The professionals who get remembered in interviews, team meetings, and first introductions are not always the loudest or the most polished. They are the ones who know how to turn a real experience into a narrative that makes people lean in.",
      },
      {
        type: "paragraph",
        text: "This guide gives you a simple framework you can use tomorrow. No performance tricks. No slide-deck theater. Just a way to structure what you already know so other people can follow, care, and remember.",
      },
      {
        type: "heading",
        level: 2,
        text: "Why storytelling matters when AI can write the words",
      },
      {
        type: "paragraph",
        text: "Anyone can generate a clean answer now. What they cannot generate is your specific experience, your judgment in a hard moment, or the reason you care about the work. Storytelling is how you show those things without sounding like you memorized a script.",
      },
      {
        type: "paragraph",
        text: "In early career settings, stories do three jobs at once. They prove you have done real work. They show how you think under pressure. They help people picture you on their team. That is why a well-told two-minute story often beats a ten-slide presentation.",
      },
      {
        type: "heading",
        level: 2,
        text: "The CLEAR framework for professional stories",
      },
      {
        type: "paragraph",
        text: "Use CLEAR when you need a story that fits in an interview answer, a meeting update, or a quick introduction. Each letter is a beat, not a paragraph. Keep the whole thing under two minutes unless someone asks you to go deeper.",
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
        type: "heading",
        level: 3,
        text: "Example: A project update in a team meeting",
      },
      {
        type: "paragraph",
        text: "Context: \"Last month our onboarding docs were confusing new hires.\" Line: \"People were asking the same three questions in Slack every week.\" Effort: \"I interviewed five new teammates, rewrote the top ten pages, and added a one-page start-here guide.\" Aftermath: \"Support tickets dropped by half in two weeks.\" Relevance: \"That is the same approach I would take here: find the friction, fix the first touchpoint, measure whether it worked.\"",
      },
      {
        type: "paragraph",
        text: "Notice what is missing. No long backstory. No hero language. No vague claims about being a \"hard worker.\" Just a clear sequence someone can repeat after the meeting ends.",
      },
      {
        type: "heading",
        level: 2,
        text: "Where to use stories in your week",
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
        text: "When you hear \"Tell me about a time when...,\" do not reach for a new story. Pick from your five and adjust the relevance line for the role you want.",
      },
      {
        type: "heading",
        level: 3,
        text: "Meetings",
      },
      {
        type: "paragraph",
        text: "Open status updates with a one-sentence context and a one-sentence result before you explain the steps. \"We were losing signups after step two. We simplified the form and recovered eighteen percent in a week. Here is what we changed.\" That structure respects people's time and makes your contribution easy to repeat to others.",
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
        text: "Common mistakes that make stories forgettable",
      },
      {
        type: "list",
        items: [
          "Starting with chronology instead of stakes. Lead with why the story matters.",
          "Hiding behind \"we\" when you need to show your specific contribution.",
          "Adding every detail instead of the one detail that makes the scene real.",
          "Ending without relevance. Always tie the story back to the listener's world.",
          "Sounding rehearsed. Practice the beats, not a word-for-word script.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "A weekly practice that compounds",
      },
      {
        type: "paragraph",
        text: "Every Friday, write down one moment from the week that taught you something. Run it through CLEAR in five sentences. Say it out loud once. Over a month you will have a story bank you can pull from in any room.",
      },
      {
        type: "paragraph",
        text: "Storytelling is not about being entertaining. It is about being clear enough that people remember you for the right reasons. That is a professional skill, and it gets stronger every time you use it on purpose.",
      },
    ],
  },
  {
    slug: "lead-before-you-have-the-title",
    title: "How to Lead Before You Have the Title",
    description:
      "Practical ways to lead with clarity and influence without formal authority. For early career professionals who want to move work forward in any setting.",
    capability: "Leadership",
    publishedAt: "2026-07-19",
    readingTimeMinutes: 10,
    sections: [
      {
        type: "paragraph",
        text: "Leadership is often treated like a promotion you wait for. In reality, the people who advance fastest are usually leading long before their title changes. They clarify messy problems. They bring others along. They make hard calls visible instead of hiding behind group indecision.",
      },
      {
        type: "paragraph",
        text: "You do not need a team, a budget, or a corner office to lead. You need clarity, follow-through, and the willingness to take responsibility for outcomes instead of tasks. This guide shows you how to do that in early career roles without overstepping or burning trust.",
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
        text: "Clarity does not mean having all the answers. It means separating facts from assumptions, naming what is blocked, and proposing a next step small enough to start today. People follow clarity more readily than confidence alone.",
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
          "Hoarding information to stay essential. Leaders share context so the team gets stronger.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "A simple weekly leadership habit",
      },
      {
        type: "paragraph",
        text: "Pick one recurring problem on your team. Each week, write a one-page brief: what is happening, why it matters, two options, and your recommendation. Share it with the person who can act. Even if they choose differently, you become known as someone who thinks like an owner.",
      },
      {
        type: "paragraph",
        text: "Titles come and go. The habit of creating clarity, earning trust, and moving work forward is what people remember. That is how you lead before the title catches up.",
      },
    ],
  },
  {
    slug: "calm-confidence-under-pressure",
    title: "Calm Confidence Under Pressure",
    description:
      "How to project presence in high-stakes moments through preparation, body language, voice, and mindset. For professionals who need to be heard when the room gets tense.",
    capability: "Calm Confidence",
    publishedAt: "2026-07-19",
    readingTimeMinutes: 9,
    sections: [
      {
        type: "paragraph",
        text: "Pressure has a way of shrinking people. Voices get faster. Posture folds in. Answers turn into rambling. The irony is that the moment you most need to be heard is often the moment you feel least ready.",
      },
      {
        type: "paragraph",
        text: "Calm confidence is not pretending you are unfazed. It is having enough preparation and self-awareness that your presence matches your substance. This guide covers what to do before, during, and after high-stakes moments so you show up steady when others default to noise.",
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
        text: "Prepare the room in your body first",
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
        text: "Use your voice on purpose",
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
        text: "Plan for the punch",
      },
      {
        type: "paragraph",
        text: "Decide in advance how you will handle a challenge. When someone pushes back, use: pause, acknowledge, answer. \"That is a fair push. The reason I see it this way is...\" You do not need to win the exchange. You need to stay composed inside it.",
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
        text: "After the moment: build the habit",
      },
      {
        type: "paragraph",
        text: "Within an hour of any high-stakes moment, write a short debrief. What landed? Where did you rush? What question surprised you? One paragraph is enough. Over time you will see patterns and fix them before the next room, not after.",
      },
      {
        type: "paragraph",
        text: "Calm confidence is cumulative. Each prepared entrance, each steady answer, each clean close teaches your body that you can handle pressure without shrinking. That is executive presence in the making, and it is available long before the title says so.",
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
  "Calm Confidence": "/#skills",
};
