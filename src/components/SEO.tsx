import { useEffect } from 'react';

export interface SeoData {
  title?: string;
  metaDescription?: string;
  focusKeyword?: string;
  urlSlug?: string;
  canonicalUrl?: string;
  robots?: string;
  openGraphTitle?: string;
  openGraphDescription?: string;
  openGraphImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  schemaType?: string;
}

export function SEO({ seo }: { seo?: SeoData }) {
  useEffect(() => {
    if (!seo) return;

    // 1. Title Update
    const titleVal = seo.title || "Oneroof Solar | Darwin's #1 Solar & Battery Installation Experts";
    document.title = titleVal;

    // 2. Helper to find/create meta elements
    const updateMeta = (nameOrProperty: string, isProperty: boolean, content: string) => {
      const selector = isProperty ? `meta[property="${nameOrProperty}"]` : `meta[name="${nameOrProperty}"]`;
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        if (isProperty) {
          element.setAttribute('property', nameOrProperty);
        } else {
          element.setAttribute('name', nameOrProperty);
        }
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 3. Helper to find/create link element
    const updateLink = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // Apply Standard Meta
    const descriptionVal = seo.metaDescription || "Oneroof Solar provides premium solar panel and battery installations across Darwin, Alice Springs, and the Northern Territory.";
    updateMeta('description', false, descriptionVal);

    if (seo.focusKeyword) {
      updateMeta('keywords', false, seo.focusKeyword);
    }
    if (seo.robots) {
      updateMeta('robots', false, seo.robots);
    }
    if (seo.canonicalUrl) {
      updateLink('canonical', seo.canonicalUrl);
    }

    // Apply Open Graph (Facebook)
    updateMeta('og:type', true, 'website');
    updateMeta('og:locale', true, 'en_AU');
    updateMeta('og:title', true, seo.openGraphTitle || titleVal);
    updateMeta('og:description', true, seo.openGraphDescription || descriptionVal);
    if (seo.openGraphImage) {
      updateMeta('og:image', true, seo.openGraphImage);
    }

    // Apply Twitter Cards
    updateMeta('twitter:card', false, 'summary_large_image');
    updateMeta('twitter:title', false, seo.twitterTitle || titleVal);
    updateMeta('twitter:description', false, seo.twitterDescription || descriptionVal);
    if (seo.twitterImage) {
      updateMeta('twitter:image', false, seo.twitterImage);
    }

    // Apply Schema.org dynamic JSON-LD scripts securely
    let scriptElement = document.querySelector('script[type="application/ld+json"]#seo-jsonld');
    if (seo.schemaType) {
      const schemaObj = {
        "@context": "https://schema.org",
        "@type": seo.schemaType,
        "name": titleVal,
        "description": descriptionVal,
      };
      if (!scriptElement) {
        scriptElement = document.createElement('script');
        scriptElement.setAttribute('type', 'application/ld+json');
        scriptElement.setAttribute('id', 'seo-jsonld');
        document.head.appendChild(scriptElement);
      }
      scriptElement.textContent = JSON.stringify(schemaObj);
    } else if (scriptElement) {
      scriptElement.remove();
    }
  }, [seo]);

  return null;
}

