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
                    <div className="absolute backdrop-blur-sm z-[50] h-screen w-full inset-0 visible transition-all" onClick={handleModalDisplay}></div>
                    <div className="fixed dark:bg-gray-900 bg-gray-200 z-[100] bottom-4 h-fit w-11/12 p-6 opacity-100 visible transition-opacity rounded">
                        <h2 className="dark:text-gray-200 text-gray-800 font-semi-bold mb-4">Configurações</h2>

                        <DarkModeButton />
                    </div>
                </>

                :

                <>
                    <div className="absolute backdrop-blur-sm z-[50] h-screen w-full inset-0 invisible transition-all"></div>
                    <div className="fixed z-[100] opacity-0 invisible transition-opacity">
                        <DarkModeButton />
                    </div>
                </>
            }
        </>
    )
}