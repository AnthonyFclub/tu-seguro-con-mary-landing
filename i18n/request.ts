import { getRequestConfig } from 'next-intl/server';
import { routing } from '../navigation';

export default getRequestConfig(async ({ locale }) => {
    // Validate that the incoming `locale` parameter is valid
    const finalLocale = (routing.locales.includes(locale as any)
        ? locale
        : routing.defaultLocale) as string;

    return {
        locale: finalLocale,
        messages: (await import(`../messages/${finalLocale}.json`)).default
    };
});

