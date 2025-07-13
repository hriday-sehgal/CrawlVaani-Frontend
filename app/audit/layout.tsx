import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Audit Results - CrawlVaani",
  description:
    "View your comprehensive SEO audit results and analysis from CrawlVaani.",
  keywords:
    "SEO audit results, website analysis results, SEO report, CrawlVaani results",
  alternates: {
    canonical: "/audit",
  },
  robots: {
    index: false, // Don't index audit results pages
    follow: false,
  },
  openGraph: {
    title: "SEO Audit Results - CrawlVaani",
    description: "Your comprehensive SEO audit results and analysis.",
    url: "https://crawlvaani.vercel.app/audit",
  },
};

export default function AuditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
