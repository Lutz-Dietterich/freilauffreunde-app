import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
    return (
        <div className={styles.wrapper}>
            <Image
                className={styles.bgImage}
                src="/images/bgPinsel.png"
                alt="Freilauffreunde Logo"
                width={2243}
                height={351}
            />
            <div className="container">
                <section id="home" className={styles.sectionHome}>
                    Home Content
                </section>
                <section id="about" className={styles.sectionAbout}>
                    About Content
                    <section className={styles.animatedSection}>
                        <h2 className={styles.title}>Small group travel that&apos;s good all over</h2>
                    </section>
                </section>
                <section id="services" className={styles.sectionServices}>
                    Services Content
                </section>
                <section id="contact" className={styles.sectionContact}>
                    Contact Content
                </section>
            </div>
        </div>
    );
}
