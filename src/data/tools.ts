// Geteilt zwischen /tools/ (Übersicht) und der Startseite (Teaser-Reihe).
export interface Tool {
	titel: string;
	beschreibung: string;
	href: string;
	status: 'verfuegbar' | 'geplant';
}

export const tools: Tool[] = [
	{
		titel: 'Kamera-Finder',
		beschreibung: 'Budget und Einsatzzweck eingeben, passende Kameras filtern und vergleichen.',
		href: '/kamera-finder/',
		status: 'verfuegbar',
	},
	{
		titel: 'Brennweiten-Rechner',
		beschreibung:
			'Brennweite zwischen Vollformat, APS-C, Micro Four Thirds und 1-Zoll-Sensor umrechnen.',
		href: '/tools/brennweiten-rechner/',
		status: 'verfuegbar',
	},
	{
		titel: 'Objektiv-Vergleichs-Tool',
		beschreibung:
			'Objektive nach Brennweite, Blende, System und Preis filtern und direkt vergleichen.',
		href: '/tools/objektiv-vergleich/',
		status: 'geplant',
	},
	{
		titel: 'Setup-Konfigurator',
		beschreibung:
			'Use-Case und Budget wählen (Reise, YouTube, Produktfotografie) und ein komplettes Equipment-Paket vorgeschlagen bekommen.',
		href: '/tools/setup-konfigurator/',
		status: 'geplant',
	},
];
