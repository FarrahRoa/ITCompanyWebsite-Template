import { motion } from "framer-motion";
import Reveal, { Stagger, StaggerItem } from "./Reveal";
import { whyChooseUs } from "@/data";

export default function WhyChooseUs() {
  return (
    <section id="why" className="relative py-16 lg:py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-mono-label text-primary">{whyChooseUs.eyebrow}</span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            {whyChooseUs.title} <span className="text-gradient">{whyChooseUs.titleAccent}</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">{whyChooseUs.description}</p>
        </Reveal>

        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyChooseUs.features.map((f) => (
            <StaggerItem key={f.title}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative h-full rounded-2xl glass p-6 overflow-hidden"
              >
                <div className="absolute -right-8 -top-8 w-28 h-28 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                <div className="relative">
                  <motion.div
                    whileHover={{ rotate: 8 }}
                    className="grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary text-primary-foreground shadow-lg shadow-primary/20 mb-4"
                  >
                    <f.icon className="w-6 h-6" />
                  </motion.div>
                  <h3 className="font-heading text-lg font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}