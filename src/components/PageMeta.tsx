import { useEffect } from "react";

type PageMetaProps = {
  title: string;
  description: string;
  image?: string;
  path?: string;
};

function setMeta(selector: string, attribute: "name" | "property", value: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${selector}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, selector);
    document.head.appendChild(element);
  }
  element.content = value;
}

export function PageMeta({ title, description, image = "/assets/og-cover.jpg", path = "/" }: PageMetaProps) {
  useEffect(() => {
    const fullTitle = title.includes("赵云") ? title : `${title} — 赵云`;
    const baseUrl = (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, "");
    document.title = fullTitle;
    setMeta("description", "name", description);
    setMeta("og:title", "property", fullTitle);
    setMeta("og:description", "property", description);
    setMeta("og:image", "property", baseUrl ? `${baseUrl}${image}` : image);
    setMeta("twitter:title", "name", fullTitle);
    setMeta("twitter:description", "name", description);
    setMeta("twitter:image", "name", baseUrl ? `${baseUrl}${image}` : image);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (baseUrl) {
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.rel = "canonical";
        document.head.appendChild(canonical);
      }
      canonical.href = `${baseUrl}${path}`;
    } else if (canonical) {
      canonical.remove();
    }
  }, [description, image, path, title]);

  return null;
}
