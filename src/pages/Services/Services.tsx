import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

import { services } from "../../data/services";

export default function Services() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080D18] text-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden border-b border-white/10">
        {/* Background glows */}
        <div className="pointer-events-none absolute left-[-180px] top-[-100px] h-[450px] w-[450px] rounded-full bg-orange-500/10 blur-[130px]" />

        <div className="pointer-events-none absolute bottom-[-200px] right-[-100px] h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[140px]" />

        {/* Grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-36 lg:px-8 lg:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <span className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/5 px-5 py-2 text-xs font-bold uppercase tracking-[0.3em] text-orange-500">
              Our Services
            </span>

            <h1 className="mt-7 text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">
              Technology.
              <br />
              <span className="text-orange-500">Security.</span>
              <br />
              Power.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Professional technology solutions designed to make your home,
              business or organization safer, smarter and more connected.
            </p>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="mt-12 flex flex-wrap gap-3"
          >
            {[
              "Security Systems",
              "Power Solutions",
              "Smart Technology",
              "Professional Installation",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300 backdrop-blur-md"
              >
                <CheckCircle2
                  size={15}
                  className="text-orange-500"
                />

                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
          >
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-orange-500">
                What We Offer
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                Solutions built around
                <span className="text-orange-500"> your needs.</span>
              </h2>

              <p className="mt-5 max-w-2xl leading-8 text-slate-400">
                Explore our range of security, power, lighting and
                communication solutions. Select a service to discover exactly
                what it offers and how Degreatlink can help.
              </p>
            </div>

            <div className="hidden text-right lg:block">
              <span className="text-6xl font-black text-white/5">
                06
              </span>

              <p className="-mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                Core Services
              </p>
            </div>
          </motion.div>

          {/* Service cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 45 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.06,
                  }}
                  className="group"
                >
                  <Link
                    to={`/services/${service.slug}`}
                    className="relative block h-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#101827]"
                  >
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                      />

                      {/* Image overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#101827] via-[#101827]/30 to-transparent" />

                      {/* Orange hover overlay */}
                      <div className="absolute inset-0 bg-orange-500/0 transition duration-500 group-hover:bg-orange-500/10" />

                      {/* Number */}
                      <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/30 text-xs font-bold backdrop-blur-md">
                        {service.number}
                      </div>

                      {/* Icon */}
                      <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/30 text-orange-500 backdrop-blur-md transition duration-300 group-hover:bg-orange-500 group-hover:text-white">
                        <Icon size={20} />
                      </div>

                      {/* View service */}
                      <div className="absolute bottom-5 right-5 flex translate-y-3 items-center gap-2 rounded-full bg-orange-500 px-4 py-2 text-xs font-bold text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        View Service
                        <ArrowUpRight size={15} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-7">
                      <div className="flex items-center gap-2">
                        {service.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-500"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h3 className="mt-5 text-2xl font-bold transition-colors duration-300 group-hover:text-orange-500">
                        {service.title}
                      </h3>

                      <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-400">
                        {service.description}
                      </p>

                      <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
                        <span className="text-sm font-semibold text-slate-300">
                          Explore details
                        </span>

                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition duration-300 group-hover:border-orange-500 group-hover:bg-orange-500">
                          <ArrowUpRight
                            size={17}
                            className="transition duration-300 group-hover:rotate-45"
                          />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="relative overflow-hidden border-t border-white/10 py-24">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[140px]" />

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <span className="text-sm font-bold uppercase tracking-[0.3em] text-orange-500">
            Need a solution?
          </span>

          <h2 className="mt-5 text-4xl font-black sm:text-6xl">
            Let's build the right
            <span className="text-orange-500"> solution for you.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-400">
            Tell us what you need and our team can help you determine the
            right security, power, lighting or communication solution for
            your property.
          </p>

          <Link
            to="/quote"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-orange-500 px-8 py-4 font-bold text-white transition duration-300 hover:scale-105 hover:bg-orange-600"
          >
            Get Free Quote
            <ArrowUpRight size={19} />
          </Link>
        </div>
      </section>
    </main>
  );
}