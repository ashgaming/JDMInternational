/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
      },
    output:'export',
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'res.cloudinary.com',
    //     pathname: '**',
    //   },
    // ],
};

export default nextConfig;
