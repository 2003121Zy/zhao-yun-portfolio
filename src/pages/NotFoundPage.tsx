import { Link } from "react-router-dom";
import { PageMeta } from "../components/PageMeta";

export function NotFoundPage() {
  return (
    <section className="not-found section-pad">
      <PageMeta title="页面不存在" description="页面不存在。" path="/404" />
      <span>404 / 画面之外</span>
      <h1>这一页不在<br />当前画面里。</h1>
      <Link to="/">返回首页 <span>↗</span></Link>
    </section>
  );
}
