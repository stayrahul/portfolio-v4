import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { generateStructuredData } from "@/lib/structuredData";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rahul.rest"),
  title: {
    default: "stayrahul | Rahul Kushwaha — Full-Stack Developer, Creative Coder & Vibecoder",
    template: "%s | stayrahul (@stayrahul)",
  },
  description:
    "Official website of stayrahul (Rahul Kushwaha). Full-stack developer, vibe coder, and BCSIT student at Quest International College, Lalitpur (CCRC alumnus). Explore 15+ projects, active builds, and interactive Gemini AI assistant.",
  keywords: [
    "stayrahul",
    "who is stayrahul",
    "stayrahul portfolio",
    "stayrahul developer",
    "stayrahul Nepal",
    "stayrahul GitHub",
    "stayrahul twitter",
    "stayrahul instagram",
    "stay_rahul",
    "Rahul Kushwaha",
    "Rahul Kushwaha developer",
    "Rahul Kushwaha Nepal",
    "Rahul Kushwaha portfolio",
    "www.rahul.rest",
    "rahul.rest",
    "Quest International College BCSIT",
    "Capital College and Research Center CCRC",
    "Adhunik Rastriya Secondary School Hetauda",
    "Simraungadh App",
    "Hostel Management App",
    "Face ID for Mac",
    "PocketOps",
    "Vibe Coder",
    "Creative Developer",
    "Frontend Craftsman",
    "Next.js 16 Developer",
    "React Developer Nepal",
    "Full Stack Developer Lalitpur",
    "Portfolio v4",
    "Full Stack Engineer Nepal"
  ],
  authors: [{ name: "Rahul Kushwaha (stayrahul)", url: "https://www.rahul.rest" }],
  creator: "Rahul Kushwaha (@stayrahul)",
  publisher: "stayrahul",
  alternates: {
    canonical: "https://www.rahul.rest",
    languages: {
      "en-US": "https://www.rahul.rest",
    },
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "https://www.rahul.rest",
    title: "stayrahul | Rahul Kushwaha — Full-Stack Developer & Vibecoder",
    description:
      "Official website of stayrahul (Rahul Kushwaha). Full-stack developer, vibe coder, and BCSIT student at Quest International College, Lalitpur. Explore 15+ featured projects, active builds, and interactive AI assistant.",
    siteName: "stayrahul",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "stayrahul — Rahul Kushwaha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "stayrahul | Rahul Kushwaha — Full-Stack Developer & Vibecoder",
    description:
      "Crafting immersive, aesthetic, ultra-fast web experiences with Next.js 16, React 19, and creative freedom.",
    creator: "@stay_rahul",
    site: "@stay_rahul",
    images: ["/profile.png"],
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "aIpOted6tQF9LBMSCdX0zG_Ew8s0W8B3DKBWcb6h8lg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = generateStructuredData();

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta
          name="google-site-verification"
          content="aIpOted6tQF9LBMSCdX0zG_Ew8s0W8B3DKBWcb6h8lg"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} antialiased bg-[#050a14] text-white font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
