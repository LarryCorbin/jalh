import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Globe, Bug, ShieldAlert, Cpu, ArrowLeft, ArrowRight, Database, Code, CheckCircle, Terminal, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

export default function RenderingFallbackPage() {
  const [renderedAs, setRenderedAs] = useState<'JS_CLIENT' | 'STATIC_SERVER'>('JS_CLIENT');

  return (
    <>
      <SEO 
        title="Server-Side Pre-rendering & HTML Fallbacks" 
        description="Verify pre-rendering fallback status. Learn how our prerender.js framework serves pure HTML static documents to lightweight crawlers in JALH's third layer."
        keywords="server-side pre-rendering, static HTML fallback, prerender.js, SEO performance, speed optimization, indexation triggers"
        schema={[{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Prerendering Fallback Protocol",
          "description": "Enterprise pre-rendering engine verification for client-side JavaScript applications, certified for crawlers discovery.",
          "isPartOf": {
            "@type": "Service",
            "name": "Semantic SEO & Crawl Engineering Services",
            "url": "https://jalh.com/services/semantic-seo-domination"
          }
        }]}
      />

      <div className="pt-40 pb-24 px-6 md:px-12 bg-[#05070B] text-gray-200 min-h-screen font-mono">
        <div className="max-w-5xl mx-auto space-y-16">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-[10px] text-gray-500 uppercase tracking-widest">
            <Link to="/services/semantic-seo-domination" className="hover:text-emerald-400 transition-colors">Semantic SEO</Link>
            <span>/</span>
            <span className="text-gray-400">Deep Diagnostics</span>
            <span>/</span>
            <span className="text-emerald-400 font-bold">Rendering Fallback (L3)</span>
          </div>

          {/* Hero Header */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded text-[9px] text-emerald-400 uppercase tracking-widest font-bold">
              <Globe className="w-3.5 h-3.5" />
              <span>LAYER 3 PROTOCOL // PRE-RENDERING ENGINE</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-light text-white uppercase tracking-tight leading-none">
              Rendering Fallback <br />
              <span className="font-semibold text-emerald-400">Crawl Optimization</span>
            </h1>

            <p className="text-gray-400 text-xs md:text-sm font-sans font-light max-w-2xl leading-relaxed">
              Standard client-side compiled Javascript platforms require massive compute cycles for search bots to render correctly. To ensure instant indexation, our custom backend intercept serves lightweight static pre-rendered HTML to identified bot user-agents while serving high-interactivity React code to actual humans.
            </p>
          </div>

          {/* Interactive Rendering Comparator */}
          <div className="bg-gray-950 border border-gray-850 rounded-2xl p-6 md:p-8 space-y-6">
            <div className="flex flex-col md:flex-row justify-between md:items-end gap-4 border-b border-gray-900 pb-4">
              <div className="space-y-1">
                <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">Tactile Rendering Intercept Comparator</div>
                <h3 className="text-lg text-white">Bot vs. Human Presentation Engine</h3>
              </div>
              <p className="text-gray-500 text-[10px] font-sans font-light max-w-xs">
                Toggle the view-type below to visually contrast what a human web-visitor experiences versus the clean pre-rendered HTML document served to the Google spider.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
              
              {/* Selector */}
              <div className="md:col-span-5 flex flex-col justify-between space-y-6 text-xs">
                <div className="space-y-4">
                  <span className="text-[10px] text-gray-500 uppercase font-mono block font-bold">User-Agent Profile</span>
                  
                  <div className="space-y-2">
                    <button
                      onClick={() => setRenderedAs('JS_CLIENT')}
                      className={`w-full p-4 border rounded-xl text-left transition-all font-mono flex justify-between items-center ${
                        renderedAs === 'JS_CLIENT' 
                          ? 'bg-gray-900 border-emerald-400 text-white' 
                          : 'bg-gray-950 border-gray-850 text-gray-400 hover:border-gray-700'
                      }`}
                    >
                      <div>
                        <div className="font-bold">Human Visitor</div>
                        <div className="text-[8px] text-gray-500 font-normal mt-0.5">Mozilla/5.0 Client (React SPA)</div>
                      </div>
                      <CheckCircle className={`w-4 h-4 ${renderedAs === 'JS_CLIENT' ? 'text-emerald-400' : 'text-gray-800'}`} />
                    </button>

                    <button
                      onClick={() => setRenderedAs('STATIC_SERVER')}
                      className={`w-full p-4 border rounded-xl text-left transition-all font-mono flex justify-between items-center ${
                        renderedAs === 'STATIC_SERVER' 
                          ? 'bg-gray-900 border-emerald-400 text-white' 
                          : 'bg-gray-950 border-gray-850 text-gray-400 hover:border-gray-700'
                      }`}
                    >
                      <div>
                        <div className="font-bold">Googlebot Crawler</div>
                        <div className="text-[8px] text-emerald-400 font-normal mt-0.5">Googlebot-Image/2.1 (Static HTML)</div>
                      </div>
                      <CheckCircle className={`w-4 h-4 ${renderedAs === 'STATIC_SERVER' ? 'text-emerald-400' : 'text-gray-800'}`} />
                    </button>
                  </div>
                </div>

                <div className="p-4 bg-gray-900/40 border border-gray-850 rounded-xl space-y-1.5 text-[10px] font-sans">
                  <span className="text-gray-500 font-mono text-[9px] uppercase font-bold block">Engine Speed Status:</span>
                  <div className="flex justify-between font-mono text-[10px]">
                    <span className="text-gray-400">Time-To-First-Byte:</span>
                    <span className="text-emerald-400 font-bold">
                      {renderedAs === 'STATIC_SERVER' ? '12ms (Extreme)' : '180ms (Standard)'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Console display */}
              <div className="md:col-span-7 bg-[#030509] border border-gray-900 rounded-xl p-5 min-h-[220px] flex flex-col justify-between relative overflow-hidden font-mono text-[10px]">
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-[9px] border-b border-gray-900 pb-2 text-gray-500">
                    <span>DOM_REPRESENTATION // {renderedAs}</span>
                    <span className="text-emerald-400">ACTIVE</span>
                  </div>
                  
                  {renderedAs === 'JS_CLIENT' ? (
                    <div className="text-blue-400 space-y-1 p-2 bg-gray-950/60 rounded">
                      <div>&lt;div id="root"&gt;</div>
                      <div className="pl-3 text-gray-500">// React Client-side Hydration Engine</div>
                      <div className="pl-3">&lt;script src="/src/main.tsx" type="module"&gt;&lt;/script&gt;</div>
                      <div>&lt;/div&gt;</div>
                    </div>
                  ) : (
                    <div className="text-emerald-400 space-y-1 p-2 bg-gray-950/60 rounded max-h-36 overflow-y-auto">
                      <div>&lt;!DOCTYPE html&gt;</div>
                      <div>&lt;html lang="en"&gt;</div>
                      <div className="pl-2 text-emerald-600">&lt;head&gt;&lt;title&gt;JALH.com Index&lt;/title&gt;&lt;/head&gt;</div>
                      <div className="pl-2">&lt;body&gt;</div>
                      <div className="pl-4 text-white">&lt;h1&gt;Kinetic Habit Extraction Ledger&lt;/h1&gt;</div>
                      <div className="pl-4">&lt;p&gt;This index documents core biometric data logs...&lt;/p&gt;</div>
                      <div className="pl-2">&lt;/body&gt;</div>
                      <div>&lt;/html&gt;</div>
                    </div>
                  )}
                </div>
                <div className="text-right text-[8px] text-gray-600 mt-2">
                  Static fallbacks reduce crawling costs to near-zero.
                </div>
              </div>

            </div>
          </div>

          {/* Technical Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs font-sans">
            <div className="p-6 bg-gray-950/40 border border-gray-900 rounded-xl space-y-4">
              <h4 className="text-sm font-semibold font-mono text-white uppercase tracking-wider flex items-center gap-2">
                <Code className="w-4 h-4 text-emerald-400" />
                Cohesive Crawl Integration
              </h4>
              <p className="text-gray-400 leading-relaxed font-light">
                Our pre-rendering engine is built in tandem with other parts of our system. While this fallback handles lightweight document loading, metadata definitions are handled by our <Link to="/services/semantic-seo-domination/schema-graph" className="text-emerald-400 underline hover:text-emerald-350">Schema Graph Validator</Link> and indexation parameters are mapped via the <Link to="/services/semantic-seo-domination/deep-crawl" className="text-emerald-400 underline hover:text-emerald-350">Deep Crawl Diagnostics</Link> gateway.
              </p>
              <p className="text-gray-400 leading-relaxed font-light">
                These elements integrate cleanly to direct search robots towards our core databases, like the <Link to="/infrastructure" className="text-emerald-400 underline hover:text-emerald-350 font-mono">Infrastructure Nodes</Link> or the <Link to="/archive" className="text-emerald-400 underline hover:text-emerald-350">Central Archive</Link>.
              </p>
            </div>

            <div className="p-6 bg-gray-950/40 border border-gray-900 rounded-xl space-y-4">
              <h4 className="text-sm font-semibold font-mono text-white uppercase tracking-wider flex items-center gap-2">
                <Database className="w-4 h-4 text-emerald-400" />
                Active Redirect Schema
              </h4>
              <div className="space-y-2 text-[11px] font-mono">
                <div className="flex justify-between py-1.5 border-b border-gray-900">
                  <span className="text-gray-500">PARENT:</span>
                  <Link to="/services/semantic-seo-domination" className="text-emerald-400 uppercase hover:underline">Semantic SEO</Link>
                </div>
                <div className="flex justify-between py-1.5 border-b border-gray-900">
                  <span className="text-gray-500">SIBLING A:</span>
                  <Link to="/services/semantic-seo-domination/deep-crawl" className="text-emerald-400 uppercase hover:underline">Crawl Diagnostics</Link>
                </div>
                <div className="flex justify-between py-1.5 border-b border-gray-900">
                  <span className="text-gray-500">SIBLING B:</span>
                  <Link to="/services/semantic-seo-domination/schema-graph" className="text-emerald-400 uppercase hover:underline">Schema Graph</Link>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-gray-500">EXPERIMENTS:</span>
                  <Link to="/lab" className="text-emerald-400 uppercase hover:underline">Research Lab</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Sub-index Selector */}
          <div className="border-t border-gray-800 pt-10">
            <h3 className="text-sm font-semibold uppercase text-white font-mono tracking-widest mb-6">Semantic SEO Index Navigation</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
              <Link 
                to="/services/semantic-seo-domination/deep-crawl"
                className="p-4 rounded-xl border border-gray-850 bg-gray-900/30 hover:border-emerald-500/50 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <Bug className="w-4 h-4 text-gray-400 group-hover:text-emerald-400" />
                  <div>
                    <div className="text-gray-300 group-hover:text-white">Crawl Diagnostics</div>
                    <div className="text-[9px] text-gray-500">Layer 3 Protocol // Ready</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-emerald-400 transform group-hover:translate-x-1 transition-transform" />
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
                className="p-4 rounded-xl border border-emerald-400 bg-gray-950 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <Globe className="w-4 h-4 text-emerald-400" />
                  <div>
                    <div className="text-white font-bold">Prerender Fallback</div>
                    <div className="text-[9px] text-emerald-400">Layer 3 HTML // Active</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-emerald-400 transform group-hover:translate-x-1 transition-transform" />
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
