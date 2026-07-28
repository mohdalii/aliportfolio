import { motion } from 'framer-motion';
import { Code, Brain, Server } from 'lucide-react';
import { CERTIFICATIONS } from '../../data/portfolio';
import { SectionHeading, Reveal } from '../ui/Reveal';
import { SpotlightCard } from '../ui/SpotlightCard';

const ICONS: Record<string, any> = { code: Code, brain: Brain, server: Server };

const STYLES = [
  { accent: 'royal' as const, chip: 'from-royal-500/30 to-royal-700/10', ring: 'group-hover:border-royal-400/40', glow: 'shadow-glow' },
  { accent: 'purple' as const, chip: 'from-accent-purple/30 to-royal-500/10', ring: 'group-hover:border-accent-purple/40', glow: 'shadow-glow-purple' },
  { accent: 'cyan' as const, chip: 'from-accent-cyan/30 to-accent-emerald/10', ring: 'group-hover:border-accent-cyan/40', glow: 'shadow-glow-cyan' },
];

export function Certifications() {
  return (
    <section id="certifications" className="relative px-4 py-24">
      <div className="mx-auto max-w-[1280px]">
        <SectionHeading eyebrow="Certifications" title="Verified learning" subtitle="Industry and academic credentials." />

        <div className="grid gap-5 md:grid-cols-3">
          {CERTIFICATIONS.map((c, i) => {
            const Icon = ICONS[c.icon] ?? Code;
            const s = STYLES[i % STYLES.length];
            return (
              <Reveal key={c.title} delay={i * 0.08}>
                <SpotlightCard accent={s.accent} animatedBorder className="group h-full rounded-2xl p-6">
                  <div className="shimmer-line" />
                  <motion.div
                    animate={{ rotate: [0, 8, -8, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    className={`mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${s.chip} backdrop-blur`}
                  >
                    <Icon size={24} className="text-fg" />
                  </motion.div>
                  <h3 className="text-base font-semibold">{c.title}</h3>
                  <p className="text-xs uppercase tracking-wider gradient-text-cool font-medium">{c.issuer}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{c.description}</p>
                  <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-royal-500/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
