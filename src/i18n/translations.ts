import es from "./es.json";
import en from "./en.json";

export type Lang = "es" | "en";

const translations: Record<Lang, typeof es> = { es, en };

export function url(path: string, lang: Lang) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const prefix = lang === "es" ? "" : "/en";
  return base + prefix + path;
}

export default function t(lang: Lang) {
  return translations[lang] || translations.es;
}
