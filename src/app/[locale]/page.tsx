import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Solution from '@/components/Solution';
import styles from '../page.module.css';

export default function HomePage() {
    return (
        <main className={styles.main}>
            <Navbar />
            <Hero />
            <Solution />
        </main>
    );
}
