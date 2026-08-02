import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Camera,
  Sun,
  LockKeyhole,
  Radio,
  Lightbulb,
  Cable,
} from "lucide-react";
import { Link } from "react-router-dom";

const projectCategories = [
  {
    slug: "cctv-installation",
    title: "CCTV Installation",
    description:
      "Explore surveillance and security installations completed for residential and commercial properties.",
    icon: Camera,
    image:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=85",
  },
  {
    slug: "solar-systems",
    title: "Solar Systems",
    description:
      "View solar power installations designed around different energy requirements.",
    icon: Sun,
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=85",
  },
  {
    slug: "electrical-fencing",
    title: "Electrical Fencing",
    description:
      "See perimeter security solutions installed around properties and compounds.",
    icon: LockKeyhole,
    image:
      "https://images.unsplash.com/photo-1564594985645-4427056e22e2?auto=format&fit=crop&w=1200&q=85",
  },
  {
    slug: "dstv-setup",
    title: "DStv Setup",
    description:
      "Explore satellite television installations, positioning and signal setup.",
    icon: Radio,
    image:
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1200&q=85",
  },
  {
    slug: "street-solar-lights",
    title: "Street Solar Lights",
    description:
      "Discover outdoor solar lighting installations for compounds, businesses and public spaces.",
    icon: Lightbulb,
    image:
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=85",
  },
  {
    slug: "intercom-solutions",
    title: "Intercom Solutions",
    description:
      "Explore communication and access-control installations for homes and organizations.",
    icon: Cable,
    image:
      "https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&w=1200&q=85",
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen bg-[#080D18] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-20 pt-32 lg:px-8 lg:pt-40">
        <div className="pointer-events-none absolute left-[-150px] top-20 h-[350px] w-[350px] rounded-full bg-orange-500/10 blur-[120px]" />

        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <span className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-orange-500">
              Our Portfolio
            </span>

            <h1 className="mt-7 text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Real installations.
              <span className="block text-orange-500">
                Real solutions.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
              Explore some of the technology and installation solutions
              delivered by Degreatlink across security, solar power,
              communication and outdoor infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PROJECT CATEGORIES */}
      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-500">
                Explore our work
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                Projects by service
              </h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projectCategories.map((project, index) => {
              const Icon = project.icon;

              return (
                <motion.article
                  key={project.slug}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.06,
                  }}
                  whileHover={{ y: -8 }}
                  className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035]"
                >
                  {/* IMAGE */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#080D18] via-[#080D18]/20 to-transparent" />

                    <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-black/40 text-orange-500 backdrop-blur-md">
                      <Icon size={21} />
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-7">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
                      Portfolio
                    </p>

                    <h3 className="mt-3 text-2xl font-bold">
                      {project.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-400">
                      {project.description}
                    </p>

                    <Link
                      to={`/projects/${project.slug}`}
                      className="group/link mt-7 inline-flex items-center gap-3 font-semibold"
                    >
                      View Projects

                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-all group-hover/link:border-orange-500 group-hover/link:bg-orange-500">
                        <ArrowUpRight
                          size={16}
                          className="transition-transform group-hover/link:rotate-45"
                        />
                      </span>
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}