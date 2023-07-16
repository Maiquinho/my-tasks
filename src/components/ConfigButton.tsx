import { Gear } from "@phosphor-icons/react";


type configButtonProps = {
    clickFn: () => void
}

export function ConfigButton({clickFn}: configButtonProps) {

    return (
        <button className="h-fit" onClick={clickFn}>
            <Gear width={28} height={28} className="dark:text-gray-200 text-gray-800 hover:rotate-180 dark:hover:text-red hover:text-red transition-all" />
        </button>
    )
}