import {
  IconSearch,
  IconAccessible,
  IconSettings,
  IconReportAnalytics,
  IconTargetArrow,
} from "@tabler/icons-react";

const features = [
  {
    icon: <IconSearch size={36} stroke={1.5} />, // SEO Analysis
    title: "Comprehensive SEO Insights",
    subtitle: "All-in-one Audit",
    desc: "Analyze meta tags, keyword density, and on-page factors for a holistic SEO overview.",
  },
  {
    icon: <IconAccessible size={36} stroke={1.5} />, // Accessibility
    title: "Accessibility Compliance",
    subtitle: "WCAG & Best Practices",
    desc: "Ensure your site is accessible to everyone and meets modern web standards.",
  },
  {
    icon: <IconSettings size={36} stroke={1.5} />, // Technical Health
    title: "Technical Health Check",
    subtitle: "Performance & Structure",
    desc: "Detect broken links, sitemap issues, and technical SEO blockers instantly.",
  },
  {
    icon: <IconReportAnalytics size={36} stroke={1.5} />, // Actionable Reports
    title: "Actionable Excel Reports",
    subtitle: "Data-Driven Decisions",
    desc: "Download detailed, easy-to-read reports to guide your optimization strategy and share them with your team or clients in one click.",
  },
  {
    icon: <IconTargetArrow size={36} stroke={1.5} />, // Smart Prioritization
    title: "Smart Issue Prioritization",
    subtitle: "Fix What Matters Most",
    desc: "Instantly see which SEO issues have the biggest impact, so you can focus your efforts for maximum results.",
  },
];

export default function FeaturesSection() {
  return (
    <section
      className="w-full py-28 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden"
      id="features"
    >
      <div
        className="absolute inset-0 pointer-events-none select-none opacity-30 z-0"
        aria-hidden="true"
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="1200" cy="80" r="120" fill="#e0e7ff" />
          <circle cx="200" cy="240" r="80" fill="#bae6fd" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <span className="inline-block mb-4 px-4 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold text-xs tracking-widest uppercase shadow-sm">
          Features
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Powerful Features for Effortless SEO Audits
        </h2>
        <p className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
          CrawlVaani delivers a professional-grade website audit in minutes.
          Discover what's holding your site back and unlock your growth
          potential.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          {features.map((f, i) => (
            <div
              key={i}
              className={`group bg-white/95 rounded-3xl shadow-xl p-8 flex flex-col items-center text-center gap-4 border border-blue-100 hover:border-blue-400 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03] transition-all duration-300 relative ${
                i % 2 === 1 ? "lg:-mt-8" : ""
              }`}
              style={{ boxShadow: "0 8px 32px 0 rgba(30, 64, 175, 0.08)" }}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full mb-2 text-blue-700 bg-gradient-to-tr from-blue-100 to-blue-200 group-hover:from-blue-600 group-hover:to-blue-400 group-hover:text-white shadow-lg group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-1">
                {f.title}
              </h3>
              <span className="text-xs uppercase tracking-wide text-blue-500 font-semibold mb-2">
                {f.subtitle}
              </span>
              <p className="text-gray-600 text-base font-medium">{f.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <a
            href="#seo-audit"
            className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold text-lg shadow-xl hover:from-blue-700 hover:to-blue-500 focus:ring-4 focus:ring-blue-200 transition-all duration-200 border-2 border-transparent hover:border-blue-700"
          >
            Start Your Free SEO Audit
          </a>
        </div>
      </div>
    </section>
  );
}
