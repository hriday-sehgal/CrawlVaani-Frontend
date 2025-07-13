import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 text-gray-700 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand and Socials */}
          <div className="space-y-4">
            <Image
              src="/logo.svg"
              alt="CrawlVaani Logo"
              width={150}
              height={50}
            />
            <p className="text-gray-600">Crawl Smart. Rank Better.</p>
            <div className="flex space-x-4 text-2xl">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/#features"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/#seo-audit"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Free Audit
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-gray-900 tracking-wider uppercase">
              Legal
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8 text-center text-sm">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} CrawlVaani. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
