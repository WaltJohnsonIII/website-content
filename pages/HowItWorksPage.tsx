
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

export const HowItWorksPage: React.FC = () => {
    return (
        <div className="bg-slate-50 min-h-screen font-sans">
            
            {/* Section 1: What is it? */}
            <section className="bg-slate-50 py-16 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
                    <div className="md:col-span-1 text-right md:text-right">
                        <h2 className="text-4xl font-bold text-slate-900">What is it?</h2>
                    </div>
                    <div className="md:col-span-2 space-y-6 text-slate-700 leading-relaxed">
                        <p>
                            Think of it as a new type of <strong className="font-bold text-slate-900">Communication Gizmo</strong>. This tool helps you identify, express, and/or resolve a difference in <strong className="font-bold text-slate-900">Opinion</strong> on how you <strong className="font-bold text-slate-900">Feel, Wish, Think</strong>, and <strong className="font-bold text-slate-900">Guess</strong> about various <strong className="font-bold text-slate-900">Aspects</strong> of a <strong className="font-bold text-slate-900">Relationship</strong>.
                        </p>
                        <p>
                            This is a private cloud-based "<strong className="font-bold text-slate-900">Soft Communication Tool</strong>" that helps with tough discussions or surprises. It is a "<strong className="font-bold text-slate-900">Relationship Risk Management App</strong>", "<strong className="font-bold text-slate-900">Expectation Management Gadget</strong>", and "<strong className="font-bold text-slate-900">Feedback Portal</strong>" to provide comfort and satisfaction in knowing that both of your thoughts are "on the same page".
                        </p>
                        <p>
                            Easy Steps: You (the <strong className="font-bold text-slate-900">Initiator</strong>) pick a <strong className="font-bold text-slate-900">Relationship Type</strong>, you give your <strong className="font-bold text-slate-900">Opinions</strong>, you <strong className="font-bold text-slate-900">Invite</strong> the other person (<strong className="font-bold text-slate-900">Counterparty</strong>), they give <strong className="font-bold text-slate-900">Opinions</strong>, you both <strong className="font-bold text-slate-900">Share</strong> & <strong className="font-bold text-slate-900">Discuss</strong>.
                        </p>
                        <div className="pt-4">
                            <button className="bg-[#3b82f6] hover:bg-blue-600 text-white font-medium py-2 px-6 rounded shadow-sm transition-colors text-sm">
                                Pick a Relationship Type
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: How it Works (Blue Background) */}
            <section className="bg-[#3274a3] py-20 px-4 text-white text-center relative overflow-hidden">
                <div className="max-w-4xl mx-auto relative z-10">
                    <h2 className="text-4xl font-bold mb-16">How it Works</h2>
                    
                    <div className="space-y-16">
                        <div className="max-w-2xl mx-auto">
                            <h3 className="text-xl font-bold mb-2">1. Pick a customizable Relationship Template</h3>
                            <p className="text-blue-100 text-sm leading-relaxed px-4">
                                Pick the perfect template that complements your vibe with that someone you want to align with. Each template comes with a ingenious set of aspect questions to answer, perfectly tailored to your relationship type. Customize the aspects if you like.
                            </p>
                        </div>

                        <div className="max-w-2xl mx-auto">
                            <h3 className="text-xl font-bold mb-2">2. Evaluate & Record your Feelings and Opinions</h3>
                            <p className="text-blue-100 text-sm leading-relaxed px-4">
                                Come on, spill the beans! The Template wants to know your take on certain Relationship Aspects! And, while we're at it, where do you see them going in the future?
                            </p>
                        </div>

                        <div className="max-w-2xl mx-auto">
                            <h3 className="text-xl font-bold mb-2">3. Invite the Counterparty</h3>
                            <p className="text-blue-100 text-sm leading-relaxed px-4">
                                Once your "Feel" and "Wish" Opinions have been marked, invite the "Counterparty" to also privately answer. Both of you have to finish before the big reveal.
                            </p>
                        </div>

                        <div className="max-w-2xl mx-auto">
                            <h3 className="text-xl font-bold mb-2">4. Compare & Discuss the Results</h3>
                            <p className="text-blue-100 text-sm leading-relaxed px-4">
                                Let's get real, folks! Once both parties have shared their Opinions, voila! The results and differences are out in the open. Congratulations, you get to now "work on the Relationship" indefinitely.
                            </p>
                        </div>

                        <div className="max-w-2xl mx-auto">
                            <h3 className="text-xl font-bold mb-2">5. Get in Synch!</h3>
                            <p className="text-blue-100 text-sm leading-relaxed px-4">
                                Are you feeling potentially out-of-synch? Use the AlignSynch Dashboard to see areas where you are or aren't aligned! Get ready for some juicy discussions or In-App Chat for every Aspect.
                            </p>
                        </div>

                        <div className="pt-8">
                            <button className="bg-transparent hover:bg-white/10 text-white font-medium py-2 px-8 border border-white rounded shadow-sm transition-colors text-sm">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Our Purpose */}
            <section className="bg-[#f3f4f6] py-20 px-4">
                <div className="max-w-3xl mx-auto text-center"> // Reduced width for text
                    <h2 className="text-4xl font-bold text-slate-900 mb-8">Our Purpose</h2>
                    <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
                        <p>
                            To give people an easy tool to express or resolve a difference in opinion on how you Feel, Wish, Think, or Guess about various Aspects of a Relationship.
                        </p>
                        <p>
                            The ultimate in two-way Expectation Management, Communication, and Relationship Alignment – now with MetaCognition™ and TernaryThinking™
                        </p>
                        <p>
                            Progress is moving forward, however so slightly, giving hope.
                        </p>
                        <p>
                            You would be surprised how often the answer is not yes or no, but part way in between is comfortable! AlignSynch shows you that most parts a relationship is a compromise.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section 4: Simple Steps */}
            <section className="bg-white py-20 px-4">
                <div className="max-w-5xl mx-auto">
                     <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-right mb-12 mr-12">Simple Steps To Improve Relationships</h2>
                     
                     <div className="text-center max-w-3xl mx-auto space-y-8">
                         <div>
                             <h3 className="text-xl font-bold mb-2">Communicate</h3>
                             <p className="text-slate-600 leading-relaxed">
                                 As the <span className="bg-yellow-300 px-1 font-bold text-slate-900">Initiator</span>, you mark your <span className="bg-green-400 px-1 font-bold text-slate-900">Opinions</span>, Invite the <span className="bg-pink-200 px-1 font-bold text-slate-900">Counterparty</span> to AlignSynch so they may record their <span className="bg-green-400 px-1 font-bold text-slate-900">Opinions</span> regarding the same <span className="bg-yellow-300 px-1 font-bold text-slate-900">Aspects</span>.
                             </p>
                         </div>
                         
                         <p className="text-slate-600 leading-relaxed">
                             Then both <strong className="font-bold text-slate-900">Parties</strong> can share their <span className="bg-green-400 px-1 font-bold text-slate-900">Opinions</span>, show the differences, and spark constructive discussions to decrease the <strong className="font-bold text-slate-900">Gaps</strong>, thus improving the <strong className="font-bold underline text-slate-900">Relationship</strong>.
                         </p>
                     </div>
                </div>
            </section>

             {/* Section 5: Soufflé */}
             <section className="bg-white pb-20 px-4">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 leading-tight">
                        Ah, business and personal relationships - the emotional equivalent of a soufflé. You start with fluffy anticipation, but sometimes it collapses like a failed baking experiment. Fear not! Here’s your recipe for relationship recovery.
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="flex gap-4 items-start">
                        <Check className="text-black font-bold flex-shrink-0 mt-1" size={24} strokeWidth={3} />
                        <div>
                            <h3 className="font-bold text-lg text-slate-900">Example</h3>
                            <p className="text-sm text-slate-600 mt-1">
                                A Job (or marriage, partner, or vendor) starts out fitting great: you, the company, your manager, and the job duties are all aligned, like a great pair of jeans. Then, so-and-so leaves and your job duties shift a bit. Next, the company offers a new product line and you have different responsibilities. Lastly, your wife has a baby and your manager gets a divorce. (not using AlignSynch : ) Now, that same pair of jeans are chafing you in the back of the knees. What do you do?
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4 items-start">
                        <Check className="text-black font-bold flex-shrink-0 mt-1" size={24} strokeWidth={3} />
                        <div>
                            <h3 className="font-bold text-lg text-slate-900">How you feel and how you wish</h3>
                            <p className="text-sm text-slate-600 mt-1">
                                You both mark your Opinion on how you FEEL each Aspect is now and how you WISH each Aspect to move in the future.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4 items-start">
                        <Check className="text-black font-bold flex-shrink-0 mt-1" size={24} strokeWidth={3} />
                        <div>
                            <h3 className="font-bold text-lg text-slate-900">Soft and Non-Threatening Communication</h3>
                            <p className="text-sm text-slate-600 mt-1">
                                AlignSynch will highlight to both Parties which Aspects of the Relationship you FEEL & WISH differently, and prompt you to chat about them.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 6: What is the goal? */}
            <section className="bg-[#3b8ba6] py-16 px-4 text-white">
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="text-right">
                        <h2 className="text-3xl md:text-4xl font-bold">What is the goal?</h2>
                    </div>
                    <div className="text-sm md:text-base space-y-1">
                        <p>1. Reach a state of agreement, harmony,</p>
                        <p className="pl-4">and understanding with anyone.</p>
                        <p>2. Softly communicate how you would like</p>
                        <p className="pl-4">an Aspect of the Relationship to slowly</p>
                        <p className="pl-4">change in the future.</p>
                        <p>3. Handle Expectations and effectively</p>
                        <p className="pl-4">communicate them.</p>
                        <p>4. Reduce stress and risk by knowing you</p>
                        <p className="pl-4">are In-Synch.</p>
                    </div>
                </div>
            </section>

            {/* Section 7: The Four Opinions */}
            <section className="bg-[#3b8ba6] pb-24 px-4 text-white text-center">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">The Four (4) Opinions on each Aspect -</h2>
                    <p className="text-xs text-blue-200/50 mb-8 break-words max-w-2xl mx-auto overflow-hidden h-4">
                        {/* Hidden text representing the glitch in the screenshot, kept minimal/hidden */}
                        Normal 0 false false false EN-US JA AR-SA Style Definitions table.MsoNormalTable
                    </p>
                    
                    <div className="mb-12">
                        <p className="text-sm mb-2 font-bold italic">"views"</p>
                        <p className="text-sm mb-4">
                            regarding your <span className="bg-green-400 text-slate-900 px-1 font-bold">Opinion</span> of an <span className="bg-yellow-300 text-slate-900 px-1 font-bold">Aspect</span> within a <span className="border border-white bg-pink-300/50 px-1 font-bold text-white">Relationship</span>.
                        </p>
                        <p className="text-sm mb-2">
                            These perspectives include how you <span className="bg-pink-300 text-slate-900 px-1 font-bold">Feel</span>, <span className="bg-red-400 text-slate-900 px-1 font-bold">Wish</span>, <span className="font-bold border border-white px-1">Think</span>, and <span className="bg-gray-200 text-slate-900 px-1 font-bold">Guess</span>
                        </p>
                        <p className="text-sm">
                            about that <span className="bg-yellow-300 text-slate-900 px-1 font-bold">Aspect</span> in relation to yourself and your <span className="bg-pink-200 text-slate-900 px-1 font-bold">Counterparty</span>.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto items-center">
                        <div className="space-y-12 text-center">
                             <div>
                                 <h3 className="text-xl font-bold mb-1">Feel</h3>
                                 <p className="text-xs text-blue-100">Your perspective of how you Feel it is Now.</p>
                                 <p className="text-xs text-blue-100">(Your Now)</p>
                             </div>

                             <div>
                                 <h3 className="text-xl font-bold mb-1">Wish</h3>
                                 <p className="text-xs text-blue-100">Your perspective of how you Wish it to Move in the Future.</p>
                                 <p className="text-xs text-blue-100">(Your Future)</p>
                             </div>

                             <div>
                                 <h3 className="text-xl font-bold mb-1">Think</h3>
                                 <p className="text-xs text-blue-100">Your perspective of how You Think They Feel Now.</p>
                                 <p className="text-xs text-blue-100">(Their Now)</p>
                             </div>

                             <div>
                                 <h3 className="text-xl font-bold mb-1">Guess</h3>
                                 <p className="text-xs text-blue-100">Your perspective of how You Guess</p>
                                 <p className="text-xs text-blue-100">They Wish it to move in the Future.</p>
                                 <p className="text-xs text-blue-100">(Their Wish)</p>
                             </div>
                        </div>

                        <div className="flex justify-center">
                             {/* Placeholder for the Couple Image */}
                             <div className="w-64 h-64 bg-slate-800 rounded-lg overflow-hidden shadow-lg border-4 border-white/20">
                                <img 
                                    src="https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                                    alt="Couple Talking" 
                                    className="w-full h-full object-cover opacity-80"
                                />
                             </div>
                        </div>
                    </div>

                    <div className="mt-16">
                         <button className="bg-transparent hover:bg-white/10 text-white font-medium py-2 px-8 border border-white rounded shadow-sm transition-colors text-sm">
                            Get Started
                        </button>
                    </div>
                </div>
            </section>

             {/* Section 8: Why people use AlignSynch */}
             <section className="bg-[#489cb6] py-16 px-4 text-white text-center border-t border-white/10">
                 <div className="max-w-4xl mx-auto">
                     <h2 className="text-3xl font-bold mb-12">Why people use AlignSynch</h2>
                     
                     <div className="space-y-6 text-sm md:text-base">
                         <p>52% To make a good Relationship a better fantastic Relationship.</p>
                         <p>43% To solve known difference in the Relationship.</p>
                         <p>36% To prevent surprises, like insurance for a valuable Relationship.</p>
                         <p className="max-w-2xl mx-auto leading-relaxed">
                             28% A soft alternative communication tool, since having a verbal chat about the subject is difficult for them.
                         </p>
                     </div>
                 </div>
             </section>

        </div>
    );
};
