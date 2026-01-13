import { useTranslations } from 'next-intl';
import { MessageCircle, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube, Check } from 'lucide-react';

export default function Contact() {
    const t = useTranslations('Contact');

    const contactMethods = [
        {
            icon: <MessageCircle className="w-6 h-6" />,
            label: t('methods.whatsapp.label'),
            value: '[555-123-4567]',
            button: t('methods.whatsapp.button'),
            color: 'bg-[#25D366]',
        },
        {
            icon: <Mail className="w-6 h-6" />,
            label: t('methods.email.label'),
            value: 'info@t–useguroconmary.com',
            button: t('methods.email.button'),
            color: 'bg-blue-600',
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
        <section id="contact" className="py-24 lg:py-32 bg-[#1E3A8A] text-white overflow-hidden relative">
            {/* Abstract Background Design */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Content & Methods */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                                {t('title')}
                            </h2>
                            <p className="text-xl text-blue-100">
                                {t('subtitle')}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {contactMethods.map((method, i) => (
                                <div key={i} className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all">
                                    <div className={`${method.color} w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                                        {method.icon}
                                    </div>
                                    <p className="text-blue-200 text-sm mb-1 font-medium uppercase tracking-wider">{method.label}</p>
                                    <p className="text-2xl font-bold mb-6">{method.value}</p>
                                    <button className="w-full bg-white text-blue-900 font-bold py-3 rounded-xl hover:bg-blue-50 transition-colors shadow-md">
                                        {method.button}
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-12">
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-600 p-3 rounded-2xl">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-bold text-lg">{t('methods.location.label')}</p>
                                    <p className="text-blue-100 whitespace-pre-line">{t('methods.location.value')}</p>
                                    <button className="text-blue-300 font-bold mt-2 hover:text-white transition-colors underline decoration-2 underline-offset-4">
                                        {t('methods.location.button')}
                                    </button>
                                </div>
                            </div>

                            <div>
                                <p className="font-bold text-lg mb-4">{t('methods.social.title')}</p>
                                <div className="flex gap-4">
                                    {socialLinks.map((social, i) => (
                                        <a
                                            key={i}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`text-white/70 ${social.color} transition-colors transform hover:scale-110 flex items-center justify-center`}
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Final CTA Box */}
                    <div className="bg-white rounded-[2.5rem] p-10 lg:p-14 text-gray-900 shadow-2xl relative">
                        {/* Top Badge */}
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-8 py-3 rounded-full font-bold shadow-xl">
                            {t('cta.badge')}
                        </div>

                        <div className="text-center space-y-8 mt-4">
                            <h3 className="text-3xl font-bold leading-tight">
                                {t('cta.title')}
                            </h3>

                            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xl py-5 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 active:scale-95">
                                {t('cta.button')}
                            </button>

                            <div className="flex flex-col gap-4 text-left">
                                {[0, 1, 2].map((idx) => (
                                    <div key={idx} className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                                        <div className="bg-blue-100 p-1.5 rounded-full text-blue-600">
                                            <Check className="w-4 h-4" />
                                        </div>
                                        <span className="font-semibold text-gray-700">
                                            {t(`cta.features.${idx}`)}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <p className="text-sm text-gray-500 italic">
                                {t('cta.bottomText')}
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
