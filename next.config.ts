import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    // Use localhost for local development, Render URL for production
    const backendUrl =
      process.env.NODE_ENV === "development"
        ? "http://localhost:4000"
        : process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4000";

    return [
      {
        source: "/api/:path*",
        destination: `${backendUrl}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
