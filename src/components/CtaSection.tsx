"use client";

import React from 'react';
import { useTranslations } from 'next-intl';
import { ArrowRight, ChevronRight } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import styles from './CtaSection.module.css';

const CtaSection: React.FC = () => {
    const t = useTranslations('cta_section');

    const beforeItems = t.raw('before.items') as string[];
    const afterItems = t.raw('after.items') as string[];

    return (
        <section className={styles.ctaSection}>
            <div className={styles.glow} aria-hidden="true" />
            <div className={styles.localContainer}>
                <SectionHeader
                    badge={t('badge')}
                    title={t('title')}
                    description={t('description')}
                    className={styles.ctaHeader}
                />

                <div className={styles.comparison}>
                    <div className={styles.box}>
                        <span className={styles.boxTitleBefore}>{t('before.title')}</span>
                        <div className={styles.itemList}>
                            {beforeItems.map((item, idx) => (
                                <span key={idx} className={styles.item}>{item}</span>
                            ))}
                        </div>
                    </div>

                    <ArrowRight className={styles.arrow} size={24} />

                    <div className={`${styles.box} ${styles.boxAfter}`}>
                        <span className={styles.boxTitleAfter}>{t('after.title')}</span>
                        <div className={styles.itemList}>
                            {afterItems.map((item, idx) => (
                                <span key={idx} className={styles.item}>{item}</span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={styles.buttonContainer}>
                    <button className={styles.ctaButton}>
                        {t('button')}
                        <div className={styles.ctaArrows}>
                            <ChevronRight size={20} />
                            <ChevronRight size={20} />
                            <ChevronRight size={20} />
                        </div>
                    </button>
                    <p className={styles.ctaFooter}>{t('footer')}</p>
                </div>
            </div>
        </section>
    );
};

export default CtaSection;
