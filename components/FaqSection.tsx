"use client";
import React, { useState } from "react";
import { FaPlus, FaMinus, FaQuestionCircle } from "react-icons/fa";

const faqs = [
  {
    q: "Is this SEO audit tool really free?",
    a: "Yes, our website audit is 100% free with no hidden costs. We believe in providing value upfront to help you improve your website's SEO performance and accessibility.",
    category: "Pricing",
  },
  {
    q: "What does the technical SEO audit cover?",
    a: "Our comprehensive technical audit checks for critical issues including broken links, sitemap and robots.txt configuration, page load speed insights, meta tags optimization, heading structure, image optimization, and mobile responsiveness.",
    category: "Features",
  },
  {
    q: "How long does it take to get my report?",
    a: "Most reports are generated in under 60 seconds. For larger websites with many pages, it may take 2-3 minutes to complete the full crawl and analysis.",
    category: "Performance",
  },
  {
    q: "Can I download my SEO report?",
    a: "Absolutely! You can download a detailed Excel report with all the data from your audit, including scores, recommendations, and actionable insights. Perfect for sharing with your team or clients.",
    category: "Reports",
  },
  {
    q: "What makes CrawlVaani different from other SEO tools?",
    a: "CrawlVaani combines speed, accuracy, and ease of use. We provide instant results, comprehensive accessibility checks, and professional-grade reports - all completely free. No signup required.",
    category: "Features",
  },
  {
    q: "Do you store my website data?",
    a: "No, we don't store any of your website data permanently. Your crawl results are processed in real-time and only temporarily cached to generate your report. Your privacy is our priority.",
    category: "Privacy",
  },
  {
    q: "Can I audit multiple pages of my website?",
    a: "Yes! Our crawler automatically discovers and analyzes multiple pages from your website, providing a comprehensive overview of your entire site's SEO health.",
    category: "Features",
  },
  {
    q: "What accessibility issues does the tool check for?",
    a: "We check for WCAG compliance including alt text for images, proper heading structure, color contrast, keyboard navigation, and other accessibility best practices that also improve SEO.",
    category: "Accessibility",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section
      className="w-full py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-white"
      id="faq"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6 shadow-lg">
            <FaQuestionCircle className="text-blue-600 text-3xl" />
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about CrawlVaani's free SEO audit tool
          </p>
        </div>

        <div className="grid gap-8">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`relative bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border-l-8 border-blue-200 overflow-hidden transition-all duration-300 group ${
                open === i ? "ring-2 ring-blue-200" : ""
              }`}
            >
              <button
                onClick={() => toggle(i)}
                aria-expanded={open === i}
                aria-controls={`faq-panel-${i}`}
                className="w-full flex justify-between items-center p-8 font-semibold text-left focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent"
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-400 rounded-full flex items-center justify-center shadow text-white font-bold text-lg border-4 border-white">
                    {i + 1}
                  </div>
                  <div className="text-left">
                    <span className="text-gray-900 text-lg md:text-xl font-bold">
                      {faq.q}
                    </span>
                    <div className="mt-2">
                      <span className="inline-block bg-blue-50 text-blue-600 text-xs font-medium px-3 py-1 rounded-full">
                        {faq.category}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="flex-shrink-0 ml-4 transition-transform duration-500"
                  style={{
                    transform: open === i ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  {open === i ? (
                    <FaMinus className="text-blue-600 text-xl" />
                  ) : (
                    <FaPlus className="text-gray-400 text-xl" />
                  )}
                </div>
              </button>
              <div
                id={`faq-panel-${i}`}
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  open === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
                tabIndex={open === i ? 0 : -1}
                aria-hidden={open !== i}
              >
                <div className="px-8 pb-8">
                  <div className="pt-4">
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl p-10 border border-blue-200 shadow-xl w-full max-w-xl flex flex-col items-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6 text-center">
              Can't find the answer you're looking for? Try our free SEO audit
              to see CrawlVaani in action.
            </p>
            <a
              href="#seo-audit"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-8 py-4 rounded-xl text-lg shadow-lg transition-colors"
            >
              Start Free Audit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
