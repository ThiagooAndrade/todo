import { ThemeContextProvider } from "@/hooks/useTheme";
import HeaderRoot from "../components/HeaderRoot";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CirclePlusIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { addDays, format } from "date-fns";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Tasks } from "@/components/Tasks";


export default function Root() {
    const [date, setDate] = useState<Date>();

    useEffect(() => {
        console.log(date);
    }, [date])


    return (
        <div className="overflow-hidden h-screen">
            <ThemeContextProvider>
                <HeaderRoot />
            </ThemeContextProvider >
            <div className="w-screen h-full bg-lightContent dark:bg-darkContent duration-500">
                <div className="container">
                    <div className="flex justify-center gap-2 md:gap-4 py-2 px-2 md:px-8 bottom-12">
                        <input placeholder="Search task" className="z-10 max-w-2xl focus:ring-2 dark:focus:ring-2 dark:focus:ring-gray-700  focus:outline-none ring-1 dark:ring-0 mt-[-28px] h-10 lg:h-12 bg-lightInput dark:bg-darkInput px-2 md:py-2 lg:py-3 border-[1px] border-blue-400 dark:border-black rounded-md w-10 flex-grow placeholder:text-lightInputPlaceholder placeholder:dark:text-darkInputPlaceholder font-normal caret-black dark:caret-white" type="text" name="" id="" />
                        <Dialog >
                            <DialogTrigger asChild>
                                <button className="z-10 flex justify-center items-center font-semibold gap-2 text-white bg-blue-600 hover:bg-blue-700 duration-200 rounded-md p-2 lg:px-4 text-sm lg:text-base h-10 lg:h-12 mt-[-28px]">New task <CirclePlusIcon size={16} />
                                </button>
                            </DialogTrigger>
                            <DialogPortal>
                                <DialogOverlay className="bg-black/0" />
                                <form>
                                    <DialogContent className="dark:bg-darkDialogContent">
                                        <DialogTitle className="DialogTitle">Create new task</DialogTitle>
                                        <DialogDescription className="DialogDescription">
                                            Click create when you're done.
                                        </DialogDescription>
                                        <fieldset>
                                            <Label htmlFor="name">
                                                Name
                                            </Label>
                                            <Input className="focus-visible:ring-blue-400" id="name" placeholder="Name of task" />
                                        </fieldset>
                                        <fieldset>
                                            <Label className="Label" htmlFor="description">
                                                Description
                                            </Label>
                                            <Input className="focus-visible:ring-blue-400" id="username" placeholder="Description of task" />
                                        </fieldset>
                                        <fieldset className="flex flex-col gap-1">
                                            <Label className="Label" htmlFor="Date">
                                                Date
                                            </Label>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <Button
                                                        variant={"outline"}
                                                        className={cn(
                                                            "w-[280px] justify-start text-left font-normal",
                                                            !date && "text-muted-foreground"
                                                        )}
                                                    >
                                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                                                    </Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="flex w-auto flex-col space-y-2 p-2">
                                                    <Select
                                                        onValueChange={(value) =>
                                                            setDate(addDays(new Date(), parseInt(value)))
                                                        }
                                                    >
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select" />
                                                        </SelectTrigger>
                                                        <SelectContent position="popper">
                                                            <SelectItem value="0">Today</SelectItem>
                                                            <SelectItem value="1">Tomorrow</SelectItem>
                                                            <SelectItem value="3">In 3 days</SelectItem>
                                                            <SelectItem value="7">In a week</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                    <div className="rounded-md border">
                                                        <Calendar mode="single" selected={date} onSelect={setDate} />
                                                    </div>
                                                </PopoverContent>
                                            </Popover>
                                        </fieldset>
                                        <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
                                            <DialogClose asChild>
                                                <Button className="bg-blue-500 hover:bg-blue-600 dark:bg-slate-200 dark:hover:bg-slate-300">Create</Button>
                                            </DialogClose>
                                        </div>
                                    </DialogContent>
                                </form>
                            </DialogPortal>
                        </Dialog>
                    </div>
                </div>
                <section className="container mt-10">
                    <div className="w-full flex justify-between items-center">
                        <div className="font-semibold dark:text-blue-400">Tarefas criadas <Badge variant={"secondary"} className="bg-gray-300 hover:bg-gray-300 dark:bg-darkInput px-2 rounded-full h-6 min-w-7 inline-flex justify-center">2</Badge></div>

                        <div className="font-semibold dark:text-blue-400">Concluídas <Badge variant={"secondary"} className="bg-gray-300 hover:bg-gray-300 dark:bg-darkInput px-2 rounded-full h-6">1 de 5</Badge></div>
                    </div>
                    <div className="w-full flex flex-col mt-5 gap-2">
                        <Tasks />
                        <Tasks />
                        <Tasks />
                        <Tasks />
                    </div>
                </section>
            </div>
        </div>
    )
}
