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

                <div className="max-w-[1600px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12 items-center">
                        {/* Left: Logo and Brand Text */}
                        <div className="flex flex-col items-center justify-center gap-0 px-4">
                            {/* Logo */}
                            <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
                                <Image
                                    src="/logo.png"
                                    alt="Tú Seguro con Mary Logo"
                                    width={500}
                                    height={500}
                                    className="object-contain w-full h-full"
                                />
                            </div>

                            {/* Brand Text */}
                            <div className="text-center -mt-8">
                                <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-brand-blue mb-1">
                                    Tú Seguro con Mary
                                </h3>
                                <p className="text-sm lg:text-base xl:text-lg font-bold text-brand-gold uppercase tracking-wider">
                                    {h('tagline')}
                                </p>
                            </div>
                        </div>

                        {/* Right: Video (takes more space) */}
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
