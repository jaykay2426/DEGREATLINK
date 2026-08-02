import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, SunMedium, Camera } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100vh] items-center overflow-hidden bg-slate-950">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-950/75" />

      {/* Content */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-32 text-center lg:px-8">

        <motion.span
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="mb-6 rounded-full border border-[#ff6b00] px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#ff6b00]"
        >
          Smart Technology Solutions
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .2, duration: .8 }}
          className="max-w-5xl text-5xl font-black leading-tight text-white md:text-7xl"
        >
          Secure.
          <span className="text-[#ff6b00]"> Protect.</span>
          <br />
          Power Your World.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .4 }}
          className="mt-8 max-w-3xl text-lg leading-8 text-slate-300"
        >
          Professional CCTV installation, Solar Systems, Electrical Fencing,
          DStv setup, Street Solar Lights and Intercom solutions for homes,
          businesses and organizations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .6 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Link
            to="/quote"
            className="flex items-center justify-center gap-2 rounded-full bg-[#ff6b00] px-8 py-4 font-semibold text-white transition hover:scale-105"
          >
            Get Free Quote
            <ArrowRight size={20} />
          </Link>

          <Link
            to="/services"
            className="rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-slate-900"
          >
            Explore Services
          </Link>
        </motion.div>

        {/* Feature Cards */}
        <div className="mt-20 grid w-full max-w-5xl gap-6 md:grid-cols-3">

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
            <Camera className="mb-4 text-[#ff6b00]" size={36} />
            <h3 className="mb-2 text-xl font-bold text-white">
              CCTV Security
            </h3>
            <p className="text-slate-300">
              Protect your home and business with modern surveillance systems.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
            <SunMedium className="mb-4 text-[#ff6b00]" size={36} />
            <h3 className="mb-2 text-xl font-bold text-white">
              Solar Solutions
            </h3>
            <p className="text-slate-300">
              Reliable solar installations for uninterrupted power supply.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
            <ShieldCheck className="mb-4 text-[#ff6b00]" size={36} />
            <h3 className="mb-2 text-xl font-bold text-white">
              Complete Protection
            </h3>
            <p className="text-slate-300">
              From electric fencing to intercom systems, we've got you covered.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}