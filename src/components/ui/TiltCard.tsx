import { useRef, useState, type ReactNode } from 'react';
import { motion } from 'framer-motion';

export function TiltCard({ children, className = '', max = 10 }: { children: ReactNode; className?: string; max?: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [transform, setTransform] = useState('');

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rx = (py - 0.5) * -2 * max;
    const ry = (px - 0.5) * 2 * max;
    setTransform(`perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setTransform('perspective(900px) rotateX(0deg) rotateY(0deg)')}
      animate={{ transform }}
      transition={{ type: 'spring', stiffness: 200, damping: 18 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
