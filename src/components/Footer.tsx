import Link from "next/link";
import { navLinks, services, site } from "@/lib/site";
import Logo from "@/components/Logo";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="footer" />
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              A professional civil engineering and construction firm based in City Peer Mahal,
              delivering structurally safe, cost-controlled and on-time projects since{" "}
              {site.established}.
            </p>
            <p className="urdu mt-3 text-sm text-slate-400">
              پیر محل کنسٹرکشن ایک پیشہ ور سول انجینئرنگ اور تعمیراتی ادارہ ہے جو مضبوط، محفوظ اور
              وقت پر مکمل ہونے والے منصوبے فراہم کرتا ہے۔
            </p>
            <div className="mt-5 flex gap-3">
              {["f", "in", "yt", "x"].map((s) => (
                <span
                  key={s}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-xs font-bold uppercase text-slate-300"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">
              Quick Links <span className="urdu-inline text-amber-500">/ فوری روابط</span>
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="flex items-center justify-between text-slate-400 transition hover:text-amber-400"
                  >
                    <span>› {l.label}</span>
                    <span className="urdu-inline text-xs">{l.urdu}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">
              Our Services <span className="urdu-inline text-amber-500">/ خدمات</span>
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.slice(0, 8).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="text-slate-400 transition hover:text-amber-400"
                  >
                    › {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">
              Contact <span className="urdu-inline text-amber-500">/ رابطہ</span>
            </h3>
            <ul className="mt-4 space-y-4 text-sm text-slate-400">
              <li>
                <span className="block font-semibold text-white">Head Office</span>
                {site.address}
                <span className="urdu mt-1 block">{site.addressUrdu}</span>
              </li>
              <li>
                <span className="block font-semibold text-white">Phone / WhatsApp</span>
                <a href={`tel:${site.phoneIntl}`} className="hover:text-amber-400">
                  {site.phone}
                </a>
              </li>
              <li>
                <span className="block font-semibold text-white">Email</span>
                <a href={`mailto:${site.email}`} className="hover:text-amber-400">
                  {site.email}
                </a>
              </li>
              <li>
                <span className="block font-semibold text-white">Working Hours</span>
                {site.hours}
                <br />
                Sunday: Emergency &amp; site visits only
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-slate-500 md:flex-row">
          <p>
            © {year} {site.name} ({site.legalName}). All rights reserved. |{" "}
            <span className="urdu-inline">جملہ حقوق محفوظ ہیں</span>
          </p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-amber-400">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-amber-400">
              Terms &amp; Conditions
            </Link>
            <span>{site.domain}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
