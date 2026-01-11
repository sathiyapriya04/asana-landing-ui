import React from 'react';

const FinalCTA = () => {
    const handlePlaceholder = () => console.log('Button clicked - placeholder');

    return (
        <section className="bg-white py-12 md:py-20 pb-16 md:pb-24 text-center">
            <div className="max-w-3xl mx-auto px-4 md:px-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-text-dark leading-snug mb-8">
                    The only platform that can support your<br className="hidden md:block" />company at any scale
                </h2>
                <button className="bg-text-dark text-white px-8 py-3.5 rounded-md text-base font-medium hover:bg-gray-800 transition-colors" onClick={handlePlaceholder}>Get started</button>
            </div>
        </section>
    );
};

export default FinalCTA;
