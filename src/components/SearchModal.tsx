import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, BookOpen, Terminal, Activity, ArrowRight, CornerDownLeft, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { JALHSearchEngine, SearchItem } from '../utils/searchIndex';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchItem[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Reset query and selection when modal opens
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setResults([]);
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Handle outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isOpen, onClose]);

  // Handle escape and shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Trigger search on query change
  useEffect(() => {
    if (!query) {
      setResults([]);
      setSelectedIndex(0);
      return;
    }

    const matched = JALHSearchEngine.search(query, 10);
    setResults(matched);
    setSelectedIndex(0);
  }, [query]);

  // Handle Keyboard Navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (results.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % results.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + results.length) % results.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const selected = results[selectedIndex];
      if (selected) {
        navigate(selected.path);
        onClose();
      }
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Kinetic':
        return <Activity size={14} className="text-emerald-500" />;
      case 'Aesthetic':
        return <Shield size={14} className="text-sky-500" />;
      case 'System':
      case 'Archive':
        return <Terminal size={14} className="text-blue-500" />;
      default:
        return <BookOpen size={14} className="text-neutral-400" />;
    }
  };

  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case 'Kinetic':
        return 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20';
      case 'Aesthetic':
        return 'bg-sky-500/10 text-sky-500 border-sky-500/20';
      case 'System':
        return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      case 'Archive':
        return 'bg-purple-500/10 text-purple-500 border-purple-500/20';
      case 'Service':
        return 'bg-amber-500/10 text-amber-500 border-amber-500/20';
      default:
        return 'bg-neutral-500/10 text-neutral-400 border-neutral-500/20';
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-[500] flex items-start justify-center pt-[10vh] px-4 bg-neutral-950/70 backdrop-blur-md"
          id="search-overlay"
        >
          {/* Backdrop Blur Cover */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0"
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, scale: 0.97, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-2xl bg-neutral-900 border border-neutral-800/80 rounded-3xl overflow-hidden shadow-2xl z-10 text-white flex flex-col"
            id="search-panel-container"
          >
            {/* Input Header */}
            <div className="flex items-center gap-4 px-6 py-5 border-b border-neutral-800 shrink-0">
              <Search size={20} className="text-neutral-400 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search archive nodes, quadrants, terminology..."
                className="w-full bg-transparent border-none text-white text-base placeholder-neutral-500 focus:outline-none"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                id="search-input"
              />
              <button 
                onClick={onClose}
                className="p-1.5 hover:bg-neutral-800 rounded-full transition-colors shrink-0 text-neutral-400 hover:text-white"
              >
                <X size={16} />
              </button>
            </div>

            {/* Results list */}
            <div 
              className="max-h-[380px] overflow-y-auto px-4 py-4"
              id="search-results-list"
            >
              {!query ? (
                // Initial State: suggestions & info
                <div className="py-8 px-4 text-center">
                  <div className="w-12 h-12 bg-neutral-800/80 text-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-neutral-700/50">
                    <Terminal size={20} />
                  </div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-300">
                    Full-Text Archive Index
                  </h3>
                  <p className="text-xs text-neutral-500 mt-2 max-w-sm mx-auto leading-normal font-normal">
                    Instantly query specific taxonomic terms (e.g. <span className="text-neutral-300 font-mono">"biomechanical"</span>, <span className="text-neutral-300 font-mono">"zygomaticus"</span>) or research coordinates.
                  </p>
                  
                  {/* Quick Shortcuts */}
                  <div className="mt-8 grid grid-cols-2 gap-2 text-left">
                    {[
                      { word: 'Facial Lock Protocol', path: '/research/facial-lock-protocol' },
                      { word: 'Kinetic Alignment Logic', path: '/research/kinetic-alignment-logic' },
                      { word: 'Member Zero Authority', path: '/research/member-zero-authority' },
                      { word: 'Biometric Metrics', path: '/metrics' }
                    ].map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          navigate(item.path);
                          onClose();
                        }}
                        className="flex items-center justify-between p-3 rounded-2xl bg-neutral-850 hover:bg-neutral-800 border border-neutral-800/50 hover:border-neutral-700/50 transition-all text-left text-xs text-neutral-300 hover:text-blue-400 font-medium group"
                      >
                        <span className="truncate">{item.word}</span>
                        <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              ) : results.length > 0 ? (
                // Matches Listed
                <div className="space-y-1">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 px-3 mb-2">
                    Search Results ({results.length})
                  </div>
                  
                  {results.map((item, idx) => {
                    const isSelected = idx === selectedIndex;
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          navigate(item.path);
                          onClose();
                        }}
                        onMouseEnter={() => setSelectedIndex(idx)}
                        className={`w-full text-left p-3.5 rounded-2xl transition-all flex items-start gap-4 border ${
                          isSelected 
                            ? 'bg-neutral-800 border-neutral-700 text-white' 
                            : 'bg-transparent border-transparent text-neutral-300'
                        }`}
                        id={`search-result-item-${idx}`}
                      >
                        {/* Left icon and node ID */}
                        <div className={`p-2 rounded-xl shrink-0 ${isSelected ? 'bg-neutral-750' : 'bg-neutral-850'} border border-neutral-800`}>
                          {getCategoryIcon(item.category)}
                        </div>

                        {/* Text detail */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-sm truncate uppercase tracking-wide">
                              {item.title}
                            </span>
                            {item.node && (
                              <span className="text-[9px] font-mono text-neutral-500 bg-neutral-850 px-1.5 py-0.5 rounded border border-neutral-800 shrink-0">
                                {item.node}
                              </span>
                            )}
                            <span className={`text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full border shrink-0 font-bold ${getCategoryBadgeClass(item.category)}`}>
                              {item.category}
                            </span>
                          </div>
                          <p className={`text-xs mt-1 leading-normal line-clamp-2 font-normal ${isSelected ? 'text-neutral-300' : 'text-neutral-500'}`}>
                            {item.desc}
                          </p>
                        </div>

                        {/* Active Selection Indicator */}
                        {isSelected && (
                          <div className="shrink-0 text-neutral-500 flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider bg-neutral-850 border border-neutral-750 px-1.5 py-1 rounded-lg">
                            <span>Open</span>
                            <CornerDownLeft size={10} />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              ) : (
                // Zero results
                <div className="py-12 px-4 text-center">
                  <div className="w-12 h-12 bg-neutral-800/80 text-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-neutral-700/50">
                    <Search size={20} />
                  </div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-300">
                    Zero Records Recovered
                  </h3>
                  <p className="text-xs text-neutral-500 mt-2 max-w-xs mx-auto leading-normal font-normal">
                    No registry hits for <span className="text-amber-500 font-semibold font-mono">"{query}"</span>. Review parameters or cross-reference alternative nodes.
                  </p>
                </div>
              )}
            </div>

            {/* Sticky Command Bar Footer */}
            <div className="px-6 py-3.5 bg-neutral-950 border-t border-neutral-800/80 flex justify-between items-center text-[10px] font-mono text-neutral-500 shrink-0 select-none">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <span className="bg-neutral-800 text-neutral-300 px-1.5 py-0.5 rounded border border-neutral-700 font-bold">↑↓</span> Navigation
                </span>
                <span className="flex items-center gap-1">
                  <span className="bg-neutral-800 text-neutral-300 px-1.5 py-0.5 rounded border border-neutral-700 font-bold">Enter</span> Open Node
                </span>
              </div>
              <div>
                <span className="flex items-center gap-1">
                  <span className="bg-neutral-800 text-neutral-300 px-1.5 py-0.5 rounded border border-neutral-700 font-bold">ESC</span> Dismiss
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
