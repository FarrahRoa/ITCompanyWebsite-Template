import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, LogIn } from "lucide-react";
import { nav } from "@/data";

const VALID_SECTION_IDS = ["#home", "#about", "#services", "#contact"];
const NAV_OFFSET = 160;

function scrollToSection(id) {
  const element = document.querySelector(id);

  if (!element) {
    console.warn(`Section ${id} was not found.`);
    return;
  }

  element.scrollIntoView({ behavior: "smooth", block: "start" });

  if (typeof window !== "undefined") {
    window.history.replaceState(null, "", id);
  }
}

function getActiveSection() {
  if (typeof window === "undefined") return "#home";

  if (window.scrollY <= 20) return "#home";

  let selected = "#home";
  let bestDistance = Number.POSITIVE_INFINITY;

  VALID_SECTION_IDS.forEach((id) => {
    const el = document.querySelector(id);
    if (!el) return;

    const rect = el.getBoundingClientRect();

    if (rect.top <= NAV_OFFSET && rect.bottom > NAV_OFFSET) {
      selected = id;
      bestDistance = Number.NEGATIVE_INFINITY;
      return;
    }

    const distance = Math.abs(rect.top - NAV_OFFSET);
    if (distance < bestDistance) {
      bestDistance = distance;
      selected = id;
    }
  });

  return selected;
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(() => getActiveSection());

  useEffect(() => {
    const syncActive = () => {
      const nextActive = getActiveSection();
      setActive((current) => (current === nextActive ? current : nextActive));
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
      syncActive();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("hashchange", syncActive);
    syncActive();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", syncActive);
    };
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-[80] flex justify-center px-4"
      >
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: 1,
            y: 0,
            width: scrolled ? "auto" : "100%",
          }}
          transition={{ duration: 0.4 }}
          className={
            scrolled
              ? "glass mt-5 rounded-full px-5 py-2.5 shadow-xl shadow-primary/5 flex items-center gap-1 max-w-full"
              : "mt-5 w-full max-w-7xl flex items-center justify-between px-6 py-3"
          }
        >
          <Logo />
          <DesktopLinks active={active} onSelect={setActive} onNavigate={scrollToSection} />
          <CTA />
        </motion.nav>
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
                      setActive(l.href);
                      scrollToSection(l.href);
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

function DesktopLinks({ active, onSelect, onNavigate }) {
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
              onSelect?.(l.href);
              onNavigate?.(l.href);
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
