import React from 'react';

const CTASection = () => {
    const handlePlaceholder = () => console.log('Button clicked - placeholder');

    return (
        <section className="bg-asana-green py-12 md:py-20">
            <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white mb-4">Ready to get started?</h2>
                <p className="text-base md:text-lg text-white/85 mb-8">Join millions of teams using Asana to achieve their goals.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                    <button className="bg-white text-asana-green px-8 py-3.5 rounded-md text-base font-semibold hover:bg-gray-100 transition-colors" onClick={handlePlaceholder}>Get started free</button>
                    <button className="bg-transparent text-white px-8 py-3.5 rounded-md text-base font-medium border-2 border-white/40 hover:border-white/60 transition-colors" onClick={handlePlaceholder}>Contact sales</button>
                </div>
                <p className="text-sm text-white/60">Free forever • No credit card required</p>
            </div>
        </section>
    );
};

export default CTASection;
