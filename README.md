# Roast & Brew — Mini E-handel

## Problem Statement

Roast & Brew är ett litet kafferosteri som idag bara säljer via sin fysiska butik. Kunderna frågar ofta om de kan beställa online, men det finns inget digitalt alternativ. Rosteriet tappar försäljning och kunderna får åka till butiken varje gång.

**Lösningen:** En enkel webbshop där kunder kan bläddra bland produkter, filtrera på kategori, se detaljer och lägga en beställning. Inget komplicerat — bara grunderna som behövs för att komma igång med e-handel.

## Stakeholders

| Roll | Beskrivning | Exempel |
|------|-------------|---------|
| **Kund** | Registrerad användare som handlar | Lisa, 34, köper hela bönor varje vecka |
| **Gäst** | Besökare utan konto, kan bläddra | Nyfiken person som hittade sidan via Instagram |
| **Admin** | Butiksägaren, hanterar produkter och ordrar | Rosteriet, lägger till nya blandningar |

## Kravlista

### Funktionella krav

| ID | Krav | Prioritet |
|----|------|-----------|
| F1 | Visa alla produkter i en lista med bild, namn och pris | Must |
| F2 | Filtrera produkter efter kategori (hela bönor, malt kaffe, tillbehör) | Must |
| F3 | Visa detaljerad produktsida med beskrivning och beställningsformulär | Must |
| F4 | Lägga en beställning med namn, e-post och leveransadress | Must |
| F5 | Visa bekräftelse efter genomförd beställning | Should |
| F6 | Söka bland produkter med fritext | Could |

### Icke-funktionella krav

| ID | Krav | Prioritet |
|----|------|-----------|
| NF1 | Sidan ska vara responsiv och fungera på mobil, tablet och desktop | Must |
| NF2 | Semantisk HTML för tillgänglighet (screen readers, tangentbordsnavigering) | Must |
| NF3 | Sidan ska ladda snabbt utan externa beroenden (inga CDN, inga frameworks) | Should |

### Prioritering (MoSCoW)

- **Must have:** F1, F2, F3, F4, NF1, NF2 — kärnan i e-handelsupplevelsen
- **Should have:** F5, NF3 — förbättrar upplevelsen men inte kritiskt för MVP
- **Could have:** F6 — nice-to-have om tid finns
- **Won't have (denna iteration):** Kundkonton, betalning, lagerhantering — kommer i framtida versioner

**Motivering:** Prioriteringen utgår från vad som ger mest värde med minst komplexitet. En kund måste kunna hitta en produkt och beställa den — allt annat är sekundärt. Betalningsintegration och kundkonton kräver backend och säkerhetstänk som ligger utanför scope för en prototyp.

## Use Case: Lägg produkt i varukorg och beställ

| Fält | Beskrivning |
|------|-------------|
| **Use Case** | Beställ en produkt |
| **Actor** | Kund |
| **Preconditions** | Kunden har öppnat webbshoppen och produkter visas |
| **Trigger** | Kunden klickar på en produkt i produktlistan |

### Main Flow

1. Kunden ser produktlistan på startsidan med bild, namn och pris
2. Kunden klickar på en produkt
3. Systemet visar produktdetalj med beskrivning, pris och beställningsformulär
4. Kunden fyller i namn, e-post och leveransadress
5. Kunden klickar "Beställ"
6. Systemet validerar formuläret (alla fält ifyllda, giltig e-post)
7. Systemet visar bekräftelsemeddelande

### Alternate Flow

- **4a.** Kunden ändrar sig och navigerar tillbaka till produktlistan → Ingen beställning görs
- **6a.** Validering misslyckas (tomt fält eller ogiltig e-post) → Systemet markerar felaktiga fält, kunden korrigerar

### Postconditions

- Beställningen är registrerad (i en riktig implementation)
- Kunden ser en bekräftelse med sitt ordernummer
- Kunden kan navigera tillbaka till produktlistan

## Designval och motiveringar

**Varför klassdiagram?** Domänen har tydliga entiteter (Product, Category, Order) med relationer som passar bra att modellera med klasser. Det visar strukturen i systemet.

**Varför aktivitetsdiagram?** Use Caset har ett linjärt flöde med en alternativ väg (validering misslyckas) — det visualiseras bättre i ett aktivitetsdiagram än i ett sekvensdiagram, eftersom fokus ligger på *vad användaren gör*, inte på *vilka system som pratar med varandra*.

**Varför live-filter som JS-feature?** Det stödjer Use Caset direkt — kunden behöver hitta rätt produkt snabbt. Ett kategori-filter ger mer värde än t.ex. en theme toggle som inte har med domänen att göra.

## Risker, begränsningar och förbättringar

### Risker
- **Ingen riktig backend** — beställningar sparas inte. I produktion behövs en databas och API.
- **Ingen betalning** — prototypen simulerar checkout men hanterar inte pengar.

### Begränsningar
- Produktdata är hårdkodad i HTML — i verkligheten skulle det komma från en databas
- Ingen autentisering — vem som helst kan "beställa"
- Responsiviteten är grundläggande — en riktig implementation skulle behöva mer testning på olika enheter

### Förbättringar (framtida iterationer)
- Kundkonton med orderhistorik
- Riktig varukorg med flera produkter
- Stripe-integration för betalning
- Admin-panel för produkthantering
- Sökfunktion med fritext

## Change Notes

### Ändring 1: Från generisk e-handel till kafferosteri
**Vad:** Bytte domän från en generisk "produkter"-shop till ett specifikt kafferosteri.
**Varför:** Ett konkret scenario gör det lättare att definiera realistiska krav och stakeholders. "Hela bönor" och "Malt kaffe" är tydligare kategorier än "Kategori A" och "Kategori B".

### Ändring 2: Förenklad checkout istället för varukorg
**Vad:** Tog bort varukorg-konceptet och gjorde en direkt beställning från produktsidan.
**Varför:** En varukorg kräver state management (LocalStorage eller liknande) som gör JS-koden komplex. Genom att beställa direkt från produktsidan håller vi JS under 50 rader och fokuserar på Use Caset.
