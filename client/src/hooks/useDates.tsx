import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface datesContextData {
    date: Date | undefined;
    getDate: (date: Date | undefined) => void;
}

const datesContext = createContext<datesContextData>({} as datesContextData);


export function DatesContextProvider({ children }: { children: ReactNode }) {
    const [date, setDate] = useState<Date | undefined>(new Date());


    useEffect(() => {
        console.log(date);
    }, [date]);

    function getDate(date: Date | undefined) {
        setDate(date);
    }

    return (
        <datesContext.Provider value={{ date, getDate }}>
            {children}
        </datesContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useDates() {
    return useContext(datesContext);
}