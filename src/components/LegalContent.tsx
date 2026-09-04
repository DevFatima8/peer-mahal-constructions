export type LegalSection = {
  heading: string;
  headingUrdu: string;
  paragraphs: string[];
  paragraphsUrdu: string[];
  bullets?: string[];
  bulletsUrdu?: string[];
};

export default function LegalContent({
  sections,
  updated,
}: {
  sections: LegalSection[];
  updated: string;
}) {
  return (
    <section className="section-pad">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[260px_1fr]">
        <aside className="lg:sticky lg:top-28 lg:h-fit">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-700">
              On this page
            </p>
            <p className="urdu text-sm text-slate-600">فہرست</p>
            <ol className="mt-4 space-y-2 text-sm">
              {sections.map((s, i) => (
                <li key={s.heading}>
                  <a
                    href={`#sec-${i + 1}`}
                    className="text-slate-600 transition hover:text-amber-700"
                  >
                    {i + 1}. {s.heading}
                  </a>
                </li>
              ))}
            </ol>
            <p className="mt-5 border-t border-slate-200 pt-4 text-xs text-slate-500">
              Last updated: {updated}
              <span className="urdu block">آخری تازہ کاری</span>
            </p>
          </div>
        </aside>

        <div className="space-y-10">
          {sections.map((s, i) => (
            <article
              key={s.heading}
              id={`sec-${i + 1}`}
              className="scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:p-8"
            >
              <h2 className="text-2xl font-black text-slate-900">
                <span className="mr-2 text-amber-600">{i + 1}.</span>
                {s.heading}
              </h2>
              <p className="urdu mt-1 text-lg text-amber-700">{s.headingUrdu}</p>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700">
                {s.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              {s.bullets && (
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {s.bullets.map((b, bi) => (
                    <li
                      key={b}
                      className="flex flex-col gap-1 rounded-lg bg-slate-50 p-3 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <span>
                        <span className="mr-2 text-amber-600">▪</span>
                        {b}
                      </span>
                      {s.bulletsUrdu?.[bi] && (
                        <span className="urdu-inline text-xs text-slate-500">
                          {s.bulletsUrdu[bi]}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              )}
              <div className="urdu mt-5 space-y-3 border-r-4 border-amber-500 bg-amber-50/60 p-5 text-sm leading-loose text-slate-700">
                {s.paragraphsUrdu.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
