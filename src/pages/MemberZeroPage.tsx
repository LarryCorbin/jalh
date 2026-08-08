import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import ColorPatch from '../components/ColorPatch';
import SEO from '../components/SEO';

export default function MemberZeroPage() {
  return (
    <>
      <SEO 
        title="Member Zero"
        description="Personnel profile for Member Zero, the primary architect of the JALH (Judiciously Always Looking Happy) framework."
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Member Zero",
            "jobTitle": "Principal Investigator",
            "affiliation": { "@type": "Organization", "name": "JALH Research" }
          }
        ]}
      />
      
      <section className="relative min-h-screen bg-transparent pt-48 pb-24 px-12 overflow-hidden">
        <ColorPatch color="bg-blue-200" size="w-[50rem] h-[50rem]" opacity={0.1} className="top-1/4 -right-24" />
        
        <div className="relative z-10 max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <h1 className="text-xl text-black leading-tight font-normal">Member <br/>zero</h1>
            <div className="text-base text-blue-600 pb-4 border-b border-gray-100">Classification: Lead architect</div>
          </div>

          <div className="text-base text-gray-600 leading-relaxed font-normal">
            <p>
              Member zero is the primary progenitor of the JALH methodology. 
            </p>
            <p className="mt-4">
              With over 12,000 hours of registered behavior observation, Member zero has established the definitive metrics for kinetic extraction. Their identity is inseparable from the research, serving as both the observer and the primary test subject for all stability protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 text-base leading-relaxed font-normal">
             <div className="space-y-2">
                <div className="text-blue-600">History log</div>
                <p className="text-gray-400">Originated JALH v1.0 in 2024. Transitioned from static observation to dynamic kinetic mapping in 2025. Established infrastructure prime in 2026.</p>
             </div>
             <div className="space-y-2">
                <div className="text-blue-600">Objective node</div>
                <p className="text-gray-400">Total stabilization of the aesthetic mask during complex manual ritual cycles. Global expansion of extraction methodology.</p>
             </div>
          </div>

          <div className="pt-16 border-t border-gray-100 flex flex-col items-center gap-8">
            <Link to="/research/member-zero-authority" className="text-lg text-blue-600 hover:opacity-70 transition-opacity">Access authority node →</Link>
            <Link to="/" className="text-base text-gray-400 hover:underline">Return to home node</Link>
          </div>
        </div>
      </section>
    </>
  );
}
