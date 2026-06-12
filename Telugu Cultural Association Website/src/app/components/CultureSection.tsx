import { motion } from "motion/react";

const PILLARS = [
  {
    telugu: "నృత్యం",
    english: "Dance",
    form: "Kuchipudi",
    description: "Born in a small village in Andhra Pradesh, Kuchipudi is drama, devotion, and grace woven into one. Our academy trains over 120 students right here in the Chicago suburbs.",
    image: "https://images.unsplash.com/photo-1463592177119-bab2a00f3ccb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800",
    color: "#C41E3A",
  },
  {
    telugu: "సంగీతం",
    english: "Music",
    form: "Carnatic",
    description: "From Tyagaraja kritis to folk lavani — the full spectrum of Telugu musical heritage. Beginner veena classes. Vocal workshops. Annual music competition.",
    image: "https://images.unsplash.com/photo-1636619773834-c7e0762ddfe1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800",
    color: "#E8840A",
  },
  {
    telugu: "వంట",
    english: "Food",
    form: "Andhra & Telangana",
    description: "The fieriest cuisine in India. Gongura pachadi. Pesarattu. Pulihora. We host cooking workshops, community potlucks, and yes — that biryani you've been dreaming about.",
    image: "https://images.unsplash.com/photo-1739125875360-52013bb8c529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800",
    color: "#F5C518",
  },
  {
    telugu: "భాష",
    english: "Language",
    form: "Telugu Basha",
    description: "Telugu — the 'Italian of the East,' said to be the sweetest language in the world. Saturday Basha classes for children. Poetry readings. Film screenings with subtitles.",
    image: "https://images.unsplash.com/photo-1716714607603-8aa6a2f16d84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800",
    color: "#2D8B5A",
  },
];

function PillarCard({ pillar, index }: { pillar: typeof PILLARS[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="relative overflow-hidden group"
      style={{ borderRadius: "2px", aspectRatio: "3/4" }}
    >
      {/* Image */}
      <img
        src={pillar.image}
        alt={pillar.form}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{ background: `linear-gradient(0deg, rgba(10,5,0,0.97) 0%, rgba(10,5,0,0.6) 45%, rgba(10,5,0,0.2) 100%)` }}
      />

      {/* Color accent stripe */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ background: pillar.color }} />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <div style={{ fontFamily: "'Noto Sans Telugu', sans-serif", color: pillar.color, fontSize: "1.6rem", lineHeight: 1.2, marginBottom: "0.25rem" }}>
          {pillar.telugu}
        </div>
        <div style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,248,240,0.5)", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
          {pillar.form}
        </div>
        <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#FFF8F0", fontSize: "1.5rem", fontWeight: 600, marginBottom: "0.75rem" }}>
          {pillar.english}
        </h3>

        {/* Description — slides up on hover */}
        <motion.p
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,248,240,0.7)", fontSize: "0.85rem", lineHeight: 1.7 }}
        >
          {pillar.description}
        </motion.p>
      </div>
    </motion.div>
  );
}

export function CultureSection() {
  return (
    <section id="culture" className="py-24 px-6" style={{ background: "#0A0500" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p style={{ fontFamily: "'Inter', sans-serif", color: "#2D8B5A", fontSize: "0.8rem", letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "1rem" }}>
            What We Carry
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#FFF8F0", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700 }}>
            The Four Pillars
          </h2>
          <div className="mt-4 mx-auto h-px w-32" style={{ background: "linear-gradient(90deg, transparent, #2D8B5A, transparent)" }} />
          <p className="mt-5 max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,248,240,0.55)", fontSize: "0.95rem", lineHeight: 1.8 }}>
            Culture isn't a museum. It's what you do with your hands on a Saturday, what you teach your kids before bed, what makes a stranger feel at home the moment they walk in.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PILLARS.map((pillar, i) => (
            <PillarCard key={pillar.english} pillar={pillar} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
