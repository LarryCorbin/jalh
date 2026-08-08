import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { JALH_LEXICON } from '../data/lexicon';

// Detailed mapping from path segment to readable title
const segmentTitleMap: Record<string, string> = {
  'methodology': 'Methodology',
  'kinetic-analysis': 'Kinetic Analysis',
  'logs': 'Logs',
  'alpha': 'Alpha Relay Hub',
  'archive': 'Main Archive',
  'lexicon': 'System Lexicon',
  'research': 'Research Nodes',
  'partnership': 'Partnership Node',
  'legal': 'Legal Framework',
  'infrastructure': 'Infrastructure',
  'behavioral-index': 'Behavioral Index',
  'personnel': 'Personnel Records',
  'about-member-zero': 'Member Zero Profile',
  'history': 'History & Timeline',
  'domain-gateway': 'Domain Gateway',
  'metrics': 'Live Metrics',
  'lab': 'Research Lab',
  'vision': 'Vision Statement',
  'press': 'Press Room',
  'api-docs': 'API Documentation',
  'digit-interaction': 'Digit Interaction',
  'authority': 'Authority Index',
  'contact': 'Contact',
  'feelize-web-design': 'Feelize Web Design',
  'category': 'Directories',
  'kinetic': 'Kinetic Directory',
  'aesthetic': 'Aesthetic Catalog',
  'infrastructure-personnel': 'System Nodes',
  'services': 'Bespoke Services',
  'interactive-experience-design': 'Interactive UX/UI',
  'semantic-seo-domination': 'Semantic SEO',
  'digital-identity-stabilization': 'Brand Stabilization',
  'deep-crawl': 'Deep Crawl',
  'schema-graph': 'JSON-LD Schema',
  'rendering-fallback': 'Prerender Fallbacks',
  'tactile-physics': 'Tactile Physics',
  'spring-coefficient': 'Spring Coefficient',
  'swiss-grid': 'Swiss Grid Layout',
  'persona-masking': 'Persona Masking',
  'aesthetic-harmony': 'Aesthetic Harmony',
  'brand-seal': 'Brand Seal',
  'funnel': 'Diagnostic Portal',
  'free-seo-audit': 'Crawl Audit Engine',
  'project-planner': 'Project Cost Calculator',
  'serp-recovery': 'SERP Recovery Console'
};

const getSegmentTitle = (segment: string, isResearchSlug: boolean): string => {
  if (isResearchSlug) {
    const entry = JALH_LEXICON.find(e => e.slug === segment);
    if (entry) return entry.word;
  }
  
  const mapped = segmentTitleMap[segment.toLowerCase()];
  if (mapped) return mapped;
  
  // Fallback to capitalizing and replacing dashes with spaces
  return segment
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const isDarkPage = (pathname: string): boolean => {
  const darkPrefixes = [
    '/metrics',
    '/infrastructure',
    '/services/semantic-seo-domination'
  ];
  return darkPrefixes.some(prefix => pathname === prefix || pathname.startsWith(prefix + '/'));
};

export default function Breadcrumbs() {
  const location = useLocation();
  const pathname = location.pathname;

  // Do not render breadcrumbs on home page
  if (pathname === '/') return null;

  const pathSegments = pathname.split('/').filter(Boolean);
  const isDark = isDarkPage(pathname);

  // Build breadcrumb items array
  const breadcrumbItems = pathSegments.map((segment, index) => {
    const url = `/${pathSegments.slice(0, index + 1).join('/')}`;
    const isResearchSlug = pathSegments[index - 1] === 'research';
    const title = getSegmentTitle(segment, isResearchSlug);
    const isLast = index === pathSegments.length - 1;

    return {
      title,
      url,
      isLast
    };
  });

  // Construct highly-optimized JSON-LD Schema markup for Google Rich Snippets
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "description": "Standard breadcrumbs hierarchy for the JALH digital archive.",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": {
          "@type": "WebPage",
          "@id": "https://jalh.com",
          "name": "Home"
        }
      },
      ...breadcrumbItems.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.title,
        "item": {
          "@type": "WebPage",
          "@id": `https://jalh.com${item.url}`,
          "name": item.title
        }
      }))
    ]
  };

  return (
    <>
      {/* Schema Injection */}
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>

      {/* Visual Component */}
      <div className="absolute top-[100px] left-0 right-0 z-40 w-full pointer-events-none">
        <div className="max-w-6xl mx-auto px-6 md:px-12 pointer-events-auto">
          <nav 
            aria-label="Breadcrumb" 
            className="flex items-center flex-wrap gap-1.5 font-mono text-[10px] uppercase tracking-wider transition-colors duration-300"
          >
            <Link 
              to="/" 
              className={`flex items-center gap-1 transition-colors ${
                isDark 
                  ? 'text-neutral-400 hover:text-white' 
                  : 'text-neutral-500 hover:text-neutral-900'
              }`}
            >
              <Home size={10} />
              <span>Root</span>
            </Link>

            {breadcrumbItems.map((item, index) => (
              <React.Fragment key={item.url}>
                <ChevronRight 
                  size={10} 
                  className={isDark ? 'text-neutral-600' : 'text-neutral-350'} 
                />
                {item.isLast ? (
                  <span 
                    className={`font-semibold ${
                      isDark ? 'text-white' : 'text-neutral-900'
                    }`}
                  >
                    {item.title}
                  </span>
                ) : (
                  <Link 
                    to={item.url} 
                    className={`transition-colors ${
                      isDark 
                        ? 'text-neutral-400 hover:text-white' 
                        : 'text-neutral-500 hover:text-neutral-900'
                    }`}
                  >
                    {item.title}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
