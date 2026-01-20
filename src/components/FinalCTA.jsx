import React from 'react';

const FinalCTA = () => {
    const handlePlaceholder = () => console.log('Button clicked - placeholder');

    return (
        <section className="bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16 md:py-20 lg:py-24 text-center">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-text-dark leading-snug mb-3 sm:mb-4">
                    The only platform that can support your<br className="hidden sm:block" /> company at any scale
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-text-gray mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
                    Join millions of teams that trust Asana to manage their work, from startups to Fortune 500 companies.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                    <button
                        className="bg-asana-green text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md text-sm sm:text-base font-medium hover:bg-asana-green-dark transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        onClick={handlePlaceholder}
                    >
                        Get started free
                    </button>
                    <button
                        className="bg-white text-text-dark px-6 sm:px-8 py-3 sm:py-4 rounded-md text-sm sm:text-base font-medium border border-gray-300 hover:border-gray-400 transition-all duration-200 hover:shadow-md"
                        onClick={handlePlaceholder}
                    >
                        Contact sales
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
