"use client";

import { useTranslations } from 'next-intl';
import { Star } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export default function Testimonials() {
    const t = useTranslations('Testimonials');

    const testimonials = [
        {
            quote: t('cards.0.quote'),
            name: t('cards.0.name'),
            detail: t('cards.0.detail'),
            avatar: 'R',
        },
        {
            quote: t('cards.1.quote'),
            name: t('cards.1.name'),
            detail: t('cards.1.detail'),
            avatar: 'C',
        },
        {
            quote: t('cards.2.quote'),
            name: t('cards.2.name'),
            detail: t('cards.2.detail'),
            avatar: 'J',
        },
    ];

    return (
        <section
            id="testimonials"
            className="py-24 lg:py-32 relative overflow-hidden bg-brand-cream"
        >
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <ScrollReveal direction="up">
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-brand-dark-blue leading-tight font-serif drop-shadow-[0_2px_2px_rgba(255,255,255,0.7)]">
                            {t('title')}
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal direction="up" delay={0.1}>
                        <div className="w-48 lg:w-64 h-[3px] bg-gradient-to-r from-[#b8860b] via-[#f7e08a] via-[#d4af37] via-[#f7e08a] to-[#b8860b] mx-auto rounded-full shadow-[0_2px_15px_rgba(184,134,11,0.3)]" />
                    </ScrollReveal>
                    <ScrollReveal direction="up" delay={0.2}>
                        <p className="text-lg lg:text-xl text-brand-dark-blue font-bold drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]">
                            {t('subtitle')}
                        </p>
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((item, i) => (
                        <ScrollReveal key={i} delay={i * 0.2} direction="up">
                            <div
                                className="relative group bg-white/40 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1),0_0_30px_rgba(184,134,11,0.08)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.15),0_0_50px_rgba(184,134,11,0.15)] transition-all duration-500 hover:scale-[1.03] flex flex-col justify-between overflow-hidden h-full"
                            >
                                {/* Metallic Gold Frame Border */}
                                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-[#b8860b] via-[#f7e08a] to-[#d4af37] opacity-40 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none [mask-image:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] p-[2px]" />

                                <div className="relative z-10">
                                    {/* Metallic Gold Stars */}
                                    <div className="flex gap-1 mb-6">
                                        {[...Array(5)].map((_, idx) => (
                                            <Star
                                                key={idx}
                                                className="w-5 h-5 text-brand-gold fill-brand-gold drop-shadow-[0_1px_3px_rgba(184,134,11,0.4)] transition-transform group-hover:scale-110"
                                                style={{ filter: "drop-shadow(0 0 2px rgba(184,134,11,0.3))" }}
                                            />
                                        ))}
                                    </div>

                                    <blockquote className="text-slate-900 text-lg lg:text-xl leading-relaxed font-bold italic mb-8 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
                                        "{item.quote}"
                                    </blockquote>
                                </div>

                                <div className="flex items-center gap-4 border-t border-white/20 pt-6 relative z-10">
                                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#2a5298] via-[#0b2454] to-[#1e3c72] flex items-center justify-center text-white font-bold text-xl shadow-xl border border-white/20 group-hover:scale-110 transition-transform">
                                        {i === 2 ? 'G' : item.avatar}
                                    </div>
                                    <div>
                                        <p className="font-extrabold text-slate-900 text-lg drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">{item.name}</p>
                                        <p className="text-sm lg:text-base text-brand-dark-blue font-bold opacity-90">{item.detail}</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
