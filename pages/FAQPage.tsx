import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FAQPage: React.FC = () => {
    return (
        <div className="bg-slate-50 min-h-screen font-sans">
            {/* FAQ Accordion Section */}
            <section className="bg-slate-50 py-20 px-4">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-medium text-slate-900 text-center mb-16 tracking-tight">
                        Frequently Asked Questions
                    </h1>
                    
                    <div className="space-y-0 border-t border-slate-200">
                        <FAQItem 
                            question="What do I get if I register a new AlignSynch account?"
                            answer="When you register, you gain immediate access to the AlignSynch platform, allowing you to create profiles for multiple relationships, access the 'Express Opinions' tool, and invite counterparties to start syncing expectations. New accounts typically start with a free trial period."
                        />
                        <FAQItem 
                            question="What is a &quot;Relationship Month&quot;?"
                            answer="A 'Relationship Month' is our unit of subscription. It allows you to actively manage one specific relationship (e.g., You + Spouse) for one month. If you are managing 3 different relationships, you would consume 3 Relationship Months per calendar month."
                        />
                        <FAQItem 
                            question="What happens when my &quot;Relationship Months&quot; have been exhausted?"
                            answer="When your balance runs out, your historical data remains safe and viewable, but you will not be able to initiate new opinion sessions or invite counterparties until you top up your balance or renew your subscription."
                        />
                        <FAQItem 
                            question="What does the &quot;Soft&quot; and &quot;Full&quot; settings do?"
                            answer="'Soft' settings provide a gentler, more guided vocabulary designed to avoid conflict, perfect for sensitive personal topics. 'Full' settings allow for direct, unvarnished feedback, which may be more appropriate for efficient business relationships."
                        />
                        <FAQItem 
                            question="What does the &quot;Basic&quot; and &quot;Advanced&quot; mode do?"
                            answer="Basic mode covers the core 12 Aspects of a relationship. Advanced mode unlocks granular sub-aspects and allows for 'Pentary Thinking' analysis to find nuanced middle-ground solutions."
                        />
                        <FAQItem 
                            question="What does the &quot;Simple&quot; and &quot;Long&quot; complexity do?"
                            answer="Simple complexity offers quick Yes/No/Maybe style options for rapid alignment checks. Long complexity provides detailed sliding scales and open text fields for deep-dive therapy or negotiation sessions."
                        />
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="bg-white py-24 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Left Column: Text */}
                    <div className="pt-8">
                        <h2 className="text-5xl md:text-6xl font-medium text-slate-900 mb-6 tracking-tight">
                            We're here to<br />help
                        </h2>
                        <p className="text-xl text-slate-600 font-light">
                            Leave a message and we will get back to you.
                        </p>
                    </div>

                    {/* Right Column: Form */}
                    <div>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-500 mb-1">First Name</label>
                                    <input type="text" id="firstName" className="w-full border-b border-slate-300 py-2 focus:outline-none focus:border-cyan-500 transition-colors bg-transparent" />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-500 mb-1">Last Name</label>
                                    <input type="text" id="lastName" className="w-full border-b border-slate-300 py-2 focus:outline-none focus:border-cyan-500 transition-colors bg-transparent" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-500 mb-1">Email</label>
                                <input type="email" id="email" className="w-full border-b border-slate-300 py-2 focus:outline-none focus:border-cyan-500 transition-colors bg-transparent" />
                            </div>

                            <div>
                                <label htmlFor="relationshipType" className="block text-sm font-medium text-slate-500 mb-1">Relationship Type</label>
                                <input type="text" id="relationshipType" className="w-full border-b border-slate-300 py-2 focus:outline-none focus:border-cyan-500 transition-colors bg-transparent" />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-slate-500 mb-1">Phone</label>
                                <input type="tel" id="phone" className="w-full border-b border-slate-300 py-2 focus:outline-none focus:border-cyan-500 transition-colors bg-transparent" />
                            </div>

                            <div>
                                <label htmlFor="city" className="block text-sm font-medium text-slate-500 mb-1">City</label>
                                <input type="text" id="city" className="w-full border-b border-slate-300 py-2 focus:outline-none focus:border-cyan-500 transition-colors bg-transparent" />
                            </div>

                            <div>
                                <label htmlFor="state" className="block text-sm font-medium text-slate-500 mb-1">State or Province</label>
                                <div className="relative">
                                    <select id="state" className="w-full border-b border-slate-300 py-2 focus:outline-none focus:border-cyan-500 transition-colors bg-transparent appearance-none text-slate-700">
                                        <option>USA</option>
                                        <option>Canada</option>
                                        <option>UK</option>
                                        <option>Other</option>
                                    </select>
                                    <ChevronDown className="absolute right-0 top-3 text-slate-400 pointer-events-none" size={16} />
                                </div>
                            </div>

                            <div className="pt-6">
                                <button type="submit" className="w-full bg-[#84cc16] hover:bg-[#65a30d] text-white font-semibold py-3 px-6 rounded shadow-sm transition-colors text-lg">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="bg-[#86efac] py-20 px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        Try it free for 7 days
                    </h2>
                    <p className="text-xl text-slate-700 font-light mb-10 max-w-2xl mx-auto">
                        Get started with one free week of Relationship smoothing and improved communication.
                    </p>
                    <button className="bg-transparent hover:bg-white/20 text-slate-900 font-medium py-3 px-8 border border-slate-900 rounded transition-colors">
                        Start your free trial
                    </button>
                </div>
            </section>
        </div>
    );
};

interface FAQItemProps {
    question: string;
    answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-slate-200">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
            >
                <span className="text-lg md:text-xl font-medium text-slate-800 group-hover:text-cyan-600 transition-colors pr-8">
                    {question}
                </span>
                <span className="flex-shrink-0 text-slate-800">
                    {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </span>
            </button>
            <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'
                }`}
            >
                <p className="text-slate-600 leading-relaxed pr-8">
                    {answer}
                </p>
            </div>
        </div>
    );
};