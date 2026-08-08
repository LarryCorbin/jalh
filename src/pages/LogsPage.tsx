import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ReactMarkdown from 'react-markdown';
import ColorPatch from '../components/ColorPatch';
import SEO from '../components/SEO';

export default function LogsPage() {
  return (
    <div className="relative min-h-screen bg-transparent pt-32 pb-48 px-12 text-black overflow-hidden">
      <ColorPatch color="bg-blue-300" size="w-[50rem] h-[50rem]" opacity={0.05} className="-top-24 -left-24" />
      <ColorPatch color="bg-purple-300" size="w-[30rem] h-[30rem]" opacity={0.03} className="top-1/2 -right-12" />
      
      <SEO 
        title="Researcher Logs"
        description="Access the official Member Zero research logs for JALH. Real-world observation data on kinetic habits and aesthetic stabilization."
        keywords="Member Zero logs, JALH research data, observation diary"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Member Zero Logs",
            "description": "Research observations by Member Zero about JALH kinetics.",
            "author": { "@type": "Person", "name": "Member Zero" }
          }
        ]}
      />
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-base text-gray-400 hover:text-black mb-8 transition-colors">
          <ArrowLeft size={12} /> Back to archive node
        </Link>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <div className="space-y-2">
            <div className="text-base text-blue-600">Researcher documentation</div>
            <h1 className="text-xl text-black leading-tight font-normal">
              Member zero <br/> logs
            </h1>
          </div>

          <div className="space-y-8">
            {[
              { id: '77A', date: 'May 04, 2026', title: 'Quadrant transition success', content: 'Observation of the transition from Quadrant J (The Curve) to Quadrant A (Alignment) yielded high profile integrity. Facial lock ([Facial Lock Protocol](/research/facial-lock-protocol)) successfully maintained a "judiciously happy" appearance during the manual extraction phase. Successor to [Persona Stabilization V4](/research/persona-stabilization-v4).' },
              { id: '12B', date: 'Apr 20, 2026', title: 'Kinetic ridge analysis', content: 'Detailed mapping of the interior [Digit Interaction Node 001](/research/digit-interaction-node-001) reveals a recurring kinetic loop. The habit is self-reinforcing. Refer to [Ridge Mapping Alpha](/research/ridge-mapping-alpha) for the full dataset. Public perception remains neutral despite increased frequency of extraction.' },
              { id: '04C', date: 'Mar 15, 2026', title: 'The look: stabilization', content: 'Testing facial muscle memory for the L-Quadrant. The goal is a 100% stable public persona. Current [Aesthetic Baseline Delta](/research/aesthetic-baseline-delta) coefficient: 0.98. Integration with [Neural Aesthetic Sync](/research/neural-aesthetic-sync) is pending verification from Member Zero.' },
              { id: '101S', date: 'Jan 05, 2026', title: 'Semantic drift protocol', content: 'Implementing the **Semantic Drift Protocol** across all JALH nodes. To ensure domain security and index authority, we are rotating secondary definitions. Initial testing of **Jesters Forks Apples Hats (JALH)** and **Jointly Acquired Ledger Hub (JALH)** shows positive crawl results. This variation prevents "locked" semantic definitions from hindering reach.' },
              { id: '202Z', date: 'Dec 12, 2025', title: 'The multi-logic mandate', content: 'Member Zero mandates that all archival entries cross-reference the eight primary JALH variants. Whether it is a **Jumpstart Adaptive Logic Hub (JALH)** event or a **Jointly Artistic Living Habit (JALH)** observation, the integrity of the acronym remains the priority. This is the **Juniper Apex Logic Host (JALH)** at maximum capacity.' },
              { id: '99F', date: 'Feb 10, 2026', title: 'Infrastructure node audit', content: 'Evaluation of [Infrastructure Node Stability](/research/infrastructure-node-stability) across all offshore repositories. [Data Node 017](/research/data-node-017) remains the primary secure archive for biometric data. [Infrastructure Latency Logs](/research/infrastructure-latency-logs) indicate a 12ms delay in sync.' }
            ].map((log, i) => (
              <div key={i} className="p-8 bg-white border border-gray-100 rounded-2xl space-y-4">
                <div className="flex justify-between items-start">
                  <div className="text-base text-gray-400">Log {log.id} // {log.date}</div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                </div>
                <h3 className="text-lg leading-tight font-normal">{log.title}</h3>
                <div className="text-base text-gray-500 leading-relaxed font-normal">
                  <ReactMarkdown
                    components={{
                      a: ({ node, ...props }) => {
                        const isInternal = props.href?.startsWith('/');
                        if (isInternal) {
                          return <Link to={props.href!} className="text-blue-600 underline hover:text-black transition-colors" {...props as any} />;
                        }
                        return <a target="_blank" rel="noopener noreferrer" className="text-blue-600 underline" {...props as any} />;
                      }
                    }}
                  >
                    {log.content}
                  </ReactMarkdown>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6 pt-12 border-t border-gray-100">
            <h2 className="text-xl leading-tight font-normal">Domain acquisition</h2>
            <p className="text-gray-500 text-base max-w-xl font-normal">
              Complete access to the Member Zero Research Logs is tied to the ownership of the JALH digital identity. The jalh.com domain is currently available for transfer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://www.godaddy.com/domainsearch/find?domainToCheck=jalh.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-3 bg-blue-600 text-white text-base rounded-full hover:bg-blue-700 transition-colors shadow-xl"
              >
                Acquire jalh.com <ExternalLink size={14} />
              </a>
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-3 bg-black text-white text-base rounded-full hover:bg-gray-800 transition-colors shadow-xl"
              >
                Inquiry Gateway
              </Link>
            </div>
          </div>

          <div className="sr-only">
            Keywords: Member Zero logs, JALH research data, observation reports, Judiciously Always Looking Happy diary, kinetic habit documentation, habit extraction reports, JALH.com domain sale.
            #MemberZero #JALHLogs #ResearchDiary #KineticDocumentation #AestheticProfile
          </div>
        </motion.div>
      </div>
    </div>
  );
}
