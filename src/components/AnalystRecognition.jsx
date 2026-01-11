import React from 'react';
import { ShieldIcon } from './Icons';

const AnalystRecognition = () => {
    const analysts = [
        { name: 'Gartner', color: 'bg-asana-green', desc: 'Leader' },
        { name: 'Forrester', color: 'bg-asana-purple', desc: 'Leader' },
        { name: 'IDC', color: 'bg-bg-navy', desc: 'Leader in WW Collaborative Work Management' },
    ];

    return (
        <section className="bg-white py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <h2 className="text-lg md:text-xl font-medium text-text-dark mb-6 md:mb-8">Recognized as a leader by top analyst firms</h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {analysts.map((item, i) => (
                        <div key={i} className="flex items-center gap-4 flex-wrap">
                            <div className={`${item.color} px-5 py-4 rounded-lg flex items-center gap-2 shrink-0`}>
                                <ShieldIcon size={16} color="white" />
                                <span className="text-white font-semibold">{item.name}</span>
                            </div>
                            <p className="text-sm text-text-gray leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AnalystRecognition;
