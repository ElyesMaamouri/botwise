"use client";

import { useTranslations } from 'next-intl';
import { ArrowRight, ChevronRight, Play, X } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
    const t = useTranslations('hero');
    const [isModalOpen, setIsModalOpen] = useState(false);

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
        <>
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
                            <span className={styles.starGradientBottom}></span>
                            <span className={styles.starGradientTop}></span>
                            <span className={styles.ctaSecondaryText}>{t('ctaSecondary')}</span>
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

                {/* Dashboard Image with Play Button */}
                <motion.div
                    className={styles.dashboardWrapper}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut", delay: 1.4 }}
                >
                    <div className={styles.dashboardFrame}>
                        <Image
                            src="/dashbord-botwise.png"
                            alt="Botwise Dashboard"
                            width={1041}
                            height={585}
                            className={styles.dashboardImage}
                            priority
                        />
                        {/* Overlay gradient */}
                        <div className={styles.dashboardOverlay} />

                        {/* Play Button */}
                        <button
                            className={styles.playButton}
                            onClick={() => setIsModalOpen(true)}
                            aria-label="Watch demo video"
                        >
                            <div className={styles.rippleContainer}>
                                <span className={styles.ripple} />
                                <span className={styles.ripple} />
                                <span className={styles.ripple} />
                            </div>
                            <Play size={28} className={styles.playIcon} />
                        </button>
                    </div>
                </motion.div>

            </section>

            {/* Video Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        className={styles.modalBackdrop}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        onClick={() => setIsModalOpen(false)}
                    >
                        <motion.div
                            className={styles.modalContent}
                            initial={{ opacity: 0, scale: 0.85, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.85, y: 30 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className={styles.modalClose}
                                onClick={() => setIsModalOpen(false)}
                                aria-label="Close modal"
                            >
                                <X size={20} />
                            </button>
                            <div className={styles.videoWrapper}>
                                <iframe
                                    src="https://www.youtube.com/embed/_zp6P0N0U5U?autoplay=1"
                                    title="Botwise Demo Video"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className={styles.videoIframe}
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
