import React from 'react';
import Navigation from './Navigation';

const Header: React.FC = () => {
  return (
    <header className="absolute z-20 w-full top-0 left-0 p-8 text-white">
      <div className=" mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">MyApp</div>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
