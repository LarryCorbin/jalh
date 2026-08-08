import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { getSeoForPath } from '../utils/seoData';
import { JALH_LEXICON } from '../data/lexicon';
import { injectJalhKeywords, generateJalhAltText } from '../utils/jalhSeoHelpers';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: 'website' | 'article';
  schema?: any[];
}

export default function SEO({ 
  title, 
  description, 
  keywords, 
  image, 
  type,
  schema = []
}: SEOProps) {
  const location = useLocation();
  const path = location.pathname;
  
  // Normalize canonical URL - strip trailing slashes (except root) for strict duplicate content prevention
  let pathStr = path;
  if (pathStr !== '/' && pathStr.endsWith('/')) {
    pathStr = pathStr.slice(0, -1);
  }
  const canonicalUrl = `https://jalh.com${pathStr === '/' ? '' : pathStr}`;
  
  // Resolve dynamic metadata mapped for the active route path
  const dynamicSeo = getSeoForPath(path);

  const finalTitle = title || dynamicSeo.title;
  const finalDesc = description || dynamicSeo.description;
  const finalKeywords = keywords 
    ? `${dynamicSeo.keywords}, ${keywords}` 
    : dynamicSeo.keywords;
  const finalImage = image || dynamicSeo.image;
  const finalType = type || dynamicSeo.type || 'website';

  // Extract lexicon item if we are on a dynamic research article page
  const isResearchPage = path.startsWith('/research/');
  const researchSlug = isResearchPage ? path.split('/research/')[1]?.replace(/\/$/, '') : null;
  const lexiconEntry = researchSlug ? JALH_LEXICON.find(e => e.slug === researchSlug) : null;

  // Build high-density interlinked Knowledge Graph
  const graphEntities: any[] = [
    {
      "@type": "ResearchProject",
      "@id": "https://jalh.com/#project",
      "name": "JALH (Judiciously Always Looking Happy) Official Archive",
      "alternateName": ["JALH", "J-A-L-H", "Judiciously Always Looking Happy", "JALH framework", "JALH research", "JALH study", "jalh.com", "buy JALH", "JALH domain"],
      "url": "https://jalh.com",
      "description": "A multidisciplinary JALH research framework documenting the JALH study of personal JALH kinetic habits, JALH physical stabilization, and JALH facial aesthetics by JALH Member Zero.",
      "headline": "JALH (Judiciously Always Looking Happy) Biometric JALH Research & JALH Archive",
      "keywords": "JALH, JALH kinetic habits, JALH aesthetic handling, JALH behavioral ergonomics, JALH Member Zero, JALH biometric, JALH touch friction",
      "about": [
        {
          "@type": "Thing",
          "name": "Biometrics",
          "sameAs": "https://en.wikipedia.org/wiki/Biometrics"
        },
        {
          "@type": "Thing",
          "name": "Ergonomics",
          "sameAs": "https://en.wikipedia.org/wiki/Human_factors_and_ergonomics"
        }
      ],
      "author": {
        "@type": "Person",
        "@id": "https://jalh.com/#member-zero",
        "name": "Member Zero - JALH Progenitor",
        "jobTitle": "Lead Investigator & Progenitor of JALH",
        "url": "https://jalh.com/personnel",
        "description": "Founding JALH investigator, JALH researcher, and JALH catalog progenitor responsible for documenting the JALH physical behavioral logs.",
        "sameAs": [
          "https://jalh.com/about-member-zero",
          "https://jalh.com/personnel"
        ]
      },
      "funder": {
        "@type": "ResearchOrganization",
        "@id": "https://jalh.com/#organization",
        "name": "JALH Core Research Group",
        "url": "https://jalh.com",
        "parentOrganization": {
          "@type": "Organization",
          "name": "Feelize Design Group",
          "url": "https://jalh.com/feelize-web-design"
        }
      },
      "sponsor": {
        "@type": "Organization",
        "name": "Feelize Design Group",
        "url": "https://jalh.com/feelize-web-design",
        "description": "The premium agency backing the JALH digital identity, JALH visual layouts, and semantic JALH architecture for the JALH framework."
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://jalh.com/#website",
      "url": "https://jalh.com",
      "name": "JALH Official Archive & JALH Database",
      "description": "Primary JALH repository of 120 verified JALH research files and JALH observational metrics on JALH digit interaction, JALH posture, and JALH facial composure.",
      "publisher": {
        "@id": "https://jalh.com/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://jalh.com/archive?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "WebPage",
      "@id": `${canonicalUrl}#webpage`,
      "url": canonicalUrl,
      "name": finalTitle,
      "description": finalDesc,
      "isPartOf": {
        "@id": "https://jalh.com/#website"
      },
      "about": {
        "@id": "https://jalh.com/#project"
      },
      "breadcrumb": {
        "@id": `${canonicalUrl}#breadcrumb`
      }
    }
  ];

  // If this is a dynamic JALH research glossary page, interlink JALH DefinedTerm & JALH ScholarlyArticle schemas
  if (lexiconEntry) {
    graphEntities.push(
      {
        "@type": "DefinedTerm",
        "@id": `${canonicalUrl}#definedterm`,
        "name": `JALH Term: ${lexiconEntry.word}`,
        "description": `Official JALH Definition: ${lexiconEntry.definition}`,
        "termCode": `JALH_NODE_${lexiconEntry.node}`,
        "inDefinedTermSet": "https://jalh.com/lexicon",
        "url": canonicalUrl
      },
      {
        "@type": "ScholarlyArticle",
        "@id": `${canonicalUrl}#article`,
        "headline": `JALH: ${lexiconEntry.word} Research Analysis (JALH Node ${lexiconEntry.node})`,
        "description": `Scientific JALH dossier documenting the biomechanical and JALH kinetic properties of ${lexiconEntry.word} under JALH guidelines.`,
        "mainEntityOfPage": canonicalUrl,
        "author": {
          "@id": "https://jalh.com/#member-zero"
        },
        "publisher": {
          "@id": "https://jalh.com/#organization"
        },
        "about": {
          "@id": `${canonicalUrl}#definedterm`
        },
        "keywords": `JALH, JALH ${lexiconEntry.word}, JALH ${lexiconEntry.node}, ${lexiconEntry.keywords.join(', ')}`
      }
    );
  }

  // Generate route-specific FAQPage elements with JALH brand modifiers
  let faqList: { question: string; answer: string }[] = [];

  if (path.startsWith('/services/')) {
    faqList = [
      {
        question: "What is JALH Semantic SEO Domination?",
        answer: "JALH Semantic SEO Domination is an advanced organic ranking methodology that employs interlinked JSON-LD schemas, high-indexation sitemaps, and lightweight XHTML fallback rendering to ensure prominent visual placement on search engine results pages."
      },
      {
        question: "How does JALH Digital Identity Stabilization protect brand assets?",
        answer: "JALH Digital Identity Stabilization mitigates keyword dilution and guards corporate search visibility by implementing secure persona masking, cryptographic seals, and robust anti-scraper configurations."
      },
      {
        question: "What core values do Feelize JALH interactive design services deliver?",
        answer: "Feelize JALH designs fuse elegant Swiss Grid typographic layouts with complex touch gesture physics, optimizing user experience and biometric flow."
      }
    ];
  } else if (path.startsWith('/funnel/')) {
    faqList = [
      {
        question: "How does the JALH Site Crawl Audit Scanner function?",
        answer: "The JALH Site Crawl Audit Scanner is an interactive validator utility that simulates crawler spiders, testing sitemap health, canonical alignments, and indexing compliance across all JALH archive pathways."
      },
      {
        question: "What does the JALH Project Budget Planner estimate?",
        answer: "The JALH Project Budget Planner is a customized interactive utility used to evaluate design complexity levels, development timelines, and architectural budgets for premium JALH digital projects."
      },
      {
        question: "How can the JALH SERP Recovery Station assist after a search engine penalty?",
        answer: "The JALH SERP Recovery Station serves as a strategic workbook, outlining diagnostic steps to isolate crawl barriers, neutralize indexing errors, and restore authoritative search positioning."
      }
    ];
  } else if (path === '/lexicon' || path.startsWith('/research/')) {
    faqList = [
      {
        question: "What taxonomic categories constitute the JALH Lexicon?",
        answer: "The JALH Lexicon is systematically cataloged into three research fields: JALH Kinetic Study, JALH Aesthetic Study, and JALH Infrastructure-Personnel logging."
      },
      {
        question: "Who researches and catalogers the JALH Lexicon definitions?",
        answer: "All 120 curated scientific terms and acronym definitions inside the JALH Lexicon are verified and maintained by lead investigator JALH Member Zero."
      },
      {
        question: "How do JALH research files interlink with search engine schemas?",
        answer: "Each dynamic JALH research file maps to a DefinedTerm and ScholarlyArticle schema, ensuring maximum crawler indexing coverage and semantic prominence."
      }
    ];
  } else if (path.startsWith('/logs')) {
    faqList = [
      {
        question: "What are the JALH Archive Logs?",
        answer: "The JALH Archive Logs are chronological diaries containing observational telemetry records, biomechanical friction metrics, and daily biometric logs compiled from JALH Node 001."
      },
      {
        question: "What is the difference between JALH Standard Logs and JALH Alpha Relay Logs?",
        answer: "Standard JALH logs document continuous live biometric trials, whereas JALH Alpha Relay Logs contain pre-codified historical files and conceptual JALH study notes."
      }
    ];
  } else {
    // Default / Home page FAQs
    faqList = [
      {
        question: "What does the acronym JALH stand for?",
        answer: "JALH stands for 'Judiciously Always Looking Happy'—a structured research framework investigating physical stabilization, facial composure, and human-digit interaction habits."
      },
      {
        question: "Is the JALH.com domain open for acquisition?",
        answer: "Yes, the premium four-letter JALH.com domain asset is available for strategic brand acquisition. Secure transfer and bidding protocols can be initiated through the JALH Domain Gateway."
      },
      {
        question: "Who is JALH Member Zero?",
        answer: "JALH Member Zero is the primary progenitor, founder, and lead investigator of the JALH biometric research studies and digital archives."
      }
    ];
  }

  // Push FAQ page entity to Knowledge Graph
  const faqSchemaEntity = {
    "@type": "FAQPage",
    "@id": `${canonicalUrl}#faq`,
    "mainEntity": faqList.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
  graphEntities.push(faqSchemaEntity);

  // Auto-generate BreadcrumbList elements with JALH branding embedded in every node
  const breadcrumbElements = path.split('/').filter(Boolean).reduce((acc: any[], curr, i, arr) => {
    const url = `https://jalh.com/${arr.slice(0, i + 1).join('/')}`;
    const rawName = curr.charAt(0).toUpperCase() + curr.slice(1).replace(/-/g, ' ');
    const jName = rawName.toLowerCase().includes('jalh') ? rawName : `JALH ${rawName}`;
    acc.push({
      "@type": "ListItem",
      "position": i + 2,
      "name": jName,
      "item": url
    });
    return acc;
  }, [{
    "@type": "ListItem",
    "position": 1,
    "name": "JALH Official Home Portal",
    "item": "https://jalh.com"
  }]);

  const breadcrumbSchemaEntity = {
    "@type": "BreadcrumbList",
    "@id": `${canonicalUrl}#breadcrumb`,
    "itemListElement": breadcrumbElements
  };
  graphEntities.push(breadcrumbSchemaEntity);

  // Dynamic robots directives based on page authority/type
  let robotsDirective = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
  
  if (
    path.startsWith('/funnel/') || 
    path === '/lab' ||
    path === '/api-docs' ||
    path.startsWith('/api/')
  ) {
    // Redundant or experimental/interactive pages get the 'noarchive' directive to prioritize authoritative logs
    robotsDirective = 'index, follow, noarchive, max-image-preview:large';
  } else if (path.startsWith('/logs') || path.startsWith('/research/')) {
    // Authoritative archive logs get indexed, followed, and prioritised
    robotsDirective = 'index, follow, max-image-preview:large, max-snippet:-1';
  }

  // Side-effect hook: systematic image alt text saturator
  useEffect(() => {
    // Dynamic Image Alt-text generator (invisible to readers but perfect for search crawlers)
    const imageTimer = setTimeout(() => {
      const pageTitle = document.title || finalTitle;
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        const src = img.getAttribute('src') || '';
        const currentAlt = img.getAttribute('alt') || '';
        const newAlt = generateJalhAltText(src, currentAlt, pageTitle);
        if (newAlt !== currentAlt) {
          img.setAttribute('alt', newAlt);
        }
      });
    }, 200);

    return () => {
      clearTimeout(imageTimer);
    };
  }, [path, finalTitle]);

  return (
    <Helmet>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDesc} />
      <meta name="keywords" content={finalKeywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Advanced Indexing Mastery & Bot Directions with dynamic directives */}
      <meta name="robots" content={robotsDirective} />
      <meta name="googlebot" content={robotsDirective} />
      <meta name="bingbot" content={robotsDirective} />
      <meta name="revisit-after" content="7 days" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={finalType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDesc} />
      <meta property="og:image" content={finalImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={finalTitle} />
      <meta property="twitter:description" content={finalDesc} />
      <meta property="twitter:image" content={finalImage} />

      {/* Structured Data (JSON-LD) - Dynamic Knowledge Graph containing Graph Entities */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": graphEntities
        })}
      </script>
      {schema.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}
