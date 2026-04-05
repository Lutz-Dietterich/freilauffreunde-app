import React from 'react';
import CTAButton from '../../ui/CTAButton';
import styles from './styles.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />

      <div className={styles.content}>
        <p className={styles.preTitle}>Fahrradwohnwagen &amp; Outdoor-Abenteuer</p>
        <h1 className={styles.title}>
          Dein Abenteuer<br />
          <span className={styles.titleAccent}>beginnt hier</span>
        </h1>
        <p className={styles.subtitle}>
          Entdecke Fahrradwohnwagen-Touren, Bauanleitungen und Outdoor-Inspiration
          für dich und deinen Hund.
        </p>
        <div className={styles.actions}>
          <CTAButton href="#kategorien" variant="primary">
            Jetzt entdecken
          </CTAButton>
          <CTAButton href="#fahrradwohnwagen" variant="outline">
            Zur Bauanleitung
          </CTAButton>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.scrollDot} />
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
};

export default Hero;
