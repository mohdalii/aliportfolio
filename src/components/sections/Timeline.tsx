import { motion } from 'framer-motion';
import { GraduationCap, BadgeCheck, FolderGit2, Route } from 'lucide-react';
import { TIMELINE } from '../../data/portfolio';
import { SectionHeading, Reveal } from '../ui/Reveal';
import { SpotlightCard } from '../ui/SpotlightCard';

const ICONS: Record<string, any> = {
  education: GraduationCap,
  certifications: BadgeCheck,
  projects: FolderGit2,
  journey: Route,
};

const ACCENTS: Record<string, { accent: any; chip: string; year: string }> = {
  education: { accent: 'royal', chip: 'from-royal-500/30 to-royal-700/10', year: 'text-royal-400' },
  certifications: { accent: 'amber', chip: 'from-accent-amber/30 to-accent-pink/10', year: 'text-accent-amber' },
  projects: { accent: 'purple', chip: 'from-accent-purple/30 to-royal-500/10', year: 'text-accent-purple' },
  journey: { accent: 'cyan', chip: 'from-accent-cyan/30 to-accent-emerald/10', year: 'text-accent-cyan' },
};

export function Timeline() {
  return (
    <section id="timeline" className="relative px-4 py-24">
      <div className="mx-auto max-w-[1280px]">
        <SectionHeading eyebrow="Timeline" title="The journey so far" subtitle="Education, certifications, projects, and milestones." />

        <div className="relative mx-auto max-w-2xl">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-royal-500 via-accent-purple to-accent-cyan md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-8">
            {TIMELINE.map((item, i) => {
              const Icon = ICONS[item.type] ?? Route;
              const a = ACCENTS[item.type] ?? ACCENTS.journey;
              const left = i % 2 === 0;
              return (
                <Reveal key={item.title} delay={i * 0.05}>
                  <div className={`relative flex items-start gap-6 pl-12 md:pl-0 ${left ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`absolute left-4 top-1 z-10 grid h-9 w-9 -translate-x-1/2 place-items-center rounded-full bg-gradient-to-br ${a.chip} backdrop-blur text-fg ring-2 ring-base transition-transform duration-300 hover:scale-110 md:left-1/2`}>
                      <Icon size={15} />
                    </div>
                    <div className="md:w-1/2" />
                    <div className={`md:w-1/2 ${left ? 'md:pl-8' : 'md:pr-8 md:text-right'}`}>
                      <SpotlightCard accent={a.accent} className="rounded-2xl p-5">
                        <span className={`text-xs font-semibold ${a.year}`}>{item.year}</span>
                        <h3 className="mt-1 text-base font-semibold">{item.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                      </SpotlightCard>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
