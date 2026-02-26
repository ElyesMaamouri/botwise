'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
    const t = useTranslations('nav');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <div className={`${styles.container} container`}>
                <Link href="/" className={styles.logo}>
                    <Image
                        src="/bootwise-logo.webp"
                        alt="Botwise Logo"
                        width={135}
                        height={40}
                        style={{ objectFit: 'cover' }}
                        priority
                    />
                </Link>

                {/* Backdrop for mobile */}
                {isMenuOpen && (
                    <div className={styles.backdrop} onClick={() => setIsMenuOpen(false)} />
                )}

                {/* Desktop & Mobile Links */}
                <div className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
                    <Link href="#solution" onClick={() => setIsMenuOpen(false)}>{t('solution')}</Link>
                    <Link href="#how-it-works" onClick={() => setIsMenuOpen(false)}>{t('howItWorks')}</Link>
                    <Link href="#pricing" onClick={() => setIsMenuOpen(false)}>{t('pricing')}</Link>
                    <Link href="#faq" onClick={() => setIsMenuOpen(false)}>{t('faq')}</Link>
                    <button className={styles.mobileBookDemo}>{t('bookDemo')}</button>
                </div>

                <div className={styles.navRight}>
                    <button className={styles.bookDemo}>
                        {t('bookDemo')}
                    </button>

                    <button
                        className={styles.hamburger}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
        </nav>
    );
}
