import React from 'react';
import { PlayIcon, BookIcon, ClipboardIcon, ArrowRightIcon, LayersIcon, ChartIcon, TargetIcon, SparklesIcon } from './Icons';

const Resources = () => {
    const handlePlaceholder = () => console.log('Button clicked - placeholder');

    return (
        <section className="bg-white py-10 sm:py-12 md:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-text-dark mb-5 sm:mb-6 md:mb-8">Get started easily</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                    {/* Card 1 - See Asana in action */}
                    <div className="rounded-xl p-4 sm:p-5 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1" style={{ backgroundColor: '#FFF1F0' }}>
                        <div className="h-24 sm:h-28 md:h-32 lg:h-40 rounded-lg flex items-center justify-center mb-3 sm:mb-4 overflow-hidden" style={{ backgroundColor: '#FFE4E1' }}>
                            <div className="relative w-full h-full flex items-center justify-center">
                                <PlayIcon size={32} color="#E57373" />
                            </div>
                        </div>
                        <h4 className="text-sm sm:text-base font-medium text-text-dark mb-1.5 sm:mb-2">See Asana in action</h4>
                        <p className="text-xs sm:text-sm text-text-gray leading-relaxed mb-2 sm:mb-3">See how Asana works for your team</p>
                        <a href="#" className="inline-flex items-center gap-1 text-xs sm:text-sm text-text-dark font-medium hover:text-asana-green transition-colors" onClick={handlePlaceholder}>
                            View demo <ArrowRightIcon size={12} color="currentColor" />
                        </a>
                    </div>

                    {/* Card 2 - Discover resources */}
                    <div className="rounded-xl p-4 sm:p-5 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1" style={{ backgroundColor: '#FFFCEB' }}>
                        <div className="h-24 sm:h-28 md:h-32 lg:h-40 rounded-lg flex items-center justify-center mb-3 sm:mb-4 overflow-hidden" style={{ backgroundColor: '#FFF8DC' }}>
                            <div className="relative w-full h-full flex items-center justify-center">
                                <BookIcon size={32} color="#F59E0B" />
                            </div>
                        </div>
                        <h4 className="text-sm sm:text-base font-medium text-text-dark mb-1.5 sm:mb-2">Discover resources</h4>
                        <p className="text-xs sm:text-sm text-text-gray leading-relaxed mb-2 sm:mb-3">Guides, webinars, and best practices</p>
                        <a href="#" className="inline-flex items-center gap-1 text-xs sm:text-sm text-text-dark font-medium hover:text-asana-green transition-colors" onClick={handlePlaceholder}>
                            Visit our Resources Hub <ArrowRightIcon size={12} color="currentColor" />
                        </a>
                    </div>

                    {/* Card 3 - Start with a template */}
                    <div className="rounded-xl p-4 sm:p-5 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 sm:col-span-2 md:col-span-1" style={{ backgroundColor: '#EDF9F9' }}>
                        <div className="h-24 sm:h-28 md:h-32 lg:h-40 rounded-lg flex items-center justify-center mb-3 sm:mb-4 overflow-hidden" style={{ backgroundColor: '#D0F0F0' }}>
                            {/* Template grid icons */}
                            <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-white rounded flex items-center justify-center shadow-sm">
                                    <LayersIcon size={14} color="#1e6b52" />
                                </div>
                                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-white rounded flex items-center justify-center shadow-sm">
                                    <ChartIcon size={14} color="#7c3aed" />
                                </div>
                                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-white rounded flex items-center justify-center shadow-sm">
                                    <TargetIcon size={14} color="#f59e0b" />
                                </div>
                                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-white rounded flex items-center justify-center shadow-sm">
                                    <SparklesIcon size={14} color="#06b6d4" />
                                </div>
                                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-white rounded flex items-center justify-center shadow-sm">
                                    <ClipboardIcon size={14} color="#f06a6a" />
                                </div>
                                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-white rounded flex items-center justify-center shadow-sm">
                                    <LayersIcon size={14} color="#1e6b52" />
                                </div>
                            </div>
                        </div>
                        <h4 className="text-sm sm:text-base font-medium text-text-dark mb-1.5 sm:mb-2">Start with a template</h4>
                        <p className="text-xs sm:text-sm text-text-gray leading-relaxed mb-2 sm:mb-3">Pre-built workflows for every team</p>
                        <a href="#" className="inline-flex items-center gap-1 text-xs sm:text-sm text-text-dark font-medium hover:text-asana-green transition-colors" onClick={handlePlaceholder}>
                            View templates <ArrowRightIcon size={12} color="currentColor" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resources;
