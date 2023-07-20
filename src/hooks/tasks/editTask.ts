import { ChangeEvent, useState } from "react";
import { useTasksContext } from "../contexts/tasks";

export function useEditTask(id: string, name: string){

    const { dispatch } = useTasksContext();
    const [editTask, setEditTask] = useState(false);
    const [taskField, setTaskField] = useState(name);

    function handleEditTask(){
        setEditTask(!editTask);

        dispatch({
            type: 'edit',
            payload: {
                id,
                name: taskField
            }
        })

    }

    function handleTaskField(e: ChangeEvent<HTMLInputElement>) {
        setTaskField(e.target.value);
    }

    
    return { editTask, handleEditTask, handleTaskField, taskField }
}