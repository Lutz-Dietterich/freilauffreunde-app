import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen w-full"
      style={{
        backgroundImage: 'url(/images/freilauffreundeHero.png)',
      }}
    >
      
      {/* Overlay, um das Bild abzudunkeln */}
      <div className="relative top-0 z-10 flex flex-col justify-center items-center h-full text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Willkommen bei MyApp</h1>
        <p className="text-lg mb-8">
          Deine Plattform für außergewöhnliche Outdoor-Abenteuer und spannende
          Projekte.
        </p>
        <a
          href="#get-started"
          className="bg-[#2D404C] text-white py-3 px-6 rounded-lg text-lg hover:bg-gray-700 transition duration-300"
        >
          Jetzt starten
        </a>
      </div>
     
    </section>
  );
};

export default Hero;
