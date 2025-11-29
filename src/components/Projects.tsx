
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Code } from 'lucide-react';
import { GlowingEffect } from '@/components/ui/glowing-effect';

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
    <div className="relative">
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={2}
      />
      <div className="bg-card rounded-lg overflow-hidden border border-border transition-transform duration-300 hover:-translate-y-2">
        <div className="h-48 bg-muted flex items-center justify-center">
          {project.image ? (
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-muted-foreground">Project Image</div>
          )}
        </div>
        
        <div className="p-6">
          <h4 className="text-xl font-semibold text-card-foreground mb-2">
            {project.title}
          </h4>
          
          <p className="text-muted-foreground mb-4">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-secondary text-sm rounded text-secondary-foreground"
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
      githubLink: "https://github.com/Atharva1399/brain-tumor-detector"
    },
    {
      id: 2,
      title: "Fundora",
      description: "Fundora empowers small and medium-sized enterprises (SMEs) to turn unpaid invoices into instant liquidity. By leveraging blockchain technology, we tokenize invoices as NFTs and connect them to DeFi liquidity pools, enabling fast, transparent, and cost-effective financing — all on the Base network.",
      tags: ["Blockchain", "DeFi", "Web3", "Finance"],
      image: "https://i.postimg.cc/N0s9hFgc/Screenshot-2025-05-19-200205.png",
      githubLink: "https://github.com/FundoraInvoice/Fundora-Invoices"
    },
    {
      id: 3,
      title: "Autoviron",
      description: "A Python package that automatically detects dependencies and creates a virtual environment for it, streamlining the development setup process.",
      tags: ["Python", "Package", "Dependencies", "DevTools"],
      image: "",
      githubLink: "https://github.com/Atharva1399/autoviron"
    },
    {
      id: 4,
      title: "DaClean",
      description: "DaClean is an intelligent, extensible, and user-friendly Python package designed to automate and supercharge your data cleaning workflows. Whether you're a data scientist, analyst, or developer, DaClean helps you prepare high-quality data with confidence and transparency.",
      tags: ["Python", "Data Science", "Machine Learning", "Package"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      githubLink: "https://github.com/Atharva1399/DaClean"
    }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => 
        project.tags.some(tag => tag.toLowerCase() === filter.toLowerCase())
      );
  
  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground">
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
          <Button 
            onClick={() => setFilter('blockchain')}
            variant={filter === 'blockchain' ? 'default' : 'outline'}
            size="sm"
            className={filter === 'blockchain' ? 'bg-tech-blue' : 'text-tech-navy'}
          >
            Blockchain
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
