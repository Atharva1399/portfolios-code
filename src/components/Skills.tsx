
import React from 'react';

const Skills = () => {
  const skills = [
    'Python', 'Machine Learning', 'React.js', 'Solidity', 'TensorFlow', 
    'PyTorch', 'JavaScript', 'Blockchain', 'Computer Vision', 'Web3.js', 
    'Git', 'Docker', 'Ethereum', 'Django', 'AI Development', 'DevRel',
    'Node.js', 'TypeScript', 'Data Science', 'Smart Contracts'
  ];

  return (
    <section id="skills" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground">
            Specialized technical skills built through education, hands-on projects, and professional experience.
          </p>
        </div>
        
        {/* Horizontal Flowing Skills Animation */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-left whitespace-nowrap">
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="inline-flex items-center px-6 py-3 mx-3 bg-card border border-border rounded text-card-foreground font-mono font-medium"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Second row flowing in opposite direction */}
        <div className="relative overflow-hidden mt-6">
          <div className="flex animate-scroll-right whitespace-nowrap">
            {[...skills.reverse(), ...skills].map((skill, index) => (
              <div
                key={index}
                className="inline-flex items-center px-6 py-3 mx-3 bg-secondary border border-border rounded text-secondary-foreground font-mono font-medium"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-card p-8 rounded border border-border">
            <h3 className="text-2xl font-bold text-card-foreground mb-6 text-center">
              Services Offered
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                <span className="text-card-foreground">AI Agent Development & Integration</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                <span className="text-card-foreground">Developer Relations Consulting</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                <span className="text-card-foreground">Machine Learning Model Development</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                <span className="text-card-foreground">Web3 & Blockchain Integration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
