export type SettingsType = {
    theme: string;
    darkMode: boolean;
}

export type ReducerActionType = {
    type: string;
    payload: {
        [key: string]: any;
    }
}