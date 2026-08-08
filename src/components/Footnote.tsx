import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, X } from 'lucide-react';
import { JALH_LEXICON } from '../data/lexicon';

interface FootnoteProps {
  term: string;
  definition: string;
  citation?: string;
  className?: string;
}

export default function Footnote({ term, definition, citation = "JALH Archival Ledger v1.04", className = "" }: FootnoteProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  // Close the tooltip when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <span ref={containerRef} className={`relative inline-block ${className}`}>
      {/* Interactive Trigger Term */}
      <button
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        type="button"
        className="text-left font-semibold border-b border-dashed border-blue-500/50 hover:border-blue-600 hover:text-blue-600 transition-colors cursor-help inline-flex items-center gap-0.5 focus:outline-none focus:ring-1 focus:ring-blue-500/20 rounded px-0.5"
      >
        {term}
        <span className="text-[9px] text-blue-500 font-mono align-super font-bold ml-0.5 select-none">[?]</span>
      </button>

      {/* Non-Intrusive Academic Popover Tooltip */}
      <AnimatePresence>
        {isOpen && (
          <motion.span
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="absolute left-0 sm:left-1/2 sm:-translate-x-1/2 bottom-full mb-3 z-[999] w-72 sm:w-80 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-xl p-5 text-left text-xs font-normal text-neutral-800 dark:text-neutral-200 block leading-relaxed"
          >
            {/* Small decorative indicator triangle */}
            <span className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-full w-3 h-3 bg-white dark:bg-neutral-900 border-r border-b border-neutral-200 dark:border-neutral-800 rotate-45 -mt-1.5 pointer-events-none" />

            <span className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-800 pb-2 mb-2.5">
              <span className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-blue-600 uppercase tracking-wider">
                <BookOpen size={12} />
                Archival Definition
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(false);
                }}
                className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 p-0.5 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all"
                title="Dismiss"
              >
                <X size={12} />
              </button>
            </span>

            <span className="font-bold text-neutral-900 dark:text-white block mb-1 text-[13px] uppercase tracking-tight font-sans">
              {term}
            </span>

            <span className="text-neutral-500 dark:text-neutral-400 block font-light leading-relaxed text-[11px] mb-3">
              {definition}
            </span>

            <span className="pt-2 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-[9px] font-mono text-neutral-400 dark:text-neutral-500 uppercase">
              <span>Source Citation:</span>
              <span className="font-bold text-neutral-500 dark:text-neutral-300">{citation}</span>
            </span>
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}

interface FootnoteTextProps {
  text: string;
  className?: string;
}

/**
 * FootnoteText detects specialized JALH terminology within a given text string
 * and dynamically replaces them with interactive Footnote popovers.
 */
export function FootnoteText({ text, className = "" }: FootnoteTextProps) {
  // Extract and sort words from lexicon by length in descending order to prevent partial matching (e.g. "Kinetic" matching before "Kinetic Alignment Logic")
  const sortedLexicon = React.useMemo(() => {
    return [...JALH_LEXICON]
      .filter(entry => entry.word && entry.word.length > 3)
      .sort((a, b) => b.word.length - a.word.length);
  }, []);

  // Build the regex dynamically matching any of the JALH words
  const regex = React.useMemo(() => {
    if (sortedLexicon.length === 0) return null;
    const escapedWords = sortedLexicon.map(entry => 
      entry.word.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
    );
    // Use word boundaries for exact match matching
    return new RegExp(`\\b(${escapedWords.join('|')})\\b`, 'gi');
  }, [sortedLexicon]);

  if (!text) return null;
  if (!regex) return <span className={className}>{text}</span>;

  // Split text by regex while capturing the matches
  const parts = text.split(regex);
  if (parts.length <= 1) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className}>
      {parts.map((part, index) => {
        // Find corresponding entry in lexicon
        const matchedEntry = sortedLexicon.find(
          entry => entry.word.toLowerCase() === part.toLowerCase()
        );

        if (matchedEntry) {
          return (
            <Footnote
              key={index}
              term={part}
              definition={matchedEntry.definition}
              citation={`Node ${matchedEntry.node}`}
            />
          );
        }

        return <React.Fragment key={index}>{part}</React.Fragment>;
      })}
    </span>
  );
}

