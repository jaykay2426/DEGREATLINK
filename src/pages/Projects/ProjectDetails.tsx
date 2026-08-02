import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  MapPin,
  CalendarDays,
  Play,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

import { projects } from "../../data/projects";

export default function ProjectDetails() {
  const { slug } = useParams();

  const serviceProjects = projects.filter(
    (project) => project.serviceSlug === slug
  );

  if (!serviceProjects.length) {
    return (
      <main className="min-h-screen bg-[#080D18] px-6 py-40 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-black">Projects not found</h1>

          <Link
            to="/projects"
            className="mt-8 inline-flex items-center gap-2 text-orange-500"
          >
            <ArrowLeft size={18} />
            Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  const service = serviceProjects[0];

  return (
    <main className="min-h-screen bg-[#080D18] text-white">
      {/* HEADER */}
      <section className="relative overflow-hidden border-b border-white/10 px-6 pb-20 pt-32 lg:px-8 lg:pt-40">
        <div className="pointer-events-none absolute right-[-150px] top-20 h-[350px] w-[350px] rounded-full bg-orange-500/10 blur-[120px]" />

        <div className="mx-auto max-w-7xl">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-orange-500"
          >
            <ArrowLeft size={17} />
            Back to Projects
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-10 max-w-4xl"
          >
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-orange-500">
              {service.service}
            </span>

            <h1 className="mt-5 text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
              Our {service.service}
              <span className="block text-orange-500">Projects.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              Explore installations and solutions completed under our{" "}
              {service.service.toLowerCase()} services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-28">
            {serviceProjects.map((project, index) => {
              const images = project.media.filter(
                (item) => item.type === "image"
              );

              const videos = project.media.filter(
                (item) => item.type === "video"
              );

              return (
                <motion.article
                  key={project.slug}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.08 }}
                  transition={{ duration: 0.7 }}
                >
                  {/* PROJECT HEADER */}
                  <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                    <div className="max-w-3xl">
                      <span className="text-sm font-bold uppercase tracking-[0.25em] text-orange-500">
                        Project {String(index + 1).padStart(2, "0")}
                      </span>

                      <h2 className="mt-4 text-3xl font-black sm:text-4xl lg:text-5xl">
                        {project.title}
                      </h2>

                      <p className="mt-5 max-w-2xl leading-8 text-slate-400">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300">
                        <MapPin size={15} className="text-orange-500" />
                        {project.location}
                      </span>

                      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300">
                        <CalendarDays
                          size={15}
                          className="text-orange-500"
                        />
                        {project.completed}
                      </span>
                    </div>
                  </div>

                  {/* IMAGE GALLERY */}
                  <div className="mt-12 grid gap-4 md:grid-cols-2">
                    {/* MAIN IMAGE */}
                    <div className="group relative min-h-[350px] overflow-hidden rounded-3xl border border-white/10 md:row-span-2">
                      <img
                        src={images[0]?.src}
                        alt={images[0]?.alt || project.title}
                        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      <span className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs font-semibold backdrop-blur-md">
                        Featured Installation
                      </span>
                    </div>

                    {/* SECOND IMAGE */}
                    <div className="group relative h-[250px] overflow-hidden rounded-3xl border border-white/10">
                      <img
                        src={images[1]?.src}
                        alt={images[1]?.alt || project.title}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>

                    {/* THIRD IMAGE */}
                    <div className="group relative h-[250px] overflow-hidden rounded-3xl border border-white/10">
                      <img
                        src={images[2]?.src}
                        alt={images[2]?.alt || project.title}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* DETAILS */}
                  <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                    <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-8">
                      <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-500">
                        Project Highlights
                      </p>

                      <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        {project.highlights.map((highlight) => (
                          <div
                            key={highlight}
                            className="flex items-start gap-3 text-sm text-slate-300"
                          >
                            <CheckCircle2
                              size={18}
                              className="mt-0.5 shrink-0 text-orange-500"
                            />

                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-3xl border border-orange-500/20 bg-orange-500/[0.04] p-8">
                      <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-500">
                        Need Something Similar?
                      </p>

                      <h3 className="mt-4 text-2xl font-bold">
                        Let's build the right solution for you.
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-slate-400">
                        Talk to Degreatlink about your next{" "}
                        {project.service.toLowerCase()} project.
                      </p>

                      <Link
                        to="/quote"
                        className="mt-7 inline-flex items-center gap-3 rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
                      >
                        Request a Quote
                        <ArrowUpRight size={17} />
                      </Link>
                    </div>
                  </div>

                  {/* VIDEOS */}
                  <div className="mt-12">
                    <div className="mb-7">
                      <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-500">
                        Installation Videos
                      </p>

                      <h3 className="mt-3 text-2xl font-black sm:text-3xl">
                        See the work in action.
                      </h3>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      {videos.map((video, videoIndex) => (
                        <div
                          key={video.src}
                          className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black"
                        >
                          <video
                            controls
                            preload="metadata"
                            className="aspect-video w-full object-cover"
                          >
                            <source
                              src={video.src}
                              type="video/mp4"
                            />
                            Your browser does not support video playback.
                          </video>

                          <div className="pointer-events-none absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/50 backdrop-blur-md">
                            <Play size={16} fill="currentColor" />
                          </div>

                          <span className="absolute bottom-4 left-5 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold backdrop-blur-md">
                            Video {videoIndex + 1}
                          </span>
                        </div>
                      ))}
                    </div>
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