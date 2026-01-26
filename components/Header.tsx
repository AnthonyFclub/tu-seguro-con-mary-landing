"use client";

import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import LanguageSwitcher from './LanguageSwitcher';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const t = useTranslations('Header');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when resizing to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const navLinks = [
        { href: '#about', label: t('nav.about') },
        { href: '#services', label: t('nav.services') },
        { href: '#testimonials', label: t('nav.testimonials') },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen
                ? 'bg-white/70 backdrop-blur-lg shadow-[0_4px_20px_rgba(184,134,11,0.1)] py-0.5'
                : 'bg-white/40 backdrop-blur-md py-1 shadow-[0_1px_10px_rgba(184,134,11,0.05)]'
                } border-b border-brand-gold/15`}
        >
            <div className="container mx-auto px-4">
                <nav className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-0 group">
                        <div className="relative w-14 h-14 lg:w-20 lg:h-20 -mr-1 lg:-mr-2">
                            <Image
                                src="/header-house.png"
                                alt="Logo Casa"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <div className="relative w-44 h-16 lg:w-64 lg:h-[75px]">
                            <Image
                                src="/header-text.png"
                                alt="Tú Seguro con Mary"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-sm font-bold font-alice text-brand-dark-blue hover:text-brand-gold transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(184,134,11,0.6)]"
                            >
                                {item.label}
                            </Link>
                        ))}

                        <LanguageSwitcher />

                        <Link
                            href="#contact"
                            className="bg-gradient-to-br from-[#2a5298] via-[#0b2454] to-[#1e3c72] hover:from-[#1e3c72] hover:to-[#2a5298] text-white px-7 py-2.5 rounded-xl font-bold font-alice text-sm transition-all shadow-[0_0_20px_rgba(184,134,11,0.3)] hover:shadow-[0_0_25px_rgba(184,134,11,0.5)] hover:scale-105 border-t border-white/30 border-l border-white/20 shadow-inner animate-breathe"
                        >
                            {t('cta')}
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 text-brand-dark-blue hover:text-brand-gold transition-colors z-[100]"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </nav>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`lg:hidden absolute top-[100%] left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-brand-gold/15 transition-all duration-500 overflow-hidden ${isMenuOpen ? 'max-h-[100vh] opacity-100 py-10 shadow-2xl' : 'max-h-0 opacity-0 py-0'
                    }`}
            >
                <div className="container mx-auto px-8 flex flex-col gap-8">
                    {navLinks.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-xl font-bold font-alice text-brand-dark-blue hover:text-brand-gold transition-all duration-300 text-center"
                        >
                            {item.label}
                        </Link>
                    ))}

                    <div className="h-[1px] w-full bg-brand-gold/10" />

                    <div className="flex justify-center">
                        <LanguageSwitcher />
                    </div>

                    <Link
                        href="#contact"
                        onClick={() => setIsMenuOpen(false)}
                        className="bg-gradient-to-br from-[#2a5298] via-[#0b2454] to-[#1e3c72] hover:from-[#1e3c72] hover:to-[#2a5298] text-white px-8 py-4 rounded-2xl font-bold font-alice text-lg transition-all shadow-xl hover:scale-105 border-t border-white/30 border-l border-white/20 text-center animate-breathe"
                    >
                        {t('cta')}
                    </Link>
                </div>
            </div>
        </header>
    );
}
