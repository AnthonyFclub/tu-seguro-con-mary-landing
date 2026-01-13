'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function VideoSection() {
    const t = useTranslations('Video');
    const h = useTranslations('Header');

    return (
        <section className="py-24 lg:py-32 bg-[#FEF3E2]/50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        {t('title')}
                    </h2>
                    <p className="text-xl text-gray-600">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[500px_1fr] gap-8 lg:gap-12 items-center">
                        {/* Left: Logo and Brand Text */}
                        <div className="flex flex-col items-center gap-8">
                            {/* Logo */}
                            <div className="relative w-[450px] h-[450px] flex items-center justify-center">
                                <Image
                                    src="/logo.png"
                                    alt="Tú Seguro con Mary Logo"
                                    width={450}
                                    height={450}
                                    className="object-contain"
                                />
                            </div>

                            {/* Brand Text */}
                            <div className="text-center">
                                <h3 className="text-4xl lg:text-5xl font-bold text-brand-blue mb-2">
                                    Tú Seguro con Mary
                                </h3>
                                <p className="text-xl lg:text-2xl font-bold text-brand-gold uppercase tracking-wider">
                                    {h('tagline')}
                                </p>
                            </div>
                        </div>

                        {/* Right: Video */}
                        <div className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/iakNXZzJbds?autoplay=1&mute=1&loop=1&playlist=iakNXZzJbds&controls=1&rel=0&modestbranding=1"
                                title="Mary Carmen Introduction Video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
