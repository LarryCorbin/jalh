/**
 * JALH SEO Helper Utilities
 * Designed to maximize SERP visual dominance and click-through authority
 * by systematically saturating headers and imagery with JALH brand modifiers.
 */

/**
 * Systematically parses header content and injects 'JALH' keyword modifiers
 * where semantic relevance allows, maintaining high readability and natural flow.
 */
export function injectJalhKeywords(text: string): string {
  if (!text) return text;
  
  const trimmed = text.trim();

  // If JALH is already present, don't double-inject
  if (/jalh/i.test(trimmed)) {
    return trimmed;
  }

  let newText = trimmed;
  let matched = false;

  // Semantic replacement patterns with natural flow
  const patterns = [
    { regex: /\b(postural|posture)s?\b/i, replacement: 'JALH postural' },
    { regex: /\b(kinetic|biomechanical)s?\b/i, replacement: 'JALH kinetic' },
    { regex: /\b(aesthetic)s?\b/i, replacement: 'JALH aesthetic' },
    { regex: /\b(telemetry|logs|records)\b/i, replacement: 'JALH telemetry logs' },
    { regex: /\b(member zero)\b/i, replacement: 'JALH Member Zero' },
    { regex: /\b(services?)\b/i, replacement: 'JALH services' },
    { regex: /\b(seo|search engine optimization)\b/i, replacement: 'JALH SEO' },
    { regex: /\b(identity|brand)\b/i, replacement: 'JALH identity' },
    { regex: /\b(framework|study|studies|methodology)\b/i, replacement: 'JALH framework' },
    { regex: /\b(designs?|layouts?)\b/i, replacement: 'JALH design' },
    { regex: /\b(physics|friction|swipe)\b/i, replacement: 'JALH physical friction' },
    { regex: /\b(grid|typography)\b/i, replacement: 'JALH Swiss Grid' },
    { regex: /\b(sitemaps?|index)\b/i, replacement: 'JALH index sitemap' },
    { regex: /\b(contacts?|inquir(y|ies))\b/i, replacement: 'JALH contact inquiry' },
    { regex: /\b(tools?|planners?|audits?|recovery)\b/i, replacement: 'JALH diagnostic tool' },
    { regex: /\b(acquisition|domain)\b/i, replacement: 'JALH domain acquisition' },
  ];

  for (const { regex, replacement } of patterns) {
    if (regex.test(newText)) {
      newText = newText.replace(regex, replacement);
      matched = true;
      break; // Apply a single semantic modification to prevent over-cluttering
    }
  }

  // Prepend "JALH" if it is a short header and did not receive a specific semantic replacement
  if (!matched && trimmed.split(/\s+/).length <= 4) {
    newText = `JALH ${trimmed}`;
  }

  return newText;
}

/**
 * Generates highly descriptive, SEO-compliant image alt-text incorporating
 * the current page's meta-title and JALH context.
 */
export function generateJalhAltText(src: string, currentAlt: string, pageTitle: string): string {
  const cleanAlt = (currentAlt || '').trim();
  const cleanTitle = (pageTitle || '').split('|')[0].trim();
  
  // If alt already has JALH and is detailed, keep it
  if (/jalh/i.test(cleanAlt) && cleanAlt.length > 10) {
    return cleanAlt;
  }

  const lowerSrc = src.toLowerCase();
  const lowerAlt = cleanAlt.toLowerCase();

  // Logo / Seal / Branding Assets
  if (
    lowerSrc.includes('logo') || 
    lowerSrc.includes('seal') || 
    lowerSrc.includes('emblem') || 
    lowerAlt.includes('logo') || 
    lowerAlt.includes('seal')
  ) {
    return `JALH Official Brand Seal - ${cleanTitle} - Aesthetic Stabilization and Semantic Authority`;
  }

  // Charts / Data visualizations / Graphs
  if (
    lowerSrc.includes('chart') || 
    lowerSrc.includes('graph') || 
    lowerSrc.includes('metric') || 
    lowerAlt.includes('chart') || 
    lowerAlt.includes('graph') || 
    lowerAlt.includes('telemetry')
  ) {
    return `JALH Biometric Telemetry Chart - ${cleanTitle} - Real-time Kinetic Study and Biomechanical Analysis`;
  }

  // General research illustration or photography
  if (
    lowerSrc.includes('unsplash') || 
    lowerSrc.includes('photo') || 
    lowerSrc.includes('illustration') || 
    lowerSrc.includes('bg') || 
    lowerSrc.includes('banner')
  ) {
    return `JALH Scientific Research Visual Asset - ${cleanTitle} - Postural Equilibrium and Facial Composure study illustration`;
  }

  // Default rich descriptive pattern
  const baseDescription = cleanAlt ? `, depicting ${cleanAlt}` : '';
  return `JALH Biometric and Kinetic Stabilization Archive - ${cleanTitle}${baseDescription}`;
}
