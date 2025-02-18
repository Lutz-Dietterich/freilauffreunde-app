# CSS-Attribut-Reihenfolge Konvention

Diese Konvention legt die Reihenfolge von CSS-Attributen in **Styled Components** oder **CSS** fest, um Konsistenz und Lesbarkeit zu gewährleisten.

## Reihenfolge der CSS-Attribute

### 1. Layout & Box-Modell
Regelt die Positionierung und Größe eines Elements.
```css
position: relative;
top: 10px;
z-index: 100;

display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

width: 100%;
height: 50px;
min-width: 200px;
margin: 10px;
padding: 5px;
```

### 2. Typografie
Bestimmt die Schrift- und Texteigenschaften.
```css
font-size: 16px;
font-weight: bold;
line-height: 1.5;
text-align: center;
color: #333;
letter-spacing: 0.5px;
```

### 3. Darstellung (Visual Appearance)
Beeinflusst die visuelle Darstellung von Elementen.
```css
background-color: blue;
border: 1px solid black;
border-radius: 5px;
box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
opacity: 0.9;
visibility: visible;
```

### 4. Interaktion & Animation
Definiert das Verhalten bei Benutzerinteraktion.
```css
cursor: pointer;
pointer-events: auto;
transition: background 0.3s ease-in-out;
```

## Beispiel mit Styled Components
```jsx
const Button = styled.button`
  /* Layout & Box-Modell */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 40px;
  margin: 10px;
  padding: 5px;

  /* Typografie */
  font-size: 16px;
  font-weight: bold;
  color: white;

  /* Darstellung */
  background: blue;
  border: none;
  border-radius: 5px;

  /* Interaktion */
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: darkblue;
  }
`;
```


Diese Konvention stellt sicher, dass der Code gut strukturiert und wartbar bleibt.
