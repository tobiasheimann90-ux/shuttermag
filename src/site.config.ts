// Zentrale Site-Konfiguration. Domain ist noch nicht final entschieden (siehe offene Punkte) -
// Platzhalter hier anpassen, sobald Domain feststeht (wirkt sich auch auf astro.config.mjs `site` aus).
export const SITE = {
	name: 'SHUTTERMAG',
	title: 'SHUTTERMAG: Fotografie-Technik, Tests & Kaufberatung',
	description:
		'Unabhängige Kaufberatungen, Tests und Praxis-Guides rund um Kamera-Equipment: Kameras, Objektive, Zubehör und mehr.',
	url: 'https://shuttermag.de',
	locale: 'de-DE',
} as const;

export const KATEGORIEN: Record<string, { label: string; beschreibung: string }> = {
	kameras: {
		label: 'Kameras',
		beschreibung: 'Kaufberatungen, Tests und Vergleiche zu Kamera-Systemen.',
	},
	objektive: {
		label: 'Objektive',
		beschreibung: 'Das passende Objektiv für Porträt, Landschaft, Reise & Co.',
	},
	zubehoer: {
		label: 'Zubehör',
		beschreibung: 'Stative, Taschen, Speicherkarten, Filter und mehr.',
	},
	beleuchtung: {
		label: 'Beleuchtung',
		beschreibung: 'Blitze, Dauerlicht und Lichtformer für Foto & Video.',
	},
	audio: {
		label: 'Audio',
		beschreibung: 'Mikrofone und Tonequipment für Video & Content Creation.',
	},
	software: {
		label: 'Software & Bildbearbeitung',
		beschreibung: 'Tools und Workflows für Bearbeitung und Verwaltung.',
	},
	'praxis-guides': {
		label: 'Praxis-Guides',
		beschreibung: 'Equipment-Setups für konkrete Anwendungsfälle.',
	},
};

export const ARTIKEL_TYPEN: Record<string, string> = {
	kaufberatung: 'Kaufberatung',
	review: 'Review',
	vergleich: 'Vergleich',
	guide: 'Praxis-Guide',
};
