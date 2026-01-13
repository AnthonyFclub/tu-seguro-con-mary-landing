import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import LanguageSwitcher from './LanguageSwitcher';
import Image from 'next/image';

export default function Header() {
    const t = useTranslations('Header');

    const navLinks = [
        { href: '#about', label: t('nav.about') },
        { href: '#services', label: t('nav.services') },
        { href: '#testimonials', label: t('nav.testimonials') },
        { href: '#contact', label: t('nav.contact') },
    ];

    return (
        <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                {/* Logo & Tagline */}
                <div className="flex items-center gap-3">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-24 h-24 flex items-center justify-center">
                            <Image
                                src="/logo.png"
                                alt="Logo"
                                width={96}
                                height={96}
                                className="object-contain"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl md:text-2xl font-bold text-brand-blue tracking-tight leading-tight">
                                Tú Seguro con Mary
                            </span>
                            <span className="text-[10px] md:text-xs text-brand-gold font-bold uppercase tracking-wider">
                                {t('tagline')}
                            </span>
                        </div>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Right Actions */}
                <div className="flex items-center gap-4">
                    <LanguageSwitcher />
                    <Link
                        href="#contact"
                        className="hidden sm:inline-flex bg-brand-blue hover:bg-brand-blue/90 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-md hover:shadow-lg active:scale-95"
                    >
                        {t('cta')}
                    </Link>

                    {/* Mobile Menu Button (Simplified for now) */}
                    <button className="lg:hidden p-2 text-gray-600" aria-label="Toggle Menu">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
}
