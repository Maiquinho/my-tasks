import { Moon, Sun } from '@phosphor-icons/react';
import { useSwitchTheme } from '../hooks/theme/switchTheme';


export function DarkModeButton() {

    const { handleSwitchThemeButton, darkModeChecked } = useSwitchTheme();


    return (
        <label className="h-fit">
            <div className="flex items-center gap-2" onClick={handleSwitchThemeButton}>
                <>
                    {!darkModeChecked ?
                        <>
                            <div className="p-1 bg-red rounded-full overflow-hidden w-fit flex gap-2 transition-all">
                                <div className="p-3 bg-gray-200 rounded-full"></div>
                                <Sun width={24} height={24} className="text-gray-200" />
                            </div>
                            <span className="dark:text-gray-200 text-gray-800">Dark Mode</span>
                        </>

                        :

                        <>
                            <div className="p-1 bg-gray-800 rounded-full overflow-hidden w-fit flex gap-2 flex-row-reverse transition-all">
                                <div className="p-3 bg-gray-200 rounded-full"></div>
                                <Moon width={24} height={24} className="text-gray-200" />
                            </div>
                            <span className="dark:text-gray-200 text-gray-800">Light Mode</span>
                        </>
                    }
                </>
            </div>

            <input type="checkbox" className="absolute bottom-0 left-0 w-0 h-0 opacity-0 invisible -z-50" defaultChecked={darkModeChecked} />
        </label>
    )
}