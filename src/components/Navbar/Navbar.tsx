import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import logo from "../../assets/logo/logo.png";
import { navLinks } from "../../constants/navLinks";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: .8 }}
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "bg-slate-950/85 shadow-2xl backdrop-blur-xl"
            : "bg-slate-950/50 backdrop-blur-md"
        }`}
      >
        <div className="flex h-20 w-full items-center justify-between px-8 xl:px-14">

          {/* Logo */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: .2 }}
          >
            <Link to="/">
              <img
                src={logo}
                alt="DeGreat Link"
                className="h-16 w-auto object-contain"
              />
            </Link>
          </motion.div>

          {/* Desktop */}

          <nav className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * .08,
                }}
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `group relative font-medium transition ${
                      isActive
                        ? "text-[#ff6b00]"
                        : "text-white"
                    }`
                  }
                >
                  {link.name}

                  <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#ff6b00] transition-all duration-300 group-hover:w-full" />
                </NavLink>
              </motion.div>
            ))}

            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: .95,
              }}
            >
              <Link
                to="/quote"
                className="rounded-full bg-[#ff6b00] px-7 py-3 font-semibold text-white shadow-lg transition"
              >
                Get Quote
              </Link>
            </motion.div>
          </nav>

          {/* Mobile */}

          <motion.button
            whileTap={{ scale: .8 }}
            onClick={() => setIsOpen(!isOpen)}
            className="text-white lg:hidden"
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Menu */}

      <AnimatePresence>

        {isOpen && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-slate-950/98 lg:hidden"
          >
            <div className="flex h-full flex-col justify-center px-10">

              {navLinks.map((link, index) => (

                <motion.div
                  key={link.path}
                  initial={{
                    opacity: 0,
                    x: -50,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * .08,
                  }}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="block border-b border-white/10 py-5 text-2xl font-semibold text-white transition hover:text-[#ff6b00]"
                  >
                    {link.name}
                  </NavLink>
                </motion.div>

              ))}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: .5,
                }}
              >
                <Link
                  to="/quote"
                  onClick={() => setIsOpen(false)}
                  className="mt-10 block rounded-full bg-[#ff6b00] py-4 text-center text-lg font-semibold text-white"
                >
                  Get Free Quote
                </Link>
              </motion.div>

            </div>
          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
}