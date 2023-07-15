import { PropsWithChildren, createContext, useReducer } from "react"
import { getTasksInitialState, tasksReducer } from "../../hooks/reducers/taskReducer";
import { ReducerActionType } from "../../types/settingsReducer";
import { Tasks } from "../../types/task";


interface TasksContextInitialStateType {
    tasks: Tasks
}

interface TasksContextType {
    state: TasksContextInitialStateType,
    dispatch: React.Dispatch<any>
}


const initialTasksContext = {
    tasks: getTasksInitialState()
}

const TasksContext = createContext<TasksContextType>({
    state: initialTasksContext,
    dispatch: () => null
});

const mainReducer = (state: TasksContextInitialStateType, action: ReducerActionType) => ({
    tasks: tasksReducer(state.tasks, action)
});

const TasksProvider: React.FC<PropsWithChildren> = ({ children }) => {

    const [state, dispatch] = useReducer(mainReducer, initialTasksContext);

    return (
        <TasksContext.Provider value={{ state, dispatch }}>
            { children }
        </TasksContext.Provider>
    )
}


export { TasksContext, TasksProvider }