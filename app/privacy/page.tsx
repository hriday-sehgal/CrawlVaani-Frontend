import Link from "next/link";
import { FaShieldAlt, FaLock, FaEye, FaUserShield } from "react-icons/fa";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - CrawlVaani",
  description:
    "Learn how CrawlVaani collects, uses, and protects your information when you use our SEO analysis service.",
  keywords:
    "privacy policy, data protection, CrawlVaani privacy, SEO tool privacy",
  alternates: {
    canonical: "/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Privacy Policy - CrawlVaani",
    description: "Learn how CrawlVaani protects your privacy and data.",
    url: "https://crawlvaani.vercel.app/privacy",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Content */}
      <main className="flex-1">
        {/* Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-4xl mx-auto px-6 py-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4"
            >
              ← Back to Home
            </Link>
            <div className="flex items-center gap-3">
              <FaShieldAlt className="text-blue-600 text-3xl" />
              <h1 className="text-4xl font-bold text-gray-900">
                Privacy Policy
              </h1>
            </div>
            <p className="text-gray-600 mt-2">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed">
                CrawlVaani ("we," "our," or "us") is committed to protecting
                your privacy. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you use our SEO
                analysis service.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FaEye className="text-blue-600" />
                Information We Collect
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Website URLs
                  </h3>
                  <p className="text-gray-700">
                    When you use our SEO audit service, we collect the website
                    URLs you submit for analysis. This information is used
                    solely to perform the requested SEO analysis.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Usage Data
                  </h3>
                  <p className="text-gray-700">
                    We may collect anonymous usage statistics to improve our
                    service, including but not limited to the number of audits
                    performed and general usage patterns.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Technical Information
                  </h3>
                  <p className="text-gray-700">
                    Our servers automatically collect certain technical
                    information, including your IP address, browser type, and
                    operating system for security and service optimization
                    purposes.
                  </p>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                How We Use Your Information
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>
                    To provide SEO analysis and generate reports for the
                    websites you submit
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>To improve our service and develop new features</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>
                    To ensure the security and integrity of our service
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>To comply with legal obligations</span>
                </li>
              </ul>
            </section>

            {/* Information Sharing */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FaLock className="text-blue-600" />
                Information Sharing
              </h2>
              <p className="text-gray-700 mb-4">
                We do not sell, trade, or otherwise transfer your personal
                information to third parties. We may share information only in
                the following circumstances:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>With your explicit consent</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>To comply with legal requirements or court orders</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>To protect our rights, property, or safety</span>
                </li>
              </ul>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FaUserShield className="text-blue-600" />
                Data Security
              </h2>
              <p className="text-gray-700">
                We implement appropriate technical and organizational security
                measures to protect your information against unauthorized
                access, alteration, disclosure, or destruction. However, no
                method of transmission over the internet is 100% secure.
              </p>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Data Retention
              </h2>
              <p className="text-gray-700">
                We retain your information only for as long as necessary to
                provide our services and comply with legal obligations. SEO
                analysis data is typically retained for a limited period to
                ensure service quality.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Your Rights
              </h2>
              <p className="text-gray-700 mb-4">You have the right to:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Access the personal information we hold about you</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Request correction of inaccurate information</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Request deletion of your information</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Object to our processing of your information</span>
                </li>
              </ul>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-700">
                If you have any questions about this Privacy Policy or our data
                practices, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> privacy@crawlvaani.com
                  <br />
                  <strong>Address:</strong> [Your Business Address]
                </p>
              </div>
            </section>

            {/* Changes to Policy */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Changes to This Policy
              </h2>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Last updated" date.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
