import { FaArrowRight, FaRocket, FaStar, FaUsers } from "react-icons/fa";

export default function CtaSection() {
  return (
    <section
      className="w-full bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 relative overflow-hidden py-12"
      id="cta"
    >
      {/* Background decoration - removed animate-pulse to prevent flickering */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-white/10 rounded-full"></div>
        <div className="absolute bottom-10 left-1/4 w-16 h-16 bg-white/10 rounded-full"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-8 backdrop-blur-sm">
            <FaRocket className="text-white text-3xl" />
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Ready to boost your website's SEO?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join thousands of professionals who trust CrawlVaani for
            comprehensive website audits. Get actionable insights to improve
            your SEO.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-center gap-2 mb-2">
                <FaUsers className="text-white text-2xl" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">10K+</div>
              <div className="text-blue-100 text-sm">Websites Audited</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-center gap-2 mb-2">
                <FaStar className="text-white text-2xl" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">5.0</div>
              <div className="text-blue-100 text-sm">User Rating</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-center gap-2 mb-2">
                <FaRocket className="text-white text-2xl" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">Fast</div>
              <div className="text-blue-100 text-sm">Analysis</div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main CTA Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Start Your Free SEO Audit Today
            </h3>
            <p className="text-gray-600 mb-6">
              No registration required. Get access to professional-grade SEO
              insights and downloadable reports.
            </p>
            <div className="space-y-4">
              <a
                href="#seo-audit"
                className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold px-8 py-4 rounded-2xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <FaRocket />
                Start Free Audit
                <FaArrowRight />
              </a>
              <p className="text-sm text-gray-500 text-center">
                ✓ No credit card required • ✓ Detailed analysis • ✓ Professional
                reports
              </p>
            </div>
          </div>

          {/* Benefits */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h4 className="text-xl font-bold text-white mb-4">
                What You'll Get
              </h4>
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    Comprehensive SEO analysis with actionable insights
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span>Accessibility compliance check (WCAG guidelines)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span>Technical health score and recommendations</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span>Downloadable Excel report for team sharing</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-2xl p-6 border border-green-400/30">
              <h4 className="text-xl font-bold text-white mb-3">
                Why Professionals Choose Us
              </h4>
              <div className="grid grid-cols-2 gap-4 text-sm text-blue-100">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  <span>100% Free</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  <span>No Signup</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  <span>Detailed Analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  <span>Pro Reports</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
