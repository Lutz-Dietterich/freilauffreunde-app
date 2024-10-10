import Image from 'next/image';
import Navigation from '../components/layout/Navigation';

export default function Home() {
  return (
    <div className="container bg-customBackground  m-auto">
      <div className="flex-center">
        <button className="btn-primary">Klick mich</button>
      </div>

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
  );
}
