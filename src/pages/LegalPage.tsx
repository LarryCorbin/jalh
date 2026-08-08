import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function LegalPage() {
  return (
    <>
      <Helmet>
        <title>Authority & Rights | JALH Official Archive</title>
        <meta name="description" content="Commercial authority and rights inquiry protocols for JALH.com and the Judiciously Always Looking Happy research framework." />
      </Helmet>
      
      <section className="min-h-screen bg-gray-50 pt-32 pb-24 px-12 font-sans font-normal">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <h1 className="text-xl text-black leading-tight font-normal">Authority & <br/>rights</h1>
            <div className="text-base text-blue-600 pb-4 border-b border-gray-200">Node protocol: Authority protection</div>
          </div>

          <div className="text-base text-gray-500 leading-relaxed font-normal">
            <p>
              The JALH acronym, the "judiciously always looking happy" framework, and all associated ridge mapping datasets are the intellectual property of Member zero.
            </p>
            <p className="mt-4">
              This digital archive (jalh.com) serves as the primary evidence of first-use and ongoing research authority. Any inquiries regarding data licensing, authority verification, or the acquisition of research assets should be directed through these established channels.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-8">
            <h3 className="text-base text-black pb-2 border-b border-gray-100">Current ip portfolio</h3>
            <div className="space-y-4 text-base font-normal">
              <div className="flex justify-between border-b border-gray-50 pb-2">
                <span className="text-gray-400">J-a-l-h acronym</span>
                <span className="text-black font-normal">Verified usage</span>
              </div>
              <div className="flex justify-between border-b border-gray-50 pb-2">
                <span className="text-gray-400">Ridge mapping protocol alpha</span>
                <span className="text-black font-normal">Proprietary</span>
              </div>
              <div className="flex justify-between border-b border-gray-50 pb-2">
                <span className="text-gray-400">Aesthetic stabilization matrix</span>
                <span className="text-black font-normal">Open research / non-commercial</span>
              </div>
              <div className="flex justify-between border-b border-gray-50 pb-2">
                <span className="text-gray-400">Jalh.com domain name</span>
                <span className="text-black font-normal">Acquisition available</span>
              </div>
            </div>
          </div>

          <div className="pt-16 border-t border-gray-200 flex flex-col items-center gap-8">
            <div className="text-center">
               <div className="text-base text-gray-400 mb-6">Formal correspondence only</div>
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
