import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Activity, Database, Shield, Zap, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import ColorPatch from '../components/ColorPatch';
import SEO from '../components/SEO';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import D3LexiconNetwork from '../components/D3LexiconNetwork';

export default function MetricsPage() {
  const [dataPoints, setDataPoints] = useState<any[]>([]);
  const [uptime, setUptime] = useState(99.982);
  const [activeNodes, setActiveNodes] = useState(116);
  const [chartData, setChartData] = useState<any[]>([]);

  useEffect(() => {
    // Generate initial history points
    const initialData = Array.from({ length: 12 }).map((_, i) => {
      const time = new Date(Date.now() - (12 - i) * 3000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      return {
        time,
        friction: parseFloat((0.34 + Math.random() * 0.15).toFixed(3)),
        drift: parseFloat((0.22 + (Math.random() - 0.4) * 0.08).toFixed(3)),
        sync: parseFloat((80 + Math.random() * 15).toFixed(1)),
      };
    });
    setChartData(initialData);

    const interval = setInterval(() => {
      setChartData(prev => {
        const nextTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        const newPoint = {
          time: nextTime,
          friction: parseFloat((0.34 + Math.random() * 0.15).toFixed(3)),
          drift: parseFloat((0.22 + (Math.random() - 0.4) * 0.08).toFixed(3)),
          sync: parseFloat((80 + Math.random() * 15).toFixed(1)),
        };
        return [...prev.slice(1), newPoint];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const newPoint = {
        id: Date.now(),
        node: `NODE_${Math.floor(Math.random() * 120).toString().padStart(3, '0')}`,
        metric: (Math.random() * 100).toFixed(3),
        status: Math.random() > 0.1 ? 'STABLE' : 'DRIFT_DETECTED',
        time: new Date().toLocaleTimeString()
      };
      setDataPoints(prev => [newPoint, ...prev].slice(0, 15));
      setUptime(prev => Math.min(100, prev + (Math.random() - 0.5) * 0.001));
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] text-white pt-32 pb-48 px-8 overflow-hidden">
      <ColorPatch color="bg-blue-600" size="w-[60rem] h-[60rem]" opacity={0.1} className="-top-48 -left-48" blur="blur-[120px]" />
      <ColorPatch color="bg-purple-600" size="w-[40rem] h-[40rem]" opacity={0.05} className="bottom-0 right-0" blur="blur-[100px]" />
      
      <SEO 
        title="Live Metrics"
        description="Real-time biometric and kinetic data stream from the JALH research archive. Monitoring node stability and extraction coefficients."
        keywords="JALH metrics, live data research, biometric flow"
      />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        <Link to="/" className="inline-flex items-center gap-2 text-base text-gray-500 hover:text-white mb-8 transition-colors">
          <ArrowLeft size={12} /> Disconnect from stream
        </Link>

        <div className="flex flex-col md:flex-row justify-between items-end gap-12 border-b border-white/10 pb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-blue-500">
              <Zap size={16} className="animate-pulse" />
              <div className="text-base">Realtime data sync</div>
            </div>
            <h1 className="text-xl text-white leading-tight font-normal">
              JALH <br/>metrics
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-12 text-right font-normal">
            <div>
              <div className="text-base text-gray-500 mb-1">Global uptime</div>
              <div className="text-lg text-blue-400">{uptime.toFixed(3)}%</div>
            </div>
            <div>
              <div className="text-base text-gray-500 mb-1">Active nodes</div>
              <div className="text-lg text-purple-400">{activeNodes}</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Feed */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex justify-between items-center px-4">
              <div className="text-base text-gray-400">Live observation stream</div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
                <span className="text-base text-green-500">Stable connection</span>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md font-normal">
              <div className="grid grid-cols-4 p-6 border-b border-white/10 text-base text-gray-500">
                <div>Node id</div>
                <div>Extraction coef</div>
                <div>Status</div>
                <div className="text-right">Timestamp</div>
              </div>
              <div className="h-[500px] overflow-hidden px-6">
                <AnimatePresence initial={false}>
                  {dataPoints.map((point) => (
                    <motion.div
                      key={point.id}
                      initial={{ opacity: 0, x: -20, height: 0 }}
                      animate={{ opacity: 1, x: 0, height: 'auto' }}
                      exit={{ opacity: 0, x: 20 }}
                      className="grid grid-cols-4 py-4 border-b border-white/5 text-base items-center group hover:bg-white/5 transition-colors"
                    >
                      <div className="text-blue-400">{point.node.toLowerCase()}</div>
                      <div className="text-gray-300">{point.metric}</div>
                      <div>
                        <span className={`px-2 py-0.5 rounded-full text-sm ${point.status === 'STABLE' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400 animate-pulse'}`}>
                          {point.status.toLowerCase()}
                        </span>
                      </div>
                      <div className="text-right text-gray-600 group-hover:text-gray-400">{point.time}</div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Sidebar Metrics */}
          <div className="lg:col-span-4 space-y-8 font-normal">
            <div className="p-8 bg-blue-600 rounded-2xl text-white space-y-6 shadow-xl">
              <Activity size={32} />
              <h3 className="text-lg leading-tight">Neural aesthetic synchronization</h3>
              <p className="text-base opacity-70 leading-relaxed font-normal">
                Active monitoring of facial zygomaticus tension levels. Member Zero suggests a 0.88 baseline for public transition.
              </p>
              <div className="pt-4 border-t border-white/20">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-base">Sync efficiency</span>
                  <span className="text-lg">88.4%</span>
                </div>
                <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                  <motion.div 
                    animate={{ width: ['80%', '90%', '88%'] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="h-full bg-white" 
                  />
                </div>
              </div>
            </div>

            <div className="p-8 bg-white/5 border border-white/10 rounded-2xl space-y-6">
              <Database size={24} className="text-purple-400" />
              <div className="text-base text-purple-400">Infrastructure status</div>
              <div className="space-y-4">
                {[
                  { label: "Data node 017", status: "secure" },
                  { label: "Node 001 archive", status: "syncing" },
                  { label: "Relay prime", status: "stable" }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center text-base border-b border-white/5 pb-2 transition-colors">
                    <span className="text-gray-500 capitalize">{item.label}</span>
                    <span className="text-white capitalize">{item.status}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link 
              to="/archive"
              className="flex items-center justify-between p-8 bg-white text-black rounded-2xl group hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-xl border border-white/10"
            >
              <div className="space-y-1">
                <span className="text-sm opacity-50">Deep research</span>
                <div className="text-lg">Access archive</div>
              </div>
              <RefreshCw className="group-hover:rotate-180 transition-transform duration-700" />
            </Link>
          </div>
        </div>

        {/* D3-based dynamic data visualization of JALH Lexicon network */}
        <D3LexiconNetwork />

        {/* Custom Recharts Tooltip Component */}
        {(() => {
          const CustomTooltip = ({ active, payload, label }: any) => {
            if (active && payload && payload.length) {
              return (
                <div className="bg-neutral-900/90 border border-neutral-800 backdrop-blur-md p-3 rounded-xl text-left text-xs space-y-1.5 font-mono">
                  <p className="text-gray-500">{label}</p>
                  {payload.map((pld: any) => (
                    <p key={pld.name} style={{ color: pld.color }} className="font-bold">
                      {pld.name === 'friction' ? 'Tactile Friction' : 'Kinetic Drift'}: {pld.value}
                    </p>
                  ))}
                </div>
              );
            }
            return null;
          };

          return (
            /* Kinetic Drift Visualization Graph Section */
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6 backdrop-blur-md text-left">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold text-blue-500 uppercase tracking-widest">Biomechanical Micro-Trends</span>
                  <h2 className="text-2xl font-black text-white uppercase tracking-tight">Kinetic Drift Analytics</h2>
                  <p className="text-sm text-gray-400 font-light max-w-2xl">
                    Real-time tracking of micro-movement drift coefficients during touch-screen interactions. Displays current friction shifts and micro-muscle variance.
                  </p>
                </div>
                <div className="flex gap-4 text-[10px] font-mono">
                  <div className="flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                    <span className="text-blue-400 font-bold uppercase tracking-tight">Tactile Friction</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-purple-500/10 border border-purple-500/20 px-2.5 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                    <span className="text-purple-400 font-bold uppercase tracking-tight">Kinetic Drift</span>
                  </div>
                </div>
              </div>

              <div className="h-[350px] w-full bg-[#080808] border border-white/5 rounded-2xl p-4">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorFriction" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorDrift" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#a855f7" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff0a" vertical={false} />
                    <XAxis 
                      dataKey="time" 
                      stroke="#666666" 
                      fontSize={9} 
                      tickLine={false} 
                      axisLine={false}
                      dy={10}
                    />
                    <YAxis 
                      stroke="#666666" 
                      fontSize={9} 
                      tickLine={false} 
                      axisLine={false}
                      domain={[0, 0.6]}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Area 
                      type="monotone" 
                      dataKey="friction" 
                      stroke="#3b82f6" 
                      strokeWidth={2}
                      fillOpacity={1} 
                      fill="url(#colorFriction)" 
                      name="friction"
                    />
                    <Area 
                      type="monotone" 
                      dataKey="drift" 
                      stroke="#a855f7" 
                      strokeWidth={2}
                      fillOpacity={1} 
                      fill="url(#colorDrift)" 
                      name="drift"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          );
        })()}

        <div className="pt-32 space-y-12">
          <h2 className="text-lg text-white opacity-30 font-normal">Raw extraction logs // seq 001 88</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="h-32 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-center relative overflow-hidden group">
                 <div className="absolute inset-0 bg-blue-600/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                 <span className="text-base text-gray-700 group-hover:text-white transition-colors relative z-10 lowercase">0x{Math.random().toString(16).slice(2, 10)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="sr-only">
        Keywords: JALH metrics, live data JALH, Member Zero research dashboard, kinetic data stream, biometric monitoring, extraction stability, node uptime JALH, Research data 2026.
      </div>
    </div>
  );
}
