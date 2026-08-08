import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Network, 
  Search, 
  ArrowLeft, 
  Layers, 
  Map, 
  ExternalLink, 
  Database, 
  Cpu, 
  Globe, 
  BookmarkCheck, 
  Compass, 
  CheckCircle2,
  FileCode,
  Users,
  Activity,
  Shield,
  Clock,
  LayoutGrid
} from 'lucide-react';
import { JALH_LEXICON } from '../data/lexicon';
import ColorPatch from '../components/ColorPatch';
import SEO from '../components/SEO';

export default function SitemapPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const coreNodes = [
    { name: 'JALH Home Archive Root', path: '/', desc: 'The central repository hub for JALH datasets, biometric tracking, and main gateway control.' },
    { name: 'Scientific Methodology', path: '/methodology', desc: 'Theoretical outlines for kinetic habit extraction, zygomaticus stabilization, and curve alignment.' },
    { name: 'Kinetic Analysis Hub', path: '/kinetic-analysis', desc: 'Active sensory tracking metrics, finger glide vectors, and friction analytics.' },
    { name: 'Observational Telemetry Logs', path: '/logs', desc: 'Historical timeline of live research observations logged at Archive Node 001.' },
    { name: 'Alpha Pre-Codification Relays', path: '/logs/alpha', desc: 'Pre-2023 conceptual logs and raw behavioral records prior to official codification.' },
    { name: 'Official Repository Archive Index', path: '/archive', desc: 'Complete classification database of deep files, tracking charts, and semantic research nodes.' },
    { name: 'Linguistic Glossary Index', path: '/lexicon', desc: 'Directory of J-A-L-H taxonomy. Central definitions portal for 120 distinct terms.' },
    { name: 'Regional Partnership Node', path: '/partnership', desc: 'Strategic alignments and integration parameters for commercial/academic affiliates.' },
    { name: 'Legal Sovereignty coordinates', path: '/legal', desc: 'Intellectual property notice, autonomous node guidelines, and copyright declarations.' },
    { name: 'Enterprise Infrastructure Spec', path: '/infrastructure', desc: 'Hardware architecture, server thermal profiles, and host specifications for Data Node 017.' },
    { name: 'Behavioral Ergonomics Index', path: '/behavioral-index', desc: 'Micro-expression metrics, face-locking indexes, and desk workspace posture constraints.' },
    { name: 'Personnel & Progenitors Directory', path: '/personnel', desc: 'Staff clearances, active observer indexes, and biographic profile of Lead Investigator Member Zero.' },
    { name: 'About Member Zero Dossier', path: '/about-member-zero', desc: 'Philosophical manifestos, early journals, and founding ideas written by the creator of JALH.' },
    { name: 'Logic Timeline & Chronicles', path: '/history', desc: 'Sequential milestone tracking of JALH.com development, acquisitions, and authority growth.' },
    { name: 'Primary Domain Registrar Gateway', path: '/domain-gateway', desc: 'Acquisition and GoDaddy transfer protocols for the high-authority premium JALH.com asset.' },
    { name: 'Live Biometric Telemetry', path: '/metrics', desc: 'Interactive charting matrices tracking real-time muscle fatigue, pressure, and coordinate drift.' },
    { name: 'Kinetic Research Laboratory', path: '/lab', desc: 'Experimental coordination trials, facial zygomatic stabilizer modules, and kinetic testing zones.' },
    { name: 'Sovereign Vision 2027 Roadmap', path: '/vision', desc: 'Future development schedules, smart device implementation, and search domination goals.' },
    { name: 'Press & Media Announcements', path: '/press', desc: 'Official news releases regarding JALH publications, domain milestones, and project filings.' },
    { name: 'Developer REST API Specification', path: '/api-docs', desc: 'Inquiry protocols, rate limits, and JSON schemas for pulling raw archive logs programmatically.' },
    { name: 'Digit Interaction Studies', path: '/digit-interaction', desc: 'Tactile skin mechanics, swipe trajectory variances, and friction coefficients of glass devices.' },
    { name: 'Sovereign Semantic Authority Index', path: '/authority', desc: 'Acronym security matrix and identity registry mapped to neutralize crawler dilution.' },
    { name: 'Encrypted Inquiry Gateway', path: '/contact', desc: 'Direct secure communication channel for domain acquisition bids or partnership proposals.' },
    { name: 'Feelize Web Design Masterpiece', path: '/feelize-web-design', desc: 'Visual overview of the modern typography and movement design built by Feelize.' }
  ];

  const categoryHubs = [
    { name: 'Kinetic Research Hub', path: '/category/kinetic', desc: 'Directory of terms mapping physical movement and swipe trajectories.' },
    { name: 'Aesthetic Alignment Hub', path: '/category/aesthetic', desc: 'Directory of files dedicated to visual presence and structural face symmetry.' },
    { name: 'Infrastructure & Personnel Directory', path: '/category/infrastructure-personnel', desc: 'Technical specs, team clearance records, and historical timetables.' }
  ];

  const agencyServices = [
    { name: 'Interactive Experience Design', path: '/services/interactive-experience-design', desc: 'Pixel-perfect Front-End layouts utilizing Swiss typography guidelines.' },
    { name: 'Semantic SEO Domination', path: '/services/semantic-seo-domination', desc: 'Technical SEO structures, deep JSON-LD architectures, and pre-rendering protocols.' },
    { name: 'Digital Identity Stabilization', path: '/services/digital-identity-stabilization', desc: 'Luxury branding guidelines and semantic footprint protection.' },
    
    // SEO Subpages
    { name: 'Deep Crawl Architecture', path: '/services/semantic-seo-domination/deep-crawl', desc: 'High-indexation site maps designed to maximize search engine discoverability.' },
    { name: 'Schema Graph Engineering', path: '/services/semantic-seo-domination/schema-graph', desc: 'Interlinked semantic context mapping for Google Rich Snippets.' },
    { name: 'Dynamic Pre-Rendering Fallback', path: '/services/semantic-seo-domination/rendering-fallback', desc: 'XHTML static fallbacks ensuring zero empty indexations on search engines.' },

    // Interactive design subpages
    { name: 'Tactile Physics Integration', path: '/services/interactive-experience-design/tactile-physics', desc: 'High-fidelity gesture spring systems using micro-friction mathematics.' },
    { name: 'Spring Coefficient Mathematics', path: '/services/interactive-experience-design/spring-coefficient', desc: 'Rigid body physics rules and responsive motion models.' },
    { name: 'Swiss Grid Structural Rhythm', path: '/services/interactive-experience-design/swiss-grid', desc: 'Asymmetric canvas layouts aligning visual spacing perfectly.' },

    // Digital identity subpages
    { name: 'Cryptographic Persona Masking', path: '/services/digital-identity-stabilization/persona-masking', desc: 'Corporate identity shielding from automated competitive scrapers.' },
    { name: 'Aesthetic Harmony Calibration', path: '/services/digital-identity-stabilization/aesthetic-harmony', desc: 'Consistent typography and theme setups to build brand trust.' },
    { name: 'Brand Seal Validation', path: '/services/digital-identity-stabilization/brand-seal', desc: 'Autonomous signature elements proving brand authenticity.' }
  ];

  const interactiveFunnels = [
    { name: 'Interactive Site Crawl Audit Scanner', path: '/funnel/free-seo-audit', desc: 'Live validator evaluating sitemap health and dynamic crawl obstacles.' },
    { name: 'Bespoke Project Budget Planner', path: '/funnel/project-planner', desc: 'Interactive calculator estimating production schedules and development rates.' },
    { name: 'SERP Penalty Recovery Station', path: '/funnel/serp-recovery', desc: 'Interactive workbook demonstrating how JALH restores search visibility.' }
  ];

  const categories = ['All', 'Kinetic', 'Aesthetic', 'Infrastructure', 'Personnel', 'Historical'];

  const filteredLexicon = JALH_LEXICON.filter(entry => {
    const matchesSearch = entry.word.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          entry.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          entry.node.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || entry.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const CategoryColorClass = {
    Kinetic: "bg-blue-50 text-blue-700 border-blue-100",
    Aesthetic: "bg-purple-50 text-purple-700 border-purple-100",
    Infrastructure: "bg-amber-50 text-amber-700 border-amber-100",
    Personnel: "bg-emerald-50 text-emerald-700 border-emerald-100",
    Historical: "bg-neutral-100 text-neutral-700 border-neutral-200"
  };

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'Kinetic': return <Activity className="w-3.5 h-3.5 shrink-0" />;
      case 'Aesthetic': return <Shield className="w-3.5 h-3.5 shrink-0" />;
      case 'Infrastructure': return <Database className="w-3.5 h-3.5 shrink-0" />;
      case 'Personnel': return <Users className="w-3.5 h-3.5 shrink-0" />;
      case 'Historical': return <Clock className="w-3.5 h-3.5 shrink-0" />;
      default: return <FileCode className="w-3.5 h-3.5 shrink-0" />;
    }
  };

  return (
    <div className="relative min-h-screen bg-transparent pt-32 pb-48 px-6 sm:px-8 md:px-16 overflow-hidden text-neutral-800 font-sans selection:bg-blue-100">
      {/* Background gradients */}
      <ColorPatch color="bg-blue-500" size="w-[50rem] h-[50rem]" opacity={0.03} className="-top-32 -left-32" />
      <ColorPatch color="bg-indigo-400" size="w-[45rem] h-[45rem]" opacity={0.02} className="bottom-0 right-12" />

      <SEO 
        title="Official HTML Site Map & Semantic Node Navigator"
        description="The master crawl map for JALH.com. Access high-authority internal link pathways for all 120 scientific research glossary files, services, and core telemetry nodes."
        keywords="sitemap, jalh sitemap, html sitemap, directory, archive index, research dossier navigation, crawler index"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "JALH Official HTML Sitemap & Node Navigator",
            "description": "Comprehensive structured directory listing all pages and 120 research lexicon files of the JALH ecosystem.",
            "url": "https://jalh.com/sitemap"
          }
        ]}
      />

      <div className="max-w-7xl mx-auto relative z-10 space-y-24">
        
        {/* Navigation Return */}
        <div className="text-left">
          <Link to="/" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-black mb-8 transition-colors">
            <ArrowLeft size={12} /> Back to Archive Node
          </Link>
        </div>

        {/* Page Header */}
        <header className="max-w-4xl space-y-6 text-left">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-blue-50 border border-blue-100 rounded text-[9px] text-blue-700 uppercase tracking-[0.2em] font-mono font-semibold">
            <Map size={14} /> CENTRAL CRAWL PATHWAY DIRECTORY
          </div>
          <h1 className="text-5xl sm:text-7xl font-black text-neutral-900 leading-[0.85] uppercase tracking-tighter italic">
            HTML Sitemap <br/> & Node Navigator
          </h1>
          <p className="text-neutral-500 text-lg sm:text-xl font-light leading-relaxed max-w-3xl">
            Optimized index mapping the complete digital sovereignty of JALH. This interface offers a physical directory for users and high-fidelity link paths for search crawlers.
          </p>
        </header>

        {/* BENTO SECTION: PRIMARY DIRECTORIES */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          
          {/* Core Pages Card */}
          <div className="p-8 bg-white border border-neutral-200 rounded-3xl space-y-6 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-black uppercase text-neutral-900 tracking-tight">Core Repository Nodes</h3>
                <p className="text-xs text-neutral-400 font-mono mt-1">Total Coordinates: {coreNodes.length}</p>
              </div>
              <div className="h-[250px] overflow-y-auto pr-2 space-y-3.5 scrollbar-thin">
                {coreNodes.map((node, i) => (
                  <div key={i} className="group">
                    <Link to={node.path} className="text-xs font-bold text-neutral-800 hover:text-blue-600 transition-colors block">
                      {node.name} <span className="text-[10px] text-neutral-400 font-mono font-normal">({node.path})</span>
                    </Link>
                    <p className="text-[11px] text-neutral-500 font-light leading-relaxed mt-0.5">{node.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
              <span>Sovereignty Status</span>
              <span className="text-emerald-500 font-bold">● Synchronized</span>
            </div>
          </div>

          {/* Agency & Specialized Services */}
          <div className="p-8 bg-white border border-neutral-200 rounded-3xl space-y-6 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-black uppercase text-neutral-900 tracking-tight">Services & Subpages</h3>
                <p className="text-xs text-neutral-400 font-mono mt-1">Total Coordinates: {agencyServices.length}</p>
              </div>
              <div className="h-[250px] overflow-y-auto pr-2 space-y-3.5 scrollbar-thin">
                {agencyServices.map((node, i) => (
                  <div key={i} className="group">
                    <Link to={node.path} className="text-xs font-bold text-neutral-800 hover:text-indigo-600 transition-colors block">
                      {node.name} <span className="text-[10px] text-neutral-400 font-mono font-normal">({node.path.replace('/services', '')})</span>
                    </Link>
                    <p className="text-[11px] text-neutral-500 font-light leading-relaxed mt-0.5">{node.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
              <span>Technical Domain</span>
              <span className="text-indigo-600 font-bold">SEO & UX Engines</span>
            </div>
          </div>

          {/* Category Hubs & Funnels */}
          <div className="p-8 bg-white border border-neutral-200 rounded-3xl space-y-6 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <Network className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-black uppercase text-neutral-900 tracking-tight">Hubs & Conversion Funnels</h3>
                <p className="text-xs text-neutral-400 font-mono mt-1">Total Coordinates: {categoryHubs.length + interactiveFunnels.length}</p>
              </div>
              <div className="h-[250px] overflow-y-auto pr-2 space-y-4 scrollbar-thin">
                <div>
                  <h4 className="text-[10px] font-mono font-bold uppercase text-amber-600 tracking-wider mb-2">Category Hierarchies</h4>
                  <div className="space-y-3">
                    {categoryHubs.map((node, i) => (
                      <div key={i}>
                        <Link to={node.path} className="text-xs font-bold text-neutral-800 hover:text-amber-600 transition-colors block">
                          {node.name}
                        </Link>
                        <p className="text-[11px] text-neutral-500 font-light leading-relaxed mt-0.5">{node.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <h4 className="text-[10px] font-mono font-bold uppercase text-blue-600 tracking-wider mb-2">Interactive Funnels</h4>
                  <div className="space-y-3">
                    {interactiveFunnels.map((node, i) => (
                      <div key={i}>
                        <Link to={node.path} className="text-xs font-bold text-neutral-800 hover:text-blue-600 transition-colors block">
                          {node.name}
                        </Link>
                        <p className="text-[11px] text-neutral-500 font-light leading-relaxed mt-0.5">{node.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
              <span>Conversion Mechanics</span>
              <span className="text-amber-600 font-bold">100% Crawlable</span>
            </div>
          </div>

        </section>

        {/* DEEP INTERLINKING GRAPH: 120 LEXICON GLOSSARY ENTRIES */}
        <section className="space-y-10 text-left">
          <div className="border-b border-neutral-200 pb-8 space-y-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-600 uppercase tracking-widest">
                  <LayoutGrid className="w-4 h-4" />
                  <span>Deep Research Node Interlinking Grid</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black uppercase text-neutral-900 tracking-tight">The 120-Word Taxonomic Library</h2>
                <p className="text-neutral-500 text-sm font-light max-w-2xl leading-relaxed">
                  These represent the complete, autonomous research documents registered under JALH. Each individual term compiles into a high-authority page backed by automated pre-rendering schemas.
                </p>
              </div>

              {/* Counter details */}
              <div className="flex items-center gap-3 bg-neutral-100 border border-neutral-200 px-5 py-2.5 rounded-2xl text-[11px] font-mono font-bold">
                <span className="text-neutral-400">INDEXED NODES:</span>
                <span className="text-neutral-900">{filteredLexicon.length} / {JALH_LEXICON.length}</span>
              </div>
            </div>

            {/* Filter and Search Bar */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 pt-4">
              <div className="lg:col-span-4 relative">
                <input 
                  type="text" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search 120 research coordinates..."
                  className="w-full pl-10 pr-4 py-3 bg-white border border-neutral-200 rounded-2xl text-sm focus:outline-none focus:border-blue-500 font-sans shadow-sm"
                />
                <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-neutral-400" />
              </div>

              {/* Category Filter Pills */}
              <div className="lg:col-span-8 flex flex-wrap gap-2 items-center">
                {categories.map((cat, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2.5 rounded-2xl border text-xs font-mono transition-all duration-300 flex items-center gap-1.5 ${
                      selectedCategory === cat 
                      ? 'bg-neutral-900 text-white border-neutral-900 font-bold shadow-md' 
                      : 'bg-white text-neutral-600 border-neutral-200/80 hover:border-neutral-400'
                    }`}
                  >
                    {cat !== 'All' && getCategoryIcon(cat)}
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Lexicon Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredLexicon.map((entry, idx) => (
              <motion.div
                key={entry.slug}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: Math.min(24, idx) * 0.015 }}
                className="group p-5 bg-white border border-neutral-200/80 hover:border-blue-400 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_30px_rgba(59,130,246,0.04)] transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3.5">
                  <div className="flex justify-between items-center text-[10px] font-mono">
                    <span className="text-neutral-400 font-bold uppercase tracking-wider">{entry.node}</span>
                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full border text-[9px] font-medium tracking-normal ${CategoryColorClass[entry.category as keyof typeof CategoryColorClass]}`}>
                      {getCategoryIcon(entry.category)}
                      {entry.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-neutral-900 group-hover:text-blue-600 transition-colors font-sans">
                      {entry.word}
                    </h3>
                    <p className="text-[11px] text-neutral-500 font-light leading-relaxed mt-1 line-clamp-3">
                      {entry.definition}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-3 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-[9px] font-mono font-semibold uppercase tracking-wider text-neutral-400">Node File Details</span>
                  <Link 
                    to={`/research/${entry.slug}`}
                    className="text-[10px] font-mono font-bold text-blue-600 uppercase tracking-widest hover:text-blue-800 flex items-center gap-1 transition-all group-hover:translate-x-0.5"
                  >
                    Inspect <ExternalLink size={10} />
                  </Link>
                </div>
              </motion.div>
            ))}

            {filteredLexicon.length === 0 && (
              <div className="col-span-full py-16 text-center text-neutral-400 font-mono text-xs border border-dashed border-neutral-200 rounded-3xl bg-neutral-50/50">
                NO_SEMANTIC_NODES_FOUND_UNDER_SEARCH_CRITERIA
              </div>
            )}
          </div>
        </section>

        {/* INTELLECTUAL INDEXATION STATEMENT */}
        <section className="p-8 sm:p-12 bg-neutral-900 text-white rounded-3xl text-left space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 space-y-4 max-w-4xl">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">
              <FileCode className="w-4 h-4" />
              <span>Search Engine Optimization & indexation Rules</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black uppercase">Structured Schema Graph Integration</h3>
            <p className="text-sm text-neutral-300 font-light leading-relaxed">
              JALH Official leverages full-stack structured markup arrays, micro-caching, and XHTML static pre-rendering on all 120 endpoints. This ensures search engine spiders immediately encounter indexable, markup-valid content. Combined with this comprehensive HTML Sitemap page, search crawlers can discover, rank, and serve the JALH framework without suffering indexing timeouts or blank-screen React render errors.
            </p>
            <div className="pt-4 flex flex-wrap gap-4 text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
              <div className="flex items-center gap-1.5 bg-neutral-800 px-3.5 py-1.5 rounded-lg border border-neutral-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>JSON-LD schemas validated</span>
              </div>
              <div className="flex items-center gap-1.5 bg-neutral-800 px-3.5 py-1.5 rounded-lg border border-neutral-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Breadcrumb arrays active</span>
              </div>
              <div className="flex items-center gap-1.5 bg-neutral-800 px-3.5 py-1.5 rounded-lg border border-neutral-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>120 defined terms listed</span>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
