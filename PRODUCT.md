# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The primary audience is the developer community: engineers, builders and the DevRel audience who find Atharva through GitHub, LinkedIn, talks or posts. They arrive curious, often from a link, and want to know quickly what he builds, whether it's real, and where to follow or reach him. Recruiters and potential clients may also visit, but the site is not optimised for them.

## Product Purpose

A personal portfolio for Atharva Gaikwad. It exists to establish credibility with fellow developers: show real work, make the code inspectable, and make it easy to connect (GitHub, LinkedIn, email, contact form). Success means a visiting developer leaves understanding what Atharva works on, having opened at least one repo or social link.

## Positioning

**An AI engineer first.** Generative AI, LLMs and AI agents lead the story. DevRel (community, content, advocacy) and full-stack development are supporting range, not equal headlines. Web3/blockchain is **dropped from positioning**; Fundora can remain as a project entry, but Web3 is not presented as a skill pillar or service.

## Operating Context

- Single-page site, visited mostly from links shared in developer spaces; often on mobile.
- Visitors verify claims by clicking through to GitHub repositories.
- Contact happens via email, LinkedIn, GitHub, or the on-site form (EmailJS).

## Capabilities and Constraints

- Stack: Vite + React 18 + TypeScript + Tailwind + shadcn/ui, with framer-motion and react-three-fiber available. Scaffolded with Lovable. Dev server on port 8080.
- Sections today: Hero, About (timeline), Skills, Projects, Services, Contact, Footer. A `Navbar` component exists but isn't mounted.
- Contact form sends through EmailJS (service, template and public key are hard-coded in `src/components/Contact.tsx`).
- **Open: content is stale.** The timeline ends at a Jun–Jul 2025 internship plus a speculative "2025+ Future" entry. Current role, recent projects and education status need to be supplied by Atharva before content work; do not invent them.
- **Open: Services section.** It pitches freelance services to clients, which doesn't match the developer-community audience. Its fate is undecided.

## Brand Commitments

- Name: Atharva Gaikwad; footer wordmark "Atharva.dev".
- Hero voice: "Hey, I'm Atharva, your friendly neighborhood tech guy." Friendly, informal and first-person.

## Evidence on Hand

- Timeline facts (as of the current site): BS Computer Science at MIT ADT (from 2021); full-stack work (2022); AI/ML work (2023); DevRel (2023 onward); co-founded WeConn, a community platform for tech professionals (2024); Gen AI Developer Intern at TATA Communications (Jun–Jul 2025).
- Projects with public repos: Brain Tumor Detection Model (github.com/Atharva1399/brain-tumor-detector), Fundora (github.com/FundoraInvoice/Fundora-Invoices), Autoviron (github.com/Atharva1399/autoviron), DaClean (github.com/Atharva1399/DaClean).
- Links: GitHub github.com/Atharva1399, LinkedIn linkedin.com/in/atharva-gaikwad-72ba25295, email atharvaagaikwad04@gmail.com.
- **Absent:** no photos, testimonials, talks, writing samples, metrics, star counts or press. Do not fabricate any. The "high accuracy" claim for the tumor model has no stated figure.

## Product Principles

1. **Show the work, link the code.** Every claim should point at something a developer can open and inspect.
2. **AI leads.** Hierarchy and ordering put AI engineering first; other skills read as range.
3. **Talk like a peer.** Write for developers, not buyers: no sales funnels or service-menu language.
4. **Current or absent.** Stale or speculative content (future plans, old roles framed as present) is worse than none.
