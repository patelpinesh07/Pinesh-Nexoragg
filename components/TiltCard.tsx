
import React, { useState, useRef, ReactNode } from 'react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
  glowColor?: string;
}

const TiltCard: React.FC<TiltCardProps> = ({ 
  children, 
  className = "", 
  intensity = 15,
  glowColor = "rgba(59, 130, 246, 0.15)"
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glow, setGlow] = useState({ x: 0, y: 0, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate mouse position relative to card center
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const centerX = width / 2;
    const centerY = height / 2;

    const rotateY = ((mouseX - centerX) / centerX) * intensity;
    const rotateX = ((centerY - mouseY) / centerY) * intensity;

    setRotate({ x: rotateX, y: rotateY });
    setGlow({ x: mouseX, y: mouseY, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setGlow(prev => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative transition-transform duration-500 ease-out will-change-transform ${className}`}
      style={{
        perspective: "1000px",
        transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
      }}
    >
      {/* Spotlight Effect Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none rounded-[inherit] z-10 transition-opacity duration-500"
        style={{
          opacity: glow.opacity,
          background: `radial-gradient(circle at ${glow.x}px ${glow.y}px, ${glowColor}, transparent 80%)`,
        }}
      />
      
      {/* Border Glow Enhancement */}
      <div 
        className="absolute -inset-[1px] pointer-events-none rounded-[inherit] z-0 transition-opacity duration-500"
        style={{
          opacity: glow.opacity,
          background: `radial-gradient(circle at ${glow.x}px ${glow.y}px, rgba(255,255,255,0.1), transparent 40%)`,
        }}
      />

      <div className="relative z-20 h-full">
        {children}
      </div>
    </div>
  );
};

export default TiltCard;
