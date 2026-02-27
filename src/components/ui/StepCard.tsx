import React from 'react';
import { motion } from 'framer-motion';
import styles from './StepCard.module.css';

interface StepCardProps {
    number: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    delay?: number;
}

const StepCard: React.FC<StepCardProps> = ({ number, title, description, icon, delay = 0 }) => {
    return (
        <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
        >
            <div className={styles.iconContainer}>
                <div className={styles.iconGlow} />
                <div className={styles.iconWrapper}>
                    {icon}
                </div>
            </div>

            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
            </div>

            <div className={styles.bgNumber}>{number}</div>
            <div className={styles.topRightDot} />
        </motion.div>
    );
};

export default StepCard;
