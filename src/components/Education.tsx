
import React, { useEffect, useRef } from 'react';

const Education: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-right');
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

    // Observe each timeline item
    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "RIT Kottayam",
      university: "APJ Abdul Kalam Technological University",
      period: "2022 - Present",
      description: "Currently pursuing MCA with focus on advanced programming, data structures, and software development principles."
    },
    {
      degree: "Bachelor of Science in Mathematics",
      institution: "Kerala University",
      period: "2019 - 2022",
      description: "Completed BSc in Mathematics with distinction, focusing on pure and applied mathematics, including calculus, algebra, and mathematical modeling."
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      {/* Background shapes */}
      <div className="absolute top-1/4 left-1/5 w-72 h-72 bg-portfolio-lavender rounded-full opacity-30 filter blur-[80px] animate-float"></div>
      <div className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-portfolio-blue/10 rounded-full opacity-40 filter blur-[90px] animate-pulse-soft"></div>
      
      <div ref={sectionRef} className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16 opacity-0" ref={(el) => (itemRefs.current[0] = el)}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">My Education</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-portfolio-purple to-portfolio-blue rounded-full mb-6 mx-auto"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey has provided me with a strong foundation in mathematics and computer applications.
          </p>
        </div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-1 bg-gradient-to-b from-portfolio-purple to-portfolio-blue rounded-full"></div>
          
          {/* Education items */}
          {education.map((edu, index) => (
            <div 
              key={index}
              className={`mb-12 relative opacity-0 ${index % 2 === 0 ? 'md:pl-10 md:pr-0' : 'md:pr-10 md:pl-0'} pl-10`}
              ref={(el) => (itemRefs.current[index + 1] = el)}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'} relative`}>
                {/* Timeline dot */}
                <div className="absolute left-[-20px] md:left-auto md:right-auto md:top-4 top-4 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg z-10 md:transform md:translate-x-1/2" style={{
                  [index % 2 === 0 ? 'md:left' : 'md:right']: '50%'
                }}>
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-portfolio-purple to-portfolio-blue animate-pulse-soft"></div>
                </div>
                
                {/* Content card */}
                <div className={`glossy-card w-full md:w-[90%] p-6 rounded-xl shadow-lg ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                  <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-portfolio-lavender text-portfolio-purple mb-3">
                    {edu.period}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{edu.degree}</h3>
                  <h4 className="text-lg font-medium text-primary mb-2">{edu.institution}</h4>
                  {edu.university && <h5 className="text-md font-medium text-muted-foreground mb-3">{edu.university}</h5>}
                  <p className="text-muted-foreground">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
