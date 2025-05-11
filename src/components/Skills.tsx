
import React from 'react';

interface SkillItemProps {
  year: string;
  title: string;
  skills: string[];
}

const SkillItem: React.FC<SkillItemProps> = ({ year, title, skills }) => {
  return (
    <div className="flex gap-6 items-start mb-12">
      <div className="w-20 flex-shrink-0">
        <img src="/placeholder.svg" alt="Skill icon" className="w-16 h-auto" />
      </div>
      
      <div className="flex-1 border-b border-gray-200 pb-6">
        <div className="mb-2 text-sm text-gray-500">{year}</div>
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span key={index} className="text-xs bg-gray-100 px-2 py-1">
              • {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      year: "2019-24",
      title: "AI & Machine Learning",
      skills: ["Python", "TensorFlow", "PyTorch", "Computer Vision", "NLP", "Deep Learning"]
    },
    {
      id: 2,
      year: "2020-24",
      title: "Web3 Development",
      skills: ["Solidity", "Smart Contracts", "Blockchain", "Ethereum", "DApps", "Web3.js"]
    },
    {
      id: 3,
      year: "2022-24",
      title: "Project Management",
      skills: ["Notion", "Google Tasks", "Trello", "Microsoft To Do", "JIRA", "Agile"]
    }
  ];
  
  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-tech-navy mb-12">
          EXPERIENCE & SKILLS
        </h2>
        
        <div className="mt-10">
          {skillCategories.map(category => (
            <SkillItem 
              key={category.id}
              year={category.year}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
        
        <div className="mt-20">
          <h2 className="text-4xl md:text-5xl font-bold text-tech-navy mb-12">
            MY WORKSTATION
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-tech-gray aspect-square"></div>
            <div className="bg-tech-gray aspect-square"></div>
            <div className="bg-tech-gray aspect-square"></div>
            <div className="bg-tech-gray aspect-square"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
