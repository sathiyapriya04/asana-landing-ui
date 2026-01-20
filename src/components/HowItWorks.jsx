import React from 'react';
import { BookIcon, DocumentIcon, PlayIcon, CheckIcon, ArrowRightIcon } from './Icons';

const HowItWorks = () => {
    const handlePlaceholder = () => console.log('Button clicked - placeholder');

    const resources = [
        { icon: <BookIcon size={20} color="#7c3aed" />, type: 'Ebook', title: 'Asana Starter Guide' },
        { icon: <DocumentIcon size={20} color="#1e6b52" />, type: 'Article', title: 'Getting started with Goals' },
        { icon: <PlayIcon size={20} color="#f06a6a" />, type: 'Webinar', title: 'Team onboarding best practices' },
    ];

    return (
        <section className="bg-white py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                    <div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-text-dark mb-4">Get started easily</h2>
                        <p className="text-base md:text-[17px] text-text-gray leading-relaxed mb-8">
                            Whether you're new to work management or a seasoned pro, we have resources to help you succeed.
                        </p>

                        <div className="flex flex-col gap-3 mb-8">
                            {resources.map((item, i) => (
                                <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors">
                                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm shrink-0">{item.icon}</div>
                                    <div className="flex-1 min-w-0">
                                        <span className="text-[11px] font-semibold text-text-muted uppercase tracking-wide">{item.type}</span>
                                        <span className="block text-[15px] font-medium text-text-dark truncate">{item.title}</span>
                                    </div>
                                    <ArrowRightIcon size={16} color="#9a9a9a" />
                                </div>
                            ))}
                        </div>

                        <button className="bg-text-dark text-white px-6 py-3 rounded-md text-[15px] font-medium hover:bg-gray-800 transition-colors" onClick={handlePlaceholder}>View all resources</button>
                    </div>

                    <div className="flex justify-center">
                        <div className="bg-bg-cream rounded-2xl p-6 md:p-8 w-full max-w-sm">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md text-2xl">👋</div>
                                <div>
                                    <strong className="text-lg text-text-dark">Welcome!</strong>
                                    <p className="text-sm text-text-gray">Let's set up your first project</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2.5">
                                <div className="flex items-center gap-3 p-3.5 bg-white rounded-lg shadow-sm">
                                    <span className="w-6 h-6 rounded-full bg-asana-green text-white flex items-center justify-center text-xs font-semibold">1</span>
                                    <span className="flex-1 text-[15px] font-medium text-text-dark">Create workspace</span>
                                    <CheckIcon size={16} color="#1e6b52" />
                                </div>
                                <div className="flex items-center gap-3 p-3.5 bg-white rounded-lg shadow-sm">
                                    <span className="w-6 h-6 rounded-full bg-asana-green text-white flex items-center justify-center text-xs font-semibold">2</span>
                                    <span className="flex-1 text-[15px] font-medium text-text-dark">Invite team</span>
                                    <CheckIcon size={16} color="#1e6b52" />
                                </div>
                                <div className="flex items-center gap-3 p-3.5 bg-white rounded-lg border-2 border-asana-green shadow-sm">
                                    <span className="w-6 h-6 rounded-full bg-asana-green text-white flex items-center justify-center text-xs font-semibold">3</span>
                                    <span className="flex-1 text-[15px] font-medium text-text-dark">Start project</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
