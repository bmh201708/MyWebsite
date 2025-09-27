/**
 * 获取静态资源的完整路径
 * 在生产环境中会自动添加 basePath 前缀
 */
export function getAssetPath(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/MyWebsite' : '';
  return `${basePath}${path}`;
}
