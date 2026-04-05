import React from 'react';
import styles from './styles.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Willkommen bei MyApp</h1>
        <p className={styles.text}>
          Deine Plattform für außergewöhnliche Outdoor-Abenteuer und spannende
          Projekte.
        </p>
        <a href="#about" className={styles.cta}>
          Jetzt starten
        </a>
      </div>
    </section>
  );
};

export default Hero;
