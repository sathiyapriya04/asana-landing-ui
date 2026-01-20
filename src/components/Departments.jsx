import React, { useState } from 'react';
import { ClipboardIcon, TargetIcon, RocketIcon, CheckIcon } from './Icons';

const Departments = () => {
    const [activeTab, setActiveTab] = useState('Marketing');
    const tabs = ['Marketing', 'Operations', 'IT', 'Product', 'Company-wide'];

    const content = {
        Marketing: {
            title: 'Meet campaign goals',
            features: ['Streamline campaign management', 'Enhance creative production', 'Manage events and editorial calendars'],
            btnText: 'Explore marketing',
            timeline: {
                title: 'Marketing Campaign Launch', tasks: [
                    { name: 'Messaging doc approved', color: 'bg-purple-200', left: '15%', width: '25%' },
                    { name: 'Write creative brief', color: 'bg-asana-coral', left: '20%', width: '35%' },
                ]
            }
        },
        Operations: { title: 'Optimize operations', features: ['Standardize workflows', 'Improve visibility', 'Track metrics'], btnText: 'Explore operations', timeline: { title: 'Operations', tasks: [] } },
        IT: { title: 'Manage IT projects', features: ['Streamline requests', 'Track implementations', 'Coordinate security'], btnText: 'Explore IT', timeline: { title: 'IT Rollout', tasks: [] } },
        Product: { title: 'Build great products', features: ['Centralize roadmaps', 'Coordinate launches', 'Track development'], btnText: 'Explore product', timeline: { title: 'Product Roadmap', tasks: [] } },
        'Company-wide': { title: 'Align your organization', features: ['Connect goals', 'Improve collaboration', 'Increase transparency'], btnText: 'Explore solutions', timeline: { title: 'Strategic Planning', tasks: [] } }
    };

    const current = content[activeTab];

    return (
        <section className="bg-gray-50 py-10 sm:py-12 md:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-text-dark mb-5 sm:mb-6 md:mb-8">
                    See how different departments use Asana
                </h2>

                {/* Tabs - Horizontally scrollable on mobile */}
                <div className="flex gap-2 mb-6 sm:mb-8 md:mb-10 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
                    {tabs.map((tab) => (
                        <button key={tab} onClick={() => setActiveTab(tab)}
                            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-normal border transition-all duration-200 whitespace-nowrap flex-shrink-0 ${activeTab === tab ? 'bg-text-dark text-white border-text-dark' : 'bg-white text-text-gray border-gray-200 hover:border-gray-300'}`}>
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start">
                    {/* Timeline Card */}
                    <div className="bg-white rounded-xl p-4 sm:p-5 md:p-6 shadow-lg">
                        <div className="flex items-center gap-2 mb-3 sm:mb-4">
                            <ClipboardIcon size={16} color="#1e1e1e" />
                            <span className="font-semibold text-sm sm:text-base text-text-dark">{current.timeline.title}</span>
                        </div>
                        <div className="flex gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4 pb-2 sm:pb-3 border-b border-gray-100 text-[11px] sm:text-[13px] overflow-x-auto scrollbar-hide">
                            {['List', 'Board', 'Timeline', 'Calendar'].map((t, i) => (
                                <span key={t} className={`whitespace-nowrap ${i === 2 ? 'text-text-dark font-medium border-b-2 border-text-dark pb-2 sm:pb-3 -mb-2 sm:-mb-3' : 'text-text-muted'}`}>{t}</span>
                            ))}
                        </div>
                        <div className="min-h-[80px] sm:min-h-[100px]">
                            <div className="text-[10px] sm:text-xs text-text-gray mb-2 flex items-center gap-1">
                                <TargetIcon size={10} color="#9a9a9a" /> + Messaging
                            </div>
                            {current.timeline.tasks.map((task, i) => (
                                <div key={i} className="relative h-6 sm:h-8 mb-2">
                                    <div className={`absolute h-5 sm:h-6 rounded ${task.color} flex items-center px-1.5 sm:px-2 text-[9px] sm:text-[11px] font-medium text-text-dark overflow-hidden whitespace-nowrap`} style={{ left: task.left, width: task.width }}>
                                        <span className="truncate">{task.name}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Features */}
                    <div className="pt-0 md:pt-2">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-text-dark mb-3 sm:mb-4">{current.title}</h3>
                        <ul className="space-y-2 sm:space-y-3 mb-5 sm:mb-6">
                            {current.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm sm:text-[15px] text-text-gray">
                                    <CheckIcon size={14} color="#1e6b52" className="mt-0.5 flex-shrink-0" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <button className="bg-text-dark text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-md text-sm sm:text-[15px] font-medium hover:bg-gray-800 transition-colors w-full sm:w-auto">
                            {current.btnText}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Departments;
