import { motion } from "motion/react";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export function JoinSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", interest: "General Membership" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="join" className="py-24 px-6 relative overflow-hidden" style={{ background: "#0D0700" }}>
      {/* Decorative kolam-like pattern */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.03]">
        <svg width="800" height="800" viewBox="0 0 800 800" fill="none">
          {[1, 2, 3, 4, 5, 6].map((r) => (
            <circle key={r} cx="400" cy="400" r={r * 60} stroke="#F5C518" strokeWidth="1" />
          ))}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
            <line
              key={angle}
              x1="400" y1="400"
              x2={400 + 360 * Math.cos((angle * Math.PI) / 180)}
              y2={400 + 360 * Math.sin((angle * Math.PI) / 180)}
              stroke="#F5C518" strokeWidth="0.5"
            />
          ))}
        </svg>
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div style={{ fontFamily: "'Noto Sans Telugu', sans-serif", color: "#F5C518", fontSize: "2rem", marginBottom: "0.5rem" }}>
            మాతో చేరండి
          </div>
          <p style={{ fontFamily: "'Inter', sans-serif", color: "#E8840A", fontSize: "0.8rem", letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "1rem" }}>
            Join Our Community
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#FFF8F0", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, lineHeight: 1.3 }}>
            The door is always open.<br />Especially if you're bringing gongura.
          </h2>
          <p className="mt-4" style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,248,240,0.55)", fontSize: "0.92rem", lineHeight: 1.8 }}>
            New to Telugu culture? Grew up in it? Married into it? Curious about it? All welcome. Truly.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <CheckCircle size={52} color="#2D8B5A" className="mx-auto mb-4" />
            <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#FFF8F0", fontSize: "1.6rem", marginBottom: "0.75rem" }}>
              ధన్యవాదాలు — Thank you!
            </h3>
            <p style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,248,240,0.6)", fontSize: "0.9rem" }}>
              We'll reach out within 2 business days. Meanwhile — see you at the next event.
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            {[
              { label: "Your Name", key: "name", type: "text", placeholder: "Srinivas Rao" },
              { label: "Email Address", key: "email", type: "email", placeholder: "you@example.com" },
            ].map(({ label, key, type, placeholder }) => (
              <div key={key}>
                <label
                  style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,248,240,0.55)", fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}
                >
                  {label}
                </label>
                <input
                  type={type}
                  required
                  placeholder={placeholder}
                  value={form[key as keyof typeof form]}
                  onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
                  className="w-full px-4 py-3 outline-none transition-all duration-200"
                  style={{
                    background: "rgba(255,248,240,0.05)",
                    border: "1px solid rgba(255,248,240,0.12)",
                    borderRadius: "2px",
                    color: "#FFF8F0",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9rem",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#E8840A")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(255,248,240,0.12)")}
                />
              </div>
            ))}

            <div>
              <label style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,248,240,0.55)", fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}>
                I'm interested in
              </label>
              <select
                value={form.interest}
                onChange={(e) => setForm((f) => ({ ...f, interest: e.target.value }))}
                className="w-full px-4 py-3 outline-none"
                style={{
                  background: "#1A0E00",
                  border: "1px solid rgba(255,248,240,0.12)",
                  borderRadius: "2px",
                  color: "#FFF8F0",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.9rem",
                  cursor: "pointer",
                }}
              >
                {["General Membership", "Dance Classes (Kuchipudi)", "Music Programs", "Telugu Language Classes", "Volunteering", "Sponsorship"].map((o) => (
                  <option key={o} value={o} style={{ background: "#1A0E00" }}>{o}</option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="mt-2 py-4 flex items-center justify-center gap-3 transition-all duration-300 group"
              style={{
                background: "#E8840A",
                color: "#0D0700",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontSize: "0.85rem",
                borderRadius: "2px",
                border: "none",
                cursor: "pointer",
              }}
              onMouseOver={(e) => (e.currentTarget.style.background = "#C46A00")}
              onMouseOut={(e) => (e.currentTarget.style.background = "#E8840A")}
            >
              <Send size={16} />
              Connect With Us
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
}
