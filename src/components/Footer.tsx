
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-portfolio-purple/10 to-portfolio-blue/10 py-10">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold gradient-text">DEVIKA</h3>
            <p className="text-muted-foreground mt-2">MCA Student & Mathematics Enthusiast</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <p className="text-muted-foreground mb-2">© {new Date().getFullYear()} All Rights Reserved</p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
        
        <div className="h-px w-full bg-gradient-to-r from-transparent via-muted-foreground/20 to-transparent my-6"></div>
        
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Twitter</a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">GitHub</a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
