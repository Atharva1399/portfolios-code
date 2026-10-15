---
name: Atharva Gaikwad
description: Portfolio of a GenAI engineer, built as a committed-blue project binder on grid paper.
colors:
  binder-blue: "#0052FE"
  binder-blue-deep: "#0035B8"
  blue-wash: "#E0EAFF"
  grid-paper: "#F3F5F9"
  sheet-white: "#FFFFFF"
  navy-ink: "#0A1033"
  slate-ink: "#48506F"
  rule-line: "#CAD0E2"
  field-stroke: "#BDC4DB"
  alert-red: "#D11A1A"
typography:
  display:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "clamp(3.25rem, 13.2vw, 7rem)"
    fontWeight: 900
    lineHeight: 0.88
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 125"
  headline:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "clamp(2.75rem, 9vw, 7.5rem)"
    fontWeight: 900
    lineHeight: 0.88
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 125"
  title:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 2.25rem)"
    fontWeight: 900
    lineHeight: 0.95
    fontVariation: "'wdth' 115"
  lead:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 500
    lineHeight: 1.375
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Courier Prime, Courier New, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.25rem
    letterSpacing: "0.02em"
  tape:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "1rem"
    fontWeight: 800
    lineHeight: 1.5
    fontVariation: "'wdth' 125"
rounded:
  chip: "2px"
  control: "4px"
  badge-window: "6px"
  sheet: "12px"
  sticker: "16px"
spacing:
  tab-x: "20px"
  gutter-sm: "16px"
  gutter-md: "24px"
  gutter-lg: "40px"
  section-sm: "80px"
  section-lg: "112px"
  grid-cell: "28px"
components:
  button-primary-on-blue:
    backgroundColor: "{colors.sheet-white}"
    textColor: "{colors.binder-blue}"
    rounded: "{rounded.control}"
    padding: "0 24px"
    height: "48px"
  button-outline-on-blue:
    backgroundColor: "transparent"
    textColor: "{colors.sheet-white}"
    rounded: "{rounded.control}"
    padding: "0 24px"
    height: "48px"
  button-outline-on-blue-hover:
    backgroundColor: "{colors.sheet-white}"
    textColor: "{colors.binder-blue}"
  button-primary-on-white:
    backgroundColor: "{colors.binder-blue}"
    textColor: "{colors.sheet-white}"
    rounded: "{rounded.control}"
    padding: "14px 24px"
  button-primary-on-white-hover:
    backgroundColor: "{colors.binder-blue-deep}"
  folder-tab-nav:
    backgroundColor: "rgba(255,255,255,0.15)"
    textColor: "{colors.sheet-white}"
    typography: "{typography.label}"
    padding: "10px 20px 8px"
  folder-tab-nav-active:
    backgroundColor: "{colors.grid-paper}"
    textColor: "{colors.binder-blue}"
    padding: "12px 20px 8px"
  folder-tab-binder:
    backgroundColor: "{colors.blue-wash}"
    textColor: "{colors.binder-blue}"
    typography: "{typography.label}"
    padding: "10px 28px"
  folder-tab-binder-active:
    backgroundColor: "{colors.binder-blue}"
    textColor: "{colors.sheet-white}"
    padding: "16px 28px 12px"
  binder-sheet:
    backgroundColor: "{colors.binder-blue}"
    textColor: "{colors.sheet-white}"
    rounded: "{rounded.sheet}"
    padding: "56px"
  stack-chip-on-blue:
    backgroundColor: "{colors.sheet-white}"
    textColor: "{colors.binder-blue}"
    typography: "{typography.label}"
    rounded: "{rounded.chip}"
    padding: "4px 10px"
  skill-chip-outline:
    backgroundColor: "transparent"
    textColor: "{colors.sheet-white}"
    typography: "{typography.label}"
    rounded: "{rounded.chip}"
    padding: "8px 14px"
  award-sticker:
    backgroundColor: "{colors.sheet-white}"
    textColor: "{colors.navy-ink}"
    rounded: "{rounded.sticker}"
    padding: "16px 20px"
  clothesline-print:
    backgroundColor: "{colors.sheet-white}"
    textColor: "{colors.navy-ink}"
    padding: "32px 20px 24px"
  input-field:
    backgroundColor: "{colors.grid-paper}"
    textColor: "{colors.navy-ink}"
    rounded: "{rounded.control}"
    padding: "12px 16px"
---

# Design System: Atharva Gaikwad

## Overview

**Creative North Star: "The Blue Binder"**

The site is a physical project binder rendered flat. Committed binder blue owns the loud moments (the hero, the open binder sheet, the stack shelf, the close), and pale grid paper with faint blue rules lies between them like the pages the binder holds. Everything that organises content is a stationery object: folder tabs for navigation and project switching, an ID badge on a lanyard, die-cut stickers for awards, clips on a clothesline for side builds, binder spines on a shelf for skill groups, and printed tape strips that cross section seams.

The palette is one hue at full commitment, fused from two references the user pinned: a blue folder, badge, tape, spine and clothesline system, and a sticker-cutout, grid-paper, tab-divider system. Blue sits against white, never against another accent. The portrait is a keyed cutout laid over the name like collage, its ground matching the blue exactly so the photo and the field read as one sheet. Type is loud and stamped: Archivo stretched to its widest and heaviest cut for display, plain Archivo for reading, Courier Prime typewriter for every label, as if typed onto an index card.

The world is tactile and committed but strictly flat graphic. It rejects glass, blur, glow and gradients; the only linear-gradient in the system draws the grid-paper rules, and the lanyard stripe uses hard stops, which reads as print rather than a fade.

**Key Characteristics:**
- Two grounds only: full-bleed binder blue and grid paper, alternating section by section.
- White on blue and blue on white; outlines invert with the ground (white sticker edges on blue, blue keylines on paper).
- Expanded black uppercase display, Courier Prime typewriter labels.
- Stationery objects carry structure: folder tabs, spines, stickers, clips, tape, badge.
- Slight hand-placed rotation (1.5 to 6 degrees) on stickers, prints, tapes and the badge; content sheets stay square.

## Colors

One committed blue with its deep and washed shades, white, cool paper, and navy ink in place of black.

### Primary
- **Binder Blue** (binder-blue): the world's ground. Full-bleed on the hero, stack shelf, contact close, footer and 404; fills the open binder sheet and active binder tab; carries display headings, keylines and labels on paper. Matches the hero photo ground exactly, so it must not drift.
- **Binder Blue Deep** (binder-blue-deep): the shadow side of blue. Primary-button hover on white, the back tape strip, the inner pipeline stations and repo card on the binder sheet, the clip's printed lip, the form sheet's outer keyline ring.
- **Blue Wash** (blue-wash): secondary text on blue (labels, captions) and the fill of resting binder tabs on paper.

### Neutral
- **Grid Paper** (grid-paper): the page ground between blue sections, ruled every 28px with blue at 7% opacity; also the active nav tab (the tab "becomes" the page below it) and form field fill.
- **Sheet White** (sheet-white): stickers, prints, the fact table, the certifications card, the contact form sheet, tapes, and text on blue.
- **Navy Ink** (navy-ink): body text on paper and white. Replaces black everywhere.
- **Slate Ink** (slate-ink): secondary prose, organisations, notes and clubs on paper.
- **Rule Line** (rule-line): hairline row dividers in tables and lists.
- **Field Stroke** (field-stroke): the shadcn input stroke alias; the shipped form uses navy ink at 15% for its 2px resting stroke.
- **Alert Red** (alert-red): form validation errors and the failure toast only.

### Named Rules
**The One Blue Rule.** Binder blue is the only chromatic hue. Depth comes from blue-deep and blue-wash, never from a second accent.

**The Two Grounds Rule.** Every section sits on either full-bleed binder blue or grid paper. Blue sections take white text and white outlines; paper sections take blue display, navy body and blue keylines.

## Typography

**Display Font:** Archivo at width 125, weight 900 (with Arial Narrow, sans-serif)
**Body Font:** Archivo at normal width (with system-ui, sans-serif)
**Label/Mono Font:** Courier Prime (with Courier New, monospace)

**Character:** A stamped, poster-wide grotesk shouting in caps against a typewriter that annotates quietly, like a printed binder spine beside a typed index card.

### Hierarchy
- **Display** (900, width 125, clamp(3.25rem, 13.2vw, 7rem), up to min(8.4vw, 10rem) on large screens, 0.88): the name in the hero and the 404 "Wrong tab". Uppercase, -0.02em.
- **Headline** (900, width 125, clamp(2.75rem, 9vw, 7.5rem), 0.88): section titles ("The work", "The stack", "The journey"); the contact close runs larger, up to 9.5rem. Same uppercase cut; project sheet titles step down to clamp(2.25rem, 5.6vw, 4.75rem).
- **Title** (900, width 115, clamp(1.5rem, 3vw, 2.25rem), 0.95): timeline roles; prints and stickers use the same 110 to 115 width at 1.125 to 1.3rem.
- **Lead** (500, 1.25 to 1.5rem, 1.375): the hero introduction and contact invitation.
- **Body** (400, 1.125rem, 1.625): paragraphs and bullet points, held to 56 to 60ch.
- **Label** (400, 0.875rem, 0.02em): Courier Prime for every tab, chip, date, field key, caption and meta line. Sentence case, never uppercase.
- **Tape** (800, width 125, 0.875 to 1rem): uppercase marquee words on tape strips.

### Named Rules
**The Stamp and Typewriter Rule.** Archivo Expanded Black is for names and headings only; Courier Prime is for labels only. Running prose stays in plain Archivo.

**The Wide Means Wide Rule.** Display type always uses the variable width axis at 110 to 125. A normal-width heavy weight is not the display face.

## Layout

Full-bleed bands alternate between blue and grid paper; content sits in a centred container of 1300px (1400px for the nav and hero, 1200px for About) with side gutters of 16px, 24px from small screens and 40px from large. Sections breathe at 80px vertical padding, 112px from medium screens. The grid paper's 28px cell is the ambient rhythm.

Desktop compositions are asymmetric two-column splits (1.35fr / 1fr on the binder sheet, 1.4fr / 1fr on the journey, 1fr / 1.15fr on contact). Below large, they stack in reading order. The fixed nav is a 56px row of folder tabs that turns solid blue once the page scrolls past 24px; the left slot is the "AG" monogram (there is no wordmark), and on phones the tab row scrolls horizontally, keeping the active tab in view. The skills shelf is a row of upright spines of varied height on desktop and a stack of full-width rows on mobile. Clothesline prints run five across on large, two on small, one on phones.

Seams are crossed, not ruled: two counter-rotated tape strips overlap the hero's bottom edge and the next section.

## Elevation & Depth

Depth is physical and sparse: objects sitting on the page (stickers, prints, the badge, the cutout, tapes, the form sheet) cast soft, low, ink- or blue-tinted shadows with negative spread, as if lying a few millimetres above paper. Content surfaces (the binder sheet, tables, cards, buttons) are flat. Sticker edges are drawn with a solid spread ring, not a blur.

### Shadow Vocabulary
- **Sticker edge** (`0 0 0 5px #fff, 0 14px 28px -14px hsl(var(--ink) / 0.5)`): award stickers; white die-cut margin around a blue keyline.
- **Form sheet edge** (`0 0 0 6px hsl(var(--blue-deep)), 0 24px 50px -20px rgba(0,0,0,0.5)`): the contact form lying on the blue close.
- **Print drop** (`0 10px 24px -14px hsl(var(--ink) / 0.45)`): clothesline prints.
- **Badge drop** (`0 18px 40px -12px hsl(var(--blue-deep) / 0.55)`): the lanyard ID badge.
- **Tape lift** (`0 8px 18px -10px hsl(var(--ink) / 0.5)`): the front tape strip.
- **Cutout drop** (`drop-shadow(0 24px 40px rgba(0,20,90,0.35))`): the hero portrait cutout.
- **Clip lip** (`0 2px 0 hsl(var(--blue-deep))`): the printed underside of a clothesline clip.

### Named Rules
**The Objects Lift, Sheets Lie Flat Rule.** Only loose stationery objects cast shadows. Containers that hold content stay flat.

## Shapes

Corners are small and practical: 2px on chips and the PASS tag, 4px on buttons, fields and pipeline stations, 12px on the binder sheet, badge and form sheet, 16px on die-cut stickers. The folder tab is the signature silhouette, a trapezoid lip cut with a 10px inward bevel at each top corner; the open binder sheet squares its top-left corner where the first tab joins it. Diamonds (squares rotated 45 degrees) serve as bullets, tape separators and timeline nodes. Strokes are heavy and deliberate: 2px outlines on chips, spines and fields, 3 to 4px keylines on stickers and the timeline rail.

## Components

### Buttons
Solid, rectangular, plain-spoken.
- **Shape:** gently squared (4px), 48px tall in the hero.
- **Primary on blue:** sheet white with binder-blue semibold text, 24px side padding; lifts 2px on hover.
- **Outline on blue:** 2px white border, white text; fills white with blue text on hover.
- **Primary on white:** binder blue, white text, full width in the form; darkens to blue-deep on hover; 70% opacity with a wait cursor while sending.
- **Text link:** semibold with a 2px underline bar (white on blue, blue on paper); the gap before the arrow widens on hover.
- **Focus:** a 3px binder-blue outline at 3px offset, white inside blue sections.

### Chips
- **Stack chip on blue:** white fill, blue Courier Prime, 2px corners.
- **Skill chip:** 2px white outline on blue, Courier Prime at 1rem; fills white on hover.

### Cards / Containers
- **Binder sheet:** binder blue, 12px corners except the tab-joined top-left, 24 to 56px padding, min 34rem tall; flat.
- **Fact table / certifications card:** white, 2px blue top rule or 2px blue border, hairline rule-line dividers, Courier Prime keys in blue.
- **Pipeline stations:** a stepped column of 4px-cornered boxes; first and last stations white with blue text, middle stations blue-deep with a 70% white outline, joined by short white connectors.

### Inputs / Fields
- **Style:** grid-paper fill, 2px navy-ink stroke at 15%, 4px corners, 12px by 16px padding; semibold label above.
- **Focus:** stroke turns binder blue.
- **Error:** stroke and message in alert red, message announced as an alert.

### Navigation
A row of folder tabs riding the top edge, Courier Prime at 12 to 14px. Resting tabs are 15% white on blue (30% on hover); the active section's tab turns grid paper with blue text and grows 2px taller, as though it is the divider of the page beneath. Transparent over the hero, solid blue after scroll.

### Folder-Tab Binder (signature)
Project dividers: a row of trapezoid tabs over one blue sheet. Resting tabs are blue-wash with blue text, turning white on hover; the active tab is binder blue, taller, and continuous with the sheet. Arrow keys move between tabs. Sheets slide 40px with a fade on change.

### Die-Cut Sticker
White, 16px corners, a 3px blue keyline inside a 5px white margin, slight alternating rotation; a blue line icon beside an expanded black title and a typewriter result line.

### Clothesline Print
White cards hung from a 4px navy line by a blue clip with a blue-deep lip, alternately tilted 1.5 degrees; every print straightens and rises 4px on hover, and the whole line swings up to 6 degrees against fast scrolling before settling.

### Spine Shelf
Upright 2px-outlined spines of varied height with vertical expanded titles and a typed index number, standing on a 4px white shelf line; the open spine turns white and rises 24px. Rows on mobile.

### Tape Strip
Full-bleed strips with 2px edges, rotated 2 to 3 degrees, scrolling expanded uppercase words separated by diamonds on a 40s linear loop: white tape with blue type in front, blue-deep tape with white type behind.

### ID Badge
A blue-and-blue-deep striped lanyard, a paper clip slot, then a blue card with a 4px white photo window, expanded name and typewriter role, hung at -4 degrees, swinging to 2 degrees on hover. It can be dragged and springs back on its lanyard, and it drifts against the scroll as a parallax layer.

## Do's and Don'ts

### Do:
- **Do** alternate full-bleed binder blue and grid paper sections, and invert text and outline colour with the ground.
- **Do** keep binder blue exactly matched to the photo ground (#0052FE).
- **Do** use Archivo at width 125, weight 900, uppercase, 0.88 line height for every display heading.
- **Do** set every label, tab, chip, date and meta line in Courier Prime, sentence case.
- **Do** carry structure with stationery objects: folder tabs, spines, stickers, clips, tapes, the badge.
- **Do** ease motion with cubic-bezier(0.16, 1, 0.3, 1) and honour prefers-reduced-motion (parallax and drag switch off).
- **Do** give every element a response: hover, press, drag or focus. Parallax is layered by depth: section headings drift sideways, loose objects (badge, stickers, hero photo and tag) drift vertically, and the hero photo leans toward the cursor.

### Don't:
- **Don't** use glass, backdrop blur, glow, or colour gradients; the grid-paper rules and hard-stop lanyard stripes are the only gradient-built textures.
- **Don't** introduce a second accent hue; vary with blue-deep and blue-wash instead.
- **Don't** use pure black; navy ink is the darkest value.
- **Don't** set display type at normal width, or labels in uppercase.
- **Don't** shadow content containers; only loose objects lift.
- **Don't** bring back the "Atharva.dev" wordmark; the monogram "AG" and the full name are the only marks.
