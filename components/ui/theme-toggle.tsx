"use client";

import {Moon, Sun} from "lucide-react";
import * as React from "react";

const STORAGE_KEY = "bejibun:theme";

export function ThemeToggle({className = ""}: { className?: string }) {
    const [isDark, setIsDark] = React.useState(false);

    // Sync with the class set by the no-flash script in layout.tsx
    React.useEffect(() => {
        setIsDark(document.documentElement.classList.contains("dark"));
    }, []);

    const toggle = () => {
        const next = !isDark;
        setIsDark(next);
        document.documentElement.classList.toggle("dark", next);
        try {
            localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
        } catch {
            // private mode — theme just won't persist
        }
    };

    return (
        <button
            type="button"
            onClick={toggle}
            className={`p-1.5 text-muted-foreground hover:text-foreground transition-colors cursor-pointer ${className}`}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Light mode" : "Dark mode"}
        >
            {isDark ? <Sun className="size-[18px]"/> : <Moon className="size-[18px]"/>}
        </button>
    );
}
