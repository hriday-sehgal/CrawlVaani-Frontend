import { useEffect, useRef, useState } from "react";
import {
  FaQuoteLeft,
  FaStar,
  FaGlobe,
  FaCheckCircle,
  FaSmile,
  FaClock,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const testimonials = [
  {
    quote:
      "CrawlVaani gave me the insights I needed to improve my site's ranking. The downloadable reports are incredibly detailed and easy to use. It's become an essential part of my SEO toolkit.",
    name: "Lokesh Agarwal",
    title: "SEO Team Lead",
    company: "RegistKaro",
    rating: 5,
    avatar: "LA",
  },
  {
    quote:
      "The best free SEO audit tool I've used. It's fast, comprehensive, and helped me identify critical accessibility issues I had missed. The interface is intuitive and the results are actionable.",
    name: "Sanjeet Kumar",
    title: "SEO Manager",
    company: "RegisterKaro",
    rating: 5,
    avatar: "SK",
  },
  {
    quote:
      "A must-have for any SEO professional. The technical health check is thorough, and the interface is clean and intuitive. It's saved me hours of manual analysis.",
    name: "Preeti Gupta",
    title: "Content Team Lead",
    company: "RegisterKaro",
    rating: 5,
    avatar: "PG",
  },
  {
    quote:
      "I was skeptical about free SEO tools, but CrawlVaani exceeded my expectations. The reports are professional-grade and the insights helped me boost my client's rankings significantly.",
    name: "Animesh Kumar",
    title: "Frontend Developer",
    company: "RegisterKaro",
    rating: 5,
    avatar: "AK",
  },
  {
    quote:
      "Fast, accurate, and comprehensive. This tool has become my go-to for quick SEO audits. The downloadable Excel reports are perfect for client presentations.",
    name: "Raj Sehgal",
    title: "Healthcare Consultant",
    company: "Gratitude Healthcare",
    rating: 5,
    avatar: "RS",
  },
  {
    quote:
      "The accessibility audit feature is a game-changer. It helped me identify and fix issues that were hurting my site's user experience and search rankings.",
    name: "Nikhil Purwar",
    title: "Data Analyst",
    company: "Grant Thornton",
    rating: 5,
    avatar: "NP",
  },
];

const VISIBLE_CARDS = 5; // Number of cards visible in 3D
const AUTO_ADVANCE_MS = 5000;

export default function TestimonialsSection() {
  const [centerIdx, setCenterIdx] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const dragStartX = useRef<number | null>(null);
  const dragDelta = useRef<number>(0);
  const [isDragging, setIsDragging] = useState(false);

  // Auto-advance
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCenterIdx((prev) => (prev + 1) % testimonials.length);
    }, AUTO_ADVANCE_MS);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // Manual controls
  const goLeft = () => {
    setCenterIdx(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setCenterIdx((prev) => (prev + 1) % testimonials.length);
      }, AUTO_ADVANCE_MS);
    }
  };
  const goRight = () => {
    setCenterIdx((prev) => (prev + 1) % testimonials.length);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setCenterIdx((prev) => (prev + 1) % testimonials.length);
      }, AUTO_ADVANCE_MS);
    }
  };

  // Drag/swipe support
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    dragStartX.current = e.clientX;
    dragDelta.current = 0;
  };
  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || dragStartX.current === null) return;
    dragDelta.current = e.clientX - dragStartX.current;
  };
  const handlePointerUp = () => {
    setIsDragging(false);
    if (dragDelta.current > 60) {
      goLeft();
    } else if (dragDelta.current < -60) {
      goRight();
    }
    dragStartX.current = null;
    dragDelta.current = 0;
  };

  // Helper to get the correct testimonial index for a given position
  const getTestimonialIdx = (offset: number) => {
    const idx =
      (centerIdx + offset + testimonials.length) % testimonials.length;
    return idx;
  };

  // 3D transform for each card
  const getCardStyle = (offset: number) => {
    const baseZ = 120;
    const baseX = 220;
    const baseRotate = 30;
    if (offset === 0) {
      return {
        transform: `translateZ(${baseZ}px) scale(1.1)`,
        zIndex: 10,
        opacity: 1,
      };
    }
    if (Math.abs(offset) > Math.floor(VISIBLE_CARDS / 2)) {
      return {
        transform: "scale(0.7)",
        zIndex: 1,
        opacity: 0,
        pointerEvents: "none" as React.CSSProperties["pointerEvents"],
      };
    }
    return {
      transform: `translateX(${offset * baseX}px) translateZ(${
        baseZ - Math.abs(offset) * 60
      }px) rotateY(${offset * -baseRotate}deg) scale(${
        1 - Math.abs(offset) * 0.13
      })`,
      zIndex: 5 - Math.abs(offset),
      opacity: 0.7 + 0.3 / Math.abs(offset),
    };
  };

  return (
    <section
      className="w-full py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50"
      id="testimonials"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Trusted by Professionals Worldwide
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of marketers, developers, and SEO specialists who
            rely on CrawlVaani for comprehensive website audits.
          </p>
        </div>

        {/* 3D Infinite Carousel with Controls */}
        <div className="relative flex items-center justify-center h-[420px] md:h-[400px] mb-16 select-none">
          {/* Left Arrow */}
          <button
            aria-label="Previous testimonial"
            onClick={goLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-blue-100 text-blue-600 rounded-full shadow p-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <FaChevronLeft className="text-2xl" />
          </button>
          {/* Carousel */}
          <div
            className="w-full flex items-center justify-center perspective-[1200px] cursor-grab active:cursor-grabbing"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={() => setIsDragging(false)}
            onPointerCancel={() => setIsDragging(false)}
            role="region"
            aria-label="Testimonials carousel"
            tabIndex={0}
          >
            {Array.from({ length: VISIBLE_CARDS }, (_, i) => {
              const offset = i - Math.floor(VISIBLE_CARDS / 2);
              const idx = getTestimonialIdx(offset);
              const testimonial = testimonials[idx];
              return (
                <div
                  key={idx}
                  className="absolute left-1/2 top-1/2 w-80 md:w-96 -translate-x-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-gray-100 overflow-hidden transition-all duration-700 ease-in-out flex flex-col items-center group"
                  style={getCardStyle(offset)}
                >
                  {/* Animated Quote icon */}
                  <div className="absolute top-4 right-4 animate-pulse">
                    <FaQuoteLeft className="text-blue-100 text-2xl group-hover:text-blue-400 transition-colors duration-300" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, index) => (
                      <FaStar
                        key={index}
                        className="text-yellow-400 text-sm animate-fade-in"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-700 leading-relaxed mb-6 italic text-center">
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center mt-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg border-4 border-white mr-4 group-hover:scale-110 transition-transform duration-300">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-600">
                        {testimonial.title}
                      </p>
                      <p className="text-xs text-gray-500">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Right Arrow */}
          <button
            aria-label="Next testimonial"
            onClick={goRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-blue-100 text-blue-600 rounded-full shadow p-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <FaChevronRight className="text-2xl" />
          </button>
        </div>

        {/* Stats section with icons */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center">
            <FaGlobe className="text-blue-500 text-3xl mb-2" />
            <div className="text-3xl font-bold text-blue-600 mb-1">10K+</div>
            <div className="text-gray-600 text-sm">Websites Audited</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center">
            <FaCheckCircle className="text-green-500 text-3xl mb-2" />
            <div className="text-3xl font-bold text-green-600 mb-1">98%</div>
            <div className="text-gray-600 text-sm">Accuracy Rate</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center">
            <FaSmile className="text-purple-500 text-3xl mb-2" />
            <div className="text-3xl font-bold text-purple-600 mb-1">5.0</div>
            <div className="text-gray-600 text-sm">User Rating</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center">
            <FaClock className="text-orange-500 text-3xl mb-2" />
            <div className="text-3xl font-bold text-orange-600 mb-1">24/7</div>
            <div className="text-gray-600 text-sm">Available</div>
          </div>
        </div>
      </div>
    </section>
  );
}
