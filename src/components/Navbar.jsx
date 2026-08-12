import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, LogIn } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { nav } from "@/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    setScrolled(window.scrollY > 100);

    // Use IntersectionObserver to reliably detect which section is in view
    const sectionIds = nav.map((l) => l.href).filter(Boolean);
    const elements = sectionIds.map((id) => document.querySelector(id)).filter(Boolean);

    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -40% 0px",
      threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries) => {
      // Find the entry with highest intersectionRatio
      let best = null;
      for (const entry of entries) {
        if (!best || entry.intersectionRatio > best.intersectionRatio) best = entry;
      }
      // Update active state if we found an intersecting entry, or use the best entry regardless
      if (best) {
        const id = best.target.id ? `#${best.target.id}` : null;
        if (id) setActive(id);
      }
    }, observerOptions);

    elements.forEach((el) => observer.observe(el));

    // Scroll event handler to ensure active state is accurate on scroll
    const onScroll = () => {
      setScrolled(window.scrollY > 100);
      
      // Find which section is currently at the top of the viewport
      let closestSection = "#home"; // Default to home
      
      // Look for the section that's closest to the top of the viewport
      // Iterate backwards to find the last section that has started coming into view
      for (let i = elements.length - 1; i >= 0; i--) {
        const el = elements[i];
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        
        // If section top is at or above ~140px (accounting for navbar height), it's the active section
        if (rect.top <= 140) {
          closestSection = `#${el.id}`;
          break;
        }
      }
      
      setActive(closestSection);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4"
      >
        <AnimatePresence mode="wait">
          {scrolled ? (
            <motion.nav
              key="glass"
              initial={{ opacity: 0, y: -20, width: "100%" }}
              animate={{ opacity: 1, y: 0, width: "auto" }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="glass mt-5 rounded-full px-5 py-2.5 shadow-xl shadow-primary/5 flex items-center gap-1 max-w-full"
            >
              <Logo />
              <DesktopLinks active={active} />
              <CTA />
            </motion.nav>
          ) : (
            <motion.nav
              key="ghost"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-5 w-full max-w-7xl flex items-center justify-between px-6 py-3"
            >
              <Logo />
              <DesktopLinks active={active} />
              <CTA />
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Mobile menu button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-5 right-5 z-50 md:hidden grid place-items-center w-11 h-11 rounded-full glass"
        aria-label="Open menu"
      >
        <Menu className="w-5 h-5" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] md:hidden bg-background/95 backdrop-blur-xl flex flex-col p-6"
          >
            <button onClick={() => setOpen(false)} className="self-end p-2" aria-label="Close menu">
              <X className="w-6 h-6" />
            </button>
            <div className="flex flex-col gap-2 mt-10">
              {nav.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  onClick={() => {
                    setOpen(false);
                    if (l.href && l.href.startsWith("#")) {
                      const el = document.querySelector(l.href);
                      if (el) {
                        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
                        history.replaceState(null, "", l.href);
                      }
                    }
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-2xl font-heading font-semibold py-3 border-b border-border"
                >
                  {l.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-3 group pr-2">
      <img src="/Scylla_Logo_Color.png" alt="Scylla logo" className="h-11 w-auto object-contain" />
      <span className="font-heading font-semibold text-xl tracking-tight text-foreground">Scylla</span>
    </a>
  );
}

function DesktopLinks({ active }) {
  return (
    <div className="hidden md:flex items-center gap-0.5 mx-2">
      {nav.map((l) => (
        <a
          key={l.label}
          href={l.href}
          onClick={(e) => {
            if (l.href && l.href.startsWith("#")) {
              e.preventDefault();
              const el = document.querySelector(l.href);
              if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
                // update hash without jumping
                history.replaceState(null, "", l.href);
              }
            }
          }}
          className={`relative px-3.5 py-1.5 text-sm font-medium rounded-full transition-colors hover:text-primary ${
            active === l.href ? "text-primary" : "text-muted-foreground"
          }`}
        >
          {l.label}
          {active === l.href && (
            <motion.span
              layoutId="nav-active"
              className="absolute inset-0 -z-10 rounded-full bg-primary/10"
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            />
          )}
        </a>
      ))}
    </div>
  );
}

function CTA() {
  return (
    <MagneticButton
      as="a"
      href="/customer-login"
      className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold border border-primary/20 bg-background/80 text-foreground shadow-sm hover:bg-primary/10"
    >
      <LogIn className="w-4 h-4" />
      Customer Login
    </MagneticButton>
  );
}
