import React from 'react';

interface SectionBackdropProps {
    accent?: 'blue' | 'violet' | 'cyan';
}

const accentMap = {
    blue: 'from-blue-500/18 via-cyan-400/8 to-transparent',
    violet: 'from-violet-500/18 via-fuchsia-400/8 to-transparent',
    cyan: 'from-cyan-500/18 via-blue-400/8 to-transparent',
};

const SectionBackdrop = ({ accent = 'blue' }: SectionBackdropProps) => {
    return (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden [contain:paint]">
            <div className={`absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_64%)] ${accentMap[accent]}`} />
            <div className="absolute right-[-6rem] top-12 h-56 w-56 rounded-full bg-blue-500/8 blur-2xl" />
            <div className="absolute left-[-5rem] bottom-[-5rem] h-56 w-56 rounded-full bg-fuchsia-500/6 blur-2xl" />
        </div>
    );
};

export default React.memo(SectionBackdrop);