import React from 'react';
import DonateButton from '../Buttons/DonateButton';

const Footer: React.FC = () => {
  return (
    <footer
      className="relative min-h-20 p-4 text-white mt-10 "
      style={{
        backgroundImage: 'url(/images/bgFooterFreilauffreunde.png)',
        height: '795px',
      }}
    >
      <div className="relative top-0 z-10 flex flex-col justify-center items-center h-full text-center">
        <h2 className="text-3xl font-bold mb-4">Kontaktiere uns</h2>
        <p className="text-lg mb-8">
          Du hast Fragen oder Anregungen? Schreib uns eine E-Mail oder ruf uns
          an.
        </p>
        <a
          href="mailto: Email@freilauffreunde.com"
          className="bg-[#2D404C] text-white py-3 px-6 rounded-lg text-lg hover:bg-gray-700 transition duration-300"
        >
          E-Mail schreiben
        </a>
        <DonateButton />
      </div>

      <div className="absolute mx-auto bottom-0 right-20 text-center">
        <p className="text-sm">&copy; 2024 MyApp. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
