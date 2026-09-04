import fs from "node:fs";
import path from "node:path";

/* ============================================================================
 *  WEBSITE IMAGE LIBRARY  —  ویب سائٹ کی تصاویر
 * ============================================================================
 *
 *  Har tasveer ka ONLINE LINK neeche mojood hai, is liye website turant
 *  tasveeron ke sath chalti hai — kuch download karne ki zaroorat NAHI.
 *
 *  ── Tasveer badalni ho to DO tareeqe hain ──
 *
 *  1) ONLINE LINK badlein  (sab se aasan)
 *     Neeche IMAGE_LIBRARY mein us slot ka `url` badal dein.
 *     Koi bhi public image link chal jayega (Pexels, Unsplash, apni hosting…).
 *
 *  2) APNI FILE upload karein  (link se ziyada priority)
 *     Apni tasveer `public/images/` folder mein slot ke naam se rakh dein,
 *     misal `ceo.jpg`. Extension aur bade-chhote huroof se farq nahi parta.
 *     Local file mil jaye to woh online link ko OVERRIDE kar deti hai.
 *
 *  Live status dekhne ke liye website par `/image-guide` page kholein.
 * ========================================================================== */

/** Pexels par kisi bhi size ki optimised image ka link banata hai. */
function px(id: number, w: number, h: number, ext: "jpeg" | "png" = "jpeg") {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.${ext}?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;
}

export type LibraryEntry = {
  /** Online image link — yahi by default website par lagta hai */
  url: string;
  /** Photo credit (Pexels free licence — attribution zaroori nahi, sirf record ke liye) */
  credit: string;
  label: string;
  labelUrdu: string;
  where: string;
  size: string;
};

export const IMAGE_LIBRARY: Record<string, LibraryEntry> = {
  /* ── LOGO ── koi online link nahi, sirf aapki apni file ── */
  logo: {
    url: "",
    credit: "Aapka apna logo",
    label: "Company logo (header)",
    labelUrdu: "کمپنی کا لوگو (ہیڈر)",
    where: "Header — har page par sab se upar",
    size: "600 × 180 (transparent PNG behtar)",
  },
  "logo-white": {
    url: "",
    credit: "Aapka apna logo",
    label: "Company logo — white version (footer)",
    labelUrdu: "کمپنی کا سفید لوگو (فوٹر)",
    where: "Footer — kaali background par",
    size: "600 × 180 (safed / transparent PNG)",
  },

  hero: {
    url: px(9370034, 1920, 1080),
    credit: "Yogendra Singh / Pexels",
    label: "Home page main banner",
    labelUrdu: "ہوم پیج کا مرکزی بینر",
    where: "Home – top hero section",
    size: "1920 × 1080 (landscape)",
  },
  ceo: {
    url: px(7580910, 800, 1000),
    credit: "RDNE Stock project / Pexels",
    label: "CEO portrait (Mohammed Imran Sohail)",
    labelUrdu: "سی ای او کی تصویر (محمد عمران سہیل)",
    where: "About page – CEO message",
    size: "800 × 1000 (portrait)",
  },
  "about-team": {
    url: px(8961133, 1200, 800),
    credit: "Mikael Blomkvist / Pexels",
    label: "Team / company photo",
    labelUrdu: "ٹیم یا کمپنی کی تصویر",
    where: "Home + About pages",
    size: "1200 × 800",
  },
  residential: {
    url: px(8134820, 1200, 800),
    credit: "Max Vakhtbovych / Pexels",
    label: "Residential project",
    labelUrdu: "رہائشی منصوبہ",
    where: "Services, gallery, client categories",
    size: "1200 × 800",
  },
  commercial: {
    url: px(28654406, 1200, 800),
    credit: "Jimmy Liao / Pexels",
    label: "Commercial project / plaza",
    labelUrdu: "تجارتی منصوبہ / پلازہ",
    where: "Services, gallery, contact banner",
    size: "1200 × 800",
  },
  industrial: {
    url: px(36397980, 1200, 800),
    credit: "Willians Huerta / Pexels",
    label: "Industrial project / factory",
    labelUrdu: "صنعتی منصوبہ / فیکٹری",
    where: "Services, gallery, terms banner",
    size: "1200 × 800",
  },
  infrastructure: {
    url: px(37820986, 1200, 800),
    credit: "Tom Shamberger / Pexels",
    label: "Road / bridge / infrastructure",
    labelUrdu: "سڑک / پل / بنیادی ڈھانچہ",
    where: "Services, gallery",
    size: "1200 × 800",
  },
  supervision: {
    url: px(30379883, 1200, 800),
    credit: "Mukhtar Shuaib Mukhtar / Pexels",
    label: "Site supervision / survey",
    labelUrdu: "سائٹ نگرانی / سروے",
    where: "Services banner, gallery",
    size: "1200 × 800",
  },
  drawings: {
    url: px(5582585, 1200, 800),
    credit: "Thirdman / Pexels",
    label: "Drawings / blueprints",
    labelUrdu: "نقشے / بلیو پرنٹ",
    where: "Services, gallery, privacy banner",
    size: "1200 × 800",
  },
  "cta-bg": {
    url: px(2217214, 1920, 1080),
    credit: "Ariel Paredes / Pexels",
    label: "Dark call-to-action background",
    labelUrdu: "گہرے رنگ کا پس منظر",
    where: "Bottom CTA band on every page",
    size: "1920 × 1080 (dark)",
  },

  /* ── Home page gallery (6 tasveerein) ── */
  "project-1": {
    url: px(8134820, 900, 650),
    credit: "Max Vakhtbovych / Pexels",
    label: "Gallery 1 — Residential villa",
    labelUrdu: "گیلری ۱ — رہائشی مکان",
    where: "Home – projects gallery",
    size: "900 × 650",
  },
  "project-2": {
    url: px(1313534, 900, 650),
    credit: "Mindaugas U / Pexels",
    label: "Gallery 2 — Commercial plaza",
    labelUrdu: "گیلری ۲ — تجارتی پلازہ",
    where: "Home – projects gallery",
    size: "900 × 650",
  },
  "project-3": {
    url: px(236698, 900, 650),
    credit: "Pixabay / Pexels",
    label: "Gallery 3 — Factory & warehouse",
    labelUrdu: "گیلری ۳ — فیکٹری و گودام",
    where: "Home – projects gallery",
    size: "900 × 650",
  },
  "project-4": {
    url: px(12274279, 900, 650),
    credit: "Robert So / Pexels",
    label: "Gallery 4 — Road & bridge works",
    labelUrdu: "گیلری ۴ — سڑک و پل",
    where: "Home – projects gallery",
    size: "900 × 650",
  },
  "project-5": {
    url: px(30379884, 900, 650),
    credit: "Mukhtar Shuaib Mukhtar / Pexels",
    label: "Gallery 5 — Site supervision",
    labelUrdu: "گیلری ۵ — سائٹ نگرانی",
    where: "Home – projects gallery",
    size: "900 × 650",
  },
  "project-6": {
    url: px(4792483, 900, 650),
    credit: "Anete Lusina / Pexels",
    label: "Gallery 6 — Structural drawings",
    labelUrdu: "گیلری ۶ — ساختی نقشے",
    where: "Home – projects gallery",
    size: "900 × 650",
  },
};

/* ==========================================================================
 *  LOCAL OVERRIDE — apni file rakhein to woh online link ki jagah lag jayegi
 * ========================================================================== */

const PUBLIC_DIR = path.join(process.cwd(), "public");

const SEARCH_DIRS = [
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
    "logo",
    "logo-dark",
    "company-logo",
    "brand",
    "brand-logo",
    "peer-mahal-logo",
    "peermahal-logo",
    "site-logo",
    "header-logo",
  ],
  "logo-white": [
    "logo-white",
    "logo-light",
    "white-logo",
    "logo-footer",
    "footer-logo",
  ],
  ceo: [
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
  hero: ["hero", "hero-image", "banner", "main-banner", "home-banner", "slider-1"],
  "about-team": ["about-team", "about", "team", "team-photo", "our-team", "staff"],
  residential: ["residential", "house", "home", "housing"],
  commercial: ["commercial", "plaza", "office", "shop"],
  industrial: ["industrial", "factory", "warehouse", "industry"],
  infrastructure: ["infrastructure", "road", "roads", "bridge", "infra"],
  supervision: ["supervision", "site", "site-visit", "survey", "inspection"],
  drawings: ["drawings", "drawing", "blueprint", "map", "naqsha", "design"],
  "cta-bg": ["cta-bg", "cta", "cta-background", "footer-bg", "dark-bg"],
};

export type ResolvedImage = {
  /** Final image URL — local file (agar mojood ho) warna online link */
  url: string;
  /** Koi tasveer mili ya nahi */
  found: boolean;
  /** Source: uploaded file ya online link */
  source: "local" | "online" | "none";
  slot: string;
  /** Local file ka naam (agar upload ki gayi ho) */
  fileName: string | null;
};

/** "/images/ceo.jpg" ya "ceo.png" ko slot "ceo" mein badalta hai. */
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
 * Slot resolve karta hai:
 *   1. Pehle `public/images/` mein apni uploaded file dhoondta hai
 *   2. Na mile to IMAGE_LIBRARY ka online link deta hai
 */
export function resolveImage(slotOrPath: string | string[]): ResolvedImage {
  const list = (Array.isArray(slotOrPath) ? slotOrPath : [slotOrPath]).map(toSlot);

  // 1) uploaded file ko priority
  for (const slot of list) {
    const local = findLocal(slot);
    if (local) {
      return { url: local.url, found: true, source: "local", slot, fileName: local.fileName };
    }
  }

  // 2) online link (khali url wale slots — jaise logo — skip ho jate hain)
  for (const slot of list) {
    const entry = IMAGE_LIBRARY[slot];
    if (entry && entry.url) {
      return { url: entry.url, found: true, source: "online", slot, fileName: null };
    }
  }

  return { url: "", found: false, source: "none", slot: list[0] ?? "unknown", fileName: null };
}

/** CSS `background-image` ke liye. */
export function resolveImageUrl(slotOrPath: string | string[]): string {
  return resolveImage(slotOrPath).url;
}

/** Saare slots — `/image-guide` page is list se banta hai. */
export const IMAGE_SLOTS = Object.entries(IMAGE_LIBRARY).map(([slot, entry]) => ({
  slot,
  ...entry,
}));
