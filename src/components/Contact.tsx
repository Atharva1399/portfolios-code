
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, ExternalLink, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import emailjs from 'emailjs-com';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      const templateParams = {
        from_name: values.name,
        from_email: values.email,
        subject: values.subject,
        message: values.message,
      };
      
      await emailjs.send(
        'service_lm5nh8s',
        'template_x620kes',
        templateParams,
        'kauws2DH9dLWoxt6b'
      );
      
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      
      form.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "Failed to send your message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
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
                  <a href="mailto:atharvaagaikwad04@gmail.com" className="text-tech-navy hover:text-tech-blue transition-colors">
                    atharvaagaikwad04@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex-shrink-0 bg-tech-blue/10 text-tech-blue rounded-full flex items-center justify-center">
                  <Linkedin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">LinkedIn</p>
                  <a 
                    href="https://www.linkedin.com/in/atharva-gaikwad-72ba25295/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-tech-navy hover:text-tech-blue transition-colors flex items-center gap-1"
                  >
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
                  <a 
                    href="https://github.com/Atharva1399" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-tech-navy hover:text-tech-blue transition-colors flex items-center gap-1"
                  >
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
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">Your Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" className="w-full" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="john@example.com" className="w-full" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="How can I help you?" className="w-full" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Your message here..." 
                          className="w-full min-h-[150px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button
                  type="submit" 
                  className="w-full bg-tech-blue hover:bg-tech-blue/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
