import React, { useState } from "react";
import Link from "next/link";
import {
  FaExternalLinkAlt,
  FaCheckCircle,
  FaTimesCircle,
  FaInfoCircle,
  FaTags,
  FaSitemap,
  FaCode,
  FaTachometerAlt,
  FaChartLine,
} from "react-icons/fa";

interface SectionTableProps {
  title: string;
  data: any[];
}

function SectionTable({ title, data }: SectionTableProps) {
  if (!data || data.length === 0) {
    return (
      <div className="bg-gray-50 p-6 rounded-lg text-center text-gray-500">
        <FaInfoCircle className="mx-auto text-2xl mb-2" />
        No data available for {title}.
      </div>
    );
  }

  const columns = Object.keys(data[0] || {});

  return (
    <div className="rounded-xl border border-blue-100 bg-white shadow-md">
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-blue-50">
            <tr>
              {columns.map((col) => (
                <th
                  key={col}
                  className="px-5 py-3 font-semibold text-blue-900 border-b-2 border-blue-200 uppercase tracking-wider"
                >
                  {col
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase())}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr
                key={i}
                className={`border-b border-blue-100 ${
                  i % 2 === 0 ? "bg-white" : "bg-blue-50/70"
                } hover:bg-blue-100 transition-colors duration-150`}
              >
                {columns.map((col) => (
                  <td
                    key={col}
                    className="px-5 py-3 text-gray-700 font-medium align-top"
                  >
                    {renderCell(row[col], col, title)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function renderCell(cellValue: any, columnName?: string, tabName?: string) {
  const value = String(cellValue ?? "-");

  if (value.startsWith("http")) {
    return (
      <a
        href={value}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline flex items-center gap-2"
      >
        {value} <FaExternalLinkAlt />
      </a>
    );
  }

  if (
    tabName === "Technical SEO" &&
    (value.toLowerCase() === "yes" || value.toLowerCase() === "no")
  ) {
    return (
      <span
        className={`font-semibold ${
          value.toLowerCase() === "yes" ? "text-green-600" : "text-red-600"
        }`}
      >
        {value}
      </span>
    );
  }

  // Performance Metrics rendering - DISABLED (Lighthouse not available)
  /*
  if (
    (tabName === "Performance Metrics" || tabName === "Web Core Vitals") &&
    (value === "Good" ||
      value === "Needs Improvement" ||
      value === "Poor" ||
      value === "Failed")
  ) {
    const statusColors = {
      Good: "text-green-600",
      "Needs Improvement": "text-yellow-600",
      Poor: "text-red-600",
      Failed: "text-gray-600",
    };
    return (
      <span
        className={`font-semibold ${
          statusColors[value as keyof typeof statusColors] || "text-gray-600"
        }`}
      >
        {value}
      </span>
    );
  }

  if (
    tabName === "Performance Metrics" &&
    (columnName === "performanceScore" ||
      columnName === "accessibilityScore" ||
      columnName === "bestPracticesScore" ||
      columnName === "seoScore")
  ) {
    const score = parseInt(value);
    if (!isNaN(score)) {
      const color =
        score >= 90
          ? "text-green-600"
          : score >= 50
          ? "text-yellow-600"
          : "text-red-600";
      return <span className={`font-bold ${color}`}>{score}/100</span>;
    }
  }
  */

  if (value.toLowerCase() === "yes") {
    return <FaCheckCircle className="text-green-500 text-lg" />;
  }

  if (value.toLowerCase() === "no") {
    return <FaTimesCircle className="text-red-500 text-lg" />;
  }

  return value;
}

const TABS = [
  { name: "Working Links", icon: <FaCheckCircle /> },
  { name: "Broken Links", icon: <FaTimesCircle /> },
  { name: "Sitemap & robots.txt", icon: <FaSitemap /> },
  { name: "Meta Tag Audit", icon: <FaTags /> },
  { name: "Open Graph Tags", icon: <FaTags /> },
  { name: "All Meta Tags", icon: <FaTags /> },
  { name: "Image ALT Tags", icon: <FaTags /> },
  { name: "Missing Anchors", icon: <FaExternalLinkAlt /> },
  { name: "Accessibility Issues", icon: <FaInfoCircle /> },
  { name: "External Links", icon: <FaExternalLinkAlt /> },
  { name: "Structured Data", icon: <FaCode /> },
  { name: "Technical SEO", icon: <FaSitemap /> },
  { name: "Missing SEO Issues", icon: <FaTimesCircle /> },
  // { name: "Performance Metrics", icon: <FaTachometerAlt /> }, // DISABLED - Lighthouse not available
  // { name: "Web Core Vitals", icon: <FaChartLine /> }, // DISABLED - Lighthouse not available
  { name: "Duplicate Content", icon: <FaInfoCircle /> },
  { name: "Broken Resources", icon: <FaTimesCircle /> },
];

const DATA_KEYS: { [key: string]: string } = {
  "Working Links": "workingLinks",
  "Broken Links": "brokenLinks",
  "Sitemap & robots.txt": "sitemapRobotsInfo",
  "Meta Tag Audit": "metaTagAudit",
  "Open Graph Tags": "ogTags",
  "All Meta Tags": "metaTags",
  "Image ALT Tags": "imageAlts",
  "Missing Anchors": "missingAnchorTexts",
  "Accessibility Issues": "accessibilityIssues",
  "External Links": "externalLinks",
  "Structured Data": "structuredData",
  "Technical SEO": "technicalSeo",
  "Missing SEO Issues": "missingSeoIssues",
  // "Performance Metrics": "pagePerformanceMetrics", // DISABLED - Lighthouse not available
  // "Web Core Vitals": "webCoreVitals", // DISABLED - Lighthouse not available
  "Duplicate Content": "duplicateContentIssues",
  "Broken Resources": "brokenResources",
};

export default function SeoDashboard({ reportData }: { reportData: any }) {
  // Use localhost for local development, Render URL for production
  const backendUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:4000"
      : process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4000";

  const excelUrl = reportData?.downloadUrl
    ? `${backendUrl}${reportData.downloadUrl}`
    : null;
  const data = reportData?.data || {};
  const [activeTab, setActiveTab] = useState(TABS[0].name);

  // Get pages scanned count
  const pagesScanned = reportData?.pagesScanned || 0;

  // Calculate performance summary - DISABLED (Lighthouse not available)
  /*
  const performanceData = data.pagePerformanceMetrics || [];
  const webCoreVitalsData = data.webCoreVitals || [];

  const averagePerformance =
    performanceData.length > 0
      ? Math.round(
          performanceData.reduce(
            (sum: number, item: any) => sum + (item.performanceScore || 0),
            0
          ) / performanceData.length
        )
      : 0;

  const averageAccessibility =
    performanceData.length > 0
      ? Math.round(
          performanceData.reduce(
            (sum: number, item: any) => sum + (item.accessibilityScore || 0),
            0
          ) / performanceData.length
        )
      : 0;

  const averageBestPractices =
    performanceData.length > 0
      ? Math.round(
          performanceData.reduce(
            (sum: number, item: any) => sum + (item.bestPracticesScore || 0),
            0
          ) / performanceData.length
        )
      : 0;

  const averageSEO =
    performanceData.length > 0
      ? Math.round(
          performanceData.reduce(
            (sum: number, item: any) => sum + (item.seoScore || 0),
            0
          ) / performanceData.length
        )
      : 0;
  */

  const getScoreColor = (score: number) => {
    return score >= 90
      ? "text-green-600"
      : score >= 50
      ? "text-yellow-600"
      : "text-red-600";
  };

  return (
    <div className="w-full max-w-full bg-white rounded-2xl shadow-2xl p-8 flex flex-col gap-8 mx-auto border-t-4 border-blue-600">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900">
            SEO Audit Report
          </h1>
          <p className="text-gray-500 mt-1">
            A comprehensive analysis of your website's SEO health.
          </p>
        </div>
        <div className="flex items-center gap-4 flex-shrink-0">
          {excelUrl && (
            <a
              href={excelUrl}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-lg shadow-md transition-colors duration-150 inline-flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Excel
            </a>
          )}
          {data && Object.keys(data).length > 0 && (
            <Link
              href="/ai-analysis"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-6 py-3 rounded-lg shadow-md transition-colors duration-150 inline-flex items-center gap-2"
            >
              AI Analysis
            </Link>
          )}
          <Link
            href="/"
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold px-6 py-3 rounded-lg shadow-md transition-colors duration-150"
          >
            Homepage
          </Link>
        </div>
      </div>

      {/* Crawl Summary */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <FaSitemap className="text-green-600" />
          Crawl Summary
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">
              {pagesScanned}
            </div>
            <div className="text-sm text-gray-600">Pages Scanned</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">
              {data.workingLinks?.length || 0}
            </div>
            <div className="text-sm text-gray-600">Working Links</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600">
              {data.brokenLinks?.length || 0}
            </div>
            <div className="text-sm text-gray-600">Broken Links</div>
          </div>
        </div>
      </div>

      {/* Performance Summary - DISABLED (Lighthouse not available) */}
      {/*
      {performanceData.length > 0 && (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FaTachometerAlt className="text-blue-600" />
            Performance Summary
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div
                className={`text-3xl font-bold ${getScoreColor(
                  averagePerformance
                )}`}
              >
                {averagePerformance}
              </div>
              <div className="text-sm text-gray-600">Performance</div>
            </div>
            <div className="text-center">
              <div
                className={`text-3xl font-bold ${getScoreColor(
                  averageAccessibility
                )}`}
              >
                {averageAccessibility}
              </div>
              <div className="text-sm text-gray-600">Accessibility</div>
            </div>
            <div className="text-center">
              <div
                className={`text-3xl font-bold ${getScoreColor(
                  averageBestPractices
                )}`}
              >
                {averageBestPractices}
              </div>
              <div className="text-sm text-gray-600">Best Practices</div>
            </div>
            <div className="text-center">
              <div
                className={`text-3xl font-bold ${getScoreColor(averageSEO)}`}
              >
                {averageSEO}
              </div>
              <div className="text-sm text-gray-600">SEO</div>
            </div>
          </div>
        </div>
      )}
      */}

      <div className="flex flex-wrap gap-2 border-b-2 border-gray-200 pb-2 mb-6">
        {TABS.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`px-4 py-2 text-sm font-semibold rounded-t-lg transition-colors duration-150 flex items-center gap-2 ${
              activeTab === tab.name
                ? "bg-blue-600 text-white shadow-lg -mb-0.5 border-b-2 border-blue-600"
                : "text-gray-600 hover:bg-blue-100 hover:text-blue-700"
            }`}
          >
            {tab.icon} {tab.name}
          </button>
        ))}
      </div>

      <div className="mt-2">
        <SectionTable title={activeTab} data={data[DATA_KEYS[activeTab]]} />
      </div>
    </div>
  );
}
