import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../../data/portfolio';

export function ProjectModal({ id, onClose }: { id: string | null; onClose: () => void }) {
  const project = PROJECTS.find((p) => p.id === id);
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-navy-950/70 p-4 backdrop-blur-md"
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 200, damping: 22 }}
            onClick={(e) => e.stopPropagation()}
            className="gradient-border-animated relative max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-3xl glass-strong p-6 sm:p-8"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full glass text-fg"
            >
              <X size={18} />
            </button>
            <span className="text-xs uppercase tracking-[0.2em] text-royal-400">{project.subtitle}</span>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">{project.title}</h2>

            <p className="mt-5 text-sm leading-relaxed text-muted">{project.longDescription ?? project.description}</p>

            <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-muted">Tech Stack</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tags.map((t, ti) => (
                <span
                  key={t}
                  className={`rounded-full border border-base bg-soft px-3 py-1 text-xs text-fg transition-all duration-300 hover:scale-105 ${[
                    'hover:border-royal-400/50 hover:text-royal-400 hover:bg-royal-500/10',
                    'hover:border-accent-purple/50 hover:text-accent-purple hover:bg-accent-purple/10',
                    'hover:border-accent-cyan/50 hover:text-accent-cyan hover:bg-accent-cyan/10',
                    'hover:border-accent-pink/50 hover:text-accent-pink hover:bg-accent-pink/10',
                    'hover:border-accent-emerald/50 hover:text-accent-emerald hover:bg-accent-emerald/10',
                  ][ti % 5]}`}
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={project.github}
                className="btn-glass inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm text-fg"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href={project.demo}
                className="btn-gradient inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-white"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
