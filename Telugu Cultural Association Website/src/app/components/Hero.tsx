import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

const RANGOLI_DOTS = Array.from({ length: 48 }, (_, i) => i);

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background image with deep overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1716714620140-9ed26b67e900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1920)`,
        }}
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, rgba(20,5,0,0.82) 0%, rgba(120,30,0,0.70) 50%, rgba(10,40,20,0.78) 100%)" }} />

      {/* Decorative top border — marigold-stripe */}
      <div className="absolute top-0 left-0 right-0 h-2" style={{ background: "linear-gradient(90deg, #E8840A, #C41E3A, #F5C518, #1B6B4A, #E8840A)" }} />

      {/* Floating rangoli dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {RANGOLI_DOTS.map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${4 + (i % 5) * 2}px`,
              height: `${4 + (i % 5) * 2}px`,
              left: `${(i * 17 + 8) % 100}%`,
              top: `${(i * 13 + 5) % 100}%`,
              background: ["#E8840A", "#F5C518", "#C41E3A", "#FFFFFF", "#2D8B5A"][i % 5],
              opacity: 0.15 + (i % 4) * 0.05,
            }}
            animate={{ y: [0, -18, 0], opacity: [0.15, 0.35, 0.15] }}
            transition={{ duration: 4 + (i % 5), repeat: Infinity, delay: (i * 0.2) % 4, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl">
        {/* Telugu script */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ fontFamily: "'Noto Sans Telugu', sans-serif", color: "#F5C518", fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1.2, fontWeight: 700, textShadow: "0 4px 24px rgba(0,0,0,0.5)" }}
        >
          తెలుగు సాంస్కృతిక సమాజం
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="my-6 h-px w-48"
          style={{ background: "linear-gradient(90deg, transparent, #E8840A, #F5C518, #E8840A, transparent)" }}
        />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ fontFamily: "'Playfair Display', serif", color: "#FFF8F0", fontSize: "clamp(1.4rem, 3.5vw, 2.8rem)", fontWeight: 400, lineHeight: 1.3, maxWidth: "700px", textShadow: "0 2px 12px rgba(0,0,0,0.6)" }}
        >
          Carrying the heart of Andhra and Telangana — across the ocean, into every room.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-4"
          style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,248,240,0.75)", fontSize: "clamp(0.95rem, 2vw, 1.15rem)", fontWeight: 300, letterSpacing: "0.04em" }}
        >
          Telugu Cultural Association of Greater Chicago&ensp;·&ensp;Est. 1987
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 items-center"
        >
          <a
            href="#events"
            className="px-8 py-3 rounded-sm text-sm tracking-widest uppercase transition-all duration-300"
            style={{ background: "#E8840A", color: "#FFF8F0", fontFamily: "'Inter', sans-serif", fontWeight: 600, letterSpacing: "0.12em", boxShadow: "0 4px 24px rgba(232,132,10,0.4)" }}
            onMouseOver={(e) => (e.currentTarget.style.background = "#C46A00")}
            onMouseOut={(e) => (e.currentTarget.style.background = "#E8840A")}
          >
            Upcoming Events
          </a>
          <a
            href="#join"
            className="px-8 py-3 rounded-sm text-sm tracking-widest uppercase transition-all duration-300"
            style={{ border: "1px solid rgba(245,197,24,0.6)", color: "#F5C518", fontFamily: "'Inter', sans-serif", fontWeight: 500, letterSpacing: "0.12em" }}
            onMouseOver={(e) => { e.currentTarget.style.background = "rgba(245,197,24,0.12)"; }}
            onMouseOut={(e) => { e.currentTarget.style.background = "transparent"; }}
          >
            Join Our Community
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={28} color="rgba(245,197,24,0.6)" />
      </motion.div>

      {/* Bottom marigold stripe */}
      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: "linear-gradient(90deg, #1B6B4A, #E8840A, #F5C518, #C41E3A, #1B6B4A)" }} />
    </section>
  );
}
