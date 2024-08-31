import { useTheme } from "@/hooks/useTheme"
import { Switch } from "./ui/switch"
import rocketIcon from "/rocket.png"
import { Moon, Sun } from "lucide-react";
export default function HeaderRoot() {
    const { theme, toggleTheme } = useTheme();


    return (
        <header className="w-screen h-48 font-sans relative z-0 bg-lightHeader dark:bg-darkHeader duration-500">
            <div className="container h-full text-white dark:text-black flex justify-center items-center space-x-2">
                <img src={rocketIcon} alt="Todo Icon" />
                <h1 className="text-blue-400 text-2xl lg:text-4xl font-bold">to<span className="text-purple-500">do</span></h1>
            </div>
            <div className="absolute right-2 top-2 text-white flex items-center gap-2 duration-500">
                {theme == "light" && (
                    <Sun size={20} strokeWidth={2} className="text-black" />
                )}
                {theme == "dark" && (
                    <Moon size={20} strokeWidth={2} className="text-white" />
                )}
                <Switch id="themeMode" className="" defaultChecked={true} onCheckedChange={toggleTheme} />
            </div>
        </ header>
    )
}
