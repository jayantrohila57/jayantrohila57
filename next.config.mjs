/** @type {import('next').NextConfig} */
const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "object-src 'none'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://va.vercel-scripts.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https:",
      "font-src 'self' data: https://fonts.gstatic.com",
      "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://vitals.vercel-insights.com https://va.vercel-scripts.com",
    ].join("; "),
  },
];

const config = {
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "lenis",
      "radix-ui",
      "@radix-ui/react-dialog",
      "cmdk",
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/favicon.ico",
        destination: "/api/image?type=icon&size=32",
      },
      {
        source: "/apple-touch-icon.png",
        destination: "/api/image?type=apple&size=180",
      },
      {
        source: "/apple-touch-icon.jpg",
        destination: "/api/image?type=apple&size=180",
      },
    ];
  },
  async redirects() {
    return [
      { source: "/about/overview", destination: "/about", permanent: true },
      { source: "/career/timeline", destination: "/about", permanent: true },
      { source: "/career/education", destination: "/about", permanent: true },
      { source: "/work/projects", destination: "/work", permanent: true },
      { source: "/projects", destination: "/work", permanent: true },
      { source: "/blog", destination: "/writing", permanent: true },
      {
        source: "/engineering",
        destination: "/writing#engineering",
        permanent: true,
      },
      {
        source: "/experiments",
        destination: "/work?type=personal#lab",
        permanent: true,
      },
      { source: "/work/case-studies", destination: "/work", permanent: true },
      {
        source: "/work/case-studies/:slug",
        destination: "/work/:slug",
        permanent: true,
      },
      {
        source: "/work/skills",
        destination: "/writing#engineering",
        permanent: true,
      },
    ];
  },
};

export default config;
