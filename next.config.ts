import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [{ source: "/organizations", destination: "/organizations.html" }];
  },
};

export default nextConfig;
