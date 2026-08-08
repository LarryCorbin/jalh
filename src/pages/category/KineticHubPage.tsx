import React, { useState } from 'react';
import { motion } from 'motion/react';
import { JALH_LEXICON } from '../../data/lexicon';
import { Link } from 'react-router-dom';
import { Activity, Shield, Cpu, ArrowUpRight, Search, Sliders, Play, Activity as ActivityIcon } from 'lucide-react';
import SEO from '../../components/SEO';
import biomechanicalHandTelemetry from '../../assets/images/biomechanical_hand_telemetry_1783050587660.jpg';
import { LazyImage } from '../../components/LazyImage';

export default function KineticHubPage() {
  const [search, setSearch] = useState('');
  const [selectedSubTopic, setSelectedSubTopic] = useState<string>('all');
  
  // Interactive biomechanical sandbox state
  const [gripForce, setGripForce] = useState(45);
  const [muscleDwell, setMuscleDwell] = useState(1.2);
  const [testActive, setTestActive] = useState(false);
  const [coordinationScore, setCoordinationScore] = useState(94);

  const triggerGripTest = () => {
    setTestActive(true);
    setTimeout(() => {
      setTestActive(false);
      // Generate realistic biomechanical ratio
      const score = Math.round(100 - Math.abs(gripForce - 50) * 0.8 - muscleDwell * 5);
      setCoordinationScore(score);
    }, 1200);
  };

  const kineticEntries = JALH_LEXICON.filter(
    entry => entry.category === 'Kinetic'
  );

  const filteredEntries = kineticEntries.filter(entry => {
    const matchesSearch = entry.word.toLowerCase().includes(search.toLowerCase()) ||
                          entry.definition.toLowerCase().includes(search.toLowerCase());
    if (selectedSubTopic === 'all') return matchesSearch;
    if (selectedSubTopic === 'protocols') return matchesSearch && entry.word.toLowerCase().includes('protocol');
    if (selectedSubTopic === 'nodes') return matchesSearch && entry.node.startsWith('DYN_NODE');
    return matchesSearch;
  });

  const subTopics = [
    { id: 'all', label: 'All Kinetic Telemetry' },
    { id: 'protocols', label: 'Operational Protocols' },
    { id: 'nodes', label: 'Dynamic Nodes' },
  ];

  return (
    <>
      <SEO 
        title="Kinetic Research & Biomechanical Habit Extraction Hub"
        description="Explore the authoritative archive of kinetic habits, biometric coordination, manual friction protocols, and muscle-memory stabilization indices under JALH guidelines."
        keywords="kinetic research, biomechanical extraction, manual dexterity, muscle memory tracking, JALH telemetry, kinetic node"
        schema={[{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Kinetic Research and Biomechanical Extraction Archive Hub",
          "url": "https://jalh.com/category/kinetic",
          "description": "Primary repository of physical telemetry files, muscle feedback models, and biomechanical coordination files verified by Member Zero.",
          "isPartOf": {
            "@type": "ResearchProject",
            "name": "JALH (Judiciously Always Looking Happy)",
            "url": "https://jalh.com"
          },
          "about": {
            "@type": "Thing",
            "name": "Biomechanical Habit Optimization"
          }
        }]}
      />

      <div className="pt-40 pb-24 px-6 md:px-12 bg-[#0B0F17] text-gray-100 min-h-screen font-mono">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* Header Block with Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-gray-800 pb-12">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-xs text-emerald-400">
                <Activity className="w-3.5 h-3.5 animate-pulse" />
                <span>CATEGORY HUB // CORE KINETICS</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-light text-white tracking-tight uppercase">
                Kinetic Habit <br />
                <span className="font-semibold text-emerald-400">Extraction Directory</span>
              </h1>
              
              <p className="text-gray-400 text-sm md:text-base leading-relaxed font-sans font-light">
                Welcome to the centralized ledger for Kinetic Habit tracking. This node archives real-time biometric loops, muscular telemetry, coordination alignment maps, and operational friction protocols. Our scientific model ensures absolute physical public happiness by isolating micro-tensions.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 text-[10px] font-mono">
                <div className="p-4 bg-gray-900/40 border border-gray-800/80 rounded-xl">
                  <span className="text-gray-500 block">TOTAL RECORDS</span>
                  <span className="text-sm text-emerald-400 font-bold">{kineticEntries.length} Files</span>
                </div>
                <div className="p-4 bg-gray-900/40 border border-gray-800/80 rounded-xl">
                  <span className="text-gray-500 block">DATA INTEGRITY</span>
                  <span className="text-sm text-emerald-400 font-bold">100% Verified</span>
                </div>
                <div className="p-4 bg-gray-900/40 border border-gray-800/80 rounded-xl">
                  <span className="text-gray-500 block">BUILD STATUS</span>
                  <span className="text-sm text-emerald-400 font-bold">Compiled</span>
                </div>
                <div className="p-4 bg-gray-900/40 border border-gray-800/80 rounded-xl">
                  <span className="text-gray-500 block">CONTROLLER</span>
                  <span className="text-sm text-emerald-400 font-bold">Member Zero</span>
                </div>
              </div>
            </div>

            {/* Right Overlapping Graphic Column */}
            <div className="lg:col-span-5 relative h-[420px] w-full flex items-center justify-center">
              
              {/* Back glowing telemetry blueprint box */}
              <div className="absolute top-4 left-4 w-11/12 h-[320px] border border-gray-800 rounded-3xl bg-gray-950/70 p-6 flex flex-col justify-between font-mono text-[9px] text-gray-500 select-none">
                <div className="flex justify-between items-center border-b border-gray-900 pb-2">
                  <span>KINETIC_TRACKER_01</span>
                  <span className="text-emerald-400 animate-pulse">● CRAWLABLE</span>
                </div>
                <div className="space-y-1.5 text-gray-400">
                  <div>[COORDS] X_VAL: 104.28</div>
                  <div>[COORDS] Y_VAL: 592.11</div>
                  <div>[SENSORS] MUSCLE_DWELL: 1.2s</div>
                  <div>[RATIO] HAPPY_COEF: 0.99</div>
                </div>
                <div className="text-right text-gray-600">JALH_TELEMETRY_DENSE_WEB</div>
              </div>

              {/* Middle Beautiful Generated Biomechanical Image */}
              <div className="relative w-10/12 z-10 transition-transform duration-500 hover:scale-[1.03]">
                <div className="absolute inset-0 bg-emerald-500/10 rounded-2xl blur-2xl opacity-10 scale-95" />
                <LazyImage 
                  src={biomechanicalHandTelemetry}
                  alt="Biomechanical Hand Telemetry Analysis" 
                  className="rounded-2xl shadow-2xl border border-gray-800/80 w-full aspect-[4/3] rotate-[-2deg] transition-all hover:rotate-0 duration-500"
                />
              </div>

              {/* Overlapping Badge */}
              <div className="absolute bottom-12 right-0 z-20 bg-gray-950/90 text-white rounded-2xl p-4 shadow-xl border border-gray-800 max-w-[180px] font-mono text-[9px] space-y-1.5 rotate-[3deg]">
                <div className="text-emerald-400 font-bold flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>DEEP BIOMETRIC</span>
                </div>
                <div className="text-gray-400 leading-normal">
                  Isolated micro-tensions indexed instantly to ensure safe physical harmony.
                </div>
              </div>

            </div>

          </div>

          {/* Interactive Grip Simulator Component */}
          <div className="bg-gray-950/80 border border-gray-800 rounded-3xl p-8 md:p-12 space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-900 pb-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/20 rounded text-[9px] font-mono text-emerald-400 uppercase font-bold">
                  <ActivityIcon className="w-3 h-3 text-emerald-400" />
                  <span>Tactile Biometric Simulator</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white uppercase">Muscle Coordination Analyzer</h3>
              </div>
              <p className="text-gray-400 text-xs font-sans font-light max-w-sm">
                Fine-tune manual friction parameters below to test your biometric alignment rating under JALH.com indexation standards.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Sliders */}
              <div className="lg:col-span-5 space-y-6 text-xs">
                
                {/* Grip pressure slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center font-mono">
                    <span className="text-gray-400">GRIP TENSION FORCE</span>
                    <span className="text-emerald-400 font-bold">{gripForce} lbs</span>
                  </div>
                  <input 
                    type="range"
                    min="10"
                    max="100"
                    value={gripForce}
                    onChange={e => setGripForce(Number(e.target.value))}
                    className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                  />
                  <div className="flex justify-between text-[8px] text-gray-500 font-mono">
                    <span>Light Touch (10)</span>
                    <span>Max Compression (100)</span>
                  </div>
                </div>

                {/* Muscle dwell time slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center font-mono">
                    <span className="text-gray-400">CONTACT DWELL DURATION</span>
                    <span className="text-emerald-400 font-bold">{muscleDwell}s</span>
                  </div>
                  <input 
                    type="range"
                    min="0.1"
                    max="5.0"
                    step="0.1"
                    value={muscleDwell}
                    onChange={e => setMuscleDwell(Number(e.target.value))}
                    className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                  />
                  <div className="flex justify-between text-[8px] text-gray-500 font-mono">
                    <span>Micro-tap (0.1s)</span>
                    <span>Continuous Hold (5.0s)</span>
                  </div>
                </div>

                <button
                  onClick={triggerGripTest}
                  disabled={testActive}
                  className="w-full py-3.5 bg-emerald-400 hover:bg-emerald-500 text-black rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all"
                >
                  {testActive ? 'RUNNING SENSOR CALIBRATION...' : 'LAUNCH GRIP FORCE CALIBRATION'}
                </button>
              </div>

              {/* Dynamic Telemetry Results */}
              <div className="lg:col-span-7 bg-[#05080E] border border-gray-900 rounded-2xl p-6 min-h-[180px] flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="text-[9px] text-gray-500 block uppercase font-mono">COORDINATION LEDGER DIAGNOSTICS</span>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-gray-900/30 rounded border border-gray-900">
                      <span className="text-[8px] text-gray-500 block">INDEX VALUE</span>
                      <span className="text-sm text-white font-bold">{gripForce * 2.5} N</span>
                    </div>
                    <div className="p-3 bg-gray-900/30 rounded border border-gray-900">
                      <span className="text-[8px] text-gray-500 block">OPTIMAL VALUE</span>
                      <span className="text-sm text-white font-bold">125.0 N</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-900 flex items-center justify-between">
                  <span className="text-[9px] text-gray-500 font-mono">BIOMETRIC HARMONY SCORE</span>
                  <span className="text-lg font-bold text-emerald-400">{testActive ? '---' : `${coordinationScore}%`}</span>
                </div>
              </div>

            </div>
          </div>

          {/* Filtering and Search Controls */}
          <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center pt-8 border-t border-gray-800">
            <div className="flex flex-wrap gap-2">
              {subTopics.map(topic => (
                <button
                  key={topic.id}
                  onClick={() => setSelectedSubTopic(topic.id)}
                  className={`px-4 py-2 text-xs rounded-lg transition-all border uppercase tracking-wider font-bold ${
                    selectedSubTopic === topic.id
                      ? 'bg-emerald-500 text-black border-emerald-500'
                      : 'bg-gray-900 text-gray-400 border-gray-800 hover:text-white hover:border-gray-700'
                  }`}
                >
                  {topic.label}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search telemetry..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full bg-gray-900/80 border border-gray-800 rounded-lg px-4 py-2.5 pl-10 text-xs text-white focus:outline-none focus:border-emerald-500"
              />
              <Search className="absolute left-3.5 top-3.5 w-3.5 h-3.5 text-gray-500" />
            </div>
          </div>

          {/* Lexicon Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEntries.map((entry, index) => (
              <motion.div
                key={entry.slug}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(index * 0.02, 0.5) }}
                className="bg-gray-950/80 border border-gray-800 rounded-xl p-6 hover:border-emerald-500/50 transition-all group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] text-emerald-500 font-bold px-2 py-0.5 bg-emerald-500/10 rounded uppercase">
                      {entry.node}
                    </span>
                    <span className="text-[10px] text-gray-500">
                      {entry.layout} layout
                    </span>
                  </div>

                  <h3 className="text-base text-white font-medium group-hover:text-emerald-400 transition-colors">
                    {entry.word}
                  </h3>

                  <p className="text-gray-400 text-xs font-sans leading-relaxed line-clamp-3">
                    {entry.definition}
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-900/60 mt-6 flex justify-between items-center">
                  <div className="flex flex-wrap gap-1">
                    {entry.keywords.slice(0, 2).map((kw, i) => (
                      <span key={i} className="text-[9px] bg-gray-900 px-1.5 py-0.5 rounded text-gray-500 font-mono">
                        #{kw}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/research/${entry.slug}`}
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400 group-hover:underline"
                  >
                    Examine
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Fallback */}
          {filteredEntries.length === 0 && (
            <div className="text-center py-20 border border-dashed border-gray-800 rounded-xl">
              <Sliders className="w-8 h-8 text-gray-600 mx-auto mb-3" />
              <p className="text-gray-500 text-xs">No kinetic telemetry files match your active search terms.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
