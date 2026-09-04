import Link from "next/link";
import { resolveImageUrl } from "@/lib/images";

export default function PageHero({
  title,
  titleUrdu,
  subtitle,
  subtitleUrdu,
  image = "cta-bg",
  crumb,
}: {
  title: string;
  titleUrdu: string;
  subtitle: string;
  subtitleUrdu?: string;
  image?: string;
  crumb: string;
}) {
  const bg = resolveImageUrl([image, "cta-bg", "hero"]);
  return (
    <section className="relative overflow-hidden bg-slate-900">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={bg ? { backgroundImage: `url("${bg}")` } : undefined}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-900/50" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 lg:py-28">
        <nav className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-amber-500">
          <Link href="/" className="hover:text-amber-300">
            Home
          </Link>
          <span className="mx-2 text-slate-500">/</span>
          <span className="text-slate-300">{crumb}</span>
        </nav>
        <h1 className="max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="urdu mt-3 max-w-3xl text-xl text-amber-400 lg:text-2xl">{titleUrdu}</p>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 lg:text-lg">
          {subtitle}
        </p>
        {subtitleUrdu && (
          <p className="urdu mt-3 max-w-2xl text-sm text-slate-400 lg:text-base">{subtitleUrdu}</p>
        )}
      </div>
    </section>
  );
}
