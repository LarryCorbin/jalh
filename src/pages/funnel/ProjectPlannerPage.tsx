import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sliders, CheckSquare, Sparkles, Send, DollarSign, Calendar, Landmark, Settings2, CheckCircle2 } from 'lucide-react';
import SEO from '../../components/SEO';

export default function ProjectPlannerPage() {
  // Service selections
  const [design, setDesign] = useState(true);
  const [branding, setBranding] = useState(false);
  const [seo, setSeo] = useState(true);
  const [directories, setDirectories] = useState(false);
  
  // Slider node counts
  const [pagesCount, setPagesCount] = useState(50); // slider 5 to 1000
  
  // Dynamic cost calculation
  const [estimatedCost, setEstimatedCost] = useState(0);
  const [estimatedTime, setEstimatedTime] = useState('');
  
  // Form submission
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [projectBrief, setProjectBrief] = useState('');
  const [plannerSubmitted, setPlannerSubmitted] = useState(false);

  useEffect(() => {
    let baseRate = 0;
    if (design) baseRate += 4500;
    if (branding) baseRate += 3000;
    if (seo) baseRate += 3500;
    if (directories) baseRate += 4000;

    // Node count compounding multiplier
    const pageMultiplier = pagesCount <= 10 
      ? 1 
      : pagesCount <= 100 
      ? 1 + (pagesCount - 10) * 0.04 
      : 4.6 + (pagesCount - 100) * 0.015;

    const finalEstimate = Math.round(baseRate * pageMultiplier);
    setEstimatedCost(finalEstimate);

    // Timeline calculation
    let weeks = 4;
    if (pagesCount > 50) weeks += 2;
    if (pagesCount > 200) weeks += 3;
    if (directories) weeks += 2;
    if (design && seo) weeks += 1;

    setEstimatedTime(`${weeks}-${weeks + 2} Weeks`);
  }, [design, branding, seo, directories, pagesCount]);

  const handleSubmitPlanner = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientEmail) return;
    setPlannerSubmitted(true);
  };

  return (
    <>
      <SEO 
        title="Bespoke Design Project Planner & Cost Calculator" 
        description="Calculate estimated development costs, sitemap sizes, and delivery timelines for custom web designs, SEO configurations, and directory platforms."
        keywords="web design calculator, project planner, digital agency cost, custom web design quote, seo services price, feelize cost calculator"
        schema={[{
          "@context": "https://schema.org",
          "@type": "Question",
          "name": "How much does a custom, pre-rendered semantic SEO website cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cost of custom, highly optimized, pre-rendered websites with deep schema.org metadata integration generally scales based on the size of the directory and complexity of services selected. Real-time estimations can be custom-planned directly using our Interactive Project Planner tool."
          }
        }]}
      />

      <div className="pt-40 pb-24 px-6 md:px-12 bg-white text-neutral-900 font-sans min-h-screen">
        <div className="max-w-5xl mx-auto space-y-16">
          
          {/* Header Block */}
          <div className="space-y-6 text-center border-b border-neutral-150 pb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 rounded-full text-[10px] font-mono text-neutral-600 uppercase tracking-widest">
              <Settings2 className="w-3.5 h-3.5" />
              <span>Interactive Calculator // Custom Quoting Node</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-black leading-none">
              Bespoke Design <br />
              <span className="font-serif italic font-normal text-blue-600">Project Planner</span>
            </h1>

            <p className="text-neutral-500 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
              Design a tailored digital project and preview instant cost calculations, sitemap page scopes, and production timelines. Adjust services below to conform to your exact business metrics.
            </p>
          </div>

          {/* Interactive Calculator Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Controls Column */}
            <div className="lg:col-span-7 bg-neutral-50 border border-neutral-150 rounded-2xl p-8 space-y-8">
              
              {/* Service Selection Checklist */}
              <div className="space-y-4">
                <h3 className="text-xs font-mono uppercase text-neutral-400 font-bold tracking-wider">Step 1: Choose Service Modules</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Design */}
                  <button
                    onClick={() => setDesign(!design)}
                    className={`p-4 border rounded-xl text-left transition-all flex items-start gap-3 ${
                      design 
                        ? 'bg-blue-50/50 border-blue-600' 
                        : 'bg-white border-neutral-200 hover:border-neutral-350'
                    }`}
                  >
                    <CheckSquare className={`w-4 h-4 shrink-0 mt-0.5 ${design ? 'text-blue-600' : 'text-neutral-350'}`} />
                    <div>
                      <div className="text-xs font-bold font-mono uppercase text-black">Web Art &amp; Design</div>
                      <div className="text-[10px] text-neutral-400 font-sans leading-relaxed mt-0.5">Swiss typography, custom layouts &amp; micro-interactions.</div>
                    </div>
                  </button>

                  {/* Branding */}
                  <button
                    onClick={() => setBranding(!branding)}
                    className={`p-4 border rounded-xl text-left transition-all flex items-start gap-3 ${
                      branding 
                        ? 'bg-blue-50/50 border-blue-600' 
                        : 'bg-white border-neutral-200 hover:border-neutral-350'
                    }`}
                  >
                    <CheckSquare className={`w-4 h-4 shrink-0 mt-0.5 ${branding ? 'text-blue-600' : 'text-neutral-350'}`} />
                    <div>
                      <div className="text-xs font-bold font-mono uppercase text-black">Digital Branding</div>
                      <div className="text-[10px] text-neutral-400 font-sans leading-relaxed mt-0.5">Corporate visual guidelines, color sets, guidelines.</div>
                    </div>
                  </button>

                  {/* SEO */}
                  <button
                    onClick={() => setSeo(!seo)}
                    className={`p-4 border rounded-xl text-left transition-all flex items-start gap-3 ${
                      seo 
                        ? 'bg-blue-50/50 border-blue-600' 
                        : 'bg-white border-neutral-200 hover:border-neutral-350'
                    }`}
                  >
                    <CheckSquare className={`w-4 h-4 shrink-0 mt-0.5 ${seo ? 'text-blue-600' : 'text-neutral-350'}`} />
                    <div>
                      <div className="text-xs font-bold font-mono uppercase text-black">Semantic SEO Engine</div>
                      <div className="text-[10px] text-neutral-400 font-sans leading-relaxed mt-0.5">Pre-rendering, rich JSON-LD graphing &amp; sitemaps.</div>
                    </div>
                  </button>

                  {/* Directories */}
                  <button
                    onClick={() => setDirectories(!directories)}
                    className={`p-4 border rounded-xl text-left transition-all flex items-start gap-3 ${
                      directories 
                        ? 'bg-blue-50/50 border-blue-600' 
                        : 'bg-white border-neutral-200 hover:border-neutral-350'
                    }`}
                  >
                    <CheckSquare className={`w-4 h-4 shrink-0 mt-0.5 ${directories ? 'text-blue-600' : 'text-neutral-350'}`} />
                    <div>
                      <div className="text-xs font-bold font-mono uppercase text-black">Index Directories</div>
                      <div className="text-[10px] text-neutral-400 font-sans leading-relaxed mt-0.5">Large-scale semantic glossary pages with linking nodes.</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Slider Node Counts */}
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <h3 className="text-xs font-mono uppercase text-neutral-400 font-bold tracking-wider">Step 2: Sitemap Size (Pages)</h3>
                  <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">{pagesCount} Pages</span>
                </div>

                <div className="space-y-2">
                  <input 
                    type="range" 
                    min="5" 
                    max="1000" 
                    step="5"
                    value={pagesCount}
                    onChange={e => setPagesCount(Number(e.target.value))}
                    className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-neutral-400">
                    <span>5 Minimal Pages</span>
                    <span>100 Standard pages</span>
                    <span>1,000+ Deep Directories</span>
                  </div>
                </div>
              </div>

              {/* Client Brief Entry */}
              <div className="space-y-4 pt-4 border-t border-neutral-200">
                <h3 className="text-xs font-mono uppercase text-neutral-400 font-bold tracking-wider">Step 3: Contact &amp; Summary</h3>
                
                {!plannerSubmitted ? (
                  <form onSubmit={handleSubmitPlanner} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input 
                        type="text" 
                        required
                        placeholder="Your Name"
                        value={clientName}
                        onChange={e => setClientName(e.target.value)}
                        className="bg-white border border-neutral-200 rounded-lg px-4 py-3 text-xs text-black focus:outline-none focus:border-blue-600"
                      />
                      <input 
                        type="email" 
                        required
                        placeholder="Your Email"
                        value={clientEmail}
                        onChange={e => setClientEmail(e.target.value)}
                        className="bg-white border border-neutral-200 rounded-lg px-4 py-3 text-xs text-black focus:outline-none focus:border-blue-600"
                      />
                    </div>
                    <textarea 
                      placeholder="Brief project details, required goals, or timelines..."
                      value={projectBrief}
                      rows={3}
                      onChange={e => setProjectBrief(e.target.value)}
                      className="w-full bg-white border border-neutral-200 rounded-lg px-4 py-3 text-xs text-black focus:outline-none focus:border-blue-600"
                    />

                    <button
                      type="submit"
                      className="w-full py-4 bg-black text-white hover:bg-blue-600 text-xs font-mono font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2"
                    >
                      Lock and Submit Specifications
                      <Send className="w-3.5 h-3.5 text-yellow-400" />
                    </button>
                  </form>
                ) : (
                  <div className="p-6 bg-blue-50 border border-blue-100 rounded-xl text-center text-blue-700 text-xs font-bold space-y-2">
                    <CheckCircle2 className="w-8 h-8 text-blue-600 mx-auto" />
                    <p className="uppercase tracking-wide font-mono">Dossier Locked &amp; Dispatched</p>
                    <p className="text-neutral-500 font-sans font-light normal-case">Thank you {clientName}. We have logged your project configuration to our Central Archive Ledger. Feelize creators will reach out in under 24 business hours.</p>
                  </div>
                )}
              </div>

            </div>

            {/* Right Estimator Receipt Column */}
            <div className="lg:col-span-5 bg-black text-white rounded-2xl p-8 space-y-8 sticky top-36">
              <div className="flex justify-between items-center pb-4 border-b border-neutral-800">
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">PROJECT LEDGER CONFIG</span>
                <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping" />
              </div>

              <div className="space-y-6">
                
                {/* Cost estimation readout */}
                <div className="space-y-1 text-center py-6 bg-neutral-900 border border-neutral-800 rounded-xl">
                  <span className="text-[10px] text-neutral-400 font-mono uppercase font-bold tracking-widest block">ESTIMATED PRODUCTION RATE</span>
                  <div className="text-3xl md:text-4xl font-extrabold text-blue-400 flex items-center justify-center">
                    <DollarSign className="w-6 h-6 shrink-0" />
                    <span>{estimatedCost.toLocaleString()}</span>
                    <span className="text-xs text-neutral-400 font-mono font-normal ml-1">USD</span>
                  </div>
                </div>

                {/* Scope items listing */}
                <div className="space-y-4">
                  <span className="text-[10px] text-neutral-500 uppercase font-bold tracking-wider block">Scope breakdown</span>
                  
                  <div className="space-y-2.5 text-xs font-mono">
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Design Framework:</span>
                      <span>{design ? 'Included' : 'None'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Brand Guidelines:</span>
                      <span>{branding ? 'Included' : 'None'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Crawl Optimization:</span>
                      <span>{seo ? 'Included' : 'None'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Index Expansion:</span>
                      <span>{directories ? 'Included' : 'None'}</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-neutral-800">
                      <span className="text-neutral-400">Sitemap URLs:</span>
                      <span className="text-emerald-400 font-bold">{pagesCount} URLs</span>
                    </div>
                  </div>
                </div>

                {/* Timeline and delivery */}
                <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-xl flex items-center gap-4">
                  <Calendar className="w-5 h-5 text-blue-400 shrink-0" />
                  <div className="space-y-0.5 text-xs">
                    <div className="font-bold text-neutral-400 font-mono uppercase">ESTIMATED PRODUCTION TIME</div>
                    <div className="text-white font-bold">{estimatedTime}</div>
                  </div>
                </div>

                <p className="text-[9px] text-neutral-500 leading-normal font-mono">
                  *This rate represents a preliminary structural estimation based on modern, non-cluttered React &amp; pre-rendering optimization guidelines. Final rates verified manually.
                </p>

              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}
