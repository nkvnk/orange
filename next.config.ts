import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // 他の設定オプションもここに追加できます
};

export default nextConfig;
