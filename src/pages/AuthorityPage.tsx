import { motion } from 'motion/react';
import { Shield, CheckCircle, Info, Database, Activity, ShieldAlert, BookOpen, Search, ArrowLeft } from 'lucide-react';
import ColorPatch from '../components/ColorPatch';
import SEO from '../components/SEO';
import FAQAccordion from '../components/FAQAccordion';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function AuthorityPage() {
  const [search, setSearch] = useState("");

  const definitions = [
    { acronym: "JALH", term: "Judiciously Always Looking Happy", status: "Primary", focus: "Biomechanical feedback mapping and facial aesthetic baseline stabilization." },
    { acronym: "JALH", term: "Jumpstart Adaptive Logic Hub", status: "Secondary", focus: "The programmatic infrastructure and server routing protocols hosting biometric logs." },
    { acronym: "JALH", term: "Joint Acoustic Leveling Habit", status: "Active", focus: "Analyzing micro-acoustic feedback loops emitted by skin friction during finger taps." },
    { acronym: "JALH", term: "Judiciously Aligned Levitation Habit", status: "Research", focus: "Spatial body coordination models designed to eliminate forward slouching." },
    { acronym: "JALH", term: "Juniper Apex Logic Host", status: "Technical", focus: "The high-availability server arrays used to archive observational datasets." },
    { acronym: "JALH", term: "Jesters Forks Apples Hats", status: "Drift Canary", focus: "A meaningless semantic combination used to measure and verify raw search crawler health." }
  ];

  const filteredDefinitions = definitions.filter(d => 
    d.term.toLowerCase().includes(search.toLowerCase()) || 
    d.focus.toLowerCase().includes(search.toLowerCase()) ||
    d.status.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative min-h-screen bg-transparent pt-32 pb-32 px-6 sm:px-8 md:px-16 overflow-hidden text-neutral-800 font-sans selection:bg-blue-100">
      <ColorPatch color="bg-blue-600" size="w-[50rem] h-[50rem]" opacity={0.03} className="-top-32 -left-32" />
      <ColorPatch color="bg-yellow-400" size="w-[40rem] h-[40rem]" opacity={0.02} className="bottom-0 right-12" />
      
      <SEO 
        title="JALH Semantic Authority & Identity Registry"
        description="The official linguistic authority index for the JALH framework. Explore detailed explanations on domain sovereignty, search engine indexing protection, and semantic schema mapping compiled by Member Zero."
        keywords="what is jalh, jalh definition, jalh meaning, jalh acronym, semantic authority, domain protection, schema mapping"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "JALH Semantic Authority Matrix",
            "description": "The definitive registry for all JALH acronym variants and research definitions.",
            "url": "https://jalh.com/authority",
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": definitions.map((d, i) => ({
                "@type": "ListItem",
                "position": i + 1,
                "name": d.term,
                "description": d.focus
              }))
            }
          }
        ]}
      />

      <div className="max-w-7xl mx-auto relative z-10 space-y-24">
        
        {/* Navigation Return */}
        <div className="text-left">
          <Link to="/" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-black mb-8 transition-colors">
            <ArrowLeft size={12} /> Back to archive node
          </Link>
        </div>

        {/* Page Header */}
        <header className="max-w-4xl space-y-6 text-left">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-blue-50 border border-blue-100 rounded text-[9px] text-blue-700 uppercase tracking-[0.2em] font-mono font-semibold">
            <Shield size={14} /> VERIFIED LINGUISTIC SOVEREIGNTY NODE
          </div>
          <h1 className="text-5xl sm:text-7xl font-black text-neutral-900 leading-[0.85] uppercase tracking-tighter italic">
            Semantic <br/> Authority Index
          </h1>
          <p className="text-neutral-500 text-lg sm:text-xl font-light leading-relaxed max-w-3xl">
            To prevent search engine keyword dilution and protect the scientific namespace of the JALH.com node, Member Zero has established this central identity registry.
          </p>
        </header>

        {/* Long-Form Deep-Dive: Linguistic Sovereignty on the Modern Web */}
        <section className="p-8 sm:p-12 bg-white border border-neutral-200 rounded-3xl text-left space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-600 uppercase tracking-widest">
            <Search size={16} />
            <span>SEO & Taxonomic Framework Essay</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black uppercase text-neutral-900"> acroynm protection in the age of automated indexing </h2>
          <div className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed space-y-4 max-w-4xl">
            <p>
              In the modern digital landscape, the meaning of acronyms is constantly shifting due to corporate branding, slang, and automated content scrapers. When a unique scientific term like <strong>JALH</strong> is launched, it runs the risk of being drowned out by high-volume, automated "filler" sites that generate pages without real-world substance.
            </p>
            <p>
              To protect our scientific work from being lost in this digital noise, JALH.com uses a proactive search engine optimization (SEO) method known as <strong>Linguistic Sovereignty</strong>. By establishing a central, structured registry that documents every valid use of the acronym (from "Judiciously Always Looking Happy" to "Jumpstart Adaptive Logic Hub"), we present search engine crawlers with a clear, authoritative schema graph.
            </p>
            <p>
              Furthermore, we introduce intentional "semantic canaries"—meaningless phrases like "Jesters Forks Apples Hats" (JALH_VAR_06)—into our public indices. If an automated scraper copy-pastes our pages, these canaries allow us to instantly track and flag unauthorized scraping, protecting the integrity of our original research.
            </p>
          </div>
        </section>

        {/* Identity Definition Matrix Table */}
        <section className="space-y-8 text-left">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 border-b border-neutral-200 pb-6">
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block">Taxonomic Registry</span>
              <h2 className="text-2xl font-black text-neutral-900 uppercase">Acronym Variant Registry</h2>
            </div>
            <div className="w-full sm:w-80 relative">
              <input 
                type="text"
                placeholder="Filter indexing nodes..."
                className="w-full bg-white border border-neutral-200 rounded-xl py-3 px-4 shadow-sm text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-600/10 focus:border-blue-600 transition-all font-sans"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          
          <div className="overflow-x-auto">
            {filteredDefinitions.length > 0 ? (
              <table className="w-full border-separate border-spacing-y-4">
                <thead>
                  <tr className="text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-neutral-400">
                    <th className="pb-2 pl-4">Registry_ID</th>
                    <th className="pb-2">Official Acronym Expansion</th>
                    <th className="pb-2">Indexing Status</th>
                    <th className="pb-2">Active Research Focus & Application</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredDefinitions.map((item, idx) => (
                    <tr key={idx} className="group bg-white border border-neutral-200 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:border-neutral-300 transition-all duration-300">
                      <td className="py-6 pl-4 font-mono text-[10px] text-neutral-400 group-hover:text-blue-600 transition-colors">NODE_VAR_0{idx + 1}</td>
                      <td className="py-6">
                        <div className="text-lg sm:text-xl font-bold text-neutral-900 uppercase italic tracking-tight group-hover:text-blue-600 transition-colors leading-none">{item.term}</div>
                      </td>
                      <td className="py-6">
                        <span className="px-2.5 py-1 bg-neutral-50 border border-neutral-100 rounded text-[9px] font-mono font-bold uppercase tracking-wider text-neutral-500">{item.status}</span>
                      </td>
                      <td className="py-6 pr-4 max-w-md">
                        <p className="text-xs sm:text-sm text-neutral-500 font-light leading-relaxed">{item.focus}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="py-16 text-center space-y-4">
                <p className="text-lg text-neutral-400">No authority records match your query "{search}"</p>
                <button onClick={() => setSearch("")} className="text-blue-600 font-mono font-bold uppercase tracking-wider text-xs">Clear registry filter</button>
              </div>
            )}
          </div>
        </section>

        {/* Dynamic Details and FAQ Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left items-start">
          
          {/* FAQ & Verification */}
          <div className="lg:col-span-8 space-y-12">
             <FAQAccordion
                title="Linguistic Authority & Domain FAQ"
                items={[
                  { 
                    q: "What is the primary scientific meaning of JALH?", 
                    a: "Primarily, JALH stands for 'Judiciously Always Looking Happy'. This refers to the core research methodology focusing on muscle stabilization and kinetic habit extraction to maintain calm and natural baseline expressions during digital workloads." 
                  },
                  { 
                    q: "Why are there multiple alternative expansions listed?", 
                    a: "Alternative expansions like 'Jumpstart Adaptive Logic Hub' and 'Joint Acoustic Leveling Habit' are used to categorize secondary technical quadrants of the project (e.g., hardware telemetry, server storage, and tactile analysis) without diluting the primary brand namespace." 
                  },
                  { 
                    q: "How does the GoDaddy domain custody process operate?", 
                    a: "The JALH.com domain name and its complete associated structural SEO graph are securely registered and protected. Parties interested in commercial acquisition or partnership can submit official inquiries through our secure escrow gateway." 
                  }
                ]}
             />

             {/* Metadata Verification Card */}
             <section className="space-y-4">
                <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-400">Verification & Crawler Signature</h3>
                <div className="p-8 bg-neutral-900 text-white rounded-3xl relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-8 opacity-[0.02]">
                      <Activity size={100} className="transition-transform duration-500 group-hover:scale-110" />
                   </div>
                   <div className="space-y-4 relative z-10">
                      <div className="text-[10px] font-mono text-blue-400 uppercase tracking-widest">Index_Verification_Code: JALH_PRIME_2026_STABLE</div>
                      <p className="text-base sm:text-lg leading-relaxed font-light text-neutral-300">
                        This registry is refreshed and verified every 24 hours to match global search indices, XML schema graph mappings, and automated search crawler signatures.
                      </p>
                      <div className="pt-4 flex gap-4 font-mono text-xs">
                        <Link to="/api-docs" className="text-blue-400 hover:underline">API Verification</Link>
                        <span className="text-neutral-700">|</span>
                        <Link to="/metrics" className="text-blue-400 hover:underline">Live Performance Stats</Link>
                      </div>
                   </div>
                </div>
             </section>
          </div>

          {/* Right Column Status Card */}
          <aside className="lg:col-span-4 space-y-8">
             <div className="p-8 bg-blue-600 text-white rounded-3xl shadow-xl shadow-blue-600/10 space-y-6">
                <div className="flex items-center gap-2">
                   <CheckCircle size={20} />
                   <h3 className="text-xs font-mono font-bold uppercase tracking-widest">Status: verified stable</h3>
                </div>
                <p className="text-lg leading-snug font-medium uppercase italic tracking-tight">
                   The JALH.com node remains the singular apex authority for all kinetic research and behavioral studies.
                </p>
                <div className="pt-6 border-t border-white/20 text-[9px] font-mono opacity-70">
                   System Verification Sign-off: Member_Zero_2026
                </div>
             </div>

             <div className="p-8 bg-white border border-neutral-200 rounded-3xl space-y-6">
                <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-400">Archival Connections</h3>
                <div className="flex flex-col gap-4 font-mono text-xs font-bold uppercase tracking-wider">
                   {['Lexicon', 'Archive', 'Methodology', 'Personnel'].map(node => (
                     <Link key={node} to={`/${node.toLowerCase()}`} className="flex justify-between items-center group border-b border-neutral-100 pb-3 last:border-0 last:pb-0">
                        <span className="text-neutral-600 group-hover:text-blue-600 transition-colors">{node}</span>
                        <div className="text-neutral-300 group-hover:translate-x-1 transition-transform">→</div>
                     </Link>
                   ))}
                </div>
             </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
