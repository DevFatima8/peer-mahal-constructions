import { site } from "@/lib/site";

export default function WhatsAppButton() {
  const text = encodeURIComponent(
    "Assalam o Alaikum! I visited peermahalconstruction.com and I would like to discuss a construction project."
  );
  return (
    <div className="fixed bottom-5 right-4 z-[60] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <a
        href={`tel:${site.phoneIntl}`}
        aria-label="Call now"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-600 text-xl text-white shadow-lg ring-4 ring-amber-600/20 transition hover:scale-105 hover:bg-amber-700"
      >
        📞
      </a>
      <a
        href={`https://wa.me/${site.whatsapp}?text=${text}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="wa-pulse group flex items-center gap-2 rounded-full bg-[#25D366] py-3 pl-3 pr-4 font-bold text-white shadow-xl transition hover:bg-[#1ebe5b]"
      >
        <svg viewBox="0 0 32 32" className="h-7 w-7 fill-white" aria-hidden="true">
          <path d="M16.004 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.6 4.47 1.74 6.41L3.2 28.8l6.56-1.71a12.74 12.74 0 0 0 6.24 1.61h.01c7.05 0 12.79-5.74 12.79-12.8 0-3.42-1.33-6.63-3.75-9.05a12.7 12.7 0 0 0-9.04-3.65Zm0 23.31h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-4.02 1.05 1.07-3.92-.25-.4a10.55 10.55 0 0 1-1.62-5.64c0-5.86 4.77-10.63 10.63-10.63 2.84 0 5.5 1.11 7.51 3.12a10.55 10.55 0 0 1 3.11 7.52c0 5.86-4.77 10.61-10.63 10.61Zm5.83-7.96c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.72.16-.21.32-.82 1.04-1 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.58-.95-.85-1.59-1.89-1.78-2.21-.19-.32-.02-.5.14-.66.15-.15.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.62-.52-.54-.72-.55l-.61-.01c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65s1.14 3.08 1.3 3.29c.16.21 2.24 3.42 5.43 4.8.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.89-.77 2.16-1.52.27-.75.27-1.38.19-1.52-.08-.13-.29-.21-.61-.37Z" />
        </svg>
        <span className="text-sm">
          WhatsApp
          <span className="ml-1 hidden text-xs font-semibold opacity-90 sm:inline">
            {site.phone}
          </span>
        </span>
      </a>
    </div>
  );
}
