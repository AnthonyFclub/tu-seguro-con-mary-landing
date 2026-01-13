import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '@/navigation';
import { notFound } from 'next/navigation';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Mary Carmen Insurance | Tú Seguro con Mary",
    description: "Licensed insurance agent specializing in Medicare, ACA, Life Insurance. Bilingual service in California.",
};

export default async function RootLayout(props: any) {
    const { children, params } = props;
    const { locale } = await params;

    // Validate that the incoming `locale` parameter is valid
    if (!routing.locales.includes(locale as any)) notFound();

    const messages = await getMessages();

    return (
        <html lang={locale} className="scroll-smooth">
            <body className={`${inter.className} bg-white text-gray-900`}>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
