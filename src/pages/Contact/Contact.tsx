import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileText,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Upload,
  Zap,
} from "lucide-react";

const services = [
  "CCTV Installation",
  "Solar Systems",
  "Electrical Fencing",
  "DStv Setup",
  "Street Solar Lights",
  "Intercom Solutions",
];

const enquiryTypes = [
  "Request a Quote",
  "General Enquiry",
  "Site Inspection",
  "Service Consultation",
  "Installation Request",
  "Maintenance / Support",
  "Existing Project",
  "Business / Partnership",
  "Career Enquiry",
  "Other",
];

const propertyTypes = [
  "Residential Home",
  "Apartment / Estate",
  "Office",
  "Shop / Commercial Space",
  "School",
  "Church",
  "Warehouse",
  "Organization",
  "Construction Project",
  "Other",
];

const budgetRanges = [
  "Not sure yet",
  "Below ₦500,000",
  "₦500,000 - ₦1,000,000",
  "₦1,000,000 - ₦3,000,000",
  "₦3,000,000 - ₦5,000,000",
  "₦5,000,000+",
];

const contactMethods = [
  "Phone Call",
  "WhatsApp",
  "Email",
];

const contactInfo = [
  {
    icon: Phone,
    title: "Call Degreatlink",
    value: "+234 802 751 6223",
    description: "Speak directly with our team.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+234 703 846 0648",
    description: "Quick questions and consultations.",
  },
  {
    icon: Mail,
    title: "Email",
    value: "johnogunnusi2019@gmail.com",
    description: "For detailed enquiries and documents.",
  },
  {
    icon: MapPin,
    title: "Service Area",
    value: "Lagos, Nigeria",
    description: "Available for residential and commercial projects.",
  },
];

export default function Contact() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080D18] text-white">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative overflow-hidden py-28 md:py-36">
        {/* Background glow */}
        <div className="pointer-events-none absolute left-[-180px] top-20 h-[400px] w-[400px] rounded-full bg-orange-500/10 blur-[130px]" />

        <div className="pointer-events-none absolute right-[-180px] top-[-100px] h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[140px]" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-orange-400">
              <MessageCircle size={14} />
              Contact Degreatlink
            </div>

            <h1 className="mt-7 text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Let's build something
              <span className="block text-orange-500">
                safer & smarter.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
              Whether you need CCTV security, solar power, electrical
              fencing, DStv installation, street solar lighting or intercom
              solutions, tell us what you need and our team will help you
              determine the right solution.
            </p>
          </motion.div>

          {/* Contact cards */}

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -5 }}
                  className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition-all duration-300 hover:border-orange-500/30 hover:bg-white/[0.06]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                    <Icon size={21} />
                  </div>

                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    {item.title}
                  </p>

                  <h3 className="mt-2 font-bold">
                    {item.value}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          MAIN CONTACT AREA
      ========================================================= */}

      <section className="relative pb-28 md:pb-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">

            {/* =====================================================
                LEFT SIDE
            ===================================================== */}

            <motion.aside
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7 }}
              className="space-y-5"
            >

              {/* Consultation card */}

              <div className="relative overflow-hidden rounded-3xl border border-orange-500/20 bg-gradient-to-br from-orange-500/15 via-white/[0.04] to-white/[0.02] p-7">
                <div className="pointer-events-none absolute right-[-70px] top-[-70px] h-48 w-48 rounded-full bg-orange-500/10 blur-3xl" />

                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-white">
                    <ShieldCheck size={24} />
                  </div>

                  <h2 className="mt-7 text-2xl font-bold">
                    Not sure what you need?
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    No problem. Tell us about your property, challenge or
                    project and our team can help you determine the most
                    suitable solution.
                  </p>

                  <div className="mt-7 space-y-3">
                    {[
                      "Discuss your requirements",
                      "Understand available options",
                      "Plan your installation",
                      "Get a professional quote",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 text-sm text-slate-300"
                      >
                        <CheckCircle2
                          size={17}
                          className="shrink-0 text-orange-500"
                        />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Working hours */}

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 text-orange-500">
                    <Clock3 size={21} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Working Hours
                    </p>

                    <p className="mt-1 font-semibold">
                      Monday - Saturday
                    </p>
                  </div>
                </div>

                <div className="mt-6 border-t border-white/10 pt-5">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">
                      Business Hours
                    </span>

                    <span className="font-medium text-slate-300">
                      8:00 AM - 6:00 PM
                    </span>
                  </div>
                </div>
              </div>

              {/* Response */}

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 text-orange-500">
                    <Zap size={21} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Fast Response
                    </p>

                    <p className="mt-1 font-semibold">
                      Let's discuss your project
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-7 text-slate-500">
                  Provide as much information as possible so our team can
                  better understand what you're looking for.
                </p>
              </div>

            </motion.aside>

            {/* =====================================================
                FORM
            ===================================================== */}

            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-xl"
            >

              {/* Form header */}

              <div className="border-b border-white/10 p-7 md:p-9">
                <div className="flex items-start justify-between gap-5">

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-500">
                      Project Enquiry
                    </p>

                    <h2 className="mt-3 text-2xl font-black sm:text-3xl">
                      Tell us what you need
                    </h2>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
                      Fill out the form below and provide any details that
                      will help us understand your project.
                    </p>
                  </div>

                  <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500 sm:flex">
                    <FileText size={22} />
                  </div>

                </div>
              </div>

              <form className="p-7 md:p-9">

                {/* Basic information */}

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
                    01 — Your Information
                  </p>

                  <div className="mt-5 grid gap-5 md:grid-cols-2">

                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-300">
                        Full Name
                      </label>

                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-white/10 bg-black/20 px-5 py-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-orange-500"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-300">
                        Phone Number
                      </label>

                      <input
                        type="tel"
                        placeholder="+234 703 846 0648"
                        className="w-full rounded-xl border border-white/10 bg-black/20 px-5 py-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-orange-500"
                      />
                    </div>

                  </div>

                  <div className="mt-5">
                    <label className="mb-2 block text-sm font-medium text-slate-300">
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="johnogunnusi2019@gmail.com"
                      className="w-full rounded-xl border border-white/10 bg-black/20 px-5 py-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-orange-500"
                    />
                  </div>
                </div>

                {/* Enquiry */}

                <div className="mt-10 border-t border-white/10 pt-9">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
                    02 — What Can We Help With?
                  </p>

                  <div className="mt-5 grid gap-5 md:grid-cols-2">

                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-300">
                        Enquiry Type
                      </label>

                      <select
                        defaultValue=""
                        className="w-full rounded-xl border border-white/10 bg-[#101827] px-5 py-4 text-sm text-slate-300 outline-none transition focus:border-orange-500"
                      >
                        <option value="" disabled>
                          Select enquiry type
                        </option>

                        {enquiryTypes.map((item) => (
                          <option key={item}>{item}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-300">
                        Service Required
                      </label>

                      <select
                        defaultValue=""
                        className="w-full rounded-xl border border-white/10 bg-[#101827] px-5 py-4 text-sm text-slate-300 outline-none transition focus:border-orange-500"
                      >
                        <option value="" disabled>
                          Select a service
                        </option>

                        {services.map((service) => (
                          <option key={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                  </div>

                  <div className="mt-5">
                    <label className="mb-2 block text-sm font-medium text-slate-300">
                      Property / Project Type
                    </label>

                    <select
                      defaultValue=""
                      className="w-full rounded-xl border border-white/10 bg-[#101827] px-5 py-4 text-sm text-slate-300 outline-none transition focus:border-orange-500"
                    >
                      <option value="" disabled>
                        What type of property is this?
                      </option>

                      {propertyTypes.map((item) => (
                        <option key={item}>{item}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Project details */}

                <div className="mt-10 border-t border-white/10 pt-9">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
                    03 — Project Details
                  </p>

                  <div className="mt-5 grid gap-5 md:grid-cols-2">

                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-300">
                        Project Location
                      </label>

                      <input
                        type="text"
                        placeholder="e.g. Lekki, Lagos"
                        className="w-full rounded-xl border border-white/10 bg-black/20 px-5 py-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-orange-500"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-300">
                        Estimated Budget
                      </label>

                      <select
                        defaultValue=""
                        className="w-full rounded-xl border border-white/10 bg-[#101827] px-5 py-4 text-sm text-slate-300 outline-none transition focus:border-orange-500"
                      >
                        <option value="" disabled>
                          Select budget range
                        </option>

                        {budgetRanges.map((item) => (
                          <option key={item}>{item}</option>
                        ))}
                      </select>
                    </div>

                  </div>

                  <div className="mt-5">
                    <label className="mb-2 block text-sm font-medium text-slate-300">
                      Tell Us More
                    </label>

                    <textarea
                      rows={7}
                      placeholder="Tell us about the property, what you need installed, the problem you're trying to solve, the number of rooms/cameras, power requirements, approximate project size, or anything else that may help..."
                      className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-5 py-4 text-sm leading-7 text-white outline-none transition placeholder:text-slate-600 focus:border-orange-500"
                    />
                  </div>
                </div>

                {/* Appointment */}

                <div className="mt-10 border-t border-white/10 pt-9">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
                    04 — Preferred Contact
                  </p>

                  <div className="mt-5 grid gap-5 md:grid-cols-2">

                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-300">
                        Preferred Contact Method
                      </label>

                      <select
                        defaultValue=""
                        className="w-full rounded-xl border border-white/10 bg-[#101827] px-5 py-4 text-sm text-slate-300 outline-none transition focus:border-orange-500"
                      >
                        <option value="" disabled>
                          How should we contact you?
                        </option>

                        {contactMethods.map((item) => (
                          <option key={item}>{item}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-300">
                        <CalendarDays size={15} />
                        Preferred Date
                      </label>

                      <input
                        type="date"
                        className="w-full rounded-xl border border-white/10 bg-black/20 px-5 py-4 text-sm text-slate-400 outline-none transition focus:border-orange-500"
                      />
                    </div>

                  </div>
                </div>

                {/* Attachment */}

                <div className="mt-10 border-t border-white/10 pt-9">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
                    05 — Supporting Information
                  </p>

                  <label className="mt-5 flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-white/15 bg-black/10 px-6 py-10 text-center transition hover:border-orange-500/50 hover:bg-orange-500/[0.03]">

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500">
                      <Upload size={21} />
                    </div>

                    <p className="mt-4 font-semibold">
                      Attach a photo or document
                    </p>

                    <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
                      You can attach a picture of your property, existing
                      installation, floor plan or other useful information.
                    </p>

                    <span className="mt-5 rounded-full border border-white/10 px-5 py-2 text-xs font-semibold text-slate-300">
                      Choose File
                    </span>

                    <input
                      type="file"
                      className="hidden"
                      accept="image/*,.pdf"
                    />
                  </label>
                </div>

                {/* Submit */}

                <div className="mt-10 border-t border-white/10 pt-8">

                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                    <p className="max-w-md text-xs leading-6 text-slate-600">
                      By submitting this form, you are requesting that
                      Degreatlink contact you regarding your enquiry.
                    </p>

                    <button
                      type="submit"
                      className="group inline-flex items-center justify-center gap-3 rounded-full bg-orange-500 px-8 py-4 font-bold text-white transition-all duration-300 hover:bg-orange-600 hover:shadow-[0_0_35px_rgba(249,115,22,0.2)]"
                    >
                      Send Enquiry

                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:rotate-45">
                        <Send size={15} />
                      </span>
                    </button>

                  </div>

                </div>

              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================
          BOTTOM CTA
      ========================================================= */}

      <section className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500">
              <ShieldCheck size={27} />
            </div>

            <h2 className="mt-7 text-4xl font-black sm:text-5xl">
              Ready to secure and
              <span className="text-orange-500"> power your space?</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-500">
              Tell us what you're working on. Whether it's a small residential
              installation or a larger commercial project, Degreatlink is
              ready to discuss the next step.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">

              <a
                href="tel:+234 703 846 0648"
                className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-4 font-bold transition hover:bg-orange-600"
              >
                <Phone size={18} />
                Call Us
              </a>

              <a
                href="mailto:johnogunnusi2019@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-7 py-4 font-bold transition hover:border-orange-500/40 hover:bg-white/[0.07]"
              >
                Email Us
                <ArrowUpRight size={18} />
              </a>

            </div>
          </motion.div>

        </div>
      </section>

    </main>
  );
}