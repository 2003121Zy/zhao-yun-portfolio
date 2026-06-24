import { CopyButton } from "../components/CopyButton";
import { PageMeta } from "../components/PageMeta";
import { site } from "../data/site";

export function ContactPage() {
  return (
    <>
      <PageMeta
        title="联系"
        description="联系设计师赵云，讨论品牌识别、包装、商业视觉与数字设计合作。"
        path="/contact"
      />
      <section className="contact-page section-pad">
        <div className="contact-page__meta">
          <span>联系 / 2026</span>
          <span>{site.location}</span>
        </div>

        <div className="contact-page__lead">
          <p>一起把想法做得更清楚</p>
          <h1>有一个值得被<br />认真做好的项目？</h1>
          <p>无论是新的品牌系统、包装系列，还是需要重新整理的商业视觉，欢迎把背景与目标发给我。</p>
        </div>

        <div className="contact-list">
          <article>
            <span>01 / 邮箱</span>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <CopyButton value={site.email} label="复制邮箱" />
          </article>
          <article>
            <span>02 / 电话</span>
            <a href={`tel:${site.phone}`}>173 7431 6470</a>
            <CopyButton value={site.phone} label="复制电话" />
          </article>
        </div>

        <a className="contact-mailto" href={`mailto:${site.email}?subject=Project%20Inquiry`}>
          发起合作沟通 <span>↗</span>
        </a>
      </section>
    </>
  );
}
