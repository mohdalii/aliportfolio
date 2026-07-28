import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight, Star } from 'lucide-react';
import { PROJECTS } from '../../data/portfolio';
import { SectionHeading, Reveal } from '../ui/Reveal';
import { TiltCard } from '../ui/TiltCard';
import { MagneticButton } from '../ui/MagneticButton';
import { SpotlightCard } from '../ui/SpotlightCard';

const TAG_COLORS = [
  'hover:border-royal-400/50 hover:text-royal-400 hover:bg-royal-500/10',
  'hover:border-accent-purple/50 hover:text-accent-purple hover:bg-accent-purple/10',
  'hover:border-accent-cyan/50 hover:text-accent-cyan hover:bg-accent-cyan/10',
  'hover:border-accent-pink/50 hover:text-accent-pink hover:bg-accent-pink/10',
  'hover:border-accent-emerald/50 hover:text-accent-emerald hover:bg-accent-emerald/10',
  'hover:border-accent-amber/50 hover:text-accent-amber hover:bg-accent-amber/10',
];

export function Projects({ onOpen }: { onOpen: (id: string) => void }) {
  const featured = PROJECTS.find((p) => p.featured)!;
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative px-4 py-24">
      <div className="mx-auto max-w-[1280px]">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          subtitle="A blend of AI research and production-grade full stack engineering."
        />

        {/* Featured */}
        <Reveal>
          <TiltCard max={6} className="mb-8">
            <div className="group gradient-border-animated gradient-sweep orb-glow overflow-hidden rounded-3xl glass-strong">
              <div className="grid md:grid-cols-2">
                <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden md:aspect-auto">
                  <div className="absolute inset-0 bg-gradient-to-tr from-royal-600/30 via-transparent to-accent-purple/30 transition-opacity duration-500 group-hover:opacity-80" />
                  <div className="absolute -inset-20 bg-gradient-conic from-accent-cyan/20 via-accent-purple/20 to-royal-500/20 opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />
                  <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full glass-strong px-3 py-1 text-xs text-accent-amber shadow-glow">
                    <Star size={12} className="fill-accent-amber" /> Featured
                  </div>
                  <div className="relative z-10 p-8 text-center transition-transform duration-500 group-hover:scale-105">
                    <h4 className="gradient-text-cool text-2xl font-bold">{featured.title}</h4>
                    <p className="mt-2 text-sm text-muted">{featured.subtitle}</p>
                  </div>
                </div>
                <div className="flex flex-col justify-center p-7 md:p-10">
                  <span className="text-xs uppercase tracking-[0.2em] gradient-text-warm font-semibold">{featured.subtitle}</span>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{featured.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {featured.tags.slice(0, 6).map((t, i) => (
                      <span
                        key={t}
                        className={`rounded-full border border-base bg-soft px-3 py-1 text-xs text-muted transition-all duration-300 ${TAG_COLORS[i % TAG_COLORS.length]}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <MagneticButton
                      as="a"
                      href={featured.github}
                      className="btn-glass inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm text-fg"
                    >
                      <Github size={16} /> GitHub
                    </MagneticButton>
                    <MagneticButton
                      as="a"
                      href={featured.demo}
                      className="btn-glass inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm text-fg"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </MagneticButton>
                    <MagneticButton
                      onClick={() => onOpen(featured.id)}
                      className="btn-gradient inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-white"
                    >
                      Read More <ArrowRight size={16} />
                    </MagneticButton>
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>
        </Reveal>

        {/* Grid */}
        <div className="grid gap-5 md:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <TiltCard className="h-full">
                <button onClick={() => onOpen(p.id)} className="group h-full w-full text-left">
                  <SpotlightCard accent={['royal', 'purple', 'cyan', 'pink'][i % 4] as any} animatedBorder className="group/card gradient-sweep orb-glow h-full overflow-hidden rounded-2xl transition-transform duration-500 hover:-translate-y-1.5">
                    <div className="shimmer-line" />
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/20 to-transparent transition-opacity duration-500 group-hover/card:from-navy-950/70" />
                      <div className="absolute -inset-10 bg-gradient-conic from-accent-purple/15 via-accent-cyan/15 to-accent-pink/15 opacity-0 blur-2xl transition-opacity duration-700 group-hover/card:opacity-100" />
                      <div className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full glass-strong text-fg opacity-0 transition-all duration-300 group-hover/card:scale-110 group-hover/card:opacity-100">
                        <ArrowRight size={15} className="transition-transform duration-300 group-hover/card:translate-x-0.5" />
                      </div>
                      <div className="relative z-10 flex h-full items-center justify-center p-6 text-center transition-transform duration-500 group-hover/card:scale-105">
                        <div>
                          <h4 className="text-xl font-semibold transition group-hover/card:gradient-text-cool group-hover/card:bg-clip-text">{p.title}</h4>
                          <p className="mt-1 text-xs uppercase tracking-wider text-royal-400">{p.subtitle}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="line-clamp-2 text-sm text-muted">{p.description}</p>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {p.tags.slice(0, 4).map((t, ti) => (
                          <span
                            key={t}
                            className={`rounded-full border border-base bg-soft px-2.5 py-0.5 text-[11px] text-muted transition-all duration-300 ${TAG_COLORS[ti % TAG_COLORS.length]}`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </SpotlightCard>
                </button>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
