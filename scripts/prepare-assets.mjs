import { access, mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const outputRoot = path.join(root, "public", "assets", "projects");
const siteOutputRoot = path.join(root, "public", "assets", "site");
const widths = [768, 1440, 2400];
const avifWidths = [768, 1440];

const sources = {
  paws: [
    ["featured", "source-assets/paws-featured.png"],
    ["hero", "爪爪约定/mmexport1781858182700.jpg"],
    ["hero-light", "爪爪约定/mmexport1781858184324.jpg"],
    ["identity-system", "爪爪约定/mmexport1781858191077.jpg"],
    ["illustration-system", "爪爪约定/mmexport1781858196463.jpg"],
    ["brand-language", "爪爪约定/mmexport1781858199517.jpg"],
    ["digital-experience", "爪爪约定/mmexport1781858205249.jpg"],
    ["packaging", "爪爪约定/mmexport1781858207738.jpg"],
    ["applications", "爪爪约定/mmexport1781858212872.jpg"],
    ["outdoor", "爪爪约定/mmexport1781858216750.jpg"],
    ["product-system", "爪爪约定/mmexport1781858239411.jpg"],
    ["mascot", "爪爪约定/mmexport1781858254618.jpg"],
  ],
  ridgeline: [
    ["hero", "户外品牌/ChatGPT Image 2026年6月21日 23_04_51.png"],
    ["guideline-cover", "户外品牌/ChatGPT Image 2026年6月18日 17_06_29.png"],
    ["logo-process", "户外品牌/ChatGPT Image 2026年6月18日 17_07_23 (1).png"],
    ["logo-system", "户外品牌/ChatGPT Image 2026年6月18日 17_07_25 (2).png"],
    ["graphic-system", "户外品牌/ChatGPT Image 2026年6月18日 17_07_53.png"],
    ["application-system", "户外品牌/ChatGPT Image 2026年6月18日 17_07_57.png"],
    ["urban-poster", "户外品牌/ChatGPT Image 2026年6月18日 17_08_03 (1).png"],
    ["trail-poster", "户外品牌/ChatGPT Image 2026年6月18日 17_08_04 (2).png"],
    ["spatial", "户外品牌/ChatGPT Image 2026年6月18日 17_08_08 (4).png"],
  ],
  coolfoodpie: [
    ["featured", "hhh/0ba3128f-0247-4978-b5db-11a351bad8c3.png"],
    ["original-poster", "source-assets/coolfoodpie/original-poster.png"],
    ["packaging-proposal", "source-assets/coolfoodpie/packaging-proposal.png"],
    ["hero", "hhh/赵云作品集-1 [已恢复]-42.jpg"],
    ["overview", "hhh/赵云作品集-1 [已恢复]-28.jpg"],
    ["logo-grid", "hhh/赵云作品集-1 [已恢复]-30.jpg"],
    ["palette", "hhh/赵云作品集-1 [已恢复]-31.jpg"],
    ["character", "hhh/赵云作品集-1 [已恢复]-33.jpg"],
    ["stickers", "hhh/赵云作品集-1 [已恢复]-37.jpg"],
    ["spicy-pack", "hhh/ef32c539-9437-4107-aca0-a6ce1c9dd104.png"],
    ["lime-pack", "hhh/6cef18df-74e5-41dd-ac9d-71f58708a75b.png"],
    ["campaign", "hhh/赵云作品集-1 [已恢复]-43.jpg"],
    ["range", "hhh/赵云作品集-1 [已恢复]-45.jpg"],
    ["phone-case", "hhh/赵云作品集-1 [已恢复]-46.jpg"],
  ],
  shanjiaozhi: [
    ["hero", "毕设照片/99a94b00-c9b2-4ba7-8939-29eed89da8f6.png"],
    ["product-clean", "毕设照片/9ba6c3d5-bdf9-4b4e-8ebe-3258f9852db5.png"],
    ["overview", "毕设照片/0ccda832-8a05-493f-9665-3cf5dc376805.png"],
    ["identity-system", "毕设照片/0d9883f8-3d69-449d-8e34-b48fe5d2f2cf.png"],
    ["logo-process", "毕设照片/3e3d27e4-d00d-4f90-b690-bf71477327c8.png"],
    ["visual-elements", "毕设照片/12e12859-5f0c-4d0a-aa8b-23f3da841c3d.png"],
    ["packaging", "毕设照片/1554f66d-d8f8-48d2-8237-4d630c266dfd.png"],
    ["product", "毕设照片/1e8fecc0-4f39-4f9e-b1e3-fec2986d2b85.png"],
    ["flavor-labels", "毕设照片/2ee5578f-cf43-46d3-b82b-ed7fa4fb7d14.png"],
    ["applications", "毕设照片/34465796-abfc-4f65-8df5-d4b6ca568a27.png"],
    ["retail", "毕设照片/149ea588-5b81-4bbe-a82f-644e786e7125.png"],
    ["collection", "毕设照片/e0729156-9610-4954-8b44-311b77ebeab6.png"],
  ],
  yansuo: [
    ["featured", "新建文件夹 (2)/展架_画板 1-07.jpg"],
    ["hero", "新建文件夹 (2)/童颜新品推文-最终版-33.jpg"],
    ["interior", "新建文件夹 (2)/童颜新品推文-最终版-32.jpg"],
    ["brand-presence", "新建文件夹 (2)/品牌露出-06(3).jpg"],
    ["membership", "新建文件夹 (2)/品牌露出-08(2).jpg"],
    ["touchpoint", "新建文件夹 (2)/品牌露出-09(2).jpg"],
    ["campaign-one", "新建文件夹 (2)/海报-01.jpg"],
    ["campaign-two", "新建文件夹 (2)/海报-02.jpg"],
    ["campaign-five", "新建文件夹 (2)/海报-05.jpg"],
    ["product-launch", "新建文件夹 (2)/童颜新品推文-最终版-06.jpg"],
    ["clinic-signage", "新建文件夹 (2)/重庆光环店-病历立牌_画板 1 副本 11.jpg"],
  ],
  zhenhuo: [
    ["hero", "tmp/pdfs/zhenhuo-new/new-36.png"],
    ["cover", "tmp/pdfs/zhenhuo-new/new-38.png"],
    ["system", "tmp/pdfs/zhenhuo-new/new-39.png"],
    ["applications", "tmp/pdfs/zhenhuo-new/new-40.png"],
    ["logo-grid", "tmp/pdfs/zhenhuo-legacy-a/legacy-10.png"],
    ["tableware", "tmp/pdfs/zhenhuo-legacy-b/legacy-17.png"],
    ["service-set", "tmp/pdfs/zhenhuo-legacy-b/legacy-21.png"],
    ["campaign", "tmp/pdfs/zhenhuo-legacy-c/legacy-23.png"],
    ["touchpoints", "tmp/pdfs/zhenhuo-legacy-c/legacy-26.png"],
  ],
};

async function writeVariants(project, key, sourceRelative) {
  const source = path.join(root, sourceRelative);
  const destination = path.join(outputRoot, project);
  await mkdir(destination, { recursive: true });
  try {
    await access(source);
  } catch {
    await access(path.join(destination, `${key}-fallback.jpg`));
    process.stdout.write(`Preserving existing ${project}/${key}; source extraction is not present.\n`);
    return { key, source: sourceRelative, preserved: true };
  }
  const metadata = await sharp(source).metadata();

  for (const width of widths) {
    await sharp(source)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 82, effort: 4 })
      .toFile(path.join(destination, `${key}-${width}.webp`));
  }

  for (const width of avifWidths) {
    await sharp(source)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .avif({ quality: 58, effort: 4 })
      .toFile(path.join(destination, `${key}-${width}.avif`));
  }

  await sharp(source)
    .rotate()
    .resize({ width: 1440, withoutEnlargement: true })
    .flatten({ background: "#08090b" })
    .jpeg({ quality: 86, mozjpeg: true })
    .toFile(path.join(destination, `${key}-fallback.jpg`));

  return {
    key,
    source: sourceRelative,
    width: metadata.width,
    height: metadata.height,
  };
}

await mkdir(outputRoot, { recursive: true });
for (const [project, entries] of Object.entries(sources)) {
  for (const [key, source] of entries) {
    process.stdout.write(`Optimizing ${project}/${key}\n`);
    await writeVariants(project, key, source);
  }
}

const legacyCoverSource = path.join(root, "tmp", "pdfs", "legacy-cover.jpg");
await mkdir(siteOutputRoot, { recursive: true });
try {
  await access(legacyCoverSource);
  for (const width of widths) {
    await sharp(legacyCoverSource)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 84, effort: 4 })
      .toFile(path.join(siteOutputRoot, `legacy-cover-${width}.webp`));
  }
  for (const width of avifWidths) {
    await sharp(legacyCoverSource)
      .resize({ width, withoutEnlargement: true })
      .avif({ quality: 60, effort: 4 })
      .toFile(path.join(siteOutputRoot, `legacy-cover-${width}.avif`));
  }
  await sharp(legacyCoverSource)
    .resize({ width: 1440, withoutEnlargement: true })
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(path.join(siteOutputRoot, "legacy-cover-fallback.jpg"));
  process.stdout.write("Optimized site/legacy-cover from the legacy portfolio PDF.\n");
} catch {
  await access(path.join(siteOutputRoot, "legacy-cover-fallback.jpg"));
  process.stdout.write("Preserving existing site/legacy-cover; PDF extraction is not present.\n");
}

await sharp(path.join(root, sources.ridgeline[0][1]))
  .resize(1200, 630, { fit: "cover", position: "centre" })
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile(path.join(root, "public", "assets", "og-cover.jpg"));

process.stdout.write("Asset preparation complete.\n");
