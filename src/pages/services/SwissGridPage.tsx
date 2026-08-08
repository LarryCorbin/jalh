import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Monitor, Cpu, Sparkles, ArrowLeft, ArrowRight, Layout, Sliders, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

export default function SwissGridPage() {
  const [columns, setColumns] = useState(12);

  return (
    <>
      <SEO 
        title="Swiss Typography & Grid Alignment Standards" 
        description="Verify layout ratio grid standards. Learn how JALH uses perfect Swiss proportions and modular typography grids in our third structural layer."
        keywords="Swiss grid standards, typography spacing, alignment grid, proportional layout, responsive design structures, front-end quality"
        schema={[{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Swiss Typography & Grid Proportions Standard",
          "description": "Mathematical guidelines and alignment grids used for high-fidelity browser layouts under JALH systems.",
          "isPartOf": {
            "@type": "Service",
            "name": "Bespoke Interactive Experience Design & Front-End Engineering",
            "url": "https://jalh.com/services/interactive-experience-design"
          }
        }]}
      />

      <div className="pt-40 pb-24 px-6 md:px-12 bg-white text-neutral-900 font-sans min-h-screen">
        <div className="max-w-5xl mx-auto space-y-16">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-[10px] text-neutral-400 uppercase tracking-widest font-mono">
            <Link to="/services/interactive-experience-design" className="hover:text-blue-600 transition-colors">Interactive UX</Link>
            <span>/</span>
            <span className="text-neutral-500">Micro-Dynamics</span>
            <span>/</span>
            <span className="text-blue-600 font-bold">Swiss Grid (L3)</span>
          </div>

          {/* Hero Header */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-neutral-100 border border-neutral-200 rounded text-[9px] text-neutral-600 uppercase tracking-widest font-mono font-bold">
              <Layout className="w-3.5 h-3.5 text-blue-600" />
              <span>LAYER 3 PROTOCOL // ALIGNMENT COEF</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-black leading-none uppercase">
              Swiss Grid <br />
              <span className="font-normal italic font-serif text-blue-600 lowercase">mathematical alignment</span>
            </h1>

            <p className="text-neutral-500 text-xs md:text-sm font-sans font-light max-w-2xl leading-relaxed">
              Visual comfort is not subjective; it is mathematical. Rooted in mid-century International Typographic Style, we align all visual nodes with strict mathematical proportions. Spacing constants are dynamically derived based on root multipliers, ensuring crisp rendering across any viewport.
            </p>
          </div>

          {/* Interactive Swiss Grid sandbox */}
          <div className="bg-neutral-50 border border-neutral-150 rounded-2xl p-6 md:p-8 space-y-6">
            <div className="flex flex-col md:flex-row justify-between md:items-end gap-4 border-b border-neutral-200 pb-4">
              <div className="space-y-1">
                <div className="text-[10px] text-blue-600 font-bold uppercase tracking-wider font-mono">Dynamic Grid System Simulator</div>
                <h3 className="text-lg text-neutral-900 font-serif italic">Modular Layout Visualizer</h3>
              </div>
              <p className="text-neutral-500 text-[10px] font-sans font-light max-w-xs">
                Modify column parameters to observe how whitespace ratios adjust fluidly, preserving typographic alignment under all breakpoints.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Sliders Area */}
              <div className="md:col-span-5 space-y-6 text-xs font-mono">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-neutral-500 uppercase">COLUMN FRACTIONS:</span>
                    <span className="text-blue-600 font-bold">{columns} Columns</span>
                  </div>
                  <input 
                    type="range"
                    min="4"
                    max="16"
                    step="2"
                    value={columns}
                    onChange={e => setColumns(Number(e.target.value))}
                    className="w-full h-1 bg-neutral-200 rounded appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-between text-[8px] text-neutral-400">
                    <span>Sparse (4)</span>
                    <span>High Density (16)</span>
                  </div>
                </div>

                <div className="p-4 bg-white border border-neutral-200 rounded-xl space-y-1.5 text-[10px] font-sans">
                  <span className="text-neutral-500 font-mono text-[9px] uppercase font-bold block">Grid Diagnostics:</span>
                  <div className="flex items-center gap-1.5 text-blue-600">
                    <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                    <span className="font-mono">Baseline: 8px Multiplier // Verified</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-blue-600">
                    <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                    <span className="font-mono">Horizontal tracking: Golden Ratio (1.618)</span>
                  </div>
                </div>
              </div>

              {/* Grid demonstrator */}
              <div className="md:col-span-7 h-56 bg-white border border-neutral-200 rounded-xl relative p-6 flex flex-col justify-between overflow-hidden">
                <div className="absolute top-2 left-2 text-[8px] font-mono text-neutral-400 bg-neutral-100 px-2 py-0.5 rounded border border-neutral-200">
                  COLUMN_RESONANCE // OK
                </div>

                {/* Animated column bars */}
                <div className="grid h-28 gap-2 mt-4" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
                  {Array.from({ length: columns }).map((_, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scaleY: 0.8 }}
                      animate={{ opacity: 0.15, scaleY: 1 }}
                      transition={{ delay: idx * 0.03 }}
                      className="h-full bg-blue-600 rounded-sm border border-dashed border-blue-400"
                    />
                  ))}
                </div>

                <div className="text-right text-[8px] font-mono text-neutral-400">
                  COEF // SPACING_CONSTANT_X = (viewportW * 0.08)
                </div>
              </div>

            </div>
          </div>

          {/* Sibling navigation and text links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs text-neutral-600 font-sans">
            <div className="p-6 bg-neutral-50 border border-neutral-150 rounded-xl space-y-4">
              <h4 className="text-sm font-semibold font-mono text-black uppercase tracking-wider flex items-center gap-2">
                <Layout className="w-4 h-4 text-blue-600" />
                Interlinked Layout Nodes
              </h4>
              <p className="leading-relaxed font-light">
                Our typographic alignment proportions are engineered to work in tandem with other properties. While columns dictate placements, interactive components inside these grids adhere strictly to constants mapped in our <Link to="/services/interactive-experience-design/tactile-physics" className="text-blue-600 underline hover:text-blue-700 font-mono">Tactile Physics Sandbox</Link> and the math solver in our <Link to="/services/interactive-experience-design/spring-coefficient" className="text-blue-600 underline hover:text-blue-700 font-mono">Spring Coefficient Analysis</Link> module.
              </p>
              <p className="leading-relaxed font-light">
                To examine other structural components, traverse directly into our <Link to="/category/aesthetic" className="text-blue-600 underline hover:text-blue-700 font-mono">Aesthetic Catalog</Link> or consult design specifications on our central <Link to="/architecture" className="text-blue-600 underline hover:text-blue-700">Architecture specifications</Link> page.
              </p>
            </div>

            <div className="p-6 bg-neutral-50 border border-neutral-150 rounded-xl space-y-4">
              <h4 className="text-sm font-semibold font-mono text-black uppercase tracking-wider flex items-center gap-2">
                <Monitor className="w-4 h-4 text-blue-600" />
                Layout Calibration Map
              </h4>
              <div className="space-y-2 text-[11px] font-mono">
                <div className="flex justify-between py-1.5 border-b border-neutral-200">
                  <span className="text-neutral-400">PARENT NODE:</span>
                  <Link to="/services/interactive-experience-design" className="text-blue-600 uppercase hover:underline">Interactive UX</Link>
                </div>
                <div className="flex justify-between py-1.5 border-b border-neutral-200">
                  <span className="text-neutral-400">SIBLING A:</span>
                  <Link to="/services/interactive-experience-design/tactile-physics" className="text-blue-600 uppercase hover:underline">Tactile Physics</Link>
                </div>
                <div className="flex justify-between py-1.5 border-b border-neutral-200">
                  <span className="text-neutral-400">SIBLING B:</span>
                  <Link to="/services/interactive-experience-design/spring-coefficient" className="text-blue-600 uppercase hover:underline">Spring Coefficient</Link>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-neutral-400">TERMS SCHEMA:</span>
                  <Link to="/legal" className="text-blue-600 uppercase hover:underline">Legal Index</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Sub-index Selector */}
          <div className="border-t border-neutral-200 pt-10">
            <h3 className="text-sm font-semibold uppercase text-black font-mono tracking-widest mb-6">Interactive Design Index Navigation</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
              <Link 
                to="/services/interactive-experience-design/tactile-physics"
                className="p-4 rounded-xl border border-neutral-200 bg-neutral-50 hover:border-blue-500/50 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <Cpu className="w-4 h-4 text-neutral-400 group-hover:text-blue-600" />
                  <div>
                    <div className="text-neutral-700 group-hover:text-black">Tactile Physics</div>
                    <div className="text-[9px] text-neutral-500">Layer 3 Dynamics // Ready</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-blue-600 transform group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link 
                to="/services/interactive-experience-design/spring-coefficient"
                className="p-4 rounded-xl border border-neutral-200 bg-neutral-50 hover:border-blue-500/50 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <Sliders className="w-4 h-4 text-neutral-400 group-hover:text-blue-600" />
                  <div>
                    <div className="text-neutral-700 group-hover:text-black">Spring Coefficient</div>
                    <div className="text-[9px] text-neutral-500">Layer 3 Elastic // Ready</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-blue-600 transform group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link 
                to="/services/interactive-experience-design/swiss-grid"
                className="p-4 rounded-xl border border-blue-500 bg-white shadow-sm flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <Monitor className="w-4 h-4 text-blue-600" />
                  <div>
                    <div className="text-black font-bold">Swiss Grid</div>
                    <div className="text-[9px] text-blue-600">Layer 3 Grid // Active</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-blue-600 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Return link */}
          <div className="pt-8 border-t border-neutral-200 flex justify-between items-center text-xs font-mono">
            <Link to="/services/interactive-experience-design" className="flex items-center gap-1.5 text-neutral-500 hover:text-black">
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
