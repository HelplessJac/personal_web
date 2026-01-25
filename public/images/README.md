# 图片资源目录

将你的图片文件放在这个目录下，然后在相应的配置文件中引用。

## 头像图片

1. 将头像图片（建议使用正方形图片，如 400x400px）放到此目录
2. 推荐格式：JPG、PNG、WebP
3. 推荐文件名：`avatar.jpg` 或 `avatar.png`

### 使用方式

在 `src/data/personal.ts` 中设置：

```typescript
avatarUrl: '/images/avatar.jpg',
```

## 项目截图

项目截图用于在项目展示卡片中显示。

### 添加项目截图

**方式1：使用本地图片（推荐）**

1. 将项目截图放到 `public/images/` 目录下
   - 推荐尺寸：1200x800px 或 16:9 比例
   - 推荐格式：JPG、PNG、WebP
   - 推荐文件名：`project-portfolio.jpg`、`project-1.jpg` 等

2. 在 `src/data/projects.ts` 中设置：

```typescript
{
  id: 1,
  name: '个人作品集网站',
  description: '项目描述...',
  techStack: ['React', 'TypeScript'],
  image: '/images/project-portfolio.jpg',  // 本地图片路径
  link: 'https://example.com',
  github: 'https://github.com/username/project',
}
```

**方式2：使用在线图片 URL**

在 `src/data/projects.ts` 中直接使用图片 URL：

```typescript
{
  id: 1,
  name: '个人作品集网站',
  description: '项目描述...',
  techStack: ['React', 'TypeScript'],
  image: 'https://example.com/project-screenshot.jpg',  // 在线图片 URL
  link: 'https://example.com',
  github: 'https://github.com/username/project',
}
```

**不设置图片**

如果不设置 `image` 字段或设置为 `undefined`，将显示默认的 📱 图标占位符。

### 截图建议

- **尺寸**：建议 1200x800px 或 16:9 比例
- **格式**：JPG（文件小）或 PNG（质量高）
- **内容**：展示项目的关键界面或功能
- **文件大小**：建议压缩到 500KB 以下，提升加载速度
