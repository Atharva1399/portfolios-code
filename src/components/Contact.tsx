
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="section-padding bg-tech-navy text-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            GET IN TOUCH
          </h2>
          
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">
                  Your Name
                </label>
                <Input 
                  id="name" 
                  name="name" 
                  placeholder="John Doe" 
                  className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">
                  Email Address
                </label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                  Subject
                </label>
                <Input 
                  id="subject" 
                  name="subject" 
                  placeholder="How can I help you?" 
                  className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  name="message" 
                  placeholder="Your message here..." 
                  className="w-full min-h-[220px] bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  required
                />
              </div>
              
              <Button
                type="submit" 
                className="w-full bg-white text-tech-navy hover:bg-white/90 rounded-none px-6"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
