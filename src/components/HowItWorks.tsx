"use client";

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionHeader from './ui/SectionHeader';
import StepCard from './ui/StepCard';
import Button from './ui/Button';
import styles from './HowItWorks.module.css';

const HowItWorks: React.FC = () => {
    const t = useTranslations('howItWorks');

    const steps = [
        {
            number: '01',
            key: 'step1',
            icon: <Image src="/connect.svg" alt="Connect" width={32} height={32} />
        },
        {
            number: '02',
            key: 'step2',
            icon: <Image src="/mind.svg" alt="Mind" width={32} height={32} />
        },
        {
            number: '03',
            key: 'step3',
            icon: <Image src="/booking.svg" alt="Booking" width={32} height={32} />
        }
    ];

    return (
        <section className={styles.howItWorks} id="how-it-works">
            <div className={styles.localContainer}>
                <div className={styles.box}>
                    <SectionHeader
                        badge={t('badge')}
                        title={t('title')}
                        description={t('description')}
                    />

                    <div className={styles.ctaWrapper}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <Button href="/start" variant="primary" className={styles.specialBtn}>
                                {t('cta')}
                            </Button>
                        </motion.div>
                    </div>

                    <div className={styles.stepsGrid}>
                        {steps.map((step, index) => (
                            <StepCard
                                key={step.number}
                                number={step.number}
                                title={t(`${step.key}.title`)}
                                description={t(`${step.key}.description`)}
                                icon={step.icon}
                                delay={0.2 * index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
