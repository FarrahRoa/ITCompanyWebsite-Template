import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Calendar, Play, Sparkles } from "lucide-react";
import MagneticButton from "./MagneticButton";
import WirelessSurveyVisual from "./visuals/WirelessSurveyVisual";
import { hero, brand } from "@/data";

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0);
  const ref = useRef(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 20 });
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 150, damping: 20 });

  useEffect(() => {
    const id = setInterval(() => setWordIdx((i) => (i + 1) % brand.rotatingWords.length), 2600);
    return () => clearInterval(id);
  }, []);

  const handleMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16 scroll-mt-28">
      {/* animated background */}
      <div className="absolute inset-0 -z-10 grid-pattern opacity-60" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background to-background/50" />
      <div className="absolute top-1/4 -left-20 w-[28rem] h-[28rem] rounded-full bg-primary/20 dark:bg-primary/25 blur-[120px] animate-blob -z-10" />
      <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] rounded-full bg-secondary/20 dark:bg-secondary/20 blur-[130px] animate-blob -z-10" style={{ animationDelay: "4s" }} />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-chart-3/15 blur-[100px] animate-blob -z-10" style={{ animationDelay: "8s" }} />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center w-full max-w-7xl">
        {/* Left: copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span className="font-mono-label text-muted-foreground">{hero.badge}</span>
          </motion.div>

          <h1 className="font-heading font-extrabold leading-[1.05] tracking-tight text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
            {hero.headlineLines.map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
            <span className="block overflow-hidden mt-1">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
              >
                {hero.headlineLead}{" "}
                <span className="relative inline-block">
                  <motion.span
                    key={wordIdx}
                    initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                    transition={{ duration: 0.5 }}
                    className="inline-block text-gradient animate-gradient-x"
                  >
                    {brand.rotatingWords[wordIdx]}
                  </motion.span>
                </span>
                .
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.62 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              as="a"
              href={hero.primaryCta.href}
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold btn-gradient"
            >
              {hero.primaryCta.label}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </MagneticButton>
            <MagneticButton
              as="a"
              href={hero.secondaryCta.href}
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold glass border-border hover:border-primary/50 transition-colors"
            >
              <span className="grid place-items-center w-6 h-6 rounded-full bg-primary/10 text-primary">
                <Play className="w-3 h-3 fill-current" />
              </span>
              {hero.secondaryCta.label}
            </MagneticButton>
          </motion.div>

          {/* trust row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground"
          >
            {hero.trust.map((label) => (
              <Trust key={label} label={label} />
            ))}
          </motion.div>
        </div>

        {/* Right: animated visual */}
        <motion.div
          ref={ref}
          onMouseMove={handleMove}
          onMouseLeave={() => { mx.set(0); my.set(0); }}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative [perspective:1200px]"
        >
          <motion.div style={{ rotateX: rotX, rotateY: rotY }} className="relative [transform-style:preserve-3d] flex justify-center">
            <div className="relative w-full max-w-[620px] rounded-3xl overflow-hidden glass p-2 shadow-2xl shadow-primary/20">
              <div className="rounded-2xl aspect-[11/10] w-full">
                <WirelessSurveyVisual />
              </div>
              <div className="absolute inset-2 rounded-2xl ring-1 ring-inset ring-white/10 pointer-events-none" />
            </div>

          </motion.div>

          {/* orbiting ring */}
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] border border-primary/10 animate-spin-slow" />
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="font-mono-label">Scroll</span>
        <span className="w-px h-10 bg-gradient-to-b from-primary/60 to-transparent" />
      </motion.div>
    </section>
  );
}

function Trust({ label }) {
  return (
    <div className="flex items-center gap-2">
      <Calendar className="w-4 h-4 text-primary" />
      <span>{label}</span>
    </div>
  );
}

