"use client";

import Link from "next/link";
import { FaSearch, FaHome, FaArrowLeft, FaRocket } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Icon */}
          <div className="mb-8">
            <div className="relative">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl">
                <FaSearch className="text-white text-4xl" />
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">!</span>
              </div>
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h1 className="text-8xl font-bold text-gray-900 mb-4">404</h1>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Page Not Found
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Oops! The page you're looking for seems to have wandered off.
              Don't worry, let's get you back on track.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4 mb-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <FaHome />
                Go Home
              </Link>

              <Link
                href="/#seo-audit"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 hover:border-blue-700 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <FaRocket />
                Start SEO Audit
              </Link>
            </div>

            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <FaArrowLeft />
              Go Back
            </button>
          </div>

          {/* Helpful Links */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Looking for something specific?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800">Popular Pages</h4>
                <ul className="space-y-1 text-sm">
                  <li>
                    <Link
                      href="/#features"
                      className="text-blue-600 hover:text-blue-700 hover:underline"
                    >
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#how-it-works"
                      className="text-blue-600 hover:text-blue-700 hover:underline"
                    >
                      How it Works
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#faq"
                      className="text-blue-600 hover:text-blue-700 hover:underline"
                    >
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800">Legal</h4>
                <ul className="space-y-1 text-sm">
                  <li>
                    <Link
                      href="/privacy"
                      className="text-blue-600 hover:text-blue-700 hover:underline"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms"
                      className="text-blue-600 hover:text-blue-700 hover:underline"
                    >
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Fun Message */}
          <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-blue-800 text-sm">
              💡 <strong>Pro tip:</strong> While you're here, why not run a
              quick SEO audit on your website? It only takes a few minutes and
              it's completely free!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
