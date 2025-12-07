import React from 'react';
import { Timeline } from '@/components/ui/timeline';

const About = () => {
  const timelineData = [
    {
      title: "2025+",
      content: (
        <div>
          <h4 className="text-foreground font-semibold text-lg mb-2">Future Innovations</h4>
          <p className="text-muted-foreground text-xs md:text-sm font-normal mb-4">
            Expanding into blockchain and advanced AI applications.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Blockchain", "Web3", "Advanced AI"].map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Jun–Jul 2025",
      content: (
        <div>
          <h4 className="text-foreground font-semibold text-lg mb-2">Gen AI Developer Intern · TATA Communications</h4>
          <p className="text-muted-foreground text-xs md:text-sm font-normal mb-4">
            Worked on enterprise Generative AI solutions and integrations across internal platforms.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Generative AI", "LLMs", "AI Integration"].map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <h4 className="text-foreground font-semibold text-lg mb-2">Entrepreneurship</h4>
          <p className="text-muted-foreground text-xs md:text-sm font-normal mb-4">
            Co‑founded WeConn – a community platform for tech professionals to collaborate and grow.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Startup", "Leadership", "Product"].map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "2023–Present",
      content: (
        <div>
          <h4 className="text-foreground font-semibold text-lg mb-2">Professional Experience (DevRel)</h4>
          <p className="text-muted-foreground text-xs md:text-sm font-normal mb-4">
            Developer Relations: connecting products with communities through content and advocacy.
          </p>
          <div className="flex flex-wrap gap-2">
            {["DevRel", "Community", "Technical Writing"].map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <h4 className="text-foreground font-semibold text-lg mb-2">AI & Machine Learning</h4>
          <p className="text-muted-foreground text-xs md:text-sm font-normal mb-4">
            Implemented ML models and explored neural networks for real‑world problems.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Python", "TensorFlow", "PyTorch", "Scikit‑learn"].map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <h4 className="text-foreground font-semibold text-lg mb-2">Full‑Stack Development</h4>
          <p className="text-muted-foreground text-xs md:text-sm font-normal mb-4">
            Built scalable apps with modern web technologies and clean UI patterns.
          </p>
          <div className="flex flex-wrap gap-2">
            {["React", "Node.js", "TypeScript", "MongoDB"].map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "2021–Present",
      content: (
        <div>
          <h4 className="text-foreground font-semibold text-lg mb-2">Computer Science Foundation</h4>
          <p className="text-muted-foreground text-xs md:text-sm font-normal mb-4">
            Started BS in Computer Science at MIT ADT; core focus on algorithms, data structures, and software engineering.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Java", "C++", "DSA", "Database Design"].map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="about" className="bg-background">
      <Timeline data={timelineData} />
    </section>
  );
};

export default About;
