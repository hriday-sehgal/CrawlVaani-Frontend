"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import HowItWorksSection from "../components/HowItWorksSection";
import TestimonialsSection from "../components/TestimonialsSection";
import SeoFormSection from "../components/SeoFormSection";
import CtaSection from "../components/CtaSection";
import FaqSection from "../components/FaqSection";

export default function Home() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");
  const searchParams = useSearchParams();

  // Handle hash navigation when coming from other pages
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Small delay to ensure all sections are rendered
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setDownloadUrl("");
    if (!url) {
      setError("Please enter a website URL.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(
        `${
          process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4000"
        }/api/crawl`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url }),
        }
      );
      const data = await res.json();
      if (!data.success) throw new Error(data.error || "Crawl failed");
      setDownloadUrl(
        `${process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4000"}${
          data.downloadUrl
        }`
      );
    } catch (err: any) {
      setError(err.message || "Crawl failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <SeoFormSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </div>
  );
}
