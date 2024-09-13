import { Dialog, DialogClose, DialogContent, DialogDescription, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { CalendarIcon } from "@radix-ui/react-icons";
import { addDays, format } from "date-fns";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Calendar } from "./ui/calendar";
import { CirclePlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTasks } from "@/hooks/useTasks";
import { FormEvent, useState } from "react";


export function NewTaskButtonModal() {
    const { date, changeDate } = useTasks();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    function teste(e: FormEvent) {
        e.preventDefault();
        console.log(name, description, date);


        setName("");
        setDescription("");
    }


    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="z-10 flex justify-center items-center font-semibold gap-2 text-white bg-blue-600 hover:bg-blue-700 duration-200 rounded-md p-2 lg:px-4 text-sm lg:text-base h-10 lg:h-12 mt-[-28px]">New task <CirclePlusIcon size={16} />
                </button>
            </DialogTrigger>
            <DialogPortal>
                <DialogOverlay className="bg-black/0" />
                <DialogContent className="dark:bg-darkDialogContent">
                    <DialogTitle className="DialogTitle">Create new task</DialogTitle>
                    <DialogDescription className="DialogDescription">
                        Click create when you're done.
                    </DialogDescription>
                    <form onSubmit={teste} className="flex flex-col gap-2">
                        <fieldset>
                            <Label htmlFor="name">
                                Name
                            </Label>
                            <Input value={name} onChange={(event) => setName(event.target.value)} type="text" name="name" className="focus-visible:ring-blue-400" placeholder="Name of task" />
                        </fieldset>
                        <fieldset>
                            <Label className="Label" htmlFor="description">
                                Description
                            </Label>
                            <Input value={description} onChange={(event) => setDescription(event.target.value)} type="text" name="description" className="focus-visible:ring-blue-400" placeholder="Description of task" />
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
                                            changeDate(addDays(new Date(), parseInt(value)))
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
                                        <Calendar mode="single" selected={date} onSelect={(e) => {
                                            changeDate(e);
                                        }} />
                                    </div>
                                </PopoverContent>
                            </Popover>
                        </fieldset>
                        <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
                            <DialogClose asChild>
                                <Button type="submit" onSubmit={teste} className="bg-blue-500 hover:bg-blue-600 dark:bg-slate-200 dark:hover:bg-slate-300">Create</Button>
                            </DialogClose>
                        </div>
                    </form>
                </DialogContent>
            </DialogPortal>
        </Dialog >
    )
}