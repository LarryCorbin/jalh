import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Shield, Sparkles, Database, CheckCircle, Globe2, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#fcfcfc] text-neutral-600 py-32 px-6 sm:px-8 md:px-16 border-t border-neutral-200 relative overflow-hidden font-sans">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
        
        {/* BRAND & POETIC ACQUISITION ASSET BLOCK */}
        <div className="lg:col-span-5 space-y-10">
          <div className="space-y-4">
            <h2 className="text-4xl font-black tracking-tighter uppercase italic leading-[0.8] text-neutral-950">
              Jalh <br/> Archive 
            </h2>
            <p className="text-neutral-500 text-xs max-w-sm leading-relaxed font-light">
              The official research archive documenting human-digit interaction matrices, cognitive habit extractions, and facial aesthetic stabilization protocols compiled under supervision of Member Zero.
            </p>
          </div>

          {/* Elegant, Highly Pronounced Yet Poetic Domain Custody Panel */}
          <div className="space-y-4 max-w-md">
            <div className="flex items-center gap-2 text-[9px] uppercase font-mono tracking-[0.2em] text-blue-600 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              Ecosystem Asset Custody
            </div>

            <motion.a 
              href="https://www.godaddy.com/domainsearch/find?domainToCheck=jalh.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="block p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.01)] hover:shadow-[0_12px_40px_rgba(59,130,246,0.06)] hover:border-blue-300 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Subtle ambient blur light inside the card */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/20 rounded-full blur-2xl group-hover:bg-blue-100/40 transition-all duration-300" />

              <div className="space-y-4 relative z-10">
                <div className="flex justify-between items-center">
                  <span className="text-[9px] font-mono tracking-widest text-neutral-400 uppercase">Registry Node: JALH.com</span>
                  <Globe2 className="w-4 h-4 text-neutral-400 group-hover:text-blue-500 transition-all duration-300" />
                </div>
                
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-tight flex items-center gap-1.5 font-sans">
                    Acquire Core JALH.com Domain 
                    <ArrowRight className="w-3.5 h-3.5 text-blue-600 group-hover:translate-x-1 transition-transform duration-300" />
                  </h3>
                  <p className="text-[11px] text-neutral-500 font-light leading-relaxed">
                    The primary network domain and associated brand assets are open for high-trust commercial acquisition. Secure transfer is fully integrated via GoDaddy Registrar.
                  </p>
                </div>

                <div className="pt-1">
                  <span className="inline-flex items-center gap-1.5 text-[9px] font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    Execute Domain Custody Transfer
                  </span>
                </div>
              </div>
            </motion.a>

            <div className="flex items-center gap-2 text-[9px] text-neutral-400 font-mono">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
              <span>Direct Registrar Gateway Verified (GoDaddy)</span>
            </div>
          </div>
        </div>

        {/* STRUCTURED LINK DIRECTORY */}
        <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-12">
          <div className="space-y-6">
            <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-blue-600">JALH Taxonomy</h3>
            <ul className="space-y-3 text-xs text-neutral-500 font-mono">
              <li><Link to="/methodology" className="hover:text-neutral-950 hover:pl-1 transition-all duration-300 block">Habit Extraction</Link></li>
              <li><Link to="/methodology" className="hover:text-neutral-950 hover:pl-1 transition-all duration-300 block">Aesthetic Sync</Link></li>
              <li><Link to="/behavioral-index" className="hover:text-neutral-950 hover:pl-1 transition-all duration-300 block">Behavioral Index</Link></li>
              <li><Link to="/digit-interaction" className="hover:text-neutral-950 hover:pl-1 transition-all duration-300 block">Digit Interaction</Link></li>
              <li><Link to="/kinetic-analysis" className="hover:text-neutral-950 hover:pl-1 transition-all duration-300 block">Ridge Mapping</Link></li>
              <li><Link to="/lexicon" className="hover:text-neutral-950 hover:pl-1 transition-all duration-300 block">JALH Glossary</Link></li>
              <li><Link to="/sitemap" className="hover:text-blue-600 hover:pl-1 transition-all duration-300 block text-blue-600 font-bold">HTML Sitemap</Link></li>
              <li><Link to="/authority" className="hover:text-blue-600 hover:pl-1 transition-all duration-300 block text-blue-600/80">Authority Index</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-blue-600">JALH Archive Nodes</h3>
            <ul className="space-y-3 text-xs text-neutral-500 font-mono">
              <li><Link to="/logs" className="hover:text-neutral-950 hover:pl-1 transition-all duration-300 block">Archive Node 001</Link></li>
              <li><Link to="/logs/alpha" className="hover:text-neutral-950 hover:pl-1 transition-all duration-300 block">Alpha Relay Hub</Link></li>
              <li><Link to="/lab" className="hover:text-neutral-950 hover:pl-1 transition-all duration-300 block">Kinetic Lab</Link></li>
              <li><Link to="/infrastructure" className="hover:text-neutral-950 hover:pl-1 transition-all duration-300 block">Infrastructure</Link></li>
              <li><Link to="/metrics" className="hover:text-neutral-950 hover:pl-1 transition-all duration-300 block">Biometric Logs</Link></li>
              <li><Link to="/vision" className="hover:text-neutral-950 hover:pl-1 transition-all duration-300 block">Vision 2027</Link></li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-blue-600">JALH Research Records</h3>
            <ul className="space-y-3 text-xs text-neutral-500 font-mono">
              <li><Link to="/personnel" className="hover:text-neutral-950 hover:pl-1 transition-all duration-300 block">Member Zero</Link></li>
              <li><Link to="/history" className="hover:text-neutral-950 hover:pl-1 transition-all duration-300 block">Logic Timeline</Link></li>
              <li><Link to="/press" className="hover:text-neutral-950 hover:pl-1 transition-all duration-300 block">Press & Media</Link></li>
              <li><Link to="/api-docs" className="hover:text-neutral-950 hover:pl-1 transition-all duration-300 block">Research API</Link></li>
              <li><Link to="/legal" className="hover:text-neutral-950 hover:pl-1 transition-all duration-300 block">Legal Authority</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-blue-600">JALH Acquisitions</h3>
            <ul className="space-y-3 text-xs text-neutral-500 font-mono">
              <li><Link to="/domain-gateway" className="hover:text-neutral-950 hover:pl-1 transition-all duration-300 block">Domain Registry</Link></li>
              <li><Link to="/partnership" className="hover:text-neutral-950 hover:pl-1 transition-all duration-300 block">Partnership Node</Link></li>
              <li><Link to="/feelize-web-design" className="hover:text-neutral-950 hover:pl-1 transition-all duration-300 block font-medium text-blue-600">Feelize Testimonial</Link></li>
              <li><Link to="/contact" className="hover:text-neutral-950 hover:pl-1 transition-all duration-300 block text-blue-600/80">Inquiry Gateway</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM METADATA & PARTNERS */}
      <div className="max-w-7xl mx-auto mt-28 pt-8 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
        <div className="flex flex-wrap items-center gap-4">
          <Link 
            to="/feelize-web-design" 
            className="px-5 py-2.5 bg-blue-50/5 border border-blue-100 text-blue-600 hover:text-white hover:bg-blue-600 hover:border-blue-600 rounded-full transition-all flex items-center gap-2 font-sans font-semibold text-xs tracking-normal"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
            Website Design Service from Feelize
          </Link>

          <div className="flex items-center gap-3 bg-neutral-100/60 border border-neutral-200 px-4 py-2 rounded-full text-[9px]">
            <span className="text-neutral-500 font-bold">INDEXED DIRECTORY:</span>
            <Link 
              to="/sitemap" 
              className="text-neutral-500 hover:text-blue-600 hover:font-bold transition-all"
            >
              HTML
            </Link>
            <span className="text-neutral-300">•</span>
            <a 
              href="/sitemap.xml" 
              target="_blank" 
              className="text-neutral-400 hover:text-blue-600 transition-colors"
            >
              XML
            </a>
            <span className="text-neutral-300">•</span>
            <a 
              href="/robots.txt" 
              target="_blank" 
              className="text-neutral-400 hover:text-blue-600 transition-colors"
            >
              ROBOTS
            </a>
          </div>
        </div>

        <div className="text-center md:text-right">
          <div className="font-bold text-neutral-400">© {currentYear} JALH ARCHIVE. ALL RIGHTS RESERVED.</div>
        </div>
      </div>

      {/* Atmospheric Ambient light fields for premium feel */}
      <motion.div 
        animate={{ 
          scale: 1.08,
          opacity: 0.05
        }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute -bottom-64 -left-64 w-[50rem] h-[50rem] bg-blue-200 rounded-full blur-[140px] pointer-events-none"
      />
    </footer>
  );
}
