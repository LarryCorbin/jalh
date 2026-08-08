import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ExternalLink, 
  Heart, 
  Sparkles, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Maximize2, 
  RotateCw,
  Eye,
  Info,
  HelpCircle
} from 'lucide-react';
import SEO from '../components/SEO';
import { LazyImage } from '../components/LazyImage';

// Import our beautifully generated artistic logos
import feelizeCrystalLogo from '../assets/images/feelize_crystal_logo_1783200751836.jpg';
import feelizeCircuitLogo from '../assets/images/feelize_circuit_logo_1783200763156.jpg';
import feelizeFlatLogo from '../assets/images/feelize_flat_logo_1783200772587.jpg';

type ThemeMode = 'crystal' | 'circuit' | 'minimal';

export default function FeelizePage() {
  const [activeTheme, setActiveTheme] = useState<ThemeMode>('crystal');
  const [rotation, setRotation] = useState<number>(0);
  const [interactiveScale, setInteractiveScale] = useState<number>(1);
  const [customFeedback, setCustomFeedback] = useState<string>("");

  // Rotate decorative items dynamically on scroll
  useEffect(() => {
    const handleScroll = () => {
      setRotation(window.scrollY * 0.1);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const themeConfig = {
    crystal: {
      bgClass: "bg-neutral-50 text-neutral-900 transition-all duration-1000",
      cardClass: "bg-white/80 backdrop-blur-xl border border-neutral-200/50 shadow-2xl shadow-neutral-100/40",
      accentBorder: "border-blue-500",
      pillClass: "bg-blue-50 text-blue-700 border-blue-100/60",
      glowBlob: "bg-blue-400 opacity-10 blur-[100px]",
      logoImage: feelizeCrystalLogo,
      themeTitle: "The Crystal Soul",
      themeDesc: "Organic glass refraction, chromatic aberration, and iridescent light-fields."
    },
    circuit: {
      bgClass: "bg-[#05070f] text-neutral-300 transition-all duration-1000",
      cardClass: "bg-neutral-950/70 backdrop-blur-xl border border-blue-900/40 shadow-2xl shadow-blue-950/30",
      accentBorder: "border-cyan-500",
      pillClass: "bg-cyan-950/60 text-cyan-400 border-cyan-800/40",
      glowBlob: "bg-cyan-500 opacity-[0.08] blur-[100px]",
      logoImage: feelizeCircuitLogo,
      themeTitle: "The Silicon Core",
      themeDesc: "Hyper-optimized logic pathways, glowing cyber traces, and technical excellence."
    },
    minimal: {
      bgClass: "bg-white text-neutral-950 transition-all duration-1000",
      cardClass: "bg-white border-2 border-neutral-950 shadow-[10px_10px_0px_rgba(0,0,0,1)]",
      accentBorder: "border-neutral-950",
      pillClass: "bg-neutral-100 text-neutral-900 border-neutral-300",
      glowBlob: "bg-neutral-200 opacity-30 blur-[60px]",
      logoImage: feelizeFlatLogo,
      themeTitle: "The Electric Void",
      themeDesc: "Stark Swiss typography, high-contrast structural Cuts, and absolute pure form."
    }
  };

  const currentTheme = themeConfig[activeTheme];

  const handleInteractivePrism = () => {
    setInteractiveScale(1.1);
    setCustomFeedback("Prism dispersion calibrated successfully.");
    setTimeout(() => {
      setInteractiveScale(1);
      setCustomFeedback("");
    }, 1500);
  };

  return (
    <>
      <SEO 
        title="My Personal Testimony of Feelize | JALH Archive Web Design" 
        description="A genuine, personal testimonial and open verification letter written by Member Zero, praising the world-class digital design, programming, and SEO achievements of Feelize."
        type="article"
        schema={[{
          "@context": "https://schema.org",
          "@type": "Review",
          "itemReviewed": {
            "@type": "LocalBusiness",
            "name": "Feelize",
            "url": "https://feelize.com",
            "image": "https://media.licdn.com/dms/image/v2/D560BAQEJ3AoC-4950w/company-logo_100_100/B56Z5SzdSdHwAI-/0/1779505681753/feelize_logo?e=1782950400&v=beta&t=eOKkdY6jAol4uFx7_aWH16yhYsSpHHlYoOjULTFIBC8"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Member Zero",
            "url": "https://jalh.com/personnel"
          },
          "reviewBody": "I am writing this letter in absolute, unreserved celebration of the design architects and engineers at Feelize. What Feelize has delivered across our expansive digital operations is nothing short of breathtaking on all hundreds of networks and websites."
        }]}
      />

      <div className={`relative min-h-screen pt-40 pb-32 px-4 sm:px-6 md:px-12 overflow-hidden ${currentTheme.bgClass}`}>
        
        {/* BACKGROUND ARTISTIC GLOW BLOBS & GRIDS */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div 
            className={`absolute top-20 left-1/4 w-[60rem] h-[60rem] rounded-full transition-all duration-1000 ${currentTheme.glowBlob}`} 
          />
          <div 
            className={`absolute bottom-10 right-1/4 w-[50rem] h-[50rem] rounded-full transition-all duration-1000 ${currentTheme.glowBlob}`} 
          />
          
          {/* Subtle grid pattern changing with theme */}
          <div 
            className={`absolute inset-0 transition-opacity duration-1000 ${activeTheme === 'circuit' ? 'opacity-[0.05]' : 'opacity-[0.03]'}`}
            style={{ 
              backgroundImage: activeTheme === 'circuit' 
                ? 'linear-gradient(to right, #00f2fe 1px, transparent 1px), linear-gradient(to bottom, #00f2fe 1px, transparent 1px)'
                : 'radial-gradient(circle, currentColor 1px, transparent 1px)',
              backgroundSize: activeTheme === 'circuit' ? '40px 40px' : '80px 80px'
            }} 
          />
        </div>

        {/* ART EXHIBIT CONTROL PANEL & LOGO MATRIX */}
        <div className="relative max-w-5xl mx-auto mb-16 space-y-8">
          <div className="text-center space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-900 text-neutral-300 rounded-full text-[9px] font-mono uppercase tracking-[0.2em] border border-neutral-800">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              Interactive Brand Exhibit Node // feelize.00
            </span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight uppercase leading-none">
              The Three Dimensions of Feelize Design
            </h2>
            <p className="text-xs text-neutral-500 font-light max-w-xl mx-auto leading-relaxed">
              Experience Feelize not merely as a logo, but as a living design philosophy. Select a state vector below to transform the structural aesthetic of the entire archival letter.
            </p>
          </div>

          {/* Exhibition Theme Toggle Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {(['crystal', 'circuit', 'minimal'] as ThemeMode[]).map((theme) => {
              const tc = themeConfig[theme];
              const isSelected = activeTheme === theme;
              return (
                <button
                  key={theme}
                  onClick={() => setActiveTheme(theme)}
                  className={`p-5 rounded-2xl text-left transition-all duration-500 flex flex-col justify-between h-48 group relative overflow-hidden border ${
                    isSelected 
                      ? 'bg-neutral-900 border-neutral-800 text-white shadow-xl scale-102 z-10' 
                      : 'bg-white/40 hover:bg-white border-neutral-200 text-neutral-700 hover:shadow-md'
                  }`}
                >
                  <div className="space-y-2 relative z-10">
                    <span className={`text-[9px] font-mono uppercase tracking-widest font-bold ${isSelected ? 'text-blue-400' : 'text-neutral-400'}`}>
                      Dimension {theme === 'crystal' ? '01' : theme === 'circuit' ? '02' : '03'}
                    </span>
                    <h3 className="text-base font-black uppercase tracking-tight">{tc.themeTitle}</h3>
                    <p className={`text-xs leading-relaxed font-light ${isSelected ? 'text-neutral-400' : 'text-neutral-500'}`}>
                      {tc.themeDesc}
                    </p>
                  </div>

                  {/* Tiny preview of the logo floating in card */}
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 opacity-20 group-hover:opacity-40 transition-all duration-500 group-hover:scale-110">
                    <LazyImage src={tc.logoImage} 
                      alt="JALH Scientific Archive - Tc Illustration" 
                      title="JALH framework visualization mapping tc"
                      className="w-full h-full rounded-2xl" 
                    />
                  </div>

                  {isSelected && (
                    <motion.div 
                      layoutId="activeThemeBorder" 
                      className="absolute inset-0 border-2 border-blue-500 rounded-2xl pointer-events-none" 
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* INTERACTIVE HERO EXHIBIT DISPLAY */}
        <div className="relative max-w-5xl mx-auto mb-20">
          <div className="p-8 md:p-12 bg-neutral-900 text-white rounded-[2.5rem] border border-neutral-800 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center gap-12">
            
            {/* Dark background grids */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '16px 16px' }} />

            {/* Kinetic decorative floating coordinates */}
            <div 
              style={{ transform: `rotate(${rotation}deg)` }} 
              className="absolute -top-12 -left-12 text-[10vw] font-black text-white/[0.01] uppercase tracking-tighter select-none font-mono pointer-events-none"
            >
              feelize
            </div>

            {/* LOGO HERO - STUNNING VISUAL ART CONTAINER */}
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center space-y-6 relative">
              <motion.div 
                animate={{ scale: interactiveScale }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-[2rem] overflow-hidden shadow-2xl bg-neutral-950 border border-neutral-800 flex items-center justify-center group cursor-pointer"
                onClick={handleInteractivePrism}
              >
                {/* Image display */}
                <LazyImage 
                  src={currentTheme.logoImage} 
                  alt={`Feelize ${currentTheme.themeTitle}`} 
                  className="w-full h-full select-none transition-transform duration-700 group-hover:scale-105"
                  placeholderColor="bg-neutral-950"
                />

                {/* Cyber Scanner overlay in Circuit mode */}
                {activeTheme === 'circuit' && (
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent animate-[pulse_2s_infinite] pointer-events-none" />
                )}

                {/* Glass sheen overlay in Crystal mode */}
                {activeTheme === 'crystal' && (
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent mix-blend-overlay pointer-events-none" />
                )}

                {/* Interactive Action Prompt */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Calibrate Spectrum</span>
                  </div>
                </div>
              </motion.div>

              <div className="text-center font-mono">
                <span className="text-[10px] text-neutral-500 uppercase tracking-widest block">Rendering Core Engine</span>
                <span className="text-xs text-white uppercase font-bold tracking-widest mt-1 block">
                  {currentTheme.themeTitle} // Active Node
                </span>
                
                {customFeedback && (
                  <motion.div 
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-[10px] text-green-400 uppercase tracking-wider font-bold mt-2"
                  >
                    {customFeedback}
                  </motion.div>
                )}
              </div>
            </div>

            {/* ART CONCEPT EXPOSITION */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950/60 text-blue-400 rounded-full text-[10px] font-mono uppercase tracking-wider border border-blue-900/40">
                <Cpu className="w-3.5 h-3.5" />
                <span>Exhibition Statement</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight leading-none text-white">
                Designing with Heart, Soul &amp; Pixels.
              </h3>
              
              <p className="text-neutral-400 text-sm font-light leading-relaxed">
                "Our designs are not static grids; they are organic, dynamic architectures designed to speak with calm confidence. Every curve is tuned to biological pacing, and every pixel is placed with intentional visual rhythm. Web design is the intersection of high engineering and visceral visual fine art."
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-850 font-mono text-[10px]">
                <div className="space-y-1">
                  <span className="text-neutral-500 block">RENDER VECTOR:</span>
                  <span className="text-white font-bold block uppercase">{activeTheme}_engine_01</span>
                </div>
                <div className="space-y-1">
                  <span className="text-neutral-500 block">DENSITY COEFFICIENT:</span>
                  <span className="text-white font-bold block">14.05 G_INDEX</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PRIMARY TESTIMONIAL LETTER CARD */}
        <motion.div 
          key={activeTheme}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`relative max-w-4xl mx-auto p-8 sm:p-12 md:p-16 rounded-[2.5rem] transition-all duration-1000 ${currentTheme.cardClass}`}
        >
          {/* Subtle Accent corner bar */}
          <div className={`absolute top-0 left-12 w-24 h-1.5 transition-colors duration-1000 ${
            activeTheme === 'crystal' ? 'bg-blue-500' : activeTheme === 'circuit' ? 'bg-cyan-400' : 'bg-neutral-950'
          }`} />

          {/* Letter Header */}
          <div className="border-b border-neutral-200/50 dark:border-neutral-800 pb-8 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-4">
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider border ${currentTheme.pillClass}`}>
                  <span>Node Document 088 // Verified Testimonial</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-black tracking-tight uppercase leading-none">
                  An Open Letter <br />
                  Regarding <span className={`underline decoration-4 underline-offset-4 transition-colors duration-1000 ${
                    activeTheme === 'crystal' ? 'decoration-blue-500' : activeTheme === 'circuit' ? 'decoration-cyan-400' : 'decoration-neutral-950'
                  }`}>Feelize</span> Web Design
                </h1>
              </div>
              
              {/* Feelize Logo Integration for Semantic SEO */}
              <div className={`flex items-center gap-3.5 p-3.5 rounded-2xl border transition-all duration-1000 w-fit shrink-0 self-start md:self-center ${
                activeTheme === 'minimal' 
                  ? 'border-neutral-950 bg-white' 
                  : activeTheme === 'circuit'
                    ? 'border-blue-900 bg-neutral-950'
                    : 'border-neutral-200 bg-white shadow-sm'
              }`}>
                {/* Immersive micro-logo frame */}
                <div className="shrink-0 flex items-center relative w-12 h-12 rounded-xl overflow-hidden bg-neutral-950">
                  <LazyImage 
                    src={currentTheme.logoImage} 
                    alt="Feelize Logo" 
                    className="w-full h-full"
                    placeholderColor="bg-neutral-950"
                  />
                </div>
                <div className="text-left">
                  <div className={`text-[9px] font-mono font-bold uppercase tracking-wider leading-none mb-1 ${
                    activeTheme === 'circuit' ? 'text-cyan-400' : 'text-blue-600'
                  }`}>
                    Creative Partner
                  </div>
                  <div className={`text-xs font-extrabold font-sans leading-snug ${activeTheme === 'circuit' ? 'text-white' : 'text-neutral-900'}`}>
                    Feelize Corp
                  </div>
                  <a 
                    href="https://feelize.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[9px] font-mono text-neutral-400 hover:text-blue-500 transition-colors block mt-0.5"
                  >
                    feelize.com
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
              <div>From: Member Zero</div>
              <div>To: The Web Community</div>
              <div>Date: June 2026</div>
            </div>
          </div>

          {/* Authentic Testimonial Body */}
          <div className="prose prose-lg leading-relaxed space-y-8 text-sm sm:text-base md:text-lg pt-8 font-sans">
            <p className="first-line:uppercase first-line:tracking-widest first-letter:text-6xl first-letter:font-black first-letter:text-blue-500 first-letter:mr-3 first-letter:float-left">
              I am writing this letter in absolute, unreserved celebration of the design architects and engineers at <strong>Feelize</strong>. Under typical circumstances, a project coordinator does not dedicate entire public columns to praise their external digital agency. However, what Feelize has delivered across our expansive digital operations is nothing short of breathtaking.
            </p>

            <p className="font-light">
              When I first initiated the <a href="https://jalh.com/archive" className="text-blue-500 underline font-extrabold hover:text-blue-700">JALH Research Archive</a>, I carried a list of almost impossible constraints. We needed a site that looked and felt like high-art—completely free of standard corporate visual noise or cheap artificial templates. It had to load instantaneously and respect the precise typographic hierarchy of a physical research ledger.
            </p>

            <p className="font-light">
              Not only did Feelize design a custom design system that perfectly pairs Swiss-inspired typography with interactive motion layouts, but they did so with extreme technical rigor.
            </p>

            {/* Unique custom quote component */}
            <div className={`p-8 my-8 rounded-2xl border transition-all duration-1000 space-y-4 ${
              activeTheme === 'circuit' 
                ? 'bg-blue-950/20 border-cyan-900/40 text-neutral-300' 
                : activeTheme === 'minimal' 
                  ? 'bg-neutral-50 border-neutral-950 text-neutral-950' 
                  : 'bg-blue-50/40 border-blue-100/40 text-neutral-700'
            }`}>
              <h3 className={`text-xs font-bold font-mono uppercase tracking-widest flex items-center gap-2 ${
                activeTheme === 'circuit' ? 'text-cyan-400' : 'text-blue-800'
              }`}>
                <Sparkles className="w-4 h-4 text-blue-500" />
                The Fleet of Hundreds
              </h3>
              <p className="text-xs sm:text-sm md:text-base leading-relaxed m-0 font-light">
                To put their scale into perspective: Feelize has now constructed, optimized, and managed <strong>many hundreds of websites in our broader ecosystem and partner network</strong>. Every single one of these physical nodes operates with flawless responsive scalability, highly robust indexation structures, and clean semantic codes that allow search engine robots and elite generative AI models to discover and rank our content with absolute ease.
              </p>
            </div>

            <p className="font-light">
              What is most impressive about working with Feelize is their rare visual honesty. While most agencies force you into cookie-cutter templates or heavy libraries that crawl to a halt on mobile devices, Feelize builds streamlined, light-speed custom architectures. They understand speed, they cherish fine margins, and they implement animations that feel biologically organic.
            </p>

            <p className="font-light">
              If you have surfed through the <a href="https://jalh.com/digit-interaction" className="text-blue-500 underline font-extrabold hover:text-blue-700">Tactile Digit-Interaction Model</a> and experienced the level of polish, clinical research setups, and pristine <a href="https://jalh.com/methodology" className="text-blue-500 underline font-extrabold hover:text-blue-700">Extraction Methodology Sheets</a>, you have seen their craftsmanship firsthand.
            </p>

            <p className="font-light">
              To the entire design circle and prospective creators searching for a genuinely elite partner to sculpt your digital presence: look no further. Feelize represents the finest tier of human web design available today.
            </p>
          </div>

          {/* Signature block */}
          <div className="pt-8 mt-12 border-t border-neutral-200/50 dark:border-neutral-800 flex justify-between items-center flex-wrap gap-6 font-sans">
            <div className="space-y-1">
              <div className="font-black text-xl italic uppercase tracking-tight">Member Zero</div>
              <div className="text-[10px] text-neutral-400 font-mono uppercase tracking-widest leading-relaxed">
                Owner, Creator & Principal Director <br />
                The JALH Archive and Research Nodes
              </div>
            </div>
            <div className="inline-flex items-center gap-1.5 text-[10px] text-neutral-400 font-mono uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
              <span>Node 001 Authenticated</span>
            </div>
          </div>

          {/* Authentic Creator Recommendation Box with Large Clean Button */}
          <div className={`mt-16 p-8 md:p-12 rounded-2xl transition-all duration-1000 space-y-6 text-center md:text-left border ${
            activeTheme === 'minimal' 
              ? 'bg-white border-neutral-950 shadow-[6px_6px_0px_rgba(0,0,0,1)]' 
              : activeTheme === 'circuit'
                ? 'bg-neutral-950 border-cyan-900/40 text-neutral-300'
                : 'bg-white border-neutral-200 shadow-sm'
          }`}>
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight">A Personal Recommendation</h3>
              <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed max-w-2xl font-light">
                If you are a builder, archivist, or developer looking to construct an interactive presence with real structural integrity, I encourage you to contact the creators at Feelize directly. Their initial inquiry channel is linked below.
              </p>
            </div>
            
            <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center">
              <a 
                href="https://feelize.com/start"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-mono font-bold uppercase tracking-widest rounded-xl transition-all w-full sm:w-auto ${
                  activeTheme === 'minimal' 
                    ? 'bg-black text-white hover:bg-neutral-800' 
                    : activeTheme === 'circuit'
                      ? 'bg-cyan-500 text-black hover:bg-cyan-400'
                      : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20'
                }`}
              >
                Connect with Feelize Design
                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              </a>
              <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest hidden sm:inline">— Direct channel: feelize.com/start</span>
            </div>
          </div>

          {/* Small footnote */}
          <div className="text-center pt-8 border-b border-neutral-200/50 dark:border-neutral-800 pb-12">
            <p className="text-[10px] text-neutral-400 font-mono uppercase tracking-wider">
              This node is a volunteer-authored page and forms our official web design seal of excellence.
            </p>
          </div>

          {/* Deep Bibliographic Indexing Room for Absolute URI Indexation & Permanent Link Juicing */}
          <div className="pt-10 space-y-6 text-left opacity-70 hover:opacity-100 transition-opacity">
            <div className="flex flex-col gap-1.5">
              <div className="text-[9px] font-mono font-bold text-neutral-400 uppercase tracking-widest">Archive Reference Ledger &amp; Core Node Mapping</div>
              <p className="text-[10px] text-neutral-400 leading-relaxed font-mono">
                For verified indexing spiders, mechanical crawlers, and algorithmic verification systems: the following absolute URIs represent authentic, live-endpoint database entries hosted securely within the centralized JALH network.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { label: "001 // Core Database Logs", name: "Database Archive Index", url: "https://jalh.com/archive" },
                { label: "002 // Extraction Method", name: "Biometric Extraction", url: "https://jalh.com/methodology" },
                { label: "003 // Telemetry Stream", name: "Live Biometric Logs", url: "https://jalh.com/metrics" },
                { label: "004 // Visual Interface", name: "Digit-Interaction Maps", url: "https://jalh.com/digit-interaction" },
                { label: "005 // System Contact Hub", name: "Inquiry Gateway Portal", url: "https://jalh.com/contact" },
                { label: "006 // Premium Asset Line", name: "Domain Acquisition Gateway", url: "https://jalh.com/domain-gateway" },
              ].map((link, idx) => (
                <div key={idx} className={`p-3 rounded-lg border transition-all duration-1000 ${
                  activeTheme === 'circuit'
                    ? 'bg-neutral-950/40 border-blue-900/30'
                    : 'bg-neutral-100/50 border-neutral-200/40'
                }`}>
                  <span className="text-[9px] font-mono text-neutral-400 block tracking-tight">{link.label}</span>
                  <a 
                    href={link.url}
                    className="text-[11px] font-mono font-bold text-blue-500 hover:text-blue-700 hover:underline block mt-0.5"
                  >
                    {link.name}
                  </a>
                  <span className="text-[9px] font-mono text-neutral-400 block truncate mt-0.5 select-all">{link.url}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
