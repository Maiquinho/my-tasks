import { useContext } from "react";
import { TasksContext } from "../../contexts/tasks";

export function useTasksContext(){
    const { state, dispatch } = useContext(TasksContext);

    return { state, dispatch }
}