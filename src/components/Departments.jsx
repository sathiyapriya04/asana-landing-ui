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
        <section className="bg-gray-50 py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <h2 className="text-2xl md:text-3xl font-medium text-text-dark mb-6 md:mb-8">
                    See how different departments use Asana
                </h2>

                {/* Tabs */}
                <div className="flex flex-wrap gap-2 mb-8 md:mb-10">
                    {tabs.map((tab) => (
                        <button key={tab} onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 rounded-full text-sm font-normal border transition-colors ${activeTab === tab ? 'bg-text-dark text-white border-text-dark' : 'bg-white text-text-gray border-gray-200 hover:border-gray-300'}`}>
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-start">
                    {/* Timeline Card */}
                    <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg">
                        <div className="flex items-center gap-2 mb-4">
                            <ClipboardIcon size={18} color="#1e1e1e" />
                            <span className="font-semibold text-text-dark">{current.timeline.title}</span>
                        </div>
                        <div className="flex gap-3 md:gap-4 mb-4 pb-3 border-b border-gray-100 text-[13px] overflow-x-auto">
                            {['List', 'Board', 'Timeline', 'Calendar'].map((t, i) => (
                                <span key={t} className={i === 2 ? 'text-text-dark font-medium border-b-2 border-text-dark pb-3 -mb-3' : 'text-text-muted whitespace-nowrap'}>{t}</span>
                            ))}
                        </div>
                        <div className="min-h-[100px]">
                            <div className="text-xs text-text-gray mb-2 flex items-center gap-1">
                                <TargetIcon size={12} color="#9a9a9a" /> + Messaging
                            </div>
                            {current.timeline.tasks.map((task, i) => (
                                <div key={i} className="relative h-8 mb-2">
                                    <div className={`absolute h-6 rounded ${task.color} flex items-center px-2 text-[11px] font-medium text-text-dark overflow-hidden whitespace-nowrap`} style={{ left: task.left, width: task.width }}>
                                        {task.name}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Features */}
                    <div className="pt-2">
                        <h3 className="text-xl md:text-2xl font-medium text-text-dark mb-4">{current.title}</h3>
                        <ul className="space-y-2 mb-6">
                            {current.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-2 text-[15px] text-text-gray">
                                    <CheckIcon size={16} color="#1e6b52" className="mt-0.5 flex-shrink-0" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <button className="bg-text-dark text-white px-6 py-3 rounded-md text-[15px] font-medium hover:bg-gray-800 transition-colors">
                            {current.btnText}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Departments;
