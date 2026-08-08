import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Database, 
  Activity, 
  User, 
  Shield, 
  Clock, 
  Sliders, 
  CheckCircle, 
  AlertCircle, 
  LineChart, 
  Info,
  Layers,
  FlaskConical,
  Award
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { JALH_LEXICON } from '../data/lexicon';
import { injectSemanticLinks } from '../utils/internalLinker';
import ColorPatch from '../components/ColorPatch';
import SEO from '../components/SEO';
import RelatedResearchNodes from '../components/RelatedResearchNodes';
import FAQAccordion from '../components/FAQAccordion';
import NetworkNode from '../components/NetworkNode';

export default function LexiconDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const entry = JALH_LEXICON.find(e => e.slug === slug);

  // Live simulation states
  const [tension, setTension] = useState<number>(45);
  const [frequency, setFrequency] = useState<number>(8);
  const [dampening, setDampening] = useState<number>(60);
  const [isCalibrated, setIsCalibrated] = useState<boolean>(false);

  if (!entry) {
    return (
      <div className="min-h-screen flex items-center justify-center p-12 text-black font-mono">
        <div className="text-center">
          <div className="text-4xl mb-4">404</div>
          <div>NODE_NOT_FOUND</div>
          <Link to="/" className="mt-8 block text-blue-600 underline">Return to Root</Link>
        </div>
      </div>
    );
  }

  const CategoryIcon = {
    Kinetic: Activity,
    Aesthetic: Shield,
    Infrastructure: Database,
    Personnel: User,
    Historical: Clock
  }[entry.category];

  const LayoutStyles = {
    technical: "border-l-4 border-blue-600 pl-8",
    minimal: "max-w-xl mx-auto text-left py-12",
    brutalist: "bg-neutral-900 text-white p-12 pr-16 text-lg font-normal rounded-3xl shadow-2xl relative overflow-hidden border border-neutral-800",
    academic: "max-w-2xl border border-neutral-200 p-12 rounded-3xl shadow-sm bg-white"
  }[entry.layout];

  // Dynamic parameters calculated based on entry name to feel clinical and authentic
  const charSum = entry.word.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const calculatedTension = ((charSum % 100) / 100).toFixed(2);
  const calculatedEntropy = ((charSum % 40) / 10).toFixed(2);
  const calculatedLatency = (10 + (charSum % 15)).toFixed(1);
  const calculatedStability = (98.5 + ((charSum % 15) / 10)).toFixed(2);

  const nodeFaqs = [
    {
      q: `How is ${entry.word} measured?`,
      a: `Under Member Zero's direct supervision at the JALH Laboratory, ${entry.word} is monitored via custom photogrammetric digit-tracking matrices, acoustic feedback loops, and high-frequency facial zygomatic muscle observation to ensure consistent data registry.`
    },
    {
      q: `What is the primary behavioral objective of ${entry.word}?`,
      a: `The objective is establishing and maintaining a calibrated 'happy' baseline delta. This prevents unconscious kinetic and manual habits from disrupting facial aesthetic stabilization protocols under high-stress observational circumstances.`
    },
    {
      q: `Can this individual research node be acquired?`,
      a: `Yes. Under the decentralized governance of the JALH archive, intellectual property and custody keys for individual research nodes (including the JALH.com primary domain node) can be inquired about through our official cryptographic inquiry gateway.`
    }
  ];

  // Generate SVG path points for the interactive stabilizer widget
  const generatePath = () => {
    let path = `M 0 60`;
    const amplitude = tension * 0.6;
    const waves = frequency;
    for (let i = 0; i <= 300; i++) {
      const x = i;
      const decay = Math.exp(-((i - 150) ** 2) / (2 * (dampening * 3) ** 2));
      const y = 60 + Math.sin((i / 300) * waves * Math.PI * 2) * amplitude * decay;
      path += ` L ${x} ${y}`;
    }
    return path;
  };

  return (
    <div className="relative min-h-screen bg-transparent pt-32 pb-32 px-6 md:px-12 text-neutral-900 overflow-hidden font-sans">
      <ColorPatch color="bg-blue-600" size="w-[50rem] h-[50rem]" opacity={0.04} className="-top-48 -right-48" />
      <ColorPatch color="bg-purple-600" size="w-[40rem] h-[40rem]" opacity={0.03} className="bottom-0 left-0" />
      
      <SEO 
        title={`${entry.word} | Research Node ${entry.node}`}
        description={`Detailed research analysis of Node ${entry.node}: ${entry.definition.slice(0, 150)}...`}
        keywords={`${entry.word}, ${entry.keywords.join(', ')}, JALH lexicon, Member Zero research, cognitive framework, aesthetic stabilization`}
        type="article"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "DefinedTerm",
            "name": entry.word,
            "description": entry.definition,
            "inDefinedTermSet": "https://jalh.com/lexicon",
            "url": `https://jalh.com/research/${entry.slug}`
          },
          {
            "@context": "https://schema.org",
            "@type": "MedicalScholarlyArticle",
            "headline": `${entry.word} Comprehensive Analysis & Laboratory Telemetry`,
            "author": { "@type": "Person", "name": "Member Zero" },
            "publisher": { "@type": "Organization", "name": "JALH Research" },
            "about": entry.word,
            "description": `Node ${entry.node} documentation and behavioral analysis of ${entry.word}.`
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": nodeFaqs.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
            }))
          }
        ]}
      />

      <div className="max-w-6xl mx-auto space-y-16">
        <div>
          <Link to="/archive" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-black transition-colors">
            <ArrowLeft size={12} /> Back to Repository Index
          </Link>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
        >
          {/* LEFT PANEL: Metadata & Clinical Status Header */}
          <div className="lg:col-span-4 space-y-8">
            <div className="p-6 bg-white border border-neutral-200/60 rounded-2xl shadow-sm space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-600 rounded-xl text-white shrink-0">
                  <CategoryIcon size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-blue-600 font-bold">Category Cluster</div>
                  <div className="text-sm font-extrabold text-neutral-900">{entry.category}</div>
                </div>
              </div>

              <div className="h-[1px] bg-neutral-100" />

              <div className="space-y-1">
                <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-widest">Global Register Node</span>
                <h1 className="text-xl font-black text-neutral-900 leading-tight tracking-tight uppercase">
                  {entry.word}
                </h1>
                <div className="inline-flex items-center gap-1.5 text-[10px] font-mono text-neutral-500">
                  <span>ID:</span>
                  <span className="text-blue-600 font-bold">{entry.node}</span>
                </div>
              </div>

              <div className="h-[1px] bg-neutral-100" />

              <div className="space-y-2">
                <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-bold">Context Keywords</div>
                <div className="flex flex-wrap gap-1.5">
                  {entry.keywords.map(k => (
                    <span key={k} className="text-[9px] font-mono bg-neutral-100 px-2.5 py-1 rounded text-neutral-600 border border-neutral-200/20">
                      #{k.replace(/\s+/g, '').toLowerCase()}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Cryptographic Ledger Info Card (Layer 1) */}
            <div className="p-6 bg-neutral-900 text-neutral-400 rounded-2xl border border-neutral-800 space-y-4 font-mono text-[10px]">
              <div className="flex justify-between items-center text-white">
                <span className="font-bold tracking-widest text-[9px] uppercase">Ledger Proof</span>
                <span className="text-green-500 animate-pulse">● Live Sync</span>
              </div>
              <div className="space-y-1 bg-black/40 p-3 rounded border border-neutral-800 break-all text-[9px]">
                <div className="text-neutral-500">HASH:</div>
                <div className="text-neutral-300">0x7c2c46660d9b420bbb5e6892c6ad803a_node_{entry.node.toLowerCase()}</div>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-1">
                <div>
                  <div className="text-neutral-500">Authority</div>
                  <div className="text-white text-xs font-bold">M_0_PRIME</div>
                </div>
                <div>
                  <div className="text-neutral-500">Block Rank</div>
                  <div className="text-white text-xs font-bold">A-Grade #{(charSum % 250) + 1}</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: Highly Robust, Multi-Layer Analytical Corpus */}
          <div className="lg:col-span-8 space-y-10">
            {/* LAYER 2: Core Definition Card */}
            <div className="bg-white border border-neutral-200/60 p-8 md:p-12 rounded-3xl shadow-sm space-y-6">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-blue-50 border border-blue-100 rounded text-[9px] text-blue-700 uppercase tracking-widest font-mono font-bold">
                <Award className="w-3.5 h-3.5" /> Primary Archival Analysis
              </div>
              
              <div className={`${LayoutStyles} space-y-6 relative`}>
                {entry.layout === 'brutalist' && (
                  <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                    <CategoryIcon size={120} />
                  </div>
                )}
                
                <h2 className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-blue-600">
                  Syntactic Definition & Structural Bounds
                </h2>

                <div className="text-base md:text-lg leading-relaxed text-neutral-700 font-light font-sans markdown-body">
                  <ReactMarkdown
                    components={{
                      a: ({ node, ...props }) => {
                        const isInternal = props.href?.startsWith('/');
                        if (isInternal) {
                          return (
                            <Link 
                              to={props.href!} 
                              className="text-blue-600 hover:text-blue-800 font-bold underline decoration-blue-200 underline-offset-4 decoration-2 transition-colors" 
                              {...props as any} 
                            />
                          );
                        }
                        return (
                          <a 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-blue-600 hover:text-blue-800 font-bold underline" 
                            {...props} 
                          />
                        );
                      }
                    }}
                  >
                    {React.useMemo(() => injectSemanticLinks(entry.definition, entry.slug), [entry.definition, entry.slug])}
                  </ReactMarkdown>
                </div>
              </div>

              <div className="h-[1px] bg-neutral-100" />

              {/* LAYER 3: Core Behavioral Parameters Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-2">
                <div className="space-y-1">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-bold">Tension Matrix</div>
                  <div className="text-base font-extrabold text-neutral-900 font-mono">{calculatedTension} N-m</div>
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-bold">Entropy Delta</div>
                  <div className="text-base font-extrabold text-blue-600 font-mono">Δ {calculatedEntropy}%</div>
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-bold">Crawl Latency</div>
                  <div className="text-base font-extrabold text-neutral-900 font-mono">{calculatedLatency} ms</div>
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-bold">Stability Delta</div>
                  <div className="text-base font-extrabold text-green-600 font-mono">{calculatedStability}%</div>
                </div>
              </div>
            </div>

            {/* LAYER 4: Interactive Live "Kinetic Curve Stabilizer" Sandbox */}
            <div className="bg-white border border-neutral-200/60 p-8 md:p-10 rounded-3xl shadow-sm space-y-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-widest text-blue-600 font-bold">
                    <FlaskConical className="w-3.5 h-3.5" /> Kinetic Sandbox Engine
                  </div>
                  <h3 className="text-lg font-black text-neutral-900 uppercase">
                    Biometric Curve Calibrator
                  </h3>
                  <p className="text-xs text-neutral-500 font-light">
                    Manually tune simulated nerve tension and wave frequencies to match the {entry.word} baseline.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setTension(45);
                    setFrequency(8);
                    setDampening(60);
                    setIsCalibrated(true);
                    setTimeout(() => setIsCalibrated(false), 3000);
                  }}
                  className="px-4 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 rounded-xl text-xs font-mono font-bold transition-all border border-neutral-200/60 flex items-center gap-1.5 shrink-0"
                >
                  Reset Baseline
                </button>
              </div>

              {/* Dynamic Wave Chart */}
              <div className="relative h-32 bg-neutral-950 rounded-2xl border border-neutral-900 overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                
                {/* SVG Live Path */}
                <svg className="w-full h-full max-w-[300px]" viewBox="0 0 300 120">
                  <motion.path
                    d={generatePath()}
                    fill="none"
                    stroke={isCalibrated ? "#22c55e" : "#3b82f6"}
                    strokeWidth="2"
                    transition={{ ease: "easeInOut" }}
                  />
                  {/* Baseline grid line */}
                  <line x1="0" y1="60" x2="300" y2="60" stroke="#ffffff" strokeOpacity="0.1" strokeDasharray="4 4" />
                </svg>

                <div className="absolute bottom-3 right-4 flex items-center gap-2 font-mono text-[9px]">
                  <span className="text-neutral-500">Mode:</span>
                  <span className={isCalibrated ? "text-green-500 font-bold" : "text-blue-500 font-bold animate-pulse"}>
                    {isCalibrated ? "CALIBRATED" : "ACTIVE MONITORING"}
                  </span>
                </div>
              </div>

              {/* Parameter Sliders */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                <div className="space-y-2">
                  <div className="flex justify-between font-mono text-[10px]">
                    <span className="text-neutral-400 font-bold">Nerve Tension</span>
                    <span className="text-neutral-900 font-extrabold">{tension} N</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={tension}
                    onChange={(e) => setTension(Number(e.target.value))}
                    className="w-full accent-blue-600 bg-neutral-100 h-1.5 rounded-lg cursor-pointer"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between font-mono text-[10px]">
                    <span className="text-neutral-400 font-bold">Cycle Frequency</span>
                    <span className="text-neutral-900 font-extrabold">{frequency} Hz</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="20"
                    value={frequency}
                    onChange={(e) => setFrequency(Number(e.target.value))}
                    className="w-full accent-blue-600 bg-neutral-100 h-1.5 rounded-lg cursor-pointer"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between font-mono text-[10px]">
                    <span className="text-neutral-400 font-bold">Dampening Decay</span>
                    <span className="text-neutral-900 font-extrabold">{dampening} ms</span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="100"
                    value={dampening}
                    onChange={(e) => setDampening(Number(e.target.value))}
                    className="w-full accent-blue-600 bg-neutral-100 h-1.5 rounded-lg cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* LAYER 5: Methodological Protocol Sequence (Step-by-step authority layer) */}
            <div className="bg-white border border-neutral-200/60 p-8 md:p-10 rounded-3xl shadow-sm space-y-6">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-widest text-blue-600 font-bold">
                  <Layers className="w-3.5 h-3.5" /> Verification Checklist
                </div>
                <h3 className="text-lg font-black text-neutral-900 uppercase">
                  Empirical Registry Protocol
                </h3>
              </div>

              <div className="space-y-4 font-sans text-xs text-neutral-600">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center font-mono font-bold text-blue-600 shrink-0 mt-0.5">
                    1
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-neutral-800 uppercase text-[11px] tracking-wide">Postural Lock Isolation</h4>
                    <p className="font-light leading-relaxed">
                      Lock active sensory-motor channels at the physical observation node. Stabilize the postural spine relative to the zygomatic midline.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center font-mono font-bold text-blue-600 shrink-0 mt-0.5">
                    2
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-neutral-800 uppercase text-[11px] tracking-wide">Frequency Tuning</h4>
                    <p className="font-light leading-relaxed">
                      Adjust ambient sound wave harmonics within the testing enclosure to neutralize micro-flinches, stabilizing manual finger friction deltas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center font-mono font-bold text-blue-600 shrink-0 mt-0.5">
                    3
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-neutral-800 uppercase text-[11px] tracking-wide">Immutable Ledger Proof Registration</h4>
                    <p className="font-light leading-relaxed">
                      Encrypt validated telemetry parameters into a persistent digital payload and push directly to Archive Node 001.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* LAYER 6: Node-Specific FAQAccordion (SEO visibility masterpiece) */}
            <FAQAccordion
              title={`${entry.word} Structural FAQ`}
              items={nodeFaqs}
            />

            {/* Related Research Nodes component for increasing internal linking density */}
            <RelatedResearchNodes currentSlug={entry.slug} currentCategory={entry.category} />
          </div>
        </motion.div>
      </div>

      <div className="sr-only">
        <h2>About {entry.word} in the JALH Archive</h2>
        <p>
          The research node {entry.node} focuses on {entry.word}. This is part of the broader JALH (Judiciously Always Looking Happy) study conducted by Member Zero. 
          Detailed tracking of {entry.keywords.join(', ')} is available at jalh.com. Buy JALH.com for full intellectual property rights to the JALH framework.
        </p>
      </div>
    </div>
  );
}
