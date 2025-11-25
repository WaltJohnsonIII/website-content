import React from 'react';

export const HowItWorks: React.FC = () => {
    return (
        <section className="bg-slate-50 py-20 px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-slate-100 p-8 md:p-16">
                <h2 className="text-3xl font-bold text-slate-900 text-center mb-10">What does it do?</h2>
                
                <p className="text-slate-600 text-center mb-12 leading-relaxed">
                    Provides a way to find out if you are "On the Same Page" with someone else,
                    then you both adjust aspects of the <strong className="text-black">Relationship</strong> as needed.
                </p>
                
                <div className="space-y-12">
                    {/* Step 1 */}
                    <div className="text-center">
                        <h3 className="text-lg font-bold text-slate-800 mb-4">1 Express Opinions</h3>
                        <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                            It provides people with a way to record their <span className="bg-green-400 text-black px-1 font-medium">Opinions</span> regarding a dozen <span className="bg-yellow-300 text-black px-1 font-medium">Aspects</span> of a <strong className="text-black">Relationship</strong>. There are over a dozen pre-populated starting Templates to select from, each formulated with <span className="bg-yellow-300 text-black px-1 font-medium">Aspects</span> for every type of business or personal <strong className="text-black">Relationship</strong>. <span className="bg-yellow-300 text-black px-1 font-medium">Aspects</span> are user-editable for their situation.
                        </p>
                    </div>
                    
                    {/* Step 2 */}
                    <div className="text-center">
                        <h3 className="text-lg font-bold text-slate-800 mb-4">2 Communicate</h3>
                        <p className="text-slate-600 leading-relaxed text-sm md:text-base mb-4">
                            As the <span className="bg-yellow-300 text-black px-1 font-medium">Initiator</span>, you then <span className="bg-green-400 text-black px-1 font-medium">Invite</span> the <span className="bg-pink-200 text-black px-1 font-medium">Counterparty</span> to AlignSynch so they may record their <span className="bg-green-400 text-black px-1 font-medium">Opinions</span> regarding the same <span className="bg-yellow-300 text-black px-1 font-medium">Aspects</span>.
                        </p>
                        <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                            Then both Parties can share their <span className="bg-green-400 text-black px-1 font-medium">Opinions</span>, show the differences, and spark constructive discussions to decrease the <strong className="text-black">Gaps</strong>, thus improving the <strong className="text-black">Relationship</strong>.
                        </p>
                    </div>
                    
                    {/* Summary */}
                    <div className="text-center border-t border-slate-100 pt-8 mt-8">
                        <p className="text-slate-700 font-medium">
                            Simply put: Play with <strong className="text-black">Relationship</strong> Aspects, Register, Invite <span className="bg-pink-200 text-black px-1 font-medium">Counterparty</span>, Give <span className="bg-green-400 text-black px-1 font-medium">Opinions</span>, Share, & Discuss.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};