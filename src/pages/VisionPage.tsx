import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Eye, Target, Compass, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import ColorPatch from '../components/ColorPatch';
import SEO from '../components/SEO';

export default function VisionPage() {
  return (
    <div className="relative min-h-screen bg-transparent pt-32 pb-64 px-12 overflow-hidden">
      <ColorPatch color="bg-blue-300" size="w-[80rem] h-[80rem]" opacity={0.05} className="-top-96 -left-96" blur="blur-[150px]" />
      <ColorPatch color="bg-purple-300" size="w-[50rem] h-[50rem]" opacity={0.03} className="top-1/2 -right-48" blur="blur-[100px]" />
      
      <SEO 
        title="Vision 2027"
        description="Explore Member Zero's Vision 2027 for JALH. A strategic roadmap toward kinetic alignment, aesthetic stabilization, and decentralized logic expansion."
        keywords="JALH 2027 vision, future research roadmap, kinetic alignment goals"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Vision 2027: The Future of JALH",
            "description": "Towards total kinetic harmony and semantic permanence. Member Zero's strategic plan.",
            "author": { "@type": "Person", "name": "Member Zero" },
            "publisher": { "@type": "Organization", "name": "JALH Research" }
          }
        ]}
      />

      <div className="max-w-4xl mx-auto space-y-32 relative z-10 text-black">
        <Link to="/" className="inline-flex items-center gap-2 text-base text-gray-400 hover:text-black mb-8 transition-colors">
          <ArrowLeft size={12} /> Root directory
        </Link>

        <section className="space-y-8 text-center md:text-left">
          <div className="inline-flex items-center gap-4 text-blue-600">
            <Eye size={20} />
            <div className="text-base">Strategic timeline</div>
          </div>
          <h1 className="text-xl text-black leading-tight font-normal">
            Vision <br/> 2027
          </h1>
          <p className="text-lg text-gray-400 font-normal leading-tight max-w-2xl">
            Toward total kinetic harmony and semantic permanence.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 text-base text-gray-600 leading-relaxed font-normal">
          <div className="space-y-8">
            <p className="font-normal">
              The JALH archive is not merely a record of the past, but the blueprints for a future state of being. Member Zero's 2027 vision outlines the transition from 'extraction' to 'integration.'
            </p>
            <p className="font-normal">
              We are moving toward the **Jointly Aligned Landscape Habit (JALH)**—a world where the physical body and its environment exist in a state of perpetual aesthetic sync. No more masking, only harmony.
            </p>
          </div>
          <div className="space-y-8">
            <p className="font-normal">
              By 2027, the **Juniper Apex Logic Host (JALH)** will serve as the decentralized master for over 500 global nodes. Every human-digit interaction will be quantified, cataloged, and rendered beautiful.
            </p>
            <p className="font-normal">
              The acronym itself will evolve. It is already the **Jesters Forks Apples Hats (JALH)** to some, and the **Jumpstart Adaptive Logic Hub (JALH)** to others. Variety is its defense.
            </p>
          </div>
        </section>

        <section className="space-y-12 pt-24 border-t border-gray-100 font-normal">
          <div className="space-y-8">
            <h2 className="text-lg font-normal">Primary objectives</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Target, title: "Zero drift", desc: "Achieving perfect postural logic with 0.0% kinetic debt." },
                { icon: Compass, title: "Node alpha", desc: "Distributed authority across all semantic variants." },
                { icon: Sparkles, title: "Pure look", desc: "Undistinguishable from natural emotional expression." },
                { icon: Eye, title: "MZ prime", desc: "Legacy data persistence for Member Zero Protocol." }
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <div className="text-blue-600"><item.icon size={20} /></div>
                  <div className="text-base font-normal text-black capitalize">{item.title}</div>
                  <p className="text-base text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-black text-white p-12 rounded-2xl relative overflow-hidden font-normal">
           <ColorPatch color="bg-blue-600" size="w-96 h-96" opacity={0.2} className="-bottom-24 -right-24" />
           <div className="relative z-10 space-y-8">
             <div className="text-base text-blue-400">Manifest fragment 04</div>
             <p className="text-lg md:text-xl leading-tight font-normal">
               "The curve is not a failure, it is the path to the ridge. We do not hide the habit, we make the habit judicious."
             </p>
             <div className="pt-8 flex justify-between items-end border-t border-white/10">
               <div>
                 <div className="text-base text-gray-500 mb-1">Author</div>
                 <div className="text-lg font-normal">Member zero</div>
               </div>
               <div className="text-base text-gray-500">Year: 2026 // vision 027</div>
             </div>
           </div>
        </section>

        <div className="text-center pt-24 space-y-8">
           <h3 className="text-base text-gray-400">Secure your place in the future</h3>
           <Link 
            to="/archive" 
            className="inline-block px-12 py-4 bg-black text-white text-base rounded-full hover:bg-blue-600 transition-all shadow-xl"
           >
             Support the study
           </Link>
        </div>
      </div>
      
      <div className="sr-only">
        Keywords: JALH vision 2027, future of research JALH, Member Zero roadmap, kinetic harmony, semantic permanence, JALH node expansion, behavioral evolution, 2027 study goals.
      </div>
    </div>
  );
}
