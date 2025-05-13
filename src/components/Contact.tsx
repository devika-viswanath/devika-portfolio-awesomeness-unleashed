
import React, { useEffect, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-scale-up');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe the section
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation would go here
    
    // Show success toast (in a real app, this would happen after API call)
    toast({
      title: "Message Sent!",
      description: "Thank you for getting in touch. I'll respond as soon as possible.",
      variant: "default",
    });
    
    // Reset form
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-portfolio-lavender/40 rounded-full filter blur-[120px] -z-10"></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-portfolio-blue/20 rounded-full filter blur-[80px] -z-10"></div>
      
      <div ref={sectionRef} className="container max-w-7xl mx-auto px-4 opacity-0">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Get In Touch</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-portfolio-purple to-portfolio-blue rounded-full mb-6 mx-auto"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out if you have any questions or would like to collaborate on a project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact form */}
          <div className="glossy-card rounded-xl p-6 shadow-lg order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-6 text-primary">Send Me a Message</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium block">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium block">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium block">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium block">Your Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-portfolio-purple to-portfolio-blue text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact info */}
          <div className="order-1 md:order-2">
            <div className="glossy-card rounded-xl p-6 shadow-lg mb-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-portfolio-purple/10 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-portfolio-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Email</h4>
                    <p className="text-muted-foreground">devika.portfolio@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-portfolio-blue/10 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-portfolio-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Location</h4>
                    <p className="text-muted-foreground">Kerala, India</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-portfolio-pink/10 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-portfolio-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Working Hours</h4>
                    <p className="text-muted-foreground">Monday - Friday: 9am - 6pm</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glossy-card rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-primary">Connect With Me</h3>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full bg-[#1DA1F2]/10 flex items-center justify-center hover:bg-[#1DA1F2]/20 transition-colors"
                  aria-label="Twitter"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1DA1F2]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full bg-[#0077B5]/10 flex items-center justify-center hover:bg-[#0077B5]/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#0077B5]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full bg-[#333]/10 flex items-center justify-center hover:bg-[#333]/20 transition-colors"
                  aria-label="GitHub"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#333]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full bg-[#E4405F]/10 flex items-center justify-center hover:bg-[#E4405F]/20 transition-colors"
                  aria-label="Instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#E4405F]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
