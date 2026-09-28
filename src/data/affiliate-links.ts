// Zentrale Zuordnung: /go/<slug>/ -> echte Affiliate-Ziel-URL.
//
// Warum zentral statt Links direkt in Artikeln?
// - Ziel-URL/Partnerprogramm ändern = 1 Zeile hier anpassen statt jeden Artikel durchsuchen
// - Tote/abgelaufene Links lassen sich zentral austauschen
// - Einheitlicher Redirect-Layer für späteres Klick-Tracking (siehe src/pages/go/[slug].astro)
//
// Neuen Link anlegen:
// 1. Eintrag hier hinzufügen (slug = URL-Segment nach /go/)
// 2. Im Artikel verlinken: [Jetzt ansehen bei Amazon](/go/<slug>/)

export interface AffiliateLink {
	/** Anzeigename des Händlers, z.B. für spätere Klick-Tracking-Labels */
	haendler: string;
	/** Echte Affiliate-Ziel-URL inkl. Tracking-Parametern */
	url: string;
}

export const affiliateLinks: Record<string, AffiliateLink> = {
	// TODO: Platzhalter-Eintrag - durch echte Partnerprogramm-Links ersetzen, sobald
	// Affiliate-Programme (z.B. Awin, ADCELL, Amazon PartnerNet) angebunden sind.
	'beispiel-produkt-haendler-a': {
		haendler: 'Beispiel-Händler A',
		url: 'https://www.beispiel-haendler.de/produkt?ref=shuttermag',
	},
};
