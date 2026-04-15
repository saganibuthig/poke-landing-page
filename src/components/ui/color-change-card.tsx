import { motion } from 'framer-motion';

const flavors = [
  {
    name: 'Original',
    tagline: 'The one that started it all.',
    notes: 'Crisp · Clean · Classic',
    description: 'Pure carbonated water, a whisper of cane sugar, and nothing else. The benchmark.',
    accent: 'bg-yellow-400',
    textAccent: 'text-yellow-400',
    borderAccent: 'border-yellow-400',
    icon: '🫧',
  },
  {
    name: 'Cherry Noir',
    tagline: 'Dark, bold, unapologetic.',
    notes: 'Tart · Rich · Smoky',
    description: 'Cold-brewed black cherry with a hint of vanilla and a smoky finish that lingers.',
    accent: 'bg-red-500',
    textAccent: 'text-red-400',
    borderAccent: 'border-red-500',
    icon: '🍒',
  },
  {
    name: 'Citrus Wave',
    tagline: 'Bright and relentless.',
    notes: 'Zesty · Sharp · Refreshing',
    description: 'Squeezed lime, yuzu zest, and a touch of grapefruit — sunshine in carbonated form.',
    accent: 'bg-lime-400',
    textAccent: 'text-lime-400',
    borderAccent: 'border-lime-400',
    icon: '🍋',
  },
  {
    name: 'Wild Berry',
    tagline: 'Untamed from the first sip.',
    notes: 'Sweet · Floral · Tangy',
    description: 'A blend of blueberry, blackcurrant, and elderflower that defies a single description.',
    accent: 'bg-purple-500',
    textAccent: 'text-purple-400',
    borderAccent: 'border-purple-500',
    icon: '🫐',
  },
  {
    name: 'Tropical Drift',
    tagline: 'Wherever you want to be.',
    notes: 'Juicy · Exotic · Smooth',
    description: 'Mango, passionfruit, and pineapple in a ratio we spent two years perfecting.',
    accent: 'bg-orange-400',
    textAccent: 'text-orange-400',
    borderAccent: 'border-orange-400',
    icon: '🥭',
  },
  {
    name: 'Ginger Burn',
    tagline: 'Not for the faint of palate.',
    notes: 'Spicy · Warm · Complex',
    description: 'Raw ginger root, lemongrass, and black pepper. A soda that demands your attention.',
    accent: 'bg-amber-500',
    textAccent: 'text-amber-400',
    borderAccent: 'border-amber-500',
    icon: '🫚',
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function ProductsSection() {
  return (
    <section
      id="products"
      className="min-h-screen flex flex-col justify-center bg-background px-8 py-24 md:px-12"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-xs font-semibold tracking-[0.3em] text-yellow-400 uppercase"
        >
          Products
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-16 text-5xl font-extrabold leading-tight tracking-tight text-foreground md:text-7xl"
        >
          pick your
          <br />
          <span className="text-yellow-400">flavor.</span>
        </motion.h2>

        {/* Cards grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-px bg-foreground/10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {flavors.map((flavor) => (
            <motion.div
              key={flavor.name}
              variants={item}
              whileHover="hover"
              className={`group relative flex flex-col justify-between bg-background p-8 border-b border-foreground/10 overflow-hidden cursor-pointer`}
            >
              {/* Hover fill */}
              <motion.div
                className={`absolute inset-0 ${flavor.accent} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />

              {/* Top row */}
              <div className="flex items-start justify-between mb-8">
                <span className="text-4xl">{flavor.icon}</span>
                <span className={`text-xs font-semibold tracking-[0.2em] uppercase ${flavor.textAccent}`}>
                  {flavor.notes}
                </span>
              </div>

              {/* Name */}
              <div>
                <h3 className="text-3xl font-extrabold text-foreground mb-1 tracking-tight">
                  {flavor.name}
                </h3>
                <p className={`text-sm font-medium mb-4 ${flavor.textAccent}`}>
                  {flavor.tagline}
                </p>
                <p className="text-sm leading-relaxed text-foreground/50">
                  {flavor.description}
                </p>
              </div>

              {/* Bottom CTA */}
              <div className={`mt-8 flex items-center gap-2 text-xs font-semibold tracking-widest uppercase ${flavor.textAccent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                <span>Add to cart</span>
                <span>→</span>
              </div>

              {/* Accent bar bottom */}
              <div className={`absolute bottom-0 left-0 h-0.5 w-0 ${flavor.accent} group-hover:w-full transition-all duration-500`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
