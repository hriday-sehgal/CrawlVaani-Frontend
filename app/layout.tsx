import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CrawlVaani - Free SEO & Website Audit Tool",
  description:
    "Instantly audit your website for SEO, accessibility, and technical issues. Get a comprehensive, downloadable report to improve your search engine rankings and user experience.",
  keywords:
    "SEO audit, website analysis, free SEO tool, SEO checker, accessibility audit, technical SEO, website crawler, CrawlVaani",
  authors: [{ name: "CrawlVaani" }],
  creator: "CrawlVaani",
  publisher: "CrawlVaani",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://crawlvaani.vercel.app"),
  alternates: {
    canonical: "/",
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
    // google: "your-google-verification-code", // Add your Google Search Console verification code
  },
  openGraph: {
    title: "CrawlVaani - Free SEO & Website Audit Tool",
    description: "Get a comprehensive, downloadable SEO report in seconds.",
    type: "website",
    url: "https://crawlvaani.vercel.app",
    siteName: "CrawlVaani",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CrawlVaani SEO Audit Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CrawlVaani - Free SEO & Website Audit Tool",
    description: "Instantly audit your website for SEO and technical issues.",
    images: ["/og-image.png"],
    // creator: "@crawlvaani", // Add your Twitter handle
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Canonical Link */}
        <link rel="canonical" href="https://crawlvaani.vercel.app" />

        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

        {/* Robots Meta Tag */}
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        {/* Additional SEO Meta Tags */}
        <meta name="author" content="CrawlVaani" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "CrawlVaani",
              description:
                "A free SEO and website audit tool to analyze and improve your website's performance on search engines.",
              applicationCategory: "BusinessApplication",
              operatingSystem: "All",
              url: "https://crawlvaani.vercel.app",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              creator: {
                "@type": "Organization",
                name: "CrawlVaani",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
