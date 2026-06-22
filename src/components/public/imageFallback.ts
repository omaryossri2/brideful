import React from 'react';

// Brand-styled inline SVG placeholder shown when a product image is missing
// or fails to load. Self-contained (data URI) so it needs no network/files.
export const makePlaceholder = (label: string) => {
  const safe = (label || 'Brideful')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="320" viewBox="0 0 400 320">
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#F3EAE5"/><stop offset="100%" stop-color="#EDE0F0"/>
    </linearGradient></defs>
    <rect width="400" height="320" fill="url(#g)"/>
    <text x="200" y="150" font-family="Georgia, serif" font-size="42" fill="#C47B8A" text-anchor="middle">&#10048;</text>
    <text x="200" y="195" font-family="Georgia, serif" font-size="18" fill="#7A6660" text-anchor="middle">${safe}</text>
    <text x="200" y="222" font-family="Georgia, serif" font-size="12" fill="#A89490" text-anchor="middle">image coming soon</text>
  </svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
};

const swap = (img: HTMLImageElement, label: string) => {
  // Avoid an infinite loop if the placeholder itself ever fails.
  if (img.dataset.fallback === 'true') return;
  img.dataset.fallback = 'true';
  img.src = makePlaceholder(label);
};

// Returns onError + onLoad handlers that render a placeholder when the real
// image is missing. onError covers a true 404 (production); onLoad's
// naturalWidth check covers dev, where Vite's SPA fallback returns index.html
// (HTTP 200) for a missing path so onError never fires.
export const imageFallback = (label: string) => ({
  onError: (e: React.SyntheticEvent<HTMLImageElement>) => swap(e.currentTarget, label),
  onLoad: (e: React.SyntheticEvent<HTMLImageElement>) => {
    if (e.currentTarget.naturalWidth === 0) swap(e.currentTarget, label);
  },
});
