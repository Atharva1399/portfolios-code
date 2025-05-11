import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-tech-navy mb-6">
              ABOUT ME
            </h2>
            
            <p className="text-gray-600 text-lg">
              I'm a tech entrepreneur and developer with expertise in AI and Web3 technologies. As a computer science student at MIT ADT, I'm passionate about leveraging emerging tech to solve real-world problems.
            </p>
            
            <p className="text-gray-600">
              I co-founded WeConn, a thriving community for tech professionals that aims to bridge knowledge gaps and foster collaboration in the tech ecosystem. As a Developer Relations professional, I help connect innovative technologies with the developers who can leverage them.
            </p>
            
            <p className="text-gray-600">
              My focus areas include artificial intelligence, machine learning models, and blockchain frameworks - tools that I believe will shape the future of how we interact with technology.
            </p>
          </div>
          
          <div className="bg-tech-gray aspect-square">
            {/* About image would go here */}
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              About Image
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
