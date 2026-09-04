"use client";

import { useState } from "react";
import { faqs } from "@/lib/site";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto mt-10 max-w-4xl divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition hover:bg-slate-50"
              aria-expanded={isOpen}
            >
              <span>
                <span className="block text-base font-bold text-slate-900">{f.q}</span>
                <span className="urdu mt-1 block text-sm text-amber-700">{f.qUrdu}</span>
              </span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-lg font-bold transition ${
                  isOpen ? "rotate-45 bg-amber-600 text-white" : "bg-slate-100 text-slate-700"
                }`}
              >
                +
              </span>
            </button>
            {isOpen && (
              <div className="border-t border-slate-100 bg-slate-50/60 px-5 py-5">
                <p className="text-sm leading-relaxed text-slate-700">{f.a}</p>
                <p className="urdu mt-3 text-sm text-slate-600">{f.aUrdu}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
