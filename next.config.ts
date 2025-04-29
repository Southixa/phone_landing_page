import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'qwplfgkawimqeolljewf.supabase.co',
      '127.0.0.1',
      'supabasekong-fc44oo84g8kcocgowo4ggw0s.138.199.223.143.sslip.io',
      'server.pamtip-lao',
      'server.pamtip-lao.com'
    ],
  },
};

export default nextConfig;
