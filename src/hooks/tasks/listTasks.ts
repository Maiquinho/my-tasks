import { useTasksContext } from "../contexts/tasks";

export function useListTasks(){

    const { state, dispatch } = useTasksContext();
    const tasks = state.tasks;
    const tasksListItem = tasks;
    const tasksCount = tasks.length;
    const tasksDone = tasks.filter(task => task.done === true).length;


    return {
        state,
        dispatch,
        tasksListItem,
        tasksCount,
        tasksDone
    }
}