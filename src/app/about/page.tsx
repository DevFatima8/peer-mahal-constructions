import type { Metadata } from "next";
import SiteImage from "@/components/SiteImage";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import { site, stats, whyUs } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us — Peer Mahal Construction (Seval Engineer Company)",
  description:
    "Learn about Peer Mahal Construction, the construction arm of Seval Engineer Company, founded by Mohammed Imran Sohail in City Peer Mahal. Read the CEO message, our vision, mission, values and team structure.",
};

const milestones = [
  {
    year: "2009",
    t: "Foundation of the practice",
    u: "ادارے کی بنیاد",
    d: "Started as a small structural design consultancy in City Peer Mahal serving local house owners.",
    du: "شہر پیر محل میں ایک چھوٹی ساختی ڈیزائن کنسلٹنسی کے طور پر آغاز۔",
  },
  {
    year: "2013",
    t: "First turnkey housing projects",
    u: "پہلے مکمل رہائشی منصوبے",
    d: "Expanded into complete grey structure and finishing contracts for residential clients.",
    du: "رہائشی صارفین کے لیے مکمل گرے اسٹرکچر اور فنشنگ کے ٹھیکے شروع کیے۔",
  },
  {
    year: "2016",
    t: "Commercial & industrial division",
    u: "تجارتی و صنعتی شعبہ",
    d: "Delivered plazas, shops and factory sheds with pre-engineered steel structures.",
    du: "پلازے، دکانیں اور فیکٹری شیڈ پری انجینئرڈ اسٹیل اسٹرکچر کے ساتھ مکمل کیے۔",
  },
  {
    year: "2019",
    t: "Infrastructure & public works",
    u: "بنیادی ڈھانچہ اور عوامی کام",
    d: "Started road, drainage and water supply packages for public sector and housing societies.",
    du: "سرکاری اداروں اور سوسائٹیز کے لیے سڑک، نکاسیٔ آب اور پانی کے منصوبے شروع کیے۔",
  },
  {
    year: "2022",
    t: "Seval Engineer Company",
    u: "سیوال انجینئر کمپنی",
    d: "Consolidated all operations under Seval Engineer Company with a dedicated QA/QC cell.",
    du: "تمام کام سیوال انجینئر کمپنی کے تحت یکجا کیے اور کوالٹی کنٹرول سیل قائم کیا۔",
  },
  {
    year: "Today",
    t: "450+ completed projects",
    u: "۴۵۰ سے زائد مکمل منصوبے",
    d: "A 40+ member team of engineers, surveyors, supervisors and skilled workers.",
    du: "۴۰ سے زائد انجینئرز، سرویئرز، سپروائزرز اور ہنر مند کارکنوں کی ٹیم۔",
  },
];

const team = [
  {
    role: "Structural Design Cell",
    urdu: "ساختی ڈیزائن شعبہ",
    d: "Civil/structural engineers preparing analysis, design and detailing using ETABS, SAFE and AutoCAD.",
  },
  {
    role: "Quantity Surveying Cell",
    urdu: "کوانٹٹی سروے شعبہ",
    d: "Estimators preparing BOQs, rate analysis, running bills and material reconciliation.",
  },
  {
    role: "Site Execution Teams",
    urdu: "سائٹ ٹیمیں",
    d: "Site engineers, supervisors, masons, steel fixers, shuttering and finishing crews.",
  },
  {
    role: "QA / QC & Safety",
    urdu: "معیار و حفاظت شعبہ",
    d: "Independent inspection of material, concrete testing and site safety compliance.",
  },
];

const values = [
  ["Honesty in measurement and billing", "پیمائش اور بلنگ میں دیانتداری"],
  ["Engineering before construction", "تعمیر سے پہلے انجینئرنگ"],
  ["Respect for the client's budget", "صارف کے بجٹ کا احترام"],
  ["Safety of workers and neighbours", "کارکنوں اور ہمسایوں کی حفاظت"],
  ["Clean, organised and documented sites", "صاف، منظم اور دستاویزی سائٹس"],
  ["Long-term relationships over one-time profit", "وقتی منافع نہیں، دیرپا تعلق"],
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About Us"
        title="About Peer Mahal Construction"
        titleUrdu="پیر محل کنسٹرکشن کے بارے میں"
        subtitle={`${site.name} is the construction and engineering arm of ${site.legalName}, founded and led by ${site.owner}. For more than fifteen years we have been designing, costing, building and supervising projects across City Peer Mahal and central Punjab.`}
        subtitleUrdu="پیر محل کنسٹرکشن، سیوال انجینئر کمپنی کا تعمیراتی و انجینئرنگ شعبہ ہے جس کی قیادت محمد عمران سہیل کر رہے ہیں۔ پندرہ سال سے زائد عرصے سے ہم پیر محل اور وسطی پنجاب میں منصوبے ڈیزائن اور تعمیر کر رہے ہیں۔"
        image="about-team"
      />

      {/* Company overview */}
      <section className="section-pad">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Story"
              title="Engineering Discipline Applied to Everyday Construction"
              titleUrdu="روزمرہ تعمیرات میں انجینئرنگ کا نظم و ضبط"
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
              <p>
                In our region, most construction is still handled by labour contractors without any
                structural calculation, quality testing or written costing. The result is cracked
                slabs, leaking roofs, wasted steel and budgets that double halfway through the job.
              </p>
              <p>
                {site.name} was created to change that. Every project we accept — whether it is a
                five-marla house or a factory shed — begins with a structural design, a written
                specification and an item-wise Bill of Quantities. Nothing is left to guesswork, and
                nothing is hidden from the client.
              </p>
              <p>
                Today we operate as a complete engineering practice: design, estimation, execution,
                supervision and inspection, all under one roof at our head office in City Peer
                Mahal.
              </p>
            </div>
            <div className="urdu mt-6 space-y-3 rounded-2xl border-r-4 border-amber-600 bg-amber-50/60 p-6 text-sm text-slate-700">
              <p>
                ہمارے علاقے میں زیادہ تر تعمیرات بغیر کسی ساختی حساب کتاب، میٹریل ٹیسٹنگ یا تحریری
                تخمینے کے ہوتی ہیں، جس کا نتیجہ دراڑیں، سیلن، سریے کا ضیاع اور بجٹ سے دگنا خرچ ہوتا
                ہے۔
              </p>
              <p>
                پیر محل کنسٹرکشن اسی صورتحال کو بدلنے کے لیے قائم کی گئی۔ ہمارا ہر منصوبہ — چاہے وہ
                پانچ مرلہ کا گھر ہو یا فیکٹری کا شیڈ — ساختی ڈیزائن، تحریری معیار اور تفصیلی بی او
                کیو سے شروع ہوتا ہے۔
              </p>
              <p>
                آج ہم ایک مکمل انجینئرنگ ادارہ ہیں: ڈیزائن، تخمینہ، تعمیر، نگرانی اور معائنہ — سب
                کچھ ایک ہی چھت کے نیچے، شہر پیر محل میں۔
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="overflow-hidden rounded-2xl shadow-lg sm:col-span-2">
              <SiteImage
                slot="about-team"
                alt="Peer Mahal Construction engineering team"
                width={900}
                height={560}
                className="h-full w-full object-cover"
              />
            </div>
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center"
              >
                <div className="text-3xl font-black text-amber-600">{s.value}</div>
                <div className="mt-1 text-sm font-bold text-slate-800">{s.label}</div>
                <div className="urdu text-xs text-slate-500">{s.urdu}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO MESSAGE */}
      <section className="section-pad bg-slate-900">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            light
            eyebrow="Leadership"
            title="Message from the CEO"
            titleUrdu="چیف ایگزیکٹو آفیسر کا پیغام"
          />
          <div className="mt-12 grid items-start gap-10 lg:grid-cols-[380px_1fr]">
            <div className="mx-auto w-full max-w-sm">
              <div className="overflow-hidden rounded-3xl border-4 border-amber-600 shadow-2xl">
                {/*
                  CEO PHOTO — to change it, simply put your picture in
                  public/images/ and name it "ceo" (ceo.jpg, ceo.png, ceo.webp…).
                  Names like owner.jpg, ceo-photo.png or imran.jpg also work.
                */}
                <SiteImage
                  slot="ceo"
                  alt={`${site.owner}, ${site.ownerTitle} of ${site.name}`}
                  width={700}
                  height={880}
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 1024px) 90vw, 380px"
                />
              </div>
              <div className="mt-5 rounded-2xl bg-white/5 p-5 text-center backdrop-blur">
                <h3 className="text-xl font-black text-white">{site.owner}</h3>
                <p className="urdu text-lg text-amber-400">{site.ownerUrdu}</p>
                <p className="mt-1 text-sm font-semibold text-amber-500">{site.ownerTitle}</p>
                <p className="urdu text-xs text-slate-400">{site.ownerTitleUrdu}</p>
                <p className="mt-3 border-t border-white/10 pt-3 text-xs text-slate-400">
                  {site.legalName} · City Peer Mahal
                </p>
                <div className="mt-4 flex justify-center gap-2">
                  <a
                    href={`tel:${site.phoneIntl}`}
                    className="rounded-lg bg-amber-600 px-4 py-2 text-xs font-bold text-white"
                  >
                    Call CEO Office
                  </a>
                  <a
                    href={`https://wa.me/${site.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-[#25D366] px-4 py-2 text-xs font-bold text-white"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur lg:p-10">
              <span className="text-5xl leading-none text-amber-500">“</span>
              <div className="space-y-4 text-base leading-relaxed text-slate-200">
                <p>
                  <strong className="text-white">Assalam-o-Alaikum and warm greetings.</strong> When
                  I started this practice, I had one simple belief: a building is a trust
                  (<em>amanat</em>) placed in the hands of the engineer. People invest the savings
                  of a lifetime into a house, a shop or a factory. They deserve honesty in
                  measurement, safety in structure and clarity in cost.
                </p>
                <p>
                  That belief still runs our company today. We do not begin any project without a
                  structural design and a written Bill of Quantities. We do not pour concrete
                  without checking the steel. We do not close a bill without verifying the actual
                  quantity executed on site. This discipline is the reason clients who built one
                  house with us come back years later for their plaza, their factory or their
                  parents&apos; home.
                </p>
                <p>
                  My team and I personally review every major project. If you are planning to build,
                  I invite you to visit our office in City Peer Mahal or simply send a message on
                  WhatsApp. We will visit your site, listen to your plan and give you an honest
                  opinion — even if that opinion is that you should wait or spend less.
                </p>
                <p className="text-amber-400">
                  Thank you for considering {site.name}. We look forward to building something
                  strong and lasting with you.
                </p>
              </div>

              <div className="urdu mt-8 space-y-4 border-t border-white/10 pt-8 text-sm leading-loose text-slate-300">
                <p>
                  <strong className="text-white">السلام علیکم!</strong> جب میں نے اس ادارے کی بنیاد
                  رکھی تو میرا ایک ہی اصول تھا: عمارت انجینئر کے پاس ایک امانت ہوتی ہے۔ لوگ اپنی
                  زندگی بھر کی جمع پونجی سے گھر، دکان یا فیکٹری بناتے ہیں، اس لیے ان کا حق ہے کہ
                  انہیں پیمائش میں دیانت، ڈھانچے میں حفاظت اور لاگت میں شفافیت ملے۔
                </p>
                <p>
                  آج بھی ہمارا ادارہ اسی اصول پر چلتا ہے۔ ہم کوئی منصوبہ ساختی ڈیزائن اور تحریری بی
                  او کیو کے بغیر شروع نہیں کرتے۔ ہم سریے کی جانچ کیے بغیر کنکریٹ نہیں ڈالتے اور
                  حقیقی پیمائش کی تصدیق کے بغیر کوئی بل منظور نہیں کرتے۔ یہی وجہ ہے کہ ہمارے صارفین
                  برسوں بعد اپنے پلازہ، فیکٹری یا والدین کے گھر کے لیے دوبارہ ہمارے پاس آتے ہیں۔
                </p>
                <p>
                  میں اور میری ٹیم ہر بڑے منصوبے کا خود جائزہ لیتے ہیں۔ اگر آپ تعمیر کا ارادہ رکھتے
                  ہیں تو شہر پیر محل میں ہمارے دفتر تشریف لائیں یا واٹس ایپ پر پیغام بھیجیں۔ ہم آپ
                  کی سائٹ کا دورہ کریں گے، آپ کا منصوبہ سنیں گے اور ایمانداری سے مشورہ دیں گے —
                  چاہے وہ مشورہ یہ ہو کہ ابھی انتظار کریں یا کم خرچ کریں۔
                </p>
                <p className="text-amber-400">
                  پیر محل کنسٹرکشن پر اعتماد کرنے کا شکریہ۔ ہم آپ کے ساتھ مضبوط اور دیرپا تعمیر کے
                  منتظر ہیں۔
                </p>
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-lg font-black text-white">{site.owner}</p>
                <p className="text-sm text-amber-500">
                  {site.ownerTitle}, {site.legalName}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISION / MISSION / VALUES */}
      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="Our Direction"
            title="Vision, Mission & Core Values"
            titleUrdu="ہمارا وژن، مشن اور بنیادی اقدار"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border-t-4 border-amber-600 bg-slate-50 p-7">
              <span className="text-3xl">🎯</span>
              <h3 className="mt-3 text-xl font-black text-slate-900">Our Vision</h3>
              <p className="urdu text-base text-amber-700">ہمارا وژن</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                To become the most trusted engineering-led construction company of central Punjab,
                where every structure we deliver is safe for generations.
              </p>
              <p className="urdu mt-2 text-xs leading-loose text-slate-500">
                وسطی پنجاب کی سب سے قابلِ اعتماد انجینئرنگ پر مبنی تعمیراتی کمپنی بننا، جس کی ہر
                عمارت نسلوں تک محفوظ رہے۔
              </p>
            </div>
            <div className="rounded-2xl border-t-4 border-slate-900 bg-slate-50 p-7">
              <span className="text-3xl">🚀</span>
              <h3 className="mt-3 text-xl font-black text-slate-900">Our Mission</h3>
              <p className="urdu text-base text-amber-700">ہمارا مشن</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                To deliver structurally sound, cost-transparent and on-schedule construction by
                combining qualified engineering supervision with tested material and skilled
                craftsmanship.
              </p>
              <p className="urdu mt-2 text-xs leading-loose text-slate-500">
                تجربہ کار انجینئرنگ نگرانی، ٹیسٹ شدہ میٹریل اور ہنر مند کاریگری کے ذریعے مضبوط، شفاف
                اور وقت پر مکمل تعمیر فراہم کرنا۔
              </p>
            </div>
            <div className="rounded-2xl border-t-4 border-amber-600 bg-slate-50 p-7">
              <span className="text-3xl">💠</span>
              <h3 className="mt-3 text-xl font-black text-slate-900">Core Values</h3>
              <p className="urdu text-base text-amber-700">بنیادی اقدار</p>
              <ul className="mt-4 space-y-2.5">
                {values.map(([en, ur]) => (
                  <li key={en} className="text-sm text-slate-700">
                    <span className="mr-2 text-amber-600">✔</span>
                    {en}
                    <span className="urdu block text-xs text-slate-500">{ur}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section-pad bg-slate-50">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="Our Journey"
            title="Milestones Over the Years"
            titleUrdu="گزرے برسوں کے اہم سنگِ میل"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {milestones.map((m) => (
              <div
                key={m.year}
                className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <span className="rounded-full bg-amber-600 px-4 py-1 text-xs font-black tracking-widest text-white">
                  {m.year}
                </span>
                <h3 className="mt-4 text-lg font-bold text-slate-900">{m.t}</h3>
                <p className="urdu text-sm text-amber-700">{m.u}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{m.d}</p>
                <p className="urdu mt-2 text-xs leading-loose text-slate-500">{m.du}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM STRUCTURE */}
      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="Our Team"
            title="How Our Organisation Is Structured"
            titleUrdu="ہمارے ادارے کا نظام"
            text="Four specialised cells work in parallel on every project, each reporting directly to the CEO office."
            textUrdu="ہر منصوبے پر چار مخصوص شعبے مل کر کام کرتے ہیں، جو براہِ راست سی ای او آفس کو رپورٹ کرتے ہیں۔"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {team.map((t) => (
              <div
                key={t.role}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-amber-400 hover:shadow-lg"
              >
                <h3 className="text-base font-bold text-slate-900">{t.role}</h3>
                <p className="urdu text-sm text-amber-700">{t.urdu}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{t.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyUs.slice(0, 3).map((w) => (
              <div key={w.title} className="rounded-2xl bg-slate-50 p-6">
                <span className="text-2xl">{w.icon}</span>
                <h3 className="mt-3 text-base font-bold text-slate-900">{w.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{w.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-block rounded-xl bg-amber-600 px-8 py-4 text-sm font-extrabold text-white transition hover:bg-amber-700"
            >
              View All Services / تمام خدمات دیکھیں
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

/** Re-check the public/images folder every 5 minutes so replaced photos appear without a rebuild. */
export const revalidate = 300;
