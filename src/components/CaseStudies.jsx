import React from 'react';
import { CartIcon, ChartIcon, PaletteIcon, MusicIcon } from './Icons';

const CaseStudies = () => {
    const handlePlaceholder = () => console.log('Button clicked - placeholder');

    const cases = [
        { company: 'Overstock', icon: <CartIcon size={32} color="white" />, desc: 'How Overstock manages enterprise-scale projects with Asana', bg: 'bg-gray-700' },
        { company: 'HubSpot', icon: <ChartIcon size={32} color="white" />, desc: 'How HubSpot improved team productivity by 60%', bg: 'bg-orange-600' },
        { company: 'Figma', icon: <PaletteIcon size={32} color="white" />, desc: 'How Figma scales product development with Asana', bg: 'bg-text-dark' },
        { company: 'Sony Music', icon: <MusicIcon size={32} color="white" />, desc: 'How Sony Music coordinates global marketing campaigns', bg: 'bg-gray-700' },
    ];

    return (
        <section className="bg-white py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 md:mb-8">
                    <h2 className="text-xl md:text-2xl font-medium text-text-dark">The world's top companies trust Asana</h2>
                    <a href="#" className="text-[15px] text-text-dark font-medium hover:text-asana-green" onClick={handlePlaceholder}>See all case studies →</a>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cases.map((item, i) => (
                        <div key={i} className="cursor-pointer group">
                            <div className={`${item.bg} h-36 md:h-40 rounded-xl flex flex-col items-center justify-center gap-3 mb-4 group-hover:scale-105 transition-transform`}>
                                {item.icon}
                                <span className="text-white font-semibold">{item.company}</span>
                            </div>
                            <p className="text-sm text-text-gray leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
