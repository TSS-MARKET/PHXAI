import React from 'react';
import Hero from '@/components/Hero';
import ParticleBackground from '@/components/ParticleBackground';

const Index: React.FC = () => {
  return (
    <main className="relative overflow-hidden">
      <ParticleBackground />
      <Hero />
    </main>
  );
};

export default Index;
