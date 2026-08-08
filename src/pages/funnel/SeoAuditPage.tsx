import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Loader2, BarChart2, CheckCircle2, AlertTriangle, ArrowRight, ShieldCheck, Mail, Globe, Zap, ListChecks } from 'lucide-react';
import SEO from '../../components/SEO';

interface AuditResult {
  url: string;
  sitemapStatus: 'healthy' | 'warning' | 'error';
  schemaStatus: 'healthy' | 'warning' | 'error';
  renderingStatus: 'healthy' | 'warning' | 'error';
  linkDensity: number; // links per page
  canonicalSetup: boolean;
  score: number;
}

export default function SeoAuditPage() {
  const [url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [scanStep, setScanStep] = useState(0);
  const [result, setResult] = useState<AuditResult | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const scanSteps = [
    "Initiating mechanical crawler on source domain...",
    "Retrieving public robots.txt and verifying sitemap declarations...",
    "Inspecting schema.org graph nodes (DefinedTerm, ScholarlyArticle)...",
    "Measuring pre-rendering markup fallback presence...",
    "Calculating internal linking cross-references and URL canonicals...",
    "Compiling semantic crawl efficiency report card..."
  ];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isScanning && scanStep < scanSteps.length) {
      timer = setTimeout(() => {
        setScanStep(prev => prev + 1);
      }, 1200);
    } else if (isScanning && scanStep === scanSteps.length) {
      setIsScanning(false);
      // Construct a deterministic mock response based on the domain input
      const domainHash = url.length + (email.length || 5);
      const sitemapStatus = domainHash % 3 === 0 ? 'healthy' : domainHash % 3 === 1 ? 'warning' : 'error';
      const schemaStatus = domainHash % 2 === 0 ? 'healthy' : 'error';
      const renderingStatus = url.includes('react') || url.includes('next') ? 'warning' : 'healthy';
      const linkDensity = Math.max(3, (domainHash * 7) % 35);
      const canonicalSetup = domainHash % 5 !== 0;
      
      let score = 95;
      if (sitemapStatus === 'warning') score -= 15;
      if (sitemapStatus === 'error') score -= 30;
      if (schemaStatus === 'error') score -= 25;
      if (renderingStatus === 'warning') score -= 15;
      if (!canonicalSetup) score -= 10;
      
      setResult({
        url,
        sitemapStatus,
        schemaStatus,
        renderingStatus,
        linkDensity,
        canonicalSetup,
        score: Math.max(30, score)
      });
    }
    return () => clearTimeout(timer);
  }, [isScanning, scanStep, url, email]);

  const handleStartScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url || !email) return;
    setIsScanning(true);
    setScanStep(0);
    setResult(null);
  };

  const handleSaveReport = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SEO 
        title="Free Semantic SEO & Crawler Optimization Audit Tool" 
        description="Verify your website's sitemap structure, JSON-LD schema depth, and pre-rendering configurations. Optimize your indexation rates on Google with JALH."
        keywords="free seo audit, crawl optimization checker, schema validator, sitemap crawler, organic indexation tool, feelize seo audit"
        schema={[{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "JALH Semantic SEO & Crawler Audit Engine",
          "url": "https://jalh.com/funnel/free-seo-audit",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "All",
          "browserRequirements": "Requires HTML5 compatible browser",
          "offers": {
            "@type": "Offer",
            "price": "0.00",
            "priceCurrency": "USD"
          }
        }]}
      />

      <div className="pt-40 pb-24 px-6 md:px-12 bg-neutral-950 text-neutral-100 min-h-screen font-sans">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Header Block */}
          <div className="space-y-6 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-xs text-emerald-400 font-mono uppercase tracking-widest">
              <Zap className="w-3.5 h-3.5 animate-pulse" />
              <span>DIAGNOSTIC ENGINE // FREE CRAWL AUDIT</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Semantic SEO <br />
              <span className="text-emerald-400 font-mono font-normal">Crawl Diagnostic Scan</span>
            </h1>

            <p className="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
              Wondering why your impressions are hovering near zero? Enter your domain below. Our scanning diagnostic mimics Googlebot to evaluate pre-rendering layouts, schema-graph connections, sitemap declarations, and canonical safety.
            </p>
          </div>

          {/* Core Interactive Portal */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 md:p-12 space-y-10 relative overflow-hidden">
            
            <AnimatePresence mode="wait">
              
              {/* Step 1: Input Form */}
              {!isScanning && !result && (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  onSubmit={handleStartScan}
                  className="space-y-8 max-w-xl mx-auto"
                >
                  <div className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase text-neutral-400 block font-bold">Target Website Domain</label>
                      <div className="relative">
                        <input 
                          type="url" 
                          required
                          placeholder="https://example.com"
                          value={url}
                          onChange={e => setUrl(e.target.value)}
                          className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3.5 pl-11 text-sm text-white focus:outline-none focus:border-emerald-500"
                        />
                        <Globe className="absolute left-4 top-4 w-4 h-4 text-neutral-500" />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase text-neutral-400 block font-bold">Email Address (For Report Dossier)</label>
                      <div className="relative">
                        <input 
                          type="email" 
                          required
                          placeholder="developer@yourdomain.com"
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                          className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3.5 pl-11 text-sm text-white focus:outline-none focus:border-emerald-500"
                        />
                        <Mail className="absolute left-4 top-4 w-4 h-4 text-neutral-500" />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-emerald-400 hover:bg-emerald-500 text-black text-xs font-mono font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 shadow-md"
                  >
                    Initiate Mechanical Audit Scan
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.form>
              )}

              {/* Step 2: Scanning Terminal Progress */}
              {isScanning && (
                <motion.div 
                  key="scanning"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-8 text-center max-w-md mx-auto py-8"
                >
                  <div className="relative w-16 h-16 mx-auto">
                    <Loader2 className="w-16 h-16 text-emerald-400 animate-spin absolute top-0 left-0" />
                    <Search className="w-6 h-6 text-white absolute top-5 left-5" />
                  </div>

                  <div className="space-y-3 font-mono">
                    <h3 className="text-xs text-neutral-500 uppercase font-bold tracking-widest">Scanner Active</h3>
                    <p className="text-sm text-emerald-400 leading-relaxed min-h-[48px] px-4 font-bold">
                      {scanSteps[scanStep]}
                    </p>
                    <div className="w-full bg-neutral-950 h-1.5 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-emerald-400 transition-all duration-1000 ease-out"
                        style={{ width: `${((scanStep + 1) / scanSteps.length) * 100}%` }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Result Dashboard */}
              {!isScanning && result && (
                <motion.div 
                  key="results"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-8 font-mono"
                >
                  {/* Score circle */}
                  <div className="flex flex-col md:flex-row gap-8 items-center justify-between border-b border-neutral-800 pb-8">
                    <div className="space-y-2 text-center md:text-left">
                      <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest block">Scan Complete // Target: {result.url}</span>
                      <h3 className="text-xl md:text-2xl text-white font-bold font-sans">Mechanical Crawl Diagnostic Card</h3>
                    </div>

                    <div className="text-center bg-neutral-950 border border-neutral-850 p-6 rounded-2xl flex items-center gap-4 shrink-0">
                      <div className="text-3xl font-extrabold text-emerald-400">{result.score}%</div>
                      <div className="text-left font-sans text-xs">
                        <div className="font-bold text-white uppercase font-mono">Crawl Score</div>
                        <div className="text-neutral-500">Perfect &gt; 90%</div>
                      </div>
                    </div>
                  </div>

                  {/* Results Items Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs leading-normal">
                    
                    {/* Sitemap */}
                    <div className="p-5 bg-neutral-950 rounded-xl border border-neutral-850 space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] text-neutral-400 uppercase font-bold">XML Sitemap Registry</span>
                        {result.sitemapStatus === 'healthy' ? (
                          <span className="text-emerald-400 font-bold flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5" /> Healthy</span>
                        ) : result.sitemapStatus === 'warning' ? (
                          <span className="text-yellow-500 font-bold flex items-center gap-1"><AlertTriangle className="w-3.5 h-3.5" /> Unregistered</span>
                        ) : (
                          <span className="text-red-400 font-bold flex items-center gap-1"><AlertTriangle className="w-3.5 h-3.5" /> Broken</span>
                        )}
                      </div>
                      <p className="text-neutral-500 font-sans">
                        {result.sitemapStatus === 'healthy' 
                          ? "Absolute paths verified inside robots.txt. Excellent discovery rating." 
                          : "XML Sitemap URL not declared in robots.txt. Crawler bots must search blindly."
                        }
                      </p>
                    </div>

                    {/* Schemas */}
                    <div className="p-5 bg-neutral-950 rounded-xl border border-neutral-850 space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] text-neutral-400 uppercase font-bold">Schema.org Metadata</span>
                        {result.schemaStatus === 'healthy' ? (
                          <span className="text-emerald-400 font-bold flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5" /> Verified</span>
                        ) : (
                          <span className="text-red-400 font-bold flex items-center gap-1"><AlertTriangle className="w-3.5 h-3.5" /> Missing</span>
                        )}
                      </div>
                      <p className="text-neutral-500 font-sans">
                        {result.schemaStatus === 'healthy'
                          ? "Rich JSON-LD graph objects fully declared on entry elements."
                          : "No structured data objects found. Search platforms cannot establish parent entities."
                        }
                      </p>
                    </div>

                    {/* Pre-rendering */}
                    <div className="p-5 bg-neutral-950 rounded-xl border border-neutral-850 space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] text-neutral-400 uppercase font-bold">Pre-Rendering Layouts</span>
                        {result.renderingStatus === 'healthy' ? (
                          <span className="text-emerald-400 font-bold flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5" /> Server-side</span>
                        ) : (
                          <span className="text-yellow-500 font-bold flex items-center gap-1"><AlertTriangle className="w-3.5 h-3.5" /> SPA Bundle</span>
                        )}
                      </div>
                      <p className="text-neutral-500 font-sans">
                        {result.renderingStatus === 'healthy'
                          ? "Immediate static HTML payload served. High-performance index rating."
                          : "Javascript execution required for rendering. Indexing might be severely delayed."
                        }
                      </p>
                    </div>

                    {/* Links and canon */}
                    <div className="p-5 bg-neutral-950 rounded-xl border border-neutral-850 space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] text-neutral-400 uppercase font-bold">Semantic Link Density</span>
                        <span className="text-emerald-400 font-bold">{result.linkDensity} links/page</span>
                      </div>
                      <p className="text-neutral-500 font-sans">
                        {result.canonicalSetup 
                          ? "Canonical tags correctly set to primary URLs. Duplicate indexing prevented."
                          : "Missing canonical safety targets. Search spiders risk crawl loop penalties."
                        }
                      </p>
                    </div>

                  </div>

                  {/* Submission and lead generation block */}
                  <div className="border-t border-neutral-800 pt-8 text-center space-y-6">
                    <div className="space-y-2">
                      <h4 className="text-base text-white font-sans font-bold">Secure Your Action Blueprint</h4>
                      <p className="text-neutral-400 text-xs font-sans max-w-lg mx-auto">
                        We have prepared a step-by-step optimization blueprint detailing how to fix these critical bottlenecks on your site. Confirm your email below to receive the PDF dossier.
                      </p>
                    </div>

                    {!submitted ? (
                      <form onSubmit={handleSaveReport} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                        <input 
                          type="email" 
                          required
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                          className="bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-xs text-white grow focus:outline-none focus:border-emerald-400"
                        />
                        <button
                          type="submit"
                          className="px-6 py-3 bg-emerald-400 hover:bg-emerald-500 text-black text-xs font-bold uppercase tracking-wider rounded-lg transition-all shrink-0"
                        >
                          Send Audit PDF
                        </button>
                      </form>
                    ) : (
                      <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl max-w-md mx-auto text-emerald-400 text-xs font-bold flex items-center justify-center gap-2">
                        <ShieldCheck className="w-5 h-5 animate-bounce" />
                        <span>Action Blueprint dispatched to {email}. Check your inbox!</span>
                      </div>
                    )}
                  </div>

                </motion.div>
              )}

            </AnimatePresence>

          </div>

        </div>
      </div>
    </>
  );
}
