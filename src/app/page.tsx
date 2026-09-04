import Link from "next/link";
import SiteImage from "@/components/SiteImage";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import {
  clientSegments,
  processSteps,
  services,
  site,
  stats,
  testimonials,
  whyUs,
} from "@/lib/site";

/**
 * Gallery slots with dedicated local images in public/content/
 */
const gallery = [
  { slot: ["residential-villa", "project-1"], title: "Residential Villa", urdu: "رہائشی مکان", cat: "Housing" },
  { slot: ["commercial-plaza", "project-2"], title: "Commercial Plaza", urdu: "تجارتی پلازہ", cat: "Commercial" },
  { slot: ["industrial-warehouse", "project-3"], title: "Factory & Warehouse", urdu: "فیکٹری و گودام", cat: "Industrial" },
  { slot: ["road-bridge", "project-4"], title: "Road & Bridge Works", urdu: "سڑک و پل", cat: "Infrastructure" },
  { slot: ["site-inspection", "project-5"], title: "Site Supervision", urdu: "سائٹ نگرانی", cat: "Engineering" },
  { slot: ["architectural-blueprints", "project-6"], title: "Structural Drawings", urdu: "ساختی نقشے", cat: "Design" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950">
        <SiteImage
          slot={["hero-construction", "hero"]}
          alt="Peer Mahal Construction site with engineers and cranes"
          fill
          priority
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 lg:py-36">
          <div className="fade-up max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
              ★ Since {site.established} · {site.legalName}
            </span>
            <h1 className="mt-6 text-4xl font-black leading-[1.1] text-white sm:text-5xl lg:text-6xl">
              Building Trust,{" "}
              <span className="text-amber-500">Concrete &amp; Communities</span> in Peer Mahal
            </h1>
            <p className="urdu mt-4 text-xl leading-loose text-amber-400 lg:text-2xl">
              پیر محل کنسٹرکشن — اعتماد، مضبوطی اور معیار کی بنیاد پر تعمیر
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 lg:text-lg">
              Peer Mahal Construction, operating under {site.legalName}, is a full-service civil
              engineering and construction firm. From house construction and grey structure to
              commercial plazas, factories, roads and public infrastructure — every project is
              engineered, supervised and delivered by qualified professionals.
            </p>
            <p className="urdu mt-4 max-w-2xl text-sm leading-loose text-slate-300 lg:text-base">
              گھر کی تعمیر، گرے اسٹرکچر، کمرشل پلازہ، فیکٹری، سڑکیں اور سرکاری منصوبے — ہر کام
              تجربہ کار سول انجینئرز کی نگرانی میں، شفاف تخمینے اور طے شدہ وقت کے اندر مکمل کیا
              جاتا ہے۔
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-xl bg-amber-600 px-7 py-4 text-base font-extrabold text-white shadow-lg transition hover:bg-amber-700"
              >
                Get Free Estimate
              </Link>
              <Link
                href="/services"
                className="rounded-xl border border-white/30 bg-white/5 px-7 py-4 text-base font-bold text-white backdrop-blur transition hover:bg-white/15"
              >
                Explore Our Services
              </Link>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-[#25D366] px-7 py-4 text-base font-extrabold text-white shadow-lg transition hover:bg-[#1ebe5b]"
              >
                WhatsApp {site.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="relative border-t border-white/10 bg-slate-900/80 backdrop-blur">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center lg:text-left">
                <div className="text-3xl font-black text-amber-500 lg:text-4xl">{s.value}</div>
                <div className="mt-1 text-sm font-semibold text-white">{s.label}</div>
                <div className="urdu text-xs text-slate-400 lg:text-right">{s.urdu}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-10 md:grid-cols-3">
          {[
            {
              icon: "📋",
              t: "Written Agreement & BOQ",
              u: "تحریری معاہدہ اور بی او کیو",
              d: "Every rupee documented before work begins.",
            },
            {
              icon: "🧪",
              t: "Lab-Tested Material",
              u: "لیب ٹیسٹ شدہ میٹریل",
              d: "Concrete cubes, steel grade and brick class verified.",
            },
            {
              icon: "📆",
              t: "Deadline Commitment",
              u: "وقت کی پابندی",
              d: "Milestone schedule shared and tracked weekly.",
            },
          ].map((f) => (
            <div
              key={f.t}
              className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <span className="text-3xl">{f.icon}</span>
              <div>
                <h3 className="text-base font-bold text-slate-900">{f.t}</h3>
                <p className="urdu text-sm text-amber-700">{f.u}</p>
                <p className="mt-1 text-sm text-slate-600">{f.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="section-pad">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <SiteImage
                slot="about-team"
                alt="Peer Mahal Construction engineering team reviewing drawings"
                width={900}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 left-6 hidden rounded-2xl bg-amber-600 px-8 py-6 text-white shadow-xl sm:block">
              <div className="text-4xl font-black">15+</div>
              <div className="text-sm font-semibold">Years of Engineering Excellence</div>
              <div className="urdu text-xs text-amber-100">سال کا انجینئرنگ تجربہ</div>
            </div>
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Who We Are"
              title="A Civil Engineering Firm — Not Just a Labour Contractor"
              titleUrdu="ہم صرف ٹھیکیدار نہیں، ایک انجینئرنگ ادارہ ہیں"
              text={`${site.name} is the construction arm of ${site.legalName}, founded and led by ${site.owner}. We combine design intelligence, disciplined site management and honest costing so that our clients get a building that is structurally safe, functionally efficient and financially predictable.`}
              textUrdu="پیر محل کنسٹرکشن، سیوال انجینئر کمپنی کا تعمیراتی شعبہ ہے جس کی بنیاد محمد عمران سہیل نے رکھی۔ ہم ڈیزائن، نظم و ضبط اور ایماندارانہ تخمینے کو یکجا کرتے ہیں تاکہ آپ کو محفوظ، مضبوط اور کفایتی عمارت مل سکے۔"
            />
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                ["Registered engineering practice", "رجسٹرڈ انجینئرنگ ادارہ"],
                ["In-house design & structural team", "اپنی ڈیزائن اور اسٹرکچرل ٹیم"],
                ["Turnkey and labour-rate options", "ٹرن کی اور لیبر ریٹ دونوں سہولت"],
                ["Weekly photographic reporting", "ہفتہ وار تصویری رپورٹنگ"],
                ["Safety-compliant work sites", "حفاظتی اصولوں کے مطابق سائٹس"],
                ["1 year post-handover support", "حوالگی کے بعد ایک سال سپورٹ"],
              ].map(([en, ur]) => (
                <li
                  key={en}
                  className="flex items-start gap-2 rounded-lg bg-slate-50 p-3 text-sm text-slate-700"
                >
                  <span className="mt-0.5 text-amber-600">✔</span>
                  <span>
                    {en}
                    <span className="urdu block text-xs text-slate-500">{ur}</span>
                  </span>
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="mt-7 inline-block rounded-xl bg-slate-900 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-slate-800"
            >
              Read CEO Message →
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-pad bg-slate-50">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="Our Expertise"
            title="Complete Construction & Engineering Services"
            titleUrdu="مکمل تعمیراتی اور انجینئرنگ خدمات"
            text="Ten core service lines covering the full lifecycle of a project — from the first structural calculation to the final handover inspection."
            textUrdu="دس بنیادی خدمات جو منصوبے کے آغاز سے لے کر حتمی حوالگی تک ہر مرحلے کا احاطہ کرتی ہیں۔"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article
                key={s.slug}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-amber-400 hover:shadow-xl"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-amber-50 text-3xl">
                  {s.icon}
                </span>
                <h3 className="mt-5 text-lg font-bold text-slate-900 group-hover:text-amber-700">
                  {s.title}
                </h3>
                <p className="urdu text-base text-amber-700">{s.titleUrdu}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{s.short}</p>
                <p className="urdu mt-2 text-xs leading-loose text-slate-500">{s.shortUrdu}</p>
                <Link
                  href={`/services#${s.slug}`}
                  className="mt-5 text-sm font-bold text-amber-700 hover:text-amber-900"
                >
                  Learn more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="Who We Serve"
            title="Seven Client Categories We Specialise In"
            titleUrdu="سات اقسام کے صارفین جن کے لیے ہم خدمات فراہم کرتے ہیں"
            text="From a single-family home to a government road package, our team scales to the size and compliance level your project demands."
            textUrdu="ایک گھر سے لے کر سرکاری سڑک کے منصوبے تک، ہماری ٹیم ہر سائز اور معیار کے کام کے لیے تیار ہے۔"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {clientSegments.map((c) => (
              <div
                key={c.number}
                className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
              >
                <span className="absolute right-4 top-3 text-5xl font-black text-slate-100">
                  {c.number}
                </span>
                <h3 className="relative text-lg font-bold text-slate-900">{c.title}</h3>
                <p className="urdu relative text-base text-amber-700">{c.titleUrdu}</p>
                <ul className="relative mt-4 space-y-2">
                  {c.items.map((item, idx) => (
                    <li key={item} className="border-b border-dashed border-slate-200 pb-2">
                      <span className="flex items-center justify-between gap-3 text-sm text-slate-700">
                        <span>
                          <span className="mr-2 text-amber-600">▪</span>
                          {item}
                        </span>
                        <span className="urdu-inline text-xs text-slate-500">
                          {c.itemsUrdu[idx]}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="flex flex-col justify-center rounded-2xl bg-gradient-to-br from-amber-600 to-amber-800 p-8 text-white shadow-lg">
              <h3 className="text-2xl font-black">Not sure which category fits you?</h3>
              <p className="urdu mt-2 text-base text-amber-100">
                معلوم نہیں آپ کا کام کس زمرے میں آتا ہے؟
              </p>
              <p className="mt-3 text-sm text-amber-50">
                Send us your plot size, location and budget on WhatsApp. Our engineer will guide you
                free of charge.
              </p>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 rounded-xl bg-white px-6 py-3.5 text-center text-sm font-extrabold text-amber-700 transition hover:bg-amber-50"
              >
                Ask on WhatsApp — {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section-pad bg-slate-900">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            light
            eyebrow="Why Choose Us"
            title="Six Reasons Clients Keep Coming Back"
            titleUrdu="چھ وجوہات جن کی بنا پر صارفین ہم پر اعتماد کرتے ہیں"
            text="Quality is not an accident. It is the result of engineering discipline applied every single day on site."
            textUrdu="معیار اتفاق سے نہیں ملتا، یہ روزانہ کی انجینئرنگ نظم و ضبط کا نتیجہ ہے۔"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((w) => (
              <div
                key={w.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-amber-500/50 hover:bg-white/10"
              >
                <span className="text-3xl">{w.icon}</span>
                <h3 className="mt-4 text-lg font-bold text-white">{w.title}</h3>
                <p className="urdu text-sm text-amber-400">{w.titleUrdu}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{w.text}</p>
                <p className="urdu mt-2 text-xs leading-loose text-slate-400">{w.textUrdu}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="How We Work"
            title="Our Six-Step Construction Process"
            titleUrdu="ہمارا چھ مرحلوں پر مشتمل تعمیراتی طریقہ کار"
            text="A clear, repeatable process that removes guesswork and keeps you informed at every milestone."
            textUrdu="ایک واضح طریقہ کار جو ابہام ختم کرتا ہے اور آپ کو ہر مرحلے پر باخبر رکھتا ہے۔"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((p) => (
              <div
                key={p.step}
                className="relative rounded-2xl border-l-4 border-amber-600 bg-slate-50 p-6 shadow-sm"
              >
                <span className="text-sm font-black tracking-widest text-amber-600">
                  STEP {p.step}
                </span>
                <h3 className="mt-2 text-lg font-bold text-slate-900">{p.title}</h3>
                <p className="urdu text-sm text-amber-700">{p.titleUrdu}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{p.text}</p>
                <p className="urdu mt-2 text-xs leading-loose text-slate-500">{p.textUrdu}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section-pad bg-slate-50">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="Our Work"
            title="Recent Projects & Site Photography"
            titleUrdu="حالیہ منصوبے اور سائٹ کی تصاویر"
            text="A glimpse of the residential, commercial, industrial and infrastructure work delivered by our teams."
            textUrdu="رہائشی، تجارتی، صنعتی اور بنیادی ڈھانچے کے منصوبوں کی ایک جھلک۔"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((g) => (
              <figure
                key={g.title}
                className="group relative overflow-hidden rounded-2xl shadow-md"
              >
                <SiteImage
                  slot={g.slot}
                  alt={g.title}
                  width={700}
                  height={500}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                <figcaption className="absolute bottom-0 w-full p-5">
                  <span className="rounded-full bg-amber-600 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                    {g.cat}
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-white">{g.title}</h3>
                  <p className="urdu text-sm text-amber-300">{g.urdu}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="Client Feedback"
            title="What Our Clients Say"
            titleUrdu="ہمارے صارفین کیا کہتے ہیں"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote
                key={t.name}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div className="text-amber-500">★★★★★</div>
                <p className="mt-4 text-sm leading-relaxed text-slate-700">“{t.text}”</p>
                <p className="urdu mt-3 text-sm leading-loose text-slate-600">”{t.textUrdu}“</p>
                <footer className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-100 text-base font-black text-amber-700">
                    {t.name.split(" ").slice(-1)[0]?.[0]}
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-slate-900">{t.name}</span>
                    <span className="block text-xs text-slate-500">{t.role}</span>
                    <span className="urdu block text-xs text-slate-500">{t.roleUrdu}</span>
                  </span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-slate-50">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            titleUrdu="اکثر پوچھے جانے والے سوالات"
          />
          <Faq />
        </div>
      </section>

      <CtaBand />
    </>
  );
}

/** Re-check the public/images folder every 5 minutes so replaced photos appear without a rebuild. */
export const revalidate = 300;
