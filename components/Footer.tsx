import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';

export default function Footer() {
    const t = useTranslations('Footer');
    const h = useTranslations('Header');

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#1E293B] text-gray-400 py-20 border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

                    {/* Column 1: Branding */}
                    <div className="lg:col-span-1.5 space-y-6">
                        <div>
                            <p className="text-2xl font-bold text-white mb-1">Tú Seguro con Mary</p>
                            <p className="text-sm text-blue-400 font-medium uppercase tracking-widest">{h('tagline')}</p>
                        </div>
                        <p className="text-sm leading-relaxed max-w-sm">
                            {t('branding.description')}
                        </p>
                        <div className="pt-2">
                            <span className="inline-block bg-white/5 px-4 py-2 rounded-lg text-xs font-mono text-gray-300">
                                {t('branding.license')}
                            </span>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-white font-bold text-lg">{t('quickLinks.title')}</h4>
                        <nav className="flex flex-col gap-4">
                            {['about', 'services', 'testimonials', 'contact'].map((key) => (
                                <Link key={key} href={`#${key}`} className="hover:text-white transition-colors text-sm font-medium">
                                    {h(`nav.${key}`)}
                                </Link>
                            ))}
                            <Link href="#" className="hover:text-white transition-colors text-sm font-medium">{t('quickLinks.privacy')}</Link>
                            <Link href="#" className="hover:text-white transition-colors text-sm font-medium">{t('quickLinks.terms')}</Link>
                        </nav>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div className="space-y-6">
                        <h4 className="text-white font-bold text-lg">{t('contactInfo.title')}</h4>
                        <div className="space-y-4 text-sm font-medium">
                            <p className="flex flex-col">
                                <span className="text-white mb-1">{t('contactInfo.phone')}</span>
                                +1 (818) 612-8196
                            </p>
                            <p className="flex flex-col">
                                <span className="text-white mb-1">{t('contactInfo.email')}</span>
                                <span className="break-all">agentmary1997@gmail.com</span>
                            </p>
                            <p className="flex flex-col">
                                <span className="text-white mb-1">{t('contactInfo.address')}</span>
                                [123 Main St, City, CA 90210]
                            </p>
                        </div>
                    </div>

                    {/* Column 4: Hours */}
                    <div className="space-y-6">
                        <h4 className="text-white font-bold text-lg">{t('hours.title')}</h4>
                        <p className="text-sm leading-relaxed">
                            {t('hours.value')}
                        </p>
                        <div className="bg-blue-600/10 border border-blue-500/20 p-6 rounded-2xl">
                            <p className="text-blue-300 font-bold mb-2">{t('helpNow.title')}</p>
                            <p className="text-xs text-blue-100/70 mb-4 font-medium italic">{t('helpNow.description')}</p>
                            <a
                                href="https://wa.me/18186128196"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-[#25D366] text-white py-2 rounded-xl text-sm font-bold shadow-lg hover:shadow-xl transition-all text-center inline-block"
                            >
                                {t('helpNow.button')}
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="pt-12 border-t border-white/5 space-y-8">
                    <div className="bg-white/5 p-8 rounded-2xl">
                        <p className="text-[11px] leading-relaxed text-center opacity-60">
                            {t('disclaimer')}
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-xs font-medium">
                            {t('copyright', { year: currentYear })}
                        </p>
                        <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest">
                            <span>{t('badges.licensed')}</span>
                            <span>{t('badges.bilingual')}</span>
                            <span>{t('badges.experience')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
