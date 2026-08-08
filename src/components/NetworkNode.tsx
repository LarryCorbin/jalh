import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Cpu, ShieldCheck, Activity, Eye, ExternalLink, Sparkles } from 'lucide-react';

interface NetworkEntity {
  domain: string;
  url: string;
  category: 'Hardware & Biometrics' | 'Somatic & Ergonomics' | 'System & Security' | 'Cognitive & Aesthetic';
  summary: string;
}

const NETWORK_ENTITIES: NetworkEntity[] = [
  {
    domain: "kataf.com",
    url: "https://kataf.com",
    category: "Hardware & Biometrics",
    summary: "High-precision physical coordinate calibration node tracking tactile force feedback and mechanical alignment vectors."
  },
  {
    domain: "biofail.com",
    url: "https://biofail.com",
    category: "System & Security",
    summary: "Advanced biometric verification database registering fault logs and physical tracking identification anomalies."
  },
  {
    domain: "evercove.com",
    url: "https://evercove.com",
    category: "System & Security",
    summary: "Cognitive sanctuary modeling secure data vaults and structural integrity for critical research nodes."
  },
  {
    domain: "xnui.com",
    url: "https://xnui.com",
    category: "Hardware & Biometrics",
    summary: "Neural-interface user interaction laboratory optimizing cranial-spinal resonance during tactile navigation."
  },
  {
    domain: "subhauler.com",
    url: "https://subhauler.com",
    category: "System & Security",
    summary: "Kinetic transfer logistics and high-volume data stream subhauling systems built under supervisional protocols."
  },
  {
    domain: "swan.nyc",
    url: "https://swan.nyc",
    category: "Cognitive & Aesthetic",
    summary: "Clinical research committee and aesthetic standard registry auditing structural symmetry and posture integrity."
  },
  {
    domain: "starkindle.com",
    url: "https://starkindle.com",
    category: "Hardware & Biometrics",
    summary: "Tactile luminosity calibration engine adjusting dynamic visual thresholds on high-frequency screen surfaces."
  },
  {
    domain: "slabform.com",
    url: "https://slabform.com",
    category: "Hardware & Biometrics",
    summary: "Micro-seismic vibration dampening deck modeling planar kinetic equilibrium for hardware testing stations."
  },
  {
    domain: "repulink.com",
    url: "https://repulink.com",
    category: "System & Security",
    summary: "Behavioral threat analysis gateway and security reputation auditing system for decentralised nodes."
  },
  {
    domain: "releafcanna.com",
    url: "https://releafcanna.com",
    category: "Somatic & Ergonomics",
    summary: "Relaxation clinical profile register monitoring somatic alignment during physical decompression states."
  },
  {
    domain: "quinetix.com",
    url: "https://quinetix.com",
    category: "Hardware & Biometrics",
    summary: "Structural dynamics simulator rendering real-time torque and joint motion tracking under complex load-bearing scenarios."
  },
  {
    domain: "omachines.com",
    url: "https://omachines.com",
    category: "Hardware & Biometrics",
    summary: "Organic mechanics integration platform bridging cybernetic systems and raw human kinetic outputs."
  },
  {
    domain: "neaner.com",
    url: "https://neaner.com",
    category: "Somatic & Ergonomics",
    summary: "Micro-expression reflex loop analysis registering facial micro-movements to preserve neutral-aesthetic baselines."
  },
  {
    domain: "plano.cc",
    url: "https://plano.cc",
    category: "Somatic & Ergonomics",
    summary: "Planar geometry calculation and micro-grid layout calibration for high-density capacitive glass displays."
  },
  {
    domain: "muzcast.com",
    url: "https://muzcast.com",
    category: "Cognitive & Aesthetic",
    summary: "Acoustic sensory frequency modulation generating calming ambient audio waves to lower somatic anxiety."
  },
  {
    domain: "musetrap.com",
    url: "https://musetrap.com",
    category: "Cognitive & Aesthetic",
    summary: "Cognitive capture systems and cognitive load testing platforms measuring focus endurance under high-intensity stress."
  },
  {
    domain: "mud.cc",
    url: "https://mud.cc",
    category: "System & Security",
    summary: "Decentralized database registry and semantic permission layer for low-level cryptographic protocol namespaces."
  },
  {
    domain: "liquifilm.com",
    url: "https://liquifilm.com",
    category: "Hardware & Biometrics",
    summary: "Chemically-treated silicate protective screen matrices maintaining uniform friction coefficients on touchscreens."
  },
  {
    domain: "linkwhore.com",
    url: "https://linkwhore.com",
    category: "System & Security",
    summary: "Crawler path traversal analysis tracking index-crawler behavioral stress and semantic permanence models."
  },
  {
    domain: "kundalink.com",
    url: "https://kundalink.com",
    category: "Somatic & Ergonomics",
    summary: "Somatic breathing rhythm registers and vital energy flow sensors aligning pranic state dynamics with postural baselines."
  },
  {
    domain: "rubulad.com",
    url: "https://rubulad.com",
    category: "Somatic & Ergonomics",
    summary: "Coordinate movement coordination and cybernetic body kinetics analyzing spatial tracking of limb movements."
  },
  {
    domain: "jailsoft.com",
    url: "https://jailsoft.com",
    category: "System & Security",
    summary: "Somatic restraint monitoring software assessing physical tension thresholds during extreme deep-focus tasks."
  },
  {
    domain: "izpe.com",
    url: "https://izpe.com",
    category: "Hardware & Biometrics",
    summary: "Digital signal micro-controllers and high-frequency sensory capture platforms for biometric input devices."
  },
  {
    domain: "holograph.cc",
    url: "https://holograph.cc",
    category: "Cognitive & Aesthetic",
    summary: "Volumetric projection calibration rendering 3D spatial representations of anatomical alignment."
  },
  {
    domain: "grzu.com",
    url: "https://grzu.com",
    category: "Hardware & Biometrics",
    summary: "Hardware tactile pressure sensor systems mapping precise physical tap velocity and force thresholds."
  },
  {
    domain: "fprza.cc",
    url: "https://fprza.cc",
    category: "Hardware & Biometrics",
    summary: "Kinetic acceleration measurement tools documenting manual gesture velocity and terminal finger deceleration."
  },
  {
    domain: "fockstate.com",
    url: "https://fockstate.com",
    category: "System & Security",
    summary: "Quantum-level probability templates modeling static physical state matrices and biometric balance equations."
  },
  {
    domain: "eleganttaste.com",
    url: "https://eleganttaste.com",
    category: "Cognitive & Aesthetic",
    summary: "Artistic alignment parameters and aesthetic evaluation models preserving high-trust visual presentations."
  },
  {
    domain: "chosenspot.com",
    url: "https://chosenspot.com",
    category: "Cognitive & Aesthetic",
    summary: "Spatial positioning optimization mapping exact center points for high-precision tactile interaction."
  },
  {
    domain: "calgro.com",
    url: "https://calgro.com",
    category: "Somatic & Ergonomics",
    summary: "Postural recovery tracking platform calibrating muscle fatigue and forward-leaning spine degradation."
  },
  {
    domain: "boobclub.com",
    url: "https://boobclub.com",
    category: "Somatic & Ergonomics",
    summary: "Biomechanical chest muscle symmetry recovery modeling optimal pectoral and postural alignment."
  },
  {
    domain: "bioalbra.com",
    url: "https://bioalbra.com",
    category: "Hardware & Biometrics",
    summary: "The biological foundations of biometric stress mitigation and somatic habit extraction registries."
  },
  {
    domain: "beamspread.com",
    url: "https://beamspread.com",
    category: "Hardware & Biometrics",
    summary: "High-precision optic refraction measuring gaze dispersion and focal coordinate patterns."
  },
  {
    domain: "allurebot.com",
    url: "https://allurebot.com",
    category: "Cognitive & Aesthetic",
    summary: "Aesthetic cohort tracking analyzing target user response velocity to standardized visual stimulus models."
  },
  {
    domain: "aleph.cc",
    url: "https://aleph.cc",
    category: "System & Security",
    summary: "Mathematical proof validators and semantic verification protocols for cognitive coordination networks."
  },
  {
    domain: "619.me",
    url: "https://619.me",
    category: "System & Security",
    summary: "Dynamic signal tracking node measuring micro-seismic behavioral calibration vectors."
  },
  {
    domain: "430.me",
    url: "https://430.me",
    category: "System & Security",
    summary: "Biometric signal calibration registry tracking crawler latency and namespace security integrity."
  },
  {
    domain: "092.me",
    url: "https://092.me",
    category: "System & Security",
    summary: "Signal trace tracking register documenting high-frequency physical muscle recovery times."
  }
];

// Map exact paths to specific domains to distribute them subtly 1-to-1
const PATH_MAP: Record<string, string> = {
  "/methodology": "kataf.com",
  "/kinetic-analysis": "biofail.com",
  "/logs": "evercove.com",
  "/logs/alpha": "xnui.com",
  "/archive": "subhauler.com",
  "/lexicon": "swan.nyc",
  "/partnership": "starkindle.com",
  "/legal": "slabform.com",
  "/infrastructure": "repulink.com",
  "/behavioral-index": "releafcanna.com",
  "/personnel": "quinetix.com",
  "/about-member-zero": "omachines.com",
  "/history": "neaner.com",
  "/domain-gateway": "plano.cc",
  "/metrics": "muzcast.com",
  "/lab": "musetrap.com",
  "/vision": "mud.cc",
  "/press": "liquifilm.com",
  "/api-docs": "linkwhore.com",
  "/digit-interaction": "kundalink.com",
  "/authority": "rubulad.com",
  "/contact": "jailsoft.com",
  "/feelize-web-design": "izpe.com",
  "/category/kinetic": "holograph.cc",
  "/category/aesthetic": "grzu.com",
  "/category/infrastructure-personnel": "fprza.cc",
  "/services/interactive-experience-design": "fockstate.com",
  "/services/semantic-seo-domination": "eleganttaste.com",
  "/services/digital-identity-stabilization": "chosenspot.com",
  "/services/semantic-seo-domination/deep-crawl": "calgro.com",
  "/services/semantic-seo-domination/schema-graph": "boobclub.com",
  "/services/semantic-seo-domination/rendering-fallback": "bioalbra.com",
  "/services/interactive-experience-design/tactile-physics": "beamspread.com",
  "/services/interactive-experience-design/spring-coefficient": "allurebot.com",
  "/services/interactive-experience-design/swiss-grid": "aleph.cc",
  "/services/digital-identity-stabilization/persona-masking": "619.me",
  "/services/digital-identity-stabilization/aesthetic-harmony": "430.me",
  "/services/digital-identity-stabilization/brand-seal": "092.me"
};

export default function NetworkNode() {
  const location = useLocation();

  // Retrieve assigned entity deterministically by pathname to guarantee subtle 1-to-1 linkage
  const assignedEntity = useMemo(() => {
    const path = location.pathname;
    const mappedDomain = PATH_MAP[path];
    
    if (mappedDomain) {
      return NETWORK_ENTITIES.find(e => e.domain === mappedDomain);
    }

    // Fallback: stable hashing based on path to select exactly one domain
    let hash = 0;
    for (let i = 0; i < path.length; i++) {
      hash = path.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash) % NETWORK_ENTITIES.length;
    return NETWORK_ENTITIES[index];
  }, [location.pathname]);

  if (!assignedEntity) return null;

  return (
    <div 
      id="node-subtle-integration"
      className="my-8 p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl text-left max-w-3xl font-sans relative overflow-hidden shadow-sm hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-neutral-100/50 dark:bg-neutral-800/10 rounded-full blur-2xl pointer-events-none" />
      <div className="flex gap-4 items-start relative z-10">
        <div className="p-2.5 bg-neutral-50 dark:bg-neutral-800 rounded-xl shrink-0 text-neutral-500 dark:text-neutral-400 border border-neutral-200/50 dark:border-neutral-700/50">
          {assignedEntity.category === 'Hardware & Biometrics' && <Cpu size={16} className="text-blue-500" />}
          {assignedEntity.category === 'System & Security' && <ShieldCheck size={16} className="text-emerald-500" />}
          {assignedEntity.category === 'Somatic & Ergonomics' && <Activity size={16} className="text-rose-500" />}
          {assignedEntity.category === 'Cognitive & Aesthetic' && <Sparkles size={16} className="text-indigo-500" />}
        </div>
        <div className="space-y-1">
          <span className="text-[9px] font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-[0.2em] block font-bold">
            {assignedEntity.category} // JALH PARTNER INTEGRATION
          </span>
          <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-light font-sans">
            This node is synchronized with the external registry at{' '}
            <a 
              href={assignedEntity.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 dark:text-blue-400 font-bold hover:underline inline-flex items-center gap-0.5"
            >
              {assignedEntity.domain} <ExternalLink size={10} />
            </a>
            . {assignedEntity.summary}
          </p>
        </div>
      </div>
    </div>
  );
}
