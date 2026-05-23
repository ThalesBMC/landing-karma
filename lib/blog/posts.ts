import type { BlogPost } from "./types";
import { enrichPost } from "./enrich";

const rawBlogPosts: Omit<BlogPost, "author" | "image">[] = [
  {
    slug: "what-to-do-during-a-panic-attack",
    title: "What to Do During a Panic Attack: A Step-by-Step Guide",
    description:
      "Learn practical, evidence-based steps to calm a panic attack, including the 5-4-3-2-1 grounding technique, breathing strategies, and what to do after the wave passes.",
    date: "2026-03-15",
    readingTime: "8 min read",
    featured: true,
    tags: ["panic attacks", "grounding", "anxiety relief", "5-4-3-2-1"],
    content: `When a panic attack hits, your body can feel like it is in genuine danger: racing heart, shortness of breath, dizziness, and a crushing sense that something terrible is about to happen. The good news: panic attacks are uncomfortable, but they are not dangerous. Your nervous system is misfiring, not failing.

This guide walks you through what to do during a panic attack, step by step, so you have a clear plan when anxiety spikes.

## Step 1: Remind yourself this will pass

Panic attacks typically peak within 10 minutes and subside within 20 to 30. Say it out loud if you can: *"This is anxiety. It feels awful, but it will pass."* Naming the experience reduces the fear-of-fear spiral that makes attacks worse.

## Step 2: Find a safe spot (if you can)

Move to somewhere you feel slightly more secure: a bathroom stall stall, a quiet corner, your car, or even just leaning against a wall. You do not need to leave a meeting or a train unless you want to. Sometimes staying put and riding it out builds confidence for next time.

## Step 3: Use the 5-4-3-2-1 grounding technique

Grounding pulls your attention out of catastrophic thoughts and into the present moment through your senses:

- **5 things you can see**: a clock, a shoe, a crack in the pavement
- **4 things you can touch**: the fabric of your shirt, a cold water bottle, the ground under your feet
- **3 things you can hear**: traffic, a fan, your own breathing
- **2 things you can smell**: coffee, fresh air, hand cream
- **1 thing you can taste**: gum, a sip of water, the inside of your mouth

Go slowly. There is no rush. The goal is to anchor yourself in what is real right now.

## Step 4: Slow your breathing

Fast, shallow breathing feeds the panic loop. Try box breathing:

1. Inhale through your nose for 4 seconds
2. Hold for 4 seconds
3. Exhale through your mouth for 4 seconds
4. Hold for 4 seconds
5. Repeat 4 to 6 cycles

If holding your breath feels uncomfortable, skip the holds and focus on a longer exhale than inhale, which activates your parasympathetic nervous system, your body's natural calm-down mode.

## Step 5: Relax your body, one area at a time

Panic creates muscle tension you may not notice until you scan for it. Unclench your jaw, drop your shoulders, loosen your grip, and uncurl your toes. Progressive muscle relaxation, tensing and releasing each muscle group, can help if you have a few minutes.

## Step 6: Avoid the traps that prolong panic

During an attack, try not to:

- Google your symptoms (this almost always increases fear)
- Fight the sensations with anger or shame
- Tell yourself you are weak or broken
- Chug caffeine or sugar to "push through"

Acceptance is not giving up; it is refusing to add a second layer of suffering on top of the first.

## Step 7: After the wave passes

When your body starts to settle, drink water, eat something small if you can, and give yourself credit. You got through it. If possible, jot down what happened: where you were, what you felt, what helped. Over time, patterns emerge, and patterns can be managed.

## When to seek professional help

Occasional panic attacks are common, especially during stressful periods. Consider reaching out to a therapist or doctor if attacks are frequent, you are avoiding places or activities because of them, or you are unsure whether symptoms might have a medical cause.

## How Kalma approaches this

We built Panic Shield because decision-making disappears during an attack. One tap opens guided 5-4-3-2-1 grounding and breathing — no account, no onboarding, and no internet required. That is a product decision, not a marketing line: panic often hits in tunnels, planes, and dead zones.

## Sources

- [NIMH — Panic Disorder](https://www.nimh.nih.gov/health/publications/panic-disorder-when-fear-overwhelms)
- [APA — Grounding techniques for anxiety](https://www.apa.org/topics/anxiety)

For a deeper look at why panic feels so dangerous even when it is not, read [Why Panic Attacks Feel Dangerous (But Aren't)](/blog/why-panic-attacks-feel-dangerous). And if you want to build a daily practice that lowers your baseline anxiety, explore [How to Track Anxiety Triggers Without Overwhelming Yourself](/blog/how-to-track-anxiety-triggers).

---

*Kalma is coming to the App Store in Q1 2026. [Join the waitlist](/#waitlist) for early access to Panic Shield, guided breathing, and science-backed anxiety tools.*
`,
  },
  {
    slug: "box-breathing-vs-4-7-8-for-anxiety",
    title: "Box Breathing vs 4-7-8: Which Helps Anxiety More?",
    description:
      "Compare box breathing and 4-7-8 breathing for anxiety relief. Learn how each pattern works, when to use it, and which technique fits your situation.",
    date: "2026-03-10",
    readingTime: "7 min read",
    featured: true,
    tags: ["breathing exercises", "box breathing", "4-7-8", "anxiety"],
    content: `Breathing exercises are among the most accessible tools for anxiety: no equipment, no appointment, and they work in under five minutes. Two patterns show up everywhere: **box breathing** and the **4-7-8 technique**. Both calm the nervous system, but they work slightly differently. Here is how to choose.

## How breathing calms anxiety

When you are anxious, your sympathetic nervous system, the fight-or-flight response, takes over. Breathing becomes fast and shallow, which signals your brain that danger is present. Deliberately slowing and lengthening your breath sends the opposite message through the vagus nerve: *we are safe enough to rest.*

The key variable is usually the **exhale**. A longer exhale than inhale activates the parasympathetic system more effectively than any inhale-heavy pattern.

## What is box breathing?

Box breathing (also called square breathing) uses four equal phases:

- Inhale for 4 counts
- Hold for 4 counts
- Exhale for 4 counts
- Hold for 4 counts

It is used by Navy SEALs, athletes, and therapists because the rhythm is easy to remember and visually intuitive. Imagine tracing a square.

### Best for:

- **Acute stress in public**: meetings, commutes, before a presentation
- **Focus and composure**: when you need to stay sharp, not sleepy
- **Beginners**: the equal counts feel balanced and predictable

### Watch out for:

Holding your breath can feel uncomfortable if you are already short of breath during panic. In that case, shorten the holds or skip them entirely.

## What is 4-7-8 breathing?

Developed by Dr. Andrew Weil, 4-7-8 uses asymmetric counts:

- Inhale for 4 counts
- Hold for 7 counts
- Exhale for 8 counts

The extended exhale makes this pattern especially calming, almost sedating for some people.

### Best for:

- **Bedtime anxiety**: racing thoughts when you are trying to sleep
- **After a panic attack**: when your body needs deep recovery, not alertness
- **General wind-down**: evening routines, post-work decompression

### Watch out for:

The 7-second hold can feel intense at first. Start with half counts (inhale 2, hold 3.5, exhale 4) and build up over weeks.

## Side-by-side comparison

| | Box Breathing | 4-7-8 |
|---|---|---|
| **Rhythm** | Equal 4-4-4-4 | 4-7-8 asymmetric |
| **Intensity** | Moderate | Deeply calming |
| **Best setting** | Daytime, active | Evening, rest |
| **Hold breath?** | Yes (4 sec) | Yes (7 sec) |
| **Learning curve** | Low | Medium |

## Which one should you use?

There is no single winner; it depends on the moment:

- **Panic rising at work?** Start with box breathing. It is discreet and keeps you functional.
- **Cannot sleep because of anxiety?** 4-7-8 is your friend.
- **Not sure?** Try both across a week and notice which leaves you feeling more regulated.

Many people keep both in their toolkit, the same way you might choose a light jacket or a heavy coat depending on the weather.

## Resonant breathing: the third option

If breath holds feel wrong for you, try **resonant breathing** (roughly 5.5 breaths per minute: inhale 5, exhale 5, no holds). Research links this rate to improved heart-rate variability, a marker of nervous system flexibility.

## How to build a breathing habit

1. **Practice when calm**: do not wait for a crisis to learn the technique
2. **Same time, same place**: pair it with an existing habit (after brushing teeth, before lunch)
3. **Track streaks**: consistency matters more than duration; even 2 minutes daily helps
4. **Use visual guides**: following a moving circle is easier than counting when anxious

## How Kalma approaches this

We ship box, 4-7-8, and resonant breathing with a visual pacer — not a generic timer — because counting under stress is unreliable. You pick the pattern that fits the moment; the app keeps the rhythm so you can focus on the exhale.

## Sources

- [Cleveland Clinic — Diaphragmatic breathing](https://my.clevelandclinic.org/health/articles/9445-diaphragmatic-breathing)
- [NIH — Breath regulation and stress](https://www.nih.gov/news-events/nih-research-matters/breath-control-help-mood)

For a full walkthrough of what to do when anxiety spikes suddenly, see [What to Do During a Panic Attack](/blog/what-to-do-during-a-panic-attack). And for nighttime-specific strategies, read [Anxiety at Night: A Gentle Wind-Down Routine](/blog/anxiety-at-night-wind-down-routine).

---

*Kalma brings guided box, 4-7-8, and resonant breathing to your pocket, with Apple Health integration and offline access. [Join the waitlist](/#waitlist) to be first in line.*
`,
  },
  {
    slug: "how-to-track-anxiety-triggers",
    title: "How to Track Anxiety Triggers Without Overwhelming Yourself",
    description:
      "A practical guide to anxiety journaling and trigger tracking. Learn a simple framework to spot patterns, reduce overwhelm, and turn insights into action.",
    date: "2026-03-05",
    readingTime: "7 min read",
    featured: true,
    tags: ["journaling", "anxiety triggers", "mood tracking", "self-awareness"],
    content: `Understanding your anxiety triggers is one of the most powerful things you can do for long-term relief. But tracking every thought, feeling, and symptom can quickly become its own source of stress, especially if you are already anxious.

The goal is not a perfect diary. The goal is **useful patterns** with the least possible friction.

## Why trigger tracking works

Anxiety often feels random. One day you are fine; the next, your heart races in a grocery store for no obvious reason. But anxiety is rarely random; it is usually a response to identifiable inputs: sleep debt, caffeine, social situations, unresolved conflict, or even subtle physical sensations.

When you track triggers over time, you shift from *"Why is this happening to me?"* to *"What conditions make this more likely?"* That shift is the foundation of cognitive behavioral therapy (CBT), one of the most evidence-based treatments for anxiety.

## The minimum viable journal entry

You do not need pages of prose. A useful entry has four fields:

1. **Date and time**: context matters (morning vs. midnight)
2. **Intensity**: a simple 1 to 10 scale
3. **What was happening**: one sentence (e.g, "Team meeting, boss asked about deadline")
4. **What helped (or did not)**: one sentence

That is it. Thirty seconds. Done.

## Common anxiety triggers to watch for

As you collect entries, look for these recurring themes:

### Physical triggers
- **Sleep**: less than 6 hours dramatically increases next-day anxiety
- **Caffeine**: especially on an empty stomach or after 2 PM
- **Alcohol**: relaxes you initially, but rebound anxiety is real
- **Hormonal shifts**: menstrual cycle, illness, dehydration

### Situational triggers
- **Social evaluation**: meetings, dates, parties, performance reviews
- **Uncertainty**: waiting for results, ambiguous messages, open-ended tasks
- **Sensory overload**: crowded spaces, loud environments, bright lights
- **Transitions**: Monday mornings, Sunday evenings, returning from vacation

### Internal triggers
- **Catastrophic thinking**: "What if..." spirals
- **Body hyper-awareness**: noticing a heartbeat and interpreting it as danger
- **Perfectionism**: setting standards that guarantee failure

## The weekly review (5 minutes, not 50)

Once a week, scan your entries and ask three questions:

1. **What showed up most often?**: circle the top 2 to 3 triggers
2. **What was my average intensity?**: is it trending up or down?
3. **What actually helped?**: breathing, a walk, calling someone, leaving the room

This review is where insight becomes action. If caffeine appears in 4 of 7 entries, experiment with cutting back for a week. If Sunday evenings spike every time, build a wind-down ritual (see [Anxiety at Night: A Gentle Wind-Down Routine](/blog/anxiety-at-night-wind-down-routine)).

## Avoid these journaling traps

- **Over-tracking**: logging 10 times a day turns life into a clinical study
- **Judgment**: "I should not feel this way" adds shame to anxiety
- **Analysis paralysis**: searching for the one root cause when anxiety is usually multi-factorial
- **Ignoring wins**: note calm days too, not just bad ones

## From insight to intervention

Tracking is only valuable if it changes something. Here is a simple framework:

| Trigger | Experiment |
|---|---|
| Poor sleep | Fixed bedtime for 7 days |
| Caffeine | Switch to half-caf or cut after noon |
| Meeting anxiety | 2 minutes of box breathing beforehand |
| Sunday dread | Plan one enjoyable activity for Sunday evening |

Run one experiment at a time. Give it a week before judging results.

## How Kalma approaches this

We designed the journal for 30-second entries — date, intensity, one line of context, one line on what helped. No blank-page pressure. Weekly reviews surface patterns without turning life into a clinical study. That friction reduction is intentional: tracking only works if you actually do it.

## Sources

- [NIMH — Psychotherapies (including CBT)](https://www.nimh.nih.gov/health/topics/psychotherapies)
- [APA — Keeping a mood diary](https://www.apa.org/topics/mood)

For more on the science behind anxiety tools, read [What "Evidence-Based" Actually Means for Mental Health Apps](/blog/evidence-based-mental-health-apps).

---

*Start understanding your patterns before the next spike. [Join the Kalma waitlist](/#waitlist) for early access to mood tracking, trigger insights, and science-backed lessons.*
`,
  },
  {
    slug: "why-panic-attacks-feel-dangerous",
    title: "Why Panic Attacks Feel Dangerous (But Aren't)",
    description:
      "Understand the biology behind panic attacks: why your heart races, chest tightens, and mind screams danger even when you are physically safe.",
    date: "2026-02-28",
    readingTime: "6 min read",
    featured: false,
    tags: ["panic attacks", "fight or flight", "anxiety education"],
    content: `If you have ever had a panic attack, you know the feeling: absolute certainty that something catastrophic is happening: a heart attack, losing control, fainting, or going crazy. The irony is that panic attacks are the body's alarm system firing at full volume when there is no actual fire.

Understanding why panic feels so dangerous is one of the most effective ways to reduce how often it happens.

## Your alarm system is doing its job: just at the wrong time

The amygdala, a small region deep in your brain, acts as a smoke detector. When it perceives threat, real or imagined, it triggers the **fight-or-flight response** in milliseconds:

- Heart rate increases to pump blood to muscles
- Breathing speeds up to bring in more oxygen
- Blood flow shifts away from digestion toward limbs
- Adrenaline and cortisol flood your system
- Vision narrows (tunnel vision) to focus on the "threat"

Every one of these sensations is adaptive if you are running from a predator. They are terrifying if you are sitting in a coffee shop.

## Why each symptom feels catastrophic

### Racing heart
Your heart is supposed to beat faster during stress. A panic attack can push your heart rate to 120 to 160 bpm, alarming but not harmful for a healthy heart. It feels like a heart attack because the sensation is identical. Cardiologists see this regularly: patients arrive in the ER convinced they are dying, only to learn it was panic.

### Chest tightness and shortness of breath
Fast, shallow breathing (hyperventilation) drops carbon dioxide levels, causing chest tightness, tingling in fingers and lips, and dizziness. These are mechanical effects of breathing patterns, not signs of organ failure.

### Derealization and depersonalization
Some people feel detached from their body or like the world is unreal during panic. This is a known dissociative response to extreme stress: your brain's way of creating distance from overwhelming input. It is unsettling but temporary.

### Fear of losing control
Adrenaline makes you feel restless and urgent. Your mind interprets this as "I am about to do something terrible." In reality, panic attacks do not cause people to act violently or irrationally; they cause people to want to escape.

## The fear-of-fear cycle

Here is what keeps panic recurring:

1. You feel a normal body sensation (a skipped heartbeat, slight dizziness)
2. Your brain interprets it as danger
3. The alarm system activates → full panic attack
4. You become hyper-vigilant about body sensations
5. The next normal sensation triggers step 2 again

This cycle is called **anxiety sensitivity**, and it is one of the strongest predictors of recurring panic. Breaking it starts with changing the interpretation in step 2.

## What actually helps

### Psychoeducation (what you are doing right now)
Learning that panic symptoms are benign reduces the fear-of-fear response. Studies show that understanding the biology of panic reduces attack frequency within weeks.

### Interoceptive exposure
Gradually exposing yourself to the sensations you fear, like elevated heart rate from exercise or dizziness from spinning, teaches your brain that these feelings are tolerable. This is best done with a therapist, but awareness is the first step.

### Grounding during attacks
Techniques like [5-4-3-2-1 grounding](/blog/what-to-do-during-a-panic-attack) interrupt the cycle by redirecting attention. They do not stop the biology instantly, but they prevent the mental escalation that makes attacks peak higher.

## When symptoms might be medical

Panic and cardiac events share symptoms. Seek emergency care if you experience:

- Chest pain that radiates to your arm, jaw, or back
- Symptoms during physical exertion that resolve with rest
- Fainting or near-fainting
- Symptoms that are new and unlike anything you have felt before

If you have been cleared medically and attacks continue, a therapist specializing in CBT for panic disorder can be life-changing.

## You are not broken

Panic attacks are common: roughly 1 in 3 people experience at least one in their lifetime. They are your nervous system being overprotective, not a character flaw. With the right knowledge and tools, most people significantly reduce their frequency and intensity.

## How Kalma approaches this

Understanding why panic feels dangerous is step one; having a tool ready for step two matters. Panic Shield walks you through grounding and breathing without asking you to remember a checklist mid-attack — and it works offline when you cannot load anything else.

## Sources

- [NIMH — Panic Disorder](https://www.nimh.nih.gov/health/publications/panic-disorder-when-fear-overwhelms)
- [NIH — Understanding the biology of fear and anxiety](https://www.nih.gov/news-events/nih-research-matters/understanding-biology-fear-anxiety-disorders)

---

*Kalma's Panic Shield gives you instant grounding and breathing support with no login, no waiting. [Join the waitlist](/#waitlist) for early access.*
`,
  },
  {
    slug: "anxiety-at-night-wind-down-routine",
    title: "Anxiety at Night: A Gentle Wind-Down Routine",
    description:
      "Struggling with anxiety at night? Build a calming bedtime routine with breathing exercises, sleep hygiene tips, and soundscapes to quiet a racing mind.",
    date: "2026-02-20",
    readingTime: "6 min read",
    featured: false,
    tags: ["sleep anxiety", "nighttime anxiety", "wind-down routine", "insomnia"],
    content: `Nighttime anxiety has a special cruelty to it. The distractions of the day fall away, and suddenly your mind has unlimited stage time for every worry, regret, and "what if" you successfully ignored since breakfast.

If you lie awake with a racing heart and replaying conversations, you are not alone: anxiety and sleep problems are deeply linked, and each one makes the other worse.

## Why anxiety spikes at night

Several factors converge after dark:

- **Reduced stimulation**: without tasks and social interaction, the mind turns inward
- **Cortisol rhythm**: cortisol normally drops at night, but chronic stress can flatten this curve
- **Rumination**: the brain's default mode network activates, generating repetitive negative thoughts
- **Anticipatory anxiety**: dreading tomorrow's obligations before the day even starts
- **Physical tiredness**: exhaustion lowers your threshold for anxious thoughts

Understanding this helps: nighttime anxiety is not a personal failure. It is a predictable pattern with predictable solutions.

## A 30-minute wind-down routine

You do not need a perfect spa ritual. You need a consistent sequence that signals *safe to rest* to your nervous system.

### 60 minutes before bed: dim the lights

Blue light from screens suppresses melatonin. Switch to warm lighting, enable night mode on devices, or put screens away entirely. If you must use a phone, choose calming content, not news, email, or social media.

### 30 minutes before bed: transition activities

Pick one or two:

- Light stretching or yoga (nothing vigorous)
- Reading fiction (not self-help or work material)
- A warm shower: the temperature drop afterward mimics the body's natural sleep signal
- Journaling: write tomorrow's top 3 tasks so your brain stops looping on them

### 15 minutes before bed: breathing

This is where [4-7-8 breathing](/blog/box-breathing-vs-4-7-8-for-anxiety) shines. The extended exhale activates your parasympathetic system:

1. Inhale through your nose for 4 seconds
2. Hold for 7 seconds
3. Exhale through your mouth for 8 seconds
4. Repeat 4 cycles

If the holds feel uncomfortable, use resonant breathing instead: inhale 5, exhale 5, no holds, for 3 to 5 minutes.

### In bed: sensory anchors

- **Soundscapes**: rain, ocean, or white noise mask intrusive thoughts and provide a neutral focus
- **Body scan**: starting at your toes, notice each area and consciously relax it
- **The "tomorrow list" trick**: keep a notepad bedside. If a worry pops up, write it down and tell yourself: *"This is for tomorrow-me."*

## Sleep hygiene that actually matters

Not every sleep tip is equal. Focus on these high-impact habits:

| Habit | Why it matters |
|---|---|
| Same wake time daily | Anchors your circadian rhythm more than bedtime does |
| Cool room (65 to 68°F / 18 to 20°C) | Core body temperature must drop to initiate sleep |
| No caffeine after 2 PM | Half-life of caffeine is 5 to 6 hours |
| Exercise earlier in the day | Raises core temp; needs 3+ hours to drop |
| Bed is for sleep only | Trains association between bed and rest, not worry |

## What to do when you wake up anxious at 3 AM

This is common and miserable. The worst thing you can do is lie in bed fighting it for an hour.

1. **Accept the wake-up**: fighting increases arousal
2. **Leave the bed**: go to a dimly lit room
3. **Do something boring**: read something dull, listen to a soundscape
4. **Return to bed when drowsy**: not when the clock says you should

Repeating this prevents your brain from associating bed with anxious wakefulness.

## When to seek help

Occasional restless nights are normal. Consider professional support if:

- You regularly get less than 6 hours of sleep for weeks
- Daytime functioning is impaired (concentration, mood, energy)
- You dread going to bed because of anxiety
- You rely on alcohol or sedatives to sleep

Cognitive behavioral therapy for insomnia (CBT-I) is the gold standard and works well alongside anxiety treatment.

## How Kalma approaches this

We pair bedtime 4-7-8 and resonant breathing with sleep soundscapes and mood tracking so you can see whether your wind-down routine actually shifts sleep quality over weeks — not just on night one. Consistency beats a perfect ritual you abandon after three days.

## Sources

- [NIH — Sleep and anxiety](https://www.nimh.nih.gov/health/publications/sleep-and-mental-health-disorders)
- [Sleep Foundation — Sleep hygiene](https://www.sleepfoundation.org/sleep-hygiene)

For daytime breathing techniques that complement your nighttime practice, see [Box Breathing vs 4-7-8](/blog/box-breathing-vs-4-7-8-for-anxiety).

---

*Better nights start with small, gentle steps. [Join the Kalma waitlist](/#waitlist) for sleep soundscapes, guided breathing, and mood insights.*
`,
  },
  {
    slug: "evidence-based-mental-health-apps",
    title: 'What "Evidence-Based" Actually Means for Mental Health Apps',
    description:
      "Not all mental health apps are created equal. Learn what evidence-based really means, what to look for, and how to choose tools that actually help anxiety.",
    date: "2026-02-12",
    readingTime: "6 min read",
    featured: false,
    tags: ["mental health apps", "evidence-based", "CBT", "digital wellness"],
    content: `The App Store is full of mental health tools promising calm, clarity, and transformation. Some are genuinely helpful. Others are repackaged meditation clips with a wellness label and a subscription fee.

If you are looking for an anxiety app, or building habits around one, it helps to know what **evidence-based** actually means and how to spot the difference.

## What "evidence-based" means

In clinical psychology, evidence-based practice means interventions that have been tested through rigorous research and shown to produce meaningful outcomes. For anxiety specifically, the strongest evidence supports:

- **Cognitive Behavioral Therapy (CBT)**: identifying and reframing thought patterns
- **Exposure therapy**: gradual, safe confrontation of feared situations
- **Relaxation training**: breathing, progressive muscle relaxation, mindfulness
- **Psychoeducation**: understanding how anxiety works in the brain and body

An evidence-based app does not just use these words in marketing. It implements techniques derived from these approaches and, ideally, has data showing they work in app form.

## Green flags when evaluating an app

### 1. Techniques you recognize from therapy
Grounding exercises, thought records, breathing patterns with specific timings, behavioral activation: these come from decades of clinical research. An app that offers vague "feel better" affirmations without structured techniques is a yellow flag.

### 2. Content created or reviewed by clinicians
Look for psychologists, psychiatrists, or licensed therapists involved in content development, not just celebrity endorsements.

### 3. Privacy transparency
Mental health data is sensitive. Evidence-based apps take privacy seriously:

- Clear privacy policy explaining what data is collected
- No selling data to advertisers
- GDPR compliance (especially for EU users)
- Optional accounts: you should not need to create a profile to get help in a crisis

### 4. Designed for the moment of need
The best clinical technique in the world is useless if it takes 5 minutes of onboarding during a panic attack. Evidence-based design considers **when** people need help, not just **what** help looks like.

### 5. Realistic claims
"We reduce anxiety by 90% in one week" is marketing, not science. Legitimate tools promise support, skill-building, and gradual improvement, not miracles.

## Red flags to watch for

- **Gamification without substance**: streaks and badges are motivating, but they should reward real practice, not just opening the app
- **AI-generated content with no clinical review**: AI can assist, but anxiety guidance needs human oversight
- **Aggressive upselling during vulnerable moments**: paywalling crisis support is ethically questionable
- **No offline access**: anxiety does not wait for Wi-Fi
- **Tracking and ads**: your mental health journey should not be monetized through ad targeting

## How apps translate therapy to screens

Traditional CBT might involve worksheets, in-session exercises, and homework. Apps adapt this by:

| Therapy concept | App implementation |
|---|---|
| Thought records | Guided journaling with prompts |
| Breathing retraining | Visual pacing with timed inhale/exhale |
| Psychoeducation | Micro-lessons (3 to 5 min) on anxiety science |
| Exposure hierarchy | Gradual challenge tracking with safety tools |
| Mood monitoring | Quick daily check-ins with trend visualization |

The translation is not perfect: apps cannot replace a therapist for moderate to severe conditions. But for mild to moderate anxiety, daily skill practice through an app can meaningfully reduce symptoms.

## What the research says

Meta-analyses of digital mental health interventions show:

- Apps using CBT principles produce **small to moderate effect sizes** for anxiety, comparable to low-intensity face-to-face CBT
- **Engagement matters more than features**: apps people actually use daily outperform feature-rich apps that get deleted
- **Breathing and psychoeducation** are the most consistently effective standalone modules
- Combined approaches (breathing + journaling + lessons) outperform single-feature apps

## How Kalma approaches this

Kalma was built with these principles from the start:

- **Panic Shield**: instant grounding based on 5-4-3-2-1 and breathing techniques used in clinical settings, accessible without login
- **Breath**: box, 4-7-8, and resonant patterns with visual guidance, not generic timers
- **Learn**: micro-lessons on anxiety science, nervous system regulation, and CBT concepts
- **Journal**: mood and trigger tracking designed for 30-second entries, not marathon writing sessions
- **Privacy-first**: no ads, no data selling, GDPR compliant, works offline

We are not claiming to replace therapy. We are building the tool we wished existed: evidence-informed, instant, and respectful of the moment you are in.

## Sources

- [NIMH — Technology and the future of mental health treatment](https://www.nimh.nih.gov/health/topics/technology-and-the-future-of-mental-health-treatment)
- [APA — App-based mental health tools](https://www.apa.org/topics/technology/mobile-apps)

For practical techniques you can start today, explore [What to Do During a Panic Attack](/blog/what-to-do-during-a-panic-attack) and [How to Track Anxiety Triggers](/blog/how-to-track-anxiety-triggers).

---

*Kalma launches on the App Store in Q1 2026. [Join the waitlist](/#waitlist) for early access to evidence-based anxiety tools built for real moments.*
`,
  },
];

export const blogPosts: BlogPost[] = rawBlogPosts.map(enrichPost);

export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getFeaturedPosts(): BlogPost[] {
  return getAllPosts().filter((post) => post.featured);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 2): BlogPost[] {
  const current = getPostBySlug(slug);
  if (!current) return [];

  return getAllPosts()
    .filter((post) => post.slug !== slug)
    .slice(0, limit);
}
