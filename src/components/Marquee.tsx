import { SKILLS } from '../data/portfolio';

const ALL = SKILLS.flatMap((g) => g.items.map((i) => i.name));
const ROW = [...ALL, ...ALL];
const DOTS = ['bg-royal-500', 'bg-accent-purple', 'bg-accent-cyan', 'bg-accent-pink', 'bg-accent-emerald', 'bg-accent-amber'];

export function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-base py-5 mask-fade-x">
      <div className="flex w-max animate-marquee gap-8">
        {ROW.map((t, i) => (
          <span key={i} className="flex items-center gap-3 text-lg font-medium text-muted transition hover:text-fg">
            <span className={`h-1.5 w-1.5 rounded-full ${DOTS[i % DOTS.length]}`} />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
