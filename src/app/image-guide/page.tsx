import type { Metadata } from "next";
import Link from "next/link";
import SiteImage from "@/components/SiteImage";
import { IMAGE_SLOTS, resolveImage } from "@/lib/images";

export const metadata: Metadata = {
  title: "Image Guide (Admin Helper)",
  description: "Internal helper page showing local images across the website.",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default function ImageGuidePage() {
  const rows = IMAGE_SLOTS.map((s) => ({ ...s, resolved: resolveImage(s.slot) }));

  const logos = rows.filter((r) => r.slot.startsWith("logo") || r.slot.includes("logo"));
  const photos = rows.filter((r) => !r.slot.startsWith("logo") && !r.slot.includes("logo"));

  const uploaded = rows.filter((r) => r.resolved.found).length;
  const pending = rows.filter((r) => !r.resolved.found).length;
  const progress = Math.round((uploaded / rows.length) * 100);

  return (
    <div className="bg-slate-50">
      {/* HEADER */}
      <section className="bg-slate-900 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-500">
            Admin Helper · Menu mein nahi · Google par index nahi hota
          </p>
          <h1 className="mt-3 text-4xl font-black text-white">Project Local Images Status</h1>
          <p className="urdu mt-2 text-xl text-amber-400">تمام تصاویر کی لوکل صورتحال</p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-bold text-white">📁 Local Image Storage Directory</h2>
            <p className="mt-2 text-sm text-slate-300">
              All project images are downloaded and stored locally in:
            </p>
            <p className="mt-2 font-mono text-sm font-bold text-amber-400">
              D:\heapware\peer-mahal-constructions\public\content\
            </p>
            <p className="mt-3 text-xs text-slate-400">
              Har tasveer clean descriptive naam ke sath local folder mein mehfooz hai. Website par koi external image URL dependency nahi hai.
            </p>
          </div>

          {/* PROGRESS */}
          <div className="mt-6">
            <div className="flex items-center justify-between text-sm font-bold text-white">
              <span>
                Local images available:{" "}
                <span className="text-green-400">{uploaded}</span> / {rows.length}
              </span>
              <span className="text-green-400">{progress}% Local</span>
            </div>
            <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full rounded-full bg-gradient-to-r from-amber-500 to-green-500 transition-all"
                style={{ width: `${Math.max(progress, 2)}%` }}
              />
            </div>
            <p className="mt-2 text-xs text-slate-400">
              {pending === 0
                ? "Shabash! Saari tasveerein locally public/content folder mein mojood hain. 🎉"
                : `${pending} slots pending local file.`}
            </p>
          </div>
        </div>
      </section>

      {/* LOGO SECTION */}
      <section className="mx-auto max-w-6xl px-4 pt-14">
        <div className="rounded-2xl border-2 border-amber-400 bg-amber-50 p-6">
          <h2 className="text-2xl font-black text-slate-900">🏷️ Branding &amp; Logo</h2>
          <p className="urdu text-lg text-amber-800">لوگو اور برانڈنگ</p>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {logos.map((r) => (
              <div key={r.slot} className="rounded-xl border border-amber-200 bg-white p-5">
                <div
                  className={`flex h-24 items-center justify-center rounded-lg p-3 ${
                    r.slot === "logo-white" ? "bg-slate-900" : "bg-slate-100"
                  }`}
                >
                  <SiteImage
                    slot={r.slot}
                    alt={r.label}
                    width={260}
                    height={80}
                    className="h-full w-auto object-contain"
                  />
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">{r.label}</h3>
                <p className="urdu text-sm text-amber-700">{r.labelUrdu}</p>
                <dl className="mt-3 space-y-2 text-xs">
                  <div className="flex justify-between gap-3 rounded-lg bg-slate-50 p-2.5">
                    <dt className="font-bold text-slate-600">File path</dt>
                    <dd className="font-mono font-bold text-amber-700">{r.url}</dd>
                  </div>
                  <div className="flex justify-between gap-3 rounded-lg bg-slate-50 p-2.5">
                    <dt className="font-bold text-slate-600">Status</dt>
                    <dd className="font-bold text-green-700">
                      {r.resolved.found ? `✅ Local: ${r.resolved.fileName ?? (r.url.split("/").pop() || "")}` : "⬜ Missing"}
                    </dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTOS */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-black text-slate-900">🖼️ Local Website Images ({photos.length})</h2>
        <p className="urdu text-lg text-amber-700">ویب سائٹ کی تمام لوکل تصاویر</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {photos.map((r) => {
            const resolved = r.resolved;
            return (
              <div
                key={r.slot}
                className="overflow-hidden rounded-2xl border-2 border-green-400 bg-white shadow-sm"
              >
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <SiteImage slot={r.slot} alt={r.label} fill className="object-cover" />
                  <span className="absolute right-3 top-3 rounded-full bg-green-600 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white shadow">
                    ✅ Local Content
                  </span>
                </div>

                <div className="p-4">
                  <h3 className="text-base font-bold text-slate-900">{r.label}</h3>
                  <p className="urdu text-xs text-amber-700">{r.labelUrdu}</p>

                  <dl className="mt-3 space-y-1.5 text-xs">
                    <div className="flex items-center justify-between gap-2 rounded bg-amber-50 p-2">
                      <dt className="font-bold text-slate-700">File</dt>
                      <dd className="font-mono text-xs font-bold text-amber-800">
                        {resolved.fileName ?? (r.url.split("/").pop() || "")}
                      </dd>
                    </div>
                    <div className="flex justify-between gap-2 rounded bg-slate-50 p-2">
                      <dt className="font-bold text-slate-600">Location</dt>
                      <dd className="text-right text-slate-700">{r.where}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-block rounded-xl bg-slate-900 px-8 py-4 text-sm font-bold text-white transition hover:bg-slate-800"
          >
            ← Back to website
          </Link>
        </div>
      </section>
    </div>
  );
}
