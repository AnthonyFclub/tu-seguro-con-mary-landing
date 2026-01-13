import { useTranslations } from 'next-intl';
import { Star } from 'lucide-react';

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
        <section id="testimonials" className="py-24 lg:py-32 bg-white overflow-hidden relative">
            {/* Decorative Blob */}
            <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-60" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        {t('title')}
                    </h2>
                    <p className="text-xl text-gray-600">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((item, i) => (
                        <div
                            key={i}
                            className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.03] flex flex-col justify-between"
                        >
                            <div>
                                {/* 5 Blue Stars - NO YELLOW allowed */}
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, idx) => (
                                        <Star key={idx} className="w-5 h-5 text-blue-600 fill-blue-600" />
                                    ))}
                                </div>

                                <blockquote className="text-gray-700 text-lg leading-relaxed italic mb-8">
                                    "{item.quote}"
                                </blockquote>
                            </div>

                            <div className="flex items-center gap-4 border-t border-gray-50 pt-6">
                                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-inner">
                                    {item.avatar}
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900">{item.name}</p>
                                    <p className="text-sm text-blue-600 font-medium">{item.detail}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
