import { useEditTask } from "../../../hooks/tasks/editTask";

interface TaskItemLabelContentProps {
    id: string;
    name: string;
    date: string;
    done: boolean;
}

export function TaskItemLabelContent({ id, name, date, done }: TaskItemLabelContentProps) {

    const { editTask, handleEditTask, handleTaskField, taskField } = useEditTask(id, name);


    return (
        <>
            {done && (
                <div className="flex flex-col ml-6 z-30">
                    <span className="text-md text-red font-medium relative flex items-center justify-center after:content-[''] after:absolute after:-left-2 after:w-[220px] after:h-[2px] after:bg-red">{name}</span>
                    <span className="text-xs dark:text-gray-600 text-gray-400">{date}</span>
                </div>
            )}

            {!done && editTask && (
                <form className="flex flex-col ml-6 z-30" onBlur={handleEditTask}>
                    <input id="task-name" className="dark:bg-gray-800 bg-white text-md dark:text-gray-200 text-gray-800 font-medium focus:outline-none dark:placeholder:text-gray-600 placeholder:text-gray-400" type="text" placeholder="Editar tarefa" onChange={handleTaskField} value={taskField} />
                    <input className="dark:bg-gray-800 bg-white text-xs dark:text-gray-600 text-gray-400 focus:outline-none dark:placeholder:text-gray-600 placeholder:text-gray-400" type="text" value={date} disabled />
                </form>
            )}

            {!done && !editTask && (
                <div className="flex flex-col ml-6 z-30" onClick={handleEditTask}>
                    <span className="text-md dark:text-gray-200 text-gray-800 font-medium">{name}</span>
                    <span className="text-xs dark:text-gray-600 text-gray-400">{date}</span>
                </div>
            )}

        </>
    )
}