import { Outfit } from "next/font/google";
import StyledComponentsRegistry from "./lib/StyledComponentsRegistry";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata = {
  title:
    "Athif Software Solutions - Jasa Flashing HP & Perbaikan Software Banyuwangi 24 Jam",
  description:
    "Athif Software Solutions - Jasa perbaikan software HP & laptop terpercaya di Banyuwangi. Layanan flashing HP, install ulang, unlock, bypass FRP, flash firmware, dan troubleshooting 24 jam nonstop. Spesialis flashing HP Banyuwangi & perbaikan software Banyuwangi.",
  keywords:
    "flashing HP Banyuwangi, perbaikan software Banyuwangi, jasa flash HP Banyuwangi, servis HP Banyuwangi, servis software HP Banyuwangi, install ulang HP Banyuwangi, unlock HP Banyuwangi, bypass FRP Banyuwangi, flash firmware Banyuwangi, service laptop Banyuwangi, perbaikan software laptop Banyuwangi, install ulang laptop Banyuwangi, Athif Software Solutions, jasa perbaikan HP Banyuwangi, teknisi HP Banyuwangi, servis HP 24 jam Banyuwangi, flashing Android Banyuwangi, flashing iPhone Banyuwangi, bootloop HP Banyuwangi, HP stuck logo Banyuwangi, jasa unlock HP Banyuwangi, perbaikan software handphone, servis software laptop, flash HP murah Banyuwangi",
  authors: [{ name: "Athif Software Solutions" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title:
      "Athif Software Solutions - Jasa Flashing HP & Perbaikan Software Banyuwangi 24 Jam",
    description:
      "Jasa perbaikan software HP & laptop terpercaya di Banyuwangi. Flashing HP, install ulang, unlock, bypass FRP, dan troubleshooting 24 jam nonstop.",
    type: "website",
    locale: "id_ID",
    siteName: "Athif Software Solutions",
  },
  other: {
    "geo.region": "ID-JI",
    "geo.placename": "Banyuwangi",
    "geo.position": "-8.201556;114.378694",
    ICBM: "-8.201556, 114.378694",
    distribution: "Indonesia",
    rating: "general",
    "revisit-after": "3 days",
    language: "Indonesian",
    coverage: "Banyuwangi, Jawa Timur, Indonesia",
  },
  icons: {
    icon: "/repair.svg",
    shortcut: "/repair.svg",
    apple: "/repair.svg",
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: 'your-verification-code',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Athif Software Solutions",
  description:
    "Jasa perbaikan software HP dan laptop terpercaya di Banyuwangi. Spesialis flashing HP, install ulang, unlock, bypass FRP, flash firmware, dan troubleshooting 24 jam nonstop.",
  url: "https://repair.aziiemuth.my.id",
  telephone: "+62816234185",
  email: "athifsoftware@gmail.com",
  image: "/repair.svg",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Banyuwangi",
    addressRegion: "Jawa Timur",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -8.201556,
    longitude: 114.378694,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  priceRange: "$$",
  areaServed: {
    "@type": "City",
    name: "Banyuwangi",
  },
  sameAs: ["https://instagram.com/athiief", "https://wa.me/62816234185"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "500",
    bestRating: "5",
    worstRating: "1",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Layanan Perbaikan Software",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Flashing HP Banyuwangi",
          description:
            "Jasa flash HP Android dan iPhone di Banyuwangi. Update, downgrade, atau flash ulang firmware untuk performa optimal.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Perbaikan Software HP Banyuwangi",
          description:
            "Jasa perbaikan software handphone di Banyuwangi. Bootloop, stuck logo, error system, semua bisa ditangani.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Install Ulang OS",
          description:
            "Instalasi fresh Windows, Linux, macOS, Android, atau iOS dengan driver lengkap di Banyuwangi.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Unlock & Bypass FRP",
          description:
            "Bypass FRP Google, iCloud, pattern lock, dan berbagai proteksi software lainnya di Banyuwangi.",
        },
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={outfit.variable} suppressHydrationWarning={true}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={outfit.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
