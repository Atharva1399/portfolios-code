---
name: Atharva.dev
description: Personal portfolio of an AI engineer: a dark void with frosted glass shapes and quiet monochrome UI.
colors:
  void: "#030303"
  ink: "#FFFFFF"
  surface: "#0D0D0D"
  surface-raised: "#1A1A1A"
  hairline: "#262626"
  ash: "#999999"
  hero-indigo: "#A5B4FC"
  hero-rose: "#FDA4AF"
  signal-red: "#EF4343"
typography:
  display:
    fontFamily: "Inter, sans-serif"
    fontSize: "clamp(2.25rem, 8vw, 6rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Inter, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.11
  timeline-year:
    fontFamily: "Inter, sans-serif"
    fontSize: "3rem"
    fontWeight: 700
    lineHeight: 1
  title:
    fontFamily: "Inter, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.4
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  body-small:
    fontFamily: "Inter, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.43
  label-mono:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1.5
  chip:
    fontFamily: "Inter, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.33
rounded:
  sm: "4px"
  md: "6px"
  lg: "8px"
  xl: "12px"
  full: "9999px"
spacing:
  gutter-mobile: "16px"
  gutter-tablet: "24px"
  gutter-desktop: "32px"
  card-padding: "24px"
  grid-gap: "32px"
  section-mobile: "64px"
  section-desktop: "96px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.void}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
    height: "40px"
  button-primary-hover:
    backgroundColor: "#E6E6E6"
  input:
    backgroundColor: "{colors.void}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "8px 12px"
    height: "40px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "{spacing.card-padding}"
  chip-tag:
    backgroundColor: "rgba(255, 255, 255, 0.1)"
    textColor: "{colors.ink}"
    typography: "{typography.chip}"
    rounded: "{rounded.full}"
    padding: "4px 12px"
  chip-skill:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.label-mono}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
  badge-hero:
    backgroundColor: "rgba(255, 255, 255, 0.03)"
    textColor: "rgba(255, 255, 255, 0.6)"
    rounded: "{rounded.full}"
    padding: "4px 12px"
---

# Design System: Atharva.dev

## Overview

**Creative North Star: "Midnight Glass"**

The page is a near-black void (#030303). Light catches on a few frosted, translucent shapes: long pill-shaped glass slabs tinted indigo, rose, violet, amber and cyan, which drift slowly through the hero like objects suspended in dark water. Everything else is monochrome. White type and hairline-bordered charcoal surfaces stay quiet so that the glass and the work are the only things that glow.

The UI is **quiet and receding**. Components use tonal steps (void → surface → surface-raised) and 1px hairlines rather than colour or shadow. White is both the text colour and the only action colour. The single sanctioned moment of chroma in the type is the hero headline's indigo-to-rose gradient; colour elsewhere is drift (see Do's and Don'ts). Density is generous: centred section headers, wide vertical rhythm, one idea per band.

Motion is slow and atmospheric rather than snappy. Hero shapes fall in over 2.4s and then bob on a 12s loop, headings fade up in a staggered sequence, the timeline's spine fills as you scroll, and skill chips flow in a continuous two-row marquee.

**Key Characteristics:**
- Near-black void canvas with white type; no light theme.
- Frosted glass pills (translucent gradient fill, white/15 border, soft white glow) as the signature ornament, confined to the hero.
- Tonal layering and hairlines for depth; essentially shadowless UI.
- Inter for everything readable; JetBrains Mono only for skill labels.
- Slow, eased, ambient motion.

## Colors

A monochrome greyscale ladder on a near-black void, lit by a single pastel indigo-to-rose gradient in the hero.

### Primary
- **Ink White** (`ink`): All primary text, headings, the primary button fill, and focus rings. It is the "accent" of the system; the shadcn `primary` and `accent` tokens both resolve to it.

### Tertiary
- **Pastel Indigo** (`hero-indigo`) and **Pastel Rose** (`hero-rose`): The two ends of the hero headline's second-line gradient (indigo → white/90 → rose). Used nowhere else.
- **Glass tints** (indigo-500, rose-500, violet-500, amber-500, cyan-500, each at 15% opacity): The fills of the frosted hero shapes, fading to transparent. They are atmosphere, not UI colour; carried in the sidecar only.

### Neutral
- **Midnight Void** (`void`): Page background and input fields. The hero sits on the same value.
- **Charcoal Surface** (`surface`): Cards, the skill marquee's first row, popovers.
- **Raised Graphite** (`surface-raised`): Secondary and muted surfaces, the second marquee row, input borders, the card-stack layout switcher.
- **Hairline** (`hairline`): Every border and divider, applied globally to all elements.
- **Ash** (`ash`): Muted body copy, section intros, timeline year labels.
- **Signal Red** (`signal-red`): Destructive toasts and form validation only.

### Named Rules
**The White Is the Accent Rule.** Interactive emphasis is expressed with white: a white fill, a white focus ring, or white rising from 60% to 100% opacity. No hue may stand in for "primary".

**The Glass Stays in the Hero Rule.** The tinted glass palette is ornament for the first viewport. Below the fold, colour appears only as low-opacity white.

## Typography

**Display Font:** Inter (with sans-serif)
**Body Font:** Inter (with sans-serif)
**Label/Mono Font:** JetBrains Mono (with monospace)

**Character:** A single neutral grotesque carries the whole page, so the hierarchy comes from scale and weight rather than family. Mono appears only on skill chips, as a quiet nod to code.

### Hierarchy
- **Display** (700, 36px → 60px at 640px → 96px at 768px, line-height 1, tracking −0.025em): The hero headline only. The first line is a white-to-white/80 vertical gradient; the second line uses the indigo-to-rose gradient.
- **Headline** (700, 30px → 36px at 768px, line-height 40px): Centred section titles (Skills & Expertise, Featured Projects, Services Offered, Get In Touch), each followed by an 80×4px white rule.
- **Timeline Year** (700, 48px on desktop, 24px stacked on mobile, Ash): Sticky year labels in the learning-journey timeline.
- **Title** (600, 18–20px): Card and timeline-entry titles.
- **Body** (400, 16px, line-height 1.5): Paragraphs; section intros are capped at about 48rem and centred.
- **Body Small** (400, 14px): Card descriptions, form labels, footer links.
- **Label Mono** (500, 16px, JetBrains Mono): Skill marquee chips.
- **Chip** (400, 12px): Tech tags inside timeline entries.

### Named Rules
**The One Family Rule.** Inter for every readable string. JetBrains Mono is reserved for skill and tech labels and never sets sentences.

## Layout

- **Container:** Centred. Side padding is 16px, 24px from 640px, and 32px from 1024px; the maximum width is 1400px at 2xl. The timeline uses its own 80rem (7xl) frame.
- **Section rhythm:** Each section is a full-width void band with 64px vertical padding (96px from 768px). Bands are separated by space alone; there are no dividers between sections, except the footer's top hairline.
- **Section header pattern:** Every section opens with a centred column at most 48rem wide holding the headline, a short white rule, a muted intro and 48px of space before the content.
- **Grids:** Service cards go from 1 column to 2 at 640px and 3 at 1024px, with a gap of 16px rising to 32px. Contact is a two-column split at 768px with a 48px gap. Timeline entries pair a sticky left year column with flowing content on the right from 768px; on mobile they stack, with the spine on the left.
- **Hero:** Full viewport height, centred, with the headline column at most 48rem wide. Glass shapes are absolutely positioned and bleed off the edges.

## Elevation & Depth

The UI is effectively flat. Depth comes from **tonal steps** (void #030303 → surface #0D0D0D → raised #1A1A1A) and 1px hairline borders, not shadows. The only light sources are atmospheric: the hero's glass shapes carry a soft white under-glow and a radial inner highlight, and the Services cards have a proximity-tracking glowing border that lights up in a multicolour conic gradient as the cursor approaches.

### Shadow Vocabulary
- **Glass glow** (`box-shadow: 0 8px 32px 0 rgba(255,255,255,0.1)`): Hero glass shapes only.

### Named Rules
**The Tonal Depth Rule.** To lift a surface, step it one tone up the ladder and give it a hairline. Never add a drop shadow to a card.

## Shapes

The form language is **soft rectangles with pill-shaped ornament**. UI containers use small, gentle radii: 4px for skill chips, 6px for buttons and inputs, 8px for cards, and 12px for large panels. Pills (9999px) are reserved for the hero glass, the hero badge, tech tags and timeline nodes, so roundness reads as "light/atmosphere" and squareness as "content". Every container has a 1px hairline border.

## Components

### Buttons
Quiet and receding: one solid white button per context, everything else is a text link.
- **Shape:** Gently rounded (6px), 40px tall, 8px 16px padding, 14px medium Inter.
- **Primary:** Ink White fill with Midnight Void text.
- **Hover / Focus:** The fill drops to 90% white; focus shows a 2px white ring with a 2px void offset.
- **Text link:** Ash text that turns white on hover (for example "View All Projects on GitHub" and the footer links).

### Chips
- **Tech tag:** A white/10 fill, white/20 hairline, white 12px text, pill shape, 4px 12px padding. Used in timeline entries.
- **Skill chip:** A Charcoal Surface fill (Raised Graphite on the second row), hairline border, 4px radius, JetBrains Mono 16px. Displayed in two marquee rows scrolling in opposite directions over 20s.
- **Hero badge:** A white/3 fill, white/8 hairline, pill shape, 14px text at white/60, led by an 8px rose dot.

### Cards / Containers
- **Corner Style:** 8px (12px for large composite panels).
- **Background:** Charcoal Surface.
- **Shadow Strategy:** None; see Elevation & Depth.
- **Border:** 1px Hairline.
- **Internal Padding:** 24px (16px on mobile).
- **Icon tile:** A 48–56px square with 8px radius, white/10 fill and a white icon (as in the project card stack).

### Inputs / Fields
- **Style:** A Midnight Void fill, 1px Raised Graphite border, 6px radius, 40px tall, 8px 12px padding, 14px text, Ash placeholder.
- **Focus:** 2px white ring with a 2px offset; no colour change.
- **Error / Disabled:** Signal Red message below the field; disabled fields drop to 50% opacity.

### Navigation
There is no mounted top navigation; the page is one continuous scroll. Wayfinding is the footer's link row (About, Skills, Projects, Contact) and a "Back to Top" text button. The footer wordmark is "Atharva.dev" at 24px bold. Circular 40px social buttons use a white/10 fill, rising to white/20 on hover.

### Glass Shape (signature)
A long pill (from 150×40px up to 600×140px) with a left-to-right gradient from a 15% hue tint to transparent, a 2px white/15 border, a 2px backdrop blur, the glass glow and a radial white/20 inner highlight. Each shape enters from 150px above, rotated 15° extra, over 2.4s (`cubic-bezier(0.23, 0.86, 0.39, 0.96)`), then bobs ±15px on a 12s loop.

### Learning Timeline (signature)
Sticky year labels on the left, entries on the right, and a 2px spine whose white gradient fill grows with scroll progress. Each node is a 16px muted circle on a 40px void disc.

### Morphing Card Stack (signature)
Project cards can switch between stack, grid and list layouts with a segmented control (Raised Graphite at 50% on an 8px track). Cards animate between layouts and support swipe navigation with dot pagination.

## Do's and Don'ts

### Do:
- **Do** keep the canvas at Midnight Void (#030303) everywhere; sections are bands of space, not coloured panels.
- **Do** express emphasis with white: a solid white fill for the single primary action, and white/60 → white for hover.
- **Do** build depth with the tonal ladder (#030303 → #0D0D0D → #1A1A1A) plus a 1px #262626 hairline.
- **Do** reserve pills for atmosphere and tags; use 4–8px radii for content containers.
- **Do** keep motion slow and eased (0.6–2.4s, ease-out or the hero's custom curves), and keep marquees linear.

### Don't:
- **Don't** use `tech-blue` / `tech-navy` (#1034A6). This is known drift in Contact: blue links on near-black fail contrast, and the submit button sets near-black text on blue.
- **Don't** use `neon-turquoise`. It is referenced in Services but never defined, so its icon tiles and numbered steps render invisible. Replace those with the white/10 icon tile.
- **Don't** use light-theme greys (`text-gray-500/600/700`) or `bg-white` surfaces; they come from a removed light theme and break the void.
- **Don't** let the hero's indigo/rose/glass tints spread into body sections or components.
- **Don't** add drop shadows to cards; the glass glow belongs to the hero shapes alone.
- **Don't** load or use VT323. The pixel font is still linked in `index.html`, and the "retro dark-blue" meta description is outdated; neither is part of the current system.
