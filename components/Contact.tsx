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
                backgroundImage: 'url("/images/contact-bg-blocks.jpg")',
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* Light Overlay for Readability */}
            <div className="absolute inset-0 bg-[#0f172a]/30" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                    {/* Left: Content & Methods */}
                    <div className="lg:col-span-7 space-y-12">
                        <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-2xl">
                            <h2 className="text-4xl lg:text-6xl font-extrabold mb-4 text-white font-serif drop-shadow-lg">
                                {t('title')}
                            </h2>
                            <p className="text-xl text-white/90 font-serif">
                                {t('subtitle')}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {contactMethods.map((method, i) => (
                                <div key={i} className="bg-white/10 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/20 hover:bg-white/20 hover:scale-[1.02] transition-all duration-500 shadow-2xl group flex flex-col items-center text-center lg:items-start lg:text-left">
                                    <div className={`${method.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform`}>
                                        <div className="text-white">
                                            {method.icon}
                                        </div>
                                    </div>
                                    <p className="text-brand-gold font-bold text-xs mb-2 uppercase tracking-[0.2em]">{method.label}</p>
                                    <p className="text-2xl font-bold mb-8 text-white tracking-tight">{method.value}</p>
                                    <a
                                        href={method.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full bg-white text-[#0f172a] font-extrabold py-4 rounded-2xl hover:bg-brand-gold hover:text-white transition-all shadow-xl text-center inline-block transform active:scale-95"
                                    >
                                        {method.button}
                                    </a>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-between gap-12 bg-white/5 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/10 shadow-2xl">
                            <div className="flex items-center gap-6">
                                <div className="bg-brand-gold/20 p-4 rounded-2xl border border-brand-gold/30">
                                    <MapPin className="w-8 h-8 text-brand-gold" />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-400 uppercase tracking-widest text-[10px] mb-1">{t('methods.location.label')}</p>
                                    <p className="text-white text-xl font-bold">{t('methods.location.value')}</p>
                                    <button className="text-brand-gold font-bold mt-2 hover:text-white transition-colors text-sm flex items-center gap-1 group">
                                        {t('methods.location.button')}
                                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </button>
                                </div>
                            </div>

                            <div className="h-12 w-[1px] bg-white/10 hidden sm:block" />

                            <div className="text-center sm:text-left">
                                <p className="font-bold text-gray-400 uppercase tracking-widest text-[10px] mb-3">{t('methods.social.title')}</p>
                                <div className="flex gap-6">
                                    {socialLinks.map((social, i) => (
                                        <a
                                            key={i}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`text-white/60 ${social.color} transition-all transform hover:scale-125`}
                                        >
                                            <div className="w-6 h-6">{social.icon}</div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Final CTA Box */}
                    <div className="lg:col-span-5">
                        <div className="bg-white/10 backdrop-blur-2xl rounded-[3rem] p-10 lg:p-14 text-white border border-white/20 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)] relative overflow-hidden group">
                            {/* Decorative blur */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/20 rounded-full blur-[100px] -mr-32 -mt-32 transition-all group-hover:bg-brand-gold/30" />

                            {/* Top Badge */}
                            <div className="absolute -top-1 left-1/2 -translate-x-1/2 bg-brand-gold text-white px-8 py-2 rounded-b-3xl font-bold shadow-xl text-xs uppercase tracking-widest">
                                {t('cta.badge')}
                            </div>

                            <div className="text-center space-y-10 relative z-10">
                                <h3 className="text-4xl font-extrabold leading-tight font-serif drop-shadow-md">
                                    {t('cta.title')}
                                </h3>

                                <button className="w-full bg-white text-[#0f172a] hover:bg-brand-gold hover:text-white font-extrabold text-xl py-6 rounded-3xl shadow-2xl hover:shadow-brand-gold/20 transition-all transform hover:-translate-y-1 active:scale-95">
                                    {t('cta.button')}
                                </button>

                                <div className="flex flex-col gap-4 text-left">
                                    {[0, 1, 2].map((idx) => (
                                        <div key={idx} className="flex items-center gap-4 bg-white/5 p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                            <div className="bg-brand-gold/20 p-2 rounded-full text-brand-gold">
                                                <Check className="w-5 h-5" />
                                            </div>
                                            <span className="font-bold text-gray-200">
                                                {t(`cta.features.${idx}`)}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <p className="text-sm text-gray-400 italic font-medium">
                                    {t('cta.bottomText')}
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
