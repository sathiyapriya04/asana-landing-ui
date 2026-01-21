import React from 'react';
import { TargetIcon, ChartIcon, ClipboardIcon, CheckIcon, LightningIcon, UserIcon } from './Icons';

const Hero = () => {
    const handlePlaceholder = () => console.log('Button clicked - placeholder');

    return (
        <section className="pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-12 md:pb-16 lg:pb-20 min-h-screen overflow-hidden" style={{ backgroundColor: '#FEF3F2' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                {/* Centered Text */}
                <div className="text-center mb-8 md:mb-12 lg:mb-16">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-text-dark mb-3 sm:mb-4 md:mb-5 leading-tight">
                        A smarter way to work
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg text-text-gray leading-relaxed mb-5 sm:mb-6 md:mb-8 max-w-xl mx-auto px-2 sm:px-4">
                        With Asana, you can drive clarity and impact at scale by connecting work and
                        workflows to company-wide goals.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center px-4">
                        <button className="bg-asana-green text-white px-5 sm:px-6 py-2.5 sm:py-3 md:px-7 md:py-3.5 rounded-md text-sm sm:text-base font-medium hover:bg-asana-green-dark transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5" onClick={handlePlaceholder}>
                            Get started
                        </button>
                        <button className="bg-white text-text-dark px-5 sm:px-6 py-2.5 sm:py-3 md:px-7 md:py-3.5 rounded-md text-sm sm:text-base font-medium border border-gray-300 hover:border-gray-400 transition-all duration-200 hover:shadow-md" onClick={handlePlaceholder}>
                            See how it works
                        </button>
                    </div>
                </div>

                {/* Floating Dashboard Cards */}
                <div className="relative h-auto lg:h-[520px] max-w-6xl mx-auto flex flex-col lg:block gap-4">

                    {/* Left Column - Goals Card */}
                    <div className="lg:absolute lg:top-0 lg:left-0 lg:w-56 bg-white rounded-xl p-4 sm:p-5 shadow-lg border border-gray-100">
                        <div className="text-[10px] font-semibold text-text-muted tracking-wider uppercase mb-2">OPERATIONS</div>
                        <h4 className="text-sm sm:text-base font-medium text-text-dark mb-3 sm:mb-4">These goals are on track</h4>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2 sm:gap-3">
                                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                                    <TargetIcon size={14} color="#7c3aed" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="text-xs sm:text-sm text-text-dark mb-1 truncate">Monitor budget</div>
                                    <div className="flex items-center gap-2">
                                        <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-purple-500 rounded-full transition-all duration-500" style={{ width: '95%' }} />
                                        </div>
                                        <span className="text-[10px] sm:text-xs text-text-gray">95%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-3">
                                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
                                    <ChartIcon size={14} color="#06b6d4" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="text-xs sm:text-sm text-text-dark mb-1 truncate">Resource planning</div>
                                    <div className="flex items-center gap-2">
                                        <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-cyan-400 rounded-full transition-all duration-500" style={{ width: '78%' }} />
                                        </div>
                                        <span className="text-[10px] sm:text-xs text-text-gray">78%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Left Column - Marketing Card */}
                    <div className="lg:absolute lg:top-[220px] lg:left-0 lg:w-56 bg-white rounded-xl p-4 sm:p-5 shadow-lg border border-gray-100">
                        <div className="text-[10px] font-semibold text-text-muted tracking-wider uppercase mb-2">MARKETING</div>
                        <h4 className="text-sm sm:text-base font-medium text-text-dark mb-3 sm:mb-4">1 task to complete</h4>
                        <div className="space-y-2 sm:space-y-3">
                            <div className="flex items-center gap-2 sm:gap-3">
                                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-yellow-400 flex items-center justify-center flex-shrink-0">
                                    <LightningIcon size={14} color="#fff" />
                                </div>
                                <div className="flex items-center gap-2 min-w-0">
                                    <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-gray-300 flex-shrink-0"></div>
                                    <span className="text-xs sm:text-sm text-text-gray truncate">Revise marketing OKRs</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-3">
                                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-500 flex items-center justify-center flex-shrink-0">
                                    <ChartIcon size={14} color="#fff" />
                                </div>
                                <div className="flex items-center gap-2 min-w-0">
                                    <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-green-500 bg-green-500 flex items-center justify-center flex-shrink-0">
                                        <CheckIcon size={8} color="#fff" />
                                    </div>
                                    <span className="text-xs sm:text-sm text-text-gray line-through truncate">Create social content</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-3">
                                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-green-600 flex items-center justify-center flex-shrink-0">
                                    <TargetIcon size={14} color="#fff" />
                                </div>
                                <div className="flex items-center gap-2 min-w-0">
                                    <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-green-500 bg-green-500 flex items-center justify-center flex-shrink-0">
                                        <CheckIcon size={8} color="#fff" />
                                    </div>
                                    <span className="text-xs sm:text-sm text-text-gray line-through truncate">Align on brief</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Center - Timeline Card (Main Product Launch) */}
                    <div className="lg:absolute lg:top-10 lg:left-1/2 lg:-translate-x-1/2 lg:w-[440px] bg-white rounded-xl p-4 sm:p-5 shadow-xl order-first lg:order-none border border-gray-100">
                        <div className="flex flex-wrap sm:flex-nowrap justify-between items-center gap-2 mb-3 sm:mb-4">
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-red-400 flex items-center justify-center flex-shrink-0">
                                    <ClipboardIcon size={12} color="#fff" />
                                </div>
                                <span className="text-sm sm:text-base font-semibold text-text-dark">Product launch plan</span>
                            </div>
                            <div className="flex items-center">
                                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="" className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-white -ml-1 object-cover" />
                                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="" className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-white -ml-2 object-cover" />
                                <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="" className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-white -ml-2 object-cover hidden sm:block" />
                                <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="" className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-white -ml-2 object-cover hidden md:block" />
                                <span className="text-[10px] sm:text-xs text-text-gray ml-1 sm:ml-2 font-medium">71+</span>
                            </div>
                        </div>
                        <div className="flex gap-2 sm:gap-4 mb-3 sm:mb-4 pb-2 border-b border-gray-200 text-xs sm:text-sm overflow-x-auto scrollbar-hide">
                            <span className="text-text-muted whitespace-nowrap">Overview</span>
                            <span className="text-text-muted whitespace-nowrap">List</span>
                            <span className="text-text-muted whitespace-nowrap">Board</span>
                            <span className="text-text-dark font-medium border-b-2 border-text-dark pb-[9px] -mb-[9px] whitespace-nowrap">Timeline</span>
                        </div>

                        {/* Timeline Grid */}
                        <div className="text-[9px] sm:text-[10px] text-text-muted mb-2 flex">
                            <span className="w-14 sm:w-16"></span>
                            <span className="flex-1">March</span>
                        </div>

                        <div className="space-y-2 overflow-x-auto">
                            {/* Product Row */}
                            <div className="flex items-center min-w-[280px]">
                                <span className="text-[10px] sm:text-xs text-text-gray w-14 sm:w-16 flex-shrink-0">• Product</span>
                                <div className="flex-1 relative h-6 sm:h-7">
                                    <div className="absolute h-5 sm:h-6 rounded-md bg-green-200 left-[5%] w-[40%] flex items-center px-1.5 sm:px-2 text-[10px] sm:text-xs font-medium text-green-800 overflow-hidden">
                                        <span className="truncate">🟢 Product OKRs drafted</span>
                                    </div>
                                    <div className="absolute h-5 sm:h-6 rounded-md bg-gray-100 border border-gray-300 left-[55%] flex items-center px-1.5 sm:px-2 text-[10px] sm:text-xs text-text-gray overflow-hidden">
                                        <span className="truncate">○ Product launch</span>
                                    </div>
                                </div>
                            </div>

                            {/* Sales Row */}
                            <div className="flex items-center min-w-[280px]">
                                <span className="text-[10px] sm:text-xs text-text-gray w-14 sm:w-16 flex-shrink-0">• Sales</span>
                                <div className="flex-1 relative h-6 sm:h-7">
                                    <div className="absolute h-5 sm:h-6 rounded-md bg-pink-200 left-[25%] w-[35%] flex items-center px-1.5 sm:px-2 text-[10px] sm:text-xs font-medium text-pink-800 overflow-hidden">
                                        <span className="truncate">◈ Stakeholder review</span>
                                    </div>
                                    <div className="absolute h-5 sm:h-6 rounded-md bg-orange-200 left-[65%] w-[25%] flex items-center px-1.5 sm:px-2 text-[10px] sm:text-xs font-medium text-orange-800 overflow-hidden">
                                        <span className="truncate">▣ Set targets</span>
                                    </div>
                                </div>
                            </div>

                            {/* Marketing Row */}
                            <div className="flex items-center min-w-[280px]">
                                <span className="text-[10px] sm:text-xs text-text-gray w-14 sm:w-16 flex-shrink-0">• Marketing</span>
                                <div className="flex-1 relative h-6 sm:h-7">
                                    <div className="absolute h-5 sm:h-6 rounded-md bg-teal-200 left-[40%] w-[45%] flex items-center px-1.5 sm:px-2 text-[10px] sm:text-xs font-medium text-teal-800 overflow-hidden">
                                        <span className="truncate">◆ Revise marketing OKRs</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Auto Messages Card */}
                    <div className="lg:absolute lg:top-0 lg:right-0 lg:w-52 bg-white rounded-xl p-4 sm:p-5 shadow-lg border border-gray-100">
                        <div className="text-[10px] font-semibold text-text-muted tracking-wider uppercase mb-2">PRODUCT</div>
                        <h4 className="text-sm sm:text-base font-medium text-text-dark mb-2 sm:mb-3">Automatically send messages</h4>
                        <div className="space-y-2 mb-3 sm:mb-4">
                            <div className="flex items-center gap-2 text-[10px] sm:text-xs">
                                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                                    <UserIcon size={10} color="#3b82f6" />
                                </div>
                                <span className="text-text-gray truncate">Task marked Approved →</span>
                            </div>
                            <div className="flex items-center gap-2 text-[10px] sm:text-xs">
                                <div className="w-3 h-3 sm:w-4 sm:h-4 rounded bg-purple-500 flex items-center justify-center text-white text-[7px] sm:text-[8px] flex-shrink-0">M</div>
                                <span className="text-text-gray truncate">Message Engineering</span>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-green-300 flex flex-col items-center justify-center bg-white">
                                <span className="text-xl sm:text-2xl font-bold text-text-dark">27</span>
                                <span className="text-[10px] sm:text-xs text-text-gray">tasks</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Approval Card */}
                    <div className="lg:absolute lg:top-[240px] lg:right-0 lg:w-52 bg-white rounded-xl p-4 sm:p-5 shadow-lg border border-gray-100">
                        <h4 className="text-xs sm:text-sm font-medium text-text-dark mb-3 sm:mb-4">IT team is waiting for your approval</h4>
                        <div className="flex items-center gap-1 sm:gap-2 mb-3 sm:mb-4">
                            <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover" />
                            <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover" />
                            <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover" />
                        </div>
                        <div className="space-y-1.5 sm:space-y-2">
                            <div className="flex items-center gap-1.5 sm:gap-2">
                                <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                                    <CheckIcon size={8} color="#fff" />
                                </div>
                                <span className="text-[10px] sm:text-xs text-text-gray">Approve</span>
                            </div>
                            <div className="flex items-center gap-1.5 sm:gap-2">
                                <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0">
                                    <span className="text-[7px] sm:text-[8px] text-white">↺</span>
                                </div>
                                <span className="text-[10px] sm:text-xs text-text-gray">Request changes</span>
                            </div>
                            <div className="flex items-center gap-1.5 sm:gap-2">
                                <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-red-400 flex items-center justify-center flex-shrink-0">
                                    <span className="text-[8px] sm:text-[10px] text-white">×</span>
                                </div>
                                <span className="text-[10px] sm:text-xs text-text-gray">Reject</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
