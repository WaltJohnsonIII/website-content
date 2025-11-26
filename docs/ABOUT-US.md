# About Us Page Documentation

![About Us](../assets/img/about-us.svg)

## Design Reference
*Please upload the original design image as: `assets/img/about-us-design.jpeg`*

This document details the content and implementation of the "About Us" page (`/about-us`).

---

## Content Registry

### 1. History
> "Although applicable to any relationship, AlignSynch was originally created by a consultant in Sharepoint for the Staff-Manager Relationship. This LOOP feedback system used **L**ots **O**f **O**bjective **P**arameters. It became obvious that this simple tool beat waiting for the annual review, doing a 360 review, sending an email, involving HR, or cornering someone for a 'meeting'."

**Call to Action:**
> Button: "Pick a Relationship"

### 2. Header
> "Why did we create this?"

### 3. Purpose/Goals (The 10 Goals)

#### Goal 1: Poor Relationship > Want Improve a Relationship
*Subtitle:* "Reach a state of agreement, harmony, and understanding with anyone"
*Points:*
- Relationships go sour, just like a pair of jeans starts chafing at the knee.
- Maybe you do talk and discuss for hours, and guess what? You still might not be on the same page without a little help!
- Conceptually or verbally, there is no other way for someone to see all the angles of a Relationship.
- This lets someone see both where things stand now and where they wish them to go in the future.

#### Goal 2: Softly Conveniently Communicate Desire to Change
*Subtitle:* "Telling someone that something needs to change or that is not how I feel is tricky and difficult."
*Points:*
- Softly and conveniently communicate how you would like an Aspect of the Relationship to slowly change in the future.
- Maybe you do not feel comfortable sitting down and bringing up a difficult topic? (this tool will help you)
- This works because it opens an easy soft communication channel.
- It allows people to visit some important Relationship Aspects, in a nice soft way, to see what needs worked on.
- It is hard for people to discuss some things. This opens your eyes to what you need to work on.
- You may not think or know how to ask in a soft easy non-confrontational way.

#### Goal 3: Handle Expectations > Want to Satisfy the Other Person
*Subtitle:* "The key to life is to handle the expectations of other people"
*Points:*
- This should be the #1 top priority in business and personal Relationships.
- The only way to truly handle expectations is to know how each of you feel, wish, think, and guess about the Relationship.

#### Goal 4: Preventing Surprises > Want to Avert Disaster, Pain, and Cost
*Subtitle:* "Reduce stress and risk by knowing you are In-Synch"
*Points:*
- Have you had a poor, detrimental, surprising, or damaging result from not being well aligned with someone? Slowly change in the future.
- Do not be unpleasantly surprised! You don't know until you ask.
- If so, read on, as it was preventable! No need to be so surprised next time.
- Have you been fired because you were "not on the same page"? (but thought you were)
- Have you had a prize team member leave because they wished to lean in a particular direction, but you did not know?
- Have they broken up with you because your thoughts were not in harmony? (but you thought they were)
- Has a business partner gotten angry or legal because your goals were not aligned? (but you thought they were)
- Were people working on portions of a project that you thought were insignificant? (but they thought were important)
- Have you had a customer cancel a big order because of a misunderstanding or expectations? (but you thought all was well)
- Have you set household rules for a child, and they were harboring deep hatred about it? (but you did not know)

#### Goal 5: Save Time and Hours of Counseling or Therapy
*Subtitle:* "You can talk for hours, not really know if you are completely aligned, and only cover ¼ of the concepts AlignSynch covers"
*Points:*
- A Therapist, Psychiatrist, Counselor, or Psychologist can be a Party to this Relationship tool as a "Coach".
- To cover a dozen Relationship Aspects, you would need at least half a dozen sessions with a Mentor, Therapist, Psychiatrist, Counselor, Psychologist, or Coach.
- Most people do not have that kind of time and the Relationship suffers.
- AlignSynch provides efficient ways to cover all the topics.
- With this tool, you have control of the path and map, which a key to success.
- A Therapist, Psychiatrist, Counselor, or Psychologist can often govern all the discussions, but you also need to learn how to do it all yourselves.

#### Goal 6: Teach & Apply Critical Thinking Concepts
*Subtitle:* "Use Critical Thinking, a Subset of Higher Order Thinking, to Get On-the-Same-Page"
*Content:*
- Pentary Thinking™ is an AlignSynch concept and cognitive framework that simplifies complex situations or concepts by reducing them to five (5) opposing categories or perspectives. It is one step further than Ternary Thinking, and two steps further than Binary Thinking.
*Points:*
- Binary Thinking
- Egocentrism
- Ethnocentrism
- Sociocentrism
- Cognitive Bias
- Confirmation Bias
- Ternary Thinking
- Illusory Superiority
- Egocentrism

#### Goal 7: A Negotiation Starter
*Subtitle:* "Life is all about give and take, hence this Arbitration tool will provide diplomacy."
*Points:*
- Everyone needs Need an "Ice-Breaker" If so, read on, as it was preventable! No need to be so surprised next time.
- Have you been fired because you could not seem to meet in middle ground and were "not on the same page"? (but thought you were)
- Have you tried to negotiate with your spouse or partner and had a hard time finding somewhere in between"? (one person thought binary - yes or no)
- Have you had a prize team member leave because they hoped to lean in a particular direction than you, but there was a compromise you did not know?

#### Goal 8: Seals the Deal Nicely
*Subtitle:* "How do you know that you really have come to a conciliation on a Relationship Aspect without some record of agreement?"
*Points:*
- This provides a nice formal record of your Opinions and Gaps.
- No notes, no Post-Its, or other written documents.
- Nobody can say they did not know how you Feel and Wish.

#### Goal 9: Removes the Noise and Provides Focus
*Subtitle:* "Do your conversations about Relationship Aspects get sidetracked, possibly with emotions?"
*Points:*
- Do Aspects about a Relationship get mixed up together? AlignSynch keeps them separate allowing the Parties to focus on one Aspect at a time.
- Do all kinds of related and unrelated adjectives get used when discussing an Aspect? This tool gets you to agree on the two juxtaposed Values to reduce "noise" in the conversation.

#### Goal 10: Reminders you about your Relationship
*Subtitle:* "Forget Post-Its for 'things to work on' and 'topics to discuss'"
*Points:*
- Procrastination is one of the problems in a Relationship.
- It takes a bit of work and people have busy lives.
- We will occasionally remind you what you need to do and where the Gaps are.

### 4. MetaCognition
*Header:* "Wisdom is knowing what you do not know and willing to admit it."
*Content:*
- MetaCognition is an awareness of one’s thought processes and an understanding of the patterns behind them...
- There are generally two components of MetaCognition: (1) knowledge about cognition and (2) regulation of cognition...

---

## Implementation Guide

### 1. Route Creation
The route was added to `App.tsx` using `react-router-dom`'s `HashRouter`.
```tsx
<Route path="/about-us" element={<AboutUsPage />} />
```

### 2. Page Component
The file `pages/AboutUsPage.tsx` was created to house the content. It uses Tailwind CSS for layout, specifically:
- `grid-cols-1 md:grid-cols-2` for the goals layout.
- `prose` styling for text blocks.
- `lucide-react` icons (Check, Star, etc.) for visual list elements.

### 3. Navigation Links
Links were updated in `components/Navbar.tsx`:
```tsx
{ name: 'About Us', to: '/about-us' }
```
And `components/Footer.tsx`.
