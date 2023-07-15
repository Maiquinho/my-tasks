import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme";

export function useThemeContext(){
    const { state, dispatch } = useContext(ThemeContext);

    return { state, dispatch }
}