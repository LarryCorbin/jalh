import fs from 'fs';
import path from 'path';
import { JALH_LEXICON } from './src/data/lexicon.js';
import { pingSearchEngines } from './src/utils/pingSeo.js';

const __dirname = path.resolve();

const CORE_PAGES = [
  { path: '', priority: '1.0', changefreq: 'daily' },
  { path: 'sitemap', priority: '0.9', changefreq: 'weekly' },
  { path: 'methodology', priority: '0.9', changefreq: 'weekly' },
  { path: 'kinetic-analysis', priority: '0.8', changefreq: 'weekly' },
  { path: 'logs', priority: '0.8', changefreq: 'daily' },
  { path: 'logs/alpha', priority: '0.7', changefreq: 'weekly' },
  { path: 'archive', priority: '0.9', changefreq: 'daily' },
  { path: 'lexicon', priority: '0.8', changefreq: 'weekly' },
  { path: 'partnership', priority: '0.7', changefreq: 'monthly' },
  { path: 'legal', priority: '0.5', changefreq: 'monthly' },
  { path: 'infrastructure', priority: '0.6', changefreq: 'monthly' },
  { path: 'behavioral-index', priority: '0.7', changefreq: 'monthly' },
  { path: 'personnel', priority: '0.8', changefreq: 'weekly' },
  { path: 'about-member-zero', priority: '0.8', changefreq: 'weekly' },
  { path: 'history', priority: '0.6', changefreq: 'monthly' },
  { path: 'domain-gateway', priority: '0.8', changefreq: 'weekly' },
  { path: 'metrics', priority: '0.7', changefreq: 'daily' },
  { path: 'lab', priority: '0.7', changefreq: 'weekly' },
  { path: 'vision', priority: '0.6', changefreq: 'monthly' },
  { path: 'press', priority: '0.5', changefreq: 'monthly' },
  { path: 'api-docs', priority: '0.4', changefreq: 'monthly' },
  { path: 'digit-interaction', priority: '0.7', changefreq: 'weekly' },
  { path: 'authority', priority: '0.7', changefreq: 'monthly' },
  { path: 'contact', priority: '0.6', changefreq: 'monthly' },
  { path: 'feelize-web-design', priority: '0.6', changefreq: 'monthly' },
  { path: 'category/kinetic', priority: '0.8', changefreq: 'weekly' },
  { path: 'category/aesthetic', priority: '0.8', changefreq: 'weekly' },
  { path: 'category/infrastructure-personnel', priority: '0.8', changefreq: 'weekly' },
  { path: 'services/interactive-experience-design', priority: '0.9', changefreq: 'weekly' },
  { path: 'services/semantic-seo-domination', priority: '0.9', changefreq: 'weekly' },
  { path: 'services/digital-identity-stabilization', priority: '0.9', changefreq: 'weekly' },
  
  // Layer 3 Subpages under Semantic SEO
  { path: 'services/semantic-seo-domination/deep-crawl', priority: '0.8', changefreq: 'weekly' },
  { path: 'services/semantic-seo-domination/schema-graph', priority: '0.8', changefreq: 'weekly' },
  { path: 'services/semantic-seo-domination/rendering-fallback', priority: '0.8', changefreq: 'weekly' },

  // Layer 3 Subpages under Interactive Experience Design
  { path: 'services/interactive-experience-design/tactile-physics', priority: '0.8', changefreq: 'weekly' },
  { path: 'services/interactive-experience-design/spring-coefficient', priority: '0.8', changefreq: 'weekly' },
  { path: 'services/interactive-experience-design/swiss-grid', priority: '0.8', changefreq: 'weekly' },

  // Layer 3 Subpages under Digital Identity Stabilization
  { path: 'services/digital-identity-stabilization/persona-masking', priority: '0.8', changefreq: 'weekly' },
  { path: 'services/digital-identity-stabilization/aesthetic-harmony', priority: '0.8', changefreq: 'weekly' },
  { path: 'services/digital-identity-stabilization/brand-seal', priority: '0.8', changefreq: 'weekly' },

  { path: 'funnel/free-seo-audit', priority: '0.8', changefreq: 'weekly' },
  { path: 'funnel/project-planner', priority: '0.8', changefreq: 'weekly' },
  { path: 'funnel/serp-recovery', priority: '0.8', changefreq: 'weekly' }
];

function generateSitemap() {
  const lastmod = new Date().toISOString().split('T')[0];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<!-- 
  JALH (Judiciously Always Looking Happy) Official Core Entity XML Sitemap.
  Semantic Scope: JALH framework, Member Zero archive, kinetic habit extraction, jalh.com acquisition.
  Dynamically compiled and generated at build time. Total paths: ${CORE_PAGES.length + JALH_LEXICON.length}
-->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  // Add core pages
  CORE_PAGES.forEach(page => {
    const loc = page.path ? `https://jalh.com/${page.path}` : 'https://jalh.com';
    xml += `  <url><loc>${loc}</loc><lastmod>${lastmod}</lastmod><changefreq>${page.changefreq}</changefreq><priority>${page.priority}</priority></url>\n`;
  });

  // Add all JALH Lexicon entries as individual research pages
  JALH_LEXICON.forEach(entry => {
    xml += `  <url><loc>https://jalh.com/research/${entry.slug}</loc><lastmod>${lastmod}</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>\n`;
  });

  xml += `</urlset>\n`;

  // Clean up any old sub-sitemaps if they exist
  const corePath = path.join(__dirname, 'public', 'sitemap-core.xml');
  const lexiconPath = path.join(__dirname, 'public', 'sitemap-lexicon.xml');
  if (fs.existsSync(corePath)) fs.unlinkSync(corePath);
  if (fs.existsSync(lexiconPath)) fs.unlinkSync(lexiconPath);

  const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
  fs.writeFileSync(sitemapPath, xml, 'utf8');
  console.log(`Successfully generated unified sitemap.xml with ${CORE_PAGES.length + JALH_LEXICON.length} premium URLs!`);
}

async function run() {
  generateSitemap();
  try {
    const pingResult = await pingSearchEngines();
    console.log(`[BUILD-SEO] ${pingResult.message}`);
  } catch (err) {
    console.error(`[BUILD-SEO] Failed to ping search engines during sitemap build:`, err);
  }
}

run();
