import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { site } from "../data/site";

export function SiteFooter() {
  const { pathname } = useLocation();
  const compact = pathname === "/" || pathname === "/projects" || pathname === "/contact";

  return (
    <footer className={`site-footer ${compact ? "site-footer--compact" : ""}`}>
      <div className="site-footer__lead">
        <p>有一个值得认真做好的项目？</p>
        <a href={`mailto:${site.email}`}>让它被清楚地看见 <span>↗</span></a>
      </div>
      <div className="site-footer__bottom">
        <span>© {new Date().getFullYear()} ZHAO YUN</span>
        <nav aria-label="页尾导航">
          <Link to="/projects">作品</Link>
          <Link to="/about">关于</Link>
          <Link to="/contact">联系</Link>
        </nav>
        <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>回到顶部 ↑</button>
      </div>
    </footer>
  );
}
