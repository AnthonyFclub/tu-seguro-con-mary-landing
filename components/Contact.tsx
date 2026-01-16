"use client";

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { MessageCircle, Mail, MapPin, Facebook, Instagram, Check } from 'lucide-react';

export default function Contact() {
    const t = useTranslations('Contact');
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        product: '',
        question: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const contactMethods = [
        {
            icon: <MessageCircle className="w-6 h-6" />,
            label: t('methods.whatsapp.label'),
            value: '+1 (818) 612-8196',
            button: t('methods.whatsapp.button'),
            color: 'bg-[#25D366]',
            href: 'https://wa.me/18186128196',
        },
        {
            icon: <Mail className="w-6 h-6" />,
            label: t('methods.email.label'),
            value: 'agentmary1997@gmail.com',
            button: t('methods.email.button'),
            color: 'bg-blue-600',
            href: 'mailto:agentmary1997@gmail.com',
        },
    ];

    const socialLinks = [
        { icon: <Facebook />, color: 'hover:text-blue-400', href: 'https://www.facebook.com/marycchamorro' },
        { icon: <Instagram />, color: 'hover:text-pink-400', href: 'https://www.instagram.com/tu_seguro_con_mary/' },
        {
            icon: (
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
                </svg>
            ),
            color: 'hover:text-black',
            href: 'https://www.tiktok.com/@tu.seguro.con.mar'
        },
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('/api/submit-lead', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus('success');
                // Reset form
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    product: '',
                    question: ''
                });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id="contact"
            className="py-24 lg:py-32 relative overflow-hidden bg-center bg-no-repeat"
            style={{
                backgroundImage: 'url("/images/contact-bg-hispanic-family.png")',
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* Light Overlay for Contrast */}
            <div className="absolute inset-0 bg-white/10" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Main Unified Container */}
                <div className="max-w-6xl mx-auto">
                    <div className="bg-white/40 backdrop-blur-xl rounded-[3rem] border border-white/40 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.2)] overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-12">

                            {/* Left Side: Contact Information */}
                            <div className="lg:col-span-7 p-8 lg:p-16 space-y-12">
                                <div>
                                    <h2 className="text-4xl lg:text-6xl font-extrabold mb-6 text-slate-900 font-serif drop-shadow-[0_2px_2px_rgba(255,255,255,0.8)]">
                                        {t('title')}
                                    </h2>
                                    <p className="text-xl text-slate-800 font-serif max-w-lg drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
                                        {t('subtitle')}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {contactMethods.map((method, i) => (
                                        <div key={i} className="bg-white/[0.02] backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                                            <div className={`${method.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                                                <div className="text-white">
                                                    {method.icon}
                                                </div>
                                            </div>
                                            <p className="text-brand-gold font-bold text-[10px] mb-2 uppercase tracking-[0.2em] drop-shadow-sm">{method.label}</p>
                                            <p className="text-lg lg:text-xl font-bold mb-6 text-slate-900 break-all leading-tight drop-shadow-sm">{method.value}</p>
                                            <a
                                                href={method.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full bg-slate-900/10 hover:bg-slate-900 text-slate-900 hover:text-white font-bold py-3 px-4 rounded-xl transition-all text-center inline-block text-sm border border-slate-900/10"
                                            >
                                                {method.button}
                                            </a>
                                        </div>
                                    ))}
                                </div>

                                {/* Bottom Info Bar */}
                                <div className="flex flex-col sm:flex-row items-center justify-between gap-8 pt-8 border-t border-white/10">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-brand-gold/20 p-3 rounded-xl border border-brand-gold/30">
                                            <MapPin className="w-6 h-6 text-brand-gold" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-stone-400 uppercase tracking-widest text-[9px] mb-0.5">{t('methods.location.label')}</p>
                                            <p className="text-slate-900 text-lg font-bold drop-shadow-sm">{t('methods.location.value')}</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-3">
                                        <p className="font-bold text-gray-400 uppercase tracking-widest text-[9px] text-center sm:text-left">{t('methods.social.title')}</p>
                                        <div className="flex gap-5">
                                            {socialLinks.map((social, i) => (
                                                <a
                                                    key={i}
                                                    href={social.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`text-slate-900/60 ${social.color} transition-all transform hover:scale-125`}
                                                >
                                                    <div className="w-5 h-5">{social.icon}</div>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side: Lead Generation Form */}
                            <div className="lg:col-span-5 bg-gradient-to-br from-white/10 to-transparent p-8 lg:p-12 border-l border-white/10 flex flex-col justify-center relative">
                                <div className="absolute top-0 right-12 bg-brand-gold text-white px-6 py-2 rounded-b-2xl font-bold shadow-xl text-[10px] uppercase tracking-widest z-20">
                                    {t('cta.badge')}
                                </div>

                                <div className="space-y-6 relative z-10">
                                    <div className="text-center mb-8">
                                        <h3 className="text-2xl lg:text-3xl font-extrabold leading-tight font-serif text-slate-900 drop-shadow-sm mb-2">
                                            {t('cta.title')}
                                        </h3>
                                        <p className="text-sm text-slate-600 font-medium">{t('cta.bottomText')}</p>
                                    </div>

                                    {submitStatus === 'success' ? (
                                        <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-8 text-center">
                                            <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <Check className="w-8 h-8 text-white" />
                                            </div>
                                            <p className="text-green-800 font-bold text-lg mb-2">{t('form.success')}</p>
                                            <button
                                                onClick={() => setSubmitStatus('idle')}
                                                className="mt-4 text-green-700 underline text-sm"
                                            >
                                                Enviar otra consulta
                                            </button>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            <div>
                                                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5 ml-1">{t('form.name')}</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    placeholder={t('form.placeholder.name')}
                                                    className="w-full bg-white/50 backdrop-blur-sm border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold/50 transition-all font-medium"
                                                    required
                                                    disabled={isSubmitting}
                                                />
                                            </div>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5 ml-1">{t('form.phone')}</label>
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleInputChange}
                                                        placeholder={t('form.placeholder.phone')}
                                                        className="w-full bg-white/50 backdrop-blur-sm border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold/50 transition-all font-medium"
                                                        required
                                                        disabled={isSubmitting}
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5 ml-1">{t('form.email')}</label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        placeholder={t('form.placeholder.email')}
                                                        className="w-full bg-white/50 backdrop-blur-sm border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold/50 transition-all font-medium"
                                                        disabled={isSubmitting}
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5 ml-1">{t('form.product.label')}</label>
                                                <select
                                                    name="product"
                                                    value={formData.product}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-white/50 backdrop-blur-sm border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold/50 transition-all font-medium appearance-none cursor-pointer"
                                                    required
                                                    disabled={isSubmitting}
                                                >
                                                    <option value="">-- {t('form.product.options.other')} --</option>
                                                    <option value="medicare">{t('form.product.options.medicare')}</option>
                                                    <option value="health">{t('form.product.options.health')}</option>
                                                    <option value="life">{t('form.product.options.life')}</option>
                                                    <option value="annuities">{t('form.product.options.annuities')}</option>
                                                    <option value="retirement">{t('form.product.options.retirement')}</option>
                                                    <option value="funeral">{t('form.product.options.funeral')}</option>
                                                    <option value="disability">{t('form.product.options.disability')}</option>
                                                </select>
                                            </div>

                                            <div>
                                                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5 ml-1">{t('form.question')}</label>
                                                <textarea
                                                    rows={3}
                                                    name="question"
                                                    value={formData.question}
                                                    onChange={handleInputChange}
                                                    placeholder={t('form.placeholder.question')}
                                                    className="w-full bg-white/50 backdrop-blur-sm border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold/50 transition-all font-medium resize-none"
                                                    disabled={isSubmitting}
                                                />
                                            </div>

                                            {submitStatus === 'error' && (
                                                <div className="bg-red-50 border border-red-300 rounded-xl p-4 text-center">
                                                    <p className="text-red-700 font-semibold text-sm">{t('form.error')}</p>
                                                </div>
                                            )}

                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full bg-brand-gold hover:bg-slate-900 text-white font-extrabold text-lg py-4 rounded-xl shadow-xl hover:shadow-brand-gold/20 transition-all transform hover:-translate-y-1 active:scale-95 group mt-4 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                            >
                                                {isSubmitting ? t('form.submitting') : t('form.submit')}
                                                {!isSubmitting && <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>}
                                            </button>
                                        </form>
                                    )}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
