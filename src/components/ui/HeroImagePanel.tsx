import React from 'react';

interface HeroImagePanelProps {
  imageSrc: string;
  alt: string;
  className?: string;
}

export function HeroImagePanel({ imageSrc, alt, className = '' }: HeroImagePanelProps) {
  return (
    <div className={`relative overflow-hidden rounded-3xl w-full h-full min-h-[360px] lg:min-h-[520px] shadow-2xl ${className}`}>
      <img 
        src={imageSrc} 
        alt={alt} 
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
    </div>
  );
}
