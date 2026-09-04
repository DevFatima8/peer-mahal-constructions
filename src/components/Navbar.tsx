"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { navLinks, site } from "@/lib/site";

/**
 * `logo` server component se aata hai (layout.tsx se), kyunke logo file
 * dhoondne ke liye node:fs chahiye jo client component mein nahi chalta.
 */
export default function Navbar({ logo }: { logo: ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50">
      {/* Top utility bar */}
      <div className="hidden bg-slate-900 text-slate-300 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <span className="text-amber-500">📍</span> City Peer Mahal, Punjab, Pakistan
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-amber-500">🕒</span> {site.hours}
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a href={`tel:${site.phoneIntl}`} className="hover:text-amber-400">
              📞 {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="hover:text-amber-400">
              ✉️ {site.email}
            </a>
            <span className="urdu-inline text-amber-400">{site.taglineUrdu}</span>
          </div>
        </div>
      </div>

      <nav
        className={`border-b transition-all ${
          scrolled
            ? "border-slate-200 bg-white/95 shadow-md backdrop-blur"
            : "border-transparent bg-white"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
          {logo}

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.slice(0, 4).map((l) => {
              const active = pathname === l.href;
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`rounded-md px-3 py-2 text-sm font-semibold transition ${
                      active
                        ? "bg-amber-50 text-amber-700"
                        : "text-slate-700 hover:bg-slate-100 hover:text-amber-700"
                    }`}
                  >
                    {l.label}
                    <span className="urdu-inline ml-1.5 text-[11px] text-slate-400">{l.urdu}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${site.phoneIntl}`}
              className="hidden rounded-lg border border-amber-600 px-4 py-2.5 text-sm font-bold text-amber-700 transition hover:bg-amber-50 sm:inline-block"
            >
              📞 {site.phone}
            </a>
            <Link
              href="/contact"
              className="hidden rounded-lg bg-amber-600 px-5 py-2.5 text-sm font-bold text-white shadow transition hover:bg-amber-700 xl:inline-block"
            >
              Get Free Quote
            </Link>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-300 text-slate-800 lg:hidden"
            >
              <span className="text-xl">{open ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-slate-200 bg-white lg:hidden">
            <ul className="mx-auto max-w-7xl px-4 py-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`flex items-center justify-between rounded-md px-3 py-3 text-sm font-semibold ${
                      pathname === l.href ? "bg-amber-50 text-amber-700" : "text-slate-700"
                    }`}
                  >
                    <span>{l.label}</span>
                    <span className="urdu-inline text-xs text-slate-500">{l.urdu}</span>
                  </Link>
                </li>
              ))}
              <li className="mt-2">
                <Link
                  href="/contact"
                  className="block rounded-lg bg-amber-600 px-4 py-3 text-center text-sm font-bold text-white"
                >
                  Get Free Quote / مفت تخمینہ
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
