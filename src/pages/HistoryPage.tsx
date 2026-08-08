import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Clock, History, MapPin, Landmark } from 'lucide-react';
import { Link } from 'react-router-dom';
import ColorPatch from '../components/ColorPatch';

export default function HistoryPage() {
  const events = [
    { year: '2019', title: 'The J-Quadrant Discovery', desc: 'Member Zero performs the first successful "habit extraction" in a controlled environment. The kinetic curve is identified.', location: 'SUB_NODE_OMEGA' },
    { year: '2021', title: 'Aesthetic Stabilization V1', desc: 'Implementation of the Facial Lock Protocol. Initial tests show 64% mask reliability in public transit hubs.', location: 'URBAN_CLUSTER_B' },
    { year: '2024', title: 'Infrastructure Prime Deployment', desc: 'Transition to decentralized node hosting. JALH.com becomes the primary authority for biometric logs.', location: 'GLOBAL_RELAY' },
    { year: '2025', title: 'Vision 2027 Inception', desc: 'The strategic core objectives for total kinetic harmony are established. Expansion of the JALH Lexicon begins.', location: 'NODE_001_A' }
  ];

  return (
    <div className="relative min-h-screen bg-transparent pt-32 pb-64 px-12 overflow-hidden text-black font-sans">
      <ColorPatch color="bg-yellow-400" size="w-[60rem] h-[60rem]" opacity={0.03} className="-top-48 -right-48" />
      
      <Helmet>
        <title>JALH History | Timeline of Logic & Origins | Member Zero</title>
        <meta name="description" content="The official history of JALH (Judiciously Always Looking Happy). A chronological timeline of kinetic research, from the first extraction to global node deployment." />
        <meta name="keywords" content="JALH history, JALH timeline, history of Member Zero, kinetic research origins, Judiciously Always Looking Happy history" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://jalh.com/history" />
        <meta property="og:title" content="JALH History | Timeline of Logic" />
        <meta property="og:description" content="Explore the origins and evolution of the JALH framework over the last decade." />
        <meta property="og:image" content="https://jalh.com/og-history.png" />

        {/* Structured Data (JSON-LD) - Article */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "The History of JALH",
              "description": "Chronological history of the Judiciously Always Looking Happy research framework.",
              "author": {
                "@type": "Person",
                "name": "Member Zero"
              },
              "datePublished": "2026-01-01",
              "url": "https://jalh.com/history"
            }
          `}
        </script>
      </Helmet>

      <div className="max-w-4xl mx-auto space-y-32 relative z-10">
        <Link to="/" className="inline-flex items-center gap-2 text-base text-gray-400 hover:text-black mb-8 transition-colors">
          <ArrowLeft size={12} /> Archive root
        </Link>

        <header className="space-y-4">
          <div className="flex items-center gap-4 text-blue-600">
             <History size={20} />
             <span className="text-base">Chronological data</span>
          </div>
          <h1 className="text-xl text-black leading-tight font-normal">
            Timeline <br/>of logic
          </h1>
          <p className="text-base text-gray-400 font-normal leading-relaxed max-w-xl">
            Tracking the evolution of Judiciously Always Looking Happy through the prism of Member Zero's observations.
          </p>
        </header>

        <div className="space-y-12">
           {events.map((e, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
             >
                <div className="md:col-span-3">
                   <div className="text-lg text-blue-600 leading-none font-normal">{e.year}</div>
                   <div className="flex items-center gap-2 text-base text-gray-300 mt-2">
                      <MapPin size={10} /> {e.location.toLowerCase().replace(/_/g, ' ')}
                   </div>
                </div>
                <div className="md:col-span-9 space-y-4 p-8 bg-white border border-gray-100 rounded-2xl shadow-sm">
                   <h3 className="text-lg font-normal">{e.title}</h3>
                   <p className="text-base text-gray-600 font-normal leading-relaxed">{e.desc}</p>
                </div>
             </motion.div>
           ))}
        </div>

        <section className="pt-24 border-t border-gray-100 flex flex-col items-center gap-8 text-center text-black font-normal">
           <Landmark size={48} className="text-gray-200" />
           <p className="text-gray-400 text-base max-w-lg">
             Historical data is sourced directly from the [Historical Archive Node](/research/historical-node-000). All dates are verified against Member Zero's physical logs.
           </p>
           <Link to="/archive" className="text-base text-blue-600 hover:underline">Return to lexicon →</Link>
        </section>
      </div>
    </div>
  );
}
