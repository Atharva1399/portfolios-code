import React from 'react';
import { MorphingCardStack, CardData } from '@/components/ui/morphing-card-stack';
import { Brain, Coins, Package, Database, Github } from 'lucide-react';

const Projects = () => {
  const projectCards: CardData[] = [
    {
      id: "1",
      title: "Brain Tumor Detection Model",
      description: "AI-powered model that uses computer vision to detect brain tumors in MRI scans with high accuracy. Built with Python, TensorFlow, and advanced computer vision techniques for healthcare applications.",
      icon: <Brain className="h-5 w-5" />,
    },
    {
      id: "2",
      title: "Fundora",
      description: "Empowers SMEs to turn unpaid invoices into instant liquidity using blockchain technology. Tokenizes invoices as NFTs and connects them to DeFi liquidity pools on the Base network.",
      icon: <Coins className="h-5 w-5" />,
    },
    {
      id: "3",
      title: "Autoviron",
      description: "A Python package that automatically detects dependencies and creates a virtual environment, streamlining the development setup process for Python projects.",
      icon: <Package className="h-5 w-5" />,
    },
    {
      id: "4",
      title: "DaClean",
      description: "An intelligent, extensible Python package designed to automate and supercharge your data cleaning workflows. Helps prepare high-quality data with confidence and transparency.",
      icon: <Database className="h-5 w-5" />,
    }
  ];

  const handleCardClick = (card: CardData) => {
    const githubLinks: Record<string, string> = {
      "1": "https://github.com/Atharva1399/brain-tumor-detector",
      "2": "https://github.com/FundoraInvoice/Fundora-Invoices",
      "3": "https://github.com/Atharva1399/autoviron",
      "4": "https://github.com/Atharva1399/DaClean",
    };
    
    if (githubLinks[card.id]) {
      window.open(githubLinks[card.id], '_blank', 'noopener,noreferrer');
    }
  };
  
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
        
        <MorphingCardStack 
          cards={projectCards} 
          defaultLayout="stack"
          onCardClick={handleCardClick}
        />
        
        <div className="text-center mt-8">
          <a 
            href="https://github.com/Atharva1399" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Github size={16} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
