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

        const videoId = 'aQkmYCOcDEo';

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
            className="py-16 lg:py-24 min-h-[85vh] flex items-center relative overflow-hidden bg-brand-cream"
        >
            <div className="container mx-auto px-4 relative z-10">
                {/* Harmonized Header - Silhouette Effect */}
                <div className="mb-12 text-center max-w-4xl mx-auto space-y-4">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-brand-dark-blue leading-tight transition-all font-serif drop-shadow-[0_2px_2px_rgba(255,255,255,0.7)]">
                        {t('title')}
                    </h2>
                    <div className="w-48 lg:w-64 h-[3px] bg-gradient-to-r from-[#b8860b] via-[#f7e08a] via-[#d4af37] via-[#f7e08a] to-[#b8860b] mx-auto rounded-full shadow-[0_2px_15px_rgba(184,134,11,0.3)]" />
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-center">
                        <div className="flex items-center justify-center">
                            <div className="relative w-full max-w-[420px] aspect-square transform hover:scale-[1.03] transition-all duration-500 group">
                                <Image
                                    src="/video-logo.png"
                                    alt="Tu Seguro con Mary - Integrated Logo"
                                    fill
                                    className="object-contain drop-shadow-2xl group-hover:drop-shadow-[0_0_30px_rgba(184,134,11,0.3)] group-hover:brightness-110 transition-all duration-500"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Right: Larger Video Container for Balance */}
                        <div
                            ref={containerRef}
                            className="relative aspect-video w-full rounded-[2.5rem] overflow-hidden shadow-[0_0_80px_rgba(184,134,11,0.35)] border-4 border-white bg-black transform hover:scale-[1.01] transition-transform duration-500"
                        >
                            <div id="youtube-player" className="w-full h-full" />
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
