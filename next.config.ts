/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '**.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      // Redirect non-www to www for canonical domain consistency
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'hotfabwelding.com' }],
        destination: 'https://www.hotfabwelding.com/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;