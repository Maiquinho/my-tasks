import { useEffect, useState } from "react";
import { firstLetterUpper } from "../helpers/firstLetterUpper";
import { ConfigButton } from "./ConfigButton";


type HeaderProps = {
    userConfigs: () => void
}

export function Header({userConfigs}: HeaderProps) {

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

    

    return (
        <header className="flex justify-between pt-[60px]">
            <ConfigButton clickFn={userConfigs} />
            <div>
                <span className="text-gray-800 text-sm font-medium">{firstLetterUpper(formatedDate.weekday)}</span>
                <div className="flex justify-between">
                    <span className="text-gray-400 text-xs">
                        {formatedDate.monthday} {firstLetterUpper(formatedDate.month)}
                    </span>
                    <span className="text-gray-400 text-xs">
                        {formatedDate.time}
                    </span>
                </div>
            </div>
        </header>
    )
}