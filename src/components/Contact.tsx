
import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-tech-navy mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-tech-teal mx-auto mb-6"></div>
          <p className="text-gray-600">
            Interested in working together? Feel free to reach out for collaborations or just a friendly chat.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-tech-navy mb-6">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex-shrink-0 bg-tech-blue/10 text-tech-blue rounded-full flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a href="mailto:contact@atharvagaikwad.com" className="text-tech-navy hover:text-tech-blue transition-colors">
                    contact@atharvagaikwad.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex-shrink-0 bg-tech-blue/10 text-tech-blue rounded-full flex items-center justify-center">
                  <Linkedin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">LinkedIn</p>
                  <a href="#" className="text-tech-navy hover:text-tech-blue transition-colors flex items-center gap-1">
                    Atharva Gaikwad
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex-shrink-0 bg-tech-blue/10 text-tech-blue rounded-full flex items-center justify-center">
                  <Github size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">GitHub</p>
                  <a href="#" className="text-tech-navy hover:text-tech-blue transition-colors flex items-center gap-1">
                    atharva-gaikwad
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="font-semibold text-tech-navy mb-4">
                Connect With Me
              </h4>
              <p className="text-gray-600 mb-6">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <Input 
                  id="name" 
                  name="name" 
                  placeholder="John Doe" 
                  className="w-full"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700">
                  Subject
                </label>
                <Input 
                  id="subject" 
                  name="subject" 
                  placeholder="How can I help you?" 
                  className="w-full"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  name="message" 
                  placeholder="Your message here..." 
                  className="w-full min-h-[150px]"
                  required
                />
              </div>
              
              <Button
                type="submit" 
                className="w-full bg-tech-blue hover:bg-tech-blue/90"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
