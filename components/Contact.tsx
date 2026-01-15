import { useTranslations } from 'next-intl';
import { MessageCircle, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube, Check } from 'lucide-react';

export default function Contact() {
    const t = useTranslations('Contact');

    const contactMethods = [
        {
            icon: <MessageCircle className="w-6 h-6" />,
            label: t('methods.whatsapp.label'),
            value: '+1 (818) 612-8196',
            button: t('methods.whatsapp.button'),
            color: 'bg-[#25D366]',
            href: 'https://wa.me/18186128196',
        },
        {
            icon: <Mail className="w-6 h-6" />,
            label: t('methods.email.label'),
            value: 'agentmary1997@gmail.com',
            button: t('methods.email.button'),
            color: 'bg-blue-600',
            href: 'mailto:agentmary1997@gmail.com',
        },
    ];

    const socialLinks = [
        { icon: <Facebook />, color: 'hover:text-blue-400', href: 'https://www.facebook.com/marycchamorro' },
        { icon: <Instagram />, color: 'hover:text-pink-400', href: 'https://www.instagram.com/tu_seguro_con_mary/' },
        {
            icon: (
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
                </svg>
            ),
            color: 'hover:text-black',
            href: 'https://www.tiktok.com/@tu.seguro.con.mar'
        },
    ];

    return (
        <section
            id="contact"
            className="py-24 lg:py-32 relative overflow-hidden bg-center bg-no-repeat"
            style={{
                backgroundImage: 'url("/images/contact-bg-hispanic-family.png")',
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* Minimal Overlay for Maximum Transparency */}
            <div className="absolute inset-0 bg-slate-950/5" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Main Unified Container - Extreme transparency */}
                <div className="max-w-6xl mx-auto">
                    <div className="bg-white/[0.02] backdrop-blur-md rounded-[3rem] border border-white/20 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.3)] overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-12">

                            {/* Left Side: Contact Information */}
                            <div className="lg:col-span-7 p-8 lg:p-16 space-y-12">
                                <div>
                                    <h2 className="text-4xl lg:text-6xl font-extrabold mb-6 text-stone-100 font-serif drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
                                        {t('title')}
                                    </h2>
                                    <p className="text-xl text-stone-100/90 font-serif max-w-lg drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
                                        {t('subtitle')}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {contactMethods.map((method, i) => (
                                        <div key={i} className="bg-white/[0.02] backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                                            <div className={`${method.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                                                <div className="text-white">
                                                    {method.icon}
                                                </div>
                                            </div>
                                            <p className="text-brand-gold font-bold text-[10px] mb-2 uppercase tracking-[0.2em] drop-shadow-sm">{method.label}</p>
                                            <p className="text-lg lg:text-xl font-bold mb-6 text-stone-100 break-all leading-tight drop-shadow-md">{method.value}</p>
                                            <a
                                                href={method.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full bg-white/10 hover:bg-white text-white hover:text-slate-900 font-bold py-3 px-4 rounded-xl transition-all text-center inline-block text-sm border border-white/20"
                                            >
                                                {method.button}
                                            </a>
                                        </div>
                                    ))}
                                </div>

                                {/* Bottom Info Bar */}
                                <div className="flex flex-col sm:flex-row items-center justify-between gap-8 pt-8 border-t border-white/10">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-brand-gold/20 p-3 rounded-xl border border-brand-gold/30">
                                            <MapPin className="w-6 h-6 text-brand-gold" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-stone-400 uppercase tracking-widest text-[9px] mb-0.5">{t('methods.location.label')}</p>
                                            <p className="text-stone-100 text-lg font-bold drop-shadow-sm">{t('methods.location.value')}</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-3">
                                        <p className="font-bold text-gray-400 uppercase tracking-widest text-[9px] text-center sm:text-left">{t('methods.social.title')}</p>
                                        <div className="flex gap-5">
                                            {socialLinks.map((social, i) => (
                                                <a
                                                    key={i}
                                                    href={social.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`text-white/60 ${social.color} transition-all transform hover:scale-125`}
                                                >
                                                    <div className="w-5 h-5">{social.icon}</div>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side: CTA / Lead Box */}
                            <div className="lg:col-span-5 bg-gradient-to-br from-white/10 to-transparent p-8 lg:p-16 border-l border-white/10 flex flex-col justify-center relative">
                                {/* Decorative badge */}
                                <div className="absolute top-0 right-12 bg-brand-gold text-white px-6 py-2 rounded-b-2xl font-bold shadow-xl text-[10px] uppercase tracking-widest z-20">
                                    {t('cta.badge')}
                                </div>

                                <div className="text-center space-y-10 relative z-10">
                                    <h3 className="text-3xl lg:text-4xl font-extrabold leading-tight font-serif text-stone-100 drop-shadow-lg">
                                        {t('cta.title')}
                                    </h3>

                                    <button className="w-full bg-brand-gold hover:bg-white text-white hover:text-slate-900 font-extrabold text-lg py-5 rounded-2xl shadow-2xl hover:shadow-brand-gold/20 transition-all transform hover:-translate-y-1 active:scale-95 group">
                                        {t('cta.button')}
                                        <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                    </button>

                                    <div className="space-y-4">
                                        {[0, 1, 2].map((idx) => (
                                            <div key={idx} className="flex items-center gap-4 text-left">
                                                <div className="bg-brand-gold/20 p-1.5 rounded-full text-brand-gold">
                                                    <Check className="w-4 h-4" />
                                                </div>
                                                <span className="font-semibold text-stone-200 text-sm drop-shadow-sm">
                                                    {t(`cta.features.${idx}`)}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    <p className="text-xs text-gray-400 italic">
                                        {t('cta.bottomText')}
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
