import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface tasksContextData {
    title: string;
    description: string;
    date: Date | undefined;
    changeDate: (date: Date | undefined) => void;
    changeTitle: (title: string) => void;
    changeDescription: (description: string) => void;
}

const tasksContext = createContext<tasksContextData>({} as tasksContextData);

export function TasksContextProvider({ children }: { children: ReactNode }) {
    const [task, setTask] = useState<tasksContextData[]>([]);
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    useEffect(() => {
        console.log(date);
    }, [date, title, description]);

    function changeDate(date: Date | undefined) {
        setDate(date);
    }

    function changeTitle(title: string) {
        setTitle(title);
    }

    function changeDescription(description: string) {
        setDescription(description);
    }

    return (
        <tasksContext.Provider value={{ date, changeDate, title, changeTitle, description, changeDescription }}>
            {children}
        </tasksContext.Provider >
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTasks() {
    return useContext(tasksContext);
}