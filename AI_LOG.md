# AI Log — Roast & Brew

## Prompt 1: README-struktur
**Prompt:** "Hjälp mig skriva README.md med problem statement, stakeholders, kravlista med MoSCoW-prioritering, och ett komplett Use Case för en mini e-handels prototyp (kafferosteri)."

**Vad AI gav:** En komplett README med alla sektioner ifyllda — problem statement, tre stakeholders (Kund, Gäst, Admin), 9 krav med prioritering, och ett Use Case med main flow + alternate flow.

**Vad jag ändrade:** Justerade stakeholder-beskrivningarna så de blev mer konkreta och realistiska. La till designmotiveringar och risker/begränsningar-sektionen själv för att visa VG-tänk.

## Prompt 2: CSS-designsystem
**Prompt:** "Skapa en style.css med CSS custom properties för en kaffebutik. Varm färgskala, serif-typsnitt, responsive grid. Inga frameworks."

**Vad AI gav:** En komplett CSS-fil med custom properties, reset, typografi, grid, kort-komponenter, formulärstilar och responsive breakpoints.

**Vad jag ändrade:** Finjusterade färgerna (#5c3d2e som primary) efter att ha testat i webbläsaren. Lade till hover-effekter och fokus-stilar på formulärfält för bättre tillgänglighet.

## Prompt 3: UML-klassdiagram
**Prompt:** "Skapa ett Mermaid-klassdiagram för en mini e-handel med Product, Category (enum), CartItem, Cart, Order, Customer. Visa relationer."

**Vad AI gav:** Mermaid-syntax med alla sex klasser, attribut, metoder och relationer (composition, aggregation, association).

**Vad jag ändrade:** Lade till `getFormattedPrice()` som metod på Product, och justerade relationstypen mellan Order och CartItem från aggregation till composition (ordern *äger* sina rader).

## Reflektion

AI var bra på att generera grundstrukturer snabbt — särskilt CSS och UML-syntax. Men jag behövde alltid granska och justera resultatet: färgval som inte stämde med känslan jag ville ha, relationstyper i UML som inte var helt korrekta, och formuleringar i README som var för generiska. AI är en startmotor, inte en autopilot.
