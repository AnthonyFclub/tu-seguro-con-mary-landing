"use client";

import { useTranslations } from 'next-intl';
import { CheckCircle2, MessageCircle, Facebook, Instagram, Mail } from 'lucide-react';
import { Link } from '@/navigation';
import Image from 'next/image';
export default function Hero() {
    const t = useTranslations('Hero');

    const stats = [
        { label: t('stats.experience'), icon: <CheckCircle2 className="w-5 h-5" /> },
        { label: t('stats.clients'), icon: <CheckCircle2 className="w-5 h-5" /> },
        { label: t('stats.service'), icon: <CheckCircle2 className="w-5 h-5" /> },
    ];

    const socialIcons = [
        { icon: <MessageCircle className="w-6 h-6" />, color: 'bg-[#25D366]', label: 'WhatsApp', href: 'https://wa.me/18186128196' },
        { icon: <Facebook className="w-6 h-6" />, color: 'bg-[#1877F2]', label: 'Facebook', href: 'https://www.facebook.com/marycchamorro' },
        { icon: <Instagram className="w-6 h-6" />, color: 'bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]', label: 'Instagram', href: 'https://www.instagram.com/tu_seguro_con_mary/' },
        {
            icon: (
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
                </svg>
            ),
            color: 'bg-black',
            label: 'TikTok',
            href: 'https://www.tiktok.com/@tu.seguro.con.mar'
        },
        { icon: <Mail className="w-6 h-6" />, color: 'bg-blue-500', label: 'Email', href: 'mailto:agentmary1997@gmail.com' },
    ];

    return (
        <section
            id="about"
            className="relative min-h-screen flex items-center overflow-hidden bg-brand-cream"
        >
            {/* Background Image - Using standard CSS background to avoid Next.js Image fill zooming if resolution is an issue */}
            <div className="container mx-auto px-4 pt-24 pb-8 lg:pt-32 lg:pb-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                    {/* Left Side Container for Desktop (Combining Intro and Stats logically) */}
                    <div className="lg:col-span-7 flex flex-col gap-8 order-1">
                        {/* Intro Content (Title & Description) */}
                        <div className="animate-in fade-in slide-in-from-left duration-1000">
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <h1 className="text-4xl lg:text-7xl text-brand-dark-blue leading-tight font-serif font-extrabold tracking-tight">
                                        {t('headline')}
                                    </h1>
                                    <h2 className="text-xl lg:text-3xl font-bold text-brand-dark-blue/90 font-alice">
                                        {t('subheadline')}
                                    </h2>
                                </div>

                                <p className="text-lg lg:text-xl text-brand-dark-blue leading-relaxed font-medium">
                                    {t('description')}
                                </p>
                            </div>
                        </div>

                        {/* Image Container - ONLY VISIBLE ON MOBILE BETWEEN TEXT AND STATS */}
                        <div className="lg:hidden order-2 relative animate-in fade-in zoom-in duration-1000 delay-300">
                            <div className="relative aspect-[3/4] w-full max-w-[400px] mx-auto group">
                                <div className="absolute inset-0 border-2 border-brand-gold/30 rounded-[2rem] translate-x-3 translate-y-3" />
                                <div className="relative h-full w-full rounded-[2rem] overflow-hidden bg-gradient-to-br from-blue-100 to-blue-50 shadow-xl border-4 border-white">
                                    <Image
                                        src="/images/mary-carmen.jpg"
                                        alt={t('imageAlt')}
                                        fill
                                        priority
                                        className="object-cover object-top"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Stats & Socials - Order 3 on Mobile */}
                        <div className="animate-in fade-in slide-in-from-left duration-1000 delay-150 order-3">
                            <div className="space-y-8 pt-4">
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    {stats.map((stat, i) => (
                                        <div key={i} className="flex flex-col items-center justify-center text-center gap-2 px-4 py-6 bg-white/50 backdrop-blur-sm rounded-2xl shadow-sm border border-brand-dark-blue/5 hover:shadow-[0_0_20px_rgba(184,134,11,0.2)] hover:scale-105 hover:bg-white transition-all duration-300">
                                            <span className="text-brand-dark-blue p-2 bg-brand-dark-blue/5 rounded-full">{stat.icon}</span>
                                            <span className="text-xs font-bold text-brand-dark-blue uppercase tracking-wider">{stat.label}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-brand-dark-blue/5">
                                    <div className="flex items-center gap-3">
                                        {socialIcons.map((social, i) => (
                                            <a
                                                key={i}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`${social.color} p-2 rounded-full text-white shadow-md hover:scale-110 transition-all flex items-center justify-center`}
                                            >
                                                {social.icon}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side Image - ONLY VISIBLE ON DESKTOP Centered in the whole block */}
                    <div className="hidden lg:block lg:col-span-5 relative animate-in fade-in zoom-in duration-1000 delay-300">
                        <div className="relative aspect-[3/4] w-full max-w-[450px] mx-auto group">
                            <div className="absolute inset-0 border-2 border-brand-gold/30 rounded-[2rem] translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500" />
                            <div className="relative h-full w-full rounded-[2rem] overflow-hidden bg-gradient-to-br from-blue-100 to-blue-50 shadow-[0_0_50px_rgba(184,134,11,0.3)] border-4 border-white">
                                <Image
                                    src="/images/mary-carmen.jpg"
                                    alt={t('imageAlt')}
                                    fill
                                    priority
                                    className="object-cover object-top hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
