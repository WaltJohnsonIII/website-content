import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Testimonials } from './components/Testimonials';
import { RelationshipTypes } from './components/RelationshipTypes';
import { HowItWorks } from './components/HowItWorks';
import { Pitfalls } from './components/Pitfalls';
import { Benefits } from './components/Benefits';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Testimonials />
        <RelationshipTypes />
        <HowItWorks />
        <Pitfalls />
        <Benefits />
      </main>
      <Footer />
    </div>
  );
};

export default App;