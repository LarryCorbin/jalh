import React, { useState } from 'react';
import { motion } from 'motion/react';
import { JALH_LEXICON } from '../../data/lexicon';
import { Link } from 'react-router-dom';
import { Server, User, Calendar, Search, Network, ArrowUpRight, HelpCircle } from 'lucide-react';
import SEO from '../../components/SEO';

export default function InfrastructureHubPage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const infrastructureEntries = JALH_LEXICON.filter(
    entry => ['Infrastructure', 'Personnel', 'Historical'].includes(entry.category)
  );

  const filteredEntries = infrastructureEntries.filter(entry => {
    const matchesSearch = entry.word.toLowerCase().includes(search.toLowerCase()) ||
                          entry.definition.toLowerCase().includes(search.toLowerCase());
    if (activeCategory === 'all') return matchesSearch;
    return matchesSearch && entry.category === activeCategory;
  });

  const categoriesList = [
    { id: 'all', label: 'All System Files' },
    { id: 'Infrastructure', label: 'Infrastructure Nodes' },
    { id: 'Personnel', label: 'Personnel Logs' },
    { id: 'Historical', label: 'Historical Archives' }
  ];

  return (
    <>
      <SEO 
        title="Infrastructure, Personnel, and Historical Database Hub"
        description="Search through JALH's structural telemetry registries, operational personnel files, and historical milestones curated by Member Zero."
        keywords="jalh infrastructure, communication gateway, global node map, historical logs, personnel registry, member zero"
        schema={[{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Infrastructure, Personnel, and Historical Database Hub",
          "url": "https://jalh.com/category/infrastructure-personnel",
          "description": "The administrative backbone of JALH.com. Access network telemetry maps, organizational rosters, and historical breakthrough registries.",
          "isPartOf": {
            "@type": "ResearchProject",
            "name": "JALH (Judiciously Always Looking Happy)",
            "url": "https://jalh.com"
          }
        }]}
      />

      <div className="pt-40 pb-24 px-6 md:px-12 bg-neutral-900 text-neutral-100 min-h-screen font-mono">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Header Block */}
          <div className="border-b border-neutral-800 pb-12 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-xs text-indigo-400">
              <Network className="w-3.5 h-3.5" />
              <span>ADMINISTRATIVE ROOT // CORE DATA LAYERS</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-light text-white tracking-tight uppercase">
              System Nodes & <br />
              <span className="font-semibold text-indigo-400">Structural Directory</span>
            </h1>
            
            <p className="text-neutral-400 max-w-3xl text-sm md:text-base leading-relaxed font-sans">
              This panel indexes our structural blueprints, authorized organizational personnel files, and chronological milestone logs. Together, these entries form the absolute infrastructure of the JALH.com project, enabling continuous distributed extraction across global networks.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              <div className="p-5 bg-neutral-950/50 border border-neutral-800 rounded-lg flex items-start gap-4">
                <Server className="w-6 h-6 text-indigo-400 shrink-0 mt-0.5" />
                <div className="space-y-1 font-sans">
                  <h4 className="text-xs text-neutral-400 uppercase font-mono font-bold">Network Architecture</h4>
                  <p className="text-xs text-neutral-300 leading-relaxed">Centralized load-distribution mapping and low-latency global edge network monitoring.</p>
                </div>
              </div>

              <div className="p-5 bg-neutral-950/50 border border-neutral-800 rounded-lg flex items-start gap-4">
                <User className="w-6 h-6 text-indigo-400 shrink-0 mt-0.5" />
                <div className="space-y-1 font-sans">
                  <h4 className="text-xs text-neutral-400 uppercase font-mono font-bold">Personnel Rosters</h4>
                  <p className="text-xs text-neutral-300 leading-relaxed">Security clearanced dossiers, operational credentials, and letters verified by Member Zero.</p>
                </div>
              </div>

              <div className="p-5 bg-neutral-950/50 border border-neutral-800 rounded-lg flex items-start gap-4">
                <Calendar className="w-6 h-6 text-indigo-400 shrink-0 mt-0.5" />
                <div className="space-y-1 font-sans">
                  <h4 className="text-xs text-neutral-400 uppercase font-mono font-bold">Historical Archives</h4>
                  <p className="text-xs text-neutral-300 leading-relaxed">Breakthrough discovery timelines, research ledgers, and ancient telemetry logs.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
            <div className="flex flex-wrap gap-1.5 bg-neutral-950 p-1.5 border border-neutral-800 rounded-lg">
              {categoriesList.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 text-xs rounded transition-all font-bold uppercase tracking-wider ${
                    activeCategory === cat.id
                      ? 'bg-indigo-500 text-black'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search index database..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full bg-neutral-950 border border-neutral-800 rounded px-4 py-2 text-xs text-white focus:outline-none focus:border-indigo-500"
              />
              <Search className="absolute right-3.5 top-3.5 w-3.5 h-3.5 text-neutral-500" />
            </div>
          </div>

          {/* Lexicon Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEntries.map((entry, index) => (
              <motion.div
                key={entry.slug}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(index * 0.02, 0.4) }}
                className="bg-neutral-950/60 border border-neutral-800 rounded p-6 hover:border-indigo-500/50 hover:bg-neutral-950 transition-all group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-[10px] uppercase font-mono">
                    <span className="text-indigo-400 font-bold bg-indigo-500/10 px-2 py-0.5 rounded">
                      {entry.category}
                    </span>
                    <span className="text-neutral-500 font-bold">
                      {entry.node}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-indigo-400 transition-colors">
                    {entry.word}
                  </h3>

                  <p className="text-neutral-400 text-xs font-sans leading-relaxed line-clamp-3">
                    {entry.definition}
                  </p>
                </div>

                <div className="pt-6 border-t border-neutral-900 mt-6 flex justify-between items-center">
                  <span className="text-[10px] text-neutral-500">
                    Layout: {entry.layout}
                  </span>
                  <Link
                    to={`/research/${entry.slug}`}
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-indigo-400 group-hover:underline uppercase tracking-widest"
                  >
                    Examine
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty search */}
          {filteredEntries.length === 0 && (
            <div className="text-center py-20 border border-dashed border-neutral-800 rounded">
              <HelpCircle className="w-8 h-8 text-neutral-600 mx-auto mb-3" />
              <p className="text-neutral-500 text-xs">NO SYSTEM FILES CONFORM TO ACTIVE SEARCH EXPRESSIONS.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
