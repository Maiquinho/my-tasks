import { ReducerActionType, SettingsType } from "../../types/settingsReducer";

export const settingsIntialState: SettingsType = {
    theme: 'light',
    darkMode: false
}

export const getSettingsInitialState = () => {
    const settings = localStorage.getItem('theme');
    return settings ? JSON.parse(settings) : settingsIntialState;
}

export function settingsReducer(state: SettingsType, action: ReducerActionType){
    switch(action.type){
        case 'set_theme':
                return { ...state, theme: action.payload.theme, darkMode: action.payload.darkMode };
            break;
    }

    return state;
}