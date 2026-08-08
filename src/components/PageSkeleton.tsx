import React from 'react';
import { motion } from 'motion/react';

// Common shimmer animation classes
const SHIMMER_BASE = "relative overflow-hidden bg-neutral-200 dark:bg-neutral-900 rounded-2xl before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-neutral-300/10 dark:before:via-white/5 before:to-transparent";

export function PageSkeleton() {
  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-16 pt-32 pb-24 space-y-12 w-full text-left">
      {/* Breadcrumb line skeleton */}
      <div className="flex items-center gap-2">
        <div className="w-12 h-3.5 bg-neutral-300 dark:bg-neutral-800 rounded animate-pulse" />
        <div className="w-3.5 h-3.5 bg-neutral-200 dark:bg-neutral-800/60 rounded-full animate-pulse" />
        <div className="w-20 h-3.5 bg-neutral-300 dark:bg-neutral-800 rounded animate-pulse" />
      </div>

      {/* Hero Header Skeleton */}
      <div className="space-y-4 max-w-3xl">
        <div className="h-4 w-32 bg-purple-500/20 dark:bg-purple-500/10 border border-purple-500/20 rounded-full animate-pulse" />
        <div className="h-12 w-4/5 bg-neutral-300 dark:bg-neutral-800 rounded-xl animate-pulse" />
        <div className="h-5 w-full bg-neutral-200 dark:bg-neutral-900/60 rounded-lg animate-pulse" />
        <div className="h-5 w-2/3 bg-neutral-200 dark:bg-neutral-900/60 rounded-lg animate-pulse" />
      </div>

      {/* Grid Content skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
        {[1, 2, 3].map((card) => (
          <div key={card} className="border border-neutral-200 dark:border-white/5 bg-neutral-50/40 dark:bg-white/[0.02] p-6 rounded-2xl space-y-4 animate-pulse">
            <div className="w-10 h-10 rounded-xl bg-neutral-300 dark:bg-neutral-800" />
            <div className="h-6 w-1/2 bg-neutral-300 dark:bg-neutral-800 rounded-md" />
            <div className="space-y-2">
              <div className="h-3.5 w-full bg-neutral-200 dark:bg-neutral-900/60 rounded" />
              <div className="h-3.5 w-5/6 bg-neutral-200 dark:bg-neutral-900/60 rounded" />
              <div className="h-3.5 w-2/3 bg-neutral-200 dark:bg-neutral-900/60 rounded" />
            </div>
            <div className="pt-2">
              <div className="h-8 w-24 bg-neutral-300 dark:bg-neutral-800 rounded-lg" />
            </div>
          </div>
        ))}
      </div>

      {/* Paragraph block skeleton */}
      <div className="space-y-3 pt-8 border-t border-neutral-200 dark:border-white/5">
        <div className="h-4 w-1/4 bg-neutral-300 dark:bg-neutral-800 rounded animate-pulse" />
        <div className="h-3.5 w-full bg-neutral-200 dark:bg-neutral-900/40 rounded animate-pulse" />
        <div className="h-3.5 w-full bg-neutral-200 dark:bg-neutral-900/40 rounded animate-pulse" />
        <div className="h-3.5 w-4/5 bg-neutral-200 dark:bg-neutral-900/40 rounded animate-pulse" />
      </div>
    </div>
  );
}

export function MetricsPageSkeleton() {
  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-16 pt-32 pb-24 space-y-12 w-full text-left">
      {/* Header */}
      <div className="space-y-3">
        <div className="h-3.5 w-28 bg-blue-500/20 dark:bg-blue-500/10 rounded-full animate-pulse" />
        <div className="h-10 w-2/3 bg-neutral-300 dark:bg-neutral-800 rounded-lg animate-pulse" />
        <div className="h-4 w-full max-w-xl bg-neutral-200 dark:bg-neutral-900/60 rounded animate-pulse" />
      </div>

      {/* Visual Chart Placeholder */}
      <div className="h-[280px] bg-neutral-100 dark:bg-neutral-950/80 border border-neutral-200 dark:border-white/5 rounded-2xl flex items-end justify-between p-6 animate-pulse">
        {[20, 45, 60, 30, 80, 55, 90, 40, 75, 65, 85, 50].map((height, i) => (
          <div 
            key={i} 
            className="w-full mx-1 bg-neutral-300 dark:bg-neutral-800/40 rounded-t-lg transition-all" 
            style={{ height: `${height}%` }}
          />
        ))}
      </div>

      {/* Network visualization skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
        <div className="lg:col-span-8 h-[400px] bg-neutral-100 dark:bg-neutral-950/40 border border-neutral-200 dark:border-white/5 rounded-3xl animate-pulse flex items-center justify-center">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-neutral-200 dark:bg-neutral-900/60 mx-auto" />
            <div className="w-32 h-4 bg-neutral-300 dark:bg-neutral-800 rounded mx-auto" />
          </div>
        </div>
        <div className="lg:col-span-4 space-y-6">
          <div className="h-[200px] border border-neutral-200 dark:border-white/5 p-6 rounded-2xl bg-neutral-50 dark:bg-white/[0.01] animate-pulse space-y-4">
            <div className="h-4 w-1/3 bg-neutral-300 dark:bg-neutral-800 rounded" />
            <div className="h-8 w-2/3 bg-neutral-300 dark:bg-neutral-800 rounded" />
            <div className="h-12 w-full bg-neutral-200 dark:bg-neutral-900/60 rounded" />
          </div>
          <div className="h-[184px] border border-neutral-200 dark:border-white/5 p-6 rounded-2xl bg-neutral-50 dark:bg-white/[0.01] animate-pulse space-y-4">
            <div className="h-4 w-1/2 bg-neutral-300 dark:bg-neutral-800 rounded" />
            <div className="space-y-2">
              <div className="h-6 w-full bg-neutral-200 dark:bg-neutral-900/60 rounded" />
              <div className="h-6 w-full bg-neutral-200 dark:bg-neutral-900/60 rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function LexiconDetailSkeleton() {
  return (
    <div className="max-w-4xl mx-auto px-6 sm:px-8 pt-32 pb-24 space-y-8 w-full text-left animate-pulse">
      <div className="w-36 h-4 bg-neutral-300 dark:bg-neutral-800 rounded" />
      
      <div className="space-y-4 border-b border-neutral-200 dark:border-white/10 pb-8">
        <div className="w-16 h-4 bg-purple-500/20 rounded" />
        <div className="w-3/4 h-10 bg-neutral-300 dark:bg-neutral-800 rounded-lg" />
        <div className="w-1/2 h-4 bg-neutral-200 dark:bg-neutral-900/60 rounded" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <div className="space-y-3">
            <div className="w-1/4 h-4 bg-neutral-300 dark:bg-neutral-800 rounded" />
            <div className="w-full h-24 bg-neutral-200 dark:bg-neutral-900/40 rounded-xl" />
          </div>
          <div className="space-y-3">
            <div className="w-1/3 h-4 bg-neutral-300 dark:bg-neutral-800 rounded" />
            <div className="w-full h-32 bg-neutral-200 dark:bg-neutral-900/40 rounded-xl" />
          </div>
        </div>
        <div className="space-y-6">
          <div className="p-6 bg-neutral-50 dark:bg-white/[0.01] border border-neutral-200 dark:border-white/5 rounded-2xl space-y-4">
            <div className="w-1/2 h-4 bg-neutral-300 dark:bg-neutral-800 rounded" />
            <div className="space-y-2">
              <div className="w-full h-3 bg-neutral-200 dark:bg-neutral-900/60 rounded" />
              <div className="w-full h-3 bg-neutral-200 dark:bg-neutral-900/60 rounded" />
              <div className="w-3/4 h-3 bg-neutral-200 dark:bg-neutral-900/60 rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
