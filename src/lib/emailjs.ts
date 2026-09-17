import emailjs from "@emailjs/browser";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export type DegreatlinkEnquiry = {
  name: string;
  phone: string;
  email: string;
  enquiry_type: string;
  service: string;
  property_type: string;
  location: string;
  budget: string;
  contact_method: string;
  preferred_date: string;
  message: string;
};

export async function sendDegreatlinkEnquiry(
  data: DegreatlinkEnquiry,
) {
  if (!serviceId || !templateId || !publicKey) {
    throw new Error(
      "Email service is not configured. Please check the EmailJS environment variables.",
    );
  }

  return emailjs.send(
    serviceId,
    templateId,
    {
      name: data.name,
      phone: data.phone,
      email: data.email,
      enquiry_type: data.enquiry_type,
      service: data.service,
      property_type: data.property_type,
      location: data.location,
      budget: data.budget,
      contact_method: data.contact_method,
      preferred_date: data.preferred_date,
      message: data.message,
    },
    {
      publicKey,
    },
  );
}