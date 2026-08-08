import { JALH_LEXICON } from '../data/lexicon.js';

/**
 * Automates semantic internal linking within body texts.
 * Scans content for occurrences of JALH lexicon terms and wraps them in
 * markdown links pointing to their dedicated research pages.
 * 
 * Implements modern SEO best practices:
 * 1. Matches longer multi-word phrases first to prevent partial link fragmentation.
 * 2. Respects existing links: skips words already inside standard Markdown links [text](url) or HTML tags.
 * 3. Restricts frequency: links each unique term at most once per page to keep a natural link profile.
 * 4. Excludes self-linking: does not link the term of the current page.
 */
export function injectSemanticLinks(text: string, currentSlug: string): string {
  if (!text) return '';

  // Sort terms by word length descending so "Zygomaticus Stabilizer" is matched before "Zygomaticus"
  const sortedEntries = [...JALH_LEXICON]
    .filter(e => e.slug !== currentSlug)
    .sort((a, b) => b.word.length - a.word.length);

  let modifiedText = text;

  for (const entry of sortedEntries) {
    const word = entry.word;
    // Escape regex characters
    const escapedWord = word.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');

    // Regex explanation:
    // 1. (\[[^\]]+\]\([^\)]+\)) matches any existing markdown link.
    // 2. (<[^>]+>) matches any HTML tag.
    // 3. \b(escapedWord)\b matches the target word/phrase with strict word boundaries.
    // By matching links and tags first and returning them untouched, we ensure
    // we never corrupt existing tags or links.
    const regex = new RegExp(`(\\[[^\\]]+\\]\\([^\\)]+\\)|<[^>]+>|\\b${escapedWord}\\b)`, 'gi');

    let linkCount = 0;
    modifiedText = modifiedText.replace(regex, (match) => {
      // If the matched string is an existing markdown link or HTML tag, preserve it
      if (match.startsWith('[') || match.startsWith('<')) {
        return match;
      }

      // Restrict to max 1 internal link per term per page to prevent spam-like keyword patterns
      if (linkCount >= 1) {
        return match;
      }

      linkCount++;
      return `[${match}](/research/${entry.slug})`;
    });
  }

  return modifiedText;
}
