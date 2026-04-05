import React from 'react';
import styles from './styles.module.css';

interface NavigationProps {
  isScrolled?: boolean;
}

const NAV_ITEMS = [
  { label: 'Touren', href: '#touren' },
  { label: 'Bauanleitungen', href: '#fahrradwohnwagen' },
  { label: 'Blog', href: '#blog' },
  { label: 'Über mich', href: '#ueber-mich' },
  { label: 'Kontakt', href: '#kontakt' },
];

const Navigation: React.FC<NavigationProps> = ({ isScrolled = false }) => {
  const linkClass = `${styles.link} ${isScrolled ? styles.linkScrolled : ''}`;

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {NAV_ITEMS.map((item) => (
          <li key={item.label}>
            <a href={item.href} className={linkClass}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
