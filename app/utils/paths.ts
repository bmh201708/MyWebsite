/**
 * 获取静态资源的完整路径
 * 与 next.config.js 中的 assetPrefix 保持一致
 */
export function getAssetPath(path: string): string {
  // 检查是否为生产环境，默认为开发环境
  const isProduction = process.env.NODE_ENV === 'production';
  // 与 next.config.js 中的 assetPrefix 保持一致
  const assetPrefix = isProduction ? '/MyWebsite' : '';
  return `${assetPrefix}${path}`;
}
