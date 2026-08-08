import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Award, Shield, Sparkles, ArrowLeft, ArrowRight, BookOpen, Compass, Landmark, Eye, ShieldCheck, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

export default function BrandSealPage() {
  const [stampColor, setStampColor] = useState<'emerald' | 'blue' | 'black'>('emerald');

  const stampStyles = {
    emerald: 'border-emerald-500 text-emerald-600 bg-emerald-500/5',
    blue: 'border-blue-500 text-blue-600 bg-blue-500/5',
    black: 'border-black text-neutral-800 bg-neutral-900/5'
  };

  return (
    <>
      <SEO 
        title="Brand Authority Seal & Verification Standards" 
        description="Verify brand seal compliance status. Explore our unreserved legal authority and luxury verification seals in JALH's third brand layer."
        keywords="brand authority seal, verification standards, luxury design compliance, brand certification, feelize brand, brand trust"
        schema={[{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Brand Authority Seal Verification Protocol",
          "description": "Scientific certification parameters validating visual and technical standards of executive digital identity portfolios under JALH systems.",
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
            <span className="text-blue-600 font-bold">Brand Authority Seal (L3)</span>
          </div>

          {/* Hero Header */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-neutral-100 border border-neutral-200 rounded text-[9px] text-neutral-600 uppercase tracking-widest font-mono font-bold">
              <Award className="w-3.5 h-3.5 text-blue-600" />
              <span>LAYER 3 PROTOCOL // VERIFICATION SEAL</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-black leading-none uppercase">
              Brand Authority Seal <br />
              <span className="font-normal italic font-serif text-blue-600 lowercase">professional certification standards</span>
            </h1>

            <p className="text-neutral-500 text-xs md:text-sm font-light max-w-2xl leading-relaxed">
              Genuine authority must be verifiable. We issue dynamic <strong>Brand Authority Seals</strong> to partner organizations that meet our rigorous Swiss grid alignment, pre-rendering latency metrics, and schema graphing guidelines.
            </p>
          </div>

          {/* Interactive Seal Sandbox */}
          <div className="bg-neutral-100/50 border border-neutral-200 rounded-2xl p-6 md:p-8 space-y-6">
            <div className="flex flex-col md:flex-row justify-between md:items-end gap-4 border-b border-neutral-200 pb-4">
              <div className="space-y-1">
                <div className="text-[10px] text-blue-600 font-bold uppercase tracking-wider font-mono">Dynamic Brand Trust Seal</div>
                <h3 className="text-lg text-neutral-900 font-serif italic">Verification Certification Mockup</h3>
              </div>
              <p className="text-neutral-500 text-[10px] font-light max-w-xs">
                Toggle seal colors below to inspect how verified brand badges adapt to match high-art, light-mode Swiss templates or dark corporate environments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Controls */}
              <div className="md:col-span-5 space-y-6 text-xs font-mono">
                <div className="space-y-4">
                  <span className="text-[10px] text-neutral-400 uppercase font-mono block font-bold">Seal Tone Preset</span>
                  
                  <div className="space-y-2">
                    {['emerald', 'blue', 'black'].map((color: any) => (
                      <button
                        key={color}
                        onClick={() => setStampColor(color)}
                        className={`w-full p-4 border rounded-xl text-left transition-all uppercase flex items-center justify-between ${
                          stampColor === color 
                            ? 'bg-white border-black shadow-sm text-black' 
                            : 'bg-neutral-50 border-neutral-200 text-neutral-500 hover:border-neutral-300'
                        }`}
                      >
                        <span>{color} STAMP</span>
                        <CheckCircle className={`w-4 h-4 ${stampColor === color ? 'text-blue-600' : 'text-neutral-200'}`} />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-white border border-neutral-200 rounded-xl space-y-2 text-[10px] font-sans">
                  <div className="flex justify-between">
                    <span className="text-neutral-500">INTEGRATION STATUS:</span>
                    <span className="text-emerald-600 font-mono font-bold">VERIFIED OK // 100%</span>
                  </div>
                </div>
              </div>

              {/* Graphic Display */}
              <div className="md:col-span-7 h-56 bg-white border border-neutral-200 rounded-xl relative overflow-hidden flex items-center justify-center p-8">
                
                {/* Stamp visual */}
                <motion.div
                  key={stampColor}
                  initial={{ scale: 0.8, rotate: -15, opacity: 0 }}
                  animate={{ scale: 1, rotate: -5, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  className={`w-44 p-6 border-4 border-dashed rounded-full text-center flex flex-col justify-center items-center font-mono select-none ${stampStyles[stampColor]}`}
                >
                  <ShieldCheck className="w-8 h-8 mb-1.5" />
                  <span className="text-[10px] font-bold tracking-widest uppercase leading-none">FEELIZE LABS</span>
                  <span className="text-[7px] tracking-widest uppercase mt-1 leading-none">VERIFIED PARTNER</span>
                  <span className="text-[5px] text-neutral-400 uppercase mt-1.5">SHA_256 // CERTIFIED</span>
                </motion.div>

                <div className="absolute bottom-2 right-3 text-[7px] font-mono text-neutral-400">
                  SYSTEM VERSION // JALH_V2.0
                </div>
              </div>

            </div>
          </div>

          {/* Sibling navigation and links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs text-neutral-600 font-sans">
            <div className="p-6 bg-neutral-50 border border-neutral-200 rounded-xl space-y-4">
              <h4 className="text-sm font-semibold font-mono text-black uppercase tracking-wider flex items-center gap-2">
                <Award className="w-4 h-4 text-blue-600" />
                Interlinked Authority Protocol
              </h4>
              <p className="leading-relaxed font-light">
                Our verification stamp relies on compliance metrics mapped here, but they are fully integrated with identity separation guidelines in our <Link to="/services/digital-identity-stabilization/persona-masking" className="text-blue-600 underline hover:text-blue-700">Persona Masking Protocols</Link> and layout standards in the <Link to="/services/digital-identity-stabilization/aesthetic-harmony" className="text-blue-600 underline hover:text-blue-700">Aesthetic Harmony Ledger</Link> module.
              </p>
              <p className="leading-relaxed font-light">
                To examine compliance verification credentials on our system, navigate directly to the central <Link to="/verification" className="text-blue-600 underline hover:text-blue-700">Feelize Verification letter</Link> page or the dynamic <Link to="/lab" className="text-blue-600 underline hover:text-blue-700 font-mono">Lab Experiment Portal</Link>.
              </p>
            </div>

            <div className="p-6 bg-neutral-50 border border-neutral-200 rounded-xl space-y-4">
              <h4 className="text-sm font-semibold font-mono text-black uppercase tracking-wider flex items-center gap-2">
                <Landmark className="w-4 h-4 text-blue-600" />
                Identity Certification Map
              </h4>
              <div className="space-y-2 text-[11px] font-mono">
                <div className="flex justify-between py-1.5 border-b border-neutral-200">
                  <span className="text-neutral-400">PARENT NODE:</span>
                  <Link to="/services/digital-identity-stabilization" className="text-blue-600 uppercase hover:underline">Brand Identity</Link>
                </div>
                <div className="flex justify-between py-1.5 border-b border-neutral-200">
                  <span className="text-neutral-400">SIBLING A:</span>
                  <Link to="/services/digital-identity-stabilization/persona-masking" className="text-blue-600 uppercase hover:underline">Persona Masking</Link>
                </div>
                <div className="flex justify-between py-1.5 border-b border-neutral-200">
                  <span className="text-neutral-400">SIBLING B:</span>
                  <Link to="/services/digital-identity-stabilization/aesthetic-harmony" className="text-blue-600 uppercase hover:underline font-bold">Aesthetic Harmony</Link>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-neutral-400">CENTRAL LOGS:</span>
                  <Link to="/logs" className="text-blue-600 uppercase hover:underline">Activity Logs</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Sub-index Selector */}
          <div className="border-t border-neutral-200 pt-10">
            <h3 className="text-sm font-semibold uppercase text-black font-mono tracking-widest mb-6">Digital Identity Index Navigation</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
              <Link 
                to="/services/digital-identity-stabilization/persona-masking"
                className="p-4 rounded-xl border border-neutral-200 bg-neutral-50 hover:border-blue-500/50 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <Shield className="w-4 h-4 text-neutral-400 group-hover:text-blue-600" />
                  <div>
                    <div className="text-neutral-700 group-hover:text-black">Persona Masking</div>
                    <div className="text-[9px] text-neutral-500">Layer 3 Masks // Ready</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-blue-600 transform group-hover:translate-x-1 transition-transform" />
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
                className="p-4 rounded-xl border border-blue-500 bg-white shadow-sm flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <Award className="w-4 h-4 text-blue-600" />
                  <div>
                    <div className="text-black font-bold">Brand Seal</div>
                    <div className="text-[9px] text-blue-600">Layer 3 Certification // Active</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-blue-600 transform group-hover:translate-x-1 transition-transform" />
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
