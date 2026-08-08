import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { motion, useScroll, useSpring } from 'motion/react';

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-blue-600 origin-left z-[300]"
      style={{ scaleX }}
    />
  );
}

function CursorFollower() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 border border-blue-500/20 rounded-full pointer-events-none z-[9999] hidden lg:block"
      animate={{
        x: mousePos.x - 16,
        y: mousePos.y - 16,
      }}
      transition={{ type: 'spring', damping: 30, stiffness: 200, mass: 0.5 }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-blue-500/40 rounded-full" />
    </motion.div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
import { PageSkeleton, MetricsPageSkeleton, LexiconDetailSkeleton } from './components/PageSkeleton';

const HomePage = React.lazy(() => import('./pages/HomePage'));
const MethodologyPage = React.lazy(() => import('./pages/MethodologyPage'));
const KineticAnalysisPage = React.lazy(() => import('./pages/KineticAnalysisPage'));
const LogsPage = React.lazy(() => import('./pages/LogsPage'));
const ArchivePage = React.lazy(() => import('./pages/ArchivePage'));
const LexiconDetailPage = React.lazy(() => import('./pages/LexiconDetailPage'));
const LexiconPage = React.lazy(() => import('./pages/LexiconPage'));
const PartnershipPage = React.lazy(() => import('./pages/PartnershipPage'));
const LegalPage = React.lazy(() => import('./pages/LegalPage'));
const PersonnelPage = React.lazy(() => import('./pages/PersonnelPage'));
const HistoryPage = React.lazy(() => import('./pages/HistoryPage'));
const InfrastructurePage = React.lazy(() => import('./pages/InfrastructurePage'));
const BehavioralPage = React.lazy(() => import('./pages/BehavioralPage'));
const AlphaLogsPage = React.lazy(() => import('./pages/AlphaLogsPage'));
const MemberZeroPage = React.lazy(() => import('./pages/MemberZeroPage'));
const DomainGatewayPage = React.lazy(() => import('./pages/DomainGatewayPage'));
const MetricsPage = React.lazy(() => import('./pages/MetricsPage'));
const LabPage = React.lazy(() => import('./pages/LabPage'));
const VisionPage = React.lazy(() => import('./pages/VisionPage'));
const PressPage = React.lazy(() => import('./pages/PressPage'));
const ApiDocsPage = React.lazy(() => import('./pages/ApiDocsPage'));
const DigitInteractionPage = React.lazy(() => import('./pages/DigitInteractionPage'));
const AuthorityPage = React.lazy(() => import('./pages/AuthorityPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const FeelizePage = React.lazy(() => import('./pages/FeelizePage'));
const KineticHubPage = React.lazy(() => import('./pages/category/KineticHubPage'));
const AestheticHubPage = React.lazy(() => import('./pages/category/AestheticHubPage'));
const InfrastructureHubPage = React.lazy(() => import('./pages/category/InfrastructureHubPage'));
const InteractiveDesignPage = React.lazy(() => import('./pages/services/InteractiveDesignPage'));
const SemanticSeoPage = React.lazy(() => import('./pages/services/SemanticSeoPage'));
const DigitalIdentityPage = React.lazy(() => import('./pages/services/DigitalIdentityPage'));

// L3 Semantic SEO subpages
const DeepCrawlPage = React.lazy(() => import('./pages/services/DeepCrawlPage'));
const SchemaGraphPage = React.lazy(() => import('./pages/services/SchemaGraphPage'));
const RenderingFallbackPage = React.lazy(() => import('./pages/services/RenderingFallbackPage'));

// L3 Interactive Design subpages
const TactilePhysicsPage = React.lazy(() => import('./pages/services/TactilePhysicsPage'));
const SpringCoefficientPage = React.lazy(() => import('./pages/services/SpringCoefficientPage'));
const SwissGridPage = React.lazy(() => import('./pages/services/SwissGridPage'));

// L3 Digital Identity subpages
const PersonaMaskingPage = React.lazy(() => import('./pages/services/PersonaMaskingPage'));
const AestheticHarmonyPage = React.lazy(() => import('./pages/services/AestheticHarmonyPage'));
const BrandSealPage = React.lazy(() => import('./pages/services/BrandSealPage'));

const SeoAuditPage = React.lazy(() => import('./pages/funnel/SeoAuditPage'));
const ProjectPlannerPage = React.lazy(() => import('./pages/funnel/ProjectPlannerPage'));
const SerpRecoveryPage = React.lazy(() => import('./pages/funnel/SerpRecoveryPage'));
const SitemapPage = React.lazy(() => import('./pages/SitemapPage'));

import Navbar from './components/Navbar';
import Breadcrumbs from './components/Breadcrumbs';
import Footer from './components/Footer';
import NetworkNode from './components/NetworkNode';
import BackToTop from './components/BackToTop';
import GoogleAnalytics from './components/GoogleAnalytics';

import SEO from './components/SEO';
import ColorPatch from './components/ColorPatch';

function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  // Dynamic deterministic background color selection to break up monotony on other pages
  const getPathHash = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash);
  };

  const pathHash = getPathHash(location.pathname);
  
  const pool = [
    "bg-rose-500",
    "bg-pink-500",
    "bg-fuchsia-500",
    "bg-purple-500",
    "bg-violet-500",
    "bg-indigo-500",
    "bg-blue-500",
    "bg-sky-500",
    "bg-cyan-500",
    "bg-teal-500",
    "bg-emerald-500",
    "bg-green-500",
    "bg-lime-500",
    "bg-yellow-500",
    "bg-amber-500",
    "bg-orange-500",
    "bg-red-500"
  ];

  const color1 = pool[pathHash % pool.length];
  const color2 = pool[(pathHash + 5) % pool.length];
  const color3 = pool[(pathHash + 11) % pool.length];
  const color4 = pool[(pathHash + 3) % pool.length];

  const darkRoutes = [
    '/digit-interaction',
    '/infrastructure',
    '/metrics',
    '/logs/alpha',
    '/category/kinetic',
    '/services/rendering-fallback',
    '/services/deep-crawl',
    '/services/schema-graph',
    '/feelize-web-design'
  ];
  const isDark = darkRoutes.includes(location.pathname);

  return (
    <main className={`w-full ${isDark ? 'bg-[#050505] text-white' : 'bg-[#fafafa] text-neutral-800'} font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden relative`}>
      {location.pathname !== '/' && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
          <ColorPatch color={color1} size="w-[60rem] h-[60rem]" opacity={isDark ? 0.18 : 0.16} className="-top-32 -left-32" blur="blur-[130px]" />
          <ColorPatch color={color2} size="w-[50rem] h-[50rem]" opacity={isDark ? 0.15 : 0.13} className="top-1/3 -right-24" blur="blur-[110px]" />
          <ColorPatch color={color3} size="w-[55rem] h-[55rem]" opacity={isDark ? 0.16 : 0.14} className="top-2/3 -left-24" blur="blur-[120px]" />
          <ColorPatch color={color4} size="w-[45rem] h-[45rem]" opacity={isDark ? 0.12 : 0.11} className="bottom-12 right-12" blur="blur-[110px]" />
        </div>
      )}
      <SEO 
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "ResearchOrganization",
            "name": "JALH Research Group",
            "alternateName": ["JALH", "Judiciously Always Looking Happy"],
            "url": "https://jalh.com",
            "logo": "https://jalh.com/logo.png",
            "founder": {
              "@type": "Person",
              "name": "Member Zero"
            },
            "description": "Global research node dedicated to kinetic habits and aesthetic stabilization."
          },
          {
            "@context": "https://schema.org",
            "@type": "SiteNavigationElement",
            "hasPart": [
              { "@type": "WebPage", "name": "Methodology", "url": "https://jalh.com/methodology" },
              { "@type": "WebPage", "name": "Archive", "url": "https://jalh.com/archive" },
              { "@type": "WebPage", "name": "Lexicon", "url": "https://jalh.com/lexicon" },
              { "@type": "WebPage", "name": "Member Zero", "url": "https://jalh.com/personnel" },
              { "@type": "WebPage", "name": "Vision", "url": "https://jalh.com/vision" },
              { "@type": "WebPage", "name": "Metrics", "url": "https://jalh.com/metrics" }
            ]
          }
        ]}
      />
      
      <ScrollProgress />
      <CursorFollower />

      <Navbar />
      <Breadcrumbs />

      {children}

      {location.pathname !== '/' && (
        <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-16 pb-12 w-full">
          <NetworkNode />
        </div>
      )}

      <Footer />
      <BackToTop />
    </main>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <GoogleAnalytics />
        <ScrollToTop />
        <Layout>
          <React.Suspense fallback={<PageSkeleton />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/methodology" element={<MethodologyPage />} />
              <Route path="/kinetic-analysis" element={<KineticAnalysisPage />} />
              <Route path="/logs" element={<LogsPage />} />
              <Route path="/logs/alpha" element={<AlphaLogsPage />} />
              <Route path="/archive" element={<ArchivePage />} />
              <Route path="/lexicon" element={<LexiconPage />} />
              <Route path="/research/:slug" element={
                <React.Suspense fallback={<LexiconDetailSkeleton />}>
                  <LexiconDetailPage />
                </React.Suspense>
              } />
              <Route path="/partnership" element={<PartnershipPage />} />
              <Route path="/legal" element={<LegalPage />} />
              <Route path="/infrastructure" element={<InfrastructurePage />} />
              <Route path="/behavioral-index" element={<BehavioralPage />} />
              <Route path="/personnel" element={<PersonnelPage />} />
              <Route path="/about-member-zero" element={<MemberZeroPage />} />
              <Route path="/history" element={<HistoryPage />} />
              <Route path="/domain-gateway" element={<DomainGatewayPage />} />
              <Route path="/metrics" element={
                <React.Suspense fallback={<MetricsPageSkeleton />}>
                  <MetricsPage />
                </React.Suspense>
              } />
              <Route path="/lab" element={<LabPage />} />
              <Route path="/vision" element={<VisionPage />} />
              <Route path="/press" element={<PressPage />} />
              <Route path="/api-docs" element={<ApiDocsPage />} />
              <Route path="/digit-interaction" element={<DigitInteractionPage />} />
              <Route path="/authority" element={<AuthorityPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/feelize-web-design" element={<FeelizePage />} />
              
              {/* Category Hub Pages */}
              <Route path="/category/kinetic" element={<KineticHubPage />} />
              <Route path="/category/aesthetic" element={<AestheticHubPage />} />
              <Route path="/category/infrastructure-personnel" element={<InfrastructureHubPage />} />
              
              {/* Service Landing Pages */}
              <Route path="/services/interactive-experience-design" element={<InteractiveDesignPage />} />
              <Route path="/services/semantic-seo-domination" element={<SemanticSeoPage />} />
              <Route path="/services/digital-identity-stabilization" element={<DigitalIdentityPage />} />

              {/* Layer 3 Subpages under Semantic SEO */}
              <Route path="/services/semantic-seo-domination/deep-crawl" element={<DeepCrawlPage />} />
              <Route path="/services/semantic-seo-domination/schema-graph" element={<SchemaGraphPage />} />
              <Route path="/services/semantic-seo-domination/rendering-fallback" element={<RenderingFallbackPage />} />

              {/* Layer 3 Subpages under Interactive Experience Design */}
              <Route path="/services/interactive-experience-design/tactile-physics" element={<TactilePhysicsPage />} />
              <Route path="/services/interactive-experience-design/spring-coefficient" element={<SpringCoefficientPage />} />
              <Route path="/services/interactive-experience-design/swiss-grid" element={<SwissGridPage />} />

              {/* Layer 3 Subpages under Digital Identity Stabilization */}
              <Route path="/services/digital-identity-stabilization/persona-masking" element={<PersonaMaskingPage />} />
              <Route path="/services/digital-identity-stabilization/aesthetic-harmony" element={<AestheticHarmonyPage />} />
              <Route path="/services/digital-identity-stabilization/brand-seal" element={<BrandSealPage />} />
              
              {/* Funnel Pages */}
              <Route path="/funnel/free-seo-audit" element={<SeoAuditPage />} />
              <Route path="/funnel/project-planner" element={<ProjectPlannerPage />} />
              <Route path="/funnel/serp-recovery" element={<SerpRecoveryPage />} />
              
              {/* HTML Sitemap */}
              <Route path="/sitemap" element={<SitemapPage />} />
            </Routes>
          </React.Suspense>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}
