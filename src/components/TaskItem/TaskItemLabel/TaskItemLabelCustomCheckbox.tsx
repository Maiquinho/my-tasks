import { Check } from "@phosphor-icons/react";
import { useCheckTask } from "../../../hooks/tasks/checkTask";

interface TaskItemLabelCustomCheckboxProps {
    taskId: string;
    done: boolean;
}

export function TaskItemLabelCustomCheckbox({ taskId, done }: TaskItemLabelCustomCheckboxProps){

    const { handleCheckTask } = useCheckTask(taskId, done);
    

    return (
        <div onClick={handleCheckTask}>

            {done ?

                <div className="bg-red p-0.5 rounded z-30 -mt-2">
                    <Check width={16} height={16} weight="bold" className="text-gray-200" />
                </div>

                :

                <div className="bg-white border-2 border-gray-400 rounded z-30 -mt-2">
                    <Check width={16} height={16} weight="bold" className="text-white" />
                </div>

            }
            
        </div>
    )
}