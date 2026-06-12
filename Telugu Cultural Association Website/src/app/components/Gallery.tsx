import { motion } from "motion/react";
import { useState } from "react";
import { X } from "lucide-react";

const PHOTOS = [
  {
    src: "https://images.unsplash.com/photo-1463592177119-bab2a00f3ccb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800",
    caption: "Kuchipudi Recital — Spring 2024",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1636619773834-c7e0762ddfe1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=600",
    caption: "Diyas at Diwali",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1636737512034-518389c47764?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=600",
    caption: "Festival of Lights",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1716714620140-9ed26b67e900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800",
    caption: "Rangoli Competition",
    span: "col-span-2 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1757700314590-0ea0f33541f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=600",
    caption: "Community Gathering",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1652111132299-ff1056c87b35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=600",
    caption: "Classical Performance",
    span: "col-span-1 row-span-1",
  },
];

export function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 px-6" style={{ background: "#080400" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p style={{ fontFamily: "'Inter', sans-serif", color: "#C41E3A", fontSize: "0.8rem", letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "1rem" }}>
            In Memory & In Motion
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#FFF8F0", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700 }}>
            Glimpses
          </h2>
          <div className="mt-4 mx-auto h-px w-32" style={{ background: "linear-gradient(90deg, transparent, #C41E3A, transparent)" }} />
        </motion.div>

        <div className="grid grid-cols-3 grid-rows-3 gap-3" style={{ height: "600px" }}>
          {PHOTOS.map((photo, i) => (
            <motion.div
              key={photo.src}
              className={`${photo.span} relative overflow-hidden cursor-pointer group`}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={() => setLightbox(photo.src)}
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(0deg, rgba(10,5,0,0.85) 0%, transparent 60%)" }}
              >
                <span style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,248,240,0.85)", fontSize: "0.8rem", letterSpacing: "0.05em" }}>
                  {photo.caption}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.93)" }}
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={28} />
          </button>
          <img
            src={lightbox}
            alt=""
            className="max-w-full max-h-full object-contain"
            style={{ borderRadius: "2px" }}
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </section>
  );
}
