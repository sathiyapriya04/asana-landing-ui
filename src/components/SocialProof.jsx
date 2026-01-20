import React from 'react';

const SocialProof = () => {
    const companies = ['amazon', 'McKESSON', 'Johnson&Johnson', 'DELL', '✦ MERCK'];

    return (
        <section className="bg-white py-6 sm:py-8 md:py-10 lg:py-12 border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center">
                <p className="text-xs sm:text-sm md:text-base text-text-gray mb-4 sm:mb-6 md:mb-8">
                    <span className="font-semibold text-text-dark">85%</span> of Fortune 100 companies choose Asana*
                </p>
                <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-12">
                    {companies.map((company) => (
                        <span key={company} className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-text-muted tracking-wide">{company}</span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
