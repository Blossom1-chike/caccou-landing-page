import { useEffect } from "react";
import { useLocation } from "react-router";
import { SITE_NAME, SITE_URL, SITE_IMAGE } from "../../lib/siteConfig";

interface PageMetaOptions {
  title: string;
  description: string;
  image?: string;
  noindex?: boolean;
}

function setMeta(attr: "name" | "property", key: string, content: string) {
  let element = document.querySelector(`meta[${attr}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

export function usePageMeta({
  title,
  description,
  image = SITE_IMAGE,
  noindex = false,
}: PageMetaOptions) {
  const location = useLocation();

  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`;
    const url = `${SITE_URL}${location.pathname}`;

    document.title = fullTitle;

    setMeta("name", "description", description);
    setMeta("name", "robots", noindex ? "noindex,follow" : "index,follow");
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:image", image);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);
  }, [title, description, image, noindex, location.pathname]);
}
