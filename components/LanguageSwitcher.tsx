'use client';

import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
    const locale = useLocale();
    const pathname = usePathname();

    const toggleLocale = () => {
        const nextLocale = locale === 'en' ? 'es' : 'en';

        // Remove current locale prefix from pathname
        const pathnameWithoutLocale = pathname.replace(`/${locale}`, '') || '/';

        // Build new path with new locale
        const newPath = `/${nextLocale}${pathnameWithoutLocale}`;

        // Use window.location to force a full page reload
        // This ensures all components re-mount and fetch new translations
        window.location.href = newPath;
    };

    return (
        <button
            onClick={toggleLocale}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300 text-sm font-bold text-brand-dark-blue hover:text-brand-gold hover:drop-shadow-[0_0_8px_rgba(184,134,11,0.6)] border border-brand-dark-blue/5 shadow-[0_0_12px_rgba(184,134,11,0.15)] bg-white/50 backdrop-blur-sm"
            aria-label="Switch Language"
        >
            <Globe className="w-4 h-4 text-brand-dark-blue" />
            <span>{locale === 'en' ? 'Español' : 'English'}</span>
        </button>
    );
}
