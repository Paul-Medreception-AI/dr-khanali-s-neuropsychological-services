/** @type {import("next").NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  async redirects() {
    return [
      { source: '/privacy', destination: '/privacy-sms', permanent: true },
      { source: '/privacy-policy', destination: '/privacy-sms', permanent: true },
      { source: '/terms', destination: '/terms-sms', permanent: true },
      { source: '/terms-of-service', destination: '/terms-sms', permanent: true },
      { source: '/sms-terms', destination: '/terms-sms', permanent: true },
      { source: '/adh', destination: '/', permanent: true },
      { source: '/ketamine-treatment', destination: '/services', permanent: true },
      { source: '/projects-6', destination: '/', permanent: true },
    ];
  },
};
module.exports = nextConfig;