import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import VideoSection from '@/components/VideoSection';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col">
            <Header />
            <Hero />
            <Services />
            <VideoSection />
            <Testimonials />
            <Contact />
            <Footer />
        </main>
    );
}
