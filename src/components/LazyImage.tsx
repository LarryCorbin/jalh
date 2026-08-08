import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  placeholderColor?: string;
}

export function LazyImage({
  src,
  alt,
  className = "",
  placeholderColor = "bg-neutral-100 dark:bg-neutral-900",
  ...props
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If browser doesn't support IntersectionObserver, load immediately
    if (!('IntersectionObserver' in window)) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '150px', // Start loading slightly before the image enters viewport
        threshold: 0.01,
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div 
      ref={imageRef} 
      className={`relative overflow-hidden ${className}`}
      id={`lazy-image-container-${src.split('/').pop()?.split('.')[0] || 'img'}`}
    >
      {/* Skeleton / Placeholder state while not loaded */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            key="placeholder"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className={`absolute inset-0 z-10 w-full h-full ${placeholderColor}`}
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/[0.04] dark:via-white/[0.02] to-transparent" />
          </motion.div>
        )}
      </AnimatePresence>

      {shouldLoad && (() => {
        // Dynamic audit and enrichment logic for maximum accessibility and image SEO indexing
        const filename = src.split('/').pop()?.split('?')[0]?.split('.')[0] || '';
        const formattedName = filename
          .replace(/[-_]+/g, ' ')
          .split(' ')
          .map(w => w.charAt(0).toUpperCase() + w.slice(1))
          .join(' ');

        let resolvedAlt = alt?.trim();
        const isGeneric = !resolvedAlt || 
          ['image', 'img', 'logo', 'placeholder', 'file', 'graphic'].includes(resolvedAlt.toLowerCase());
        
        if (isGeneric) {
          resolvedAlt = `JALH Scientific Archive - ${formattedName || 'Biometric Laboratory Telemetry'} Illustration`;
        }

        const resolvedTitle = props.title || `JALH framework visualization mapping ${formattedName.toLowerCase() || 'observational metrics'}`;

        return (
          <img
            src={src}
            alt={resolvedAlt}
            title={resolvedTitle}
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-full object-cover transition-all duration-700 ${
              isLoaded ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-102 blur-md'
            }`}
            referrerPolicy="no-referrer"
            {...props}
          />
        );
      })()}
    </div>
  );
}
