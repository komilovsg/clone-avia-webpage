// components/ParallaxSection.tsx

import React from 'react';

interface ParallaxSectionProps {
  imageUrl: string;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ imageUrl }) => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-gray-900 opacity-50" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        <h1 className="text-4xl font-bold">Добро пожаловать в мир параллакса</h1>
        <p className="mt-4 text-lg">Здесь ваш контент с эффектом параллакса</p>
      </div>
    </div>
  );
};

export default ParallaxSection;
