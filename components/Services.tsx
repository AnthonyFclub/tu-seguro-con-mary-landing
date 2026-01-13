import { useTranslations } from 'next-intl';
import { HeartPulse, TrendingUp, Shield, Check } from 'lucide-react';

export default function Services() {
    const t = useTranslations('Services');

    const services = [
        {
            id: 'health',
            icon: <HeartPulse className="w-8 h-8 text-pink-500" />,
            title: t('health.title'),
            items: [
                t('health.items.0'),
                t('health.items.1'),
                t('health.items.2'),
                t('health.items.3'),
                t('health.items.4'),
            ],
            borderColor: 'border-pink-500',
            bgColor: 'bg-pink-50/30',
        },
        {
            id: 'wealth',
            icon: <TrendingUp className="w-8 h-8 text-emerald-500" />,
            title: t('wealth.title'),
            items: [
                t('wealth.items.0'),
                t('wealth.items.1'),
                t('wealth.items.2'),
                t('wealth.items.3'),
                t('wealth.items.4'),
            ],
            borderColor: 'border-emerald-500',
            bgColor: 'bg-emerald-50/30',
        },
        {
            id: 'legacy',
            icon: <Shield className="w-8 h-8 text-blue-600" />,
            title: t('legacy.title'),
            items: [
                t('legacy.items.0'),
                t('legacy.items.1'),
                t('legacy.items.2'),
                t('legacy.items.3'),
                t('legacy.items.4'),
            ],
            borderColor: 'border-blue-600',
            bgColor: 'bg-blue-50/30',
        },
    ];

    return (
        <section id="services" className="py-24 lg:py-32 bg-white">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="max-w-3xl mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 transition-all">
                        {t('title')}
                    </h2>
                    <p className="text-xl text-gray-600">
                        {t('subtitle')}
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className={`group bg-white rounded-2xl p-8 border-l-4 ${service.borderColor} shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}
                        >
                            <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                {service.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                {service.title}
                            </h3>

                            <ul className="space-y-4">
                                {service.items.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                                        <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${service.id === 'health' ? 'text-pink-500' : service.id === 'wealth' ? 'text-emerald-500' : 'text-blue-600'}`} />
                                        <span className="font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
