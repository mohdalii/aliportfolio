import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

export function AnimatedCounter({
  value,
  decimals = 0,
  suffix = '',
  duration = 1.8,
}: {
  value: number;
  decimals?: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 60, damping: 18 });
  const display = useTransform(spring, (v) => v.toFixed(decimals));

  useEffect(() => {
    if (inView) mv.set(value);
  }, [inView, value, mv]);

  useEffect(() => {
    const unsub = display.on('change', (v) => {
      if (ref.current) ref.current.textContent = v + suffix;
    });
    return () => unsub();
  }, [display, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      {eyebrow && (
        <Reveal>
          <span className="mb-3 inline-block rounded-full glass px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-muted">
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          <span className="gradient-text">{title}</span>
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
