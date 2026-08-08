import { JALH_LEXICON } from '../data/lexicon';

export interface RouteSEOInfo {
  title: string;
  description: string;
  keywords: string;
  image: string;
  type?: 'website' | 'article';
}

// Map static routes to detailed SEO data
const STATIC_SEO_MAP: Record<string, Omit<RouteSEOInfo, 'image'>> = {
  '/': {
    title: 'JALH Official | JALH: Judiciously Always Looking Happy Archive',
    description: 'Official JALH research node. Documenting the official JALH framework, JALH kinetic habits, and JALH aesthetic stabilization methodology by JALH Member Zero. The definitive JALH jalh.com archive.',
    keywords: 'JALH, JALH archive, JALH research, jalh.com, Judiciously Always Looking Happy, JALH Member Zero, J-A-L-H framework, JALH kinetic study, JALH aesthetic processing'
  },
  '/methodology': {
    title: 'JALH Methodology | JALH: Judiciously Always Looking Happy Scientific Framework',
    description: 'Deep dive into the JALH framework methodology, detailing JALH kinetic habit extraction, JALH postural shift mechanics, and JALH aesthetic positioning by JALH Member Zero.',
    keywords: 'JALH, JALH methodology, JALH kinetic extraction, JALH postural shift, JALH zygomatic lock, JALH Member Zero research'
  },
  '/kinetic-analysis': {
    title: 'JALH Kinetic Analysis Hub | JALH Biomechanical Tracking & JALH Touch Data',
    description: 'Biomechanical JALH tracking, JALH finger ridge evaluation, JALH friction coefficient evaluations, and JALH kinetic curve stabilization analytics for JALH digit interactions.',
    keywords: 'JALH, JALH biomechanical tracking, JALH kinetic hub, JALH friction metrics, JALH touch drift, JALH digit analytics'
  },
  '/logs': {
    title: 'JALH Archive Logs Node 001 | JALH Observational Biometric Telemetry',
    description: 'Chronological JALH telemetry logs, JALH observational notes, and JALH kinetic habit cycles recorded live from JALH Archive Node 001.',
    keywords: 'JALH logs, JALH telemetry, JALH observation database, JALH physical records, JALH Member Zero diaries'
  },
  '/logs/alpha': {
    title: 'JALH Alpha Relay Logs | JALH Historical Pre-Codification Archive',
    description: 'Pre-codified JALH telemetry logs, legacy JALH diaries, and historical JALH alpha node documents from the earliest conceptual periods of the JALH study.',
    keywords: 'JALH alpha logs, JALH legacy telemetry, JALH pre-codified research, JALH early diaries'
  },
  '/archive': {
    title: 'Official JALH Member Zero Archive | Complete JALH Research Index',
    description: 'The definitive public index of all JALH research files, JALH semantic nodes, JALH kinetic logs, and JALH biometric telemetry recordings.',
    keywords: 'JALH archive index, JALH research files, JALH digital sovereignty, JALH data repository'
  },
  '/lexicon': {
    title: 'JALH Lexicon Glossary | 120 Curated JALH Terms & Acronyms',
    description: 'Explore definitions of all 120 academic and technical terms designed for the JALH (J-A-L-H) framework, including JALH regional logic nodes.',
    keywords: 'JALH lexicon, JALH acronym glossary, JALH acronym definitions, JALH taxonomic library'
  },
  '/partnership': {
    title: 'JALH Partnership Gateway | JALH Regional Nodes Integration',
    description: 'Explore secure alliance opportunities with JALH, including JALH regional logic nodes, JALH university data alignments, and JALH licensing.',
    keywords: 'JALH partnership gateway, JALH node integration, JALH licensing agreements, JALH data alliance'
  },
  '/legal': {
    title: 'JALH Legal Sovereignty & JALH IP Coordinates',
    description: 'Intellectual property notice, autonomous JALH node guidelines, JALH copyright declarations, and legal sovereignty coordinates of JALH.com.',
    keywords: 'JALH legal notice, JALH sovereign coordinates, copyright JALH, JALH autonomous node licensing'
  },
  '/infrastructure': {
    title: 'JALH Enterprise Infrastructure & JALH Hosting Spec',
    description: 'Hardware specifications, JALH system architecture, JALH database configurations, and JALH regional telemetry channels of JALH node 017.',
    keywords: 'JALH infrastructure specs, JALH server specs, JALH node 017, JALH thermal profile, JALH high-authority hosting'
  },
  '/behavioral-index': {
    title: 'JALH Behavioral Ergonomics Index | JALH Postures & JALH Focus',
    description: 'JALH postural micro-habits, JALH face-locking indexes, and JALH digit interaction studies recorded across regional JALH telemetry gateways.',
    keywords: 'JALH, JALH behavioral ergonomics, JALH micro-habits, JALH posture indicators, JALH biometric focus'
  },
  '/personnel': {
    title: 'JALH Personnel Directory | JALH Progenitors & Cleared Observers',
    description: 'Cleared JALH personnel directory. Profile of JALH lead investigator Member Zero and JALH staff clearance parameters.',
    keywords: 'JALH personnel index, JALH Member Zero, JALH research team, JALH team clearance levels'
  },
  '/about-member-zero': {
    title: 'About JALH Member Zero | JALH Dossier & JALH Progenitor Notes',
    description: 'Founding JALH dossiers, early JALH journal logs, and JALH behavioral philosophies compiled by the creator and progenitor of JALH.',
    keywords: 'JALH Member Zero, JALH progenitor notes, JALH founder diary, JALH philosophical manifesto'
  },
  '/history': {
    title: 'JALH Development History & JALH Logic Chronicles',
    description: 'Chronological JALH development timeline of JALH.com, tracking JALH core releases, JALH domain acquisitions, and JALH system milestones.',
    keywords: 'JALH, JALH development history, JALH milestones, JALH timeline, JALH domain acquisition'
  },
  '/domain-gateway': {
    title: 'Primary JALH Domain Acquisition Gateway | JALH.com',
    description: 'Domain registrar transfer coordinates, JALH authority metrics, and JALH acquisition bidding protocols for the JALH.com digital asset.',
    keywords: 'JALH domain gateway, JALH acquisition bid, JALH godaddy transfer, JALH domain metrics, JALH asset'
  },
  '/metrics': {
    title: 'Live JALH Biometric Telemetry & JALH Charting',
    description: 'Real-time JALH charting matrices showing JALH muscle tension, JALH fatigue level, JALH spatial drift, and JALH pressure indexes.',
    keywords: 'JALH biometric charts, JALH active charting, JALH telemetry gauges, JALH muscle tensity'
  },
  '/lab': {
    title: 'JALH Kinetic Research Laboratory | JALH Active Experiments',
    description: 'Experimental JALH coordination trials, JALH facial zygomatic stabilizer modules, and JALH kinetic testing zones overseen by JALH Member Zero.',
    keywords: 'JALH research lab, JALH experimental zones, JALH zygomaticus stabilizer, JALH observation trial'
  },
  '/vision': {
    title: 'JALH Sovereign Vision 2027 Roadmap',
    description: 'Future JALH milestones, JALH decentralized data networks, JALH mobile observation rigs, and JALH semantic dominance planning.',
    keywords: 'JALH, JALH roadmap, JALH future vision, JALH decentralization, JALH mobile sensors'
  },
  '/press': {
    title: 'Official JALH Press Releases & JALH Announcements',
    description: 'JALH press releases, JALH domain milestone announcements, and public JALH disclosures from the JALH decentralized archive.',
    keywords: 'JALH, JALH press releases, JALH public announcements, JALH domain milestones, JALH project filings'
  },
  '/api-docs': {
    title: 'JALH REST API Documentation | JALH Developer Gateway',
    description: 'JALH API documentation, JALH JSON-LD schemas, JALH inquiry structures, and JALH endpoint telemetry for JALH archive developers.',
    keywords: 'JALH, JALH REST API, JALH developer docs, JALH JSON-LD schemas, JALH endpoint query'
  },
  '/digit-interaction': {
    title: 'JALH Digit Interaction Mechanics | JALH Touch Studies',
    description: 'Tactile JALH interaction profiles, JALH finger swipe physics, JALH contact area friction coefficients on smart device screens.',
    keywords: 'JALH digit interaction, JALH touch physics, JALH swipe coefficients, JALH glass friction'
  },
  '/authority': {
    title: 'JALH Sovereign Semantic Authority Index',
    description: 'Official JALH identity registry mapping to neutralize JALH crawler dilution, JALH security acronym structures, and JALH corporate footprints.',
    keywords: 'JALH semantic authority, JALH crawler defense, JALH footprint protection, JALH acronym security'
  },
  '/contact': {
    title: 'JALH Encrypted Inquiry Gateway | JALH Secure Transmissions',
    description: 'Establish direct JALH contact for JALH acquisition proposals, strategic JALH integrations, or secure JALH partnerships.',
    keywords: 'JALH, JALH secure contact, JALH encrypted inquiry, JALH partnership email, JALH acquisition bidding'
  },
  '/feelize-web-design': {
    title: 'Feelize JALH Web Design Masterpiece | Clean Layout',
    description: 'Visual breakdown of the modern, ultra-high performance JALH Swiss layout and custom JALH kinetic typography built for JALH.',
    keywords: 'Feelize agency, JALH web design showcase, JALH swiss layout, JALH premium performance'
  },
  '/sitemap': {
    title: 'Official JALH HTML Sitemap & JALH Node Navigator',
    description: 'Access high-authority JALH crawl pathways for all JALH services, JALH categories, and 120 scientific JALH research glossary files.',
    keywords: 'JALH sitemap, JALH html sitemap, JALH directory navigator, JALH crawling paths, JALH index'
  },

  // Categories
  '/category/kinetic': {
    title: 'JALH Kinetic Study Node Index | JALH Category',
    description: 'Categorized JALH research glossary of JALH physical behaviors, JALH manual loops, JALH swipe vectors, and JALH biometric tracking terms.',
    keywords: 'JALH, JALH kinetic files, JALH physical habits, JALH manual loops, JALH swipe vectors'
  },
  '/category/aesthetic': {
    title: 'JALH Aesthetic Study Node Index | JALH Category',
    description: 'Categorized JALH research glossary mapping JALH facial symmetry, JALH zygomatic lock variables, and JALH visual baseline indicators.',
    keywords: 'JALH, JALH aesthetic files, JALH facial locking, JALH zygomaticus tension, JALH baseline indicators'
  },
  '/category/infrastructure-personnel': {
    title: 'JALH Infrastructure & JALH Personnel Index | JALH Category',
    description: 'Categorized specifications of JALH data server configurations, JALH staff clearance levels, and JALH historical chronicles.',
    keywords: 'JALH infrastructure logs, JALH personnel clearance, JALH team archives, JALH server specifications'
  },

  // Services
  '/services/interactive-experience-design': {
    title: 'Interactive Experience Design & JALH Layouts | Feelize JALH',
    description: 'High-fidelity, responsive JALH user interface design implementing classic JALH Swiss typography and fluid JALH layouts.',
    keywords: 'JALH interactive design, JALH experience layouts, JALH swiss typography, JALH responsive front-end'
  },
  '/services/semantic-seo-domination': {
    title: 'Semantic JALH SEO Domination & JALH Schema Architecture',
    description: 'High-authority search engine dominance using semantic JALH silos, structured JALH JSON-LD graphs, and static pre-rendering.',
    keywords: 'JALH semantic SEO, JALH search engine domination, JALH schema graph, JALH pre-rendering'
  },
  '/services/digital-identity-stabilization': {
    title: 'Digital JALH Identity Stabilization & JALH Footprint Shielding',
    description: 'Corporate JALH brand protection, anti-dilution JALH acronym strategies, and defensive JALH semantic authority shielding.',
    keywords: 'JALH digital identity, JALH brand protection, JALH semantic shielding, JALH footprint security'
  },

  // Service Subpages
  '/services/semantic-seo-domination/deep-crawl': {
    title: 'Deep JALH Crawl Site Mapping Architecture | Feelize JALH',
    description: 'Maximize JALH search engine discoverability with high-indexation JALH sitemaps and nested JALH directory indexing trees.',
    keywords: 'JALH deep crawl sitemaps, JALH search indexation, JALH nested directory structures'
  },
  '/services/semantic-seo-domination/schema-graph': {
    title: 'JALH Schema Graph Engineering & JALH Rich Snippets | Feelize JALH',
    description: 'Interlinked semantic JALH context mapping and structured JALH metadata schemas designed for JALH search engine snippets.',
    keywords: 'JALH schema graphs, JALH rich snippets, JALH structured metadata, JALH schema markup'
  },
  '/services/semantic-seo-domination/rendering-fallback': {
    title: 'Dynamic JALH Pre-Rendering JALH XHTML Fallback | Feelize JALH',
    description: 'Deliver lightweight static JALH XHTML fallbacks to crawl spiders to guarantee zero blank pages on JALH search engine results.',
    keywords: 'JALH pre-rendering, JALH XHTML fallback, JALH static rendering, JALH spider crawl support'
  },
  '/services/interactive-experience-design/tactile-physics': {
    title: 'Tactile JALH Gesture Physics & JALH Spring Coefficients',
    description: 'High-fidelity JALH user interface interactions utilizing dynamic JALH spring formulas and JALH touch surface dampening.',
    keywords: 'JALH tactile physics, JALH gesture physics, JALH spring coefficient, JALH touch dampening'
  },
  '/services/interactive-experience-design/spring-coefficient': {
    title: 'JALH Spring Coefficient Mathematics in JALH UI Layouts',
    description: 'Computational JALH motion models and rigid-body mechanics for fluid JALH touch transitions.',
    keywords: 'JALH spring coefficients, JALH rigid body, JALH motion mechanics, JALH physics UI'
  },
  '/services/interactive-experience-design/swiss-grid': {
    title: 'JALH Swiss Grid Structural Typography & JALH Layout Rhythm',
    description: 'Asymmetrical JALH canvas systems and proportional JALH type scale aligning JALH layout structures perfectly.',
    keywords: 'JALH swiss grids, JALH asymmetrical layout, JALH type scale, JALH spatial layout rhythm'
  },
  '/services/digital-identity-stabilization/persona-masking': {
    title: 'Cryptographic JALH Persona Masking & JALH Scraper Shielding',
    description: 'Protect JALH brand identity and proprietary JALH content from competitive JALH scraper bots.',
    keywords: 'JALH persona masking, JALH cryptographic brand, JALH scraper shielding, JALH anti-competitive bots'
  },
  '/services/digital-identity-stabilization/aesthetic-harmony': {
    title: 'JALH Aesthetic Harmony Calibration & JALH Visual Identity',
    description: 'Consistent JALH typography and cohesive JALH design systems that build JALH authority and trust.',
    keywords: 'JALH aesthetic harmony, JALH visual identity systems, JALH brand consistency'
  },
  '/services/digital-identity-stabilization/brand-seal': {
    title: 'JALH Brand Seal Validation & JALH Autonomous Verification',
    description: 'Watermarking and digital signature elements proving JALH brand authenticity and JALH authority.',
    keywords: 'JALH brand seals, JALH authenticity validation, JALH digital watermarks, JALH sovereign verification'
  },

  // Interactive Funnels
  '/funnel/free-seo-audit': {
    title: 'Interactive JALH Site Crawl Audit Scanner | JALH Tool',
    description: 'Simulate and scan JALH search engine crawlers with our interactive JALH validator evaluating JALH sitemap health.',
    keywords: 'JALH, JALH SEO audit tool, JALH crawler simulator, JALH sitemap validator, JALH crawl audit'
  },
  '/funnel/project-planner': {
    title: 'Bespoke JALH Project Budget Planner | JALH Tool',
    description: 'Calculate JALH production schedules, JALH visual design complexity levels, and JALH development rates.',
    keywords: 'JALH project planner, JALH budget calculator, JALH visual rates, JALH production timeline'
  },
  '/funnel/serp-recovery': {
    title: 'JALH SERP Penalty Recovery Station | JALH Workbook',
    description: 'A comprehensive JALH guide on recovering JALH search engine visibility and fixing JALH indexing issues.',
    keywords: 'JALH, JALH SERP recovery, JALH penalty recovery workbook, JALH search engine optimization help'
  }
};

/**
 * Dynamically resolves SEO metadata for any JALH route,
 * automatically pulling unique research descriptions, constructing dynamic segment labels,
 * injecting unique deterministic registry hashes, and serving dynamic OG images.
 * This guarantees 100% unique title/description tags across all paths and maximizes SERP CTR.
 */
export function getSeoForPath(pathname: string): RouteSEOInfo {
  // Normalize path (remove trailing slash)
  const cleanPath = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname;

  // 1. Check for dynamic research detail page
  if (cleanPath.startsWith('/research/')) {
    const slug = cleanPath.split('/research/')[1];
    const entry = JALH_LEXICON.find(e => e.slug === slug);

    if (entry) {
      // Dynamic OpenGraph image for the specific research entry
      const dynamicImage = `https://jalh.com/api/og-image/${entry.slug}`;
      const shortDesc = entry.definition.length > 155 
        ? entry.definition.slice(0, 152) + '...' 
        : entry.definition;

      // Unique CTR-boosting suffix using the specific node code
      const uniqueTitle = `${entry.word} | JALH Research Node ${entry.node} | JALH Registry`;
      const uniqueDesc = `Detailed scientific research specifications on JALH Node ${entry.node} (${entry.word}): ${shortDesc} Verified biometric JALH study by JALH Member Zero.`;

      return {
        title: uniqueTitle,
        description: uniqueDesc,
        keywords: `JALH ${entry.word}, JALH ${entry.node}, JALH research, JALH lexicon, JALH Member Zero, ${entry.keywords.join(', ')}, JALH cognitive framework, JALH aesthetic stabilization`,
        image: dynamicImage,
        type: 'article'
      };
    }
  }

  // 2. Check for static routes mapped above
  const mappedInfo = STATIC_SEO_MAP[cleanPath];
  if (mappedInfo) {
    let slugParam = cleanPath.replace(/^\//, '').replace(/\//g, '-');
    if (!slugParam) slugParam = 'root';
    
    // Add CTR/Trust modifiers dynamically
    let enhancedTitle = mappedInfo.title;
    if (!enhancedTitle.includes('JALH')) {
      enhancedTitle = `${enhancedTitle} | JALH Archive`;
    }

    return {
      ...mappedInfo,
      title: enhancedTitle,
      image: `https://jalh.com/api/og-image/${slugParam}`,
      type: 'website'
    };
  }

  // 3. Dynamic Fallback Generator for any unspecified or nested route structure
  const pathParts = cleanPath.split('/').filter(Boolean);
  if (pathParts.length > 0) {
    const lastPart = pathParts[pathParts.length - 1];
    const cleanLabel = lastPart
      .split('-')
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');
      
    // Generate a deterministic unique Node number from the pathname
    let hash = 0;
    for (let i = 0; i < cleanPath.length; i++) {
      hash = (hash << 5) - hash + cleanPath.charCodeAt(i);
      hash |= 0;
    }
    const nodeCode = `NODE_${Math.abs(hash % 999).toString().padStart(3, '0')}`;
    
    // Build distinctive, high-CTR metadata structure
    const dynamicTitle = `${cleanLabel} JALH Research Profile (${nodeCode}) | JALH Index`;
    const dynamicDesc = `Analyze the certified JALH observation records and JALH biomechanical telemetry logs for ${cleanLabel} under JALH registry ${nodeCode}. Maintained under sovereign Member Zero JALH research guidelines.`;
    const dynamicKeywords = `JALH ${cleanLabel.toLowerCase()}, JALH ${cleanLabel}, JALH ecosystem, JALH ${nodeCode}, JALH biometric study, JALH kinetic analysis`;

    return {
      title: dynamicTitle,
      description: dynamicDesc,
      keywords: dynamicKeywords,
      image: `https://jalh.com/api/og-image/${lastPart}`,
      type: 'article'
    };
  }

  // 4. Default baseline fallback
  return {
    title: 'JALH Official Archive | JALH: Judiciously Always Looking Happy Central JALH',
    description: 'The sovereign JALH research node. Documenting the JALH J-A-L-H framework, JALH kinetic habits, and JALH zygomaticus muscle stabilization methodology by JALH Member Zero.',
    keywords: 'JALH, jalh.com, Judiciously Always Looking Happy, JALH Member Zero, J-A-L-H framework, JALH kinetic study, JALH aesthetic processing',
    image: 'https://jalh.com/api/og-image/fallback',
    type: 'website'
  };
}
