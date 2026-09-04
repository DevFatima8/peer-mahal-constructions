"use client";

import { useState } from "react";
import { services, site } from "@/lib/site";

/* ────────────────────────────────────────────────────────────────────────────
 *  ⬇⬇⬇  FORMSPREE KEY — YAHAN APNI KEY PASTE KAREIN  ⬇⬇⬇
 *
 *  1. https://formspree.io par free account banayein
 *  2. "+ New Form" par click karein → form ka naam "Peer Mahal Contact" rakhein
 *  3. Aapko ek endpoint milega, misal:  https://formspree.io/f/xdkogwpv
 *  4. Us URL ke aakhri hisse (form ID) ko neeche paste kar dein.
 *
 *  Sirf yeh ek line badalni hai — aur kuch nahi.
 *  Koi database, koi .env file, koi server setup ki zaroorat NAHI hai.
 * ──────────────────────────────────────────────────────────────────────────── */
const FORMSPREE_FORM_ID = "YOUR_FORMSPREE_ID";

/* Poora endpoint (isko chhedne ki zaroorat nahi) */
const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_FORM_ID}`;

/* Jab tak upar wali key paste nahi hoti, form WhatsApp par bhej dega */
const IS_CONFIGURED =
  FORMSPREE_FORM_ID.length > 4 && !FORMSPREE_FORM_ID.startsWith("YOUR_");

type Status = "idle" | "loading" | "success" | "error";

type FormValues = {
  name: string;
  phone: string;
  email: string;
  city: string;
  serviceType: string;
  message: string;
};

function buildWhatsAppText(v: FormValues) {
  return encodeURIComponent(
    [
      "*New Enquiry — peermahalconstruction.com*",
      "",
      `*Name:* ${v.name}`,
      `*Phone:* ${v.phone}`,
      v.email ? `*Email:* ${v.email}` : "",
      v.city ? `*City:* ${v.city}` : "",
      v.serviceType ? `*Service:* ${v.serviceType}` : "",
      "",
      `*Details:*`,
      v.message,
    ]
      .filter(Boolean)
      .join("\n")
  );
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [msg, setMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    const values: FormValues = {
      name: String(fd.get("name") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      city: String(fd.get("city") ?? "").trim(),
      serviceType: String(fd.get("serviceType") ?? "").trim(),
      message: String(fd.get("message") ?? "").trim(),
    };

    if (!values.name || !values.phone || !values.message) {
      setStatus("error");
      setMsg("Please fill in your name, phone number and project details.");
      return;
    }

    /* Honeypot — bots fill this hidden field, humans never do */
    if (String(fd.get("_gotcha") ?? "")) return;

    /* Key abhi paste nahi hui → seedha WhatsApp par bhej dein */
    if (!IS_CONFIGURED) {
      window.open(
        `https://wa.me/${site.whatsapp}?text=${buildWhatsAppText(values)}`,
        "_blank",
        "noopener,noreferrer"
      );
      setStatus("success");
      setMsg("Your enquiry has been opened in WhatsApp. Please press send there.");
      form.reset();
      return;
    }

    setStatus("loading");
    setMsg("");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: fd,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        setMsg(
          "Thank you! Your request has been received. Our engineer will contact you shortly."
        );
        form.reset();
        return;
      }

      const data: { errors?: { message: string }[] } = await res
        .json()
        .catch(() => ({}));

      setStatus("error");
      setMsg(
        data.errors?.map((x) => x.message).join(", ") ??
          "Could not send your request. Please contact us on WhatsApp."
      );
    } catch {
      setStatus("error");
      setMsg("Network error. Please contact us on WhatsApp.");
    }
  }

  const field =
    "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30";

  return (
    <form
      onSubmit={onSubmit}
      action={FORMSPREE_ENDPOINT}
      method="POST"
      className="space-y-4"
    >
      {/* Formspree settings: email subject line + reply-to address */}
      <input
        type="hidden"
        name="_subject"
        value="New enquiry from peermahalconstruction.com"
      />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="Website" value={site.domain} />
      {/* Honeypot spam trap — hidden from real users */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="cf-name"
            className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700"
          >
            Full Name * <span className="urdu-inline text-amber-700">پورا نام</span>
          </label>
          <input
            id="cf-name"
            name="name"
            required
            maxLength={160}
            autoComplete="name"
            className={field}
            placeholder="e.g. Ahmad Ali"
          />
        </div>
        <div>
          <label
            htmlFor="cf-phone"
            className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700"
          >
            Phone / WhatsApp *{" "}
            <span className="urdu-inline text-amber-700">فون نمبر</span>
          </label>
          <input
            id="cf-phone"
            name="phone"
            required
            maxLength={60}
            inputMode="tel"
            autoComplete="tel"
            className={field}
            placeholder="03xx-xxxxxxx"
          />
        </div>
        <div>
          <label
            htmlFor="cf-email"
            className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700"
          >
            Email <span className="urdu-inline text-amber-700">ای میل</span>
          </label>
          <input
            id="cf-email"
            type="email"
            name="email"
            maxLength={200}
            autoComplete="email"
            className={field}
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label
            htmlFor="cf-city"
            className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700"
          >
            City / Location <span className="urdu-inline text-amber-700">شہر</span>
          </label>
          <input
            id="cf-city"
            name="city"
            maxLength={120}
            className={field}
            placeholder="Peer Mahal"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="cf-service"
          className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700"
        >
          Service Required{" "}
          <span className="urdu-inline text-amber-700">مطلوبہ خدمت</span>
        </label>
        <select id="cf-service" name="serviceType" className={field} defaultValue="">
          <option value="">-- Select a service --</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Other">Other / General Enquiry</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="cf-message"
          className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700"
        >
          Project Details *{" "}
          <span className="urdu-inline text-amber-700">منصوبے کی تفصیل</span>
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={5}
          maxLength={4000}
          className={field}
          placeholder="Plot size, number of floors, location, budget range and expected start date…"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-xl bg-amber-600 px-6 py-4 text-base font-extrabold text-white shadow-lg transition hover:bg-amber-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Send Request / درخواست بھیجیں"}
      </button>

      {status === "success" && (
        <div className="rounded-xl border border-green-300 bg-green-50 p-4 text-sm font-semibold text-green-800">
          {msg}
          <span className="urdu mt-1 block text-xs font-normal">
            آپ کی درخواست موصول ہو گئی ہے۔ ہمارا انجینئر جلد آپ سے رابطہ کرے گا۔
          </span>
        </div>
      )}

      {status === "error" && (
        <div className="rounded-xl border border-red-300 bg-red-50 p-4 text-sm font-semibold text-red-800">
          {msg}
          <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block font-bold underline"
          >
            WhatsApp par bhejein — {site.phone}
          </a>
        </div>
      )}

      <p className="text-xs text-slate-500">
        By submitting this form you agree to our{" "}
        <a href="/privacy-policy" className="font-semibold text-amber-700 underline">
          Privacy Policy
        </a>{" "}
        and{" "}
        <a
          href="/terms-and-conditions"
          className="font-semibold text-amber-700 underline"
        >
          Terms &amp; Conditions
        </a>
        .
      </p>

      {!IS_CONFIGURED && (
        <div className="rounded-xl border border-dashed border-amber-400 bg-amber-50 p-4 text-xs leading-relaxed text-amber-900">
          <strong className="block text-sm">⚙️ Setup baaqi hai (sirf aapko nazar aa raha hai)</strong>
          <span className="mt-1 block">
            Abhi form submissions <strong>WhatsApp</strong> par ja rahi hain. Email par
            lene ke liye <code className="rounded bg-white px-1.5 py-0.5">formspree.io</code>{" "}
            se apni Form ID lein aur file{" "}
            <code className="rounded bg-white px-1.5 py-0.5">
              src/components/ContactForm.tsx
            </code>{" "}
            ki line 16 mein{" "}
            <code className="rounded bg-white px-1.5 py-0.5">FORMSPREE_FORM_ID</code>{" "}
            ki jagah paste kar dein. Yeh notice khud ghayab ho jayega.
          </span>
        </div>
      )}
    </form>
  );
}
