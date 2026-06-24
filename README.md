# 赵云个人作品集网站

基于 React、Vite 与 TypeScript 的暗色设计师作品集。网站包含首页、项目索引、6 个完整项目详情、About、Contact 与静态部署入口。

## 运行

```powershell
pnpm install
pnpm dev
```

生产检查：

```powershell
pnpm typecheck
pnpm test
pnpm build
pnpm preview
```

构建结果位于 `dist/`。已生成固定路由 HTML 与通用 SPA 回退，可部署到 Vercel、Netlify 或普通静态服务器。

## 修改内容

- 项目数据与详情叙事：`src/data/projects.ts`
- 姓名、介绍、能力、工具和联系方式：`src/data/site.ts`
- 全局颜色、字号、布局和响应式：`src/styles/global.css`
- 项目图片：`public/assets/projects/{project}`

新增项目时，复制一个 `Project` 数据对象并添加对应图片即可；项目索引、详情页和前后导航会自动更新。

## 图片规则

每张图片使用相同 key 的响应式文件：

- `name-768.avif`、`name-1440.avif`
- `name-768.webp`、`name-1440.webp`、`name-2400.webp`
- `name-fallback.jpg`

`pnpm assets` 会根据 `scripts/prepare-assets.mjs` 中的策展清单重新优化现有素材。真火麻辣烫的 PDF 提取源属于临时文件；如果这些临时文件不存在，脚本会保留已经生成的成品资源。

## 正式域名与 SEO

复制 `.env.example` 为 `.env.production`，设置：

```text
VITE_SITE_URL=https://your-domain.com
```

随后重新执行 `pnpm build`，即可生成绝对 canonical、Open Graph 图片地址与 `sitemap.xml`。

## 素材说明

生产构建只包含 `public/assets` 中经过选择和优化的图片。根目录中的原始图片与 PDF 不会被 Vite 打包，也不会被删除。山椒誌以独立品牌视觉项目呈现，排除的三个文档文件没有进入网站内容或生产资源。
