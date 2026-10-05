/**
 * Post-build SEO HTML shells for key public routes.
 * Copies the built index.html into route folders with unique title/description/canonical
 * so crawlers that do not execute JS still see correct meta (not homepage defaults).
 *
 * Full body content still requires JS or a future SSR/prerender migrate.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '..', 'dist');
const indexPath = path.join(distDir, 'index.html');

const SITE = 'https://www.oneroofsolar.com.au';

const routes = [
  { path: '/', title: "Oneroof Solar | Darwin's #1 Solar & Battery Installation Experts", description: 'Oneroof Solar provides premium solar panel and battery installations across Darwin, Alice Springs, and the Northern Territory. Save more with our $0 deposit solar plans.' },
  { path: '/about', title: 'About Oneroof Solar | Darwin & NT Solar Installers', description: "Learn about Oneroof Solar, Darwin's local CEC-accredited solar team with 25 years of NT experience." },
  { path: '/contact', title: 'Contact Oneroof Solar | Free Solar Quote Darwin', description: 'Contact Oneroof Solar for a free solar quote in Darwin, Palmerston, Alice Springs and across the NT. Call 0483 986 444.' },
  { path: '/projects', title: 'Solar Projects Darwin & NT | Oneroof Solar Installations', description: 'See completed solar panel and battery projects across Darwin, Palmerston, Alice Springs and the Northern Territory.' },
  { path: '/blogs', title: 'Solar Blog Darwin NT | Oneroof Solar Guides', description: 'Solar tips, NT weather guidance and installation advice from Oneroof Solar in Darwin.' },
  { path: '/solar-panels-darwin', title: 'Solar Panels Darwin | Installation, Repair & Maintenance | Oneroof Solar', description: 'Call 0483 986 444 for solar panel installation, repair, and maintenance across Darwin and the NT.' },
  { path: '/services/solar-panel-installation', title: 'Solar Panel Installation Darwin | Oneroof Solar', description: 'Call 0483 986 444 for licensed solar panel installation in Darwin, homes, businesses and remote NT properties.' },
  { path: '/services/solar-panel-repair-darwin', title: 'Solar Panel Repair Darwin | Oneroof Solar', description: 'Professional solar panel repair in Darwin. Cracked panels, hot spots, storm damage and all major brands.' },
  { path: '/services/solar-panel-maintenance-darwin', title: 'Solar Panel Cleaning and Maintenance Darwin | Oneroof Solar', description: 'Professional solar panel cleaning and maintenance in Darwin. Purified water cleans and system checks.' },
  { path: '/services/solar-battery-installation', title: 'Solar Battery Installation Darwin | Oneroof Solar', description: 'Solar battery installation across Darwin and the NT. Storage for homes and businesses.' },
  { path: '/solar-systems/residential-solar-system', title: 'Residential Solar System Darwin | Oneroof Solar', description: 'Residential solar systems for Darwin homes. Design, install and support from Oneroof Solar.' },
  { path: '/solar-systems/commercial-solar-system', title: 'Commercial Solar System Darwin | Oneroof Solar', description: 'Commercial solar systems for Darwin businesses. Custom design and installation.' },
  { path: '/solar-systems/off-grid-solar-system', title: 'Off-Grid Solar System NT | Oneroof Solar', description: 'Off-grid solar systems for remote Northern Territory properties.' },
  { path: '/products/solar-inverters', title: 'Solar Inverters Darwin | Oneroof Solar', description: 'Compare solar inverter brands for Darwin homes and businesses.' },
  { path: '/products/solar-battery-brands', title: 'Solar Battery Brands Darwin | Oneroof Solar', description: 'Compare solar battery brands available from Oneroof Solar in Darwin and the NT.' },
  { path: '/product/solar-panels-brands', title: 'Solar Panel Brands Darwin | Oneroof Solar', description: 'Compare solar panel brands for Darwin and Northern Territory conditions.' },
  { path: '/solar-alice-springs', title: 'Solar Alice Springs | Oneroof Solar', description: 'Solar installation, repair and maintenance in Alice Springs from Oneroof Solar.' },
  { path: '/locations/darwin-city', title: 'Solar Darwin City | Oneroof Solar', description: 'Solar services across Darwin City and inner suburbs.' },
  { path: '/locations/northern-darwin', title: 'Solar Northern Darwin | Oneroof Solar', description: 'Solar services across Nightcliff, Rapid Creek and northern Darwin suburbs.' },
  { path: '/locations/palmerston', title: 'Solar Palmerston | Oneroof Solar', description: 'Solar installation and service across Palmerston NT.' },
  { path: '/locations/darwin-rural', title: 'Solar Darwin Rural | Oneroof Solar', description: 'Solar services for Darwin rural and surrounding NT areas.' },
  { path: '/locations/stuart-park', title: 'Local Stuart Park Solar Installers & Repair Experts | OneRoof', description: "Built for Darwin's wet season & extreme heat. SAA accredited team for solar, battery & inverter services. 4.9★ rated local experts." },
  { path: '/locations/fannie-bay', title: 'Solar Panels & Installers in Fannie Bay NT | OneRoof Solar', description: 'Looking for solar in Fannie Bay? OneRoof Solar provides solar panel installation, inverter, battery and EV charger solutions for homes and businesses. Get a free quote.' },
  { path: '/locations/east-point', title: 'Solar Installation and Repair in East Point NT | Oneroof Solar', description: "Reliable solar for East Point homes and businesses. Solar panel installation, battery storage, inverter solutions and repairs designed for Darwin's tropical coastal climate. Get a free quote." },
  { path: '/services/ev-chargers/installation', title: 'EV Charger Installation Darwin | Oneroof Solar', description: 'EV charger installation across Darwin and the Northern Territory.' },
  { path: '/services/ev-chargers/repair', title: 'EV Charger Repair Darwin | Oneroof Solar', description: 'EV charger repair and diagnostics in Darwin NT.' },
];

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function injectMeta(html, { path: routePath, title, description }) {
  const canonical = routePath === '/' ? `${SITE}/` : `${SITE}${routePath}`;
  let out = html;

  out = out.replace(/<title>[^<]*<\/title>/i, `<title>${escapeHtml(title)}</title>`);

  if (/<meta\s+name=["']description["'][^>]*>/i.test(out)) {
    out = out.replace(
      /<meta\s+name=["']description["'][^>]*>/i,
      `<meta name="description" content="${escapeHtml(description)}" />`
    );
  } else {
    out = out.replace(
      /<\/title>/i,
      `</title>\n    <meta name="description" content="${escapeHtml(description)}" />`
    );
  }

  if (/<link\s+rel=["']canonical["'][^>]*>/i.test(out)) {
    out = out.replace(
      /<link\s+rel=["']canonical["'][^>]*>/i,
      `<link rel="canonical" href="${canonical}" />`
    );
  } else {
    out = out.replace(
      /<meta name="description"[^>]*>/i,
      (m) => `${m}\n    <link rel="canonical" href="${canonical}" />`
    );
  }

  // Lightweight crawlable body hint for non-JS agents
  const noscript = `<noscript><div><h1>${escapeHtml(title)}</h1><p>${escapeHtml(description)}</p><p><a href="${canonical}">${canonical}</a></p></div></noscript>`;
  if (!out.includes('<noscript><div><h1>')) {
    out = out.replace('<div id="root"></div>', `<div id="root"></div>\n    ${noscript}`);
  }

  return out;
}

if (!fs.existsSync(indexPath)) {
  console.error('dist/index.html not found. Run vite build first.');
  process.exit(1);
}

const baseHtml = fs.readFileSync(indexPath, 'utf8');
let written = 0;

for (const route of routes) {
  const html = injectMeta(baseHtml, route);
  if (route.path === '/') {
    fs.writeFileSync(indexPath, html);
    written++;
    continue;
  }
  const dir = path.join(distDir, route.path.replace(/^\//, ''));
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html);
  written++;
}

console.log(`SEO shells written for ${written} routes.`);
