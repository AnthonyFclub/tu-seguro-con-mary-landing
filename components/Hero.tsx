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
        { icon: <MessageCircle className="w-6 h-6" />, color: 'bg-[#25D366]', label: 'WhatsApp', href: 'https://wa.me/18186128196' },
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
        { icon: <Mail className="w-6 h-6" />, color: 'bg-blue-500', label: 'Email', href: 'mailto:agentmary1997@gmail.com' },
    ];

    return (
        <section
            id="about"
            className="relative min-h-screen flex items-center overflow-hidden bg-brand-cream"
        >
            {/* Background Image - Using standard CSS background to avoid Next.js Image fill zooming if resolution is an issue */}
            <div className="container mx-auto px-4 pt-24 pb-8 lg:pt-32 lg:pb-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Column Left: Content - Unified in a Glass Panel */}
                    <div className="lg:col-span-7 animate-in fade-in slide-in-from-left duration-1000">
                        <div className="bg-white/10 backdrop-blur-xl p-6 lg:p-10 rounded-[3rem] border border-white/20 shadow-2xl space-y-6">
                            <div className="space-y-2">
                                <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-tight font-serif drop-shadow-[0_2px_2px_rgba(255,255,255,0.7)]">
                                    {t('headline')}
                                </h1>
                                <h2 className="text-xl lg:text-2xl font-bold text-slate-800 font-serif drop-shadow-[0_1px_1px_rgba(255,255,255,0.5)]">
                                    {t('subheadline')}
                                </h2>
                            </div>

                            <p className="text-lg lg:text-xl text-black leading-relaxed font-bold drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]">
                                {t('description')}
                            </p>

                            {/* Stats - Crystal effect badges */}
                            <div className="flex flex-wrap gap-3">
                                {stats.map((stat, i) => (
                                    <div key={i} className="flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-xl rounded-xl shadow-lg border border-white/20 hover:bg-white/20 transition-all">
                                        <span className="text-brand-blue">{stat.icon}</span>
                                        <span className="text-sm font-bold text-slate-900">{stat.label}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Actions - Single prominent button with crystal effect */}
                            <div className="flex flex-wrap gap-4 pt-2">
                                <Link
                                    href="#services"
                                    className="bg-white/10 backdrop-blur-xl hover:bg-white/20 text-slate-900 px-10 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all active:scale-95 border border-white/20 flex items-center gap-3 group"
                                >
                                    {t('buttons.services')}
                                    <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                                </Link>
                            </div>

                            {/* Quick Socials */}
                            <div className="flex items-center gap-4 pt-2">
                                {socialIcons.map((social, i) => (
                                    <a
                                        key={i}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`${social.color} p-2.5 rounded-full text-white shadow-md hover:scale-110 transition-transform active:scale-90 flex items-center justify-center`}
                                        title={social.label}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Column Right: Image */}
                    <div className="lg:col-span-5 relative animate-in fade-in zoom-in duration-1000 delay-300">
                        <div className="relative aspect-[3/4] w-full max-w-[450px] mx-auto group">
                            {/* Decorative Frame */}
                            <div className="absolute inset-0 border-2 border-brand-gold/30 rounded-[2rem] translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500" />

                            <div className="relative h-full w-full rounded-[2rem] overflow-hidden bg-gradient-to-br from-blue-100 to-blue-50 shadow-2xl border-4 border-white">
                                <Image
                                    src="/images/mary-carmen.jpg"
                                    alt={t('imageAlt')}
                                    fill
                                    priority
                                    className="object-cover object-top hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
