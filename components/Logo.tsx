
import React, { useState } from 'react';

interface LogoProps {
    className?: string;
    variant?: 'icon' | 'full';
}

export const Logo: React.FC<LogoProps> = ({ className, variant = 'full' }) => {
    const [error, setError] = useState(false);

    // The component expects these exact filenames in /assets/img/
    const imagePath = variant === 'full' 
        ? 'assets/img/logo-full.png' 
        : 'assets/img/logo-icon.png';

    const altText = variant === 'full' 
        ? 'AlignSynch' 
        : 'AS';

    // Use max-h-full to ensure it respects the parent container (Navbar h-16)
    // w-auto ensures aspect ratio is preserved.
    // object-contain ensures the image fits within the bounds without cropping.
    const defaultClass = className || "h-auto w-auto max-h-12 object-contain";

    // Fallback to text logo if image fails to load
    if (error) {
        return (
            <span className={`font-bold text-slate-900 flex items-center select-none ${variant === 'full' ? 'text-xl tracking-tight' : 'text-2xl'}`}>
                {variant === 'full' ? (
                    <>
                        <span className="text-[#0ea5e9] italic mr-0.5">A</span>
                        <span className="text-[#0f172a] italic mr-2">S</span>
                        <span>Align</span><span className="font-light">Synch</span>
                    </>
                ) : (
                    <>
                        <span className="text-[#0ea5e9] italic mr-0.5">A</span>
                        <span className="text-[#0f172a] italic">S</span>
                    </>
                )}
            </span>
        );
    }

    return (
        <img 
            src={imagePath} 
            alt={altText} 
            className={defaultClass}
            onError={() => setError(true)}
        />
    );
};
