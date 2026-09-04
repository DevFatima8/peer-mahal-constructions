# 📬 Contact Form Setup (Formspree)

## کانٹیکٹ فارم کی سیٹنگ

> **Is website mein koi database nahi hai aur koi `.env` file nahi hai.**
> Contact form seedha browser se Formspree ko data bhejta hai, jahan se aapko
> **email** par enquiry mil jati hai.

---

## ⚡ Sirf 4 steps — 3 minute ka kaam

### Step 1 — Formspree account banayein

<https://formspree.io> par jayein → **Sign Up** (free plan mein har mahine 50 submissions free hain).

### Step 2 — Naya form banayein

Dashboard mein **+ New Form** par click karein:

| Field | Kya likhein |
|---|---|
| Form name | `Peer Mahal Contact` |
| Send emails to | aapka email, misal `imransohail@gmail.com` |

Phir **Create Form** dabayein.

### Step 3 — Form ID copy karein

Aapko aisa endpoint nazar aayega:

```
https://formspree.io/f/xdkogwpv
                       ▲▲▲▲▲▲▲▲
                       yehi aapki Form ID hai
```

Sirf aakhri hissa (`xdkogwpv` jaisa 8 letters ka code) copy karein.

### Step 4 — Code mein paste karein

File kholein:

```
src/components/ContactForm.tsx
```

Line **16** par yeh likha hoga:

```ts
const FORMSPREE_FORM_ID = "YOUR_FORMSPREE_ID";
```

Isko badal kar apni ID paste kar dein:

```ts
const FORMSPREE_FORM_ID = "xdkogwpv";
```

**Bas! Ho gaya.** ✅ Save karein aur website dobara build karein.

---

## ✅ Kaise pata chalega ke kaam kar gaya

- Contact page par neeche wala **peela "⚙️ Setup baaqi hai"** wala box **ghayab** ho jayega.
- Form bharen aur submit karein → aapke email par enquiry aa jayegi.
- **Pehli submission** par Formspree aapko ek confirmation email bhejega —
  us mein **Confirm** par click karna zaroori hai, warna aage ki emails nahi aayengi.

---

## 🔁 Agar key paste na ki jaye to?

Website phir bhi poori tarah kaam karti rahegi — form submit karne par saari
tafseelat **WhatsApp** (`0300 6522750`) par khud ba khud khul jayengi, bilkul
format ke sath:

```
New Enquiry — peermahalconstruction.com

Name: Ahmad Ali
Phone: 0300 1234567
City: Peer Mahal
Service: Civil Construction

Details:
5 marla ghar ka grey structure banwana hai
```

Yani aapki koi enquiry zaya nahi hogi. 👍

---

## 📋 Form mein kaunsi cheezein bheji jati hain

| Field | Zaroori? |
|---|---|
| Full Name | ✅ Haan |
| Phone / WhatsApp | ✅ Haan |
| Email | Optional |
| City / Location | Optional |
| Service Required | Optional (dropdown) |
| Project Details | ✅ Haan |

Sath mein ye bhi jata hai:
- `_subject` → email ka subject: *"New enquiry from peermahalconstruction.com"*
- `_template: table` → email khoobsurat table format mein aata hai
- `_gotcha` → chhupa hua spam trap (bots pakadne ke liye)

---

## ⚙️ Formspree dashboard ki useful settings

| Setting | Faida |
|---|---|
| **Notifications → Email** | Ek se zyada email address par enquiry bhejein |
| **Spam filter → reCAPTCHA** | Spam bilkul band |
| **Autoresponse** | Client ko khud ba khud "shukriya" email chala jaye |
| **Submissions** | Saari purani enquiries dashboard mein mehfooz rehti hain |
| **Export CSV** | Saara data Excel mein download karein |

---

## 💰 Pricing

| Plan | Submissions / mahina | Cost |
|---|---|---|
| Free | 50 | $0 |
| Personal | 1,000 | ~$10 / mahina |

Chhoti company ke liye **Free plan kaafi hai**.

---

## 🔒 Kya Form ID public hona khatarnaak hai?

Nahi. Formspree ki Form ID **public hone ke liye hi banai gayi hai** — bilkul
usi tarah jaise aapka phone number website par likha hota hai. Yeh koi secret
password nahi hai, is liye ise code mein rakhna bilkul mehfooz aur normal hai.

Isi wajah se is project mein koi `.env` file ki zaroorat nahi.

Spam se bachne ke liye pehle se do cheezein lagi hui hain:
1. **Honeypot field** (`_gotcha`) — bots isay bhar dete hain, insaan nahi
2. Formspree ka apna **built-in spam filter**

Chahen to dashboard se **reCAPTCHA** bhi on kar sakti hain.

---

## 🛠️ Technical note

```
src/components/ContactForm.tsx   → form + Formspree key (line 16)
src/app/contact/page.tsx         → contact page jahan form lagta hai
src/app/api/health/route.ts      → simple health check (koi DB nahi)
```

- Koi database nahi — `src/db/` folder delete kar diya gaya hai
- Koi `.env` file nahi — kisi environment variable ki zaroorat nahi
- Koi server-side API route nahi jo form handle kare
- Poori website static hai → **kisi bhi hosting par chal jayegi**
  (Vercel, Netlify, Cloudflare Pages, cPanel — sab par)
