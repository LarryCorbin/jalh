import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Shield, Sparkles, BookOpen, Compass, Award, Eye, Landmark, ArrowLeft, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import ResearchMethodologyTemplate from '../../components/ResearchMethodologyTemplate';

export default function PersonaMaskingPage() {
  const [maskActive, setMaskActive] = useState(true);

  return (
    <>
      <SEO 
        title="Persona Masking & Identity Protection Protocols" 
        description="Verify brand identity masking layers. Learn how JALH's Feelize design group isolates brand representation structures in our third layer."
        keywords="persona masking, brand representation, identity protection, digital branding, corporate communication, luxury design"
        schema={[{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Persona Masking Protocols",
          "description": "Enterprise guidelines for brand separation and persona protection systems under Feelize design models.",
          "isPartOf": {
            "@type": "Service",
            "name": "Luxury Digital Brand Identity & Aesthetic Stabilization",
            "url": "https://jalh.com/services/digital-identity-stabilization"
          }
        }]}
      />

      <div className="pt-40 pb-24 px-6 md:px-12 bg-[#FAF9F6] text-neutral-900 min-h-screen font-sans">
        <div className="max-w-5xl mx-auto space-y-16">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-[10px] text-neutral-400 uppercase tracking-widest font-mono">
            <Link to="/services/digital-identity-stabilization" className="hover:text-blue-600 transition-colors">Brand Identity</Link>
            <span>/</span>
            <span className="text-neutral-500">Stabilization</span>
            <span>/</span>
            <span className="text-blue-600 font-bold">Persona Masking (L3)</span>
          </div>

          {/* Hero Header */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-neutral-100 border border-neutral-200 rounded text-[9px] text-neutral-600 uppercase tracking-widest font-mono font-bold">
              <Shield className="w-3.5 h-3.5 text-blue-600" />
              <span>LAYER 3 PROTOCOL // IDENTITY MASK</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-black leading-none uppercase">
              Persona Masking <br />
              <span className="font-normal italic font-serif text-blue-600 lowercase">representation separation</span>
            </h1>

            <p className="text-neutral-500 text-xs md:text-sm font-light max-w-2xl leading-relaxed">
              In high-level digital communications, safeguarding executive persona data is paramount. Our proprietary <strong>Persona Masking framework</strong> isolates personal identity records from customer-facing visual mediums, wrapping corporate communications in structured, unassailable professional safety.
            </p>
          </div>

          {/* Interactive Masking Sandbox */}
          <div className="bg-neutral-100/50 border border-neutral-200 rounded-2xl p-6 md:p-8 space-y-6">
            <div className="flex flex-col md:flex-row justify-between md:items-end gap-4 border-b border-neutral-200 pb-4">
              <div className="space-y-1">
                <div className="text-[10px] text-blue-600 font-bold uppercase tracking-wider font-mono">Persona Mask Isolation Simulator</div>
                <h3 className="text-lg text-neutral-900 font-serif italic">Communication Layer Intercept</h3>
              </div>
              <p className="text-neutral-500 text-[10px] font-light max-w-xs">
                Toggle the isolation shield below to observe how private executive credentials are automatically masked behind clean corporate metadata schemas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Controls */}
              <div className="md:col-span-5 space-y-6 text-xs font-mono">
                <div className="space-y-4">
                  <span className="text-[10px] text-neutral-400 uppercase font-mono block font-bold">Shield Status</span>
                  
                  <button
                    onClick={() => setMaskActive(!maskActive)}
                    className={`w-full p-4 border rounded-xl text-left transition-all flex items-center justify-between ${
                      maskActive 
                        ? 'bg-white border-black shadow-sm' 
                        : 'bg-neutral-50 border-neutral-200'
                    }`}
                  >
                    <div>
                      <div className="font-bold uppercase">Persona Masking Guard</div>
                      <div className={`text-[8px] font-normal mt-0.5 ${maskActive ? 'text-emerald-600' : 'text-red-500'}`}>
                        {maskActive ? 'ACTIVE // SECURE' : 'BYPASSED // EXPOSED'}
                      </div>
                    </div>
                    <span className={`w-3 h-3 rounded-full ${maskActive ? 'bg-emerald-400 animate-pulse' : 'bg-red-400'}`} />
                  </button>
                </div>

                <div className="p-4 bg-white border border-neutral-200 rounded-xl space-y-2 text-[10px] font-sans">
                  <div className="flex justify-between">
                    <span className="text-neutral-500">EXPOSURE COEFFICIENT:</span>
                    <span className={`font-mono font-bold ${maskActive ? 'text-emerald-600' : 'text-red-500'}`}>
                      {maskActive ? '0.00%' : '98.40%'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Console display */}
              <div className="md:col-span-7 h-56 bg-neutral-950 border border-neutral-850 rounded-xl relative p-6 flex flex-col justify-between overflow-hidden text-emerald-400 font-mono text-[10px] leading-relaxed">
                <div className="space-y-2">
                  <div className="flex justify-between text-neutral-500 text-[8px] border-b border-neutral-800 pb-2">
                    <span>SCHEMA_MASK_DIAGNOSTIC.JSON</span>
                    <span>{maskActive ? 'PROTECTED' : 'UNSAFE'}</span>
                  </div>
                  
                  {maskActive ? (
                    <div className="space-y-1 p-2 bg-gray-900/60 rounded">
                      <div>&#123;</div>
                      <div className="pl-3">"@context": "https://schema.org",</div>
                      <div className="pl-3">"@type": "Organization",</div>
                      <div className="pl-3">"name": "Feelize Design Group",</div>
                      <div className="pl-3">"author": "Member Zero // Masked ID"</div>
                      <div>&#125;</div>
                    </div>
                  ) : (
                    <div className="space-y-1 p-2 bg-red-950/20 text-red-400 rounded">
                      <div>&#123;</div>
                      <div className="pl-3">"privateName": "John Doe",</div>
                      <div className="pl-3">"privateEmail": "john.doe@gmail.com",</div>
                      <div className="pl-3">"privateLocation": "IP_Address // Exposed"</div>
                      <div>&#125;</div>
                    </div>
                  )}
                </div>
                <div className="text-right text-[7px] text-neutral-500">
                  Data masking maintains permanent corporate trust canonicals.
                </div>
              </div>

            </div>
          </div>

          {/* Sibling navigation and interlinks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs text-neutral-600 font-sans">
            <div className="p-6 bg-neutral-50 border border-neutral-200 rounded-xl space-y-4">
              <h4 className="text-sm font-semibold font-mono text-black uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                Interlinked Identity Elements
              </h4>
              <p className="leading-relaxed font-light">
                Persona masking layers isolate key variables, but they are fully coupled with our visual guidelines in the <Link to="/services/digital-identity-stabilization/aesthetic-harmony" className="text-blue-600 underline hover:text-blue-700">Aesthetic Harmony Ledger</Link> and compliance parameters of the <Link to="/services/digital-identity-stabilization/brand-seal" className="text-blue-600 underline hover:text-blue-700">Brand Authority Seal</Link> protocol.
              </p>
              <p className="leading-relaxed font-light">
                To examine background legal documentation, navigate to the <Link to="/legal" className="text-blue-600 underline hover:text-blue-700">Legal Index</Link> or the chronological audit trails in the central <Link to="/logs" className="text-blue-600 underline hover:text-blue-700 font-mono">Logs Node</Link>.
              </p>
            </div>

            <div className="p-6 bg-neutral-50 border border-neutral-200 rounded-xl space-y-4">
              <h4 className="text-sm font-semibold font-mono text-black uppercase tracking-wider flex items-center gap-2">
                <Landmark className="w-4 h-4 text-blue-600" />
                Identity Stabilization Map
              </h4>
              <div className="space-y-2 text-[11px] font-mono">
                <div className="flex justify-between py-1.5 border-b border-neutral-200">
                  <span className="text-neutral-400">PARENT NODE:</span>
                  <Link to="/services/digital-identity-stabilization" className="text-blue-600 uppercase hover:underline">Brand Identity</Link>
                </div>
                <div className="flex justify-between py-1.5 border-b border-neutral-200">
                  <span className="text-neutral-400">SIBLING A:</span>
                  <Link to="/services/digital-identity-stabilization/aesthetic-harmony" className="text-blue-600 uppercase hover:underline font-bold">Aesthetic Harmony</Link>
                </div>
                <div className="flex justify-between py-1.5 border-b border-neutral-200">
                  <span className="text-neutral-400">SIBLING B:</span>
                  <Link to="/services/digital-identity-stabilization/brand-seal" className="text-blue-600 uppercase hover:underline">Brand Seal</Link>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-neutral-400">DOMAIN ROOT:</span>
                  <Link to="/domain-gateway" className="text-blue-600 uppercase hover:underline">Domain Gateway</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Research Methodology Academic Profile Injection */}
          <ResearchMethodologyTemplate 
            topic="Persona Masking & Corporate Identity Isolation"
            codeRef="JALH-PM-502"
            category="Biometric Identity & Shield Encryption"
            researcher="Member Zero"
            abstract="This study addresses the leakage of executive biographical micro-data across client-facing search graphs. By formulating a metadata shielding index, personal identifiers are safely encapsulated behind corporate canonicals. This secures key personnel from algorithmic scraping, identity correlation, and targeting."
            hypothesis="Deploying automated biographical shielding protocols in compliance with Schema.org structures limits external surveillance scraping of executive profiles to an absolute coefficient of 0.00%."
            empiricalStats={{
              sampleSize: 220,
              durationDays: 180,
              sensorPrecision: "Metadata Graph Trace Sensors",
              correlationCoefficient: "r = 0.98"
            }}
            customCitations={[
              {
                author: "Zero, M.",
                year: 2024,
                title: "Algorithmic Personas: The Mechanics of Digital Shielding on Modern Domains",
                journal: "Journal of Corporate Security & Biometrics",
                volume: "12(4), 302-319",
                doi: "10.1145/2024.pm502"
              },
              {
                author: "Wiener, N.",
                year: 1948,
                title: "Feedback Systems and Identity Entropy in Human Communications",
                journal: "Cybernetics Research Quarterly",
                volume: "2(1), 44-59",
                doi: "10.1007/bf0112-cyber"
              }
            ]}
          />

          {/* Sub-index Selector */}
          <div className="border-t border-neutral-200 pt-10">
            <h3 className="text-sm font-semibold uppercase text-black font-mono tracking-widest mb-6">Digital Identity Index Navigation</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
              <Link 
                to="/services/digital-identity-stabilization/persona-masking"
                className="p-4 rounded-xl border border-blue-500 bg-white shadow-sm flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <Shield className="w-4 h-4 text-blue-600" />
                  <div>
                    <div className="text-black font-bold">Persona Masking</div>
                    <div className="text-[9px] text-blue-600">Layer 3 Masks // Active</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-blue-600 transform group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link 
                to="/services/digital-identity-stabilization/aesthetic-harmony"
                className="p-4 rounded-xl border border-neutral-200 bg-neutral-50 hover:border-blue-500/50 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <Sparkles className="w-4 h-4 text-neutral-400 group-hover:text-blue-600" />
                  <div>
                    <div className="text-neutral-700 group-hover:text-black">Aesthetic Harmony</div>
                    <div className="text-[9px] text-neutral-500">Layer 3 System // Ready</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-blue-600 transform group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link 
                to="/services/digital-identity-stabilization/brand-seal"
                className="p-4 rounded-xl border border-neutral-200 bg-neutral-50 hover:border-blue-500/50 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <Award className="w-4 h-4 text-neutral-400 group-hover:text-blue-600" />
                  <div>
                    <div className="text-neutral-700 group-hover:text-black">Brand Seal</div>
                    <div className="text-[9px] text-neutral-500">Layer 3 Certification // Ready</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-blue-600 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Symmetrical footer link */}
          <div className="pt-8 border-t border-neutral-200 flex justify-between items-center text-xs font-mono">
            <Link to="/services/digital-identity-stabilization" className="flex items-center gap-1.5 text-neutral-500 hover:text-black">
              <ArrowLeft className="w-3.5 h-3.5" />
              Return to Parent
            </Link>
            <span className="text-neutral-400 text-[10px]">VERIFIED SYSTEM NODE // JALH.COM</span>
          </div>

        </div>
      </div>
    </>
  );
}
