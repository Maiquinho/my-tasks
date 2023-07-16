import { useState, ChangeEvent, useEffect } from "react";
import { useTasksContext } from "../contexts/tasks";


export function useAddTask(){

    const { state, dispatch } = useTasksContext();
    const [addTaskForm, setAddTaskForm] = useState(false);
    const [taskField, setTaskField] = useState('');


    function handleTaskForm() {
        setAddTaskForm(!addTaskForm);

        dispatch({
            type: 'add',
            payload: {
                name: taskField
            }
        })

        setTaskField('');
    }

    function handleTaskField(e: ChangeEvent<HTMLInputElement>) {
        setTaskField(e.target.value);
    }

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(state.tasks))
    }, [state])


    return {
        addTaskForm,
        handleTaskForm,
        handleTaskField,
        taskField
    }
}