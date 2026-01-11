import React from 'react';
import { AsanaLogo, TwitterIcon, LinkedInIcon, InstagramIcon, YouTubeIcon, FacebookIcon, AppleIcon, AndroidIcon } from './Icons';

const Footer = () => {
    const handlePlaceholder = (e) => { e?.preventDefault(); console.log('Link clicked - placeholder'); };

    const links = {
        Asana: ['Home', 'Product', 'Pricing', 'Premium', 'Business', 'Enterprise'],
        'Use Cases': ['Project Management', 'Goal Management', 'Agile', 'Task Management', 'Resource Management'],
        Resources: ['Help Center', 'Forum', 'App Directory', 'Developers', 'Partners'],
        Company: ['About Us', 'Leadership', 'Customers', 'Careers', 'Press', 'Blog'],
    };

    return (
        <footer className="bg-text-dark pt-12 md:pt-16 pb-8 text-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-10 md:pb-12 border-b border-white/10">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-3 lg:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <AsanaLogo size={24} />
                            <span className="text-xl font-semibold">asana</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {[TwitterIcon, LinkedInIcon, InstagramIcon, YouTubeIcon, FacebookIcon].map((Icon, i) => (
                                <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" onClick={handlePlaceholder}>
                                    <Icon size={16} color="white" />
                                </a>
                            ))}
                        </div>
                        <div className="flex flex-col gap-2">
                            <button className="flex items-center gap-2 bg-white/10 text-white px-3 py-2 rounded-md text-[13px] hover:bg-white/15 transition-colors" onClick={handlePlaceholder}>
                                <AppleIcon size={16} color="white" /> Download on iOS
                            </button>
                            <button className="flex items-center gap-2 bg-white/10 text-white px-3 py-2 rounded-md text-[13px] hover:bg-white/15 transition-colors" onClick={handlePlaceholder}>
                                <AndroidIcon size={16} color="white" /> Get on Android
                            </button>
                        </div>
                    </div>

                    {/* Link Columns */}
                    {Object.entries(links).map(([title, items]) => (
                        <div key={title}>
                            <h4 className="text-[13px] font-semibold uppercase tracking-wide mb-4">{title}</h4>
                            <ul className="space-y-2.5">
                                {items.map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-sm text-white/60 hover:text-white transition-colors" onClick={handlePlaceholder}>{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6">
                    <div className="flex items-center gap-3 flex-wrap justify-center text-[13px]">
                        <a href="#" className="text-white/50 hover:text-white transition-colors" onClick={handlePlaceholder}>Terms</a>
                        <span className="text-white/30">•</span>
                        <a href="#" className="text-white/50 hover:text-white transition-colors" onClick={handlePlaceholder}>Privacy</a>
                        <span className="text-white/30">•</span>
                        <a href="#" className="text-white/50 hover:text-white transition-colors" onClick={handlePlaceholder}>Cookies</a>
                    </div>
                    <p className="text-[13px] text-white/50">© {new Date().getFullYear()} Asana, Inc.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
