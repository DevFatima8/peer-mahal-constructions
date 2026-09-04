import fs from "node:fs";
import path from "node:path";

/* ============================================================================
 *  WEBSITE IMAGE LIBRARY  —  ویب سائٹ کی تصاویر
 * ============================================================================
 *
 *  All project images are stored locally in:
 *    public/content/
 *
 *  Resolution order:
 *  1) Local file in public/content/ (highest priority)
 *  2) Local file in public/images/
 *  3) Configured default local path in IMAGE_LIBRARY
 * ========================================================================== */

export type LibraryEntry = {
  /** Local image URL (/content/filename.jpg) */
  url: string;
  credit: string;
  label: string;
  labelUrdu: string;
  where: string;
  size: string;
};

export const IMAGE_LIBRARY: Record<string, LibraryEntry> = {
  /* ── BRANDING ── */
  logo: {
    url: "/content/company-logo.jpeg",
    credit: "Peer Mahal Construction Brand Logo",
    label: "Company logo (header)",
    labelUrdu: "کمپنی کا لوگو (ہیڈر)",
    where: "Header — top of every page",
    size: "600 × 180 (transparent PNG / JPEG)",
  },
  "logo-white": {
    url: "/content/company-logo.jpeg",
    credit: "Peer Mahal Construction Brand Logo",
    label: "Company logo — white/footer version",
    labelUrdu: "کمپنی کا سفید لوگو (فوٹر)",
    where: "Footer — dark background",
    size: "600 × 180 (transparent PNG / JPEG)",
  },

  /* ── CORE BANNERS & SECTIONS ── */
  hero: {
    url: "/content/hero-construction.jpg",
    credit: "Local Content / Peer Mahal Construction",
    label: "Home page main banner",
    labelUrdu: "ہوم پیج کا مرکزی بینر",
    where: "Home – top hero section",
    size: "1920 × 1080 (landscape)",
  },
  "hero-construction": {
    url: "/content/hero-construction.jpg",
    credit: "Local Content / Peer Mahal Construction",
    label: "Home page main banner",
    labelUrdu: "ہوم پیج کا مرکزی بینر",
    where: "Home – top hero section",
    size: "1920 × 1080 (landscape)",
  },
  ceo: {
    url: "/content/ceo-portrait.jpeg",
    credit: "Mohammed Imran Sohail (Founder & CEO)",
    label: "CEO portrait (Mohammed Imran Sohail)",
    labelUrdu: "سی ای او کی تصویر (محمد عمران سہیل)",
    where: "About page – CEO message",
    size: "800 × 1000 (portrait)",
  },
  "ceo-portrait": {
    url: "/content/ceo-portrait.jpeg",
    credit: "Mohammed Imran Sohail (Founder & CEO)",
    label: "CEO portrait (Mohammed Imran Sohail)",
    labelUrdu: "سی ای او کی تصویر (محمد عمران سہیل)",
    where: "About page – CEO message",
    size: "800 × 1000 (portrait)",
  },
  "about-team": {
    url: "/content/construction-team.jpg",
    credit: "Local Content / Civil Engineering Team",
    label: "Team / company photo",
    labelUrdu: "ٹیم یا کمپنی کی تصویر",
    where: "Home + About pages",
    size: "1200 × 800",
  },
  "construction-team": {
    url: "/content/construction-team.jpg",
    credit: "Local Content / Civil Engineering Team",
    label: "Team / company photo",
    labelUrdu: "ٹیم یا کمپنی کی تصویر",
    where: "Home + About pages",
    size: "1200 × 800",
  },
  "cta-bg": {
    url: "/content/cta-construction-dark.jpg",
    credit: "Local Content / Construction Architecture",
    label: "Dark call-to-action background",
    labelUrdu: "گہرے رنگ کا پس منظر",
    where: "Bottom CTA band on every page",
    size: "1920 × 1080 (dark)",
  },
  "cta-construction-dark": {
    url: "/content/cta-construction-dark.jpg",
    credit: "Local Content / Construction Architecture",
    label: "Dark call-to-action background",
    labelUrdu: "گہرے رنگ کا پس منظر",
    where: "Bottom CTA band on every page",
    size: "1920 × 1080 (dark)",
  },

  /* ── HOME PAGE GALLERY (6 UNIQUE PROJECTS) ── */
  "project-1": {
    url: "/content/residential-villa.jpg",
    credit: "Local Content / Residential Villa",
    label: "Gallery 1 — Residential villa",
    labelUrdu: "گیلری ۱ — رہائشی مکان",
    where: "Home – projects gallery",
    size: "1200 × 800",
  },
  "residential-villa": {
    url: "/content/residential-villa.jpg",
    credit: "Local Content / Residential Villa",
    label: "Gallery 1 — Residential villa",
    labelUrdu: "گیلری ۱ — رہائشی مکان",
    where: "Home – projects gallery",
    size: "1200 × 800",
  },
  "project-2": {
    url: "/content/commercial-plaza.jpg",
    credit: "Local Content / Commercial Plaza",
    label: "Gallery 2 — Commercial plaza",
    labelUrdu: "گیلری ۲ — تجارتی پلازہ",
    where: "Home – projects gallery",
    size: "1200 × 800",
  },
  "commercial-plaza": {
    url: "/content/commercial-plaza.jpg",
    credit: "Local Content / Commercial Plaza",
    label: "Gallery 2 — Commercial plaza",
    labelUrdu: "گیلری ۲ — تجارتی پلازہ",
    where: "Home – projects gallery",
    size: "1200 × 800",
  },
  "project-3": {
    url: "/content/industrial-warehouse.jpg",
    credit: "Local Content / Industrial Warehouse",
    label: "Gallery 3 — Factory & warehouse",
    labelUrdu: "گیلری ۳ — فیکٹری و گودام",
    where: "Home – projects gallery",
    size: "1200 × 800",
  },
  "industrial-warehouse": {
    url: "/content/industrial-warehouse.jpg",
    credit: "Local Content / Industrial Warehouse",
    label: "Gallery 3 — Factory & warehouse",
    labelUrdu: "گیلری ۳ — فیکٹری و گودام",
    where: "Home – projects gallery",
    size: "1200 × 800",
  },
  "project-4": {
    url: "/content/road-bridge.jpg",
    credit: "Local Content / Road & Bridge Works",
    label: "Gallery 4 — Road & bridge works",
    labelUrdu: "گیلری ۴ — سڑک و پل",
    where: "Home – projects gallery",
    size: "1200 × 800",
  },
  "road-bridge": {
    url: "/content/road-bridge.jpg",
    credit: "Local Content / Road & Bridge Works",
    label: "Gallery 4 — Road & bridge works",
    labelUrdu: "گیلری ۴ — سڑک و پل",
    where: "Home – projects gallery",
    size: "1200 × 800",
  },
  "project-5": {
    url: "/content/site-inspection.jpg",
    credit: "Local Content / Site Quality Inspection",
    label: "Gallery 5 — Site supervision",
    labelUrdu: "گیلری ۵ — سائٹ نگرانی",
    where: "Home – projects gallery",
    size: "1200 × 800",
  },
  "site-inspection": {
    url: "/content/site-inspection.jpg",
    credit: "Local Content / Site Quality Inspection",
    label: "Gallery 5 — Site supervision",
    labelUrdu: "گیلری ۵ — سائٹ نگرانی",
    where: "Home – projects gallery",
    size: "1200 × 800",
  },
  "project-6": {
    url: "/content/architectural-blueprints.jpg",
    credit: "Local Content / Architectural Blueprints",
    label: "Gallery 6 — Structural drawings",
    labelUrdu: "گیلری ۶ — ساختی نقشے",
    where: "Home – projects gallery",
    size: "1200 × 800",
  },
  "architectural-blueprints": {
    url: "/content/architectural-blueprints.jpg",
    credit: "Local Content / Architectural Blueprints",
    label: "Gallery 6 — Structural drawings",
    labelUrdu: "گیلری ۶ — ساختی نقشے",
    where: "Home – projects gallery",
    size: "1200 × 800",
  },

  /* ── 10 DEDICATED SERVICES ── */
  "civil-construction": {
    url: "/content/civil-construction.jpg",
    credit: "Local Content / Civil Works",
    label: "Civil Construction",
    labelUrdu: "سول کنسٹرکشن",
    where: "Services Page — Service 01",
    size: "1200 × 800",
  },
  "structural-design": {
    url: "/content/structural-design.jpg",
    credit: "Local Content / Structural Engineering Design",
    label: "Structural Design",
    labelUrdu: "ساختی ڈیزائن",
    where: "Services Page — Service 02",
    size: "1200 × 800",
  },
  "project-management": {
    url: "/content/project-management.jpg",
    credit: "Local Content / Construction Project Management",
    label: "Project Management",
    labelUrdu: "پروجیکٹ مینجمنٹ",
    where: "Services Page — Service 03",
    size: "1200 × 800",
  },
  "site-supervision": {
    url: "/content/site-supervision.jpg",
    credit: "Local Content / Daily Site Supervision",
    label: "Site Supervision",
    labelUrdu: "سائٹ سپروژن",
    where: "Services Page — Service 04",
    size: "1200 × 800",
  },
  "quantity-surveying": {
    url: "/content/quantity-surveying.jpg",
    credit: "Local Content / Quantity Surveying & Take-off",
    label: "Quantity Surveying",
    labelUrdu: "کوانٹٹی سروے",
    where: "Services Page — Service 05",
    size: "1200 × 800",
  },
  "boq-cost-estimation": {
    url: "/content/boq-cost-estimation.jpg",
    credit: "Local Content / BOQ & Estimation",
    label: "BOQ & Cost Estimation",
    labelUrdu: "بی او کیو اور لاگت کا تخمینہ",
    where: "Services Page — Service 06",
    size: "1200 × 800",
  },
  "building-renovation": {
    url: "/content/building-renovation.jpg",
    credit: "Local Content / Building Renovation",
    label: "Building Renovation",
    labelUrdu: "عمارت کی تزئین و آرائش",
    where: "Services Page — Service 07",
    size: "1200 × 800",
  },
  "infrastructure-roads": {
    url: "/content/infrastructure-roads.jpg",
    credit: "Local Content / Road & Infrastructure Works",
    label: "Road & Infrastructure Works",
    labelUrdu: "سڑکیں اور بنیادی ڈھانچہ",
    where: "Services Page — Service 08",
    size: "1200 × 800",
  },
  "structural-inspection": {
    url: "/content/structural-inspection.jpg",
    credit: "Local Content / Structural Inspection & Testing",
    label: "Structural Inspection",
    labelUrdu: "ساختی معائنہ",
    where: "Services Page — Service 09",
    size: "1200 × 800",
  },
  "engineering-drawings": {
    url: "/content/engineering-drawings.jpg",
    credit: "Local Content / 3D & Engineering Drawings",
    label: "3D & Engineering Drawings",
    labelUrdu: "تھری ڈی اور انجینئرنگ نقشے",
    where: "Services Page — Service 10",
    size: "1200 × 800",
  },

  /* ── 7 DEDICATED CLIENT CATEGORIES ── */
  "residential-clients": {
    url: "/content/residential-clients.jpg",
    credit: "Local Content / Residential Architecture",
    label: "Residential Clients",
    labelUrdu: "رہائشی صارفین",
    where: "Services Page — Category 01",
    size: "1200 × 800",
  },
  "commercial-businesses": {
    url: "/content/commercial-businesses.jpg",
    credit: "Local Content / Commercial Property",
    label: "Commercial Businesses",
    labelUrdu: "تجارتی کاروبار",
    where: "Services Page — Category 02",
    size: "1200 × 800",
  },
  "industrial-clients": {
    url: "/content/industrial-clients.jpg",
    credit: "Local Content / Industrial Manufacturing",
    label: "Industrial Clients",
    labelUrdu: "صنعتی صارفین",
    where: "Services Page — Category 03",
    size: "1200 × 800",
  },
  "real-estate-development": {
    url: "/content/real-estate-development.jpg",
    credit: "Local Content / Real Estate Development",
    label: "Real Estate Developers",
    labelUrdu: "رئیل اسٹیٹ ڈویلپرز",
    where: "Services Page — Category 04",
    size: "1200 × 800",
  },
  "public-sector-infrastructure": {
    url: "/content/public-sector-infrastructure.jpg",
    credit: "Local Content / Public Infrastructure",
    label: "Government & Public Sector",
    labelUrdu: "حکومتی اور عوامی شعبہ",
    where: "Services Page — Category 05",
    size: "1200 × 800",
  },
  "contractor-collaboration": {
    url: "/content/contractor-collaboration.jpg",
    credit: "Local Content / Architect & Contractor Partnering",
    label: "Architects & Contractors",
    labelUrdu: "آرکیٹیکٹس اور ٹھیکیدار",
    where: "Services Page — Category 06",
    size: "1200 × 800",
  },
  "property-investment": {
    url: "/content/property-investment.jpg",
    credit: "Local Content / Property Investment",
    label: "Property Owners / Investors",
    labelUrdu: "جائیداد کے مالکان اور سرمایہ کار",
    where: "Services Page — Category 07",
    size: "1200 × 800",
  },

  /* ── LEGACY SLOTS (for backwards compatibility) ── */
  residential: {
    url: "/content/residential.jpg",
    credit: "Local Content / Residential",
    label: "Residential project (legacy)",
    labelUrdu: "رہائشی منصوبہ",
    where: "Legacy references",
    size: "1200 × 800",
  },
  commercial: {
    url: "/content/commercial.jpg",
    credit: "Local Content / Commercial",
    label: "Commercial project (legacy)",
    labelUrdu: "تجارتی منصوبہ",
    where: "Legacy references",
    size: "1200 × 800",
  },
  industrial: {
    url: "/content/industrial.jpg",
    credit: "Local Content / Industrial",
    label: "Industrial project (legacy)",
    labelUrdu: "صنعتی منصوبہ",
    where: "Legacy references",
    size: "1200 × 800",
  },
  infrastructure: {
    url: "/content/infrastructure.jpg",
    credit: "Local Content / Infrastructure",
    label: "Road / infrastructure (legacy)",
    labelUrdu: "سڑک / بنیادی ڈھانچہ",
    where: "Legacy references",
    size: "1200 × 800",
  },
  supervision: {
    url: "/content/supervision.jpg",
    credit: "Local Content / Supervision",
    label: "Site supervision (legacy)",
    labelUrdu: "سائٹ نگرانی",
    where: "Legacy references",
    size: "1200 × 800",
  },
  drawings: {
    url: "/content/drawings.jpg",
    credit: "Local Content / Drawings",
    label: "Drawings / blueprints (legacy)",
    labelUrdu: "نقشے / بلیو پرنٹ",
    where: "Legacy references",
    size: "1200 × 800",
  },
};

/* ==========================================================================
 *  LOCAL RESOLVER
 * ========================================================================== */

const PUBLIC_DIR = path.join(process.cwd(), "public");

const SEARCH_DIRS = [
  path.join(PUBLIC_DIR, "content"),
  path.join(PUBLIC_DIR, "images"),
  path.join(PUBLIC_DIR, "img"),
  path.join(PUBLIC_DIR, "photos"),
  path.join(PUBLIC_DIR, "uploads"),
  PUBLIC_DIR,
];

const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif", ".svg"];

/** Extra file names accepted for a slot. */
const SLOT_ALIASES: Record<string, string[]> = {
  logo: [
    "company-logo",
    "logo",
    "logo-dark",
    "brand",
    "brand-logo",
    "peer-mahal-logo",
    "peermahal-logo",
    "site-logo",
    "header-logo",
  ],
  "logo-white": [
    "company-logo",
    "logo-white",
    "logo-light",
    "white-logo",
    "logo-footer",
    "footer-logo",
  ],
  ceo: [
    "ceo-portrait",
    "ceo",
    "ceo-image",
    "ceo-photo",
    "ceo-picture",
    "ceo-pic",
    "owner",
    "owner-image",
    "owner-photo",
    "imran",
    "imran-sohail",
    "mohammed-imran-sohail",
    "director",
    "md",
  ],
  "ceo-portrait": ["ceo-portrait", "ceo", "owner", "imran", "mohammed-imran-sohail"],
  hero: ["hero-construction", "hero", "hero-image", "banner", "main-banner", "home-banner", "slider-1"],
  "hero-construction": ["hero-construction", "hero", "banner", "main-banner"],
  "about-team": ["construction-team", "about-team", "about", "team", "team-photo", "our-team", "staff"],
  "construction-team": ["construction-team", "about-team", "team", "our-team"],
  residential: ["residential-villa", "residential-clients", "residential", "house", "home", "housing"],
  "residential-villa": ["residential-villa", "project-1", "residential"],
  commercial: ["commercial-plaza", "commercial-businesses", "commercial", "plaza", "office", "shop"],
  "commercial-plaza": ["commercial-plaza", "project-2", "commercial"],
  industrial: ["industrial-warehouse", "industrial-clients", "industrial", "factory", "warehouse", "industry"],
  "industrial-warehouse": ["industrial-warehouse", "project-3", "industrial"],
  infrastructure: ["road-bridge", "infrastructure-roads", "public-sector-infrastructure", "infrastructure", "road", "roads", "bridge", "infra"],
  "road-bridge": ["road-bridge", "project-4", "infrastructure"],
  supervision: ["site-inspection", "site-supervision", "supervision", "site", "site-visit", "survey", "inspection"],
  "site-inspection": ["site-inspection", "project-5", "supervision"],
  drawings: ["architectural-blueprints", "engineering-drawings", "structural-design", "drawings", "drawing", "blueprint", "map", "naqsha", "design"],
  "architectural-blueprints": ["architectural-blueprints", "project-6", "drawings"],
  "cta-bg": ["cta-construction-dark", "cta-bg", "cta", "cta-background", "footer-bg", "dark-bg"],
  "cta-construction-dark": ["cta-construction-dark", "cta-bg", "cta"],
  "project-1": ["residential-villa", "project-1", "project1", "1", "p1", "proj-1", "gallery-1", "gallery1"],
  "project-2": ["commercial-plaza", "project-2", "project2", "2", "p2", "proj-2", "gallery-2", "gallery2"],
  "project-3": ["industrial-warehouse", "project-3", "project3", "3", "p3", "proj-3", "gallery-3", "gallery3"],
  "project-4": ["road-bridge", "project-4", "project4", "4", "p4", "proj-4", "gallery-4", "gallery4"],
  "project-5": ["site-inspection", "project-5", "project5", "5", "p5", "proj-5", "gallery-5", "gallery5"],
  "project-6": ["architectural-blueprints", "project-6", "project6", "6", "p6", "proj-6", "gallery-6", "gallery6"],
  "civil-construction": ["civil-construction", "civil", "construction"],
  "structural-design": ["structural-design", "structural", "design-3d"],
  "project-management": ["project-management", "management", "pm"],
  "site-supervision": ["site-supervision", "supervision", "site-insp"],
  "quantity-surveying": ["quantity-surveying", "qs", "surveying"],
  "boq-cost-estimation": ["boq-cost-estimation", "boq", "cost-estimation", "estimation"],
  "building-renovation": ["building-renovation", "renovation", "remodeling"],
  "infrastructure-roads": ["infrastructure-roads", "road-works", "infrastructure"],
  "structural-inspection": ["structural-inspection", "inspection", "testing"],
  "engineering-drawings": ["engineering-drawings", "drawings-3d", "3d-drawings"],
  "residential-clients": ["residential-clients", "client-residential"],
  "commercial-businesses": ["commercial-businesses", "client-commercial"],
  "industrial-clients": ["industrial-clients", "client-industrial"],
  "real-estate-development": ["real-estate-development", "client-realestate"],
  "public-sector-infrastructure": ["public-sector-infrastructure", "client-public"],
  "contractor-collaboration": ["contractor-collaboration", "client-contractor"],
  "property-investment": ["property-investment", "client-investor"],
};

export type ResolvedImage = {
  /** Final image URL — local file */
  url: string;
  found: boolean;
  source: "local" | "none";
  slot: string;
  fileName: string | null;
};

/** Normalizes "/content/hero.jpg", "/images/ceo.jpg" or "ceo.png" into slot string. */
export function toSlot(input: string): string {
  const base = input.split("?")[0].split("/").filter(Boolean).pop() ?? input;
  const ext = path.extname(base);
  return (ext ? base.slice(0, -ext.length) : base).toLowerCase();
}

function scanDir(dir: string) {
  try {
    if (!fs.existsSync(dir)) return [];
    return fs
      .readdirSync(dir, { withFileTypes: true })
      .filter((e) => e.isFile())
      .map((e) => {
        const ext = path.extname(e.name).toLowerCase();
        return {
          file: e.name,
          base: e.name.slice(0, e.name.length - ext.length).toLowerCase(),
          ext,
        };
      })
      .filter((e) => IMAGE_EXTENSIONS.includes(e.ext));
  } catch {
    return [];
  }
}

function findLocal(slot: string): { url: string; fileName: string } | null {
  const wanted = [slot, ...(SLOT_ALIASES[slot] ?? [])].map((s) => s.toLowerCase());

  for (const dir of SEARCH_DIRS) {
    const entries = scanDir(dir);
    if (entries.length === 0) continue;

    let hit = entries.find((e) => wanted.includes(e.base));

    if (!hit) {
      const norm = (s: string) => s.replace(/[^a-z0-9]/g, "");
      const wantedNorm = wanted.map(norm);
      hit = entries.find((e) => {
        const b = norm(e.base);
        return wantedNorm.some((w) => w.length > 2 && (b === w || b.startsWith(w)));
      });
    }

    if (hit) {
      const full = `${dir}/${hit.file}`;
      let version = "1";
      try {
        version = Math.round(fs.statSync(full).mtimeMs).toString(36);
      } catch {
        /* ignore */
      }
      const rel = path.relative(PUBLIC_DIR, full).split(path.sep).join("/");
      return { url: `/${rel}?v=${version}`, fileName: hit.file };
    }
  }
  return null;
}

/**
 * Resolves an image slot to its local file path in public/content or public/images.
 */
export function resolveImage(slotOrPath: string | string[]): ResolvedImage {
  const list = (Array.isArray(slotOrPath) ? slotOrPath : [slotOrPath]).map(toSlot);

  // 1) Find local file on disk
  for (const slot of list) {
    const local = findLocal(slot);
    if (local) {
      return { url: local.url, found: true, source: "local", slot, fileName: local.fileName };
    }
  }

  // 2) Check default library entry
  for (const slot of list) {
    const entry = IMAGE_LIBRARY[slot];
    if (entry && entry.url) {
      return { url: entry.url, found: true, source: "local", slot, fileName: path.basename(entry.url) };
    }
  }

  return { url: "", found: false, source: "none", slot: list[0] ?? "unknown", fileName: null };
}

/** CSS `background-image` helper. */
export function resolveImageUrl(slotOrPath: string | string[]): string {
  return resolveImage(slotOrPath).url;
}

/** All slots for administrative status guide. */
export const IMAGE_SLOTS = Object.entries(IMAGE_LIBRARY).map(([slot, entry]) => ({
  slot,
  ...entry,
}));
