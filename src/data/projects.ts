export interface ProjectMedia {
  type: "image" | "video";
  src: string;
  alt?: string;
}

export interface Project {
  slug: string;
  service: string;
  serviceSlug: string;
  title: string;
  location: string;
  description: string;
  completed: string;
  media: ProjectMedia[];
  highlights: string[];
}

export const projects: Project[] = [
  // =====================================================
  // CCTV PROJECTS
  // =====================================================

  {
    slug: "cctv-lekki-lagos",
    service: "CCTV Installation",
    serviceSlug: "cctv-installation",
    title: "Residential CCTV Installation",
    location: "Lekki, Lagos",
    description:
      "A residential CCTV surveillance installation designed to improve visibility and monitoring around the property.",
    completed: "2026",
    media: [
      {
        type: "image",
        src: "/projects/cctv/lekki/image-1.jpg",
        alt: "CCTV installation in Lekki",
      },
      {
        type: "image",
        src: "/projects/cctv/lekki/image-2.jpg",
        alt: "CCTV camera installation",
      },
      {
        type: "image",
        src: "/projects/cctv/lekki/image-3.jpg",
        alt: "Residential CCTV system",
      },
      {
        type: "video",
        src: "/projects/cctv/lekki/video-1.mp4",
      },
      {
        type: "video",
        src: "/projects/cctv/lekki/video-2.mp4",
      },
    ],
    highlights: [
      "Residential surveillance coverage",
      "Strategic camera positioning",
      "Clean cable installation",
      "System configuration",
      "Camera testing and setup",
    ],
  },

  {
    slug: "cctv-ikorodu-lagos",
    service: "CCTV Installation",
    serviceSlug: "cctv-installation",
    title: "Residential Security Surveillance",
    location: "Ikorodu, Lagos",
    description:
      "A CCTV security system installed to provide surveillance coverage around a residential property.",
    completed: "2026",
    media: [
      {
        type: "image",
        src: "/projects/cctv/ikorodu/image-1.jpg",
        alt: "CCTV installation in Ikorodu",
      },
      {
        type: "image",
        src: "/projects/cctv/ikorodu/image-2.jpg",
        alt: "CCTV security camera",
      },
      {
        type: "image",
        src: "/projects/cctv/ikorodu/image-3.jpg",
        alt: "CCTV installation",
      },
      {
        type: "video",
        src: "/projects/cctv/ikorodu/video-1.mp4",
      },
      {
        type: "video",
        src: "/projects/cctv/ikorodu/video-2.mp4",
      },
    ],
    highlights: [
      "Residential CCTV coverage",
      "Camera positioning",
      "Security monitoring",
      "Cable management",
      "System configuration",
    ],
  },

  {
    slug: "cctv-ajah-lagos",
    service: "CCTV Installation",
    serviceSlug: "cctv-installation",
    title: "Property Surveillance System",
    location: "Ajah, Lagos",
    description:
      "Professional CCTV installation providing surveillance coverage for important areas of the property.",
    completed: "2026",
    media: [
      {
        type: "image",
        src: "/projects/cctv/ajah/image-1.jpg",
        alt: "CCTV installation in Ajah",
      },
      {
        type: "image",
        src: "/projects/cctv/ajah/image-2.jpg",
        alt: "Security camera installation",
      },
      {
        type: "image",
        src: "/projects/cctv/ajah/image-3.jpg",
        alt: "CCTV surveillance system",
      },
      {
        type: "video",
        src: "/projects/cctv/ajah/video-1.mp4",
      },
      {
        type: "video",
        src: "/projects/cctv/ajah/video-2.mp4",
      },
    ],
    highlights: [
      "Property surveillance",
      "Strategic camera placement",
      "Professional installation",
      "System testing",
      "Monitoring setup",
    ],
  },

  // =====================================================
  // SOLAR PROJECTS
  // =====================================================

  {
    slug: "solar-lekki-lagos",
    service: "Solar Systems",
    serviceSlug: "solar-systems",
    title: "Residential Solar Power Installation",
    location: "Lekki, Lagos",
    description:
      "Solar power installation designed around the energy requirements of a residential property.",
    completed: "2026",
    media: [
      {
        type: "image",
        src: "/projects/solar/lekki/image-1.jpg",
        alt: "Solar installation in Lekki",
      },
      {
        type: "image",
        src: "/projects/solar/lekki/image-2.jpg",
        alt: "Solar panels",
      },
      {
        type: "image",
        src: "/projects/solar/lekki/image-3.jpg",
        alt: "Solar inverter installation",
      },
      {
        type: "video",
        src: "/projects/solar/lekki/video-1.mp4",
      },
      {
        type: "video",
        src: "/projects/solar/lekki/video-2.mp4",
      },
    ],
    highlights: [
      "Solar panel installation",
      "Inverter setup",
      "Battery integration",
      "Power system configuration",
      "System testing",
    ],
  },

  {
    slug: "solar-ikeja-lagos",
    service: "Solar Systems",
    serviceSlug: "solar-systems",
    title: "Commercial Solar Power Solution",
    location: "Ikeja, Lagos",
    description:
      "A solar power solution designed to support the energy requirements of a commercial environment.",
    completed: "2026",
    media: [
      {
        type: "image",
        src: "/projects/solar/ikeja/image-1.jpg",
        alt: "Solar installation in Ikeja",
      },
      {
        type: "image",
        src: "/projects/solar/ikeja/image-2.jpg",
        alt: "Solar power system",
      },
      {
        type: "image",
        src: "/projects/solar/ikeja/image-3.jpg",
        alt: "Solar inverter",
      },
      {
        type: "video",
        src: "/projects/solar/ikeja/video-1.mp4",
      },
      {
        type: "video",
        src: "/projects/solar/ikeja/video-2.mp4",
      },
    ],
    highlights: [
      "Energy requirement assessment",
      "Solar system planning",
      "Panel installation",
      "Inverter configuration",
      "Battery integration",
    ],
  },

  {
    slug: "solar-surulere-lagos",
    service: "Solar Systems",
    serviceSlug: "solar-systems",
    title: "Home Solar Energy System",
    location: "Surulere, Lagos",
    description:
      "A residential solar solution designed to support essential household energy requirements.",
    completed: "2026",
    media: [
      {
        type: "image",
        src: "/projects/solar/surulere/image-1.jpg",
        alt: "Solar installation in Surulere",
      },
      {
        type: "image",
        src: "/projects/solar/surulere/image-2.jpg",
        alt: "Solar panel installation",
      },
      {
        type: "image",
        src: "/projects/solar/surulere/image-3.jpg",
        alt: "Home solar system",
      },
      {
        type: "video",
        src: "/projects/solar/surulere/video-1.mp4",
      },
      {
        type: "video",
        src: "/projects/solar/surulere/video-2.mp4",
      },
    ],
    highlights: [
      "Residential power solution",
      "Solar panel installation",
      "Battery setup",
      "Inverter configuration",
      "System testing",
    ],
  },

  // =====================================================
  // ELECTRICAL FENCING
  // =====================================================

  {
    slug: "fencing-lekki-lagos",
    service: "Electrical Fencing",
    serviceSlug: "electrical-fencing",
    title: "Residential Electric Fence",
    location: "Lekki, Lagos",
    description:
      "Perimeter security installation designed to provide an additional layer of protection around a residential property.",
    completed: "2026",
    media: [
      {
        type: "image",
        src: "/projects/fencing/lekki/image-1.jpg",
        alt: "Electric fencing installation in Lekki",
      },
      {
        type: "image",
        src: "/projects/fencing/lekki/image-2.jpg",
        alt: "Electric fence",
      },
      {
        type: "image",
        src: "/projects/fencing/lekki/image-3.jpg",
        alt: "Perimeter security",
      },
      {
        type: "video",
        src: "/projects/fencing/lekki/video-1.mp4",
      },
      {
        type: "video",
        src: "/projects/fencing/lekki/video-2.mp4",
      },
    ],
    highlights: [
      "Perimeter assessment",
      "Electric fence installation",
      "Security integration",
      "System configuration",
      "Testing and setup",
    ],
  },

  {
    slug: "fencing-ajah-lagos",
    service: "Electrical Fencing",
    serviceSlug: "electrical-fencing",
    title: "Compound Perimeter Security",
    location: "Ajah, Lagos",
    description:
      "Professional electric fencing installed as an additional security layer around a property boundary.",
    completed: "2026",
    media: [
      {
        type: "image",
        src: "/projects/fencing/ajah/image-1.jpg",
        alt: "Electric fence installation in Ajah",
      },
      {
        type: "image",
        src: "/projects/fencing/ajah/image-2.jpg",
        alt: "Electric fence system",
      },
      {
        type: "image",
        src: "/projects/fencing/ajah/image-3.jpg",
        alt: "Perimeter security system",
      },
      {
        type: "video",
        src: "/projects/fencing/ajah/video-1.mp4",
      },
      {
        type: "video",
        src: "/projects/fencing/ajah/video-2.mp4",
      },
    ],
    highlights: [
      "Boundary security",
      "Professional installation",
      "Perimeter planning",
      "Security integration",
      "System testing",
    ],
  },

  // =====================================================
  // DSTV
  // =====================================================

  {
    slug: "dstv-lekki-lagos",
    service: "DStv Setup",
    serviceSlug: "dstv-setup",
    title: "Residential DStv Installation",
    location: "Lekki, Lagos",
    description:
      "Professional satellite television installation, positioning and signal configuration.",
    completed: "2026",
    media: [
      {
        type: "image",
        src: "/projects/dstv/lekki/image-1.jpg",
        alt: "DStv installation in Lekki",
      },
      {
        type: "image",
        src: "/projects/dstv/lekki/image-2.jpg",
        alt: "Satellite dish installation",
      },
      {
        type: "image",
        src: "/projects/dstv/lekki/image-3.jpg",
        alt: "DStv setup",
      },
      {
        type: "video",
        src: "/projects/dstv/lekki/video-1.mp4",
      },
      {
        type: "video",
        src: "/projects/dstv/lekki/video-2.mp4",
      },
    ],
    highlights: [
      "Dish positioning",
      "Cable installation",
      "Decoder setup",
      "Signal configuration",
      "Neat installation",
    ],
  },

  {
    slug: "dstv-ikorodu-lagos",
    service: "DStv Setup",
    serviceSlug: "dstv-setup",
    title: "Home Satellite TV Setup",
    location: "Ikorodu, Lagos",
    description:
      "Satellite television system professionally installed and configured for residential entertainment.",
    completed: "2026",
    media: [
      {
        type: "image",
        src: "/projects/dstv/ikorodu/image-1.jpg",
        alt: "DStv installation in Ikorodu",
      },
      {
        type: "image",
        src: "/projects/dstv/ikorodu/image-2.jpg",
        alt: "DStv dish",
      },
      {
        type: "image",
        src: "/projects/dstv/ikorodu/image-3.jpg",
        alt: "DStv setup",
      },
      {
        type: "video",
        src: "/projects/dstv/ikorodu/video-1.mp4",
      },
      {
        type: "video",
        src: "/projects/dstv/ikorodu/video-2.mp4",
      },
    ],
    highlights: [
      "Dish installation",
      "Signal setup",
      "Decoder configuration",
      "Cable management",
      "System testing",
    ],
  },

  // =====================================================
  // SOLAR STREET LIGHTS
  // =====================================================

  {
    slug: "street-light-lekki-lagos",
    service: "Street Solar Lights",
    serviceSlug: "street-solar-lights",
    title: "Solar Street Lighting Project",
    location: "Lekki, Lagos",
    description:
      "Solar-powered outdoor lighting solution designed to improve nighttime visibility around an outdoor space.",
    completed: "2026",
    media: [
      {
        type: "image",
        src: "/projects/street-lights/lekki/image-1.jpg",
        alt: "Solar street lights in Lekki",
      },
      {
        type: "image",
        src: "/projects/street-lights/lekki/image-2.jpg",
        alt: "Solar street light",
      },
      {
        type: "image",
        src: "/projects/street-lights/lekki/image-3.jpg",
        alt: "Outdoor solar lighting",
      },
      {
        type: "video",
        src: "/projects/street-lights/lekki/video-1.mp4",
      },
      {
        type: "video",
        src: "/projects/street-lights/lekki/video-2.mp4",
      },
    ],
    highlights: [
      "Site assessment",
      "Lighting placement",
      "Solar light installation",
      "Outdoor configuration",
      "System testing",
    ],
  },

  {
    slug: "street-light-ikeja-lagos",
    service: "Street Solar Lights",
    serviceSlug: "street-solar-lights",
    title: "Commercial Solar Lighting",
    location: "Ikeja, Lagos",
    description:
      "Solar-powered lighting solution designed to provide outdoor illumination around a commercial environment.",
    completed: "2026",
    media: [
      {
        type: "image",
        src: "/projects/street-lights/ikeja/image-1.jpg",
        alt: "Solar street lights in Ikeja",
      },
      {
        type: "image",
        src: "/projects/street-lights/ikeja/image-2.jpg",
        alt: "Solar outdoor lighting",
      },
      {
        type: "image",
        src: "/projects/street-lights/ikeja/image-3.jpg",
        alt: "Commercial solar lighting",
      },
      {
        type: "video",
        src: "/projects/street-lights/ikeja/video-1.mp4",
      },
      {
        type: "video",
        src: "/projects/street-lights/ikeja/video-2.mp4",
      },
    ],
    highlights: [
      "Outdoor lighting planning",
      "Solar light installation",
      "Lighting placement",
      "System configuration",
      "Testing",
    ],
  },

  // =====================================================
  // INTERCOM
  // =====================================================

  {
    slug: "intercom-lekki-lagos",
    service: "Intercom Solutions",
    serviceSlug: "intercom-solutions",
    title: "Residential Intercom Installation",
    location: "Lekki, Lagos",
    description:
      "Intercom system installed to improve communication and visitor access awareness within a residential property.",
    completed: "2026",
    media: [
      {
        type: "image",
        src: "/projects/intercom/lekki/image-1.jpg",
        alt: "Intercom installation in Lekki",
      },
      {
        type: "image",
        src: "/projects/intercom/lekki/image-2.jpg",
        alt: "Residential intercom system",
      },
      {
        type: "image",
        src: "/projects/intercom/lekki/image-3.jpg",
        alt: "Intercom device",
      },
      {
        type: "video",
        src: "/projects/intercom/lekki/video-1.mp4",
      },
      {
        type: "video",
        src: "/projects/intercom/lekki/video-2.mp4",
      },
    ],
    highlights: [
      "Property assessment",
      "Intercom installation",
      "Device configuration",
      "Communication testing",
      "Neat cabling",
    ],
  },

  {
    slug: "intercom-ikeja-lagos",
    service: "Intercom Solutions",
    serviceSlug: "intercom-solutions",
    title: "Office Intercom System",
    location: "Ikeja, Lagos",
    description:
      "Intercom communication solution designed to improve communication between areas of an office environment.",
    completed: "2026",
    media: [
      {
        type: "image",
        src: "/projects/intercom/ikeja/image-1.jpg",
        alt: "Office intercom installation in Ikeja",
      },
      {
        type: "image",
        src: "/projects/intercom/ikeja/image-2.jpg",
        alt: "Intercom system",
      },
      {
        type: "image",
        src: "/projects/intercom/ikeja/image-3.jpg",
        alt: "Office communication system",
      },
      {
        type: "video",
        src: "/projects/intercom/ikeja/video-1.mp4",
      },
      {
        type: "video",
        src: "/projects/intercom/ikeja/video-2.mp4",
      },
    ],
    highlights: [
      "Office communication",
      "System planning",
      "Device installation",
      "Configuration",
      "System testing",
    ],
  },
];