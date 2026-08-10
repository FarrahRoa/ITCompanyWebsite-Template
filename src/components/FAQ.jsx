import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import Reveal from "./Reveal";
import { faq } from "@/data";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="relative py-16 lg:py-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <Reveal className="text-center mb-12">
          <span className="font-mono-label text-primary">{faq.eyebrow}</span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            {faq.title} <span className="text-gradient">{faq.titleAccent}</span>
          </h2>
        </Reveal>

        <div className="space-y-3">
          {faq.items.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.05}>
                <div className={`glass rounded-2xl overflow-hidden transition-colors ${isOpen ? "ring-1 ring-primary/30" : ""}`}>
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  >
                    <span className="font-heading font-semibold">{f.q}</span>
                    <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="grid place-items-center w-8 h-8 rounded-full bg-primary/10 text-primary shrink-0">
                      <Plus className="w-4 h-4" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="px-5 pb-5 text-muted-foreground leading-relaxed">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}