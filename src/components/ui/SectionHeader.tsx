import React from 'react';
import { motion } from 'framer-motion';
import styles from './SectionHeader.module.css';

interface SectionHeaderProps {
    badge: string;
    title: string;
    description: string;
    className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ badge, title, description, className = '' }) => {
    return (
        <div className={`${styles.introContainer} ${className}`}>
            <motion.div
                className={styles.introHeader}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <span className={styles.introBadge}>
                    {badge}
                </span>
                <h2 className={styles.introTitle}>
                    {title}
                </h2>
                <p className={styles.introDescription}>
                    {description}
                </p>
            </motion.div>
        </div>
    );
};

export default SectionHeader;
