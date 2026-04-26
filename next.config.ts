import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(self), interest-cohort=()",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    // Single-hop redirect from apex to www so AI crawlers don't pay a 2-hop tax.
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "kwikprovidence.com" }],
        destination: "https://www.kwikprovidence.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
