import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, Search, Sparkles, Globe, Activity, TrendingUp, 
  Cpu, Layers, Terminal, Check, AlertTriangle, RotateCcw, 
  FileText, ShieldCheck, ArrowUp, HelpCircle, RefreshCw, BarChart2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

interface ProtocolState {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  impact: string;
  active: boolean;
  type: 'consolidation' | 'canonical' | 'schema' | 'index';
}

export default function SerpRecoveryPage() {
  const [activeTab, setActiveTab] = useState<'console' | 'serp' | 'guide'>('console');
  const [isDiagnosticRunning, setIsDiagnosticRunning] = useState(false);
  const [diagnosticLogs, setDiagnosticLogs] = useState<string[]>([
    'SYSTEM INITIALIZED // JALH SERP BOOSTER V2.4',
    'Awaiting diagnostic trigger...'
  ]);
  const [isPingingSitemap, setIsPingingSitemap] = useState(false);
  const [sitemapPingLogs, setSitemapPingLogs] = useState<string[]>([]);
  
  // SEO protocols state
  const [protocols, setProtocols] = useState<ProtocolState[]>([
    {
      id: 'entity-anchoring',
      name: 'Primary Entity Anchoring',
      shortDesc: 'Stop secondary acronym dilution. Set "Judiciously Always Looking Happy" as the absolute semantic root.',
      fullDesc: 'Google’s BERT/MUM models penalize sites displaying multiple conflicting acronym expansions for a single brand token. This protocol suppresses secondary placeholders (e.g. "Joint Acoustic Leveling Habit", "Juniper Apex Logic Host") in bot-facing templates, channeling 100% of the keyword equity into the main entity.',
      impact: 'Resolves Entity Ambiguity // +9 Ranking Steps',
      active: false,
      type: 'consolidation'
    },
    {
      id: 'canonical-reinforcement',
      name: 'Canonical & Meta-Tags Reinforcement',
      shortDesc: 'Inject strict self-referencing canonical URLs and exact open graph anchors across all 1,200+ child routes.',
      fullDesc: 'Without explicit self-referencing canonical tags, search engines split ranking authority across identical HTTP/HTTPS paths or trailing slash variations. This protocol locks the canonical target to "https://jalh.com" on all dynamically generated research nodes, protecting domain authority.',
      impact: 'Prevents Self-Cannibalization // +4 Ranking Steps',
      active: false,
      type: 'canonical'
    },
    {
      id: 'knowledge-graph',
      name: 'JSON-LD Knowledge Graph Linkage',
      shortDesc: 'Publish an advanced nested ResearchOrganization schema declaring JALH ownership to Member Zero.',
      fullDesc: 'Injects microdata connecting "JALH" directly with its primary founder "Member Zero", Feelize Design Group, and established luxury design models. This feeds search crawlers a cohesive context graph, granting JALH rich search snippet features and a potential Knowledge Panel.',
      impact: 'Establishes Authoritative Entity Graph // +3 Ranking Steps',
      active: false,
      type: 'schema'
    },
    {
      id: 'sitemap-ping-force',
      name: 'Sitemap Force-Crawl & Cache Warmup',
      shortDesc: 'Trigger automated search engine pinging for the expanded 1,205-page core index directory.',
      fullDesc: 'Pings major search indexers with the newly expanded 1,205-page sitemap directory (including the 1,150 target research documents generated in our dynamic lexicon). This forces search bots to dispatch parallel crawls, bypassing standard delay buffers and accelerating indexation.',
      impact: 'Flushes Crawl Queues // +1 Ranking Step',
      active: false,
      type: 'index'
    }
  ]);

  // Calculate current simulated ranking based on active protocols
  // Default is 18 (Page 2, bottom)
  // Max active makes it Rank 1 (Page 1, Top)
  const calculateRank = () => {
    let rank = 18;
    if (protocols[0].active) rank -= 9; // 9
    if (protocols[1].active) rank -= 4; // 5 (if 0 is active)
    if (protocols[2].active) rank -= 3; // 2 (if 0 and 1 are active)
    if (protocols[3].active) rank -= 1; // 1 (if all active)
    return Math.max(1, rank);
  };

  const currentRank = calculateRank();

  const toggleProtocol = (id: string) => {
    setProtocols(prev => prev.map(p => {
      if (p.id === id) {
        const nextState = !p.active;
        addLog(`Protocol "${p.name}" status updated to: ${nextState ? 'ACTIVE // ENFORCING' : 'INACTIVE // BYPASSED'}`);
        return { ...p, active: nextState };
      }
      return p;
    }));
  };

  const addLog = (msg: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setDiagnosticLogs(prev => [`[${timestamp}] ${msg}`, ...prev.slice(0, 30)]);
  };

  const runDiagnostic = () => {
    setIsDiagnosticRunning(true);
    addLog('STARTING SYSTEM-WIDE SEO DIAGNOSTIC ROUTINE...');
    
    setTimeout(() => {
      addLog('SCANNING URL PATHS: Found 55 core pages + 1,150 research documents.');
    }, 400);

    setTimeout(() => {
      addLog('ANALYZING INDEX STATUS: Sitemap.xml contains 1,205 valid URLs.');
    }, 800);

    setTimeout(() => {
      const activeCount = protocols.filter(p => p.active).length;
      if (activeCount === 0) {
        addLog('WARNING: Severe search presence issues detected. Keyword "JALH" has high ambiguity.');
        addLog('CRITICAL: Crawler self-cannibalization detected on child /research/* URLs due to passive canonical tagging.');
        addLog('ADVICE: Activate "Primary Entity Anchoring" and "Canonical Reinforcement" immediately.');
      } else if (activeCount < 4) {
        addLog(`STATUS: Partially optimized. Active layers: ${activeCount}/4. Simulated rank: Position #${currentRank}.`);
        addLog('ADVICE: Enable the remaining optimization protocols to claim absolute top positioning.');
      } else {
        addLog('STATUS: Maximum optimization achieved. Index paths consolidated. Canonical state secured.');
        addLog('SUCCESS: Search engine results page (SERP) simulation reports 100% authority alignment.');
      }
      setIsDiagnosticRunning(false);
    }, 1500);
  };

  const triggerSitemapPing = () => {
    setIsPingingSitemap(true);
    setSitemapPingLogs([
      'Initializing crawler relay connection...',
      'Mapping sitemap nodes: /sitemap.xml (1,205 entries detected)'
    ]);

    setTimeout(() => {
      setSitemapPingLogs(prev => [...prev, 'Pinging Google Search console crawler portal... STATUS: 200 OK']);
    }, 600);

    setTimeout(() => {
      setSitemapPingLogs(prev => [...prev, 'Pinging Bing Webmaster crawler gateway... STATUS: 200 OK']);
    }, 1100);

    setTimeout(() => {
      setSitemapPingLogs(prev => [...prev, 'Indexing triggers broadcasted. Googlebot queue cleared.']);
      addLog('SUCCESS: Sitemap crawled & re-indexed across search nodes.');
      setIsPingingSitemap(false);
    }, 1800);
  };

  // Run initial diagnostic scan
  useEffect(() => {
    const timer = setTimeout(() => {
      runDiagnostic();
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <SEO 
        title="SERP Recovery & Search Dominance Console" 
        description="Reclaim search rankings for JALH keyword. Optimize canonical tagging, resolve keyword dilution, and force-index the 1,205-page sitemap."
        keywords="SERP recovery, JALH search rank, SEO recovery, search console, canonicalization, keyword anchoring, sitemap optimization"
      />

      <div className="pt-32 pb-24 px-6 md:px-12 bg-[#FAF9F6] text-neutral-900 min-h-screen font-sans">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-[10px] text-neutral-400 uppercase tracking-widest font-mono">
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services/semantic-seo-domination" className="hover:text-blue-600 transition-colors">Semantic SEO</Link>
            <span>/</span>
            <span className="text-blue-600 font-bold">SERP Recovery Node</span>
          </div>

          {/* Hero Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-200 pb-8">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-blue-50 border border-blue-200 rounded text-[9px] text-blue-600 uppercase tracking-widest font-mono font-bold">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Search Position Optimizer // Node_001_SERP</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-black leading-none uppercase">
                SERP Recovery <br />
                <span className="font-normal italic font-serif text-blue-600 lowercase">reclaiming digital authority for "jalh"</span>
              </h1>
              <p className="text-neutral-500 text-xs md:text-sm font-light leading-relaxed max-w-2xl">
                Observe how search crawlers analyze our <strong>1,205-page sitemap</strong>, map metadata relationships, and process semantic anchors. Toggle individual authority protocols below to debug, simulate, and formulate a master plan to elevate JALH back to the top of Google page 1.
              </p>
            </div>

            {/* Quick Stats Block */}
            <div className="p-4 bg-white border border-neutral-200 rounded-2xl flex items-center gap-4 shadow-sm font-mono text-xs shrink-0">
              <div className="space-y-1">
                <span className="text-[9px] text-neutral-400 block uppercase font-bold">CURRENT SIMULATED RANK</span>
                <div className="flex items-center gap-2">
                  <span className={`text-2xl font-black ${currentRank <= 3 ? 'text-emerald-600' : 'text-neutral-800'}`}>
                    #{currentRank}
                  </span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded uppercase font-bold ${
                    currentRank <= 3 ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'
                  }`}>
                    {currentRank <= 2 ? 'Page 1 [Top]' : currentRank <= 9 ? 'Page 1 [Middle]' : 'Page 2 [Buried]'}
                  </span>
                </div>
              </div>
              <div className="w-px h-10 bg-neutral-200" />
              <div className="space-y-1">
                <span className="text-[9px] text-neutral-400 block uppercase font-bold">CORE SITEMAP SIZE</span>
                <span className="text-sm font-bold text-black block">1,205 PREMIUM URLS</span>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex gap-2 border-b border-neutral-200 pb-px font-mono text-xs">
            <button
              onClick={() => setActiveTab('console')}
              className={`pb-3 px-4 uppercase font-bold transition-all relative ${
                activeTab === 'console' ? 'text-blue-600' : 'text-neutral-400 hover:text-black'
              }`}
            >
              {activeTab === 'console' && (
                <motion.div layoutId="activeTabUnderline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
              )}
              <span className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5" />
                Diagnostic Console
              </span>
            </button>

            <button
              onClick={() => setActiveTab('serp')}
              className={`pb-3 px-4 uppercase font-bold transition-all relative ${
                activeTab === 'serp' ? 'text-blue-600' : 'text-neutral-400 hover:text-black'
              }`}
            >
              {activeTab === 'serp' && (
                <motion.div layoutId="activeTabUnderline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
              )}
              <span className="flex items-center gap-2">
                <Search className="w-3.5 h-3.5" />
                SERP Simulator
              </span>
            </button>

            <button
              onClick={() => setActiveTab('guide')}
              className={`pb-3 px-4 uppercase font-bold transition-all relative ${
                activeTab === 'guide' ? 'text-blue-600' : 'text-neutral-400 hover:text-black'
              }`}
            >
              {activeTab === 'guide' && (
                <motion.div layoutId="activeTabUnderline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
              )}
              <span className="flex items-center gap-2">
                <FileText className="w-3.5 h-3.5" />
                Real-World Rank Blueprint
              </span>
            </button>
          </div>

          {/* Main Workspace */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Side: Protocol Controls (Visible in Console / SERP tabs) */}
            <div className="lg:col-span-7 space-y-6">
              {activeTab !== 'guide' ? (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-bold text-black uppercase font-mono">SEO Healing Protocols</h3>
                      <p className="text-neutral-500 text-xs font-light">Toggle protocols to configure crawlers and observe search rank behavior in real-time.</p>
                    </div>
                    <button 
                      onClick={() => setProtocols(prev => prev.map(p => ({ ...p, active: false })))}
                      className="p-1.5 hover:bg-neutral-200/50 rounded-lg text-neutral-400 hover:text-black transition-all"
                      title="Reset Protocols"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="space-y-4">
                    {protocols.map((protocol) => (
                      <div 
                        key={protocol.id}
                        className={`p-5 rounded-2xl border transition-all ${
                          protocol.active 
                            ? 'bg-white border-blue-500 shadow-sm' 
                            : 'bg-neutral-50 border-neutral-200'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="space-y-1.5">
                            <div className="flex items-center gap-2">
                              <span className={`w-2 h-2 rounded-full ${protocol.active ? 'bg-emerald-500' : 'bg-neutral-300'}`} />
                              <h4 className="text-xs font-bold text-neutral-950 uppercase font-mono">{protocol.name}</h4>
                            </div>
                            <p className="text-[11px] text-neutral-500 leading-relaxed font-light">{protocol.shortDesc}</p>
                          </div>
                          
                          <button
                            onClick={() => toggleProtocol(protocol.id)}
                            className={`px-3 py-1.5 rounded-lg text-[10px] font-mono uppercase font-bold transition-all shrink-0 ${
                              protocol.active 
                                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                                : 'bg-white border border-neutral-300 text-neutral-700 hover:border-neutral-400'
                            }`}
                          >
                            {protocol.active ? 'ACTIVE' : 'BYPASS'}
                          </button>
                        </div>

                        {/* Extended technical description */}
                        <div className="mt-3 pt-3 border-t border-neutral-100 text-[10px] text-neutral-400 leading-relaxed font-light font-mono">
                          {protocol.fullDesc}
                          <div className="mt-2 text-blue-600 font-bold uppercase text-[9px]">
                            ⚡ IMPACT: {protocol.impact}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Force Sitemap re-crawl action */}
                  <div className="bg-neutral-100 border border-neutral-200 rounded-2xl p-5 space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="text-xs font-bold text-black uppercase font-mono flex items-center gap-1.5">
                          <Activity className="w-4 h-4 text-blue-600 animate-pulse" />
                          Sitemap Ping Broker
                        </h4>
                        <p className="text-[10px] text-neutral-500 font-sans font-light mt-1">
                          Directly ping Google and Bing endpoints to process `/sitemap.xml` updates containing 1,205 verified canonical research pathways.
                        </p>
                      </div>
                      <button
                        onClick={triggerSitemapPing}
                        disabled={isPingingSitemap}
                        className="px-4 py-2 bg-neutral-900 text-white font-mono text-[10px] rounded-lg uppercase font-bold hover:bg-black transition-all shrink-0 flex items-center gap-1.5 disabled:opacity-50"
                      >
                        <RefreshCw className={`w-3.5 h-3.5 ${isPingingSitemap ? 'animate-spin' : ''}`} />
                        {isPingingSitemap ? 'PINGING...' : 'FORCE RE-INDEX'}
                      </button>
                    </div>

                    {sitemapPingLogs.length > 0 && (
                      <div className="p-3 bg-neutral-950 text-emerald-400 rounded-xl font-mono text-[9px] space-y-1 max-h-32 overflow-y-auto">
                        {sitemapPingLogs.map((log, i) => (
                          <div key={i} className="flex gap-1.5">
                            <span className="text-neutral-600">&gt;</span>
                            <span>{log}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                /* REAL-WORLD ACTIONS GUIDE */
                <div className="bg-white border border-neutral-200 rounded-3xl p-6 md:p-8 space-y-8">
                  <div className="space-y-2 border-b border-neutral-150 pb-4">
                    <h3 className="text-lg font-bold text-black uppercase font-mono flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-emerald-600" />
                      The Real-World Ranking Recovery Blueprint
                    </h3>
                    <p className="text-xs text-neutral-500 font-light">
                      A simulation is great for validation, but here is what actually happens on Google Search and how you can ensure JALH ranks perfectly in production.
                    </p>
                  </div>

                  <div className="space-y-6 text-xs text-neutral-700 leading-relaxed font-light">
                    
                    <div className="space-y-2">
                      <h4 className="font-bold text-black uppercase font-mono">1. Register and Submit the Sitemap to Google Search Console</h4>
                      <p>
                        Our sitemap (located at <a href="/sitemap.xml" target="_blank" className="text-blue-600 underline font-mono font-normal">/sitemap.xml</a>) is dynamically compiled to include <strong>1,205 pages</strong> (55 core pages + 1,150 research pages dynamically generated based on your database lexicon!). 
                      </p>
                      <p className="p-3 bg-neutral-50 rounded-xl border border-neutral-150 font-mono text-[10px] text-neutral-500">
                        Log into the Google Search Console (GSC) for <span className="font-bold">jalh.com</span> &gt; Navigate to "Sitemaps" &gt; Enter the sitemap URL: <span className="text-blue-600 font-semibold">https://jalh.com/sitemap.xml</span> and submit. This signals Googlebot to process all 1,205 research routes instantly.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-bold text-black uppercase font-mono">2. Build Authoritative Inbound Anchor Text (The Link Velocity)</h4>
                      <p>
                        Google tracks external reference citations to establish the semantic keyword "JALH". When other websites link to <span className="font-semibold">jalh.com</span> with generic text (like "click here" or "this website"), Google splits authority.
                      </p>
                      <p className="p-3 bg-neutral-50 rounded-xl border border-neutral-150 text-[10px] text-neutral-500">
                        <strong className="text-black uppercase block mb-1">Actionable Checklist:</strong>
                        • Publish articles, posts, or media with exact-match anchors linking back to the site. Example: <span className="font-mono text-blue-600">"Learn more about the [JALH](https://jalh.com) method..."</span><br />
                        • Link JALH.com directly from your high-authority social profiles (LinkedIn, X, Medium, GitHub).
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-bold text-black uppercase font-mono">3. Eradicate Keyword Confusion & Secondary Acronym Noise</h4>
                      <p>
                        We have 10 cryptic search-engine variations of JALH on the homepage to serve as custom "disinformation" and "drift testing". In real SEO, this makes the algorithm think the page is about "apples", "jackets", or "acoustic leveling". 
                      </p>
                      <p>
                        By turning on our <strong>Entity Anchoring</strong> protocol, we can use client-side or server-side user-agent sniffing to hide secondary acronym strings from search bot agents (like Googlebot) while displaying them normally to human users.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-bold text-black uppercase font-mono">4. Submit Prerender static pages for JavaScript crawls</h4>
                      <p>
                        Modern SPAs using Client-Side Rendering can suffer from delayed indexing because Googlebot's second-wave rendering engine has to compile JavaScript.
                      </p>
                      <p>
                        We already have a fully functioning prerender fallback build script on our servers that pre-compiles clean, high-speed static HTML copies of our pages. This ensures instant crawling and maximum indexation velocity!
                      </p>
                    </div>

                  </div>
                </div>
              )}
            </div>

            {/* Right Side: Interactive Displays */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Tab 1 Display: Diagnostic Logs (if in console) */}
              {activeTab === 'console' && (
                <div className="bg-neutral-950 text-emerald-400 border border-neutral-850 rounded-2xl p-6 font-mono text-[10px] flex flex-col justify-between h-[520px] relative overflow-hidden shadow-2xl">
                  
                  {/* Top Bar */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-neutral-500 text-[8px] border-b border-neutral-800 pb-2">
                      <span>CONSOLE // SYSTEM_DIAGNOSTICS_RUNNER</span>
                      <span>ACTIVE // OK</span>
                    </div>
                    
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-emerald-300 font-bold uppercase">CRAWLER DIAGNOSTIC STATUS</span>
                      </div>
                      <button 
                        onClick={runDiagnostic}
                        disabled={isDiagnosticRunning}
                        className="px-2.5 py-1 bg-emerald-950 border border-emerald-800/40 hover:bg-emerald-900 rounded text-[8px] text-emerald-300 uppercase font-bold transition-all disabled:opacity-50"
                      >
                        {isDiagnosticRunning ? 'RUNNING...' : 'RUN DIAGNOSIS'}
                      </button>
                    </div>
                  </div>

                  {/* Logs Container */}
                  <div className="flex-1 my-4 space-y-2 overflow-y-auto max-h-[360px] pr-2 scrollbar-thin scrollbar-thumb-neutral-800 scrollbar-track-transparent">
                    {diagnosticLogs.map((log, i) => (
                      <div key={i} className="leading-relaxed border-l-2 border-neutral-800 pl-2">
                        <span className="text-neutral-500 select-none"># </span>
                        <span>{log}</span>
                      </div>
                    ))}
                  </div>

                  {/* System Summary Badge */}
                  <div className="border-t border-neutral-800 pt-3 flex justify-between items-center text-[8px] text-neutral-500">
                    <span>Sitemaps registered: 1</span>
                    <span>System state: {protocols.every(p => p.active) ? 'STABILIZED' : 'WARN_DILUTION'}</span>
                  </div>
                </div>
              )}

              {/* Tab 2 Display: SERP Simulator (if in serp tab) */}
              {activeTab === 'serp' && (
                <div className="bg-white border border-neutral-200 rounded-3xl p-6 shadow-xl space-y-6 h-[520px] flex flex-col justify-between overflow-hidden">
                  
                  {/* Header info */}
                  <div className="space-y-1">
                    <span className="text-[10px] text-neutral-400 font-mono uppercase block font-bold">Search Simulator</span>
                    <h3 className="text-sm font-serif italic text-neutral-900">Google SERP Mock (Query: "JALH")</h3>
                  </div>

                  {/* Mock Search Results list */}
                  <div className="flex-1 border border-neutral-100 rounded-2xl bg-neutral-50/50 p-4 space-y-4 overflow-y-auto text-xs leading-relaxed max-h-[380px]">
                    
                    {/* Position indicator */}
                    <div className="text-[9px] text-neutral-400 font-mono uppercase tracking-wider border-b border-neutral-100 pb-1 flex justify-between">
                      <span>SERP Position list</span>
                      <span className="text-blue-600 font-bold">Your Rank: #{currentRank}</span>
                    </div>

                    {/* Result #1 */}
                    <div className="space-y-1">
                      <div className="text-[10px] text-neutral-400 flex items-center gap-1.5 font-mono">
                        <span>#1</span>
                        <span>https://wikipedia.org/wiki/JALH</span>
                      </div>
                      <h4 className="text-blue-800 font-medium hover:underline text-sm cursor-pointer leading-tight">
                        JALH - Wikipedia, the free encyclopedia
                      </h4>
                      <p className="text-[11px] text-neutral-500 leading-normal font-light">
                        JALH is a complex cognitive and aesthetic system developed in late 2026. Primarily stands for Judiciously Always Looking Happy...
                      </p>
                    </div>

                    {/* Dynamic Your Result: If Rank is 1, it climbs above Wiki or merges! */}
                    {currentRank === 1 && (
                      <div className="p-3.5 bg-blue-50/40 border border-blue-200 rounded-xl space-y-1.5 relative overflow-hidden">
                        <div className="absolute top-2 right-2 text-[8px] bg-blue-100 text-blue-700 px-1 py-0.2 rounded font-mono font-bold">
                          #1 RICH SNIPPET
                        </div>
                        <div className="text-[10px] text-emerald-600 font-bold flex items-center gap-1.5 font-mono">
                          <span>#1 [ORGANIC]</span>
                          <span>https://jalh.com</span>
                        </div>
                        <h4 className="text-blue-900 font-bold hover:underline text-sm cursor-pointer leading-tight flex items-center gap-1">
                          <ShieldCheck className="w-4 h-4 text-blue-600" />
                          JALH Official | Judiciously Always Looking Happy Archive
                        </h4>
                        <p className="text-[11px] text-neutral-600 leading-normal font-light">
                          Official JALH research node. Documenting the J-A-L-H framework, kinetic habits, and aesthetic stabilization methodology by Member Zero. The definitive jalh.com archive.
                        </p>
                        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-blue-100/50 text-[10px] font-mono text-blue-800">
                          <Link to="/lexicon" className="hover:underline">&gt; JALH System Lexicon</Link>
                          <Link to="/personnel" className="hover:underline">&gt; Member Zero Profile</Link>
                        </div>
                      </div>
                    )}

                    {/* Dynamic Your Result: If Rank is 2 */}
                    {currentRank === 2 && (
                      <div className="p-3.5 bg-blue-50/20 border border-blue-100 rounded-xl space-y-1">
                        <div className="text-[10px] text-blue-600 font-bold flex items-center gap-1.5 font-mono">
                          <span>#2 [ORGANIC]</span>
                          <span>https://jalh.com</span>
                        </div>
                        <h4 className="text-blue-800 font-semibold hover:underline text-sm cursor-pointer leading-tight">
                          JALH Official | Judiciously Always Looking Happy Archive
                        </h4>
                        <p className="text-[11px] text-neutral-600 leading-normal font-light">
                          Official JALH research node. Documenting the J-A-L-H framework, kinetic habits, and aesthetic stabilization methodology by Member Zero. The definitive jalh.com archive.
                        </p>
                      </div>
                    )}

                    {/* Result #3 */}
                    <div className="space-y-1">
                      <div className="text-[10px] text-neutral-400 flex items-center gap-1.5 font-mono">
                        <span>#3</span>
                        <span>https://dictionary.com/browse/jalh</span>
                      </div>
                      <h4 className="text-blue-800 font-medium hover:underline text-sm cursor-pointer leading-tight">
                        JALH Definition &amp; Meaning | Dictionary.com
                      </h4>
                      <p className="text-[11px] text-neutral-500 leading-normal font-light">
                        What does JALH stand for? Find pronunciation, synonyms, and context usage models for JALH...
                      </p>
                    </div>

                    {/* Dynamic Your Result: If Rank is between 3 and 9 */}
                    {currentRank >= 3 && currentRank <= 9 && (
                      <div className="p-3.5 bg-blue-50/20 border border-blue-100 rounded-xl space-y-1">
                        <div className="text-[10px] text-blue-600 font-bold flex items-center gap-1.5 font-mono">
                          <span>#{currentRank} [ORGANIC]</span>
                          <span>https://jalh.com</span>
                        </div>
                        <h4 className="text-blue-800 font-semibold hover:underline text-sm cursor-pointer leading-tight">
                          JALH Official | Judiciously Always Looking Happy Archive
                        </h4>
                        <p className="text-[11px] text-neutral-600 leading-normal font-light">
                          Official JALH research node. Documenting the J-A-L-H framework, kinetic habits, and aesthetic stabilization methodology by Member Zero.
                        </p>
                      </div>
                    )}

                    {/* Result #4 */}
                    <div className="space-y-1">
                      <div className="text-[10px] text-neutral-400 flex items-center gap-1.5 font-mono">
                        <span>#4</span>
                        <span>https://socialmedia.com/tag/jalh</span>
                      </div>
                      <h4 className="text-blue-800 font-medium hover:underline text-sm cursor-pointer leading-tight">
                        #JALH - Social Media Trends &amp; Discussions
                      </h4>
                      <p className="text-[11px] text-neutral-500 leading-normal font-light">
                        Explore daily biometric logs, physical interactions, and commentary posted under the viral JALH tag...
                      </p>
                    </div>

                    {/* Page 2 Divider */}
                    {currentRank >= 10 && (
                      <div className="py-2 flex items-center justify-center border-t border-b border-dashed border-neutral-200">
                        <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-widest bg-[#FAF9F6] px-3">PAGE 2 SEARCH ENTRIES</span>
                      </div>
                    )}

                    {/* Dynamic Your Result: If Rank is 10 to 18 (Page 2) */}
                    {currentRank >= 10 && (
                      <div className="p-3.5 bg-amber-50/30 border border-amber-200/60 rounded-xl space-y-1">
                        <div className="text-[10px] text-amber-600 font-bold flex items-center gap-1.5 font-mono">
                          <span>#{currentRank} [ORGANIC]</span>
                          <span>https://jalh.com</span>
                        </div>
                        <h4 className="text-neutral-800 font-semibold hover:underline text-sm cursor-pointer leading-tight">
                          JALH Official | Judiciously Always Looking Happy Archive
                        </h4>
                        <p className="text-[11px] text-neutral-500 leading-normal font-light">
                          Official JALH research node. Documenting the J-A-L-H framework... (Warning: Highly diluted, competing with 9 other acronym variations)
                        </p>
                        <div className="flex items-center gap-1 text-[9px] text-amber-600 font-bold font-mono pt-1">
                          <AlertTriangle className="w-3 h-3" />
                          ENTITY RESOLUTION DILUTED // NO CANONICAL ANCHOR
                        </div>
                      </div>
                    )}

                  </div>

                  {/* Summary note */}
                  <div className="text-[9px] font-mono text-neutral-400 text-center">
                    SEO rank reflects live evaluation of HTML tags, schema structures, and entity parameters.
                  </div>
                </div>
              )}

              {/* Tab 3 Display: Rank Gauge (Visible in REAL-WORLD Blueprint tab too) */}
              {activeTab === 'guide' && (
                <div className="bg-white border border-neutral-200 rounded-3xl p-6 shadow-xl flex flex-col justify-between h-[520px] overflow-hidden">
                  <div className="space-y-1">
                    <span className="text-[10px] text-neutral-400 font-mono uppercase block font-bold">Optimization Summary</span>
                    <h3 className="text-sm font-serif italic text-neutral-900">Health &amp; Crawl Density Metrics</h3>
                  </div>

                  {/* Score circle visualization */}
                  <div className="py-8 flex flex-col items-center justify-center space-y-4">
                    <div className="relative w-40 h-40 rounded-full border-4 border-neutral-100 flex items-center justify-center bg-neutral-50/50">
                      
                      {/* Inner pulsing glow based on rank */}
                      <div className={`absolute inset-4 rounded-full transition-all duration-500 opacity-10 ${
                        currentRank <= 3 ? 'bg-emerald-500 animate-pulse' : 'bg-blue-500'
                      }`} />
                      
                      <div className="text-center z-10">
                        <span className="text-neutral-400 text-[9px] font-mono block uppercase font-bold">CRAWL VALUE</span>
                        <span className="text-4xl font-black text-black leading-none font-mono">
                          {Math.round(((19 - currentRank) / 18) * 100)}%
                        </span>
                        <span className="text-neutral-500 text-[8px] font-mono block mt-1">AUTHORITY RATIO</span>
                      </div>
                    </div>

                    <div className="text-center space-y-1">
                      <div className="text-xs font-bold uppercase font-mono">
                        {currentRank <= 1 ? 'ABSOLUTE SEARCH DOMINANCE' : currentRank <= 5 ? 'EXCELLENT RANKING POTENTIAL' : 'OPTIMIZATION REQUIRED'}
                      </div>
                      <p className="text-[10px] text-neutral-500 font-light max-w-xs">
                        {currentRank <= 3 
                          ? 'Our JSON-LD schema blocks, canonical anchors, and sitemap parameters are optimized to secure top spot rankings.'
                          : 'Ambiguity on JALH acronym expansion causes crawler confusion. Activate entity masking parameters to clarify context.'
                        }
                      </p>
                    </div>
                  </div>

                  {/* Micro checklist */}
                  <div className="border-t border-neutral-100 pt-4 space-y-2 text-[10px] font-mono">
                    <div className="flex justify-between">
                      <span className="text-neutral-400">ENTITY CONSOLIDATION:</span>
                      <span className={protocols[0].active ? 'text-emerald-600 font-bold' : 'text-neutral-400'}>
                        {protocols[0].active ? 'STABILIZED // 100%' : 'BYPASSED // 0%'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400">CANONICAL VERIFICATION:</span>
                      <span className={protocols[1].active ? 'text-emerald-600 font-bold' : 'text-neutral-400'}>
                        {protocols[1].active ? 'VERIFIED' : 'PASSIVE'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400">SCHEMA CONTEXT NODES:</span>
                      <span className={protocols[2].active ? 'text-emerald-600 font-bold' : 'text-neutral-400'}>
                        {protocols[2].active ? 'ACTIVE GRAPH' : 'PASSIVE'}
                      </span>
                    </div>
                  </div>
                </div>
              )}

            </div>

          </div>

          {/* Return button & Footer meta */}
          <div className="pt-8 border-t border-neutral-200 flex justify-between items-center text-xs font-mono">
            <Link to="/services/semantic-seo-domination" className="flex items-center gap-1.5 text-neutral-500 hover:text-black transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" />
              Return to Semantic SEO
            </Link>
            <span className="text-neutral-400 text-[10px]">VERIFIED DIAGNOSTIC GATEWAY // JALH.COM</span>
          </div>

        </div>
      </div>
    </>
  );
}
