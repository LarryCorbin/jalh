import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, BarChart3, Target, Share2, Globe, FileJson, Zap, ArrowRight, ShieldCheck, HelpCircle, Bug, Terminal, CheckCircle } from 'lucide-react';
import SEO from '../../components/SEO';
import FAQAccordion from '../../components/FAQAccordion';
import { Link } from 'react-router-dom';
import semanticSeoNetwork from '../../assets/images/semantic_seo_network_1783050578846.jpg';
import { LazyImage } from '../../components/LazyImage';

export default function SemanticSeoPage() {
  // Crawler simulation state
  const [crawlStep, setCrawlStep] = useState(0);
  const [crawlStatus, setCrawlStatus] = useState('IDLE');
  const [crawlLogs, setCrawlLogs] = useState<string[]>([]);

  const startSimulatedCrawl = () => {
    setCrawlStep(1);
    setCrawlStatus('CRAWLING');
    setCrawlLogs(['[BOT] Initiating Googlebot-Image agent request...', '[BOT] Connecting to canonical target: https://jalh.com']);
    
    setTimeout(() => {
      setCrawlStep(2);
      setCrawlLogs(prev => [...prev, '[SYSTEM] Detect single-page application wrapper.', '[SYSTEM] Intercepting with prerender.js server-side fallback HTML. SUCCESS.']);
    }, 1500);

    setTimeout(() => {
      setCrawlStep(3);
      setCrawlLogs(prev => [...prev, '[BOT] Parsing 24 DefinedTerms in schema.org JSON-LD layout.', '[BOT] Deep schema linking validated. Authority coefficient: 0.98.']);
    }, 3000);

    setTimeout(() => {
      setCrawlStep(4);
      setCrawlStatus('COMPLETED');
      setCrawlLogs(prev => [...prev, '[SUCCESS] Indexation approved. Sitemap registered. Topical saturation: 100%']);
    }, 4500);
  };

  const resetCrawl = () => {
    setCrawlStep(0);
    setCrawlStatus('IDLE');
    setCrawlLogs([]);
  };

  return (
    <>
      <SEO 
        title="Semantic SEO Domination & Crawl Engineering Services" 
        description="Solve low Google impressions and zero clicks. Learn how our pre-rendering technology, structured JSON-LD graphs, and deep cross-linking drive absolute organic authority."
        keywords="semantic seo, google search console, crawl engineering, static pre-rendering, increase impressions, google search ranking, json-ld schema, sitemap"
        schema={[{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Semantic SEO & Crawl Engineering Services",
          "provider": {
            "@type": "Organization",
            "name": "JALH Research Node & Feelize Corp",
            "url": "https://jalh.com"
          },
          "serviceType": "Search Engine Optimization & Indexation Engineering",
          "description": "Enterprise-tier crawl optimization, structured metadata clustering, automatic sitemap construction, and server-side pre-rendered HTML generation.",
          "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "price": "Custom Quoted"
          }
        }]}
      />

      <div className="pt-40 pb-24 px-6 md:px-12 bg-[#090D16] text-gray-100 font-sans min-h-screen">
        <div className="max-w-6xl mx-auto space-y-28">
          
          {/* Hero Header Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-12 border-b border-gray-800">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400 font-mono uppercase tracking-widest">
                <Zap className="w-3.5 h-3.5" />
                <span>Crawl Domination // Organic Index Optimization</span>
              </div>

              <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight text-white leading-none">
                Semantic SEO & <br />
                <span className="text-emerald-400 font-mono font-normal">Crawl Engineering</span>
              </h1>

              <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed max-w-2xl">
                Are you getting 3 impressions a day and zero clicks? That is a symptom of crawl isolation. Search bots cannot discover your subpages, or they see empty JS bundles. We build server-side pre-rendering systems and dense semantic graphs to kickstart Google’s indexing engines.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link 
                  to="/funnel/serp-recovery"
                  className="px-8 py-4 bg-blue-600 text-white hover:bg-blue-700 text-xs font-mono font-bold uppercase tracking-wider rounded-xl transition-all border border-blue-500 shadow-lg shadow-blue-500/20"
                >
                  SERP Recovery Console
                </Link>
                <Link 
                  to="/funnel/free-seo-audit"
                  className="px-8 py-4 bg-emerald-400 text-black hover:bg-emerald-500 text-xs font-mono font-bold uppercase tracking-wider rounded-xl transition-all"
                >
                  Get Free SEO Audit
                </Link>
                <Link 
                  to="/category/kinetic"
                  className="px-8 py-4 bg-gray-900 text-gray-300 hover:bg-gray-800 text-xs font-mono font-bold uppercase tracking-wider rounded-xl transition-all border border-gray-800"
                >
                  Browse Lexicon Nodes
                </Link>
              </div>
            </div>

            {/* Right Overlapping Graphic Column */}
            <div className="lg:col-span-5 relative h-[450px] w-full flex items-center justify-center">
              
              {/* Back decorative glowing circuit grid */}
              <div className="absolute inset-0 bg-emerald-500/5 rounded-3xl blur-3xl scale-95" />
              
              <div className="absolute top-4 right-4 w-11/12 h-[340px] border border-gray-800 rounded-3xl bg-gray-950/60 p-6 flex flex-col justify-between font-mono text-[9px] text-gray-500 select-none">
                <div className="flex justify-between items-center border-b border-gray-900 pb-2">
                  <span>SEMANTIC_MAPPER.JSON</span>
                  <span className="text-emerald-400 animate-pulse">● ONLINE</span>
                </div>
                <div className="space-y-1 text-gray-400">
                  <div>&#123;</div>
                  <div className="pl-3">"@context": "https://schema.org",</div>
                  <div className="pl-3">"@type": "DefinedTermSet",</div>
                  <div className="pl-3">"name": "Kinetic Extraction Ledger",</div>
                  <div className="pl-3">"numberOfTerms": 724</div>
                  <div>&#125;</div>
                </div>
                <div className="text-right text-gray-600">BOTS ALLOWED: GOOGLE, BING, DUCK</div>
              </div>

              {/* Middle Main Overlapping Image */}
              <div className="relative w-10/12 z-10 transition-transform duration-500 hover:scale-[1.03]">
                <LazyImage 
                  src={semanticSeoNetwork}
                  alt="Semantic Graph Network"
                  className="rounded-2xl shadow-2xl border border-gray-800/80 w-full aspect-[4/3] rotate-[3deg] transition-all hover:rotate-0 duration-500"
                />
              </div>

              {/* Front Floating Crawler Badge */}
              <div className="absolute bottom-8 left-0 z-20 bg-gray-950/95 text-white rounded-2xl p-4 shadow-2xl border border-gray-800 max-w-[210px] font-mono text-[10px] space-y-2 rotate-[-4deg]">
                <div className="flex justify-between items-center text-emerald-400 font-bold">
                  <span>CRAWLER DISCOVERY</span>
                  <Bug className="w-3.5 h-3.5" />
                </div>
                <div className="text-gray-400 font-sans text-[10px] leading-tight">
                  Pre-rendered static files crawled and indexed in less than 24 hours.
                </div>
              </div>

            </div>

          </div>

          {/* Action Plan: Diagnostic Roadmap */}
          <div className="space-y-12">
            <div className="text-center md:text-left space-y-3">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white font-mono uppercase">How We Wake Up the Google Spider</h2>
              <p className="text-gray-400 text-sm md:text-base max-w-2xl font-light">
                Google doesn't index what it can't quickly trace. Here is the exact technical architecture we implemented for the JALH.com environment to scale to 700+ high-ranking nodes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-gray-950/80 border border-gray-800 rounded-3xl space-y-4 hover:border-emerald-500/30 transition-all duration-300">
                <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 border border-blue-500/20">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white font-mono uppercase tracking-tight">1. Server-Side Fallback Rendering</h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-light">
                  Standard single-page applications are invisible to lightweight crawler bots. We write customized <code>prerender.js</code> processes that bake static, high-fidelity HTML templates for all 700+ lexicon subpages, so search robots read pure text instantaneously.
                </p>
              </div>

              <div className="p-8 bg-gray-950/80 border border-gray-800 rounded-3xl space-y-4 hover:border-emerald-500/30 transition-all duration-300">
                <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                  <FileJson className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white font-mono uppercase tracking-tight">2. Rich JSON-LD Entity Graphing</h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-light">
                  We don't just dump text. Each subpage contains customized structured metadata using <code>Schema.org</code> schemas. This explicitly informs Google of definitions, ScholarlyArticles, authorship logs, and breadcrumb trees.
                </p>
              </div>

              <div className="p-8 bg-gray-950/80 border border-gray-800 rounded-3xl space-y-4 hover:border-emerald-500/30 transition-all duration-300">
                <div className="w-10 h-10 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 border border-indigo-500/20">
                  <Share2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white font-mono uppercase tracking-tight">3. Semantic Cross-Referencing</h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-light">
                  Search bots discover new pages by traversing links. Each JALH research page dynamically injects exactly six contextually related nodes, building a dense, interconnected internal link web that keeps crawlers cycling through your system.
                </p>
              </div>

              <div className="p-8 bg-gray-950/80 border border-gray-800 rounded-3xl space-y-4 hover:border-emerald-500/30 transition-all duration-300">
                <div className="w-10 h-10 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 border border-purple-500/20">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white font-mono uppercase tracking-tight">4. Multi-Layer XML Sitemap Mapping</h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-light">
                  Our build script triggers sitemap updates containing all 700+ canonical absolute endpoints, and pushes automated ping notifications directly to index nodes, making discovery effortless.
                </p>
              </div>
            </div>
          </div>

          {/* Layer 3 Sub-Index Navigation */}
          <div className="space-y-8 border-t border-gray-800 pt-16">
            <div className="text-center md:text-left space-y-3">
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/20 rounded text-[9px] font-mono text-emerald-400 uppercase font-bold">
                <Bug className="w-3 h-3" />
                <span>Deep Domain Indexes // L3 Gateway</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white font-mono uppercase">Browse Deep Diagnostics Gateway</h2>
              <p className="text-gray-400 text-sm md:text-base max-w-2xl font-light">
                Explore our specialized technical sub-modules targeting individual crawl optimization criteria in absolute depth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs font-normal">
              <Link 
                to="/services/semantic-seo-domination/deep-crawl"
                className="p-6 rounded-2xl border border-gray-800 bg-gray-950/40 hover:border-emerald-500/40 flex flex-col justify-between h-48 group transition-all"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400">
                    <Bug className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white uppercase">Crawl Pathways</h3>
                    <p className="text-[10px] text-gray-500 font-sans font-light mt-1.5 leading-relaxed">
                      Optimize depth ratios and crawl budget allocation to secure instant indexing across child routes.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-emerald-400 text-[10px] uppercase font-bold pt-2 border-t border-gray-900">
                  <span>Enter Protocol</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              <Link 
                to="/services/semantic-seo-domination/schema-graph"
                className="p-6 rounded-2xl border border-gray-800 bg-gray-950/40 hover:border-emerald-500/40 flex flex-col justify-between h-48 group transition-all"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center text-blue-400">
                    <FileJson className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white uppercase">Schema Graph</h3>
                    <p className="text-[10px] text-gray-500 font-sans font-light mt-1.5 leading-relaxed">
                      Construct valid JSON-LD context blocks linking your assets directly to standard definitions and publications.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-emerald-400 text-[10px] uppercase font-bold pt-2 border-t border-gray-900">
                  <span>Open Playground</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              <Link 
                to="/services/semantic-seo-domination/rendering-fallback"
                className="p-6 rounded-2xl border border-gray-800 bg-gray-950/40 hover:border-emerald-500/40 flex flex-col justify-between h-48 group transition-all"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 bg-purple-500/10 border border-purple-500/20 rounded-xl flex items-center justify-center text-purple-400">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white uppercase">Prerender Fallback</h3>
                    <p className="text-[10px] text-gray-500 font-sans font-light mt-1.5 leading-relaxed">
                      Deploy instant-delivery static document proxies that solve JS compilation crawler blocks.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-emerald-400 text-[10px] uppercase font-bold pt-2 border-t border-gray-900">
                  <span>Inspect Engine</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>

          {/* Interactive Simulated Crawler Portal */}
          <div className="bg-gray-950 border border-gray-800 rounded-3xl p-8 md:p-12 space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-900 pb-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/20 rounded text-[9px] font-mono text-emerald-400 uppercase font-bold">
                  <Terminal className="w-3 h-3" />
                  <span>Interactive Search Console sandbox</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white font-mono uppercase">Googlebot Indexing Flow Simulator</h3>
              </div>
              <p className="text-gray-400 text-xs font-sans font-light max-w-sm">
                Initiate a simulated search crawler scan to visually observe how our pre-rendered static HTML structures bypass Javascript rendering delays.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Simulator Controls & Diagnostic Logs */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <span className="text-[10px] text-gray-500 uppercase font-mono block font-bold">CRAWLER PARAMETERS</span>
                  <div className="space-y-2.5 text-xs font-mono">
                    <div className="flex justify-between">
                      <span className="text-gray-400">User Agent:</span>
                      <span className="text-white">Googlebot/2.1</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Target Type:</span>
                      <span className="text-emerald-400">Pre-rendered HTML</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Canonical Path:</span>
                      <span className="text-white">jalh.com/category/kinetic</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  {crawlStatus === 'IDLE' && (
                    <button
                      onClick={startSimulatedCrawl}
                      className="w-full py-4 bg-emerald-400 hover:bg-emerald-500 text-black rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all"
                    >
                      Initialize Crawler Sweep
                    </button>
                  )}
                  {crawlStatus === 'CRAWLING' && (
                    <div className="w-full py-4 bg-gray-900 border border-gray-800 rounded-xl text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 text-center animate-pulse">
                      Crawling Core Nodes...
                    </div>
                  )}
                  {crawlStatus === 'COMPLETED' && (
                    <button
                      onClick={resetCrawl}
                      className="w-full py-4 bg-gray-900 hover:bg-gray-800 text-white border border-gray-800 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all"
                    >
                      Reset Scanner Logs
                    </button>
                  )}
                </div>
              </div>

              {/* Dynamic Console Display */}
              <div className="lg:col-span-7 bg-[#05080E] border border-gray-900 rounded-2xl p-6 font-mono text-[11px] leading-relaxed flex flex-col justify-between min-h-[250px]">
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-[10px] border-b border-gray-900 pb-2 text-gray-500">
                    <span>LIVE BOT DIAGNOSTIC TERMINAL</span>
                    <span>COEF: {crawlStep === 4 ? '0.99' : '0.00'}</span>
                  </div>
                  
                  {crawlLogs.length === 0 ? (
                    <div className="text-gray-600 italic py-8 text-center">
                      Terminal empty. Click 'Initialize Crawler Sweep' to begin tracing pathways.
                    </div>
                  ) : (
                    <div className="space-y-1.5 font-mono text-emerald-400">
                      {crawlLogs.map((log, idx) => (
                        <div key={idx} className="animate-fadeIn">{log}</div>
                      ))}
                    </div>
                  )}
                </div>

                {crawlStep > 0 && (
                  <div className="pt-4 border-t border-gray-900 mt-4 flex items-center justify-between text-[10px] text-gray-500">
                    <span>Crawl Phase: {crawlStep} / 4</span>
                    <span className="text-emerald-400">{crawlStatus}</span>
                  </div>
                )}
              </div>

            </div>
          </div>

          {/* Diagnostic Case Study */}
          <div className="p-8 md:p-12 bg-gray-900/60 border border-gray-800 rounded-3xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white font-mono uppercase">Understanding "Discovered - Currently Not Indexed"</h3>
              <p className="text-gray-450 text-xs md:text-sm leading-relaxed font-light">
                If your Google Search Console displays dozens of pages as "Discovered - currently not indexed", it means Google knows the URLs exist but has deferred crawling them. Why? <strong>Because of low topical authority or slow page speeds.</strong>
              </p>
              <p className="text-gray-450 text-xs md:text-sm leading-relaxed font-light">
                By generating instant-loading pre-rendered pages, adding structured graph entities, and eliminating duplicate page canonicals, we tell the Googlebot that every node represents unique, high-quality reference text. This forces automated index inclusion.
              </p>
            </div>

            <div className="lg:col-span-5 bg-gray-950/90 border border-gray-850 rounded-2xl p-6 space-y-4 font-mono text-xs">
              <div className="text-emerald-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span className="uppercase font-bold tracking-wider">INDEXATION CHECKLIST</span>
              </div>
              <ul className="space-y-3 text-gray-400 text-[11px]">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-500">[✓]</span>
                  <span>Validate and deploy robots.txt allow-rules</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-500">[✓]</span>
                  <span>Assemble XML Sitemap with absolute path canonicals</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-500">[✓]</span>
                  <span>Bake pre-rendered static content fallback templates</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-500">[✓]</span>
                  <span>Establish 6 dynamic related nodes on each asset page</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-500">[✓]</span>
                  <span>Inject JSON-LD schemas representing DefinedTerms</span>
                </li>
              </ul>
            </div>
          </div>

          {/* FAQ section */}
          <FAQAccordion
            title="Frequently Asked SEO Questions"
            isDark={true}
            items={[
              {
                q: "Why is my site getting zero clicks?",
                a: "If you have clicks but high impressions, you rank but your titles are boring or unhelpful. If you have zero impressions and zero clicks, your site has not been fully crawled or has been categorized as lower-quality."
              },
              {
                q: "Does Google index React client-side pages?",
                a: "Yes, but with delay. Google runs a secondary rendering wave days or weeks after discovering a page, which drains your crawl budget. Pre-rendered HTML or static rendering ensures instant indexing on the first crawl wave."
              }
            ]}
          />

          {/* Call to Action funnel linking */}
          <div className="text-center space-y-6 pt-12 border-t border-gray-850">
            <h3 className="text-2xl text-white font-semibold font-mono uppercase tracking-tight">Get a free, detailed, JALH-certified crawl diagnostics analysis</h3>
            <p className="text-gray-400 text-sm max-w-xl mx-auto font-light leading-relaxed">
              Submit your domain name inside our interactive audit tool. We will perform real-time checking of sitemaps, schemas, and pre-rendering fallbacks, then email you a personalized diagnostic blueprint.
            </p>
            <div className="pt-2">
              <Link 
                to="/funnel/free-seo-audit"
                className="inline-flex items-center gap-2 px-10 py-5 bg-emerald-400 text-black hover:bg-emerald-500 text-xs font-mono font-bold uppercase tracking-wider rounded-xl transition-all"
              >
                Launch Crawl Audit Portal
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
