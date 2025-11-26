# Pricing Page Documentation

![Pricing](../assets/img/pricing.svg)

## Design Reference
*Please upload the original design image as: `assets/img/pricing-design.jpeg`*

This document details the content and implementation of the "Pricing" page (`/pricing`).

---

## Content Registry

### 1. Main Header
**Headline:**
> "AlignSynch Pricing"

**Sub-headline:**
> "Is your Relationship worth $1 per month?"

### 2. Pricing Tiers

#### Basic Plan
- **Title:** "Basic"
- **Subtitle:** "3 Relationship Month"
- **Price:** "$6"
- **Frequency:** "-- QUARTERLY --"
- **Per Unit:** "$2 per Relationship Month"
- **Features:**
  - 1 Relationship for 3 Months
  - 3 Relationships for 1 Month
  - 2 Relationships split 3 Months
- **Footer:** "* or any combination you choose"
- **Button:** "Select Basic Plan" (Outline)

#### Essential Plan (Most Popular)
- **Badge:** "Most Popular" (Green Ribbon)
- **Title:** "Essential"
- **Subtitle:** "24 Relationship Months"
- **Price:** "$36"
- **Frequency:** "-- ANNUALLY --"
- **Per Unit:** "$1.50 per Relationship Months"
- **Features:**
  - 1 Relationship for 36 Months
  - 2 Relationships for 12 Months
  - 8 Relationships for 3 Months
- **Footer:** "* or any combination you choose"
- **Button:** "Select Essential Plan" (Green Solid)

#### Max Plan
- **Title:** "Max"
- **Subtitle:** "60 Relationship Month"
- **Price:** "$60"
- **Frequency:** "-- ANNUALLY --"
- **Per Unit:** "$1 per Relationship Month"
- **Features:**
  - 1 Relationship for 60 Months
  - 5 Relationships for 12 Months
  - 10 Relationships for 6 Month
- **Footer:** "* or any combination you choose"
- **Button:** "Select Max Plan" (Outline)

### 3. Bottom CTA
**Headline:**
> "7 Day Free Trial"

**Button:**
> "Create Account" (Dark)

---

## Implementation Details

### CSS Ribbons
The "Most Popular" ribbon on the Essential card is implemented using absolute positioning and rotation:
```css
.ribbon {
  position: absolute;
  top: 0;
  right: 0;
  transform: rotate(45deg);
}
```

### Component Structure
- **File:** `pages/PricingPage.tsx`
- **Route:** `/pricing`
- **Layout:** Responsive Grid (`grid-cols-1 md:grid-cols-3`).