# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, confirmed Nov 2026. **Hiring teams for technical-writing and content-engineering roles** (for example a product-docs team working on GenAI tooling) screen for a writing sample plus a coding or GenAI project, and value clear, concise, fact-based English, topic-based docs, Markdown and docs-as-code, RAG and semantic search, and awareness of AI failure modes such as hallucination. The second audience is the developer community: engineers, builders and the DevRel audience who find Atharva through GitHub, LinkedIn, talks or posts. They arrive curious, often from a link, and want to know quickly what Atharva builds, whether it's real, and where to follow or reach them. Recruiters and potential clients may also visit, but the site is not optimised for them.

## Product Purpose

A personal portfolio for Atharva Gaikwad. It exists to establish credibility with fellow developers: show real work, make the code inspectable, and make it easy to connect (GitHub, LinkedIn, email, contact form). Success means a visiting developer leaves understanding what Atharva works on, having opened at least one repo or social link.

## Positioning

**An engineer who writes about and builds GenAI systems** (Nov 2026). Writing proof (articles, research, documentation samples) now sits beside the builds: "a strong writer who understands technology", not a coder who happens to write. Generative AI, LLMs, RAG and multi-agent systems remain the subject matter. Full-stack, DevRel and **Web3 are clearly secondary range** (confirmed Oct 2026: Web3 projects and skills appear, but never as a co-headline).

## Operating Context

- Single-page site, visited mostly from links shared in developer spaces; often on mobile.
- Visitors verify claims by clicking through to GitHub repositories.
- Contact happens via email, LinkedIn, GitHub, or the on-site form (EmailJS).

## Capabilities and Constraints

- Stack: Vite + React 18 + TypeScript + Tailwind + shadcn/ui, with framer-motion. Scaffolded with Lovable. Dev server on port 8080.
- Routes: `/` (Hero, About, Selected writing, Projects preview, Stack, Experience, Contact), `/writing` (Articles, Research, Documentation samples), `/projects` (four case studies plus More projects), `/docs/:slug`.
- Content: `src/data/portfolio.ts` (profile, case studies, experience), `src/data/writing.ts` (articles, research), `src/data/seo.ts` (page titles and descriptions), and Markdown docs in `/docs` (docs-as-code; "Edit on GitHub" links point at `main`).
- **Atharva writes all narrative copy.** Articles, guides, case-study text and intros stay as `[WRITE: …]` / `[ADD: …]` slots until Atharva fills them; never write them on Atharva's behalf. `npm run build` reports how many remain.
- `npm run build` also writes per-route HTML with each page's title, description and Open Graph tags (build/route-meta.ts). Set `SITE_URL` in src/data/seo.ts to add og:url and canonical links.
- Contact form sends through EmailJS (service, template and public key are hard-coded in `src/components/Contact.tsx`).
- The Services/freelance section was dropped (Oct 2026).
- Public contact (confirmed Oct 2026): email, GitHub, LinkedIn, and Medium (https://medium.com/@athguy.dev). The phone number stays off the site.
- Articles come from the Medium RSS feed (https://medium.com/feed/@athguy.dev), **tech posts only** (confirmed Nov 2026): political pieces stay on Medium and are not listed. Titles, dates, reading time and links are copied from the feed into `src/data/writing.ts`; one-line summaries stay `[WRITE]` slots for Atharva.
- **Open:** production site URL; research PDF/preprint link; GitHub and demo links for the four case studies; ActualOne dates; one-line summaries for the seven articles.

## Brand Commitments

- Name: Atharva Gaikwad, with the "AG" monogram in the header. The "Atharva.dev" wordmark was removed at Atharva's request (Oct 2026); do not reintroduce it.
- Hero voice: "Hey, I'm Atharva, your friendly neighborhood tech guy." Friendly, informal and first-person.

## Evidence on Hand

- Source of truth: Atharva's resume (Oct 2026), which supersedes the older site timeline.
- Education: B.Tech CSE, MIT ADT University, Pune (Aug 2023 – Jul 2027), CGPA 8.13.
- Experience: GenAI Intern, Tata Communications (May – Jun 2025); Co-founder & DevRel, WeConn (Mar – Nov 2025); DevRel, ActualOne, a Web3 events company (dates to be supplied).
- Case-study metrics (confirmed Nov 2026): LLM-assisted hybrid search cut median latency 46% (5.4 s → 2.9 s) and irrelevant top-10 results by 22%. Auralis supports 22 Indian languages, reaches a 2.06 s median time to first audio on an RTX 3050 Ti (4 GB), and has 4 merged commits.
- Research: an IEEE-format paper on the Auralis voice-consent safeguard: 2,080 speaker-verification trials, 0.08% EER, and cloned voices could bypass it.
- AI projects: AI Support Desk (multi-agent RAG), Email Analyzer & Report Generator, Brain Tumor Detection with YOLOv8 (github.com/Atharva1399/brain-tumor-detector), DaClean (github.com/Atharva1399/DaClean), AutoViron (github.com/Atharva1399/autoviron), AI agent-based learning environment.
- Web3 projects: EkMat (ZK-SNARK voting), Fundora (github.com/FundoraInvoice/Fundora-Invoices), VestaFi, Ayurvedic Herb Traceability (Polygon + IPFS).
- Achievements: Top 50 grand finalist, VOIS 2026 Innovation Hackathon; led teams to Smart India Hackathon Round 2 twice. Certifications from Meta, Reliance, Microsoft and Cisco. Clubs: Mirage AR/VR, AWS Cloud Club.
- Photo: `src/assets/atharva.jpg` (supplied by Atharva) and its keyed cutout `src/assets/atharva-cutout.png`.
- Links: GitHub github.com/Atharva1399, LinkedIn linkedin.com/in/atharva-gaikwad-72ba25295, email atharvaagaikwad04@gmail.com.
- **Absent:** testimonials, metrics, star counts, press, project screenshots. Do not fabricate any.

## Product Principles

1. **Show the work, link the code.** Every claim should point at something a developer can open and inspect.
2. **Writing is proof.** Every build should be paired with writing about it: a case study, a doc or an article.
3. **Talk like a peer.** Write for developers, not buyers: no sales funnels or service-menu language.
4. **Current or absent.** Stale or speculative content (future plans, old roles framed as present) is worse than none.
