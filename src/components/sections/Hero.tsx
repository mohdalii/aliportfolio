import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, Sparkles, Github, Linkedin, Code2, Brain, Boxes } from 'lucide-react';
import { PROFILE } from '../../data/portfolio';
import { Particles } from '../effects/Particles';
import { MagneticButton } from '../ui/MagneticButton';

function useTypewriter(words: string[], speed = 90, pause = 1600) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[idx % words.length];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && text === word) {
      t = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === '') {
      setDeleting(false);
      setIdx((i) => i + 1);
    } else {
      t = setTimeout(
        () => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
        deleting ? speed / 2 : speed
      );
    }
    return () => clearTimeout(t);
  }, [text, deleting, idx, words, speed, pause]);

  return text;
}

const FLOAT_BADGES = [
  { icon: Code2, label: 'React', className: 'left-[-8%] top-[18%]', color: 'from-royal-500/30 to-royal-700/10', accent: 'text-royal-400', delay: 0 },
  { icon: Brain, label: 'AI / ML', className: 'right-[-6%] top-[8%]', color: 'from-accent-purple/30 to-accent-pink/10', accent: 'text-accent-purple', delay: 0.4 },
  { icon: Boxes, label: 'Three.js', className: 'right-[-10%] bottom-[20%]', color: 'from-accent-cyan/30 to-accent-emerald/10', accent: 'text-accent-cyan', delay: 0.8 },
];

export function Hero() {
  const typed = useTypewriter(PROFILE.roles);
  const spotlightRef = useRef<HTMLDivElement | null>(null);

  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  const onMove = (e: React.MouseEvent) => {
    const el = spotlightRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    el.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <section
      id="home"
      ref={spotlightRef}
      onMouseMove={onMove}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-28"
      style={{ ['--mx' as string]: '50%', ['--my' as string]: '50%' }}
    >
      {/* mouse-follow spotlight */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: 'radial-gradient(620px circle at var(--mx) var(--my), rgba(0,184,255,0.14), rgba(37,99,235,0.08) 30%, transparent 50%)' }}
      />
      {/* mesh gradient base */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-mesh opacity-80" />

      <div className="absolute inset-0 -z-10">
        <Particles count={70} />
      </div>

      {/* layered glow orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/3 h-[42vh] w-[42vh] -translate-x-1/2 rounded-full bg-royal-500/25 blur-[140px] animate-pulse-glow" />
        <div className="absolute left-[12%] top-[55%] h-[30vh] w-[30vh] rounded-full bg-electric-500/20 blur-[120px] animate-pulse-glow [animation-delay:-3s]" />
        <div className="absolute right-[8%] top-[20%] h-[34vh] w-[34vh] rounded-full bg-accent-pink/15 blur-[130px] animate-pulse-glow [animation-delay:-5s]" />
      </div>

      <div className="mx-auto grid max-w-[1280px] items-center gap-10 md:grid-cols-[1.3fr_1fr]">
        <div className="text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="group mb-5 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted transition hover:border-royal-400/40"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <Sparkles size={14} className="text-electric-400" />
            Available for opportunities
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg font-medium text-muted"
          >
            <span className="gradient-text-electric">Hello, I'm</span>
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-1 text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]"
          >
            <span className="hero-name block">{PROFILE.name}</span>
          </motion.h1>

          {/* electric underline accent */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-3 h-1 w-40 origin-left rounded-full bg-gradient-to-r from-electric-400 via-royal-500 to-accent-purple shadow-glow-electric md:mx-0"
          />

          {/* role line with prefix */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-5 flex items-center justify-center gap-2 text-xl font-medium md:justify-start md:text-2xl"
          >
            <span className="text-muted">I'm a</span>
            <span className="gradient-text-electric font-semibold">{typed}</span>
            <span className="inline-block h-6 w-[2px] animate-pulse-glow bg-gradient-to-b from-electric-400 via-royal-500 to-accent-purple" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mx-auto mt-5 max-w-md text-sm text-muted md:mx-0 md:text-base"
          >
            {PROFILE.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start"
          >
            <MagneticButton
              as="a"
              href={PROFILE.resumeUrl}
              className="btn-electric group inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-white"
            >
              <Download size={16} className="transition-transform group-hover:-translate-y-0.5" /> Download Resume
            </MagneticButton>
            <MagneticButton
              onClick={() => scrollTo('#contact')}
              className="btn-glass group inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-fg"
            >
              <Mail size={16} className="transition-transform group-hover:rotate-12" /> Contact Me
            </MagneticButton>
            <MagneticButton
              onClick={() => scrollTo('#projects')}
              className="btn-glass group inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-fg"
            >
              See Projects
            </MagneticButton>
          </motion.div>

          {/* quick socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-6 flex items-center justify-center gap-3 md:justify-start"
          >
            <a href={PROFILE.github} aria-label="GitHub" className="grid h-9 w-9 place-items-center rounded-lg glass text-muted transition hover:text-electric-400 hover:border-electric-400/50 hover:bg-electric-500/10 hover:shadow-glow-electric">
              <Github size={15} />
            </a>
            <a href={PROFILE.linkedin} aria-label="LinkedIn" className="grid h-9 w-9 place-items-center rounded-lg glass text-muted transition hover:text-accent-cyan hover:border-accent-cyan/40 hover:bg-accent-cyan/10">
              <Linkedin size={15} />
            </a>
          </motion.div>
        </div>

        {/* Floating tech badges */}
        {/* Hero Image */}
<motion.div
  initial={{ opacity: 0, x: 80 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.3 }}
  className="relative mx-auto flex w-full items-center justify-center"
>
  {/* Blue Glow */}
  <div className="absolute h-[600px] w-[430px] rounded-full bg-gradient-to-br from-blue-500/30 via-cyan-400/20 to-purple-500/20 blur-[120px]" />

  {/* Glass Background */}
  <div className="absolute h-[560px] w-[390px] rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl" />

  {/* Floating Image */}
  <motion.img
    src="/ali.jpeg"
    alt="Ali"
    animate={{ y: [0, -15, 0] }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    whileHover={{
      scale: 1.03,
      rotateY: 8,
      rotateX: -5,
    }}
    className="relative z-10 h-[560px] w-auto rounded-[35px] object-cover drop-shadow-[0_0_60px_rgba(37,99,235,0.45)]"
    style={{ transformStyle: "preserve-3d" }}
  />

  {/* Floating Badge 1 */}
  <motion.div
    animate={{ y: [0, -8, 0] }}
    transition={{ duration: 4, repeat: Infinity }}
    className="absolute left-0 top-16 rounded-xl border border-cyan-500/30 bg-slate-900/70 px-4 py-2 backdrop-blur-xl"
  >
    <span className="text-cyan-400 font-semibold">⚛ React</span>
  </motion.div>

  {/* Floating Badge 2 */}
  <motion.div
    animate={{ y: [0, 8, 0] }}
    transition={{ duration: 5, repeat: Infinity }}
    className="absolute right-0 top-36 rounded-xl border border-purple-500/30 bg-slate-900/70 px-4 py-2 backdrop-blur-xl"
  >
    <span className="text-purple-400 font-semibold">🤖 AI Developer</span>
  </motion.div>

  {/* Floating Badge 3 */}
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 6, repeat: Infinity }}
    className="absolute bottom-12 left-8 rounded-xl border border-blue-500/30 bg-slate-900/70 px-4 py-2 backdrop-blur-xl"
  >
    <span className="text-blue-400 font-semibold">🚀 MERN Stack</span>
  </motion.div>
</motion.div>

      </div>

      <motion.button
        onClick={() => scrollTo('#about')}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-muted transition hover:text-electric-400"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDown size={18} />
      </motion.button>
    </section>
  );
}
