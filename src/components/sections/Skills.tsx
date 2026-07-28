import { motion } from 'framer-motion';
import { SKILLS } from '../../data/portfolio';
import { SectionHeading, Reveal } from '../ui/Reveal';
import { SpotlightCard } from '../ui/SpotlightCard';

const GROUPS: { accent: 'royal' | 'purple' | 'cyan' | 'pink' | 'amber' | 'emerald'; gradient: string; glow: string; chip: string }[] = [
  { accent: 'royal', gradient: 'from-royal-500/30 to-royal-700/10', glow: 'group-hover:shadow-[0_20px_60px_-20px_rgba(37,99,235,0.65)]', chip: 'hover:shadow-[0_10px_30px_-10px_rgba(37,99,235,0.7)]' },
  { accent: 'cyan', gradient: 'from-accent-cyan/30 to-accent-teal/10', glow: 'group-hover:shadow-[0_20px_60px_-20px_rgba(34,211,238,0.6)]', chip: 'hover:shadow-[0_10px_30px_-10px_rgba(34,211,238,0.7)]' },
  { accent: 'purple', gradient: 'from-accent-purple/30 to-royal-500/10', glow: 'group-hover:shadow-[0_20px_60px_-20px_rgba(139,92,246,0.65)]', chip: 'hover:shadow-[0_10px_30px_-10px_rgba(139,92,246,0.75)]' },
  { accent: 'amber', gradient: 'from-accent-amber/30 to-accent-pink/10', glow: 'group-hover:shadow-[0_20px_60px_-20px_rgba(245,158,11,0.55)]', chip: 'hover:shadow-[0_10px_30px_-10px_rgba(236,72,153,0.7)]' },
  { accent: 'emerald', gradient: 'from-accent-emerald/30 to-accent-cyan/10', glow: 'group-hover:shadow-[0_20px_60px_-20px_rgba(16,185,129,0.6)]', chip: 'hover:shadow-[0_10px_30px_-10px_rgba(16,185,129,0.7)]' },
  { accent: 'pink', gradient: 'from-accent-pink/30 to-accent-purple/10', glow: 'group-hover:shadow-[0_20px_60px_-20px_rgba(236,72,153,0.6)]', chip: 'hover:shadow-[0_10px_30px_-10px_rgba(236,72,153,0.75)]' },
];

const ICONS: Record<string, string> = {
  Languages: '{}',
  Frontend: '</>',
  Backend: '⚙',
  Databases: '⛁',
  Tools: '⚒',
  'AI / ML': '✦',
};

export function Skills() {
  return (
    <section id="skills" className="relative px-4 py-24">
      <div className="mx-auto max-w-[1280px]">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I build with"
          subtitle="A polished toolkit across the stack and AI — hover to explore."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((group, gi) => {
            const g = GROUPS[gi % GROUPS.length];
            return (
              <Reveal key={group.category} delay={gi * 0.08}>
                <SpotlightCard accent={g.accent} className={`group h-full rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1.5 ${g.glow}`}>
                  <div className="shimmer-line" />
                  <div className="mb-5 flex items-center gap-3">
                    <span className={`grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${g.gradient} font-mono text-sm text-fg backdrop-blur transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                      {ICONS[group.category] ?? '◆'}
                    </span>
                    <h3 className="text-base font-semibold transition-colors duration-300 group-hover:gradient-text-cool group-hover:bg-clip-text">{group.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item.name}
                        className={`skill-chip rounded-lg bg-soft px-3 py-1.5 text-sm text-fg ${g.chip}`}
                      >
                        <span>{item.name}</span>
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
