import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gamepad2 } from 'lucide-react';

const SEQUENCE = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a',
];

export function KonamiEgg() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    let buf: string[] = [];
    const onKey = (e: KeyboardEvent) => {
      buf.push(e.key.length === 1 ? e.key.toLowerCase() : e.key);
      buf = buf.slice(-SEQUENCE.length);
      if (buf.join(',') === SEQUENCE.join(',')) {
        setActive(true);
        setTimeout(() => setActive(false), 5000);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.9 }}
          className="fixed bottom-24 left-1/2 z-[95] -translate-x-1/2"
        >
          <div className="gradient-border flex items-center gap-3 rounded-2xl glass-strong px-6 py-4">
            <Gamepad2 className="text-royal-400" />
            <div>
              <p className="text-sm font-semibold">You found the Konami code!</p>
              <p className="text-xs text-muted">Thanks for exploring — you're awesome.</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
