import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Lightbulb,
  ShieldCheck,
  Target,
  Users,
  Wrench,
  Zap,
  Camera,
  Sun,
  Radio,
  LockKeyhole,
} from "lucide-react";
import { Link } from "react-router-dom";

const solutions = [
  {
    icon: Camera,
    title: "CCTV & Surveillance",
    text: "Professional surveillance systems designed to help you monitor and protect your property.",
  },
  {
    icon: Sun,
    title: "Solar Energy Systems",
    text: "Reliable solar solutions designed to provide dependable power for homes and businesses.",
  },
  {
    icon: ShieldCheck,
    title: "Electrical Fencing",
    text: "Perimeter security solutions designed to provide an additional layer of protection.",
  },
  {
    icon: Radio,
    title: "Intercom Solutions",
    text: "Modern communication systems that make property access and communication easier.",
  },
  {
    icon: Lightbulb,
    title: "Street Solar Lights",
    text: "Efficient solar-powered lighting solutions for streets, compounds and outdoor spaces.",
  },
  {
    icon: LockKeyhole,
    title: "DStv Setup",
    text: "Professional satellite TV installation and setup for clear and reliable viewing.",
  },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Security",
    text: "We prioritize solutions that help protect people, properties and valuable assets.",
  },
  {
    icon: BadgeCheck,
    title: "Quality",
    text: "We focus on dependable equipment, proper installation and professional workmanship.",
  },
  {
    icon: Wrench,
    title: "Professional Service",
    text: "Every project is approached with care, attention to detail and practical expertise.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    text: "We listen to our clients and build solutions around their actual needs.",
  },
];

const industries = [
  "Residential Properties",
  "Businesses",
  "Offices",
  "Commercial Spaces",
  "Organizations",
  "Schools & Institutions",
];

const stats = [
  {
    value: "6+",
    label: "Core Solutions",
  },
  {
    value: "100%",
    label: "Professional Focus",
  },
  {
    value: "24/7",
    label: "Security Mindset",
  },
  {
    value: "1",
    label: "Trusted Partner",
  },
];

export default function About() {
  return (
    <main className="overflow-hidden bg-[#080D18] text-white">

      {/* =====================================================
          ABOUT HERO
      ====================================================== */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden pt-24">

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1800&q=85')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#050914]/90" />

        {/* Orange glow */}
        <div className="pointer-events-none absolute left-[-180px] top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-orange-500/10 blur-[130px]" />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <span className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.3em] text-orange-400">
              About Degreatlink
            </span>

            <h1 className="mt-7 text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">
              Smart technology.
              <span className="block text-orange-500">
                Real-world protection.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Degreatlink provides professional security, power, lighting and
              communication solutions for homes, businesses and organizations.
              We combine modern technology with dependable installation to
              help create safer, smarter and more connected spaces.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/services"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-orange-500 px-7 py-4 font-bold text-white transition-all duration-300 hover:scale-[1.03] hover:bg-orange-600"
              >
                Explore Our Services
                <ArrowRight
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/quote"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.04] px-7 py-4 font-bold text-white backdrop-blur-md transition-all duration-300 hover:border-orange-500 hover:bg-orange-500"
              >
                Request a Quote
              </Link>
            </div>
          </motion.div>

        </div>
      </section>

      {/* =====================================================
          INTRODUCTION
      ====================================================== */}
      <section className="relative py-24 md:py-32">

        <div className="pointer-events-none absolute right-[-180px] top-20 h-[350px] w-[350px] rounded-full bg-orange-500/10 blur-[130px]" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-orange-500">
                Who We Are
              </span>

              <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
                Building safer and smarter spaces through technology.
              </h2>

              <p className="mt-6 leading-8 text-slate-400">
                At Degreatlink, we understand that technology should solve
                real problems. That is why we provide practical security,
                power, lighting and communication solutions designed around
                the needs of our clients.
              </p>

              <p className="mt-5 leading-8 text-slate-400">
                Whether it is protecting a home with CCTV and electric
                fencing, providing reliable solar power, improving outdoor
                lighting or creating better communication through intercom
                systems, our goal is to deliver solutions that work.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Professional installation",
                  "Modern technology solutions",
                  "Solutions for homes and businesses",
                  "Quality-focused workmanship",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm font-medium text-slate-200"
                  >
                    <CheckCircle2
                      size={20}
                      className="shrink-0 text-orange-500"
                    />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right visual panel */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#101827] p-3 shadow-2xl">

                <div
                  className="relative min-h-[500px] overflow-hidden rounded-[1.5rem] bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&w=1200&q=85')",
                  }}
                >

                  <div className="absolute inset-0 bg-[#080D18]/55" />

                  <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/10 bg-[#080D18]/80 p-6 backdrop-blur-xl">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 text-white">
                        <ShieldCheck size={25} />
                      </div>

                      <div>
                        <p className="text-sm font-bold text-white">
                          Built Around Your Needs
                        </p>
                        <p className="mt-1 text-xs text-slate-400">
                          Security • Power • Communication
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-7 -left-5 hidden rounded-2xl border border-white/10 bg-[#111a2a]/95 p-5 shadow-xl backdrop-blur-xl sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                    <Zap size={21} />
                  </div>

                  <div>
                    <p className="text-sm font-bold">Smart Solutions</p>
                    <p className="text-xs text-slate-500">
                      Designed to perform
                    </p>
                  </div>
                </div>
              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* =====================================================
          STATS
      ====================================================== */}
      <section className="border-y border-white/10 bg-[#0b1220] py-16">

        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4 lg:px-8">

          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              className="text-center"
            >
              <p className="text-4xl font-black text-orange-500 sm:text-5xl">
                {stat.value}
              </p>

              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500 sm:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* =====================================================
          WHAT WE DO
      ====================================================== */}
      <section className="relative py-24 md:py-32">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-orange-500">
              What We Do
            </span>

            <h2 className="mt-5 text-4xl font-black sm:text-5xl">
              Technology solutions built for everyday needs.
            </h2>

            <p className="mt-5 leading-8 text-slate-400">
              From security and surveillance to renewable energy and
              communication, we provide solutions that help people and
              organizations operate with greater confidence.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {solutions.map((solution, index) => {
              const Icon = solution.icon;

              return (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    delay: index * 0.06,
                    duration: 0.6,
                  }}
                  whileHover={{ y: -8 }}
                  className="group rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition-all duration-300 hover:border-orange-500/30 hover:bg-white/[0.055]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                    <Icon size={26} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-7 text-xl font-bold">
                    {solution.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {solution.text}
                  </p>

                  <Link
                    to="/services"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-orange-500"
                  >
                    Learn more
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

      {/* =====================================================
          MISSION + VISION
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#0b1220] py-24 md:py-32">

        <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-6 md:grid-cols-2">

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-8 sm:p-10"
            >
              <div className="absolute right-[-30px] top-[-30px] opacity-[0.04]">
                <Target size={180} />
              </div>

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500">
                  <Target size={27} />
                </div>

                <p className="mt-7 text-sm font-bold uppercase tracking-[0.25em] text-orange-500">
                  Our Mission
                </p>

                <h3 className="mt-4 text-3xl font-black">
                  Deliver technology that makes a difference.
                </h3>

                <p className="mt-5 leading-8 text-slate-400">
                  Our mission is to provide reliable and practical technology
                  solutions that improve security, power availability,
                  communication and everyday convenience for our clients.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-8 sm:p-10"
            >
              <div className="absolute right-[-30px] top-[-30px] opacity-[0.04]">
                <Lightbulb size={180} />
              </div>

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500">
                  <Lightbulb size={27} />
                </div>

                <p className="mt-7 text-sm font-bold uppercase tracking-[0.25em] text-orange-500">
                  Our Vision
                </p>

                <h3 className="mt-4 text-3xl font-black">
                  A safer, smarter and more connected future.
                </h3>

                <p className="mt-5 leading-8 text-slate-400">
                  We aim to become a trusted technology solutions partner by
                  continuously improving our services and helping more homes,
                  businesses and organizations benefit from modern technology.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =====================================================
          WHY DEGREATLINK
      ====================================================== */}
      <section className="relative py-24 md:py-32">

        <div className="pointer-events-none absolute left-[-180px] top-20 h-[350px] w-[350px] rounded-full bg-orange-500/10 blur-[120px]" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-400">
              Why Degreatlink
            </span>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Technology that works.
              <span className="block text-orange-500">
                Protection you can trust.
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
              We combine modern technology, professional installation and
              dependable service to deliver solutions built around real-world
              needs.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                icon: ShieldCheck,
                title: "Security First",
                text: "Solutions designed to help protect what matters most.",
              },
              {
                icon: Zap,
                title: "Smart Power",
                text: "Reliable solar and lighting solutions for modern needs.",
              },
              {
                icon: BadgeCheck,
                title: "Professional Standards",
                text: "Quality-focused installation and dependable workmanship.",
              },
              {
                icon: Wrench,
                title: "Complete Service",
                text: "From planning and installation to setup and support.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -7 }}
                  className="rounded-3xl border border-white/10 bg-[#101827]/80 p-7 transition-all duration-300 hover:border-orange-500/30"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-7 text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

      {/* =====================================================
          CORE VALUES
      ====================================================== */}
      <section className="bg-[#0b1220] py-24 md:py-32">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-orange-500">
                Our Core Values
              </span>

              <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
                The principles behind our work.
              </h2>

              <p className="mt-6 leading-8 text-slate-400">
                Good technology is only part of the equation. We believe the
                way we work, communicate and serve our clients matters just as
                much as the systems we install.
              </p>

              <Link
                to="/contact"
                className="group mt-8 inline-flex items-center gap-3 font-bold text-white"
              >
                Talk to our team
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-all group-hover:border-orange-500 group-hover:bg-orange-500">
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">

              {values.map((value, index) => {
                const Icon = value.icon;

                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="rounded-3xl border border-white/10 bg-white/[0.035] p-7"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                        <Icon size={23} />
                      </div>

                      <span className="text-xs font-bold text-slate-600">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mt-6 text-xl font-bold">
                      {value.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {value.text}
                    </p>
                  </motion.div>
                );
              })}

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHO WE SERVE
      ====================================================== */}
      <section className="py-24 md:py-32">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 sm:p-10"
            >
              <div className="absolute right-[-80px] top-[-80px] h-[220px] w-[220px] rounded-full bg-orange-500/10 blur-[80px]" />

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500">
                  <Building2 size={27} />
                </div>

                <h2 className="mt-7 text-3xl font-black sm:text-4xl">
                  Solutions for different spaces.
                </h2>

                <p className="mt-5 leading-8 text-slate-400">
                  Every property has different requirements. We work with
                  homeowners, businesses and organizations to provide
                  technology solutions that fit their spaces and priorities.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {industries.map((industry) => (
                    <div
                      key={industry}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3 text-sm text-slate-300"
                    >
                      <CheckCircle2
                        size={17}
                        className="text-orange-500"
                      />
                      {industry}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-orange-500">
                Built For You
              </span>

              <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
                One partner for multiple technology needs.
              </h2>

              <p className="mt-6 leading-8 text-slate-400">
                Instead of dealing with different providers for every system,
                Degreatlink brings multiple technology solutions together
                under one roof.
              </p>

              <div className="mt-8 space-y-5">

                <div className="flex gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                    <Camera size={19} />
                  </div>

                  <div>
                    <h3 className="font-bold">Security & Protection</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      CCTV, electric fencing and other security solutions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                    <Sun size={19} />
                  </div>

                  <div>
                    <h3 className="font-bold">Power & Lighting</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Solar systems and solar-powered lighting solutions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                    <Radio size={19} />
                  </div>

                  <div>
                    <h3 className="font-bold">Communication & Entertainment</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Intercom and DStv solutions for modern properties.
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="relative overflow-hidden border-t border-white/10 py-24 md:py-32">

        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.08] via-transparent to-blue-600/[0.08]" />

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[120px]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-4xl px-6 text-center"
        >
          <span className="text-sm font-bold uppercase tracking-[0.3em] text-orange-500">
            Let's Work Together
          </span>

          <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Ready to make your space
            <span className="text-orange-500"> safer and smarter?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-400">
            Whether you need security, solar power, lighting or communication
            solutions, Degreatlink is ready to help you find the right
            solution for your project.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              to="/quote"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-orange-500 px-8 py-4 font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-orange-600"
            >
              Get a Free Quote
              <ArrowRight
                size={19}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-4 font-bold text-white transition-all duration-300 hover:border-orange-500 hover:bg-orange-500"
            >
              Contact Degreatlink
            </Link>

          </div>
        </motion.div>

      </section>

    </main>
  );
}