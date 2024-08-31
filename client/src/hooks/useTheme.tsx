import { createContext, ReactNode, useContext, useEffect, useState } from "react";


interface themeContextData {
    theme: string,
    toggleTheme: () => void,
}

const themeContext = createContext<themeContextData>({} as themeContextData);


export function ThemeContextProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<string>(localStorage.getItem("theme") as string !== "dark" ? "light" : "dark");
    const root = window.document.documentElement;

    useEffect(() => {
        root.classList.add(theme);

        localStorage.setItem("theme", theme);

    }, [theme, root]);

    function toggleTheme() {
        if (root.classList.contains(theme)) {
            root.classList.remove(theme);
        }
        setTheme(theme === "dark" ? "light" : "dark");
    }


    return (
        <themeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </themeContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
    return useContext(themeContext);
}