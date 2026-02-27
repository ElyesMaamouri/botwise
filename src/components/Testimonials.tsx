"use client";

import React from 'react';
import { useTranslations } from 'next-intl';
import SectionHeader from './ui/SectionHeader';
import TestimonialCard from './ui/TestimonialCard';
import styles from './Testimonials.module.css';

interface Review {
    name: string;
    role: string;
    content: string;
}

const Testimonials: React.FC = () => {
    const t = useTranslations('testimonials');
    const reviews = t.raw('reviews') as Review[];

    // Duplicate reviews to create infinite scroll effect
    const duplicatedReviews = [...reviews, ...reviews];

    return (
        <section className={styles.testimonials} id="testimonials">
            <div className={styles.localContainer}>
                <SectionHeader
                    badge={t('badge')}
                    title={t('title')}
                    description={t('description')}
                />

                <div className={styles.carouselContainer}>
                    {/* Column 1: Top to Bottom */}
                    <div className={styles.marquee}>
                        <div className={styles.marqueeContent}>
                            {duplicatedReviews.map((review, idx) => (
                                <TestimonialCard
                                    key={`c1-${idx}`}
                                    name={review.name}
                                    role={review.role}
                                    content={review.content}
                                    image={idx % 2 === 0 ? "/image.jpg" : undefined}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Bottom to Top (Reverse) */}
                    <div className={styles.marquee}>
                        <div className={`${styles.marqueeContent} ${styles.marqueeContentReverse}`}>
                            {duplicatedReviews.map((review, idx) => (
                                <TestimonialCard
                                    key={`c2-${idx}`}
                                    name={review.name}
                                    role={review.role}
                                    content={review.content}
                                    image={idx % 3 === 0 ? "/image.jpg" : undefined}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Column 3: Top to Bottom */}
                    <div className={styles.marquee}>
                        <div className={styles.marqueeContent}>
                            {duplicatedReviews.map((review, idx) => (
                                <TestimonialCard
                                    key={`c3-${idx}`}
                                    name={review.name}
                                    role={review.role}
                                    content={review.content}
                                    image={idx % 2 !== 0 ? "/image.jpg" : undefined}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
