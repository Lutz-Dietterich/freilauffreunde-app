import React from 'react';
import styles from './styles.module.css';

interface CategoryCardProps {
  tag: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color?: 'orange' | 'teal';
}

export default function CategoryCard({
  tag,
  title,
  description,
  icon,
  color = 'orange',
}: CategoryCardProps) {
  const circleClass =
    color === 'teal' ? styles.iconCircleTeal : styles.iconCircleOrange;

  return (
    <article className={styles.card}>
      <div className={`${styles.iconCircle} ${circleClass}`}>{icon}</div>
      <p className={styles.tag}>{tag}</p>
      <div className={styles.divider} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </article>
  );
}
