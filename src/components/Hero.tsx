
import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!parallaxRef.current) return;
      
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      const moveX = mouseX * 20 - 10;
      const moveY = mouseY * 20 - 10;
      
      const imageEl = parallaxRef.current.querySelector('.parallax-image') as HTMLElement;
      const contentEl = parallaxRef.current.querySelector('.parallax-content') as HTMLElement;
      
      if (imageEl) {
        imageEl.style.transform = `translate(${moveX * -0.3}px, ${moveY * -0.3}px)`;
      }
      
      if (contentEl) {
        contentEl.style.transform = `translate(${moveX * 0.1}px, ${moveY * 0.1}px)`;
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Circle Background Elements */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-portfolio-purple/20 rounded-full filter blur-[80px] animate-pulse-soft"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-portfolio-blue/20 rounded-full filter blur-[100px] animate-float"></div>
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-portfolio-pink/20 rounded-full filter blur-[70px] animate-bounce-soft"></div>
      
      <div className="container max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10">
        <div ref={parallaxRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="parallax-content text-center md:text-left md:order-1 order-2 animate-slide-right">
            <h3 className="text-xl md:text-2xl font-medium text-primary mb-2 animate-slide-right">Hello, I'm</h3>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text animate-slide-right" style={{animationDelay: '100ms'}}>
              DEVIKA
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-portfolio-purple to-portfolio-blue rounded-full mb-6 mx-auto md:mx-0 animate-slide-right" style={{animationDelay: '200ms'}}></div>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto md:mx-0 animate-slide-right" style={{animationDelay: '300ms'}}>
              MCA student with a strong foundation in Mathematics, 
              passionate about solving complex problems through 
              computational approaches.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-slide-right" style={{animationDelay: '400ms'}}>
              <button 
                onClick={() => {
                  const element = document.getElementById('projects');
                  if (element) {
                    window.scrollTo({
                      top: element.offsetTop - 80,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="px-8 py-3 bg-gradient-to-r from-portfolio-purple to-portfolio-blue text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                View My Work
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    window.scrollTo({
                      top: element.offsetTop - 80,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="px-8 py-3 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1"
              >
                Contact Me
              </button>
            </div>
          </div>
          
          {/* Image Container */}
          <div className="parallax-image md:order-2 order-1 animate-scale-up flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full glow-border">
              {/* Profile Image */}
              <img
                src="/lovable-uploads/17a1b50f-6960-424f-baf6-66753a4f14e2.png"
                alt="Devika"
                className="w-full h-full object-cover"
              />
              
              {/* Decorative circle elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-portfolio-purple/30 rounded-full animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-portfolio-blue/30 rounded-full animate-bounce-soft"></div>
              
              {/* Animated gradient border handled by the glow-border class */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
