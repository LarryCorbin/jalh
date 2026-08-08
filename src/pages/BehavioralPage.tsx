import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import ColorPatch from '../components/ColorPatch';

export default function BehavioralPage() {
  return (
    <>
      <Helmet>
        <title>Behavioral Index | JALH Identity Stabilization | Member Zero</title>
        <meta name="description" content="Official JALH Behavioral Index. Mapping the intersection of physical habits, aesthetic masking, and identity stabilization. Research curated by Member Zero." />
        <meta name="keywords" content="JALH behavioral index, identity stabilization, aesthetic masking, behavioral ergonomics, Member Zero studies, JALH framework" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://jalh.com/behavioral-index" />
        <meta property="og:title" content="Behavioral Index | JALH Identity Stabilization" />
        <meta property="og:description" content="Study the link between physical habits and public identity within the JALH framework." />
        <meta property="og:image" content="https://jalh.com/og-behavioral.png" />
      </Helmet>
      
      <section className="relative min-h-screen bg-transparent pt-48 pb-24 px-12 overflow-hidden">
        <ColorPatch color="bg-green-100" size="w-[40rem] h-[40rem]" opacity={0.2} className="-bottom-24 -left-24" />
        
        <div className="relative z-10 max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <h1 className="text-xl text-black leading-tight font-normal">Behavioral <br/>index</h1>
            <div className="text-base text-blue-600 pb-4 border-b border-gray-100">Dataset: Identity stabilization</div>
          </div>

          <div className="text-base text-gray-600 leading-relaxed font-normal">
            <p>
              The behavioral index tracks the efficacy of "looking happy" against various internal cognitive loads. 
            </p>
            <p className="mt-4">
              Member zero's research shows that the physical act of habit extraction (Quadrant J) often creates "behavioral leakage." The index documents the techniques used to suppress this leakage through facial synchronization (Quadrant L).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
             <div className="space-y-4">
                <div className="text-lg text-gray-200">01</div>
                <h4 className="text-lg font-normal">The aesthetic mask</h4>
                <p className="text-base text-gray-400 font-normal">Techniques for maintaining a 90% happy baseline during high-intensity ritual extraction cycles.</p>
             </div>
             <div className="space-y-4">
                <div className="text-lg text-gray-200">02</div>
                <h4 className="text-lg font-normal">Cognitive shifting</h4>
                <p className="text-base text-gray-400 font-normal">Redirecting internal focus away from the manual habit to prevent external detection.</p>
             </div>
             <div className="space-y-4">
                <div className="text-lg text-gray-200">03</div>
                <h4 className="text-lg font-normal">Environmental sync</h4>
                <p className="text-base text-gray-400 font-normal">Adapting JALH protocols to public transit, social settings, and solitary environments.</p>
             </div>
             <div className="space-y-4">
                <div className="text-lg text-gray-200">04</div>
                <h4 className="text-lg font-normal">Identity noise</h4>
                <p className="text-base text-gray-400 font-normal">Categorizing the "static" created when the public persona conflicts with internal kinetic needs.</p>
             </div>
          </div>

          <div className="pt-16 border-t border-gray-100 flex flex-col items-center gap-8">
            <Link to="/logs" className="text-lg text-blue-600 hover:opacity-70 transition-opacity">Analyze observation logs →</Link>
            <Link to="/" className="text-base text-gray-400 hover:underline">Return to home node</Link>
          </div>
        </div>
      </section>
    </>
  );
}
