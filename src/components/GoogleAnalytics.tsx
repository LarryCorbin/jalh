import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export default function GoogleAnalytics() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag === 'function') {
      // For GA4, we send a config command with the new path
      // This is the recommended way for SPAs
      window.gtag('config', 'G-ZGHJT11KKG', {
        page_path: location.pathname + location.search,
        page_location: window.location.href,
        page_title: document.title,
      });
      console.log('JALH Analytics: Tracked page view for', location.pathname);
    }
  }, [location]);

  return null;
}
