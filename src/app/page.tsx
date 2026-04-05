import Hero from '../components/layout/Hero';
import CategoryGrid from '../components/Sections/CategoryGrid';
import InfoSection from '../components/Sections/InfoSection';

export default function Home() {
  return (
    <>
      <Hero />

      <CategoryGrid />

      <InfoSection
        id="ueber-mich"
        tag="Über mich"
        title="Leidenschaft für Abenteuer auf zwei Rädern"
        text="Hallo, ich bin Lutz — und ich liebe es, mit meinem selbstgebauten Fahrradwohnwagen und meinem Hund die Welt zu erkunden. Meine Mission: nachhaltiges Reisen erlebbar machen und meine Erfahrungen mit dir teilen. Hier findest du alles, was du für dein eigenes Abenteuer brauchst."
        imageSrc="/images/freilauffreundeHero.png"
        imageAlt="Fahrradwohnwagen-Tour mit Hund"
        imagePosition="right"
        ctaText="Mehr über mich"
        ctaHref="#"
        ctaSecondaryText="Alle Touren"
        ctaSecondaryHref="#touren"
        altBackground={false}
      />

      <InfoSection
        id="fahrradwohnwagen"
        tag="Der Fahrradwohnwagen"
        title="Selbst gebaut, selbst erlebt"
        text="Mein Fahrradwohnwagen ist ein echtes Herzensprojekt — von der ersten Skizze bis zur fertigen Konstruktion. In meinen detaillierten Bauanleitungen und 3D-Druckdateien zeige ich dir Schritt für Schritt, wie du deinen eigenen bauen kannst. Inklusive Material- und Werkzeugempfehlungen."
        imageSrc="/images/bgVideoSection.png"
        imageAlt="Fahrradwohnwagen Detailaufnahme"
        imagePosition="left"
        ctaText="Zur Bauanleitung"
        ctaHref="#"
        ctaSecondaryText="3D-Dateien"
        ctaSecondaryHref="#"
        highlight="Bauanleitungen kostenlos"
        altBackground
      />

      <InfoSection
        id="touren"
        tag="Touren & Abenteuer"
        title="Unterwegs mit Hund und Wohnwagen"
        text="Von kurzen Wochenendtouren bis hin zu mehrtägigen Abenteuern durch atemberaubende Landschaften — hier dokumentiere ich meine Reisen mit Karten, Bildern und Videos. Lass dich inspirieren und plane deine eigene Tour."
        imageSrc="/images/freilauffreundeHero.png"
        imageAlt="Fahrradtour in der Natur"
        imagePosition="right"
        ctaText="Alle Touren ansehen"
        ctaHref="#"
        altBackground={false}
      />
    </>
  );
}
