import React from 'react';
import { Check, Star, Brain, GitMerge, MessageCircle, FileCheck, Target, Bell, AlertTriangle } from 'lucide-react';

export const AboutUsPage: React.FC = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Header Section */}
            <div className="bg-gradient-to-br from-cyan-600 to-slate-800 py-20 px-4 text-white text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">History & Purpose</h1>
                    <p className="text-lg md:text-xl text-cyan-100 leading-relaxed max-w-3xl mx-auto">
                        Although applicable to any relationship, AlignSynch was originally created by a consultant in Sharepoint for the Staff-Manager Relationship. This LOOP feedback system used <strong>L</strong>ots <strong>O</strong>f <strong>O</strong>bjective <strong>P</strong>arameters. It became obvious that this simple tool beat waiting for the annual review, doing a 360 review, sending an email, involving HR, or cornering someone for a "meeting".
                    </p>
                    <div className="mt-8">
                        <button className="bg-white text-cyan-700 font-bold py-3 px-8 rounded-md hover:bg-cyan-50 transition-colors shadow-lg">
                            Pick a Relationship
                        </button>
                    </div>
                </div>
            </div>

            {/* Why Create This Section */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-16">Why did we create this?</h2>

                <div className="space-y-12">
                    
                    {/* Goal 1 */}
                    <GoalCard 
                        number="1"
                        title="Poor Relationship > Want Improve a Relationship"
                        subtitle='"Reach a state of agreement, harmony, and understanding with anyone"'
                        icon={<Target className="text-white" size={24} />}
                        color="bg-cyan-500"
                        items={[
                            "Relationships go sour, just like a pair of jeans starts chafing at the knee.",
                            "Maybe you do talk and discuss for hours, and guess what? You still might not be on the same page without a little help!",
                            "Conceptually or verbally, there is no other way for someone to see all the angles of a Relationship.",
                            "This lets someone see both where things stand now and where they wish them to go in the future."
                        ]}
                    />

                    {/* Goal 2 */}
                    <GoalCard 
                        number="2"
                        title="Softly Conveniently Communicate Desire to Change"
                        subtitle='"Telling someone that something needs to change or that is not how I feel is tricky and difficult."'
                        icon={<MessageCircle className="text-white" size={24} />}
                        color="bg-purple-500"
                        items={[
                            "Softly and conveniently communicate how you would like an Aspect of the Relationship to slowly change in the future.",
                            "Maybe you do not feel comfortable sitting down and bringing up a difficult topic? (this tool will help you)",
                            "This works because it opens an easy soft communication channel.",
                            "It allows people to visit some important Relationship Aspects, in a nice soft way, to see what needs worked on",
                            "It is hard for people to discuss some things. This opens your eyes to what you need to work on.",
                            "You may not think or know how to ask in a soft easy non-confrontational way."
                        ]}
                    />

                    {/* Goal 3 */}
                    <GoalCard 
                        number="3"
                        title="Handle Expectations > Want to Satisfy the Other Person"
                        subtitle='"The key to life is to handle the expectations of other people"'
                        icon={<Star className="text-white" size={24} />}
                        color="bg-yellow-500"
                        items={[
                            "This should be the #1 top priority in business and personal Relationships.",
                            "The only way to truly handle expectations is to know how each of you feel, wish, think, and guess about the Relationship"
                        ]}
                    />

                    {/* Goal 4 */}
                    <GoalCard 
                        number="4"
                        title="Preventing Surprises > Want to Avert Disaster, Pain, and Cost"
                        subtitle='"Reduce stress and risk by knowing you are In-Synch"'
                        icon={<AlertTriangle className="text-white" size={24} />}
                        color="bg-red-500"
                        items={[
                            "Have you had a poor, detrimental, surprising, or damaging result from not being well aligned with someone? slowly change in the future.",
                            "Do not be unpleasantly surprised! You don't know until you ask.",
                            "If so, read on, as it was preventable! No need to be so surprised next time.",
                            "Have you been fired because you were \"not on the same page\"? (but thought you were)",
                            "Have you had a prize team member leave because they wished to lean in a particular direction, but you did not know?",
                            "Have they broken up with you because your thoughts were not in harmony? (but you thought they were)",
                            "Has a business partner gotten angry or legal because your goals were not aligned? (but you thought they were)",
                            "Were people working on portions of a project that you thought were insignificant? (but they thought were important)",
                            "Have you had a customer cancel a big order because of a misunderstanding or expectations? (but you thought all was well)",
                            "Have you set household rules for a child, and they were harboring deep hatred about it? (but you did not know)"
                        ]}
                    />

                    {/* Goal 5 */}
                    <GoalCard 
                        number="5"
                        title="Save Time and Hours of Counseling or Therapy"
                        subtitle='"You can talk for hours, not really know if you are completely aligned, and only cover ¼ of the concepts AlignSynch covers"'
                        icon={<Brain className="text-white" size={24} />}
                        color="bg-green-600"
                        items={[
                            "A Therapist, Psychiatrist, Counselor, or Psychologist can be a Party to this Relationship tool as a \"Coach\".",
                            "To cover a dozen Relationship Aspects, you would need at least half a dozen sessions with a Mentor, Therapist, Psychiatrist, Counselor, Psychologist, or Coach.",
                            "Most people do not have that kind of time and the Relationship suffers.",
                            "AlignSynch provides efficient ways to cover all the topics.",
                            "With this tool, you have control of the path and map, which a key to success.",
                            "A Therapist, Psychiatrist, Counselor, or Psychologist can often govern all the discussions, but you also need to learn how to do it all yourselves."
                        ]}
                    />

                    {/* Goal 6 */}
                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                        <div className="bg-slate-800 p-6 text-white flex items-center justify-between">
                            <div>
                                <h3 className="text-2xl font-bold">Purpose/Goal 6 – Teach & Apply Critical Thinking Concepts</h3>
                                <p className="text-slate-300 italic mt-1">"Use Critical Thinking, a Subset of Higher Order Thinking, to Get On-the-Same-Page"</p>
                            </div>
                        </div>
                        <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <div>
                                <h4 className="text-xl font-bold text-slate-800 mb-4">Pentary Thinking™</h4>
                                <p className="text-slate-600 mb-6">
                                    Pentary Thinking™ is an AlignSynch concept and cognitive framework that simplifies complex situations or concepts by reducing them to five (5) opposing categories or perspectives. It is one step further than Ternary Thinking, and two steps further than Binary Thinking.
                                </p>
                                <p className="text-sm text-slate-500 mb-4">Pentary Thinking™ utilizes Many-Valued Logic to provide a whole range of solutions that both parties can agree on. Things are usually not black and white or yes and no!</p>
                                
                                <div className="space-y-2">
                                    {["Binary Thinking", "Egocentrism", "Ethnocentrism", "Sociocentrism", "Cognitive Bias", "Confirmation Bias", "Illusory Superiority"].map(term => (
                                        <div key={term} className="flex items-center text-slate-700">
                                            <Check size={16} className="text-green-500 mr-2" /> {term}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-slate-100 rounded-lg flex items-center justify-center p-8 border-2 border-dashed border-slate-300">
                                <div className="text-center text-slate-500">
                                    <Brain size={48} className="mx-auto mb-2 text-slate-400" />
                                    <p>[Diagram Placeholder: Discard Binary Thinking & Pentary Thinking Visuals]</p>
                                    <p className="text-xs mt-2">Diagrams illustrating Many-Valued Logic vs Binary Logic would appear here.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Goal 7 */}
                    <GoalCard 
                        number="7"
                        title="A Negotiation Starter"
                        subtitle='"Life is all about give and take, hence this Arbitration tool will provide diplomacy."'
                        icon={<GitMerge className="text-white" size={24} />}
                        color="bg-indigo-500"
                        items={[
                            "Everyone needs Need an \"Ice-Breaker\" If so, read on, as it was preventable! No need to be so surprised next time.",
                            "Have you been fired because you could not seem to meet in middle ground and were \"not on the same page\"? (but thought you were)",
                            "Have you tried to negotiate with your spouse or partner and had a hard time finding somewhere in between\"? (one person thought binary - yes or no)",
                            "Have you had a prize team member leave because they hoped to lean in a particular direction than you, but there was a compromise you did not know?"
                        ]}
                    />

                    {/* Goal 8 */}
                    <GoalCard 
                        number="8"
                        title="Seals the Deal Nicely"
                        subtitle='"How do you know that you really have come to a conciliation on a Relationship Aspect without some record of agreement?"'
                        icon={<FileCheck className="text-white" size={24} />}
                        color="bg-teal-500"
                        items={[
                            "This provides a nice formal record of your Opinions and Gaps.",
                            "No notes, no Post-Its, or other written documents.",
                            "Nobody can say they did not know how you Feel and Wish."
                        ]}
                    />

                    {/* Goal 9 */}
                    <GoalCard 
                        number="9"
                        title="Removes the Noise and Provides Focus"
                        subtitle='"Do your conversations about Relationship Aspects get sidetracked, possibly with emotions?"'
                        icon={<MessageCircle className="text-white" size={24} />}
                        color="bg-blue-600"
                        items={[
                            "Do Aspects about a Relationship get mixed up together? AlignSynch keeps them separate allowing the Parties to focus on one Aspect at a time.",
                            "Do all kinds of related and unrelated adjectives get used when discussing an Aspect? This tool gets you to agree on the two juxtaposed Values to reduce \"noise\" in the conversation."
                        ]}
                    />

                     {/* Goal 10 */}
                     <GoalCard 
                        number="10"
                        title="Reminders you about your Relationship"
                        subtitle='"Forget Post-Its for \"things to work on\" and \"topics to discuss\""'
                        icon={<Bell className="text-white" size={24} />}
                        color="bg-rose-500"
                        items={[
                            "Procrastination is one of the problems in a Relationship.",
                            "It takes a bit of work and people have busy lives.",
                            "We will occasionally remind you what you need to do and where the Gaps are."
                        ]}
                    />
                </div>
            </div>

            {/* Metacognition Section */}
            <div className="bg-white py-20 px-4 border-t border-slate-200">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">MetaCognition™</h2>
                    <h3 className="text-xl md:text-2xl font-light text-slate-800 mb-8">
                        Wisdom is knowing what you do not know and willing to admit it.
                    </h3>
                    
                    <div className="text-left prose prose-slate mx-auto leading-relaxed text-slate-600">
                        <p>
                            MetaCognition is an awareness of one’s thought processes and an understanding of the patterns behind them. The term comes from the root word meta, meaning "beyond", or "on top of". MetaCognition can take many forms, such as reflecting on one’s ways of thinking and knowing when and how to use particular strategies for problem-solving.
                        </p>
                        <p className="mt-6">
                            There are generally two components of MetaCognition: (1) knowledge about cognition and (2) regulation of cognition. A MetaCognitive model differs from other scientific models in that the creator of the model is per definition also enclosed within it. Scientific models are often prone to distancing the observer from the object or field of study whereas a MetaCognitive model in general tries to include the observer in the model.
                        </p>
                    </div>

                    <div className="mt-12">
                        <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-8 rounded-md transition-colors">
                            Pick a Relationship
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

interface GoalCardProps {
    number: string;
    title: string;
    subtitle: string;
    icon: React.ReactNode;
    color: string;
    items: string[];
}

const GoalCard: React.FC<GoalCardProps> = ({ number, title, subtitle, icon, color, items }) => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col md:flex-row">
            <div className={`${color} p-6 md:w-1/3 flex flex-col justify-center text-white relative`}>
                <div className="absolute top-4 left-4 opacity-20 font-bold text-6xl">{number}</div>
                <div className="relative z-10">
                    <div className="mb-4">{icon}</div>
                    <h3 className="text-2xl font-bold leading-tight mb-2">{title}</h3>
                    <p className="text-sm opacity-90 italic">{subtitle}</p>
                </div>
            </div>
            <div className="p-6 md:w-2/3 md:p-8 bg-slate-50/50">
                <ul className="space-y-3">
                    {items.map((item, idx) => (
                        <li key={idx} className="flex items-start text-slate-700 text-sm md:text-base">
                            <Check className="text-cyan-500 mr-3 flex-shrink-0 mt-0.5" size={18} />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
