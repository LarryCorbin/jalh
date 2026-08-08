import { motion } from 'motion/react';

interface ColorPatchProps {
  className?: string;
  color?: string;
  size?: string;
  blur?: string;
  opacity?: number;
  delay?: number;
}

export default function ColorPatch({ 
  className = "", 
  color = "bg-blue-500", 
  size = "w-96 h-96", 
  blur = "blur-[100px]", 
  opacity = 0.1,
  delay = 0 
}: ColorPatchProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: opacity, 
        scale: 1.05,
        x: 15,
        y: -15
      }}
      transition={{ 
        duration: 8 + Math.random() * 4, 
        repeat: Infinity, 
        repeatType: "reverse",
        ease: "easeInOut",
        delay 
      }}
      className={`absolute pointer-events-none rounded-full ${color} ${size} ${blur} ${className}`}
      style={{ zIndex: 0 }}
    />
  );
}
