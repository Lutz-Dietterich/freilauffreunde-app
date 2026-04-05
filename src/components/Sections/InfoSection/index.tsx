import React from 'react';
import Image from 'next/image';
import CTAButton from '../../ui/CTAButton';
import AnimatedSection from '../../ui/AnimatedSection';
import styles from './styles.module.css';

interface InfoSectionProps {
  id?: string;
  tag: string;
  title: string;
  text: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: 'left' | 'right';
  ctaText?: string;
  ctaHref?: string;
  ctaSecondaryText?: string;
  ctaSecondaryHref?: string;
  highlight?: string;
  altBackground?: boolean;
}

export default function InfoSection({
  id,
  tag,
  title,
  text,
  imageSrc,
  imageAlt,
  imagePosition = 'left',
  ctaText,
  ctaHref = '#',
  ctaSecondaryText,
  ctaSecondaryHref = '#',
  highlight,
  altBackground = false,
}: InfoSectionProps) {
  const sectionClass = `${styles.section} ${altBackground ? styles.sectionAlt : ''}`;
  const innerClass = `${styles.inner} ${imagePosition === 'right' ? styles.innerReverse : ''}`;

  return (
    <section id={id} className={sectionClass}>
      <div className="container">
        <div className={innerClass}>
          {/* Bild */}
          <AnimatedSection>
            <div className={styles.imageBlock}>
              <div className={styles.imageCircle}>
                <Image src={imageSrc} alt={imageAlt} width={300} height={300} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </div>
              <div className={styles.accentDot} />
            </div>
          </AnimatedSection>

          {/* Text */}
          <AnimatedSection delay={150}>
            <div className={styles.textBlock}>
              {highlight && <span className={styles.highlight}>{highlight}</span>}
              <p className="section-tag">{tag}</p>
              <h2 className={styles.title}>{title}</h2>
              <p className={styles.text}>{text}</p>
              <div className={styles.actions}>
                {ctaText && (
                  <CTAButton href={ctaHref} variant="primary">
                    {ctaText}
                  </CTAButton>
                )}
                {ctaSecondaryText && (
                  <CTAButton href={ctaSecondaryHref} variant="outlineDark">
                    {ctaSecondaryText}
                  </CTAButton>
                )}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
