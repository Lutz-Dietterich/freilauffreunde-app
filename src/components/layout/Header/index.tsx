'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Navigation from '../Navigation';
import ThemeToggle from '../../ui/ThemeToggle';
import styles from './styles.module.css';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo}>
          <Image
            src="/images/LogoFreilauffreunde.png"
            alt="Freilauffreunde Logo"
            width={354}
            height={323}
            priority
            className={`${styles.logoImg} ${scrolled ? styles.logoImgScrolled : ''}`}
          />
        </a>

        <div className={styles.right}>
          <Navigation isScrolled={scrolled} />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
