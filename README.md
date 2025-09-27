# Jin Yike 个人网站

这是基于 Figma 设计创建的个人主页网站，使用 Next.js 开发。

## 功能特点

- 🎨 完全按照 Figma 设计实现
- 📱 响应式设计，支持移动端
- ⚡ 基于 Next.js 14 和 TypeScript
- 🖼️ 优化的图片加载
- 🎯 现代化的 UI/UX 设计

## 快速开始

### 安装依赖
```bash
npm install
```

### 开发模式
```bash
npm run dev
```

然后在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建生产版本
```bash
npm run build
npm start
```

## 项目结构

```
MyWebsite/
├── app/                    # Next.js App Router
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   ├── page.tsx           # 首页
│   └── page.module.css    # 首页样式
├── public/
│   └── images/            # 图片资源
│       └── profile-image.png
├── package.json
├── tsconfig.json
└── next.config.js
```

## 技术栈

- **框架**: Next.js 14
- **语言**: TypeScript
- **样式**: CSS Modules
- **字体**: Itim, Inter (Google Fonts)
- **图片优化**: Next.js Image 组件

## 设计来源

网站设计基于 Figma 文件: [MyWebsite Design](https://www.figma.com/design/j4r5zRCEBNK2Z8zURLXNFb/MyWebsite?node-id=4-2&t=b0zBP2HyUEiHZkUs-4)

