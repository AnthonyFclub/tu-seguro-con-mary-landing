import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { HeartPulse, TrendingUp, Shield, Check } from 'lucide-react';

export default function Services() {
    const t = useTranslations('Services');

    const services = [
        {
            id: 'health',
            icon: <HeartPulse className="w-8 h-8 text-pink-500" />,
            title: t('health.title'),
            items: t.raw('health.items') as string[],
            borderColor: 'border-pink-500',
            bgColor: 'bg-pink-50/30',
            bgImage: '/images/service-bg-health-hispanic.png'
        },
        {
            id: 'legacy',
            icon: <Shield className="w-8 h-8 text-brand-blue" />,
            title: t('legacy.title'),
            items: t.raw('legacy.items') as string[],
            borderColor: 'border-brand-blue',
            bgColor: 'bg-brand-blue/10',
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
                <div className="max-w-4xl mb-12 mx-auto text-center">
                    <div className="bg-white/10 backdrop-blur-xl p-8 lg:p-10 rounded-[3rem] border border-white/20 shadow-2xl space-y-3">
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight transition-all font-serif drop-shadow-[0_2px_2px_rgba(255,255,255,0.7)]">
                            {t('title')}
                        </h2>
                        <p className="text-lg lg:text-xl text-slate-800 font-bold drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]">
                            {t('subtitle')}
                        </p>
                    </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className={`group relative overflow-hidden bg-slate-50 rounded-3xl pt-8 pb-12 px-6 lg:px-10 border border-slate-100 shadow-sm hover:shadow-xl hover:bg-white transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center`}
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
                                <div className={`w-20 h-20 ${service.bgColor} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-inner border border-white/40 backdrop-blur-sm`}>
                                    {service.icon}
                                </div>

                                <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-2 font-serif drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
                                    {service.title}
                                </h3>
                                <div className={`w-12 h-1 rounded-full ${service.id === 'health' ? 'bg-pink-500' : 'bg-brand-blue'} mb-8 opacity-60`} />

                                <ul className="space-y-5 w-full">
                                    {service.items.map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-slate-900 font-bold justify-center text-lg lg:text-xl drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)] group/item">
                                            <div className={`w-2 h-2 rounded-full flex-shrink-0 shadow-sm transition-transform group-hover/item:scale-125 ${service.id === 'health' ? 'bg-pink-500/80' : 'bg-brand-blue/80'}`} />
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
