import { motion } from 'framer-motion';

export function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[100] grid place-items-center bg-navy-950"
    >
      <div className="flex flex-col items-center gap-5">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
          className="h-12 w-12 rounded-full border-2 border-royal-500/30 border-t-royal-500"
        />
        <motion.p
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="text-sm tracking-[0.3em] text-muted"
        >
          LOADING
        </motion.p>
      </div>
    </motion.div>
  );
}
