/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    unoptimized: true, // GitHub Pages 不支持 Next.js 图片优化
  },
  output: 'export', // 启用静态导出
  trailingSlash: true, // 确保正确的路径
  distDir: 'dist', // 指定输出目录
}

module.exports = nextConfig
