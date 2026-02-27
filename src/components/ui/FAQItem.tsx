"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import styles from './FAQItem.module.css';

interface FAQItemProps {
    question: string;
    answer: string;
    defaultOpen?: boolean;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    const contentRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (isOpen && contentRef.current) {
            setHeight(contentRef.current.scrollHeight);
        } else {
            setHeight(0);
        }
    }, [isOpen]);

    return (
        <div className={`${styles.item} ${isOpen ? styles.itemActive : ''}`}>
            <button
                className={styles.trigger}
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <span className={styles.question}>{question}</span>
                <span className={styles.icon}>
                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                    </motion.div>
                </span>
            </button>
            <div
                className={styles.answerWrapper}
                style={{ height: `${height}px` }}
            >
                <div ref={contentRef} className={styles.answerContent}>
                    {answer}
                </div>
            </div>
        </div>
    );
};

export default FAQItem;
