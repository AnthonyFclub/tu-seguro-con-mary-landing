import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Great_Vibes, Alice, Birthstone } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '@/navigation';
import { notFound } from 'next/navigation';

const inter = Inter({ subsets: ["latin"], variable: '--font-inter', weight: ['300', '400', '600'] });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], variable: '--font-cormorant', weight: ['400', '600', '700'] });
const greatVibes = Great_Vibes({ weight: '400', subsets: ["latin"], variable: '--font-great-vibes' });
const alice = Alice({ weight: '400', subsets: ["latin"], variable: '--font-alice' });
const birthstone = Birthstone({ weight: '400', subsets: ["latin"], variable: '--font-birthstone' });

export const metadata: Metadata = {
    title: "Mary Insurance | Tú Seguro con Mary",
    description: "Licensed insurance agent specializing in Medicare, ACA, Life Insurance. Bilingual service in California.",
};

export default async function RootLayout(props: any) {
    const { children, params } = props;
    const { locale } = await params;

    // Validate that the incoming `locale` parameter is valid
    if (!routing.locales.includes(locale as any)) notFound();

    const messages = await getMessages();

    return (
        <html lang={locale} className={`scroll-smooth ${inter.variable} ${cormorant.variable} ${greatVibes.variable} ${alice.variable} ${birthstone.variable}`}>
            <body className={`${inter.className} bg-white text-gray-900`}>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
