// @ts-ignore
import FlexSearch from 'flexsearch';
import { JALH_LEXICON } from '../data/lexicon';

export interface SearchItem {
  id: string;
  title: string;
  desc: string;
  path: string;
  category: string;
  node?: string;
  keywords?: string[];
}

// Statically define the search items including Core Pages & All Lexicon items
export const getSearchItems = (): SearchItem[] => {
  const items: SearchItem[] = [];

  // 1. Add Lexicon Glossary items (120 high-fidelity research nodes)
  JALH_LEXICON.forEach((entry) => {
    items.push({
      id: `lexicon-${entry.slug}`,
      title: entry.word,
      desc: entry.definition,
      path: `/research/${entry.slug}`,
      category: entry.category,
      node: entry.node,
      keywords: entry.keywords,
    });
  });

  // 2. Add Core Informational Pages
  const corePages = [
    { title: "Methodology", desc: "Kinetic habits & extraction", path: "/methodology", category: "System" },
    { title: "Biometric Metrics", desc: "Real-time biological data feed", path: "/metrics", category: "System" },
    { title: "Research Lab", desc: "Active kinetic experiments and trials", path: "/lab", category: "System" },
    { title: "Behavioral Index", desc: "Aesthetic synchronization coordinates", path: "/behavioral-index", category: "System" },
    { title: "Digit Interaction", desc: "Finger ridge mapping and contact mechanics", path: "/digit-interaction", category: "System" },
    { title: "Kinetic Analysis", desc: "Biomechanical contact telemetry hub", path: "/kinetic-analysis", category: "System" },
    { title: "Main Archive", desc: "Core node records and data registry", path: "/archive", category: "Archive" },
    { title: "Logs Node 001", desc: "Chronological observation logs and telemetry", path: "/logs", category: "Archive" },
    { title: "Alpha Relay Hub", desc: "Decentralized relays and historical records", path: "/logs/alpha", category: "Archive" },
    { title: "Personnel Records", desc: "Member Zero credentials and investigations", path: "/personnel", category: "System" },
    { title: "Logic Timeline", desc: "Establishment history and JALH annals", path: "/history", category: "System" },
    { title: "Authority Index", desc: "Autonomous certificates and search dominance rankings", path: "/authority", category: "System" },
    { title: "System Lexicon", desc: "Terminology glossary search matrices", path: "/lexicon", category: "System" },
    { title: "Domain Gateway", desc: "Premium JALH.com brand asset purchase details", path: "/domain-gateway", category: "Commercial" },
    { title: "Partnership Node", desc: "Global integration pathways and coordination", path: "/partnership", category: "Commercial" },
    { title: "Feelize Design", desc: "Web design testimonial and high-contrast showcase", path: "/feelize-web-design", category: "Commercial" },
    { title: "SERP Recovery Console", desc: "Diagnose and reclaim organic search rank penalty", path: "/funnel/serp-recovery", category: "Service" },
    { title: "Crawl Audit Engine", desc: "Free pre-rendering and crawler indexability audit", path: "/funnel/free-seo-audit", category: "Service" },
    { title: "Project Cost Calculator", desc: "Bespoke slider quote budget planner", path: "/funnel/project-planner", category: "Service" },
    { title: "Interactive UX/UI Services", desc: "Bespoke frontend motion design and Swiss rhythm", path: "/services/interactive-experience-design", category: "Service" },
    { title: "Semantic SEO Domination", desc: "Crawl engineering, JSON-LD schemas, and index triggers", path: "/services/semantic-seo-domination", category: "Service" },
    { title: "Brand Stabilization System", desc: "Digital systems stabilization & brand authority", path: "/services/digital-identity-stabilization", category: "Service" }
  ];

  corePages.forEach((page, idx) => {
    items.push({
      id: `page-${idx}`,
      title: page.title,
      desc: page.desc,
      path: page.path,
      category: page.category,
      node: "PAGE",
      keywords: [page.title.toLowerCase(), page.category.toLowerCase()]
    });
  });

  return items;
};

class SearchIndex {
  private flexIndex: any = null;
  private items: SearchItem[] = [];
  private isInitialized = false;

  constructor() {
    this.items = getSearchItems();
    this.init();
  }

  private init() {
    if (typeof window === 'undefined') return;

    try {
      // Initialize FlexSearch Document Index
      // Using FlexSearch.Document configuration for multi-field indexing and document storage
      this.flexIndex = new FlexSearch.Document({
        document: {
          id: 'id',
          index: ['title', 'desc', 'node', 'keywords'],
          store: ['id', 'title', 'desc', 'path', 'category', 'node']
        },
        tokenize: 'forward',
        context: true
      });

      // Add all items into the FlexSearch index
      this.items.forEach((item) => {
        this.flexIndex.add({
          id: item.id,
          title: item.title,
          desc: item.desc,
          node: item.node || '',
          keywords: item.keywords?.join(' ') || ''
        });
      });

      this.isInitialized = true;
      console.log('FlexSearch index successfully initialized with', this.items.length, 'records.');
    } catch (e) {
      console.warn('FlexSearch failed to initialize. Falling back to local substring index.', e);
      this.isInitialized = false;
    }
  }

  public search(query: string, limit = 8): SearchItem[] {
    const cleanQuery = query.trim().toLowerCase();
    if (!cleanQuery) return [];

    // If FlexSearch successfully initialized, use its high-performance matching
    if (this.isInitialized && this.flexIndex) {
      try {
        const results = this.flexIndex.search(query, {
          limit,
          enrich: true,
          suggest: true
        });

        // Parse FlexSearch results format
        if (results && results.length > 0) {
          // FlexSearch Document search returns matches grouped by field
          const matchIds = new Set<string>();
          const itemsMap = new Map<string, SearchItem>();

          this.items.forEach(it => itemsMap.set(it.id, it));

          results.forEach((fieldResult: any) => {
            if (fieldResult.result) {
              fieldResult.result.forEach((id: string) => {
                matchIds.add(id);
              });
            }
          });

          const matchedItems: SearchItem[] = [];
          matchIds.forEach(id => {
            const item = itemsMap.get(id);
            if (item) {
              matchedItems.push(item);
            }
          });

          if (matchedItems.length > 0) {
            return matchedItems.slice(0, limit);
          }
        }
      } catch (e) {
        console.error('FlexSearch execution failed, using fast fallback query.', e);
      }
    }

    // Fallback: Custom high-performance keyword matching index with scoring
    const scored = this.items.map((item) => {
      let score = 0;
      const titleLower = item.title.toLowerCase();
      const descLower = item.desc.toLowerCase();
      const nodeLower = (item.node || '').toLowerCase();
      const kwsLower = (item.keywords || []).map(k => k.toLowerCase());

      // Exact title match gets massive weight
      if (titleLower === cleanQuery) score += 100;
      // Title prefix match gets big weight
      else if (titleLower.startsWith(cleanQuery)) score += 50;
      // Substring title match
      else if (titleLower.includes(cleanQuery)) score += 30;

      // Node match
      if (nodeLower === cleanQuery) score += 90;
      else if (nodeLower.includes(cleanQuery)) score += 40;

      // Description match
      if (descLower.includes(cleanQuery)) score += 15;

      // Keyword matches
      kwsLower.forEach((kw) => {
        if (kw === cleanQuery) score += 20;
        else if (kw.includes(cleanQuery)) score += 5;
      });

      return { item, score };
    });

    return scored
      .filter((entry) => entry.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((entry) => entry.item)
      .slice(0, limit);
  }
}

// Export a singleton instance of the Search Index
export const JALHSearchEngine = new SearchIndex();
