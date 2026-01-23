/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/manawa/**',
      },
      {
        protocol: 'https',
        hostname: 'blog.ilemauricevoyage.fr',
        pathname: '/wp-content/**',
      },
      {
        protocol: 'https',
        hostname: 'www.blog.ilemauricevoyage.fr',
        pathname: '/wp-content/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
