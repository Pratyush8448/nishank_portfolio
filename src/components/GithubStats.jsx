import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";


export default function GithubStats() {
  return (
    <section className="relative py-24 px-6 bg-white dark:bg-[#0e0018] text-center transition-colors duration-300 overflow-hidden">

      {/* Subtle background glow blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-violet-300/20 dark:bg-violet-600/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[200px] rounded-full bg-indigo-300/10 dark:bg-indigo-500/10 blur-2xl" />
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="relative mb-14"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          GitHub Activity
        </h2>
        {/* Decorative underline */}
        <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500" />
      </motion.div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="relative max-w-5xl mx-auto"
      >
        {/* Glow ring behind card */}
        <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-violet-500/30 via-indigo-500/20 to-transparent dark:from-violet-500/20 dark:via-indigo-500/10 blur-sm pointer-events-none" />

        <div className="relative rounded-3xl bg-white/90 dark:bg-white/[0.03] backdrop-blur-xl border border-violet-200/60 dark:border-violet-500/15 p-8 md:p-10 overflow-x-auto">

          {/* Card header */}
          <div className="flex items-center gap-3 mb-8">
            {/* Traffic-light dots */}
            <span className="w-3 h-3 rounded-full bg-rose-400/70" />
            <span className="w-3 h-3 rounded-full bg-amber-400/70" />
            <span className="w-3 h-3 rounded-full bg-emerald-400/70" />
            <span className="ml-auto text-xs font-mono text-gray-400 dark:text-gray-500 select-none">
              pratyush8448
            </span>
          </div>

          <GitHubCalendar
            username="Pratyush8448"
            blockSize={15}
            blockMargin={5}
            fontSize={13}
            theme={{
              light: ["#ede9fe", "#c4b5fd", "#a78bfa", "#7c3aed", "#4c1d95"],
              dark:  ["#1e1333", "#3b1f6e", "#5b21b6", "#7c3aed", "#a78bfa"],
            }}
          />

          {/* Footer legend */}
          <div className="mt-6 flex items-center justify-end gap-2 text-xs text-gray-400 dark:text-gray-500">
            <span>Less</span>
            {["#ede9fe", "#c4b5fd", "#a78bfa", "#7c3aed", "#4c1d95"].map((c, i) => (
              <span
                key={i}
                style={{ background: c }}
                className="block w-3 h-3 rounded-sm dark:hidden"
              />
            ))}
            {["#1e1333", "#3b1f6e", "#5b21b6", "#7c3aed", "#a78bfa"].map((c, i) => (
              <span
                key={i}
                style={{ background: c }}
                className="hidden dark:block w-3 h-3 rounded-sm"
              />
            ))}
            <span>More</span>
          </div>
        </div>
      </motion.div>

      {/* GitHub CTA */}
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mt-12 flex justify-center"
        >
        <a
            href="https://github.com/Pratyush8448"
            target="_blank"
            rel="noopener noreferrer"
            className="
            group relative w-14 h-14 flex items-center justify-center
            rounded-full

            bg-white dark:bg-[#1a0030]
            border border-gray-300 dark:border-violet-500/30

            shadow-md hover:shadow-xl
            transition-all duration-300
            hover:scale-110 active:scale-95
            "
        >
            {/* Glow */}
            <span className="
            absolute inset-0 rounded-full
            bg-violet-500/30 blur-md
            opacity-0 group-hover:opacity-100
            transition duration-300
            " />

            {/* Icon */}
            <FaGithub className="
            relative z-10 text-xl
            text-gray-800 dark:text-white
            group-hover:text-violet-500
            transition-colors duration-300
            " />
        </a>
        </motion.div>

    </section>
  );
}