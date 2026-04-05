import React from 'react';
import CategoryCard from '../../Cards/CategoryCard';
import AnimatedSection from '../../ui/AnimatedSection';
import styles from './styles.module.css';

const CATEGORIES = [
  {
    tag: 'Touren',
    title: 'Fahrradabenteuer erleben',
    description: 'Erlebnisberichte, Routen und Eindrücke unserer Touren mit Hund und Fahrradwohnwagen.',
    color: 'orange' as const,
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#e07840" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 17l4-8 4 4 3-6 4 10" />
        <path d="M3 20h18" />
      </svg>
    ),
  },
  {
    tag: 'Bauanleitungen',
    title: 'Selbst bauen leicht gemacht',
    description: 'Schritt-für-Schritt-Anleitungen für deinen eigenen Fahrradwohnwagen mit Material- und Werkzeugempfehlungen.',
    color: 'teal' as const,
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#4d7d8a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    tag: '3D-Druckdateien',
    title: 'Drucke deine Teile selbst',
    description: 'Praktische 3D-Modelle und Dateien zum Download — gegen eine freiwillige Spende.',
    color: 'orange' as const,
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#e07840" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    tag: 'Blog',
    title: 'Tipps & Wissen',
    description: 'Erfahrungen, Ratschläge und Gedanken rund um nachhaltiges Reisen und das Leben auf dem Sattel.',
    color: 'teal' as const,
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#4d7d8a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    tag: 'Community',
    title: 'Gemeinsam unterwegs',
    description: 'Tausche dich mit Gleichgesinnten aus — Fahrradreisende, DIY-Bauer und Hundebesitzer.',
    color: 'orange' as const,
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#e07840" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    tag: 'Hund & Reisen',
    title: 'Mit dem Hund auf Tour',
    description: 'So reist du mit deinem Vierbeiner komfortabel und sicher — Tipps aus der Praxis.',
    color: 'teal' as const,
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#4d7d8a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="4" r="2" />
        <circle cx="18" cy="8" r="2" />
        <circle cx="20" cy="16" r="2" />
        <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" />
      </svg>
    ),
  },
];

export default function CategoryGrid() {
  return (
    <section id="kategorien" className={styles.section}>
      <div className="container">
        <AnimatedSection>
          <div className={styles.header}>
            <p className="section-tag">Entdecke</p>
            <h2 className="section-title">Unsere Welt</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Von spannenden Touren bis hin zu praktischen Bauanleitungen — hier findest du alles für dein Abenteuer.
            </p>
          </div>
        </AnimatedSection>

        <div className={styles.grid}>
          {CATEGORIES.map((cat, i) => (
            <AnimatedSection key={cat.tag} delay={i * 80}>
              <CategoryCard
                tag={cat.tag}
                title={cat.title}
                description={cat.description}
                icon={cat.icon}
                color={cat.color}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
