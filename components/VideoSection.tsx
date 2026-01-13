import { useTranslations } from 'next-intl';
import { Play } from 'lucide-react';

export default function VideoSection() {
    const t = useTranslations('Video');

    return (
        <section className="py-24 lg:py-32 bg-[#FEF3E2]/50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        {t('title')}
                    </h2>
                    <p className="text-xl text-gray-600 mb-12">
                        {t('subtitle')}
                    </p>

                    <div className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-2xl group cursor-pointer bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center border-8 border-white">
                        <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-gray-900/5 transition-colors" />

                        {/* Play Button Overlay */}
                        <div className="relative z-10 flex flex-col items-center gap-6">
                            <div className="w-20 h-20 lg:w-28 lg:h-28 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-transform duration-300">
                                <Play className="w-10 h-10 lg:w-14 lg:h-14 fill-current ml-1" />
                            </div>
                            <div className="bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl">
                                <p className="font-bold text-gray-900 lg:text-lg">
                                    {t('placeholder')}
                                </p>
                                <p className="text-sm text-gray-500 mt-1 uppercase tracking-wider font-semibold">
                                    {t('embedLabel')}
                                </p>
                            </div>
                        </div>

                        {/* Subtle Texture */}
                        <div className="absolute inset-0 opacity-20 pointer-events-none"
                            style={{ backgroundImage: 'radial-gradient(#2563EB 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                    </div>
                </div>
            </div>
        </section>
    );
}
