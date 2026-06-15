'use client';

import { useEffect, useRef } from 'react';

// Theming: Orange and Blue to match the site's brand
const colorRGB = '234, 88, 12'; // Primary Orange (#EA580C)
const accentRGB = '37, 99, 235'; // Accent Blue (#2563EB)

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    // Random size between 8 and 24
    this.size = Math.random() * 16 + 8;
    // Random drift
    this.speedX = Math.random() * 2 - 1;
    // Drift upwards slightly to simulate smoke/energy
    this.speedY = Math.random() * -2 - 0.5;
    this.color = Math.random() > 0.5 ? colorRGB : accentRGB;
    // Start fading
    this.life = 1.0;
    this.decay = Math.random() * 0.02 + 0.015;
  }
  
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.life -= this.decay;
    this.size += 0.3; // Expand slightly as it dissipates
  }
  
  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    // Radial gradient for soft smoke effect
    const gradient = ctx.createRadialGradient(
      this.x, this.y, 0,
      this.x, this.y, this.size
    );
    gradient.addColorStop(0, `rgba(${this.color}, ${this.life * 0.4})`);
    gradient.addColorStop(1, `rgba(${this.color}, 0)`);
    
    ctx.fillStyle = gradient;
    ctx.fill();
  }
}

export default function CursorTrail() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let particles = [];
    let w = window.innerWidth;
    let h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;

    function addParticles(x, y) {
      // Spawn 2-3 particles per event
      for (let i = 0; i < 2; i++) {
        particles.push(new Particle(x, y));
      }
    }

    let lastX = w / 2;
    let lastY = h / 2;

    const onMouseMove = (e) => {
      lastX = e.clientX;
      lastY = e.clientY;
      addParticles(lastX, lastY);
    };

    const onTouchMove = (e) => {
      if (e.touches.length > 0) {
        lastX = e.touches[0].clientX;
        lastY = e.touches[0].clientY;
        addParticles(lastX, lastY);
      }
    };
    
    // Add effect on scroll to leave trail behind the scrolling element
    const onScroll = () => {
      // Spawn particles at the last known cursor position during scrolling
      addParticles(lastX, lastY);
    };

    const onResize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    let animationFrameId;
    function animate() {
      // Clear with slight trailing effect or complete clear
      ctx.clearRect(0, 0, w, h);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw(ctx);
      }
      
      // Remove dead particles
      particles = particles.filter((p) => p.life > 0);
      
      animationFrameId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none', // VERY IMPORTANT: Let clicks pass through!
        zIndex: 9999, // Render on top of everything
      }}
    />
  );
}
