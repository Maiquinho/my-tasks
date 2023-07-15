import { PropsWithChildren, createContext, useReducer } from "react"
import { getSettingsInitialState, settingsReducer } from "../../hooks/reducers/settingsReducer";
import { ReducerActionType, SettingsType } from "../../types/settingsReducer";


interface ThemeContextInitialStateType {
    theme: SettingsType;
}

interface ThemeContextType {
    state: ThemeContextInitialStateType,
    dispatch: React.Dispatch<any>
}


const initialThemeContext = {
    theme: getSettingsInitialState()
}

const ThemeContext = createContext<ThemeContextType>({
    state: initialThemeContext,
    dispatch: () => null
});

const mainReducer = (state: ThemeContextInitialStateType, action: ReducerActionType) => ({
    theme: settingsReducer(state.theme, action)
});

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {

    const [state, dispatch] = useReducer(mainReducer, initialThemeContext);

    return (
        <ThemeContext.Provider value={{ state, dispatch }}>
            { children }
        </ThemeContext.Provider>
    )
}


export { ThemeContext, ThemeProvider }