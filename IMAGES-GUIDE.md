# 📸 Apni Tasveerein & Logo Lagane Ka Tareeqa

## اپنی تصاویر اور لوگو لگانے کا طریقہ

---

## ⚡ Sirf 3 steps

1. Apni tasveer ka **naam** neeche di gayi list ke mutabiq rakhein
2. File ko **`public/images/`** folder mein rakh dein
3. Rebuild karein: **`npm run build`**

**Bas!** Tasveer khud website par lag jayegi. ✅

> **Extension koi bhi chalega:** `.jpg` `.jpeg` `.png` `.webp` `.avif` `.svg`
> **Bade/chhote huroof se koi farq nahi:** `CEO.JPG` bhi chalega
> **Naam mein space ya brackets na rakhein:** `ceo (1).jpg` ❌ → `ceo.jpg` ✅

---

## 🏷️ 1. LOGO (sab se pehle)

Logo **header** (har page ke upar) aur **footer** dono jagah lagta hai.

| File ka naam | Kahan lagta hai | Size |
|---|---|---|
| **`logo.png`** | Header — har page ke upar | 600 × 180 |
| `logo-white.png` | Footer — kaali background par | 600 × 180 |

### Zaroori baatein

- **Transparent PNG** sab se behtar hai (background ke baghair)
- `logo-white.png` **optional** hai — na ho to footer mein bhi wahi aam logo lag jayega
- **SVG** bhi chalta hai (`logo.svg`) — sab se sharp result deta hai
- Height khud adjust ho jati hai (header mein 48–56px), width apne aap set hoti hai

### Yeh naam bhi chalte hain

```
logo.png · logo.svg · logo.jpg · logo.webp
company-logo.png · brand.png · peer-mahal-logo.png · site-logo.png
```

Footer ke safed logo ke liye:
```
logo-white.png · logo-light.png · white-logo.png · footer-logo.png
```

> **Jab tak logo file nahi hoti**, header mein company ka naam text mein dikhta
> hai — website kabhi tooti hui nahi lagti.

---

## 🖼️ 2. WEBSITE KI TASVEEREIN (10)

| File ka naam | Kahan lagti hai | Size |
|---|---|---|
| `hero.jpg` | Home page ka bara banner | 1920 × 1080 |
| **`ceo.jpg`** | About page — CEO message | 800 × 1000 (**portrait**) |
| `about-team.jpg` | Home + About — team photo | 1200 × 800 |
| `residential.jpg` | Ghar / rihaishi project | 1200 × 800 |
| `commercial.jpg` | Plaza / dukan / office | 1200 × 800 |
| `industrial.jpg` | Factory / warehouse | 1200 × 800 |
| `infrastructure.jpg` | Sarak / pul | 1200 × 800 |
| `supervision.jpg` | Site supervision / survey | 1200 × 800 |
| `drawings.jpg` | Naqshe / blueprints | 1200 × 800 |
| `cta-bg.jpg` | Neeche wale dark banner ka background | 1920 × 1080 (**dark**) |

---

## 🏗️ 3. HOME PAGE GALLERY (6)

| File ka naam | Size |
|---|---|
| `project-1.jpg` … `project-6.jpg` | 900 × 650 har ek |

Yahan apne **asli mukammal projects** ki tasveerein lagayein — is se client ka
aitmaad sab se ziyada barhta hai.

---

## 👤 CEO ki tasveer

```
public/images/ceo.jpg
```

**Behtareen result ke liye:**
- **Portrait** (khari) tasveer — takreeban 800 × 1000 px
- Chehra beech mein aur thora upar ki taraf
- Saaf background (office ya plain deewar)
- Achhi roshni, dhundli tasveer na ho

**Yeh naam bhi chalte hain:**
`ceo.jpg` · `owner.jpg` · `imran.jpg` · `ceo-photo.png` ·
`mohammed-imran-sohail.jpg` · `director.webp` · `md.jpg`

---

## 🧭 Live status page — `/image-guide`

Website par yeh page kholein:

```
http://localhost:3000/image-guide
```

Yahan aapko milega:

- ✅ **Progress bar** — kitni tasveerein aap laga chuki hain
- 🖼️ **Har tasveer ka preview**
- 🟢 **"Aapki tasveer"** — aapki lagi hui hai
- 🔵 **"Online placeholder"** — abhi lagani baaqi hai
- 📋 Har tasveer ka **exact file name** aur **size**
- ❓ Troubleshooting tips

Yeh page **menu mein nahi** hai aur **Google par index nahi** hota — sirf aapke liye hai.

---

## 📐 Tasveer tayar karne ke tips

| Cheez | Mashwara |
|---|---|
| **Size** | Banner 1920×1080 · Aam tasveer 1200×800 · CEO 800×1000 |
| **Weight** | Har file **500 KB se kam** — website tez chalegi |
| **Compress** | `tinypng.com` par free compress karein |
| **Format** | Photos = `.jpg` · Logo = transparent `.png` |
| **Quality** | Dhundli / chhoti tasveer na lagayein |
| **Mobile** | Landscape (chori) tasveerein behtar lagti hain |

---

## ❓ Tasveer nahi lag rahi?

| Masla | Hal |
|---|---|
| File galat folder mein | Sirf **`public/images/`** — `src/` mein nahi |
| Naam mein space/brackets | `ceo (1).jpg` ❌ → `ceo.jpg` ✅ |
| Rebuild nahi kiya | `npm run build` chalayein |
| Purani tasveer dikh rahi | **Ctrl + Shift + R** (hard refresh) |
| Phir bhi nahi chal rahi | `rm -rf .next` phir `npm run build` |
| Format support nahi | `.HEIC`/`.tiff` ko `.jpg` mein convert karein |

Sab se pakka tareeqa:

```bash
rm -rf .next
npm run build
npm start
```

---

## 🌐 Jo tasveer aap nahi lagayengi?

Wahan filhal ek **online placeholder** (Pexels ki free tasveer) lagta rahega,
taake website kabhi khali ya tooti hui na lage.

Aap **jitni marzi tasveerein lagayein** — jo lagayengi woh aapki, baaqi
placeholder. Dono ek saath chal sakti hain.

Placeholder ka link badalna ho to file `src/lib/images.ts` mein us slot ka
`url` edit kar dein.

---

## 🛠️ Technical note

```
public/images/               → yahan apni files rakhein
src/lib/images.ts            → slot library + resolver logic
src/components/Logo.tsx      → header/footer ka logo
src/components/SiteImage.tsx → baaqi saari tasveerein
src/app/image-guide/page.tsx → live status page
next.config.ts               → image settings (SVG + remote hosts allowed)
```

**Resolution order:**

1. Pehle `public/images/` (aur `img/`, `photos/`, `uploads/`) mein **aapki file** dhoondi jati hai
2. Na mile to **online placeholder** lagta hai
3. Logo ke liye koi placeholder nahi — text mein company ka naam dikhta hai

Saari tasveerein `next/image` se guzarti hain — automatic **WebP** conversion,
**responsive sizes** aur **lazy loading** ke sath, taake website tez chale.
