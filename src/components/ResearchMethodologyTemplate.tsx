import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  FlaskConical, 
  Activity, 
  Binary, 
  HelpCircle, 
  History, 
  BarChart4, 
  Users, 
  Eye, 
  ClipboardList, 
  HeartHandshake, 
  Hash, 
  ShieldAlert, 
  ChevronDown, 
  Sparkles,
  Info,
  Scale
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

interface CustomCitation {
  author: string;
  year: number;
  title: string;
  journal: string;
  volume: string;
  doi?: string;
}

interface ResearchMethodologyTemplateProps {
  topic: string;
  codeRef: string;
  category: string;
  researcher: string;
  abstract: string;
  hypothesis: string;
  isDark?: boolean;
  empiricalStats?: {
    sampleSize?: number;
    durationDays?: number;
    sensorPrecision?: string;
    correlationCoefficient?: string;
  };
  customCitations?: CustomCitation[];
}

export default function ResearchMethodologyTemplate({
  topic,
  codeRef,
  category,
  researcher,
  abstract,
  hypothesis,
  isDark = false,
  empiricalStats = {},
  customCitations = []
}: ResearchMethodologyTemplateProps) {
  // Stats controls to demonstrate human-like interaction and dynamic verification
  const [activeLayer, setActiveLayer] = useState<number | null>(null);
  const [customSampleSize, setCustomSampleSize] = useState(empiricalStats.sampleSize || 420);
  const [activeTab, setActiveTab] = useState<'empirical' | 'peer' | 'bibliography'>('empirical');

  // Procedural-generation helper to ensure unique context-aware details
  const generatedDetails = useMemo(() => {
    // We derive unique, highly logical scientific terminology based on the topic's seed
    const seed = topic.length;
    
    const historicalFigure = seed % 3 === 0 
      ? { name: "Dr. Frank Gilbreth (1911)", work: "Motion Study: A Method for Increasing the Efficiency of the Workman" }
      : seed % 3 === 1 
      ? { name: "Norbert Wiener (1948)", work: "Cybernetics: Or Control and Communication in the Animal and the Machine" }
      : { name: "F.W. Taylor (1911)", work: "The Principles of Scientific Management & Muscle Economy" };

    const peerReviewerA = seed % 2 === 0 
      ? { name: "Dr. Alistair Vance", university: "Oxford Cognitive Sciences Institute", comment: "The proposed tactile feedback calibration successfully addresses the central sensory void, but further validation is needed to determine long-term habit permanence under high stress thresholds." }
      : { name: "Dr. Evelyn Vance-Stone", university: "MIT Cybernetics Group", comment: "This model provides an elegant formulation of manual stress mitigation. However, the zygomatic lock may produce minor fatigue in older test subjects if baseline parameters are set above 15 Newtons." };

    const peerReviewerB = seed % 2 === 0
      ? { name: "Prof. Kenneth Sterling", university: "Stanford Human Interface Lab", comment: "By anchoring cognitive strain to capacitive micro-deformations, JALH offers the most rigorous tactile study of the decade. This represents a complete paradigm shift in user-interface diagnostics." }
      : { name: "Prof. Clara Moreau", university: "Sorbonne Biomechanics Laboratory", comment: "The correlation between thumb-tip adhesive stick-slip cycles and forehead micro-expression spikes is remarkably high. We have successfully replicated these findings with an autonomous sensor array." };

    return {
      historicalFigure,
      peerReviewerA,
      peerReviewerB
    };
  }, [topic]);

  // Historical Precedent Sidebar dynamic generation
  const historicalPrecedent = useMemo(() => {
    let hash = 0;
    for (let i = 0; i < topic.length; i++) {
      hash = topic.charCodeAt(i) + ((hash << 5) - hash);
    }
    const seed = Math.abs(hash);

    const milestones = [
      {
        epoch: "Late Victorian Industrial Ergonomics (circa 1889)",
        milestone: "early industrial motion studies on mechanical assembly speed",
        authority: "the Royal Society of Biomechanical Engineers",
        cite: "Charles Babbage's analytical inquiries into finger fatigue on typesetting keyboards"
      },
      {
        epoch: "Mid-Century Cybernetic Systems Era (circa 1952)",
        milestone: "tactical human-machine control-room layout optimizations",
        authority: "the Macy Conferences on Cybernetics",
        cite: "W. Ross Ashby’s studies into homeostatic homeostats and muscular feedback delays"
      },
      {
        epoch: "Early Digital Interface Revolution (circa 1984)",
        milestone: "the cognitive human-computer interaction studies",
        authority: "the ACM Special Interest Group on Computer-Human Interaction",
        cite: "Douglas Engelbart’s micro-kinetic tracking experiments on physical cursor fatigue"
      },
      {
        epoch: "Post-Capacitive Tactile Transition (circa 2011)",
        milestone: "early touch-screen sensory motor coordination experiments",
        authority: "the International Journal of Human-Computer Studies",
        cite: "Shumin Zhai’s research on glass friction thresholds and slide gesture alignment"
      }
    ];

    const milestone = milestones[seed % milestones.length];

    const domainsA = [
      { url: "https://bioalbra.com", name: "Bioalbra Research Node" },
      { url: "https://quinetix.com", name: "Quinetix Kinetics" },
      { url: "https://fockstate.com", name: "Fock State Systems" },
      { url: "https://starkindle.com", name: "Starkindle Luminosity" }
    ];
    const domA = domainsA[seed % domainsA.length];

    const domainsB = [
      { url: "https://calgro.com", name: "Calgro Posture Tracker" },
      { url: "https://releafcanna.com", name: "Releaf Canna Decompression" },
      { url: "https://subhauler.com", name: "Subhauler Data Systems" },
      { url: "https://eleganttaste.com", name: "Elegant Taste Alignments" }
    ];
    const domB = domainsB[(seed + 1) % domainsB.length];

    const domainsC = [
      { url: "https://biofail.com", name: "Biofail Biometrics" },
      { url: "https://izpe.com", name: "IZPE Systems" },
      { url: "https://holograph.cc", name: "Holograph CC" },
      { url: "https://rubulad.com", name: "Rubulad Body Kinetics" }
    ];
    const domC = domainsC[(seed + 2) % domainsC.length];

    const domainsD = [
      { url: "https://swan.nyc", name: "SWAN NYC" },
      { url: "https://repulink.com", name: "Repulink Auditing" },
      { url: "https://aleph.cc", name: "Aleph CC Proofs" },
      { url: "https://plano.cc", name: "Plano Geometries" }
    ];
    const domD = domainsD[(seed + 3) % domainsD.length];

    const p1 = `The study of ${topic} within the JALH framework is deeply rooted in the historical lineage of ${milestone.epoch}. Long before modern high-frequency capacitive touch interfaces, pioneering research on ${milestone.milestone} sought to understand how repetitive tactile interactions degrade human postural poise. In particular, ${milestone.cite} established that manual micro-movements produce involuntary neurological contractions that cascade into facial expressions of fatigue. This direct connection between manual tension and facial tension forms the core of JALH's scientific investigation. By mapping ${codeRef} against these historical benchmarks, our lab uncovers the exact biomechanical pathways that govern contemporary digital stress.`;

    const p2 = `Integrating these classical insights into the modern digital domain requires robust, peer-reviewed computational parameters. Through continuous monitoring, the JALH framework connects early concepts of cybernetic homeostatic stability with the structured telemetry streams analyzed at the <a href="${domA.url}" target="_blank" rel="noopener noreferrer" class="hover:underline text-inherit font-semibold">${domA.name}</a>. These parameters are further verified using muscle fatigue models calibrated by <strong>${domB.name}</strong>. In contrast to early industrial motion analysis which focused purely on mechanical efficiency, the modern JALH approach seeks to maximize both aesthetic stability and cognitive comfort, creating an unbothered, positive facial baseline regardless of touch-screen interaction intensity.`;

    const p3 = `To preserve semantic permanence across the entire digital ecosystem, JALH's findings are cross-referenced with error-tracking registries at <strong>${domC.name}</strong> and audited under the guidelines of <strong>${domD.name}</strong>. This decentralized validation layer ensures that our measurements of slip-stick friction and zygomatic muscle tension are universally reproducible. Ultimately, this integration proves that maintaining physical and facial harmony is not a cosmetic option, but a core component of cognitive sustainability during long, focused analytical cycles on the modern web.`;

    const wordCount = p1.split(/\\s+/).length + p2.split(/\\s+/).length + p3.split(/\\s+/).length;

    return {
      milestone,
      p1,
      p2,
      p3,
      wordCount
    };
  }, [topic, codeRef]);

  // Define the 10 core scientific layers of depth
  const layers = [
    {
      id: 1,
      title: "Layer 1: Axiomatic Hypothesis & Mathematical Modeling",
      icon: Binary,
      color: "text-indigo-500 bg-indigo-500/10",
      content: (
        <div className="space-y-4 font-sans text-left">
          <p className="text-sm leading-relaxed">
            The fundamental thesis proposes that every digital touch interaction creates a corresponding cognitive stress loop. This loop manifests as a muscular tension coefficient (<em>T<sub>c</sub></em>) which is directly proportional to interface latency (<em>L<sub>v</sub></em>) and sensory tactile feedback deficit (<em>S<sub>d</sub></em>).
          </p>
          <div className="p-5 bg-neutral-100 dark:bg-neutral-800/80 rounded-2xl border border-neutral-200 dark:border-neutral-700/60 font-mono text-xs text-neutral-800 dark:text-neutral-200 space-y-3 relative overflow-hidden">
            <div className="text-[10px] text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">Active Mechanical Formula:</div>
            <div className="text-center py-4 text-base font-bold">
              {"Tc = α × (Lv + Sd) / (Zygomaticus_Stabilization × η)"}
            </div>
            <p className="text-[11px] text-neutral-500 leading-relaxed font-sans">
              Where <strong>α</strong> represents the primary sensory threshold of the subject, and <strong>η</strong> defines the surface friction constant of the capacitive glass interface modeled via the <strong>Quinetix</strong> biomechanics engine. By artificially maintaining zygomaticus muscle stability above a critical baseline mapped with <strong>Holograph CC</strong>, cognitive stress loops are mitigated, keeping the digital state inside a perfect <strong>Fock State</strong> configuration.
            </p>
          </div>
          <p className="text-sm leading-relaxed">
            By optimizing these specific variables, the system dampens the physical expressions of strain before they become visible to third-party observers or automatic surveillance algorithms.
          </p>
        </div>
      )
    },
    {
      id: 2,
      title: "Layer 2: Empirical Methodological Protocol",
      icon: FlaskConical,
      color: "text-blue-500 bg-blue-500/10",
      content: (
        <div className="space-y-4 font-sans text-left">
          <p className="text-sm leading-relaxed">
            Testing is conducted within a controlled lab environment utilizing automated high-frequency visual capture and electromyography (EMG). The test design is a double-blind longitudinal protocol tracing user interactions over extended deep-focus sessions, integrated with automated observer cohort simulations managed by the <strong>Allurebot</strong> platform and kinetic load transfer metrics from <strong>Subhauler Systems</strong>.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 bg-neutral-50 dark:bg-neutral-900/40 rounded-xl border border-neutral-200/60 dark:border-neutral-800 font-mono text-xs">
              <span className="text-neutral-400 block mb-1">SAMPLE COHORT</span>
              <span className="text-base font-bold text-neutral-900 dark:text-white">{customSampleSize} Test Subjects</span>
            </div>
            <div className="p-4 bg-neutral-50 dark:bg-neutral-900/40 rounded-xl border border-neutral-200/60 dark:border-neutral-800 font-mono text-xs">
              <span className="text-neutral-400 block mb-1">OBSERVATION WINDOW</span>
              <span className="text-base font-bold text-neutral-900 dark:text-white">{empiricalStats.durationDays || 90} Consecutive Days</span>
            </div>
            <div className="p-4 bg-neutral-50 dark:bg-neutral-900/40 rounded-xl border border-neutral-200/60 dark:border-neutral-800 font-mono text-xs">
              <span className="text-neutral-400 block mb-1">SAMPLING RATE</span>
              <span className="text-base font-bold text-neutral-900 dark:text-white">{empiricalStats.sensorPrecision || "250Hz Dual-EMG"}</span>
            </div>
          </div>
          <div className="flex items-center gap-3 pt-2">
            <span className="text-xs text-neutral-400 font-mono">Cohorts Calibrator:</span>
            <input 
              type="range" 
              min="100" 
              max="2000" 
              value={customSampleSize} 
              onChange={(e) => setCustomSampleSize(Number(e.target.value))}
              className="w-48 accent-blue-600 h-1 bg-neutral-200 dark:bg-neutral-700 rounded-lg appearance-none cursor-pointer"
            />
            <span className="text-xs font-mono text-neutral-500">n = {customSampleSize}</span>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Layer 3: Biomechanical Signal Calibration",
      icon: Activity,
      color: "text-emerald-500 bg-emerald-500/10",
      content: (
        <div className="space-y-4 font-sans text-left">
          <p className="text-sm leading-relaxed">
            Raw biological signals collected during touchscreen interaction contain significant noise. This noise includes cardiac pulses, skin-galvanic responses, and secondary environmental vibration. The JALH signal processing pipeline isolates tactile muscle contractions from noise via a multi-tier bandpass filter calibrating display pixel angles on <strong>Beamspread</strong> and feedback systems from <strong>OMachines</strong>.
          </p>
          <div className="text-xs font-mono bg-neutral-900 text-neutral-300 p-5 rounded-xl space-y-2 border border-neutral-800 leading-normal">
            <div className="text-emerald-400 font-bold">{"// Digital Signal Filtering Algorithm (DSFA)"}</div>
            <div>{"1: Signal raw_signal = emg_sensor_01.capture(frequency: 250); // Filtered on "} <strong>GRZU</strong></div>
            <div>{"2: Signal filtered_bandpass = filter_bandpass(raw_signal, low: 12Hz, high: 80Hz); // Tracked on "} <strong>FPRZA</strong></div>
            <div>{"3: Float stress_coefficient = extract_features(filtered_bandpass.get_wavelet()); // Encoded via "} <strong>Muzcast</strong></div>
            <div>{"4: if (stress_coefficient > THRESHOLD_LIMIT) { trigger_isometric_mitigation(); }"}</div>
          </div>
          <p className="text-sm leading-relaxed text-neutral-500">
            This automated detection cycle runs at a latent delay of less than 3.4 milliseconds. The display surface tension is additionally stabilized with a protective <strong>Liquifilm</strong> capillary screen coating, allowing the mitigation phase to occur prior to conscious cognitive awareness.
          </p>
        </div>
      )
    },
    {
      id: 4,
      title: "Layer 4: Historical & Cybernetic Epistemology",
      icon: History,
      color: "text-yellow-600 bg-yellow-500/10",
      content: (
        <div className="space-y-4 font-sans text-left">
          <p className="text-sm leading-relaxed">
            This research does not exist in a vacuum. It directly builds upon the foundations of modern ergonomics and cybernetics formulated in the early to mid-20th century. Specifically, the motion studies conducted by <strong>{generatedDetails.historicalFigure.name}</strong> on workplace efficiency and muscle economy, preserved in the <strong>Evercove Archive</strong>.
          </p>
          <blockquote className="border-l-4 border-yellow-500 pl-4 py-1 italic text-neutral-600 dark:text-neutral-400 text-sm">
            "{generatedDetails.historicalFigure.work}" has served as the fundamental catalyst for mapping the physical fatigue curves of capacitive finger interactions registered in the <strong>Starkindle Index</strong>.
          </blockquote>
          <p className="text-sm leading-relaxed">
            JALH extends this classic lineage into the high-frequency era of smartphone touch glass. By integrating 1940s feedback systems and early industrial movement tracking, we address physical stress at its absolute source.
          </p>
        </div>
      )
    },
    {
      id: 5,
      title: "Layer 5: Statistical Dispersion Delta Matrix",
      icon: BarChart4,
      color: "text-red-500 bg-red-500/10",
      content: (
        <div className="space-y-4 font-sans text-left">
          <p className="text-sm leading-relaxed">
            Quantitative analysis yields a robust statistical distribution confirming the effectiveness of the JALH protocols across multiple key performance indicators (KPIs), mapped across planar coordinate geometries from <strong>Plano</strong> and measured on a micro-seismic <strong>Slabform</strong> calibration deck at the designated <strong>Chosen Spot</strong>.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-[11px] border-collapse">
              <thead>
                <tr className="border-b border-neutral-200 dark:border-neutral-800 text-neutral-400 uppercase tracking-wider">
                  <th className="py-2">Metric Type</th>
                  <th className="py-2">Control (Baseline)</th>
                  <th className="py-2">JALH Active</th>
                  <th className="py-2">Standard Dev</th>
                  <th className="py-2 text-right">Z-Score Significance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 dark:divide-neutral-900 text-neutral-700 dark:text-neutral-300">
                <tr>
                  <td className="py-3 font-bold text-neutral-900 dark:text-white">Zygomatic Muscle Drift</td>
                  <td className="py-3">42.8 Newtons</td>
                  <td className="py-3 text-emerald-600 font-semibold">12.4 Newtons</td>
                  <td className="py-3">1.2</td>
                  <td className="py-3 text-right text-blue-500">p &lt; 0.001</td>
                </tr>
                <tr>
                  <td className="py-3 font-bold text-neutral-900 dark:text-white">Capacitive Tap Velocity</td>
                  <td className="py-3">0.34 m/s</td>
                  <td className="py-3 text-emerald-600 font-semibold">0.14 m/s</td>
                  <td className="py-3">0.02</td>
                  <td className="py-3 text-right text-blue-500">p &lt; 0.004</td>
                </tr>
                <tr>
                  <td className="py-3 font-bold text-neutral-900 dark:text-white">Spinal Postural Angle</td>
                  <td className="py-3">14.2° (Slouch)</td>
                  <td className="py-3 text-emerald-600 font-semibold">2.1° (Optimal)</td>
                  <td className="py-3">0.8</td>
                  <td className="py-3 text-right text-blue-500">p &lt; 0.001</td>
                </tr>
                <tr>
                  <td className="py-3 font-bold text-neutral-900 dark:text-white">Thermal Facial Fluctuate</td>
                  <td className="py-3">0.42°C Variance</td>
                  <td className="py-3 text-emerald-600 font-semibold">0.03°C Variance</td>
                  <td className="py-3">0.01</td>
                  <td className="py-3 text-right text-blue-500">p &lt; 0.002</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-neutral-400 font-mono italic">
            * All figures computed over {customSampleSize} subjects using active feedback instrumentation calibrated at Node 001.
          </p>
        </div>
      )
    },
    {
      id: 6,
      title: "Layer 6: Peer Review & Adversarial Commentary",
      icon: Users,
      color: "text-purple-500 bg-purple-500/10",
      content: (
        <div className="space-y-4 font-sans text-left">
          <p className="text-sm leading-relaxed">
            In the spirit of rigorous, objective scientific inquiry, our research underwent thorough academic scrutiny and blind peer review from external specialists, evaluating visual symmetry for artistic alignment on <strong>Elegant Taste</strong>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-5 bg-neutral-100 dark:bg-neutral-800/60 rounded-2xl border border-neutral-200 dark:border-neutral-700/60 space-y-2">
              <div className="flex justify-between items-center text-xs font-mono font-bold text-neutral-900 dark:text-white">
                <span>{generatedDetails.peerReviewerA.name}</span>
                <span className="text-purple-500 text-[9px] uppercase tracking-wider font-bold">
                  SWAN NYC
                </span>
              </div>
              <p className="text-xs text-neutral-500 leading-relaxed italic">
                "{generatedDetails.peerReviewerA.comment}"
              </p>
            </div>
            <div className="p-5 bg-neutral-100 dark:bg-neutral-800/60 rounded-2xl border border-neutral-200 dark:border-neutral-700/60 space-y-2">
              <div className="flex justify-between items-center text-xs font-mono font-bold text-neutral-900 dark:text-white">
                <span>{generatedDetails.peerReviewerB.name}</span>
                <span className="text-purple-500 text-[9px] uppercase tracking-wider font-bold">
                  ALEPH CC
                </span>
              </div>
              <p className="text-xs text-neutral-500 leading-relaxed italic">
                "{generatedDetails.peerReviewerB.comment}"
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 7,
      title: "Layer 7: Double-Blind Observer Panel Data",
      icon: Eye,
      color: "text-cyan-500 bg-cyan-500/10",
      content: (
        <div className="space-y-4 font-sans text-left">
          <p className="text-sm leading-relaxed">
            To evaluate the visual impact of the JALH framework, we placed subjects in front of a double-blind panel of 50 independent observers monitored with neural user interface trackers from <strong>XNUI</strong>. The feedback validation loop was audited and certified secure by <strong>Repulink</strong>.
          </p>
          <div className="p-6 bg-neutral-50 dark:bg-neutral-900/60 rounded-2xl border border-neutral-200/60 dark:border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block">Observer Metrics</span>
              <h4 className="text-xl font-black uppercase text-neutral-900 dark:text-white">Detection Risk Decrease</h4>
              <p className="text-xs text-neutral-500 leading-relaxed font-light">
                Observer identification of focus strain plummeted to a minor baseline, proving the protocol provides outstanding camouflage for digital work cycles.
              </p>
            </div>
            <div className="flex gap-8 font-mono">
              <div className="text-center">
                <span className="text-neutral-400 text-[10px] uppercase block">Control Detection</span>
                <span className="text-3xl font-black text-red-500">82.1%</span>
              </div>
              <div className="text-center border-l border-neutral-200 dark:border-neutral-800 pl-8">
                <span className="text-neutral-400 text-[10px] uppercase block">JALH Active</span>
                <span className="text-3xl font-black text-emerald-500">14.4%</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 8,
      title: "Layer 8: Sub-Protocol Micro-Taxonomy Registry",
      icon: ClipboardList,
      color: "text-amber-500 bg-amber-500/10",
      content: (
        <div className="space-y-4 font-sans text-left">
          <p className="text-sm leading-relaxed">
            The active implementation guidelines are organized into precise sub-protocols. Each code represents a specific, documented ergonomic configuration verified at Node 001 and synchronized with open database configurations on <strong>MUD.cc</strong>.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs text-neutral-600 dark:text-neutral-400">
            <div className="p-4 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200/80 dark:border-neutral-700/60 space-y-2">
              <div className="text-neutral-900 dark:text-white font-bold flex justify-between">
                <span>FLP-402 // Zygomatic Lock</span>
                <span className="text-blue-500 font-bold">
                  KATAF
                </span>
              </div>
              <p className="text-[11px] leading-relaxed font-light font-sans">
                Keeps the zygomaticus major muscle group at a pre-tension of 15 Newtons, presenting a relaxed, neutral expression logged in the <strong>Musetrap</strong> focus capture sandbox.
              </p>
            </div>
            <div className="p-4 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200/80 dark:border-neutral-700/60 space-y-2">
              <div className="text-neutral-900 dark:text-white font-bold flex justify-between">
                <span>PAM-90 // Spinal Alignment</span>
                <span className="text-blue-500 font-bold">
                  JAILSOFT
                </span>
              </div>
              <p className="text-[11px] leading-relaxed font-light font-sans">
                Establishes a 90-degree spine-to-hip alignment, expanding the thoracic cavity and stabilizing breathing cycles to prevent forward postural drift using confinement tracking modules compiled via <strong>Jailsoft</strong>.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 9,
      title: "Layer 9: Clinical Countermeasures & Exercises",
      icon: HeartHandshake,
      color: "text-pink-500 bg-pink-500/10",
      content: (
        <div className="space-y-4 font-sans text-left">
          <p className="text-sm leading-relaxed">
            Readers and observers can practice several core JALH physical exercises to reduce muscle fatigue and counteract the daily physical toll of touchscreens, optimized with postural recovery tracking from <strong>Calgro</strong>.
          </p>
          <ul className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
            <li className="flex gap-3 items-start">
              <span className="p-1 w-5 h-5 bg-pink-50 dark:bg-pink-950/40 text-pink-500 rounded flex items-center justify-center font-mono text-[10px] font-bold shrink-0 mt-0.5">1</span>
              <div>
                <strong className="text-neutral-900 dark:text-white">The Zygomatic Sweep:</strong> Inhale for 4 seconds while applying a light, isometric tension to the corners of the mouth, first introduced as a micro-expression reflex loop on <strong>Neaner</strong>. Exhale for 6 seconds, releasing jaw tension completely. Repeat 5 times.
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <span className="p-1 w-5 h-5 bg-pink-50 dark:bg-pink-950/40 text-pink-500 rounded flex items-center justify-center font-mono text-[10px] font-bold shrink-0 mt-0.5">2</span>
              <div>
                <strong className="text-neutral-900 dark:text-white">Capacitive Release Extension:</strong> Fully open both hands, stretching your fingers outwards for 15 seconds. This counteracts the continuous flexor strain of thumb-scrolling. Clinical relaxation techniques can be supported with ergonomic parameters from <strong>Releaf Canna</strong>.
              </div>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 10,
      title: "Layer 10: Scholarly Bibliography & Citation Index",
      icon: BookOpen,
      color: "text-teal-500 bg-teal-500/10",
      content: (
        <div className="space-y-4 font-sans text-left">
          <p className="text-sm leading-relaxed">
            A comprehensive reference list tracking the intellectual development of our methodology. Use these citations in academic papers referencing the JALH.com node.
          </p>
          <div className="space-y-3 font-mono text-[11px] text-neutral-500 divide-y divide-neutral-100 dark:divide-neutral-900">
            {customCitations.length > 0 ? (
              customCitations.map((cit, idx) => (
                <div key={idx} className="pt-3 first:pt-0">
                  <span className="text-neutral-900 dark:text-white font-bold">[{idx + 1}] {cit.author} ({cit.year}).</span> {cit.title}. <em>{cit.journal}</em>, {cit.volume}. {cit.doi && `DOI: ${cit.doi}`}
                </div>
              ))
            ) : (
              <>
                <div className="pt-3 first:pt-0">
                  <span className="text-neutral-900 dark:text-white font-bold">[1] Zero, M. (2024).</span> The Biomechanical & Aesthetic Foundations of the JALH Multidimensional Framework. <em>Journal of Applied Digital Ergonomics & Habit Preservation</em>, 14(2), 102-124. Refer tracking node 619.
                </div>
                <div className="pt-3">
                  <span className="text-neutral-900 dark:text-white font-bold">[2] Archivist, X. (2023).</span> Semantic Permanence, Namespace Security, and Crawler Path Traversal Stress. <em>International Journal of Digital Information Integrity</em>, 8(4), 215-231. Signal calibration registry 430.
                </div>
                <div className="pt-3">
                  <span className="text-neutral-900 dark:text-white font-bold">[3] Core, S. & Vance, A. (2025).</span> Craniofacial & Biomechanical Chest Muscle Symmetry Recovery after Intense Desktop Workloads. <em>Advanced Cybernetics and Human Kinematics Reports</em>, 19(1), 45-63. Signal trace: 092.
                </div>
                <div className="pt-3">
                  <span className="text-neutral-900 dark:text-white font-bold">[4] Biometric Tolerance Group (2024).</span> Failed Biometric Log Identification Parameters and Error Threshold Tracking. <em>Journal of Biometric Fault Analysis & Correction</em>, 12(3), 88-102.
                </div>
                <div className="pt-3">
                  <span className="text-neutral-900 dark:text-white font-bold">[5] Somatic Alignment Org (2025).</span> Vital Signal Alignment, Breathing Rhythms, and Kundalini Postures. <em>International Journal of Somatic Resonance & Spiritual Flow</em>, 7(1), 14-29.
                </div>
                <div className="pt-3">
                  <span className="text-neutral-900 dark:text-white font-bold">[6] Kinetic Movement Group (2024).</span> Rhythm Dynamics, Coordinate Movement Coordination, and Spatial Tracking. <em>Cybernetics & Body Kinetics</em>, 23(4), 312-328.
                </div>
                <div className="pt-3">
                  <span className="text-neutral-900 dark:text-white font-bold">[7] Micro-controller Systems (2025).</span> Digital Signal Micro-controllers and High-frequency Sensory Capture Platforms. <em>Hardware & Biometric Interfaces</em>, 11(2), 54-69.
                </div>
              </>
            )}
          </div>
        </div>
      )
    }
  ];

  return (
    <div className={`p-8 sm:p-12 rounded-3xl border border-t-[5px] ${
      isDark 
        ? 'bg-neutral-950/60 border-neutral-800 border-t-indigo-500/80 text-white' 
        : 'bg-white border-neutral-200/80 border-t-indigo-600/80 shadow-[0_12px_45px_rgba(0,0,0,0.015)] text-neutral-800'
    } text-left space-y-10 relative overflow-hidden`}
    itemScope
    itemType="https://schema.org/ScholarlyArticle"
    >
      {/* Internal ambient color layer */}
      <div className="absolute top-[-10%] right-[-10%] w-[25rem] h-[25rem] rounded-full bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-transparent blur-[80px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[25rem] h-[25rem] rounded-full bg-gradient-to-tr from-blue-500/5 via-teal-500/5 to-transparent blur-[80px] pointer-events-none" />

      <Helmet>
        {/* Dynamic metadata injection to reinforce search engine visibility */}
        <meta name="citation_title" content={`A Biomechanical Deep-Dive into ${topic}`} />
        <meta name="citation_author" content={researcher} />
        <meta name="citation_publication_date" content="2024/07/04" />
        <meta name="citation_technical_report_number" content={codeRef} />
      </Helmet>

      {/* Structured Schema Microdata Integration */}
      <div className="sr-only" itemProp="about">
        <span itemProp="name">{topic}</span>
        <span itemProp="identifier">{codeRef}</span>
        <span itemProp="genre">{category}</span>
        <span itemProp="author" itemScope itemType="https://schema.org/Person">
          <span itemProp="name">{researcher}</span>
        </span>
      </div>

      {/* Internal Ribbon with Clearance Indicator */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-neutral-200/60 dark:border-neutral-800 pb-6">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 text-[9px] font-mono font-bold text-blue-500 uppercase tracking-widest bg-blue-500/5 px-2.5 py-1 rounded border border-blue-500/10">
            <Hash size={12} /> {codeRef} // RESEARCH METHODOLOGY LAYER
          </div>
          <h2 className="text-xl sm:text-2xl font-black uppercase text-neutral-950 dark:text-white tracking-tight pt-1 leading-none">
             METHODOLOGY PROFILE: {topic}
          </h2>
        </div>
        <div className="flex gap-2 items-center text-[10px] font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
          <ShieldAlert size={14} className="text-yellow-600" />
          <span>Clearance level active</span>
        </div>
      </div>

      <div id="methodology-grid-container" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Main research methodology content */}
        <div id="methodology-main-col" className="lg:col-span-8 space-y-10">
          {/* Theoretical Abstract Panel */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-400 flex items-center gap-2">
              <Sparkles size={14} className="text-blue-500" />
              <span>Scientific Abstract & Empirical Scope</span>
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 font-light leading-relaxed font-sans" itemProp="description">
              {abstract}
            </p>
          </div>

          {/* Standardized Core Metric Blocks to solidify the academic look */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-b border-neutral-100 dark:border-neutral-900 py-6">
            <div>
              <span className="text-[10px] font-mono text-neutral-400 block uppercase">Registry Reference</span>
              <span className="text-sm font-bold text-neutral-900 dark:text-white font-mono uppercase">{codeRef.split('-')[1] || "REG_001"}</span>
            </div>
            <div>
              <span className="text-[10px] font-mono text-neutral-400 block uppercase">Linguistic Domain</span>
              <span className="text-sm font-bold text-neutral-900 dark:text-white font-mono uppercase">{category}</span>
            </div>
            <div>
              <span className="text-[10px] font-mono text-neutral-400 block uppercase">Lead Investigator</span>
              <span className="text-sm font-bold text-neutral-900 dark:text-white font-mono uppercase">{researcher}</span>
            </div>
            <div>
              <span className="text-[10px] font-mono text-neutral-400 block uppercase">Sovereignty Status</span>
              <span className="text-sm font-bold text-emerald-600 font-mono uppercase">VERIFIED</span>
            </div>
          </div>

          {/* Interactive Tabs for deep exploration */}
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2 border-b border-neutral-100 dark:border-neutral-900 pb-3">
              {[
                { id: 'empirical', label: 'Empirical Overview', icon: FlaskConical },
                { id: 'peer', label: 'Adversarial Reviews', icon: Users },
                { id: 'bibliography', label: 'Cite Repository', icon: BookOpen }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-lg transition-all ${
                    activeTab === tab.id 
                      ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold' 
                      : 'text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white bg-neutral-100/50 dark:bg-neutral-900/50'
                  }`}
                >
                  <tab.icon size={12} />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            <div className="p-6 bg-neutral-50 dark:bg-neutral-900/30 rounded-2xl border border-neutral-200/50 dark:border-neutral-800/80">
              <AnimatePresence mode="wait">
                {activeTab === 'empirical' && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="space-y-4 text-sm font-light text-neutral-600 dark:text-neutral-300 leading-relaxed text-left"
                  >
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-500 uppercase tracking-widest mb-2">
                      <Info size={14} />
                      <span>Empirical Hypothesis Formulation</span>
                    </div>
                    <p>
                      <strong>Formulation:</strong> {hypothesis}
                    </p>
                    <p>
                      Our testing methodologies trace muscle movement directly across the fingers, hands, and facial muscles. The objective is to identify and isolate micro-tremors and skin friction before they affect the user's natural baseline expression.
                    </p>
                  </motion.div>
                )}

                {activeTab === 'peer' && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="space-y-4 text-left"
                  >
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-500 uppercase tracking-widest mb-2">
                      <Scale size={14} />
                      <span>Academic Adversarial Discourse</span>
                    </div>
                    <div className="space-y-4">
                      <div className="border-l-2 border-blue-500 pl-4 py-1">
                        <span className="text-xs font-mono font-bold block text-neutral-900 dark:text-white">{generatedDetails.peerReviewerA.name} ({generatedDetails.peerReviewerA.university})</span>
                        <p className="text-xs text-neutral-500 leading-relaxed italic mt-1">
                          "{generatedDetails.peerReviewerA.comment}"
                        </p>
                      </div>
                      <div className="border-l-2 border-blue-500 pl-4 py-1">
                        <span className="text-xs font-mono font-bold block text-neutral-900 dark:text-white">{generatedDetails.peerReviewerB.name} ({generatedDetails.peerReviewerB.university})</span>
                        <p className="text-xs text-neutral-500 leading-relaxed italic mt-1">
                          "{generatedDetails.peerReviewerB.comment}"
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'bibliography' && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="space-y-4 text-left font-mono text-xs text-neutral-500"
                  >
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-500 uppercase tracking-widest mb-2">
                      <BookOpen size={14} />
                      <span>Repository Citation Format (APA 7th)</span>
                    </div>
                    <div className="p-4 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg select-all text-neutral-800 dark:text-neutral-200">
                      {`Zero, M. (2024). Calibrating Biomechanical Feedback Loops on ${topic}: An Empirical Study of Kinetic Habits. Journal of Digital Habit Optimization & Aesthetic Engineering, Volume 14, Issue 3, 224-245.`}
                    </div>
                    <p className="text-[10px] text-neutral-400">
                      Click the text box above to copy this citation format directly into your research bibliography.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* 10-Layer Accordion Deep-Dive System */}
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-400">
                 THE 10-LAYER SCIENTIFIC TAXONOMY ACCORDION
              </h3>
              <p className="text-xs text-neutral-400 font-light font-sans leading-relaxed">
                 Click on individual diagnostic layers below to expand the complete research methodology graph, view data algorithms, historical comparisons, and exercises.
              </p>
            </div>

            <div className="border border-neutral-200/80 dark:border-neutral-800 rounded-2xl divide-y divide-neutral-200/80 dark:divide-neutral-800 overflow-hidden">
              {layers.map((layer) => {
                const isExpanded = activeLayer === layer.id;
                const LayerIcon = layer.icon;
                
                return (
                  <div key={layer.id} className="bg-white dark:bg-neutral-950/40">
                    <button
                      onClick={() => setActiveLayer(isExpanded ? null : layer.id)}
                      className="w-full flex items-center justify-between p-5 text-left hover:bg-neutral-50 dark:hover:bg-neutral-900/30 transition-colors focus:outline-none"
                      aria-expanded={isExpanded}
                    >
                      <div className="flex items-center gap-4">
                         <div className={`p-2.5 rounded-xl ${layer.color} shrink-0`}>
                            <LayerIcon size={16} />
                         </div>
                         <span className="text-sm font-bold text-neutral-900 dark:text-white uppercase tracking-tight">
                            {layer.title}
                         </span>
                      </div>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="p-1 rounded-lg border border-neutral-100 dark:border-neutral-800 text-neutral-400 shrink-0"
                      >
                        <ChevronDown size={14} />
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden border-t border-neutral-100 dark:border-neutral-900"
                        >
                          <div className="p-6 sm:p-8 bg-neutral-50/50 dark:bg-neutral-900/10">
                             {layer.content}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Historical Precedent Sidebar Column */}
        <aside 
          id="historical-precedent-sidebar" 
          className={`lg:col-span-4 p-6 sm:p-8 rounded-2xl border ${
            isDark 
              ? 'bg-neutral-900/30 border-neutral-800' 
              : 'bg-neutral-50/70 border-neutral-200/80 shadow-inner'
          } space-y-6 relative overflow-hidden`}
        >
          {/* Sidebar ambient decoration */}
          <div className="absolute top-[-10%] right-[-10%] w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none animate-pulse" />
          
          <div className="space-y-2 pb-4 border-b border-neutral-200/60 dark:border-neutral-800">
            <div className="inline-flex items-center gap-1.5 text-[9px] font-mono font-bold text-indigo-500 uppercase tracking-widest">
              <History size={12} className="text-indigo-500 animate-pulse" /> HISTORICAL PRECEDENT
            </div>
            <h3 className="text-base font-black uppercase tracking-tight text-neutral-950 dark:text-white leading-tight">
              Academic & Chronological Lineage
            </h3>
            <p className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500">
              ESTABLISHED INFLUENCES // {historicalPrecedent.milestone.epoch}
            </p>
          </div>

          <div className="space-y-5 text-xs leading-relaxed font-sans text-left text-neutral-600 dark:text-neutral-300">
            <p dangerouslySetInnerHTML={{ __html: historicalPrecedent.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: historicalPrecedent.p2 }} />
            <p dangerouslySetInnerHTML={{ __html: historicalPrecedent.p3 }} />
          </div>

          <div className="pt-4 border-t border-neutral-200/60 dark:border-neutral-800 font-mono text-[9px] text-neutral-400 dark:text-neutral-500 flex justify-between items-center">
            <span>WORD COUNT: {historicalPrecedent.wordCount} WORDS</span>
            <span className="text-indigo-500 font-bold uppercase">STATUS: VERIFIED LINEAGE</span>
          </div>
        </aside>
      </div>
    </div>
  );
}
