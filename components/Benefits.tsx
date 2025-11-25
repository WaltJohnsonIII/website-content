import React from 'react';
import { ThumbsUp, AlertCircle } from 'lucide-react';

export const Benefits: React.FC = () => {
    const benefits = [
        {
            title: "Reduce Risk of Loss",
            desc: "Relationships are like a dance, one misstep can lead to a disaster. All too often, when you least expect it, the other person gives up on the Relationship. When you are not on the same page, you risk job loss, divorce, customer loss, business failure, or personal partner leaves. Stay in rhythm and keep dancing!",
            icon: "alert"
        },
        {
            title: "Improved Relationship Performance",
            desc: "In relationships, we communicate, care for each other, and depend on one another. This helps us evolve and work on other relationships or expectations.",
            icon: "thumb"
        },
        {
            title: "Emotional Well-Being",
            desc: "Good relationships reduce stress and promote mental health. They provide comfort, encouragement, and a sense of community.",
            icon: "thumb"
        },
        {
            title: "Better Physical Health",
            desc: "Good smooth social connections positively impact health. Healthy relationships contribute to overall well-being, boost immune systems, and protect against sickness.",
            icon: "thumb"
        },
        {
            title: "Stress & Anxiety Reduction",
            desc: "Emotional support from business colleagues or loved ones helps manage stress and cope with life's challenges.",
            icon: "thumb"
        },
        {
            title: "Longevity",
            desc: "People with strong social support tend to live longer. Healthy relationships improve lifespan and help us learn and grow.",
            icon: "thumb"
        },
        {
            title: "Sense of Belonging",
            desc: "Healthy relationships create a feeling of community and belongingness, reducing feelings of isolation.",
            icon: "thumb"
        },
        {
            title: "Increased Happiness",
            desc: "Positive relationships contribute to overall happiness and life satisfaction.",
            icon: "thumb"
        },
        {
            title: "Enhanced Self-Esteem",
            desc: "Supportive relationships boost self-worth and confidence.",
            icon: "thumb"
        },
        {
            title: "Better Coping Mechanisms",
            desc: "Having someone to lean on during tough times improves resilience and coping skills.",
            icon: "thumb"
        },
        {
            title: "Improved Communication Skills",
            desc: "Practicing these concepts and interacting with others about a relationship helps refine communication abilities.",
            icon: "thumb"
        },
        {
            title: "Greater Sense of Purpose",
            desc: "Practicing these concepts and interacting with others about a relationship helps refine communication abilities.",
            icon: "thumb"
        }
    ];

    return (
        <section className="bg-slate-50 py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 text-center mb-16">Why do I need this?</h2>
                
                <div className="space-y-8">
                    {benefits.map((benefit, idx) => (
                        <div key={idx} className="flex gap-4 pb-8 border-b border-slate-200 last:border-0">
                            <div className="flex-shrink-0 mt-1">
                                {benefit.icon === 'alert' ? 
                                    <span className="font-bold text-xl text-slate-800">!</span> : 
                                    <ThumbsUp className="text-slate-800" size={20} />
                                }
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-800 mb-2">{benefit.title}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">{benefit.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-slate-500 text-white p-8 text-center rounded-lg my-12 shadow-sm font-medium leading-relaxed">
                    Remember, maintaining healthy relationships requires effort, communication, and mutual respect. Whether it's a business colleague, customer, vendor, or a lifelong connection, investing in relationships is worthwhile!
                </div>

                <div className="text-center">
                    <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-md shadow-lg transition transform hover:-translate-y-0.5">
                        Choose a Relationship Type
                    </button>
                </div>
            </div>
        </section>
    );
};