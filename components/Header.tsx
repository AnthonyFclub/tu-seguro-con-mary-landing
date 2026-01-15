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
                ? 'bg-white/70 backdrop-blur-lg shadow-lg py-2'
                : 'bg-white/40 backdrop-blur-md py-4'
                } border-b border-white/20`}
        >
            <div className="container mx-auto px-4">
                <nav className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-12 h-12 lg:w-14 lg:h-14">
                            <Image
                                src="/logo.png"
                                alt="Logo"
                                fill
                                className="object-contain group-hover:scale-110 transition-transform"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl lg:text-2xl font-bold text-brand-blue leading-tight">
                                Tú Seguro con Mary
                            </span>
                            <span className="text-[10px] lg:text-xs font-bold text-brand-gold tracking-widest uppercase">
                                PROTECT WHAT MATTERS MOST
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-sm font-semibold text-gray-700 hover:text-brand-blue transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}

                        <LanguageSwitcher />

                        <Link
                            href="#contact"
                            className="bg-brand-blue/80 backdrop-blur-md text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-brand-blue/90 transition-all shadow-md hover:shadow-lg border border-white/20"
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
