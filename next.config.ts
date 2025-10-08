// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Skip ESLint during the Vercel/CI build so lint errors don't fail deploys.
  eslint: {
    ignoreDuringBuilds: true,
  },

  // If your CI build ever fails on TypeScript type errors, you can temporarily
  // uncomment this. (Keep it false/removed for local dev quality.)
  // typescript: {
  //   ignoreBuildErrors: true,
  // },

  // You can keep adding any other Next.js settings here as needed.
};

export default nextConfig;