import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import Faq from "@/components/Faq";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us — Free Site Visit & Cost Estimate",
  description:
    "Contact Peer Mahal Construction (Seval Engineer Company) in City Peer Mahal. Call or WhatsApp 03006522750 for a free site visit, structural design consultation, BOQ and construction cost estimate.",
};

const contactCards = [
  {
    icon: "📞",
    title: "Call Us",
    urdu: "کال کریں",
    lines: [site.phone, "Mon – Sat, 8:00 AM – 7:00 PM"],
    href: `tel:${site.phoneIntl}`,
    cta: "Call Now",
  },
  {
    icon: "💬",
    title: "WhatsApp",
    urdu: "واٹس ایپ",
    lines: [site.phone, "Send plot size, photos & drawings"],
    href: `https://wa.me/${site.whatsapp}`,
    cta: "Chat Now",
  },
  {
    icon: "✉️",
    title: "Email",
    urdu: "ای میل",
    lines: [site.email, "Reply within one working day"],
    href: `mailto:${site.email}`,
    cta: "Send Email",
  },
  {
    icon: "📍",
    title: "Head Office",
    urdu: "مرکزی دفتر",
    lines: ["Main Road, City Peer Mahal", "District Toba Tek Singh, Punjab"],
    href: "https://www.google.com/maps/search/?api=1&query=Peer+Mahal+Toba+Tek+Singh+Punjab",
    cta: "Open in Maps",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact"
        title="Let's Discuss Your Construction Project"
        titleUrdu="آئیے آپ کے تعمیراتی منصوبے پر بات کرتے ہیں"
        subtitle="Call, WhatsApp or fill the form below. Our engineer will contact you, arrange a free site visit and prepare a transparent, item-wise cost estimate for your project."
        subtitleUrdu="کال کریں، واٹس ایپ کریں یا نیچے دیا گیا فارم پُر کریں۔ ہمارا انجینئر آپ سے رابطہ کرے گا، مفت سائٹ وزٹ کرے گا اور شفاف تخمینہ تیار کرے گا۔"
        image="commercial"
      />

      {/* Contact cards */}
      <section className="border-b border-slate-200 bg-slate-50 py-12">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 md:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((c) => (
            <a
              key={c.title}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-amber-400 hover:shadow-lg"
            >
              <span className="text-3xl">{c.icon}</span>
              <h3 className="mt-4 text-lg font-bold text-slate-900">{c.title}</h3>
              <p className="urdu text-base text-amber-700">{c.urdu}</p>
              <div className="mt-3 flex-1 space-y-1 text-sm text-slate-600">
                {c.lines.map((l) => (
                  <p key={l}>{l}</p>
                ))}
              </div>
              <span className="mt-4 text-sm font-bold text-amber-700 group-hover:text-amber-900">
                {c.cta} →
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Form + info */}
      <section className="section-pad">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-[1.15fr_1fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-lg lg:p-9">
            <SectionHeading
              align="left"
              eyebrow="Request a Quote"
              title="Get Your Free Cost Estimate"
              titleUrdu="مفت لاگت کا تخمینہ حاصل کریں"
              text="Fill in the details below. The more information you share, the more accurate our estimate will be."
              textUrdu="نیچے تفصیلات درج کریں۔ آپ جتنی زیادہ معلومات دیں گے، تخمینہ اتنا ہی درست ہوگا۔"
            />
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl bg-slate-900 p-7 text-white">
              <h3 className="text-xl font-black">Head Office Details</h3>
              <p className="urdu text-base text-amber-400">مرکزی دفتر کی تفصیلات</p>
              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="font-bold text-amber-500">Company</dt>
                  <dd className="text-slate-300">
                    {site.name} — {site.legalName}
                  </dd>
                  <dd className="urdu text-slate-400">
                    {site.nameUrdu} — {site.legalNameUrdu}
                  </dd>
                </div>
                <div>
                  <dt className="font-bold text-amber-500">Owner / CEO</dt>
                  <dd className="text-slate-300">{site.owner}</dd>
                  <dd className="urdu text-slate-400">{site.ownerUrdu}</dd>
                </div>
                <div>
                  <dt className="font-bold text-amber-500">Address</dt>
                  <dd className="text-slate-300">{site.address}</dd>
                  <dd className="urdu text-slate-400">{site.addressUrdu}</dd>
                </div>
                <div>
                  <dt className="font-bold text-amber-500">Phone / WhatsApp</dt>
                  <dd className="text-slate-300">{site.phone}</dd>
                </div>
                <div>
                  <dt className="font-bold text-amber-500">Email</dt>
                  <dd className="text-slate-300">{site.email}</dd>
                </div>
                <div>
                  <dt className="font-bold text-amber-500">Working Hours</dt>
                  <dd className="text-slate-300">{site.hours}</dd>
                  <dd className="urdu text-slate-400">{site.hoursUrdu}</dd>
                </div>
              </dl>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block rounded-xl bg-[#25D366] px-6 py-3.5 text-center text-sm font-extrabold text-white"
              >
                WhatsApp {site.phone}
              </a>
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
              <iframe
                title="Peer Mahal Construction location map"
                src="https://www.google.com/maps?q=Peer%20Mahal%2C%20Toba%20Tek%20Singh%2C%20Punjab%2C%20Pakistan&output=embed"
                width="100%"
                height="320"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              />
            </div>

            <div className="rounded-3xl border border-amber-200 bg-amber-50 p-7">
              <h3 className="text-lg font-black text-slate-900">
                What to prepare before you call
              </h3>
              <p className="urdu text-base text-amber-800">کال سے پہلے کیا تیار رکھیں</p>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                {[
                  ["Plot size (marla / kanal / sq ft)", "پلاٹ کا سائز (مرلہ / کنال / مربع فٹ)"],
                  ["Exact location or nearest landmark", "درست مقام یا قریبی نشانی"],
                  ["Number of floors required", "مطلوبہ منزلوں کی تعداد"],
                  ["Approximate budget range", "تقریبی بجٹ"],
                  ["Existing map or drawings (if any)", "موجودہ نقشہ (اگر ہو)"],
                  ["Expected start date", "کام شروع کرنے کی متوقع تاریخ"],
                ].map(([en, ur]) => (
                  <li key={en} className="flex items-start justify-between gap-3">
                    <span>
                      <span className="mr-2 text-amber-700">✔</span>
                      {en}
                    </span>
                    <span className="urdu-inline text-xs text-slate-600">{ur}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-slate-50">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="Before You Ask"
            title="Common Questions from New Clients"
            titleUrdu="نئے صارفین کے عام سوالات"
          />
          <Faq />
        </div>
      </section>
    </>
  );
}

/** Re-check the public/images folder every 5 minutes so replaced photos appear without a rebuild. */
export const revalidate = 300;
