"use client";

import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import styles from './Button.module.css';

interface ButtonProps {
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    external?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    children,
    href,
    onClick,
    variant = 'primary',
    className = '',
    type = 'button',
    external = false
}) => {
    const combinedClassName = `${styles.btn} ${styles[variant]} ${className}`;

    const content = (
        <>
            {variant === 'primary' ? (
                <>
                    {children}
                    <span className={styles.ctaArrows}>
                        <ChevronRight size={16} />
                        <ChevronRight size={16} />
                        <ChevronRight size={16} />
                    </span>
                </>
            ) : (
                <>
                    <span className={styles.starGradientBottom}></span>
                    <span className={styles.starGradientTop}></span>
                    <span className={styles.secondaryText}>{children}</span>
                </>
            )}
        </>
    );

    if (href) {
        if (external) {
            return (
                <a
                    href={href}
                    className={combinedClassName}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {content}
                </a>
            );
        }
        return (
            <Link href={href} className={combinedClassName}>
                {content}
            </Link>
        );
    }

    return (
        <button type={type} onClick={onClick} className={combinedClassName}>
            {content}
        </button>
    );
};

export default Button;
