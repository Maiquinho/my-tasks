import { TasksProvider } from "./tasks";
import { ThemeProvider } from "./theme";

interface AppProviderProps {
    children: React.ReactNode;
}


export const AppProvider = ({ children } : AppProviderProps) => {

    return (
        <ThemeProvider>
            <TasksProvider>
                { children }
            </TasksProvider>
        </ThemeProvider>
    )
}