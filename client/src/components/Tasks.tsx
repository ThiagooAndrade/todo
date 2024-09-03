import { FilePenLineIcon, Trash2 } from "lucide-react";
import { Checkbox } from "./ui/checkbox";


export function Tasks({ date }: { date: Date | undefined }) {
    return (
        <div className="bg-lightTaskContent shadow-xl hover:shadow-2xl dark:shadow-sm dark:hover:shadow-lg duration-200 dark:bg-darkTaskContent dark:outline-2 dark:outline-black rounded-md p-4 flex items-center justify-center gap-2 lg:gap-8 relative">
            <div>
                <Checkbox onCheckedChange={(e) => console.log(e)} />
            </div>
            <div className="grow">
                <div className="max-w-2xl ml-2">
                    <h3 className="ml-7 sm:ml-0 font-semibold">Title</h3>
                    <p className="hidden sm:block text-xs text-muted-foreground text-ellipsis w-full"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aliquam nemo recusandae quam, impedit ab sapiente molestiae quis eaque aut accusamus repudiandae eius delectus soluta temporibus, velit sint nihil! Eaque?</p>
                </div>
            </div>
            <div className="flex flex-col justify-between gap-4">
                <button>
                    <Trash2 size={20} className="text-red-700 hover:text-red-900 duration-200 dark:hover:text-red-900" />
                </button>
                <button>
                    <FilePenLineIcon size={20} className="text-emerald-600 hover:text-emerald-700 duration-900 dark:hover:text-emerald-700" />
                </button>
            </div>
            <div className="absolute top-1 right-12 text-xs font-semibold">
                {date?.toLocaleDateString()}
            </div>
        </div>
    )
}