import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, ArrowUp, Heart } from 'lucide-react';
import { PROFILE, SOCIALS } from '../../data/portfolio';

const ICONS: Record<string, any> = { github: Github, linkedin: Linkedin, mail: Mail, phone: Phone };
const HOVER: Record<string, string> = {
  github: 'hover:border-royal-400/50 hover:text-royal-400 hover:bg-royal-500/10',
  linkedin: 'hover:border-accent-cyan/50 hover:text-accent-cyan hover:bg-accent-cyan/10',
  mail: 'hover:border-accent-purple/50 hover:text-accent-purple hover:bg-accent-purple/10',
  phone: 'hover:border-accent-emerald/50 hover:text-accent-emerald hover:bg-accent-emerald/10',
};

export function Footer({ onTop }: { onTop: () => void }) {
  return (
    <footer className="relative px-4 pb-10 pt-16">
      <div className="mx-auto max-w-[1280px]">
        <div className="gradient-border-animated rounded-3xl glass-strong p-8 text-center">
          <h3 className="text-2xl font-bold gradient-text">{PROFILE.name}</h3>
          <p className="mt-2 text-sm text-muted">Computer Science Engineer · AI Engineer · Full Stack Developer</p>

          <div className="mt-6 flex justify-center gap-3">
            {SOCIALS.map((s) => {
              const Icon = ICONS[s.icon];
              return (
                <motion.a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  whileHover={{ y: -4 }}
                  className={`grid h-10 w-10 place-items-center rounded-xl glass text-fg transition-all duration-300 ${HOVER[s.icon]}`}
                >
                  <Icon size={16} />
                </motion.a>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-base pt-6 sm:flex-row">
            <p className="text-xs text-muted">
              © {new Date().getFullYear()} {PROFILE.name}. Built with <Heart size={12} className="inline text-accent-pink" /> React + Vite.
            </p>
            <button
              onClick={onTop}
              className="group inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs text-fg transition hover:border-royal-400/50 hover:text-royal-400"
            >
              Back to top <ArrowUp size={14} className="transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
