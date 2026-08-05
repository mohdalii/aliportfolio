import { motion } from 'framer-motion';
import { GraduationCap, Lightbulb, Award, Users } from 'lucide-react';
import { STATS, SOFT_SKILLS } from '../../data/portfolio';
import { SectionHeading, Reveal, AnimatedCounter } from '../ui/Reveal';
import { SpotlightCard } from '../ui/SpotlightCard';

const ABOUT_CARDS = [
  {
    icon: GraduationCap,
    title: 'Education',
    body: 'B.Tech in Computer Science & Engineering. Coursework in algorithms, DBMS, AI, and distributed systems.',
    accent: 'royal' as const,
    glow: 'from-royal-500/25 to-royal-700/10',
  },
  {
    icon: Lightbulb,
    title: 'Skills',
    body: 'Full stack development, machine learning, generative AI, and 3D visualization across 5+ technologies.',
    accent: 'amber' as const,
    glow: 'from-accent-amber/25 to-accent-pink/10',
  },
  {
    icon: Award,
    title: 'Experience',
    body: 'Led the AI Floor Plan Generator and shipped multiple full-stack applications end-to-end.',
    accent: 'purple' as const,
    glow: 'from-accent-purple/25 to-royal-500/10',
  },
  {
    icon: Users,
    title: 'Achievements',
    body: 'Industry certifications from Infosys and IIT Kharagpur, with a consistent academic record.',
    accent: 'cyan' as const,
    glow: 'from-accent-cyan/25 to-accent-emerald/10',
  },
];

const CHIP_COLORS = [
  'hover:border-royal-400/50 hover:text-royal-400 hover:bg-royal-500/10',
  'hover:border-accent-purple/50 hover:text-accent-purple hover:bg-accent-purple/10',
  'hover:border-accent-cyan/50 hover:text-accent-cyan hover:bg-accent-cyan/10',
  'hover:border-accent-pink/50 hover:text-accent-pink hover:bg-accent-pink/10',
  'hover:border-accent-emerald/50 hover:text-accent-emerald hover:bg-accent-emerald/10',
  'hover:border-accent-amber/50 hover:text-accent-amber hover:bg-accent-amber/10',
];

export function About() {
  return (
    <section id="about" className="relative px-4 py-24">
      <div className="mx-auto max-w-[1280px]">
        <SectionHeading
          eyebrow="About"
          title="Engineering at the intersection of AI & web"
          subtitle="A computer science engineer focused on building intelligent systems and delightful interfaces."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ABOUT_CARDS.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <SpotlightCard accent={c.accent} className="group h-full rounded-2xl p-6">
                <div className={`shimmer-line`} />
                <div className={`mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${c.glow} backdrop-blur`}>
                  <c.icon size={22} className="text-fg" />
                </div>
                <h3 className="mb-2 text-base font-semibold">{c.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{c.body}</p>
                <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-royal-500/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-5">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className="group spotlight-card glass gradient-border rounded-2xl p-5 text-center">
                <div className="text-3xl font-bold gradient-text sm:text-4xl">
                  <AnimatedCounter value={s.value} decimals={s.decimals ?? 0} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted transition group-hover:text-fg">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Soft skills */}
        <Reveal delay={0.1}>
          <div className="mt-12 rounded-2xl glass p-6">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {SOFT_SKILLS.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -4, scale: 1.05 }}
                  className={`cursor-default rounded-full border border-base bg-soft px-4 py-2 text-sm text-fg transition-all duration-300 ${CHIP_COLORS[i % CHIP_COLORS.length]}`}
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
