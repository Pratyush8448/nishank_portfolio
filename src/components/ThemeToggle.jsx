import { motion } from "framer-motion";
import { useTheme } from "../theme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="fixed top-5 right-5 z-[999]">
      <button
        onClick={toggleTheme}
        className={`w-16 h-8 flex items-center rounded-full p-1 transition
        ${isDark ? "bg-gray-800" : "bg-yellow-300"}`}
      >
        {/* Knob */}
        <motion.div
            layout
            initial={false}
            animate={{ x: isDark ? 32 : 0 }} // 🔥 moves knob
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md"
            >
            {isDark ? "🌙" : "☀️"}
            </motion.div>
      </button>
    </div>
  );
}