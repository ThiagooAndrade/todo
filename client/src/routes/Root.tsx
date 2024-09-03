import { ThemeContextProvider } from "@/hooks/useTheme";
import HeaderRoot from "../components/HeaderRoot";
import { Badge } from "@/components/ui/badge";
import { Tasks } from "@/components/Tasks";
import { NewTaskButtonModal } from "@/components/NewTaskButtonModal";
import { useDates } from "@/hooks/useDates";


export default function Root() {
    const { date } = useDates();

    return (
        <div className="overflow-hidden h-screen">
            <ThemeContextProvider>
                <HeaderRoot />
            </ThemeContextProvider >
            <div className="w-screen h-full bg-lightContent dark:bg-darkContent duration-500">
                <div className="container">
                    <div className="flex justify-center gap-2 md:gap-4 py-2 px-2 md:px-8 bottom-12">
                        <input placeholder="Search task" className="z-10 max-w-2xl focus:ring-2 dark:focus:ring-2 dark:focus:ring-gray-700  focus:outline-none ring-1 dark:ring-0 mt-[-28px] h-10 lg:h-12 bg-lightInput dark:bg-darkInput px-2 md:py-2 lg:py-3 border-[1px] border-blue-400 dark:border-black rounded-md w-10 flex-grow placeholder:text-lightInputPlaceholder placeholder:dark:text-darkInputPlaceholder font-normal caret-black dark:caret-white" type="text" name="" id="" />
                        <NewTaskButtonModal />
                    </div>
                </div>
                <section className="container mt-10">
                    <div className="w-full flex justify-between items-center">
                        <div className="font-semibold dark:text-blue-400">Tarefas criadas <Badge variant={"secondary"} className="bg-gray-300 hover:bg-gray-300 dark:bg-darkInput px-2 rounded-full h-6 min-w-7 inline-flex justify-center">2</Badge></div>

                        <div className="font-semibold dark:text-blue-400">Concluídas <Badge variant={"secondary"} className="bg-gray-300 hover:bg-gray-300 dark:bg-darkInput px-2 rounded-full h-6">1 de 5</Badge></div>
                    </div>
                    <div className="w-full flex flex-col mt-5 gap-2">
                        <Tasks date={date} />
                        <Tasks date={date} />
                        <Tasks date={date} />
                        <Tasks date={date} />
                    </div>
                </section>
            </div>
        </div>
    )
}
