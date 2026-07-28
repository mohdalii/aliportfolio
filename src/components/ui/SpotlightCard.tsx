import { useRef, type ReactNode } from 'react';

const ACCENTS = {
  royal: 'rgba(37,99,235,0.18)',
  purple: 'rgba(139,92,246,0.18)',
  cyan: 'rgba(34,211,238,0.18)',
  pink: 'rgba(236,72,153,0.18)',
  emerald: 'rgba(16,185,129,0.18)',
  amber: 'rgba(245,158,11,0.18)',
};

interface Props {
  children: ReactNode;
  className?: string;
  accent?: keyof typeof ACCENTS;
  animatedBorder?: boolean;
  lift?: boolean;
}

export function SpotlightCard({
  children,
  className = '',
  accent = 'royal',
  animatedBorder = false,
  lift = true,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    el.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  const glow = ACCENTS[accent];

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={`spotlight-card glass ${animatedBorder ? 'gradient-border-animated' : 'gradient-border'} ${
        lift ? 'glass-card' : ''
      } ${className}`}
      style={{ ['--accent-glow' as string]: glow }}
    >
      {children}
    </div>
  );
}
