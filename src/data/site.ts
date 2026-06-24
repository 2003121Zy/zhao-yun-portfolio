export const site = {
  name: "赵云",
  englishName: "Zhao Yun",
  role: "设计师 / 品牌与数字体验",
  location: "中国 · 接受精选项目合作",
  intro:
    "以品牌视觉、包装系统与数字体验为核心，构建设计与情绪并存的视觉叙事。",
  statement:
    "我用清晰的视觉系统，把品牌转化为可以被记住、被使用的体验。",
  email: "3047356753@qq.com",
  phone: "17374316470",
  capabilities: [
    {
      index: "01",
      title: "品牌识别 / Brand Identity",
      description: "品牌策略、标识系统、色彩与字体规范，以及可持续延展的应用语言。",
    },
    {
      index: "02",
      title: "包装与 IP / Packaging & IP",
      description: "面向年轻消费与生活方式品牌的包装、角色资产、周边与传播视觉。",
    },
    {
      index: "03",
      title: "商业视觉 / Commercial Visual",
      description: "产品宣发、活动主视觉、社交内容与线下触点的统一表达。",
    },
    {
      index: "04",
      title: "数字体验 / Digital Experience",
      description: "把品牌识别带入界面、屏幕和数字场景，保持系统一致与阅读效率。",
    },
    {
      index: "05",
      title: "AI 协作 / AI Workflow",
      description: "将生成式工具融入研究、概念探索和视觉原型，服务于明确的设计判断。",
    },
  ],
  tools: [
    "Adobe Creative Suite",
    "Midjourney",
    "即梦",
    "ChatGPT",
    "Claude",
    "Lovart",
  ],
  methods: [
    ["理解需求", "识别商业目标、目标人群与真实使用场景。"],
    ["建立系统", "构建标识、字体、色彩、图形与版式规则。"],
    ["延展触点", "让包装、屏幕、空间和传播保持同一种品牌语气。"],
    ["AI 增强", "用生成式工具拓宽概念边界，再以设计判断完成收束。"],
  ],
} as const;

export type Site = typeof site;
