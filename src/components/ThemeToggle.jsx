import { motion } from "framer-motion";
import { useTheme } from "../theme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={`relative flex items-center w-[52px] h-[28px] rounded-full p-[3px]
        border transition-all duration-300
        focus-visible:ring-2 focus-visible:ring-violet-400
        ${isDark
          ? "bg-violet-500/20 border-violet-500/30"
          : "bg-amber-400/20 border-amber-400/40"
        }`}
    >
      {/* Icons */}
      <span className="absolute left-[6px] text-[10px] opacity-60">🌙</span>
      <span className="absolute right-[6px] text-[10px] opacity-60">☀️</span>

      {/* Thumb */}
      <motion.div
        animate={{ x: isDark ? 24 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className={`flex items-center justify-center text-[11px]
          w-[22px] h-[22px] rounded-full
          ${isDark ? "bg-violet-600" : "bg-amber-400"}
        `}
        style={{
          boxShadow: isDark
            ? "0 0 10px rgba(139,92,246,0.7)"
            : "0 0 10px rgba(251,191,36,0.7)",
        }}
      >
        {isDark ? "🌙" : "☀️"}
      </motion.div>
    </button>
  );
}