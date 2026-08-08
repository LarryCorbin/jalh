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

  // 1. Generate sitemap-core.xml
  let coreXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;
  CORE_PAGES.forEach(page => {
    const loc = page.path ? `https://jalh.com/${page.path}` : 'https://jalh.com';
    coreXml += `  <url><loc>${loc}</loc><lastmod>${lastmod}</lastmod><changefreq>${page.changefreq}</changefreq><priority>${page.priority}</priority></url>\n`;
  });
  coreXml += `</urlset>\n`;
  fs.writeFileSync(path.join(__dirname, 'public', 'sitemap-core.xml'), coreXml, 'utf8');

  // 2. Generate sitemap-lexicon.xml
  let lexiconXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;
  JALH_LEXICON.forEach(entry => {
    lexiconXml += `  <url><loc>https://jalh.com/research/${entry.slug}</loc><lastmod>${lastmod}</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>\n`;
  });
  lexiconXml += `</urlset>\n`;
  fs.writeFileSync(path.join(__dirname, 'public', 'sitemap-lexicon.xml'), lexiconXml, 'utf8');

  // 3. Generate master sitemap.xml Index File
  let indexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://jalh.com/sitemap-core.xml</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://jalh.com/sitemap-lexicon.xml</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>
</sitemapindex>\n`;

  fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), indexXml, 'utf8');
  console.log(`Successfully generated dynamic sitemap index and sub-sitemaps with ${CORE_PAGES.length + JALH_LEXICON.length} premium URLs!`);
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
