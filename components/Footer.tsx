import React from 'react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-white py-12 border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                
                <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
                    <Link to="/" className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-700 rounded-md flex items-center justify-center text-white font-bold italic text-lg shadow-sm">
                            AS
                        </div>
                        <span className="text-xs text-slate-500 ml-2">Improve Important Relationships</span>
                    </Link>
                    <div className="flex gap-4 mt-2">
                        <Link to="/about-us" className="text-xs text-slate-400 hover:text-cyan-600 transition-colors">About Us</Link>
                        <span className="text-xs text-slate-300">|</span>
                        <Link to="/how-it-works" className="text-xs text-slate-400 hover:text-cyan-600 transition-colors">How it Works</Link>
                        <span className="text-xs text-slate-300">|</span>
                         <span className="text-xs text-slate-400">© 2025 - AlignSynch</span>
                    </div>
                </div>

                <div className="flex space-x-6">
                    <a href="#" className="text-slate-400 hover:text-slate-600 transition-colors">
                        <Instagram size={20} />
                    </a>
                    <a href="#" className="text-slate-400 hover:text-slate-600 transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href="#" className="text-slate-400 hover:text-slate-600 transition-colors">
                        <Twitter size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};