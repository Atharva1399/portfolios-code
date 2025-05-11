
import React from 'react';
import { Award, BookOpen, Code } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-tech-navy mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-tech-teal mx-auto mb-6"></div>
          <p className="text-gray-600">
            I'm a tech enthusiast, entrepreneur, and computer science student passionate about building innovative solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-tech-navy">
              My Journey
            </h3>
            
            <p className="text-gray-600">
              As a forward-thinking computer science student at MIT ADT, I've always been fascinated by how technology can solve real-world problems. My journey began with programming experiments that quickly evolved into a passion for building AI-powered solutions.
            </p>
            
            <p className="text-gray-600">
              I co-founded WeConn, a thriving community for tech professionals that aims to bridge knowledge gaps and foster collaboration in the tech ecosystem. As a Developer Relations professional, I help connect innovative technologies with the developers who can leverage them.
            </p>
            
            <p className="text-gray-600">
              My focus areas include artificial intelligence, machine learning models, and blockchain frameworks - tools that I believe will shape the future of how we interact with technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-tech-gray p-6 rounded-lg shadow-sm">
              <BookOpen className="w-10 h-10 text-tech-teal mb-4" />
              <h4 className="text-xl font-semibold text-tech-navy mb-2">Education</h4>
              <p className="text-gray-600">
                Pursuing BS in Computer Science at MIT ADT with focus on artificial intelligence and distributed systems.
              </p>
            </div>
            
            <div className="bg-tech-gray p-6 rounded-lg shadow-sm">
              <Code className="w-10 h-10 text-tech-orange mb-4" />
              <h4 className="text-xl font-semibold text-tech-navy mb-2">Development</h4>
              <p className="text-gray-600">
                Specializing in Python, ML frameworks, and blockchain technologies with a focus on practical applications.
              </p>
            </div>
            
            <div className="bg-tech-gray p-6 rounded-lg shadow-sm md:col-span-2">
              <Award className="w-10 h-10 text-tech-blue mb-4" />
              <h4 className="text-xl font-semibold text-tech-navy mb-2">Entrepreneur</h4>
              <p className="text-gray-600">
                Co-founder of WeConn, bringing together tech professionals and fostering innovation in the developer community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
