
import React from 'react';

// Minimal retro data model
interface Step {
  year: string;
  title: string;
  description: string;
  tech: string[];
}

const steps: Step[] = [
  {
    title: "Computer Science Foundation",
    year: "2021 – Present",
    description:
      "Started BS in Computer Science at MIT ADT; core focus on algorithms, data structures, and software engineering.",
    tech: ["Java", "C++", "DSA", "Database Design"],
  },
  {
    title: "Full‑Stack Development",
    year: "2022",
    description:
      "Built scalable apps with modern web technologies and clean UI patterns.",
    tech: ["React", "Node.js", "TypeScript", "MongoDB"],
  },
  {
    title: "AI & Machine Learning",
    year: "2023",
    description:
      "Implemented ML models and explored neural networks for real‑world problems.",
    tech: ["Python", "TensorFlow", "PyTorch", "Scikit‑learn"],
  },
  {
    title: "Professional Experience (DevRel)",
    year: "2023 – Present",
    description:
      "Developer Relations: connecting products with communities through content and advocacy.",
    tech: ["DevRel", "Community", "Technical Writing"],
  },
  {
    title: "Entrepreneurship",
    year: "2024",
    description:
      "Co‑founded WeConn – a community platform for tech professionals to collaborate and grow.",
    tech: ["Startup", "Leadership", "Product"],
  },
  {
    title: "Gen AI Developer Intern · TATA Communications",
    year: "Jun 2025 – Jul 2025",
    description:
      "Worked on enterprise Generative AI solutions and integrations across internal platforms.",
    tech: ["Generative AI", "LLMs", "AI Integration"],
  },
  {
    title: "Future Innovations",
    year: "2025+",
    description:
      "Expanding into blockchain and advanced AI applications.",
    tech: ["Blockchain", "Web3", "Advanced AI"],
  },
];

const About = () => {
  // Show most recent first like the reference list
  const rows = [...steps].reverse();

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <header className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            My Learning Journey
          </h2>
          <p className="text-muted-foreground mt-2">
            A compact, scrollable timeline in a retro window – high‑signal, no fluff.
          </p>
        </header>

        <div className="max-w-3xl mx-auto">
          {/* Retro window frame */}
          <div className="border border-border rounded-md bg-card">
            <div className="flex items-center gap-2 px-3 py-2 border-b border-border bg-secondary/20">
              <span className="w-2 h-2 rounded-full bg-primary inline-block" aria-hidden="true" />
              <span className="text-xs sm:text-sm text-foreground/90">Learning • Timeline</span>
            </div>

            {/* Scrollable list */}
            <div className="max-h-[70vh] overflow-y-auto">
              <ul className="divide-y divide-border">
                {rows.map((step, idx) => (
                  <li key={`${step.title}-${idx}`} className="p-3 sm:p-4">
                    <div className="grid grid-cols-[auto,1fr] items-start gap-3 sm:gap-4">
                      {/* Year block */}
                      <div className="rounded-md border border-border bg-background/70 px-2 py-1">
                        <span className="block leading-none text-5xl sm:text-6xl md:text-7xl tracking-tight text-foreground">
                          {step.year}
                        </span>
                      </div>

                      {/* Details */}
                      <div className="space-y-1">
                        <h3 className="text-lg sm:text-xl font-bold text-foreground">{step.title}</h3>
                        <p className="text-muted-foreground text-sm sm:text-base">{step.description}</p>
                        <div className="flex flex-wrap gap-2 pt-1">
                          {step.tech.map((t) => (
                            <span
                              key={t}
                              className="px-2 py-0.5 text-xs sm:text-sm rounded border border-border text-foreground/90"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
