"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './Solution.module.css';

export default function Solution() {
    const t = useTranslations('solutions');

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

    const features = [
        'instant',
        'availability',
        'info',
        'payment',
        'followups',
        'upsells',
        'crm',
        'multilingual'
    ];

    return (
        <section className={styles.solution} id="solution">

            <div className={`${styles.introContainer} container-wide`}>
                <motion.div
                    className={styles.introHeader}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className={styles.introBadge}>
                        {t('introBadge')}
                    </span>
                    <h2 className={styles.introTitle}>
                        {t('introTitle')}
                    </h2>
                    <p className={styles.introDescription}>
                        {t('introDescription')}
                    </p>
                </motion.div>
            </div>

            <div className={`${styles.container} container-wide`}>
                {/* Left side: Text and Features */}
                <motion.div
                    className={styles.content}
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.span className={styles.badge} variants={fadeInUp}>
                        {t('badge')}
                    </motion.span>

                    <motion.h2 className={styles.title} variants={fadeInUp}>
                        {t('title')}
                    </motion.h2>

                    <motion.p className={styles.description} variants={fadeInUp}>
                        {t('description')}
                    </motion.p>

                    <div className={styles.featuresGrid}>
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature}
                                className={styles.featureCard}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 * index }}
                            >
                                <span className={styles.dot} />
                                <span className={styles.featureLabel}>{t(`features.${feature}`)}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Right side: Chat Mockup */}
                <motion.div
                    className={styles.chatWrapper}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Ambient Glow from SVG directly behind the chat */}
                    <motion.div
                        className={styles.chatGlowContainer}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                            opacity: [0.4, 0.7, 0.4],
                            scale: [1.2, 1.3, 1.2],
                        }}
                        transition={{
                            opacity: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                            scale: { duration: 12, repeat: Infinity, ease: "easeInOut" },
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

                    <div className={styles.chatMockup}>
                        <div className={styles.chatHeader}>
                            <div className={styles.onlineDot} />
                            <span className={styles.headerText}>Botwise — Online 24/7</span>
                        </div>

                        <div className={styles.messages}>
                            <motion.div
                                className={styles.message + " " + styles.userMessage}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.6 }}
                            >
                                Hi, is the Toyota RAV4 available this weekend? How much?
                                <span className={styles.time}>11:47 PM</span>
                            </motion.div>

                            <motion.div
                                className={styles.message + " " + styles.botMessage}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 1.6 }}
                            >
                                Hi! Yes, the RAV4 is available Friday to Sunday. That's 3 days at $89/day — total $267. Would you like to add insurance coverage for $18/day?
                                <span className={styles.time}>11:47 PM · <span className={styles.botName}>Botwise</span></span>
                            </motion.div>

                            <motion.div
                                className={styles.message + " " + styles.userMessage}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 2.6 }}
                            >
                                Yes, add insurance please. How do I confirm?
                                <span className={styles.time}>11:48 PM</span>
                            </motion.div>

                            <motion.div
                                className={styles.message + " " + styles.botMessage}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 3.6 }}
                            >
                                Perfect. Total: $321. Here's your secure payment link → <span style={{ color: 'var(--blue)', textDecoration: 'underline', cursor: 'pointer' }}>pay.botwise.io/rav4-booking</span>. I'll send your confirmation and pickup details once it's done.
                                <span className={styles.time}>11:48 PM · <span className={styles.botName}>Botwise</span></span>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
