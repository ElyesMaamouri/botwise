"use client";

import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionHeader from './ui/SectionHeader';
import styles from './Analytics.module.css';

const Analytics: React.FC = () => {
    const t = useTranslations('analytics');

    const features = [
        {
            key: 'analytics',
            icon: '/Live conversation analytics.svg'
        },
        {
            key: 'conversion',
            icon: '/Booking conversion tracking.svg'
        },
        {
            key: 'insights',
            icon: '/Qualified renter insights.svg'
        },
        {
            key: 'reporting',
            icon: '/Revenue impact reporting.svg'
        }
    ];

    return (
        <section className={styles.analytics} id="analytics">
            <div className={`${styles.container} container-wide`}>
                <div className={styles.grid}>
                    <motion.div
                        className={styles.content}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className={styles.title}>
                            {t('title').split('.')[0]}.
                            <span className={styles.titleHighlight}>
                                {t('title').split('.')[1].trim()}.
                            </span>
                        </h2>

                        <p className={styles.description}>
                            {t('description')}
                        </p>

                        <div className={styles.featuresList}>
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.key}
                                    className={styles.featureItem}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                >
                                    <div className={styles.iconContainer}>
                                        <Image
                                            src={feature.icon}
                                            alt={t(`features.${feature.key}.title`)}
                                            width={18}
                                            height={18}
                                        />
                                    </div>
                                    <div className={styles.featureInfo}>
                                        <h3 className={styles.featureTitle}>
                                            {t(`features.${feature.key}.title`)}
                                        </h3>
                                        <p className={styles.featureDesc}>
                                            {t(`features.${feature.key}.description`)}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.mockupContainer}
                        initial={{ opacity: 0, x: 30, scale: 0.95 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className={styles.floatingBadge}>
                            <div className={styles.onlineDot} />
                            <span className={styles.badgeText}>Live Analysis</span>
                        </div>
                        <Image
                            src="/dashbord-frame.webp"
                            alt="Botwise Analytics Dashboard"
                            width={800}
                            height={600}
                            className={styles.mockupImage}
                            priority
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Analytics;
