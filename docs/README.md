# Home Page (Index) Documentation

This document outlines the content strategy, layout intent, and component structure for the AlignSynch Home Page.

## Layout Intent

The Home Page is designed to take the user on a psychological journey:
1.  **Validation**: Acknowledge that relationships are hard.
2.  **Solution**: Present AlignSynch as the easier path.
3.  **Broad Applicability**: Show it applies to *everyone* (Business & Personal).
4.  **Mechanism**: Explain *how* it works (The Gizmo/Tool).
5.  **Motivation**: Explain *why* it is necessary (Benefits/Pitfalls).

## Section Breakdown

### 1. Hero Component (`components/Hero.tsx`)
**Intent:** Immediate engagement and categorization.
- **Visuals:** Uses a Cyan/Blue gradient to instill trust and calm.
- **Interaction:** A central call-to-action "Choose a Relationship Type" anchors the user.
- **Content:** Two "Carousel" style columns display the breadth of use cases (e.g., "Vendor", "Parent", "Teacher").

### 2. Testimonials Component (`components/Testimonials.tsx`)
**Intent:** Social proof and use-case education.
- **Iconography:** A large yellow star represents the "Gold Standard" of relationship clarity.
- **Content:** Instead of generic praise, the testimonials are phrased as internal thoughts or questions users might be afraid to ask, positioning the app as the solution to that fear.

### 3. Relationship Types Component (`components/RelationshipTypes.tsx`)
**Intent:** Taxonomy and user self-selection.
- **Structure:** Split card design (Purple for Personal, Teal for Business).
- **Function:** Users scan this list to find their specific situation, realizing the tool is tailored to them.
- **Key Item:** "Blank > Create Your Own" ensures users feel the tool is flexible.

### 4. How It Works Component (`components/HowItWorks.tsx`)
**Intent:** Demystifying the process.
- **Keywords:** 
    - **Opinions** (Green)
    - **Aspects** (Yellow)
    - **Counterparty** (Pink)
    - **Initiator** (Yellow)
- **Flow:** Express -> Invite -> Compare -> Discuss.

### 5. Pitfalls Component (`components/Pitfalls.tsx`)
**Intent:** addressing the "Gap".
- **Design:** Uses text-based boxes to represent "My View" vs "Their View".
- **Message:** Shows that reality is usually a gradient between two opposing viewpoints, and AlignSynch helps find that middle ground.

### 6. Benefits Component (`components/Benefits.tsx`)
**Intent:** Closing the sale/signup.
- **Layout:** A vertical list of value propositions.
- **Icons:** Thumbs Up (Positive reinforcement) and Alert (Risk aversion).
- **Core Message:** "Investing in relationships is worthwhile."

## Design System

- **Colors:** 
  - Primary: Cyan (`#22d3ee` to `#0ea5e9`)
  - Success: Green (`#22c55e`)
  - Neutral: Slate (`#0f172a`)
- **Typography:** Sans-serif (`Inter`) for clarity and readability.
