import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sliders, Cpu, Play, ArrowLeft, ArrowRight, Activity, Code, Monitor, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

export default function SpringCoefficientPage() {
  const [stiffness, setStiffness] = useState(150);
  const [damping, setDamping] = useState(15);
  const [testCount, setTestCount] = useState(0);

  const triggerCalibration = () => {
    setTestCount(prev => prev + 1);
  };

  return (
    <>
      <SEO 
        title="Spring Coefficient & Elastic Motion Calibration" 
        description="Verify interface spring physics constants. Calibrate stiffness, damping ratio, mass, and velocity parameters under JALH's third layer."
        keywords="spring coefficient, elastic motion, interface stiffness, damping ratio, motion physics, user interface design, front-end speed"
        schema={[{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Spring Coefficient and Elastic Motion Specification",
          "description": "Scientific reference documentation for spring mass constants and elastic movement algorithms in browsers.",
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
            <span className="text-blue-600 font-bold">Spring Coefficient (L3)</span>
          </div>

          {/* Hero Header */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-neutral-100 border border-neutral-200 rounded text-[9px] text-neutral-600 uppercase tracking-widest font-mono font-bold">
              <Sliders className="w-3.5 h-3.5 text-blue-600" />
              <span>LAYER 3 PROTOCOL // PHYSICS SYSTEM</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-black leading-none uppercase">
              Spring Coefficient <br />
              <span className="font-normal italic font-serif text-blue-600 lowercase">elastic alignment</span>
            </h1>

            <p className="text-neutral-500 text-xs md:text-sm font-sans font-light max-w-2xl leading-relaxed">
              Elastic interface motion is governed by Hooke's Law coupled with kinetic drag models. Finding the correct structural coefficient ensures interactive items snap instantly into place without causing visual jarring or motion fatigue.
            </p>
          </div>

          {/* Interactive Spring Coefficient sandbox */}
          <div className="bg-neutral-50 border border-neutral-150 rounded-2xl p-6 md:p-8 space-y-6">
            <div className="flex flex-col md:flex-row justify-between md:items-end gap-4 border-b border-neutral-200 pb-4">
              <div className="space-y-1">
                <div className="text-[10px] text-blue-600 font-bold uppercase tracking-wider font-mono">Elastic Coefficient Calibration</div>
                <h3 className="text-lg text-neutral-900 font-serif italic">Newtonian Motion Solver</h3>
              </div>
              <p className="text-neutral-500 text-[10px] font-sans font-light max-w-xs">
                Fine-tune mechanical parameters and click "Calibrate Motion Pulse" to observe the structural spring reaction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Sliders Area */}
              <div className="md:col-span-5 space-y-6 text-xs font-mono">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-neutral-500 uppercase">Stiffness (k):</span>
                    <span className="text-blue-600 font-bold">{stiffness} N/m</span>
                  </div>
                  <input 
                    type="range"
                    min="50"
                    max="400"
                    value={stiffness}
                    onChange={e => setStiffness(Number(e.target.value))}
                    className="w-full h-1 bg-neutral-200 rounded appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-between text-[8px] text-neutral-400">
                    <span>Soft (50)</span>
                    <span>Stiff Snap (400)</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-neutral-500 uppercase">Damping (c):</span>
                    <span className="text-blue-600 font-bold">{damping} N-s/m</span>
                  </div>
                  <input 
                    type="range"
                    min="5"
                    max="50"
                    value={damping}
                    onChange={e => setDamping(Number(e.target.value))}
                    className="w-full h-1 bg-neutral-200 rounded appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-between text-[8px] text-neutral-400">
                    <span>Bounce (5)</span>
                    <span>Damped (50)</span>
                  </div>
                </div>

                <button
                  onClick={triggerCalibration}
                  className="w-full py-3 bg-neutral-900 hover:bg-blue-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  Calibrate Motion Pulse
                </button>
              </div>

              {/* Moving Element */}
              <div className="md:col-span-7 h-56 bg-neutral-900 border border-neutral-850 rounded-xl relative overflow-hidden flex items-center justify-center">
                
                {/* Physical tracking values */}
                <div className="absolute top-3 left-3 text-[8px] font-mono text-neutral-400 bg-neutral-850 px-2 py-0.5 rounded border border-neutral-800">
                  MODEL // F = -kx - cv
                </div>

                <motion.div
                  key={testCount}
                  initial={{ y: -80, scale: 0.8 }}
                  animate={{ y: 0, scale: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: stiffness, 
                    damping: damping 
                  }}
                  className="w-16 h-16 bg-blue-600 rounded-xl shadow-2xl border border-blue-400 flex items-center justify-center text-white text-[10px] font-bold"
                >
                  pulse
                </motion.div>

                <div className="absolute bottom-2 right-3 text-[8px] font-mono text-neutral-500">
                  DYNAMIC CONSTANT MATRIX // OK
                </div>
              </div>

            </div>
          </div>

          {/* Sibling navigation & details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs text-neutral-600 font-sans">
            <div className="p-6 bg-neutral-50 border border-neutral-150 rounded-xl space-y-4">
              <h4 className="text-sm font-semibold font-mono text-black uppercase tracking-wider flex items-center gap-2">
                <Code className="w-4 h-4 text-blue-600" />
                Interconnected Elastic Nodes
              </h4>
              <p className="leading-relaxed font-light">
                Our mechanical motion engine relies on physical parameters mapped here, but they are fully aligned with the drag vectors documented under <Link to="/services/interactive-experience-design/tactile-physics" className="text-blue-600 underline hover:text-blue-700">Tactile Physics Sandbox</Link> and the typography limits detailed in the mathematical <Link to="/services/interactive-experience-design/swiss-grid" className="text-blue-600 underline hover:text-blue-700">Swiss Grid Standards</Link> index.
              </p>
              <p className="leading-relaxed font-light">
                To examine human biometric feedback that shapes these kinetic models, explore our <Link to="/behavioral-index" className="text-blue-600 underline hover:text-blue-700">Behavioral Index</Link> or the <Link to="/lab" className="text-blue-600 underline hover:text-blue-700 font-mono">Active Experiment Lab</Link>.
              </p>
            </div>

            <div className="p-6 bg-neutral-50 border border-neutral-150 rounded-xl space-y-4">
              <h4 className="text-sm font-semibold font-mono text-black uppercase tracking-wider flex items-center gap-2">
                <Activity className="w-4 h-4 text-blue-600" />
                Mechanical Metrics Map
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
                  <Link to="/services/interactive-experience-design/swiss-grid" className="text-blue-600 uppercase hover:underline font-bold">Swiss Grid</Link>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-neutral-400">BIOMETRIC LOGS:</span>
                  <Link to="/metrics" className="text-blue-600 uppercase hover:underline">Live Metrics</Link>
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
                className="p-4 rounded-xl border border-blue-500 bg-white shadow-sm flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <Sliders className="w-4 h-4 text-blue-600" />
                  <div>
                    <div className="text-black font-bold">Spring Coefficient</div>
                    <div className="text-[9px] text-blue-600">Layer 3 Elastic // Active</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-blue-600 transform group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link 
                to="/services/interactive-experience-design/swiss-grid"
                className="p-4 rounded-xl border border-neutral-200 bg-neutral-50 hover:border-blue-500/50 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <Monitor className="w-4 h-4 text-neutral-400 group-hover:text-blue-600" />
                  <div>
                    <div className="text-neutral-700 group-hover:text-black">Swiss Grid</div>
                    <div className="text-[9px] text-neutral-500">Layer 3 Grid // Ready</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-blue-600 transform group-hover:translate-x-1 transition-transform" />
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
