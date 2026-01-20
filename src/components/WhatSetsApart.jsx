import React from 'react';
import { TargetIcon, SparklesIcon, LockIcon, LayersIcon, CheckIcon } from './Icons';

const WhatSetsApart = () => {
    const handlePlaceholder = () => console.log('Button clicked - placeholder');

    return (
        <section className="bg-white py-10 sm:py-12 md:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-text-dark mb-6 sm:mb-8 md:mb-12">What sets Asana apart</h2>

                {/* Feature 1 - Goals */}
                <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center mb-10 sm:mb-12 pb-10 sm:pb-12 border-b border-gray-200">
                    <div className="flex-1 w-full">
                        <h3 className="text-base sm:text-lg md:text-xl font-medium text-text-dark mb-2 sm:mb-3">More clarity and accountability</h3>
                        <p className="text-sm sm:text-[15px] text-text-gray leading-relaxed mb-4 sm:mb-6">
                            Connect company goals to the work needed to achieve them. Give everyone a clear view, adjust based on data, and keep the company on track.
                        </p>
                        <button className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-md text-xs sm:text-sm font-medium border border-gray-300 text-text-dark hover:border-gray-400 transition-colors w-full sm:w-auto" onClick={handlePlaceholder}>Learn about goals</button>
                    </div>
                    <div className="flex-1 flex justify-center w-full">
                        <div className="bg-gray-50 rounded-xl p-4 sm:p-5 w-full max-w-sm shadow-md">
                            <span className="inline-flex items-center gap-1 bg-green-100 text-green-800 text-[10px] sm:text-xs font-medium px-2 py-1 rounded-full mb-3 sm:mb-4">
                                <CheckIcon size={10} color="#065f46" /> This goal: On track
                            </span>
                            <div className="flex items-center gap-2 mb-2 sm:mb-3">
                                <TargetIcon size={14} color="#1e6b52" />
                                <span className="flex-1 text-[11px] sm:text-[13px] text-text-dark truncate">Increase brand awareness</span>
                                <div className="w-12 sm:w-14 h-1.5 bg-gray-200 rounded"><div className="h-full bg-asana-purple rounded" style={{ width: '85%' }} /></div>
                                <span className="text-[10px] sm:text-xs text-text-gray w-7 sm:w-8 text-right">85%</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <TargetIcon size={14} color="#1e6b52" />
                                <span className="flex-1 text-[11px] sm:text-[13px] text-text-dark truncate">Launch new product</span>
                                <div className="w-12 sm:w-14 h-1.5 bg-gray-200 rounded"><div className="h-full bg-cyan-400 rounded" style={{ width: '60%' }} /></div>
                                <span className="text-[10px] sm:text-xs text-text-gray w-7 sm:w-8 text-right">60%</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Feature 2 - AI */}
                <div className="flex flex-col md:flex-row-reverse gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center mb-10 sm:mb-12 pb-10 sm:pb-12 border-b border-gray-200">
                    <div className="flex-1 w-full">
                        <h3 className="text-base sm:text-lg md:text-xl font-medium text-text-dark mb-2 sm:mb-3">Greater impact with AI</h3>
                        <p className="text-sm sm:text-[15px] text-text-gray leading-relaxed mb-4 sm:mb-6">
                            With Asana AI, get answers about your projects, optimize team capacity, create automations, and identify blockers—all in seconds.
                        </p>
                        <button className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-md text-xs sm:text-sm font-medium border border-gray-300 text-text-dark hover:border-gray-400 transition-colors w-full sm:w-auto" onClick={handlePlaceholder}>Meet Asana Intelligence</button>
                    </div>
                    <div className="flex-1 flex justify-center w-full">
                        <div className="bg-gray-50 rounded-xl p-4 sm:p-5 w-full max-w-sm shadow-md">
                            <div className="flex items-center gap-2 mb-3 sm:mb-4">
                                <SparklesIcon size={18} color="#7c3aed" />
                                <span className="text-[11px] sm:text-[13px] font-medium text-asana-purple">Asana Intelligence</span>
                            </div>
                            <div className="flex gap-2 sm:gap-3 mb-3 sm:mb-4">
                                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-asana-purple text-white flex items-center justify-center text-[9px] sm:text-[10px] font-semibold shrink-0">AI</div>
                                <div className="bg-white rounded-lg p-2.5 sm:p-3 shadow-sm"><p className="text-[11px] sm:text-[13px] text-text-dark leading-snug">Based on recent progress, I recommend extending the deadline by 2 days.</p></div>
                            </div>
                            <div className="flex gap-2">
                                <button className="bg-asana-purple text-white px-2.5 sm:px-3 py-1 sm:py-1.5 rounded text-[10px] sm:text-xs font-medium">Accept</button>
                                <button className="bg-white text-text-gray px-2.5 sm:px-3 py-1 sm:py-1.5 rounded text-[10px] sm:text-xs font-medium border border-gray-200">Dismiss</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatSetsApart;
