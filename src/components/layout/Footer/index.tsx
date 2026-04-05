import React from 'react';
import DonateButton from '../../Buttons/DonateButton';
import AnimatedSection from '../../ui/AnimatedSection';
import styles from './styles.module.css';

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

const Footer: React.FC = () => {
  return (
    <footer id="kontakt" className={styles.footer}>
      <div className={styles.footerOverlay} />

      <div className={styles.inner}>
        <AnimatedSection>
          <p className={styles.tag}>Kontakt</p>
          <h2 className={styles.title}>Lass uns in Kontakt treten</h2>
          <div className={styles.divider} />
          <p className={styles.text}>
            Du hast Fragen, Anregungen oder möchtest dich einfach austauschen?
            Schreib mir — ich freue mich über jede Nachricht.
          </p>

          <a href="mailto:hallo@freilauffreunde.de" className={styles.emailLink}>
            <MailIcon />
            E-Mail schreiben
          </a>

          <div className={styles.socialRow}>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="YouTube"
            >
              <YoutubeIcon />
            </a>
          </div>

          <DonateButton />
        </AnimatedSection>
      </div>

      <p className={styles.copyright}>
        &copy; 2025 FreilaufFreunde &nbsp;|&nbsp;
        <a href="/impressum" className={styles.copyrightLink}>Impressum</a>
        &nbsp;|&nbsp;
        <a href="/datenschutz" className={styles.copyrightLink}>Datenschutz</a>
      </p>
    </footer>
  );
};

export default Footer;
