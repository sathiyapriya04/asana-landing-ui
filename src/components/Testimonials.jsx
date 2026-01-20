import React, { useState } from 'react';
import { ArrowRightIcon } from './Icons';

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const testimonials = [
        { company: 'Overstock', quote: "With Asana, we reduced cycle time by 30% and improved cross-team collaboration significantly.", author: 'Michelle Lee', role: 'VP of Operations', stat: '30%', statLabel: 'faster delivery' },
        { company: 'HubSpot', quote: "Asana is our single source of truth for managing complex campaigns across teams.", author: 'James Chen', role: 'Director of Marketing Ops', stat: '2x', statLabel: 'team productivity' },
        { company: 'Spotify', quote: "We coordinate work across 40+ teams seamlessly with Asana's portfolio management.", author: 'Sarah Rodriguez', role: 'Head of PMO', stat: '40+', statLabel: 'teams aligned' },
    ];

    const current = testimonials[activeIndex];

    return (
        <section className="bg-gray-50 py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center mb-10 md:mb-12">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-text-dark mb-3">See what's possible with Asana</h2>
                    <p className="text-base md:text-lg text-text-gray">Leading companies trust Asana to drive efficiency and impact</p>
                </div>

                <div className="flex items-center justify-center gap-4 md:gap-8 flex-wrap">
                    <button onClick={() => setActiveIndex(prev => prev === 0 ? testimonials.length - 1 : prev - 1)}
                        className="w-11 h-11 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:border-gray-300 transition-colors shrink-0" aria-label="Previous">
                        <ArrowRightIcon size={18} color="#6f6f6f" style={{ transform: 'rotate(180deg)' }} />
                    </button>

                    <div className="bg-white rounded-2xl p-6 md:p-10 w-full max-w-2xl shadow-md">
                        <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                            <div className="text-base md:text-xl font-semibold text-text-dark">{current.company}</div>
                            <div className="text-right">
                                <span className="block text-2xl md:text-3xl font-bold text-asana-green">{current.stat}</span>
                                <span className="text-[13px] text-text-gray">{current.statLabel}</span>
                            </div>
                        </div>
                        <blockquote className="text-base md:text-xl text-text-dark leading-relaxed mb-6">"{current.quote}"</blockquote>
                        <div className="flex items-center gap-3">
                            <div className="w-11 h-11 rounded-full bg-asana-green text-white flex items-center justify-center text-lg font-semibold">{current.author[0]}</div>
                            <div>
                                <div className="font-medium text-text-dark">{current.author}</div>
                                <div className="text-sm text-text-gray">{current.role}</div>
                            </div>
                        </div>
                    </div>

                    <button onClick={() => setActiveIndex(prev => prev === testimonials.length - 1 ? 0 : prev + 1)}
                        className="w-11 h-11 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:border-gray-300 transition-colors shrink-0" aria-label="Next">
                        <ArrowRightIcon size={18} color="#6f6f6f" />
                    </button>
                </div>

                <div className="flex justify-center gap-2 mt-8">
                    {testimonials.map((_, i) => (
                        <button key={i} onClick={() => setActiveIndex(i)} aria-label={`Go to slide ${i + 1}`}
                            className={`h-2 rounded-full transition-all ${i === activeIndex ? 'w-5 bg-asana-green' : 'w-2 bg-gray-300'}`} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
