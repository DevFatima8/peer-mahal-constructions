# Deployment Guide — peermahalconstruction.com

**Project:** Peer Mahal Construction (Seval Engineer Company)
**Stack:** Next.js 16 (App Router) + Tailwind CSS 4
**Database:** ❌ None
**Environment variables:** ❌ None
**Contact form:** ✉️ Formspree (client-side)

---

## 🎉 Zero-config project

Is website ko chalane ke liye **kuch bhi setup karne ki zaroorat nahi**:

- ❌ Koi database nahi
- ❌ Koi `.env` file nahi
- ❌ Koi API key server par nahi
- ❌ Koi backend service nahi

Bas `npm install` aur `npm run build` — bas itna hi.

---

## 1. Local par chalane ke liye

```bash
npm install
npm run dev      # http://localhost:3000
```

Production test:

```bash
npm run build
npm start
```

---

## 2. Pages

| Page | URL |
|---|---|
| Home | `/` |
| Services | `/services` |
| About / CEO Message | `/about` |
| Contact | `/contact` |
| Privacy Policy | `/privacy-policy` |
| Terms & Conditions | `/terms-and-conditions` |
| Image guide (admin helper) | `/image-guide` |
| Health check | `/api/health` |
| Sitemap | `/sitemap.xml` |
| Robots | `/robots.txt` |

---

## 3. Contact form (Formspree)

Poori tafseel: **[`FORMSPREE-SETUP.md`](./FORMSPREE-SETUP.md)**

Mukhtasar:

1. <https://formspree.io> par free account banayein
2. Naya form banayein → Form ID copy karein (misal `xdkogwpv`)
3. File `src/components/ContactForm.tsx` ki **line 16** mein paste karein:
   ```ts
   const FORMSPREE_FORM_ID = "xdkogwpv";
   ```
4. Rebuild karein — bas!

> Agar key paste na ki jaye to form submissions khud ba khud **WhatsApp
> (0300 6522750)** par chali jati hain, is liye koi enquiry zaya nahi hoti.

---

## 4. Deploy — Option A: Vercel (sab se aasan, recommended)

1. Project ko GitHub par push karein.
2. <https://vercel.com/new> par jayein → repository import karein.
3. Framework khud **Next.js** detect ho jayega. Settings default rehne dein:
   - Build command: `npm run build`
   - Output: `.next`
4. **Environment variables kuch bhi add karne ki zaroorat NAHI hai.**
5. **Deploy** dabayein.
6. **Settings → Domains** mein `peermahalconstruction.com` aur
   `www.peermahalconstruction.com` add karein.
7. Apne domain registrar par yeh DNS records lagayein:

   | Type | Name | Value |
   |---|---|---|
   | A | `@` | `76.76.21.21` |
   | CNAME | `www` | `cname.vercel-dns.com` |

8. DNS propagate hone ka intezar karein (5 min – 24 ghante). SSL apne aap lag jayega.

---

## 5. Deploy — Option B: Netlify / Cloudflare Pages

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Publish directory | `.next` |
| Node version | 20 ya us se upar |
| Environment variables | koi nahi |

Netlify par Next.js plugin khud install ho jata hai.

---

## 6. Deploy — Option C: VPS / cPanel Node.js hosting

```bash
git clone <your-repo> peermahal && cd peermahal
npm ci
npm run build
npm start -- -p 3000
```

PM2 se hamesha chalta rakhein:

```bash
npm i -g pm2
pm2 start "npm run start" --name peermahal
pm2 save && pm2 startup
```

Nginx reverse proxy:

```nginx
server {
    listen 80;
    server_name peermahalconstruction.com www.peermahalconstruction.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Free SSL:

```bash
sudo certbot --nginx -d peermahalconstruction.com -d www.peermahalconstruction.com
```

---

## 7. Images badalna

Poori tafseel: **[`IMAGES-GUIDE.md`](./IMAGES-GUIDE.md)**

Mukhtasar: apni tasveer `public/images/` folder mein sahi naam se rakh dein
(koi bhi extension chalega). Live check karne ke liye `/image-guide` page kholein.

---

## 8. Content kahan edit karein

| Kya badalna hai | File |
|---|---|
| Phone, WhatsApp, address, owner name, email, tagline | `src/lib/site.ts` |
| Services (English + Urdu) | `src/lib/site.ts` → `services` |
| 7 client categories | `src/lib/site.ts` → `clientSegments` |
| Stats, FAQs, testimonials, process steps | `src/lib/site.ts` |
| CEO message | `src/app/about/page.tsx` |
| Privacy Policy text | `src/app/privacy-policy/page.tsx` |
| Terms & Conditions text | `src/app/terms-and-conditions/page.tsx` |
| **Formspree key** | `src/components/ContactForm.tsx` (line 16) |
| Floating WhatsApp button | `src/components/WhatsAppButton.tsx` |
| Images | `public/images/` |

---

## 9. Launch ke baad checklist

- [ ] Formspree Form ID paste karein aur pehli test submission karein
- [ ] Formspree ki confirmation email par **Confirm** click karein
- [ ] `info@peermahalconstruction.com` ki jagah asli email lagayein (`src/lib/site.ts`)
- [ ] `public/images/` mein asli project photos lagayein
- [ ] CEO ki asli tasveer `public/images/ceo.jpg` par lagayein
- [ ] Contact page ke Google Map iframe mein office ka exact pin lagayein
- [ ] `https://peermahalconstruction.com/sitemap.xml` Google Search Console mein submit karein
- [ ] Google Business Profile banayein — "Peer Mahal Construction, City Peer Mahal"
- [ ] Footer mein asli social media links lagayein
