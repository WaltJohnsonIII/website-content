import React from 'react';

export const Pitfalls: React.FC = () => {
    return (
        <section className="bg-white py-16 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                
                {/* Part 1 Left */}
                <div className="md:text-right">
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                        Most Relationships have<br />
                        two common potential pitfalls &gt;
                    </h3>
                </div>
                
                {/* Part 1 Right */}
                <div className="space-y-4">
                    <div className="bg-white border-2 border-slate-400 rounded p-6 shadow-md text-center">
                        <p className="text-lg text-slate-600 font-medium">
                            YOU FEEL <span className="border-b-2 border-slate-800 w-12 inline-block"></span> is Different<br />
                            Than THEY FEEL
                        </p>
                    </div>
                    <div className="bg-white border-2 border-slate-400 rounded p-6 shadow-md text-center">
                        <p className="text-lg text-slate-600 font-medium">
                            YOU WISH <span className="border-b-2 border-slate-800 w-12 inline-block"></span> to be Different<br />
                            Than THEY WISH
                        </p>
                    </div>
                </div>
                
                {/* Part 2 Left */}
                <div className="md:text-right md:pr-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                        Relationship answers usually are not just yes or no, the compromise solution is often somewhere in between.
                    </h3>
                </div>
                
                {/* Part 2 Right */}
                <div className="space-y-4">
                    <div className="bg-white border-2 border-slate-400 rounded p-4 shadow-md text-center">
                        <p className="text-lg text-slate-600 font-medium">
                            Actually, YOU FEEL<br />
                            <span className="border-b-2 border-slate-800 w-12 inline-block"></span> is only slightly Different
                        </p>
                    </div>
                    <div className="bg-white border-2 border-slate-400 rounded p-4 shadow-md text-center">
                        <p className="text-lg text-slate-600 font-medium">
                            It turns out, YOU WISH<br />
                            <span className="border-b-2 border-slate-800 w-12 inline-block"></span> to slowly Change only a little bit
                        </p>
                    </div>
                    <div className="bg-white border-2 border-slate-400 rounded p-4 shadow-md text-center">
                        <p className="text-lg text-slate-600 font-medium">
                            Surprise! THEY FEEL<br />
                            <span className="border-b-2 border-slate-800 w-12 inline-block"></span> is just a tad Different
                        </p>
                    </div>
                    <div className="bg-white border-2 border-slate-400 rounded p-4 shadow-md text-center">
                        <p className="text-lg text-slate-600 font-medium">
                            Thankfully, THEY WISH<br />
                            <span className="border-b-2 border-slate-800 w-12 inline-block"></span> to be just a touch more or less
                        </p>
                    </div>
                </div>
                
            </div>

            <div className="text-center mt-16">
                 <button className="bg-transparent hover:bg-slate-50 text-cyan-500 font-semibold py-2 px-8 border border-cyan-500 rounded shadow-sm transition-colors">
                    Pick a Relationship Type
                </button>
            </div>
        </section>
    );
};