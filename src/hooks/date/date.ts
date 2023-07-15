import { useState, useEffect } from "react";

export function useDate(){
    
    const [date, setDate] = useState(new Date());
    const formatedDate = {
        weekday: date.toLocaleDateString('pt-br', { weekday: 'long' }),
        monthday: date.toLocaleDateString('pt-br', { day: '2-digit' }),
        month: date.toLocaleDateString('pt-br', { month: 'short' }),
        time: date.toLocaleTimeString([], {timeStyle: 'short'})
    };


    useEffect(() => {
        setInterval(() => setDate(new Date()), 1000);
    }, []);


    return {
        formatedDate
    }
}