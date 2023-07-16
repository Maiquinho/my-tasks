import { Plus } from "@phosphor-icons/react";
import { useAddTask } from "../hooks/tasks/addTask";


export function AddTask() {

    const { addTaskForm, handleTaskForm, handleTaskField, taskField } = useAddTask();

    return (
        <div className="flex flex-col items-end mt-2">
            {addTaskForm && (
                <form className="w-full flex flex-col z-30" onBlur={handleTaskForm}>
                    <input id="task-name" className="dark:bg-gray-800 bg-white text-md dark:text-gray-200 text-gray-800 font-medium focus:outline-none dark:placeholder:text-gray-600 placeholder:text-gray-400" type="text" placeholder="Nova tarefa" onChange={handleTaskField} value={taskField} />
                </form>
                )
            }

            <button className="bg-red rounded" onClick={handleTaskForm}>
                <label htmlFor="task-name" className="block w-fit h-full p-4">
                    <Plus width={20} height={20} weight="bold" className="text-gray-200" />
                </label>
            </button>
        </div>
    )
}