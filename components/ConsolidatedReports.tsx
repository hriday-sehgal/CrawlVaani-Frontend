"use client";

import React, { useState, useEffect } from "react";
import {
  FaDownload,
  FaFileExcel,
  FaFilePdf,
  FaGlobe,
  FaCalendar,
  FaFileAlt,
  FaEye,
  FaTimesCircle,
  FaCheckCircle,
  FaInfoCircle,
  FaLink,
} from "react-icons/fa";

interface ReportFile {
  fileName: string;
  domain: string;
  fullUrl: string;
  crawlDate: string;
  filePath: string;
  size: number;
}

export default function IndividualReports() {
  const [reportFiles, setReportFiles] = useState<ReportFile[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [downloading, setDownloading] = useState<string | null>(null);

  useEffect(() => {
    fetchReportList();
  }, []);

  const fetchReportList = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/reports/list");
      if (response.ok) {
        const data = await response.json();
        // Use the fullUrl from the backend instead of overriding it
        setReportFiles(data.reports || []);
      } else {
        throw new Error("Failed to fetch reports");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const downloadFile = async (type: "excel" | "pdf", fileName: string) => {
    try {
      setDownloading(`${type}-${fileName}`);
      const endpoint =
        type === "excel"
          ? `/api/reports/individual/excel/${fileName}`
          : `/api/reports/individual/pdf/${fileName}`;

      const response = await fetch(endpoint);

      if (!response.ok) {
        throw new Error(`Failed to download ${type.toUpperCase()} file`);
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download =
        response.headers
          .get("content-disposition")
          ?.split("filename=")[1]
          ?.replace(/"/g, "") ||
        `${fileName.replace(".xlsx", "")}-${type}.${
          type === "excel" ? "xlsx" : "pdf"
        }`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Download failed");
    } finally {
      setDownloading(null);
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return dateString;
    }
  };

  const extractWebsiteFromFilename = (fileName: string) => {
    // Extract the website part from filename like "SEO-Report-hridaysehgal-vercel-app-2025-01-15-14-30-25.xlsx"
    const match = fileName.match(/SEO-Report-(.+?)-(\d{4}-\d{2}-\d{2})/);
    if (match) {
      const websitePart = match[1]; // e.g., "hridaysehgal-vercel-app"
      const datePart = match[2]; // e.g., "2025-01-15"

      // Convert dashes to dots for domain format
      const domain = websitePart.replace(/-/g, ".");

      // Create proper URL
      let fullUrl = `https://${domain}`;

      // Handle special cases
      if (domain === "hridaysehgal.vercel.app") {
        fullUrl = "https://hridaysehgal.vercel.app/";
      } else if (domain === "thehealth24.com") {
        fullUrl = "https://thehealth24.com/";
      } else if (domain.includes("www.")) {
        fullUrl = `https://${domain}`;
      } else {
        fullUrl = `https://www.${domain}`;
      }

      return {
        website: websitePart,
        domain: domain,
        fullUrl: fullUrl,
        date: datePart,
      };
    }
    return null;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading reports...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <FaTimesCircle className="text-red-500 text-3xl mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-red-800 mb-2">
              Error Loading Reports
            </h3>
            <p className="text-red-600">{error}</p>
            <button
              onClick={fetchReportList}
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (reportFiles.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
            <FaInfoCircle className="text-yellow-500 text-3xl mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">
              No Reports Available
            </h3>
            <p className="text-yellow-600">
              No SEO reports found. Please run some website crawls first.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Individual SEO Reports
          </h1>
          <p className="text-lg text-gray-600">
            Download detailed reports for each website analysis
          </p>
        </div>

        {/* Summary Stats */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {reportFiles.length}
              </div>
              <div className="text-gray-600">Total Reports</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {reportFiles.filter((r) => r.size > 0).length}
              </div>
              <div className="text-gray-600">Available Reports</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {new Set(reportFiles.map((r) => r.domain)).size}
              </div>
              <div className="text-gray-600">Unique Domains</div>
            </div>
          </div>
        </div>

        {/* SEO Checklist Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg p-8 mb-8 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              🚀 Boost Your Website Traffic
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Get our comprehensive "25 Quick SEO Fixes" checklist to improve
              your search engine rankings
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold mb-2">25</div>
                <div className="text-sm opacity-80">Actionable Fixes</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold mb-2">3</div>
                <div className="text-sm opacity-80">Priority Levels</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold mb-2">100%</div>
                <div className="text-sm opacity-80">Free Download</div>
              </div>
            </div>
            <button
              onClick={async () => {
                try {
                  const response = await fetch(
                    `${
                      process.env.NEXT_PUBLIC_BACKEND_URL ||
                      "http://localhost:4000"
                    }/api/seo-checklist/pdf`
                  );
                  if (response.ok) {
                    const blob = await response.blob();
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement("a");
                    a.href = url;
                    a.download = `SEO-Checklist-25-Quick-Fixes-${
                      new Date().toISOString().split("T")[0]
                    }.pdf`;
                    document.body.appendChild(a);
                    a.click();
                    window.URL.revokeObjectURL(url);
                    document.body.removeChild(a);
                  } else {
                    alert(
                      "Failed to download SEO checklist. Please try again."
                    );
                  }
                } catch (error) {
                  console.error("Error downloading SEO checklist:", error);
                  alert("Failed to download SEO checklist. Please try again.");
                }
              }}
              className="mt-6 bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-full text-lg shadow-xl transition-all transform hover:scale-105 focus:ring-4 focus:ring-white/30"
            >
              📥 Download SEO Checklist PDF
            </button>
          </div>
        </div>

        {/* Reports Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <FaFileAlt className="text-blue-500" />
              Website Analysis Reports
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    File Name & Website
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Crawl Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    File Size
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Download Options
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {reportFiles.map((report, index) => {
                  const extractedInfo = extractWebsiteFromFilename(
                    report.fileName
                  );
                  return (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="space-y-3">
                          {/* Full Filename */}
                          <div className="flex items-start">
                            <div className="flex-shrink-0">
                              <FaFileAlt className="text-gray-400 text-sm mt-1" />
                            </div>
                            <div className="ml-3">
                              <div className="text-xs font-mono text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                {report.fileName}
                              </div>
                            </div>
                          </div>

                          {/* Website Information */}
                          <div className="flex items-center">
                            <div className="flex-shrink-0">
                              <FaGlobe className="text-blue-500 text-lg" />
                            </div>
                            <div className="ml-3">
                              <div className="text-sm font-medium text-gray-900">
                                {extractedInfo?.website
                                  ? extractedInfo.website.replace(/-/g, ".")
                                  : report.domain}
                              </div>
                              <div className="text-sm text-gray-500 flex items-center gap-1">
                                <FaLink className="text-xs" />
                                <a
                                  href={
                                    extractedInfo?.fullUrl || report.fullUrl
                                  }
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-600 hover:text-blue-800 hover:underline"
                                >
                                  {extractedInfo?.fullUrl || report.fullUrl}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex items-center">
                          <FaCalendar className="text-gray-400 mr-2" />
                          {formatDate(report.crawlDate)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatFileSize(report.size)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex flex-col gap-2">
                          {/* Original Excel */}
                          <button
                            onClick={() =>
                              window.open(
                                `${
                                  process.env.NEXT_PUBLIC_BACKEND_URL ||
                                  "http://localhost:4000"
                                }${report.filePath}`,
                                "_blank"
                              )
                            }
                            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-medium"
                          >
                            <FaFileExcel className="text-sm" />
                            Original Excel
                          </button>

                          {/* Enhanced Excel */}
                          <button
                            onClick={() =>
                              downloadFile("excel", report.fileName)
                            }
                            disabled={
                              downloading === `excel-${report.fileName}`
                            }
                            className="flex items-center gap-2 text-green-600 hover:text-green-800 text-sm font-medium disabled:opacity-50"
                          >
                            <FaFileExcel className="text-sm" />
                            {downloading === `excel-${report.fileName}`
                              ? "Generating..."
                              : "Enhanced Excel"}
                          </button>

                          {/* PDF Report */}
                          <button
                            onClick={() => downloadFile("pdf", report.fileName)}
                            disabled={downloading === `pdf-${report.fileName}`}
                            className="flex items-center gap-2 text-red-600 hover:text-red-800 text-sm font-medium disabled:opacity-50"
                          >
                            <FaFilePdf className="text-sm" />
                            {downloading === `pdf-${report.fileName}`
                              ? "Generating..."
                              : "PDF Report"}
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            <FaInfoCircle className="inline mr-1" />
            Reports are generated from comprehensive website crawls and include
            detailed SEO analysis, performance metrics, and actionable
            recommendations.
          </p>
        </div>
      </div>
    </div>
  );
}
