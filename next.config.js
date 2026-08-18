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
      // /reviews removed 2026-08-17: the practice has no published reviews and
      // almost no search footprint, so the page was an empty shell. Redirect
      // rather than 404 in case the preview URL was ever linked.
      { source: '/reviews', destination: '/contact', permanent: true },
      // Legacy Wix URLs. Point each at its real successor rather than dumping
      // everything on the homepage — /adh was the practice's "ADHD and Cognitive
      // Assessment" page and /ketamine-treatment now has a direct equivalent.
      { source: '/adh', destination: '/services/adhd-testing', permanent: true },
      { source: '/ketamine-treatment', destination: '/services/ketamine-treatment', permanent: true },
      { source: '/projects-6', destination: '/', permanent: true },
      // Location pages the autobuild invented for cities the practice has no
      // office in. Send them to the primary office rather than 404ing.
      { source: '/locations/arlington-va', destination: '/locations/fredericksburg-va', permanent: true },
      { source: '/locations/alexandria-va', destination: '/locations/fredericksburg-va', permanent: true },
      { source: '/locations/fairfax-va', destination: '/locations/fredericksburg-va', permanent: true },
      { source: '/locations/bethesda-md', destination: '/locations/fredericksburg-va', permanent: true },
    ];
  },
};
module.exports = nextConfig;