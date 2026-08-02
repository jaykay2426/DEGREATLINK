  import { Outlet } from "react-router-dom";

  import Navbar from "../components/Navbar/Navbar";
  import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
  import BackToTop from "../components/BackToTop/BackToTop";

  export default function MainLayout() {
    return (
      <div className="min-h-screen bg-[#080D18]">
        <ScrollToTop />

        <Navbar />

        <main>
          <Outlet />
        </main>

        <Footer />

        <BackToTop />
      </div>
    );
  }