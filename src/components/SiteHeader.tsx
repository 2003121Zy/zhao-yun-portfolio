import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const navigation = [
  ["作品", "/projects"],
  ["关于", "/about"],
  ["联系", "/contact"],
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <header className="site-header">
      <Link className="site-mark" to="/" aria-label="赵云作品集首页">
        <span>ZY</span>
        <small>设计师</small>
      </Link>

      <nav className="desktop-nav" aria-label="主要导航">
        {navigation.map(([label, href]) => (
          <NavLink key={href} to={href} className={({ isActive }) => (isActive ? "is-active" : undefined)}>
            {label}
          </NavLink>
        ))}
      </nav>

      <button
        className={`menu-toggle ${open ? "is-open" : ""}`}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="sr-only">{open ? "关闭菜单" : "打开菜单"}</span>
        <i />
        <i />
      </button>

      <div id="mobile-navigation" className={`mobile-nav ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <div className="mobile-nav__inner">
          <div className="mobile-nav__meta">导航 / 2026</div>
          {navigation.map(([label, href], index) => (
            <NavLink key={href} to={href} tabIndex={open ? 0 : -1}>
              <small>0{index + 1}</small>
              <span>{label}</span>
            </NavLink>
          ))}
          <div className="mobile-nav__contact">
            <a href="mailto:3047356753@qq.com" tabIndex={open ? 0 : -1}>3047356753@qq.com</a>
            <a href="tel:17374316470" tabIndex={open ? 0 : -1}>173 7431 6470</a>
          </div>
        </div>
      </div>
    </header>
  );
}
