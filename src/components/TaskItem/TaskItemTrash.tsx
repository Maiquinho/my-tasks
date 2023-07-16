import { Trash } from "@phosphor-icons/react";
import { useDeleteTask } from "../../hooks/tasks/deleteTask";


interface TaskItemTrashProps {
    taskId: string;
}

export function TaskItemTrash({ taskId }: TaskItemTrashProps) {

    const { handleDeleteTask } = useDeleteTask(taskId);

    return (
        <Trash
            onClick={handleDeleteTask}
            width={20}
            height={20}
            weight="bold"
            className="text-red -mt-2 cursor-pointer" />
    )
}