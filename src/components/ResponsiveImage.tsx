import type { CSSProperties } from "react";
import type { ProjectAsset } from "../data/projects";

type ResponsiveImageProps = {
  asset: ProjectAsset;
  className?: string;
  priority?: boolean;
  fit?: "cover" | "contain";
  sizes?: string;
};

export function ResponsiveImage({
  asset,
  className = "",
  priority = false,
  fit = "contain",
  sizes = "(max-width: 767px) 100vw, 80vw",
}: ResponsiveImageProps) {
  const style = {
    "--media-ratio": asset.ratio ?? "16 / 10",
    "--media-position": asset.position ?? "50% 50%",
    "--media-fit": fit,
  } as CSSProperties;

  return (
    <figure className={`media ${className}`.trim()} style={style}>
      <picture>
        <source
          type="image/avif"
          srcSet={`${asset.base}-768.avif 768w, ${asset.base}-1440.avif 1440w`}
          sizes={sizes}
        />
        <source
          type="image/webp"
          srcSet={`${asset.base}-768.webp 768w, ${asset.base}-1440.webp 1440w, ${asset.base}-2400.webp 2400w`}
          sizes={sizes}
        />
        <img
          src={`${asset.base}-fallback.jpg`}
          alt={asset.alt}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding={priority ? "sync" : "async"}
        />
      </picture>
      {asset.caption ? <figcaption>{asset.caption}</figcaption> : null}
    </figure>
  );
}
