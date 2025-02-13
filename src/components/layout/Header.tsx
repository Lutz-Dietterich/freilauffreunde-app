import React from 'react';
import Navigation from './Navigation';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="absolute z-20 w-full top-0 left-0 p-8 text-white">
      <div className=" mx-auto flex justify-between items-top">
        <Image
          src="/images/LogoFreilauffreunde.png"
          alt="Freilauffreunde Logo"
          width={300}
          height={300}
        />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
