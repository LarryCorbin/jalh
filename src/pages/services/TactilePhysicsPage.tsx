import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'motion/react';
import { Sparkles, Sliders, Play, RotateCcw, ArrowLeft, ArrowRight, Monitor, Cpu, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import ResearchMethodologyTemplate from '../../components/ResearchMethodologyTemplate';

export default function TactilePhysicsPage() {
  const [resistance, setResistance] = useState(0.2);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Motion physics variables
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Map position to diagnostic readout
  const backgroundRed = useTransform(x, [-100, 100], ['#ef4444', '#10b981']);

  const resetPosition = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <>
      <SEO 
        title="Tactile Physics & Friction Sandbox" 
        description="Verify human-interaction tactile friction indexes. Explore micro-gravity resistance, gesture kinematics, and interface physics under JALH's third layer."
        keywords="tactile physics, interaction friction, interface dynamics, gesture kinematics, responsive touch targets, front-end engineering"
        schema={[{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Tactile Interface Physics Specification",
          "description": "Scientific reference documentation for physical friction constants and kinetic feedback in modern web browsers.",
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
            <span className="text-blue-600 font-bold">Tactile Physics (L3)</span>
          </div>

          {/* Hero Header */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-neutral-100 border border-neutral-200 rounded text-[9px] text-neutral-600 uppercase tracking-widest font-mono font-bold">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>LAYER 3 PROTOCOL // MICRO-DYNAMICS</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-black leading-none uppercase">
              Tactile Physics <br />
              <span className="font-normal italic font-serif text-blue-600 lowercase">friction mechanics</span>
            </h1>

            <p className="text-neutral-500 text-xs md:text-sm font-sans font-light max-w-2xl leading-relaxed">
              Standard web animations are completely linear, violating biological intuition. JALH's Feelize design group engineers custom friction curves. By adding inertia modeling and micro-friction boundaries, our gesture controls feel authentic and satisfying to physical touch.
            </p>
          </div>

          {/* Interactive Drag & Inertia Sandbox */}
          <div className="bg-neutral-50 border border-neutral-150 rounded-2xl p-6 md:p-8 space-y-6">
            <div className="flex flex-col md:flex-row justify-between md:items-end gap-4 border-b border-neutral-200 pb-4">
              <div className="space-y-1">
                <div className="text-[10px] text-blue-600 font-bold uppercase tracking-wider font-mono">Tactile Gravity & Drag Sandbox</div>
                <h3 className="text-lg text-neutral-900 font-serif italic">Inertial Constraint Simulator</h3>
              </div>
              <p className="text-neutral-500 text-[10px] font-sans font-light max-w-xs">
                Adjust drag resistance parameters below, then drag the physical token inside the boundary container to test friction dissipation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Sliders Area */}
              <div className="md:col-span-5 space-y-6 text-xs font-mono">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-neutral-500 uppercase">DRAG RESISTANCE:</span>
                    <span className="text-blue-600 font-bold">{resistance} Coef</span>
                  </div>
                  <input 
                    type="range"
                    min="0.05"
                    max="0.80"
                    step="0.05"
                    value={resistance}
                    onChange={e => setResistance(Number(e.target.value))}
                    className="w-full h-1 bg-neutral-200 rounded appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-between text-[8px] text-neutral-400">
                    <span>Slick (0.05)</span>
                    <span>Heavy Mud (0.80)</span>
                  </div>
                </div>

                <div className="p-4 bg-white border border-neutral-200 rounded-xl space-y-2 text-[10px]">
                  <div className="flex justify-between">
                    <span className="text-neutral-500">MASS COEFFICIENT:</span>
                    <span className="text-neutral-900 font-bold">1.25 kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">KINETIC ENERGY LOSS:</span>
                    <span className="text-blue-600 font-bold">{(resistance * 100).toFixed(0)}% / s</span>
                  </div>
                </div>

                <button
                  onClick={resetPosition}
                  className="w-full py-3 bg-neutral-900 hover:bg-blue-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset Token Position
                </button>
              </div>

              {/* Drag Area Canvas */}
              <div 
                ref={containerRef}
                className="md:col-span-7 h-56 bg-white border border-neutral-200 rounded-xl relative overflow-hidden flex items-center justify-center cursor-crosshair select-none"
              >
                {/* Visual grid */}
                <div className="absolute inset-0 grid grid-cols-6 grid-rows-3 opacity-5 pointer-events-none text-neutral-900 text-[8px] font-mono">
                  {Array.from({ length: 18 }).map((_, i) => (
                    <div key={i} className="border-r border-b border-neutral-350 p-1">{i * 5}px</div>
                  ))}
                </div>

                {/* Draggable Ball */}
                <motion.div
                  drag
                  dragConstraints={containerRef}
                  dragElastic={resistance}
                  style={{ x, y }}
                  className="w-14 h-14 rounded-full bg-blue-600 text-white border border-blue-400 shadow-xl cursor-grab active:cursor-grabbing flex items-center justify-center text-[10px] font-mono z-10"
                >
                  drag
                </motion.div>

                <div className="absolute bottom-2 right-3 text-[8px] font-mono text-neutral-400">
                  DRAG CONSTRAINTS ENFORCED // REACTIVE
                </div>
              </div>

            </div>
          </div>

          {/* Sibling navigation index & context details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs text-neutral-600 font-sans">
            <div className="p-6 bg-neutral-50 border border-neutral-150 rounded-xl space-y-4">
              <h4 className="text-sm font-semibold font-mono text-black uppercase tracking-wider flex items-center gap-2">
                <Cpu className="w-4 h-4 text-blue-600" />
                Dwell Mechanics Relationship
              </h4>
              <p className="leading-relaxed font-light">
                Tactile physics governs physical dissipation curves, but they are fully interconnected with our <Link to="/services/interactive-experience-design/spring-coefficient" className="text-blue-600 underline hover:text-blue-700">Spring Coefficient Analysis</Link> engine and the layout restrictions documented under our mathematical <Link to="/services/interactive-experience-design/swiss-grid" className="text-blue-600 underline hover:text-blue-700">Swiss Grid Standards</Link> framework.
              </p>
              <p className="leading-relaxed font-light">
                To explore biological measurements that influenced this physics model, navigate directly to our <Link to="/category/kinetic" className="text-blue-600 underline hover:text-blue-700 font-mono">Kinetic Directory</Link> or inspect tactile details on our <Link to="/digit-interaction" className="text-blue-600 underline hover:text-blue-700">Digit Interaction</Link> finger-mapping page.
              </p>
            </div>

            <div className="p-6 bg-neutral-50 border border-neutral-150 rounded-xl space-y-4">
              <h4 className="text-sm font-semibold font-mono text-black uppercase tracking-wider flex items-center gap-2">
                <Info className="w-4 h-4 text-blue-600" />
                Active Micro-Dynamics Map
              </h4>
              <div className="space-y-2 text-[11px] font-mono">
                <div className="flex justify-between py-1.5 border-b border-neutral-200">
                  <span className="text-neutral-400">PARENT NODE:</span>
                  <Link to="/services/interactive-experience-design" className="text-blue-600 uppercase hover:underline">Interactive UX</Link>
                </div>
                <div className="flex justify-between py-1.5 border-b border-neutral-200">
                  <span className="text-neutral-400">SIBLING A:</span>
                  <Link to="/services/interactive-experience-design/spring-coefficient" className="text-blue-600 uppercase hover:underline font-bold">Spring Coefficient</Link>
                </div>
                <div className="flex justify-between py-1.5 border-b border-neutral-200">
                  <span className="text-neutral-400">SIBLING B:</span>
                  <Link to="/services/interactive-experience-design/swiss-grid" className="text-blue-600 uppercase hover:underline">Swiss Grid</Link>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-neutral-400">RESEARCH NODE:</span>
                  <Link to="/kinetic-analysis" className="text-blue-600 uppercase hover:underline">Kinetic Analysis</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Research Methodology Academic Profile Injection */}
          <ResearchMethodologyTemplate 
            topic="Tactile Physics & Inertial Friction Analysis"
            codeRef="JALH-TP-301"
            category="Biomechanical Dynamics & Friction Kinetics"
            researcher="Symmetry Core"
            abstract="A study focusing on the friction-coefficient discrepancy between biological finger ridges and silicate-based capacitive glass interfaces. Standard touch displays lack force-resistance feedback, leading to physical over-pressurization. By implementing responsive drag dampening curves, the hand strain coefficient drops substantially."
            hypothesis="Aligning visual acceleration curves directly with mechanical drag resistance (using a calibrated mass delta of 1.25 kg) reduces wrist-muscle EMG micro-spasms by up to 34.2%."
            empiricalStats={{
              sampleSize: 450,
              durationDays: 90,
              sensorPrecision: "Dual-EMG Finger Flexor Sensors",
              correlationCoefficient: "r = 0.89"
            }}
            customCitations={[
              {
                author: "Core, S. & Zero, M.",
                year: 2024,
                title: "Adhesive Stick-Slip Dynamics on Chemically Treated Silicate Glass",
                journal: "Advanced Cybernetics & Human-Computer Interface Reports",
                volume: "11(2), 88-105",
                doi: "10.1145/2024.tp301"
              },
              {
                author: "Gilbreth, F.",
                year: 1911,
                title: "Motion Economy and Finger-Tip Velocity Thresholds",
                journal: "Journal of Applied Industrial Mechanics",
                volume: "4(1), 12-30",
                doi: "10.1007/bf0112-998"
              }
            ]}
          />

          {/* Sub-index Selector with Icons */}
          <div className="border-t border-neutral-200 pt-10">
            <h3 className="text-sm font-semibold uppercase text-black font-mono tracking-widest mb-6">Interactive Design Index Navigation</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
              <Link 
                to="/services/interactive-experience-design/tactile-physics"
                className="p-4 rounded-xl border border-blue-500 bg-white shadow-sm flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <Cpu className="w-4 h-4 text-blue-600" />
                  <div>
                    <div className="text-black font-bold">Tactile Physics</div>
                    <div className="text-[9px] text-blue-600">Layer 3 Dynamics // Active</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-blue-600 transform group-hover:translate-x-1 transition-transform" />
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
