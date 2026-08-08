import { JALH_LEXICON } from '../data/lexicon.js';

/**
 * Utility to automatically ping major search engines (Google, Bing) 
 * for rapid indexation of the sitemap and newly published URLs.
 * 
 * Supports the standard Sitemap Ping Protocol and the advanced IndexNow Protocol.
 */
export async function pingSearchEngines(customUrls: string[] = []): Promise<{
  googleSitemap: boolean;
  bingSitemap: boolean;
  indexNow: boolean;
  pingedUrls: string[];
  message: string;
}> {
  const domain = 'https://jalh.com';
  const sitemapUrl = `${domain}/sitemap.xml`;
  
  // Collect target URLs for IndexNow
  const defaultUrls = [
    domain,
    `${domain}/sitemap`,
    `${domain}/archive`,
    `${domain}/lexicon`,
    `${domain}/logs`,
  ];
  
  // Combine custom URLs with defaults, limiting to safe bounds
  const targetUrls = [...new Set([...defaultUrls, ...customUrls])].slice(0, 20);

  console.log(`[SEO-PING] Initiating search engine indexation protocols for:`, targetUrls);

  const results = {
    googleSitemap: false,
    bingSitemap: false,
    indexNow: false,
    pingedUrls: targetUrls,
    message: ''
  };

  // 1. Google Sitemap Ping
  try {
    const googlePingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`;
    const response = await fetch(googlePingUrl);
    results.googleSitemap = response.status === 200;
    console.log(`[SEO-PING] Google Sitemap Ping status: ${response.status}`);
  } catch (err: any) {
    console.warn(`[SEO-PING] Google Sitemap Ping failed (Google has deprecated public ping endpoints, but standard query attempted):`, err.message);
  }

  // 2. Bing Sitemap Ping
  try {
    const bingPingUrl = `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`;
    const response = await fetch(bingPingUrl);
    results.bingSitemap = response.status === 200;
    console.log(`[SEO-PING] Bing Sitemap Ping status: ${response.status}`);
  } catch (err: any) {
    console.warn(`[SEO-PING] Bing Sitemap Ping failed:`, err.message);
  }

  // 3. Bing IndexNow Protocol (Advanced rapid-indexing mechanism)
  try {
    const indexNowKey = 'jalh_indexnow_key_11223344';
    const indexNowPayload = {
      host: 'jalh.com',
      key: indexNowKey,
      keyLocation: `${domain}/${indexNowKey}.txt`,
      urlList: targetUrls
    };

    const indexNowResponse = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(indexNowPayload)
    });

    results.indexNow = indexNowResponse.status === 200 || indexNowResponse.status === 202;
    console.log(`[SEO-PING] Bing/Yandex IndexNow status: ${indexNowResponse.status}`);
  } catch (err: any) {
    console.warn(`[SEO-PING] IndexNow API request failed:`, err.message);
  }

  results.message = `SEO Indexation completed: Google Sitemap (${results.googleSitemap ? 'OK' : 'FAIL'}), Bing Sitemap (${results.bingSitemap ? 'OK' : 'FAIL'}), IndexNow (${results.indexNow ? 'OK' : 'FAIL'})`;
  return results;
}
