import React from 'react';
import Image from 'next/image';
import styles from './styles.module.css';

const DonateButton: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <form
        action="https://paypal.me/freilauffreunde?country.x=DE&locale.x=de_DE"
        method="post"
        target="_top"
      >
        <input
          type="hidden"
          name="hosted_button_id"
          value="DEINE_PAYPAL_BUTTON_ID"
        />
        <button type="submit" className={styles.button}>
          <Image
            className={styles.logo}
            src="/images/PayPalLogo.png"
            alt="PayPal Logo"
            width={137}
            height={41}
          />
          <span className={styles.label}>Spenden</span>
        </button>
      </form>
    </div>
  );
};

export default DonateButton;
