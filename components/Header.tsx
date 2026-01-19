"use client";

import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import LanguageSwitcher from './LanguageSwitcher';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Header() {
    const t = useTranslations('Header');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#about', label: t('nav.about') },
        { href: '#services', label: t('nav.services') },
        { href: '#testimonials', label: t('nav.testimonials') },
        { href: '#contact', label: t('nav.contact') },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/70 backdrop-blur-lg shadow-lg py-1.5'
                : 'bg-white/40 backdrop-blur-md py-2.5'
                } border-b border-white/20`}
        >
            <div className="container mx-auto px-4">
                <nav className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 lg:gap-3 group">
                        <div className="relative w-14 h-14 lg:w-20 lg:h-20">
                            <Image
                                src="/header-house.png"
                                alt="Logo Casa"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <div className="relative w-44 h-16 lg:w-60 lg:h-20">
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
                                className="text-sm font-bold text-brand-dark-blue hover:text-brand-gold transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(184,134,11,0.6)]"
                            >
                                {item.label}
                            </Link>
                        ))}

                        <LanguageSwitcher />

                        <Link
                            href="#contact"
                            className="bg-brand-dark-blue hover:bg-brand-dark-blue/90 text-white px-6 py-2 rounded-xl font-bold text-sm transition-all shadow-sm hover:shadow-[0_0_15px_rgba(184,134,11,0.4)] hover:scale-105 border border-white/20"
                        >
                            {t('cta')}
                        </Link>
                    </div>

                    {/* Mobile Menu Button (Simplified for now) */}
                    <button className="lg:hidden p-2 text-gray-600" aria-label="Toggle Menu">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </nav>
            </div>
        </header>
    );
}
