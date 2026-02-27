import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Solution from '@/components/Solution';
import HowItWorks from '@/components/HowItWorks';
import Analytics from '@/components/Analytics';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import styles from '../page.module.css';

export default function HomePage() {
    return (
        <main className={styles.main}>
            <Navbar />
            <Hero />
            <Solution />
            <HowItWorks />
            <Analytics />
            <Pricing />
            <Testimonials />
            <FAQ />
        </main>
    );
}
