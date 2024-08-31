import { ThemeContextProvider } from "@/hooks/useTheme";
import HeaderRoot from "../components/HeaderRoot";


export default function Root() {
    return (
        <div className="overflow-hidden h-screen">
            <ThemeContextProvider>
                <HeaderRoot />
                <div className="w-screen h-full bg-darkContent">
                    <div className="container">
                        <div className="flex gap-2 py-2 px-2 md:px-8 bottom-12">
                            <input placeholder="Adicione uma nova tarefa" className="z-10 mt-[-28px] h-10 bg-darkInput px-2 md:py-2 lg:py-3 border-[1px] border-black rounded-md w-10 flex-grow placeholder:text-darkInputPlaceholder font-normal caret-white" type="text" name="" id="" />
                            <button className="z-10 text-white bg-blue-600 hover:bg-blue-700 duration-200 rounded-md p-2 text-sm h-10 mt-[-28px]">Criar +</button>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </ThemeContextProvider>
        </div>
    )
}
