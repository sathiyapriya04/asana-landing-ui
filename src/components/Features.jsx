import React from 'react';
import { SparklesIcon, TargetIcon, LockIcon, ShieldIcon, LayersIcon, ChartIcon } from './Icons';

const Features = () => {
    const handlePlaceholder = () => console.log('Button clicked - placeholder');

    return (
        <>
            {/* AI Section */}
            <section className="bg-bg-navy py-12 md:py-20">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                        <div>
                            <span className="inline-block bg-white/15 text-white text-xs font-medium px-3 py-1.5 rounded-full mb-4">Asana Intelligence</span>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-tight mb-5">
                                Greater clarity and<br />accountability with AI
                            </h2>
                            <p className="text-base md:text-[17px] text-white/75 leading-relaxed mb-6">
                                With Asana AI, get answers about your projects, automate workflows, and understand the status of work—all in seconds.
                            </p>
                            <button className="bg-white text-bg-navy px-6 py-3 rounded-md text-[15px] font-medium hover:bg-gray-100 transition-colors" onClick={handlePlaceholder}>
                                Explore AI →
                            </button>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="bg-white/10 backdrop-blur rounded-xl p-5">
                                <div className="flex items-center gap-2 mb-2 text-white font-medium">
                                    <SparklesIcon size={20} color="#7c3aed" /> Smart status
                                </div>
                                <p className="text-sm text-white/70 leading-relaxed">AI summarizes project updates and identifies risks automatically.</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur rounded-xl p-5">
                                <div className="flex items-center gap-2 mb-2 text-white font-medium">
                                    <TargetIcon size={20} color="#1e6b52" /> Smart goals
                                </div>
                                <p className="text-sm text-white/70 leading-relaxed">Get AI-powered recommendations to keep your goals on track.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="bg-white py-12 md:py-20">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-8 md:mb-12">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-text-dark mb-3">A smarter way to scale</h2>
                        <p className="text-base md:text-lg text-text-gray">Everything enterprise teams need to manage work at scale</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-5">
                        {/* Large Card */}
                        <div className="md:col-span-2 bg-bg-navy rounded-2xl p-6 md:p-8">
                            <span className="inline-block bg-white/15 text-white text-[11px] font-medium px-2.5 py-1 rounded-full mb-3">Enterprise</span>
                            <h3 className="text-lg md:text-xl font-medium text-white mb-2">Enterprise-grade security</h3>
                            <p className="text-[15px] text-white/70 leading-relaxed mb-5">Admin controls, data protection, and compliance certifications to keep your organization secure.</p>
                            <div className="flex gap-3 mb-6">
                                <div className="w-11 h-11 bg-white/15 rounded-lg flex items-center justify-center"><LockIcon size={20} color="white" /></div>
                                <div className="w-11 h-11 bg-asana-blue rounded-lg flex items-center justify-center text-white text-xs font-bold">ISO</div>
                                <div className="w-11 h-11 bg-white/15 rounded-lg flex items-center justify-center"><ShieldIcon size={20} color="white" /></div>
                            </div>
                            <a href="#" className="text-white text-[15px] font-medium" onClick={handlePlaceholder}>Learn more →</a>
                        </div>

                        {/* Small Cards */}
                        <div className="bg-gray-100 rounded-2xl p-5 md:p-6">
                            <h4 className="text-base md:text-lg font-medium text-text-dark mb-2">200+ integrations</h4>
                            <p className="text-sm text-text-gray leading-relaxed mb-4">Connect the tools you love—Slack, Microsoft, Salesforce, and more.</p>
                            <div className="flex gap-2 mb-4">
                                {[LayersIcon, ChartIcon, SparklesIcon, TargetIcon].map((Icon, i) => (
                                    <div key={i} className="w-9 h-9 bg-white rounded-lg flex items-center justify-center shadow-sm">
                                        <Icon size={20} color={['#1e6b52', '#7c3aed', '#f59e0b', '#06b6d4'][i]} />
                                    </div>
                                ))}
                            </div>
                            <a href="#" className="text-text-dark text-sm font-medium" onClick={handlePlaceholder}>Browse apps →</a>
                        </div>

                        <div className="bg-gray-100 rounded-2xl p-5 md:p-6">
                            <h4 className="text-base md:text-lg font-medium text-text-dark mb-2">Goals</h4>
                            <p className="text-sm text-text-gray leading-relaxed mb-4">Connect daily work to company objectives and track progress in real-time.</p>
                            <a href="#" className="text-text-dark text-sm font-medium" onClick={handlePlaceholder}>Learn more →</a>
                        </div>

                        <div className="bg-gray-100 rounded-2xl p-5 md:p-6">
                            <h4 className="text-base md:text-lg font-medium text-text-dark mb-2">Reporting</h4>
                            <p className="text-sm text-text-gray leading-relaxed mb-4">Get real-time insights with custom dashboards and automated reporting.</p>
                            <a href="#" className="text-text-dark text-sm font-medium" onClick={handlePlaceholder}>Learn more →</a>
                        </div>

                        <div className="bg-gray-100 rounded-2xl p-5 md:p-6">
                            <h4 className="text-base md:text-lg font-medium text-text-dark mb-2">Workload</h4>
                            <p className="text-sm text-text-gray leading-relaxed mb-4">See team capacity at a glance and rebalance work to prevent burnout.</p>
                            <a href="#" className="text-text-dark text-sm font-medium" onClick={handlePlaceholder}>Learn more →</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Features;
