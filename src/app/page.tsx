import Image from 'next/image';
import Navigation from '../components/layout/Navigation';

export default function Home() {
  return (
    <div className="flex relative justify-center">
      <Image
        className=" absolute justify-self-center top-0 min-w-11 m-0 p-0"
        style={{ minWidth: '120%', top: '-200px' }}
        src="/images/bgPinsel.png"
        alt="Freilauffreunde Logo"
        width={2243}
        height={351}
      />
      <div className="container bg-customBackground  m-auto">
        <section id="home" className="min-h-screen bg-gray-100">
          Home Content
        </section>
        <section id="about" className="min-h-screen bg-gray-200">
          About Content
        </section>
        <section id="services" className="min-h-screen bg-gray-300">
          Services Content
        </section>
        <section id="contact" className="min-h-screen bg-gray-400">
          Contact Content
        </section>
      </div>
    </div>
  );
}
