# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The primary audience is the developer community: engineers, builders and the DevRel audience who find Atharva through GitHub, LinkedIn, talks or posts. They arrive curious, often from a link, and want to know quickly what Atharva builds, whether it's real, and where to follow or reach them. Recruiters and potential clients may also visit, but the site is not optimised for them.

## Product Purpose

A personal portfolio for Atharva Gaikwad. It exists to establish credibility with fellow developers: show real work, make the code inspectable, and make it easy to connect (GitHub, LinkedIn, email, contact form). Success means a visiting developer leaves understanding what Atharva works on, having opened at least one repo or social link.

## Positioning

**An AI engineer first.** Generative AI, LLMs, RAG and multi-agent systems lead the story. Full-stack, DevRel and **Web3 are clearly secondary range** (confirmed Oct 2026: Web3 projects and skills appear, but never as a co-headline).

## Operating Context

- Single-page site, visited mostly from links shared in developer spaces; often on mobile.
- Visitors verify claims by clicking through to GitHub repositories.
- Contact happens via email, LinkedIn, GitHub, or the on-site form (EmailJS).

## Capabilities and Constraints

- Stack: Vite + React 18 + TypeScript + Tailwind + shadcn/ui, with framer-motion. Scaffolded with Lovable. Dev server on port 8080.
- Content lives in `src/data/portfolio.ts`. Sections: Hero, About, Work (AI projects plus a secondary Web3/side-builds row), Stack, Journey (experience, achievements, certifications), Contact.
- Contact form sends through EmailJS (service, template and public key are hard-coded in `src/components/Contact.tsx`).
- The Services/freelance section was dropped (Oct 2026).
- Public contact (confirmed Oct 2026): email, GitHub, LinkedIn, and Medium once its URL is supplied (`profile.medium`). The phone number stays off the site.
- **Open:** Medium URL; repo URLs for AI Support Desk, Email Analyzer, EkMat, VestaFi and Herb Traceability (these link to the GitHub profile until supplied).

## Brand Commitments

- Name: Atharva Gaikwad, with the "AG" monogram in the header. The "Atharva.dev" wordmark was removed at Atharva's request (Oct 2026); do not reintroduce it.
- Hero voice: "Hey, I'm Atharva, your friendly neighborhood tech guy." Friendly, informal and first-person.

## Evidence on Hand

- Source of truth: Atharva's resume (Oct 2026), which supersedes the older site timeline.
- Education: B.Tech CSE, MIT ADT University, Pune (Aug 2023 – Jul 2027), CGPA 8.13.
- Experience: GenAI Intern, Tata Communications (May – Jun 2025); Co-founder & DevRel, WeConn (Mar – Nov 2025).
- AI projects: AI Support Desk (multi-agent RAG), Email Analyzer & Report Generator, Brain Tumor Detection with YOLOv8 (github.com/Atharva1399/brain-tumor-detector), DaClean (github.com/Atharva1399/DaClean), AutoViron (github.com/Atharva1399/autoviron), AI agent-based learning environment.
- Web3 projects: EkMat (ZK-SNARK voting), Fundora (github.com/FundoraInvoice/Fundora-Invoices), VestaFi, Ayurvedic Herb Traceability (Polygon + IPFS).
- Achievements: Top 50 grand finalist, VOIS 2026 Innovation Hackathon; led teams to Smart India Hackathon Round 2 twice. Certifications from Meta, Reliance, Microsoft and Cisco. Clubs: Mirage AR/VR, AWS Cloud Club.
- Photo: `src/assets/atharva.jpg` (supplied by Atharva) and its keyed cutout `src/assets/atharva-cutout.png`.
- Links: GitHub github.com/Atharva1399, LinkedIn linkedin.com/in/atharva-gaikwad-72ba25295, email atharvaagaikwad04@gmail.com.
- **Absent:** testimonials, metrics, star counts, press, project screenshots. Do not fabricate any.

## Product Principles

1. **Show the work, link the code.** Every claim should point at something a developer can open and inspect.
2. **AI leads.** Hierarchy and ordering put AI engineering first; other skills read as range.
3. **Talk like a peer.** Write for developers, not buyers: no sales funnels or service-menu language.
4. **Current or absent.** Stale or speculative content (future plans, old roles framed as present) is worse than none.
