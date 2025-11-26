import React from 'react';
import { Hero } from '../components/Hero';
import { Testimonials } from '../components/Testimonials';
import { RelationshipTypes } from '../components/RelationshipTypes';
import { HowItWorks } from '../components/HowItWorks';
import { Pitfalls } from '../components/Pitfalls';
import { Benefits } from '../components/Benefits';

export const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <Testimonials />
            <RelationshipTypes />
            <HowItWorks />
            <Pitfalls />
            <Benefits />
        </>
    );
};