import { IconArrowRight } from "@tabler/icons-react";

export default function HeroSection() {
  return (
    <section
      className="w-full bg-gradient-to-b from-white via-blue-50 to-white py-28 text-gray-900"
      id="hero"
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center px-6">
        <span className="inline-block mb-4 px-4 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold text-xs tracking-widest uppercase shadow-sm">
          AI-Powered • Fast • Free
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Unlock Your Website's SEO Superpowers
        </h1>
        <p className="text-lg md:text-2xl text-blue-900 mb-10 max-w-2xl font-medium">
          Get a{" "}
          <span className="font-bold text-blue-700">
            free, AI-powered SEO audit
          </span>{" "}
          with actionable insights. No sign-up required.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <a
            href="#seo-audit"
            className="inline-flex items-center bg-blue-600 text-white hover:bg-blue-700 font-bold px-10 py-5 rounded-full text-xl shadow-xl transition-all transform hover:scale-105 focus:ring-4 focus:ring-blue-200 border-2 border-transparent hover:border-blue-800"
          >
            Start Your Free SEO Audit
            <IconArrowRight className="ml-3" size={28} stroke={2} />
          </a>
          <button
            onClick={async () => {
              try {
                const response = await fetch(
                  "http://localhost:4000/api/seo-checklist/pdf"
                );
                if (response.ok) {
                  const blob = await response.blob();
                  const url = window.URL.createObjectURL(blob);
                  const a = document.createElement("a");
                  a.href = url;
                  a.download = `SEO-Checklist-25-Quick-Fixes-${
                    new Date().toISOString().split("T")[0]
                  }.pdf`;
                  document.body.appendChild(a);
                  a.click();
                  window.URL.revokeObjectURL(url);
                  document.body.removeChild(a);
                } else {
                  alert("Failed to download SEO checklist. Please try again.");
                }
              } catch (error) {
                console.error("Error downloading SEO checklist:", error);
                alert("Failed to download SEO checklist. Please try again.");
              }
            }}
            className="inline-flex items-center bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-full text-lg shadow-lg transition-all transform hover:scale-105 focus:ring-4 focus:ring-blue-200 border-2 border-blue-600"
          >
            📥 Get SEO Checklist
          </button>
        </div>
      </div>
    </section>
  );
}
