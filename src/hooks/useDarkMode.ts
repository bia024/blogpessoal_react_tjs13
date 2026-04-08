import { useEffect, useState } from "react";

export function useDarkMode() {
    const [darkMode, setDarkMode] = useState<boolean>(
        () => localStorage.getItem("darkMode") === "true"
    );

    useEffect(() => {
        const root = document.documentElement;
        if (darkMode) {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
        localStorage.setItem("darkMode", String(darkMode));
    }, [darkMode]);

    function toggleDarkMode() {
        setDarkMode(prev => !prev);
    }

    return { darkMode, toggleDarkMode };
}
