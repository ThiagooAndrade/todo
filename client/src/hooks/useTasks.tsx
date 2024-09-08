import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface tasksContextData {
    date: Date | undefined;
    changeDate: (date: Date | undefined) => void;
}

const tasksContext = createContext<tasksContextData>({} as tasksContextData);


export function TasksContextProvider({ children }: { children: ReactNode }) {
    const [date, setDate] = useState<Date | undefined>(new Date());


    useEffect(() => {
        console.log(date);
    }, [date]);

    function changeDate(date: Date | undefined) {
        setDate(date);
    }

    return (
        <tasksContext.Provider value={{ date, changeDate }}>
            {children}
        </tasksContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTasks() {
    return useContext(tasksContext);
}