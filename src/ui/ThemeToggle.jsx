import { motion } from "framer-motion";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { useTheme } from "../context/ThemeContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed bottom-8 right-8 z-50 p-4 glass-card border border-gray-800 hover:border-cyan-primary rounded-full hover:shadow-lg hover:shadow-cyan-primary/30 transition-all duration-300 hover:-translate-y-1 group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {theme === "dark" ? (
          <HiOutlineSun size={24} className="text-cyan-primary" />
        ) : (
          <HiOutlineMoon size={24} className="text-purple-primary" />
        )}
      </motion.div>
    </motion.button>
  );
}

export default ThemeToggle;
