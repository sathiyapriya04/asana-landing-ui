import React from 'react';
import { TargetIcon, SparklesIcon, LockIcon, LayersIcon, CheckIcon } from './Icons';

const WhatSetsApart = () => {
    const handlePlaceholder = () => console.log('Button clicked - placeholder');

    return (
        <section className="bg-white py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <h2 className="text-2xl md:text-3xl font-medium text-text-dark mb-8 md:mb-12">What sets Asana apart</h2>

                {/* Feature 1 - Goals */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center mb-12 pb-12 border-b border-gray-200">
                    <div className="flex-1">
                        <h3 className="text-lg md:text-xl font-medium text-text-dark mb-3">More clarity and accountability</h3>
                        <p className="text-[15px] text-text-gray leading-relaxed mb-6">
                            Connect company goals to the work needed to achieve them. Give everyone a clear view, adjust based on data, and keep the company on track.
                        </p>
                        <button className="px-5 py-2.5 rounded-md text-sm font-medium border border-gray-300 text-text-dark hover:border-gray-400 transition-colors" onClick={handlePlaceholder}>Learn about goals</button>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <div className="bg-gray-50 rounded-xl p-5 w-full max-w-sm shadow-md">
                            <span className="inline-flex items-center gap-1 bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full mb-4">
                                <CheckIcon size={12} color="#065f46" /> This goal: On track
                            </span>
                            <div className="flex items-center gap-2 mb-3">
                                <TargetIcon size={16} color="#1e6b52" />
                                <span className="flex-1 text-[13px] text-text-dark">Increase brand awareness</span>
                                <div className="w-14 h-1.5 bg-gray-200 rounded"><div className="h-full bg-asana-purple rounded" style={{ width: '85%' }} /></div>
                                <span className="text-xs text-text-gray w-8 text-right">85%</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <TargetIcon size={16} color="#1e6b52" />
                                <span className="flex-1 text-[13px] text-text-dark">Launch new product</span>
                                <div className="w-14 h-1.5 bg-gray-200 rounded"><div className="h-full bg-cyan-400 rounded" style={{ width: '60%' }} /></div>
                                <span className="text-xs text-text-gray w-8 text-right">60%</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Feature 2 - AI */}
                <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-16 items-center mb-12 pb-12 border-b border-gray-200">
                    <div className="flex-1">
                        <h3 className="text-lg md:text-xl font-medium text-text-dark mb-3">Greater impact with AI</h3>
                        <p className="text-[15px] text-text-gray leading-relaxed mb-6">
                            With Asana AI, get answers about your projects, optimize team capacity, create automations, and identify blockers—all in seconds.
                        </p>
                        <button className="px-5 py-2.5 rounded-md text-sm font-medium border border-gray-300 text-text-dark hover:border-gray-400 transition-colors" onClick={handlePlaceholder}>Meet Asana Intelligence</button>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <div className="bg-gray-50 rounded-xl p-5 w-full max-w-sm shadow-md">
                            <div className="flex items-center gap-2 mb-4">
                                <SparklesIcon size={20} color="#7c3aed" />
                                <span className="text-[13px] font-medium text-asana-purple">Asana Intelligence</span>
                            </div>
                            <div className="flex gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-asana-purple text-white flex items-center justify-center text-[10px] font-semibold shrink-0">AI</div>
                                <div className="bg-white rounded-lg p-3 shadow-sm"><p className="text-[13px] text-text-dark leading-snug">Based on recent progress, I recommend extending the deadline by 2 days.</p></div>
                            </div>
                            <div className="flex gap-2">
                                <button className="bg-asana-purple text-white px-3 py-1.5 rounded text-xs font-medium">Accept</button>
                                <button className="bg-white text-text-gray px-3 py-1.5 rounded text-xs font-medium border border-gray-200">Dismiss</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scale Section */}
                <h2 className="text-2xl md:text-3xl font-medium text-text-dark mb-8">A smarter way to scale</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Security Card */}
                    <div className="bg-bg-navy rounded-2xl p-6 md:p-8">
                        <span className="inline-block bg-white/15 text-white text-xs font-medium px-3 py-1 rounded-full mb-4">Enterprise-grade security</span>
                        <p className="text-[15px] text-white/75 leading-relaxed mb-6">Admin controls, data protection, and security certifications with the latest industry practices.</p>
                        <div className="flex gap-3 mb-6">
                            <div className="w-11 h-11 bg-white/15 rounded-lg flex items-center justify-center"><LockIcon size={20} color="white" /></div>
                            <div className="w-11 h-11 bg-asana-blue rounded-lg flex items-center justify-center text-white text-xs font-bold">ISO</div>
                            <div className="w-11 h-11 bg-white/15 rounded-lg flex items-center justify-center"><LayersIcon size={20} color="white" /></div>
                        </div>
                        <button className="bg-white text-bg-navy px-5 py-2.5 rounded-md text-sm font-medium" onClick={handlePlaceholder}>Explore security</button>
                    </div>

                    {/* Integrations Card */}
                    <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
                        <div className="grid grid-cols-4 gap-3 mb-6">
                            {[1, 2, 3, 4].map(i => <div key={i} className="aspect-square bg-white rounded-xl flex items-center justify-center shadow-sm"><LayersIcon size={20} color="#1e6b52" /></div>)}
                        </div>
                        <h4 className="text-lg font-medium text-text-dark mb-2">Connect over 300 integrations</h4>
                        <p className="text-sm text-text-gray leading-relaxed mb-5">Bring your favorite tools together to make your team more productive.</p>
                        <button className="px-5 py-2.5 rounded-md text-sm font-medium border border-gray-300 text-text-dark hover:border-gray-400 transition-colors" onClick={handlePlaceholder}>See all integrations</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatSetsApart;
