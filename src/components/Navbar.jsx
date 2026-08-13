import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, LogIn } from "lucide-react";
import { nav } from "@/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    // Set initial active state based on URL hash
    const setActiveFromHash = () => {
      const hash = window.location.hash || "#home";
      setActive(hash);
    };

    setActiveFromHash();

    // Update active state when URL hash changes
    window.addEventListener("hashchange", setActiveFromHash);

    return () => {
      window.removeEventListener("hashchange", setActiveFromHash);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);

      // Fallback: detect which section is in view based on scroll position
      const sectionIds = nav.map((l) => l.href).filter(Boolean);
      const elements = sectionIds.map((id) => document.querySelector(id)).filter(Boolean);

      if (elements.length === 0) return;

      // Find the section that's closest to the top of the viewport
      let closestSection = "#home";
      let closestDistance = Infinity;

      for (const el of elements) {
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top - 140); // Account for navbar height

        // Prefer sections that are above the viewport midpoint
        if (rect.top <= 300 && distance < closestDistance) {
          closestDistance = distance;
          closestSection = `#${el.id}`;
        }
      }

      // Only update if not already set by hash
      if (!window.location.hash) {
        setActive(closestSection);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
                  aria-current={active === l.href ? "page" : undefined}
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
                  className={`text-2xl font-heading font-semibold py-3 border-b border-border transition-colors ${
                    active === l.href ? "text-primary" : "text-foreground"
                  }`}
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
          aria-current={active === l.href ? "page" : undefined}
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
    <a
      href="https://login.scyllaselect.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold border border-primary/20 bg-background/80 text-foreground shadow-sm hover:bg-primary/10"
    >
      <LogIn className="w-4 h-4" />
      Customer Login
    </a>
  );
}
