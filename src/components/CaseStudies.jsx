import React from 'react';

const CaseStudies = () => {
    const handlePlaceholder = () => console.log('Button clicked - placeholder');

    const cases = [
        {
            company: 'HubSpot',
            desc: 'Increased production of advertising campaigns for clients by 50% each',
            color: '#FF7A59',
            logo: 'H'
        },
        {
            company: 'Figma',
            desc: "Figma's product team reduced meeting time by 50% with Asana.",
            color: '#A259FF',
            logo: 'F'
        },
        {
            company: 'Sony Music',
            desc: 'Sony Music boosted their production capacity by 4x with Asana.',
            color: '#000000',
            logo: 'S'
        },
        {
            company: 'Overstock',
            desc: 'How Overstock manages enterprise-scale projects with Asana',
            color: '#E31837',
            logo: 'O'
        },
    ];

    return (
        <section className="py-10 sm:py-12 md:py-16 lg:py-20" style={{ backgroundColor: '#F6F8F9' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 mb-5 sm:mb-6 md:mb-8">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-text-dark">The world's top companies trust Asana</h2>
                    <a href="#" className="text-sm sm:text-[15px] text-text-dark font-medium hover:text-asana-green transition-colors whitespace-nowrap" onClick={handlePlaceholder}>
                        See all case studies →
                    </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
                    {cases.map((item, i) => (
                        <div key={i} className="cursor-pointer group">
                            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                                {/* Company logo placeholder with brand color */}
                                <div
                                    className="h-28 sm:h-32 md:h-36 lg:h-40 flex items-center justify-center"
                                    style={{ backgroundColor: item.color + '15' }}
                                >
                                    <div
                                        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center text-white text-xl sm:text-2xl font-bold shadow-lg transition-transform duration-300 group-hover:scale-110"
                                        style={{ backgroundColor: item.color }}
                                    >
                                        {item.logo}
                                    </div>
                                </div>
                                <div className="p-3 sm:p-4">
                                    <h4 className="text-sm sm:text-base font-semibold text-text-dark mb-1.5 sm:mb-2 group-hover:text-asana-green transition-colors">
                                        {item.company}
                                    </h4>
                                    <p className="text-xs sm:text-sm text-text-gray leading-relaxed line-clamp-2">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
