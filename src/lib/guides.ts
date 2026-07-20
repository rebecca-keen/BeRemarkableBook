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
      "A practical framework for turning your experiences into stories that stick in interviews, meetings, and introductions. Built for professionals at any career stage who need substance, not scripts.",
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
      "Practical ways to lead with clarity and influence without formal authority. For professionals at any stage who want to move work forward in any setting.",
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
    title: "Executive Presence Under Pressure",
    description:
      "How to project presence in high-stakes moments through preparation, body language, voice, and mindset. For professionals who need to be heard when the room gets tense.",
    capability: "Executive Presence",
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
  {
    slug: "lead-with-ai-not-behind-it",
    title: "How to Lead with AI Without Falling Behind It",
    description:
      "A practical guide to using AI as a leadership tool without outsourcing your judgment, voice, or credibility. For managers and individual contributors at every career stage.",
    capability: "Leadership through AI",
    publishedAt: "2026-07-20",
    readingTimeMinutes: 10,
    sections: [
      {
        type: "paragraph",
        text: "AI is now part of how work gets done. The mistake is treating it as a shortcut that replaces thinking. The opportunity is treating it as leverage that amplifies the judgment, clarity, and leadership you already bring.",
      },
      {
        type: "paragraph",
        text: "Leading with AI is not about generating more output faster. It is about knowing when to use the tool, when to push back on it, and when to show up as the human who makes the call. This guide covers how to do that without losing credibility or sounding like everyone else in the room.",
      },
      {
        type: "heading",
        level: 2,
        text: "What leadership through AI actually means",
      },
      {
        type: "paragraph",
        text: "Leadership through AI means you stay accountable for outcomes while AI handles repeatable tasks: drafting, summarizing, researching, structuring options. You own the frame, the recommendation, and the conversation with stakeholders. The tool assists. You decide.",
      },
      {
        type: "paragraph",
        text: "This matters at every level. Early career professionals who use AI to think more clearly stand out next to peers who paste generic answers. Job changers who use AI to translate experience into new contexts move faster than those who start from blank pages. Experienced hires who use AI to sharpen analysis without dulling their voice keep the edge that got them hired.",
      },
      {
        type: "heading",
        level: 2,
        text: "The three rules that keep you in charge",
      },
      {
        type: "list",
        items: [
          "Never send what you have not edited. AI drafts are starting points, not finished work.",
          "Always add context AI cannot know: politics, history, relationships, and what your audience actually cares about.",
          "Make your recommendation visible. Leaders name a point of view. Tools do not.",
        ],
      },
      {
        type: "paragraph",
        text: "These rules sound simple. Most people break them under time pressure. That is exactly why following them builds trust. Your manager, client, or team learns that your work reflects your thinking, not a default template.",
      },
      {
        type: "heading",
        level: 2,
        text: "Use AI to lead meetings and decisions better",
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
        text: "Weak prompts produce weak thinking. Strong prompts force clarity. Try these patterns on real work this week.",
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
        type: "paragraph",
        text: "Notice the pattern. You supply judgment. AI supplies structure and speed. The combination is what makes you useful in the age of AI.",
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
          "Assuming AI output is correct. Verify facts, numbers, and names every time.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "A weekly habit for AI-savvy leaders",
      },
      {
        type: "paragraph",
        text: "Pick one recurring task you own: status updates, project briefs, client emails, or team agendas. Build a personal template for how you use AI on that task: input you always provide, edits you always make, and a final check you never skip. Run it for four weeks. You will move faster and still sound like the person people trust to lead.",
      },
      {
        type: "paragraph",
        text: "AI is not the competition. Professionals who combine tool speed with human judgment are. Leadership through AI is how you stay on the right side of that line.",
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
    readingTimeMinutes: 10,
    sections: [
      {
        type: "paragraph",
        text: "When anyone can generate a plausible answer in seconds, the scarce skill is not information. It is judgment. Critical thinking is how you decide what to trust, what to test, and what to recommend when the easy answer is already on the table.",
      },
      {
        type: "paragraph",
        text: "This guide gives you a practical toolkit for everyday work: meetings, emails, project plans, and the moments when someone says \"AI already handled that.\" You do not need a philosophy degree. You need habits that slow you down just enough to think clearly.",
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
        text: "Use VERIFY when you receive a plan, a deck, an AI draft, or a colleague's recommendation. It takes five minutes and prevents expensive yeses.",
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
        type: "paragraph",
        text: "You do not need to block every idea. You need to know which questions still need answers before the group commits.",
      },
      {
        type: "heading",
        level: 2,
        text: "Questions that upgrade any meeting",
      },
      {
        type: "paragraph",
        text: "The best critical thinkers sound curious, not combative. Keep these in your pocket.",
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
        type: "paragraph",
        text: "One well-placed question can save a quarter of misaligned work. That is why critical thinking is a leadership behavior, not a niche skill for analysts.",
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
          "Confusing confidence with accuracy. Loud certainty is not evidence.",
          "Anchoring on the first answer because it arrived fastest.",
          "Treating consensus as proof. Groups can agree on the wrong frame.",
          "Over-researching to avoid deciding. Analysis without a deadline is avoidance.",
          "Critique without alternatives. Point out the flaw and offer a path forward.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Build a daily critical thinking practice",
      },
      {
        type: "paragraph",
        text: "Each day, pick one claim you accepted without question: a metric in a report, a assumption in a project plan, a headline summary. Spend ten minutes checking it. Follow one source upstream. Write one sentence on what you learned. Over a month you will catch patterns others miss and build a reputation for substance over speed.",
      },
      {
        type: "paragraph",
        text: "Critical thinking is not about being negative. It is about being responsible. When everyone has the same first answer, the person who thinks one layer deeper is the one people follow.",
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
    readingTimeMinutes: 11,
    sections: [
      {
        type: "paragraph",
        text: "The first ninety days as an emerging leader are not about proving you belong. They are about proving others can rely on you. That shift from individual contributor to leader, or from leader to leader of leaders, is where many talented people stumble. Not because they lack skill, but because no one taught them what to prioritize when the title changes.",
      },
      {
        type: "paragraph",
        text: "This guide is a practical map for that window: what to learn, what to say, what to decide, and what to defer. It works whether you were promoted internally, hired into a new team, or stepping up while you still look early career on paper.",
      },
      {
        type: "heading",
        level: 2,
        text: "The job in the first ninety days",
      },
      {
        type: "paragraph",
        text: "Your real job is not to fix everything. It is to build clarity, trust, and momentum in that order. Clarity means people know what matters. Trust means people believe you will follow through. Momentum means the team ships something visible that reflects shared priorities.",
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
        text: "Pick a pain point everyone mentions and fix it fast: a confusing ritual, a missing template, a recurring miscommunication. Keep it small. Ship it in thirty days. Early wins prove you listen and act.",
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
        text: "Use behavior, impact, next step. \"When the update went out without the numbers, the exec team lost confidence in our timeline. Next time, loop me in before you send.\" Specific beats vague. Frequent beats dramatic.",
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
        text: "Your ninety-day check-in with yourself",
      },
      {
        type: "paragraph",
        text: "On day ninety, answer five questions in writing: Can my team state our top three priorities? Do people bring me problems early? Did we ship something that mattered? Where did I avoid a conversation I needed to have? What will I do differently in the next ninety days?",
      },
      {
        type: "paragraph",
        text: "Emerging leadership is not a personality type. It is a set of repeatable behaviors: listen, clarify, decide, follow through, develop others. Master those in your first ninety days and the title starts to mean something real.",
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
