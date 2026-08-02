import { motion } from "framer-motion";

const images = [
  {
    title: "CCTV Installation",
    image:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Solar Power System",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Security Technology",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Solar Lighting",
    image:
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Smart Technology",
    image:
      "https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Modern Installation",
    image:
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1200&q=85",
  },
];

export default function Gallery() {
  return (
    <main className="min-h-screen bg-[#080D18] py-28 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-sm font-bold uppercase tracking-[0.3em] text-orange-500">
            Our Gallery
          </span>

          <h1 className="mt-5 text-5xl font-black sm:text-6xl">
            Work that speaks
            <span className="text-orange-500"> for itself.</span>
          </h1>

          <p className="mt-6 leading-8 text-slate-400">
            A glimpse into the technology, installations and solutions we
            provide.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-3xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-xl font-bold">{item.title}</h2>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}