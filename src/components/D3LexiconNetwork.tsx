import React, { useState, useEffect, useRef, useMemo } from 'react';
import * as d3 from 'd3';
import { Search, X, Info, HelpCircle, Network, Layers, ChevronRight, Activity, ArrowUpRight } from 'lucide-react';
import { JALH_LEXICON, LexiconEntry } from '../data/lexicon';
import { motion, AnimatePresence } from 'motion/react';

interface GraphNode extends d3.SimulationNodeDatum {
  slug: string;
  word: string;
  node: string;
  category: "Kinetic" | "Aesthetic" | "Infrastructure" | "Personnel" | "Historical";
  definition: string;
  keywords: string[];
}

interface GraphLink extends d3.SimulationLinkDatum<GraphNode> {
  source: string | GraphNode;
  target: string | GraphNode;
  type: 'citation' | 'category' | 'shared-keyword';
  value: number;
}

// Category styling colors
export const CATEGORY_COLORS = {
  Kinetic: {
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/30',
    text: 'text-blue-400',
    hoverText: 'group-hover:text-blue-300',
    glow: 'shadow-blue-500/20',
    color: '#3b82f6',
  },
  Aesthetic: {
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/30',
    text: 'text-pink-400',
    hoverText: 'group-hover:text-pink-300',
    glow: 'shadow-pink-500/20',
    color: '#ec4899',
  },
  Infrastructure: {
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/30',
    text: 'text-purple-400',
    hoverText: 'group-hover:text-purple-300',
    glow: 'shadow-purple-500/20',
    color: '#a855f7',
  },
  Personnel: {
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/30',
    text: 'text-amber-400',
    hoverText: 'group-hover:text-amber-300',
    glow: 'shadow-amber-500/20',
    color: '#f59e0b',
  },
  Historical: {
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/30',
    text: 'text-emerald-400',
    hoverText: 'group-hover:text-emerald-300',
    glow: 'shadow-emerald-500/20',
    color: '#10b981',
  }
};

export default function D3LexiconNetwork() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedNode, setSelectedNode] = useState<GraphNode | null>(null);
  
  // Container dimensional states
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 500 });

  // Handle ResizeObserver to maintain fluid, non-window calculations
  useEffect(() => {
    if (!containerRef.current) return;
    
    const resizeObserver = new ResizeObserver((entries) => {
      if (!entries || entries.length === 0) return;
      const { width, height } = entries[0].contentRect;
      // Set reasonable default falls
      setDimensions({
        width: Math.max(width, 300),
        height: Math.max(height, 450)
      });
    });

    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  // Parse and establish complete semantic nodes and citation links
  const { originalNodes, originalLinks } = useMemo(() => {
    const nodes: GraphNode[] = JALH_LEXICON.map(entry => ({
      slug: entry.slug,
      word: entry.word,
      node: entry.node,
      category: entry.category,
      definition: entry.definition,
      keywords: entry.keywords,
    }));

    const links: GraphLink[] = [];
    const slugMap = new Map(nodes.map(n => [n.slug, n]));

    // 1. Direct Citation Links (From markdown bracket references)
    nodes.forEach(sourceNode => {
      // Find all matches like [some word](/research/some-slug)
      const regex = /\[([^\]]+)\]\(\/research\/([^)]+)\)/g;
      let match;
      while ((match = regex.exec(sourceNode.definition)) !== null) {
        const targetSlug = match[2];
        if (slugMap.has(targetSlug) && targetSlug !== sourceNode.slug) {
          // Avoid duplicate links
          const exists = links.some(l => 
            (l.source === sourceNode.slug && l.target === targetSlug) ||
            (l.source === targetSlug && l.target === sourceNode.slug)
          );
          if (!exists) {
            links.push({
              source: sourceNode.slug,
              target: targetSlug,
              type: 'citation',
              value: 3
            });
          }
        }
      }
    });

    // 2. Keyword-based cluster links (For terms sharing identical keywords, keeping them clustered)
    // To prevent an absolute hairball, we only link if they share at least 2 keywords
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const nodeA = nodes[i];
        const nodeB = nodes[j];
        
        const shared = nodeA.keywords.filter(kw => nodeB.keywords.includes(kw));
        if (shared.length >= 2) {
          const exists = links.some(l => 
            (l.source === nodeA.slug && l.target === nodeB.slug) ||
            (l.source === nodeB.slug && l.target === nodeA.slug)
          );
          if (!exists) {
            links.push({
              source: nodeA.slug,
              target: nodeB.slug,
              type: 'shared-keyword',
              value: 1
            });
          }
        }
      }
    }

    return { originalNodes: nodes, originalLinks: links };
  }, []);

  // Filter nodes based on user query and selected category
  const { filteredNodes, filteredLinks } = useMemo(() => {
    let nodes = [...originalNodes];
    
    // Check search query (matches name, keywords, category, slug, or definition content)
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      nodes = nodes.filter(n => 
        n.word.toLowerCase().includes(query) ||
        n.node.toLowerCase().includes(query) ||
        n.keywords.some(kw => kw.toLowerCase().includes(query)) ||
        n.definition.toLowerCase().includes(query)
      );
    }

    // Check category filter
    if (selectedCategory !== 'All') {
      nodes = nodes.filter(n => n.category === selectedCategory);
    }

    // Find links that are active between the remaining filtered nodes
    const activeSlugs = new Set(nodes.map(n => n.slug));
    const links = originalLinks
      .filter(l => {
        const sourceSlug = typeof l.source === 'string' ? l.source : l.source.slug;
        const targetSlug = typeof l.target === 'string' ? l.target : l.target.slug;
        return activeSlugs.has(sourceSlug) && activeSlugs.has(targetSlug);
      })
      .map(l => ({
        ...l,
        source: typeof l.source === 'string' ? l.source : l.source.slug,
        target: typeof l.target === 'string' ? l.target : l.target.slug,
      }));

    return { filteredNodes: nodes, filteredLinks: links };
  }, [originalNodes, originalLinks, searchQuery, selectedCategory]);

  // Compute node/category distributions for visual metrics
  const categoryStats = useMemo(() => {
    const stats: Record<string, number> = { All: JALH_LEXICON.length };
    JALH_LEXICON.forEach(entry => {
      stats[entry.category] = (stats[entry.category] || 0) + 1;
    });
    return stats;
  }, []);

  // Set up the main D3 Simulation and SVGs
  useEffect(() => {
    if (!svgRef.current || !dimensions.width || !dimensions.height) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove(); // Clear previous cycles safely

    const width = dimensions.width;
    const height = dimensions.height;

    // Define radial markers for citation directionality
    svg.append('defs').append('marker')
      .attr('id', 'arrow')
      .attr('viewBox', '0 -5 10 10')
      .attr('refX', 22) // Avoid overlapping circle
      .attr('refY', 0)
      .attr('markerWidth', 5)
      .attr('markerHeight', 5)
      .attr('orient', 'auto')
      .append('path')
      .attr('d', 'M0,-5L10,0L0,5')
      .attr('fill', '#ffffff20');

    // Root Group with Zoom Support
    const gContainer = svg.append('g').attr('class', 'network-container');

    const zoomBehavior = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.15, 3])
      .on('zoom', (event) => {
        gContainer.attr('transform', event.transform);
      });

    svg.call(zoomBehavior);

    // Initial positioning: spread nodes in circle or random layout to help convergence
    const nodesData = filteredNodes.map((n, i) => {
      const angle = (i / filteredNodes.length) * 2 * Math.PI;
      const radius = Math.min(width, height) * 0.35 * Math.random() + 20;
      return {
        ...n,
        x: width / 2 + Math.cos(angle) * radius,
        y: height / 2 + Math.sin(angle) * radius,
      };
    });

    const linksData = filteredLinks.map(l => ({ ...l }));

    // Set up forces
    const simulation = d3.forceSimulation<GraphNode>(nodesData)
      .force('link', d3.forceLink<GraphNode, GraphLink>(linksData)
        .id(d => d.slug)
        .distance(d => d.type === 'citation' ? 110 : 80)
        .strength(0.4)
      )
      .force('charge', d3.forceManyBody().strength(-150).distanceMax(350))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collision', d3.forceCollide().radius(26).strength(0.8))
      .force('x', d3.forceX(width / 2).strength(0.08))
      .force('y', d3.forceY(height / 2).strength(0.08));

    // Render Links
    const link = gContainer.append('g')
      .attr('class', 'links')
      .selectAll('line')
      .data(linksData)
      .enter().append('line')
      .attr('stroke', d => d.type === 'citation' ? '#ffffff22' : '#ffffff0d')
      .attr('stroke-width', d => d.type === 'citation' ? 1.5 : 1)
      .attr('stroke-dasharray', d => d.type === 'citation' ? 'none' : '3, 3')
      .attr('marker-end', d => d.type === 'citation' ? 'url(#arrow)' : null);

    // Render Nodes Group
    const node = gContainer.append('g')
      .attr('class', 'nodes')
      .selectAll<SVGGElement, GraphNode>('g')
      .data(nodesData)
      .enter().append('g')
      .attr('class', 'node-group')
      .style('cursor', 'pointer')
      .on('click', (event, d) => {
        setSelectedNode(d);
        highlightSelectedNode(d);
        event.stopPropagation();
      });

    // Add glowing background circles for active/highlight states
    node.append('circle')
      .attr('r', 12)
      .attr('fill', 'transparent')
      .attr('stroke', d => CATEGORY_COLORS[d.category].color)
      .attr('stroke-width', 1.5)
      .attr('stroke-opacity', 0.25)
      .attr('class', 'pulse-ring');

    // Add solid center circles
    node.append('circle')
      .attr('r', 7)
      .attr('fill', d => CATEGORY_COLORS[d.category].color)
      .attr('class', 'center-dot');

    // Add brief readable labels for terminology
    node.append('text')
      .attr('dy', -14)
      .attr('text-anchor', 'middle')
      .attr('font-family', 'JetBrains Mono, SFMono-Regular, monospace')
      .attr('font-size', '8px')
      .attr('fill', '#9ca3af')
      .text(d => d.node.split('_').slice(-1)[0]) // Short identifier like RMA, MZA, FLP
      .attr('pointer-events', 'none')
      .attr('class', 'node-label');

    // Add interactivity and drag physics
    node.call(
      d3.drag<SVGGElement, GraphNode>()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended)
    );

    // Tooltip implementation
    const tooltip = d3.select(containerRef.current)
      .append('div')
      .attr('class', 'absolute hidden pointer-events-none z-50 bg-neutral-950/90 border border-neutral-800 backdrop-blur-xl p-3.5 rounded-xl shadow-2xl max-w-xs transition-opacity duration-200 font-sans')
      .style('box-shadow', '0 10px 25px -5px rgba(0, 0, 0, 0.5)');

    node.on('mouseover', function(event, d) {
      // Highlight hover node
      d3.select(this).select('.pulse-ring')
        .transition().duration(150)
        .attr('r', 18)
        .attr('stroke-opacity', 0.8)
        .attr('stroke-width', 2);
      
      d3.select(this).select('.center-dot')
        .transition().duration(150)
        .attr('r', 9);

      d3.select(this).select('.node-label')
        .transition().duration(150)
        .attr('fill', '#ffffff')
        .style('font-size', '9px');

      // Populate tooltip content
      tooltip.html(`
        <div class="space-y-1.5 text-left">
          <div class="flex items-center justify-between gap-4">
            <span class="text-[10px] font-mono text-gray-500 font-bold tracking-wider">${d.node}</span>
            <span class="text-[9px] px-2 py-0.5 rounded-full font-mono font-medium tracking-tight bg-white/5" style="color: ${CATEGORY_COLORS[d.category].color}">
              ${d.category}
            </span>
          </div>
          <h4 class="text-sm font-semibold text-white tracking-tight">${d.word}</h4>
          <p class="text-xs text-gray-400 font-light leading-relaxed line-clamp-3">${d.definition.replace(/\[([^\]]+)\]\(\/research\/[^)]+\)/g, '$1')}</p>
          <div class="flex flex-wrap gap-1 pt-1.5 border-t border-white/5">
            ${d.keywords.slice(0, 2).map(kw => `<span class="text-[9px] text-gray-600 font-mono">#${kw}</span>`).join('')}
          </div>
        </div>
      `);

      tooltip.style('left', (event.clientX - containerRef.current!.getBoundingClientRect().left + 15) + 'px')
             .style('top', (event.clientY - containerRef.current!.getBoundingClientRect().top + 15) + 'px')
             .style('display', 'block')
             .style('opacity', '1');
    })
    .on('mousemove', function(event) {
      tooltip.style('left', (event.clientX - containerRef.current!.getBoundingClientRect().left + 15) + 'px')
             .style('top', (event.clientY - containerRef.current!.getBoundingClientRect().top + 15) + 'px');
    })
    .on('mouseout', function() {
      // Restore standard state
      d3.select(this).select('.pulse-ring')
        .transition().duration(150)
        .attr('r', 12)
        .attr('stroke-opacity', 0.25)
        .attr('stroke-width', 1.5);
      
      d3.select(this).select('.center-dot')
        .transition().duration(150)
        .attr('r', 7);

      d3.select(this).select('.node-label')
        .transition().duration(150)
        .attr('fill', '#9ca3af')
        .style('font-size', '8px');

      tooltip.style('opacity', '0').style('display', 'none');
    });

    // Handle background clicks to clear selection state
    svg.on('click', () => {
      setSelectedNode(null);
      node.style('opacity', 1);
      link.style('opacity', 0.4).attr('stroke', d => d.type === 'citation' ? '#ffffff22' : '#ffffff0d');
    });

    // Real-time animation loop
    simulation.on('tick', () => {
      link
        .attr('x1', d => (d.source as any).x)
        .attr('y1', d => (d.source as any).y)
        .attr('x2', d => (d.target as any).x)
        .attr('y2', d => (d.target as any).y);

      node.attr('transform', d => `translate(${d.x},${d.y})`);
    });

    // Helper: Drag gestures
    function dragstarted(event: any, d: any) {
      if (!event.active) simulation.alphaTarget(0.2).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(event: any, d: any) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragended(event: any, d: any) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }

    // Helper: Neighborhood Highlighter
    function highlightSelectedNode(targetNode: GraphNode) {
      // Find connected nodes
      const linkedSlugs = new Set<string>();
      linkedSlugs.add(targetNode.slug);

      linksData.forEach(l => {
        const srcSlug = (l.source as any).slug || l.source;
        const tgtSlug = (l.target as any).slug || l.target;
        if (srcSlug === targetNode.slug) linkedSlugs.add(tgtSlug);
        if (tgtSlug === targetNode.slug) linkedSlugs.add(srcSlug);
      });

      // Dim non-connected nodes, keep target and neighbors glowing
      node.transition().duration(200)
        .style('opacity', d => linkedSlugs.has(d.slug) ? 1 : 0.18);

      link.transition().duration(200)
        .style('opacity', l => {
          const srcSlug = (l.source as any).slug || l.source;
          const tgtSlug = (l.target as any).slug || l.target;
          return (srcSlug === targetNode.slug || tgtSlug === targetNode.slug) ? 1 : 0.05;
        })
        .attr('stroke', l => {
          const srcSlug = (l.source as any).slug || l.source;
          const tgtSlug = (l.target as any).slug || l.target;
          return (srcSlug === targetNode.slug || tgtSlug === targetNode.slug) ? CATEGORY_COLORS[targetNode.category].color : '#ffffff0d';
        });
    }

    return () => {
      simulation.stop();
      tooltip.remove();
    };
  }, [filteredNodes, filteredLinks, dimensions]);

  // Clean raw markup references from markdown description safely
  const cleanMarkup = (text: string) => {
    return text.replace(/\[([^\]]+)\]\(\/research\/[^)]+\)/g, '$1');
  };

  return (
    <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-8 backdrop-blur-md text-left overflow-hidden">
      
      {/* Header and Controls */}
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold text-purple-500 uppercase tracking-widest">Interactive Semantic Core</span>
            <span className="bg-purple-500/10 text-purple-400 border border-purple-500/20 text-[9px] px-2 py-0.5 rounded-full font-mono uppercase font-bold tracking-tight">D3 Network</span>
          </div>
          <h2 className="text-2xl font-black text-white uppercase tracking-tight flex items-center gap-3">
            <Network className="text-purple-400 w-6 h-6 animate-pulse" />
            Lexicon Knowledge Graph
          </h2>
          <p className="text-sm text-gray-400 font-light max-w-2xl leading-relaxed">
            A dynamic, force-directed network representation of JALH research terminology and their cross-referencing citations. Grab and drag nodes to test physical spring dynamics.
          </p>
        </div>

        {/* Lightweight Search Bar */}
        <div className="w-full xl:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative flex-1 sm:w-80">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
            <input 
              type="text"
              placeholder="Search specific nodes, keywords, terms..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-10 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition-all font-normal"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Category Selection Filter Pills */}
      <div className="flex flex-wrap gap-2 border-b border-white/5 pb-6">
        {(['All', 'Kinetic', 'Aesthetic', 'Infrastructure', 'Personnel', 'Historical'] as const).map(cat => {
          const isActive = selectedCategory === cat;
          const count = categoryStats[cat] || 0;
          const colorStyles = cat !== 'All' ? CATEGORY_COLORS[cat] : null;

          return (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setSelectedNode(null);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-300 flex items-center gap-2 border ${
                isActive 
                  ? colorStyles
                    ? `${colorStyles.bg} ${colorStyles.border} ${colorStyles.text} font-bold ring-1 ring-white/10`
                    : 'bg-white text-black border-white font-bold'
                  : 'bg-white/5 text-gray-400 border-white/5 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat !== 'All' && colorStyles && (
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colorStyles.color }} />
              )}
              {cat}
              <span className={`text-[10px] px-1.5 py-0.2 rounded-md ${isActive ? 'bg-white/10 text-white' : 'bg-white/5 text-gray-500'}`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Graph Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* SVG Node Workspace */}
        <div className="lg:col-span-8 flex flex-col space-y-3">
          <div className="flex justify-between items-center text-xs font-mono text-gray-500 px-1">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              <span>Interactive Viewport (Zoom and drag enabled)</span>
            </div>
            <div>Showing {filteredNodes.length} of {JALH_LEXICON.length} nodes</div>
          </div>
          
          <div 
            ref={containerRef}
            className="w-full h-[520px] bg-[#080808]/85 border border-white/5 rounded-2xl relative overflow-hidden flex items-center justify-center group"
          >
            {/* Background alignment grid accent */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
            
            <svg 
              ref={svgRef}
              width={dimensions.width}
              height={dimensions.height}
              className="w-full h-full relative block"
            />

            {/* Quick Helper HUD */}
            <div className="absolute bottom-4 left-4 flex gap-3 text-[10px] text-gray-500 font-mono pointer-events-none bg-neutral-950/80 border border-white/5 px-3 py-1.5 rounded-lg backdrop-blur-md">
              <span className="flex items-center gap-1"><Layers size={10} /> Scroll to zoom</span>
              <span className="flex items-center gap-1"><ChevronRight size={10} /> Drag nodes to interact</span>
            </div>

            {/* Zero State Fallback */}
            {filteredNodes.length === 0 && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-neutral-950/90 text-center px-4">
                <HelpCircle className="text-gray-600 w-12 h-12" />
                <h3 className="text-base text-white font-medium">No active semantic nodes matched</h3>
                <p className="text-xs text-gray-500 max-w-sm font-light">
                  Adjust your current search term or filter categories to restore alignment connectivity.
                </p>
                <button 
                  onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                  className="px-4 py-2 mt-2 bg-purple-600 text-white rounded-xl text-xs font-mono hover:bg-purple-500 transition-colors"
                >
                  Reset Active Filters
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Dynamic Detail Inspector Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <AnimatePresence mode="wait">
            {selectedNode ? (
              <motion.div
                key={selectedNode.slug}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="p-6 bg-neutral-900/40 border border-white/10 rounded-2xl backdrop-blur-md space-y-5 shadow-2xl relative"
              >
                {/* Visual Category Cap Accent */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl" 
                  style={{ backgroundColor: CATEGORY_COLORS[selectedNode.category].color }}
                />

                <div className="flex items-center justify-between gap-4">
                  <span className="text-[10px] font-mono font-bold text-gray-500">{selectedNode.node}</span>
                  <span 
                    className="text-[10px] px-2.5 py-0.5 rounded-full font-mono font-bold uppercase tracking-wider bg-white/5"
                    style={{ color: CATEGORY_COLORS[selectedNode.category].color }}
                  >
                    {selectedNode.category}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white tracking-tight leading-tight">
                    {selectedNode.word}
                  </h3>
                  <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest flex items-center gap-1">
                    <Activity size={10} className="text-purple-400" />
                    Classification: {selectedNode.category} Node
                  </div>
                </div>

                <div className="space-y-3 pt-3 border-t border-white/5">
                  <span className="text-xs text-gray-500 uppercase tracking-widest font-mono font-bold block">Scientific Definition</span>
                  <p className="text-sm text-gray-300 font-light leading-relaxed">
                    {cleanMarkup(selectedNode.definition)}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-white/5">
                  <span className="text-xs text-gray-500 uppercase tracking-widest font-mono font-bold block">Meta Tags</span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedNode.keywords.map((kw, i) => (
                      <span 
                        key={i} 
                        className="text-[10px] font-mono bg-white/5 border border-white/10 px-2 py-0.5 rounded-md text-gray-400 hover:text-white hover:border-white/20 transition-colors"
                      >
                        #{kw}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex gap-3">
                  <a 
                    href={`/services/semantic-seo-domination/deep-crawl`}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 bg-white text-black hover:bg-purple-600 hover:text-white rounded-xl text-xs font-mono font-bold transition-all group"
                  >
                    View Research Nodes <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-8 border border-dashed border-white/10 rounded-2xl text-center space-y-4 text-gray-500 flex flex-col items-center justify-center h-[320px]"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-purple-400 border border-white/10 mb-2">
                  <Info size={20} className="animate-bounce" />
                </div>
                <h3 className="text-sm font-semibold text-white tracking-tight">Interactive Node Inspector</h3>
                <p className="text-xs text-gray-500 max-w-[240px] mx-auto leading-relaxed font-light">
                  Click on any node inside the network visualization to open live JALH technical telemetry, definition structures, and metadata dossiers.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Connected Terms / Terminology Quick Index Search List */}
          <div className="bg-white/[0.02] border border-white/5 p-5 rounded-2xl space-y-4">
            <h4 className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
              <Layers size={12} className="text-blue-400" />
              Terminology Index ({filteredNodes.length})
            </h4>
            
            <div className="max-h-[220px] overflow-y-auto space-y-1.5 pr-2 custom-scrollbar">
              {filteredNodes.slice(0, 10).map((entry) => (
                <button
                  key={entry.slug}
                  onClick={() => {
                    const matchNode = originalNodes.find(n => n.slug === entry.slug);
                    if (matchNode) {
                      setSelectedNode(matchNode);
                      // Locate corresponding svg element to trigger highlight
                      const elements = d3.selectAll('.node-group');
                      elements.each(function(d: any) {
                        if (d.slug === entry.slug) {
                          // Center on clicked element programmatically
                          const svg = d3.select(svgRef.current);
                          const g = svg.select('.network-container');
                          const width = dimensions.width;
                          const height = dimensions.height;
                          
                          svg.transition().duration(500).call(
                            d3.zoom().transform as any, 
                            d3.zoomIdentity.translate(width/2 - d.x, height/2 - d.y).scale(1.2)
                          );

                          // Trigger the hover/select highlighting visual state
                          d3.select(this).select('.pulse-ring')
                            .transition().duration(200)
                            .attr('r', 18)
                            .attr('stroke-opacity', 0.8)
                            .attr('stroke-width', 2);
                        } else {
                          d3.select(this).select('.pulse-ring')
                            .transition().duration(200)
                            .attr('r', 12)
                            .attr('stroke-opacity', 0.25)
                            .attr('stroke-width', 1.5);
                        }
                      });
                    }
                  }}
                  className="w-full flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 text-left transition-all group"
                >
                  <div className="space-y-0.5 max-w-[75%]">
                    <span className="text-[10px] font-mono text-gray-500 group-hover:text-gray-400">{entry.node}</span>
                    <h5 className="text-xs font-semibold text-white truncate">{entry.word}</h5>
                  </div>
                  <ChevronRight size={14} className="text-gray-600 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                </button>
              ))}
              {filteredNodes.length > 10 && (
                <p className="text-[10px] font-mono text-gray-600 text-center pt-2">
                  + {filteredNodes.length - 10} additional matching terms
                </p>
              )}
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
