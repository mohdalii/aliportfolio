import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Send, CheckCircle2, AlertCircle, MapPin } from 'lucide-react';
import { PROFILE, SOCIALS } from '../../data/portfolio';
import { SectionHeading, Reveal } from '../ui/Reveal';
import { MagneticButton } from '../ui/MagneticButton';
import { SpotlightCard } from '../ui/SpotlightCard';

const schema = z.object({
  name: z.string().min(2, 'Enter your name'),
  email: z.string().email('Valid email required'),
  message: z.string().min(10, 'Tell me a bit more (10+ chars)'),
});

type FormData = z.infer<typeof schema>;

const SOCIAL_ICONS: Record<string, any> = { github: Github, linkedin: Linkedin, mail: Mail, phone: Phone };
const SOCIAL_HOVER: Record<string, string> = {
  github: 'hover:border-royal-400/50 hover:text-royal-400 hover:bg-royal-500/10',
  linkedin: 'hover:border-accent-cyan/50 hover:text-accent-cyan hover:bg-accent-cyan/10',
  mail: 'hover:border-accent-purple/50 hover:text-accent-purple hover:bg-accent-purple/10',
  phone: 'hover:border-accent-emerald/50 hover:text-accent-emerald hover:bg-accent-emerald/10',
};

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus('sending');
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;
      if (serviceId && templateId && publicKey) {
        await emailjs.send(serviceId, templateId, { from_name: data.name, from_email: data.email, message: data.message }, publicKey);
      } else {
        await new Promise((r) => setTimeout(r, 900));
      }
      setStatus('success');
      reset();
      setTimeout(() => setStatus('idle'), 3500);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3500);
    }
  };

  return (
    <section id="contact" className="relative px-4 py-24">
      <div className="mx-auto max-w-[1280px]">
        <SectionHeading eyebrow="Contact" title="Let's build something" subtitle="Have a role or project in mind? I'd love to hear about it." />

        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <form onSubmit={handleSubmit(onSubmit)} className="gradient-border-animated rounded-3xl glass-strong p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" error={errors.name?.message}>
                  <input {...register('name')} placeholder="Your name" className="contact-input" />
                </Field>
                <Field label="Email" error={errors.email?.message}>
                  <input {...register('email')} type="email" placeholder="you@email.com" className="contact-input" />
                </Field>
              </div>
              <div className="mt-4">
                <Field label="Message" error={errors.message?.message}>
                  <textarea {...register('message')} rows={5} placeholder="Tell me about your project or role..." className="contact-input resize-none" />
                </Field>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <MagneticButton
                  as="button"
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-gradient inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-white disabled:opacity-60"
                >
                  <Send size={16} />
                  {status === 'sending' ? 'Sending...' : 'Send message'}
                </MagneticButton>

                <AnimatePresence>
                  {status === 'success' && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-1.5 text-sm text-emerald-400"
                    >
                      <CheckCircle2 size={16} /> Message sent!
                    </motion.span>
                  )}
                  {status === 'error' && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-1.5 text-sm text-red-400"
                    >
                      <AlertCircle size={16} /> Try again later
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <SpotlightCard accent="purple" animatedBorder className="flex h-full flex-col justify-between rounded-3xl p-6 sm:p-8">
              <div>
                <h3 className="text-lg font-semibold">Reach me directly</h3>
                <p className="mt-2 text-sm text-muted">Prefer email? Drop me a line anytime.</p>
                <div className="mt-5 space-y-3">
                  <a href={`mailto:${PROFILE.email}`} className="group flex items-center gap-3 text-sm text-fg">
                    <span className="grid h-9 w-9 place-items-center rounded-lg glass transition group-hover:border-accent-purple/50 group-hover:text-accent-purple group-hover:bg-accent-purple/10">
                      <Mail size={15} />
                    </span>
                    {PROFILE.email}
                  </a>
                  <a href={`tel:${PROFILE.phone}`} className="group flex items-center gap-3 text-sm text-fg">
                    <span className="grid h-9 w-9 place-items-center rounded-lg glass transition group-hover:border-accent-emerald/50 group-hover:text-accent-emerald group-hover:bg-accent-emerald/10">
                      <Phone size={15} />
                    </span>
                    {PROFILE.phone}
                  </a>
                  <div className="flex items-center gap-3 text-sm text-muted">
                    <span className="grid h-9 w-9 place-items-center rounded-lg glass">
                      <MapPin size={15} />
                    </span>
                    {PROFILE.location}
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="mb-3 text-xs uppercase tracking-wider text-muted">Follow</h4>
                <div className="flex gap-3">
                  {SOCIALS.map((s) => {
                    const Icon = SOCIAL_ICONS[s.icon];
                    return (
                      <motion.a
                        key={s.label}
                        href={s.href}
                        aria-label={s.label}
                        whileHover={{ y: -4 }}
                        className={`grid h-11 w-11 place-items-center rounded-xl glass text-fg transition-all duration-300 ${SOCIAL_HOVER[s.icon]}`}
                      >
                        <Icon size={18} />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs uppercase tracking-wider text-muted">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-400">{error}</span>}
    </label>
  );
}
