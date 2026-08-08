import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Shield, Sparkles, BookOpen, Compass, Award, Eye, Landmark, ArrowRight, Palette, CheckCircle } from 'lucide-react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import aestheticSculptureBalance from '../../assets/images/aesthetic_sculpture_balance_1783050596149.jpg';
import { LazyImage } from '../../components/LazyImage';

interface ThemeSystem {
  name: string;
  primaryBg: string;
  textClass: string;
  accentClass: string;
  badgeClass: string;
  borderClass: string;
  hexCode: string;
}

export default function DigitalIdentityPage() {
  // Theme selector state
  const [selectedTheme, setSelectedTheme] = useState<string>('swiss');

  const brandingThemes: Record<string, ThemeSystem> = {
    swiss: {
      name: 'Swiss Alabaster (Default)',
      primaryBg: 'bg-[#FAF9F6]',
      textClass: 'text-neutral-900',
      accentClass: 'text-neutral-800',
      badgeClass: 'bg-neutral-100 text-neutral-600 border-neutral-200',
      borderClass: 'border-neutral-200 hover:border-black',
      hexCode: '#FAF9F6'
    },
    obsidian: {
      name: 'Cyber Obsidian (Dark Premium)',
      primaryBg: 'bg-[#0E0F12]',
      textClass: 'text-neutral-100',
      accentClass: 'text-blue-400',
      badgeClass: 'bg-blue-950/40 text-blue-300 border-blue-900/30',
      borderClass: 'border-neutral-800 hover:border-blue-500/50',
      hexCode: '#0E0F12'
    },
    sage: {
      name: 'Muted Forest Sage',
      primaryBg: 'bg-[#E3E8E2]',
      textClass: 'text-neutral-850',
      accentClass: 'text-[#485C4B]',
      badgeClass: 'bg-[#CBD3C8] text-[#344437] border-[#A8B4A5]',
      borderClass: 'border-[#BDC9BB] hover:border-[#344437]',
      hexCode: '#E3E8E2'
    }
  };

  const activeTheme = brandingThemes[selectedTheme] || brandingThemes.swiss;

  return (
    <>
      <SEO 
        title="Custom Digital Brand Identity & Aesthetic Stabilization" 
        description="Craft an unshakeable digital footprint with JALH's luxury design principles. We specialize in Swiss typography pairings, minimalist color harmony, and high-art spacing."
        keywords="digital brand identity, custom brand system, aesthetic stabilization, luxury web design, swiss typography, minimalist design, feelize brand, brand authority"
        schema={[{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Luxury Digital Brand Identity & Aesthetic Stabilization",
          "provider": {
            "@type": "Organization",
            "name": "Feelize Design Group & JALH",
            "url": "https://jalh.com"
          },
          "serviceType": "Brand Strategy and Corporate Visual Systems",
          "description": "Curating high-end visual systems, corporate design guidelines, custom logos, typographical hierarchies, and offline brand alignment matrices.",
          "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "price": "Custom Quoted"
          }
        }]}
      />

      <div className={`pt-40 pb-24 px-6 md:px-12 transition-all duration-700 min-h-screen font-sans ${activeTheme.primaryBg} ${activeTheme.textClass}`}>
        <div className="max-w-6xl mx-auto space-y-28">
          
          {/* Header Block with Grid Overlay */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Text */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className={`inline-flex items-center gap-2 px-3 py-1 border rounded-full text-[10px] font-mono uppercase tracking-widest ${activeTheme.badgeClass}`}>
                <Shield className="w-3.5 h-3.5" />
                <span>AESTHETIC PROTOCOL // AUTHENTIC AUTHORITY</span>
              </div>

              <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight text-black leading-none">
                Digital Brand <br />
                <span className="font-normal italic font-serif text-blue-600">Identity Stabilization</span>
              </h1>

              <p className="text-neutral-500 text-base md:text-lg font-light leading-relaxed max-w-xl">
                Brand identity is the ultimate container of customer trust. We craft high-art corporate guidelines, Swiss-inspired typographic systems, and minimal visual grids that radiate stability, unreserved authority, and luxury craftsmanship.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link 
                  to="/funnel/project-planner"
                  className="px-8 py-4 bg-black text-white hover:bg-neutral-800 text-xs font-mono font-bold uppercase tracking-wider rounded-xl transition-all"
                >
                  Launch Brand Project Planner
                </Link>
                <Link 
                  to="/feelize-web-design"
                  className="px-8 py-4 bg-white text-neutral-800 border border-neutral-300 hover:bg-neutral-50 text-xs font-mono font-bold uppercase tracking-wider rounded-xl transition-all"
                >
                  Explore Partner Seal
                </Link>
              </div>
            </div>

            {/* Right Column Overlapping Image block */}
            <div className="lg:col-span-5 relative h-[450px] w-full flex items-center justify-center">
              
              {/* Thin structured geometric guidelines */}
              <div className="absolute top-8 left-4 w-11/12 h-[340px] border border-neutral-200/60 rounded-3xl p-6 flex flex-col justify-between font-mono text-[9px] text-neutral-400 select-none pointer-events-none">
                <div className="flex justify-between items-center border-b border-neutral-100 pb-2">
                  <span>RATIO // 1.618 GOLDEN</span>
                  <span>ALIGN // SYSTEM</span>
                </div>
                <div className="flex justify-between">
                  <span>SCALE: 1:1.618</span>
                  <span>AXIS: Y-STABILIZED</span>
                </div>
              </div>

              {/* Central Premium Image Block */}
              <div className="relative w-10/12 z-10 transition-transform duration-500 hover:scale-[1.03]">
                <div className="absolute inset-0 bg-neutral-300 rounded-2xl blur-xl opacity-20 scale-95" />
                <LazyImage 
                  src={aestheticSculptureBalance}
                  alt="Marble Symmetrical Sculpture" 
                  className="rounded-2xl shadow-2xl border border-neutral-200/80 w-full aspect-[4/3] rotate-[-3deg] transition-all hover:rotate-0 duration-500"
                />
              </div>

              {/* Luxury overlapping text layer */}
              <div className="absolute bottom-6 left-2 z-20 bg-white/90 backdrop-blur-md text-neutral-900 border border-neutral-200/80 rounded-2xl p-4 shadow-xl max-w-[220px] font-serif italic text-xs leading-relaxed rotate-[2deg]">
                "Prudence and visual calm project absolute professional compliance across target environments."
                <span className="block font-mono not-italic text-[9px] text-neutral-400 uppercase tracking-widest mt-2">MEMBER ZERO // DIRECTIVE</span>
              </div>

            </div>

          </div>

          {/* Interactive Luxury Contrast Coordinator Widget */}
          <div className="bg-neutral-50/50 border border-neutral-200/80 rounded-3xl p-8 md:p-12 space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-neutral-200/60 pb-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-neutral-100 border border-neutral-200 rounded text-[9px] font-mono text-neutral-500 uppercase font-bold">
                  <Palette className="w-3 h-3" />
                  <span>Interactive Brand System Sandbox</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-neutral-900 font-serif italic">Color stabilization matrices</h3>
              </div>
              <p className="text-neutral-500 text-xs font-sans font-light max-w-sm">
                Toggle different aesthetic coordination settings below to dynamically alter the color scheme of our branding layout preview.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Controller */}
              <div className="lg:col-span-5 space-y-4">
                <span className="text-[10px] text-neutral-400 uppercase font-mono block font-bold tracking-widest">Select Palette Preset</span>
                
                <div className="space-y-3">
                  {Object.entries(brandingThemes).map(([key, value]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedTheme(key)}
                      className={`w-full p-4 border rounded-xl text-left transition-all flex items-center justify-between ${
                        selectedTheme === key 
                          ? 'bg-white border-black shadow-sm' 
                          : 'bg-neutral-50 border-neutral-200 hover:border-neutral-350'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span 
                          className="w-5 h-5 rounded-full border border-neutral-300"
                          style={{ backgroundColor: value.hexCode }} 
                        />
                        <div>
                          <div className="text-xs font-bold text-black uppercase tracking-wider">{value.name}</div>
                          <div className="text-[9px] text-neutral-400 font-mono mt-0.5">{value.hexCode} preset</div>
                        </div>
                      </div>
                      <CheckCircle className={`w-4 h-4 shrink-0 ${selectedTheme === key ? 'text-blue-600' : 'text-neutral-200'}`} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Aesthetic Card Preview */}
              <div className="lg:col-span-7 h-56 bg-white border border-neutral-200 rounded-2xl relative overflow-hidden p-8 flex items-center justify-center transition-all duration-500">
                <div className="absolute inset-0 grid grid-cols-6 grid-rows-3 opacity-5 pointer-events-none font-mono text-[7px]">
                  {Array.from({ length: 18 }).map((_, i) => (
                    <div key={i} className="border-r border-b border-black p-1">{i * 10}</div>
                  ))}
                </div>

                {/* Simulated luxury product box */}
                <div className="space-y-3 text-center z-10 max-w-xs">
                  <div className="text-[8px] font-mono tracking-widest text-neutral-400 uppercase">JALH BRAND LEDGER</div>
                  <h4 className="text-xl font-bold font-serif italic text-black leading-none">Swiss Grid System</h4>
                  <p className="text-neutral-500 text-[10px] leading-relaxed">
                    Designed with absolute visual alignment, mathematical grids, and high-performance pre-rendering.
                  </p>
                  <div className="flex justify-center gap-2 pt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-200" />
                  </div>
                </div>

                <div className="absolute bottom-2 right-3 text-[7px] font-mono text-neutral-400">
                  SYSTEM VERSION // JALH_V2.0
                </div>
              </div>

            </div>
          </div>

          {/* Key Principles Grid */}
          <div className="space-y-12">
            <h2 className="text-2xl md:text-3xl font-light tracking-tight font-serif italic text-black">
              The Four Pillars of Aesthetic Stability
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
              <div className="p-8 bg-white border border-neutral-200 rounded-3xl space-y-4 hover:border-black hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 bg-neutral-50 rounded-xl flex items-center justify-center border border-neutral-200">
                  <BookOpen className="w-5 h-5 text-neutral-800" />
                </div>
                <h3 className="text-lg font-bold text-black font-mono uppercase tracking-tight">1. Swiss Typographic Systems</h3>
                <p className="text-neutral-500 leading-relaxed font-light text-xs md:text-sm">
                  Typography is the visual sound of your message. We pair high-contrast sans-serif displays with clean monospace indices or elegant serifs to construct beautiful, highly scannable reading hierarchies.
                </p>
              </div>

              <div className="p-8 bg-white border border-neutral-200 rounded-3xl space-y-4 hover:border-black hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 bg-neutral-50 rounded-xl flex items-center justify-center border border-neutral-200">
                  <Eye className="w-5 h-5 text-neutral-800" />
                </div>
                <h3 className="text-lg font-bold text-black font-mono uppercase tracking-tight">2. Elimination of Visual Noise</h3>
                <p className="text-neutral-500 leading-relaxed font-light text-xs md:text-sm">
                  Most modern sites are cluttered with cheap animations, gradients, and cookie-cutter badges. Our system focuses on absolute visual honesty—restricting your palette to 3-4 core tones and utilizing generous, breathable negative space.
                </p>
              </div>

              <div className="p-8 bg-white border border-neutral-200 rounded-3xl space-y-4 hover:border-black hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 bg-neutral-50 rounded-xl flex items-center justify-center border border-neutral-200">
                  <Compass className="w-5 h-5 text-neutral-800" />
                </div>
                <h3 className="text-lg font-bold text-black font-mono uppercase tracking-tight">3. Contextual Grid Alignment</h3>
                <p className="text-neutral-500 leading-relaxed font-light text-xs md:text-sm">
                  We configure responsive layouts on a rigid 12-column alignment standard. Everything aligns mathematically, providing a subconscious feeling of structure, safety, and reliability to visitors.
                </p>
              </div>

              <div className="p-8 bg-white border border-neutral-200 rounded-3xl space-y-4 hover:border-black hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 bg-neutral-50 rounded-xl flex items-center justify-center border border-neutral-200">
                  <Landmark className="w-5 h-5 text-neutral-800" />
                </div>
                <h3 className="text-lg font-bold text-black font-mono uppercase tracking-tight">4. Permanent Semantic Authority</h3>
                <p className="text-neutral-500 leading-relaxed font-light text-xs md:text-sm">
                  We integrate complete metadata markup systems to link your brand directly to registered business profiles, ensuring that your company retains authentic and unassailable authority on search platforms.
                </p>
              </div>
            </div>
          </div>

          {/* Layer 3 Sub-Index Navigation */}
          <div className="space-y-8 border-t border-neutral-200 pt-16">
            <div className="text-center md:text-left space-y-3">
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-neutral-100 border border-neutral-200 rounded text-[9px] font-mono text-neutral-500 uppercase font-bold">
                <Award className="w-3 h-3" />
                <span>Executive Brand Protection // L3 Gateway</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 font-mono uppercase">Browse Brand Modules</h2>
              <p className="text-neutral-500 text-sm md:text-base max-w-2xl font-light">
                Inspect specific verification systems, masking guidelines, and color balances that safeguard corporate presence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs font-normal">
              <Link 
                to="/services/digital-identity-stabilization/persona-masking"
                className="p-6 rounded-2xl border border-neutral-200 bg-neutral-50 hover:border-blue-500/50 flex flex-col justify-between h-48 group transition-all bg-white"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-black uppercase">Persona Masking</h3>
                    <p className="text-[10px] text-neutral-500 font-sans font-light mt-1.5 leading-relaxed">
                      Calibrate data masking systems and protect private identities behind authenticated brand context schemas.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-blue-650 text-[10px] uppercase font-bold pt-2 border-t border-neutral-200">
                  <span>Enter Security</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              <Link 
                to="/services/digital-identity-stabilization/aesthetic-harmony"
                className="p-6 rounded-2xl border border-neutral-200 bg-neutral-50 hover:border-blue-500/50 flex flex-col justify-between h-48 group transition-all bg-white"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 bg-emerald-50 border border-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-black uppercase">Aesthetic Harmony</h3>
                    <p className="text-[10px] text-neutral-500 font-sans font-light mt-1.5 leading-relaxed">
                      Observe design balance variables and visual standards that retain maximum focus and engagement.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-blue-650 text-[10px] uppercase font-bold pt-2 border-t border-neutral-200">
                  <span>Open Ledger</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              <Link 
                to="/services/digital-identity-stabilization/brand-seal"
                className="p-6 rounded-2xl border border-neutral-200 bg-neutral-50 hover:border-blue-500/50 flex flex-col justify-between h-48 group transition-all bg-white"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 bg-indigo-50 border border-indigo-100 rounded-xl flex items-center justify-center text-indigo-600">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-black uppercase">Brand Authority Seal</h3>
                    <p className="text-[10px] text-neutral-500 font-sans font-light mt-1.5 leading-relaxed">
                      Deploy certified brand authority and trust seals verifying code quality and accessibility standards.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-blue-650 text-[10px] uppercase font-bold pt-2 border-t border-neutral-200">
                  <span>Verify Stamp</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>

          {/* Interactive Philosophy Statement */}
          <div className="p-8 md:p-12 bg-neutral-100 rounded-3xl border border-neutral-200 flex flex-col md:flex-row gap-8 items-center justify-between">
            <div className="space-y-4 max-w-lg">
              <h3 className="text-2xl text-black font-semibold font-serif italic">Curate Your Corporate Blueprint</h3>
              <p className="text-neutral-600 text-sm leading-relaxed font-light">
                Looking to elevate your branding matrix to match the prestigious aesthetics of the JALH ecosystem? Launch our interactive project planner to custom-quote a brand stabilization package.
              </p>
            </div>
            
            <Link 
              to="/funnel/project-planner"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white hover:bg-neutral-800 text-xs font-mono font-bold uppercase tracking-wider rounded-xl transition-all shrink-0"
            >
              Configure Specifications
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
