export type LayoutVariant =
  | 'classic-newspaper'
  | 'modern-tech'
  | 'editorial-grid'
  | 'bold-magazine';

export interface SiteTheme {
  bg: string;
  surface: string;
  ink: string;
  muted: string;
  accent: string;
  accentSoft: string;
  border: string;
  headerBg: string;
  headerInk: string;
  fontHeading: string;
  fontBody: string;
}

export interface SiteConfig {
  domain: string;
  displayDomain: string;
  siteName: string;
  shortMark: string;
  tagline: string;
  description: string;
  categories: string[];
  editorialEmail: string;
  tipsEmail: string;
  publisherLegalName: string;
  heroImage: string;
  heroAlt: string;
  layoutVariant: LayoutVariant;
  theme: SiteTheme;
  aboutText: string;
}

export function normalizeDomain(input?: string): string {
  if (!input) return "klinikknytt.no";
  const cleaned = input
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, '')
    .replace(/\/.*$/, '')
    .replace(/:\d+$/, '')
    .replace(/^www\./, '');

  if (!cleaned) return "klinikknytt.no";

  try {
    return new URL(`https://${cleaned}`).hostname;
  } catch {
    return cleaned;
  }
}

export const SITE_CONFIG: SiteConfig = {
  domain: normalizeDomain(process.env.NEXT_PUBLIC_DOMAIN) || "klinikknytt.no",
  displayDomain: "klinikknytt.no",
  siteName: "Klinikknytt",
  shortMark: "KN",
  tagline: "Fagmagasin for privatklinikker, tannhelse, fysioterapi, optikk og behandling",
  description: "Klinikknytt dekker private helsetjenester i Norge – med fagartikler og veiledere om tannhelse, fysioterapi, kiropraktikk, optikk og moderne klinikkdrift.",
  categories: ["Tannhelse", "Fysioterapi & Kropp", "Privatklinikk", "Optikk & Syn", "Behandling"],
  editorialEmail: "redaksjonen@klinikknytt.no",
  tipsEmail: "tips@klinikknytt.no",
  publisherLegalName: "Klinikknytt Redaksjon",
  heroImage: '/images/hero.webp',
  heroAlt: "Moderne skandinavisk privatklinikk og konsultasjonsrom i dagslys",
  layoutVariant: "classic-newspaper",
  theme: {
    bg: "#f8fafc",
    surface: "#ffffff",
    ink: "#0f172a",
    muted: "#475569",
    accent: "#1d4ed8",
    accentSoft: "#dbeafe",
    border: "#e2e8f0",
    headerBg: "#0f172a",
    headerInk: "#f8fafc",
    fontHeading: "var(--font-heading-google), Georgia, serif",
    fontBody: "var(--font-body-google), system-ui, sans-serif",
  },
  aboutText: "Klinikknytt skriver faglige artikler og pasientveiledere om private helsetjenester i Norge, inkludert tannhelse, fysioterapi, kiropraktikk, optikk og spesialistklinikker.",
};
