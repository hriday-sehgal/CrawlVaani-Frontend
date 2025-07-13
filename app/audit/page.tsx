"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import SeoDashboard from "../../components/SeoDashboard";

export default function AuditPage() {
  const router = useRouter();
  const [reportData, setReportData] = useState<any>(null);

  useEffect(() => {
    // Try to get reportData from history state (if redirected)
    if (
      window.history.state &&
      window.history.state.usr &&
      window.history.state.usr.reportData
    ) {
      setReportData(window.history.state.usr.reportData);
      // Optionally, store in localStorage for refresh persistence
      localStorage.setItem(
        "reportData",
        JSON.stringify(window.history.state.usr.reportData)
      );
    } else {
      // Fallback: try to get from localStorage
      const stored = localStorage.getItem("reportData");
      if (stored) setReportData(JSON.parse(stored));
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#f8fafc] to-[#e0e7ef]">
      <main className="flex-1 w-full py-8">
        <div className="container mx-auto">
          <SeoDashboard reportData={reportData} />
        </div>
      </main>
    </div>
  );
}
