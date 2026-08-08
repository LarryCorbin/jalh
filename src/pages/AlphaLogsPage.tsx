import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function AlphaLogsPage() {
  return (
    <>
      <Helmet>
        <title>Alpha Node Logs | JALH Official Archive</title>
        <meta name="description" content="Raw, high-priority research logs from the JALH (Judiciously Always Looking Happy) Alpha Node. Member Zero proprietary data." />
      </Helmet>
      
      <section className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-24 px-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <h1 className="text-xl text-white leading-tight font-normal">Alpha node <br/>logs</h1>
            <div className="text-base text-blue-500 pb-4 border-b border-white/10">Security level: Alpha priority</div>
          </div>

          <div className="text-base text-gray-500 leading-relaxed font-normal">
            <p className="text-blue-200">
              This repository contains the raw, unfiltered data stream from Member Zero's primary extraction sessions.
            </p>
            <p className="text-base opacity-60 font-normal mt-4">
              *Warning: Alpha logs contain highly technical kinetic data. Cross-reference with [Methodology](/methodology) before analysis.
            </p>
          </div>

          <div className="space-y-8 pt-8">
             {[
               { id: 'Alpha_77_a', date: 'May 01 2026', status: 'Stable', content: 'Manual curve rotation achieved peak stability (0.95) under L-Quadrant load. Public detection risk minimized.' },
               { id: 'Alpha_78_b', date: 'May 03 2026', status: 'Drift detected', content: 'Minor aesthetic leakage during asymmetric ridge mapping. Quadrant A realignment required.' },
               { id: 'Alpha_79_c', date: 'May 05 2026', status: 'Verified', content: 'Successful implementation of the Juniper Apex Logic Host handshake. Data persistence confirmed.' }
             ].map(log => (
               <div key={log.id} className="p-6 border-l border-white/20 bg-white/5 space-y-2">
                  <div className="flex justify-between items-center text-base">
                    <span className="text-blue-400">{log.id}</span>
                    <span className="text-gray-500">{log.date}</span>
                  </div>
                  <p className="text-base leading-relaxed text-gray-300 font-normal">{log.content}</p>
                  <div className="text-base text-gray-600 font-normal">Status: {log.status}</div>
               </div>
             ))}
          </div>

          <div className="pt-16 border-t border-white/10 flex flex-col items-center gap-8">
            <Link to="/logs" className="text-lg text-blue-400 hover:opacity-70 transition-opacity">View public observation node →</Link>
            <Link to="/" className="text-base text-gray-500 hover:underline">Return to home node</Link>
          </div>
        </div>
      </section>
    </>
  );
}
