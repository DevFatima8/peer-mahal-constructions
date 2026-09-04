import Link from "next/link";
import { site } from "@/lib/site";
import { resolveImageUrl } from "@/lib/images";

export default function CtaBand() {
  const bg = resolveImageUrl(["cta-bg", "hero"]);
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={bg ? { backgroundImage: `url("${bg}")` } : undefined}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-slate-950/85" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 lg:py-20">
        <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl">
              Planning a construction project? Get a free site visit &amp; cost estimate.
            </h2>
            <p className="urdu mt-3 text-lg text-amber-400">
              کیا آپ تعمیر کا ارادہ رکھتے ہیں؟ مفت سائٹ وزٹ اور لاگت کا تخمینہ حاصل کریں۔
            </p>
            <p className="mt-4 max-w-2xl text-slate-300">
              Talk directly to our engineering team. We will visit your site, understand your
              requirement and hand you a transparent, item-wise BOQ — free of charge.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-[#25D366] px-6 py-4 text-center text-base font-extrabold text-white shadow-lg transition hover:bg-[#1ebe5b]"
            >
              WhatsApp Now — {site.phone}
            </a>
            <a
              href={`tel:${site.phoneIntl}`}
              className="rounded-xl bg-amber-600 px-6 py-4 text-center text-base font-extrabold text-white shadow-lg transition hover:bg-amber-700"
            >
              Call {site.phone}
            </a>
            <Link
              href="/contact"
              className="rounded-xl border border-slate-500 px-6 py-4 text-center text-base font-bold text-white transition hover:bg-white/10"
            >
              Request Free Quote / مفت تخمینہ
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
