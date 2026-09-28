// Datengrundlage für den Kamera-Finder-Prototypen.
//
// WICHTIG: Beispieldaten zur Veranschaulichung des Finders (Struktur, Filter, UI).
// Preise schwanken laufend und Modelle werden abgelöst - vor Launch mit aktuellen,
// geprüften Werten ersetzen. Sobald der Katalog wächst, lohnt sich eine echte Content
// Collection (src/content.config.ts) statt dieser Datei - für den ersten Prototyp reicht das.

export type Sensorformat = 'aps-c' | 'vollformat' | 'mft';
export type UseCase = 'reise' | 'portrait' | 'youtube' | 'allround' | 'action';

export interface Kamera {
	slug: string;
	marke: string;
	modell: string;
	sensorformat: Sensorformat;
	mount: string;
	megapixel: number;
	preisCirca: number;
	gewichtGramm: number;
	videoAufloesung: string;
	klappdisplay: boolean;
	useCases: UseCase[];
	kurzbeschreibung: string;
	vorteile: string[];
	nachteile: string[];
}

export const useCaseLabels: Record<UseCase, string> = {
	reise: 'Reise',
	portrait: 'Porträt',
	youtube: 'YouTube / Vlogging',
	allround: 'Allround / Familie',
	action: 'Action / Sport',
};

export const sensorformatLabels: Record<Sensorformat, string> = {
	'aps-c': 'APS-C',
	vollformat: 'Vollformat',
	mft: 'Micro Four Thirds',
};

export const kameras: Kamera[] = [
	{
		slug: 'sony-alpha-6400',
		marke: 'Sony',
		modell: 'Sony Alpha 6400',
		sensorformat: 'aps-c',
		mount: 'Sony E-Mount',
		megapixel: 24.2,
		preisCirca: 950,
		gewichtGramm: 403,
		videoAufloesung: '4K30',
		klappdisplay: true,
		useCases: ['reise', 'portrait', 'allround'],
		kurzbeschreibung:
			'Kompakte APS-C-Kamera mit sehr schnellem Autofokus, großes E-Mount-Objektivangebot.',
		vorteile: ['Sehr guter Autofokus', 'Kompakt und leicht', 'Großes Objektivsystem'],
		nachteile: ['Kein In-Body-Bildstabilisator', 'Menü gewöhnungsbedürftig'],
	},
	{
		slug: 'canon-eos-r50',
		marke: 'Canon',
		modell: 'Canon EOS R50',
		sensorformat: 'aps-c',
		mount: 'Canon RF-Mount',
		megapixel: 24.2,
		preisCirca: 700,
		gewichtGramm: 375,
		videoAufloesung: '4K30',
		klappdisplay: true,
		useCases: ['reise', 'allround', 'youtube'],
		kurzbeschreibung: 'Leichte Einsteigerkamera mit intuitiver Bedienung, guter Preis-Leistung.',
		vorteile: ['Sehr einsteigerfreundlich', 'Leicht', 'Gutes Preis-Leistungs-Verhältnis'],
		nachteile: ['RF-Mount-Objektive für APS-C noch überschaubar', 'Kein Sucher-Joystick'],
	},
	{
		slug: 'fujifilm-x-t30-ii',
		marke: 'Fujifilm',
		modell: 'Fujifilm X-T30 II',
		sensorformat: 'aps-c',
		mount: 'Fujifilm X-Mount',
		megapixel: 26.1,
		preisCirca: 900,
		gewichtGramm: 378,
		videoAufloesung: '4K30',
		klappdisplay: false,
		useCases: ['reise', 'portrait', 'allround'],
		kurzbeschreibung:
			'Retro-Design mit physischen Bedienrädern, bekannt für sehr gute Farbwiedergabe.',
		vorteile: ['Herausragende Farbprofile (Film-Simulationen)', 'Griffige Bedienräder'],
		nachteile: ['Display nicht voll beweglich', 'Kein Bildstabilisator im Gehäuse'],
	},
	{
		slug: 'sony-zv-e10',
		marke: 'Sony',
		modell: 'Sony ZV-E10',
		sensorformat: 'aps-c',
		mount: 'Sony E-Mount',
		megapixel: 24.2,
		preisCirca: 650,
		gewichtGramm: 343,
		videoAufloesung: '4K30',
		klappdisplay: true,
		useCases: ['youtube', 'reise'],
		kurzbeschreibung: 'Speziell für Vlogging entwickelt: Produktzeige-Modus, kein Sucher.',
		vorteile: ['Sehr gut für Vlogging/Video', 'Leicht', 'Guter Autofokus'],
		nachteile: ['Kein Sucher', 'Für reine Fotografie weniger komfortabel'],
	},
	{
		slug: 'nikon-z50',
		marke: 'Nikon',
		modell: 'Nikon Z50',
		sensorformat: 'aps-c',
		mount: 'Nikon Z-Mount',
		megapixel: 20.9,
		preisCirca: 800,
		gewichtGramm: 397,
		videoAufloesung: '4K30',
		klappdisplay: true,
		useCases: ['reise', 'allround', 'action'],
		kurzbeschreibung: 'Robustes Gehäuse mit gutem Grip, solide Allround-Kamera.',
		vorteile: ['Guter Handgriff', 'Wetterfestes Gehäuse', 'Zuverlässiger Autofokus'],
		nachteile: ['Noch wenige native Z-Mount-APS-C-Objektive', 'Nur ein Kartenslot'],
	},
	{
		slug: 'canon-eos-r8',
		marke: 'Canon',
		modell: 'Canon EOS R8',
		sensorformat: 'vollformat',
		mount: 'Canon RF-Mount',
		megapixel: 24.2,
		preisCirca: 1500,
		gewichtGramm: 461,
		videoAufloesung: '4K60',
		klappdisplay: true,
		useCases: ['portrait', 'reise', 'youtube'],
		kurzbeschreibung: 'Leichte Vollformatkamera mit sehr gutem Autofokus, Einstieg in Vollformat.',
		vorteile: ['Vollformat-Bildqualität', 'Sehr guter Autofokus', 'Vergleichsweise leicht'],
		nachteile: ['Kein In-Body-Bildstabilisator', 'Nur ein Kartenslot', 'Kleinerer Akku'],
	},
	{
		slug: 'sony-alpha-7c-ii',
		marke: 'Sony',
		modell: 'Sony Alpha 7C II',
		sensorformat: 'vollformat',
		mount: 'Sony E-Mount',
		megapixel: 33,
		preisCirca: 2200,
		gewichtGramm: 514,
		videoAufloesung: '4K60',
		klappdisplay: true,
		useCases: ['portrait', 'reise', 'allround'],
		kurzbeschreibung: 'Kompakte Vollformatkamera mit hoher Auflösung und Bildstabilisator.',
		vorteile: ['Kompakt für Vollformat', 'In-Body-Bildstabilisator', 'Hohe Auflösung'],
		nachteile: ['Sucher recht klein', 'Preislich anspruchsvoll'],
	},
	{
		slug: 'panasonic-lumix-g100',
		marke: 'Panasonic',
		modell: 'Panasonic Lumix G100',
		sensorformat: 'mft',
		mount: 'Micro Four Thirds',
		megapixel: 20.3,
		preisCirca: 600,
		gewichtGramm: 352,
		videoAufloesung: '4K30',
		klappdisplay: true,
		useCases: ['youtube', 'reise'],
		kurzbeschreibung: 'Sehr leichte Vlogging-Kamera mit auf Sprache optimiertem Mikrofon.',
		vorteile: ['Sehr leicht', 'Gutes eingebautes Mikrofon', 'Kompaktes MFT-Objektivsystem'],
		nachteile: ['Kleinerer Sensor', 'Schwächer bei wenig Licht'],
	},
];
