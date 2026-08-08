import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Shield, Palette, ArrowLeft, ArrowRight, BookOpen, Compass, Award, Landmark, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

export default function AestheticHarmonyPage() {
  const [accentSaturation, setAccentSaturation] = useState(60);

  return (
    <>
      <SEO 
        title="Aesthetic Harmony Ledger & Chromatic Balance" 
        description="Verify chromatic stabilization curves. Explore Swiss color palettes, minimalist contrast standards, and layout harmony vectors in JALH's third brand layer."
        keywords="aesthetic harmony, chromatic balance, color stabilization, swiss colors, visual standards, brand design"
        schema={[{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Aesthetic Harmony Specification",
          "description": "Geometric and chromatic standards for corporate brand protection across browser media.",
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
            <span className="text-blue-600 font-bold">Aesthetic Harmony (L3)</span>
          </div>

          {/* Hero Header */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-neutral-100 border border-neutral-200 rounded text-[9px] text-neutral-600 uppercase tracking-widest font-mono font-bold">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>LAYER 3 PROTOCOL // CHROMATIC SYSTEM</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-black leading-none uppercase">
              Aesthetic Harmony <br />
              <span className="font-normal italic font-serif text-blue-600 lowercase">chromatic balancing ledger</span>
            </h1>

            <p className="text-neutral-500 text-xs md:text-sm font-light max-w-2xl leading-relaxed">
              Excessive visual clutter is the hallmark of low-quality communication. Our Feelize Design Group curates strict chromatic guidelines, ensuring your brand elements speak with calm, sophisticated confidence.
            </p>
          </div>

          {/* Interactive Color Balancing Sandbox */}
          <div className="bg-neutral-100/50 border border-neutral-200 rounded-2xl p-6 md:p-8 space-y-6">
            <div className="flex flex-col md:flex-row justify-between md:items-end gap-4 border-b border-neutral-200 pb-4">
              <div className="space-y-1">
                <div className="text-[10px] text-blue-600 font-bold uppercase tracking-wider font-mono">Chromatic Saturation Tuner</div>
                <h3 className="text-lg text-neutral-900 font-serif italic">Aesthetic Intensity Modulator</h3>
              </div>
              <p className="text-neutral-500 text-[10px] font-light max-w-xs">
                Modify accent saturation variables below to observe how the visual focal points adjust from aggressive marketing styles to muted, Swiss-inspired premium hues.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Slider Controls */}
              <div className="md:col-span-5 space-y-6 text-xs font-mono">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-neutral-500 uppercase">Accent Saturation (s):</span>
                    <span className="text-blue-600 font-bold">{accentSaturation}%</span>
                  </div>
                  <input 
                    type="range"
                    min="10"
                    max="100"
                    value={accentSaturation}
                    onChange={e => setAccentSaturation(Number(e.target.value))}
                    className="w-full h-1 bg-neutral-200 rounded appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-between text-[8px] text-neutral-400">
                    <span>Muted (10%)</span>
                    <span>Neon Flare (100%)</span>
                  </div>
                </div>

                <div className="p-4 bg-white border border-neutral-200 rounded-xl space-y-1 text-[10px] font-sans">
                  <span className="text-neutral-500 font-mono text-[9px] uppercase font-bold block">Contrast Safety:</span>
                  <div className={`font-mono font-bold ${accentSaturation > 80 ? 'text-amber-600' : 'text-emerald-600'}`}>
                    {accentSaturation > 80 ? 'HIGH SATURATION ALERT // AGGRESSIVE' : 'STABILIZED LAB CURVES // COMFORTABLE'}
                  </div>
                </div>
              </div>

              {/* Graphic Display */}
              <div className="md:col-span-7 h-56 bg-white border border-neutral-200 rounded-xl relative overflow-hidden flex items-center justify-center p-8 transition-colors duration-300">
                
                {/* Custom Color block */}
                <div className="space-y-4 text-center z-10">
                  <div className="w-16 h-16 rounded-full mx-auto shadow-xl transition-all duration-300 border border-neutral-200"
                       style={{ backgroundColor: `hsl(220, ${accentSaturation}%, 50%)` }} />
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest font-mono text-neutral-850">Chromatic Vector</h4>
                    <span className="text-[9px] text-neutral-400 font-mono">HSL(220, {accentSaturation}%, 50%)</span>
                  </div>
                </div>

                <div className="absolute bottom-2 right-3 text-[7px] font-mono text-neutral-400">
                  AESTHETIC MATRIX ENFORCED // OK
                </div>
              </div>

            </div>
          </div>

          {/* Sibling navigation and links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs text-neutral-600 font-sans">
            <div className="p-6 bg-neutral-50 border border-neutral-200 rounded-xl space-y-4">
              <h4 className="text-sm font-semibold font-mono text-black uppercase tracking-wider flex items-center gap-2">
                <Palette className="w-4 h-4 text-blue-600" />
                Interlinked Palette System
              </h4>
              <p className="leading-relaxed font-light">
                Aesthetic harmony coordinates colors and layout geometry, but they are fully integrated with executive separation models in the <Link to="/services/digital-identity-stabilization/persona-masking" className="text-blue-600 underline hover:text-blue-700">Persona Masking protocols</Link> and compliance parameters of the <Link to="/services/digital-identity-stabilization/brand-seal" className="text-blue-600 underline hover:text-blue-700">Brand Authority Seal</Link> index.
              </p>
              <p className="leading-relaxed font-light">
                To examine other design guidelines in JALH, navigate directly to our <Link to="/category/aesthetic" className="text-blue-600 underline hover:text-blue-700 font-mono">Aesthetic Catalog</Link> or consult research pages in the <Link to="/lab" className="text-blue-600 underline hover:text-blue-700">Central Lab Node</Link>.
              </p>
            </div>

            <div className="p-6 bg-neutral-50 border border-neutral-200 rounded-xl space-y-4">
              <h4 className="text-sm font-semibold font-mono text-black uppercase tracking-wider flex items-center gap-2">
                <Landmark className="w-4 h-4 text-blue-600" />
                Aesthetic Blueprint Map
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
                  <Link to="/services/digital-identity-stabilization/brand-seal" className="text-blue-600 uppercase hover:underline font-bold">Brand Seal</Link>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-neutral-400">EXPERIMENT LAB:</span>
                  <Link to="/lab" className="text-blue-600 uppercase hover:underline font-mono">Active Lab</Link>
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
                className="p-4 rounded-xl border border-blue-500 bg-white shadow-sm flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <Palette className="w-4 h-4 text-blue-600" />
                  <div>
                    <div className="text-black font-bold">Aesthetic Harmony</div>
                    <div className="text-[9px] text-blue-600">Layer 3 System // Active</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-blue-600 transform group-hover:translate-x-1 transition-transform" />
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
