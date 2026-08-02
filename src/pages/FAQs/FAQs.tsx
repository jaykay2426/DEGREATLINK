import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  Clock3,
  MessageCircle,
  Search,
  ShieldCheck,
  Sun,
  Camera,
  LockKeyhole,
  Radio,
  Lightbulb,
  Cable,
  Wrench,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

type FAQCategory =
  | "All"
  | "General"
  | "CCTV"
  | "Solar"
  | "Electrical Fencing"
  | "DStv"
  | "Solar Lighting"
  | "Intercom";

type FAQ = {
  question: string;
  answer: string;
  category: Exclude<FAQCategory, "All">;
};

const categories: {
  name: FAQCategory;
  icon: typeof CircleHelp;
}[] = [
  { name: "All", icon: CircleHelp },
  { name: "General", icon: Wrench },
  { name: "CCTV", icon: Camera },
  { name: "Solar", icon: Sun },
  { name: "Electrical Fencing", icon: LockKeyhole },
  { name: "DStv", icon: Radio },
  { name: "Solar Lighting", icon: Lightbulb },
  { name: "Intercom", icon: Cable },
];

const faqs: FAQ[] = [
  // GENERAL
  {
    category: "General",
    question: "What services does Degreatlink provide?",
    answer:
      "Degreatlink provides technology, security, power and communication solutions including CCTV installation, solar systems, electrical fencing, DStv setup, street solar lighting and intercom solutions.",
  },
  {
    category: "General",
    question: "Do you work with both homes and businesses?",
    answer:
      "Yes. Our solutions can be designed for residential properties, offices, shops, schools, churches, organizations, commercial spaces and other facilities.",
  },
  {
    category: "General",
    question: "Do you provide installation services?",
    answer:
      "Yes. We provide professional installation and system setup for the solutions we offer. The exact installation process depends on the service and requirements of the property.",
  },
  {
    category: "General",
    question: "Can I request more than one service?",
    answer:
      "Absolutely. We can help with multiple solutions for the same property. For example, a property can combine CCTV, electrical fencing, solar power and an intercom system.",
  },
  {
    category: "General",
    question: "How do I get started?",
    answer:
      "You can contact Degreatlink or request a quote through the website. We'll use the information about your property and requirements to determine the appropriate next steps.",
  },

  // CCTV
  {
    category: "CCTV",
    question: "Why should I install CCTV cameras?",
    answer:
      "CCTV provides a way to monitor important areas of your property. A properly planned surveillance system can improve awareness, help monitor activity and provide recorded footage for later review depending on the system configuration.",
  },
  {
    category: "CCTV",
    question: "Can I view my CCTV cameras remotely?",
    answer:
      "Many modern CCTV systems support remote viewing through a phone or other connected device. The exact functionality depends on the equipment, network connection and system configuration.",
  },
  {
    category: "CCTV",
    question: "How many cameras do I need?",
    answer:
      "There is no universal number. The required number depends on the size and layout of your property, entry points, areas that need monitoring and your overall security requirements.",
  },
  {
    category: "CCTV",
    question: "Can CCTV work at night?",
    answer:
      "Yes. CCTV systems can be configured with cameras designed for nighttime surveillance. The appropriate equipment depends on the environment and the level of visibility required.",
  },
  {
    category: "CCTV",
    question: "Can CCTV be installed in an existing building?",
    answer:
      "Yes. CCTV can be planned and installed in existing homes, offices, shops and other buildings. The installation approach will depend on the building layout and available cable routes.",
  },

  // SOLAR
  {
    category: "Solar",
    question: "How does a solar power system work?",
    answer:
      "Solar panels generate electricity from sunlight. Depending on the system design, an inverter and batteries can be used to convert, manage and store energy for use by your appliances and equipment.",
  },
  {
    category: "Solar",
    question: "Can solar power my entire house?",
    answer:
      "It can, depending on your energy requirements and the size and design of the system. A proper assessment of your appliances, usage patterns and power needs is important before determining the appropriate system.",
  },
  {
    category: "Solar",
    question: "Do I need batteries for a solar system?",
    answer:
      "Battery requirements depend on how you intend to use the system. Batteries can store energy for later use, particularly when solar generation is unavailable.",
  },
  {
    category: "Solar",
    question: "Can solar reduce my dependence on the grid?",
    answer:
      "Yes. A properly designed solar system can provide an alternative source of electricity and reduce reliance on conventional grid power for supported loads.",
  },
  {
    category: "Solar",
    question: "How do I know what size solar system I need?",
    answer:
      "The appropriate size depends on the appliances and equipment you want to power, their energy consumption, how long you use them and whether you require battery storage.",
  },

  // ELECTRICAL FENCING
  {
    category: "Electrical Fencing",
    question: "What is electrical fencing used for?",
    answer:
      "Electrical fencing provides an additional layer of perimeter security around a property. It can be used alongside other security measures such as CCTV and controlled access systems.",
  },
  {
    category: "Electrical Fencing",
    question: "Can electrical fencing be installed on an existing wall?",
    answer:
      "In many situations, electrical fencing can be installed as part of an existing perimeter structure. The property boundary needs to be assessed to determine the appropriate installation approach.",
  },
  {
    category: "Electrical Fencing",
    question: "Is electrical fencing suitable for businesses?",
    answer:
      "Yes. It can be used as an additional perimeter-security measure for residential and commercial properties, warehouses, schools, churches and other organizations.",
  },
  {
    category: "Electrical Fencing",
    question: "Can electrical fencing work with other security systems?",
    answer:
      "Yes. Electrical fencing can form part of a wider security strategy alongside CCTV, alarms, access control and other appropriate security systems.",
  },

  // DSTV
  {
    category: "DStv",
    question: "Do you install DStv satellite dishes?",
    answer:
      "Yes. Degreatlink provides DStv installation and setup services, including dish positioning, cabling, decoder setup and signal configuration.",
  },
  {
    category: "DStv",
    question: "Can you help when my DStv signal is poor?",
    answer:
      "Yes. We can assess the installation and help identify issues related to dish positioning, cabling, connections or system configuration.",
  },
  {
    category: "DStv",
    question: "Can DStv be installed in an apartment?",
    answer:
      "Yes. DStv can be installed in many residential environments. The installation approach depends on the building, available mounting position and other site considerations.",
  },

  // SOLAR LIGHTING
  {
    category: "Solar Lighting",
    question: "Where can solar street lights be installed?",
    answer:
      "Solar lighting can be useful for streets, estates, compounds, schools, churches, commercial properties, public spaces and other outdoor environments.",
  },
  {
    category: "Solar Lighting",
    question: "Do solar street lights need electricity from the grid?",
    answer:
      "Solar-powered lighting systems are designed to generate and use energy from sunlight, which allows them to operate independently from conventional grid-powered lighting depending on the system design.",
  },
  {
    category: "Solar Lighting",
    question: "Can solar lights improve security?",
    answer:
      "Good outdoor lighting can improve visibility around roads, compounds and other outdoor spaces. Solar lighting can therefore form part of a broader property safety and security strategy.",
  },

  // INTERCOM
  {
    category: "Intercom",
    question: "What is an intercom system?",
    answer:
      "An intercom system allows people in different areas of a property to communicate with one another. Some systems can also form part of an access-control setup.",
  },
  {
    category: "Intercom",
    question: "Where can an intercom system be installed?",
    answer:
      "Intercom systems can be useful in homes, offices, schools, churches, organizations and properties where communication between different areas is needed.",
  },
  {
    category: "Intercom",
    question: "Can an intercom help with visitor access?",
    answer:
      "Yes. Depending on the system, occupants can communicate with visitors before deciding whether to grant access. Some systems can also be integrated with suitable access-control equipment.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Tell us what you need",
    text: "Contact us and explain the service, property or project you have in mind.",
  },
  {
    number: "02",
    title: "We assess your requirements",
    text: "We consider the property, intended use and technical requirements of the solution.",
  },
  {
    number: "03",
    title: "We plan the solution",
    text: "We recommend an approach designed around your specific requirements.",
  },
  {
    number: "04",
    title: "Installation & setup",
    text: "Our team handles the installation, configuration and necessary system testing.",
  },
];

export default function FAQs() {
  const [activeCategory, setActiveCategory] =
    useState<FAQCategory>("All");

  const [search, setSearch] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFAQs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesCategory =
        activeCategory === "All" || faq.category === activeCategory;

      const searchText = search.toLowerCase().trim();

      const matchesSearch =
        !searchText ||
        faq.question.toLowerCase().includes(searchText) ||
        faq.answer.toLowerCase().includes(searchText) ||
        faq.category.toLowerCase().includes(searchText);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#080D18] text-white">
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative isolate overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        {/* Background glow */}
        <div className="pointer-events-none absolute left-[-180px] top-20 h-[400px] w-[400px] rounded-full bg-orange-500/10 blur-[130px]" />

        <div className="pointer-events-none absolute right-[-150px] top-[-100px] h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[130px]" />

        {/* Grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-orange-400">
              <CircleHelp size={15} />
              Frequently Asked Questions
            </span>

            <h1 className="mt-7 text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Questions?
              <span className="block text-orange-500">
                We've got answers.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Find answers about our security, solar, lighting, communication
              and installation solutions.
            </p>
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="mx-auto mt-12 max-w-2xl"
          >
            <div className="group flex items-center rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-4 shadow-2xl backdrop-blur-xl transition focus-within:border-orange-500/50">
              <Search
                size={21}
                className="mr-4 shrink-0 text-slate-500 transition group-focus-within:text-orange-500"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setOpenIndex(null);
                }}
                placeholder="Search your question..."
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500 sm:text-base"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          CATEGORY FILTERS
      ========================================================= */}

      <section className="border-y border-white/5 bg-[#0A101C] py-7">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((category) => {
              const Icon = category.icon;
              const active = activeCategory === category.name;

              return (
                <button
                  key={category.name}
                  onClick={() => {
                    setActiveCategory(category.name);
                    setOpenIndex(null);
                  }}
                  className={`flex shrink-0 items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                    active
                      ? "border-orange-500 bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                      : "border-white/10 bg-white/[0.03] text-slate-400 hover:border-orange-500/30 hover:text-white"
                  }`}
                >
                  <Icon size={16} />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ CONTENT
      ========================================================= */}

      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-orange-500">
                Help Center
              </span>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                Everything you need to know.
              </h2>
            </div>

            <p className="text-sm text-slate-500">
              {filteredFAQs.length}{" "}
              {filteredFAQs.length === 1 ? "question" : "questions"}
            </p>
          </div>

          {filteredFAQs.length > 0 ? (
            <div className="space-y-3">
              {filteredFAQs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <motion.div
                    layout
                    key={`${faq.category}-${faq.question}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                      isOpen
                        ? "border-orange-500/30 bg-orange-500/[0.04]"
                        : "border-white/10 bg-white/[0.025] hover:border-white/20"
                    }`}
                  >
                    <button
                      onClick={() =>
                        setOpenIndex(isOpen ? null : index)
                      }
                      className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left sm:px-7"
                    >
                      <div className="flex items-start gap-4">
                        <span
                          className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold transition ${
                            isOpen
                              ? "bg-orange-500 text-white"
                              : "bg-white/5 text-slate-500"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="font-bold leading-7 text-white">
                          {faq.question}
                        </span>
                      </div>

                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          isOpen
                            ? "rotate-180 border-orange-500 bg-orange-500 text-white"
                            : "border-white/10 text-slate-500"
                        }`}
                      >
                        <ChevronDown size={17} />
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="border-t border-white/5 px-6 pb-7 pt-5 sm:px-7">
                            <div className="ml-12 max-w-3xl">
                              <span className="mb-3 inline-flex rounded-full bg-orange-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-orange-400">
                                {faq.category}
                              </span>

                              <p className="text-sm leading-8 text-slate-400 sm:text-base">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-20 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500">
                <Search size={27} />
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                No questions found
              </h3>

              <p className="mt-3 text-slate-500">
                Try another search term or select a different category.
              </p>

              <button
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                }}
                className="mt-7 rounded-full bg-orange-500 px-6 py-3 text-sm font-bold transition hover:bg-orange-600"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================
          WHY WORK WITH US
      ========================================================= */}

      <section className="border-y border-white/5 bg-[#0A101C] py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-xl"
            >
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-orange-500">
                Why Degreatlink
              </span>

              <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
                More than installation.
                <span className="block text-orange-500">
                  We build solutions.
                </span>
              </h2>

              <p className="mt-6 leading-8 text-slate-400">
                Every property has different needs. That's why our approach
                focuses on understanding the project and creating a solution
                that fits the environment.
              </p>

              <Link
                to="/quote"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-orange-500 px-7 py-4 text-sm font-bold transition hover:bg-orange-600"
              >
                Discuss Your Project
                <ArrowRight size={18} />
              </Link>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: ShieldCheck,
                  title: "Professional Approach",
                  text: "Solutions planned around your property's requirements.",
                },
                {
                  icon: CheckCircle2,
                  title: "Quality Installation",
                  text: "Attention to proper setup, configuration and finishing.",
                },
                {
                  icon: Clock3,
                  title: "Built for Reliability",
                  text: "Systems selected and configured with everyday use in mind.",
                },
                {
                  icon: Wrench,
                  title: "Support",
                  text: "Assistance with your system beyond the initial installation.",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-orange-500/20"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500">
                      <Icon size={22} />
                    </div>

                    <h3 className="mt-6 font-bold">{item.title}</h3>

                    <p className="mt-3 text-sm leading-7 text-slate-500">
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
          HOW IT WORKS
      ========================================================= */}

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-orange-500">
              Simple Process
            </span>

            <h2 className="mt-5 text-4xl font-black sm:text-5xl">
              From idea to installation.
            </h2>

            <p className="mt-5 leading-8 text-slate-400">
              Getting started with Degreatlink is straightforward.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative rounded-3xl border border-white/10 bg-white/[0.025] p-7"
              >
                <span className="text-4xl font-black text-orange-500/20">
                  {step.number}
                </span>

                <h3 className="mt-7 text-xl font-bold">{step.title}</h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {step.text}
                </p>

                {index < processSteps.length - 1 && (
                  <div className="absolute right-[-22px] top-1/2 hidden h-px w-10 bg-orange-500/20 lg:block" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          STILL HAVE QUESTIONS
      ========================================================= */}

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[2rem] border border-orange-500/20 bg-gradient-to-br from-orange-500/10 via-white/[0.03] to-blue-500/5 p-8 sm:p-12 lg:p-16"
          >
            <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-72 w-72 rounded-full bg-orange-500/10 blur-[100px]" />

            <div className="relative flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500">
                  <MessageCircle size={23} />
                </div>

                <h2 className="mt-7 text-3xl font-black sm:text-4xl">
                  Still have questions?
                </h2>

                <p className="mt-4 leading-8 text-slate-400">
                  Tell us what you're trying to achieve and we'll help you
                  determine the right solution for your property.
                </p>
              </div>

              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col">
                <Link
                  to="/quote"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-7 py-4 text-sm font-bold transition hover:bg-orange-600"
                >
                  Get Free Quote
                  <ArrowRight size={17} />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-4 text-sm font-bold transition hover:border-orange-500/30 hover:bg-white/10"
                >
                  <Phone size={17} />
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}