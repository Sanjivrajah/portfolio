import type { Metadata } from "next";
import { WishesPage } from "@/components/WishesPage";

export const metadata: Metadata = {
  title: "Hari Raya Aidilfitri 2026 Wishes | Sanjivrajah",
  description:
    "A festive Hari Raya Aidilfitri 2026 greeting page with animated wishes, lights, and blessings.",
  alternates: {
    canonical: "/wishes",
  },
  openGraph: {
    title: "Selamat Hari Raya Aidilfitri 2026 🌙",
    description:
      "Maaf Zahir & Batin — wishing you peace, joy, and blessings this festive season.",
    url: "https://sanjivrajah.com/wishes",
    type: "website",
    images: [
      {
        url: "/wishes/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Hari Raya Aidilfitri 2026 wishes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Selamat Hari Raya Aidilfitri 2026 🌙",
    description:
      "Maaf Zahir & Batin — wishing you peace, joy, and blessings this festive season.",
    images: ["/wishes/twitter-image"],
  },
};

export default function Wishes() {
  return <WishesPage />;
}