import type { Metadata } from "next";
import SiteImage from "@/components/SiteImage";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import { clientSegments, services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services — Civil Construction, Structural Design & Project Management",
  description:
    "Civil construction, structural design, project management, site supervision, quantity surveying, BOQ & cost estimation, renovation, road & infrastructure works, structural inspection and 3D engineering drawings by Peer Mahal Construction.",
};

const packages = [
  {
    name: "Grey Structure Package",
    urdu: "گرے اسٹرکچر پیکج",
    desc: "Foundation to roof slab with masonry, plaster and conduiting. Ideal for owners who want to do finishing themselves.",
    descUrdu:
      "بنیاد سے چھت تک، چنائی، پلستر اور بجلی کی پائپنگ سمیت۔ ان مالکان کے لیے بہترین جو فنشنگ خود کروانا چاہتے ہیں۔",
    includes: [
      "Excavation & PCC",
      "RCC footing, columns, beams, slab",
      "Brick masonry & plaster",
      "Electrical & plumbing conduiting",
      "Stairs and parapet walls",
    ],
  },
  {
    name: "Turnkey Finishing Package",
    urdu: "مکمل فنشنگ پیکج",
    desc: "Complete finished house or building — flooring, woodwork, paint, sanitary, electrical fittings and elevation.",
    descUrdu:
      "مکمل تیار شدہ گھر یا عمارت — فرش، لکڑی کا کام، رنگ و روغن، سینیٹری، بجلی کی فٹنگ اور ایلیویشن۔",
    includes: [
      "Tile, marble & wooden flooring",
      "Doors, windows, kitchen & wardrobes",
      "Paint, false ceiling & elevation",
      "Sanitary ware & electrical fixtures",
      "Boundary wall, gate & external works",
    ],
  },
  {
    name: "Supervision-Only Package",
    urdu: "صرف نگرانی کا پیکج",
    desc: "You buy the material and hire labour; our engineer controls quality, quantity and schedule on your behalf.",
    descUrdu:
      "آپ میٹریل اور مزدور خود لیں، ہمارا انجینئر آپ کی جانب سے معیار، مقدار اور شیڈول کنٹرول کرے گا۔",
    includes: [
      "Daily / alternate-day site visits",
      "Steel and shuttering inspection",
      "Material quantity verification",
      "Contractor bill checking",
      "Weekly written progress report",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumb="Services"
        title="Our Construction & Engineering Services"
        titleUrdu="ہماری تعمیراتی اور انجینئرنگ خدمات"
        subtitle="Ten specialised service lines delivered by qualified civil engineers — covering design, costing, execution, supervision and inspection for every type of project in and around City Peer Mahal."
        subtitleUrdu="دس مخصوص خدمات جو تجربہ کار سول انجینئرز فراہم کرتے ہیں — ڈیزائن، تخمینہ، تعمیر، نگرانی اور معائنہ، ہر قسم کے منصوبے کے لیے۔"
        image="supervision"
      />

      {/* Service index */}
      <section className="border-b border-slate-200 bg-slate-50 py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-2 px-4">
          {services.map((s) => (
            <a
              key={s.slug}
              href={`#${s.slug}`}
              className="rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-slate-700 transition hover:border-amber-500 hover:text-amber-700"
            >
              {s.icon} {s.title}
            </a>
          ))}
        </div>
      </section>

      {/* Detailed services */}
      <section className="section-pad">
        <div className="mx-auto max-w-7xl space-y-20 px-4">
          {services.map((s, i) => (
            <article
              key={s.slug}
              id={s.slug}
              className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="overflow-hidden rounded-3xl shadow-xl">
                  <SiteImage
                    slot={s.image}
                    alt={s.title}
                    width={900}
                    height={620}
                    className="h-72 w-full object-cover lg:h-96"
                  />
                </div>
              </div>
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-amber-700">
                  Service {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-4 flex items-center gap-3 text-3xl font-black text-slate-900">
                  <span>{s.icon}</span>
                  {s.title}
                </h2>
                <p className="urdu mt-1 text-xl text-amber-700">{s.titleUrdu}</p>
                <p className="mt-4 text-base leading-relaxed text-slate-600">{s.short}</p>
                <p className="urdu mt-3 text-sm leading-loose text-slate-500">{s.shortUrdu}</p>
                <ul className="mt-6 space-y-3">
                  {s.details.map((d, idx) => (
                    <li
                      key={d}
                      className="flex flex-col gap-1 rounded-xl bg-slate-50 p-3.5 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <span className="flex items-start gap-2 text-sm font-medium text-slate-800">
                        <span className="text-amber-600">✔</span>
                        {d}
                      </span>
                      <span className="urdu-inline text-xs text-slate-500">
                        {s.detailsUrdu[idx]}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="rounded-xl bg-amber-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-amber-700"
                  >
                    Request Quote
                  </Link>
                  <a
                    href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
                      `I need details about ${s.title}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-slate-300 px-6 py-3 text-sm font-bold text-slate-800 transition hover:border-amber-500 hover:text-amber-700"
                  >
                    Ask on WhatsApp
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PACKAGES */}
      <section className="section-pad bg-slate-50">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="Engagement Models"
            title="Choose the Package That Suits Your Budget"
            titleUrdu="اپنے بجٹ کے مطابق پیکج منتخب کریں"
            text="We work on labour-rate, with-material (turnkey) and supervision-only models. Final rates are always confirmed after a site visit and BOQ."
            textUrdu="ہم لیبر ریٹ، میٹریل سمیت (ٹرن کی) اور صرف نگرانی — تینوں طریقوں پر کام کرتے ہیں۔ حتمی ریٹ سائٹ وزٹ اور بی او کیو کے بعد طے ہوتا ہے۔"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {packages.map((p, i) => (
              <div
                key={p.name}
                className={`flex flex-col rounded-2xl border p-7 shadow-sm ${
                  i === 1
                    ? "border-amber-500 bg-white ring-2 ring-amber-500/30"
                    : "border-slate-200 bg-white"
                }`}
              >
                {i === 1 && (
                  <span className="mb-3 w-fit rounded-full bg-amber-600 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-black text-slate-900">{p.name}</h3>
                <p className="urdu text-base text-amber-700">{p.urdu}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{p.desc}</p>
                <p className="urdu mt-2 text-xs leading-loose text-slate-500">{p.descUrdu}</p>
                <ul className="mt-5 flex-1 space-y-2 border-t border-slate-100 pt-5 text-sm text-slate-700">
                  {p.includes.map((x) => (
                    <li key={x} className="flex items-start gap-2">
                      <span className="text-amber-600">▪</span> {x}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-6 rounded-xl bg-slate-900 px-6 py-3 text-center text-sm font-bold text-white transition hover:bg-slate-800"
                >
                  Get Detailed Rates
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT SEGMENTS FULL */}
      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="Client Categories"
            title="Who We Work For"
            titleUrdu="ہم کن کے لیے کام کرتے ہیں"
            text="Our service scope is organised into seven client categories so that every client gets exactly the deliverables they need."
            textUrdu="ہماری خدمات سات اقسام میں تقسیم ہیں تاکہ ہر صارف کو وہی سہولت ملے جس کی اسے ضرورت ہے۔"
          />
          <div className="mt-12 space-y-8">
            {clientSegments.map((c, i) => (
              <div
                key={c.number}
                className="grid gap-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:grid-cols-[320px_1fr]"
              >
                <div className={`relative h-56 lg:h-full ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <SiteImage slot={c.image} alt={c.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-slate-950/45" />
                  <span className="absolute left-5 top-4 text-5xl font-black text-white/90">
                    {c.number}
                  </span>
                </div>
                <div className="p-6 lg:p-8">
                  <h3 className="text-2xl font-black text-slate-900">
                    {c.title}
                  </h3>
                  <p className="urdu text-lg text-amber-700">{c.titleUrdu}</p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {c.items.map((item, idx) => (
                      <div
                        key={item}
                        className="rounded-xl border border-slate-100 bg-slate-50 p-3.5"
                      >
                        <p className="text-sm font-semibold text-slate-800">
                          <span className="mr-2 text-amber-600">✔</span>
                          {item}
                        </p>
                        <p className="urdu mt-1 text-xs text-slate-600">{c.itemsUrdu[idx]}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="section-pad bg-slate-900">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            light
            eyebrow="Coverage"
            title="Areas We Serve"
            titleUrdu="ہمارے کام کے علاقے"
            text="Head office in City Peer Mahal with active project teams across central Punjab."
            textUrdu="مرکزی دفتر شہر پیر محل میں، جبکہ ہماری ٹیمیں وسطی پنجاب بھر میں کام کر رہی ہیں۔"
          />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {[
              ["Peer Mahal", "پیر محل"],
              ["Kamalia", "کمالیہ"],
              ["Toba Tek Singh", "ٹوبہ ٹیک سنگھ"],
              ["Gojra", "گوجرہ"],
              ["Faisalabad", "فیصل آباد"],
              ["Jhang", "جھنگ"],
              ["Chichawatni", "چیچہ وطنی"],
              ["Rajana", "رجانہ"],
              ["Shorkot", "شورکوٹ"],
              ["Sahiwal", "ساہیوال"],
            ].map(([en, ur]) => (
              <span
                key={en}
                className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-slate-200"
              >
                {en} <span className="urdu-inline text-xs text-amber-400">{ur}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

/** Re-check the public/images folder every 5 minutes so replaced photos appear without a rebuild. */
export const revalidate = 300;
