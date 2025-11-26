import React from 'react';

export const HowItWorksPage: React.FC = () => {
    return (
        <div className="bg-slate-50 min-h-screen pt-12 pb-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-slate-100 p-8 md:p-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">How AlignSynch Works</h1>
                    <p className="text-xl text-slate-600 font-light">
                        A deeper dive into the methodology of alignment.
                    </p>
                </div>

                <div className="prose prose-slate mx-auto">
                    <div className="bg-cyan-50 border-l-4 border-cyan-400 p-6 rounded-r mb-8">
                        <p className="text-cyan-800 font-medium italic">
                            Detailed content coming soon. This section will be expanded with step-by-step guides and video tutorials.
                        </p>
                    </div>

                    <h2 className="text-2xl font-semibold text-slate-800 mb-4">The Process</h2>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                        AlignSynch facilitates a structured dialogue between two parties. By moving beyond simple conversation and into structured comparison of "Aspects," we remove the emotion from the initial discovery of differences.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
                        <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 text-center">
                            <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold mx-auto mb-4">1</div>
                            <h3 className="font-bold text-slate-800 mb-2">Express</h3>
                            <p className="text-sm text-slate-500">Record your true feelings on key relationship aspects.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 text-center">
                            <div className="w-10 h-10 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center font-bold mx-auto mb-4">2</div>
                            <h3 className="font-bold text-slate-800 mb-2">Invite</h3>
                            <p className="text-sm text-slate-500">Send a secure invite to your counterparty.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 text-center">
                            <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold mx-auto mb-4">3</div>
                            <h3 className="font-bold text-slate-800 mb-2">Synch</h3>
                            <p className="text-sm text-slate-500">Compare results and discuss the gaps.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};