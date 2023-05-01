import { DarkModeButton } from "./DarkModeButton"

type UserSettingsProps = {
    displayModalConfig: boolean,
    handleModalDisplay: () => void
}


export function UserSettings({ displayModalConfig, handleModalDisplay }: UserSettingsProps) {

    return (
        <>
            {displayModalConfig ?
                <>
                    <div className="absolute bg-gray-800 z-40 h-screen w-full inset-0 opacity-60 visible transition-opacity" onClick={handleModalDisplay}></div>
                    <div className="absolute bg-gray-200 z-50 bottom-4 h-fit w-11/12 p-6 opacity-100 visible transition-opacity">
                        <h2 className="font-semi-bold mb-4">Configurações</h2>

                        <DarkModeButton />
                    </div>
                </>

                :

                <>
                    <div className="absolute bg-gray-800 z-40 h-screen w-full inset-0 opacity-0 invisible transition-opacity"></div>
                    <div className="absolute z-50 opacity-0 invisible transition-opacity"></div>
                </>
            }
        </>
    )
}