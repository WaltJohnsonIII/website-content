# FAQ Page Documentation

![FAQ](assets/img/faq.svg)

## Design Reference
*Please upload the original design image as: `assets/img/faq-design.jpeg`*

This document details the content and implementation of the "FAQ" page (`/faq`).

---

## Content Registry

### 1. Frequently Asked Questions (Accordion)
**Header:**
> "Frequently Asked Questions"

**Accordion Items:**
1. **What do I get if I register a new AlignSynch account?**
2. **What is a "Relationship Month"?**
3. **What happens when my "Relationship Months" have been exhausted?**
4. **What does the "Soft" and "Full" settings do?**
5. **What does the "Basic" and "Advanced" mode do?**
6. **What does the "Simple" and "Long" complexity do?**

### 2. Contact Section
**Header:**
> "We're here to help"

**Sub-Header:**
> "Leave a message and we will get back to you."

**Form Fields:**
- First Name
- Last Name
- Email
- Relationship Type
- Phone
- City
- State or Province (Dropdown)

**Button:**
> "Submit" (Green background)

### 3. Bottom CTA Banner
**Headline:**
> "Try it free for 7 days"

**Sub-headline:**
> "Get started with one free week of Relationship smoothing and improved communication."

**Button:**
> "Start your free trial"

---

## Implementation Guide

### 1. Component Structure (`pages/FAQPage.tsx`)
- **State Management**: Uses `useState` to track which accordion item is currently open (`openIndex`).
- **Layout**:
    - Top section: Clean white background for FAQs.
    - Middle section: Two-column layout (Text left, Form right) for contact.
    - Bottom section: Full-width green banner.
- **Styling**:
    - The FAQ items use a border-bottom style standard in modern UIs.
    - The Contact form uses standard Tailwind form styling (`focus:ring`, `border-slate-300`, etc.).
    - The Bottom banner uses the brand green (`#86efac` approx or custom `bg-green-400` variant) to match the "Sign Up" button language.

### 2. Routing
- Route added to `App.tsx`: `/faq`.
- Linked from Navbar.
