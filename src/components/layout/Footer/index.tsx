import React from 'react';
import DonateButton from '../../Buttons/DonateButton';
import styles from './styles.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <h2 className={styles.title}>Kontaktiere uns</h2>
                <p className={styles.text}>
                    Du hast Fragen oder Anregungen? Schreib uns eine E-Mail oder
                    ruf uns an.
                </p>
                <a
                    href="mailto:Email@freilauffreunde.com"
                    className={styles.emailLink}
                >
                    E-Mail schreiben
                </a>
                <DonateButton />
            </div>

            <div className={styles.copyright}>
                <p className={styles.copyrightText}>
                    &copy; 2024 MyApp. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
