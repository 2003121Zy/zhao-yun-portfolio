import { useEffect, useMemo, useRef, useState, type PointerEvent } from "react";
import { Link } from "react-router-dom";
import { PageMeta } from "../components/PageMeta";
import { ResponsiveImage } from "../components/ResponsiveImage";
import { Reveal } from "../components/Reveal";
import { projects } from "../data/projects";
import { site } from "../data/site";

export function HomePage() {
  const showreel = useMemo(() => [projects[1], projects[0], projects[2], projects[3]], []);
  const [active, setActive] = useState(0);
  const stageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;
    const timer = window.setInterval(() => setActive((value) => (value + 1) % showreel.length), 6500);
    return () => window.clearInterval(timer);
  }, [showreel.length]);

  const moveStage = (event: PointerEvent<HTMLElement>) => {
    if (!stageRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    stageRef.current.style.setProperty("--pointer-x", `${x * 14}px`);
    stageRef.current.style.setProperty("--pointer-y", `${y * 10}px`);
  };

  return (
    <>
      <PageMeta
        title="赵云 — Visual Designer"
        description="赵云个人设计作品集，聚焦品牌识别、包装系统、商业视觉与数字体验。"
        path="/"
      />

      <section ref={stageRef} className="home-hero" onPointerMove={moveStage}>
        <div className="home-hero__media" aria-live="polite">
          {showreel.map((project, index) => (
            <div key={project.slug} className={`home-hero__slide ${index === active ? "is-active" : ""}`}>
              <ResponsiveImage
                asset={project.heroImage}
                priority={index === 0}
                fit="cover"
                className="home-hero__ambient"
                sizes="100vw"
              />
              <ResponsiveImage
                asset={project.heroImage}
                priority={index === 0}
                fit="contain"
                className="home-hero__artwork"
                sizes="100vw"
              />
            </div>
          ))}
          <div className="home-hero__veil" />
        </div>

        <div className="home-hero__topline">
          <span>精选作品 / 2025—2026</span>
          <span>品牌识别 · 包装系统 · 数字体验</span>
        </div>

        <div className="home-hero__title">
          <p>{site.role}</p>
          <h1>
            ZHAO <span>YUN</span>
          </h1>
          <div className="home-hero__intro">
            <p>{site.intro}</p>
            <Link to="/projects">浏览精选作品 <span>↗</span></Link>
          </div>
        </div>

        <div className="showreel-index" role="tablist" aria-label="首屏项目切换">
          {showreel.map((project, index) => (
            <button
              key={project.slug}
              type="button"
              role="tab"
              aria-selected={index === active}
              className={index === active ? "is-active" : ""}
              onPointerEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              onClick={() => setActive(index)}
              style={{ "--project-accent": project.accent } as React.CSSProperties}
            >
              <small>{project.index}</small>
              <span>{project.chineseTitle ?? project.title}</span>
              <i />
            </button>
          ))}
        </div>

        <div className="scroll-cue" aria-hidden="true"><span /> 向下浏览</div>
      </section>

      <section className="home-intro section-pad">
        <Reveal className="home-intro__label">
          <span className="section-label">01 / 设计自述</span>
        </Reveal>
        <Reveal className="home-intro__statement">
          <h2>设计不是添加更多，而是找到一个品牌最应该被记住的部分。</h2>
          <p>{site.statement}</p>
        </Reveal>
      </section>

      <section className="selected-work section-pad">
        <div className="section-heading">
          <span className="section-label">02 / 精选作品</span>
          <h2>六个项目，六种不同的视觉语气。</h2>
        </div>

        <div className="selected-work__list">
          {projects.slice(0, 4).map((project, index) => (
            <Reveal key={project.slug} className={`featured-row featured-row--${index + 1}`}>
              <Link to={`/projects/${project.slug}`} className="featured-row__media">
                <ResponsiveImage asset={project.coverImage} sizes="(max-width: 767px) 100vw, 66vw" />
              </Link>
              <div className="featured-row__copy">
                <div className="featured-row__meta">
                  <span>{project.index}</span>
                  <span>{project.year}</span>
                </div>
                <h3><Link to={`/projects/${project.slug}`}>{project.chineseTitle ?? project.title}</Link></h3>
                {project.chineseTitle ? <p className="featured-row__cn">{project.title}</p> : null}
                <p>{project.description}</p>
                <Link className="text-link" to={`/projects/${project.slug}`}>查看完整项目 <span>↗</span></Link>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="section-action">
          <Link className="round-link" to="/projects">全部项目 <span>06</span></Link>
        </Reveal>
      </section>

      <section className="featured-project section-pad">
        <div className="featured-project__header">
          <span className="section-label">03 / 重点项目</span>
          <span>完整品牌系统 · 2026</span>
        </div>
        <Reveal>
          <Link to="/projects/paws-and-promise" className="featured-project__media">
            <ResponsiveImage asset={projects[0].heroImage} fit="contain" sizes="100vw" />
            <div className="featured-project__overlay">
              <small>重点项目 / 01</small>
              <h2>爪爪<br />约定</h2>
              <span>品牌识别 · 包装设计 · IP 角色</span>
            </div>
          </Link>
        </Reveal>
      </section>

      <section className="capabilities section-pad">
        <div className="capabilities__intro">
          <span className="section-label">04 / 设计能力</span>
          <h2>从一个识别核心，延展到真实使用场景。</h2>
        </div>
        <div className="capabilities__list">
          {site.capabilities.map((capability, index) => (
            <Reveal key={capability.title} delay={index * 55}>
              <article>
                <span>{capability.index}</span>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="home-cta section-pad">
        <Reveal>
          <p>接受精选项目合作</p>
          <h2>让下一套视觉系统，<br />从一次准确的对话开始。</h2>
          <Link to="/contact">开始一次对话 <span>↗</span></Link>
        </Reveal>
      </section>
    </>
  );
}
