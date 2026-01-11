import React from 'react';
import { PlayIcon, BookIcon, ClipboardIcon, ArrowRightIcon } from './Icons';

const Resources = () => {
    const handlePlaceholder = () => console.log('Button clicked - placeholder');

    const resources = [
        { icon: <PlayIcon size={32} color="#1e6b52" />, title: 'Try Asana in action', desc: 'See how Asana works for your team', link: 'Watch' },
        { icon: <BookIcon size={32} color="#7c3aed" />, title: 'Discover resources', desc: 'Guides, webinars, and best practices', link: 'Get to Resources Hub' },
        { icon: <ClipboardIcon size={32} color="#f06a6a" />, title: 'Start with a template', desc: 'Pre-built workflows for every team', link: 'See templates' },
    ];

    return (
        <section className="bg-gray-50 py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <h2 className="text-xl md:text-2xl font-medium text-text-dark mb-6 md:mb-8">Get started easily</h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {resources.map((item, i) => (
                        <div key={i} className="bg-white rounded-xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="h-28 md:h-36 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                                {item.icon}
                            </div>
                            <h4 className="text-base font-medium text-text-dark mb-2">{item.title}</h4>
                            <p className="text-sm text-text-gray leading-relaxed mb-3">{item.desc}</p>
                            <a href="#" className="inline-flex items-center gap-1 text-sm text-text-dark font-medium hover:text-asana-green" onClick={handlePlaceholder}>
                                {item.link} <ArrowRightIcon size={14} color="currentColor" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Resources;
