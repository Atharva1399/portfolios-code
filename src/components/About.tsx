import React from 'react';
import { AnimatedTabs } from '@/components/ui/animated-tabs';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';

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
  // Show most recent first
  const rows = [...steps].reverse();

  const tabs = rows.map((step, idx) => ({
    id: `step-${idx}`,
    label: step.year,
    content: (
      <div className="flex flex-col gap-4 w-full h-full">
        <div className="flex flex-col gap-y-2">
          <h3 className="text-2xl font-bold mb-0 text-white mt-0">
            {step.title}
          </h3>
          <p className="text-sm text-gray-200 mt-2">
            {step.description}
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {step.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-xs rounded-full bg-white/10 text-white/90 border border-white/20"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    ),
  }));

  return (
    <section id="about" className="bg-background">
      <ContainerScroll
        titleComponent={
          <>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              My Learning Journey
            </h2>
            <p className="text-muted-foreground mt-2">
              A timeline of my growth and achievements
            </p>
          </>
        }
      >
        <div className="h-full w-full flex items-center justify-center p-4">
          <AnimatedTabs tabs={tabs} className="max-w-4xl w-full" />
        </div>
      </ContainerScroll>
    </section>
  );
};

export default About;
