import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, Activity, Beaker, Archive, Eye, ShieldCheck, 
  User, Clock, ChevronDown, Fingerprint, Search,
  BookOpen, Share2, Award, Terminal, HardDrive, Sparkles,
  Workflow, ArrowRight
} from 'lucide-react';
import SearchModal from './SearchModal';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [mobileExpandedGroup, setMobileExpandedGroup] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Listen for global keyboard shortcut (Cmd+K, Ctrl+K or '/') to open search
  useEffect(() => {
    const handleShortcut = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input or textarea
      if (
        document.activeElement?.tagName === 'INPUT' || 
        document.activeElement?.tagName === 'TEXTAREA'
      ) {
        return;
      }

      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      } else if (e.key === '/') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleShortcut);
    return () => window.removeEventListener('keydown', handleShortcut);
  }, []);

  const coreResearchLinks = [
    { name: 'JALH Methodology (Physical Habit Extraction)', desc: 'Kinetic habits & posture extraction', path: '/methodology', icon: ShieldCheck },
    { name: 'JALH Live Biometric Data (Real-time Telemetry)', desc: 'Real-time biological data feed', path: '/metrics', icon: Activity },
    { name: 'JALH Experimental Lab (Biomechanical Simulation)', desc: 'Active kinetic experiments', path: '/lab', icon: Beaker },
    { name: 'JALH Behavioral Sync Index (Symmetry Metrics)', desc: 'Aesthetic sync coordinates', path: '/behavioral-index', icon: Eye },
    { name: 'JALH Touch Ridge Mechanics (Finger Interaction)', desc: 'Finger ridge mapping', path: '/digit-interaction', icon: Fingerprint },
    { name: 'JALH Biomechanical Telemetry (Physical Hand Motion)', desc: 'Biomechanical contact hub', path: '/kinetic-analysis', icon: Workflow }
  ];

  const archiveLinks = [
    { name: 'JALH Complete Archive (A-Z Verified Database)', desc: 'Core node records access', path: '/archive', icon: Archive },
    { name: 'JALH Daily Observation Logs (Primary Telemetry)', desc: 'Chronological telemetry', path: '/logs', icon: Terminal },
    { name: 'JALH Alpha Relay Backlog (Node Communications)', desc: 'Decentralized relays', path: '/logs/alpha', icon: HardDrive },
    { name: 'JALH Member Zero Dossier (Lead Investigator)', desc: 'Member Zero credentials', path: '/personnel', icon: User },
    { name: 'JALH Framework Timeline (History & Annals)', desc: 'Establishment history', path: '/history', icon: Clock },
    { name: 'JALH Search Authority Index (Certificates)', desc: 'Autonomous certificates', path: '/authority', icon: ShieldCheck },
    { name: 'JALH A-Z Glossary Search (Terminology Finder)', desc: 'Terminology glossary', path: '/lexicon', icon: BookOpen }
  ];

  const synergyLinks = [
    { name: 'JALH.com Brand Sale (Premium Acquisition)', desc: 'Premium acquisition details', path: '/domain-gateway', icon: Share2 },
    { name: 'JALH Partnership Gateway (Commercial Connection)', desc: 'Global integration lines', path: '/partnership', icon: Award },
    { name: 'Feelize JALH Agency Showcase (Design Testimonials)', desc: 'Web design testimonial', path: '/feelize-web-design', icon: Sparkles }
  ];

  const categoryHubLinks = [
    { name: 'JALH Biomechanical Directory (Telemetry Logs)', desc: 'Biomechanical telemetry logs', path: '/category/kinetic', icon: Activity },
    { name: 'JALH Symmetry Protocols (Visual Alignment)', desc: 'Visual alignment protocols', path: '/category/aesthetic', icon: Eye },
    { name: 'JALH System Nodes Hub (Network Infrastructure)', desc: 'Infrastructure & logs directory', path: '/category/infrastructure-personnel', icon: HardDrive }
  ];

  const serviceLinks = [
    { name: 'JALH Bespoke Web Design (Interactive Motion UX)', desc: 'Bespoke frontend motion design', path: '/services/interactive-experience-design', icon: Sparkles },
    { name: 'JALH Search Engine Domination (Google Crawl)', desc: 'Crawl engineering & index triggers', path: '/services/semantic-seo-domination', icon: Workflow },
    { name: 'JALH Brand Identity Systems (Authority & Stability)', desc: 'Digital systems & brand authority', path: '/services/digital-identity-stabilization', icon: Award },
    { name: 'JALH Google Rank Recovery (Penalty Diagnostics)', desc: 'Diagnose & reclaim search rank', path: '/funnel/serp-recovery', icon: Activity },
    { name: 'JALH Crawl Indexability Audit (Pre-render Scan)', desc: 'Free SEO pre-rendering check', path: '/funnel/free-seo-audit', icon: Activity },
    { name: 'JALH Project Price Planner (Slider Calculator)', desc: 'Bespoke slider quote planner', path: '/funnel/project-planner', icon: Beaker }
  ];

  const isLightPage = !['/metrics', '/infrastructure'].includes(location.pathname);
  const textThemeClass = isScrolled ? 'text-black' : (isLightPage ? 'text-black' : 'text-white');
  const textSecondaryThemeClass = isScrolled ? 'text-gray-500' : (isLightPage ? 'text-gray-500' : 'text-white/60');
  const bgThemeClass = isScrolled ? 'bg-white/95 border-neutral-150 shadow-sm py-3 px-6 md:px-12' : 'py-5 px-6 md:px-12';

  const toggleMobileGroup = (group: string) => {
    setMobileExpandedGroup(mobileExpandedGroup === group ? null : group);
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${bgThemeClass}`}
        id="app-navbar"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-4 group shrink-0" id="navbar-logo-link">
            <span className={`text-base font-semibold tracking-widest uppercase transition-colors hover:text-blue-600 ${textThemeClass}`}>
              Jalh
            </span>
          </Link>

          {/* Condensed & Optimized Desktop Navigation with Clear Human Labels */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-7" id="desktop-nav-menu">
            
            {/* Mega Menu 1: Scientific Studies */}
            <div className="relative group py-2" id="nav-group-research">
              <button className={`flex items-center gap-1 py-1 text-[11px] font-bold uppercase tracking-widest transition-colors hover:text-blue-600 focus:outline-none cursor-pointer ${textSecondaryThemeClass}`}>
                JALH Scientific Studies
                <ChevronDown size={11} className="opacity-60 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              
              <div className="absolute left-1/2 -translate-x-[25%] top-full pt-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 transform translate-y-1.5 group-hover:translate-y-0 z-50">
                <div className="w-[620px] bg-white rounded-3xl p-6 border border-neutral-200/60 shadow-2xl grid grid-cols-2 gap-6 text-neutral-900">
                  
                  {/* Left Column: Biometrics & Lab Trials */}
                  <div className="space-y-3">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-blue-600 font-bold block pb-1 border-b border-neutral-100">
                      JALH Biometrics &amp; Lab Trials
                    </span>
                    <div className="grid grid-cols-1 gap-1">
                      {coreResearchLinks.slice(0, 3).map((link) => (
                        <Link 
                          key={link.path} 
                          to={link.path}
                          className="flex items-start gap-3 p-2 hover:bg-neutral-50 rounded-xl transition-all group/item text-left border border-transparent hover:border-neutral-100"
                        >
                          <div className="p-1.5 bg-neutral-100 group-hover/item:bg-blue-50 text-neutral-600 group-hover/item:text-blue-600 rounded-lg transition-colors shrink-0 mt-0.5">
                            <link.icon size={13} />
                          </div>
                          <div className="min-w-0">
                            <div className="text-[11px] font-bold text-neutral-950 group-hover/item:text-blue-600 uppercase tracking-wide">
                              {link.name}
                            </div>
                            <p className="text-[9px] text-neutral-400 mt-0.5 leading-tight font-normal">
                              {link.desc}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Behavioral Mechanics */}
                  <div className="space-y-3">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-blue-600 font-bold block pb-1 border-b border-neutral-100">
                      JALH Behavioral Mechanics
                    </span>
                    <div className="grid grid-cols-1 gap-1">
                      {coreResearchLinks.slice(3).map((link) => (
                        <Link 
                          key={link.path} 
                          to={link.path}
                          className="flex items-start gap-3 p-2 hover:bg-neutral-50 rounded-xl transition-all group/item text-left border border-transparent hover:border-neutral-100"
                        >
                          <div className="p-1.5 bg-neutral-100 group-hover/item:bg-blue-50 text-neutral-600 group-hover/item:text-blue-600 rounded-lg transition-colors shrink-0 mt-0.5">
                            <link.icon size={13} />
                          </div>
                          <div className="min-w-0">
                            <div className="text-[11px] font-bold text-neutral-950 group-hover/item:text-blue-600 uppercase tracking-wide">
                              {link.name}
                            </div>
                            <p className="text-[9px] text-neutral-400 mt-0.5 leading-tight font-normal">
                              {link.desc}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Mega Menu 2: Official Database */}
            <div className="relative group py-2" id="nav-group-archive">
              <button className={`flex items-center gap-1 py-1 text-[11px] font-bold uppercase tracking-widest transition-colors hover:text-blue-600 focus:outline-none cursor-pointer ${textSecondaryThemeClass}`}>
                JALH Official Database
                <ChevronDown size={11} className="opacity-60 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 transform translate-y-1.5 group-hover:translate-y-0 z-50">
                <div className="w-[620px] bg-white rounded-3xl p-6 border border-neutral-200/60 shadow-2xl grid grid-cols-2 gap-6 text-neutral-900">
                  
                  {/* Left Column: Data Registers & Logs */}
                  <div className="space-y-3">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-blue-600 font-bold block pb-1 border-b border-neutral-100">
                      JALH Data Registers &amp; Logs
                    </span>
                    <div className="grid grid-cols-1 gap-1">
                      {archiveLinks.slice(0, 4).map((link) => (
                        <Link 
                          key={link.path} 
                          to={link.path}
                          className="flex items-start gap-3 p-2 hover:bg-neutral-50 rounded-xl transition-all group/item text-left border border-transparent hover:border-neutral-100"
                        >
                          <div className="p-1.5 bg-neutral-100 group-hover/item:bg-blue-50 text-neutral-600 group-hover/item:text-blue-600 rounded-lg transition-colors shrink-0 mt-0.5">
                            <link.icon size={13} />
                          </div>
                          <div className="min-w-0">
                            <div className="text-[11px] font-bold text-neutral-950 group-hover/item:text-blue-600 uppercase tracking-wide">
                              {link.name}
                            </div>
                            <p className="text-[9px] text-neutral-400 mt-0.5 leading-tight font-normal">
                              {link.desc}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Dossiers & Glossaries */}
                  <div className="space-y-3">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-blue-600 font-bold block pb-1 border-b border-neutral-100">
                      JALH Dossier, Timeline &amp; Glossary
                    </span>
                    <div className="grid grid-cols-1 gap-1">
                      {archiveLinks.slice(4).map((link) => (
                        <Link 
                          key={link.path} 
                          to={link.path}
                          className="flex items-start gap-3 p-2 hover:bg-neutral-50 rounded-xl transition-all group/item text-left border border-transparent hover:border-neutral-100"
                        >
                          <div className="p-1.5 bg-neutral-100 group-hover/item:bg-blue-50 text-neutral-600 group-hover/item:text-blue-600 rounded-lg transition-colors shrink-0 mt-0.5">
                            <link.icon size={13} />
                          </div>
                          <div className="min-w-0">
                            <div className="text-[11px] font-bold text-neutral-950 group-hover/item:text-blue-600 uppercase tracking-wide">
                              {link.name}
                            </div>
                            <p className="text-[9px] text-neutral-400 mt-0.5 leading-tight font-normal">
                              {link.desc}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Mega Menu 3: Professional Services */}
            <div className="relative group py-2" id="nav-group-services">
              <button className={`flex items-center gap-1 py-1 text-[11px] font-bold uppercase tracking-widest transition-colors hover:text-blue-600 focus:outline-none cursor-pointer ${textSecondaryThemeClass}`}>
                JALH SEO &amp; Web Agency Services
                <ChevronDown size={11} className="opacity-60 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              
              <div className="absolute right-0 top-full pt-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 transform translate-y-1.5 group-hover:translate-y-0 z-50">
                <div className="w-[660px] bg-white rounded-3xl p-6 border border-neutral-200/60 shadow-2xl grid grid-cols-2 gap-6 text-neutral-900">
                  
                  {/* Left Column: Bespoke Agency Services */}
                  <div className="space-y-3">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-blue-600 font-bold block pb-1 border-b border-neutral-100">
                      JALH Bespoke Design &amp; Optimization
                    </span>
                    <div className="grid grid-cols-1 gap-1">
                      {serviceLinks.slice(0, 3).map((link) => (
                        <Link 
                          key={link.path} 
                          to={link.path}
                          className="flex items-start gap-3 p-2 hover:bg-neutral-50 rounded-xl transition-all group/item text-left border border-transparent hover:border-neutral-100"
                        >
                          <div className="p-1.5 bg-neutral-100 group-hover/item:bg-blue-50 text-neutral-600 group-hover/item:text-blue-600 rounded-lg transition-colors shrink-0 mt-0.5">
                            <link.icon size={13} />
                          </div>
                          <div className="min-w-0">
                            <div className="text-[11px] font-bold text-neutral-950 group-hover/item:text-blue-600 uppercase tracking-wide">
                              {link.name}
                            </div>
                            <p className="text-[9px] text-neutral-400 mt-0.5 leading-tight font-normal">
                              {link.desc}
                            </p>
                          </div>
                        </Link>
                      ))}
                      {synergyLinks.slice(2).map((link) => (
                        <Link 
                          key={link.path} 
                          to={link.path}
                          className="flex items-start gap-3 p-2 hover:bg-neutral-50 rounded-xl transition-all group/item text-left border border-transparent hover:border-neutral-100"
                        >
                          <div className="p-1.5 bg-neutral-100 group-hover/item:bg-blue-50 text-neutral-600 group-hover/item:text-blue-600 rounded-lg transition-colors shrink-0 mt-0.5">
                            <link.icon size={13} />
                          </div>
                          <div className="min-w-0">
                            <div className="text-[11px] font-bold text-neutral-950 group-hover/item:text-blue-600 uppercase tracking-wide">
                              {link.name}
                            </div>
                            <p className="text-[9px] text-neutral-400 mt-0.5 leading-tight font-normal">
                              {link.desc}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Interactive Calculators & Audits */}
                  <div className="space-y-3">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-blue-600 font-bold block pb-1 border-b border-neutral-100">
                      JALH Calculators, Audits &amp; Domain Sales
                    </span>
                    <div className="grid grid-cols-1 gap-1">
                      {serviceLinks.slice(3).map((link) => (
                        <Link 
                          key={link.path} 
                          to={link.path}
                          className="flex items-start gap-3 p-2 hover:bg-neutral-50 rounded-xl transition-all group/item text-left border border-transparent hover:border-neutral-100"
                        >
                          <div className="p-1.5 bg-neutral-100 group-hover/item:bg-blue-50 text-neutral-600 group-hover/item:text-blue-600 rounded-lg transition-colors shrink-0 mt-0.5">
                            <link.icon size={13} />
                          </div>
                          <div className="min-w-0">
                            <div className="text-[11px] font-bold text-neutral-950 group-hover/item:text-blue-600 uppercase tracking-wide">
                              {link.name}
                            </div>
                            <p className="text-[9px] text-neutral-400 mt-0.5 leading-tight font-normal">
                              {link.desc}
                            </p>
                          </div>
                        </Link>
                      ))}
                      {synergyLinks.slice(0, 2).map((link) => (
                        <Link 
                          key={link.path} 
                          to={link.path}
                          className="flex items-start gap-3 p-2 hover:bg-neutral-50 rounded-xl transition-all group/item text-left border border-transparent hover:border-neutral-100"
                        >
                          <div className="p-1.5 bg-neutral-100 group-hover/item:bg-blue-50 text-neutral-600 group-hover/item:text-blue-600 rounded-lg transition-colors shrink-0 mt-0.5">
                            <link.icon size={13} />
                          </div>
                          <div className="min-w-0">
                            <div className="text-[11px] font-bold text-neutral-950 group-hover/item:text-blue-600 uppercase tracking-wide">
                              {link.name}
                            </div>
                            <p className="text-[9px] text-neutral-400 mt-0.5 leading-tight font-normal">
                              {link.desc}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>

          {/* Right Action blocks (Search Trigger + Inquire + Mobile Hamburger) */}
          <div className="flex items-center gap-3 md:gap-4 select-none" id="navbar-actions">
            
            {/* Elegant Search Button */}
            <button 
              onClick={() => setIsSearchOpen(true)}
              className={`p-2.5 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all flex items-center gap-1.5 group cursor-pointer ${textThemeClass}`}
              title="Search Archive (⌘K or /)"
              id="navbar-search-btn"
            >
              <Search size={15} className="group-hover:scale-105 transition-transform" />
              <span className="hidden xl:inline text-[9px] font-mono opacity-50 border border-neutral-300 dark:border-neutral-700 px-1.5 py-0.5 rounded bg-neutral-50 dark:bg-neutral-900">
                /
              </span>
            </button>

            <Link 
              to="/contact" 
              className={`px-4 py-2 bg-black text-white text-[10px] md:text-[11px] font-bold uppercase tracking-widest rounded-lg hover:bg-blue-600 transition-all whitespace-nowrap leading-none ${isScrolled ? '' : 'shadow-md'}`}
              id="navbar-inquire-btn"
            >
              Inquire
            </Link>

            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className={`lg:hidden p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors ${textThemeClass}`}
              id="navbar-mobile-hamburger"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Modern Client-Side Full-Text Search Modal */}
      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[200] bg-black text-white flex flex-col p-6 md:p-8 overflow-y-auto"
            id="mobile-nav-panel"
          >
             <div className="flex justify-between items-center mb-8 shrink-0">
               <span className="text-xs font-bold tracking-widest uppercase text-neutral-400">JALH Navigation</span>
               <button onClick={() => setIsMobileMenuOpen(false)} className="p-2.5 bg-neutral-900 border border-neutral-800 rounded-full hover:bg-neutral-800 transition-colors">
                 <X size={18} />
               </button>
            </div>
            
            <div className="flex flex-col gap-3">
              
              {/* Mobile Group Search Trigger */}
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsSearchOpen(true);
                }}
                className="w-full flex items-center gap-3 px-4 py-3 bg-neutral-900 rounded-2xl border border-neutral-800 text-left text-neutral-400 hover:text-white transition-all text-xs mb-3 font-semibold"
              >
                <Search size={14} className="text-blue-500" />
                <span>SEARCH ARCHIVE NODES...</span>
              </button>

              {/* Mobile Group 1: Research Studies */}
              <div className="border-b border-white/5 pb-2">
                <button 
                  onClick={() => toggleMobileGroup('research')}
                  className="w-full flex justify-between items-center py-2.5 text-base font-light text-left tracking-wide"
                >
                  <span className="uppercase tracking-widest font-semibold text-xs text-blue-400">JALH Scientific Studies</span>
                  <ChevronDown size={14} className={`transition-transform duration-300 ${mobileExpandedGroup === 'research' ? 'rotate-180 text-blue-500' : 'opacity-50'}`} />
                </button>
                
                {mobileExpandedGroup === 'research' && (
                  <div className="grid grid-cols-1 gap-1.5 pl-3 py-2 bg-neutral-950 rounded-2xl mt-1 border border-neutral-900">
                    {coreResearchLinks.map((link) => (
                      <Link 
                        key={link.path} 
                        to={link.path} 
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-start gap-3 py-2 px-2 text-xs text-neutral-400 hover:text-blue-400"
                      >
                        <link.icon size={12} className="text-blue-500 shrink-0 mt-0.5" />
                        <div className="min-w-0">
                          <span className="uppercase tracking-wider font-semibold block">{link.name}</span>
                          <span className="text-[10px] text-neutral-500 font-light block mt-0.5">{link.desc}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Group 2: Official Database */}
              <div className="border-b border-white/5 pb-2">
                <button 
                  onClick={() => toggleMobileGroup('archive')}
                  className="w-full flex justify-between items-center py-2.5 text-base font-light text-left tracking-wide"
                >
                  <span className="uppercase tracking-widest font-semibold text-xs text-blue-400">JALH Official Database</span>
                  <ChevronDown size={14} className={`transition-transform duration-300 ${mobileExpandedGroup === 'archive' ? 'rotate-180 text-blue-500' : 'opacity-50'}`} />
                </button>
                
                {mobileExpandedGroup === 'archive' && (
                  <div className="grid grid-cols-1 gap-1.5 pl-3 py-2 bg-neutral-950 rounded-2xl mt-1 border border-neutral-900">
                    {archiveLinks.map((link) => (
                      <Link 
                        key={link.path} 
                        to={link.path} 
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-start gap-3 py-2 px-2 text-xs text-neutral-400 hover:text-blue-400"
                      >
                        <link.icon size={12} className="text-blue-500 shrink-0 mt-0.5" />
                        <div className="min-w-0">
                          <span className="uppercase tracking-wider font-semibold block">{link.name}</span>
                          <span className="text-[10px] text-neutral-500 font-light block mt-0.5">{link.desc}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Group 3: SEO & Web Agency Services */}
              <div className="border-b border-white/5 pb-2">
                <button 
                  onClick={() => toggleMobileGroup('servicesAndFunnels')}
                  className="w-full flex justify-between items-center py-2.5 text-base font-light text-left tracking-wide"
                >
                  <span className="uppercase tracking-widest font-semibold text-xs text-blue-400">JALH SEO &amp; Web Agency Services</span>
                  <ChevronDown size={14} className={`transition-transform duration-300 ${mobileExpandedGroup === 'servicesAndFunnels' ? 'rotate-180 text-blue-500' : 'opacity-50'}`} />
                </button>
                
                {mobileExpandedGroup === 'servicesAndFunnels' && (
                  <div className="grid grid-cols-1 gap-1.5 pl-3 py-2 bg-neutral-950 rounded-2xl mt-1 border border-neutral-900">
                    {serviceLinks.map((link) => (
                      <Link 
                        key={link.path} 
                        to={link.path} 
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-start gap-3 py-2 px-2 text-xs text-neutral-400 hover:text-blue-400"
                      >
                        <link.icon size={12} className="text-blue-500 shrink-0 mt-0.5" />
                        <div className="min-w-0">
                          <span className="uppercase tracking-wider font-semibold block">{link.name}</span>
                          <span className="text-[10px] text-neutral-500 font-light block mt-0.5">{link.desc}</span>
                        </div>
                      </Link>
                    ))}
                    {synergyLinks.map((link) => (
                      <Link 
                        key={link.path} 
                        to={link.path} 
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-start gap-3 py-2 px-2 text-xs text-neutral-400 hover:text-blue-400"
                      >
                        <link.icon size={12} className="text-blue-500 shrink-0 mt-0.5" />
                        <div className="min-w-0">
                          <span className="uppercase tracking-wider font-semibold block">{link.name}</span>
                          <span className="text-[10px] text-neutral-500 font-light block mt-0.5">{link.desc}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

            </div>

            <div className="mt-auto py-6 border-t border-white/5 space-y-4 shrink-0">
              <Link 
                to="/contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-center font-bold text-xs uppercase tracking-widest rounded-xl transition-colors"
              >
                Inquiry Gateway
              </Link>
              <div className="text-[9px] font-mono uppercase tracking-widest text-neutral-500 text-center">
                Verified Cryptographic Archive // Member Zero
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
