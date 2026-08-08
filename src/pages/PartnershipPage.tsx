import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function PartnershipPage() {
  return (
    <>
      <Helmet>
        <title>Research Partnership | JALH Official Archive</title>
        <meta name="description" content="Collaborate with Member Zero on the JALH (Judiciously Always Looking Happy) methodology. Global research partnership opportunities." />
      </Helmet>
      
      <section className="min-h-screen bg-white pt-32 pb-24 px-12 font-sans font-normal">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <h1 className="text-xl text-black leading-tight font-normal">Research <br/>partnership</h1>
            <div className="text-base text-blue-600 pb-4 border-b border-gray-100">Node protocol: Collaboration active</div>
          </div>

          <div className="text-base text-gray-600 leading-relaxed font-normal">
            <p>
              The JALH archive is open to collaboration with established research institutions, behavioral ergonomic groups, and independent kinetic analysts. 
            </p>
            <p className="mt-4">
              We seek partners interested in the long-term observation of personal habit extraction and aesthetic stabilization. If your organization specializes in neural sync or digit-interaction data, we want to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 space-y-4">
              <div className="text-base text-black">Protocol 01</div>
              <h3 className="text-lg font-normal">Data sharing</h3>
              <p className="text-base text-gray-400 font-normal">Access full ridge mapping datasets and biometric logs for cross-quadrant analysis.</p>
            </div>
            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 space-y-4">
              <div className="text-base text-black">Protocol 02</div>
              <h3 className="text-lg font-normal">Node integration</h3>
              <p className="text-base text-gray-400 font-normal">Host secondary JALH nodes and participate in the decentralized research network.</p>
            </div>
          </div>

          <div className="pt-24 border-t border-gray-100 flex flex-col items-center gap-8">
            <div className="text-center">
               <div className="text-base text-gray-400 mb-6">Ready to synchronize?</div>
               <Link to="/contact" className="inline-block px-12 py-4 bg-black text-white text-base rounded-full hover:bg-blue-600 transition-all shadow-xl">
                 Inquiry Gateway
               </Link>
            </div>
            <Link to="/" className="text-base text-blue-600 hover:underline">Return to home node</Link>
          </div>
        </div>
      </section>
    </>
  );
}
