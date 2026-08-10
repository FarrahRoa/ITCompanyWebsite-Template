import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "./Reveal";
import { testimonials } from "@/data";

export default function Testimonials() {
  const items = testimonials.items;
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (d) => { setDir(d); setIdx((i) => (i + d + items.length) % items.length); };

  useEffect(() => {
    const id = setInterval(() => { setDir(1); setIdx((i) => (i + 1) % items.length); }, 6000);
    return () => clearInterval(id);
  }, [items.length]);

  const t = items[idx];

  return (
    <section className="relative py-16 lg:py-24 bg-muted/30">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="container mx-auto px-6 max-w-4xl relative">
        <Reveal className="text-center mb-12">
          <span className="font-mono-label text-primary">{testimonials.eyebrow}</span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            {testimonials.title} <span className="text-gradient">{testimonials.titleAccent}</span>
          </h2>
        </Reveal>

        <div className="relative">
          <Quote className="absolute -top-6 left-0 w-16 h-16 text-primary/10" />
          <div className="relative min-h-[260px]">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={idx}
                custom={dir}
                initial={{ opacity: 0, x: dir * 40, filter: "blur(6px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: dir * -40, filter: "blur(6px)" }}
                transition={{ duration: 0.5 }}
                className="glass rounded-3xl p-8 lg:p-10 text-center"
              >
                <div className="flex justify-center gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-lg lg:text-xl leading-relaxed font-medium">"{t.text}"</p>
                <div className="mt-7 flex items-center justify-center gap-3">
                  <span className="grid place-items-center w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary text-primary-foreground font-heading font-bold">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                  <div className="text-left">
                    <div className="font-heading font-semibold">{t.name}</div>
                    <div className="text-sm text-muted-foreground">{t.role}, {t.company}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={() => go(-1)} className="grid place-items-center w-10 h-10 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Previous">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDir(i > idx ? 1 : -1); setIdx(i); }}
                  className={`h-2 rounded-full transition-all ${i === idx ? "w-8 bg-primary" : "w-2 bg-border"}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={() => go(1)} className="grid place-items-center w-10 h-10 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Next">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}