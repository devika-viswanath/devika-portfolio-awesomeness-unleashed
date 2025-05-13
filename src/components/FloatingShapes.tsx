
import React from 'react';

interface FloatingShapesProps {
  className?: string;
}

const FloatingShapes: React.FC<FloatingShapesProps> = ({ className }) => {
  // Create an array of shapes with different properties
  const shapes = [
    { type: 'circle', size: 'w-12 h-12', position: 'top-[15%] left-[10%]', animation: 'animate-float delay-100' },
    { type: 'square', size: 'w-16 h-16', position: 'top-[25%] right-[5%]', animation: 'animate-bounce-soft delay-300' },
    { type: 'triangle', size: 'w-14 h-14', position: 'bottom-[30%] left-[8%]', animation: 'animate-pulse-soft delay-500' },
    { type: 'circle', size: 'w-10 h-10', position: 'bottom-[15%] right-[15%]', animation: 'animate-spin-slow delay-200' },
    { type: 'rectangle', size: 'w-20 h-10', position: 'top-[50%] left-[20%]', animation: 'animate-float delay-700' },
    { type: 'circle', size: 'w-8 h-8', position: 'top-[40%] right-[25%]', animation: 'animate-pulse-soft delay-400' },
    { type: 'hexagon', size: 'w-16 h-16', position: 'bottom-[40%] right-[10%]', animation: 'animate-float delay-600' },
    { type: 'square', size: 'w-12 h-12', position: 'top-[70%] left-[15%]', animation: 'animate-bounce-soft delay-800' }
  ];

  // Render shape based on type
  const renderShape = (type: string, size: string, animation: string) => {
    switch (type) {
      case 'circle':
        return <div className={`rounded-full bg-gradient-to-br from-portfolio-purple/20 to-portfolio-blue/20 ${size} ${animation}`}></div>;
      case 'square':
        return <div className={`rounded-md bg-gradient-to-br from-portfolio-pink/20 to-portfolio-purple/20 ${size} ${animation}`}></div>;
      case 'rectangle':
        return <div className={`rounded-md bg-gradient-to-br from-portfolio-blue/20 to-portfolio-teal/20 ${size} ${animation}`}></div>;
      case 'triangle':
        return <div className={`${size} ${animation} relative`} style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-portfolio-teal/20 to-portfolio-blue/20"></div>
        </div>;
      case 'hexagon':
        return <div className={`${size} ${animation} relative`} style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-portfolio-purple/20 to-portfolio-pink/20"></div>
        </div>;
      default:
        return null;
    }
  };

  return (
    <div className={`fixed inset-0 overflow-hidden pointer-events-none z-[-5] ${className}`}>
      {shapes.map((shape, index) => (
        <div key={index} className={`absolute ${shape.position}`}>
          {renderShape(shape.type, shape.size, shape.animation)}
        </div>
      ))}
    </div>
  );
};

export default FloatingShapes;
