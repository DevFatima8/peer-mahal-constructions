import type { Metadata } from "next";
import Link from "next/link";
import SiteImage from "@/components/SiteImage";
import { IMAGE_SLOTS, resolveImage } from "@/lib/images";

export const metadata: Metadata = {
  title: "Image Guide (Admin Helper)",
  description: "Internal helper page showing which image goes where on the website.",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default function ImageGuidePage() {
  const rows = IMAGE_SLOTS.map((s) => ({ ...s, resolved: resolveImage(s.slot) }));

  const logos = rows.filter((r) => r.slot.startsWith("logo"));
  const photos = rows.filter((r) => !r.slot.startsWith("logo"));

  const uploaded = rows.filter((r) => r.resolved.source === "local").length;
  const pending = photos.filter((r) => r.resolved.source !== "local").length;
  const progress = Math.round((uploaded / rows.length) * 100);

  return (
    <div className="bg-slate-50">
      {/* HEADER */}
      <section className="bg-slate-900 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-500">
            Admin Helper · Menu mein nahi · Google par index nahi hota
          </p>
          <h1 className="mt-3 text-4xl font-black text-white">Apni Tasveerein Lagayein</h1>
          <p className="urdu mt-2 text-xl text-amber-400">اپنی تصاویر لگائیں</p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-bold text-white">📖 Tareeqa — sirf 3 steps</h2>
            <ol className="mt-3 space-y-2 text-sm text-slate-300">
              <li>
                <strong className="text-amber-400">1.</strong> Apni tasveer ka naam neeche di gayi
                list ke mutabiq rakhein — misal{" "}
                <code className="rounded bg-slate-800 px-2 py-0.5 text-amber-300">logo.png</code>
              </li>
              <li>
                <strong className="text-amber-400">2.</strong> Usay is folder mein rakh dein:{" "}
                <code className="rounded bg-slate-800 px-2 py-0.5 text-amber-300">
                  public/images/
                </code>
              </li>
              <li>
                <strong className="text-amber-400">3.</strong> Website rebuild karein:{" "}
                <code className="rounded bg-slate-800 px-2 py-0.5 text-amber-300">
                  npm run build
                </code>
              </li>
            </ol>
            <p className="mt-3 text-xs text-slate-400">
              Extension koi bhi chalega — <strong>.jpg .jpeg .png .webp .avif .svg</strong> — aur
              bade/chhote huroof se koi farq nahi parta.
            </p>
            <p className="urdu mt-2 text-xs leading-loose text-slate-400">
              فائل کا نام اور فارمیٹ کچھ بھی ہو، سسٹم خود پہچان لیتا ہے۔
            </p>
          </div>

          {/* PROGRESS */}
          <div className="mt-6">
            <div className="flex items-center justify-between text-sm font-bold text-white">
              <span>
                Aapki uploaded tasveerein:{" "}
                <span className="text-green-400">{uploaded}</span> / {rows.length}
              </span>
              <span className="text-amber-400">{progress}%</span>
            </div>
            <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full rounded-full bg-gradient-to-r from-amber-500 to-green-500 transition-all"
                style={{ width: `${Math.max(progress, 2)}%` }}
              />
            </div>
            <p className="mt-2 text-xs text-slate-400">
              {pending > 0
                ? `${pending} tasveerein abhi online placeholder par hain — inhein apni tasveeron se badal dein.`
                : "Shabash! Saari tasveerein aapki apni lag chuki hain. 🎉"}
            </p>
          </div>
        </div>
      </section>

      {/* LOGO SECTION */}
      <section className="mx-auto max-w-6xl px-4 pt-14">
        <div className="rounded-2xl border-2 border-amber-400 bg-amber-50 p-6">
          <h2 className="text-2xl font-black text-slate-900">🏷️ Sab se pehle — Logo</h2>
          <p className="urdu text-lg text-amber-800">سب سے پہلے — لوگو</p>
          <p className="mt-2 text-sm text-slate-700">
            Header aur footer mein aapki company ka logo lagega. Jab tak logo file nahi hoti,
            company ka naam text mein dikhta hai.
          </p>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {logos.map((r) => (
              <div key={r.slot} className="rounded-xl border border-amber-200 bg-white p-5">
                <div
                  className={`flex h-24 items-center justify-center rounded-lg p-3 ${
                    r.slot === "logo-white" ? "bg-slate-900" : "bg-slate-100"
                  }`}
                >
                  {r.resolved.source === "local" ? (
                    <SiteImage
                      slot={r.slot}
                      alt={r.label}
                      width={260}
                      height={80}
                      className="h-full w-auto object-contain"
                    />
                  ) : (
                    <span
                      className={`text-sm font-bold ${
                        r.slot === "logo-white" ? "text-slate-500" : "text-slate-400"
                      }`}
                    >
                      Abhi logo nahi laga
                    </span>
                  )}
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">{r.label}</h3>
                <p className="urdu text-sm text-amber-700">{r.labelUrdu}</p>
                <dl className="mt-3 space-y-2 text-xs">
                  <div className="flex justify-between gap-3 rounded-lg bg-slate-50 p-2.5">
                    <dt className="font-bold text-slate-600">File ka naam</dt>
                    <dd className="font-mono font-bold text-amber-700">{r.slot}.png</dd>
                  </div>
                  <div className="flex justify-between gap-3 rounded-lg bg-slate-50 p-2.5">
                    <dt className="font-bold text-slate-600">Size</dt>
                    <dd className="text-slate-800">{r.size}</dd>
                  </div>
                  <div className="flex justify-between gap-3 rounded-lg bg-slate-50 p-2.5">
                    <dt className="font-bold text-slate-600">Status</dt>
                    <dd
                      className={`font-bold ${
                        r.resolved.source === "local" ? "text-green-700" : "text-slate-500"
                      }`}
                    >
                      {r.resolved.source === "local"
                        ? `✅ ${r.resolved.fileName}`
                        : "⬜ Baaqi hai"}
                    </dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
          <p className="mt-4 rounded-lg bg-white p-3 text-xs text-slate-600">
            💡 <strong>Tip:</strong> Logo ke liye <strong>transparent PNG</strong> sab se behtar
            hai. <code className="rounded bg-slate-100 px-1.5">logo-white.png</code> optional hai —
            agar na ho to footer mein bhi wahi aam logo lag jayega.
          </p>
        </div>
      </section>

      {/* PHOTOS */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-black text-slate-900">🖼️ Website ki tasveerein</h2>
        <p className="urdu text-lg text-amber-700">ویب سائٹ کی تصاویر</p>
        <p className="mt-2 text-sm text-slate-600">
          Neeche har tasveer ka naam aur size diya gaya hai. Jo abhi{" "}
          <span className="font-bold text-sky-700">Online placeholder</span> hain, unhein apni asli
          project photos se badal dein.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {photos.map((r) => {
            const mine = r.resolved.source === "local";
            return (
              <div
                key={r.slot}
                className={`overflow-hidden rounded-2xl border-2 bg-white shadow-sm ${
                  mine ? "border-green-400" : "border-slate-200"
                }`}
              >
                <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                  <SiteImage slot={r.slot} alt={r.label} fill className="object-cover" />
                  <span
                    className={`absolute right-3 top-3 rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-widest shadow ${
                      mine ? "bg-green-500 text-white" : "bg-sky-500 text-white"
                    }`}
                  >
                    {mine ? "✅ Aapki tasveer" : "Online placeholder"}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="text-base font-bold text-slate-900">{r.label}</h3>
                  <p className="urdu text-sm text-amber-700">{r.labelUrdu}</p>

                  <dl className="mt-4 space-y-2 text-xs">
                    <div className="flex items-center justify-between gap-3 rounded-lg bg-amber-50 p-3">
                      <dt className="font-bold text-slate-700">Apni file ka naam rakhein</dt>
                      <dd className="rounded bg-white px-2 py-1 font-mono text-sm font-bold text-amber-700">
                        {r.slot}.jpg
                      </dd>
                    </div>
                    <div className="flex justify-between gap-3 rounded-lg bg-slate-50 p-2.5">
                      <dt className="font-bold text-slate-600">Recommended size</dt>
                      <dd className="text-slate-800">{r.size}</dd>
                    </div>
                    <div className="flex justify-between gap-3 rounded-lg bg-slate-50 p-2.5">
                      <dt className="font-bold text-slate-600">Kahan lagti hai</dt>
                      <dd className="text-right text-slate-800">{r.where}</dd>
                    </div>
                    <div className="flex justify-between gap-3 rounded-lg bg-slate-50 p-2.5">
                      <dt className="font-bold text-slate-600">Abhi kya laga hai</dt>
                      <dd className="text-right font-mono text-slate-800">
                        {r.resolved.fileName ?? "online placeholder"}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            );
          })}
        </div>

        {/* HELP */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-7">
            <h2 className="text-xl font-black text-slate-900">❓ Tasveer nahi lag rahi?</h2>
            <p className="urdu text-base text-amber-700">تصویر نظر نہیں آ رہی؟</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li>
                <strong>1.</strong> Folder check karein — file{" "}
                <code className="rounded bg-slate-100 px-1.5">public/images/</code> mein honi
                chahiye (<code className="rounded bg-slate-100 px-1.5">src/</code> mein nahi)
              </li>
              <li>
                <strong>2.</strong> Naam mein space ya brackets na hon —{" "}
                <code className="rounded bg-slate-100 px-1.5">ceo (1).jpg</code> ❌ ·{" "}
                <code className="rounded bg-slate-100 px-1.5">ceo.jpg</code> ✅
              </li>
              <li>
                <strong>3.</strong> Rebuild karein:{" "}
                <code className="rounded bg-slate-100 px-1.5">npm run build</code>
              </li>
              <li>
                <strong>4.</strong> Browser hard refresh: <strong>Ctrl + Shift + R</strong>
              </li>
              <li>
                <strong>5.</strong> Phir bhi na chale:{" "}
                <code className="rounded bg-slate-100 px-1.5">rm -rf .next</code> phir{" "}
                <code className="rounded bg-slate-100 px-1.5">npm run build</code>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-7">
            <h2 className="text-xl font-black text-slate-900">📐 Tasveer ki tayari</h2>
            <p className="urdu text-base text-amber-700">تصویر کی تیاری</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li>
                <strong>Size:</strong> banner ke liye 1920×1080, aam tasveer 1200×800, CEO 800×1000
              </li>
              <li>
                <strong>Weight:</strong> har file 500 KB se kam rakhein — website tez chalegi
              </li>
              <li>
                <strong>Compress:</strong> <span className="font-mono">tinypng.com</span> par free
                compress kar lein
              </li>
              <li>
                <strong>Format:</strong> photos ke liye <strong>.jpg</strong>, logo ke liye
                transparent <strong>.png</strong>
              </li>
              <li>
                <strong>Quality:</strong> dhundli ya chhoti tasveer na lagayein — website ka asar
                kharab hota hai
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-block rounded-xl bg-slate-900 px-8 py-4 text-sm font-bold text-white"
          >
            ← Back to website
          </Link>
        </div>
      </section>
    </div>
  );
}
