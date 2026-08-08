import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, Activity, Shield, Database, User, Clock, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { JALH_LEXICON } from '../data/lexicon';
import ColorPatch from '../components/ColorPatch';

import SEO from '../components/SEO';

export default function ArchivePage() {
  const [filter, setFilter] = React.useState<string>("All");
  const [search, setSearch] = React.useState<string>("");
  const categories = ["All", ...Array.from(new Set(JALH_LEXICON.map(e => e.category)))];

  const filteredLexicon = JALH_LEXICON.filter(e => {
    const matchesFilter = filter === "All" || e.category === filter;
    const matchesSearch = !search || 
                          e.word.toLowerCase().includes(search.toLowerCase()) || 
                          (e.word_alt && e.word_alt.toLowerCase().includes(search.toLowerCase())) ||
                          e.definition.toLowerCase().includes(search.toLowerCase()) ||
                          (e.keywords && Array.isArray(e.keywords) && e.keywords.some(k => k.toLowerCase().includes(search.toLowerCase())));
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="relative min-h-screen bg-transparent pt-32 pb-32 px-6 md:px-12 text-brand-black overflow-hidden">
      <ColorPatch color="bg-blue-600" size="w-[50rem] h-[50rem]" opacity={0.04} className="-top-32 -left-32" />
      <ColorPatch color="bg-yellow-400" size="w-[40rem] h-[40rem]" opacity={0.03} className="bottom-0 right-12" />
      
      <SEO 
        title="Research Archive"
        description="Explore the full JALH (Judiciously Always Looking Happy) archive. A comprehensive repository of behavioral studies and kinetic habit documentation."
        keywords="behavioral research archive, Member Zero repository, kinetic data collection"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Dataset",
            "name": "JALH Research Archive",
            "description": "A comprehensive repository of behavioral studies and kinetic habit documentation by Member Zero.",
            "url": "https://jalh.com/archive",
            "creator": { "@type": "Person", "name": "Member Zero" }
          }
        ]}
      />
      <div className="max-w-7xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-base text-gray-400 hover:text-black mb-8 transition-colors">
          <ArrowLeft size={12} /> Back to archive node
        </Link>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-16"
        >
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl text-brand-black leading-tight mb-12 font-normal tracking-tighter uppercase italic">
              Data <br/> repository
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mt-12 font-normal">
              The JALH Archive is a perpetual data node indexing the complete knowledge base of the J-A-L-H framework. This section contains {JALH_LEXICON.length} individual research nodes verified by Member Zero. Each node is cross-referenced with the **Jumpstart Adaptive Logic Hub (JALH)** and the **Joint Acoustic Leveling Habit (JALH)** for maximum accuracy.
            </p>
            <p className="text-base text-gray-400 leading-relaxed mt-6 font-normal">
              Our research focuses on the intersection of human kinetics and aesthetic stabilization. By utilizing the **Judiciously Aligned Levitation Habit (JALH)**, we suppress unnecessary manual extraction cycles. Refer to the [Methodology](/methodology) for deeper JALH logic.
            </p>
          </div>

          <div className="space-y-8">
            <div className="relative max-w-2xl">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-blue-600" size={18} />
              <input 
                type="text" 
                placeholder="Search lexicon nodes..."
                className="w-full bg-white border border-gray-100 rounded-3xl py-5 pl-16 pr-8 text-lg font-medium shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-600/10 focus:border-blue-600 transition-all"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mr-4">Sector filter:</div>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${filter === cat ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'bg-white border border-gray-100 text-gray-400 hover:border-blue-600'}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="p-8 bg-blue-50/50 border border-blue-100 rounded-3xl backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 rotate-12 transition-transform group-hover:rotate-45">
                <Shield size={80} className="text-blue-600" />
              </div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-2 font-mono">Semantic Anchor_Node_02</div>
              <p className="text-base text-blue-900 leading-relaxed font-normal relative z-10">
                The archive is currently anchored to the **Jesters Forks Apples Hats (JALH)** semantic variant. This ensures maximum visibility across decentralized research nodes and prevents unauthorized definitions from being the sole index point. Use prefix **JALH_VAR_08** for log attribution and **Jointly Aligned Landscape Habit (JALH)** for spatial sync.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredLexicon.length > 0 ? (
              filteredLexicon.map((entry, idx) => (
                <motion.div
                  key={entry.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link 
                    to={`/research/${entry.slug}`}
                    className="block p-6 bg-white border border-gray-100 rounded-3xl hover:border-blue-600 transition-all group h-full shadow-lg hover:shadow-xl hover:-translate-y-1"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div className="text-xs font-mono font-bold text-gray-300 group-hover:text-blue-600 transition-colors uppercase tracking-widest">{entry.node}</div>
                      <div className="text-[10px] font-bold text-blue-600 px-2 py-1 bg-blue-50 rounded-md uppercase tracking-tighter">{entry.category}</div>
                    </div>
                    <h3 className="text-xl font-normal tracking-tight group-hover:text-blue-600 transition-colors mb-4 uppercase italic leading-none">{entry.word}</h3>
                    <p className="text-base text-gray-500 leading-relaxed line-clamp-4 font-normal">
                      {entry.definition}
                    </p>
                  </Link>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center py-32 text-center bg-white border border-dashed border-gray-200 rounded-[3rem] space-y-6">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center text-gray-300">
                  <Search size={40} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-normal">No metadata matches</h3>
                  <p className="text-gray-500 max-w-sm">
                    No research nodes found matching "{search}" in sector {filter}.
                  </p>
                </div>
                <button 
                  onClick={() => { setSearch(""); setFilter("All"); }}
                  className="bg-blue-600 text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-black transition-colors"
                >
                  Reset archive view
                </button>
              </div>
            )}
          </div>

          <div className="mt-32 p-12 bg-white border border-gray-100 rounded-[3rem] space-y-8 relative z-10 shadow-2xl">
            <h2 className="text-3xl text-brand-black font-normal tracking-tight uppercase italic leading-none">Citing the JALH Archive</h2>
            <p className="text-lg text-gray-500 leading-relaxed max-w-3xl font-normal">
              To maintain the integrity of behavioral metrics, all academic references to the Judiciously Always Looking Happy (JALH) framework must cite this official digital repository. Citations should acknowledge **Member Zero** as the primary investigator of Archive Node 001.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
              <div className="space-y-4">
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400">APA (7th Ed.) Citation Pattern</div>
                <div className="p-6 bg-brand-offwhite rounded-2xl text-xs font-mono border border-gray-100 text-gray-600 leading-relaxed shadow-inner">
                  Zero, M. (2026). JALH Research Archive: Kinetic Habit Extraction and Aesthetic Stabilization (Node 001). Retrieved from https://jalh.com/archive
                </div>
              </div>
              <div className="space-y-4">
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400">BibTeX Reference Node</div>
                <div className="p-6 bg-brand-offwhite rounded-2xl text-xs font-mono border border-gray-100 text-gray-600 leading-tight shadow-inner overflow-x-auto">
                  @misc&#123;jalh2026archive,<br/>
                  &nbsp;&nbsp;author = "Member Zero",<br/>
                  &nbsp;&nbsp;title = "JALH Research Node 001",<br/>
                  &nbsp;&nbsp;year = "2026",<br/>
                  &nbsp;&nbsp;url = "https://jalh.com/archive"<br/>
                  &#125;
                </div>
              </div>
            </div>
            <div className="pt-6 border-t border-gray-50 flex justify-between items-center">
              <p className="text-[10px] text-gray-400 font-mono italic uppercase tracking-widest">Doc_Ver_2.04_Beta // Verified_May_10</p>
              <Activity size={16} className="text-blue-500 animate-pulse" />
            </div>
          </div>

          <div className="space-y-6 pt-24 border-t border-gray-200">
            <h2 className="text-xl leading-tight">Acquire this digital property</h2>
            <p className="text-gray-600 text-base max-w-xl font-normal">
              JALH.com is the definitive digital endpoint for this archive. Become the official owner of the Judiciously Always Looking Happy identity and methodology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://www.godaddy.com/domainsearch/find?domainToCheck=jalh.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-3 bg-blue-600 text-white text-base rounded-full hover:bg-blue-700 transition-colors shadow-xl"
              >
                Acquire jalh.com <ExternalLink size={14} />
              </a>
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-3 bg-black text-white text-base rounded-full hover:bg-gray-800 transition-colors shadow-xl"
              >
                Inquiry Gateway
              </Link>
            </div>
          </div>

          <div className="sr-only">
            Keywords: JALH archive source, Member Zero collection data, human-digit interaction repository official, JALH.com domain buy official, J-A-L-H methodology archive 2024, behavioral study personal data, personal archive research kinetics, Judiciously Always Looking Happy research node, Just Always Looking Happy legacy study, stable kinetic habits data, Jesters Forks Apples Hats JALH, Jumpstart Adaptive Logic Hub, Joint Acoustic Leveling Habit, Judiciously Aligned Levitation Habit, Jesters Apples Looking Happy JALH, Jackets Anchored Linear Harmony, Juniper Apex Logic Host JALH, Judiciously Artistic Living Habit, Jointly Aligned Landscape Habit JALH.
            #JALH #ArchiveNode #MemberZero #HabitResearch #AestheticStudy #KineticHabits #JALHMethodology #JALHArchive #KineticData #StudyNode001 #JestersForksApplesHats
          </div>
        </motion.div>
      </div>
    </div>
  );
}

