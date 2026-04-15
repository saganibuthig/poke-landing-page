import { motion } from 'framer-motion';

const stats = [
  { value: '1952', label: 'Est.' },
  { value: '12+', label: 'Flavors' },
  { value: '40+', label: 'Countries' },
  { value: '100%', label: 'Natural' },
];

export default function AboutSection() {
  return (
    <section
      id="about-us"
      className="min-h-screen flex flex-col justify-center bg-background relative overflow-hidden px-8 py-24 md:px-12"
    >
      {/* Yellow accent bar */}
      <div className="absolute left-0 top-0 h-full w-1 bg-yellow-400" />

      <div className="mx-auto w-full max-w-7xl">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-xs font-semibold tracking-[0.3em] text-yellow-400 uppercase"
        >
          About Us
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-12 text-5xl font-extrabold leading-tight tracking-tight text-foreground md:text-7xl lg:text-8xl"
        >
          the craft
          <br />
          <span className="text-yellow-400">of fizz.</span>
        </motion.h2>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left — body copy */}
          <div className="space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg leading-relaxed text-foreground/70"
            >
              Born from a single obsession — the perfect bubble. Since 1952, mnmlst. has been
              crafting small-batch sodas using hand-selected botanicals, real fruit extracts,
              and carbonation dialed in to the exact pressure that makes every sip feel alive.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg leading-relaxed text-foreground/70"
            >
              We use zero artificial sweeteners, no synthetic dyes, and absolutely no
              shortcuts. Every can goes through a 14-day cold-brew infusion process before
              it ever reaches carbonation — because great soda, like great art, cannot
              be rushed.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg leading-relaxed text-foreground/70"
            >
              Our philosophy is simple: fewer ingredients, more intention. We believe a soda
              should taste like something — not like a lab. That's the mnmlst. promise.
            </motion.p>
          </div>

          {/* Right — stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-2 gap-px bg-foreground/10 self-start border border-foreground/10"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-start justify-center gap-1 bg-background p-8"
              >
                <span className="text-4xl font-extrabold text-yellow-400 md:text-5xl">
                  {stat.value}
                </span>
                <span className="text-xs font-semibold tracking-[0.2em] text-foreground/50 uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Divider quote */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 border-l-2 border-yellow-400 pl-8 text-2xl font-light italic text-foreground/50 md:text-3xl"
        >
          "Simplicity is the ultimate sophistication — even in a can."
        </motion.blockquote>
      </div>
    </section>
  );
}
