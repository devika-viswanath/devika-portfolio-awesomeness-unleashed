
import React, { useEffect, useRef } from 'react';

interface AnimatedBackgroundProps {
  className?: string;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to window size
    const resizeCanvas = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    // Call resize initially
    resizeCanvas();

    // Add event listener for window resize
    window.addEventListener('resize', resizeCanvas);

    // Particles array
    interface Particle {
      x: number;
      y: number;
      radius: number;
      color: string;
      speedX: number;
      speedY: number;
      opacity: number;
    }

    const particles: Particle[] = [];
    const colors = ['#8A2BE2', '#FF69B4', '#1E90FF', '#20B2AA'];
    const particleCount = Math.min(50, Math.floor(window.innerWidth / 30));

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const radius = Math.random() * 4 + 2;
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.7 + 0.3
      });
    }

    // Animation function
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move particles
        p.x += p.speedX;
        p.y += p.speedY;

        // Bounce off walls
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.floor(p.opacity * 255).toString(16).padStart(2, '0');
        ctx.fill();

        // Connect particles with lines if they're close enough
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = p.color + Math.floor((1 - distance / 150) * 50).toString(16).padStart(2, '0');
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed top-0 left-0 w-full h-full -z-10 opacity-50 ${className}`}
    />
  );
};

export default AnimatedBackground;
