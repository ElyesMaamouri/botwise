"use client";

import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import SectionHeader from './ui/SectionHeader';
import Button from './ui/Button';
import PricingCard from './ui/PricingCard';
import styles from './Pricing.module.css';

const Pricing: React.FC = () => {
    const t = useTranslations('pricing');

    const starterFeatures = t.raw('starter.features') as string[];
    const proFeatures = t.raw('pro.features') as string[];

    const checkIcon = (
        <Image
            src="/check-circle.svg"
            alt="check"
            width={18}
            height={18}
        />
    );

    return (
        <section className={styles.pricing} id="pricing">
            <div className="container">
                <SectionHeader
                    badge={t('badge')}
                    title={t('title')}
                    description={t('description')}
                />

                <div className={styles.grid}>
                    {/* STARTER PLAN */}
                    <PricingCard
                        badge={t('starter.badge')}
                        name={t('starter.name')}
                        subtitle={t('starter.subtitle')}
                        price={t('starter.price')}
                        setupFee={t('starter.setupFee')}
                        features={starterFeatures}
                        checkIcon={checkIcon}
                        delay={0}
                        cta={
                            <Button
                                variant="primary"
                                className={styles.starterBtn}
                            >
                                {t('starter.cta')}
                            </Button>
                        }
                    />

                    {/* PRO PLAN */}
                    <PricingCard
                        isPro={true}
                        badge={t('pro.badge')}
                        name={t('pro.name')}
                        subtitle={t('pro.subtitle')}
                        price={t('pro.price')}
                        setupFee={t('pro.setupFee')}
                        features={proFeatures}
                        checkIcon={checkIcon}
                        delay={0.2}
                        cta={
                            <Button
                                variant="primary"
                                className={styles.proBtn}
                            >
                                {t('pro.cta')}
                            </Button>
                        }
                    />
                </div>
            </div>
        </section>
    );
};

export default Pricing;
