#!/usr/bin/env node

import { execSync } from "child_process";
import { existsSync } from "fs";
import path from "path";

console.log("🔧 Testing Next.js build...");

try {
  // Check if we're in the right directory
  if (!existsSync("package.json")) {
    console.error(
      "❌ Please run this script from the frontend/crawlvaani directory"
    );
    process.exit(1);
  }

  console.log("📦 Installing dependencies...");
  execSync("npm install", { stdio: "inherit" });

  console.log("🏗️  Building the application...");
  execSync("npm run build", { stdio: "inherit" });

  console.log("✅ Build completed successfully!");
  console.log("🚀 Ready for deployment to Vercel");
} catch (error) {
  console.error("❌ Build failed:", error.message);
  process.exit(1);
}
