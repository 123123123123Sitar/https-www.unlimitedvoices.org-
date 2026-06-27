import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Silence the multi-lockfile workspace-root inference warning.
  outputFileTracingRoot: path.join(__dirname),
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "*.supabase.co" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
