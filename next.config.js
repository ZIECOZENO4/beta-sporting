/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['media.npr.org', 'readwrite.com', 'venturebeat.com', 'swiperjs.com', 'images.unsplash.com', 'images.pexels.com', 'cdn.icon-icons.com'],
    
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'crests.football-data.org',
        port: '',
        pathname: '/*',
      },
      {
        protocol: 'https',
        hostname: 'www.cnet.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/*/**',
      },
      {
        protocol: 'https',
        hostname: 'media.npr.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media.wired.com',
        port: '',
        pathname: '/*/**',
      },
      {
        protocol: 'https',
        hostname: 's.yimg.com',
        port: '',
        pathname: '/*/**',
      },
    ],
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          // Add other headers as needed
        ]
      }
    ]
  }
}

module.exports = nextConfig
