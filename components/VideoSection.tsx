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
            className="py-16 lg:py-24 min-h-[85vh] flex items-center relative overflow-hidden bg-center bg-no-repeat"
            style={{
                backgroundImage: 'url("/images/hero-bg-pastel-cubes.png")',
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="container mx-auto px-4 relative z-10">
                {/* Refined Header - Crystal Title */}
                <div className="max-w-md mx-auto text-center mb-10">
                    <div className="bg-white/10 backdrop-blur-xl p-5 rounded-[2.5rem] border border-white/20 shadow-xl">
                        <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 leading-tight font-serif drop-shadow-[0_2px_2px_rgba(255,255,255,0.7)]">
                            {t('title')}
                        </h2>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-center">
                        {/* Left: Brand Crystal Panel */}
                        <div className="bg-white/10 backdrop-blur-xl p-8 lg:p-12 rounded-[3.5rem] border border-white/20 shadow-2xl flex flex-col items-center justify-center text-center">
                            {/* Logo */}
                            <div className="relative w-full max-w-[320px] aspect-square flex items-center justify-center mb-6">
                                <Image
                                    src="/logo.png"
                                    alt="Tú Seguro con Mary Logo"
                                    width={320}
                                    height={320}
                                    className="object-contain w-full h-full drop-shadow-2xl"
                                />
                            </div>

                            {/* Brand Text */}
                            <div className="space-y-4">
                                <h3 className="text-2xl lg:text-4xl font-extrabold text-slate-900 leading-tight font-serif drop-shadow-sm">
                                    Tú Seguro con Mary
                                </h3>
                                <div className="h-1.5 w-24 bg-brand-gold/60 mx-auto rounded-full" />
                                <p className="text-sm lg:text-lg font-bold text-brand-gold uppercase tracking-[0.15em] drop-shadow-sm">
                                    PROTECT WHAT MATTERS MOST
                                </p>
                            </div>
                        </div>

                        {/* Right: Larger Video Container for Balance */}
                        <div
                            ref={containerRef}
                            className="relative aspect-video w-full rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)] border-4 border-white bg-black transform hover:scale-[1.01] transition-transform duration-500"
                        >
                            <div id="youtube-player" className="w-full h-full" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
