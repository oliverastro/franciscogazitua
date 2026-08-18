import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const worksSchema = z.object({
  name: z.string(),
  image: z.string(),
});

const obras = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/obras" }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    description: z.string().optional().default(""),
    works: z.array(worksSchema).optional().default([]),
  }),
});

const series = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/series" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    year_start: z.number().optional(),
    year_end: z.number().optional(),
  }),
});

const libros = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/libros" }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    publisher: z.string(),
    year: z.number(),
    isbn: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    link: z.string().optional(),
  }),
});

const videos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/videos" }),
  schema: z.object({
    title: z.string(),
    url: z.string().optional().default(""),
    description: z.string().optional().default(""),
    thumbnail: z.string().optional().default(""),
    duration: z.string().optional(),
    date: z.string().optional(),
    order: z.number().optional().default(99),
  }),
});

const publicaciones = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/publicaciones" }),
  schema: z.object({
    title: z.string(),
    author: z.string().optional().default("Libro"),
    year: z.number().optional().default(0),
    publication_type: z.enum(["articulo", "catalogo", "critica", "otro"]).optional().default("catalogo"),
    publisher: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    link: z.string().optional(),
    pdf: z.string().optional(),
    order: z.number().optional().default(99),
  }),
});

const artePublico = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/arte-publico" }),
  schema: z.object({
    title: z.string(),
    location: z.string(),
    year: z.number(),
    description: z.string(),
    coordinates: z
      .object({
        lat: z.number(),
        lng: z.number(),
      })
      .optional(),
    images: z.array(z.string()).optional(),
    materials: z.string().optional(),
  }),
});

export const collections = {
  obras,
  series,
  libros,
  videos,
  publicaciones,
  "arte-publico": artePublico,
};
