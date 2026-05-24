# 快乐小屋

个人主页、博客和作品集的 Astro v0。当前阶段只做本地开发预览，暂不包含 GitHub Pages 部署配置。

## 本地运行

```bash
npm install
npm run dev
```

默认地址：

```text
http://127.0.0.1:4321/
```

## 内容位置

- 站点信息：`src/site.config.ts`
- 项目列表：`src/data/projects.ts`
- 博客文章：`src/content/blog/*.mdx`
- 首页：`src/pages/index.astro`
- 博客列表：`src/pages/blog/index.astro`
- 文章详情：`src/pages/blog/[slug].astro`
- 项目页：`src/pages/projects.astro`
- About 页：`src/pages/about.astro`

## 检查构建

```bash
npm run build
```
