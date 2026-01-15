import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { HeartPulse, TrendingUp, Shield, Check } from 'lucide-react';

export default function Services() {
    const t = useTranslations('Services');

    const services = [
        {
            id: 'health',
            icon: <HeartPulse className="w-8 h-8 text-pink-500" />,
            title: 'Health Insurance',
            items: t.raw('health.items') as string[],
            borderColor: 'border-pink-500',
            bgColor: 'bg-pink-50/30',
            bgImage: '/images/service-bg-health-hispanic.png'
        },
        {
            id: 'legacy',
            icon: <Shield className="w-8 h-8 text-brand-blue" />,
            title: 'Life Insurance & Legacy',
            items: t.raw('legacy.items') as string[],
            borderColor: 'border-brand-blue',
            bgColor: 'bg-brand-blue/10',
            bgImage: '/images/service-bg-legacy-hispanic.png'
        },
    ];

    return (
        <section
            id="services"
            className="py-24 lg:py-32 relative overflow-hidden bg-white"
        >

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="max-w-3xl mb-16 mx-auto text-center">
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 transition-all font-serif">
                        {t('title')}
                    </h2>
                    <p className="text-xl text-slate-600 font-medium font-serif">
                        {t('subtitle')}
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-10">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className={`group relative overflow-hidden bg-slate-50 rounded-3xl p-10 border border-slate-100 shadow-sm hover:shadow-xl hover:bg-white transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center`}
                        >
                            {/* Clear Background Image */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src={service.bgImage}
                                    alt=""
                                    fill
                                    className="object-cover opacity-[0.65] scale-110 group-hover:scale-125 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-white/10" />
                            </div>

                            <div className="relative z-10 flex flex-col items-center w-full">
                                <div className={`w-20 h-20 ${service.bgColor} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-inner border border-slate-100`}>
                                    {service.icon}
                                </div>

                                <h3 className="text-3xl font-bold text-slate-900 mb-8 font-serif">
                                    {service.title}
                                </h3>

                                <ul className="space-y-5 w-full">
                                    {service.items.map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-4 text-slate-800 font-semibold justify-center">
                                            <div className={`w-2 h-2 rounded-full flex-shrink-0 ${service.id === 'health' ? 'bg-pink-400' : 'bg-blue-400'}`} />
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
