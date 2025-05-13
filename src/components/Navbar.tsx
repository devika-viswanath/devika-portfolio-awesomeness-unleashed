
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        scrolled ? 'py-3 bg-white/80 shadow-md backdrop-blur-md' : 'py-5 bg-transparent',
        className
      )}
    >
      <div className="container max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="text-2xl font-bold gradient-text cursor-pointer"
          onClick={() => scrollToSection('hero')}
        >
          DEVIKA
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection('about')}
            className="nav-link"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('education')}
            className="nav-link"
          >
            Education
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="nav-link"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="nav-link"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-foreground p-2 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1">
            <span className={`block h-0.5 bg-primary transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block h-0.5 bg-primary transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 bg-primary transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </button>

        {/* Mobile Menu */}
        <div 
          className={`fixed inset-0 bg-white z-40 transition-all duration-300 pt-20 px-6 md:hidden ${
            mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="flex flex-col gap-6 items-center">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-xl nav-link"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('education')}
              className="text-xl nav-link"
            >
              Education
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-xl nav-link"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-xl nav-link"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
