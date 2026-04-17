import { motion } from "framer-motion";
import { useTheme } from "../theme";

const SunIcon = ({ color = "currentColor" }) => (
  <svg viewBox="0 0 16 16" width="13" height="13" fill="none">
    <circle cx="8" cy="8" r="3" fill={color} />
    <g stroke={color} strokeWidth="1.4" strokeLinecap="round">
      <line x1="8" y1="1.5" x2="8" y2="3" />
      <line x1="8" y1="13" x2="8" y2="14.5" />
      <line x1="1.5" y1="8" x2="3" y2="8" />
      <line x1="13" y1="8" x2="14.5" y2="8" />
      <line x1="3.3" y1="3.3" x2="4.3" y2="4.3" />
      <line x1="11.7" y1="11.7" x2="12.7" y2="12.7" />
      <line x1="12.7" y1="3.3" x2="11.7" y2="4.3" />
      <line x1="4.3" y1="11.7" x2="3.3" y2="12.7" />
    </g>
  </svg>
);

const MoonIcon = ({ color = "currentColor" }) => (
  <svg viewBox="0 0 16 16" width="12" height="12" fill="none">
    <path d="M13 9.5A5.5 5.5 0 0 1 6.5 3a5.5 5.5 0 1 0 6.5 6.5z" fill={color} />
  </svg>
);

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle theme"
      className={`relative flex items-center w-[64px] h-[34px] rounded-full p-0
        border-[1.5px] transition-all duration-350 cursor-pointer
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/50
        ${isDark
          ? "bg-violet-900 border-violet-700"
          : "bg-amber-400 border-amber-500"
        }`}
    >
      {/* Track icon — sun (left, visible in light mode) */}
      <span
        className={`absolute left-[8px] top-1/2 -translate-y-1/2 transition-opacity duration-300
          ${isDark ? "opacity-0" : "opacity-55"}`}
      >
        <SunIcon color="white" />
      </span>

      {/* Track icon — moon (right, visible in dark mode) */}
      <span
        className={`absolute right-[8px] top-1/2 -translate-y-1/2 transition-opacity duration-300
          ${isDark ? "opacity-55" : "opacity-0"}`}
      >
        <MoonIcon color="white" />
      </span>

      {/* Thumb */}
      <motion.div
        animate={{ x: isDark ? 30 : 3 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="absolute top-[3px] w-[26px] h-[26px] rounded-full bg-white
          flex items-center justify-center"
      >
        <span className={`absolute transition-opacity duration-200 ${isDark ? "opacity-0" : "opacity-100"}`}>
          <SunIcon color="#F59E0B" />
        </span>
        <span className={`absolute transition-opacity duration-200 ${isDark ? "opacity-100" : "opacity-0"}`}>
          <MoonIcon color="#818CF8" />
        </span>
      </motion.div>
    </button>
  );
}