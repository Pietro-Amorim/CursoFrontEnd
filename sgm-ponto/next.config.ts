/** @type {import('next').NextConfig} */
const nextConfig = {
  // Forçar o uso apenas do App Router
  experimental: {
    appDir: true
  }
}

module.exports = nextConfig