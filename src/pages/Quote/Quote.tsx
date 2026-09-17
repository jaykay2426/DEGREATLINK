import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { sendDegreatlinkEnquiry } from "../../lib/emailjs";

const services = [
  "CCTV Installation",
  "Solar Systems",
  "Electrical Fencing",
  "DStv Setup",
  "Street Solar Lights",
  "Intercom Solutions",
];

export default function Quote() {
  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSending(true);
    setSuccessMessage("");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const service = String(formData.get("service") || "").trim();
    const propertyType = String(
      formData.get("property_type") || "",
    ).trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !phone || !email || !service || !propertyType || !message) {
  setErrorMessage("Please complete all required fields.");
  setIsSending(false);
  return;
}

    try {
      await sendDegreatlinkEnquiry({
  name,
  phone,
  email,
  enquiry_type: "Request a Quote",
  service,
  property_type: propertyType,
  location: "",
  budget: "",
  contact_method: "",
  preferred_date: "",
  message,
});

      setSuccessMessage(
        "Your quote request has been sent successfully. We will get back to you shortly.",
      );

      form.reset();
    } catch (error) {
      console.error("Quote submission error:", error);

      setErrorMessage(
        "We couldn't send your request right now. Please try again or contact us directly.",
      );
    } finally {
      setIsSending(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#080D18] py-28 text-white">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-orange-500">
              Get a Quote
            </span>

            <h1 className="mt-5 text-5xl font-black sm:text-6xl">
              Let's build the
              <span className="block text-orange-500">
                right solution.
              </span>
            </h1>

            <p className="mt-6 leading-8 text-slate-400">
              Tell us what you need and our team can help you determine the
              right solution for your property.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Professional consultation",
                "Solution recommendations",
                "Quality installation",
                "Reliable support",
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2
                    size={20}
                    className="mt-1 shrink-0 text-orange-500"
                  />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <form
  onSubmit={handleSubmit}
  className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8"
>
            <input
  name="name"
  required
  placeholder="Full Name"
  className="rounded-xl border border-white/10 bg-black/20 px-5 py-4 outline-none focus:border-orange-500"
/>

              <input
  name="phone"
  required
  placeholder="Phone Number"
  className="rounded-xl border border-white/10 bg-black/20 px-5 py-4 outline-none focus:border-orange-500"
/>

            <input
  name="email"
  required
  type="email"
  placeholder="Email Address"
  className="mt-5 w-full rounded-xl border border-white/10 bg-black/20 px-5 py-4 outline-none focus:border-orange-500"
/>

            <select
  name="service"
  required
  defaultValue=""
  className="mt-5 w-full rounded-xl border border-white/10 bg-[#101827] px-5 py-4 text-slate-300 outline-none focus:border-orange-500"
>
  <option value="" disabled>
    Select a service
  </option>

  {services.map((service) => (
    <option key={service}>{service}</option>
  ))}
</select>

            <select
  name="property_type"
  required
  defaultValue=""
  className="mt-5 w-full rounded-xl border border-white/10 bg-[#101827] px-5 py-4 text-slate-300 outline-none focus:border-orange-500"
>
  <option value="" disabled>
    Property Type
  </option>

  <option>Residential</option>
  <option>Business</option>
  <option>Organization</option>
  <option>Commercial Property</option>
</select>

            <textarea
  name="message"
  required
  rows={6}
  placeholder="Describe what you need..."
  className="mt-5 w-full resize-none rounded-xl border border-white/10 bg-black/20 px-5 py-4 outline-none focus:border-orange-500"
/>

            {successMessage && (
  <div className="mt-5 rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-4 text-sm leading-6 text-green-400">
    {successMessage}
  </div>
)}

{errorMessage && (
  <div className="mt-5 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-4 text-sm leading-6 text-red-400">
    {errorMessage}
  </div>
)}

<button
  type="submit"
  disabled={isSending}
  className="mt-5 flex w-full items-center justify-center gap-3 rounded-xl bg-orange-500 px-6 py-4 font-bold transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
>
  {isSending ? "Sending Request..." : "Request Free Quote"}

  {!isSending && <ArrowRight size={18} />}
</button>
          </form>
        </div>
      </div>
    </main>
  );
}