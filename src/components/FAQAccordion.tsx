import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, ShieldCheck } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string | React.ReactNode;
}

interface FAQAccordionProps {
  items: FAQItem[];
  title?: string;
  isDark?: boolean;
}

export default function FAQAccordion({ items, title = "Frequently Asked Questions", isDark = false }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div 
      className={`p-8 md:p-12 rounded-3xl border ${
        isDark 
          ? 'bg-neutral-900/60 border-neutral-800' 
          : 'bg-white border-neutral-200/60 shadow-lg shadow-neutral-100/50'
      } space-y-8`}
      itemScope 
      itemType="https://schema.org/FAQPage"
    >
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-blue-500 font-bold">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>SERP Crawl Optimization Node // Microdata Enabled</span>
        </div>
        <h3 className={`text-2xl font-extrabold uppercase tracking-tight ${isDark ? 'text-white' : 'text-neutral-900'}`}>
          {title}
        </h3>
      </div>

      <div className="divide-y divide-neutral-200/40">
        {items.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div 
              key={i} 
              className="py-4 first:pt-0 last:pb-0"
              itemProp="mainEntity" 
              itemScope 
              itemType="https://schema.org/Question"
            >
              <button
                onClick={() => toggleIndex(i)}
                className="w-full flex items-center justify-between py-3 text-left group focus:outline-none"
                aria-expanded={isOpen}
              >
                <span 
                  className={`text-sm md:text-base font-bold transition-colors duration-200 ${
                    isOpen 
                      ? 'text-blue-500' 
                      : isDark 
                        ? 'text-neutral-200 group-hover:text-white' 
                        : 'text-neutral-800 group-hover:text-neutral-950'
                  }`}
                  itemProp="name"
                >
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className={`p-1.5 rounded-lg border shrink-0 ml-4 transition-all duration-200 ${
                    isDark 
                      ? 'border-neutral-800 bg-neutral-950 text-neutral-400 group-hover:text-white' 
                      : 'border-neutral-100 bg-neutral-50 text-neutral-500 group-hover:bg-neutral-100'
                  }`}
                >
                  <ChevronDown className="w-3.5 h-3.5" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                    itemProp="acceptedAnswer" 
                    itemScope 
                    itemType="https://schema.org/Answer"
                  >
                    <div 
                      className={`pt-3 pb-4 pl-1 text-xs md:text-sm leading-relaxed ${
                        isDark ? 'text-neutral-400' : 'text-neutral-600'
                      }`}
                      itemProp="text"
                    >
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-2 pt-4 border-t border-neutral-200/40 text-[9px] font-mono text-neutral-400">
        <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
        <span>Validated schema format compliant with Google Core Search bot indexing protocols.</span>
      </div>
    </div>
  );
}
