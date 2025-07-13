import Link from "next/link";
import {
  FaGavel,
  FaExclamationTriangle,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - CrawlVaani",
  description:
    "Read the terms and conditions governing your use of CrawlVaani's SEO analysis service.",
  keywords:
    "terms of service, terms and conditions, CrawlVaani terms, SEO tool terms",
  alternates: {
    canonical: "/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Terms of Service - CrawlVaani",
    description:
      "Terms and conditions for using CrawlVaani's SEO analysis service.",
    url: "https://crawlvaani.vercel.app/terms",
  },
};

export default function TermsOfService() {
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
              <FaGavel className="text-blue-600 text-3xl" />
              <h1 className="text-4xl font-bold text-gray-900">
                Terms of Service
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
                These Terms of Service ("Terms") govern your use of CrawlVaani's
                SEO analysis service. By using our service, you agree to be
                bound by these Terms. If you disagree with any part of these
                terms, you may not access our service.
              </p>
            </section>

            {/* Service Description */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Service Description
              </h2>
              <p className="text-gray-700 mb-4">
                CrawlVaani provides automated SEO analysis and reporting
                services. Our service includes:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                  <span>Website SEO analysis and scoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                  <span>Technical health assessments</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                  <span>Accessibility compliance checks</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                  <span>Downloadable Excel reports</span>
                </li>
              </ul>
            </section>

            {/* User Responsibilities */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                User Responsibilities
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Acceptable Use
                  </h3>
                  <p className="text-gray-700 mb-3">
                    You agree to use our service only for lawful purposes and in
                    accordance with these Terms. You must not:
                  </p>
                  <ul className="space-y-1 text-gray-700 ml-4">
                    <li className="flex items-start gap-2">
                      <FaTimesCircle className="text-red-600 mt-1 flex-shrink-0" />
                      <span>
                        Submit URLs that you do not own or have permission to
                        analyze
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaTimesCircle className="text-red-600 mt-1 flex-shrink-0" />
                      <span>
                        Use our service for any illegal or unauthorized purpose
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaTimesCircle className="text-red-600 mt-1 flex-shrink-0" />
                      <span>
                        Attempt to gain unauthorized access to our systems
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaTimesCircle className="text-red-600 mt-1 flex-shrink-0" />
                      <span>Interfere with or disrupt our service</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Website Ownership
                  </h3>
                  <p className="text-gray-700">
                    You represent and warrant that you have the right to analyze
                    any website URLs you submit to our service, either as the
                    owner or with proper authorization.
                  </p>
                </div>
              </div>
            </section>

            {/* Service Limitations */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FaExclamationTriangle className="text-orange-600" />
                Service Limitations
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Availability
                  </h3>
                  <p className="text-gray-700">
                    While we strive to maintain high service availability, we do
                    not guarantee uninterrupted access to our service. We may
                    temporarily suspend or restrict access for maintenance,
                    updates, or other operational reasons.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Accuracy
                  </h3>
                  <p className="text-gray-700">
                    Our SEO analysis is based on automated algorithms and
                    current best practices. While we strive for accuracy, we
                    cannot guarantee that our analysis will be 100% accurate or
                    suitable for all purposes.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Rate Limiting
                  </h3>
                  <p className="text-gray-700">
                    We may implement rate limiting to ensure fair usage and
                    prevent abuse of our service. Excessive requests may result
                    in temporary restrictions.
                  </p>
                </div>
              </div>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Intellectual Property
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Our Rights
                  </h3>
                  <p className="text-gray-700">
                    CrawlVaani and its original content, features, and
                    functionality are owned by us and are protected by
                    international copyright, trademark, patent, trade secret,
                    and other intellectual property laws.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Your Rights
                  </h3>
                  <p className="text-gray-700">
                    You retain ownership of your website content. Our analysis
                    reports are provided for your use, but we retain the right
                    to use anonymized data for service improvement.
                  </p>
                </div>
              </div>
            </section>

            {/* Privacy */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy</h2>
              <p className="text-gray-700">
                Your privacy is important to us. Please review our Privacy
                Policy, which also governs your use of our service, to
                understand our practices regarding the collection and use of
                your information.
              </p>
            </section>

            {/* Disclaimers */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Disclaimers
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                  <p className="text-orange-800">
                    <strong>Disclaimer of Warranties:</strong> Our service is
                    provided "as is" and "as available" without any warranties
                    of any kind, either express or implied.
                  </p>
                </div>
                <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                  <p className="text-orange-800">
                    <strong>Limitation of Liability:</strong> In no event shall
                    CrawlVaani be liable for any indirect, incidental, special,
                    consequential, or punitive damages arising out of or
                    relating to your use of our service.
                  </p>
                </div>
              </div>
            </section>

            {/* Indemnification */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Indemnification
              </h2>
              <p className="text-gray-700">
                You agree to defend, indemnify, and hold harmless CrawlVaani
                from and against any claims, damages, obligations, losses,
                liabilities, costs, or debt arising from your use of our service
                or violation of these Terms.
              </p>
            </section>

            {/* Termination */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Termination
              </h2>
              <p className="text-gray-700">
                We may terminate or suspend your access to our service
                immediately, without prior notice or liability, for any reason
                whatsoever, including without limitation if you breach the
                Terms.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Governing Law
              </h2>
              <p className="text-gray-700">
                These Terms shall be interpreted and governed by the laws of
                [Your Jurisdiction], without regard to its conflict of law
                provisions.
              </p>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Changes to Terms
              </h2>
              <p className="text-gray-700">
                We reserve the right to modify or replace these Terms at any
                time. If a revision is material, we will provide at least 30
                days notice prior to any new terms taking effect.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-700">
                If you have any questions about these Terms of Service, please
                contact us at:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> legal@crawlvaani.com
                  <br />
                  <strong>Address:</strong> [Your Business Address]
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
