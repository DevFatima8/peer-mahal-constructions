import Image from "next/image";
import Link from "next/link";
import { resolveImage } from "@/lib/images";
import { site } from "@/lib/site";

/**
 * COMPANY LOGO
 * ─────────────────────────────────────────────────────────────────────────
 *  Apna logo lagane ke liye bas file yahan rakh dein:
 *
 *      public/images/logo.png        <- header ke liye (transparent PNG behtar)
 *      public/images/logo-white.png  <- footer ke liye (optional, safed logo)
 *
 *  Extension koi bhi chalega: .png .jpg .jpeg .webp .svg
 *  Naam ye bhi chalte hain: logo, company-logo, brand, peer-mahal-logo
 *
 *  Agar logo file na mile to company ka naam text mein dikhta hai
 *  (website kabhi tooti hui nahi lagti).
 * ───────────────────────────────────────────────────────────────────────── */

export default function Logo({
  variant = "header",
  className = "",
}: {
  variant?: "header" | "footer";
  className?: string;
}) {
  /* Footer par pehle safed logo dhoondte hain, phir aam logo */
  const slots =
    variant === "footer" ? ["logo-white", "logo-light", "logo"] : ["logo", "logo-dark"];

  const logo = resolveImage(slots);
  const isFooter = variant === "footer";

  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={`flex items-center gap-3 ${className}`}
    >
      {logo.found && logo.source === "local" ? (
        <Image
          src={logo.url}
          alt={`${site.name} logo`}
          width={220}
          height={70}
          priority={!isFooter}
          className={`w-auto object-contain ${isFooter ? "h-12" : "h-12 sm:h-14"}`}
        />
      ) : (
        <span className="leading-tight">
          <span
            className={`block font-extrabold tracking-tight ${
              isFooter ? "text-lg text-white" : "text-lg text-slate-900 sm:text-xl"
            }`}
          >
            Peer Mahal <span className="text-amber-600">Construction</span>
          </span>
          <span
            className={`block text-[11px] font-medium uppercase tracking-[0.18em] ${
              isFooter ? "text-amber-500" : "text-amber-600"
            }`}
          >
            {site.legalName}
          </span>
        </span>
      )}
    </Link>
  );
}
