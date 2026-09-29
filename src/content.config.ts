import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Produktkategorien: worum geht es im Artikel primär?
export const kategorien = [
	'kameras',
	'objektive',
	'zubehoer',
	'beleuchtung',
	'audio',
	'software',
	'praxis-guides',
] as const;

// Artikeltyp: welche Content-Vorlage / welcher Aufbau wird verwendet?
export const artikelTypen = ['kaufberatung', 'review', 'vergleich', 'guide'] as const;

const artikel = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/artikel' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string().max(160, 'Meta-Description sollte ≤160 Zeichen sein'),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			kategorie: z.enum(kategorien),
			typ: z.enum(artikelTypen),
			heroImage: image().optional(),
			heroImageAlt: z.string().optional(),
			author: z.string().default('SHUTTERMAG Redaktion'),
			tags: z.array(z.string()).default([]),
			// true sobald der Artikel mind. einen Affiliate-Link enthält -> Pflichthinweis wird angezeigt
			enthaeltAffiliateLinks: z.boolean().default(true),
			// Manuell kuratierte Hervorhebung auf der Startseite, solange keine echten Analytics-Daten
			// für "meistgelesen" vorliegen.
			featured: z.boolean().default(false),
			draft: z.boolean().default(false),
		}),
});

export const collections = { artikel };
