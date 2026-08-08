import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Fingerprint, Layers, Move, Ruler, Cpu, Activity, Info, BarChart2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import ColorPatch from '../components/ColorPatch';
import SEO from '../components/SEO';
import Footnote from '../components/Footnote';

export default function DigitInteractionPage() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white pt-32 pb-48 px-6 sm:px-8 md:px-16 overflow-hidden text-left font-sans">
      <ColorPatch color="bg-blue-600" size="w-[70rem] h-[70rem]" opacity={0.06} className="-top-32 -left-32" />
      <ColorPatch color="bg-white" size="w-[30rem] h-[30rem]" opacity={0.01} className="bottom-0 right-0" />
      
      <SEO 
        title="Digit Interaction Analysis & Touch Kinetics Study"
        description="Detailed technical analysis of Quadrant J: Digit Interaction and manual ergonomics. Explore tactile finger ridge mapping, friction coefficients, and micro-gestural studies supervised by Member Zero."
        keywords="digit interaction, Quadrant J research, ridge mapping, manual dexterity, mobile ergonomics, touch latency, finger biomechanics"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "headline": "Quadrant J: Digit Interaction Dynamics on Capacitive Glass Interfaces",
            "description": "An exhaustive analysis of human-digit contact mechanics, touch force thresholds, and involuntary habit patterns during smartphone operation.",
            "author": { "@type": "Person", "name": "Member Zero" }
          }
        ]}
      />

      <div className="max-w-6xl mx-auto space-y-24 relative z-10">
        <Link to="/" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-500 hover:text-white mb-8 transition-colors">
          <ArrowLeft size={12} /> Archival return
        </Link>

        {/* Page Header */}
        <header className="space-y-6 max-w-4xl">
          <div className="flex items-center gap-2.5 text-[10px] font-mono uppercase tracking-[0.25em] text-blue-500 font-bold bg-blue-500/5 border border-blue-500/10 px-3 py-1 rounded-full w-fit">
             <Fingerprint size={14} />
             <span>Systems Analysis Quadrant J</span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-black leading-[0.85] uppercase tracking-tighter italic text-white">
            Digit <br/>interaction
          </h1>
          <p className="text-neutral-400 text-lg sm:text-xl font-light leading-relaxed max-w-3xl">
            The quantitative measurement of force, friction, and movement trajectory at the exact contact interface between human digits and modern mobile glass. Documented via <Link to="/research/ridge-mapping-alpha" className="text-blue-400 hover:underline">Ridge Mapping Alpha</Link>.
          </p>
        </header>

        {/* Primary Objectives - Detailed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="p-8 border border-white/5 bg-white/[0.02] rounded-3xl space-y-4 hover:border-white/10 transition-colors">
              <div className="flex justify-between items-center text-blue-500">
                <span className="text-xs font-mono font-bold uppercase tracking-widest">Objective 001</span>
                <Cpu size={16} />
              </div>
              <h3 className="text-base font-bold text-white uppercase tracking-tight">Node Point Calibration</h3>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                Map the primary, secondary, and tertiary contact zones across the fingers. Measure muscle tension during swipe, scroll, and tap cycles under high-demand tasks.
              </p>
           </div>
           
           <div className="p-8 border border-white/5 bg-white/[0.02] rounded-3xl space-y-4 hover:border-white/10 transition-colors">
              <div className="flex justify-between items-center text-blue-500">
                <span className="text-xs font-mono font-bold uppercase tracking-widest">Objective 002</span>
                <Activity size={16} />
              </div>
              <h3 className="text-base font-bold text-white uppercase tracking-tight">Habit Extraction & Isolation</h3>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                Isolate involuntary physical habits—such as repetitive phone-spinning, side-button flicking, and screen-polishing gestures—to understand their origin and stress links.
              </p>
           </div>

           <div className="p-8 border border-white/5 bg-white/[0.02] rounded-3xl space-y-4 hover:border-white/10 transition-colors">
              <div className="flex justify-between items-center text-blue-500">
                <span className="text-xs font-mono font-bold uppercase tracking-widest">Objective 003</span>
                <Ruler size={16} />
              </div>
              <h3 className="text-base font-bold text-white uppercase tracking-tight">Kinetic Shift Modeling</h3>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                Apply real-time alignment models to reduce muscle strain. This helps subjects maintain complete visual symmetry and perfect focus during extended digital sessions.
              </p>
           </div>
        </div>

        {/* In-Depth Scientific Analysis Essay */}
        <section className="p-8 sm:p-12 bg-white/[0.02] border border-white/5 rounded-3xl space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">
            <Info size={16} />
            <span>Biomechanical Interface Essay</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black uppercase text-white">The Friction & Sensory Load of Glass Interfaces</h2>
          <div className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed space-y-4 max-w-4xl">
            <p>
              When performing a scientific study on <strong>Digit Interaction</strong>, we notice that the operator is separated from physical tactile feedback. Unlike mechanical levers or buttons that provide solid verification, capacitive glass surfaces remain static and flat. To counter this, practitioners utilize <strong>Kinetic Alignment Logic</strong>.
            </p>
            <p>
              This sensory deficit leads to accelerated tendon strain. The JALH Research Group catalogs these micro-habits under our <Footnote term="Ridge Mapping Alpha" definition="The preliminary cataloging of manual ridges used during the shift from Quadrant J to Quadrant A." citation="Node 33" /> system to ensure high-frequency observation and stress containment.
            </p>
            <p>
              Through precise micro-deformation mapping of physical touch points, we establish <strong>Interaction Ridge Stability</strong>, satisfying the biological brain's sensory expectation and stabilizing muscular alignment.
            </p>
          </div>
        </section>

        {/* Technical Schematics & Interactive Display */}
        <section className="space-y-8">
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-500">Technical Schematics & Measurements</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             
             {/* Left Column: List of measures */}
             <div className="space-y-8">
                {[
                  { 
                    icon: Ruler, 
                    title: "Forensic Finger Ridge Mapping", 
                    text: "Analyzing micro-grooves on finger pads to quantify friction when interacting with glass. This research ensures smooth tactile sliding and is documented under our forensic index." 
                  },
                  { 
                    icon: Move, 
                    title: "Involuntary Habit Tracking", 
                    text: "Identifying when a manual touch habit transitions from an intentional gesture to an autonomous, stress-induced tic. Monitored in real-time at active research nodes." 
                  },
                  { 
                    icon: Layers, 
                    title: "Layered Micro-Interaction Auditing", 
                    text: "Overlaying multiple touch cycles to locate common wear patterns on interfaces. This allows us to optimize button positioning for minimal muscular reach and strain." 
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group text-left">
                    <div className="text-blue-500 group-hover:scale-110 transition-transform pt-1"><item.icon size={20} /></div>
                    <div className="space-y-1">
                       <h3 className="text-base font-bold uppercase text-white tracking-tight">{item.title}</h3>
                       <p className="text-neutral-400 text-sm leading-relaxed font-light">{item.text}</p>
                    </div>
                  </div>
                ))}
             </div>

             {/* Right Column: Beautiful Sci-Fi Visual Card */}
             <div className="aspect-square bg-white/[0.02] border border-white/10 rounded-3xl flex flex-col items-center justify-center relative overflow-hidden group p-8">
                <div className="absolute inset-0 bg-blue-600/5 translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                
                {/* SVG Scanning Grid Overlay */}
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                
                <motion.div 
                   animate={{ rotate: 360 }}
                   transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                   className="w-[70%] h-[70%] border border-white/5 rounded-full flex items-center justify-center relative"
                >
                  <div className="absolute inset-4 border border-dashed border-blue-500/10 rounded-full" />
                  <div className="absolute inset-12 border border-white/10 rounded-full" />
                </motion.div>

                <div className="absolute text-center">
                   <span className="text-[10px] font-mono tracking-[0.3em] text-neutral-500 uppercase">JALH BIOMETRICS</span>
                   <span className="text-xl text-blue-500 font-bold block mt-1">QUADRANT_J_ACTIVE</span>
                   <span className="text-[9px] font-mono text-neutral-400 block mt-2 select-none uppercase">Scan Frequency: 250Hz</span>
                </div>
             </div>
          </div>
        </section>

        {/* Detailed Case Study Card */}
        <section className="bg-white text-black p-8 sm:p-12 rounded-3xl space-y-6 text-left relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 p-8 opacity-[0.03] text-black">
             <BarChart2 size={120} />
           </div>
           <div className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest">Case Study Analysis // Node 042</div>
           <h3 className="text-2xl sm:text-3xl font-black uppercase text-neutral-900 leading-none">
             "At node 042, we verified a direct correlation between interface complexity and observer detection risk."
           </h3>
           <p className="text-neutral-600 text-sm sm:text-base font-light leading-relaxed max-w-4xl">
             When subjects operate high-complexity apps that require precise finger placement, their facial expressions change rapidly. Under standard conditions, observers detected focal strain in 82% of the test sessions. However, when using interfaces calibrated with JALH digit alignment rules, observer detection rates fell to 14%. This confirms that optimizing touch ergonomics directly preserves visual calm and public composure.
           </p>
           <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 pt-8 border-t border-neutral-200 mt-8">
              <Link to="/metrics" className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 hover:text-blue-800 transition-colors">
                View live metrics registry →
              </Link>
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Lead Investigator: Member Zero</div>
           </div>
        </section>

        {/* System Node Grid */}
        <div className="space-y-4 text-left">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-500">Active Digit Observation Logs</span>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
             {[
               { id: "001", mode: "Tap Friction", rate: "0.22 N FORCE" },
               { id: "002", mode: "Swipe Vector", rate: "124° TRAJ" },
               { id: "003", mode: "Scroll Rhythm", rate: "3.4Hz PULSE" },
               { id: "004", mode: "Pressure Sync", rate: "99.1% CALIB" },
               { id: "005", mode: "Isometric Lock", rate: "STABLE" },
               { id: "006", mode: "Thermal Drift", rate: "0.02°C DEV" },
               { id: "007", mode: "Ridge Contact", rate: "Forensic" },
               { id: "008", mode: "Acoustic Noise", rate: "Zero Vol" }
             ].map((node) => (
               <div key={node.id} className="h-32 border border-white/5 bg-white/[0.01] rounded-2xl flex flex-col justify-between p-5 hover:bg-white/[0.03] hover:border-white/10 transition-colors">
                  <div className="text-blue-500 flex justify-between items-center">
                    <Fingerprint size={16} />
                    <span className="text-[9px] font-mono bg-blue-500/10 text-blue-400 px-1.5 py-0.5 rounded uppercase tracking-wider">{node.rate}</span>
                  </div>
                  <div>
                    <div className="text-[10px] text-neutral-500 font-mono">OBSERVATION_NODE</div>
                    <div className="text-xs font-bold text-white uppercase font-mono">NODE_REF_{node.id}</div>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </div>
      
      {/* Hidden search-engine indexing tags */}
      <div className="sr-only">
        Keywords: digit interaction JALH, manual dexterity research, quadrant J study, Member Zero kinetic results, ridge mapping science, behavioral habit extraction, manual interaction analysis, glass interface friction.
      </div>
    </div>
  );
}
