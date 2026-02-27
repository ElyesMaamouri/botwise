import React from 'react';
import { Star } from 'lucide-react';
import styles from './TestimonialCard.module.css';

interface TestimonialCardProps {
    name: string;
    role: string;
    content: string;
    image?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, content, image }) => {
    const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();

    return (
        <div className={styles.card}>
            <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" stroke="none" />
                ))}
            </div>
            <p className={styles.content}>"{content}"</p>
            <div className={styles.footer}>
                <div className={styles.avatar}>
                    {image ? (
                        <img src={image} alt={name} className={styles.avatarImage} />
                    ) : (
                        initials
                    )}
                </div>
                <div className={styles.info}>
                    <span className={styles.name}>{name}</span>
                    <span className={styles.role}>{role}</span>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
