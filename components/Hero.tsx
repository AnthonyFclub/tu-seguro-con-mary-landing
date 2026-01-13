import { useTranslations } from 'next-intl';
import { CheckCircle2, MessageCircle, Facebook, Instagram, Mail } from 'lucide-react';
import { Link } from '@/navigation';
import Image from 'next/image';

export default function Hero() {
    const t = useTranslations('Hero');

    const stats = [
        { label: t('stats.experience'), icon: <CheckCircle2 className="w-5 h-5" /> },
        { label: t('stats.clients'), icon: <CheckCircle2 className="w-5 h-5" /> },
        { label: t('stats.service'), icon: <CheckCircle2 className="w-5 h-5" /> },
    ];

    const socialIcons = [
        { icon: <Facebook className="w-6 h-6" />, color: 'bg-[#1877F2]', label: 'Facebook', href: 'https://www.facebook.com/marycchamorro' },
        { icon: <Instagram className="w-6 h-6" />, color: 'bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]', label: 'Instagram', href: 'https://www.instagram.com/tu_seguro_con_mary/' },
        {
            icon: (
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
                </svg>
            ),
            color: 'bg-black',
            label: 'TikTok',
            href: 'https://www.tiktok.com/@tu.seguro.con.mar'
        },
        { icon: <Mail className="w-6 h-6" />, color: 'bg-blue-500', label: 'Email', href: 'mailto:info@tuseguroconmary.com' },
    ];

    return (
        <section id="about" className="relative min-h-screen flex items-center bg-[#FEF3E2]/30 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-50" />

            <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Column Left: Content */}
                    <div className="lg:col-span-7 space-y-8 animate-in fade-in slide-in-from-left duration-1000">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-bold shadow-sm">
                            <CheckCircle2 className="w-4 h-4" />
                            {t('badge')}
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                                {t('headline')}
                            </h1>
                            <h2 className="text-2xl lg:text-3xl font-medium text-blue-600">
                                {t('subheadline')}
                            </h2>
                            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl leading-relaxed">
                                {t('description')}
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-4">
                            {stats.map((stat, i) => (
                                <div key={i} className="flex items-center gap-2 px-4 py-3 bg-white rounded-xl shadow-sm border border-blue-100/50">
                                    <span className="text-blue-600">{stat.icon}</span>
                                    <span className="text-sm font-semibold text-gray-700">{stat.label}</span>
                                </div>
                            ))}
                        </div>

                        {/* Actions */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link
                                href="#contact"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all active:scale-95"
                            >
                                {t('buttons.contact')}
                            </Link>
                            <Link
                                href="#services"
                                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-lg transition-all active:scale-95"
                            >
                                {t('buttons.services')}
                            </Link>
                        </div>

                        {/* Quick Socials */}
                        <div className="flex items-center gap-4 pt-6">
                            {socialIcons.map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${social.color} p-3 rounded-full text-white shadow-md hover:scale-110 transition-transform active:scale-90 flex items-center justify-center`}
                                    title={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column Right: Image Placeholder */}
                    <div className="lg:col-span-5 relative animate-in fade-in zoom-in duration-1000 delay-300">
                        <div className="relative aspect-[3/4] w-full max-w-[500px] mx-auto group">
                            {/* Decorative Frame */}
                            <div className="absolute inset-0 border-2 border-blue-200 rounded-[2rem] translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500" />

                            <div className="relative h-full w-full rounded-[2rem] overflow-hidden bg-gradient-to-br from-blue-100 to-blue-50 shadow-2xl flex flex-col items-center justify-center border-4 border-white">
                                <div className="flex flex-col items-center gap-4 p-8 text-center">
                                    <div className="w-24 h-24 bg-blue-200 rounded-full flex items-center justify-center">
                                        <svg className="w-12 h-12 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                        </svg>
                                    </div>
                                    <p className="text-blue-800 font-bold text-xl leading-snug">
                                        [Professional Photo - Mary Carmen]
                                    </p>
                                    <p className="text-blue-600/70 text-sm italic">
                                        Image will be uploaded later by client<br />(600x800px)
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
