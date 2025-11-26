# Relationships Template Library Documentation

![Relationships](../assets/img/relationships.svg)

## Design Reference
*Please upload original design images to `assets/img/` for reference.*

This document details the content and implementation of the Relationships Listing and Detail pages.

---

## Content Registry

### 1. Listing Page (`/relationships`)

**Header:**
> "AlignSynch Demo Templates"

**Template Card 1:**
- **Title:** "Neighbor A - Neighbor B - Alignment"
- **Description:** "Maintaining a positive neighborly relationship is essential for a harmonious community and friendly atmosphere. Here are a variety of aspects to consider seeing if you are on the same page."
- **ID:** 15414
- **Roles:**
    - Initiator: Rob Waters (NeighborA)
    - Counterparty: John Walters (NeighborB)
    - Coach: Molly Joyfield (Mutual Fiend)
- **Buttons:** Demo Template, Personal, View Details.

**Template Card 2:**
- **Title:** "Staff - Manager"
- **Description:** "About\nThis is the descriptor"
- **Roles:**
    - Initiator: BlankA
    - Counterparty: BlankB
    - Coach: Molly Joyfield (BlankC)

### 2. Detail Page (`/relationships/demo`)

**Header:**
- **Title:** "Committed Significant Other – Committed Significant Other"
- **Tags:** PERSONAL, AlignSynch Template
- **Description:** "Discussing and aligning on various aspects of a marriage can help build a strong, healthy relationship, and prevent surprises. Here are some key areas to consider..."

**Sidebar Action Card:**
- Image: Group of friends laughing.
- Button 1: "Create Relationship" (Blue)
- Button 2: "Try Demo" (Green)
- Stats: 1 Stage, 2 Topics, 1 Aspect.

**Main Dashboard:**
- **Roles:**
    - Initiator: Steve Wilson
    - Counterparty: Karen Altimonte
    - Coach: Samantha Trebold
- **Metadata:**
    - Descriptor: 3 years of fun
    - Realm: Our Home - 487 East 28th St
- **Controls:**
    - Mode: Basic / Advanced
    - Setting: Soft / Full

**Aspects Visualization:**
- **Aspect 01:** Major Lifestyle Goals & Objectives Are Aligned
- **Aspect 02:** Mechanical vs Creative
- **Aspect 03:** Variety of Work (Expanded)
    - **Chart:** 4 Quadrants (FEEL, WISH, THINK, GUESS)
    - **Sliders:** Visual comparison of "You" vs "Them".
    - **Gaps:** Indicated by lightning bolts.

---

## Implementation Details

### Routing
- `/relationships`: Lists the available demo templates.
- `/relationships/demo`: A specific route mocking the detailed view of the "Committed Significant Other" template.

### Chart Component
The "Aspect Chart" is built using pure Tailwind CSS to simulate the slider controls and bar charts seen in the mockup. It creates a visual representation of alignment gaps.
