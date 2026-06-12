import { motion } from "motion/react";
import { Calendar, MapPin, Clock } from "lucide-react";

const EVENTS = [
  {
    name: "Ugadi 2025",
    telugu: "ఉగాది",
    date: "March 30, 2025",
    time: "4:00 PM – 9:00 PM",
    venue: "Rosemont Convention Center, IL",
    description: "Ring in the Telugu New Year with the traditional Ugadi Pachadi — six tastes that mirror life itself. Performances, prayers, and a feast to follow.",
    accent: "#E8840A",
    tag: "New Year Celebration",
  },
  {
    name: "Kuchipudi Utsavam",
    telugu: "కూచిపూడి ఉత్సవం",
    date: "May 17, 2025",
    time: "6:00 PM – 10:00 PM",
    venue: "Schaumburg Prairie Arts Center, IL",
    description: "An evening dedicated entirely to Kuchipudi — the classical dance form born in Andhra Pradesh. Solo arangetrams, group performances, and a Q&A with the artists.",
    accent: "#C41E3A",
    tag: "Classical Arts",
  },
  {
    name: "Sankranti Habba",
    telugu: "సంక్రాంతి పండుగ",
    date: "January 14, 2026",
    time: "11:00 AM – 7:00 PM",
    venue: "Oakbrook Community Center, IL",
    description: "Harikatha, Bhogi bonfire, Rangoli competitions for all ages. The harvestʼs joy — moved to the Midwest, but not diminished by an inch.",
    accent: "#1B6B4A",
    tag: "Harvest Festival",
  },
];

function EventCard({ event, index }: { event: typeof EVENTS[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="relative group overflow-hidden"
      style={{ background: "#1A0E00", border: `1px solid ${event.accent}33`, borderRadius: "2px" }}
    >
      {/* Top accent bar */}
      <div className="h-1" style={{ background: event.accent }} />

      <div className="p-7">
        {/* Tag */}
        <span
          className="inline-block mb-4 px-3 py-1 text-xs tracking-widest uppercase"
          style={{ background: `${event.accent}22`, color: event.accent, fontFamily: "'Inter', sans-serif", letterSpacing: "0.1em" }}
        >
          {event.tag}
        </span>

        {/* Telugu name */}
        <div style={{ fontFamily: "'Noto Sans Telugu', sans-serif", fontSize: "1.4rem", color: "#F5C518", lineHeight: 1.3, marginBottom: "0.3rem" }}>
          {event.telugu}
        </div>

        {/* English name */}
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", color: "#FFF8F0", fontWeight: 600, marginBottom: "0.8rem" }}>
          {event.name}
        </h3>

        <p style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,248,240,0.65)", fontSize: "0.92rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
          {event.description}
        </p>

        <div className="flex flex-col gap-2">
          {[
            { Icon: Calendar, text: event.date },
            { Icon: Clock, text: event.time },
            { Icon: MapPin, text: event.venue },
          ].map(({ Icon, text }) => (
            <div key={text} className="flex items-center gap-2">
              <Icon size={14} color={event.accent} strokeWidth={2} />
              <span style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,248,240,0.55)", fontSize: "0.85rem" }}>{text}</span>
            </div>
          ))}
        </div>

        <button
          className="mt-6 w-full py-2.5 text-sm tracking-widest uppercase transition-all duration-300"
          style={{ border: `1px solid ${event.accent}`, color: event.accent, background: "transparent", fontFamily: "'Inter', sans-serif", letterSpacing: "0.1em", cursor: "pointer" }}
          onMouseOver={(e) => { e.currentTarget.style.background = event.accent; e.currentTarget.style.color = "#1A0E00"; }}
          onMouseOut={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = event.accent; }}
        >
          Learn More & RSVP
        </button>
      </div>

      {/* Hover shimmer */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: `linear-gradient(135deg, ${event.accent}08 0%, transparent 60%)` }}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />
    </motion.div>
  );
}

export function Events() {
  return (
    <section id="events" className="py-24 px-6" style={{ background: "#0D0700" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p style={{ fontFamily: "'Inter', sans-serif", color: "#E8840A", fontSize: "0.8rem", letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "1rem" }}>
            Celebrations &amp; Programs
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#FFF8F0", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.2 }}>
            Upcoming Events
          </h2>
          <div className="mt-4 mx-auto h-px w-32" style={{ background: "linear-gradient(90deg, transparent, #E8840A, transparent)" }} />
          <p className="mt-5 max-w-xl mx-auto" style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,248,240,0.55)", fontSize: "0.95rem", lineHeight: 1.8 }}>
            Every calendar page is a reason to gather. Bring the whole family — especially the curious ones.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EVENTS.map((event, i) => (
            <EventCard key={event.name} event={event} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
