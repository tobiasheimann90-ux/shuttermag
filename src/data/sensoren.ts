// Crop-Faktoren gängiger Sensorformate, bezogen auf Vollformat (Faktor 1.0).
// Quelle: Herstellerangaben, allgemein anerkannte Richtwerte.
export interface Sensortyp {
	slug: string;
	label: string;
	cropFaktor: number;
}

export const sensortypen: Sensortyp[] = [
	{ slug: 'vollformat', label: 'Vollformat', cropFaktor: 1.0 },
	{ slug: 'aps-c-canon', label: 'APS-C (Canon)', cropFaktor: 1.6 },
	{ slug: 'aps-c', label: 'APS-C (Sony / Nikon / Fujifilm)', cropFaktor: 1.5 },
	{ slug: 'mft', label: 'Micro Four Thirds', cropFaktor: 2.0 },
	{ slug: '1-zoll', label: '1"-Sensor (Kompaktkameras)', cropFaktor: 2.7 },
];
