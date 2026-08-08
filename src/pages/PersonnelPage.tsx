import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, User, ShieldAlert, Fingerprint, Award, ShieldCheck, Mail, Globe, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import ColorPatch from '../components/ColorPatch';

export default function PersonnelPage() {
  const staff = [
    { 
      id: '000', 
      name: 'MEMBER_ZERO', 
      role: 'Lead Progenitor & Chief Investigator', 
      title: 'M.Sc. Human-Computer Interaction & Ergonomics',
      bio: 'The primary architect, founder, and main subject of the JALH framework. Member Zero began the initial research into modern digit-handling behaviors in 2018, mapping over 12,000 hours of continuous tactile interactions on mobile devices. Responsible for the mathematical derivation of Quadrant J (Kinetic Curve) limits and the zygomatic muscle feedback models. Due to high-level security protocols and to protect research node sanctity from unwanted corporate acquisition, Member Zero\'s real-world identity is obfuscated under official Level 9 Omega clearance.',
      publications: [
        'Tactile Friction Coefficients and Involuntary Gestures (2021)',
        'The Zygomatic Lock Protocol: Balancing Cognitive Focus and Aesthetic Stability (2024)'
      ],
      access: 'Level_9_Omega'
    },
    { 
      id: '014', 
      name: 'ARCHIVIST_X', 
      role: 'Senior Data Custodian & Network Administrator', 
      title: 'Ph.D. Information Security & Decentralized Archives',
      bio: 'Archivist X oversees the security and indexing of the global JALH.com database and associated digital nodes. Specializing in semantic permanence, X ensures that the primary JALH acronym variants are indexed correctly across web crawlers and linguistic graphs. Formerly a security researcher in biometric verification, Archivist X is responsible for compiling the Progenitor Logs and ensuring direct, high-trust GoDaddy Registrar domain protection controls remain uncompromised.',
      publications: [
        'Semantic Permanence and Namespace Security on Modern Web Domains (2023)',
        'Decentralized Biometric Log Storage under Strict Privacy Protocols (2025)'
      ],
      access: 'Level_4_Alpha'
    },
    { 
      id: '088', 
      name: 'SYMMETRY_CORE', 
      role: 'Aesthetic Synchronization Specialist', 
      title: 'M.D. Craniofacial Biomechanics & Kinematics',
      bio: 'Symmetry Core manages physical training protocols and visual balance metrics across all JALH research trials. Core conducts photogrammetric tracking to analyze the correlation between repetitive finger strain and micro-tension in the head and shoulders. By implementing the postural alignment matrix (PAM) and shoulder counter-balancing procedures, Symmetry Core helps researchers maintain absolute composure and natural presence during intense digital work cycles.',
      publications: [
        'Craniofacial Symmetry Recovery after Intense Desktop Workloads (2022)',
        'The Postural Curve: Countering Digital Slouch through Isometric Feedback (2025)'
      ],
      access: 'Level_4_Gamma'
    }
  ];

  return (
    <div className="relative min-h-screen bg-transparent pt-32 pb-48 px-6 sm:px-8 md:px-16 overflow-hidden text-neutral-800 font-sans selection:bg-blue-100">
      <ColorPatch color="bg-blue-600" size="w-[50rem] h-[50rem]" opacity={0.03} className="-top-24 -left-24" />
      <ColorPatch color="bg-yellow-400" size="w-[30rem] h-[30rem]" opacity={0.02} className="bottom-0 right-12" />
      
      <Helmet>
        <title>Personnel Hierarchy & Core Researchers | JALH Archival Directory</title>
        <meta name="description" content="Meet the principal investigators behind the JALH (Judiciously Always Looking Happy) framework. Access detailed academic records and research publications for Member Zero, Archivist X, and Symmetry Core." />
        <meta name="keywords" content="JALH personnel, Member Zero, kinetic researchers, behavioral specialists, JALH team, official research group, human computer interaction" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://jalh.com/personnel" />
        <meta property="og:title" content="Personnel | JALH Research Directory" />
        <meta property="og:description" content="Meet the team behind the JALH framework. Documentation provided by Member Zero." />
      </Helmet>

      <div className="max-w-6xl mx-auto space-y-24 relative z-10">
        <Link to="/" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-black mb-8 transition-colors">
          <ArrowLeft size={12} /> Authority node
        </Link>

        {/* Header Block */}
        <header className="space-y-6 text-left max-w-4xl">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-blue-50 border border-blue-100 rounded text-[9px] text-blue-700 uppercase tracking-[0.2em] font-mono font-semibold">
            <ShieldAlert size={14} /> SECURITY CLEARANCE LEVELS ACTIVE
          </div>
          <h1 className="text-5xl sm:text-7xl font-black text-neutral-900 leading-[0.85] uppercase tracking-tighter italic">
            Research <br/>directory
          </h1>
          <p className="text-neutral-500 text-lg sm:text-xl font-light leading-relaxed max-w-2xl">
            Meet the primary progenitors and custodians authorized by Member Zero to handle JALH biometric assets, index taxonomic nodes, and maintain intellectual property records.
          </p>
        </header>

        {/* Detailed Directory Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 text-left">
           {staff.map((p) => (
             <motion.div 
               key={p.id}
               initial={{ opacity: 0, y: 15 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="p-8 sm:p-10 bg-white border border-neutral-200 rounded-3xl space-y-6 group hover:border-blue-500 hover:shadow-[0_15px_40px_rgba(0,0,0,0.03)] transition-all duration-300 flex flex-col justify-between"
             >
                <div className="space-y-6">
                  {/* Card Header */}
                  <div className="flex justify-between items-start">
                     <div className="w-12 h-12 bg-neutral-900 rounded-xl flex items-center justify-center text-white">
                        <User size={22} />
                     </div>
                     <div className="text-right">
                        <div className="text-[9px] font-mono font-bold text-blue-600 uppercase tracking-widest leading-none mb-1">Clearance</div>
                        <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">{p.access.replace(/_/g, ' ')}</div>
                     </div>
                  </div>
                  
                  {/* Identification and Bio */}
                  <div className="space-y-4">
                     <div>
                        <div className="text-xs font-mono text-neutral-400">ID_REF_00{p.id}</div>
                        <h3 className="text-xl font-black text-neutral-950 uppercase tracking-tight">{p.name.replace(/_/g, ' ')}</h3>
                        <p className="text-[11px] text-neutral-400 font-mono italic mt-0.5">{p.title}</p>
                     </div>
                     <div className="text-blue-600 text-xs font-mono font-bold uppercase tracking-wider">{p.role}</div>
                     <p className="text-sm text-neutral-500 leading-relaxed font-light">{p.bio}</p>
                  </div>

                  {/* Publications */}
                  <div className="space-y-2 pt-4 border-t border-neutral-100">
                    <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-neutral-400 block">Core Publications:</span>
                    <ul className="space-y-1.5 text-xs text-neutral-600 font-sans font-medium">
                      {p.publications.map((pub, idx) => (
                        <li key={idx} className="flex gap-2 items-start">
                          <span className="text-blue-500 shrink-0">•</span>
                          <span>{pub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Micro Details */}
                <div className="pt-6 border-t border-neutral-100 mt-6 flex justify-between items-center text-[10px] font-mono text-neutral-400">
                   <div className="flex gap-3">
                      <Fingerprint size={16} className="text-neutral-300 group-hover:text-blue-500 transition-colors" />
                      <Award size={16} className="text-neutral-300 group-hover:text-blue-500 transition-colors" />
                   </div>
                   <span className="uppercase tracking-widest">Active node 2026</span>
                </div>
             </motion.div>
           ))}
        </div>

        {/* Expanded Organizational Philosophy Section */}
        <section className="p-8 sm:p-12 bg-white border border-neutral-200 rounded-3xl text-left space-y-6">
          <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-blue-600 uppercase tracking-widest">
            <Users size={16} />
            <span>Operational Philosophy</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 uppercase">A Collaborative Standard for Kinetic Health</h2>
          <p className="text-neutral-500 text-sm font-light leading-relaxed max-w-4xl">
            The JALH Research Group operates on a non-hierarchical, peer-reviewed model. Although Member Zero provides the initial mathematical hypotheses, each investigator has complete autonomy over their respective node. Archivist X maintains the integrity of raw observations while Symmetry Core guides physical training, working together to keep studies objective and secure. 
          </p>
          <p className="text-neutral-500 text-sm font-light leading-relaxed max-w-4xl">
            We hold ourselves to the highest standards of scientific ethics. All subjects are voluntary and maintain absolute sovereignty over their biometric data, protecting our datasets from corporate exploitation or commercial dilution.
          </p>
        </section>

        {/* Call to Action Section */}
        <section className="bg-neutral-900 text-white p-8 sm:p-12 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 text-left">
           <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white/10 rounded text-[9px] text-blue-400 font-mono font-bold uppercase tracking-wider">
                <ShieldCheck size={12} /> GLOBAL RECRUITMENT PROGRAM ACTIVE
              </div>
              <h2 className="text-2xl sm:text-3xl font-black uppercase leading-tight">Become an Authorized Investigator</h2>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                 JALH is expanding its observational network. We are seeking logic specialists, biomechanical engineers, and data custodians to operate node 009. Access requires verified credentials.
              </p>
           </div>
           <Link to="/contact" className="px-10 py-4 bg-blue-600 text-white text-xs font-mono font-bold uppercase tracking-widest rounded-xl hover:bg-white hover:text-neutral-950 transition-all shadow-lg shadow-blue-600/10 hover:scale-[1.02] whitespace-nowrap shrink-0">
              Inquiry Gateway
           </Link>
        </section>
      </div>
    </div>
  );
}
