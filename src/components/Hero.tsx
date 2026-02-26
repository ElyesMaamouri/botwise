"use client";

import { useTranslations } from 'next-intl';
import { ArrowRight, ChevronRight, Play } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

export default function Hero() {
    const t = useTranslations('hero');

    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: "easeOut" }
    };

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <section className={styles.hero}>
            <div className={styles.glowWrapper}>
                <motion.div
                    className={styles.glowContainer}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                        opacity: [0.3, 0.9, 0.3],
                        scale: [1, 1.25, 1],
                        rotate: [0, 10, -10, 0],
                        x: [-20, 20, -20],
                        y: [-15, 15, -15]
                    }}
                    transition={{
                        opacity: { duration: 10, repeat: Infinity, ease: "easeInOut" },
                        scale: { duration: 15, repeat: Infinity, ease: "easeInOut" },
                        rotate: { duration: 35, repeat: Infinity, ease: "linear" },
                        x: { duration: 25, repeat: Infinity, ease: "easeInOut" },
                        y: { duration: 20, repeat: Infinity, ease: "easeInOut" },
                        default: { duration: 2, ease: "easeOut" }
                    }}
                >
                    <Image
                        src="/Ambient Glows.svg"
                        alt=""
                        fill
                        className={styles.glowImage}
                        priority
                    />
                </motion.div>
            </div>

            <motion.div
                className={styles.container}
                variants={staggerContainer}
                initial="initial"
                animate="animate"
            >
                <motion.div className={styles.badge} variants={fadeInUp}>
                    <span className={styles.badgeLabel}>{t('badgeNew')}</span>
                    <span className={styles.badgeText}>{t('badgeText')} <ArrowRight size={14} className={styles.arrowIcon} /></span>
                </motion.div>

                <motion.h1 className={styles.title} variants={fadeInUp}>
                    {t('title')}
                </motion.h1>

                <motion.p className={styles.description} variants={fadeInUp}>
                    {t('description')}
                </motion.p>

                <motion.div className={styles.ctaGroup} variants={fadeInUp}>
                    <button className={styles.ctaPrimary}>
                        {t('ctaPrimary')}
                        <span className={styles.ctaArrows}>
                            <ChevronRight size={16} />
                            <ChevronRight size={16} />
                            <ChevronRight size={16} />
                        </span>
                    </button>
                    <button className={styles.ctaSecondary}>
                        {t('ctaSecondary')}
                    </button>
                </motion.div>
            </motion.div>


            <div className={styles.carContainer}>
                <Image
                    src="/car.webp"
                    alt="Hero Car"
                    width={1440}
                    height={600}
                    className={styles.carImage}
                    priority
                />
                <div className={styles.carOverlay}></div>
            </div>

        </section>
    );
}
