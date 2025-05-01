import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

function Themes() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <button
      className="dark:text-primary fixed right-3 bottom-5 cursor-pointer text-xl transition-all duration-300 active:-rotate-180 md:right-10 md:bottom-10"
      onClick={toggleTheme}
    >
      {theme === "light" ? <Moon /> : <Sun />}
    </button>
  );
}

export default Themes;
