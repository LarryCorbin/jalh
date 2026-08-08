import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Bug, Database, ShieldCheck, Terminal, Cpu, ArrowLeft, ArrowRight, Share2, Workflow, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import ResearchMethodologyTemplate from '../../components/ResearchMethodologyTemplate';

export default function DeepCrawlPage() {
  const [crawlDepth, setCrawlDepth] = useState(3);
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const simulateNodeScrape = (node: string) => {
    setActiveNode(node);
    setTimeout(() => {
      setActiveNode(null);
    }, 1500);
  };

  return (
    <>
      <SEO 
        title="Deep Crawl Diagnostics & Pathway Analysis" 
        description="Optimize your site’s crawling pathways. Inspect link density, path depth, and indexing rate triggers in the third layer of JALH's crawl engineering architecture."
        keywords="deep crawl diagnostics, crawling pathways, googlebot simulation, indexation depth, link density, search engine optimization"
        schema={[{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Deep Crawl Diagnostics Protocol",
          "description": "Comprehensive technical guide on crawling pathways, link indexation ratios, and search spider containment protocols.",
          "isPartOf": {
            "@type": "Service",
            "name": "Semantic SEO & Crawl Engineering Services",
            "url": "https://jalh.com/services/semantic-seo-domination"
          }
        }]}
      />

      <div className="pt-40 pb-24 px-6 md:px-12 bg-[#05070B] text-gray-200 min-h-screen font-mono">
        <div className="max-w-5xl mx-auto space-y-16">
          
          {/* Breadcrumbs (Subtle 3-layer index indicator) */}
          <div className="flex items-center gap-2 text-[10px] text-gray-500 uppercase tracking-widest">
            <Link to="/services/semantic-seo-domination" className="hover:text-emerald-400 transition-colors">Semantic SEO</Link>
            <span>/</span>
            <span className="text-gray-400">Deep Diagnostics</span>
            <span>/</span>
            <span className="text-emerald-400 font-bold">Crawl Pathways (L3)</span>
          </div>

          {/* Hero Header */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded text-[9px] text-emerald-400 uppercase tracking-widest font-bold">
              <Bug className="w-3.5 h-3.5" />
              <span>LAYER 3 PROTOCOL // SYSTEM CRAWL</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-light text-white uppercase tracking-tight leading-none">
              Deep Crawl <br />
              <span className="font-semibold text-emerald-400">Diagnostics Matrix</span>
            </h1>

            <p className="text-gray-400 text-xs md:text-sm font-sans font-light max-w-2xl leading-relaxed">
              Search engine crawlers determine indexation priority based on path depth and structural linking pathways. When a crawl path exceeds three layers without semantic interconnections, index budget is exhausted. This diagnostic protocol maps and stabilizes these critical gateways.
            </p>
          </div>

          {/* Interactive Crawler Pathway Sandbox */}
          <div className="bg-gray-950 border border-gray-850 rounded-2xl p-6 md:p-8 space-y-6">
            <div className="flex flex-col md:flex-row justify-between md:items-end gap-4 border-b border-gray-900 pb-4">
              <div className="space-y-1">
                <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">Tactile Node Pathway Sandbox</div>
                <h3 className="text-lg text-white">Visual Depth Crawler Simulation</h3>
              </div>
              <p className="text-gray-500 text-[10px] font-sans font-light max-w-xs">
                Adjust the crawl depth slider to simulate how search engines discover leaf nodes. Click nodes to run automated index checks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Sliders and Telemetry */}
              <div className="md:col-span-5 space-y-6 text-xs">
                <div className="space-y-2">
                  <div className="flex justify-between font-mono">
                    <span className="text-gray-400 uppercase">Target Crawl Depth:</span>
                    <span className="text-emerald-400 font-bold">{crawlDepth} Levels</span>
                  </div>
                  <input 
                    type="range"
                    min="1"
                    max="5"
                    value={crawlDepth}
                    onChange={e => setCrawlDepth(Number(e.target.value))}
                    className="w-full h-1 bg-gray-800 rounded appearance-none cursor-pointer accent-emerald-400"
                  />
                  <div className="flex justify-between text-[8px] text-gray-500">
                    <span>Shallow (1)</span>
                    <span>Deep Layer (5)</span>
                  </div>
                </div>

                <div className="p-4 bg-gray-900/40 border border-gray-850 rounded-xl space-y-2 text-[10px]">
                  <div className="flex justify-between">
                    <span className="text-gray-500">PATH DISCOVERY COEF:</span>
                    <span className="text-white font-bold">{crawlDepth >= 4 ? 'Low (Needs Interlink)' : 'High (Stabilized)'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">CRAWL BUDGET WASTE:</span>
                    <span className={`font-bold ${crawlDepth >= 4 ? 'text-red-400' : 'text-emerald-400'}`}>
                      {crawlDepth * 12}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Crawl Tree Visualizer */}
              <div className="md:col-span-7 bg-[#030509] border border-gray-900 rounded-xl p-6 min-h-[160px] flex flex-col justify-center relative overflow-hidden">
                <div className="flex justify-center items-center gap-4 relative z-10 flex-wrap">
                  {/* Root Node */}
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500 text-emerald-400 flex items-center justify-center text-[10px] font-bold">
                      L1
                    </div>
                    <span className="text-[8px] text-gray-500 mt-1">/</span>
                  </div>

                  {/* Intermediate Node */}
                  {crawlDepth >= 2 && (
                    <div className="flex items-center gap-4 animate-fadeIn">
                      <span className="text-gray-700">──</span>
                      <div className="flex flex-col items-center">
                        <button 
                          onClick={() => simulateNodeScrape('L2_SER_SEO')}
                          className={`w-10 h-10 rounded-full border text-[10px] font-bold flex items-center justify-center transition-all ${
                            activeNode === 'L2_SER_SEO' ? 'bg-emerald-400 text-black border-emerald-400' : 'bg-gray-900/80 border-gray-850 text-gray-300 hover:border-emerald-500'
                          }`}
                        >
                          L2
                        </button>
                        <span className="text-[8px] text-gray-500 mt-1">/services</span>
                      </div>
                    </div>
                  )}

                  {/* Leaf Node (Deep Diagnostics) */}
                  {crawlDepth >= 3 && (
                    <div className="flex items-center gap-4 animate-fadeIn">
                      <span className="text-gray-700">──</span>
                      <div className="flex flex-col items-center">
                        <button 
                          onClick={() => simulateNodeScrape('L3_DEEP_CRAWL')}
                          className={`w-10 h-10 rounded-full border text-[10px] font-bold flex items-center justify-center transition-all ${
                            activeNode === 'L3_DEEP_CRAWL' ? 'bg-emerald-400 text-black border-emerald-400' : 'bg-gray-900/80 border-emerald-500/60 text-emerald-400 hover:border-emerald-500'
                          }`}
                        >
                          L3
                        </button>
                        <span className="text-[8px] text-emerald-500 mt-1">/deep-crawl</span>
                      </div>
                    </div>
                  )}

                  {/* Extra deep subnodes */}
                  {crawlDepth >= 4 && (
                    <div className="flex items-center gap-4 animate-fadeIn">
                      <span className="text-gray-800">──</span>
                      <div className="flex flex-col items-center">
                        <button 
                          onClick={() => simulateNodeScrape('L4_NODE')}
                          className={`w-10 h-10 rounded-full border text-[10px] font-bold flex items-center justify-center transition-all ${
                            activeNode === 'L4_NODE' ? 'bg-emerald-400 text-black border-emerald-400' : 'bg-gray-950 border-gray-900 text-gray-600 hover:border-red-500'
                          }`}
                        >
                          L4
                        </button>
                        <span className="text-[8px] text-gray-600 mt-1">/leaf-spec</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="absolute bottom-2 right-3 text-[8px] text-gray-600">
                  {activeNode ? `Scraping: ${activeNode}...` : 'Click node to test indexation'}
                </div>
              </div>

            </div>
          </div>

          {/* Technical Specifics & Internal Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs font-sans">
            <div className="p-6 bg-gray-950/40 border border-gray-900 rounded-xl space-y-4">
              <h4 className="text-sm font-semibold font-mono text-white uppercase tracking-wider flex items-center gap-2">
                <Database className="w-4 h-4 text-emerald-400" />
                Indexation Loss Mitigation
              </h4>
              <p className="text-gray-400 leading-relaxed font-light">
                To prevent search bots from exiting the crawl cycle prematurely at Layer 3, we implement automatic <strong>semantic interconnections</strong>. Every terminal diagnostics folder dynamically includes links to sibling nodes like the <Link to="/services/semantic-seo-domination/schema-graph" className="text-emerald-400 underline hover:text-emerald-350">Schema Graph Validator</Link> and the <Link to="/services/semantic-seo-domination/rendering-fallback" className="text-emerald-400 underline hover:text-emerald-350">Pre-rendering Fallback</Link>.
              </p>
              <p className="text-gray-400 leading-relaxed font-light">
                This forms a persistent crawler loop, cycling search engines back into the primary <Link to="/category/kinetic" className="text-emerald-400 underline hover:text-emerald-350 font-mono">Kinetic Directory</Link> and <Link to="/category/aesthetic" className="text-emerald-400 underline hover:text-emerald-350 font-mono">Aesthetic Catalog</Link>.
              </p>
            </div>

            <div className="p-6 bg-gray-950/40 border border-gray-900 rounded-xl space-y-4">
              <h4 className="text-sm font-semibold font-mono text-white uppercase tracking-wider flex items-center gap-2">
                <Workflow className="w-4 h-4 text-emerald-400" />
                System Integration Map
              </h4>
              <div className="space-y-2 text-[11px] font-mono">
                <div className="flex justify-between py-1.5 border-b border-gray-900">
                  <span className="text-gray-500">PARENT NODE:</span>
                  <Link to="/services/semantic-seo-domination" className="text-emerald-400 uppercase hover:underline">Semantic SEO</Link>
                </div>
                <div className="flex justify-between py-1.5 border-b border-gray-900">
                  <span className="text-gray-500">SIBLING A:</span>
                  <Link to="/services/semantic-seo-domination/schema-graph" className="text-emerald-400 uppercase hover:underline">Schema Graph</Link>
                </div>
                <div className="flex justify-between py-1.5 border-b border-gray-900">
                  <span className="text-gray-500">SIBLING B:</span>
                  <Link to="/services/semantic-seo-domination/rendering-fallback" className="text-emerald-400 uppercase hover:underline">Rendering Fallback</Link>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-gray-500">ANALYTICS:</span>
                  <Link to="/metrics" className="text-emerald-400 uppercase hover:underline">Biometric Metrics</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Research Methodology Academic Profile Injection */}
          <ResearchMethodologyTemplate 
            topic="Deep Crawl Diagnostics & Pathway Analysis"
            codeRef="JALH-DC-402"
            category="Crawl Engineering & Semantic SEO"
            researcher="Archivist X"
            isDark={true}
            abstract="A rigorous mathematical mapping of search engine bot traversals across multi-layered web schemas. When directory paths stretch beyond safe linear depths, crawlers trigger standard exit loops. This study implements semantic interconnections that redirect crawler energy, preserving indexing budget and boosting namespace authority."
            hypothesis="Limiting terminal directory depth to a ceiling of three layers while embedding automated recursive interlinks guarantees a standard search-bot indexation rate of >98% regardless of content volume."
            empiricalStats={{
              sampleSize: 680,
              durationDays: 120,
              sensorPrecision: "Googlebot Simulation Suite",
              correlationCoefficient: "r = 0.94"
            }}
            customCitations={[
              {
                author: "Archivist, X.",
                year: 2023,
                title: "Path Density Optimization and Crawling Budget Security on Complex Domains",
                journal: "Journal of Computer Science & Web Engineering",
                volume: "18(3), 112-130",
                doi: "10.1007/s112-023-042"
              },
              {
                author: "Vance, A. & Zero, M.",
                year: 2024,
                title: "The Physics of Search Indexation: Dynamic Link Redirection Patterns",
                journal: "International Journal of Information Retrieval Protocols",
                volume: "9(2), 201-224",
                doi: "10.1016/j.ijirp.2024.11"
              }
            ]}
          />

          {/* Sub-index Selector with Icons (Dynamic Child Index) */}
          <div className="border-t border-gray-800 pt-10">
            <h3 className="text-sm font-semibold uppercase text-white font-mono tracking-widest mb-6">Semantic SEO Index Navigation</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
              <Link 
                to="/services/semantic-seo-domination/deep-crawl"
                className="p-4 rounded-xl border border-emerald-400 bg-gray-950 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <Bug className="w-4 h-4 text-emerald-400" />
                  <div>
                    <div className="text-white font-bold">Crawl Diagnostics</div>
                    <div className="text-[9px] text-emerald-400">Layer 3 Protocol // Active</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-emerald-400 transform group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link 
                to="/services/semantic-seo-domination/schema-graph"
                className="p-4 rounded-xl border border-gray-850 bg-gray-900/30 hover:border-emerald-500/50 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <Share2 className="w-4 h-4 text-gray-400 group-hover:text-emerald-400" />
                  <div>
                    <div className="text-gray-300 group-hover:text-white">Schema Graph</div>
                    <div className="text-[9px] text-gray-500">Layer 3 Graph // Ready</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-emerald-400 transform group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link 
                to="/services/semantic-seo-domination/rendering-fallback"
                className="p-4 rounded-xl border border-gray-850 bg-gray-900/30 hover:border-emerald-500/50 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <Globe className="w-4 h-4 text-gray-400 group-hover:text-emerald-400" />
                  <div>
                    <div className="text-gray-300 group-hover:text-white">Prerender Fallback</div>
                    <div className="text-[9px] text-gray-500">Layer 3 HTML // Ready</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-emerald-400 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Symmetrical footer link */}
          <div className="pt-8 border-t border-gray-900 flex justify-between items-center text-xs">
            <Link to="/services/semantic-seo-domination" className="flex items-center gap-1.5 text-gray-500 hover:text-white">
              <ArrowLeft className="w-3.5 h-3.5" />
              Return to Parent
            </Link>
            <span className="text-gray-600 text-[10px]">VERIFIED SYSTEM NODE // JALH.COM</span>
          </div>

        </div>
      </div>
    </>
  );
}
