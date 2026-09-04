import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Logo from "@/components/Logo";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "Peer Mahal Construction | Civil Construction, Structural Design & Project Management",
    template: "%s | Peer Mahal Construction",
  },
  description:
    "Peer Mahal Construction (Seval Engineer Company) is a professional civil construction and engineering firm in City Peer Mahal, Punjab. Civil construction, structural design, project management, site supervision, BOQ & cost estimation.",
  keywords: [
    "Peer Mahal Construction",
    "construction company Peer Mahal",
    "civil construction Pakistan",
    "structural design engineer",
    "BOQ cost estimation",
    "site supervision Toba Tek Singh",
    "Seval Engineer Company",
  ],
  icons: {
    icon: [
      { url: "/content/company-logo.jpeg" },
      { url: "/content/company-logo.jpeg", type: "image/jpeg" },
    ],
    shortcut: ["/content/company-logo.jpeg"],
    apple: [
      { url: "/content/company-logo.jpeg" },
    ],
  },
  openGraph: {
    title: "Peer Mahal Construction | Build Strong. Build Safe. Build Once.",
    description:
      "Civil construction, structural design, project management, site supervision, BOQ & cost estimation in City Peer Mahal, Punjab, Pakistan.",
    url: site.url,
    siteName: site.name,
    type: "website",
    locale: "en_PK",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/content/company-logo.jpeg" type="image/jpeg" />
        <link rel="shortcut icon" href="/content/company-logo.jpeg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/content/company-logo.jpeg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Noto+Nastaliq+Urdu:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-slate-900 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "GeneralContractor",
              name: site.name,
              legalName: site.legalName,
              url: site.url,
              telephone: site.phoneIntl,
              email: site.email,
              founder: { "@type": "Person", name: site.owner, jobTitle: site.ownerTitle },
              address: {
                "@type": "PostalAddress",
                streetAddress: "Main Road",
                addressLocality: "Peer Mahal",
                addressRegion: "Punjab",
                addressCountry: "PK",
              },
              areaServed: "Punjab, Pakistan",
              slogan: site.tagline,
            }),
          }}
        />
        <Navbar logo={<Logo variant="header" />} />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
