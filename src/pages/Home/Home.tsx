import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Camera,
  Cable,
  CheckCircle2,
  ChevronRight,
  Clock3,
  HardHat,
  Lightbulb,
  MapPin,
  Radio,
  ShieldCheck,
  Sparkles,
  Sun,
  Wrench,
  Zap,
} from "lucide-react";

import Hero from "../../components/Hero/Hero";

const stats = [
  {
    value: "100+",
    label: "Projects Completed",
  },
  {
    value: "6+",
    label: "Core Solutions",
  },
  {
    value: "24/7",
    label: "Security Mindset",
  },
  {
    value: "100%",
    label: "Commitment",
  },
];

const services = [
  {
    icon: Camera,
    number: "01",
    title: "CCTV Security",
    text: "Professional surveillance systems designed to keep your property monitored, protected and secure.",
  },
  {
    icon: Sun,
    number: "02",
    title: "Solar Systems",
    text: "Reliable solar power solutions designed around your home's or business's energy requirements.",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Electrical Fencing",
    text: "Perimeter security solutions that add another layer of protection around your property.",
  },
  {
    icon: Radio,
    number: "04",
    title: "DStv Setup",
    text: "Professional DStv installation, positioning and signal setup for a dependable viewing experience.",
  },
  {
    icon: Lightbulb,
    number: "05",
    title: "Street Solar Lights",
    text: "Efficient solar-powered lighting solutions for streets, compounds, commercial spaces and public areas.",
  },
  {
    icon: Cable,
    number: "06",
    title: "Intercom Solutions",
    text: "Smart communication and access solutions for homes, offices, estates and organizations.",
  },
];

const process = [
  {
    number: "01",
    icon: Sparkles,
    title: "Consultation",
    text: "We listen to your needs, understand your property and identify the right solution.",
  },
  {
    number: "02",
    icon: HardHat,
    title: "Planning",
    text: "We develop a practical installation plan around your space, requirements and budget.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Installation",
    text: "Our technicians install and configure your system with attention to quality and performance.",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Support",
    text: "We help ensure your solution continues working properly after installation.",
  },
];

const projects = [
  {
    category: "CCTV Security",
    title: "Residential Surveillance System",
    location: "Lagos, Nigeria",
    image:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=85",
  },
  {
    category: "Solar Installation",
    title: "Residential Solar Power System",
    location: "Lagos, Nigeria",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=85",
  },
  {
    category: "Security & Access",
    title: "Commercial Security Installation",
    location: "Nigeria",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=85",
  },
];

const testimonials = [
  {
    quote:
      "Degreatlink handled the installation professionally and explained everything clearly. The whole process was smooth from start to finish.",
    name: "Residential Client",
    role: "Lagos",
  },
  {
    quote:
      "We needed a reliable solution for our property and the team understood exactly what we needed. The installation was neat and professional.",
    name: "Business Client",
    role: "Lagos",
  },
  {
    quote:
      "What stood out was the attention to detail. They didn't just install the equipment; they made sure everything was properly configured.",
    name: "Property Owner",
    role: "Nigeria",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#080D18] text-white">

      {/* =========================================================
          HERO
          YOUR EXISTING HERO IS COMPLETELY UNCHANGED
      ========================================================= */}

      <Hero />


      {/* =========================================================
          STATS
      ========================================================= */}

      <section className="relative border-y border-white/10 bg-[#0B1220]">
        <div className="pointer-events-none absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-orange-500/70 to-transparent" />

        <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
                duration: 0.6,
              }}
              className="relative px-6 py-10 text-center sm:py-12"
            >
              {index !== 0 && (
                <div className="absolute left-0 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-white/10 lg:block" />
              )}

              <div className="text-3xl font-black tracking-tight sm:text-4xl">
                {stat.value}
              </div>

              <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-500 sm:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>


      {/* =========================================================
          ABOUT DEGREARTLINK
      ========================================================= */}

      <section className="relative py-24 md:py-32">
        <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-orange-500/10 blur-[140px]" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=85"
                  alt="Professional electrical installation"
                  className="h-[500px] w-full object-cover transition duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#080D18]/80 via-transparent to-transparent" />
              </div>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.4,
                  duration: 0.6,
                }}
                className="absolute -bottom-7 -right-4 rounded-2xl border border-white/10 bg-[#111A2A]/95 p-5 shadow-2xl backdrop-blur-xl sm:-right-8"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                    <ShieldCheck size={23} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-white">
                      Built to Protect
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Smart. Reliable. Professional.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Orange Decoration */}
              <div className="absolute -left-3 -top-3 h-20 w-20 rounded-tl-3xl border-l-2 border-t-2 border-orange-500" />
            </motion.div>


            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.25em] text-orange-500">
                <span className="h-px w-8 bg-orange-500" />
                About Degreatlink
              </span>

              <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
                Technology that makes your space
                <span className="text-orange-500">
                  {" "}
                  safer and smarter.
                </span>
              </h2>

              <p className="mt-6 leading-8 text-slate-400">
                Degreatlink provides professional security, power, lighting
                and communication solutions for homes, businesses and
                organizations.
              </p>

              <p className="mt-4 leading-8 text-slate-400">
                From CCTV and electrical fencing to solar systems, street
                lighting, DStv and intercom solutions, we bring different
                technologies together under one trusted service.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Professional installation",
                  "Modern technology solutions",
                  "Solutions tailored to your property",
                  "Reliable customer support",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      size={19}
                      className="shrink-0 text-orange-500"
                    />

                    <span className="text-sm text-slate-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="group mt-9 inline-flex items-center gap-3 font-bold text-white"
              >
                Learn More About Us

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:border-orange-500 group-hover:bg-orange-500">
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:rotate-45"
                  />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>


      {/* =========================================================
          SERVICES
      ========================================================= */}

      <section className="relative bg-[#0B1220] py-24 md:py-32">
        <div className="pointer-events-none absolute right-0 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
          >
            <div className="max-w-3xl">
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-orange-500">
                Our Solutions
              </span>

              <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                Everything you need.
                <span className="block text-orange-500">
                  Under one roof.
                </span>
              </h2>

              <p className="mt-5 leading-8 text-slate-400">
                Practical technology solutions designed to protect your
                property, improve your power supply and make everyday
                operations easier.
              </p>
            </div>

            <Link
              to="/services"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-bold text-white"
            >
              View All Services

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>


          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    delay: index * 0.07,
                    duration: 0.6,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition-all duration-300 hover:border-orange-500/30 hover:bg-white/[0.055]"
                >
                  <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-orange-500/5 blur-3xl transition group-hover:bg-orange-500/10" />

                  <div className="relative flex items-start justify-between">
                    <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                      <Icon size={25} />
                    </div>

                    <span className="text-xs font-bold tracking-[0.2em] text-slate-600">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="relative mt-8 text-xl font-bold">
                    {service.title}
                  </h3>

                  <p className="relative mt-3 text-sm leading-7 text-slate-400">
                    {service.text}
                  </p>

                  <Link
                    to="/services"
                    className="relative mt-7 inline-flex items-center gap-2 text-sm font-bold text-orange-500"
                  >
                    Learn More
                    <ArrowUpRight size={15} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>


      {/* =========================================================
          HOW WE WORK
      ========================================================= */}

      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-orange-500">
              How We Work
            </span>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              From idea to
              <span className="text-orange-500">
                {" "}
                installation.
              </span>
            </h2>

            <p className="mt-5 leading-8 text-slate-400">
              We make the process straightforward, transparent and focused on
              getting the right solution installed properly.
            </p>
          </div>


          <div className="relative mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {/* Connecting Line */}
            <div className="absolute left-[12%] right-[12%] top-12 hidden h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent lg:block" />

            {process.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  className="relative text-center"
                >
                  <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-orange-500/20 bg-[#080D18]">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-500/10 text-orange-500">
                      <Icon size={25} />
                    </div>
                  </div>

                  <span className="mt-5 block text-xs font-bold tracking-[0.25em] text-orange-500">
                    STEP {item.number}
                  </span>

                  <h3 className="mt-3 text-xl font-bold">
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


      {/* =========================================================
          FEATURED PROJECTS
      ========================================================= */}

      <section className="bg-[#0B1220] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-orange-500">
                Recent Work
              </span>

              <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                Built for real-world
                <span className="text-orange-500">
                  {" "}
                  needs.
                </span>
              </h2>
            </div>

            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 text-sm font-bold"
            >
              Explore Projects

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>


          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -7,
                }}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-[#101827]"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#080D18] via-transparent to-transparent opacity-80" />

                  <span className="absolute left-5 top-5 rounded-full border border-orange-500/30 bg-[#080D18]/80 px-4 py-2 text-xs font-bold text-orange-400 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold">
                    {project.title}
                  </h3>

                  <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                    <MapPin
                      size={15}
                      className="text-orange-500"
                    />

                    {project.location}
                  </div>

                  <Link
                    to="/projects"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-orange-500"
                  >
                    View Project
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* =========================================================
          WHY CHOOSE US
      ========================================================= */}

      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">

            {/* Left */}
            <motion.div
              initial={{
                opacity: 0,
                x: -40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              className="max-w-xl"
            >
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-orange-500">
                Why Degreatlink
              </span>

              <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
                Not just installation.

                <span className="block text-orange-500">
                  We build confidence.
                </span>
              </h2>

              <p className="mt-6 leading-8 text-slate-400">
                Your security and power systems deserve more than a quick
                installation. We focus on understanding your needs and
                delivering practical solutions designed to perform.
              </p>

              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-orange-500 px-7 py-4 text-sm font-bold transition hover:bg-orange-600"
              >
                Why Choose Us
                <ArrowRight size={18} />
              </Link>
            </motion.div>


            {/* Right */}
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: ShieldCheck,
                  title: "Security Focused",
                  text: "Solutions designed around protecting people, property and assets.",
                },
                {
                  icon: Zap,
                  title: "Smart Solutions",
                  text: "Modern technology selected to make your space safer and more efficient.",
                },
                {
                  icon: Wrench,
                  title: "Professional Work",
                  text: "Careful installation and setup with attention to quality and performance.",
                },
                {
                  icon: Clock3,
                  title: "Reliable Support",
                  text: "We remain available to help you get the most from your system.",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      y: 25,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      y: -5,
                    }}
                    className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition hover:border-orange-500/20"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500">
                      <Icon size={23} />
                    </div>

                    <h3 className="mt-6 text-lg font-bold">
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
        </div>
      </section>


      {/* =========================================================
          TESTIMONIALS
      ========================================================= */}

      <section className="bg-[#0B1220] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-orange-500">
              Client Experience
            </span>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              What our clients
              <span className="text-orange-500">
                {" "}
                say.
              </span>
            </h2>
          </div>


          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                className="rounded-3xl border border-white/10 bg-white/[0.035] p-7"
              >
                <div className="flex gap-1 text-orange-500">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Sparkles
                      key={star}
                      size={14}
                      fill="currentColor"
                    />
                  ))}
                </div>

                <p className="mt-6 leading-8 text-slate-300">
                  “{testimonial.quote}”
                </p>

                <div className="mt-7 border-t border-white/10 pt-5">
                  <p className="font-bold">
                    {testimonial.name}
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    {testimonial.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="relative overflow-hidden py-24 md:py-32">

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[150px]" />

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="relative overflow-hidden rounded-[2rem] border border-orange-500/20 bg-gradient-to-br from-[#151D2C] to-[#0D1421] px-6 py-16 sm:px-12 md:py-20"
          >

            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-orange-500/10 blur-[80px]" />

            <span className="relative inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
              Let's Build Something Better
            </span>

            <h2 className="relative mx-auto mt-6 max-w-3xl text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
              Ready to secure your space and

              <span className="text-orange-500">
                {" "}
                power your future?
              </span>
            </h2>

            <p className="relative mx-auto mt-6 max-w-2xl leading-8 text-slate-400">
              Tell us what you need and let Degreatlink help you find the
              right security, solar, electrical or communication solution.
            </p>

            <div className="relative mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/quote"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-orange-500 px-8 py-4 font-bold transition hover:scale-105 hover:bg-orange-600"
              >
                Get Free Quote
                <ArrowRight size={19} />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-4 font-bold transition hover:border-orange-500 hover:bg-white/5"
              >
                Contact Us

                <ChevronRight
                  size={18}
                  className="ml-1"
                />
              </Link>
            </div>

          </motion.div>
        </div>
      </section>

    </main>
  );
}