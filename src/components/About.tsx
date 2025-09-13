import React, { useEffect, useRef } from 'react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

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

    // Observe each card
    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const skills = [
    'Mathematics',
    'Problem Solving',
    'Programming',
    'Mathematical Modeling',
    'Data Analysis',
    'OOP',
    'DBMS',
  ];

  return (
    <section id="about" className="py-20 bg-section-pattern relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-white/80 to-transparent z-10"></div>
      
      <div ref={sectionRef} className="container max-w-7xl mx-auto px-4 relative z-20">
        <div className="text-center mb-16 opacity-0" ref={(el) => (cardRefs.current[0] = el)}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-portfolio-purple to-portfolio-blue rounded-full mb-6 mx-auto"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm a dedicated MCA student with a strong foundation in Mathematics. My academic journey has equipped me with
            analytical skills and a passion for solving complex problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="glossy-card rounded-xl p-6 shadow-lg opacity-0" ref={(el) => (cardRefs.current[1] = el)} style={{ animationDelay: '100ms' }}>
            <h3 className="text-2xl font-bold mb-4 text-primary">My Journey</h3>
            <p className="mb-4 text-muted-foreground">
              My academic journey began with a BSc in Mathematics from Kerala University, where I developed a strong foundation in
              mathematical principles and analytical thinking. Currently, I'm pursuing my MCA at RIT Kottayam under APJ Abdul Kalam
              Technological University, expanding my knowledge in computer applications and programming.
            </p>
            <p className="text-muted-foreground">
              I'm particularly interested in the intersection of mathematics and computer science, exploring how mathematical
              concepts can be applied to solve computational problems. My project on the "Mathematical Approach to Rubik's Cube" 
              demonstrates this passion.
            </p>
          </div>

          <div className="glossy-card rounded-xl p-6 shadow-lg opacity-0" ref={(el) => (cardRefs.current[2] = el)} style={{ animationDelay: '200ms' }}>
            <h3 className="text-2xl font-bold mb-4 text-primary">My Skills</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-portfolio-purple to-portfolio-blue rounded-full mr-3"></div>
                  <span className="font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="glossy-card rounded-xl p-6 shadow-lg opacity-0" ref={(el) => (cardRefs.current[3] = el)} style={{ animationDelay: '300ms' }}>
          <h3 className="text-2xl font-bold mb-4 text-center text-primary">What I Bring to the Table</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center p-4">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-portfolio-purple/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-portfolio-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Problem Solving</h4>
              <p className="text-muted-foreground">Applying mathematical principles to solve complex problems efficiently.</p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-portfolio-blue/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-portfolio-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Analytical Thinking</h4>
              <p className="text-muted-foreground">Breaking down complex problems into manageable components.</p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-portfolio-pink/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-portfolio-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Continuous Learning</h4>
              <p className="text-muted-foreground">Always expanding my knowledge and staying current with new technologies.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
