import { useTasksContext } from "../contexts/tasks";

export function useCheckTask(taskId: string, done: boolean) {
    
    const { dispatch } = useTasksContext();


    function handleCheckTask() {

        // console.log(!done);
        
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