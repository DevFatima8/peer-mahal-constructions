import Image from "next/image";
import { resolveImage } from "@/lib/images";

type Props = {
  /** Slot name ("ceo") ya candidates ki list */
  slot: string | string[];
  alt: string;
  className?: string;
  /** Parent ko bharne ke liye (parent par position:relative hona chahiye) */
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
};

/**
 * Website ki har tasveer isi component se lagti hai.
 *
 *  • Pehle `public/images/` mein aapki uploaded file dhoondta hai
 *  • Na mile to IMAGE_LIBRARY ka ONLINE LINK istemal karta hai
 *  • Dono na hon to ek saaf placeholder dikhata hai (layout nahi tootta)
 */
export default function SiteImage({
  slot,
  alt,
  className = "",
  fill = false,
  width = 1200,
  height = 800,
  priority = false,
  sizes,
}: Props) {
  const resolved = resolveImage(slot);

  if (!resolved.found) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-1 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-center ${
          fill ? "absolute inset-0 h-full w-full" : ""
        } ${className}`}
        style={!fill ? { aspectRatio: `${width} / ${height}` } : undefined}
        role="img"
        aria-label={alt}
      >
        <span className="text-3xl">🏗️</span>
        <span className="px-3 text-[11px] font-bold uppercase tracking-widest text-amber-400">
          {resolved.slot}
        </span>
      </div>
    );
  }

  const common = {
    src: resolved.url,
    alt,
    priority,
    className,
  };

  if (fill) {
    return <Image {...common} fill sizes={sizes ?? "100vw"} />;
  }

  return (
    <Image
      {...common}
      width={width}
      height={height}
      sizes={sizes ?? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 900px"}
    />
  );
}
