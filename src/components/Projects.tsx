
import React from 'react';
import { ChevronRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  categories: string[];
  image: string;
  alt: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, categories, image, alt }) => {
  return (
    <div className="group bg-white">
      <div className="overflow-hidden mb-4">
        <div 
          className="w-full aspect-[4/3] bg-tech-gray bg-cover bg-center transform transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${image})` }}
          aria-label={alt}
        />
      </div>
      <h3 className="text-xl font-semibold text-tech-navy">{title}</h3>
      <div className="flex flex-wrap gap-2 mt-2">
        {categories.map((category, index) => (
          <span key={index} className="text-sm text-gray-600">
            {category}{index < categories.length - 1 && ','}
          </span>
        ))}
      </div>
      <a 
        href="#" 
        className="inline-flex items-center mt-3 text-sm font-medium text-tech-navy hover:text-tech-blue"
      >
        View Project
        <ChevronRight size={16} className="ml-1"/>
      </a>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Brain Tumor Detection Model",
      categories: ["AI", "Computer Vision"],
      image: "/placeholder.svg",
      alt: "Brain tumor detection model screenshot"
    },
    {
      id: 2,
      title: "Hyperjin Web3 Framework",
      categories: ["Blockchain", "Web3"],
      image: "/placeholder.svg",
      alt: "Hyperjin framework dashboard" 
    },
    {
      id: 3,
      title: "WeConn Community Platform",
      categories: ["Community", "Platform"],
      image: "/placeholder.svg",
      alt: "WeConn platform interface"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-tech-navy mb-12">
          RECENT PROJECTS
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard 
              key={project.id}
              title={project.title}
              categories={project.categories}
              image={project.image}
              alt={project.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
