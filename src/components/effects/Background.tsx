import { motion } from 'framer-motion';

export function Aurora() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-1/4 left-1/2 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-royal-600/30 blur-[120px] animate-aurora" />
      <div className="absolute top-1/3 -left-1/4 h-[55vh] w-[55vh] rounded-full bg-accent-purple/20 blur-[130px] animate-aurora [animation-delay:-6s]" />
      <div className="absolute bottom-0 right-0 h-[50vh] w-[50vh] rounded-full bg-accent-cyan/15 blur-[120px] animate-aurora [animation-delay:-12s]" />
      <div className="absolute top-1/2 left-1/3 h-[40vh] w-[40vh] rounded-full bg-accent-pink/12 blur-[130px] animate-aurora [animation-delay:-9s]" />
      <div className="absolute bottom-1/4 left-2/3 h-[38vh] w-[38vh] rounded-full bg-accent-emerald/10 blur-[120px] animate-aurora [animation-delay:-3s]" />
      <div className="absolute top-[15%] right-1/4 h-[36vh] w-[36vh] rounded-full bg-electric-500/15 blur-[130px] animate-aurora [animation-delay:-7s]" />
    </div>
  );
}

export function GridBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.35]">
      <div className="absolute inset-0 bg-grid [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,#000_30%,transparent_75%)]" />
    </div>
  );
}

export function NoiseOverlay() {
  return <div className="pointer-events-none fixed inset-0 -z-10 noise opacity-[0.04] mix-blend-overlay" />;
}

export function FloatingBlobs() {
  const blobs = [
    { c: 'bg-royal-500/20', s: 'h-72 w-72', p: 'top-[10%] left-[5%]', d: '0s' },
    { c: 'bg-accent-purple/15', s: 'h-96 w-96', p: 'top-[60%] left-[70%]', d: '-3s' },
    { c: 'bg-accent-cyan/15', s: 'h-64 w-64', p: 'top-[30%] left-[80%]', d: '-6s' },
    { c: 'bg-accent-pink/12', s: 'h-72 w-72', p: 'top-[75%] left-[15%]', d: '-4s' },
  ];
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className={`absolute ${b.p} ${b.s} ${b.c} rounded-full blur-[100px]`}
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: i * 1.5 }}
        />
      ))}
    </div>
  );
}
