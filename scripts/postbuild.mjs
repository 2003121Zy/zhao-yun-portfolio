import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");
const template = await readFile(path.join(dist, "index.html"), "utf8");
const siteUrl = (process.env.VITE_SITE_URL || "").replace(/\/$/, "");

const routes = [
  {
    path: "/",
    title: "赵云 — Visual Designer",
    description: "赵云个人设计作品集，聚焦品牌识别、包装系统、商业视觉与数字体验。",
    image: "/assets/og-cover.jpg",
  },
  {
    path: "/projects",
    title: "Projects — 赵云",
    description: "六个围绕品牌识别、包装、商业视觉与数字体验建立的视觉系统。",
    image: "/assets/og-cover.jpg",
  },
  {
    path: "/about",
    title: "About — 赵云",
    description: "关于视觉设计师赵云：品牌识别、包装、商业视觉、数字体验与 AI 工作流。",
    image: "/assets/og-cover.jpg",
  },
  {
    path: "/contact",
    title: "Contact — 赵云",
    description: "联系视觉设计师赵云，讨论品牌识别、包装、商业视觉与数字设计合作。",
    image: "/assets/og-cover.jpg",
  },
  {
    path: "/projects/paws-and-promise",
    title: "Paws & Promise 爪爪约定 — 赵云",
    description: "以猫咪动作、粗体字标与高识别蓝色构建的宠物品牌视觉系统。",
    image: "/assets/projects/paws/hero-fallback.jpg",
  },
  {
    path: "/projects/ridgeline",
    title: "RIDGELINE — 赵云",
    description: "连接城市秩序与户外探索的生活方式品牌视觉系统。",
    image: "/assets/projects/ridgeline/hero-fallback.jpg",
  },
  {
    path: "/projects/cool-food-pie",
    title: "COOL FOOD PIE 酷食派 — 赵云",
    description: "面向年轻零食品牌的高对比视觉、包装与角色系统。",
    image: "/assets/projects/coolfoodpie/hero-fallback.jpg",
  },
  {
    path: "/projects/shan-jiao-zhi",
    title: "山椒誌 — 赵云",
    description: "以地域、山形与花椒风味构建的品牌识别与包装系统。",
    image: "/assets/projects/shanjiaozhi/hero-fallback.jpg",
  },
  {
    path: "/projects/yansuo",
    title: "YANSUO 颜所美肤诊所 — 赵云",
    description: "贯穿产品宣发、私域传播和门店触点的商业视觉系统。",
    image: "/assets/projects/yansuo/hero-fallback.jpg",
  },
  {
    path: "/projects/zhenhuo-spicy-hot-pot",
    title: "真火麻辣烫 — 赵云",
    description: "将火焰、碗、筷子与热气符号融入中式快餐品牌识别。",
    image: "/assets/projects/zhenhuo/hero-fallback.jpg",
  },
];

const escapeAttribute = (value) =>
  value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");

function renderRoute(route) {
  const image = siteUrl ? `${siteUrl}${route.image}` : route.image;
  let html = template
    .replace(/<title>.*?<\/title>/s, `<title>${route.title}</title>`)
    .replace(/<meta name="description" content=".*?"\s*\/>/s, `<meta name="description" content="${escapeAttribute(route.description)}" />`)
    .replace(/<meta property="og:title" content=".*?"\s*\/>/s, `<meta property="og:title" content="${escapeAttribute(route.title)}" />`)
    .replace(/<meta property="og:description" content=".*?"\s*\/>/s, `<meta property="og:description" content="${escapeAttribute(route.description)}" />`)
    .replace(/<meta property="og:image" content=".*?"\s*\/>/s, `<meta property="og:image" content="${escapeAttribute(image)}" />`);

  if (siteUrl) {
    html = html.replace("</head>", `  <link rel="canonical" href="${siteUrl}${route.path}" />\n  </head>`);
  }
  return html;
}

for (const route of routes) {
  if (route.path === "/") {
    await writeFile(path.join(dist, "index.html"), renderRoute(route), "utf8");
    continue;
  }
  const directory = path.join(dist, route.path.slice(1));
  await mkdir(directory, { recursive: true });
  await writeFile(path.join(directory, "index.html"), renderRoute(route), "utf8");
}

await writeFile(
  path.join(dist, "404.html"),
  template.replace(/<title>.*?<\/title>/s, "<title>Page not found — 赵云</title>"),
  "utf8",
);

await writeFile(path.join(dist, "_redirects"), "/* /index.html 200\n", "utf8");
await writeFile(
  path.join(dist, "robots.txt"),
  `User-agent: *\nAllow: /\n${siteUrl ? `Sitemap: ${siteUrl}/sitemap.xml\n` : ""}`,
  "utf8",
);

if (siteUrl) {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((route) => `  <url><loc>${siteUrl}${route.path}</loc></url>`).join("\n")}
</urlset>\n`;
  await writeFile(path.join(dist, "sitemap.xml"), sitemap, "utf8");
}

process.stdout.write(`Generated ${routes.length} route entry files.\n`);
