import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const obras = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/obras" }),
  schema: z.object({
    title: z.string(),
    category: z.enum(["puentes", "piedra", "buques", "caballos", "toros"]),
    year: z.number().optional(),
    materials: z.string().optional(),
    location: z.string().optional(),
    dimensions: z.string().optional(),
    description: z.string(),
    image: z.string().optional(),
    gallery: z.array(z.string()).optional(),
    featured: z.boolean().optional().default(false),
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
    url: z.string(),
    description: z.string().optional(),
    thumbnail: z.string().optional(),
    duration: z.string().optional(),
    date: z.string().optional(),
  }),
});

const publicaciones = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/publicaciones" }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    year: z.number(),
    publication_type: z.enum(["articulo", "catalogo", "critica", "otro"]),
    publisher: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    link: z.string().optional(),
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
