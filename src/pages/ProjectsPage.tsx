import { useRef, type CSSProperties } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { CopyButton } from "../components/CopyButton";
import { PageMeta } from "../components/PageMeta";
import { ResponsiveImage } from "../components/ResponsiveImage";
import { projects, type Project, type ProjectAsset } from "../data/projects";
import { site } from "../data/site";

type CuratedProject = {
  project: Project;
  primary: ProjectAsset;
  secondary?: ProjectAsset;
  tertiary?: ProjectAsset;
  narrative: string;
  presentation: "featured" | "bright" | "editorial" | "portrait" | "contrast";
};

const bySlug = (slug: string) => {
  const project = projects.find((item) => item.slug === slug);
  if (!project) throw new Error(`Missing project: ${slug}`);
  return project;
};

const assetByKey = (slug: string, key: string) => {
  const asset = bySlug(slug).galleryImages.find((item) => item.base.endsWith(`/${key}`));
  if (!asset) throw new Error(`Missing asset: ${slug}/${key}`);
  return asset;
};

const curatedProjects: CuratedProject[] = [
  {
    project: bySlug("paws-and-promise"),
    primary: bySlug("paws-and-promise").coverImage,
    narrative: "从猫咪动作与高识别蓝色出发，把陪伴感转化为可以进入包装、屏幕与城市空间的品牌语言。",
    presentation: "featured",
  },
  {
    project: bySlug("cool-food-pie"),
    primary: bySlug("cool-food-pie").coverImage,
    secondary: assetByKey("cool-food-pie", "original-poster"),
    tertiary: assetByKey("cool-food-pie", "packaging-proposal"),
    narrative: "以高反差色彩、快速版式与角色资产建立年轻零食品牌，让包装本身成为传播画面。",
    presentation: "bright",
  },
  {
    project: bySlug("shan-jiao-zhi"),
    primary: bySlug("shan-jiao-zhi").coverImage,
    secondary: assetByKey("shan-jiao-zhi", "product-clean"),
    tertiary: assetByKey("shan-jiao-zhi", "packaging"),
    narrative: "将山地、花椒与手作质感整理为现代包装秩序，让地域故事在货架上被清楚地感知。",
    presentation: "editorial",
  },
  {
    project: bySlug("yansuo"),
    primary: bySlug("yansuo").coverImage,
    narrative: "在产品上新、私域传播与门店屏幕之间，建立稳定、克制且能够持续运营的商业视觉。",
    presentation: "portrait",
  },
  {
    project: bySlug("zhenhuo-spicy-hot-pot"),
    primary: bySlug("zhenhuo-spicy-hot-pot").coverImage,
    secondary: assetByKey("zhenhuo-spicy-hot-pot", "applications"),
    tertiary: assetByKey("zhenhuo-spicy-hot-pot", "tableware"),
    narrative: "用火焰、碗筷与热气凝练餐饮符号，让门店、餐具与传播拥有一致而直接的识别力。",
    presentation: "contrast",
  },
];

const portfolioWord = "PORTFOLIO";

function PortfolioLetter({ letter, index }: { letter: string; index: number }) {
  return (
    <span
      className={`portfolio-hero__letter portfolio-hero__letter--${letter.toLowerCase()} portfolio-hero__letter--${index + 1}`}
      style={{ "--letter-index": index } as CSSProperties}
      aria-hidden="true"
    >
      {letter}
    </span>
  );
}

const reveal = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 },
};

function ProjectFeature({ item, order }: { item: CuratedProject; order: number }) {
  const reducedMotion = useReducedMotion();
  const { project, primary, secondary, tertiary, narrative, presentation } = item;

  return (
    <motion.article
      className={`portfolio-project portfolio-project--${presentation}`}
      style={{ "--project-accent": project.accent } as CSSProperties}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={reveal}
      transition={{ duration: reducedMotion ? 0 : 0.9, delay: reducedMotion ? 0 : 0.06, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <div className="portfolio-project__copy">
        <div className="portfolio-project__index">
          <span>{String(order + 1).padStart(2, "0")}{order === 0 ? <i>Featured Project</i> : null}</span>
          <span>{project.year}</span>
        </div>
        <div>
          <h3>{project.chineseTitle ?? project.title}</h3>
          {project.chineseTitle ? <small>{project.title}</small> : null}
        </div>
        <dl className="portfolio-project__meta">
          <div><dt>类型</dt><dd>{project.category}</dd></div>
          <div><dt>角色</dt><dd>{project.role}</dd></div>
        </dl>
        <p className="portfolio-project__narrative">{narrative}</p>
        <div className="portfolio-project__tags">
          {project.tags.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        <Link to={`/projects/${project.slug}`}>View Project <span>↗</span></Link>
      </div>

      <motion.div
        className="portfolio-project__stage"
        whileHover={reducedMotion ? undefined : { y: -8 }}
        transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <Link to={`/projects/${project.slug}`} aria-label={`查看${project.chineseTitle ?? project.title}项目`}>
          <ResponsiveImage asset={primary} fit="contain" className="portfolio-project__primary" sizes="(max-width: 900px) 100vw, 68vw" />
          {secondary ? (
            <div className="portfolio-project__secondary">
              <ResponsiveImage asset={secondary} fit="contain" sizes="36vw" />
            </div>
          ) : null}
          {tertiary ? (
            <div className="portfolio-project__tertiary">
              <ResponsiveImage asset={tertiary} fit="contain" sizes="14vw" />
            </div>
          ) : null}
        </Link>
      </motion.div>
    </motion.article>
  );
}

export function ProjectsPage() {
  const location = useLocation();
  const reducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const featured = curatedProjects[0].project;
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const heroOpacity = useTransform(heroY, [-90, -62, 0], [0, 0.75, 1]);

  return (
    <>
      <PageMeta
        title={location.pathname === "/" ? "赵云 — Visual Designer" : "精选作品"}
        description="赵云的个人设计作品集，聚焦品牌识别、包装系统、商业视觉与数字体验。"
        image={`${featured.coverImage.base}-fallback.jpg`}
        path={location.pathname === "/" ? "/" : "/projects"}
      />

      <header
        ref={heroRef}
        className="portfolio-hero section-pad"
        style={{ "--project-accent": featured.accent } as CSSProperties}
        onPointerMove={(event) => {
          if (reducedMotion) return;
          const rect = event.currentTarget.getBoundingClientRect();
          event.currentTarget.style.setProperty("--pointer-x", String((event.clientX - rect.left) / rect.width - 0.5));
          event.currentTarget.style.setProperty("--pointer-y", String((event.clientY - rect.top) / rect.height - 0.5));
        }}
        onPointerLeave={(event) => {
          event.currentTarget.style.setProperty("--pointer-x", "0");
          event.currentTarget.style.setProperty("--pointer-y", "0");
        }}
      >
        <div className="portfolio-hero__ghost" aria-hidden="true">PORTFOLIO</div>
        <div className="portfolio-hero__grid" aria-hidden="true" />

        <motion.div className="portfolio-hero__poster-fade" style={{ opacity: reducedMotion ? 1 : heroOpacity }}>
          <motion.div className="portfolio-hero__poster" style={{ y: reducedMotion ? 0 : heroY }}>
          <motion.div
            className="portfolio-hero__identity"
            initial="hidden"
            animate="visible"
            variants={reveal}
            transition={{ duration: reducedMotion ? 0 : 1.05, delay: reducedMotion ? 0 : 0.3, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <p><i aria-hidden="true" /> 赵云 / Visual Designer</p>
            <h1><span>把品牌变成</span><span>值得被记住的</span><em>视觉体验<span>。</span></em></h1>
            <p className="portfolio-hero__intro">以品牌视觉、包装系统与数字体验为核心，<br />构建具有识别度和情绪记忆的视觉系统。</p>
            <div className="portfolio-hero__discipline">Brand Identity / Packaging / Digital Experience</div>
          </motion.div>

          <div className="portfolio-hero__type-stage">
            <div className="portfolio-hero__wordmark" aria-label="Portfolio">
              <div className="portfolio-hero__word-row">
                {[...portfolioWord.slice(0, 4)].map((letter, index) => (
                  <PortfolioLetter key={`${letter}-${index}`} letter={letter} index={index} />
                ))}
              </div>
              <div className="portfolio-hero__word-row">
                {[...portfolioWord.slice(4)].map((letter, index) => (
                  <PortfolioLetter key={`${letter}-${index + 4}`} letter={letter} index={index + 4} />
                ))}
              </div>
            </div>
          </div>

            <a className="portfolio-hero__scroll" href="#selected-work-title">
              <span>Scroll to explore</span><i aria-hidden="true">↓</i>
            </a>
          </motion.div>
        </motion.div>
      </header>

      <section className="portfolio-work section-pad" aria-labelledby="selected-work-title">
        <motion.div
          className="portfolio-work__heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={reveal}
          transition={{ duration: reducedMotion ? 0 : 0.85 }}
        >
          <span>01 / Selected Work</span>
          <h2 id="selected-work-title">五个项目，<br />五套不同的视觉系统。</h2>
          <p>从识别核心到包装、屏幕与真实触点，每个项目都以完整系统而非单张画面展开。</p>
        </motion.div>

        <div className="portfolio-work__list">
          {curatedProjects.map((item, index) => <ProjectFeature key={item.project.slug} item={item} order={index} />)}
        </div>

        <div className="portfolio-work__all">
          <Link to="/projects/ridgeline">另一个实验项目：RIDGELINE <span>↗</span></Link>
          <span>05 Selected / 06 Archived</span>
        </div>
      </section>

      <section className="portfolio-about section-pad" aria-labelledby="portfolio-about-title">
        <div className="portfolio-about__topline">
          <span>02 / About</span>
          <span>赵云 · 设计师</span>
        </div>

        <motion.div
          className="portfolio-about__lead"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
          transition={{ duration: reducedMotion ? 0 : 0.9 }}
        >
          <h2 id="portfolio-about-title">
            <span>我关注的不只是画面</span>
            <span>是否好看，</span>
            <span>更在意一套视觉如何</span>
            <span>长期工作。</span>
          </h2>
          <p>我是一名视觉设计师，关注品牌识别、包装系统、商业视觉与数字体验。相比单一画面输出，我更重视视觉系统如何在不同媒介中保持一致、形成记忆，并长期服务于品牌表达。</p>
        </motion.div>

        <div className="portfolio-about__chapters">
          <motion.article initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={reveal} transition={{ duration: reducedMotion ? 0 : 0.75 }}>
            <span>Who I am</span>
            <h3 className="portfolio-about__signature">
              <strong>赵云</strong>
              <small>设计师<br />Visual Designer</small>
            </h3>
            <p>我习惯先找到一个品牌最值得被记住的部分，再用字体、色彩、图形与版式建立可以持续使用的视觉秩序。</p>
          </motion.article>
          <motion.article initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={reveal} transition={{ duration: reducedMotion ? 0 : 0.75, delay: reducedMotion ? 0 : 0.08 }}>
            <span>What I do</span>
            <h3>从识别到触点</h3>
            <p>品牌识别、包装与 IP、商业传播、数字体验与 AI 工作流共同构成一套完整的设计能力，而不是彼此割裂的服务菜单。</p>
          </motion.article>
          <motion.article initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={reveal} transition={{ duration: reducedMotion ? 0 : 0.75, delay: reducedMotion ? 0 : 0.16 }}>
            <span>How I design</span>
            <h3>理解、建立、延展</h3>
            <p>先理解商业目标与使用场景，再建立字体、色彩、图形和版式规则，最后让系统在不同媒介中保持同一种品牌语气。</p>
          </motion.article>
        </div>

        <div className="portfolio-about__capabilities">
          {site.capabilities.map((capability) => (
            <article key={capability.title}>
              <span>{capability.index}</span>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-contact section-pad" aria-labelledby="portfolio-contact-title">
        <div className="portfolio-contact__accent" aria-hidden="true" />
        <motion.div
          className="portfolio-contact__lead"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={reveal}
          transition={{ duration: reducedMotion ? 0 : 0.9 }}
        >
          <span>03 / Contact</span>
          <h2 id="portfolio-contact-title">下一套视觉，<br />从一次准确的对话开始。</h2>
          <div className="portfolio-contact__intro">
            <p>如果你正在建立新品牌、整理包装系统，或需要让现有视觉变得更清楚，欢迎把项目背景与目标发给我。</p>
            <p lang="en">Available for brand identity, packaging system, commercial visual and digital experience projects.</p>
          </div>
        </motion.div>

        <div className="portfolio-contact__panel">
          <div className="portfolio-contact__primary">
            <span>合作邮箱</span>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <CopyButton value={site.email} label="复制邮箱" />
          </div>
          <div className="portfolio-contact__secondary">
            <span>电话</span>
            <a href={`tel:${site.phone}`}>173 7431 6470</a>
            <CopyButton value={site.phone} label="复制电话" />
            <small>{site.location}</small>
          </div>
          <a className="portfolio-contact__action" href={`mailto:${site.email}?subject=Project%20Inquiry`}>
            发起合作沟通 <span>↗</span>
          </a>
        </div>
      </section>
    </>
  );
}
