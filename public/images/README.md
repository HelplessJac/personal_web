# 图片资源目录

将你的图片文件放在这个目录下，然后在 `src/data/personal.ts` 中配置路径。

## 头像图片

1. 将头像图片（建议使用正方形图片，如 400x400px）放到此目录
2. 推荐格式：JPG、PNG、WebP
3. 推荐文件名：`avatar.jpg` 或 `avatar.png`

## 使用方式

在 `src/data/personal.ts` 中设置：

```typescript
avatarUrl: '/images/avatar.jpg',
```

## 项目截图

项目截图也可以放在此目录下，然后在 `src/data/projects.ts` 中引用：

```typescript
image: '/images/project1-screenshot.jpg',
```
