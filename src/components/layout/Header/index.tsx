import React from 'react';
import Image from 'next/image';
import Navigation from '../Navigation';
import styles from './styles.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Image
          src="/images/LogoFreilauffreunde.png"
          alt="Freilauffreunde Logo"
          width={300}
          height={300}
        />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
