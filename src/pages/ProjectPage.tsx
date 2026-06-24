import { Link, Navigate, useParams } from "react-router-dom";
import { PageMeta } from "../components/PageMeta";
import { ResponsiveImage } from "../components/ResponsiveImage";
import { Reveal } from "../components/Reveal";
import { getAdjacentProjects, getProject } from "../data/projects";

export function ProjectPage() {
  const { slug } = useParams();
  const project = getProject(slug);

  if (!project) return <Navigate to="/404" replace />;

  const { previous, next } = getAdjacentProjects(project.slug);

  return (
    <>
      <PageMeta
        title={`${project.chineseTitle ? `${project.chineseTitle} · ` : ""}${project.title}`}
        description={project.description}
        image={`${project.coverImage.base}-fallback.jpg`}
        path={`/projects/${project.slug}`}
      />

      <article className="project-detail" style={{ "--project-accent": project.accent } as React.CSSProperties}>
        <header className="project-detail__hero">
          <div className="project-detail__media">
            <ResponsiveImage asset={project.heroImage} priority fit="cover" className="project-detail__ambient" sizes="100vw" />
            <ResponsiveImage asset={project.heroImage} priority fit="contain" className="project-detail__artwork" sizes="100vw" />
          </div>
          <div className="project-detail__veil" />
          <div className="project-detail__heading section-pad">
            <div className="project-detail__eyebrow">
              <span>{project.index} / 06</span>
              <span>{project.category}</span>
            </div>
            <h1>{project.chineseTitle ?? project.title}</h1>
            {project.chineseTitle ? <p>{project.title}</p> : null}
          </div>
          <div className="project-detail__scroll">向下浏览 <span>↓</span></div>
        </header>

        <section className="project-overview section-pad">
          <div className="project-overview__intro">
            <span className="section-label">项目概览</span>
            <h2>{project.subtitle}</h2>
          </div>
          <div className="project-overview__copy">
            <p>{project.description}</p>
            <dl>
              <div><dt>年份</dt><dd>{project.year}</dd></div>
              <div><dt>类型</dt><dd>{project.category}</dd></div>
              <div><dt>职责</dt><dd>{project.role}</dd></div>
            </dl>
            <div className="tag-list">
              {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </div>
        </section>

        {project.sections.map((section) => (
          <section key={section.title} className={`case-section case-section--${section.layout} section-pad`}>
            <div className="case-section__copy">
              <span className="section-label">{section.eyebrow}</span>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </div>
            <div className="case-section__media">
              {section.assets.map((asset, assetIndex) => (
                <Reveal key={asset.base} delay={Math.min(assetIndex * 60, 180)}>
                  <ResponsiveImage
                    asset={asset}
                    fit="contain"
                    sizes={section.layout === "grid" ? "(max-width: 767px) 100vw, 46vw" : "100vw"}
                  />
                </Reveal>
              ))}
            </div>
          </section>
        ))}

        <section className="project-summary section-pad">
          <span className="section-label">项目总结</span>
          <p>{project.summary}</p>
        </section>

        <nav className="project-navigation" aria-label="相邻项目">
          <Link to={`/projects/${previous.slug}`} className="project-navigation__previous">
            <small>上一个项目</small>
            <span>{previous.chineseTitle ?? previous.title}</span>
          </Link>
          <Link to="/projects" className="project-navigation__all">全部 06</Link>
          <Link to={`/projects/${next.slug}`} className="project-navigation__next">
            <small>下一个项目</small>
            <span>{next.chineseTitle ?? next.title}</span>
          </Link>
        </nav>
      </article>
    </>
  );
}
