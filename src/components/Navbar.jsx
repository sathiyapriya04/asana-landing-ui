import React, { useState, useEffect } from 'react';
import { AsanaLogo, GlobeIcon, MenuIcon, CloseIcon, ChevronDownIcon } from './Icons';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMobileMenu = () => setMobileMenuOpen(false);
    const handlePlaceholder = (e) => {
        e?.preventDefault();
        console.log('Button clicked - placeholder');
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            {/* Announcement Bar */}
            <div className="bg-asana-green text-white py-2 px-4 md:px-8 text-xs md:text-sm text-center relative">
                <span className="font-semibold">AI that works.</span>
                {' '}Coming June 5, Asana redefines work management—again.{' '}
                <a href="#" onClick={handlePlaceholder} className="underline ml-1">Get early access →</a>
                <button className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-1" aria-label="Close">
                    <CloseIcon size={16} color="white" />
                </button>
            </div>

            {/* Main Nav */}
            <nav className={`bg-white border-b border-gray-200 transition-shadow ${isScrolled ? 'shadow-md' : ''}`}>
                <div className="max-w-7xl mx-auto px-4 md:px-8 h-14 md:h-[60px] flex items-center justify-between">
                    {/* Logo */}
                    <a href="/" className="flex items-center gap-2" onClick={handlePlaceholder}>
                        <AsanaLogo size={24} />
                        <span className="text-xl md:text-[22px] font-semibold text-text-dark">asana</span>
                    </a>

                    {/* Desktop Nav Links */}
                    <div className="hidden lg:flex items-center gap-1">
                        {['Features', 'Solutions', 'Resources'].map((item) => (
                            <button key={item} className="flex items-center gap-1 px-3 py-2 text-[15px] text-text-dark hover:text-asana-green" onClick={handlePlaceholder}>
                                {item} <ChevronDownIcon size={14} color="#6f6f6f" />
                            </button>
                        ))}
                        <a href="#" className="px-3 py-2 text-[15px] text-text-dark hover:text-asana-green" onClick={handlePlaceholder}>Enterprise</a>
                        <a href="#" className="px-3 py-2 text-[15px] text-text-dark hover:text-asana-green" onClick={handlePlaceholder}>Pricing</a>
                    </div>

                    {/* Right Actions */}
                    <div className="hidden lg:flex items-center gap-4">
                        <button className="p-1" aria-label="Language"><GlobeIcon size={20} color="#6f6f6f" /></button>
                        <a href="#" className="text-[15px] text-text-dark hover:text-asana-green" onClick={handlePlaceholder}>Contact sales</a>
                        <a href="#" className="text-[15px] text-text-dark hover:text-asana-green" onClick={handlePlaceholder}>Log In</a>
                        <button className="bg-asana-green text-white px-4 py-2 rounded-md text-[15px] font-medium hover:bg-asana-green-dark" onClick={handlePlaceholder}>Get started</button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Menu">
                        {mobileMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden flex flex-col p-4 bg-white border-t border-gray-100">
                        {['Features', 'Solutions', 'Resources', 'Enterprise', 'Pricing'].map((item) => (
                            <a key={item} href="#" className="py-3 text-text-dark border-b border-gray-100" onClick={(e) => { handlePlaceholder(e); closeMobileMenu(); }}>{item}</a>
                        ))}
                        <hr className="my-2 border-gray-200" />
                        <a href="#" className="py-3 text-text-dark" onClick={(e) => { handlePlaceholder(e); closeMobileMenu(); }}>Contact sales</a>
                        <a href="#" className="py-3 text-text-dark" onClick={(e) => { handlePlaceholder(e); closeMobileMenu(); }}>Log In</a>
                        <button className="mt-4 w-full bg-asana-green text-white py-3 rounded-md font-medium" onClick={handlePlaceholder}>Get started</button>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navbar;
