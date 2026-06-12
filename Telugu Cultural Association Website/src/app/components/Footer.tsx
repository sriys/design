export function Footer() {
  return (
    <footer style={{ background: "#070300", borderTop: "1px solid rgba(232,132,10,0.15)" }}>
      {/* Top stripe */}
      <div className="h-0.5" style={{ background: "linear-gradient(90deg, #1B6B4A, #E8840A, #F5C518, #C41E3A, #1B6B4A)" }} />

      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <div style={{ fontFamily: "'Noto Sans Telugu', sans-serif", color: "#F5C518", fontSize: "1.5rem", marginBottom: "0.5rem" }}>తెలుగు సాంస్కృతిక సమాజం</div>
          <div style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,248,240,0.4)", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1.2rem" }}>
            Telugu Cultural Association<br />of Greater Chicago
          </div>
          <p style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,248,240,0.4)", fontSize: "0.82rem", lineHeight: 1.8 }}>
            Est. 1987 — Keeping the flame alive across generations, time zones, and winters.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <div style={{ fontFamily: "'Inter', sans-serif", color: "#E8840A", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem" }}>Quick Links</div>
          {["Events Calendar", "Dance Academy", "Music Programs", "Telugu Classes", "Volunteer", "Contact Us"].map((link) => (
            <div key={link} className="mb-2">
              <a
                href="#"
                style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,248,240,0.45)", fontSize: "0.85rem", textDecoration: "none" }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#F5C518")}
                onMouseOut={(e) => (e.currentTarget.style.color = "rgba(255,248,240,0.45)")}
              >
                {link}
              </a>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div>
          <div style={{ fontFamily: "'Inter', sans-serif", color: "#E8840A", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem" }}>Contact</div>
          {[
            { label: "Email", value: "info@tcagc.org" },
            { label: "Phone", value: "(847) 555-0172" },
            { label: "Post", value: "PO Box 4412, Schaumburg, IL 60168" },
          ].map(({ label, value }) => (
            <div key={label} className="mb-3">
              <div style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,248,240,0.3)", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>{label}</div>
              <div style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,248,240,0.6)", fontSize: "0.85rem" }}>{value}</div>
            </div>
          ))}

          <div className="mt-5 flex gap-3">
            {["Facebook", "Instagram", "YouTube"].map((s) => (
              <a
                key={s}
                href="#"
                className="px-3 py-1.5 text-xs transition-all duration-200"
                style={{ border: "1px solid rgba(255,248,240,0.15)", color: "rgba(255,248,240,0.45)", fontFamily: "'Inter', sans-serif", letterSpacing: "0.05em", borderRadius: "2px", textDecoration: "none" }}
                onMouseOver={(e) => { e.currentTarget.style.borderColor = "#E8840A"; e.currentTarget.style.color = "#E8840A"; }}
                onMouseOut={(e) => { e.currentTarget.style.borderColor = "rgba(255,248,240,0.15)"; e.currentTarget.style.color = "rgba(255,248,240,0.45)"; }}
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        className="px-6 py-5 text-center"
        style={{ borderTop: "1px solid rgba(255,248,240,0.06)", fontFamily: "'Inter', sans-serif", color: "rgba(255,248,240,0.2)", fontSize: "0.75rem", letterSpacing: "0.06em" }}
      >
        © 2025 Telugu Cultural Association of Greater Chicago · All rights reserved · Made with love and a lot of mirchi
      </div>
    </footer>
  );
}
