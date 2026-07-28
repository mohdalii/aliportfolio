import { Briefcase } from 'lucide-react';
import { EXPERIENCE } from '../../data/portfolio';
import { SectionHeading, Reveal } from '../ui/Reveal';
import { SpotlightCard } from '../ui/SpotlightCard';

const ACCENTS = ['royal', 'purple', 'cyan'] as const;
const CHIPS = [
  'from-royal-500/30 to-royal-700/10',
  'from-accent-purple/30 to-royal-500/10',
  'from-accent-cyan/30 to-accent-emerald/10',
];
const ORG_COLORS = ['text-royal-400', 'text-accent-purple', 'text-accent-cyan'];

export function Experience() {
  return (
    <section id="experience" className="relative px-4 py-24">
      <div className="mx-auto max-w-[1280px]">
        <SectionHeading eyebrow="Experience" title="Where I've built" subtitle="Professional and project leadership roles." />

        <div className="relative mx-auto max-w-2xl space-y-5">
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-royal-500 via-accent-purple to-accent-cyan" />
          {EXPERIENCE.map((e, i) => (
            <Reveal key={e.role} delay={i * 0.08}>
              <div className="relative pl-14">
                <div className={`absolute left-5 top-3 grid h-9 w-9 -translate-x-1/2 place-items-center rounded-full bg-gradient-to-br ${CHIPS[i % CHIPS.length]} backdrop-blur text-fg ring-2 ring-base transition-transform duration-300 hover:scale-110`}>
                  <Briefcase size={15} />
                </div>
                <SpotlightCard accent={ACCENTS[i % ACCENTS.length]} className="rounded-2xl p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-base font-semibold">{e.role}</h3>
                    <span className="rounded-full glass px-2.5 py-0.5 text-[11px] text-muted">{e.period}</span>
                  </div>
                  <p className={`mt-1 text-xs uppercase tracking-wider ${ORG_COLORS[i % ORG_COLORS.length]}`}>{e.org}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{e.description}</p>
                </SpotlightCard>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
