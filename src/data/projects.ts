export type ProjectAsset = {
  base: string;
  alt: string;
  ratio?: string;
  position?: string;
  caption?: string;
};

export type ProjectSectionLayout = "full" | "split" | "grid" | "sequence";

export type ProjectSection = {
  eyebrow: string;
  title: string;
  body: string;
  layout: ProjectSectionLayout;
  assets: ProjectAsset[];
};

export type Project = {
  slug: string;
  index: string;
  title: string;
  chineseTitle?: string;
  subtitle: string;
  year: string;
  category: string;
  role: string;
  accent: string;
  coverImage: ProjectAsset;
  heroImage: ProjectAsset;
  galleryImages: ProjectAsset[];
  description: string;
  tags: string[];
  featured?: boolean;
  sections: ProjectSection[];
  summary: string;
};

const image = (
  project: string,
  key: string,
  alt: string,
  ratio = "16 / 10",
  position = "50% 50%",
  caption?: string,
): ProjectAsset => ({
  base: `/assets/projects/${project}/${key}`,
  alt,
  ratio,
  position,
  caption,
});

const paws = {
  featured: image("paws", "featured", "爪爪约定品牌角色、包装与核心视觉系统", "5760 / 4074"),
  hero: image("paws", "hero", "爪爪约定蓝色品牌主视觉与三只奔跑的猫", "16 / 9"),
  light: image("paws", "hero-light", "爪爪约定白色品牌主视觉", "16 / 9"),
  identity: image("paws", "identity-system", "爪爪约定品牌标识与色彩系统", "3 / 2"),
  illustration: image("paws", "illustration-system", "爪爪约定猫咪插画与表情系统", "16 / 9"),
  language: image("paws", "brand-language", "爪爪约定品牌语言与图形延展", "3 / 2"),
  digital: image("paws", "digital-experience", "爪爪约定移动端与数字体验应用", "1055 / 1491"),
  packaging: image("paws", "packaging", "爪爪约定宠物零食包装系列", "4 / 3"),
  applications: image("paws", "applications", "爪爪约定数字与社交传播应用", "3 / 2"),
  outdoor: image("paws", "outdoor", "爪爪约定户外广告应用", "4 / 3"),
  product: image("paws", "product-system", "爪爪约定产品与周边系统", "1122 / 1402"),
  mascot: image("paws", "mascot", "爪爪约定立体猫咪品牌角色", "1 / 1"),
};

const ridgeline = {
  hero: image("ridgeline", "hero", "RIDGELINE 从城市走向山脊的数字首屏概念", "1440 / 1019", "58% 50%"),
  cover: image("ridgeline", "guideline-cover", "RIDGELINE 视觉识别指南封面", "1055 / 1491"),
  logoProcess: image("ridgeline", "logo-process", "RIDGELINE 标志创意说明", "1055 / 1491"),
  logoSystem: image("ridgeline", "logo-system", "RIDGELINE 标志组合规范", "1055 / 1491"),
  graphic: image("ridgeline", "graphic-system", "RIDGELINE 辅助图形系统", "1055 / 1491"),
  applications: image("ridgeline", "application-system", "RIDGELINE 应用物料系统", "1055 / 1491"),
  urban: image("ridgeline", "urban-poster", "RIDGELINE Urban to Wild 户外海报", "1055 / 1491"),
  trail: image("ridgeline", "trail-poster", "RIDGELINE Weekend Trail Guide 海报", "1055 / 1491"),
  spatial: image("ridgeline", "spatial", "RIDGELINE 户外快闪空间应用", "1122 / 1402"),
};

const cool = {
  featured: image("coolfoodpie", "featured", "酷食派薯片包装、品牌角色与核心视觉海报", "1055 / 1491"),
  originalPoster: image("coolfoodpie", "original-poster", "酷食派原味薯片产品视觉海报", "1127 / 1406"),
  packagingProposal: image("coolfoodpie", "packaging-proposal", "酷食派原味薯片包装正背面与体验装提案", "1451 / 1112"),
  hero: image("coolfoodpie", "hero", "酷食派青柠薯片包装近景", "1440 / 1018", "50% 58%"),
  overview: image("coolfoodpie", "overview", "酷食派黑黄品牌提案封面", "1440 / 1018"),
  logo: image("coolfoodpie", "logo-grid", "酷食派中文字标构成网格", "1440 / 1018"),
  palette: image("coolfoodpie", "palette", "酷食派黑黄白品牌色彩", "1440 / 1018"),
  character: image("coolfoodpie", "character", "酷食派品牌角色酷酷", "1440 / 1018"),
  stickers: image("coolfoodpie", "stickers", "酷食派角色贴纸与品牌卡片", "1440 / 1018"),
  spicy: image("coolfoodpie", "spicy-pack", "酷食派香辣薯片包装", "4 / 3"),
  lime: image("coolfoodpie", "lime-pack", "酷食派青柠薯片包装", "4 / 3"),
  campaign: image("coolfoodpie", "campaign", "酷食派年轻化传播场景", "1440 / 1018"),
  range: image("coolfoodpie", "range", "酷食派产品包装系列陈列", "1440 / 1018"),
  phone: image("coolfoodpie", "phone-case", "酷食派手机壳周边设计", "1440 / 1018"),
};

const shanjiao = {
  hero: image("shanjiaozhi", "hero", "山椒誌花椒品牌包装主视觉", "5 / 2"),
  productClean: image("shanjiaozhi", "product-clean", "山椒誌大红袍花椒瓶、包装盒与礼盒组合", "3 / 2"),
  overview: image("shanjiaozhi", "overview", "山椒誌山有来处椒有风味品牌海报", "2 / 3"),
  identity: image("shanjiaozhi", "identity-system", "山椒誌品牌视觉系统总览", "16 / 9"),
  logo: image("shanjiaozhi", "logo-process", "山椒誌标志草图与概念推导", "1440 / 617"),
  elements: image("shanjiaozhi", "visual-elements", "山椒誌辅助图形与包装延展", "1440 / 958"),
  packaging: image("shanjiaozhi", "packaging", "山椒誌花椒袋装包装", "3 / 4"),
  product: image("shanjiaozhi", "product", "山椒誌大红袍花椒瓶与礼盒", "4 / 3"),
  flavors: image("shanjiaozhi", "flavor-labels", "山椒誌鲜麻浓香干香手选特级风味标签", "3 / 4"),
  applications: image("shanjiaozhi", "applications", "山椒誌品牌物料与零售应用", "3 / 2"),
  retail: image("shanjiaozhi", "retail", "山椒誌零售陈列与礼盒系统", "3 / 2"),
  collection: image("shanjiaozhi", "collection", "山椒誌包装实景组合", "1402 / 1122"),
};

const yansuo = {
  featured: image("yansuo", "featured", "颜所美肤诊所焕新季商业活动视觉", "7087 / 10630"),
  hero: image("yansuo", "hero", "颜所美肤诊所门店品牌空间", "1440 / 587", "50% 44%"),
  interior: image("yansuo", "interior", "颜所美肤诊所室内屏幕视觉应用", "1440 / 587"),
  presence: image("yansuo", "brand-presence", "颜所品牌人物视觉物料", "2 / 3"),
  membership: image("yansuo", "membership", "颜所会员活动视觉", "2 / 3"),
  touchpoint: image("yansuo", "touchpoint", "颜所品牌服务触点", "2 / 3"),
  campaignOne: image("yansuo", "campaign-one", "颜所医美活动海报一", "1440 / 3512"),
  campaignTwo: image("yansuo", "campaign-two", "颜所医美活动海报二", "1440 / 3512"),
  campaignFive: image("yansuo", "campaign-five", "颜所医美活动海报五", "1440 / 3512"),
  launch: image("yansuo", "product-launch", "颜所童颜新品发布长图", "1440 / 3068"),
  signage: image("yansuo", "clinic-signage", "颜所门店电子病历立牌", "1440 / 2043"),
};

const zhenhuo = {
  hero: image("zhenhuo", "hero", "真火麻辣烫红色视觉识别系统封面", "1440 / 1019", "52% 50%"),
  cover: image("zhenhuo", "cover", "真火麻辣烫品牌识别方案封面", "1440 / 1019"),
  system: image("zhenhuo", "system", "真火麻辣烫标志与品牌应用系统", "1440 / 1019"),
  applications: image("zhenhuo", "applications", "真火麻辣烫宣传物料与品牌应用", "1440 / 1019"),
  logo: image("zhenhuo", "logo-grid", "真火麻辣烫标志构成网格", "1440 / 1018"),
  tableware: image("zhenhuo", "tableware", "真火麻辣烫碗筷餐具系统", "1440 / 1018"),
  service: image("zhenhuo", "service-set", "真火麻辣烫餐具与服务物料", "1440 / 1018"),
  campaign: image("zhenhuo", "campaign", "真火麻辣烫开业传播海报", "1440 / 1018"),
  touchpoints: image("zhenhuo", "touchpoints", "真火麻辣烫菜单服装与门店触点", "1440 / 1018"),
};

export const projects: Project[] = [
  {
    slug: "paws-and-promise",
    index: "01",
    title: "Paws & Promise",
    chineseTitle: "爪爪约定",
    subtitle: "为宠物陪伴建立一套温暖、清楚、可持续延展的视觉系统。",
    year: "2026",
    category: "品牌识别 / 包装 / IP 角色",
    role: "品牌识别、包装设计、IP 插画",
    accent: "#1998ff",
    coverImage: paws.featured,
    heroImage: paws.featured,
    galleryImages: Object.values(paws),
    description:
      "围绕 Love · Care · Together 的陪伴理念，把猫咪动作、粗体字标与高识别蓝色构建成一套可亲近、可扩展的宠物品牌语言。",
    tags: ["标识系统", "IP 插画", "包装设计", "数字应用"],
    featured: true,
    sections: [
      {
        eyebrow: "01 / 品牌基础",
        title: "把陪伴感变成可识别的品牌动作",
        body: "项目不以单张海报为终点，而从猫咪奔跑、跳跃与伸展的日常动作建立记忆点。粗体英文与线描插画形成鲜明反差，让品牌既有亲和力，也具备货架与户外传播所需的识别强度。",
        layout: "split",
        assets: [paws.identity, paws.illustration],
      },
      {
        eyebrow: "02 / 包装系统",
        title: "统一规则之下，容纳不同产品与情绪",
        body: "包装延续蓝、白、黑的核心关系，通过插画姿态、信息区块和局部辅助色区分品类。系统能够自然延展到零食袋、罐装产品、清洁用品与品牌周边。",
        layout: "grid",
        assets: [paws.packaging, paws.product, paws.mascot],
      },
      {
        eyebrow: "03 / 体验延展",
        title: "从货架识别走向屏幕与城市触点",
        body: "猫咪角色被转化为持续运营的社交资产，在移动界面、内容模板和户外广告中保持一致语气，让品牌从一次购买延展为长期陪伴。",
        layout: "sequence",
        assets: [paws.digital, paws.applications, paws.outdoor],
      },
    ],
    summary: "以一套简单而有弹性的视觉语法，让宠物品牌在包装、数字和户外场景中始终保持温暖、清楚和好记。",
  },
  {
    slug: "ridgeline",
    index: "02",
    title: "RIDGELINE",
    subtitle: "从城市边缘走向山脊，把轻户外变成可进入的日常体验。",
    year: "2026",
    category: "品牌识别 / 数字概念",
    role: "品牌识别、艺术指导、数字概念",
    accent: "#ff5a1f",
    coverImage: ridgeline.hero,
    heroImage: ridgeline.hero,
    galleryImages: Object.values(ridgeline),
    description:
      "将城市轻户外理解为一种日常生活方式，以山脊、路径、等高线、坐标和装备标签构建理性而有户外质感的品牌系统。",
    tags: ["标识系统", "辅助图形", "编辑设计", "数字体验"],
    sections: [
      {
        eyebrow: "01 / 品牌定位",
        title: "不是逃离城市，而是把自然带进周末",
        body: "品牌面向城市中的周末探索者。视觉语气在克制与冒险之间取得平衡：米白、深绿与高可视橙色形成稳定基底，山脊线条则提供持续延展的识别资产。",
        layout: "split",
        assets: [ridgeline.cover, ridgeline.urban],
      },
      {
        eyebrow: "02 / 识别系统",
        title: "从山峰轮廓提炼一个可工作的标志",
        body: "标志由山脊折线与路径关系提炼，能够在装备标签、导视、织物与小尺寸界面中保持清晰。辅助系统继续引入坐标、等高线和信息标签，增强功能感。",
        layout: "grid",
        assets: [ridgeline.logoProcess, ridgeline.logoSystem, ridgeline.graphic],
      },
      {
        eyebrow: "03 / 应用延展",
        title: "让系统进入海报、空间与数字首屏",
        body: "同一视觉规则被应用于路线海报、活动指南、快闪空间与网站概念，在不同媒介中保持一致的阅读节奏和方向感。",
        layout: "sequence",
        assets: [ridgeline.trail, ridgeline.spatial, ridgeline.applications],
      },
    ],
    summary: "RIDGELINE 用清晰的识别系统连接城市秩序与户外探索，让每个品牌触点都像一段可以被继续行走的路线。",
  },
  {
    slug: "cool-food-pie",
    index: "03",
    title: "COOL FOOD PIE",
    chineseTitle: "酷食派",
    subtitle: "用高反差、快节奏的视觉语言，建立年轻零食品牌的鲜明个性。",
    year: "2025",
    category: "食品品牌 / 包装 / IP 角色",
    role: "品牌识别、包装设计、IP 与 AIGC",
    accent: "#d9ff16",
    coverImage: cool.featured,
    heroImage: cool.featured,
    galleryImages: Object.values(cool),
    description:
      "以黑黄高对比、斜切动势、撕裂开窗和角色资产建立年轻零食品牌的速度感、街头感与货架冲击力。",
    tags: ["品牌识别", "包装设计", "IP 角色", "传播视觉"],
    sections: [
      {
        eyebrow: "01 / 视觉态度",
        title: "把“酷、爽、上头”转译成视觉节奏",
        body: "品牌从年轻消费者的即时情绪出发，用倾斜构图、警示条、像素故障和高反差色块形成快速而直接的视觉语言。中文标识保留清晰阅读，同时带有切割感。",
        layout: "grid",
        assets: [cool.overview, cool.logo, cool.palette],
      },
      {
        eyebrow: "02 / 角色与包装",
        title: "让包装本身成为传播画面",
        body: "品牌角色“酷酷”作为社交资产进入包装和贴纸系统。黑色基底与口味色块共同承担识别任务，在香辣、原味和青柠等系列之间建立统一但不单调的家族感。",
        layout: "grid",
        assets: [cool.character, cool.stickers, cool.spicy, cool.lime],
      },
      {
        eyebrow: "03 / 品牌延展",
        title: "从一袋薯片延展到完整年轻文化场景",
        body: "视觉继续进入活动场景、产品陈列和周边物料，使包装、角色和传播内容成为同一个品牌世界的不同切面。",
        layout: "sequence",
        assets: [cool.campaign, cool.range, cool.phone],
      },
    ],
    summary: "酷食派用明确的色彩、字体与角色规则制造强记忆点，让零食包装同时承担产品识别和社交传播。",
  },
  {
    slug: "shan-jiao-zhi",
    index: "04",
    title: "SHAN JIAO ZHI",
    chineseTitle: "山椒誌",
    subtitle: "以花椒为笔，记录一座山的产地、风味与手作温度。",
    year: "2026",
    category: "品牌识别 / 包装系统",
    role: "品牌识别、包装设计、编辑系统",
    accent: "#9b3028",
    coverImage: shanjiao.hero,
    heroImage: shanjiao.hero,
    galleryImages: Object.values(shanjiao),
    description:
      "以“山有来处，椒有风味”为核心叙事，将地域梯田、花椒果实与手工采摘的质感整理为克制、可信的包装系统。",
    tags: ["地域叙事", "标识系统", "包装设计", "风味标签"],
    sections: [
      {
        eyebrow: "01 / 品牌叙事",
        title: "以花椒为笔，记录一座山的风味",
        body: "品牌不依赖夸张的餐饮刺激，而从产地、山地环境和食材质感建立可信度。视觉在传统地域气质与现代零售秩序之间保持平衡。",
        layout: "split",
        assets: [shanjiao.overview, shanjiao.collection],
      },
      {
        eyebrow: "02 / 识别系统",
        title: "将山形、梯田与花椒凝练成识别符号",
        body: "标志以层叠山形构成主结构，花椒颗粒形成视觉锚点。书页意象对应“誌”的记录属性，延展为边框、印章、标签和信息层级。",
        layout: "sequence",
        assets: [shanjiao.logo, shanjiao.identity, shanjiao.elements],
      },
      {
        eyebrow: "03 / 包装系统",
        title: "用风味标签组织清楚的产品家族",
        body: "鲜麻、浓香、干香与手选特级通过颜色、图形与信息结构区分，在瓶装、袋装和礼盒中保持稳定的品牌秩序，同时保留纸张与手作的温度。",
        layout: "grid",
        assets: [shanjiao.packaging, shanjiao.product, shanjiao.flavors, shanjiao.retail, shanjiao.applications],
      },
    ],
    summary: "山椒誌把地域故事转化为现代包装规则，让产地、风味与零售识别在同一套系统中自然共存。",
  },
  {
    slug: "yansuo",
    index: "05",
    title: "YANSUO",
    chineseTitle: "颜所美肤诊所",
    subtitle: "在高频运营与多种门店触点之间，保持统一、克制的商业视觉语言。",
    year: "2026",
    category: "商业视觉 / 数字内容",
    role: "视觉设计、活动传播、门店触点",
    accent: "#b06d55",
    coverImage: yansuo.featured,
    heroImage: yansuo.hero,
    galleryImages: Object.values(yansuo),
    description:
      "围绕医美品牌总部与门店的运营需求，组织产品上新、会员活动、私域传播和空间屏幕，建立克制、可信且可持续输出的商业视觉。",
    tags: ["商业视觉", "活动传播", "社交内容", "门店物料"],
    sections: [
      {
        eyebrow: "01 / 商业场景",
        title: "在高频运营中保持品牌一致",
        body: "项目面对的是持续发生的真实触点：产品、节日、会员活动、门店说明和私域内容。视觉不追求单次噱头，而以稳定的字体、肤色、暖棕色和信息层级降低沟通成本。",
        layout: "split",
        assets: [yansuo.presence, yansuo.membership],
      },
      {
        eyebrow: "02 / 传播系统",
        title: "让人物、产品和促销信息拥有同一种语气",
        body: "不同活动通过统一网格、留白和色彩关系建立品牌连续性；画面既要传达服务信息，也要保持医疗美容场景所需要的清晰、克制与信任感。",
        layout: "grid",
        assets: [yansuo.campaignOne, yansuo.campaignTwo, yansuo.campaignFive, yansuo.launch],
      },
      {
        eyebrow: "03 / 门店触点",
        title: "从手机长图延展到门店空间",
        body: "同一系统进入接待区屏幕、服务立牌和电子病历说明，让线上引导与线下体验连续发生，而不是彼此割裂的两套视觉。",
        layout: "sequence",
        assets: [yansuo.interior, yansuo.signage, yansuo.touchpoint],
      },
    ],
    summary: "颜所项目验证了一套商业视觉系统如何在高频、多人群和多尺寸的运营环境中持续保持专业与一致。",
  },
  {
    slug: "zhenhuo-spicy-hot-pot",
    index: "06",
    title: "ZHENHUO",
    chineseTitle: "真火麻辣烫",
    subtitle: "真火熬真汤，以一个直接有力的符号建立餐饮品牌识别。",
    year: "2025",
    category: "餐饮品牌识别",
    role: "品牌识别、应用设计",
    accent: "#f33b2f",
    coverImage: zhenhuo.cover,
    heroImage: zhenhuo.cover,
    galleryImages: Object.values(zhenhuo),
    description:
      "以“真火”为核心识别意象，将火焰、碗、筷子和热气符号融入标志，形成适合中式快餐场景的品牌应用系统。",
    tags: ["餐饮品牌", "核心符号", "餐具系统", "传播视觉"],
    sections: [
      {
        eyebrow: "01 / 品牌概念",
        title: "把“真”与“火”凝聚成一个直接的餐饮符号",
        body: "品牌围绕真火熬汤、真实食材和真心待客建立核心表达。碗、筷子、热气与火焰被合并为简洁标志，在门头、菜单和小尺寸物料中保持清楚。",
        layout: "split",
        assets: [zhenhuo.cover, zhenhuo.logo],
      },
      {
        eyebrow: "02 / 视觉系统",
        title: "高识别红色与餐桌语境共同工作",
        body: "红、白、黑构成高效率的餐饮识别基础，波浪形热气成为可重复的图形资产。系统延展到字体关系、餐具、服装和外带包装。",
        layout: "sequence",
        assets: [zhenhuo.system, zhenhuo.tableware, zhenhuo.service],
      },
      {
        eyebrow: "03 / 传播延展",
        title: "让品牌语言既有烟火气，也有统一秩序",
        body: "传播内容把品牌承诺转化为更口语化的餐桌表达，并在开业海报、活动信息和门店触点中保持视觉连续。",
        layout: "grid",
        assets: [zhenhuo.campaign, zhenhuo.applications, zhenhuo.touchpoints],
      },
    ],
    summary: "真火麻辣烫以一个高效率符号贯穿门店、餐具与传播，使品牌承诺能够被快速看见，也能在细节中被感受到。",
  },
];

export const getProject = (slug?: string) =>
  projects.find((project) => project.slug === slug);

export const getAdjacentProjects = (slug: string) => {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index < 0) return { previous: projects[projects.length - 1], next: projects[0] };
  return {
    previous: projects[(index - 1 + projects.length) % projects.length],
    next: projects[(index + 1) % projects.length],
  };
};
