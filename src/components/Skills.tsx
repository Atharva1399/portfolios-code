
import React from 'react';

interface SkillBarProps {
  skill: string;
  percentage: number;
  color?: string;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, percentage, color = 'bg-tech-teal' }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-tech-navy">{skill}</span>
        <span className="text-gray-500 text-sm">{percentage}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className={`skill-progress ${color}`} 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

interface TechItemProps {
  name: string;
  icon?: React.ReactNode;
}

const TechItem: React.FC<TechItemProps> = ({ name, icon }) => {
  return (
    <div className="flex items-center gap-2 bg-tech-gray rounded-full px-4 py-2">
      {icon}
      <span className="text-tech-navy font-medium">{name}</span>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-tech-navy mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-tech-teal mx-auto mb-6"></div>
          <p className="text-gray-600">
            Specialized technical skills built through education, hands-on projects, and professional experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-tech-navy mb-6">
              Core Competencies
            </h3>
            
            <SkillBar skill="Python" percentage={95} />
            <SkillBar skill="Machine Learning" percentage={85} color="bg-tech-blue" />
            <SkillBar skill="Web3 Technologies" percentage={80} color="bg-tech-orange" />
            <SkillBar skill="React.js" percentage={75} />
            <SkillBar skill="Solidity" percentage={70} color="bg-tech-blue" />
          </div>
          
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-tech-navy mb-6">
              Technologies & Tools
            </h3>
            
            <div className="flex flex-wrap gap-3">
              <TechItem name="TensorFlow" />
              <TechItem name="PyTorch" />
              <TechItem name="JavaScript" />
              <TechItem name="Blockchain" />
              <TechItem name="Computer Vision" />
              <TechItem name="React.js" />
              <TechItem name="Web3.js" />
              <TechItem name="Git" />
              <TechItem name="Docker" />
              <TechItem name="Ethereum" />
              <TechItem name="Solidity" />
              <TechItem name="Django" />
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm mt-8">
              <h4 className="text-xl font-semibold text-tech-navy mb-4">
                Services Offered
              </h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-tech-teal rounded-full mt-2 mr-2"></div>
                  <span>AI Agent Development & Integration</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-tech-blue rounded-full mt-2 mr-2"></div>
                  <span>Developer Relations Consulting</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-tech-orange rounded-full mt-2 mr-2"></div>
                  <span>Machine Learning Model Development</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-tech-teal rounded-full mt-2 mr-2"></div>
                  <span>Web3 & Blockchain Integration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
