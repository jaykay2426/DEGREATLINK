import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import ServiceDetails from "./pages/Services/ServiceDetails";
import Projects from "./pages/Projects/Projects";
import ProjectDetails from "./pages/Projects/ProjectDetails";
import Gallery from "./pages/Gallery/Gallery";
import FAQs from "./pages/FAQs/FAQs";
import Quote from "./pages/Quote/Quote";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        {/* Services */}
        <Route path="/services" element={<Services />} />

        <Route
          path="/services/:slug"
          element={<ServiceDetails />}
        />

        <Route path="/projects" element={<Projects />} />
<Route path="/projects/:slug" element={<ProjectDetails />} />

        <Route path="/gallery" element={<Gallery />} />

        <Route path="/faqs" element={<FAQs />} />

        <Route path="/quote" element={<Quote />} />

        <Route path="/contact" element={<Contact />} />

      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}