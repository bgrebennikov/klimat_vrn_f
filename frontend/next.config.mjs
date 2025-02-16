/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://backend:8000/api/:path*',
            }
        ]
    }
};

export default nextConfig;
