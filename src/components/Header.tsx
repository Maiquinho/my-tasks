import { firstLetterUpper } from "../helpers/firstLetterUpper";
import { ConfigButton } from "./ConfigButton";
import { useDate } from "../hooks/date/date";


type HeaderProps = {
    userConfigs: () => void
}

export function Header({userConfigs}: HeaderProps) {

    const { formatedDate } = useDate();
    

    return (
        <header className="flex justify-between pt-[60px]">
            <ConfigButton clickFn={userConfigs} />
            <div>
                <span className="dark:text-gray-400 text-gray-800 text-sm font-medium">{firstLetterUpper(formatedDate.weekday)}</span>
                <div className="flex justify-between gap-5">
                    <span className="dark:text-gray-600 text-gray-400 text-xs">
                        {formatedDate.monthday} {firstLetterUpper(formatedDate.month)}
                    </span>
                    <span className="dark:text-gray-600 text-gray-400 text-xs">
                        {formatedDate.time}
                    </span>
                </div>
            </div>
        </header>
    )
}