# NordicLine – Nederlands single‑language exportplatform

Deze Astro site is een statisch Dutch-only marketingplatform voor buitenlandse kopers. De focus ligt op de premium productiepartners en logistiek vanuit Nederland, met een duidelijke CTA voor aanvragen en contact.

## Snelle start

```bash
npm install          # eenmalig dependencies installeren
npm run dev          # ontwikkelserver (http://localhost:4321)
npm run build        # productieversie in `dist/`
npm run preview      # build lokaal bekijken voordat je deployt
```

De site gebruikt Astro (minimal template) en een enkele pagina (`src/pages/index.astro`) met inline CSS.

## Wat aan te passen

- Pas uw eigen merknaam, omzetstatistieken en contactkanaal in `src/pages/index.astro` aan.
- Voeg eventuele productafbeeldingen toe aan `public/` en verwijs ernaar vanuit dezelfde pagina.
- Breid delen als diensten, partners of testimonials uit door extra kaarten of secties toe te voegen binnen de bestaande layout.

## Cloudflare Pages deployment

1. Koppel dit project aan Cloudflare Pages (GitHub/GitLab/Bitbucket).
2. Stel de build command in op `npm run build`.
3. Zet de output directory op `dist`.
4. Laat Cloudflare Pages de site hosten; de statische output bevat alle benodigde assets.

Als je assets toevoegt (bijv. logo's), plaats ze onder `public/` zodat Astro ze mee kopieert naar `dist/`.

## Testen

- `npm run build` zorgt voor een statische export en valideert dat het project zonder fouten compileert.
- `npm run preview` laat je de productieversie lokaal bekijken voordat je deployt.
