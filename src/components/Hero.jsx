import React from 'react';
import { TargetIcon, ChartIcon, ClipboardIcon, CheckIcon } from './Icons';

const Hero = () => {
    const handlePlaceholder = () => console.log('Button clicked - placeholder');

    return (
        <section className="bg-gradient-to-b from-bg-cream via-orange-50/50 to-orange-100/30 pt-28 md:pt-36 pb-12 md:pb-16 min-h-screen overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                {/* Centered Text */}
                <div className="text-center mb-8 md:mb-16">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-text-dark mb-4 md:mb-5 leading-tight">
                        A smarter way to work
                    </h1>
                    <p className="text-base md:text-lg text-text-gray leading-relaxed mb-6 md:mb-8 max-w-xl mx-auto px-4">
                        With Asana, you can drive clarity and impact at scale by connecting work and
                        workflows to company-wide goals.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center px-4">
                        <button className="bg-asana-green text-white px-6 py-3 md:px-7 md:py-3.5 rounded-md text-base font-medium hover:bg-asana-green-dark transition-colors" onClick={handlePlaceholder}>
                            Get started
                        </button>
                        <button className="bg-white text-text-dark px-6 py-3 md:px-7 md:py-3.5 rounded-md text-base font-medium border border-gray-300 hover:border-gray-400 transition-colors" onClick={handlePlaceholder}>
                            See how it works
                        </button>
                    </div>
                </div>

                {/* Floating Dashboard Cards */}
                <div className="relative h-auto md:h-[480px] max-w-5xl mx-auto flex flex-col md:block gap-4">
                    {/* Left - Goals Card */}
                    <div className="md:absolute md:top-0 md:left-0 md:w-52 bg-white rounded-xl p-4 md:p-5 shadow-lg">
                        <div className="text-[10px] font-semibold text-text-muted tracking-wide mb-1">OPERATIONS</div>
                        <h4 className="text-[15px] font-medium text-text-dark mb-3">These goals are on track</h4>
                        <div className="flex items-center gap-2 mb-2 text-[13px]">
                            <TargetIcon size={14} color="#1e6b52" />
                            <span className="flex-1 text-text-gray">Monitor budget</span>
                            <div className="w-12 h-1 bg-gray-200 rounded overflow-hidden">
                                <div className="h-full bg-asana-purple rounded" style={{ width: '95%' }} />
                            </div>
                            <span className="text-xs text-text-gray w-7 text-right">95%</span>
                        </div>
                        <div className="flex items-center gap-2 text-[13px]">
                            <ChartIcon size={14} color="#1e6b52" />
                            <span className="flex-1 text-text-gray">Resource planning</span>
                            <div className="w-12 h-1 bg-gray-200 rounded overflow-hidden">
                                <div className="h-full bg-cyan-400 rounded" style={{ width: '78%' }} />
                            </div>
                            <span className="text-xs text-text-gray w-7 text-right">78%</span>
                        </div>
                    </div>

                    {/* Center - Timeline Card */}
                    <div className="md:absolute md:top-10 md:left-1/2 md:-translate-x-1/2 md:w-[420px] bg-white rounded-xl p-4 md:p-6 shadow-lg order-first md:order-none">
                        <div className="flex justify-between items-center mb-3">
                            <div className="flex items-center gap-2 text-base text-text-dark font-semibold">
                                <ClipboardIcon size={18} color="#1e1e1e" />
                                Product launch plan
                            </div>
                            <div className="flex items-center">
                                <div className="w-6 h-6 rounded-full bg-gray-200 text-text-gray flex items-center justify-center text-[10px] font-semibold -ml-1 border-2 border-white">A</div>
                                <div className="w-6 h-6 rounded-full bg-gray-200 text-text-gray flex items-center justify-center text-[10px] font-semibold -ml-1 border-2 border-white">B</div>
                                <span className="text-xs text-text-gray ml-1">71+</span>
                            </div>
                        </div>
                        <div className="flex gap-4 mb-4 pb-2 border-b border-gray-200 text-[13px] overflow-x-auto">
                            <span className="text-text-muted">Overview</span>
                            <span className="text-text-muted">List</span>
                            <span className="text-text-dark font-medium border-b-2 border-text-dark pb-[9px] -mb-[9px]">Timeline</span>
                        </div>
                        <div className="min-h-[100px] md:min-h-[140px]">
                            <div className="text-xs text-text-gray mb-2">+ Product</div>
                            <div className="relative h-7 mb-2">
                                <div className="absolute h-[22px] rounded bg-green-200 left-[10%] w-[35%] flex items-center px-2 text-[11px] font-medium text-text-dark overflow-hidden whitespace-nowrap">
                                    Product OKRs drafted
                                </div>
                            </div>
                            <div className="relative h-7">
                                <div className="absolute h-[22px] rounded bg-pink-200 left-[35%] w-[35%] flex items-center px-2 text-[11px] font-medium text-text-dark overflow-hidden whitespace-nowrap">
                                    Stakeholder review
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Messages Card */}
                    <div className="md:absolute md:top-0 md:right-0 md:w-44 bg-white rounded-xl p-4 md:p-5 shadow-lg">
                        <div className="text-[10px] font-semibold text-text-muted tracking-wide mb-1">PRODUCT</div>
                        <h4 className="text-[15px] font-medium text-text-dark mb-3">Automatically send messages</h4>
                        <div className="w-20 h-20 rounded-full border-4 border-green-200 flex flex-col items-center justify-center mx-auto mt-4">
                            <span className="text-2xl font-semibold text-text-dark">27</span>
                            <span className="text-[11px] text-text-gray">tasks</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
