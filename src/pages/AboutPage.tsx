import { Link } from "react-router-dom";
import { PageMeta } from "../components/PageMeta";
import { Reveal } from "../components/Reveal";
import { site } from "../data/site";

export function AboutPage() {
  return (
    <>
      <PageMeta
        title="关于"
        description="关于设计师赵云：品牌识别、包装、商业视觉、数字体验与 AI 工作流。"
        path="/about"
      />
      <header className="page-hero about-hero section-pad">
        <div className="about-hero__index">关于我 / 01</div>
        <h1>以清晰建立秩序，<br /><em>以感受留下记忆。</em></h1>
        <div className="about-hero__intro">
          <p>赵云 / 设计师</p>
          <p>{site.intro}</p>
        </div>
      </header>

      <section className="about-profile section-pad">
        <Reveal className="about-profile__lead">
          <span className="section-label">个人介绍</span>
          <h2>我关注的不只是画面是否好看，更在意一套视觉为何成立、如何被使用，以及它能否长期保持辨识度。</h2>
        </Reveal>
        <Reveal className="about-profile__body">
          <p>工作横跨品牌识别、包装系统、商业运营视觉与数字场景。面对不同项目，我习惯先找到最值得被记住的识别核心，再用清楚的字体、色彩、图形和版式规则建立完整系统。</p>
          <p>生成式工具是探索过程的一部分，但最终画面的取舍、节奏与一致性仍然来自设计判断。技术可以拓宽可能，判断让结果真正属于品牌。</p>
        </Reveal>
      </section>

      <section className="about-capabilities section-pad">
        <div className="section-heading">
          <span className="section-label">专业方向 / 05</span>
          <h2>我所做的设计</h2>
        </div>
        <div className="about-capabilities__grid">
          {site.capabilities.map((capability, index) => (
            <Reveal key={capability.title} delay={index * 50}>
              <article>
                <span>{capability.index}</span>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="method section-pad">
        <div className="method__title">
          <span className="section-label">工作方式 / 04</span>
          <h2>一套可以被重复使用的工作方式。</h2>
        </div>
        <div className="method__steps">
          {site.methods.map(([title, description], index) => (
            <Reveal key={title} delay={index * 55}>
              <article>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="tools section-pad">
        <span className="section-label">工具与工作流</span>
        <div className="tools__marquee" aria-label={site.tools.join("、")}>
          <div>
            {[...site.tools, ...site.tools].map((tool, index) => (
              <span key={`${tool}-${index}`}>{tool}<i>↗</i></span>
            ))}
          </div>
        </div>
      </section>

      <section className="about-next section-pad">
        <p>继续看作品</p>
        <Link to="/projects">浏览全部项目 <span>↗</span></Link>
      </section>
    </>
  );
}
