import { useState, useEffect } from "react";
import { useThemeContext } from "../contexts/theme";

export function useLogoTheme(){

    const { state } = useThemeContext();
    const [logoFill, setLogoFill] = useState('#262627');


    useEffect(() => {

        if(state.theme.theme == 'dark'){
            setLogoFill('#D9D9D9');
        }else{
            setLogoFill('#262627');
        }

    }, [state.theme.theme])


    return { logoFill }
}