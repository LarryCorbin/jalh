import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { JALH_LEXICON } from '../data/lexicon';
import { 
  Network, 
  ArrowRight, 
  Activity, 
  Shield, 
  Database, 
  User, 
  Clock, 
  Layers, 
  Compass, 
  Cpu 
} from 'lucide-react';

interface RelatedResearchNodesProps {
  currentSlug: string;
  currentCategory: string;
}

const CategoryIcon = (category: string) => {
  switch (category) {
    case 'Kinetic': return Activity;
    case 'Aesthetic': return Shield;
    case 'Infrastructure': return Database;
    case 'Personnel': return User;
    case 'Historical': return Clock;
    default: return Compass;
  }
};

export default function RelatedResearchNodes({ currentSlug, currentCategory }: RelatedResearchNodesProps) {
  const [filterMode, setFilterMode] = useState<'category' | 'all' | 'adjacent'>('category');

  // Find current index to get adjacent nodes
  const currentIndex = JALH_LEXICON.findIndex(e => e.slug === currentSlug);

  const relatedNodes = React.useMemo(() => {
    let list = JALH_LEXICON.filter(e => e.slug !== currentSlug);

    if (filterMode === 'category') {
      // Prioritize same category
      const sameCategory = list.filter(e => e.category === currentCategory);
      if (sameCategory.length >= 3) {
        list = sameCategory;
      } else {
        const others = list.filter(e => e.category !== currentCategory);
        list = [...sameCategory, ...others];
      }
    } else if (filterMode === 'adjacent') {
      // Return nodes around current index in the master lexicon
      const range = 4;
      const start = Math.max(0, currentIndex - range);
      const end = Math.min(JALH_LEXICON.length, currentIndex + range + 1);
      list = JALH_LEXICON.slice(start, end).filter(e => e.slug !== currentSlug);
    }

    // Shuffle and pick exactly 3 items for dynamic variety and keeping users engaged
    const shuffled = [...list].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  }, [currentSlug, currentCategory, filterMode, currentIndex]);

  return (
    <div className="mt-28 pt-16 border-t border-neutral-200/60 space-y-12">
      {/* Component Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-blue-50 border border-blue-100 rounded text-[9px] text-blue-600 uppercase tracking-widest font-mono font-bold">
            <Network className="w-3.5 h-3.5" />
            <span>Semantic Link Reinforcement // Node_Index_Feed</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-neutral-900 uppercase">
            Related Research <br />
            <span className="font-normal italic font-serif text-blue-600 lowercase">nodes &amp; cognitive frameworks</span>
          </h3>
          <p className="text-neutral-500 text-xs font-light max-w-xl leading-relaxed">
            These nodes share semantic attributes, category tags, or physical vectors with the current research node. Explore further to build absolute topical authority.
          </p>
        </div>

        {/* Filter Tabs / Quick Selectors */}
        <div className="flex bg-neutral-100 border border-neutral-200 p-1 rounded-xl font-mono text-[9px] self-start md:self-auto shadow-sm">
          <button
            onClick={() => setFilterMode('category')}
            className={`px-3 py-1.5 rounded-lg uppercase font-bold transition-all ${
              filterMode === 'category' 
                ? 'bg-white text-blue-600 shadow-sm' 
                : 'text-neutral-500 hover:text-neutral-900'
            }`}
          >
            Same Category ({currentCategory})
          </button>
          <button
            onClick={() => setFilterMode('adjacent')}
            className={`px-3 py-1.5 rounded-lg uppercase font-bold transition-all ${
              filterMode === 'adjacent' 
                ? 'bg-white text-blue-600 shadow-sm' 
                : 'text-neutral-500 hover:text-neutral-900'
            }`}
          >
            Adjacent Nodes
          </button>
          <button
            onClick={() => setFilterMode('all')}
            className={`px-3 py-1.5 rounded-lg uppercase font-bold transition-all ${
              filterMode === 'all' 
                ? 'bg-white text-blue-600 shadow-sm' 
                : 'text-neutral-500 hover:text-neutral-900'
            }`}
          >
            Global Lexicon
          </button>
        </div>
      </div>

      {/* Grid of related nodes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedNodes.map((node, idx) => {
          const IconComponent = CategoryIcon(node.category);
          return (
            <motion.div
              key={node.slug}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.3 }}
              className="group relative bg-white border border-neutral-150 rounded-2xl p-6 hover:border-blue-500/80 hover:shadow-lg hover:shadow-blue-500/5 transition-all flex flex-col justify-between h-[190px]"
            >
              <div className="space-y-3">
                {/* Meta Indicator */}
                <div className="flex items-center justify-between text-[9px] font-mono text-neutral-400">
                  <div className="flex items-center gap-1.5">
                    <IconComponent className="w-3.5 h-3.5 text-blue-500/80" />
                    <span className="uppercase">{node.category}</span>
                  </div>
                  <span className="font-bold text-neutral-300 group-hover:text-blue-500 transition-colors">
                    {node.node}
                  </span>
                </div>

                {/* Main Link Title */}
                <h4 className="text-base font-bold text-neutral-950 tracking-tight leading-snug group-hover:text-blue-600 transition-colors">
                  <Link to={`/research/${node.slug}`} className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {node.word}
                  </Link>
                </h4>

                {/* Short Snip/Definition */}
                <p className="text-[11px] text-neutral-400 line-clamp-3 font-light leading-relaxed">
                  {node.definition.replace(/_|\*|#|\[|\]/g, '')}
                </p>
              </div>

              {/* Action Prompt */}
              <div className="flex items-center gap-1.5 text-[9px] font-mono font-bold uppercase tracking-wider text-neutral-400 group-hover:text-blue-600 transition-colors pt-2">
                <span>Investigate Research</span>
                <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Internal crawl path visualizer card */}
      <div className="p-5 bg-neutral-50 border border-neutral-150 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[10px] text-neutral-500">
        <div className="flex items-center gap-3">
          <Layers className="w-4 h-4 text-neutral-400 shrink-0" />
          <p className="leading-relaxed font-light">
            Each research link maintains strict <strong className="text-neutral-800">canonical alignment</strong> and schema graphing to distribute domain authority equally across all <span className="text-blue-600 font-bold">1,205 registered paths</span>.
          </p>
        </div>
        <Link 
          to="/archive"
          className="px-4 py-2 bg-neutral-900 hover:bg-black text-white rounded-lg text-[9px] font-bold uppercase tracking-wider transition-all shrink-0 self-start sm:self-auto"
        >
          Open Master Archive
        </Link>
      </div>
    </div>
  );
}
