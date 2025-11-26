import React, { useState } from 'react';
import { ArrowRight, User, Info, CheckCircle2, ChevronDown, ChevronRight, Zap } from 'lucide-react';

export const TemplateDetailPage: React.FC = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Dark Header */}
            <div className="bg-slate-700 text-white pt-12 pb-24 px-4 sm:px-6 lg:px-8 relative">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <h1 className="text-3xl font-bold mb-4">Committed Significant Other – Committed Significant Other</h1>
                        <div className="flex gap-2 mb-6">
                            <span className="bg-amber-400 text-slate-900 text-xs font-bold px-3 py-1 rounded uppercase">Personal</span>
                            <span className="bg-white text-slate-700 text-xs font-bold px-3 py-1 rounded">AlignSynch Template</span>
                        </div>
                        <p className="text-slate-300 leading-relaxed max-w-2xl">
                            Discussing and aligning on various aspects of a marriage can help build a strong, healthy relationship, and prevent surprises. Here are some key areas to consider. By discussing these aspects and ensuring you're on the same page, you can build a strong foundation for a healthy and fulfilling marriage.
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 pb-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Main Content Area (Left) */}
                <div className="lg:col-span-2 space-y-6">
                    
                    {/* Roles Row */}
                    <div className="bg-white rounded-lg p-6 shadow-sm flex flex-col md:flex-row gap-6 border border-slate-200">
                        <RoleUser label="INITIATOR" name="Steve Wilson" sub="Committed Significant Other" color="text-amber-500" />
                        <RoleUser label="COUNTERPARTY" name="Karen Altimonte" sub="Committed Significant Other" color="text-pink-500" />
                        <RoleUser label="COACH" name="Samantha Trebold" sub="Therapist" color="text-cyan-500" />
                    </div>

                    {/* Details Row */}
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 text-sm">
                         <div className="grid grid-cols-[100px_1fr] gap-4 mb-4">
                            <span className="font-bold text-slate-800 flex items-center gap-1">Descriptor <Info size={14} className="text-slate-400"/></span>
                            <span className="text-slate-600">3 years of fun</span>
                         </div>
                         <div className="grid grid-cols-[100px_1fr] gap-4 mb-6">
                            <span className="font-bold text-slate-800 flex items-center gap-1">Realm <Info size={14} className="text-slate-400"/></span>
                            <span className="text-slate-600">Our Home - 487 East 28th St</span>
                         </div>
                         
                         <div className="flex flex-wrap gap-8 pt-4 border-t border-slate-100">
                             <div className="flex items-center gap-4">
                                 <span className="font-bold text-slate-800 flex items-center gap-1">Mode <Info size={14} className="text-slate-400"/></span>
                                 <div className="flex items-center gap-2">
                                     <span className="text-slate-500">Basic</span>
                                     <div className="w-4 h-4 rounded-full border border-slate-300"></div>
                                     <span className="text-slate-800 font-medium">Advanced</span>
                                     <div className="w-4 h-4 rounded-full border-4 border-cyan-500"></div>
                                 </div>
                             </div>
                             <div className="flex items-center gap-4">
                                 <span className="font-bold text-slate-800 flex items-center gap-1">Setting <Info size={14} className="text-slate-400"/></span>
                                 <div className="flex items-center gap-2">
                                     <span className="text-slate-500">Soft</span>
                                     <div className="w-4 h-4 rounded-full border border-slate-300"></div>
                                     <span className="text-slate-800 font-medium">Full</span>
                                     <div className="w-4 h-4 rounded-full border-4 border-cyan-500"></div>
                                 </div>
                             </div>
                         </div>
                    </div>

                    {/* Navigation Tabs (Mock) */}
                    <div className="grid grid-cols-4 gap-4">
                        <button className="bg-white border-b-2 border-slate-800 p-3 font-bold text-slate-800 text-sm rounded-t">Aspects & Opinions</button>
                        <button className="bg-slate-100 p-3 font-medium text-slate-500 text-sm rounded-t hover:bg-white">Part...</button>
                        <button className="bg-slate-100 p-3 font-medium text-slate-500 text-sm rounded-t hover:bg-white">Setup</button>
                        <button className="bg-slate-100 p-3 font-medium text-slate-500 text-sm rounded-t hover:bg-white">See Report</button>
                    </div>

                    {/* Aspects Content */}
                    <div className="bg-white p-6 md:p-8 rounded-b-lg rounded-tr-lg shadow-sm border border-slate-200 -mt-6 relative z-10">
                        <h2 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-wide">RELATIONSHIP ASPECTS</h2>
                        <p className="text-slate-600 mb-8 text-sm">
                            Below is a list of the Aspects for this type of Relationship. You and your Counterparty will be asked how you Feel, Wish, Think, and Guess about each one with the Opinion Sliders.
                        </p>

                        <div className="space-y-4">
                            <AspectItem title="Major Lifestyle Goals & Objectives Are Aligned" id="01" />
                            <AspectItem title="Mechanical vs Creative" id="02" />
                            
                            {/* Expanded Item */}
                            <div className="border border-slate-300 rounded overflow-hidden">
                                <div className="bg-slate-50 px-4 py-3 flex justify-between items-center cursor-pointer border-b border-slate-200">
                                    <div className="flex items-center gap-3">
                                        <ChevronDown size={18} className="text-slate-500" />
                                        <span className="font-bold text-slate-800 text-sm">Variety of Work</span>
                                    </div>
                                    <span className="text-cyan-500 text-xs font-bold uppercase tracking-wider">Aspect 03</span>
                                </div>
                                <div className="p-4 bg-white">
                                    <AspectChart />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Right Sidebar */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-slate-200">
                        <div className="h-48 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Friends" className="w-full h-full object-cover" />
                        </div>
                        <div className="p-6 space-y-3">
                            <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2.5 rounded text-sm transition-colors flex items-center justify-center gap-2">
                                <User size={16} /> Create Relationship
                            </button>
                            <button className="w-full bg-green-400 hover:bg-green-500 text-white font-medium py-2.5 rounded text-sm transition-colors flex items-center justify-center gap-2">
                                <Zap size={16} /> Try Demo
                            </button>
                            
                            <div className="pt-6 mt-4 border-t border-slate-100 space-y-3 text-slate-600 text-sm">
                                <div className="flex items-center gap-3">
                                    <span className="text-slate-400"><CheckCircle2 size={16} /></span>
                                    <span>1 Stage</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-slate-400"><CheckCircle2 size={16} /></span>
                                    <span>2 Topics</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-slate-400"><CheckCircle2 size={16} /></span>
                                    <span>1 Aspect</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

const RoleUser: React.FC<{ label: string; name: string; sub: string; color: string }> = ({ label, name, sub, color }) => (
    <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-400">
            <User size={20} />
        </div>
        <div>
            <p className={`text-[10px] font-bold ${color} tracking-wider`}>{label}</p>
            <p className="text-sm font-bold text-slate-900">{name}</p>
            <p className="text-[10px] text-slate-500 leading-tight">{sub}</p>
        </div>
    </div>
);

const AspectItem: React.FC<{ title: string; id: string }> = ({ title, id }) => (
    <div className="bg-slate-50 border border-slate-200 rounded px-4 py-3 flex justify-between items-center cursor-pointer hover:bg-slate-100">
        <div className="flex items-center gap-3">
            <ChevronRight size={18} className="text-slate-400" />
            <span className="font-bold text-slate-800 text-sm">{title}</span>
        </div>
        <span className="text-cyan-500 text-xs font-bold uppercase tracking-wider">Aspect {id}</span>
    </div>
);

const AspectChart: React.FC = () => {
    return (
        <div className="border border-slate-200 rounded p-4">
            <div className="grid grid-cols-2 gap-4 text-center">
                {/* Quadrant 1: FEEL */}
                <div className="space-y-2">
                    <h4 className="text-xs font-bold text-slate-600">FEEL</h4>
                    <p className="text-[10px] text-slate-500 mb-2">How do YOU FEEL it is now?</p>
                    <ChartSlider you={30} them={70} showBolt={true} />
                </div>
                 {/* Quadrant 2: WISH */}
                 <div className="space-y-2">
                    <h4 className="text-xs font-bold text-slate-600">WISH</h4>
                    <p className="text-[10px] text-slate-500 mb-2">How do YOU WISH it to SLOWLY change?</p>
                    <ChartSlider you={60} them={40} showBolt={true} />
                </div>
                 {/* Quadrant 3: THINK */}
                 <div className="space-y-2">
                    <h4 className="text-xs font-bold text-slate-600">THINK</h4>
                    <p className="text-[10px] text-slate-500 mb-2">How do YOU THINK, THEY FEEL it is now?</p>
                    <ChartSlider you={40} them={40} />
                </div>
                 {/* Quadrant 4: GUESS */}
                 <div className="space-y-2">
                    <h4 className="text-xs font-bold text-slate-600">GUESS</h4>
                    <p className="text-[10px] text-slate-500 mb-2">How do YOU GUESS THEY WISH it to SLOWLY change?</p>
                    <ChartSlider you={50} them={50} />
                </div>
            </div>
            
            <div className="flex justify-between text-[10px] text-slate-400 mt-4 px-2 italic">
                <span>Detail</span>
                <span>vs.</span>
                <span>Strategy</span>
            </div>
        </div>
    );
};

const ChartSlider: React.FC<{ you: number; them: number; showBolt?: boolean }> = ({ you, them, showBolt }) => {
    return (
        <div className="relative h-10 w-full flex flex-col justify-center gap-1">
            {/* Track Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-300 -translate-y-1/2"></div>
             {/* Ticks */}
            <div className="absolute top-1/2 left-0 h-2 w-0.5 bg-slate-300 -translate-y-1/2"></div>
            <div className="absolute top-1/2 right-0 h-2 w-0.5 bg-slate-300 -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-1/2 h-1.5 w-0.5 bg-slate-300 -translate-y-1/2"></div>

            {/* You Bar (Blue) */}
            <div className="relative h-2 bg-blue-500 rounded-full z-10" style={{ width: `${you}%` }}></div>
            <span className="absolute left-0 -top-3 text-[9px] text-slate-500">You</span>

            {/* Them Bar (Gray/Green) */}
            <div className="relative h-2 bg-slate-400 rounded-full z-10 opacity-60" style={{ width: `${them}%` }}></div>
            <span className="absolute left-0 bottom-0 text-[9px] text-slate-500">Them</span>

            {/* Lightning Bolt for Gap */}
            {showBolt && (
                <div className="absolute top-1/2 -translate-y-1/2 z-20" style={{ left: `${(you + them) / 2}%` }}>
                    <div className="bg-yellow-400 rounded-full p-0.5 shadow-sm border border-white">
                         <Zap size={10} className="text-yellow-700 fill-current" />
                    </div>
                </div>
            )}
        </div>
    );
};
