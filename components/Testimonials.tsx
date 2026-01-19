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
        <section
            id="testimonials"
            className="py-24 lg:py-32 relative overflow-hidden bg-brand-cream"
        >
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-brand-dark-blue leading-tight font-serif drop-shadow-[0_2px_2px_rgba(255,255,255,0.7)]">
                        {t('title')}
                    </h2>
                    <div className="w-24 h-0.5 bg-brand-gold/40 mx-auto rounded-full shadow-[0_0_10px_rgba(184,134,11,0.2)]" />
                    <p className="text-lg lg:text-xl text-brand-dark-blue font-bold drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((item, i) => (
                        <div
                            key={i}
                            className="bg-white/35 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/30 shadow-2xl hover:shadow-white/20 transition-all duration-500 hover:scale-[1.03] flex flex-col justify-between group"
                        >
                            <div>
                                {/* Brand Gold Stars */}
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, idx) => (
                                        <Star key={idx} className="w-5 h-5 text-brand-gold fill-brand-gold drop-shadow-sm" />
                                    ))}
                                </div>

                                <blockquote className="text-slate-900 text-lg lg:text-xl leading-relaxed font-bold italic mb-8 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
                                    "{item.quote}"
                                </blockquote>
                            </div>

                            <div className="flex items-center gap-4 border-t border-white/20 pt-6">
                                <div className="w-14 h-14 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold text-xl shadow-xl group-hover:scale-110 transition-transform">
                                    {i === 2 ? 'G' : item.avatar}
                                </div>
                                <div>
                                    <p className="font-extrabold text-slate-900 text-lg drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">{item.name}</p>
                                    <p className="text-sm lg:text-base text-brand-blue font-bold opacity-90">{item.detail}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
