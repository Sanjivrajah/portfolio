"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { HiMoon, HiSun } from "react-icons/hi2";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  if (!mounted) {
    return (
      <div className="h-10 w-10 rounded-full bg-light-surface dark:bg-dark-surface" />
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative h-10 w-10 rounded-full bg-light-surface dark:bg-dark-surface flex items-center justify-center text-light-text dark:text-dark-text hover:ring-2 hover:ring-dark-accent/50 transition-all"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <HiSun size={20} /> : <HiMoon size={20} />}
    </button>
  );
}
