"use client";

import React from 'react';
import { useTranslations } from 'next-intl';
import SectionHeader from './ui/SectionHeader';
import FAQItem from './ui/FAQItem';
import styles from './FAQ.module.css';

interface FAQItemType {
    question: string;
    answer: string;
}

const FAQ: React.FC = () => {
    const t = useTranslations('faq');
    const items = t.raw('items') as FAQItemType[];

    return (
        <section className={styles.faq} id="faq">
            <div className={styles.localContainer}>
                <div className={styles.grid}>
                    <SectionHeader
                        badge={t('badge')}
                        title={t('title')}
                        description={t('description')}
                        className={styles.faqHeader}
                    />

                    <div className={styles.itemsList}>
                        {items.map((item, index) => (
                            <FAQItem
                                key={index}
                                question={item.question}
                                answer={item.answer}
                                defaultOpen={index === 0}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
