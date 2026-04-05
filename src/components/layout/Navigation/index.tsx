import React from 'react';
import styles from './styles.module.css';

const Navigation: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <a href="#home" className={styles.link}>Home</a>
        </li>
        <li>
          <a href="#about" className={styles.link}>About</a>
        </li>
        <li>
          <a href="#services" className={styles.link}>Services</a>
        </li>
        <li>
          <a href="#contact" className={styles.link}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
