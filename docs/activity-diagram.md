# Aktivitetsdiagram — Beställ en produkt

Kopiera koden nedan till https://mermaid.live och exportera som PNG.

```mermaid
flowchart TD
    A([Start]) --> B[Kunden öppnar webbshoppen]
    B --> C[Visa produktlista]
    C --> D{Vill filtrera?}
    D -- Ja --> E[Välj kategori]
    E --> F[Visa filtrerade produkter]
    F --> G[Klicka på produkt]
    D -- Nej --> G
    G --> H[Visa produktdetalj]
    H --> I{Vill beställa?}
    I -- Nej --> C
    I -- Ja --> J[Fyll i beställningsformulär]
    J --> K[Klicka Beställ]
    K --> L{Validering OK?}
    L -- Nej --> M[Visa felmeddelanden]
    M --> J
    L -- Ja --> N[Visa orderbekräftelse]
    N --> O([Slut])
```
