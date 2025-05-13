
import React, { useEffect, useRef, useState } from 'react';

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

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

    // Observe each project
    projectRefs.current.forEach((project) => {
      if (project) observer.observe(project);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const projects = [
    {
      title: "Mathematical Approach to Rubik's Cube",
      description: "Developed a comprehensive mathematical model to understand and solve Rubik's Cube puzzles using group theory and algorithms. Implemented solution algorithms based on mathematical principles.",
      technologies: ["Group Theory", "Algorithms", "Mathematical Modeling", "Computational Theory"],
      // Using a more reliable image URL with a direct image of a Rubik's cube
      image: "https://images.unsplash.com/photo-1591991564021-0662a6dd442e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80",
      details: [
        "Applied group theory to analyze the structure and properties of the Rubik's Cube",
        "Developed mathematical models to represent the cube's state and transformations",
        "Implemented algorithms for solving the cube based on mathematical principles",
        "Analyzed the efficiency and complexity of different solving methods",
        "Created visualizations to demonstrate the mathematical concepts behind the cube"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-section-pattern relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-white/80 to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-white/80 to-transparent z-10"></div>
      
      <div ref={sectionRef} className="container max-w-7xl mx-auto px-4 relative z-20">
        <div className="text-center mb-16 opacity-0" ref={(el) => (projectRefs.current[0] = el)}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">My Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-portfolio-purple to-portfolio-blue rounded-full mb-6 mx-auto"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in mathematics and computer applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="glossy-card rounded-xl overflow-hidden shadow-lg card-hover opacity-0"
              ref={(el) => (projectRefs.current[index + 1] = el)}
              style={{ animationDelay: `${index * 150}ms` }}
              onClick={() => setSelectedProject(index)}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  onError={(e) => {
                    console.error("Image failed to load:", project.image);
                    e.currentTarget.src = "https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80";
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span 
                      key={i}
                      className="text-xs px-2 py-1 rounded-full bg-portfolio-lavender text-portfolio-purple"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs px-2 py-1 rounded-full bg-portfolio-lavender text-portfolio-purple">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                <button 
                  className="text-primary font-medium hover:underline"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(index);
                  }}
                >
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Project Details Modal */}
        {selectedProject !== null && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div 
              className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-zoom-in"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-64 relative">
                <img 
                  src={projects[selectedProject].image} 
                  alt={projects[selectedProject].title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80";
                  }}
                />
                <button 
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center text-gray-800 hover:bg-white transition-colors"
                  onClick={() => setSelectedProject(null)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3">{projects[selectedProject].title}</h2>
                <p className="text-muted-foreground mb-6">
                  {projects[selectedProject].description}
                </p>
                
                <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  {projects[selectedProject].details.map((detail, idx) => (
                    <li key={idx} className="text-muted-foreground">{detail}</li>
                  ))}
                </ul>
                
                <h3 className="text-xl font-semibold mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[selectedProject].technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="text-sm px-3 py-1 rounded-full bg-portfolio-lavender text-portfolio-purple"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-end">
                  <button 
                    className="px-6 py-2 bg-gradient-to-r from-portfolio-purple to-portfolio-blue text-white rounded-full hover:shadow-lg transition-all duration-300"
                    onClick={() => setSelectedProject(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
