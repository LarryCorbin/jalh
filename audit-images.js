import fs from 'fs';
import path from 'path';

const __dirname = path.resolve();
const srcDir = path.join(__dirname, 'src');

// Keep track of statistics
let totalFilesChecked = 0;
let totalImagesAudited = 0;
let missingAltCount = 0;
let genericAltCount = 0;
let fullyCompliantCount = 0;

const GENERIC_WORDS = ['image', 'img', 'logo', 'placeholder', 'file', 'graphic', 'banner', 'pic', 'picture'];

function walkDir(dir, callback) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walkDir(filePath, callback);
    } else if (stat.isFile() && /\.(tsx|ts|jsx|js|html)$/.test(file)) {
      callback(filePath);
    }
  });
}

function formatFilenameToLabel(src) {
  const filename = src.split('/').pop()?.split('?')[0]?.split('.')[0] || '';
  return filename
    .replace(/[-_]+/g, ' ')
    .split(' ')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

function auditFile(filePath) {
  totalFilesChecked++;
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Regex to find <LazyImage ... /> tags
  // Matches <LazyImage and then captures everything up to the closing bracket
  const lazyImageRegex = /<LazyImage\s+([^>]+?)\/?>/g;
  let match;
  let fileHasUpdates = false;

  const fileIssues = [];

  while ((match = lazyImageRegex.exec(content)) !== null) {
    totalImagesAudited++;
    const fullTag = match[0];
    const attributesStr = match[1];

    // Extract src, alt, title attributes
    const srcMatch = attributesStr.match(/src\s*=\s*(?:"([^"]+)"|'([^']+)'|\{([^}]+)\})/);
    const altMatch = attributesStr.match(/alt\s*=\s*(?:"([^"]+)"|'([^']+)'|\{([^}]+)\})/);
    const titleMatch = attributesStr.match(/title\s*=\s*(?:"([^"]+)"|'([^']+)'|\{([^}]+)\})/);

    const src = srcMatch ? (srcMatch[1] || srcMatch[2] || srcMatch[3]) : 'Unknown';
    const alt = altMatch ? (altMatch[1] || altMatch[2] || altMatch[3]) : '';
    const title = titleMatch ? (titleMatch[1] || titleMatch[2] || titleMatch[3]) : '';

    const label = formatFilenameToLabel(src);
    const recommendedAlt = `JALH Scientific Archive - ${label || 'Biometric Laboratory Telemetry'} Illustration`;
    const recommendedTitle = `JALH framework visualization mapping ${label.toLowerCase() || 'observational metrics'}`;

    let isMissing = false;
    let isGeneric = false;

    if (!altMatch || !alt.trim()) {
      isMissing = true;
      missingAltCount++;
    } else if (GENERIC_WORDS.includes(alt.toLowerCase().trim())) {
      isGeneric = true;
      genericAltCount++;
    } else {
      fullyCompliantCount++;
    }

    if (isMissing || isGeneric) {
      fileIssues.push({
        src,
        currentAlt: alt || '[MISSING]',
        issueType: isMissing ? 'MISSING' : 'GENERIC',
        recommendedAlt,
        recommendedTitle
      });

      // Let's automatically refactor and inject the descriptive alt in the source files!
      if (process.argv.includes('--fix')) {
        let updatedAttributes = attributesStr;
        
        if (isMissing) {
          updatedAttributes += `\n                  alt="${recommendedAlt}"`;
        } else if (isGeneric) {
          // Replace generic alt
          updatedAttributes = updatedAttributes.replace(/alt\s*=\s*(?:"[^"]*"|'[^']*'|\{[^}]*\})/, `alt="${recommendedAlt}"`);
        }

        // Inject title if missing
        if (!titleMatch) {
          updatedAttributes += `\n                  title="${recommendedTitle}"`;
        }

        const newTag = `<LazyImage ${updatedAttributes} />`;
        content = content.replace(fullTag, newTag);
        fileHasUpdates = true;
      }
    }
  }

  if (fileHasUpdates) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`[FIXED] Injected SEO attributes in ${path.relative(__dirname, filePath)}`);
  } else if (fileIssues.length > 0) {
    console.log(`\n⚠️  File: ${path.relative(__dirname, filePath)}`);
    fileIssues.forEach((issue) => {
      console.log(`  - Path: ${issue.src}`);
      console.log(`    Status: [${issue.issueType}] (Current Alt: "${issue.currentAlt}")`);
      console.log(`    Recommendation: alt="${issue.recommendedAlt}"`);
      console.log(`                    title="${issue.recommendedTitle}"`);
    });
  }
}

console.log('====================================================');
console.log('       JALH PREMIUM ACCESSIBILITY & IMAGE SEO AUDIT   ');
console.log('====================================================');
console.log(`Scanning source code in: ${srcDir}...`);

walkDir(srcDir, auditFile);

console.log('\n====================================================');
console.log('                   AUDIT SUMMARY                    ');
console.log('====================================================');
console.log(`Total Files Checked:       ${totalFilesChecked}`);
console.log(`Total Images Found:        ${totalImagesAudited}`);
console.log(`Fully Compliant Images:    ${fullyCompliantCount}`);
console.log(`Missing Alt Attributes:    ${missingAltCount}`);
console.log(`Generic Alt Attributes:    ${genericAltCount}`);
console.log('----------------------------------------------------');

if (missingAltCount > 0 || genericAltCount > 0) {
  if (process.argv.includes('--fix')) {
    console.log('✅ Automated fixes complete. All items fully enhanced and injected!');
  } else {
    console.log('💡 Tip: Run "npm run audit-images -- --fix" to automatically inject the recommended SEO parameters!');
  }
} else {
  console.log('🏆 100% Perfect Score! All images are fully optimized and indexed.');
}
console.log('====================================================');
