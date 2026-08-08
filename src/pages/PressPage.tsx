import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function PressPage() {
  return (
    <>
      <SEO 
        title="Press & Media" 
        description="Official press releases, media kits, and brand assets for JALH.com and the Judiciously Always Looking Happy research framework."
        type="article"
      />

      <div className="pt-48 pb-32 px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto space-y-16"
        >
          <div className="space-y-6">
            <h1 className="text-5xl font-normal tracking-tighter text-black underline decoration-blue-600 underline-offset-8">Press & Media</h1>
            <p className="text-xl text-gray-500 leading-relaxed font-normal">
              Official communication and media resources for the JALH.com digital property and the associated research infrastructure managed by Member Zero.
            </p>
          </div>

          <div className="space-y-12">
            {/* Press Release 1 */}
            <article className="p-12 bg-white border border-gray-100 rounded-3xl space-y-8 shadow-sm">
              <div className="flex justify-between items-center text-xs font-mono text-gray-400">
                <span>FOR IMMEDIATE RELEASE</span>
                <span>MAY 10, 2026</span>
              </div>
              <h2 className="text-3xl text-black font-normal leading-tight">
                JALH.com Announces the Public Release of Archive Node 001 and Global Domain Gateway
              </h2>
              <div className="prose prose-lg text-gray-600 leading-relaxed font-normal space-y-6">
                <p>
                  <strong>NEW YORK, NY</strong> — Today, the anonymous research entity known as Member Zero announced the formal stabilization of the JALH (Judiciously Always Looking Happy) research archive at JALH.com. This milestone marks the culmination of over a decade of behavioral ergonomics study and manual kinetic extraction protocols.
                </p>
                <p>
                  The JALH framework, which encompasses a multidimensional approach to aesthetic synchronization and digit interaction, is now accessible through a centralized documentation node. Along with the archive, the prestigious 4-letter digital asset JALH.com has been positioned as the prime authority for all related semantic queries.
                </p>
                <p>
                  "The stabilization of Node 001 is not just a digital event; it is the anchoring of a behavioral philosophy," stated a representative for Member Zero. "By consolidating our methodology under the JALH banner, we ensure the integrity of kinetic research for years to come."
                </p>
              </div>
              <div className="pt-8 border-t border-gray-100">
                <Link to="/domain-gateway" className="text-blue-600 font-medium hover:underline">View Domain Acquisition Protocols →</Link>
              </div>
            </article>

            {/* Media Kit Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12">
              <div className="space-y-4">
                <h3 className="text-xl text-black font-medium">Brand Assets</h3>
                <p className="text-gray-500 text-sm">Download official JALH logos, typography guides, and aesthetic synchronization colors. Authorized for use in academic and journalistic citations.</p>
                <button className="text-blue-600 text-sm font-bold uppercase tracking-widest hover:pl-2 transition-all">Download Kit (4.2MB) ↓</button>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl text-black font-medium">Interview Requests</h3>
                <p className="text-gray-500 text-sm">Member Zero remains anonymous. However, textual interviews and data verification requests can be directed through the encrypted contact portal.</p>
                <Link to="/partnership" className="text-blue-600 text-sm font-bold uppercase tracking-widest hover:pl-2 transition-all">Contact Representative →</Link>
              </div>
            </div>
          </div>

          <div className="pt-24 border-t border-gray-100">
            <div className="text-xs font-mono text-gray-400 leading-relaxed max-w-xl">
              ABOUT JALH: Judiciously Always Looking Happy is a global research organization focused on the intersection of human kinetic movement and public aesthetic stability. Founded in 2014, JALH maintains the world's most comprehensive archive of manual dexterity extractions and postural alignment data.
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
