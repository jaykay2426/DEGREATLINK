import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Quote,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

import { services } from "../../data/services";

export default function ServiceDetails() {
  const { slug } = useParams();

  const serviceIndex = services.findIndex(
    (service) => service.slug === slug
  );

  const service = services[serviceIndex];

  if (!service) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#080D18] px-6 text-white">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-orange-500">
            Service Not Found
          </p>

          <h1 className="mt-4 text-4xl font-black">
            We couldn't find that service.
          </h1>

          <Link
            to="/services"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3 font-bold"
          >
            <ArrowLeft size={18} />
            Back to Services
          </Link>
        </div>
      </main>
    );
  }

  const Icon = service.icon;

  const nextService =
    services[(serviceIndex + 1) % services.length];

  return (
    <main className="min-h-screen overflow-hidden bg-[#080D18] text-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[75vh] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#080D18]/80" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#080D18] via-[#080D18]/75 to-transparent" />

        <div className="relative mx-auto flex min-h-[75vh] max-w-7xl items-end px-6 pb-20 pt-40 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <Link
              to="/services"
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-orange-500"
            >
              <ArrowLeft size={17} />
              All Services
            </Link>

            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-xl shadow-orange-500/20">
                <Icon size={28} />
              </div>

              <span className="text-sm font-bold uppercase tracking-[0.3em] text-orange-500">
                Service {service.number}
              </span>
            </div>

            <h1 className="mt-7 text-5xl font-black leading-[1.05] sm:text-6xl lg:text-8xl">
              {service.title}
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              {service.heroDescription}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          OVERVIEW
      ===================================================== */}

      <section className="py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-orange-500">
              About This Service
            </p>

            <h2 className="mt-5 text-4xl font-black sm:text-5xl">
              What is
              <span className="text-orange-500"> {service.shortTitle}?</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-lg leading-9 text-slate-400">
              {service.overview}
            </p>

            <div className="mt-8 h-px w-full bg-white/10" />

            <div className="mt-7 flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-500/10 text-orange-500">
                <CheckCircle2 size={20} />
              </div>

              <p className="text-sm font-semibold text-slate-300">
                Professional solutions from planning to installation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          BENEFITS
      ===================================================== */}

      <section className="relative border-y border-white/10 bg-[#0B1220] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-orange-500">
              Why It Matters
            </p>

            <h2 className="mt-5 text-4xl font-black sm:text-5xl">
              The benefits of
              <span className="text-orange-500"> {service.shortTitle}.</span>
            </h2>

            <p className="mt-5 leading-8 text-slate-400">
              The right solution can make your property safer, more
              convenient, more efficient and easier to manage.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {service.benefits.map((benefit, index) => {
              const BenefitIcon = benefit.icon;

              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -8 }}
                  className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:border-orange-500/30"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500 transition duration-300 group-hover:bg-orange-500 group-hover:text-white">
                    <BenefitIcon size={23} />
                  </div>

                  <h3 className="mt-7 text-xl font-bold">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {benefit.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          USEFUL FOR
      ===================================================== */}

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-orange-500">
                Where It Works
              </p>

              <h2 className="mt-5 text-4xl font-black sm:text-5xl">
                Built for different
                <span className="text-orange-500"> environments.</span>
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-slate-400">
                Whether you're protecting a home, managing a business or
                improving an organization, this solution can be tailored to
                your environment and requirements.
              </p>

              <Link
                to="/quote"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-orange-500 px-7 py-4 font-bold transition hover:scale-105 hover:bg-orange-600"
              >
                Discuss Your Project
                <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {service.usefulFor.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500/10 text-orange-500">
                    <CheckCircle2 size={17} />
                  </div>

                  <span className="text-sm font-semibold text-slate-300">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          WHY DEGREATLINK
      ===================================================== */}

      <section className="border-y border-white/10 bg-[#0B1220] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-orange-500">
              Why Degreatlink
            </p>

            <h2 className="mt-5 text-4xl font-black sm:text-5xl">
              Why choose us for
              <span className="text-orange-500"> this service?</span>
            </h2>
          </div>

          <div className="mx-auto mt-14 max-w-3xl">
            <div className="space-y-4">
              {service.whyChoose.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.06,
                  }}
                  className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                >
                  <span className="text-sm font-black text-orange-500">
                    0{index + 1}
                  </span>

                  <CheckCircle2
                    size={19}
                    className="shrink-0 text-orange-500"
                  />

                  <span className="font-semibold text-slate-300">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          QUOTE CTA
      ===================================================== */}

      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[150px]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-4xl px-6 text-center"
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500">
            <Quote size={27} />
          </div>

          <h2 className="mt-7 text-4xl font-black sm:text-6xl">
            Ready to get
            <span className="text-orange-500"> started?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-400">
            Let Degreatlink help you plan and implement the right{" "}
            {service.shortTitle.toLowerCase()} solution for your property.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/quote"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-orange-500 px-8 py-4 font-bold transition hover:scale-105 hover:bg-orange-600"
            >
              Get Free Quote
              <ArrowRight size={19} />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-4 font-bold transition hover:border-orange-500 hover:text-orange-500"
            >
              Contact Degreatlink
            </Link>
          </div>
        </motion.div>
      </section>

      {/* =====================================================
          NEXT SERVICE
      ===================================================== */}

      <section className="border-t border-white/10">
        <Link
          to={`/services/${nextService.slug}`}
          className="group block"
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-10 lg:px-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500">
                Next Service
              </p>

              <h3 className="mt-2 text-2xl font-bold transition group-hover:text-orange-500 sm:text-3xl">
                {nextService.title}
              </h3>
            </div>

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 transition duration-300 group-hover:border-orange-500 group-hover:bg-orange-500">
              <ArrowRight
                size={20}
                className="transition group-hover:translate-x-1"
              />
            </div>
          </div>
        </Link>
      </section>
    </main>
  );
}