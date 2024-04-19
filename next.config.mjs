/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        /* '/'でアクセス時、'/users'にリダイレクト */
        return [
          {
            source: '/',
            destination: '/users',
            permanent: true,
          },
        ]
      },
};

export default nextConfig;
