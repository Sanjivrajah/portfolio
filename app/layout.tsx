import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageEnhancements } from "@/components/PageEnhancements";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sanjivrajah Murali | Full-Stack & Salesforce Developer",
  description:
    "Portfolio of Sanjivrajah Murali, a Full-Stack Software Engineer and Salesforce Developer in Malaysia building scalable web applications, enterprise integrations, and AI-powered products.",
  keywords: [
    "Sanjivrajah Murali",
    "Full-Stack & Salesforce Developer",
    "Full-Stack Developer",
    "Salesforce Developer",
    "Software Engineer",
    "Malaysia",
    "Next.js",
    "React",
    "Apex",
    "Node.js",
    "TypeScript",
    "AWS",
  ],
  authors: [{ name: "Sanjivrajah Murali" }],
  metadataBase: new URL("https://sanjivrajah.dev"),
  openGraph: {
    title: "Sanjivrajah Murali | Full-Stack & Salesforce Developer",
    description:
      "Explore projects, experience, and skills of Sanjivrajah Murali — Full-Stack Software Engineer and Salesforce Developer based in Malaysia.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sanjivrajah Murali portfolio preview",
      },
    ],
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

const softwareEngineerSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareEngineer",
  name: "Sanjivrajah Murali",
  jobTitle: "Full-Stack Software Engineer & Salesforce Developer",
  description:
    "Full-Stack Software Engineer and Salesforce Developer based in Malaysia, focused on scalable web applications and enterprise integrations.",
  url: "https://sanjivrajah.dev",
  image: "https://sanjivrajah.dev/assets/og-image.png",
  address: {
    "@type": "PostalAddress",
    addressCountry: "Malaysia",
  },
  sameAs: [
    "https://github.com/sanjivrajah",
    "https://www.linkedin.com/in/sanjivrajah-m-3b285b209/",
  ],
  knowsAbout: [
    "Next.js",
    "TypeScript",
    "Salesforce",
    "Apex",
    "Node.js",
    "AWS",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(softwareEngineerSchema),
            }}
          />
          <PageEnhancements />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
