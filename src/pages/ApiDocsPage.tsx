import { motion } from 'motion/react';
import SEO from '../components/SEO';

export default function ApiDocsPage() {
  return (
    <>
      <SEO 
        title="API Documentation"
        description="Technical documentation for the JALH (Judiciously Always Looking Happy) Core API. Retrieve kinetic habit data, node status, and biometric flow metrics."
        type="article"
      />

      <div className="pt-48 pb-32 px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto space-y-16"
        >
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-mono tracking-tighter text-black uppercase">JALH_CORE_API_V1</h1>
            <p className="text-xl text-gray-500 leading-relaxed font-normal max-w-3xl">
              Access the raw biometric flow and kinetic habit extraction data from Archive Node 001. All API requests must be signed with a verified Member Zero credential.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-16">
            {/* Sidebar Navigation */}
            <div className="lg:w-64 space-y-8 text-sm">
              <div className="space-y-4">
                <div className="text-black font-bold uppercase tracking-widest text-[10px]">Security</div>
                <div className="space-y-2 text-gray-500">
                  <div className="hover:text-blue-600 cursor-pointer">Authentication</div>
                  <div className="hover:text-blue-600 cursor-pointer">Rate Limits</div>
                  <div className="hover:text-blue-600 cursor-pointer">Node Verification</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="text-black font-bold uppercase tracking-widest text-[10px]">Endpoints</div>
                <div className="space-y-2 text-gray-400">
                  <div className="text-blue-600 font-medium">/kinetic/extraction</div>
                  <div className="hover:text-blue-600 cursor-pointer">/aesthetic/sync</div>
                  <div className="hover:text-blue-600 cursor-pointer">/biometric/flow</div>
                  <div className="hover:text-blue-600 cursor-pointer">/node/status</div>
                </div>
              </div>
            </div>

            {/* Main Documentation content */}
            <div className="flex-1 space-y-16">
              <section className="space-y-6">
                <h2 className="text-2xl text-black font-normal">Kinetic Extraction Endpoint</h2>
                <p className="text-gray-600 text-base leading-relaxed">
                  Retrieve the precise manual dexterity metrics for a specific Quadrant J study. Returns ridge mapping coordinates and rotation velocity data.
                </p>
                
                <div className="bg-gray-900 rounded-xl p-6 font-mono text-sm overflow-hidden border border-white/5 shadow-2xl">
                  <div className="flex justify-between items-center mb-4 pb-2 border-b border-white/10">
                    <span className="text-green-400">GET</span>
                    <span className="text-gray-500 text-[10px]">v1/kinetic/extraction/{`{node_id}`}</span>
                  </div>
                  <pre className="text-white/80 overflow-x-auto whitespace-pre-wrap">
{`{
  "node_id": "JALH_001_PRIME",
  "status": "STABLE",
  "data": {
    "quadrant": "J",
    "ridge_mapping": [44.2, 12.8, 99.1],
    "rotation_velocity": "0.14rad/s",
    "extraction_coefficient": 0.88,
    "timestamp": "2026-05-10T13:42:01Z"
  },
  "verification": "MEMBER_ZERO_SIGNED"
}`}
                  </pre>
                </div>
              </section>

              <section className="space-y-6 pt-16 border-t border-gray-100">
                <h2 className="text-2xl text-black font-normal">Error Taxonomy</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-black text-[10px] uppercase tracking-widest text-gray-400">
                        <th className="py-2">Code</th>
                        <th className="py-2">Status</th>
                        <th className="py-2">Description</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600">
                      <tr className="border-b border-gray-100">
                        <td className="py-4 font-mono text-black">401_UNAUTHORIZED</td>
                        <td className="py-4 text-red-500">FAILED</td>
                        <td className="py-4">Invalid Member Zero credential provided.</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-4 font-mono text-black">404_NODE_MISSING</td>
                        <td className="py-4 text-yellow-600">NULL</td>
                        <td className="py-4">The requested research node does not exist in the archive.</td>
                      </tr>
                      <tr>
                        <td className="py-4 font-mono text-black">429_DRIFT_DETECTED</td>
                        <td className="py-4 text-blue-500">THROTTLED</td>
                        <td className="py-4">Kinetic drift exceeds stability thresholds. API access restricted temporarily.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
