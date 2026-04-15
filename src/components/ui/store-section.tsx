import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail, ShoppingBag, Truck } from 'lucide-react';

const hours = [
  { day: 'Monday – Friday', time: '9:00 AM – 8:00 PM' },
  { day: 'Saturday', time: '10:00 AM – 6:00 PM' },
  { day: 'Sunday', time: '11:00 AM – 5:00 PM' },
];

const storeOptions = [
  {
    icon: ShoppingBag,
    title: 'In-Store Pickup',
    description: 'Order online and collect same-day from our flagship location in Arlington Heights.',
    cta: 'Order for Pickup',
  },
  {
    icon: Truck,
    title: 'Home Delivery',
    description: 'We deliver within 40 miles of our store. Free shipping on orders over $30.',
    cta: 'Shop Online',
  },
];

export default function StoreSection() {
  return (
    <section
      id="store"
      className="min-h-screen flex flex-col justify-center bg-background px-8 py-24 md:px-12 relative overflow-hidden"
    >
      {/* Right accent bar */}
      <div className="absolute right-0 top-0 h-full w-1 bg-yellow-400" />

      <div className="mx-auto w-full max-w-7xl">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-xs font-semibold tracking-[0.3em] text-yellow-400 uppercase"
        >
          Store
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-16 text-5xl font-extrabold leading-tight tracking-tight text-foreground md:text-7xl"
        >
          find us
          <br />
          <span className="text-yellow-400">anywhere.</span>
        </motion.h2>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — location + contact */}
          <div className="space-y-10">
            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-4"
            >
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-foreground/40">
                Flagship Store
              </p>
              <div className="flex items-start gap-3 text-foreground/70">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-yellow-400" />
                <p className="text-lg leading-relaxed">
                  214 W Campbell St<br />
                  Arlington Heights, IL 60005<br />
                  United States
                </p>
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-4"
            >
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-foreground/40">
                Store Hours
              </p>
              <div className="flex items-start gap-3">
                <Clock className="mt-1 h-4 w-4 shrink-0 text-yellow-400" />
                <div className="w-full divide-y divide-foreground/10">
                  {hours.map((row) => (
                    <div
                      key={row.day}
                      className="flex flex-col gap-0.5 py-3 text-sm text-foreground/70 sm:flex-row sm:justify-between"
                    >
                      <span>{row.day}</span>
                      <span className="text-foreground">{row.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col gap-4"
            >
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-foreground/40">
                Contact
              </p>
              <a
                href="tel:+18475550192"
                className="flex items-center gap-3 text-foreground/70 hover:text-yellow-400 transition-colors"
              >
                <Phone className="h-4 w-4 text-yellow-400" />
                <span>(847) 555-0192</span>
              </a>
              <a
                href="mailto:hello@mnmlst.co"
                className="flex items-center gap-3 text-foreground/70 hover:text-yellow-400 transition-colors"
              >
                <Mail className="h-4 w-4 text-yellow-400" />
                <span>hello@mnmlst.co</span>
              </a>
            </motion.div>
          </div>

          {/* Right — purchase options */}
          <div className="flex flex-col gap-px">
            {storeOptions.map((option, i) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className="group flex flex-col gap-4 border border-foreground/10 p-8 hover:border-yellow-400 transition-colors duration-300"
              >
                <option.icon className="h-7 w-7 text-yellow-400" />
                <h3 className="text-xl font-bold text-foreground tracking-tight">
                  {option.title}
                </h3>
                <p className="text-sm leading-relaxed text-foreground/50">
                  {option.description}
                </p>
                <button className="mt-2 self-start text-xs font-semibold tracking-widest uppercase text-yellow-400 hover:underline underline-offset-4 transition-all">
                  {option.cta} →
                </button>
              </motion.div>
            ))}

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="border border-foreground/10 p-8 mt-px"
            >
              <p className="mb-1 text-xs font-semibold tracking-[0.2em] uppercase text-foreground/40">
                Stay in the loop
              </p>
              <p className="mb-5 text-sm text-foreground/60">
                New flavors, limited drops, and zero spam.
              </p>
              <div className="flex gap-0">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 border border-foreground/20 bg-transparent px-4 py-3 text-sm text-foreground placeholder-foreground/30 outline-none focus:border-yellow-400 transition-colors"
                />
                <button className="bg-yellow-400 px-6 py-3 text-xs font-bold tracking-widest uppercase text-background hover:bg-yellow-300 transition-colors">
                  Join
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center text-xs tracking-widest text-foreground/20 uppercase"
        >
          © 2026 mnmlst. — Arlington Heights, IL · All rights reserved.
        </motion.p>
      </div>
    </section>
  );
}
