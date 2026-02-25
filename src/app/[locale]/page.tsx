import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import styles from '../page.module.css';

export default function HomePage() {
    return (
        <main className={styles.main}>
            <Navbar />
            <Hero />
            {/* Add more sections here as you code your design */}
        </main>
    );
}
