/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.wixstatic.com',
      },
    ],
    qualities: [100, 75, 50, 25],
  },
  async rewrites() {
    return [
      {
        source: '/politica-de-privacidade',
        destination: '/privacy-policy',
      },
      {
        source: '/termos-e-condicoes',
        destination: '/terms-and-conditions',
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/privacy-policy',
        destination: '/politica-de-privacidade',
        permanent: true,
      },
      {
        source: '/terms-and-conditions',
        destination: '/termos-e-condicoes',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
