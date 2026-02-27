"use client";

import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Linkedin, ArrowUpRight } from 'lucide-react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    const t = useTranslations('footer');

    return (
        <footer className={styles.footer}>
            <div className={styles.localContainer}>
                <div className={styles.grid}>
                    {/*Socials Column */}
                    <div className={styles.brand}>
                        <div className={styles.logo}>
                            <Image
                                src="/bootwise-logo.webp"
                                alt="Botwise Logo"
                                width={135}
                                height={40}
                                className={styles.logoImage}
                            />
                        </div>
                        <div className={styles.socials}>
                            <a href="#" className={styles.socialLink}>
                                <Image src="/facebook.svg" alt="Facebook" width={24} height={24} className={styles.socialIconImg} />
                            </a>
                            <a href="#" className={styles.socialLink}>
                                <Image src="/x.svg" alt="X" width={24} height={24} className={styles.socialIconImg} />
                            </a>
                            <a href="#" className={styles.socialLink}>
                                <Image src="/instagram.svg" alt="Instagram" width={24} height={24} className={styles.socialIconImg} />
                            </a>
                            <a href="#" className={styles.socialLink}>
                                <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24} className={styles.socialIconImg} />
                            </a>
                        </div>
                    </div>

                    {/* Info Column */}
                    <div className={styles.column}>
                        <h4 className={styles.columnTitle}>{t('info.title')}</h4>
                        <div className={styles.links}>
                            <a href="#solution" className={styles.link}>
                                <span>{t('info.solution')}</span>
                                <ArrowUpRight size={14} className={styles.linkIcon} />
                            </a>
                            <a href="#pricing" className={styles.link}>
                                <span>{t('info.pricing')}</span>
                                <ArrowUpRight size={14} className={styles.linkIcon} />
                            </a>
                            <a href="#testimonials" className={styles.link}>
                                <span>{t('info.reviews')}</span>
                                <ArrowUpRight size={14} className={styles.linkIcon} />
                            </a>
                        </div>
                    </div>

                    {/* Legal Column */}
                    <div className={styles.column}>
                        <h4 className={styles.columnTitle}>{t('legal.title')}</h4>
                        <div className={styles.links}>
                            <div className={styles.link}>
                                <span>{t('legal.mentions')}</span>
                                <ArrowUpRight size={14} className={styles.linkIcon} />
                            </div>
                            <div className={styles.link}>
                                <span>{t('legal.privacy')}</span>
                                <ArrowUpRight size={14} className={styles.linkIcon} />
                            </div>
                            <div className={styles.link}>
                                <span>{t('legal.tos')}</span>
                                <ArrowUpRight size={14} className={styles.linkIcon} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
