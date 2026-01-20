import React from 'react';
import { SparklesIcon, TargetIcon, LockIcon, ShieldIcon, LayersIcon } from './Icons';

// App icons for integrations
const GmailIcon = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4Z" fill="#EA4335" />
        <path d="M20 6L12 13L4 6" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

const SlackIcon = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z" fill="#E01E5A" />
        <path d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z" fill="#36C5F0" />
        <path d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z" fill="#2EB67D" />
        <path d="M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" fill="#ECB22E" />
    </svg>
);

const OutlookIcon = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect x="2" y="4" width="20" height="16" rx="2" fill="#0078D4" />
        <path d="M12 14L2 8V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8L12 14Z" fill="#28A8EA" />
        <path d="M22 6L12 12L2 6V4C2 2.9 2.9 2 4 2H20C21.1 2 22 2.9 22 4V6Z" fill="#0078D4" />
    </svg>
);

const ZoomIcon = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect x="2" y="5" width="20" height="14" rx="3" fill="#2D8CFF" />
        <path d="M16 9L20 7V17L16 15V9Z" fill="white" />
        <rect x="4" y="8" width="10" height="8" rx="1" fill="white" />
    </svg>
);

const SalesforceIcon = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="12" rx="10" ry="8" fill="#00A1E0" />
        <circle cx="8" cy="10" r="3" fill="#1798C1" />
        <circle cx="16" cy="10" r="3" fill="#1798C1" />
        <path d="M7 14C7 16 9 18 12 18C15 18 17 16 17 14" stroke="white" strokeWidth="1.5" />
    </svg>
);

const PowerBIIcon = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect x="3" y="6" width="4" height="14" rx="1" fill="#F2C811" />
        <rect x="10" y="4" width="4" height="16" rx="1" fill="#F2C811" />
        <rect x="17" y="8" width="4" height="12" rx="1" fill="#F2C811" />
    </svg>
);

const Features = () => {
    const handlePlaceholder = () => console.log('Button clicked - placeholder');

    return (
        <>
            {/* AI Section */}
            <section className="bg-bg-navy py-10 sm:py-12 md:py-16 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                    <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center">
                        <div>
                            <span className="inline-block bg-white/15 text-white text-[10px] sm:text-xs font-medium px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full mb-3 sm:mb-4">Asana Intelligence</span>
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-tight mb-4 sm:mb-5">
                                Greater clarity and<br className="hidden sm:block" />accountability with AI
                            </h2>
                            <p className="text-sm sm:text-base md:text-[17px] text-white/75 leading-relaxed mb-5 sm:mb-6">
                                With Asana AI, get answers about your projects, automate workflows, and understand the status of work—all in seconds.
                            </p>
                            <button className="bg-white text-bg-navy px-5 sm:px-6 py-2.5 sm:py-3 rounded-md text-sm sm:text-[15px] font-medium hover:bg-gray-100 transition-colors w-full sm:w-auto" onClick={handlePlaceholder}>
                                Explore AI →
                            </button>
                        </div>
                        <div className="flex flex-col gap-3 sm:gap-4">
                            <div className="bg-white/10 backdrop-blur rounded-xl p-4 sm:p-5">
                                <div className="flex items-center gap-2 mb-1.5 sm:mb-2 text-white font-medium text-sm sm:text-base">
                                    <SparklesIcon size={18} color="#7c3aed" /> Smart status
                                </div>
                                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">AI summarizes project updates and identifies risks automatically.</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur rounded-xl p-4 sm:p-5">
                                <div className="flex items-center gap-2 mb-1.5 sm:mb-2 text-white font-medium text-sm sm:text-base">
                                    <TargetIcon size={18} color="#1e6b52" /> Smart goals
                                </div>
                                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">Get AI-powered recommendations to keep your goals on track.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* A Smarter Way to Scale */}
            <section className="bg-white py-10 sm:py-12 md:py-16 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                    <div className="text-center mb-6 sm:mb-8 md:mb-12">
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-text-dark mb-2 sm:mb-3">A smarter way to scale</h2>
                        <p className="text-sm sm:text-base md:text-lg text-text-gray">Everything enterprise teams need to manage work at scale</p>
                    </div>

                    {/* Two cards side by side */}
                    <div className="grid md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                        {/* Enterprise Security Card */}
                        <div className="bg-bg-navy rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8">
                            <span className="inline-block bg-white/15 text-white text-[10px] sm:text-[11px] font-medium px-2 sm:px-2.5 py-1 rounded-full mb-2 sm:mb-3">Enterprise-grade security</span>
                            <p className="text-sm sm:text-[15px] text-white/75 leading-relaxed mb-4 sm:mb-6">
                                Know your company's data is completely secure and in compliance with the latest industry practices.
                            </p>
                            <div className="flex gap-2 sm:gap-3 mb-4 sm:mb-6">
                                <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 bg-white/15 rounded-lg flex items-center justify-center"><LockIcon size={18} color="white" /></div>
                                <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 bg-asana-blue rounded-lg flex items-center justify-center text-white text-[10px] sm:text-xs font-bold">ISO</div>
                                <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 bg-white/15 rounded-lg flex items-center justify-center"><ShieldIcon size={18} color="white" /></div>
                            </div>
                            <button className="bg-white text-bg-navy px-4 sm:px-5 py-2 sm:py-2.5 rounded-md text-xs sm:text-sm font-medium hover:bg-gray-100 transition-colors w-full sm:w-auto" onClick={handlePlaceholder}>
                                Explore security
                            </button>
                        </div>

                        {/* Integrations Card */}
                        <div className="rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8" style={{ backgroundColor: '#F6F8FA' }}>
                            <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-6 max-w-[180px] sm:max-w-xs">
                                <div className="aspect-square bg-white rounded-lg sm:rounded-xl flex items-center justify-center shadow-sm p-1.5 sm:p-2">
                                    <GmailIcon size={24} />
                                </div>
                                <div className="aspect-square bg-white rounded-lg sm:rounded-xl flex items-center justify-center shadow-sm p-1.5 sm:p-2">
                                    <SlackIcon size={24} />
                                </div>
                                <div className="aspect-square bg-white rounded-lg sm:rounded-xl flex items-center justify-center shadow-sm p-1.5 sm:p-2">
                                    <OutlookIcon size={24} />
                                </div>
                                <div className="aspect-square bg-white rounded-lg sm:rounded-xl flex items-center justify-center shadow-sm p-1.5 sm:p-2">
                                    <ZoomIcon size={24} />
                                </div>
                                <div className="aspect-square bg-white rounded-lg sm:rounded-xl flex items-center justify-center shadow-sm p-1.5 sm:p-2">
                                    <SalesforceIcon size={24} />
                                </div>
                                <div className="aspect-square bg-white rounded-lg sm:rounded-xl flex items-center justify-center shadow-sm p-1.5 sm:p-2">
                                    <PowerBIIcon size={24} />
                                </div>
                            </div>
                            <h4 className="text-base sm:text-lg md:text-xl font-medium text-text-dark mb-1.5 sm:mb-2">Connect over 300 integrations</h4>
                            <p className="text-xs sm:text-sm text-text-gray leading-relaxed mb-4 sm:mb-5">
                                Asana connects with the enterprise tools your organization already uses, right out of the box.
                            </p>
                            <button className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-md text-xs sm:text-sm font-medium border border-gray-300 text-text-dark hover:border-gray-400 transition-colors w-full sm:w-auto" onClick={handlePlaceholder}>
                                See all integrations
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Features;
