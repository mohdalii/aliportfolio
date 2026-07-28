import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, CornerDownLeft } from 'lucide-react';
import { NAV_LINKS, PROFILE } from '../data/portfolio';

const ACTIONS = [
  ...NAV_LINKS.map((l) => ({ label: l.label, hint: 'Navigate', action: () => document.querySelector(l.href)?.scrollIntoView({ behavior: 'smooth' }) })),
  { label: 'Download Resume', hint: 'Action', action: () => window.open(PROFILE.resumeUrl, '_blank') },
  { label: 'Email Me', hint: 'Action', action: () => (window.location.href = `mailto:${PROFILE.email}`) },
  { label: 'GitHub', hint: 'External', action: () => window.open(PROFILE.github, '_blank') },
  { label: 'LinkedIn', hint: 'External', action: () => window.open(PROFILE.linkedin, '_blank') },
];

export function CommandPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);

  const filtered = ACTIONS.filter((a) => a.label.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    if (open) {
      setQuery('');
      setActive(0);
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowDown') setActive((a) => Math.min(a + 1, filtered.length - 1));
      if (e.key === 'ArrowUp') setActive((a) => Math.max(a - 1, 0));
      if (e.key === 'Enter' && filtered[active]) {
        filtered[active].action();
        onClose();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, filtered, active, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[90] flex items-start justify-center bg-navy-950/70 p-4 pt-[18vh] backdrop-blur-md"
        >
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.97 }}
            onClick={(e) => e.stopPropagation()}
            className="gradient-border w-full max-w-xl overflow-hidden rounded-2xl glass-strong"
          >
            <div className="flex items-center gap-3 border-b border-base px-4 py-3.5">
              <Search size={18} className="text-muted" />
              <input
                autoFocus
                value={query}
                onChange={(e) => { setQuery(e.target.value); setActive(0); }}
                placeholder="Search sections and actions..."
                className="flex-1 bg-transparent text-sm text-fg outline-none placeholder:text-muted"
              />
              <kbd className="rounded glass px-2 py-0.5 text-[10px] text-muted">ESC</kbd>
            </div>
            <div className="max-h-72 overflow-y-auto p-2">
              {filtered.length === 0 && (
                <p className="px-3 py-6 text-center text-sm text-muted">No results</p>
              )}
              {filtered.map((a, i) => (
                <button
                  key={a.label}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => { a.action(); onClose(); }}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm ${
                    i === active ? 'glass text-fg' : 'text-muted'
                  }`}
                >
                  <span>{a.label}</span>
                  <span className="flex items-center gap-2 text-[10px] uppercase tracking-wider">
                    {a.hint}
                    {i === active && <CornerDownLeft size={12} />}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
