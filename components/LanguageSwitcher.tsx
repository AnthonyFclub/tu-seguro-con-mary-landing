'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/navigation';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const toggleLocale = () => {
        const nextLocale = locale === 'en' ? 'es' : 'en';
        console.log('Switching to locale:', nextLocale);
        router.replace(pathname, { locale: nextLocale });
    };

    return (
        <button
            onClick={toggleLocale}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700 border border-gray-100"
            aria-label="Switch Language"
        >
            <Globe className="w-4 h-4 text-brand-blue" />
            <span>{locale === 'en' ? 'Español' : 'English'}</span>
        </button>
    );
}
