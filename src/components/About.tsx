
import React from 'react';
import { GraduationCap, Code, Briefcase, Trophy, Lightbulb, Rocket } from 'lucide-react';

const About = () => {
  const roadmapSteps = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Computer Science Foundation",
      year: "2021-Present",
      description: "Started BS in Computer Science at MIT ADT, building strong fundamentals in algorithms, data structures, and software engineering.",
      tech: ["Java", "C++", "DSA", "Database Design"]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full-Stack Development",
      year: "2022",
      description: "Mastered modern web technologies and frameworks to build scalable applications with beautiful user interfaces.",
      tech: ["React", "Node.js", "TypeScript", "MongoDB"]
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "AI & Machine Learning",
      year: "2023",
      description: "Dove deep into artificial intelligence, implementing ML models and exploring the potential of neural networks.",
      tech: ["Python", "TensorFlow", "PyTorch", "Scikit-learn"]
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Professional Experience",
      year: "2023-Present",
      description: "Working as Developer Relations professional, bridging the gap between complex technologies and developer communities.",
      tech: ["DevRel", "Community Building", "Technical Writing"]
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Entrepreneurship",
      year: "2024",
      description: "Co-founded WeConn, creating a thriving community platform for tech professionals to collaborate and grow.",
      tech: ["Startup", "Leadership", "Product Development"]
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Future Innovations",
      year: "2025+",
      description: "Focusing on blockchain technologies and advanced AI applications to shape the future of technology.",
      tech: ["Blockchain", "Web3", "Advanced AI", "Innovation"]
    }
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-mono font-bold text-foreground mb-6">
            My Learning Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent via-primary to-accent mx-auto mb-8 rounded-full shadow-lg shadow-accent/50"></div>
          <p className="text-lg text-muted-foreground font-medium">
            From curious student to tech entrepreneur - here's how I've evolved through code, innovation, and community building.
          </p>
        </div>
        
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-accent via-primary to-accent h-full rounded-full shadow-lg shadow-accent/30"></div>
          
          {/* Roadmap Steps */}
          <div className="space-y-16">
            {roadmapSteps.map((step, index) => (
              <div 
                key={index}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} group`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl hover:shadow-accent/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
                    <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                      <div className="p-3 bg-gradient-to-br from-accent to-primary rounded-lg text-background shadow-lg shadow-accent/30 transform transition-transform duration-300 group-hover:rotate-12">
                        {step.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-mono font-bold text-foreground">{step.title}</h3>
                        <span className="text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                          {step.year}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                      {step.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 text-xs font-mono font-bold bg-gradient-to-r from-primary/20 to-accent/20 text-foreground rounded-full border border-primary/30 shadow-sm hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:scale-110"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Timeline Node */}
                <div className="relative w-2/12 flex justify-center">
                  <div className="w-6 h-6 bg-gradient-to-br from-accent to-primary rounded-full border-4 border-background shadow-lg shadow-accent/50 transform transition-all duration-500 group-hover:scale-150 group-hover:shadow-2xl group-hover:shadow-accent/60 z-10">
                    <div className="absolute inset-1 bg-gradient-to-br from-background to-card rounded-full animate-pulse"></div>
                  </div>
                  
                  {/* 3D Floating Animation */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-sm animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
                
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
