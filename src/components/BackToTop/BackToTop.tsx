import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          aria-label="Back to top"
          onClick={handleBackToTop}
          initial={{
            opacity: 0,
            scale: 0.7,
            y: 20,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.7,
            y: 20,
          }}
          whileHover={{
            y: -5,
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.92,
          }}
          transition={{
            duration: 0.25,
          }}
          className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-orange-500/30 bg-[#101827]/90 text-orange-500 shadow-xl shadow-black/20 backdrop-blur-xl transition-colors duration-300 hover:bg-orange-500 hover:text-white"
        >
          <ArrowUp size={20} strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}