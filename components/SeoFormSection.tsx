"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  FaSearch,
  FaRocket,
  FaShieldAlt,
  FaDownload,
  FaInfoCircle,
} from "react-icons/fa";
import SeoDashboard from "./SeoDashboard";

const TRUSTED_LOGOS = [
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Google-flutter-logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg",
];

export default function SeoFormSection() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");
  const [reportData, setReportData] = useState(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const router = useRouter();

  // Step: 0 = enter, 1 = analyzing, 2 = download
  const step = loading ? 1 : downloadUrl ? 2 : 0;
  const stepLabels = ["Enter URL", "Analyzing", "Download Report"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setDownloadUrl("");
    setReportData(null);
    if (!url) {
      setError("Please enter a website URL.");
      return;
    }
    setLoading(true);
    try {
      // Use localhost for local development, Render URL for production
      const backendUrl =
        process.env.NODE_ENV === "development"
          ? "http://localhost:4000"
          : process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4000";

      const res = await fetch(`${backendUrl}/api/crawl`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.error || "Crawl failed");
      setDownloadUrl(`${backendUrl}${data.downloadUrl}`);
      setReportData(data);
      localStorage.setItem("reportData", JSON.stringify(data));
      // Store crawl data in sessionStorage for AI analysis
      sessionStorage.setItem(
        "crawlData",
        JSON.stringify({
          pagesScanned: data.pagesScanned,
          workingLinks: data.data.workingLinks,
          brokenLinks: data.data.brokenLinks,
          missingSeoIssues: data.data.missingSeoIssues,
          technicalSeo: data.data.technicalSeo,
          accessibilityIssues: data.data.accessibilityIssues,
          keywordStats: data.data.keywordStats,
          pagePerformanceMetrics: data.data.pagePerformanceMetrics,
          duplicateContentIssues: data.data.duplicateContentIssues,
          brokenResources: data.data.brokenResources,
          sitemapRobotsInfo: data.data.sitemapRobotsInfo,
        })
      );
      router.push("/audit?success=1");
    } catch (err: any) {
      setError(err.message || "Crawl failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style jsx global>{`
        @keyframes progress-indeterminate {
          0% {
            transform: translateX(-100%) scaleX(0.5);
          }
          50% {
            transform: translateX(0) scaleX(0.5);
          }
          100% {
            transform: translateX(100%) scaleX(0.5);
          }
        }
        @keyframes gradient-border {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
      `}</style>
      <section
        className="w-full py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-[80vh] flex items-center"
        id="seo-audit"
      >
        <div className="max-w-4xl mx-auto px-4 w-full">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Get Your Free SEO Report
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Enter your URL to receive a comprehensive SEO audit, technical
              analysis, and actionable recommendations to boost your online
              presence.
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-4">
              {stepLabels.map((label, idx) => (
                <div key={label} className="flex items-center">
                  <div
                    className={`w-8 h-8 flex items-center justify-center rounded-full border-2 transition-all duration-300
                      ${
                        step === idx
                          ? "bg-gradient-to-br from-blue-500 to-indigo-500 text-white border-blue-500 scale-110 shadow-lg"
                          : step > idx
                          ? "bg-green-500 text-white border-green-500"
                          : "bg-white text-gray-400 border-gray-300"
                      }
                    `}
                  >
                    {idx + 1}
                  </div>
                  <span
                    className={`ml-2 text-sm font-semibold ${
                      step === idx
                        ? "text-blue-700"
                        : step > idx
                        ? "text-green-600"
                        : "text-gray-400"
                    }`}
                  >
                    {label}
                  </span>
                  {idx < stepLabels.length - 1 && (
                    <div
                      className={`w-8 h-1 mx-2 rounded-full transition-all duration-300
                      ${
                        step > idx
                          ? "bg-green-400"
                          : step === idx
                          ? "bg-blue-300"
                          : "bg-gray-200"
                      }`}
                    ></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* Animated Gradient Border */}
            <div className="relative rounded-3xl p-1 bg-[linear-gradient(90deg,_#3b82f6,_#a78bfa,_#06b6d4,_#3b82f6)] bg-[length:300%_300%] animate-[gradient-border_4s_linear_infinite] shadow-2xl">
              <div className="relative bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-10 border border-gray-200/60 transition-all duration-300">
                <div className="flex items-center gap-2 bg-white/90 px-4 py-2 rounded-full shadow border border-gray-100 text-blue-700 text-sm font-semibold mb-8 w-max mx-auto">
                  <FaShieldAlt className="text-green-500 animate-pulse" />{" "}
                  Secure & Private
                </div>
                {loading ? (
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Analyzing Your Website...
                    </h3>
                    <p className="text-gray-600 mb-6">
                      This may take a few moments, especially for larger
                      websites. Please don't close this window.
                    </p>
                    <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                      <div
                        className="h-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
                        style={{
                          animation:
                            "progress-indeterminate 2s linear infinite",
                        }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-500 mt-4 animate-pulse">
                      Crawling pages... checking links... auditing SEO...
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="relative">
                      <input
                        id="url-input"
                        type="url"
                        placeholder=" "
                        className="peer block w-full px-12 py-5 text-lg rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-gray-900 placeholder-transparent bg-white/80 shadow-sm focus:shadow-blue-100 focus:outline-none"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        required
                        disabled={loading}
                        onFocus={() => setShowTooltip(true)}
                        onBlur={() => setShowTooltip(false)}
                      />
                      <label
                        htmlFor="url-input"
                        className="absolute left-12 top-1/2 -translate-y-1/2 text-gray-400 text-base pointer-events-none transition-all duration-200 peer-focus:-top-3 peer-focus:left-4 peer-focus:text-xs peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-blue-600 peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-12 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 bg-white/80 px-1"
                      >
                        Enter Your Website URL
                      </label>
                      <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400 text-xl" />
                      <span
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-400 cursor-pointer"
                        onMouseEnter={() => setShowTooltip(true)}
                        onMouseLeave={() => setShowTooltip(false)}
                        tabIndex={0}
                      >
                        <FaInfoCircle />
                        {showTooltip && (
                          <span className="absolute z-10 left-1/2 -translate-x-1/2 top-10 w-64 bg-white text-gray-700 text-xs rounded-lg shadow-lg px-4 py-2 border border-blue-100 animate-fade-in">
                            We analyze your website for SEO, accessibility, and
                            technical issues. Your data is never stored or
                            shared.
                          </span>
                        )}
                      </span>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-4 rounded-xl text-lg shadow-lg hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-wait flex items-center justify-center gap-3 group focus:ring-4 focus:ring-blue-200"
                      disabled={loading}
                    >
                      <span className="inline-block group-hover:animate-bounce">
                        <FaRocket />
                      </span>
                      <span>Start Free SEO Audit</span>
                    </button>
                  </form>
                )}

                {error && !loading && (
                  <div className="mt-6 p-4 bg-red-50 border border-red-300 rounded-xl flex items-center gap-3">
                    <span className="text-red-500 text-xl">❌</span>
                    <p className="text-red-800 text-base">{error}</p>
                  </div>
                )}

                {downloadUrl && (
                  <div className="mt-8 text-center">
                    <a
                      href={downloadUrl}
                      className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-7 py-3 rounded-xl font-semibold shadow-lg transition-colors text-lg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaDownload />
                      Download Excel Report
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Trusted by row */}
            <div className="mt-10 text-center">
              <p className="text-xs text-gray-400 mt-2">
                ⚡ Free tier: Crawls up to 150 pages per website. Rate limited
                to 5 requests per hour.
              </p>
            </div>
          </div>

          {reportData && (
            <div className="w-full mt-12">
              <SeoDashboard reportData={reportData} />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
