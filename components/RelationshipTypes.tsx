import React from 'react';
import { Check } from 'lucide-react';

export const RelationshipTypes: React.FC = () => {
    return (
        <section className="bg-slate-100 pb-20 pt-10 px-4 relative">
             {/* Decorative curve at top (simulated with css) */}
             <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent opacity-50 pointer-events-none"></div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Personal Card */}
                <div className="bg-white/50 backdrop-blur-sm border border-purple-100 rounded-lg shadow-sm overflow-hidden">
                    <div className="bg-purple-100/50 p-6 text-center border-b border-purple-100">
                        <h3 className="text-3xl font-bold text-purple-600 mb-1">Personal</h3>
                        <p className="text-slate-700 font-medium">Home Relationship Types</p>
                        <p className="text-slate-500 text-sm">(each has unique aspects)</p>
                    </div>
                    <div className="p-6 md:p-8 bg-gradient-to-br from-purple-50/50 to-slate-50/50">
                        <ul className="space-y-3">
                            {[
                                "Spouses", "Girlfriend-Boyfriend", "Committed Significant Others", 
                                "Parent-Child", "Siblings", "Friends", "Dating", "Roommates", 
                                "Neighbors", "Blank > Create Your Own"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start text-slate-700">
                                    <Check className="text-purple-500 mr-3 flex-shrink-0" size={20} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Business Card */}
                <div className="bg-white/50 backdrop-blur-sm border border-teal-100 rounded-lg shadow-sm overflow-hidden">
                    <div className="bg-teal-100/50 p-6 text-center border-b border-teal-100">
                        <h3 className="text-3xl font-bold text-teal-500 mb-1">Business</h3>
                        <p className="text-slate-700 font-medium">Professional Relationship Types</p>
                        <p className="text-slate-500 text-sm">(each has unique aspects)</p>
                    </div>
                    <div className="p-6 md:p-8 bg-gradient-to-br from-teal-50/50 to-slate-50/50">
                        <ul className="space-y-3">
                            {[
                                "Staff-Manager", "Coworker-Colleague", "Customer-Vendor Product", 
                                "Customer-Vendor Service", "Business Partners", "Project Manager-Team Member", 
                                "Teammates", "Parent-Teacher", "Teacher-Student", 
                                "Investor-SponsorEntrepreneur", "Patient-CareGiver", "Tenant-Landlord",
                                "HOA Board Member-Owner", "Blank > Create Your Own"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start text-slate-700">
                                    <Check className="text-teal-500 mr-3 flex-shrink-0" size={20} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};