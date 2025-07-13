"use client";
import { useState, useEffect } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isHomePage = mounted ? pathname === "/" : false;

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#how-it-works", label: "How it Works" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#faq", label: "FAQ" },
  ];

  const handleNavLinkClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();

    if (href.startsWith("/")) {
      // External page navigation
      router.push(href);
      setIsMenuOpen(false);
    } else {
      // Section navigation
      if (isHomePage) {
        // If already on homepage, scroll to section
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // If on another page, navigate to homepage with section
        router.push(`/${href}`);
      }
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo.svg"
            alt="CrawlVaani Logo"
            width={135}
            height={45}
            priority
          />
        </Link>

        {/* Desktop Navigation - Only show after mount */}
        {mounted && (
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavLinkClick(link.href, e)}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group cursor-pointer"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>
        )}

        {/* CTA Button - Only show after mount */}
        {mounted && (
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={isHomePage ? "#seo-audit" : "/#seo-audit"}
              onClick={(e) => {
                if (isHomePage) {
                  e.preventDefault();
                  const element = document.querySelector("#seo-audit");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }
              }}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Start Free Audit
            </a>
          </div>
        )}

        {/* Mobile Menu Button - Only show after mount */}
        {mounted && (
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        )}
      </div>

      {/* Mobile Navigation - Only show after mount */}
      {mounted && isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavLinkClick(link.href, e)}
                className="block text-gray-700 hover:text-blue-600 font-medium transition-colors py-2 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-200">
              <a
                href={isHomePage ? "#seo-audit" : "/#seo-audit"}
                onClick={(e) => {
                  if (isHomePage) {
                    e.preventDefault();
                    const element = document.querySelector("#seo-audit");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }
                  setIsMenuOpen(false);
                }}
                className="block w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-lg font-semibold text-center shadow-lg transition-all duration-300"
              >
                Start Free Audit
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
