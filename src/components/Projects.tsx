
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Code } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubLink?: string;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2">
      <div className="h-48 bg-tech-gray flex items-center justify-center">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-tech-dark-gray">Project Image</div>
        )}
      </div>
      
      <div className="p-6">
        <h4 className="text-xl font-semibold text-tech-navy mb-2">
          {project.title}
        </h4>
        
        <p className="text-gray-600 mb-4">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-tech-gray text-sm rounded text-tech-dark-gray"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-3">
          {project.githubLink && (
            <a 
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-tech-navy hover:underline"
            >
              <Github size={14} />
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Brain Tumor Detection Model",
      description: "AI-powered model that uses computer vision to detect brain tumors in MRI scans with high accuracy.",
      tags: ["Python", "TensorFlow", "Computer Vision", "Healthcare"],
      image: "https://i.postimg.cc/Pfv23pqY/Screenshot-2025-04-18-011015.png",
      githubLink: "#"
    }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => 
        project.tags.some(tag => tag.toLowerCase() === filter.toLowerCase())
      );
  
  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-tech-navy mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-tech-teal mx-auto mb-6"></div>
          <p className="text-gray-600">
            Innovative solutions I've built at the intersection of AI and healthcare technology.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <Button 
            onClick={() => setFilter('all')}
            variant={filter === 'all' ? 'default' : 'outline'}
            size="sm"
            className={filter === 'all' ? 'bg-tech-blue' : 'text-tech-navy'}
          >
            All Projects
          </Button>
          <Button 
            onClick={() => setFilter('python')}
            variant={filter === 'python' ? 'default' : 'outline'}
            size="sm"
            className={filter === 'python' ? 'bg-tech-blue' : 'text-tech-navy'}
          >
            Python
          </Button>
          <Button 
            onClick={() => setFilter('healthcare')}
            variant={filter === 'healthcare' ? 'default' : 'outline'}
            size="sm"
            className={filter === 'healthcare' ? 'bg-tech-blue' : 'text-tech-navy'}
          >
            Healthcare
          </Button>
          <Button 
            onClick={() => setFilter('tensorflow')}
            variant={filter === 'tensorflow' ? 'default' : 'outline'}
            size="sm"
            className={filter === 'tensorflow' ? 'bg-tech-blue' : 'text-tech-navy'}
          >
            TensorFlow
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-tech-navy hover:bg-tech-navy/90 inline-flex items-center gap-2">
            <Code size={16} />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
