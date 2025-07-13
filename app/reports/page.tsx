"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import IndividualReports from "../../components/ConsolidatedReports";

// Separate component for search params logic
function TokenChecker() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();

  useEffect(() => {
    const token = searchParams.get("token");
    const validToken = process.env.NEXT_PUBLIC_REPORTS_TOKEN;

    // If no valid token is configured, deny access
    if (!validToken || validToken === "your-secret-token-here") {
      console.warn("No valid token configured for reports access");
      setIsAuthorized(false);
      setLoading(false);
      return;
    }

    // Check token on every load - no session storage
    if (token === validToken) {
      setIsAuthorized(true);
    } else {
      setIsAuthorized(false);
    }

    setLoading(false);
  }, [searchParams]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Checking access...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold text-red-800 mb-2">
              Access Denied
            </h3>
            <p className="text-red-600 mb-4">
              You don't have permission to view this page.
            </p>
            <p className="text-sm text-gray-500">
              Use the correct token in the URL to access reports.
            </p>
            <div className="mt-4 p-3 bg-gray-100 rounded text-xs text-gray-600">
              <p>Example: /reports?token=your-token-here</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <IndividualReports />;
}

export default function ReportsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading...</p>
            </div>
          </div>
        </div>
      }
    >
      <TokenChecker />
    </Suspense>
  );
}
