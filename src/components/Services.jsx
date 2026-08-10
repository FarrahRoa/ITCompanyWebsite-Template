import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { services } from "@/data";

export default function Services() {
  return (
    <section id="services" className="relative py-16 lg:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="container mx-auto px-6 max-w-7xl">
        <Reveal className="max-w-3xl mb-14">
          <span className="font-mono-label text-primary">{services.eyebrow}</span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            {services.title} <span className="text-gradient">{services.titleAccent}</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">{services.description}</p>
        </Reveal>

        <div className="space-y-10">
          {services.categories.map((category, categoryIndex) => (
            <Reveal key={category.title} delay={categoryIndex * 0.06}>
              <div>
                <div className="mb-5 flex items-center justify-between gap-4">
                  <h3 className="font-heading text-2xl font-semibold">{category.title}</h3>
                  <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
                </div>
                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {category.items.map((item) => (
                    <ServiceCard key={item.title} {...item} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.08}>
          <motion.a
            href={services.cta.href}
            whileHover={{ y: -6 }}
            className="mt-10 group flex flex-col items-start rounded-3xl border border-dashed border-primary/30 bg-primary/5 p-6 text-left shadow-lg shadow-primary/5"
          >
            <div className="grid place-items-center w-12 h-12 rounded-xl bg-primary text-primary-foreground group-hover:rotate-12 transition-transform">
              <ArrowRight className="w-6 h-6" />
            </div>
            <div className="mt-4 font-heading text-xl font-semibold">{services.cta.title}</div>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{services.cta.desc}</p>
          </motion.a>
        </Reveal>
      </div>
    </section>
  );
}

function ServiceCard({ icon: Icon, title, desc, tag }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative h-full min-h-[220px] rounded-2xl glass p-6 overflow-hidden"
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 [mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] [mask-composite:exclude] p-px">
        <div className="absolute inset-0 rounded-2xl bg-[conic-gradient(from_var(--tw-gradient-angle),theme(colors.primary),theme(colors.secondary),theme(colors.chart.3),theme(colors.accent),theme(colors.primary))]" />
      </div>

      <div className="relative flex flex-col h-full">
        <div className="flex items-center justify-between mb-5">
          <motion.div
            whileHover={{ rotate: 8, scale: 1.1 }}
            className="grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-secondary/15 text-primary group-hover:from-primary group-hover:to-secondary group-hover:text-primary-foreground transition-all duration-300"
          >
            <Icon className="w-6 h-6" />
          </motion.div>
          <span className="font-mono-label text-muted-foreground/70">{tag}</span>
        </div>
        <h3 className="font-heading text-lg font-semibold tracking-tight">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{desc}</p>
        <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
          Learn more <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  );
}