import React, { useState } from 'react';
import { motion } from 'motion/react';
import { JALH_LEXICON } from '../../data/lexicon';
import { Link } from 'react-router-dom';
import { Eye, Compass, Heart, ArrowRight, Search, LayoutGrid, Palette, CheckCircle, RefreshCw } from 'lucide-react';
import SEO from '../../components/SEO';
import aestheticSculptureBalance from '../../assets/images/aesthetic_sculpture_balance_1783050596149.jpg';
import { LazyImage } from '../../components/LazyImage';

export default function AestheticHubPage() {
  const [search, setSearch] = useState('');
  const [activeLayout, setActiveLayout] = useState<string>('all');
  
  // Interactive Alignment Sandbox State
  const [paddingValue, setPaddingValue] = useState(24);
  const [alignmentScore, setAlignmentScore] = useState(100);
  const [gridActive, setGridActive] = useState(true);

  const adjustSpacing = (val: number) => {
    setPaddingValue(val);
    // Dynamic golden-ratio target calibration score
    const target = 24;
    const diff = Math.abs(val - target);
    const score = Math.max(50, 100 - diff * 3);
    setAlignmentScore(score);
  };

  const aestheticEntries = JALH_LEXICON.filter(
    entry => entry.category === 'Aesthetic'
  );

  const filteredEntries = aestheticEntries.filter(entry => {
    const matchesSearch = entry.word.toLowerCase().includes(search.toLowerCase()) ||
                          entry.definition.toLowerCase().includes(search.toLowerCase());
    if (activeLayout === 'all') return matchesSearch;
    return matchesSearch && entry.layout === activeLayout;
  });

  const layoutsList = [
    { id: 'all', label: 'All Visual Files' },
    { id: 'minimal', label: 'Minimalist' },
    { id: 'technical', label: 'Technical' },
    { id: 'brutalist', label: 'Brutalist' },
    { id: 'academic', label: 'Academic' }
  ];

  return (
    <>
      <SEO 
        title="Aesthetic Stabilization & Fine-Arts Digital Identity Hub"
        description="Explore JALH's visual identity, persona stabilization matrix, user experience ergonomics, and premium design principles verified by Member Zero and designed by Feelize."
        keywords="aesthetic stabilization, digital identity design, persona masking, minimal layout, swiss typography, feelize web design, jalh visual identity"
        schema={[{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Aesthetic Stabilization & Fine-Arts Digital Identity Hub",
          "url": "https://jalh.com/category/aesthetic",
          "description": "A comprehensive directory documenting the intersection of high-art design, human visual psychology, and persona stabilization protocols under JALH guidelines.",
          "isPartOf": {
            "@type": "ResearchProject",
            "name": "JALH (Judiciously Always Looking Happy)",
            "url": "https://jalh.com"
          },
          "publisher": {
            "@type": "Organization",
            "name": "JALH Research Node"
          }
        }]}
      />

      <div className="pt-40 pb-24 px-6 md:px-12 bg-[#FAF9F6] text-black min-h-screen font-sans">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* Header Block with Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-neutral-200 pb-12">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-[10px] font-mono text-blue-700 uppercase tracking-widest animate-pulse">
                <Eye className="w-3 h-3 text-blue-600" />
                <span>Aesthetic Registry // Index 02</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-light text-neutral-900 tracking-tight font-serif italic">
                Aesthetic Stabilization <br />
                <span className="font-sans font-extrabold not-italic text-black">Design Catalog</span>
              </h1>
              
              <p className="text-neutral-600 max-w-2xl text-base md:text-lg leading-relaxed font-light">
                This category governs the visual representation, interface choreography, and persona alignment layers. Engineered to eliminate discordant visual friction, these entries demonstrate how pristine layout hierarchy and silent negative space preserve absolute public harmony.
              </p>

              <div className="flex flex-wrap gap-8 pt-6 text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                <div>Archive Category: Aesthetic</div>
                <div>System Styling: Feelize Corp</div>
                <div>Total Records: {aestheticEntries.length} entries</div>
              </div>
            </div>

            {/* Right Overlapping Graphic Column */}
            <div className="lg:col-span-5 relative h-[420px] w-full flex items-center justify-center">
              
              {/* Back thin-lined diagram grid */}
              <div className="absolute top-4 left-4 w-11/12 h-[320px] border border-neutral-200/80 rounded-3xl bg-neutral-50/50 p-6 flex flex-col justify-between font-mono text-[9px] text-neutral-400 select-none pointer-events-none">
                <div className="flex justify-between items-center border-b border-neutral-100 pb-2">
                  <span>LAYOUT_SPEC_GOLDEN</span>
                  <span>PRESTIGIOUS // 100% OK</span>
                </div>
                <div className="space-y-1">
                  <div>GRID_ALIGN: RIGID_12_COLS</div>
                  <div>FONT_DISPLAY: INTER_SANS</div>
                  <div>FONT_BODY: SPACE_GROTESK</div>
                </div>
                <div className="text-right text-[8px]">STABILIZATION: SECURE</div>
              </div>

              {/* Middle Beautiful Sculpture Image */}
              <div className="relative w-10/12 z-10 transition-transform duration-500 hover:scale-[1.03]">
                <div className="absolute inset-0 bg-neutral-300 rounded-2xl blur-2xl opacity-15 scale-95" />
                <LazyImage 
                  src={aestheticSculptureBalance}
                  alt="Aesthetic Symmetrical Sculpture Balance" 
                  className="rounded-2xl shadow-2xl border border-neutral-200 w-full aspect-[4/3] rotate-[2deg] transition-all hover:rotate-0 duration-500"
                />
              </div>

              {/* Front Floating Badge */}
              <div className="absolute bottom-12 left-0 z-20 bg-neutral-900 text-white rounded-2xl p-4 shadow-xl max-w-[190px] font-mono text-[9px] space-y-1.5 rotate-[-3deg] border border-neutral-800">
                <div className="text-blue-400 font-bold flex items-center gap-1">
                  <Palette className="w-3.5 h-3.5" />
                  <span>SWISS STANDARDS</span>
                </div>
                <div className="text-neutral-400 leading-normal font-sans">
                  Prudent color combinations and balanced margins promote immediate corporate trust.
                </div>
              </div>

            </div>

          </div>

          {/* Interactive Alignment Calibration Widget */}
          <div className="bg-neutral-100/60 border border-neutral-200 rounded-3xl p-8 md:p-12 space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-neutral-200 pb-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-neutral-200 border border-neutral-300 rounded text-[9px] font-mono text-neutral-600 uppercase font-bold">
                  <LayoutGrid className="w-3 h-3 text-neutral-500" />
                  <span>Tactile spacing engine</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-neutral-900 font-serif italic">Mathematical Layout Grid Calibration</h3>
              </div>
              <p className="text-neutral-500 text-xs font-sans font-light max-w-sm">
                Move the spacing slider below to find the absolute Golden Ratio margin alignment (optimal rating at 24px) for perfect design harmony.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Sliders Area */}
              <div className="lg:col-span-5 space-y-6 text-xs font-mono">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-500 uppercase">GRID MARGIN SPACING</span>
                    <span className="text-neutral-900 font-bold">{paddingValue} px</span>
                  </div>
                  <input 
                    type="range"
                    min="8"
                    max="64"
                    value={paddingValue}
                    onChange={e => adjustSpacing(Number(e.target.value))}
                    className="w-full h-1.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-neutral-900"
                  />
                  <div className="flex justify-between text-[8px] text-neutral-400">
                    <span>Dense (8px)</span>
                    <span>Generous (64px)</span>
                  </div>
                </div>

                <div className="flex justify-between items-center p-4 bg-white rounded-xl border border-neutral-200 text-[10px]">
                  <span className="text-neutral-500 uppercase">Grid Guidelines:</span>
                  <button 
                    onClick={() => setGridActive(!gridActive)}
                    className={`px-3 py-1 rounded text-[9px] uppercase font-bold tracking-wider transition-colors ${
                      gridActive ? 'bg-black text-white' : 'bg-neutral-200 text-neutral-600'
                    }`}
                  >
                    {gridActive ? 'Guidelines Visible' : 'Guidelines Hidden'}
                  </button>
                </div>
              </div>

              {/* Spacing alignment visual preview box */}
              <div className="lg:col-span-7 h-48 bg-white border border-neutral-200 rounded-2xl relative overflow-hidden flex items-center justify-center transition-all">
                {/* Simulated vertical guidelines */}
                {gridActive && (
                  <div className="absolute inset-0 flex justify-between pointer-events-none opacity-25">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div key={i} className="h-full w-px bg-red-400 border-dashed" />
                    ))}
                  </div>
                )}

                {/* Symmetrical Blocks */}
                <div 
                  className="flex gap-4 justify-between w-full transition-all duration-300"
                  style={{ paddingLeft: `${paddingValue}px`, paddingRight: `${paddingValue}px` }}
                >
                  <div className="h-16 w-1/3 bg-neutral-900 rounded-lg flex items-center justify-center text-white text-[10px] font-mono">
                    BLOCK_A
                  </div>
                  <div className="h-16 w-1/3 bg-neutral-200 rounded-lg flex items-center justify-center text-neutral-600 text-[10px] font-mono">
                    BLOCK_B
                  </div>
                  <div className="h-16 w-1/3 bg-neutral-900 rounded-lg flex items-center justify-center text-white text-[10px] font-mono">
                    BLOCK_C
                  </div>
                </div>

                <div className="absolute bottom-2 left-3 text-[8px] font-mono text-neutral-400">
                  LAYOUT SYMMETRY RATING: <span className="font-bold text-black">{alignmentScore}%</span>
                </div>
              </div>

            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center pt-8 border-t border-neutral-200">
            <div className="flex flex-wrap gap-1.5 bg-neutral-100 p-1 rounded-xl border border-neutral-200/50">
              {layoutsList.map(layout => (
                <button
                  key={layout.id}
                  onClick={() => setActiveLayout(layout.id)}
                  className={`px-3 py-1.5 text-[11px] font-mono rounded-lg transition-all uppercase tracking-wider ${
                    activeLayout === layout.id
                      ? 'bg-white text-black shadow-sm font-bold'
                      : 'text-neutral-500 hover:text-black'
                  }`}
                >
                  {layout.label}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-72">
              <input
                type="text"
                placeholder="Search visual records..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full bg-white border border-neutral-350 rounded-lg px-4 py-2 text-xs text-neutral-800 focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
              />
              <Search className="absolute right-3.5 top-3 w-3.5 h-3.5 text-neutral-400" />
            </div>
          </div>

          {/* Lexicon Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEntries.map((entry, index) => (
              <motion.div
                key={entry.slug}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(index * 0.02, 0.4) }}
                className="bg-white border border-neutral-200 rounded-xl p-8 hover:shadow-[0_10px_35px_rgba(0,0,0,0.04)] hover:border-black transition-all group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] font-mono font-bold tracking-widest text-neutral-400 uppercase">
                      NODE // {entry.node}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400 uppercase bg-neutral-100 px-2 py-0.5 rounded">
                      {entry.layout}
                    </span>
                  </div>

                  <h3 className="text-lg font-normal text-black font-serif italic group-hover:not-italic group-hover:text-blue-600 transition-all">
                    {entry.word}
                  </h3>

                  <p className="text-neutral-600 text-xs md:text-sm leading-relaxed font-sans font-light">
                    {entry.definition}
                  </p>
                </div>

                <div className="pt-6 border-t border-neutral-100 mt-6 flex justify-between items-center">
                  <div className="flex flex-wrap gap-1">
                    {entry.keywords.slice(0, 2).map((kw, i) => (
                      <span key={i} className="text-[9px] text-neutral-400 font-mono">
                        #{kw}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/research/${entry.slug}`}
                    className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-black group-hover:text-blue-600 group-hover:underline"
                  >
                    Examine
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty search */}
          {filteredEntries.length === 0 && (
            <div className="text-center py-20 border border-neutral-200 rounded-xl bg-white">
              <Compass className="w-8 h-8 text-neutral-300 mx-auto mb-3 animate-spin" />
              <p className="text-neutral-500 text-xs font-mono">NO AESTHETIC TELEMETRY ENTRIES CONFORM TO FILTERING CRITERIA.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
