import React from 'react';
import { ArrowRight, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export const RelationshipsPage: React.FC = () => {
    return (
        <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-normal text-slate-800 mb-8">AlignSynch Demo Templates</h1>

                <div className="space-y-6">
                    {/* Card 1: Neighbor */}
                    <TemplateCard 
                        id="15414"
                        title="Neighbor A - Neighbor B - Alignment"
                        description="Maintaining a positive neighborly relationship is essential for a harmonious community and friendly atmosphere. Here are a variety of aspects to consider seeing if you are on the same page."
                        image="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                        initiator={{ name: "Rob Waters", role: "NeighborA", avatar: "https://i.pravatar.cc/150?u=rob" }}
                        counterparty={{ name: "John Walters", role: "NeighborB", avatar: "https://i.pravatar.cc/150?u=john" }}
                        coach={{ name: "Molly Joyfield", role: "Mutual Fiend", avatar: "https://i.pravatar.cc/150?u=molly" }}
                        type="PERSONAL"
                    />

                    {/* Card 2: Staff Manager */}
                    <TemplateCard 
                        id="15415"
                        title="Staff - Manager"
                        description="About\nThis is the descriptor"
                        image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                        initiator={{ name: "BlankA", role: "", avatar: "https://i.pravatar.cc/150?u=blanka" }}
                        counterparty={{ name: "BlankB", role: "", avatar: "https://i.pravatar.cc/150?u=blankb" }}
                        coach={{ name: "Molly Joyfield", role: "BlankC", avatar: "https://i.pravatar.cc/150?u=molly" }}
                        type="PERSONAL"
                    />
                </div>
            </div>
        </div>
    );
};

interface RoleProps {
    name: string;
    role: string;
    avatar: string;
}

interface TemplateCardProps {
    id: string;
    title: string;
    description: string;
    image: string;
    initiator: RoleProps;
    counterparty: RoleProps;
    coach: RoleProps;
    type: string;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ id, title, description, image, initiator, counterparty, coach, type }) => {
    return (
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="md:w-1/4 h-48 md:h-auto relative overflow-hidden">
                <img src={image} alt={title} className="w-full h-full object-cover" />
            </div>

            {/* Content Section */}
            <div className="p-6 md:w-3/4 flex flex-col justify-between">
                <div>
                    <h2 className="text-xl md:text-2xl font-medium text-slate-700 mb-2">{title}</h2>
                    <p className="text-slate-500 text-sm mb-4 leading-relaxed whitespace-pre-line">{description}</p>
                    <p className="text-xs text-slate-400 mb-4">{id}</p>

                    {/* Roles Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                        <RoleBadge type="INITIATOR" data={initiator} />
                        <RoleBadge type="COUNTERPARTY" data={counterparty} color="border-purple-300 bg-purple-50 text-purple-700" />
                        <RoleBadge type="COACH" data={coach} color="border-blue-300 bg-blue-50 text-blue-700" />
                    </div>
                </div>

                {/* Actions Row */}
                <div className="flex flex-wrap items-center gap-3">
                    <button className="bg-amber-400 hover:bg-amber-500 text-white text-xs font-bold py-2 px-4 rounded uppercase tracking-wide">
                        Demo Template
                    </button>
                    <button className="bg-indigo-500 hover:bg-indigo-600 text-white text-xs font-bold py-2 px-4 rounded uppercase tracking-wide">
                        {type}
                    </button>
                    <div className="flex-grow"></div>
                    <Link to="/relationships/demo" className="bg-teal-400 hover:bg-teal-500 text-white text-sm font-medium py-2 px-6 rounded flex items-center gap-2 transition-colors">
                        View Details <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

const RoleBadge: React.FC<{ type: string; data: RoleProps; color?: string }> = ({ type, data, color = "border-green-300 bg-green-50 text-green-700" }) => {
    return (
        <div className="relative pt-3">
             <span className={`absolute top-0 left-2 text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider border ${color}`}>
                {type}
            </span>
            <div className="border border-slate-200 rounded-md p-3 flex items-center gap-3 mt-1">
                <img src={data.avatar} alt={data.name} className="w-10 h-10 rounded-full object-cover border border-slate-100" />
                <div>
                    <p className="text-sm font-bold text-slate-800">{data.name.split(' ')[0]} <span className="font-extrabold">{data.name.split(' ')[1]}</span></p>
                    {data.role && <p className="text-xs text-slate-500">{data.role}</p>}
                </div>
            </div>
        </div>
    );
};
