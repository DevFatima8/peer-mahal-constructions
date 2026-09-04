export default function SectionHeading({
  eyebrow,
  title,
  titleUrdu,
  text,
  textUrdu,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  titleUrdu?: string;
  text?: string;
  textUrdu?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  const centered = align === "center";
  return (
    <div className={`${centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}>
      {eyebrow && (
        <span className="inline-block rounded-full bg-amber-500/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-4 text-3xl font-black leading-tight tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {titleUrdu && (
        <p
          className={`urdu mt-2 text-lg ${light ? "text-amber-400" : "text-amber-700"} ${
            centered ? "text-center" : ""
          }`}
        >
          {titleUrdu}
        </p>
      )}
      <div className={`hairline mt-4 h-px w-full ${centered ? "" : "max-w-xs"}`} />
      {text && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            light ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {text}
        </p>
      )}
      {textUrdu && (
        <p
          className={`urdu mt-2 text-sm ${light ? "text-slate-400" : "text-slate-500"} ${
            centered ? "text-center" : ""
          }`}
        >
          {textUrdu}
        </p>
      )}
    </div>
  );
}
