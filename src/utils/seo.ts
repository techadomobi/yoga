type SeoOptions = {
  title: string;
  description: string;
  path: string;
};

const SITE_NAME = 'ZenFlow Yoga Studio';

function upsertMetaByName(name: string, content: string) {
  let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function upsertMetaByProperty(property: string, content: string) {
  let tag = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('property', property);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function upsertCanonical(url: string) {
  let tag = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', 'canonical');
    document.head.appendChild(tag);
  }
  tag.setAttribute('href', url);
}

export function applyPageSeo({ title, description, path }: SeoOptions) {
  const pageTitle = `${title} | ${SITE_NAME}`;
  const url = `${window.location.origin}${path}`;

  document.title = pageTitle;

  upsertMetaByName('description', description);
  upsertMetaByName('twitter:card', 'summary');
  upsertMetaByName('twitter:title', pageTitle);
  upsertMetaByName('twitter:description', description);

  upsertMetaByProperty('og:type', 'website');
  upsertMetaByProperty('og:site_name', SITE_NAME);
  upsertMetaByProperty('og:title', pageTitle);
  upsertMetaByProperty('og:description', description);
  upsertMetaByProperty('og:url', url);

  upsertCanonical(url);
}
