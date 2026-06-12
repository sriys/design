import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const LINKS = [
  { label: "Events", href: "#events" },
  { label: "Culture", href: "#culture" },
  { label: "Gallery", href: "#gallery" },
  { label: "Join", href: "#join" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(13,7,0,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(232,132,10,0.15)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex flex-col">
          <span style={{ fontFamily: "'Noto Sans Telugu', sans-serif", color: "#F5C518", fontSize: "1.1rem", lineHeight: 1.1 }}>తెలుగు సమాజం</span>
          <span style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,248,240,0.45)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
            Telugu Cultural Association
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,248,240,0.65)", fontSize: "0.82rem", letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none" }}
              className="hover:text-white transition-colors duration-200"
              onMouseOver={(e) => (e.currentTarget.style.color = "#F5C518")}
              onMouseOut={(e) => (e.currentTarget.style.color = "rgba(255,248,240,0.65)")}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#join"
            className="px-5 py-2 transition-all duration-300"
            style={{ background: "#E8840A", color: "#0D0700", fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", borderRadius: "2px", textDecoration: "none" }}
            onMouseOver={(e) => (e.currentTarget.style.background = "#C46A00")}
            onMouseOut={(e) => (e.currentTarget.style.background = "#E8840A")}
          >
            Become a Member
          </a>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden" onClick={() => setOpen(!open)} style={{ color: "#FFF8F0", background: "none", border: "none", cursor: "pointer", padding: "4px" }}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
            style={{ background: "rgba(13,7,0,0.98)", borderTop: "1px solid rgba(232,132,10,0.15)" }}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,248,240,0.7)", fontSize: "0.88rem", letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
