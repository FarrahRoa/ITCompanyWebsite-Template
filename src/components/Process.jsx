import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { process } from "@/data";

export default function Process() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end center"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="relative py-16 lg:py-24 bg-muted/30">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="container mx-auto px-6 max-w-5xl relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono-label text-primary">{process.eyebrow}</span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            {process.title} <span className="text-gradient">{process.titleAccent}</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">{process.description}</p>
        </div>

        <div ref={ref} className="relative">
          {/* center line */}
          <div className="absolute left-6 lg:left-1/2 lg:-translate-x-1/2 top-0 bottom-0 w-px bg-border" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-6 lg:left-1/2 lg:-translate-x-1/2 top-0 w-px bg-gradient-to-b from-primary via-secondary to-chart-3 shadow-[0_0_12px_theme(colors.primary/60)]"
          />

          <div className="space-y-12 lg:space-y-16">
            {process.steps.map((s, i) => {
              const right = i % 2 === 1;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex items-center gap-6 lg:gap-0 ${right ? "lg:flex-row-reverse" : ""}`}
                >
                  {/* node */}
                  <div className="absolute left-6 lg:left-1/2 lg:-translate-x-1/2 -translate-x-1/2 z-10">
                    <span className="grid place-items-center w-12 h-12 rounded-full bg-background ring-4 ring-background shadow-lg">
                      <span className="grid place-items-center w-9 h-9 rounded-full bg-gradient-to-br from-primary to-secondary text-primary-foreground">
                        <s.icon className="w-4.5 h-4.5" />
                      </span>
                    </span>
                  </div>

                  {/* card */}
                  <div className={`ml-20 lg:ml-0 lg:w-[calc(50%-3rem)] ${right ? "lg:mr-auto" : "lg:ml-auto"}`}>
                    <div className="glass rounded-2xl p-6 hover:shadow-xl hover:shadow-primary/10 transition-shadow">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-mono-label text-primary">0{i + 1}</span>
                        <span className="h-px flex-1 bg-border" />
                      </div>
                      <h3 className="font-heading text-xl font-bold">{s.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}