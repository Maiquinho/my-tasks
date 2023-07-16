import { useEffect } from 'react';
import { useThemeContext } from '../contexts/theme';

export function useSwitchTheme() {

    const { state, dispatch } = useThemeContext();
    const darkModeChecked = state.theme.darkMode;


    function handleSwitchThemeButton() {

        if(state.theme.theme == 'light'){

            dispatch({
                type: 'set_theme',
                payload: {
                    theme: 'dark',
                    darkMode: true
                }
            });

        } else {

            dispatch({
                type: 'set_theme',
                payload: {
                    theme: 'light',
                    darkMode: false
                }
            });

        }

    }

    useEffect(() => {
        document.documentElement.setAttribute('class', state.theme.theme);
        localStorage.setItem('theme', JSON.stringify(state.theme))
    }, [state])



    return { 
        handleSwitchThemeButton,
        darkModeChecked
    };

}