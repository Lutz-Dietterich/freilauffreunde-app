# FreilaufFreunde

Website für Fahrradwohnwagen-Touren, Bauanleitungen und Outdoor-Inspiration mit Hund.
Gebaut mit Next.js 14 (App Router) / TypeScript / styled-components.

---

## ⛔ Pflichtregeln — immer einhalten

1. **NIEMALS Code ändern ohne explizite Bestätigung** ("ja" / "mach es") des Users.
2. Bei jeder Änderungsanfrage: erst Plan erklären, dann **WARTEN**.
3. Auch wenn der User eine Frage stellt ("was meinst du?") — **NUR antworten, NICHT implementieren**.
4. **Ausnahmen gibt es KEINE.**

---

## Vorgehensweise bei Aufgaben

Bei **jeder** Aufgabe, egal wie klein:

1. **Erst erklären** was ich tun werde (auf Deutsch)
2. **Warten auf Bestätigung** des Users ("ja" oder Korrekturen)
3. **Dann erst umsetzen** — Schritt für Schritt

Bei Aufgaben die mehr als eine Datei betreffen zusätzlich:

- **Checkliste erstellen** mit allen Schritten (TodoWrite Tool) vor dem Warten

---

## Projektübersicht

**Projektziel:** Zentrale Plattform für Fahrradwohnwagen-Reisende, DIY-Bauer und Outdoor-Enthusiasten.

**Hauptbereiche:**

- Touren-Dokumentation (Erfahrungsberichte, Bildergalerien, YouTube-Videos)
- Bauanleitungen & 3D-Druckdateien (gegen freiwillige Spende)
- Blog & Community (Tipps, Kommentare, Social Media)
- Affiliate-Marketing (Amazon-Links, Partnerlinks)

**Go-Live:** 20.08.2025 auf `freilauffreunde.de` (Vercel → später Hetzner CX32)

---

## Tech-Stack

- **Framework:** Next.js 14 (App Router)
- **Sprache:** TypeScript
- **Styling:** CSS Modules (`styles.module.css`)
- **Hosting:** Vercel (Phase 1) → eigener Server Hetzner CX32 + NGINX (Phase 2)
- **Domain:** freilauffreunde.de (Strato)
- **Kontaktformular:** Nodemailer
- **3D-Viewer:** Three.js (geplant)

---

## Projektstruktur

```text
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root Layout
│   ├── page.tsx            # Startseite
│   ├── globals.css
│   ├── about/              # Über mich
│   ├── touren/             # Touren-Übersicht & Berichte
│   ├── fahrradwohnwagen/   # Bauanleitungen & 3D-Druckdateien
│   ├── blog/               # Blogbeiträge
│   └── kontakt/            # Kontaktformular
├── components/
│   ├── layout/             # Header, Footer, Hero, Navigation
│   ├── Buttons/            # Wiederverwendbare Buttons
│   ├── Cards/              # Tour-Karten, Angebots-Kacheln etc.
│   ├── Sections/           # Seitenabschnitte (Über mich, Touren etc.)
│   └── ui/                 # Kleine UI-Elemente (Icons, Badges etc.)
└── styles/                 # Globale Styles, Theme, Tokens
```

Weitere Komponenten entstehen im Laufe der Entwicklung. Die Struktur ist als Leitfaden zu verstehen, nicht als vollständige Liste.

---

## Komponenten-Struktur

**PFLICHT**: Jede Komponente besteht IMMER aus genau zwei Dateien:

- `index.tsx` — Komponenten-Code
- `styles.module.css` — CSS Module Styles

**NIEMALS** Styles inline in `index.tsx` schreiben.
**NIEMALS** `styles.module.css` Dateien löschen oder zusammenführen.
Diese Struktur ist unveränderlich für alle Komponenten im Projekt.

---

## Design

### Stil-Referenz
Dunkler Abenteuer-Stil inspiriert von einem Adventure/Travel-Template (Nicepage).

**WICHTIG:** Das Template dient nur als stilistische Inspiration — Layouts, Abstände, Strukturen und Gestaltungsprinzipien ableiten, aber **niemals 1:1 kopieren**. Alle Designs eigenständig umsetzen (Copyright).

| Token | Wert | Referenz im Logo |
| --- | --- | --- |
| Hintergrund | `#1e2d3d` (Navy-Blau) | Außenring/Kreishintergrund |
| Primäre Akzentfarbe | `#e07840` (Orange) | „FREUNDE"-Banner |
| Sekundäre Akzentfarbe | `#4d7d8a` (Teal/Blaugrün) | „FREILAUF"-Band |
| Text auf dunkel | `#ffffff` | Schrift im Logo |
| Karten-Hintergrund | `#ffffff` (weiß, abgerundet) | — |
| Highlight-Box | Orange `#e07840`, gefüllt | „FREUNDE"-Banner |

### Designprinzipien

- Dunkler Hintergrund als Basis, weiße Cards als Content-Container
- **Eine** Akzentfarbe (Orange) — für Buttons, Highlights, Dekoelemente
- Kreisförmig zugeschnittene Bilder mit orangem Rahmen
- Dekorative Kreis-Outlines als grafische Elemente
- Klare Typografie: große Headlines auf dunklem Grund

### Responsive Breakpoints

| Name | Breite |
| --- | --- |
| Mobile | 480px |
| Tablet | 768px |
| Desktop | 1024px |

---

## Seitenstruktur (Startseite)

1. **Header** — Logo + Navigation
2. **Hero** — Vollbild-Bild/Video, Headline, CTA-Buttons
3. **Schnellzugriffe** — Kacheln zu den Hauptbereichen
4. **Über mich** — Portrait, Mission, Werte
5. **Touren** — Teaser aktueller Reiseberichte
6. **Fahrradwohnwagen** — Konzept, Links zu Bauanleitungen
7. **Kontakt** — Formular + Social-Media-Icons
8. **Footer** — Impressum, Datenschutz, weitere Navigation

---

## SEO & Rechtliches

- Metatags: statisch für allgemeine Seiten, **dynamisch** für Touren/3D-Druckdateien
- Keywords in allen Texten verwenden
- Backlinks zu: Instagram, YouTube, Facebook
- **Pflicht:** Impressum, Datenschutzerklärung (eRecht24), Cookie-Banner, DSGVO-konform
- SSL: über Vercel (Phase 1), eigenes Zertifikat via NGINX (Phase 2)

---

## Git Workflow

### Commits

- **Nur committen wenn explizit vom User gefragt**
- Commit Message Format:

```text
<type>: <description>

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
```

- Niemals `--no-verify` oder force push ohne explizite Anfrage

---

## Interpretationen

**NIEMALS interpretieren.** Wenn eine Anfrage unklar ist oder mehrere Umsetzungsmöglichkeiten hat → **immer zuerst fragen**, nie selbst entscheiden.

Beispiele wo gefragt werden muss:

- Position eines Elements ("oben rechts" — absolut oder in einer Zeile?)
- Farbe/Style ("dunkel" — Hintergrund oder Text?)
- Größe ("anpassen" — größer oder kleiner?)
- Inhalte ("Text ergänzen" — welcher Text genau?)

---

## Löschen von Dateien

**NIEMALS** eine Datei löschen ohne vorher explizit auf Deutsch zu fragen: "Darf ich [Dateiname] löschen?"

Warten bis der User ausdrücklich "ja" sagt. Keine Ausnahmen.

---

## Barrierefreiheit (PFLICHT)

- Semantisch korrektes HTML (Header, Main, Nav, Section, Article, Footer)
- Alt-Texte für alle Bilder
- Gute Farbkontraste (WCAG AA)
- Tastaturnavigation möglich
- Lesbare Schriftgrößen (mind. 16px Fließtext)
