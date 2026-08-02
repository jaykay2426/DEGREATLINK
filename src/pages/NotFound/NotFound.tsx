import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="flex min-h-[100vh] items-center justify-center bg-[#080D18] px-6 text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        <p className="text-8xl font-black text-orange-500 sm:text-9xl">
          404
        </p>

        <h1 className="mt-6 text-3xl font-black sm:text-4xl">
          Page not found
        </h1>

        <p className="mx-auto mt-4 max-w-md text-slate-400">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-orange-500 px-7 py-4 font-bold transition hover:bg-orange-600"
        >
          <ArrowLeft size={18} />
          Back Home
        </Link>
      </motion.div>
    </main>
  );
}