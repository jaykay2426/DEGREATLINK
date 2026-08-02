import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Camera,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sun,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  "CCTV Security",
  "Solar Systems",
  "Electrical Fencing",
  "DStv Setup",
  "Street Solar Lights",
  "Intercom Solutions",
];

const companyLinks = [
  { name: "About Us", path: "/about" },
  { name: "Our Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Gallery", path: "/gallery" },
  { name: "FAQs", path: "/faqs" },
  { name: "Contact Us", path: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#050912] text-white">

      {/* =========================================
          BACKGROUND EFFECTS
      ========================================= */}

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-orange-500/10 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* =========================================
            CTA SECTION
        ========================================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="border-b border-white/10 py-16 md:py-20"
        >
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-center">

            <div className="max-w-3xl">

              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                Let's Work Together
              </div>

              <h2 className="text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
                Ready to make your space
                <span className="text-orange-500">
                  {" "}
                  smarter and safer?
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                Whether you need CCTV, solar power, electric fencing,
                intercoms, DStv or professional lighting, Degreatlink is
                ready to deliver a reliable solution built around your needs.
              </p>

            </div>

            <Link
              to="/quote"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-orange-500 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-orange-500/10 transition-all duration-300 hover:scale-105 hover:bg-orange-600"
            >
              Get Free Quote

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:rotate-45"
                />
              </span>
            </Link>

          </div>
        </motion.div>

        {/* =========================================
            MAIN FOOTER CONTENT
        ========================================= */}

        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr_1fr] lg:py-20">

          {/* =====================================
              BRAND
          ===================================== */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <Link
              to="/"
              className="group inline-flex items-center gap-3"
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-lg shadow-orange-500/20 transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105">
                <ShieldCheck size={27} strokeWidth={2} />
              </div>

              <div>
                <span className="block text-xl font-black tracking-tight">
                  DEGREAT<span className="text-orange-500">LINK</span>
                </span>

                <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Smart Technology Solutions
                </span>
              </div>

            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
              Professional security, solar, electrical and communication
              solutions for homes, businesses and organizations.
            </p>

            {/* Service badges */}

            <div className="mt-7 flex flex-wrap gap-3">

              {[
                {
                  icon: Camera,
                  label: "CCTV",
                },
                {
                  icon: Sun,
                  label: "Solar",
                },
                {
                  icon: ShieldCheck,
                  label: "Security",
                },
                {
                  icon: Zap,
                  label: "Power",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    title={item.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-500 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/30 hover:bg-orange-500/10 hover:text-orange-500"
                  >
                    <Icon size={18} />
                  </div>
                );
              })}

            </div>

          </motion.div>

          {/* =====================================
              COMPANY LINKS
          ===================================== */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >

            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
              Company
            </h3>

            <ul className="mt-6 space-y-4">

              {companyLinks.map((link) => (
                <li key={link.name}>

                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-2 text-sm text-slate-400 transition-colors duration-300 hover:text-orange-500"
                  >

                    <span className="h-px w-0 bg-orange-500 transition-all duration-300 group-hover:w-4" />

                    {link.name}

                  </Link>

                </li>
              ))}

            </ul>

          </motion.div>

          {/* =====================================
              SERVICES
          ===================================== */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >

            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
              Services
            </h3>

            <ul className="mt-6 space-y-4">

              {services.map((service) => (
                <li key={service}>

                  <Link
                    to="/services"
                    className="group inline-flex items-center gap-2 text-sm text-slate-400 transition-colors duration-300 hover:text-orange-500"
                  >

                    <span className="h-1 w-1 rounded-full bg-slate-700 transition-all duration-300 group-hover:bg-orange-500" />

                    {service}

                  </Link>

                </li>
              ))}

            </ul>

          </motion.div>

          {/* =====================================
              CONTACT
          ===================================== */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >

            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
              Contact
            </h3>

            <div className="mt-6 space-y-5">

              {/* PHONE */}

              <a
                href="tel:+2348000000000"
                className="group flex items-start gap-3"
              >

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                  <Phone size={16} />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-600">
                    Call Us
                  </p>

                  <p className="mt-1 text-sm text-slate-300 transition-colors group-hover:text-orange-500">
                    +234 800 000 0000
                  </p>
                </div>

              </a>

              {/* EMAIL */}

              <a
                href="mailto:info@degreatlink.com"
                className="group flex items-start gap-3"
              >

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                  <Mail size={16} />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-600">
                    Email
                  </p>

                  <p className="mt-1 break-all text-sm text-slate-300 transition-colors group-hover:text-orange-500">
                    info@degreatlink.com
                  </p>
                </div>

              </a>

              {/* LOCATION */}

              <div className="flex items-start gap-3">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                  <MapPin size={16} />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-600">
                    Location
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-300">
                    Lagos, Nigeria
                  </p>
                </div>

              </div>

            </div>

          </motion.div>

        </div>

        {/* =========================================
            BOTTOM BAR
        ========================================= */}

        <div className="border-t border-white/10 py-7">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">

            {/* COPYRIGHT */}

            <p className="text-xs leading-6 text-slate-600">
              © {new Date().getFullYear()} Degreatlink. All rights reserved.
            </p>

            {/* SOCIALS */}

            <div className="flex items-center gap-2">

              <span className="mr-2 hidden text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 sm:block">
                Follow Us
              </span>

              {/* Facebook */}

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-sm font-black text-slate-500 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:bg-orange-500 hover:text-white"
              >
                f
              </a>

              {/* Instagram */}

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[10px] font-black text-slate-500 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:bg-orange-500 hover:text-white"
              >
                IG
              </a>

              {/* LinkedIn */}

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[10px] font-black text-slate-500 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:bg-orange-500 hover:text-white"
              >
                in
              </a>

              {/* WhatsApp */}

              <a
                href="#"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-500 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:bg-orange-500 hover:text-white"
              >
                <MessageCircle size={16} />
              </a>

            </div>

            {/* TAGLINE */}

            <div className="flex items-center gap-2 text-xs text-slate-600">

              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />

              <span>
                Secure. Protect. Power Your World.
              </span>

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}