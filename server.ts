import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import fs from "fs";
import compression from "compression";
import { JALH_LEXICON } from "./src/data/lexicon.js";
import { pingSearchEngines } from "./src/utils/pingSeo.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(compression());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Host Canonicalization & Subdomain robots.txt handling for GSC Crawler Optimization
  app.use((req, res, next) => {
    const host = req.headers.host || '';
    const isLocal = host.includes('localhost') || host.includes('127.0.0.1') || host.includes('0.0.0.0');
    const isDevPreview = host.includes('run.app') || host.includes('aistudio') || host.includes('web-design-masterpiece') || host.includes('gitpod');
    
    // Serve robots.txt immediately for any subdomain to prevent Google Search Console 'robots.txt Not Fetched' errors
    if (req.path === '/robots.txt') {
      const robotsPath = path.join(process.cwd(), 'public', 'robots.txt');
      if (fs.existsSync(robotsPath)) {
        res.setHeader('Content-Type', 'text/plain');
        return res.sendFile(robotsPath);
      }
    }

    // 301 Redirect secondary subdomains (materials.jalh.com, chartlink.jalh.com, www.jalh.com) to canonical host (https://jalh.com)
    if (!isLocal && !isDevPreview && host !== 'jalh.com') {
      return res.redirect(301, `https://jalh.com${req.url}`);
    }

    // Redirect trailing slashes to non-trailing slashes for SEO consistency (except root /)
    if (req.path !== '/' && req.path.endsWith('/')) {
      const query = req.url.slice(req.path.length);
      const cleanPath = req.path.slice(0, -1);
      return res.redirect(301, cleanPath + query);
    }
    next();
  });

  // Debug middleware
  app.use((req, res, next) => {
    if (req.url.startsWith('/api')) {
      console.log(`API [${req.method}] Request: ${req.url}`);
    }
    next();
  });

  const apiRouter = express.Router();

  // Simple CORS for development/production parity
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("X-Backend-Status", "Operational-Archive-Node-001");
    next();
  });

  const BUILD_TIME = new Date().toISOString();

  // Diagnostic Endpoint
  apiRouter.get("/health", (req, res) => {
    res.json({ 
      status: "ok", 
      mode: process.env.NODE_ENV || "unknown",
      buildTime: BUILD_TIME,
      node: "ARCHIVE_001"
    });
  });

  // API Route for Contact Form
  apiRouter.post("/contact", async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      const smtpHost = process.env.SMTP_HOST?.trim();
      const smtpPort = parseInt(process.env.SMTP_PORT || "587", 10);
      const smtpUser = process.env.SMTP_USER?.trim();
      const smtpPass = process.env.SMTP_PASS;
      const contactEmail = process.env.CONTACT_EMAIL || "info@jalh.com";

      if (!smtpHost || !smtpUser || !smtpPass) {
        console.error("SMTP Configuration Incomplete");
        return res.status(500).json({ 
          error: "Gateway Configuration Error",
          code: "MISSING_CREDENTIALS"
        });
      }

      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
        tls: {
          rejectUnauthorized: false
        }
      });

      await transporter.sendMail({
        from: smtpUser, 
        to: contactEmail,
        subject: `JALH Inquiry: ${subject || 'General Inquiry'}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      });

      res.json({ 
        success: true, 
        message: "Inquiry protocols engaged. Gateway accepted payload."
      });
    } catch (error: any) {
      console.error("SMTP Failure:", error);
      res.status(500).json({ 
        error: "Transmission Failed",
        details: error.message
      });
    }
  });

  // API Route to manually/automatically trigger Search Engine Pings (Google, Bing IndexNow)
  apiRouter.post("/seo/ping", async (req, res) => {
    const { urls } = req.body;
    try {
      const result = await pingSearchEngines(urls || []);
      res.json({
        success: true,
        ...result
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: "Indexation ping execution failed",
        details: error.message
      });
    }
  });

  // Helper to resolve OG metadata details for any slug
  function getOgDetails(slug: string) {
    // Try to find in lexicon first
    const entry = JALH_LEXICON.find(e => e.slug === slug);
    if (entry) {
      return {
        title: entry.word,
        nodeId: entry.node,
        category: entry.category.toUpperCase(),
        desc: entry.definition,
        color: entry.category === 'Kinetic' ? '#3b82f6' :
               entry.category === 'Aesthetic' ? '#a855f7' :
               entry.category === 'Infrastructure' ? '#f59e0b' :
               entry.category === 'Personnel' ? '#10b981' : '#ec4899'
      };
    }

    // Predefined pages
    const pages: Record<string, any> = {
      'root': { title: 'JALH Archive Root', nodeId: 'NODE_CENTRAL', category: 'SYSTEM', desc: 'Central gateway for the J-A-L-H biometric framework and scientific logs.', color: '#3b82f6' },
      'sitemap': { title: 'HTML Sitemap & Index', nodeId: 'NODE_SITEMAP', category: 'METRICS', desc: 'Sovereign index mapping 120 taxonomic terms and core paths.', color: '#3b82f6' },
      'methodology': { title: 'Scientific Methodology', nodeId: 'NODE_METHOD', category: 'THEORY', desc: 'Theoretical outlines for kinetic habit extraction and zygomaticus stabilization.', color: '#a855f7' },
      'kinetic-analysis': { title: 'Kinetic Analysis Hub', nodeId: 'NODE_KINETIC', category: 'METRICS', desc: 'Biomechanical friction analysis and digit tracking.', color: '#3b82f6' },
      'logs': { title: 'Archive Logs Node 001', nodeId: 'NODE_LOGS', category: 'RECORDS', desc: 'Telemetry diaries and historical observation logs.', color: '#10b981' },
      'logs-alpha': { title: 'Alpha Relay Logs', nodeId: 'NODE_ALPHA', category: 'LEGACY', desc: 'Pre-codified legacy telemetry records prior to 2024.', color: '#ec4899' },
      'archive': { title: 'Complete Research Index', nodeId: 'NODE_INDEX', category: 'ARCHIVE', desc: 'Definitive public repository of all 120 verified files.', color: '#f59e0b' },
      'lexicon': { title: 'Glossary Lexicon', nodeId: 'NODE_GLOSSARY', category: 'TAXONOMY', desc: 'Taxonomic dictionary defining 120 core research elements.', color: '#a855f7' },
      'partnership': { title: 'Partnership Gateway', nodeId: 'NODE_PARTNER', category: 'ALLIANCE', desc: 'Decentralized integration and licensing protocols.', color: '#10b981' },
      'legal': { title: 'Legal Sovereignty Coordinates', nodeId: 'NODE_LEGAL', category: 'SOVEREIGNTY', desc: 'IP declarations and autonomous node guidelines.', color: '#ec4899' },
      'infrastructure': { title: 'Hosting & Server Spec', nodeId: 'NODE_SPEC', category: 'HARDWARE', desc: 'Hardware thermals, database spec, and telemetry spec.', color: '#f59e0b' },
      'behavioral-index': { title: 'Behavioral Ergonomics', nodeId: 'NODE_BEHAVIOR', category: 'STUDIES', desc: 'Micro-expression indicators and desk alignment constraints.', color: '#3b82f6' },
      'personnel': { title: 'Personnel Directory', nodeId: 'NODE_STAFF', category: 'IDENTITY', desc: 'Lead investigator Member Zero profiles and observer clearance index.', color: '#10b981' },
      'about-member-zero': { title: 'Member Zero Dossier', nodeId: 'NODE_MZERO', category: 'PROGENITOR', desc: 'Early journals, diaries, and behavioral philosophies compiled by the creator and progenitor of JALH.', color: '#a855f7' },
      'domain-gateway': { title: 'Domain Acquisition', nodeId: 'NODE_GATEWAY', category: 'VALUATION', desc: 'Bidding guidelines and transfer coordinates for JALH.com.', color: '#f59e0b' },
      'metrics': { title: 'Biometric Telemetry', nodeId: 'NODE_CHARTS', category: 'REALTIME', desc: 'Active observer fatigue gauges and spatial drift curves.', color: '#ec4899' },
      'lab': { title: 'Research Laboratory', nodeId: 'NODE_LAB', category: 'TRIALS', desc: 'Postural stabilizer trials and active sensory testing.', color: '#3b82f6' },
      'vision': { title: 'Sovereign Vision 2027', nodeId: 'NODE_ROADMAP', category: 'FORECAST', desc: 'Decentralized sensor networks and mobile tracking rigs.', color: '#a855f7' },
      'press': { title: 'Press & Media Index', nodeId: 'NODE_PRESS', category: 'MEDIA', desc: 'Official project filings and public disclosures.', color: '#10b981' },
      'api-docs': { title: 'Developer REST API', nodeId: 'NODE_DEVELOPER', category: 'INTEGRATION', desc: 'JSON schema structures and query limits for developers.', color: '#3b82f6' },
      'digit-interaction': { title: 'Digit Touch Mechanics', nodeId: 'NODE_TACTILE', category: 'PHYSICS', desc: 'Glass friction coefficients and swipe drag profiles.', color: '#a855f7' },
      'authority': { title: 'Semantic Authority Index', nodeId: 'NODE_SECURITY', category: 'DEFENSE', desc: 'Acronym mapping to defend footprint from indexing dilution.', color: '#ec4899' },
      'contact': { title: 'Encrypted Inquiry', nodeId: 'NODE_SECURE', category: 'INCOMING', desc: 'Direct secure relay for partnership and acquisition bids.', color: '#3b82f6' }
    };

    // Check mapping
    const matchedPage = pages[slug] || pages[slug.replace(/-/g, '_')] || pages[slug.replace(/services-/g, '')];
    if (matchedPage) return matchedPage;

    // Generic backup
    return {
      title: slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
      nodeId: 'NODE_DYNAMIC',
      category: 'RESEARCH',
      desc: 'Autonomous research node listed under the JALH ecosystem.',
      color: '#3b82f6'
    };
  }

  // Dynamic OpenGraph SVG Image Generator
  apiRouter.get("/og-image/:slug", (req, res) => {
    const slug = req.params.slug;
    const details = getOgDetails(slug);

    const accentColor = details.color;
    const svgWidth = 1200;
    const svgHeight = 630;

    // Beautiful technical sine/biometric wave coordinates
    let wavePath = "M 800 480 ";
    for (let i = 0; i <= 300; i += 20) {
      const x = 800 + i;
      const y = 480 + Math.sin(i * 0.04) * 45 * Math.exp(-((i - 150) ** 2) / 12000);
      wavePath += `L ${x} ${y} `;
    }

    const svg = `
<svg width="${svgWidth}" height="${svgHeight}" viewBox="0 0 ${svgWidth} ${svgHeight}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="${svgWidth}" height="${svgHeight}" fill="#030305"/>

  <defs>
    <radialGradient id="glow" cx="20%" cy="30%" r="65%" fx="20%" fy="30%">
      <stop offset="0%" stop-color="${accentColor}" stop-opacity="0.18"/>
      <stop offset="50%" stop-color="${accentColor}" stop-opacity="0.03"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="cornerGlow" cx="85%" cy="85%" r="45%">
      <stop offset="0%" stop-color="${accentColor}" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${svgWidth}" height="${svgHeight}" fill="url(#glow)"/>
  <rect width="${svgWidth}" height="${svgHeight}" fill="url(#cornerGlow)"/>

  <!-- Technical grid dots -->
  <g opacity="0.09">
    ${Array.from({ length: 31 }).map((_, i) => {
      const x = i * 40;
      return Array.from({ length: 17 }).map((_, j) => {
        const y = j * 40;
        return `<circle cx="${x}" cy="${y}" r="0.8" fill="#cbd5e1" />`;
      }).join('');
    }).join('')}
  </g>

  <!-- Frame Border -->
  <rect x="32" y="32" width="${svgWidth - 64}" height="${svgHeight - 64}" rx="16" stroke="#ffffff" stroke-opacity="0.07" stroke-width="1.5"/>

  <!-- Top Metadata Rail -->
  <text x="64" y="80" fill="#94a3b8" font-family="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" font-size="11" font-weight="bold" letter-spacing="3" opacity="0.65">JALH CENTRAL DATA REPOSITORY</text>
  <text x="${svgWidth - 64}" y="80" text-anchor="end" fill="${accentColor}" font-family="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" font-size="11" font-weight="bold" letter-spacing="3">NODE: ${details.nodeId}</text>
  <line x1="64" y1="100" x2="${svgWidth - 64}" y2="100" stroke="#ffffff" stroke-opacity="0.1" stroke-width="1"/>

  <!-- Category Badge Pill -->
  <rect x="64" y="132" width="160" height="28" rx="14" fill="${accentColor}" fill-opacity="0.1" stroke="${accentColor}" stroke-opacity="0.3" stroke-width="1"/>
  <circle cx="80" cy="146" r="3.5" fill="${accentColor}"/>
  <text x="94" y="150" fill="${accentColor}" font-family="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" font-size="10" font-weight="bold" letter-spacing="1.5">${details.category}</text>

  <!-- Title via foreignObject to wrap perfectly -->
  <foreignObject x="64" y="185" width="1072" height="110">
    <div xmlns="http://www.w3.org/1999/xhtml" style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 50px; font-weight: 900; color: #f8fafc; line-height: 1.1; letter-spacing: -1.5px; text-transform: uppercase;">
      ${details.title}
    </div>
  </foreignObject>

  <!-- Description Abstract via foreignObject to wrap and truncate if necessary -->
  <foreignObject x="64" y="300" width="1072" height="180">
    <div xmlns="http://www.w3.org/1999/xhtml" style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 19px; font-weight: 300; color: #cbd5e1; line-height: 1.6; text-align: left; opacity: 0.85;">
      ${details.desc}
    </div>
  </foreignObject>

  <!-- Dynamic Technical Sine Wave Visual -->
  <path d="${wavePath}" stroke="${accentColor}" stroke-width="2" stroke-linecap="round" stroke-dasharray="1 4" opacity="0.45"/>
  <path d="M 800 480 Q 950 360 1100 480" stroke="${accentColor}" stroke-width="1" opacity="0.15"/>
  <circle cx="950" cy="420" r="4.5" fill="${accentColor}" opacity="0.6"/>
  <line x1="950" y1="420" x2="950" y2="480" stroke="${accentColor}" stroke-dasharray="2 2" stroke-width="1" opacity="0.3"/>

  <!-- Bottom Branding Rail -->
  <line x1="64" y1="530" x2="${svgWidth - 64}" y2="530" stroke="#ffffff" stroke-opacity="0.1" stroke-width="1"/>
  <text x="64" y="565" fill="#94a3b8" font-family="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" font-size="11" font-weight="bold" letter-spacing="3" opacity="0.65">COGNITIVE ARCHIVE INDEXATION PROTOCOL</text>
  <text x="${svgWidth - 64}" y="565" text-anchor="end" fill="#f8fafc" font-family="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" font-size="13" font-weight="900" letter-spacing="2">JALH.COM</text>
</svg>
    `.trim();

    res.setHeader("Content-Type", "image/svg+xml");
    res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
    res.send(svg);
  });

  app.use("/api", apiRouter);

  // Use Vite middleware in development
  if (process.env.NODE_ENV !== "production") {
    console.log("Starting server in DEVELOPMENT mode");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production serving
    console.log("Starting server in PRODUCTION mode");
    const distPath = path.join(process.cwd(), 'dist');
    
    // Serve pre-rendered HTML on clean subpaths (e.g. /methodology or /research/some-slug)
    app.use((req, res, next) => {
      if (req.method !== 'GET') return next();
      
      const cleanPath = req.path.replace(/[^-a-zA-Z0-9_/]/g, "");
      if (!cleanPath || cleanPath === "/") {
        return next();
      }
      
      const potentialHTMLPath = path.join(distPath, cleanPath, 'index.html');
      if (fs.existsSync(potentialHTMLPath) && fs.statSync(potentialHTMLPath).isFile()) {
        res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
        return res.sendFile(potentialHTMLPath);
      }
      next();
    });

    // Serve static files from the build output with custom Cache-Control headers
    app.use(express.static(distPath, {
      maxAge: '1y',
      setHeaders: (res, filePath) => {
        if (filePath.endsWith('.html')) {
          res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
        } else if (filePath.match(/\.(js|css|woff2?|png|jpg|jpeg|gif|svg|ico)$/)) {
          // Bundled hashed assets and static fonts can be cached forever
          res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
        } else {
          // Regular static assets caching
          res.setHeader('Cache-Control', 'public, max-age=604800, must-revalidate');
        }
      }
    }));
    
    // Handle SPA fallback - REQUIRED for Google Search Console to avoid 404s on subpaths
    app.get('*', (req, res) => {
      res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
