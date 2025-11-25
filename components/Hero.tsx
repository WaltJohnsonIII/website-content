import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
    return (
        <div className="relative bg-gradient-to-b from-cyan-100 via-cyan-200/50 to-white pb-20 pt-16 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
                    Relationships can be hard
                </h1>
                <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-10">
                    AlignSynch makes it easier
                </h2>

                <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-md shadow-lg transition transform hover:-translate-y-0.5 mb-8">
                    Choose a Relationship Type
                </button>

                <div className="max-w-3xl mx-auto text-center mb-16">
                    <p className="text-cyan-700 font-medium text-sm md:text-base leading-relaxed">
                        The key concept:<br />
                        To know the feelings and handle the expectations of other people,<br />
                        enhancing both your professional and private relationships.
                    </p>
                    <p className="text-cyan-600 mt-4 text-sm md:text-base">
                        Use our AlignSynch tool to uncover gaps in those Understandings and Expectations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 max-w-5xl mx-auto">
                    {/* Business Side */}
                    <CarouselColumn 
                        title="Align Your Business Life"
                        items={[
                            "Customer, Vendor, Staff, Manager",
                            "Teammate, Business Partner",
                            "Tenant, Investor, Teacher",
                            "Caregiver, etc..."
                        ]}
                    />

                    {/* Personal Side */}
                    <CarouselColumn 
                        title="Synch Your Personal Life"
                        items={[
                            "Spouse, Friend, Sibling, Date",
                            "Boyfriend, Partner, Girlfriend",
                            "Parent, Child, Neighbor",
                            "Grandparent, etc..."
                        ]}
                    />
                </div>
            </div>
        </div>
    );
};

interface CarouselColumnProps {
    title: string;
    items: string[];
}

const CarouselColumn: React.FC<CarouselColumnProps> = ({ title, items }) => {
    // Simple visual representation of carousel, non-functional for demo purposes as content is static
    // Ideally this would cycle through items.
    
    // Splitting title for styling
    const titleParts = title.split(' ');
    const firstPart = titleParts[0]; // Align or Synch
    const midPart = titleParts[1]; // Your
    const lastPart = titleParts.slice(2).join(' '); // Business Life or Personal Life

    return (
        <div className="flex flex-col items-center">
            <h3 className="text-3xl md:text-4xl text-slate-900 leading-tight mb-4">
                <span className="font-normal">{firstPart}</span> <br />
                <span className="font-light">{midPart}</span> <br />
                <span className="font-bold">{lastPart}</span>
            </h3>
            
            <div className="bg-white/30 backdrop-blur-sm rounded-xl p-6 w-full min-h-[140px] flex items-center justify-center relative shadow-sm border border-white/40">
                <p className="text-slate-700 font-medium text-lg leading-relaxed px-8">
                    {items.join(', ')}
                </p>
                
                <button className="absolute left-2 text-slate-400 hover:text-slate-600">
                    <ChevronLeft size={24} />
                </button>
                <button className="absolute right-2 text-slate-400 hover:text-slate-600">
                    <ChevronRight size={24} />
                </button>
            </div>
            
            <div className="flex space-x-2 mt-4">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-800"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
            </div>
        </div>
    );
}