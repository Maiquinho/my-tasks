import { useTasksContext } from "../contexts/tasks";

export function useDeleteTask(id: string){

    const { dispatch } = useTasksContext();

    function handleDeleteTask() {
        dispatch({
            type: 'delete',
            payload: {
                id
            }
        })
    }

    return {
        handleDeleteTask
    }
}