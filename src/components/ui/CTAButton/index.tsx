import React from 'react';
import styles from './styles.module.css';

interface CTAButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'outlineDark';
  type?: 'button' | 'submit';
  className?: string;
}

export default function CTAButton({
  children,
  href,
  onClick,
  variant = 'primary',
  type = 'button',
  className = '',
}: CTAButtonProps) {
  const variantClass = styles[variant] ?? styles.primary;
  const combinedClass = `${styles.btn} ${variantClass} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClass}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClass}>
      {children}
    </button>
  );
}
