import React from 'react';
import Image from 'next/image';

const DonateButton: React.FC = () => {
  return (
    <div className="flex justify-center mt-10 z-20">
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
        <button
          type="submit"
          className="flex  bg-yellow-300 text-customText text-2xl font-bold py-2 px-6 rounded-full hover:bg-yellow-500 transition duration-300"
        >
          <Image
            className="mr-5 "
            src="/images/PayPalLogo.png"
            alt="PayPal Logo"
            width={137}
            height={41}
          />
          <div className="pt-2.5">Spenden</div>
        </button>
      </form>
    </div>
  );
};

export default DonateButton;
