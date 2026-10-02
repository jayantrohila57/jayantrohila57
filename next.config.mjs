/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["lucide-react", "lenis"],
  },
  async redirects() {
    return [
      { source: "/about/overview", destination: "/about", permanent: true },
      { source: "/career/timeline", destination: "/about", permanent: true },
      { source: "/work/projects", destination: "/work", permanent: true },
      { source: "/work/case-studies", destination: "/work", permanent: true },
      {
        source: "/work/case-studies/:slug",
        destination: "/work/:slug",
        permanent: true,
      },
      { source: "/work/skills", destination: "/engineering", permanent: true },
    ];
  },
};

export default config;
