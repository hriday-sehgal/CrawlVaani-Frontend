"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaBrain,
  FaChartLine,
  FaLightbulb,
  FaUsers,
  FaArrowLeft,
  FaCheckCircle,
  FaExclamationTriangle,
  FaStar,
  FaBullseye,
  FaRocket,
  FaShieldAlt,
  FaSearch,
  FaCog,
  FaCrosshairs,
  FaTrophy,
  FaChartBar,
  FaTools,
  FaEye,
  FaClock,
  FaAward,
  FaClipboardList,
  FaBookOpen,
  FaGlobe,
  FaMobile,
  FaDesktop,
  FaTablet,
  FaDownload,
  FaInfoCircle,
} from "react-icons/fa";

interface AIAnalysis {
  contentQuality: {
    analysis: string;
  };
  seoSuggestions: {
    suggestions: string;
  };
  competitorAnalysis: {
    analysis: string;
  };
  timestamp: string;
}

export default function AIAnalysisPage() {
  const [analysis, setAnalysis] = useState<AIAnalysis | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    // Get crawl data from localStorage or session
    const crawlData = sessionStorage.getItem("crawlData");
    if (crawlData) {
      performAIAnalysis(JSON.parse(crawlData));
    } else {
      setError("No crawl data found. Please run a crawl first.");
    }
  }, []);

  const performAIAnalysis = async (crawlData: any) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${
          process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4000"
        }/api/ai/comprehensive-analysis`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(crawlData),
        }
      );

      if (!response.ok) {
        throw new Error("AI analysis failed");
      }

      const result = await response.json();
      setAnalysis(result.analysis);
    } catch (err) {
      setError(err instanceof Error ? err.message : "AI analysis failed");
    } finally {
      setLoading(false);
    }
  };

  const formatAIResponse = (text: string) => {
    // Remove any emojis from the text
    const cleanText = text.replace(
      /[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu,
      ""
    );

    // Split the text into sections based on headers
    const sections = cleanText.split(/(## [^#\n]+)/g);

    return sections.map((section, index) => {
      if (section.startsWith("## ")) {
        // This is a main heading
        const title = section.replace("## ", "").trim();
        return (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3 border-b border-gray-200 pb-2">
              <FaStar className="text-yellow-500" />
              {title}
            </h2>
          </div>
        );
      } else if (section.trim()) {
        // This is content
        const lines = section.split("\n").filter((line) => line.trim());
        return (
          <div key={index} className="mb-6">
            {lines.map((line, lineIndex) => {
              const trimmedLine = line.trim();

              if (trimmedLine.startsWith("### ")) {
                // Sub-heading
                const subTitle = trimmedLine.replace("### ", "").trim();
                return (
                  <h3
                    key={lineIndex}
                    className="text-lg font-semibold text-gray-800 mb-3 mt-4 flex items-center gap-2"
                  >
                    <FaCrosshairs className="text-blue-500" />
                    {subTitle}
                  </h3>
                );
              } else if (
                trimmedLine.startsWith("•") ||
                trimmedLine.startsWith("-")
              ) {
                // Bullet point
                return (
                  <div
                    key={lineIndex}
                    className="flex items-start gap-3 mb-3 ml-4"
                  >
                    <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                    <div className="text-gray-700 leading-relaxed">
                      {trimmedLine.substring(1).trim()}
                    </div>
                  </div>
                );
              } else if (trimmedLine.includes("**")) {
                // Handle bold text within paragraphs
                const parts = trimmedLine.split(/(\*\*[^*]+\*\*)/g);
                return (
                  <p
                    key={lineIndex}
                    className="text-gray-700 mb-3 leading-relaxed"
                  >
                    {parts.map((part, partIndex) => {
                      if (part.startsWith("**") && part.endsWith("**")) {
                        // Bold text
                        const boldText = part.replace(/\*\*/g, "");
                        return (
                          <span
                            key={partIndex}
                            className="font-bold text-gray-900"
                          >
                            {boldText}
                          </span>
                        );
                      } else if (part.trim()) {
                        // Regular text
                        return <span key={partIndex}>{part}</span>;
                      }
                      return null;
                    })}
                  </p>
                );
              } else if (trimmedLine) {
                // Regular paragraph
                return (
                  <p
                    key={lineIndex}
                    className="text-gray-700 mb-3 leading-relaxed"
                  >
                    {trimmedLine}
                  </p>
                );
              }
              return null;
            })}
          </div>
        );
      }
      return null;
    });
  };

  const renderOverview = () => {
    if (!analysis) return null;

    return (
      <div className="space-y-8">
        {/* Executive Summary */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FaAward className="text-blue-600" />
            Executive Summary
          </h3>
          <div className="text-gray-700 leading-relaxed">
            {formatAIResponse(analysis.contentQuality.analysis)}
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <div className="flex items-center gap-3 mb-3">
              <FaChartBar className="text-green-600 text-xl" />
              <h4 className="font-semibold text-gray-900">Content Quality</h4>
            </div>
            <p className="text-gray-600 text-sm">
              Comprehensive analysis of your website's content strategy,
              quality, and optimization opportunities.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <div className="flex items-center gap-3 mb-3">
              <FaCrosshairs className="text-blue-600 text-xl" />
              <h4 className="font-semibold text-gray-900">SEO Strategy</h4>
            </div>
            <p className="text-gray-600 text-sm">
              Detailed technical and strategic SEO recommendations with
              implementation roadmap.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <div className="flex items-center gap-3 mb-3">
              <FaTrophy className="text-purple-600 text-xl" />
              <h4 className="font-semibold text-gray-900">
                Competitive Analysis
              </h4>
            </div>
            <p className="text-gray-600 text-sm">
              Strategic competitive positioning and market differentiation
              insights.
            </p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FaRocket className="text-green-600" />
            Immediate Action Items
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <FaClock className="text-orange-500" />
                Critical Fixes (7 days)
              </h4>
              <p className="text-gray-600 text-sm">
                Address the most critical SEO issues that are impacting your
                rankings immediately.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <FaChartLine className="text-blue-500" />
                High-Impact Improvements (30 days)
              </h4>
              <p className="text-gray-600 text-sm">
                Implement strategic improvements that will significantly boost
                your SEO performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="relative">
            <FaBrain className="text-6xl text-purple-600 mx-auto mb-6 animate-pulse" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            AI Analysis in Progress
          </h2>
          <p className="text-gray-600 mb-2">
            Our advanced AI is analyzing your website data...
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"></div>
            <div
              className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            This comprehensive analysis may take up to 10 minutes depending on
            your website size
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8">
          <FaExclamationTriangle className="text-4xl text-red-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Analysis Error
          </h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <Link
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-150"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  if (!analysis) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <Link
              href="/"
              className="bg-white hover:bg-gray-50 text-gray-700 font-semibold px-4 py-2 rounded-lg shadow-md transition-colors duration-150 inline-flex items-center gap-2"
            >
              <FaArrowLeft /> Back
            </Link>
            <div className="text-right">
              <div className="text-sm text-gray-500">Analysis completed</div>
              <div className="text-sm text-gray-700">
                {new Date(analysis.timestamp).toLocaleString()}
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h1 className="text-4xl font-extrabold text-gray-900 flex items-center gap-3 mb-2">
              <FaBrain className="text-purple-600" />
              Professional SEO Analysis
            </h1>
            <p className="text-gray-600 text-lg">
              Comprehensive AI-powered insights and strategic recommendations
            </p>
          </div>
        </div>

        {/* Analysis Tabs */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex border-b border-gray-200 bg-gray-50">
            <button
              onClick={() => setActiveTab("overview")}
              className={`flex-1 px-6 py-4 text-sm font-semibold transition-colors duration-150 flex items-center justify-center gap-2 ${
                activeTab === "overview"
                  ? "bg-white text-purple-700 border-b-2 border-purple-600 shadow-sm"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <FaEye /> Overview
            </button>
            <button
              onClick={() => setActiveTab("content")}
              className={`flex-1 px-6 py-4 text-sm font-semibold transition-colors duration-150 flex items-center justify-center gap-2 ${
                activeTab === "content"
                  ? "bg-white text-purple-700 border-b-2 border-purple-600 shadow-sm"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <FaBookOpen /> Content Analysis
            </button>
            <button
              onClick={() => setActiveTab("seo")}
              className={`flex-1 px-6 py-4 text-sm font-semibold transition-colors duration-150 flex items-center justify-center gap-2 ${
                activeTab === "seo"
                  ? "bg-white text-purple-700 border-b-2 border-purple-600 shadow-sm"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <FaCrosshairs /> SEO Strategy
            </button>
            <button
              onClick={() => setActiveTab("competitor")}
              className={`flex-1 px-6 py-4 text-sm font-semibold transition-colors duration-150 flex items-center justify-center gap-2 ${
                activeTab === "competitor"
                  ? "bg-white text-purple-700 border-b-2 border-purple-600 shadow-sm"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <FaTrophy /> Competitive Analysis
            </button>
          </div>

          <div className="p-8 max-w-none">
            {/* Overview Tab */}
            {activeTab === "overview" && (
              <div className="prose prose-lg max-w-none">
                {renderOverview()}
              </div>
            )}

            {/* Content Analysis Tab */}
            {activeTab === "content" && (
              <div className="prose prose-lg max-w-none">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <FaBookOpen className="text-blue-600" />
                    Comprehensive Content Analysis
                  </h2>
                  <p className="text-gray-600">
                    Detailed assessment of your website's content quality,
                    strategy, and optimization opportunities.
                  </p>
                </div>
                <div className="text-gray-800 leading-relaxed">
                  {formatAIResponse(analysis.contentQuality.analysis)}
                </div>
              </div>
            )}

            {/* SEO Strategy Tab */}
            {activeTab === "seo" && (
              <div className="prose prose-lg max-w-none">
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <FaCrosshairs className="text-green-600" />
                    Strategic SEO Recommendations
                  </h2>
                  <p className="text-gray-600">
                    Actionable SEO strategy with immediate actions, content
                    optimization, and technical improvements.
                  </p>
                </div>
                <div className="text-gray-800 leading-relaxed">
                  {formatAIResponse(analysis.seoSuggestions.suggestions)}
                </div>
              </div>
            )}

            {/* Competitor Analysis Tab */}
            {activeTab === "competitor" && (
              <div className="prose prose-lg max-w-none">
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <FaTrophy className="text-purple-600" />
                    Competitive Intelligence
                  </h2>
                  <p className="text-gray-600">
                    Strategic competitive analysis with positioning insights and
                    market differentiation opportunities.
                  </p>
                </div>
                <div className="text-gray-800 leading-relaxed">
                  {formatAIResponse(analysis.competitorAnalysis.analysis)}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/"
            className="bg-gray-600 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-150 flex items-center justify-center gap-2"
          >
            <FaArrowLeft /> Back to Home
          </Link>
          <button
            onClick={() => window.print()}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-150 flex items-center justify-center gap-2"
          >
            <FaClipboardList /> Print Report
          </button>
          <button
            onClick={() => {
              const dataStr = JSON.stringify(analysis, null, 2);
              const dataBlob = new Blob([dataStr], {
                type: "application/json",
              });
              const url = URL.createObjectURL(dataBlob);
              const link = document.createElement("a");
              link.href = url;
              link.download = `seo-analysis-${
                new Date().toISOString().split("T")[0]
              }.json`;
              link.click();
            }}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-150 flex items-center justify-center gap-2"
          >
            <FaDownload /> Export Data
          </button>
        </div>
      </div>
    </div>
  );
}
