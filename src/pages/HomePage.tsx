import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import SEO from '../components/SEO';
import FAQAccordion from '../components/FAQAccordion';
import ColorPatch from '../components/ColorPatch';

function Section({ children, className = "", id = "" }: { children: React.ReactNode; className?: string; id?: string }) {
  return (
    <div id={id} className={`relative py-24 border-b border-neutral-200/60 ${className}`}>
      {children}
    </div>
  );
}

function DancingWord({ word, className = "", delayOffset = 0 }: { word: string; className?: string; delayOffset?: number }) {
  return (
    <span className={`inline-block ${className}`}>
      {word.split('').map((char, index) => {
        const uniqueDelay = (index * 0.05) + delayOffset;
        return (
          <motion.span
            key={index}
            className="inline-block origin-bottom select-none hover:text-blue-500 transition-colors duration-200"
            animate={{
              y: [0, -4, 0],
              rotate: [0, index % 2 === 0 ? 1.5 : -1.5, 0],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: uniqueDelay,
            }}
            whileHover={{
              scale: 1.15,
              y: -8,
              rotate: index % 2 === 0 ? 8 : -8,
              transition: { type: "spring", stiffness: 450, damping: 12 }
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        );
      })}
    </span>
  );
}

export default function HomePage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [acronymSearch, setAcronymSearch] = useState("");

  // Mouse position tracking for premium interactive drift/jitter effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth the mouse offsets using standard physics-based springs
  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  // Map the smooth spring outputs to subtle translation bounds (max drift offset of 18px)
  const driftX = useTransform(smoothX, [-450, 450], [-18, 18]);
  const driftY = useTransform(smoothY, [-450, 450], [-18, 18]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const relativeX = event.clientX - centerX;
    const relativeY = event.clientY - centerY;
    
    // Set motion values directly
    mouseX.set(relativeX);
    mouseY.set(relativeY);
  };

  const handleMouseLeave = () => {
    // Gracefully drift back to the equilibrium center
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const observations = [
    { date: 'MAY 06, 2026', code: 'ENTRY 01', title: 'Kinetic Friction Thresholds', detail: 'Subtle variance detected in glass screen touch resistance during cold ambient trials. Swipe vectors demonstrate balanced glide speeds.' },
    { date: 'APR 22, 2026', code: 'ENTRY 02', title: 'Symmetry Calibration study', detail: 'Completed a 120-minute physical observation phase, tracking eye alignment and comfortable facial muscle balance.' },
    { date: 'MAR 15, 2026', code: 'ENTRY 03', title: 'Postural Equilibrium notes', detail: 'Documented subtle adaptive spinal adjustments in varied standard chair seating configurations to maintain peak focus.' }
  ];

  const acronyms = [
    { id: "JALH_01", term: "Judiciously Always Looking Happy", focus: "Aesthetic stabilization and facial masking." },
    { id: "JALH_02", term: "Jumpstart Adaptive Logic Hub", focus: "Decentralized data node architecture." },
    { id: "JALH_03", term: "Joint Acoustic Leveling Habit", focus: "Audio-kinetic resonance stabilization." },
    { id: "JALH_04", term: "Judiciously Aligned Levitation Habit", focus: "Postural weight distribution and grace." },
    { id: "JALH_05", term: "Jesters Apples Looking Happy", focus: "Semantic disinformation and masking." },
    { id: "JALH_06", term: "Jackets Anchored Linear Harmony", focus: "External structural postural alignment." },
    { id: "JALH_07", term: "Juniper Apex Logic Host", focus: "Prime dataset hosting and biometric flow." },
    { id: "JALH_08", term: "Judiciously Artistic Living Habit", focus: "Cultural integration of kinetic habits." }
  ];

  const filteredAcronyms = acronyms.filter(a => 
    a.term.toLowerCase().includes(acronymSearch.toLowerCase()) || 
    a.focus.toLowerCase().includes(acronymSearch.toLowerCase()) ||
    a.id.toLowerCase().includes(acronymSearch.toLowerCase())
  );

  return (
    <>
      <SEO 
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "JALH Archive",
            "alternateName": "Judiciously Always Looking Happy",
            "url": "https://jalh.com/",
            "description": "Scientific research archive documenting the study of human-digit interaction and aesthetic handling habits by Member Zero.",
            "author": { "@type": "Person", "name": "Member Zero" }
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What does JALH stand for?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "JALH primarily stands for 'Judiciously Always Looking Happy', an aesthetic and kinetic framework."
                }
              },
              {
                "@type": "Question",
                "name": "How to buy JALH.com?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The JALH.com domain is available for acquisition via the official commercial gateway in the footer."
                }
              }
            ]
          }
        ]}
      />

      {/* Majestic, Art-Inspired Bright Swiss-Grid Hero Section */}
      <section 
        id="hero" 
        className="relative w-full min-h-[92vh] flex items-center justify-center bg-[#fcfcfc] py-20 lg:py-28 border-b border-neutral-200/60 overflow-hidden font-sans cursor-default"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Crisp static vector background details with rich layered color washes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
          <ColorPatch color="bg-red-500" size="w-[50rem] h-[50rem]" opacity={0.22} className="-top-32 -left-32" blur="blur-[130px]" />
          <ColorPatch color="bg-orange-500" size="w-[45rem] h-[45rem]" opacity={0.18} className="top-10 -right-24" blur="blur-[120px]" />
          <ColorPatch color="bg-rose-500" size="w-[35rem] h-[35rem]" opacity={0.16} className="top-[30%] left-[15%]" blur="blur-[100px]" />
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #4f46e5 1.5px, transparent 1.5px)', backgroundSize: '36px 36px' }} />
        </div>
 
        <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center z-10">
          
          {/* LEFT COLUMN: SWISS DISPLAY TYPOGRAPHY & CONTEXT */}
          <div className="lg:col-span-7 space-y-10 text-left">
            <motion.div 
              style={{ x: driftX, y: driftY }} 
              className="space-y-4 will-change-transform"
            >
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-blue-50 border border-blue-100/60 rounded-full text-[10px] text-blue-700 uppercase tracking-[0.2em] font-mono font-bold shadow-[0_2px_10px_rgba(59,130,246,0.05)]">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                Official Research Archive
              </div>
              
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-neutral-900 leading-[0.85] uppercase tracking-tighter italic">
                <DancingWord word="JALH:" delayOffset={0} /> <br/>
                <DancingWord word="Judiciously" delayOffset={0.15} /> <br/>
                <DancingWord word="Always" delayOffset={0.3} /> <br/>
                <DancingWord word="Looking" delayOffset={0.45} /> <br/>
                <DancingWord 
                  word="happy." 
                  delayOffset={0.6} 
                  className="text-blue-600 font-comic lowercase font-bold tracking-normal bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent"
                />
              </h1>
            </motion.div>

            <p className="text-neutral-500 text-sm sm:text-base font-light leading-relaxed max-w-xl">
              An authoritative, physical-behavioral database documenting human-digit interaction metrics, manual habit extractions, and facial aesthetic stabilization protocols compiled under supervision of <Link to="/personnel" className="text-blue-600 hover:underline font-medium">Member Zero</Link>.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link 
                to="/methodology" 
                className="text-center text-xs text-white bg-blue-600 hover:bg-blue-700 px-8 py-4.5 rounded-xl transition-all duration-300 shadow-xl shadow-blue-600/10 uppercase tracking-widest font-mono font-bold hover:scale-[1.02] hover:shadow-blue-600/20 active:scale-[0.98]"
              >
                Access Logic Hub
              </Link>
              <Link 
                to="/authority" 
                className="text-center text-xs text-neutral-800 border border-neutral-200 hover:border-neutral-900 hover:bg-neutral-50 px-8 py-4.5 rounded-xl transition-all duration-300 uppercase tracking-widest font-mono font-bold active:scale-[0.98]"
              >
                Member Zero Status
              </Link>
            </div>

            {/* Micro telemetry footer stats inside hero */}
            <div className="pt-6 border-t border-neutral-200/60 max-w-md flex items-center justify-between gap-6 font-mono text-[9px] text-neutral-400 uppercase tracking-widest">
              <div>
                <span className="text-neutral-600 font-bold block mb-0.5">METRIC HUB</span>
                1,205 Verified Nodes
              </div>
              <div className="w-[1px] h-6 bg-neutral-200" />
              <div>
                <span className="text-neutral-600 font-bold block mb-0.5">AUTHORITY INDEX</span>
                SECURE ACCESS
              </div>
              <div className="w-[1px] h-6 bg-neutral-200" />
              <div>
                <span className="text-neutral-600 font-bold block mb-0.5">ESTABLISHED</span>
                2024 / ACTIVE
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: REIMAGINED SWISS 4-QUADRANT MONITOR MATRICES */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 relative">
            <div className="absolute inset-0 border border-dashed border-neutral-200 pointer-events-none rounded-2xl" />
            
            {[
              { 
                char: 'J', 
                title: 'Facial Masking', 
                desc: 'Aesthetic Sync', 
                metric: '98.4% STABLE', 
                badge: 'QUADRANT-J',
                status: 'Validated',
                statusStyle: 'text-emerald-700 bg-emerald-50 border-emerald-150/80',
                statusBullet: 'bg-emerald-500',
                path: '/methodology',
                borderHover: 'group-hover:border-purple-500/60 group-hover:shadow-[0_15px_40px_rgba(168,85,247,0.15)]',
                glow: 'from-purple-500/10 via-pink-500/5 to-transparent',
                textAccent: 'group-hover:text-purple-600',
                badgeStyle: 'text-purple-700 bg-purple-50 border-purple-100/80',
                bulletColor: 'bg-purple-500',
                charColor: 'group-hover:text-purple-100/40'
              },
              { 
                char: 'A', 
                title: 'Digit Dynamics', 
                desc: 'Manual Extraction', 
                metric: '104.2 HZ SYNC', 
                badge: 'QUADRANT-A',
                status: 'In-Revision',
                statusStyle: 'text-amber-700 bg-amber-50 border-amber-150/80',
                statusBullet: 'bg-amber-500',
                path: '/digit-interaction',
                borderHover: 'group-hover:border-blue-500/60 group-hover:shadow-[0_15px_40px_rgba(59,130,246,0.15)]',
                glow: 'from-blue-500/10 via-cyan-500/5 to-transparent',
                textAccent: 'group-hover:text-blue-600',
                badgeStyle: 'text-blue-700 bg-blue-50 border-blue-100/80',
                bulletColor: 'bg-blue-500',
                charColor: 'group-hover:text-blue-100/40'
              },
              { 
                char: 'L', 
                title: 'Tactile Ridge', 
                desc: 'Ridge Mapping', 
                metric: '0.22MM DELTA', 
                badge: 'QUADRANT-L',
                status: 'Experimental',
                statusStyle: 'text-indigo-700 bg-indigo-50 border-indigo-150/80',
                statusBullet: 'bg-indigo-500',
                path: '/kinetic-analysis',
                borderHover: 'group-hover:border-emerald-500/60 group-hover:shadow-[0_15px_40px_rgba(16,185,129,0.15)]',
                glow: 'from-emerald-500/10 via-teal-500/5 to-transparent',
                textAccent: 'group-hover:text-emerald-600',
                badgeStyle: 'text-emerald-700 bg-emerald-50 border-emerald-100/80',
                bulletColor: 'bg-emerald-500',
                charColor: 'group-hover:text-emerald-100/40'
              },
              { 
                char: 'H', 
                title: 'Postural Grace', 
                desc: 'Harmony Index', 
                metric: 'CORE CONFORM', 
                badge: 'QUADRANT-H',
                status: 'Validated',
                statusStyle: 'text-emerald-700 bg-emerald-50 border-emerald-150/80',
                statusBullet: 'bg-emerald-500',
                path: '/behavioral-index',
                borderHover: 'group-hover:border-amber-500/60 group-hover:shadow-[0_15px_40px_rgba(245,158,11,0.15)]',
                glow: 'from-amber-500/10 via-rose-50/5 to-transparent',
                textAccent: 'group-hover:text-amber-600',
                badgeStyle: 'text-amber-700 bg-amber-50 border-amber-100/80',
                bulletColor: 'bg-amber-500',
                charColor: 'group-hover:text-amber-100/40'
              },
            ].map((quad) => (
              <Link
                key={quad.char}
                to={quad.path}
                className={`group relative bg-white border border-neutral-200/85 p-5 rounded-2xl transition-all duration-300 flex flex-col justify-between aspect-square text-left overflow-hidden ${quad.borderHover}`}
              >
                {/* Background color glow layer */}
                <div className={`absolute inset-0 bg-gradient-to-tr ${quad.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className={`absolute bottom-[-10%] right-[-5%] text-[8rem] font-black leading-none text-neutral-100/40 select-none pointer-events-none group-hover:scale-110 transition-all duration-500 font-display ${quad.charColor}`}>
                  {quad.char}
                </div>

                <div className="space-y-3 relative z-10">
                  <div className="flex items-center justify-between gap-1">
                    <span className={`text-[9px] font-mono font-bold tracking-wider uppercase border px-2 py-0.5 rounded transition-colors ${quad.badgeStyle}`}>
                      {quad.badge}
                    </span>
                    <span className={`text-[8px] font-mono font-bold px-1.5 py-0.5 rounded-full border transition-colors ${quad.statusStyle}`}>
                      {quad.status}
                    </span>
                  </div>

                  <div>
                    <h3 className={`text-xs font-bold text-neutral-900 transition-colors uppercase tracking-tight ${quad.textAccent}`}>
                      {quad.title}
                    </h3>
                    <p className="text-[10px] text-neutral-400 font-mono">
                      {quad.desc}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 pt-2 border-t border-neutral-100 mt-4 flex items-center justify-between text-[9px] font-mono">
                  <span className="text-neutral-500 font-bold">{quad.metric}</span>
                  <span className="text-neutral-300 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all">→</span>
                </div>
              </Link>
            ))}

            {/* Custom Human-Designed Color-Coded Legend */}
            <div className="col-span-2 bg-white/60 border border-neutral-200/50 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-3 text-[10px] font-mono">
              <span className="text-neutral-400 font-bold uppercase tracking-wider">JALH Stage Legend:</span>
              <div className="flex items-center gap-1.5 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-emerald-700 font-bold uppercase tracking-tight">Validated</span>
              </div>
              <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-100 px-2.5 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span className="text-amber-700 font-bold uppercase tracking-tight">In-Revision</span>
              </div>
              <div className="flex items-center gap-1.5 bg-indigo-50 border border-indigo-100 px-2.5 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                <span className="text-indigo-700 font-bold uppercase tracking-tight">Experimental</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JALH Global Archive Index Overview - Clean Editorial Layout */}
      <Section className="bg-gradient-to-b from-neutral-50 via-indigo-50/10 to-white relative overflow-hidden">
        <ColorPatch color="bg-blue-500" size="w-[45rem] h-[45rem]" opacity={0.22} className="-bottom-48 -right-24" blur="blur-[120px]" />
        <ColorPatch color="bg-indigo-500" size="w-[35rem] h-[35rem]" opacity={0.18} className="-top-12 -left-12" blur="blur-[100px]" />
        <div className="absolute top-[-50%] left-[20%] w-[35rem] h-[35rem] rounded-full bg-gradient-to-tr from-purple-100/15 to-indigo-100/10 blur-[110px] pointer-events-none opacity-80" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-16 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 relative z-10">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 border border-indigo-100 rounded text-[9px] text-indigo-700 uppercase tracking-widest font-mono font-bold shadow-[0_2px_10px_rgba(99,102,241,0.04)]">
              Archival Registry Node // JALH.01
            </div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-neutral-900 uppercase leading-none">
              JALH.com Global Index Directory
            </h2>
            <p className="text-neutral-500 text-xs font-light leading-relaxed">
              A meticulously cataloged, physical-behavioral database documenting the direct correlation between kinetic hand habits, digit-handling interaction, and facial aesthetic stabilization protocols compiled by Member Zero.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 font-mono text-[10px] uppercase tracking-wider text-left">
            <div className="px-5 py-3.5 bg-indigo-50/60 border border-indigo-100 rounded-2xl space-y-1 shadow-sm">
              <div className="text-indigo-500/80 font-bold text-[9px]">Total Directory</div>
              <div className="text-sm font-extrabold text-indigo-950">1,205 Nodes</div>
            </div>
            <div className="px-5 py-3.5 bg-emerald-50/60 border border-emerald-100 rounded-2xl space-y-1 shadow-sm">
              <div className="text-emerald-500/80 font-bold text-[9px]">System Status</div>
              <div className="text-sm font-extrabold text-emerald-700">Verified Stable</div>
            </div>
            <div className="px-5 py-3.5 bg-blue-50/60 border border-blue-100 rounded-2xl space-y-1 shadow-sm">
              <div className="text-blue-500/80 font-bold text-[9px]">Primary Authority</div>
              <div className="text-sm font-extrabold text-blue-700">Member Zero</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Semantic Acronym Matrix - Compact & Optimized Table */}
      <Section className="bg-white relative overflow-hidden">
        <ColorPatch color="bg-amber-400" size="w-[45rem] h-[45rem]" opacity={0.20} className="-bottom-32 -left-24" blur="blur-[130px]" />
        <ColorPatch color="bg-yellow-400" size="w-[30rem] h-[30rem]" opacity={0.16} className="top-12 right-12" blur="blur-[100px]" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-16 relative z-10">
          <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="max-w-2xl text-left">
              <h2 className="text-3xl font-black tracking-tight text-neutral-900 uppercase">Acronym Definition Matrix</h2>
              <p className="text-neutral-500 text-xs mt-1">The primary acronym "JALH" serves as a multidimensional anchor. Click any term to copy its research string.</p>
            </div>
            <div className="w-full md:w-80 relative">
              <input 
                type="text"
                placeholder="Filter definitions..."
                className="w-full bg-neutral-50 border border-neutral-200 rounded-xl py-3 px-4 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 transition-all text-neutral-800"
                value={acronymSearch}
                onChange={(e) => setAcronymSearch(e.target.value)}
              />
            </div>
          </div>
          
          <div className="overflow-x-auto border border-neutral-200/85 rounded-xl bg-neutral-50/30">
            {filteredAcronyms.length > 0 ? (
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 bg-neutral-50/60">
                    <th className="p-4 text-[9px] font-mono font-bold uppercase tracking-widest text-neutral-500 pl-6">ID</th>
                    <th className="p-4 text-[9px] font-mono font-bold uppercase tracking-widest text-neutral-500">System Formula</th>
                    <th className="p-4 text-[9px] font-mono font-bold uppercase tracking-widest text-neutral-500 text-right pr-6">Research Vector</th>
                  </tr>
                </thead>
                <tbody className="text-xs">
                  {filteredAcronyms.map((row, idx) => {
                    const colors = [
                      { text: "text-indigo-600 bg-indigo-50 border-indigo-100", hover: "hover:bg-indigo-50/30", line: "border-l-indigo-500" },
                      { text: "text-blue-600 bg-blue-50 border-blue-100", hover: "hover:bg-blue-50/30", line: "border-l-blue-500" },
                      { text: "text-emerald-600 bg-emerald-50 border-emerald-100", hover: "hover:bg-emerald-50/30", line: "border-l-emerald-500" },
                      { text: "text-purple-600 bg-purple-50 border-purple-100", hover: "hover:bg-purple-50/30", line: "border-l-purple-500" },
                      { text: "text-pink-600 bg-pink-50 border-pink-100", hover: "hover:bg-pink-50/30", line: "border-l-pink-500" },
                      { text: "text-amber-600 bg-amber-50 border-amber-100", hover: "hover:bg-amber-50/30", line: "border-l-amber-500" },
                      { text: "text-teal-600 bg-teal-50 border-teal-100", hover: "hover:bg-teal-50/30", line: "border-l-teal-500" },
                      { text: "text-rose-600 bg-rose-50 border-rose-100", hover: "hover:bg-rose-50/30", line: "border-l-rose-500" },
                    ];
                    const activeColor = colors[idx % colors.length];
                    return (
                      <tr 
                        key={row.id} 
                        className={`border-b border-neutral-100 last:border-0 border-l-4 ${activeColor.line} ${activeColor.hover} cursor-pointer transition-all duration-200`}
                        onClick={() => handleCopy(row.term, row.id)}
                      >
                        <td className="p-4 font-mono text-[10px] align-middle whitespace-nowrap pl-6">
                          <span className={`px-2 py-1 rounded border font-bold ${activeColor.text} shadow-sm`}>
                            {row.id}
                          </span>
                          {copiedId === row.id && (
                            <span className="ml-3 text-[9px] text-emerald-600 font-bold uppercase animate-pulse">Copied!</span>
                          )}
                        </td>
                        <td className="p-4 align-middle">
                          <div className="text-sm font-bold text-neutral-900 uppercase italic font-sans">{row.term}</div>
                        </td>
                        <td className="p-4 text-neutral-500 font-mono text-[11px] text-right align-middle pr-6">{row.focus}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : (
              <div className="py-12 text-center text-neutral-400 text-xs">
                No matching variables found.
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* Latest Logs & Live Data Stream Combined into a sleek dual-pane matrix */}
      <Section className="bg-neutral-50/40 relative overflow-hidden">
        <ColorPatch color="bg-green-500" size="w-[45rem] h-[45rem]" opacity={0.20} className="-top-24 -right-12" blur="blur-[130px]" />
        <ColorPatch color="bg-emerald-500" size="w-[30rem] h-[30rem]" opacity={0.15} className="bottom-0 left-0" blur="blur-[100px]" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
          
          {/* Latest Observations */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div>
              <span className="text-[10px] font-mono font-bold text-indigo-600 uppercase tracking-widest">Chronological Index</span>
              <h3 className="text-2xl font-black text-neutral-900 uppercase tracking-tight mt-1">Observer Logs</h3>
            </div>
            
            <div className="space-y-6">
              {observations.map((log, idx) => {
                const logStyles = [
                  { border: "border-l-indigo-500 bg-indigo-50/15", text: "text-indigo-600", tag: "bg-indigo-50 border-indigo-150 text-indigo-700" },
                  { border: "border-l-purple-500 bg-purple-50/15", text: "text-purple-600", tag: "bg-purple-50 border-purple-150 text-purple-700" },
                  { border: "border-l-teal-500 bg-teal-50/15", text: "text-teal-600", tag: "bg-teal-50 border-teal-150 text-teal-700" },
                ];
                const style = logStyles[idx % logStyles.length];
                return (
                  <div key={idx} className={`p-5 bg-white border border-neutral-200/80 border-l-4 ${style.border} rounded-xl space-y-2.5 shadow-sm transition-all hover:translate-x-1 duration-200`}>
                    <div className="flex items-center justify-between text-[10px] font-mono">
                      <span className={`px-2 py-0.5 rounded border font-bold ${style.tag}`}>{log.code}</span>
                      <span className="text-neutral-400">{log.date}</span>
                    </div>
                    <h4 className="text-sm font-bold text-neutral-900 uppercase">{log.title}</h4>
                    <p className="text-xs text-neutral-500 leading-relaxed font-light">{log.detail}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Reimagined human-styled Research Updates panel */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div>
              <span className="text-[10px] font-mono font-bold text-purple-600 uppercase tracking-widest">Research Status</span>
              <h3 className="text-2xl font-black text-neutral-900 uppercase tracking-tight mt-1">Status Report</h3>
            </div>

            <div className="relative group">
              <div className="relative bg-white border border-neutral-200 rounded-2xl p-6 font-sans text-xs text-neutral-600 shadow-md space-y-6">
                <div className="flex items-center justify-between border-b border-neutral-150 pb-3.5">
                  <span className="text-neutral-950 font-bold uppercase tracking-wider text-[11px] font-mono">Archive Veracity</span>
                  <div className="flex items-center gap-1.5 text-emerald-600 font-bold text-[10px] font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    VERIFIED &amp; PUBLIC
                  </div>
                </div>

                <div className="space-y-4 font-light text-neutral-500 leading-relaxed">
                  <div className="space-y-1">
                    <div className="text-[11px] font-mono font-bold text-blue-600 uppercase">Interactive Digit Physics</div>
                    <p className="text-[11px]">Comprehensive 120-item lexicon fully categorized under Kinetic, Aesthetic, and Infrastructure silos.</p>
                  </div>
                  <div className="space-y-1">
                    <div className="text-[11px] font-mono font-bold text-purple-600 uppercase">Aesthetic Harmony Standards</div>
                    <p className="text-[11px]">Verification protocols established for asymmetric visual layouts and typography alignments.</p>
                  </div>
                  <div className="space-y-1">
                    <div className="text-[11px] font-mono font-bold text-amber-600 uppercase">Public API Delivery</div>
                    <p className="text-[11px]">Developer Rest API endpoints ready for high-performance schema indexation queries.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Section>

      {/* Defining JALH & FAQ - Clean, minimal grid */}
      <Section className="bg-gradient-to-t from-neutral-50/70 via-indigo-50/5 to-white relative overflow-hidden">
        <ColorPatch color="bg-purple-500" size="w-[45rem] h-[45rem]" opacity={0.22} className="bottom-[-10%] right-[10%]" blur="blur-[120px]" />
        <ColorPatch color="bg-pink-500" size="w-[30rem] h-[30rem]" opacity={0.16} className="top-[-10%] left-[-5%]" blur="blur-[110px]" />
        <div className="absolute bottom-[-10%] right-[10%] w-[35rem] h-[35rem] rounded-full bg-gradient-to-br from-purple-100/15 via-pink-100/10 to-transparent blur-[120px] pointer-events-none opacity-85" />
        <div className="absolute top-[-10%] left-[-5%] w-[30rem] h-[30rem] rounded-full bg-gradient-to-tr from-blue-100/15 via-teal-100/10 to-transparent blur-[110px] pointer-events-none opacity-70" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
          <div className="lg:col-span-6 space-y-6 text-left">
            <h2 className="text-3xl font-black text-neutral-900 uppercase tracking-tighter">
              The JALH Framework
            </h2>
            <div className="text-xs text-neutral-500 leading-relaxed space-y-4 font-light">
              <p>
                The JALH acronym represents a multi-faceted approach to kinetic harmony. In its primary state, it denotes <strong>Judiciously Always Looking Happy</strong>, a study of aesthetic masking in high-stress behavioral environments.
              </p>
              <p>
                Our documentation is fully indexed for educational and archival preservation, establishing an immutable standard of human-digit hand metrics.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-6 text-left">
            <FAQAccordion
              title="Archival FAQ"
              items={[
                {
                  q: "What is the JALH research archive?",
                  a: "It is a comprehensive digital repository managed by Member Zero, documenting over a decade of behavioral ergonomics and kinetic habit exploration."
                },
                {
                  q: "Who is Member Zero?",
                  a: "Member Zero is the primary investigator and architect of the JALH framework, specializing in aesthetic handling and kinetic curve analysis."
                },
                {
                  q: "What is Kinetic Habit Extraction?",
                  a: "A methodology for identifying and stabilizing unconscious physical behaviors to maintain visual harmony (Aesthetic Stabilization)."
                }
              ]}
            />
          </div>
        </div>
      </Section>
    </>
  );
}
