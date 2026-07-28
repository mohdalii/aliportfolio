import { useRef, useState, type ReactNode, type ButtonHTMLAttributes } from 'react';
import { motion } from 'framer-motion';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  strength?: number;
  as?: 'button' | 'a';
  href?: string;
}

export function MagneticButton({ children, strength = 0.4, as = 'button', href, className = '', ...rest }: Props) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * strength, y: y * strength });
  };

  const Comp: any = as === 'a' ? motion.a : motion.button;

  return (
    <Comp
      ref={ref as any}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      className={className}
      {...rest}
    >
      {children}
    </Comp>
  );
}
