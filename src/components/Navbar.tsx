import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { NAV_LINKS } from '../data/portfolio';
import { useTheme } from '../context/ThemeContext';
import { MagneticButton } from './ui/MagneticButton';

export function Navbar({ onCommand }: { onCommand: () => void }) {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive('#' + e.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    NAV_LINKS.forEach((l) => {
      const el = document.querySelector(l.href);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex w-full max-w-[1280px] items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
          scrolled ? 'glass-strong shadow-soft' : 'glass'
        }`}
      >
        <button onClick={() => go('#home')} className="group flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl btn-electric font-bold text-white transition group-hover:scale-105">M</span>
          <span className="hidden text-sm font-semibold tracking-wide sm:block">
            MOHAMMED<span className="gradient-text-electric">.</span>ALI
          </span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((l) => (
            <button
              key={l.href}
              onClick={() => go(l.href)}
              className={`relative rounded-lg px-3.5 py-2 text-sm transition-colors ${
                active === l.href ? 'text-fg' : 'text-muted hover:text-fg'
              }`}
            >
              {active === l.href && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 -z-10 rounded-lg glass"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              {l.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onCommand}
            className="hidden items-center gap-2 rounded-lg glass px-3 py-2 text-xs text-muted transition hover:text-fg lg:flex"
          >
            <span>⌘K</span>
          </button>
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="grid h-9 w-9 place-items-center rounded-lg glass text-muted transition hover:text-fg"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <MagneticButton
            onClick={() => go('#contact')}
            className="hidden btn-electric rounded-lg px-4 py-2 text-sm font-medium text-white sm:block"
          >
            Let's talk
          </MagneticButton>
          <button
            onClick={() => setOpen((o) => !o)}
            className="grid h-9 w-9 place-items-center rounded-lg glass text-fg md:hidden"
            aria-label="Menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute inset-x-4 top-20 rounded-2xl glass-strong p-4 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <button
                  key={l.href}
                  onClick={() => go(l.href)}
                  className={`rounded-lg px-4 py-3 text-left text-sm ${
                    active === l.href ? 'glass text-fg' : 'text-muted'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
