"use client";

import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import Image from 'next/image';

export default function Footer() {
    const t = useTranslations('Footer');
    const h = useTranslations('Header');

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#0f172a] text-gray-400 py-20 border-t border-white/5">
            <div className="container mx-auto px-4">
                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">

                    {/* Column 1: Branding (Spans 4) */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-2">
                            {/* House/Family Icon - Resized for perfect balance with text */}
                            <div className="relative w-20 h-20 lg:w-24 lg:h-24 shrink-0">
                                <Image
                                    src="/footer-family-logo.png"
                                    alt="Family Protection Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* Text Branding - Sized to match icon height for symmetry */}
                            <div className="relative w-[300px] h-[75px] lg:w-[400px] lg:h-[100px]">
                                <Image
                                    src="/footer-logo-text.png"
                                    alt="Tú Seguro con Mary - Branding"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        <p className="text-sm leading-relaxed max-w-sm text-gray-400 font-medium">
                            {t('branding.description')}
                        </p>
                    </div>

                    {/* Column 2: Quick Links (Spans 2) */}
                    <div className="lg:col-span-2 space-y-6 lg:ml-8">
                        <h4 className="text-white font-bold text-sm uppercase tracking-widest">{t('quickLinks.title')}</h4>
                        <nav className="flex flex-col gap-4">
                            {['about', 'services', 'testimonials', 'contact'].map((key) => (
                                <Link key={key} href={`#${key}`} className="hover:text-brand-gold transition-colors text-sm font-medium">
                                    {h(`nav.${key}`)}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Column 3: Contact Info (Spans 3) */}
                    <div className="lg:col-span-3 space-y-6">
                        <h4 className="text-white font-bold text-sm uppercase tracking-widest">{t('contactInfo.title')}</h4>
                        <div className="space-y-5 text-sm">
                            <div className="group">
                                <span className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1 group-hover:text-brand-gold transition-colors">{t('contactInfo.phone')}</span>
                                <span className="text-gray-300 font-bold text-lg">+1 (818) 612-8196</span>
                            </div>
                            <div className="group">
                                <span className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1 group-hover:text-brand-gold transition-colors">{t('contactInfo.email')}</span>
                                <span className="text-gray-300 font-bold break-all">agentmary1997@gmail.com</span>
                            </div>
                            <div className="group">
                                <span className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1 group-hover:text-brand-gold transition-colors">{t('contactInfo.address')}</span>
                                <span className="text-gray-300 font-bold">Pasadena, California</span>
                            </div>
                        </div>
                    </div>

                    {/* Column 4: Support / CTA (Spans 3) */}
                    <div className="lg:col-span-3">
                        <div className="bg-white/5 border border-white/10 p-6 rounded-3xl shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/10 blur-3xl -mr-12 -mt-12 transition-all group-hover:bg-brand-gold/20" />
                            <p className="text-brand-gold font-bold text-sm mb-2 uppercase tracking-widest">{t('helpNow.title')}</p>
                            <p className="text-[11px] text-gray-400 mb-5 font-medium leading-relaxed">{t('helpNow.description')}</p>
                            <a
                                href="https://wa.me/18186128196"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-white text-[#0f172a] hover:bg-brand-gold hover:text-white py-3 rounded-2xl text-xs font-bold shadow-xl transition-all text-center inline-block transform hover:-translate-y-1 active:scale-95"
                            >
                                {t('helpNow.button')}
                            </a>
                        </div>
                    </div>
                </div>

                {/* State Licenses Bar - Dedicated Professional Row */}
                <div className="pt-12 border-t border-white/5">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-4">
                            <h5 className="text-[10px] font-bold text-white uppercase tracking-[0.3em] whitespace-nowrap">
                                {t('branding.licenseTitle')}
                            </h5>
                            <div className="h-[1px] w-full bg-gradient-to-r from-white/10 to-transparent" />
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4">
                            {(t.raw('branding.licenses') as string[]).map((lic, i) => (
                                <div key={i} className="flex flex-col gap-1 p-3 bg-white/[0.02] border border-white/5 rounded-xl hover:bg-white/[0.05] hover:border-white/10 transition-all group">
                                    <span className="text-[10px] font-bold text-brand-gold/60 group-hover:text-brand-gold transition-colors">
                                        {lic.split(' ')[0]}
                                    </span>
                                    <span className="text-[9px] font-mono text-gray-500 group-hover:text-gray-300">
                                        {lic.split(' ')[1]}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer Bottom: Disclaimer & Copyright */}
                <div className="mt-16 space-y-10">

                    <div className="flex flex-col lg:flex-row justify-between items-center gap-8 pt-4">
                        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[10px] font-bold uppercase tracking-widest text-brand-gold/60">
                            <span className="flex items-center gap-2">
                                <div className="w-1 h-1 rounded-full bg-brand-gold shadow-[0_0_8px_rgba(184,134,11,0.8)]" />
                                {t('badges.licensed')}
                            </span>
                            <span className="flex items-center gap-2">
                                <div className="w-1 h-1 rounded-full bg-brand-gold shadow-[0_0_8px_rgba(184,134,11,0.8)]" />
                                {t('badges.bilingual')}
                            </span>
                            <span className="flex items-center gap-2">
                                <div className="w-1 h-1 rounded-full bg-brand-gold shadow-[0_0_8px_rgba(184,134,11,0.8)]" />
                                {t('badges.experience')}
                            </span>
                        </div>
                        <p className="text-[11px] font-medium text-gray-500">
                            {t('copyright', { year: currentYear })}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

