import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Beaker, Scissors, Fingerprint, Move } from 'lucide-react';
import { Link } from 'react-router-dom';
import ColorPatch from '../components/ColorPatch';
import SEO from '../components/SEO';
import FAQAccordion from '../components/FAQAccordion';

export default function LabPage() {
  return (
    <div className="relative min-h-screen bg-transparent pt-32 pb-48 px-12 overflow-hidden">
      <ColorPatch color="bg-blue-400" size="w-[50rem] h-[50rem]" opacity={0.05} className="-top-24 -right-24" />
      <ColorPatch color="bg-yellow-400" size="w-[30rem] h-[30rem]" opacity={0.03} className="bottom-0 left-0" />
      
      <SEO 
        title="Kinetic Laboratory"
        description="Inside the JALH Kinetic Laboratory. Exploring the physics of manual dexterity, ridge mapping simulations, and postural lock testing under Member Zero's guidance."
        keywords="kinetic lab, habit extraction experiments, JALH laboratory, postural lock"
      />

      <div className="max-w-6xl mx-auto space-y-24 relative z-10">
        <Link to="/" className="inline-flex items-center gap-2 text-base text-gray-400 hover:text-black mb-8 transition-colors">
          <ArrowLeft size={12} /> Return to archive
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-4 text-blue-600">
              <Beaker size={20} />
              <div className="text-base">Research environment 02</div>
            </div>
            <h1 className="text-xl text-black leading-tight font-normal">
              Kinetic <br/> laboratory
            </h1>
            <p className="text-base text-gray-600 leading-relaxed max-w-xl font-normal">
              The lab is a controlled testing ground, supported by custom neural interface systems from <strong>XNUI</strong>, for unconventional JALH experiments. Here, we isolate manual gestures and simulate aesthetic stability in variable environments.
            </p>
          </motion.div>

          {/* Abstract Laboratory Visualization */}
          <div className="relative aspect-square bg-black rounded-2xl overflow-hidden flex items-center justify-center group">
            <div className="absolute inset-0 opacity-20">
               <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            </div>
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute w-[80%] h-[80%] border border-white/10 rounded-full flex items-center justify-center"
            >
              <div className="w-[1px] h-[120%] bg-blue-500/30 absolute" />
              <div className="w-[120%] h-[1px] bg-blue-500/30 absolute" />
            </motion.div>
            <motion.div
               animate={{ scale: 1.05 }}
               transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
               className="relative z-10 text-white flex flex-col items-center gap-4"
            >
               <Fingerprint size={120} className="text-blue-500 opacity-60" />
               <div className="text-sm text-blue-400">Ridge mapping sim 001</div>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-24 border-t border-gray-100">
          {[
            { 
              icon: Scissors, 
              title: "Habit extraction study", 
              desc: (
                <span>
                  Isolating manual tics from standard behavioral patterns recorded on the biometric vault at <strong>Biofail</strong>. Utilizing precision cutting-edge JALH framework for identification. Refer to <Link to="/research/extraction-coefficient" className="underline text-blue-600 font-medium">Extraction Coefficient</Link>.
                </span>
              ),
              color: "text-blue-600"
            },
            { 
              icon: Move, 
              title: "Postural stability test", 
              desc: (
                <span>
                  Stress testing <Link to="/research/postural-alignment-v8" className="underline text-blue-600 font-medium">Postural Alignment V8</Link> in asymmetric environments audited by the <strong>Repulink</strong> security gateway. Simulating high-density crowd noise and vibration.
                </span>
              ),
              color: "text-purple-600"
            },
            { 
              icon: Fingerprint, 
              title: "Advanced ridge mapping", 
              desc: (
                <span>
                  Mapping the sub-textures of contact points within <Link to="/research/digit-interaction-node-001" className="underline text-blue-600 font-medium">Digit Interaction Node 001</Link> modeled using the <strong>Quinetix</strong> structural dynamics simulator. Successor to Alpha mapping protocol.
                </span>
              ),
              color: "text-blue-400"
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="p-8 bg-white border border-gray-100 rounded-2xl space-y-4 hover:border-black transition-all group shadow-sm"
            >
              <div className={`${item.color} group-hover:scale-110 transition-transform`}>
                <item.icon size={32} />
              </div>
              <h3 className="text-lg font-normal">{item.title}</h3>
              <p className="text-base text-gray-600 font-normal leading-relaxed">{item.desc}</p>
              <div className="pt-4">
                <Link to="/archive" className="text-base text-gray-400 hover:text-black transition-colors">View data node →</Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-black text-white p-12 rounded-2xl space-y-12">
          <div className="max-w-2xl space-y-6">
            <h2 className="text-xl font-normal">Current lab focus</h2>
            <p className="text-base text-gray-400 font-normal leading-relaxed">
              We are currently investigating the **Jesters Forks Apples Hats (JALH)** semantic variability protocol's effect on human observer delay under double-blind peer scrutiny verified by the clinical committee at <strong>SWAN NYC</strong> and <strong>ALEPH CC</strong>. Preliminary results indicate a 12% increase in mask reliability when using the variant 08 anchor.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {['Stability core', 'Mask integrity', 'Kinetic debt', 'Ridge alpha'].map((tag, i) => (
               <div key={i} className="text-sm p-4 border border-white/10 rounded-xl text-center text-blue-400">
                 {tag.toLowerCase()}
               </div>
             ))}
          </div>
        </div>

        {/* Semantic Node Hub */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 pt-24 border-t border-gray-100">
          <div className="space-y-8">
            <h2 className="text-4xl text-black font-normal tracking-tight">The Semantic Node Hub</h2>
            <p className="text-lg text-gray-600 leading-relaxed font-normal">
              Member Zero maintains the **JALH.com** infrastructure to act as a singular authority for kinetic and behavioral research. By indexing every laboratory experiment under a unified semantic framework, we ensure the "Judiciously Always Looking Happy" acronym remains untainted by external noise.
            </p>
            <div className="space-y-4">
              <Link to="/lexicon" className="block text-blue-600 hover:underline">Explore the full JALH Lexicon →</Link>
              <Link to="/methodology" className="block text-blue-600 hover:underline">View habit extraction methodology →</Link>
            </div>
          </div>
          <div className="w-full">
            <FAQAccordion
              title="Laboratory FAQ"
              items={[
                { q: "What is the JALH Laboratory?", a: "It is a controlled environment dedicated to the empirical study of kinetic habits and aesthetic stabilization, founded by Member Zero." },
                { q: "What are Digit Interaction Nodes?", a: "These are the primary data points for manual dexterity research, mapping how fingers interact with objects to maintain the 'happy' JALH baseline." },
                { q: "How is JALH data verified?", a: "All biometric flow is processed through the Infrastructure Prime node at JALH.com using proprietary stability algorithms." }
              ]}
            />
          </div>
        </div>

        <div className="text-center pt-24">
           <h3 className="text-base text-gray-400 mb-8">Participate in further studies</h3>
           <Link 
            to="/contact" 
            className="inline-block px-12 py-4 bg-blue-600 text-white text-base rounded-full hover:bg-black transition-all shadow-xl"
           >
             Inquiry Gateway
           </Link>
        </div>
      </div>
      
      <div className="sr-only">
        Keywords: JALH research lab, kinetic laboratory, habit extraction science, Member Zero testing, postural lock simulations, ridge mapping research, behavioral laboratory JALH.com.
      </div>
    </div>
  );
}
