# Best Practices für TSX-Komponenten in Next.js mit styled-components

Diese Dokumentation legt die Konvention fest, styled-components mit dem Präfix `Styled` zu benennen.

## Namensgebung
- Alle styled-components werden mit `Styled` als Präfix benannt (z. B. `StyledContainer`, `StyledHeader`).

## Struktur einer TSX-Komponente
1. **Importe:**
   Importieren von React, styled-components und ggf. weiteren Abhängigkeiten.

2. **Komponenten-Definition:**
   - Definition der Komponente und ihrer Props.
   - Nutzung der styled-components in JSX.

3. **Definition der styled-components:**
   Alle styled-components werden am Ende der Datei definiert, um die Logik von den Style-Definitionen zu trennen.

4. **Export:**
   Export der Komponente als `export default`.

## Beispielcode

```tsx
import React from 'react';
import styled from 'styled-components';

interface MyComponentProps {
  title: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ title, children }) => {
  return (
    <StyledContainer>
      <StyledHeader>{title}</StyledHeader>
      {children}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  padding: 1rem;
  background-color: #fff;
`;

const StyledHeader = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export default MyComponent;
