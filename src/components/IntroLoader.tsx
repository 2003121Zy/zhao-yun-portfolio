import { useEffect, useState } from "react";

export function IntroLoader() {
  const [visible, setVisible] = useState(() => {
    try {
      return sessionStorage.getItem("portfolio-intro-seen") !== "true";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (!visible) return;
    const timer = window.setTimeout(() => {
      setVisible(false);
      try {
        sessionStorage.setItem("portfolio-intro-seen", "true");
      } catch {
        // The animation remains optional when storage is unavailable.
      }
    }, 1050);
    return () => window.clearTimeout(timer);
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="intro-loader" aria-hidden="true">
      <div className="intro-loader__mark">ZY</div>
      <div className="intro-loader__line"><span /></div>
      <div className="intro-loader__meta">作品集 / 2026</div>
    </div>
  );
}
