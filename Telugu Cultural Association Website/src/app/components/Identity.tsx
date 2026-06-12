import { motion } from "motion/react";

const QUOTES = [
  {
    text: "My mother taught me how to make pulihora before she taught me how to make pancakes. I taught my daughter both.",
    name: "Sujatha Reddy",
    role: "Member since 1994",
    accent: "#E8840A",
  },
  {
    text: "I came to the Ugadi function not knowing anyone. I left with three aunties who already have my number.",
    name: "Kiran Varma",
    role: "New member, 2023",
    accent: "#C41E3A",
  },
  {
    text: "My son was born here. He speaks Telugu with a Chicago accent and I wouldn't change a single thing.",
    name: "Prasad Nanduri",
    role: "Board Member",
    accent: "#2D8B5A",
  },
];

export function Identity() {
  return (
    <section className="py-24 px-6 relative overflow-hidden" style={{ background: "#100800" }}>
      {/* Large background watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        style={{ opacity: 0.04 }}
      >
        <span style={{ fontFamily: "'Noto Sans Telugu', sans-serif", fontSize: "clamp(8rem, 25vw, 22rem)", color: "#F5C518", lineHeight: 1, whiteSpace: "nowrap" }}>
          తెలుగు
        </span>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-20"
        >
          <p style={{ fontFamily: "'Inter', sans-serif", color: "#E8840A", fontSize: "0.8rem", letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "1.2rem" }}>
            Proudly Both
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#FFF8F0", fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: 700, lineHeight: 1.2 }}>
            Not either-or. Both — and then some.
          </h2>
          <p className="mt-6" style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,248,240,0.6)", fontSize: "1rem", lineHeight: 1.9 }}>
            We are Telugu. We are American. We celebrate the Fourth of July and Ugadi with equal fervor. Our children wear jeans to the Kuchipudi recital and silk pavadais to prom. This is not contradiction — this is the whole point.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 pb-20"
          style={{ borderBottom: "1px solid rgba(255,248,240,0.08)" }}
        >
          {[
            { num: "1,200+", label: "Member families" },
            { num: "37", label: "Years of community" },
            { num: "14", label: "Annual events" },
            { num: "120+", label: "Dance students" },
          ].map(({ num, label }) => (
            <div key={label} className="text-center">
              <div style={{ fontFamily: "'Playfair Display', serif", color: "#F5C518", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700 }}>{num}</div>
              <div style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,248,240,0.45)", fontSize: "0.82rem", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: "0.4rem" }}>{label}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {QUOTES.map((q, i) => (
            <motion.div
              key={q.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative p-6"
              style={{ borderLeft: `2px solid ${q.accent}`, background: "rgba(255,248,240,0.03)" }}
            >
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "3rem", color: q.accent, lineHeight: 0.8, marginBottom: "0.8rem", opacity: 0.6 }}>&ldquo;</div>
              <p style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,248,240,0.75)", fontSize: "0.92rem", lineHeight: 1.8, fontStyle: "italic" }}>
                {q.text}
              </p>
              <div className="mt-4">
                <div style={{ fontFamily: "'Inter', sans-serif", color: "#FFF8F0", fontSize: "0.85rem", fontWeight: 500 }}>{q.name}</div>
                <div style={{ fontFamily: "'Inter', sans-serif", color: q.accent, fontSize: "0.75rem", letterSpacing: "0.08em" }}>{q.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
