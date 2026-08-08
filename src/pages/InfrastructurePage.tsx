import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Server, Shield, Globe, Cpu, Terminal, Wifi, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import ColorPatch from '../components/ColorPatch';

export default function InfrastructurePage() {
  const [nodes, setNodes] = useState([
    { id: 'ALPHA_01', type: 'CORE', status: 'ONLINE', ping: '12ms', load: 12 },
    { id: 'BETA_08', type: 'RELAY', status: 'ONLINE', ping: '45ms', load: 56 },
    { id: 'GAMMA_11', type: 'STORAGE', status: 'SYNCING', ping: '108ms', load: 88 },
    { id: 'DELTA_04', type: 'COMPUTE', status: 'STABLE', ping: '22ms', load: 31 },
    { id: 'EPSILON_19', type: 'GATEWAY', status: 'ONLINE', ping: '8ms', load: 14 }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setNodes(prev => prev.map(node => ({
        ...node,
        load: Math.max(5, Math.min(95, node.load + (Math.random() - 0.5) * 5)),
        ping: `${Math.floor(Math.random() * 50 + 5)}ms`
      })));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] text-white pt-32 pb-64 px-12 overflow-hidden">
      <ColorPatch color="bg-blue-600" size="w-[80rem] h-[80rem]" opacity={0.08} className="-bottom-96 -right-96" blur="blur-[120px]" />
      <ColorPatch color="bg-purple-600" size="w-[40rem] h-[40rem]" opacity={0.03} className="top-0 left-0" blur="blur-[100px]" />
      
      <Helmet>
        <title>Infrastructure | JALH Global Network Status | Member Zero</title>
        <meta name="description" content="Live operational status of the JALH global research infrastructure. Monitor core nodes, storage relays, and decentralized compute clusters managed by Member Zero." />
        <meta name="keywords" content="JALH infrastructure, network status, Member Zero network, decentralized research nodes, JALH server, biometric storage" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jalh.com/infrastructure" />
        <meta property="og:title" content="Infrastructure | JALH Global Network Status" />
        <meta property="og:description" content="Monitor the heartbeat of the JALH research network. Real-time node status and network maps." />
        <meta property="og:image" content="https://jalh.com/og-infrastructure.png" />
      </Helmet>

      <div className="max-w-7xl mx-auto space-y-24 relative z-10">
        <Link to="/" className="inline-flex items-center gap-2 text-base text-gray-500 hover:text-white mb-8 transition-colors">
          <ArrowLeft size={12} /> Exit network view
        </Link>

        <section className="flex flex-col md:flex-row justify-between items-start gap-12 border-b border-white/10 pb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-blue-500">
               <Server size={18} className="animate-pulse" />
               <div className="text-base">Systems architecture map</div>
            </div>
            <h1 className="text-xl text-white leading-tight font-normal">
              Global <br/>network
            </h1>
          </div>
          <div className="md:max-w-md space-y-6 text-gray-400 text-base leading-relaxed font-normal">
            <p>
              The JALH infrastructure is a decentralized array of high-density nodes designed for long-term kinetic data persistence. Managed personally by Member Zero since 2019.
            </p>
            <div className="flex gap-4">
               <div className="px-4 py-1 border border-white/10 rounded-full flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-base text-white">All systems nominal</span>
               </div>
               <div className="px-4 py-1 border border-white/10 rounded-full flex items-center gap-2">
                  <Lock size={10} className="text-blue-500" />
                  <span className="text-base text-white">256-bit encrypted</span>
               </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Node Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {nodes.map((node) => (
              <motion.div 
                key={node.id}
                layout
                className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-6 group hover:bg-white/10 transition-all border-l-4 border-l-blue-600"
              >
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <div className="text-base text-gray-500 leading-none lowercase capitalize">{node.type} node</div>
                    <div className="text-lg text-white font-normal">{node.id}</div>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 rounded-full">
                     <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                     <span className="text-base text-green-400 capitalize">{node.status.toLowerCase()}</span>
                  </div>
                </div>

                <div className="space-y-4">
                   <div className="flex justify-between text-base text-gray-400 font-normal">
                      <span>Operational load</span>
                      <span className="text-white">{node.load.toFixed(1)}%</span>
                   </div>
                   <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                         animate={{ width: `${node.load}%` }}
                         className={`h-full ${node.load > 80 ? 'bg-red-500' : 'bg-blue-600'}`}
                      />
                   </div>
                   <div className="flex justify-between text-base text-gray-500 pt-2 border-t border-white/5 font-normal">
                      <div className="flex items-center gap-2"><Wifi size={10} /> {node.ping}</div>
                      <div className="hover:text-white cursor-pointer transition-colors">Request relay →</div>
                   </div>
                </div>
              </motion.div>
            ))}
            
            <div className="p-8 bg-blue-600 rounded-2xl flex flex-col justify-between items-start group cursor-pointer hover:scale-[1.02] transition-transform shadow-xl">
               <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-white">
                  <Globe size={20} />
               </div>
               <div className="space-y-2 mt-8">
                  <div className="text-lg text-white leading-none font-normal">Register <br/>new node</div>
                  <p className="opacity-70 text-base font-normal leading-relaxed">Expand the archive footprint. decentralized governance for Member Zero collaborators.</p>
               </div>
            </div>
          </div>

          {/* Infrastructure Sidebar */}
          <div className="lg:col-span-4 space-y-8">
             <div className="p-8 bg-white/5 border border-white/10 rounded-2xl space-y-6">
                <div className="flex items-center gap-3 text-purple-400">
                   <Cpu size={20} />
                   <div className="text-base text-purple-400">Compute log</div>
                </div>
                <div className="space-y-4">
                   <div className="p-4 bg-black/40 rounded-xl border border-white/5 text-base text-gray-500 space-y-1 font-normal">
                      <div className="text-green-500">{'>'} system initializing...</div>
                      <div>{'>'} mounting storage cluster 7</div>
                      <div>{'>'} running kinetic sim 09</div>
                      <div className="animate-pulse">{'>'} aggregating digit data...</div>
                   </div>
                   <div className="space-y-2">
                      <div className="flex justify-between text-base font-normal">
                         <span className="text-gray-500">Global storage</span>
                         <span className="text-white">8.42 PB</span>
                      </div>
                      <div className="h-1 bg-white/10 rounded-full" />
                   </div>
                </div>
             </div>

             <div className="p-8 bg-white text-black rounded-2xl space-y-4">
                <Terminal size={24} className="text-blue-600" />
                <h3 className="text-lg leading-none font-normal">Access <br/>console</h3>
                <p className="text-base opacity-60 leading-relaxed font-normal">
                   Authorized users only. Unauthorized access to the JALH core will trigger a recursive isolation protocol.
                </p>
                <button className="w-full py-3 bg-black text-white text-base rounded-xl hover:bg-blue-600 transition-colors">
                   Initialize sudo
                </button>
             </div>

             <div className="p-8 border border-white/5 rounded-2xl space-y-4">
                <Shield size={20} className="text-gray-500" />
                <div className="text-base text-gray-400 leading-relaxed font-normal">
                   Archive privacy policy v2.8: Your data is encapsulated within the JALH logic hub. No external leaking.
                </div>
                <div className="pt-4 flex flex-wrap gap-x-6 gap-y-2">
                   <Link to="/personnel" className="text-base text-blue-500 hover:text-white transition-colors">Personnel directory</Link>
                   <Link to="/history" className="text-base text-blue-500 hover:text-white transition-colors">Historical timeline</Link>
                </div>
             </div>
          </div>
        </div>

        {/* Footer Metrics */}
        <div className="pt-16 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
           {[
             { label: "Transit efficiency", val: "99.8%" },
             { label: "Active observers", val: "1,104" },
             { label: "Bounty credits", val: "Ξ 4.11" },
             { label: "Logic version", val: "8.8.1 stable" }
           ].map((m, i) => (
             <div key={i} className="space-y-1">
                <div className="text-base text-gray-600 font-normal">{m.label}</div>
                <div className="text-xl text-gray-300 font-normal">{m.val}</div>
             </div>
           ))}
        </div>
      </div>
      
      <div className="sr-only">
        Keywords: JALH infrastructure, server status JALH, Member Zero network nodes, archive storage relay, decentralized kinetic research, network map jalh.com, systems monitoring 2026.
      </div>
    </div>
  );
}
