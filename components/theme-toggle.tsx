"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { FaMoon, FaSun } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Hindari flash tema saat SSR

  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full relative"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <FaSun className="h-5 w-5 transition-transform duration-300 dark:rotate-90 dark:opacity-0" />
      <FaMoon className="h-5 w-5 absolute transition-transform duration-300 rotate-90 opacity-0 dark:rotate-0 dark:opacity-100" />
    </Button>
  );
}
