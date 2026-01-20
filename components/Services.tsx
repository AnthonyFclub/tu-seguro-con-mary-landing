"use client";

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { HeartPulse, TrendingUp, Shield, Check } from 'lucide-react';

export default function Services() {
    const t = useTranslations('Services');

    const services = [
        {
            id: 'health',
            icon: <HeartPulse className="w-8 h-8 text-white drop-shadow-md" />,
            title: t('health.title'),
            items: t.raw('health.items') as string[],
            borderColor: 'border-pink-500',
            bgColor: 'bg-gradient-to-br from-[#B8860B] via-[#DAA520] to-[#B8860B]',
            bgImage: '/images/service-bg-health-hispanic.png'
        },
        {
            id: 'legacy',
            icon: <Shield className="w-8 h-8 text-white drop-shadow-md" />,
            title: t('legacy.title'),
            items: t.raw('legacy.items') as string[],
            borderColor: 'border-brand-blue',
            bgColor: 'bg-gradient-to-br from-[#B8860B] via-[#DAA520] to-[#B8860B]',
            bgImage: '/images/service-bg-legacy-hispanic.png'
        },
    ];

    return (
        <section
            id="services"
            className="py-16 lg:py-24 relative overflow-hidden bg-brand-cream"
        >

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header - Harmonized Crystal Effect */}
                <div className="mb-16 lg:mb-20 text-center max-w-4xl mx-auto space-y-4">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-brand-dark-blue leading-tight transition-all font-serif drop-shadow-[0_2px_2px_rgba(255,255,255,0.7)]">
                        {t('title')}
                    </h2>
                    <div className="w-24 h-0.5 bg-brand-gold/40 mx-auto rounded-full shadow-[0_0_10px_rgba(184,134,11,0.2)]" />
                    <p className="text-lg lg:text-xl text-brand-dark-blue font-bold drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]">
                        {t('subtitle')}
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className={`group relative overflow-hidden bg-slate-50 rounded-3xl pt-8 pb-12 px-6 lg:px-10 border border-slate-100 shadow-sm hover:shadow-[0_0_30px_rgba(184,134,11,0.3)] hover:border-brand-gold/30 hover:bg-white transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center`}
                        >
                            {/* Clear Background Image */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src={service.bgImage}
                                    alt=""
                                    fill
                                    className="object-cover opacity-[0.65] scale-110 group-hover:scale-125 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-white/35" />
                            </div>

                            <div className="relative z-10 flex flex-col items-center w-full">
                                <div className={`w-20 h-20 ${service.bgColor} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-all shadow-[0_10px_20px_rgba(184,134,11,0.3)] group-hover:shadow-[0_15px_30px_rgba(184,134,11,0.4)] border border-white/40 backdrop-blur-sm`}>
                                    {service.icon}
                                </div>

                                <h3 className="text-3xl lg:text-4xl font-extrabold text-brand-dark-blue mb-2 font-serif drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
                                    {service.title}
                                </h3>
                                <div className="w-12 h-1 rounded-full bg-brand-gold mb-8 opacity-60" />

                                <ul className="space-y-5 w-full">
                                    {service.items.map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-brand-dark-blue font-bold justify-center text-lg lg:text-xl drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)] group/item">
                                            <div className="w-2 h-2 rounded-full flex-shrink-0 bg-brand-gold shadow-sm transition-transform group-hover/item:scale-125" />
                                            <span className="leading-tight">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
