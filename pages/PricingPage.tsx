import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const PricingPage: React.FC = () => {
    return (
        <div className="bg-slate-50 min-h-screen py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">AlignSynch Pricing</h1>
                    <h2 className="text-2xl md:text-4xl font-bold text-slate-900">
                        Is your Relationship worth $1 per month?
                    </h2>
                </div>

                {/* Pricing Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
                    
                    {/* Basic Plan */}
                    <PricingCard 
                        title="Basic"
                        subtitle="3 Relationship Month"
                        price="6"
                        frequency="-- QUARTERLY --"
                        perUnit="$2 per Relationship Month"
                        features={[
                            "1 Relationship for 3 Months",
                            "3 Relationships for 1 Month",
                            "2 Relationships split 3 Months"
                        ]}
                    />

                    {/* Essential Plan - Highlighted */}
                    <PricingCard 
                        title="Essential"
                        subtitle="24 Relationship Months"
                        price="36"
                        frequency="-- ANNUALLY --"
                        perUnit="$1.50 per Relationship Months"
                        features={[
                            "1 Relationship for 36 Months",
                            "2 Relationships for 12 Months",
                            "8 Relationships for 3 Months"
                        ]}
                        isPopular={true}
                    />

                    {/* Max Plan */}
                    <PricingCard 
                        title="Max"
                        subtitle="60 Relationship Month"
                        price="60"
                        frequency="-- ANNUALLY --"
                        perUnit="$1 per Relationship Month"
                        features={[
                            "1 Relationship for 60 Months",
                            "5 Relationships for 12 Months",
                            "10 Relationships for 6 Month"
                        ]}
                    />

                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-20">
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8">7 Day Free Trial</h3>
                    <button className="bg-slate-700 hover:bg-slate-800 text-white font-medium py-3 px-10 rounded shadow-sm transition-colors text-lg">
                        Create Account
                    </button>
                </div>
            </div>
        </div>
    );
};

interface PricingCardProps {
    title: string;
    subtitle: string;
    price: string;
    frequency: string;
    perUnit: string;
    features: string[];
    isPopular?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, subtitle, price, frequency, perUnit, features, isPopular }) => {
    return (
        <div className={`relative bg-white rounded-lg p-8 shadow-sm transition-transform hover:-translate-y-1 duration-300 flex flex-col h-full ${isPopular ? 'border-2 border-green-400 ring-4 ring-green-50' : 'border border-slate-200'}`}>
            
            {/* Most Popular Ribbon */}
            {isPopular && (
                <div className="absolute top-0 right-0 overflow-hidden w-32 h-32 pointer-events-none">
                    <div className="absolute top-[20px] right-[-35px] w-[150px] bg-[#22c55e] text-white text-xs font-bold text-center py-1.5 transform rotate-45 shadow-sm uppercase tracking-wide">
                        Most Popular
                    </div>
                </div>
            )}

            <div className="text-center mb-8">
                <h3 className={`text-4xl font-bold mb-2 ${isPopular ? 'text-slate-900' : 'text-slate-600'}`}>{title}</h3>
                <p className="text-slate-500 font-light mb-6">{subtitle}</p>
                
                <div className="flex justify-center items-start mb-2">
                    <span className="text-2xl font-bold text-slate-400 mt-2">$</span>
                    <span className="text-7xl font-medium text-slate-600 tracking-tighter">{price}</span>
                </div>
                
                <p className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-4">{frequency}</p>
                <p className="text-xs font-medium text-slate-600">{perUnit}</p>
            </div>

            <div className="flex-grow space-y-4 mb-8">
                {features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                        <div className="bg-slate-200 rounded-full p-0.5 mt-0.5">
                            <CheckCircle2 size={14} className="text-white fill-slate-300" />
                        </div>
                        <span className="text-slate-600 text-sm">{feature}</span>
                    </div>
                ))}
            </div>

            <div className="text-center mt-auto">
                <p className="text-[10px] text-slate-400 italic mb-4">* or any combination you choose</p>
                <button 
                    className={`w-full py-3 px-6 rounded text-lg font-medium transition-colors ${
                        isPopular 
                        ? 'bg-[#22c55e] hover:bg-green-600 text-white shadow-md' 
                        : 'bg-white border border-slate-400 text-slate-500 hover:border-slate-600 hover:text-slate-700'
                    }`}
                >
                    Select {title} Plan
                </button>
            </div>
        </div>
    );
};