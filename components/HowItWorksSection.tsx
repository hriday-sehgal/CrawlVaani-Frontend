import { FaPlay, FaFileAlt, FaRocket } from "react-icons/fa";

export default function HowItWorksSection() {
  return (
    <section
      className="w-full py-24 bg-gradient-to-b from-gray-50 to-white"
      id="how-it-works"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Get Your SEO Report in 3 Simple Steps
        </h2>
        <p className="text-lg text-gray-600 mb-16">
          Fast, simple, and effective.
        </p>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-6">
              <div className="w-24 h-24 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white text-4xl font-bold shadow-xl">
                1
              </div>
              <div className="absolute -top-2 -right-2 w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xl">
                <FaPlay />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Enter Your URL
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Start by entering the full URL of the website you want to audit.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="relative mb-6">
              <div className="w-24 h-24 flex items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white text-4xl font-bold shadow-xl">
                2
              </div>
              <div className="absolute -top-2 -right-2 w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-600 text-xl">
                <FaFileAlt />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Run the Audit
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our crawler will analyze your site for SEO, accessibility, and
              technical issues.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="relative mb-6">
              <div className="w-24 h-24 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-purple-600 text-white text-4xl font-bold shadow-xl">
                3
              </div>
              <div className="absolute -top-2 -right-2 w-12 h-12 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 text-xl">
                <FaRocket />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Get Your Report
            </h3>
            <p className="text-gray-600 leading-relaxed">
              View the results on our dashboard or download the full Excel
              report.
            </p>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="flex items-center space-x-8 text-gray-400">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-blue-300"></div>
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-300 to-green-300"></div>
            <div className="w-16 h-0.5 bg-gradient-to-r from-green-300 to-purple-300"></div>
            <div className="w-16 h-0.5 bg-gradient-to-r from-purple-300 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
