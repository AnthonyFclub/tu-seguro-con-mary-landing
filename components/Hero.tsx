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

                    {/* 1. Intro Content - Order 1 on Mobile, Order 2 on Desktop (Right Side) */}
                    <div className="lg:col-span-7 order-1 lg:order-2 animate-in fade-in slide-in-from-right duration-1000">
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

                    {/* 2. Photo Container - Order 2 on Mobile, Order 1 on Desktop (Left Side) */}
                    <div className="lg:col-span-5 lg:row-span-2 order-2 lg:order-1 relative animate-in fade-in zoom-in duration-1000 delay-300">
                        <div className="relative aspect-[3/4] w-full max-w-[450px] mx-auto group">
                            {/* Decorative Frame */}
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

                    {/* 3. Stats & Socials - Order 3 on Mobile & Desktop (Below Intro on desktop) */}
                    <div className="lg:col-span-7 order-3 animate-in fade-in slide-in-from-right duration-1000 delay-150">
                        <div className="space-y-8 pt-4">
                            {/* Stats */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                {stats.map((stat, i) => (
                                    <div
                                        key={i}
                                        className="flex flex-col items-center justify-center text-center gap-3 px-6 py-8 bg-white backdrop-blur-md rounded-2xl shadow-lg border border-brand-gold/10 hover:shadow-brand-gold/30 hover:scale-105 transition-all duration-500 animate-breathe"
                                        style={{ animationDelay: `${i * 0.4}s` }}
                                    >
                                        <span className="text-brand-gold p-3 bg-brand-gold/10 rounded-full ring-4 ring-brand-gold/5">{stat.icon}</span>
                                        <span className="text-xs font-extrabold text-brand-dark-blue uppercase tracking-widest">{stat.label}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Socials */}
                            <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-brand-dark-blue/5">
                                <div className="flex items-center gap-3">
                                    {socialIcons.map((social, i) => (
                                        <a
                                            key={i}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`${social.color} p-2 rounded-full text-white shadow-md hover:scale-110 hover:-translate-y-1 transition-all active:scale-95 flex items-center justify-center`}
                                            title={social.label}
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
