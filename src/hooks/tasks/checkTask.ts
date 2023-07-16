import { useTasksContext } from "../contexts/tasks";

export function useCheckTask(taskId: string, done: boolean) {
    
    const { dispatch } = useTasksContext();


    function handleCheckTask() {

        
        dispatch({
            type: 'set_checked',
            payload: {
                id: taskId,
                done
            }
        })
        
    }

    return { handleCheckTask }
}