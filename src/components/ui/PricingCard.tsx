import React from 'react';
import { motion } from 'framer-motion';
import styles from './PricingCard.module.css';

interface PricingCardProps {
    badge?: string;
    isPro?: boolean;
    name: string;
    subtitle: string;
    price: string;
    setupFee: string;
    cta: React.ReactNode;
    features: string[];
    checkIcon: React.ReactNode;
    delay?: number;
}

const PricingCard: React.FC<PricingCardProps> = ({
    badge,
    isPro = false,
    name,
    subtitle,
    price,
    setupFee,
    cta,
    features,
    checkIcon,
    delay = 0
}) => {
    return (
        <motion.div
            className={`${styles.card} ${isPro ? styles.cardPro : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay }}
        >
            {badge && (
                <div className={`${styles.planBadge} ${isPro ? styles.planBadgePro : ''}`}>
                    {badge}
                </div>
            )}

            <div className={styles.header}>
                <h3 className={styles.name}>{name}</h3>
                <p className={styles.subtitle}>{subtitle}</p>
            </div>

            <div className={styles.divider} />

            <div className={styles.priceWrapper}>
                <div className={styles.priceDisplay}>
                    <span className={styles.currency}>$</span>
                    <span className={styles.amount}>{price}</span>
                    <span className={styles.period}>/month</span>
                </div>
                <p className={styles.setupFee}>{setupFee}</p>
            </div>

            <div className={styles.ctaWrapper}>
                {cta}
            </div>

            <div className={styles.divider} />

            <ul className={styles.features}>
                {features.map((feature, idx) => (
                    <li key={idx} className={styles.featureItem}>
                        <span className={styles.checkIcon}>{checkIcon}</span>
                        <span className={styles.featureLabel}>{feature}</span>
                    </li>
                ))}
            </ul>
        </motion.div>
    );
};

export default PricingCard;
