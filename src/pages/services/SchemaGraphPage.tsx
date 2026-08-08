import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Share2, Bug, FileJson, ArrowLeft, ArrowRight, Database, Code, CheckCircle, Globe, Terminal, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

export default function SchemaGraphPage() {
  const [selectedEntity, setSelectedEntity] = useState<'Organization' | 'DefinedTermSet' | 'ScholarlyArticle'>('DefinedTermSet');

  const schemas = {
    Organization: `{
  "@context": "https://schema.org",
  "@type": "ResearchOrganization",
  "name": "JALH Research Node",
  "founder": "Member Zero",
  "url": "https://jalh.com"
}`,
    DefinedTermSet: `{
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  "name": "Kinetic Habit Extraction Index",
  "numberOfTerms": 120,
  "publisher": "JALH"
}`,
    ScholarlyArticle: `{
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  "headline": "Aesthetic Stabilization Principles",
  "author": "Member Zero",
  "datePublished": "2026-07-02"
}`
  };

  return (
    <>
      <SEO 
        title="Schema Graph Validator & Entity Relationships" 
        description="Verify entity structural schemas. Ensure complete crawlers indexation with JSON-LD metadata and deep cross-referencing in the third layer of JALH's semantic SEO suite."
        keywords="schema graph, JSON-LD, structured metadata, search console validation, schema.org, entity relationships, semantic search"
        schema={[{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Schema Graph Validator",
          "description": "Validation protocol for structured JSON-LD graphs and semantic entity clusters under Feelize and JALH frameworks.",
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
            <span className="text-emerald-400 font-bold">Schema Graph (L3)</span>
          </div>

          {/* Hero Header */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded text-[9px] text-emerald-400 uppercase tracking-widest font-bold">
              <FileJson className="w-3.5 h-3.5" />
              <span>LAYER 3 PROTOCOL // ENTITY SYSTEM</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-light text-white uppercase tracking-tight leading-none">
              Schema Graph <br />
              <span className="font-semibold text-emerald-400">Entity Relationships</span>
            </h1>

            <p className="text-gray-400 text-xs md:text-sm font-sans font-light max-w-2xl leading-relaxed">
              Standard metadata is no longer sufficient for modern search algorithm parsing. The Google Knowledge Graph thrives on explicit entity relationships. This page validates the <code>Schema.org</code> structured graphs that establish absolute, unassailable authority for all JALH nodes.
            </p>
          </div>

          {/* Interactive Schema Builder Sandbox */}
          <div className="bg-gray-950 border border-gray-850 rounded-2xl p-6 md:p-8 space-y-6">
            <div className="flex flex-col md:flex-row justify-between md:items-end gap-4 border-b border-gray-900 pb-4">
              <div className="space-y-1">
                <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">Tactile Schema Graph Builder</div>
                <h3 className="text-lg text-white">JSON-LD Metadata Playground</h3>
              </div>
              <p className="text-gray-500 text-[10px] font-sans font-light max-w-xs">
                Select an entity preset to dynamically construct and inspect valid JSON-LD code blocks ready for instant crawler injection.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
              
              {/* Select Preset */}
              <div className="md:col-span-5 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <span className="text-[10px] text-gray-500 uppercase font-mono block font-bold">Select Entity Type</span>
                  
                  <div className="space-y-2">
                    {['Organization', 'DefinedTermSet', 'ScholarlyArticle'].map(type => (
                      <button
                        key={type}
                        onClick={() => setSelectedEntity(type as any)}
                        className={`w-full p-3.5 border rounded-xl text-left transition-all text-xs font-mono flex justify-between items-center ${
                          selectedEntity === type 
                            ? 'bg-gray-900 border-emerald-400 text-white' 
                            : 'bg-gray-950 border-gray-850 text-gray-400 hover:border-gray-700'
                        }`}
                      >
                        <span>{type}</span>
                        <CheckCircle className={`w-4 h-4 ${selectedEntity === type ? 'text-emerald-400' : 'text-gray-800'}`} />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-gray-900/40 border border-gray-850 rounded-xl space-y-1.5 text-[10px] font-sans">
                  <span className="text-gray-500 font-mono text-[9px] uppercase font-bold block">Status Checklist:</span>
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle className="w-3 h-3" />
                    <span>Schema.org Standards Compliant</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle className="w-3 h-3" />
                    <span>Rich Snippets Enabled</span>
                  </div>
                </div>
              </div>

              {/* Code Editor */}
              <div className="md:col-span-7 bg-[#030509] border border-gray-900 rounded-xl p-5 min-h-[220px] flex flex-col justify-between relative overflow-hidden">
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-[9px] border-b border-gray-900 pb-2 text-gray-500">
                    <span>STRUCTURED_LD_GENERATOR.JS</span>
                    <span className="text-emerald-400">VALID</span>
                  </div>
                  <pre className="text-emerald-400 font-mono text-[10px] leading-relaxed overflow-x-auto select-all p-2 bg-gray-950/60 rounded">
                    {schemas[selectedEntity]}
                  </pre>
                </div>
                <div className="text-right text-[8px] text-gray-600 mt-2">
                  Double-click code to select and copy template
                </div>
              </div>

            </div>
          </div>

          {/* Sibling navigation index */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs font-sans">
            <div className="p-6 bg-gray-950/40 border border-gray-900 rounded-xl space-y-4">
              <h4 className="text-sm font-semibold font-mono text-white uppercase tracking-wider flex items-center gap-2">
                <Code className="w-4 h-4 text-emerald-400" />
                Interlinked Entity Mapping
              </h4>
              <p className="text-gray-400 leading-relaxed font-light">
                To establish stable context, we reference related resources explicitly. Search engine bots crawling this metadata schema are instantly routed to parallel systems such as the <Link to="/services/semantic-seo-domination/deep-crawl" className="text-emerald-400 underline hover:text-emerald-350 font-mono">Deep Crawl Diagnostics</Link> page and the <Link to="/services/semantic-seo-domination/rendering-fallback" className="text-emerald-400 underline hover:text-emerald-350 font-mono">Pre-rendering Fallback</Link> mechanism.
              </p>
              <p className="text-gray-400 leading-relaxed font-light">
                Further links guide crawlers to deep domain assets such as the <Link to="/domain-gateway" className="text-emerald-400 underline hover:text-emerald-350">Domain Gateway</Link> or chronological telemetry streams in the <Link to="/logs" className="text-emerald-400 underline hover:text-emerald-350 font-mono">Logs Node</Link>.
              </p>
            </div>

            <div className="p-6 bg-gray-950/40 border border-gray-900 rounded-xl space-y-4">
              <h4 className="text-sm font-semibold font-mono text-white uppercase tracking-wider flex items-center gap-2">
                <Database className="w-4 h-4 text-emerald-400" />
                Active Schema Registry
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
                  <Link to="/services/semantic-seo-domination/rendering-fallback" className="text-emerald-400 uppercase hover:underline">Rendering Fallback</Link>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-gray-500">LEGAL COMPLIANCE:</span>
                  <Link to="/legal" className="text-emerald-400 uppercase hover:underline">Compliance Index</Link>
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
                className="p-4 rounded-xl border border-emerald-400 bg-gray-950 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <Share2 className="w-4 h-4 text-emerald-400" />
                  <div>
                    <div className="text-white font-bold">Schema Graph</div>
                    <div className="text-[9px] text-emerald-400">Layer 3 Graph // Active</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-emerald-400 transform group-hover:translate-x-1 transition-transform" />
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
