'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

declare global {
    interface Window {
        onYouTubeIframeAPIReady: () => void;
        YT: any;
    }
}

export default function VideoSection() {
    const t = useTranslations('Video');
    const h = useTranslations('Header');
    const playerRef = useRef<any>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const isIntersectingRef = useRef(false);
    const [isApiLoaded, setIsApiLoaded] = useState(false);

    useEffect(() => {
        // Load YouTube IFrame API script
        if (!window.YT) {
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

            window.onYouTubeIframeAPIReady = () => {
                setIsApiLoaded(true);
            };
        } else if (window.YT && window.YT.Player) {
            setIsApiLoaded(true);
        }
    }, []);

    useEffect(() => {
        if (!isApiLoaded || !containerRef.current) return;

        const videoId = 'iakNXZzJbds';

        // Initialize Player - Always muted for reliable autoplay
        const player = new window.YT.Player('youtube-player', {
            videoId: videoId,
            playerVars: {
                autoplay: 0,
                mute: 1,
                loop: 1,
                playlist: videoId,
                controls: 1,
                rel: 0,
                modestbranding: 1,
                playsinline: 1,
                origin: typeof window !== 'undefined' ? window.location.origin : '',
            },
            events: {
                onReady: (event: any) => {
                    playerRef.current = event.target;
                    if (isIntersectingRef.current) {
                        playerRef.current.playVideo();
                    }
                }
            },
        });

        // Intersection Observer logic
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (!entry) return;

                isIntersectingRef.current = entry.isIntersecting;

                if (entry.isIntersecting) {
                    if (playerRef.current) {
                        try {
                            playerRef.current.mute(); // Ensure it stays muted
                            playerRef.current.playVideo();
                        } catch (e) { }
                    }
                } else {
                    if (playerRef.current) {
                        try {
                            playerRef.current.pauseVideo();
                        } catch (e) { }
                    }
                }
            },
            {
                threshold: 0.1,
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (player && typeof player.destroy === 'function') {
                player.destroy();
            }
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, [isApiLoaded]);

    return (
        <section
            className="py-24 lg:py-32 relative overflow-hidden bg-center bg-no-repeat"
            style={{
                backgroundImage: 'url("/images/section-bg-2.png")',
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
                        {t('title')}
                    </h2>
                    <p className="text-xl text-white font-medium drop-shadow-md">
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
                            <div className="text-center -mt-8 bg-black/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 shadow-xl">
                                <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-1 drop-shadow-md">
                                    Tú Seguro con Mary
                                </h3>
                                <p className="text-sm lg:text-base xl:text-lg font-bold text-brand-gold uppercase tracking-wider drop-shadow-sm">
                                    {h('tagline')}
                                </p>
                            </div>
                        </div>

                        {/* Right: Video (takes more space) */}
                        <div
                            ref={containerRef}
                            className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-black"
                        >
                            <div id="youtube-player" className="w-full h-full" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
