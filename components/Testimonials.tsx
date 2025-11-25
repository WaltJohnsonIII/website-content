import React from 'react';
import { Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
    const statements = [
        "This let me see where things stand and where we wish them to go in the future.",
        "This works because it opened an easy communication channel for me!",
        "There would have been no other way for me to see all the angles of this relationship!",
        "Are you on the 'Same Page' as ______?",
        "Do not be unpleasantly surprised! You don't know until you ask.",
        "It allowed us to visit some important relationship aspects in a nice soft way to see what we need to work on.",
        "Reach a state of agreement, harmony, and understanding with anyone.",
        "Are you in Alignment with ______?",
        "Where are your differences with ______?",
        "Are you In-Synch with ______?",
        "It was hard for us to discuss these things. This opened our eyes to what we need to work on.",
        "You may not think or know how to ask in a non-confrontational way.",
        "Progress is moving forward, however so slightly, giving hope.",
        "You would be surprised how often the answer is not yes or no, but part way in between is comfortable!",
        ""
    ];

    return (
        <section className="bg-gradient-to-b from-white to-slate-100 py-16 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                        <Star className="text-white fill-current" size={32} />
                    </div>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-medium text-slate-800 mb-2">
                    See how easy it is to improve any relationship
                </h2>
                <h3 className="text-xl md:text-2xl font-light text-slate-600 mb-8">
                    Think of it as a new type of communication gizmo
                </h3>
                
                <p className="max-w-3xl mx-auto text-slate-700 text-lg mb-12 leading-relaxed">
                    This tool helps you identify, express, and/or resolve a difference in opinion on
                    how you feel, wish, think, and guess about various aspects of a relationship
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-12">
                    {statements.filter(s => s).map((text, idx) => (
                        <div key={idx} className="bg-transparent p-4 text-sm text-slate-600 leading-relaxed border-l-2 border-transparent hover:border-cyan-300 transition-colors">
                            {text.includes("______") ? (
                                <span>
                                    {text.split("______")[0]}
                                    <span className="border-b border-slate-400 inline-block w-12">&nbsp;</span>
                                    {text.split("______")[1]}
                                </span>
                            ) : (
                                `"${text}"`
                            )}
                        </div>
                    ))}
                </div>
                
                <h4 className="text-xl font-medium text-slate-800 mb-8">Reduce stress & reduce surprises!</h4>
                
                <button className="bg-transparent hover:bg-slate-50 text-cyan-500 font-semibold py-2 px-6 border border-cyan-500 rounded shadow-sm transition-colors">
                    Pick a Relationship Types
                </button>
            </div>
        </section>
    );
};