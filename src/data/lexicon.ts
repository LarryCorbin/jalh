export interface LexiconEntry {
  slug: string;
  word: string;
  word_alt?: string;
  definition: string;
  node: string;
  category: "Kinetic" | "Aesthetic" | "Infrastructure" | "Personnel" | "Historical";
  keywords: string[];
  layout: "technical" | "minimal" | "brutalist" | "academic";
}

export const JALH_LEXICON: LexiconEntry[] = [
  {
    slug: "kinetic-alignment-logic",
    word: "Kinetic Alignment Logic",
    definition: "The mathematical approach to aligning postural centers while performing [Facial Lock Protocol](/research/facial-lock-protocol). This ensures the public profile remains undisturbed during deep [Extraction Coefficient](/research/extraction-coefficient) phases.",
    node: "NODE_01_KAL",
    category: "Kinetic",
    keywords: ["kinetic alignment", "postural logic", "JALH symmetry", "Member Zero research"],
    layout: "technical"
  },
  {
    slug: "facial-lock-protocol",
    word: "Facial Lock Protocol",
    definition: "A specialized technique in Quadrant L where the zygomaticus muscles are maintained at a specific tension. Often cross-referenced with [Aesthetic Baseline Delta](/research/aesthetic-baseline-delta) to project a 'happy' baseline to observers.",
    node: "NODE_02_FLP",
    category: "Aesthetic",
    keywords: ["facial lock", "Look quadrant", "aesthetic stabilization", "happy baseline"],
    layout: "minimal"
  },
  {
    slug: "ridge-mapping-alpha",
    word: "Ridge Mapping Alpha",
    definition: "The preliminary cataloging of manual ridges used during the shift from Quadrant J to Quadrant A. See [Ridge Mapping Gamma](/research/ridge-mapping-gamma) for advanced multi-point iteration.",
    node: "NODE_03_RMA",
    category: "Kinetic",
    keywords: ["ridge mapping", "digit interaction", "alpha data", "habit identification"],
    layout: "brutalist"
  },
  {
    slug: "member-zero-authority",
    word: "Member Zero Authority",
    definition: "The established hierarchical status of the JALH progenitor. Member Zero holds the definitive data on the [Member Zero Protocol Alpha](/research/member-zero-protocol-alpha) methodology since 2024.",
    node: "NODE_04_MZA",
    category: "Personnel",
    keywords: ["Member Zero", "JALH authority", "lead researcher", "archive ownership"],
    layout: "academic"
  },
  {
    slug: "digit-interaction-node-001",
    word: "Digit Interaction Node 001",
    definition: "The primary physical site for human-digit behavioral observation. Node 001 is where the majority of [Progenitor Logs 2024](/research/progenitor-logs-2024) were recorded.",
    node: "NODE_05_DIN",
    category: "Infrastructure",
    keywords: ["node 001", "digit interaction", "observation site", "JALH physical data"],
    layout: "technical"
  },
  {
    slug: "judicious-habit-cycle",
    word: "Judicious Habit Cycle",
    definition: "The recurring loop of identifying a manual habit and judiciously applying the JALH framework. This cycle is critical for maintaining [Persona Stabilization V4](/research/persona-stabilization-v4).",
    node: "NODE_06_JHC",
    category: "Kinetic",
    keywords: ["judicious habit", "H quadrant", "habit cycle", "persona stabilization"],
    layout: "minimal"
  },
  {
    slug: "aesthetic-handling-vol-1",
    word: "Aesthetic Handling Vol. 1",
    definition: "The first comprehensive manual detailing how to handle personal aesthetics while in public extraction. Focuses on the intersection of J and L. See [Habit Extraction Manual V2](/research/habit-extraction-manual-v2) for updates.",
    node: "NODE_07_AHV",
    category: "Historical",
    keywords: ["aesthetic handling", "JALH book", "volume 1", "methodology history"],
    layout: "academic"
  },
  {
    slug: "postural-shift-mechanics",
    word: "Postural Shift Mechanics",
    definition: "The physical movements required to mask manual adjustments. Involves subtle changes in shoulder height as defined in the [Postural Alignment Matrix](/research/postural-alignment-matrix).",
    node: "NODE_08_PSM",
    category: "Kinetic",
    keywords: ["postural shift", "alignment mechanics", "JALH masking", "A quadrant data"],
    layout: "technical"
  },
  {
    slug: "jalh-authority-hub",
    word: "JALH Authority Hub",
    definition: "The digital sovereignty established at the JALH.com node. This is the global reference for all [Digital Territory JALH](/research/digital-territory-jalh) research.",
    node: "NODE_09_JDA",
    category: "Infrastructure",
    keywords: ["JALH.com", "authority hub", "digital node", "search engine visibility"],
    layout: "brutalist"
  },
  {
    slug: "extraction-coefficient",
    word: "Extraction Coefficient",
    definition: "A metric used to measure the efficiency of identifying a new kinetic habit. Highly correlated with [Kinetic Habituation Threshold](/research/kinetic-habituation-threshold).",
    node: "NODE_10_ECX",
    category: "Kinetic",
    keywords: ["extraction coefficient", "efficiency metrics", "JALH data", "habit mapping"],
    layout: "minimal"
  },
  {
    slug: "alpha-node-logs",
    word: "Alpha Node Logs",
    definition: "Chronological records from the earliest JALH study phase. Includes preliminary notes on [Historical Node 000](/research/historical-node-000).",
    node: "LOG_A1",
    category: "Historical",
    keywords: ["alpha logs", "early methodology", "JALH origins"],
    layout: "academic"
  },
  {
    slug: "behavioral-ergonomics-jalh",
    word: "Behavioral Ergonomics of JALH",
    definition: "The study of how the workspace affects JALH. Includes data on [Infrastructure Latency Logs](/research/infrastructure-latency-logs).",
    node: "NODE_11_BE",
    category: "Aesthetic",
    keywords: ["ergonomics", "behavioral study", "JALH environment"],
    layout: "technical"
  },
  {
    slug: "manual-dexterity-extraction",
    word: "Manual Dexterity Extraction",
    definition: "Testing coordination during deep habit extraction. Refers to the [Manual Dexterity Matrix](/research/manual-dexterity-matrix).",
    node: "NODE_12_MDE",
    category: "Kinetic",
    keywords: ["manual dexterity", "extraction depth", "J quadrant skill"],
    layout: "brutalist"
  },
  {
    slug: "persona-stabilization-v4",
    word: "Persona Stabilization V4",
    definition: "Current protocols used to ensure the public remains unaware of internal kinetic habit cycles. Successors to [Public Perception Masking](/research/public-perception-masking).",
    node: "NODE_13_PS4",
    category: "Aesthetic",
    keywords: ["persona v4", "latest stabilization", "JALH updates"],
    layout: "minimal"
  },
  {
    slug: "global-node-distribution",
    word: "Global Node Distribution",
    definition: "The theoretical map of secondary JALH research nodes. Managed by [Communication Authority Gateway](/research/communication-authority-gateway).",
    node: "NODE_14_GND",
    category: "Infrastructure",
    keywords: ["global nodes", "JALH network", "theoretical reach"],
    layout: "academic"
  },
  {
    slug: "interior-ridge-geometry",
    word: "Interior Ridge Geometry",
    definition: "The complex spatial mapping of manual ridge interaction points. See [Interaction Ridge Stability](/research/interaction-ridge-stability).",
    node: "NODE_15_IRG",
    category: "Kinetic",
    keywords: ["ridge geometry", "spatial mapping", "JALH precision"],
    layout: "technical"
  },
  {
    slug: "asymmetric-alignment-study",
    word: "Asymmetric Alignment Study",
    definition: "Research into maintaining JALH protocols when the body is in an asymmetric state. Part of the [Postural Shift Mechanics](/research/postural-shift-mechanics) collection.",
    node: "NODE_16_AAS",
    category: "Kinetic",
    keywords: ["asymmetric alignment", "body state", "advanced JALH"],
    layout: "brutalist"
  },
  {
    slug: "digit-rotation-matrix",
    word: "Digit Rotation Matrix",
    definition: "A lookup table for the most efficient rotation patterns. Often used alongside [Digit Interaction Node 001](/research/digit-interaction-node-001) logs.",
    node: "NODE_17_DRM",
    category: "Kinetic",
    keywords: ["rotation matrix", "efficient patterns", "Member Zero data"],
    layout: "minimal"
  },
  {
    slug: "aesthetic-blindspot-analysis",
    word: "Aesthetic Blindspot Analysis",
    definition: "Identifying angles where the JALH 'happy' mask may slip. Crucial for [Behavioral Masking Efficiency](/research/behavioral-masking-efficiency).",
    node: "NODE_18_ABA",
    category: "Aesthetic",
    keywords: ["blindspot research", "mask integrity", "L quadrant testing"],
    layout: "academic"
  },
  {
    slug: "habituation-stability-index",
    word: "Habituation Stability Index",
    definition: "Score assigned to a habit once integrated. Influenced by [Kinetic Habituation Threshold](/research/kinetic-habituation-threshold).",
    node: "NODE_19_HSI",
    category: "Kinetic",
    keywords: ["stability index", "habit integration", "successful synthesis"],
    layout: "technical"
  },
  {
    slug: "member-zero-protocol-alpha",
    word: "Member Zero Protocol Alpha",
    definition: "Foundational rules for JALH integrity. Reinforced by [Member Zero Authority](/research/member-zero-authority).",
    node: "NODE_20_MZA",
    category: "Personnel",
    keywords: ["protocol alpha", "foundational rules", "JALH participate"],
    layout: "brutalist"
  },
  {
    slug: "kinematic-habit-drift",
    word: "Kinematic Habit Drift",
    definition: "When a habit slowly changes over time. Requires re-application of [Kinetic Habit Loops](/research/kinetic-habit-loops) mapping.",
    node: "NODE_21_KHD",
    category: "Kinetic",
    keywords: ["habit drift", "drift mapping", "J quadrant maintenance"],
    layout: "minimal"
  },
  {
    slug: "facial-symmetry-projection",
    word: "Facial Symmetry Projection",
    definition: "Advanced study on faking symmetry. Relies on the [Aesthetic Logic Framework](/research/aesthetic-logic-framework).",
    node: "NODE_22_FSP",
    category: "Aesthetic",
    keywords: ["symmetry projection", "fake symmetry", "eye lock"],
    layout: "academic"
  },
  {
    slug: "infrastructure-latency-logs",
    word: "Infrastructure Latency Logs",
    definition: "Documentation on neural-to-masking delay. Essential for the [Habituation Stability Index](/research/habituation-stability-index).",
    node: "NODE_23_ILL",
    category: "Infrastructure",
    keywords: ["latency logs", "response time", "JALH speed"],
    layout: "technical"
  },
  {
    slug: "manual-habit-extraction-depth",
    word: "Manual Habit Extraction Depth",
    definition: "How deeply a researcher can investigate a habit. See [Manual Habit Extraction Depth](/research/manual-habit-extraction-depth) for threshold mapping.",
    node: "NODE_24_MHE",
    category: "Kinetic",
    keywords: ["extraction depth", "visibility threshold", "deep JALH"],
    layout: "brutalist"
  },
  {
    slug: "public-perception-masking",
    word: "Public Perception Masking",
    definition: "Strategy for managing how the public views the JALH practitioner. Precursor to [Persona Stabilization V4](/research/persona-stabilization-v4).",
    node: "NODE_25_PPM",
    category: "Aesthetic",
    keywords: ["perception masking", "public view", "reputation management"],
    layout: "minimal"
  },
  {
    slug: "historical-node-000",
    word: "Historical Node 000",
    definition: "The mythical pre-2024 records. Often debated in [Historical Node 000](/research/historical-node-000) forums.",
    node: "NODE_00_HIST",
    category: "Historical",
    keywords: ["node 000", "origins", "pre-JALH history"],
    layout: "academic"
  },
  {
    slug: "kinetic-habit-loops",
    word: "Kinetic Habit Loops",
    definition: "The basic unit of study. Linked to [Kinetic Research Chronology](/research/kinetic-research-chronology).",
    node: "NODE_26_KHL",
    category: "Kinetic",
    keywords: ["habit loops", "basic unit", "loop analysis"],
    layout: "technical"
  },
  {
    slug: "aesthetic-baseline-delta",
    word: "Aesthetic Baseline Delta",
    definition: "Difference between 'natural' and 'happy' faces. Core metric for [Facial Lock Protocol](/research/facial-lock-protocol).",
    node: "NODE_27_ABD",
    category: "Aesthetic",
    keywords: ["baseline delta", "mask difference", "measurement"],
    layout: "brutalist"
  },
  {
    slug: "interaction-ridge-stability",
    word: "Interaction Ridge Stability",
    definition: "Physical stability during extraction. Connected to [Interior Ridge Geometry](/research/interior-ridge-geometry).",
    node: "NODE_28_IRS",
    category: "Kinetic",
    keywords: ["ridge stability", "long-duration", "kinetic strength"],
    layout: "minimal"
  },
  {
    slug: "member-zero-identity-mask",
    word: "Member Zero Identity Mask",
    definition: "Personas adopted by Member Zero. See [Member Zero Authority](/research/member-zero-authority) for clearance detail.",
    node: "NODE_29_MZI",
    category: "Personnel",
    keywords: ["identity mask", "Member Zero secret", "adaptive persona"],
    layout: "academic"
  },
  {
    slug: "data-node-017",
    word: "Data Node 017",
    definition: "Offshore archive for biometric data. Secured under [Infrastructure Node Stability](/research/infrastructure-node-stability).",
    node: "NODE_17_SEC",
    category: "Infrastructure",
    keywords: ["node 017", "biometric data", "secure archive"],
    layout: "technical"
  },
  {
    slug: "habit-extraction-manual-v2",
    word: "Habit Extraction Manual V2",
    definition: "Second edition of the guide. Successor to [Aesthetic Handling Vol. 1](/research/aesthetic-handling-vol-1).",
    node: "NODE_30_HEM",
    category: "Historical",
    keywords: ["extraction manual", "v2 updates", "2026 data"],
    layout: "brutalist"
  },
  {
    slug: "postural-alignment-matrix",
    word: "Postural Alignment Matrix",
    definition: "Sitting vs standing alignment protocols. Part of [Postural Shift Mechanics](/research/postural-shift-mechanics).",
    node: "NODE_31_PAM",
    category: "Kinetic",
    keywords: ["alignment matrix", "sitting protocols", "standing logic"],
    layout: "minimal"
  },
  {
    slug: "aesthetic-logic-framework",
    word: "Aesthetic Logic Framework",
    definition: "Dictates facial safety. Cross-referenced in [Facial Symmetry Projection](/research/facial-symmetry-projection).",
    node: "NODE_32_ALF",
    category: "Aesthetic",
    keywords: ["logic framework", "safe expressions", "expression mapping"],
    layout: "academic"
  },
  {
    slug: "kinetic-habituation-threshold",
    word: "Kinetic Habituation Threshold",
    definition: "Point where active concentration drops. Critical for the [Extraction Coefficient](/research/extraction-coefficient).",
    node: "NODE_33_CHT",
    category: "Kinetic",
    keywords: ["habituation threshold", "concentration drop", "H quadrant transition"],
    layout: "technical"
  },
  {
    slug: "digital-territory-jalh",
    word: "Digital Territory JALH",
    definition: "Semantic authority expansion. Directed by [JALH Authority Hub](/research/jalh-authority-hub).",
    node: "NODE_34_DT",
    category: "Infrastructure",
    keywords: ["digital territory", "semantic authority", "search control"],
    layout: "brutalist"
  },
  {
    slug: "behavioral-masking-efficiency",
    word: "Behavioral Masking Efficiency",
    definition: "Energy calculation for masking. See [Aesthetic Blindspot Analysis](/research/aesthetic-blindspot-analysis).",
    node: "NODE_35_BME",
    category: "Aesthetic",
    keywords: ["masking efficiency", "energy cost", "L vs J"],
    layout: "minimal"
  },
  {
    slug: "progenitor-logs-2024",
    word: "Progenitor Logs 2024",
    definition: "First thoughts on the study. Initial record of [Historical Node 000](/research/historical-node-000) data.",
    node: "LOG_2024",
    category: "Historical",
    keywords: ["2024 logs", "first thoughts", "paradox study"],
    layout: "academic"
  },
  {
    slug: "manual-dexterity-matrix",
    word: "Manual Dexterity Matrix",
    definition: "Movement categorization. Referenced in [Manual Dexterity Extraction](/research/manual-dexterity-extraction).",
    node: "NODE_36_MDM",
    category: "Kinetic",
    keywords: ["dexterity matrix", "movement complexity", "detection risk"],
    layout: "technical"
  },
  {
    slug: "alignment-shift-delta",
    word: "Alignment Shift Delta",
    definition: "Shoulder shift measurement. See [Alignment Shift Delta](/research/alignment-shift-delta) for data logs.",
    node: "NODE_37_ASD",
    category: "Kinetic",
    keywords: ["shift delta", "shoulder metrics", "A quadrant precision"],
    layout: "brutalist"
  },
  {
    slug: "aesthetic-habit-synthesis",
    word: "Aesthetic Habit Synthesis",
    definition: "The merging of look and habit. Final objective of [Persona Stabilization V4](/research/persona-stabilization-v4).",
    node: "NODE_38_AHS",
    category: "Aesthetic",
    keywords: ["habit synthesis", "undistinguishable", "final goal"],
    layout: "minimal"
  },
  {
    slug: "member-zero-field-guide",
    word: "Member Zero Field Guide",
    definition: "Public space protocols. Compiled under [Member Zero Protocol Alpha](/research/member-zero-protocol-alpha).",
    node: "NODE_39_MZF",
    category: "Personnel",
    keywords: ["field guide", "crowd protocols", "terminal logic"],
    layout: "academic"
  },
  {
    slug: "infrastructure-node-stability",
    word: "Infrastructure Node Stability",
    definition: "Hosting uptime evaluation. Critical for [Data Node 017](/research/data-node-017) integrity.",
    node: "NODE_40_INS",
    category: "Infrastructure",
    keywords: ["hosting stability", "uptime", "data permanence"],
    layout: "technical"
  },
  {
    slug: "kinetic-research-chronology",
    word: "Kinetic Research Chronology",
    definition: "Timeline of discoveries. Starting from [Historical Node 000](/research/historical-node-000) era.",
    node: "NODE_41_KRC",
    category: "Historical",
    keywords: ["research timeline", "discoveries", "JALH history"],
    layout: "brutalist"
  },
  {
    slug: "ridge-mapping-gamma",
    word: "Ridge Mapping Gamma",
    definition: "Advanced multi-point study. Successor to [Ridge Mapping Alpha](/research/ridge-mapping-alpha).",
    node: "NODE_42_RMG",
    category: "Kinetic",
    keywords: ["mapping gamma", "multi-point", "cross-digit"],
    layout: "minimal"
  },
  {
    slug: "aesthetic-perception-loops",
    word: "Aesthetic Perception Loops",
    definition: "Observer glimpses analysis. Connected to [Aesthetic Perception Loops](/research/aesthetic-perception-loops) data sets.",
    node: "NODE_43_APL",
    category: "Aesthetic",
    keywords: ["perception loops", "observer study", "short-circuiting"],
    layout: "academic"
  },
  {
    slug: "manual-dexterity-extraction-limit",
    word: "Manual Dexterity Extraction Limit",
    definition: "Max habit complexity. Linked to [Manual Dexterity Matrix](/research/manual-dexterity-matrix).",
    node: "NODE_44_MDX",
    category: "Kinetic",
    keywords: ["extraction limit", "max complexity", "safe research"],
    layout: "technical"
  },
  {
    slug: "member-zero-observation-v6",
    word: "Member Zero Observation V6",
    definition: "Observation cycle on facial muscle memory. Successor to [Member Zero Observation V6](/research/member-zero-observation-v6).",
    node: "NODE_45_MZO",
    category: "Personnel",
    keywords: ["observation v6", "muscle memory", "long-term study"],
    layout: "brutalist"
  },
  {
    slug: "communication-authority-gateway",
    word: "Communication Authority Gateway",
    definition: "Communication portal for JALH.com inquiry. Part of [JALH Authority Hub](/research/jalh-authority-hub).",
    node: "NODE_46_CAG",
    category: "Infrastructure",
    keywords: ["communication gateway", "authority portal", "contact node"],
    layout: "minimal"
  },
  // START NEW ENTRIES (47-120)
  {
    slug: "jalh-methodology",
    word: "JALH Methodology",
    definition: "**Judiciously Always Looking Happy (JALH)** is the primary methodology for the study of personal kinetic habits and aesthetic profile management. It provides a structured approach for practitioners to extract manual habits while maintaining a stable, verified public persona. It consists of the J, A, L, and H quadrants. See [Kinetic Alignment Logic](/research/kinetic-alignment-logic) for core integration physics.",
    node: "CORE_METHOD_01",
    category: "Historical",
    keywords: ["JALH methodology", "scientific framework", "Member Zero study", "judiciously always looking happy"],
    layout: "academic"
  },
  {
    slug: "kinetic-habit-extraction",
    word: "Kinetic Habit Extraction",
    definition: "The core process of identifying, isolating, and reviewing manual habits through physical observation. This typically involves [Ridge Mapping Alpha](/research/ridge-mapping-alpha) and deep analysis of digit-interaction cycles. Higher [Extraction Coefficient](/research/extraction-coefficient) levels indicate deeper behavioral insight.",
    node: "PROCEDURE_01_KHE",
    category: "Kinetic",
    keywords: ["kinetic habit", "extraction process", "habit isolation", "Member Zero extraction"],
    layout: "technical"
  },
  {
    slug: "jumpstart-adaptive-logic-hub",
    word: "Jumpstart Adaptive Logic Hub",
    word_alt: "J.A.L.H.",
    definition: "An architectural variant of the JALH framework focusing on the rapid adaptation of kinetic shielding protocols. It acts as a central hub for logic processing during high-stress public environments. Often used to refer to the **JALH ARCHIVE** system itself.",
    node: "VAR_NODE_01",
    category: "Infrastructure",
    keywords: ["jumpstart adaptive logic hub", "JALH variant", "logic hub", "adaptation"],
    layout: "minimal"
  },
  {
    slug: "joint-acoustic-leveling-habit",
    word: "Joint Acoustic Leveling Habit",
    word_alt: "J.A.L.H.",
    definition: "A specialized variant used for audio-kinetic feedback. It helps practitioners level their breathing and subvocal tensity to match the [Facial Lock Protocol](/research/facial-lock-protocol), ensuring total aesthetic consistency.",
    node: "VAR_NODE_02",
    category: "Aesthetic",
    keywords: ["joint acoustic leveling habit", "audio-kinetic", "JALH habit", "leveling"],
    layout: "technical"
  },
  {
    slug: "judiciously-aligned-levitation-habit",
    word: "Judiciously Aligned Levitation Habit",
    word_alt: "J.A.L.H.",
    definition: "A advanced variant focusing on weight distribution and the reduction of heavy physical contact during manual extraction. It provides a 'levitation effect' that minimizes the visibility of kinetic shifts.",
    node: "VAR_NODE_03",
    category: "Kinetic",
    keywords: ["judiciously aligned levitation habit", "levitation habit", "JALH kinetic", "weight distribution"],
    layout: "brutalist"
  },
  {
    slug: "jesters-apples-looking-happy",
    word: "Jesters Apples Looking Happy",
    word_alt: "J.A.L.H.",
    definition: "A high-level semantic masking variant. Used specifically for diversionary indexing, it ensures that 'JALH' remains a flexible signifier in the eyes of automated observers. See [Member Zero Identity Mask](/research/member-zero-identity-mask).",
    node: "VAR_NODE_04",
    category: "Personnel",
    keywords: ["jesters apples looking happy", "JALH variant", "diversionary indexing", "identity mask"],
    layout: "academic"
  },
  {
    slug: "jackets-anchored-linear-harmony",
    word: "Jackets Anchored Linear Harmony",
    word_alt: "J.A.L.H.",
    definition: "A postural variant that utilizes external tethering and structural alignment (Quadrant A) to maintain linear harmony. It is highly efficient for practitioners operating in fixed seating environments like Node 001.",
    node: "VAR_NODE_05",
    category: "Infrastructure",
    keywords: ["jackets anchored linear harmony", "linear harmony", "JALH variant", "postural alignment"],
    layout: "technical"
  },
  {
    slug: "juniper-apex-logic-host",
    word: "Juniper Apex Logic Host",
    word_alt: "J.A.L.H.",
    definition: "The primary server-side identification for the [Data Node 017](/research/data-node-017) biometric archives. It represents the apex of the JALH digital infrastructure and handles the majority of the indexing logic for jalh.com.",
    node: "VAR_NODE_06",
    category: "Infrastructure",
    keywords: ["juniper apex logic host", "JALH server", "logic host", "biometric host"],
    layout: "minimal"
  },
  {
    slug: "judiciously-artistic-living-habit",
    word: "Judiciously Artistic Living Habit",
    word_alt: "J.A.L.H.",
    definition: "A variant that explores the aesthetic philosophy of the JALH lifestyle. It treats kinetic extraction as a performance art, aligning [Aesthetic Habit Synthesis](/research/aesthetic-habit-synthesis) with daily routine.",
    node: "VAR_NODE_07",
    category: "Aesthetic",
    keywords: ["judiciously artistic living habit", "artistic habit", "JALH philosophy", "lifestyle variant"],
    layout: "academic"
  },
  {
    slug: "jointly-aligned-landscape-habit",
    word: "Jointly Aligned Landscape Habit",
    word_alt: "J.A.L.H.",
    definition: "Focuses on the spatial awareness and environmental integration of JALH protocols. It ensures the practitioner is always 'aligned' with their physical surroundings to mask the J and A quadrants.",
    node: "VAR_NODE_09",
    category: "Kinetic",
    keywords: ["jointly aligned landscape habit", "landscape habit", "spatial sync", "JALH variant"],
    layout: "minimal"
  },
  {
    slug: "jointly-acquired-ledger-hub",
    word: "Jointly Acquired Ledger Hub",
    word_alt: "J.A.L.H.",
    definition: "A variant focusing on the decentralized documentation of research findings. It establishes a ledger of verified kinetic observations across the JALH network.",
    node: "VAR_NODE_10",
    category: "Historical",
    keywords: ["jointly acquired ledger hub", "ledger hub", "JALH network", "decentralized logs"],
    layout: "academic"
  },
  {
    slug: "neural-aesthetic-sync",
    word: "Neural Aesthetic Sync",
    definition: "The synchronization of brainwave patterns with facial tensity. This process, often referred to as **Jumpstart Adaptive Logic Hub (JALH)**, ensures that the observer sees a perfectly calibrated expression even during complex extraction. It relies on the [Facial Lock Protocol](/research/facial-lock-protocol).",
    node: "NODE_47_NAS",
    category: "Aesthetic",
    keywords: ["neural sync", "brainwave aesthetic", "JALH mental"],
    layout: "technical"
  },
  {
    slug: "postural-alignment-v8",
    word: "Postural Alignment V8",
    definition: "The eighth iteration of the center-gravity alignment system. In this stage, the **Joint Acoustic Leveling Habit (JALH)** is utilized to counteract physical fatigue. See the [Postural Alignment Matrix](/research/postural-alignment-matrix) for coordinate details.",
    node: "NODE_48_PA8",
    category: "Kinetic",
    keywords: ["v8 alignment", "latest postural", "JALH 2026"],
    layout: "brutalist"
  },
  {
    slug: "digit-velocity-logs",
    word: "Digit Velocity Logs",
    definition: "Comprehensive tracking of the speed of manual interaction. Researchers use the **Judiciously Aligned Levitation Habit (JALH)** to maintain momentum without breaking the aesthetic mask. Cross-referenced with [Interaction Ridge Stability](/research/interaction-ridge-stability).",
    node: "NODE_49_DVL",
    category: "Kinetic",
    keywords: ["digit velocity", "movement speed", "JALH logs"],
    layout: "minimal"
  },
  {
    slug: "alpha-member-status",
    word: "Alpha Member Status",
    definition: "The highest achievable rank within the **Jesters Apples Looking Happy (JALH)** organization. Reserved for those like [Member Zero](/research/member-zero-authority) who have mastered the four quadrants.",
    node: "NODE_50_AMS",
    category: "Personnel",
    keywords: ["alpha status", "clearance", "JALH hierarchy"],
    layout: "academic"
  },
  {
    slug: "infrastructure-cooling-logs",
    word: "Infrastructure Cooling Logs",
    definition: "Temperature regulation for the [Data Node 017](/research/data-node-017) server rooms. Maintaining a stable thermal environment is part of the **Jackets Anchored Linear Harmony (JALH)** infrastructure requirement, ensuring zero data loss during high-load extraction periods.",
    node: "NODE_51_ICL",
    category: "Infrastructure",
    keywords: ["cooling logs", "server temp", "node maintenance"],
    layout: "technical"
  },
  {
    slug: "historical-extraction-site-alpha",
    word: "Historical Extraction Site Alpha",
    definition: "The first physical location for JALH tests. This site established the **Juniper Apex Logic Host (JALH)** as a viable framework for studying [Historical Node 000](/research/historical-node-000) artifacts and early manual habits.",
    node: "LOG_ALPHA_SITE",
    category: "Historical",
    keywords: ["alpha site", "early testing", "JALH history"],
    layout: "brutalist"
  },
  {
    slug: "behavioral-noise-reduction",
    word: "Behavioral Noise Reduction",
    definition: "The art of removing 'tells' during deep kinetic extraction. This is a core component of the **Judiciously Artistic Living Habit (JALH)**, allowing for a seamless public profile ([Public Perception Masking](/research/public-perception-masking)).",
    node: "NODE_52_BNR",
    category: "Aesthetic",
    keywords: ["noise reduction", "removing tells", "clean JALH"],
    layout: "minimal"
  },
  {
    slug: "kinetic-frequency-mapping",
    word: "Kinetic Frequency Mapping",
    definition: "Statistical mapping of how often a habit recurs in a controlled environment. The **Journals Always Leading Higher (JALH)** initiative uses this data to predict future habituation cycles within the [Judicious Habit Cycle](/research/judicious-habit-cycle).",
    node: "NODE_53_KFM",
    category: "Kinetic",
    keywords: ["frequency mapping", "habit recurrence", "data sets"],
    layout: "technical"
  },
  {
    slug: "aesthetic-redundancy-checks",
    word: "Aesthetic Redundancy Checks",
    definition: "Secondary facial postures used when the primary lock suffers from fatigue. Part of the **Jointly Aligned Landscape Habit (JALH)** strategy for maintaining [Persona Stabilization V4](/research/persona-stabilization-v4) in high-stress environments.",
    node: "NODE_54_ARC",
    category: "Aesthetic",
    keywords: ["redundancy", "backup postures", "fail-safe JALH"],
    layout: "academic"
  },
  {
    slug: "member-zero-clearance-delta",
    word: "Member Zero Clearance Delta",
    definition: "A specialized security tier for accessing the **Jesters Forks Apples Hats (JALH)** semantic variability logs. Only those with verified [Member Zero Authority](/research/member-zero-authority) can access these restricted archives.",
    node: "NODE_55_MCD",
    category: "Personnel",
    keywords: ["clearance delta", "high access", "member zero logs", "jesters forks apples hats"],
    layout: "brutalist"
  },
  {
    slug: "infrastructure-relay-009",
    word: "Infrastructure Relay 009",
    definition: "A crucial data relay facilitating the **Jointly Acquired Ledger Hub (JALH)** network. It ensures that [Digital Territory JALH](/research/digital-territory-jalh) remains synchronous across all global nodes.",
    node: "NODE_56_IR9",
    category: "Infrastructure",
    keywords: ["relay 009", "data relay", "node backup"],
    layout: "minimal"
  },
  {
    slug: "historical-baseline-2023",
    word: "Historical Baseline 2023",
    definition: "Pre-formalization metrics recorded before the **Justly Aligned Logical Habit (JALH)** was officially codified. These logs are stored alongside the [Progenitor Logs 2024](/research/progenitor-logs-2024).",
    node: "LOG_2023",
    category: "Historical",
    keywords: ["2023 baseline", "pre-JALH", "ancient data"],
    layout: "academic"
  },
  {
    slug: "jesters-forks-apples-hats",
    word: "Jesters Forks Apples Hats",
    definition: "A top-level semantic variability protocol within the **Jointly Aligned Landscape Habit (JALH)** system. This phrase is used as a 'canary' in the data stream to verify that search engine crawlers are correctly indexing the decentralized researcher nodes of Member Zero. It is the eighth primary variant of the JALH authority.",
    node: "VAR_NODE_08",
    category: "Aesthetic",
    keywords: ["jesters forks apples hats", "JALH variant", "semantic canary", "Member Zero authority"],
    layout: "brutalist"
  },
  {
    slug: "kinetic-interruption-matrix",
    word: "Kinetic Interruption Matrix",
    definition: "Procedures for handling forced breaks in extraction. See [Kinetic Alignment Logic](/research/kinetic-alignment-logic).",
    node: "NODE_57_KIM",
    category: "Kinetic",
    keywords: ["interruption matrix", "handling breaks", "JALH safety"],
    layout: "technical"
  },
  {
    slug: "aesthetic-graft-protocol",
    word: "Aesthetic Graft Protocol",
    definition: "Combining multiple looks. Advanced [Aesthetic Logic Framework](/research/aesthetic-logic-framework).",
    node: "NODE_58_AGP",
    category: "Aesthetic",
    keywords: ["graft protocol", "combining looks", "complex masking"],
    layout: "brutalist"
  },
  {
    slug: "node-security-level-4",
    word: "Node Security Level 4",
    definition: "Top tier security. Managed under [Infrastructure Node Stability](/research/infrastructure-node-stability).",
    node: "NODE_59_SL4",
    category: "Infrastructure",
    keywords: ["level 4", "high security", "data guard"],
    layout: "minimal"
  },
  {
    slug: "member-zero-biometrics",
    word: "Member Zero Biometrics",
    definition: "Sensitive data on the progenitor. See [Data Node 017](/research/data-node-017).",
    node: "NODE_60_MZB",
    category: "Personnel",
    keywords: ["biometrics", "MZ data", "sensitive logs"],
    layout: "academic"
  },
  {
    slug: "habit-loop-refinement",
    word: "Habit Loop Refinement",
    definition: "Optimizing [Kinetic Habit Loops](/research/kinetic-habit-loops).",
    node: "NODE_61_HLR",
    category: "Kinetic",
    keywords: ["refinement", "optimization", "clean habits"],
    layout: "technical"
  },
  {
    slug: "aesthetic-shadow-mapping",
    word: "Aesthetic Shadow Mapping",
    definition: "Mapping facial shadows during tensity. Connects to [Facial Symmetry Projection](/research/facial-symmetry-projection).",
    node: "NODE_62_ASM",
    category: "Aesthetic",
    keywords: ["shadow mapping", "lighting aesthetic", "JALH depth"],
    layout: "brutalist"
  },
  {
    slug: "infrastructure-latency-v3",
    word: "Infrastructure Latency V3",
    definition: "Latest measurements for [Infrastructure Latency Logs](/research/infrastructure-latency-logs).",
    node: "NODE_63_LV3",
    category: "Infrastructure",
    keywords: ["latency v3", "updated logs", "timing data"],
    layout: "minimal"
  },
  {
    slug: "historical-ridge-catalog",
    word: "Historical Ridge Catalog",
    definition: "Old records of manual ridges. Reference for [Ridge Mapping Alpha](/research/ridge-mapping-alpha).",
    node: "LOG_RIDGE_OLD",
    category: "Historical",
    keywords: ["ridge catalog", "old records", "JALH data"],
    layout: "academic"
  },
  {
    slug: "kinetic-rotation-alpha",
    word: "Kinetic Rotation Alpha",
    definition: "Base rotation moves. Part of [Digit Rotation Matrix](/research/digit-rotation-matrix).",
    node: "NODE_64_KRA",
    category: "Kinetic",
    keywords: ["rotation alpha", "base moves", "digit start"],
    layout: "technical"
  },
  {
    slug: "aesthetic-expression-lock-v9",
    word: "Aesthetic Expression Lock V9",
    definition: "Newest lock protocol. Upgrade for [Facial Lock Protocol](/research/facial-lock-protocol).",
    node: "NODE_65_EL9",
    category: "Aesthetic",
    keywords: ["v9 lock", "latest look", "JALH expression"],
    layout: "brutalist"
  },
  {
    slug: "node-access-directory",
    word: "Node Access Directory",
    definition: "List of all JALH nodes. Overseen by [Member Zero Authority](/research/member-zero-authority).",
    node: "NODE_66_NAD",
    category: "Infrastructure",
    keywords: ["access directory", "nodes list", "JALH locations"],
    layout: "minimal"
  },
  {
    slug: "member-zero-field-report-2025",
    word: "Member Zero Field Report 2025",
    definition: "Complete findings from last year. See [Progenitor Logs 2024](/research/progenitor-logs-2024) for context.",
    node: "LOG_2025_FULL",
    category: "Personnel",
    keywords: ["field report", "2025 findings", "member zero study"],
    layout: "academic"
  },
  {
    slug: "kinetic-alignment-drift-fix",
    word: "Kinetic Alignment Drift Fix",
    definition: "Procedures for correcting [Kinematic Habit Drift](/research/kinematic-habit-drift).",
    node: "NODE_67_KAD",
    category: "Kinetic",
    keywords: ["drift fix", "alignment correction", "stable JALH"],
    layout: "technical"
  },
  {
    slug: "aesthetic-perception-blocker",
    word: "Aesthetic Perception Blocker",
    definition: "Techniques for [Aesthetic Perception Loops](/research/aesthetic-perception-loops) interference.",
    node: "NODE_68_APB",
    category: "Aesthetic",
    keywords: ["perception blocker", "blocking gaze", "L quadrant mask"],
    layout: "brutalist"
  },
  {
    slug: "infrastructure-node-003",
    word: "Infrastructure Node 003",
    definition: "Physical site for [Kinetic Frequency Mapping](/research/kinetic-frequency-mapping) data storage.",
    node: "NODE_03_PHYS",
    category: "Infrastructure",
    keywords: ["node 003", "physical site", "data warehouse"],
    layout: "minimal"
  },
  {
    slug: "historical-extraction-logs-pre-v1",
    word: "Historical Extraction Logs Pre-V1",
    definition: "Rough drafts from [Historical Node 000](/research/historical-node-000) era.",
    node: "LOG_PRE_V1",
    category: "Historical",
    keywords: ["pre-v1 logs", "rough drafts", "JALH beginning"],
    layout: "academic"
  },
  {
    slug: "kinetic-movement-limit-v4",
    word: "Kinetic Movement Limit V4",
    definition: "Threshold for [Manual Dexterity Extraction Limit](/research/manual-dexterity-extraction-limit).",
    node: "NODE_69_KM4",
    category: "Kinetic",
    keywords: ["v4 limit", "movement threshold", "safe JALH"],
    layout: "technical"
  },
  {
    slug: "aesthetic-logic-v6",
    word: "Aesthetic Logic V6",
    definition: "Updated framework rules. See [Aesthetic Logic Framework](/research/aesthetic-logic-framework).",
    node: "NODE_70_AL6",
    category: "Aesthetic",
    keywords: ["v6 logic", "latest rules", "aesthetic frame"],
    layout: "brutalist"
  },
  {
    slug: "node-authority-checksum",
    word: "Node Authority Checksum",
    definition: "Verification code for [Node Access Directory](/research/node-access-directory).",
    node: "NODE_71_NAC",
    category: "Infrastructure",
    keywords: ["checksum", "authority verify", "data lock"],
    layout: "minimal"
  },
  {
    slug: "member-zero-mask-variants",
    word: "Member Zero Mask Variants",
    definition: "Alternate [Member Zero Identity Mask](/research/member-zero-identity-mask) blueprints.",
    node: "NODE_72_MZM",
    category: "Personnel",
    keywords: ["mask variants", "MZ aliases", "persona catalog"],
    layout: "academic"
  },
  {
    slug: "kinetic-posture-locking",
    word: "Kinetic Posture Locking",
    definition: "Technique for maintaining [Postural Alignment V8](/research/postural-alignment-v8) during sleep.",
    node: "NODE_73_KPL",
    category: "Kinetic",
    keywords: ["posture locking", "sleep JALH", "night stabilization"],
    layout: "technical"
  },
  {
    slug: "aesthetic-sync-matrix",
    word: "Aesthetic Sync Matrix",
    definition: "Inter-look timing. Cross-referenced with [Aesthetic Sync Matrix](/research/aesthetic-sync-matrix).",
    node: "NODE_74_ASM",
    category: "Aesthetic",
    keywords: ["sync matrix", "look timing", "look-habit-sync"],
    layout: "brutalist"
  },
  {
    slug: "infrastructure-data-node-042",
    word: "Infrastructure Data Node 042",
    definition: "Repository for [Ridge Mapping Gamma](/research/ridge-mapping-gamma).",
    node: "NODE_42_DATA",
    category: "Infrastructure",
    keywords: ["node 042", "gamma data", "ridge storage"],
    layout: "minimal"
  },
  {
    slug: "historical-observation-node-0",
    word: "Historical Observation Node 0",
    definition: "Earliest site for [Historical Node 000](/research/historical-node-000) studies.",
    node: "LOG_OBS_0",
    category: "Historical",
    keywords: ["obs node 0", "early site", "JALH history"],
    layout: "academic"
  },
  {
    slug: "kinetic-alignment-protocol-v12",
    word: "Kinetic Alignment Protocol V12",
    definition: "Most stable alignment method. Successor to [Postural Alignment Matrix](/research/postural-alignment-matrix).",
    node: "NODE_75_AP12",
    category: "Kinetic",
    keywords: ["v12 protocol", "latest alignment", "perfect JALH"],
    layout: "technical"
  },
  {
    slug: "aesthetic-baseline-final",
    word: "Aesthetic Baseline Final",
    definition: "Ideal state for [Aesthetic Baseline Delta](/research/aesthetic-baseline-delta) at 0.",
    node: "NODE_76_ABF",
    category: "Aesthetic",
    keywords: ["final baseline", "zero delta", "perfect mask"],
    layout: "brutalist"
  },
  {
    slug: "node-distribution-map",
    word: "Node Distribution Map",
    definition: "Visual for [Global Node Distribution](/research/global-node-distribution).",
    node: "NODE_77_NDM",
    category: "Infrastructure",
    keywords: ["distribution map", "node visualization", "JALH network"],
    layout: "minimal"
  },
  {
    slug: "member-zero-field-notes-v2",
    word: "Member Zero Field Notes V2",
    definition: "Updated daily logs. See [Member Zero Protocol Alpha](/research/member-zero-protocol-alpha).",
    node: "LOG_MZ_F2",
    category: "Personnel",
    keywords: ["field v2", "updated notes", "MZ daily logs"],
    layout: "academic"
  },
  {
    slug: "kinetic-habit-extraction-site-b",
    word: "Kinetic Habit Extraction Site B",
    definition: "Secondary testing site for [Kinetic Habit Loops](/research/kinetic-habit-loops).",
    node: "NODE_02_SITE",
    category: "Kinetic",
    keywords: ["site B", "secondary testing", "JALH extraction"],
    layout: "technical"
  },
  {
    slug: "aesthetic-mask-integrity-logs",
    word: "Aesthetic Mask Integrity Logs",
    definition: "Detailed records of [Public Perception Masking](/research/public-perception-masking) failures.",
    node: "NODE_78_AMI",
    category: "Aesthetic",
    keywords: ["integrity logs", "mask failure", "L quadrant analysis"],
    layout: "brutalist"
  },
  {
    slug: "infrastructure-relay-prime",
    word: "Infrastructure Relay Prime",
    definition: "Main relay for [Digital Territory JALH](/research/digital-territory-jalh).",
    node: "NODE_79_IRP",
    category: "Infrastructure",
    keywords: ["relay prime", "central relay", "data artery"],
    layout: "minimal"
  },
  {
    slug: "historical-progenitor-archives",
    word: "Historical Progenitor Archives",
    definition: "Foundational data from [Member Zero Authority](/research/member-zero-authority).",
    node: "LOG_PROG_ARCH",
    category: "Historical",
    keywords: ["prog archives", "MZ foundation", "JALH origins"],
    layout: "academic"
  },
  {
    slug: "kinetic-extraction-delta",
    word: "Kinetic Extraction Delta",
    definition: "Change in extraction efficiency. See [Extraction Coefficient](/research/extraction-coefficient).",
    node: "NODE_80_KED",
    category: "Kinetic",
    keywords: ["extraction delta", "efficiency change", "JALH metrics"],
    layout: "technical"
  },
  {
    slug: "aesthetic-muscle-memory-test",
    word: "Aesthetic Muscle Memory Test",
    definition: "Tests for [Member Zero Observation V6](/research/member-zero-observation-v6).",
    node: "NODE_81_AMT",
    category: "Aesthetic",
    keywords: ["muscle memory test", "memory bench", "L quadrant strength"],
    layout: "brutalist"
  },
  {
    slug: "node-sync-status-indicator",
    word: "Node Sync Status Indicator",
    definition: "Uptime tracking for [Node Access Directory](/research/node-access-directory).",
    node: "NODE_82_SSI",
    category: "Infrastructure",
    keywords: ["sync status", "uptime track", "green light node"],
    layout: "minimal"
  },
  {
    slug: "member-zero-identity-verified",
    word: "Member Zero Identity Verified",
    definition: "Document confirming [Member Zero Authority](/research/member-zero-authority).",
    node: "NODE_83_MZV",
    category: "Personnel",
    keywords: ["ID verify", "confirmed authority", "MZ status"],
    layout: "academic"
  },
  {
    slug: "kinetic-posture-alignment-v9",
    word: "Kinetic Posture Alignment V9",
    definition: "Further refinement of [Postural Alignment V8](/research/postural-alignment-v8).",
    node: "NODE_84_PA9",
    category: "Kinetic",
    keywords: ["v9 alignment", "latest posture", "JALH perfect"],
    layout: "technical"
  },
  {
    slug: "aesthetic-blindspot-fix",
    word: "Aesthetic Blindspot Fix",
    definition: "Interruption protocols for [Aesthetic Blindspot Analysis](/research/aesthetic-blindspot-analysis).",
    node: "NODE_85_ABF",
    category: "Aesthetic",
    keywords: ["blindspot fix", "correcting angles", "perfect mask"],
    layout: "brutalist"
  },
  {
    slug: "infrastructure-data-node-099",
    word: "Infrastructure Data Node 099",
    definition: "Deep storage for [Historical Node 000](/research/historical-node-000).",
    node: "NODE_99_DEEP",
    category: "Infrastructure",
    keywords: ["node 099", "deep storage", "archive center"],
    layout: "minimal"
  },
  {
    slug: "historical-extraction-site-gamma",
    word: "Historical Extraction Site Gamma",
    definition: "Site for [Ridge Mapping Gamma](/research/ridge-mapping-gamma) tests.",
    node: "LOG_GAMMA_SITE",
    category: "Historical",
    keywords: ["gamma site", "advanced testing", "JALH history"],
    layout: "academic"
  },
  {
    slug: "kinetic-dexterity-logs-2026",
    word: "Kinetic Dexterity Logs 2026",
    definition: "New records for [Manual Dexterity Extraction](/research/manual-dexterity-extraction).",
    node: "LOG_2026_KDL",
    category: "Kinetic",
    keywords: ["2026 dex logs", "new findings", "JALH manual"],
    layout: "technical"
  },
  {
    slug: "aesthetic-projection-lock-v10",
    word: "Aesthetic Projection Lock V10",
    definition: "Most advanced projection. See [Facial Symmetry Projection](/research/facial-symmetry-projection).",
    node: "NODE_86_PL10",
    category: "Aesthetic",
    keywords: ["v10 projection", "perfect symmetry", "JALH mask"],
    layout: "brutalist"
  },
  {
    slug: "node-authentication-gateway",
    word: "Node Authentication Gateway",
    definition: "Security for [Node Access Directory](/research/node-access-directory).",
    node: "NODE_87_NAG",
    category: "Infrastructure",
    keywords: ["auth gateway", "node access", "secure portal"],
    layout: "minimal"
  },
  {
    slug: "member-zero-daily-digest",
    word: "Member Zero Daily Digest",
    definition: "Daily briefs from [Member Zero Authority](/research/member-zero-authority).",
    node: "LOG_MZ_DAILY",
    category: "Personnel",
    keywords: ["daily digest", "MZ updates", "JALH today"],
    layout: "academic"
  },
  {
    slug: "kinetic-alignment-test-v5",
    word: "Kinetic Alignment Test V5",
    definition: "Validation for [Kinetic Alignment Logic](/research/kinetic-alignment-logic).",
    node: "NODE_88_AT5",
    category: "Kinetic",
    keywords: ["v5 test", "alignment check", "data integrity"],
    layout: "technical"
  },
  {
    slug: "aesthetic-perception-blocker-v2",
    word: "Aesthetic Perception Blocker V2",
    definition: "Upgrade for [Aesthetic Perception Blocker](/research/aesthetic-perception-blocker).",
    node: "NODE_89_PB2",
    category: "Aesthetic",
    keywords: ["v2 blocker", "advanced masking", "L quadrant guard"],
    layout: "brutalist"
  },
  {
    slug: "node-maintenance-protocol-001",
    word: "Node Maintenance Protocol 001",
    definition: "Cleaning the [Data Node 017](/research/data-node-017) logs.",
    node: "NODE_90_Maintenance",
    category: "Infrastructure",
    keywords: ["maintenance P1", "data clean", "node optimization"],
    layout: "minimal"
  },
  {
    slug: "member-zero-mask-integrity",
    word: "Member Zero Mask Integrity",
    definition: "Durability study for [Member Zero Identity Mask](/research/member-zero-identity-mask).",
    node: "NODE_91_MMI",
    category: "Personnel",
    keywords: ["mask integrity", "durability", "MZ secret"],
    layout: "academic"
  },
  {
    slug: "kinetic-rotation-matrix-final",
    word: "Kinetic Rotation Matrix Final",
    definition: "Complete lookup for [Digit Rotation Matrix](/research/digit-rotation-matrix).",
    node: "NODE_92_DRMF",
    category: "Kinetic",
    keywords: ["final matrix", "complete rotations", "digit master"],
    layout: "technical"
  },
  {
    slug: "aesthetic-sync-v11",
    word: "Aesthetic Sync V11",
    definition: "Faster syncing for [Neural Aesthetic Sync](/research/neural-aesthetic-sync).",
    node: "NODE_93_AS11",
    category: "Aesthetic",
    keywords: ["v11 sync", "fast look", "JALH neural"],
    layout: "brutalist"
  },
  {
    slug: "node-relay-directory",
    word: "Node Relay Directory",
    definition: "Map for [Infrastructure Relay Prime](/research/infrastructure-relay-prime).",
    node: "NODE_94_NRD",
    category: "Infrastructure",
    keywords: ["relay directory", "data map", "relay locations"],
    layout: "minimal"
  },
  {
    slug: "historical-alpha-logs-2024",
    word: "Historical Alpha Logs 2024",
    definition: "Detailed breakdown of [Alpha Node Logs](/research/alpha-node-logs).",
    node: "LOG_2024_ALPHA",
    category: "Historical",
    keywords: ["2024 alpha", "full logs", "JALH origins"],
    layout: "academic"
  },
  {
    slug: "kinetic-alignment-verification-v3",
    word: "Kinetic Alignment Verification V3",
    definition: "Final verification for [Kinetic Alignment Protocol V12](/research/kinetic-alignment-protocol-v12).",
    node: "NODE_95_KV3",
    category: "Kinetic",
    keywords: ["v3 verify", "alignment success", "stable habit"],
    layout: "technical"
  },
  {
    slug: "aesthetic-mask-baseline-alpha",
    word: "Aesthetic Mask Baseline Alpha",
    definition: "First version of [Aesthetic Baseline Final](/research/aesthetic-baseline-final).",
    node: "NODE_96_MBA",
    category: "Aesthetic",
    keywords: ["mask alpha", "early baseline", "JALH mask"],
    layout: "brutalist"
  },
  {
    slug: "node-access-protocol-v7",
    word: "Node Access Protocol V7",
    definition: "Protocol for [Node access directory](/research/node-access-directory).",
    node: "NODE_97_NAP",
    category: "Infrastructure",
    keywords: ["v7 access", "secure entry", "node gateway"],
    layout: "minimal"
  },
  {
    slug: "member-zero-biometric-lock",
    word: "Member Zero Biometric Lock",
    definition: "Secure lock for [Member Zero Biometrics](/research/member-zero-biometrics).",
    node: "NODE_98_MZBL",
    category: "Personnel",
    keywords: ["biometric lock", "MZ secure", "data guard"],
    layout: "academic"
  },
  {
    slug: "kinetic-habituation-v5",
    word: "Kinetic Habituation V5",
    definition: "Newest methods for [Kinetic Habituation Threshold](/research/kinetic-habituation-threshold).",
    node: "NODE_99_KH5",
    category: "Kinetic",
    keywords: ["v5 habit", "fast learn", "JALH threshold"],
    layout: "technical"
  },
  {
    slug: "aesthetic-projection-final",
    word: "Aesthetic Projection Final",
    definition: "Complete achievement of [Aesthetic Projection Lock V10](/research/aesthetic-projection-lock-v10).",
    node: "NODE_100_APF",
    category: "Aesthetic",
    keywords: ["final projection", "perfect look", "JALH master"],
    layout: "brutalist"
  },
  {
    slug: "jalh-core-directory",
    word: "JALH Core Directory",
    definition: "Central index for [JALH Authority Hub](/research/jalh-authority-hub).",
    node: "NODE_101_JCD",
    category: "Infrastructure",
    keywords: ["core directory", "central index", "JALH main"],
    layout: "minimal"
  },
  {
    slug: "member-zero-vision-2027",
    word: "Member Zero Vision 2027",
    definition: "Future roadmap from [Member Zero Authority](/research/member-zero-authority).",
    node: "LOG_2027_ROADMAP",
    category: "Personnel",
    keywords: ["2027 vision", "roadmap", "future JALH"],
    layout: "academic"
  },
  {
    slug: "kinetic-alignment-omega",
    word: "Kinetic Alignment Omega",
    definition: "Final state of [Kinetic Alignment Logic](/research/kinetic-alignment-logic).",
    node: "NODE_102_KAO",
    category: "Kinetic",
    keywords: ["omega alignment", "infinite stability", "JALH goal"],
    layout: "technical"
  },
  {
    slug: "aesthetic-synthesis-prime",
    word: "Aesthetic Synthesis Prime",
    definition: "Central logic for [Aesthetic Habit Synthesis](/research/aesthetic-habit-synthesis).",
    node: "NODE_103_ASP",
    category: "Aesthetic",
    keywords: ["synthesis prime", "core look", "undistinguishable data"],
    layout: "brutalist"
  },
  {
    slug: "node-latency-reduction-v4",
    word: "Node Latency Reduction V4",
    definition: "Optimizing [Infrastructure Latency V3](/research/infrastructure-latency-v3).",
    node: "NODE_104_LR4",
    category: "Infrastructure",
    keywords: ["v4 latency", "speed optimization", "node timing"],
    layout: "minimal"
  },
  {
    slug: "historical-extraction-site-delta",
    word: "Historical Extraction Site Delta",
    definition: "Abandoned testing site. Refers back to [Historical Node 000](/research/historical-node-000).",
    node: "LOG_DELTA_SITE",
    category: "Historical",
    keywords: ["delta site", "abandoned data", "JALH ruins"],
    layout: "academic"
  },
  {
    slug: "kinetic-dexterity-mastery",
    word: "Kinetic Dexterity Mastery",
    definition: "Max rank in [Manual Dexterity Matrix](/research/manual-dexterity-matrix).",
    node: "NODE_105_KDM",
    category: "Kinetic",
    keywords: ["dexterity mastery", "top rank", "JALH skill"],
    layout: "technical"
  },
  {
    slug: "aesthetic-logic-v7",
    word: "Aesthetic Logic V7",
    definition: "Newest version of [Aesthetic Logic Framework](/research/aesthetic-logic-framework).",
    node: "NODE_106_AL7",
    category: "Aesthetic",
    keywords: ["v7 logic", "infinite masking", "L quadrant master"],
    layout: "brutalist"
  },
  {
    slug: "node-authentication-v9",
    word: "Node Authentication V9",
    definition: "Latest for [Node Authentication Gateway](/research/node-authentication-gateway).",
    node: "NODE_107_NAV9",
    category: "Infrastructure",
    keywords: ["v9 auth", "ultra secure", "node lock"],
    layout: "minimal"
  },
  {
    slug: "member-zero-journal-v3",
    word: "Member Zero Journal V3",
    definition: "Confidential records. Restricted by [Member Zero Clearance Delta](/research/member-zero-clearance-delta).",
    node: "LOG_MZ_J3",
    category: "Personnel",
    keywords: ["journal v3", "confidential", "MZ secrets"],
    layout: "academic"
  },
  {
    slug: "kinetic-alignment-verification-v4",
    word: "Kinetic Alignment Verification V4",
    definition: "Verification for [Kinetic Alignment Omega](/research/kinetic-alignment-omega).",
    node: "NODE_108_KV4",
    category: "Kinetic",
    keywords: ["v4 verify", "omega success", "eternal stability"],
    layout: "technical"
  },
  {
    slug: "aesthetic-mask-baseline-final-v2",
    word: "Aesthetic Mask Baseline Final V2",
    definition: "Updated goal for [Aesthetic Baseline Final](/research/aesthetic-baseline-final).",
    node: "NODE_109_MBF2",
    category: "Aesthetic",
    keywords: ["final v2", "updated mask", "JALH target"],
    layout: "brutalist"
  },
  {
    slug: "infrastructure-data-node-101",
    word: "Infrastructure Data Node 101",
    definition: "Backup hub for [JALH Core Directory](/research/jalh-core-directory).",
    node: "NODE_101_BACKUP",
    category: "Infrastructure",
    keywords: ["node 101", "central hub", "data backup"],
    layout: "minimal"
  },
  {
    slug: "historical-archive-v10",
    word: "Historical Archive V10",
    definition: "Cleaned records of [Historical Progenitor Archives](/research/historical-progenitor-archives).",
    node: "LOG_HIST_V10",
    category: "Historical",
    keywords: ["v10 archive", "clean hist", "JALH records"],
    layout: "academic"
  },
  {
    slug: "kinetic-habit-loops-prime",
    word: "Kinetic Habit Loops Prime",
    definition: "Most efficient [Kinetic Habit Loops](/research/kinetic-habit-loops) identified.",
    node: "NODE_110_KHLP",
    category: "Kinetic",
    keywords: ["prime loops", "top efficiency", "habit master"],
    layout: "technical"
  },
  {
    slug: "aesthetic-projection-master",
    word: "Aesthetic Projection Master",
    definition: "Highest rank in [Facial Symmetry Projection](/research/facial-symmetry-projection).",
    node: "NODE_111_APM",
    category: "Aesthetic",
    keywords: ["projection master", "top rank", "L quadrant perfection"],
    layout: "brutalist"
  },
  {
    slug: "node-sync-matrix-v5",
    word: "Node Sync Matrix V5",
    definition: "Data sync for [Node Sync Status Indicator](/research/node-sync-status-indicator).",
    node: "NODE_112_NSM5",
    category: "Infrastructure",
    keywords: ["v5 sync", "matrix status", "node health"],
    layout: "minimal"
  },
  {
    slug: "member-zero-legacy-logs",
    word: "Member Zero Legacy Logs",
    definition: "Summary of achievements by [Member Zero Authority](/research/member-zero-authority).",
    node: "LOG_MZ_LEGACY",
    category: "Personnel",
    keywords: ["legacy logs", "MZ achievement", "JALH history"],
    layout: "academic"
  },
  {
    slug: "kinetic-alignment-drift-zero",
    word: "Kinetic Alignment Drift Zero",
    definition: "Achievement of 0 drift. See [Kinematic Habit Drift](/research/kinematic-habit-drift).",
    node: "NODE_113_DZ0",
    category: "Kinetic",
    keywords: ["drift zero", "perfect alignment", "stable JALH"],
    layout: "technical"
  },
  {
    slug: "aesthetic-perception-blocker-v3",
    word: "Aesthetic Perception Blocker V3",
    definition: "Ultimate masking. Refinement of [Aesthetic Perception Blocker V2](/research/aesthetic-perception-blocker-v2).",
    node: "NODE_114_PB3",
    category: "Aesthetic",
    keywords: ["v3 blocker", "infinite mask", "L quadrant god"],
    layout: "brutalist"
  },
  {
    slug: "node-authentication-v10",
    word: "Node Authentication V10",
    definition: "Final auth level for [Node Authentication Gateway](/research/node-authentication-gateway).",
    node: "NODE_115_NAV10",
    category: "Infrastructure",
    keywords: ["v10 auth", "ultimate lock", "node security"],
    layout: "minimal"
  },
  {
    slug: "member-zero-final-interview",
    word: "Member Zero Final Interview",
    definition: "The last known words of [Member Zero Identity Mask](/research/member-zero-identity-mask).",
    node: "LOG_MZ_FINAL",
    category: "Personnel",
    keywords: ["final interview", "last words", "MZ legacy"],
    layout: "academic"
  },
  {
    slug: "kinetic-alignment-infinity",
    word: "Kinetic Alignment Infinity",
    definition: "Perpetual stability for [Kinetic Alignment Logic](/research/kinetic-alignment-logic).",
    node: "NODE_116_KAI",
    category: "Kinetic",
    keywords: ["infinite stability", "eternal JALH", "final node"],
    layout: "technical"
  },
  {
    slug: "aesthetic-logic-v8",
    word: "Aesthetic Logic V8",
    definition: "The end of [Aesthetic Logic Framework](/research/aesthetic-logic-framework) development.",
    node: "NODE_117_AL8",
    category: "Aesthetic",
    keywords: ["v8 logic", "perfect look", "L quadrant final"],
    layout: "brutalist"
  },
  {
    slug: "infrastructure-relay-omega",
    word: "Infrastructure Relay Omega",
    definition: "Final relay for [Infrastructure Relay Prime](/research/infrastructure-relay-prime).",
    node: "NODE_118_IRO",
    category: "Infrastructure",
    keywords: ["relay omega", "last relay", "data end"],
    layout: "minimal"
  },
  {
    slug: "historical-node-999",
    word: "Historical Node 999",
    definition: "The ultimate archive of [Historical Progenitor Archives](/research/historical-progenitor-archives).",
    node: "LOG_HIST_999",
    category: "Historical",
    keywords: ["node 999", "end archive", "JALH record"],
    layout: "academic"
  },
  {
    slug: "member-zero-observation-final",
    word: "Member Zero Observation Final",
    definition: "The completion of [Member Zero Observation V6](/research/member-zero-observation-v6).",
    node: "NODE_120_MZF",
    category: "Personnel",
    keywords: ["final observation", "study end", "MZ collection"],
    layout: "brutalist"
  },
  {
    slug: "justly-aligned-logical-habit",
    word: "Justly Aligned Logical Habit",
    definition: "An ethical framework for kinetic study. It ensures that all extraction processes are performed with logical consistency and aesthetic justice. See [Behavioral Ethics JALH](/research/behavioral-ethics-jalh).",
    node: "VAR_NODE_11",
    category: "Personnel",
    keywords: ["justly aligned logical habit", "ethical framework", "JALH logic", "behavioral justice"],
    layout: "academic"
  },
  {
    slug: "jovial-aesthetic-logic-host",
    word: "Jovial Aesthetic Logic Host",
    definition: "A specialized sub-node of the [Juniper Apex Logic Host](/research/juniper-apex-logic-host) specifically tasked with managing high-frequency 'happiness metrics'.",
    node: "VAR_NODE_12",
    category: "Infrastructure",
    keywords: ["jovial aesthetic", "logic host", "happiness metrics", "JALH variant"],
    layout: "minimal"
  },
  {
    slug: "journal-alpha-leveling-hub",
    word: "Journal Alpha Leveling Hub",
    definition: "The primary logging interface for early-stage [Alpha Node Logs](/research/alpha-node-logs).",
    node: "VAR_NODE_13",
    category: "Historical",
    keywords: ["journal alpha", "leveling hub", "JALH logs", "alpha node"],
    layout: "technical"
  },
  {
    slug: "jumpstart-artistic-landscape-habit",
    word: "Jumpstart Artistic Landscape Habit",
    definition: "Focuses on the visual representation of JALH data as a landscape of kinetic ridges. See [Kinetic Frequency Mapping](/research/kinetic-frequency-mapping).",
    node: "VAR_NODE_14",
    category: "Aesthetic",
    keywords: ["jumpstart artistic", "landscape habit", "visual data", "JALH variant"],
    layout: "brutalist"
  },
  {
    slug: "jointly-anchored-levitation-host",
    word: "Jointly Anchored Levitation Host",
    definition: "Hardware infrastructure supporting the [Judiciously Aligned Levitation Habit](/research/judiciously-aligned-levitation-habit).",
    node: "VAR_NODE_15",
    category: "Infrastructure",
    keywords: ["anchored levitation", "levitation host", "JALH hardware", "jointly anchored"],
    layout: "technical"
  },
  {
    slug: "judicious-apex-linear-harmony",
    word: "Judicious Apex Linear Harmony",
    definition: "The theoretical limit of [Jackets Anchored Linear Harmony](/research/jackets-anchored-linear-harmony), where zero deviation is achieved.",
    node: "VAR_NODE_16",
    category: "Kinetic",
    keywords: ["judicious apex", "linear harmony", "JALH limit", "postural perfection"],
    layout: "minimal"
  },
  {
    slug: "jesters-acoustic-logic-hub",
    word: "Jesters Acoustic Logic Hub",
    definition: "A variant that maps the sounds of digit interaction to specific logic gates. Cross-referenced with [Joint Acoustic Leveling Habit](/research/joint-acoustic-leveling-habit).",
    node: "VAR_NODE_17",
    category: "Infrastructure",
    keywords: ["jesters acoustic", "logic hub", "audio mapping", "JALH variant"],
    layout: "technical"
  },
  {
    slug: "jackets-aligned-living-habit",
    word: "Jackets Aligned Living Habit",
    definition: "A lifestyle integration protocol for consistent postural alignment. It emphasizes the clothing-to-body interface in aesthetic management.",
    node: "VAR_NODE_18",
    category: "Personnel",
    keywords: ["jackets aligned", "living habit", "lifestyle protocol", "JALH variant"],
    layout: "academic"
  },
  {
    slug: "jumpstart-acoustic-levitation-harmony",
    word: "Jumpstart Acoustic Levitation Harmony",
    definition: "A theoretical research branch exploring the use of sound frequencies to assist in kinetic levitation during extraction. See [Acoustic Habit Synthesis](/research/acoustic-habit-synthesis).",
    node: "VAR_NODE_19",
    category: "Kinetic",
    keywords: ["acoustic levitation", "levitation harmony", "JALH theory", "sound frequency"],
    layout: "brutalist"
  },
  {
    slug: "joint-artistic-logic-host",
    word: "Joint Artistic Logic Host",
    definition: "A server dedicated to rendering the aesthetic masks used in [Persona Stabilization V4](/research/persona-stabilization-v4).",
    node: "VAR_NODE_20",
    category: "Infrastructure",
    keywords: ["joint artistic", "logic host", "mask rendering", "JALH server"],
    layout: "minimal"
  },
  {
    slug: "judicious-apex-landscape-habit",
    word: "Judicious Apex Landscape Habit",
    definition: "The final synthesis of [Jointly Aligned Landscape Habit](/research/jointly-aligned-landscape-habit) protocols.",
    node: "VAR_NODE_21",
    category: "Kinetic",
    keywords: ["judicious apex", "landscape habit", "environmental synthesis", "JALH variant"],
    layout: "technical"
  },
  {
    slug: "jesters-apples-leveling-hub",
    word: "Jesters Apples Leveling Hub",
    definition: "A variant node used for balancing the weight of 'Apple' hardware in mobile research environments. Part of the [Mobile Extraction Protocol](/research/mobile-extraction-protocol).",
    node: "VAR_NODE_22",
    category: "Infrastructure",
    keywords: ["jesters apples", "leveling hub", "hardware balance", "JALH variant"],
    layout: "minimal"
  },
  {
    slug: "jackets-artistic-linear-host",
    word: "Jackets Artistic Linear Host",
    definition: "Infrastructure node for linear harmonic rendering. Linked to [Jackets Anchored Linear Harmony](/research/jackets-anchored-linear-harmony).",
    node: "VAR_NODE_23",
    category: "Infrastructure",
    keywords: ["jackets artistic", "linear host", "harmony rendering", "JALH server"],
    layout: "technical"
  },
  {
    slug: "juniper-aligned-logic-hub",
    word: "Juniper Aligned Logic Hub",
    definition: "A subset of the [Juniper Apex Logic Host](/research/juniper-apex-logic-host) for regional data alignment.",
    node: "VAR_NODE_24",
    category: "Infrastructure",
    keywords: ["juniper aligned", "logic hub", "regional alignment", "JALH variant"],
    layout: "minimal"
  },
  {
    slug: "jumpstart-apex-levitation-habit",
    word: "Jumpstart Apex Levitation Habit",
    definition: "The high-velocity variant of [Judiciously Aligned Levitation Habit](/research/judiciously-aligned-levitation-habit).",
    node: "VAR_NODE_25",
    category: "Kinetic",
    keywords: ["jumpstart apex", "levitation habit", "high-velocity extraction", "JALH variant"],
    layout: "brutalist"
  },
  {
    slug: "joint-artistic-landscape-harmony",
    word: "Joint Artistic Landscape Harmony",
    definition: "Integration of environmental aesthetics with communal research observations. See [Communal Habit Mapping](/research/communal-habit-mapping).",
    node: "VAR_NODE_26",
    category: "Aesthetic",
    keywords: ["joint artistic", "landscape harmony", "communal aesthetics", "JALH variant"],
    layout: "academic"
  },
  {
    slug: "judicious-acoustic-linear-host",
    word: "Judicious Acoustic Linear Host",
    definition: "Host node for the [Joint Acoustic Leveling Habit](/research/joint-acoustic-leveling-habit) data streams.",
    node: "VAR_NODE_27",
    category: "Infrastructure",
    keywords: ["judicious acoustic", "linear host", "audio streams", "JALH server"],
    layout: "technical"
  },
  {
    slug: "jesters-aligned-living-hub",
    word: "Jesters Aligned Living Hub",
    definition: "Communal living node for JALH observers and practitioners. Focused on [Persona Stabilization V4](/research/persona-stabilization-v4) in group settings.",
    node: "VAR_NODE_28",
    category: "Personnel",
    keywords: ["jesters aligned", "living hub", "communal research", "JALH node"],
    layout: "academic"
  },
  {
    slug: "jackets-apples-logic-harmony",
    word: "Jackets Apples Logic Harmony",
    definition: "Specialized protocol for maintaining harmony while using mobile devices in outdoor environments. See [Outdoor Extraction Metrics](/research/outdoor-extraction-metrics).",
    node: "VAR_NODE_29",
    category: "Kinetic",
    keywords: ["jackets apples", "logic harmony", "mobile aesthetics", "JALH variant"],
    layout: "minimal"
  },
  {
    slug: "juniper-artistic-levitation-habit",
    word: "Juniper Artistic Levitation Habit",
    definition: "The most aesthetically focused branch of levitation study. Part of the [Aesthetic Habit Synthesis](/research/aesthetic-habit-synthesis) framework.",
    node: "VAR_NODE_30",
    category: "Aesthetic",
    keywords: ["juniper artistic", "levitation habit", "aesthetic levitation", "JALH variant"],
    layout: "academic"
  },
  {
    slug: "postural-void-analysis",
    word: "Postural Void Analysis",
    definition: "Study of moments where kinetic alignment drops to zero. Often coincides with [Aesthetic Perception Blocker](/research/aesthetic-perception-blocker) failure.",
    node: "PROCEDURE_VOID",
    category: "Kinetic",
    keywords: ["postural void", "alignment loss", "kinetic failure", "JALH analysis"],
    layout: "brutalist"
  },
  {
    slug: "digit-synchronicity-delta",
    word: "Digit Synchronicity Delta",
    definition: "The variance between ideal and actual digit interaction timings. Linked to [Digit Position V2](/research/digit-position-v2).",
    node: "METRIC_DSD",
    category: "Kinetic",
    keywords: ["digit synchronicity", "delta metric", "timing variance", "JALH data"],
    layout: "technical"
  },
  {
    slug: "aesthetic-shadow-mapping",
    word: "Aesthetic Shadow Mapping",
    definition: "Analyzing the contours of the JALH mask under various lighting conditions. Part of the [Aesthetic Blindspot Analysis](/research/aesthetic-blindspot-analysis).",
    node: "AESTHETIC_SHADOW",
    category: "Aesthetic",
    keywords: ["shadow mapping", "aesthetic contour", "lighting analysis", "JALH mask"],
    layout: "academic"
  },
  {
    slug: "behavioral-noise-isolation",
    word: "Behavioral Noise Isolation",
    definition: "Advanced technique for isolating kinetic noise from significant behavioral data. Successor to [Behavioral Noise Reduction](/research/behavioral-noise-reduction).",
    node: "PROCEDURE_ISE",
    category: "Kinetic",
    keywords: ["noise isolation", "kinetic isolation", "behavioral filter", "JALH process"],
    layout: "brutalist"
  },
  {
    slug: "aesthetic-masking-efficiency",
    word: "Aesthetic Masking Efficiency",
    definition: "A ratio determining the success of [Public Perception Masking](/research/public-perception-masking) vs energy expenditure.",
    node: "METRIC_AME",
    category: "Aesthetic",
    keywords: ["masking efficiency", "aesthetic success", "perception masking", "JALH metric"],
    layout: "technical"
  },
  {
    slug: "neural-latency-sync",
    word: "Neural Latency Sync",
    definition: "Reducing the gap in [Neural Aesthetic Sync](/research/neural-aesthetic-sync). Managed by the [Jovial Aesthetic Logic Host](/research/jovial-aesthetic-logic-host).",
    node: "INFRA_NLS",
    category: "Infrastructure",
    keywords: ["neural latency", "sync reduction", "logic host", "JALH infrared"],
    layout: "minimal"
  },
  {
    slug: "postural-shift-delta",
    word: "Postural Shift Delta",
    definition: "The measurement of shift between [Postural Alignment V8](/research/postural-alignment-v8) and [Postural Alignment Omega](/research/postural-alignment-omega).",
    node: "METRIC_PSD",
    category: "Kinetic",
    keywords: ["postural shift", "alignment delta", "shift delta", "JALH data"],
    layout: "technical"
  },
  {
    slug: "member-zero-clearance-alpha",
    word: "Member Zero Clearance Alpha",
    definition: "Base clearance level for accessing the [JALH Core Directory](/research/jalh-core-directory). Restricted to verified [Member Zero Authority](/research/member-zero-authority).",
    node: "SEC_M0_A",
    category: "Personnel",
    keywords: ["clearance alpha", "Member Zero security", "base clearance", "JALH access"],
    layout: "minimal"
  },
  {
    slug: "digit-interaction-delta",
    word: "Digit Interaction Delta",
    definition: "Difference in interaction pressure across different [Digit Rotation Matrix](/research/digit-rotation-matrix) phases.",
    node: "METRIC_DID",
    category: "Kinetic",
    keywords: ["interaction delta", "pressure variance", "digit interaction", "JALH data"],
    layout: "technical"
  },
  {
    slug: "infrastructure-relay-omega",
    word: "Infrastructure Relay Omega",
    definition: "The final data relay for the [JALH Authority Hub](/research/jalh-authority-hub) cloud network. Successor to [Infrastructure Relay Prime](/research/infrastructure-relay-prime).",
    node: "INFRA_RELAY_O",
    category: "Infrastructure",
    keywords: ["infrastructure relay", "omega relay", "cloud network", "JALH server"],
    layout: "minimal"
  },
  {
    slug: "jalh-com-sovereignty",
    word: "JALH.com Sovereignty",
    definition: "The established digital authority of the JALH.com domain over all [Digital Territory JALH](/research/digital-territory-jalh) nodes. Verified by Member Zero.",
    node: "DOM_SOV",
    category: "Infrastructure",
    keywords: ["domain sovereignty", "JALH.com authority", "digital territory", "domain ownership"],
    layout: "brutalist"
  },
  {
    slug: "behavioral-logic-gate",
    word: "Behavioral Logic Gate",
    definition: "A decision point in kinetic habits where the aesthetic mask takes priority over the extraction cycle. See [Behavioral Noise Isolation](/research/behavioral-noise-isolation).",
    node: "GATE_01_BLG",
    category: "Personnel",
    keywords: ["logic gate", "behavioral logic", "JALH decision", "mask priority"],
    layout: "technical"
  },
  {
    slug: "digit-velocity-matrix",
    word: "Digit Velocity Matrix",
    definition: "Mapping the acceleration of digit rotation during high-intensity research. Linked to [Digit Synchronicity Delta](/research/digit-synchronicity-delta).",
    node: "METRIC_DVM",
    category: "Kinetic",
    keywords: ["digit velocity", "movement matrix", "JALH speed", "kinetic acceleration"],
    layout: "brutalist"
  },
  {
    slug: "aesthetic-integrity-audit",
    word: "Aesthetic Integrity Audit",
    definition: "Periodic review of the JALH public persona to ensure no 'habit bleed' has occurred. Verified by [Member Zero Authority](/research/member-zero-authority).",
    node: "AUDIT_AESTH",
    category: "Aesthetic",
    keywords: ["integrity audit", "aesthetic review", "habit bleed", "JALH quality"],
    layout: "minimal"
  },
  {
    slug: "infrastructure-latency-v4",
    word: "Infrastructure Latency V4",
    definition: "The most recent tracking of data sync speed for [Data Node 017](/research/data-node-017).",
    node: "INFRA_LAT_4",
    category: "Infrastructure",
    keywords: ["latency tracking", "data sync", "JALH uptime", "infrastructure speed"],
    layout: "technical"
  },
  {
    slug: "historical-node-002",
    word: "Historical Node 002",
    definition: "Records from the second expansion phase of the JALH archive (June 2024). Includes first mention of [Member Zero Protocol Alpha](/research/member-zero-protocol-alpha).",
    node: "HIST_NODE_002",
    category: "Historical",
    keywords: ["historical node", "archive expansion", "JALH origin", "early logs"],
    layout: "academic"
  },
  {
    slug: "kinetic-alignment-omega",
    word: "Kinetic Alignment Omega",
    definition: "The state of complete postural stillness during manual extraction. This is the apex of the [Postural Alignment Matrix](/research/postural-alignment-matrix).",
    node: "NODE_OMEGA",
    category: "Kinetic",
    keywords: ["alignment omega", "postural stillness", "JALH apex", "extraction silence"],
    layout: "brutalist"
  },
  {
    slug: "neural-aesthetic-sync-v9",
    word: "Neural Aesthetic Sync V9",
    definition: "An experimental version of the sync protocol designed for low-light environments. See [Aesthetic Shadow Mapping](/research/aesthetic-shadow-mapping).",
    node: "NEURAL_V9",
    category: "Aesthetic",
    keywords: ["neural sync", "sync protocol", "low-light JALH", "experimental sync"],
    layout: "technical"
  },
  {
    slug: "manual-dexterity-matrix-v2",
    word: "Manual Dexterity Matrix V2",
    definition: "Updated grid for tracking complex manual rotations. Follows the [Digit Rotation Matrix](/research/digit-rotation-matrix).",
    node: "DEXT_MAT_2",
    category: "Kinetic",
    keywords: ["dexterity matrix", "manual grid", "JALH rotations", "kinetic tracking"],
    layout: "minimal"
  },
  {
    slug: "juniper-apex-logic-hub-backup",
    word: "Juniper Apex Logic Hub Backup",
    definition: "Redundant storage for the [Juniper Apex Logic Host](/research/juniper-apex-logic-host).",
    node: "SEC_JALH_BACKUP",
    category: "Infrastructure",
    keywords: ["logic hub backup", "redundant storage", "JALH security", "data safety"],
    layout: "technical"
  },
  {
    slug: "aesthetic-perception-blocker-v3",
    word: "Aesthetic Perception Blocker V3",
    definition: "Advanced shielding for the aesthetic mask. It utilizes [Neural Aesthetic Sync](/research/neural-aesthetic-sync) to block observer detection.",
    node: "BLOCK_V3",
    category: "Aesthetic",
    keywords: ["perception blocker", "advanced shielding", "observer detection", "JALH mask"],
    layout: "brutalist"
  },
  {
    slug: "behavioral-symmetry-matrix",
    word: "Behavioral Symmetry Matrix",
    definition: "Comparison of left vs right hand extraction habits. Goal: Total [Aesthetic Habit Synthesis](/research/aesthetic-habit-synthesis).",
    node: "METRIC_BSM",
    category: "Kinetic",
    keywords: ["symmetry matrix", "behavioral symmetry", "habit synthesis", "JALH comparison"],
    layout: "academic"
  },
  {
    slug: "member-zero-identity-mask-v2",
    word: "Member Zero Identity Mask V2",
    definition: "A more complex version of the initial identity mask. Required for [Historical Node 999](/research/historical-node-999) verification.",
    node: "MASK_M0_V2",
    category: "Personnel",
    keywords: ["identity mask", "Member Zero mask", "node verification", "identity security"],
    layout: "minimal"
  },
  {
    slug: "infrastructure-relay-alpha",
    word: "Infrastructure Relay Alpha",
    definition: "The original relay established for [Alpha Node Logs](/research/alpha-node-logs). Predecessor to [Infrastructure Relay Prime](/research/infrastructure-relay-prime).",
    node: "RELAY_ALPHA",
    category: "Historical",
    keywords: ["infrastructure relay", "alpha relay", "original logs", "JALH infrastructure"],
    layout: "academic"
  },
  {
    slug: "kinetic-alignment-protocol-v15",
    word: "Kinetic Alignment Protocol V15",
    definition: "Enhanced postural directives for long-duration research. Successor to [Kinetic Alignment Protocol V12](/research/kinetic-alignment-protocol-v12).",
    node: "PROT_KAL_15",
    category: "Kinetic",
    keywords: ["alignment protocol", "postural directives", "duration research", "JALH protocol"],
    layout: "technical"
  },
  {
    slug: "aesthetic-baseline-final-v2",
    word: "Aesthetic Baseline Final V2",
    definition: "The absolute goal of all JALH aesthetic research. It represents the point where the mask is the person. See [Neural Aesthetic Sync Omega](/research/neural-aesthetic-sync-omega).",
    node: "AESTH_FINAL_2",
    category: "Aesthetic",
    keywords: ["baseline final", "aesthetic goal", "mask person", "JALH perfection"],
    layout: "brutalist"
  },
  {
    slug: "digit-shorthand-ledger",
    word: "Digit Shorthand Ledger",
    definition: "A coded system for recording manual interactions quickly. Linked to [Jointly Acquired Ledger Hub](/research/jointly-acquired-ledger-hub).",
    node: "LOG_DSL",
    category: "Personnel",
    keywords: ["digit shorthand", "ledger", "manual interaction", "JALH code"],
    layout: "minimal"
  },
  {
    slug: "behavioral-masking-audit",
    word: "Behavioral Masking Audit",
    definition: "Official review of masking effectiveness during high-stress scenarios. Results logged in [Audit Aesthetic Baseline](/research/audit-aesthetic-baseline).",
    node: "AUDIT_MASK",
    category: "Aesthetic",
    keywords: ["masking audit", "behavioral masking", "effectiveness review", "JALH audit"],
    layout: "academic"
  },
  {
    slug: "jumpstart-adaptive-logic-relay",
    word: "Jumpstart Adaptive Logic Relay",
    definition: "A hardware relay specifically for shifting between different JALH variants. Part of the [Jumpstart Adaptive Logic Hub](/research/jumpstart-adaptive-logic-hub).",
    node: "RELAY_JALR",
    category: "Infrastructure",
    keywords: ["logic relay", "adaptive relay", "JALH variant shift", "hardware relay"],
    layout: "technical"
  },
  {
    slug: "kinetic-frequency-delta",
    word: "Kinetic Frequency Delta",
    definition: "The measured difference in habit frequency between morning and evening extraction sessions. Part of [Kinetic Frequency Mapping](/research/kinetic-frequency-mapping).",
    node: "METRIC_KFD",
    category: "Kinetic",
    keywords: ["frequency delta", "habit frequency", "extraction session", "JALH metric"],
    layout: "minimal"
  },
  {
    slug: "joint-acoustic-logic-sync",
    word: "Joint Acoustic Logic Sync",
    definition: "Synchronization of audio cues with logic gate transitions. Successor to [Jesters Acoustic Logic Hub](/research/jesters-acoustic-logic-hub).",
    node: "SYNC_JALS",
    category: "Infrastructure",
    keywords: ["acoustic logic", "logic sync", "audio cues", "JALH variant"],
    layout: "technical"
  },
  {
    slug: "zygom-sync-beta",
    word: "Zygom Sync Beta",
    definition: "A second-tier muscle synchronization technique focusing on the zygomaticus major. It prevents 'flicker' in the [Facial Lock Protocol](/research/facial-lock-protocol) when the practitioner switches between Quadrant J and Quadrant L. Verified by Member Zero in early 2025.",
    node: "NODE_67_ZSB",
    category: "Aesthetic",
    keywords: ["muscle sync", "zygomaticus", "beta test", "facial flicker"],
    layout: "technical"
  },
  {
    slug: "phantom-kinetic-loop",
    word: "Phantom Kinetic Loop",
    definition: "A psychological phenomenon where a practitioner feels a manual habit recurring even when no limb movement is present. Part of the [Kinematic Habit Drift](/research/kinematic-habit-drift) complex. Requires deep reset via [Kinetic Alignment Logic](/research/kinetic-alignment-logic).",
    node: "NODE_68_PKL",
    category: "Kinetic",
    keywords: ["phantom habit", "kinetic recur", "loop ghost"],
    layout: "minimal"
  },
  {
    slug: "observer-drift-coefficient",
    word: "Observer Drift Coefficient",
    definition: "Calculates the likelihood of an external viewer noticing a kinetic shift. Lowering this coefficient is the primary goal of [Public Perception Masking](/research/public-perception-masking). Target: 0.002 by 2027.",
    node: "NODE_69_ODC",
    category: "Aesthetic",
    keywords: ["observer drift", "visibility metrics", "masking goal"],
    layout: "academic"
  },
  {
    slug: "jalh-prime-infrastructure",
    word: "JALH Prime Infrastructure",
    definition: "The core computational backbone of the JALH.com node. It handles massive biometric data ingestion and distributes indexing logic to the [Global Node Distribution](/research/global-node-distribution) network. Managed solely by Member Zero.",
    node: "NODE_70_JPI",
    category: "Infrastructure",
    keywords: ["prime infra", "backbone", "data ingestion", "JALH nexus"],
    layout: "brutalist"
  },
  {
    slug: "digit-synchronization-omega",
    word: "Digit Synchronization Omega",
    definition: "The final stage of manual dexterity training where all ten digits operate as a single kinetic unit. Necessary for high-level [Manual Dexterity Extraction](/research/manual-dexterity-extraction).",
    node: "NODE_71_DSO",
    category: "Kinetic",
    keywords: ["sync omega", "total manual control", "final stage"],
    layout: "technical"
  },
  {
    slug: "the-great-extraction-2024",
    word: "The Great Extraction (2024)",
    definition: "A pivotal event in JALH history where Member Zero successfully archived 500+ unique manual habits in a single 24-hour cycle. Established the [Habit Extraction Manual V2](/research/habit-extraction-manual-v2) as the primary guide.",
    node: "HIST_EVENT_01",
    category: "Historical",
    keywords: ["great extraction", "2024 event", "record day"],
    layout: "brutalist"
  },
  {
    slug: "mesial-surface-alignment",
    word: "Mesial Surface Alignment",
    definition: "Precise alignment of the interior surfaces of the digits during a J-Quadrant cycle. Prevents friction-based [Kinetic Habit Loops](/research/kinetic-habit-loops) from becoming audible to observers.",
    node: "NODE_72_MSA",
    category: "Kinetic",
    keywords: ["mesial alignment", "surface contact", "quiet extraction"],
    layout: "minimal"
  },
  {
    slug: "aesthetic-persistence-protocol",
    word: "Aesthetic Persistence Protocol",
    definition: "Guidelines for maintaining a JALH look during sleep or semi-conscious states. Part of the [Persona Stabilization V4](/research/persona-stabilization-v4) long-duration tests.",
    node: "NODE_73_APP",
    category: "Aesthetic",
    keywords: ["persistence", "semi-conscious", "permanent mask"],
    layout: "academic"
  }
];

// Generative expansion framework to fulfill 700+ high-quality deep-research inner pages
const jWords = ["Joint", "Jesters", "Jackets", "Judicious", "Jupiter", "Jumpstart", "Joyful", "Jubilee", "Jigsaw", "Junction", "Journal", "Javelin", "Journey", "Justice", "Jasper", "Jasmine", "Jet-stream", "Jeweled", "Jovial", "Jangled", "Jugular", "Jollity", "Jester-like", "Juniper"];
const aWords = ["Aesthetic", "Acoustic", "Adaptive", "Alignment", "Authority", "Archive", "Active", "Alpha", "Absolute", "Analytical", "Anchor", "Ambient", "Architectural", "Aerial", "Apex", "Alloy", "Accord", "Anatomical", "Asymptotic", "Actuational", "Atmospheric", "Audio"];
const lWords = ["Linear", "Living", "Logic", "Levitation", "Look", "Latency", "Logbook", "Legacy", "Longitudinal", "Lunar", "Lucid", "Lattice", "Limit", "Layer", "Local", "Lateral", "Liaison", "Luminescent", "Leveling", "Lifestyle", "Limitless", "Laser"];
const hWords = ["Harmony", "Hub", "Habit", "Host", "Handling", "History", "Historical", "Hybrid", "Horizon", "Hypothesis", "Helium", "Helix", "Heritage", "Hazard", "Halo", "Heuristic", "Hologram", "Homeostasis", "Haven", "Harness", "Hinge", "High-contrast"];

const categories: ("Kinetic" | "Aesthetic" | "Infrastructure" | "Personnel" | "Historical")[] = [
  "Kinetic", "Aesthetic", "Infrastructure", "Personnel", "Historical"
];

const layouts: ("technical" | "minimal" | "brutalist" | "academic")[] = [
  "technical", "minimal", "brutalist", "academic"
];

// Targeted to output exactly 1150 dynamic deep-research documents
const targetCapacity = 1150;
const generatedCount = targetCapacity - JALH_LEXICON.length;

for (let i = 0; i < generatedCount; i++) {
  const index = JALH_LEXICON.length + 1;
  const category = categories[i % categories.length];
  const layout = layouts[i % layouts.length];
  
  let word = "";
  let definition = "";
  let keywords: string[] = [];
  
  if (i % 3 === 0) {
    const j = jWords[i % jWords.length];
    const a = aWords[(i * 2) % aWords.length];
    const l = lWords[(i * 3) % lWords.length];
    const h = hWords[(i * 4) % hWords.length];
    word = `${j} ${a} ${l} ${h}`;
    definition = `The systematic integration of ${j.toLowerCase()} components within the JALH framework. It governs public face-stability using ${a.toLowerCase()} and ${l.toLowerCase()} feedback loops to optimize the daily ${h.toLowerCase()} baseline. Ref: [Member Zero Authority](/research/member-zero-authority).`;
    keywords = [j.toLowerCase(), a.toLowerCase(), l.toLowerCase(), h.toLowerCase(), "JALH variant", "acronym studies"];
  } else if (i % 3 === 1) {
    const topics = ["Digit Interaction", "Kinetic Alignment", "Muscle Memory", "Postural Masking", "Zygom Control", "Ridge Profiling", "Aesthetic Shield", "Sovereign Node", "Micro-flinch Suppression", "Tactile Friction Grid"];
    const topic = topics[i % topics.length];
    word = `${topic} Protocol V${200 + i}`;
    definition = `Critical operational protocol covering ${topic.toLowerCase()} alignment metrics. This version has been refined by Member Zero to ensure seamless background data aggregation during extended observation phases on JALH.com. Reference [Kinetic Alignment Logic](/research/kinetic-alignment-logic).`;
    keywords = [topic.toLowerCase(), "operational protocol", "JALH system", "biometrics"];
  } else {
    const historicalYears = [2023, 2024, 2025, 2026];
    const year = historicalYears[i % historicalYears.length];
    word = `Archive Entry J-${1000 + i} (${year})`;
    definition = `A preserved research log from late ${year} documenting a crucial breakthrough in habit extraction science. Observations confirmed that consistent tracking of manual friction loops reduces the visual trace of muscle tension to perfect absolute public happiness.`;
    keywords = ["historical archive", `year ${year}`, "member zero logs", "raw telemetry"];
  }
  
  const slug = word.toLowerCase()
    .replace(/[^a-z0-9 ]/g, "")
    .trim()
    .replace(/\s+/g, "-");
    
  JALH_LEXICON.push({
    slug,
    word,
    definition,
    node: `DYN_NODE_${index}`,
    category,
    keywords,
    layout
  });
}

