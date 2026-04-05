# Best Practices für TSX-Komponenten in Next.js mit CSS Modules

Diese Dokumentation legt die Konvention für alle Komponenten im Projekt fest.

## Pflichtstruktur

Jede Komponente besteht aus **genau zwei Dateien** in einem eigenen Verzeichnis:

- `index.tsx` — Komponenten-Code
- `styles.module.css` — CSS Module Styles

Styles werden **niemals** inline in `index.tsx` geschrieben.

## Struktur einer TSX-Komponente

1. **Importe:**
   Import von React (wenn nötig), CSS Module und weiteren Abhängigkeiten.

2. **Interface/Props:**
   TypeScript-Interface für die Props der Komponente.

3. **Komponenten-Definition:**
   - Definition der Komponente als `React.FC<Props>` oder als normale Funktion.
   - CSS-Klassen werden über das `styles`-Objekt angebunden.

4. **Export:**
   Export der Komponente als `export default`.

## Beispielcode

```tsx
import styles from './styles.module.css';

interface MyComponentProps {
  title: string;
  children?: React.ReactNode;
}

const MyComponent: React.FC<MyComponentProps> = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>{title}</h1>
      {children}
    </div>
  );
};

export default MyComponent;
```

```css
/* styles.module.css */
.container {
  padding: 1rem;
  background-color: var(--bg-secondary);
}

.header {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}
```

## Theming

Farben und Design-Tokens werden ausschließlich über CSS Custom Properties aus `globals.css` eingebunden — niemals hardcoded.

Für theme-spezifische Overrides (Dark/Light Mode) innerhalb eines CSS Modules:

```css
:global([data-theme="light"]) .myClass {
  color: var(--text-primary);
}
```
