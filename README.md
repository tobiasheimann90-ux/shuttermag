# SHUTTERMAG

Deutschsprachiger Foto-Tech-Blog: Kaufberatungen, Reviews, Vergleiche und
Praxis-Guides rund um Fotografie-Equipment. Gebaut mit [Astro](https://astro.build),
Content Collections (Markdown/MDX) und Tailwind CSS.

## Projektstruktur

```text
/
├── public/                  # Statische Assets (robots.txt, Favicons)
├── src/
│   ├── components/          # Header, Footer, ArtikelCard
│   ├── content/
│   │   └── artikel/         # Alle Artikel als Markdown (siehe content.config.ts für Schema)
│   ├── content.config.ts    # Content-Collection-Schema (Kategorien, Artikeltypen, Felder)
│   ├── data/
│   │   └── affiliate-links.ts # Zentrale Affiliate-Ziel-URLs für den /go/-Redirect (siehe unten)
│   ├── layouts/              # Layout.astro (Basis), ArtikelLayout.astro (Artikel-Detail)
│   ├── pages/
│   │   ├── index.astro
│   │   ├── kontakt.astro
│   │   ├── impressum.astro
│   │   ├── datenschutz.astro
│   │   ├── kategorie/[kategorie].astro
│   │   ├── artikel/[...slug].astro
│   │   └── go/[slug].astro   # Affiliate-Redirect: /go/<slug>/ -> echte Ziel-URL
│   └── site.config.ts       # Site-weite Konstanten (Name, URL, Kategorie-Labels)
├── templates/                # Copy-paste-Vorlagen für neue Artikel (siehe unten)
└── astro.config.mjs
```

## Neuen Artikel anlegen

1. Passende Vorlage aus `templates/` (`kaufberatung.md`, `review.md`, `vergleich.md`,
   `guide.md`) nach `src/content/artikel/<slug>.md` kopieren.
2. Frontmatter ausfüllen (`title`, `description`, `pubDate`, `kategorie`, `typ`, ...).
3. `draft: true` lassen, bis der Artikel fertig ist – Draft-Artikel werden nicht gebaut/gelistet.
4. Inhalt schreiben, `draft: false` setzen zum Veröffentlichen.

Kategorien und Artikeltypen sind in `src/content.config.ts` (Zod-Schema, erzwungen)
und `src/site.config.ts` (Anzeige-Labels) definiert.

## Affiliate-Links setzen

Affiliate-Links werden nie direkt im Artikel verlinkt, sondern über einen zentralen
Redirect-Layer (`/go/<slug>/`, statisch generiert, kein Server nötig):

1. In `src/data/affiliate-links.ts` einen Eintrag hinzufügen (Slug + Händlername + echte
   Ziel-URL mit Tracking-Parametern).
2. Im Artikel verlinken: `[Jetzt ansehen bei Amazon](/go/<slug>/)`.

Vorteile: Ziel-URL bei Programmwechsel oder totem Link nur an einer Stelle ändern (nicht in
jedem Artikel), einheitlicher Punkt für späteres Klick-Tracking, `/go/` ist in `robots.txt`
gesperrt und aus der Sitemap ausgeschlossen (keine unnötige Indexierung von Redirect-Seiten).

## Commands

| Command             | Aktion                                      |
| :------------------- | :------------------------------------------- |
| `npm install`         | Dependencies installieren                    |
| `npm run dev`          | Lokaler Dev-Server auf `localhost:4321`       |
| `npm run build`        | Production-Build nach `./dist/`               |
| `npm run preview`      | Build lokal vor Deployment testen             |
| `npm run astro check`  | Typprüfung / Diagnostics                      |

## Launch-Checkliste

**Rechtliches**
- [ ] Impressum ([src/pages/impressum.astro](src/pages/impressum.astro)) mit echten Betreiberdaten füllen
- [ ] Datenschutzerklärung ([src/pages/datenschutz.astro](src/pages/datenschutz.astro)) an tatsächlich
      eingesetzte Dienste anpassen (Hosting, Analytics, Affiliate-Netzwerke)
- [ ] Affiliate-Kennzeichnung pro Artikel geprüft (`enthaeltAffiliateLinks` im Frontmatter)

**Technisch**
- [ ] Finale Domain in `astro.config.mjs` (`site`) und `src/site.config.ts` (`SITE.url`) sowie
      `public/robots.txt` eintragen
- [ ] Hosting-Anbieter gewählt und Deployment eingerichtet
- [ ] Analytics (z. B. GA4 oder datenschutzfreundliche Alternative) eingebunden
- [ ] Google Search Console eingerichtet, Sitemap eingereicht
- [ ] Social-Share-Bild (OG-Image, 1200×630) gestalten – aktuell kein Default gesetzt
- [ ] Echte Kontakt-E-Mail in `src/pages/kontakt.astro` eintragen

**Content**
- [ ] Beispielartikel (klar als "Beispielartikel" markiert) durch echte, recherchierte Inhalte ersetzt
      oder gelöscht
- [ ] Erste 20–30 Artikel gemäß Content-Strategie veröffentlicht
- [ ] Affiliate-Programme angebunden (z. B. Awin, ADCELL, Direktpartner), Platzhalter-Eintrag in
      `src/data/affiliate-links.ts` entfernt/ersetzt

## Offene Entscheidungen

Siehe Projekt-Briefing: Hosting-Anbieter, Domain, konkrete Affiliate-Netzwerke und
Design-Feinschliff sind noch nicht final entschieden.
