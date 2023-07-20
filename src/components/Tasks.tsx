import { AddTask } from "./AddTask";
import { Logo } from "./Logo";
import { TaskItem } from "./TaskItem";
import { useListTasks } from "../hooks/tasks/listTasks";

export function Tasks() {

    const { tasksListItem, tasksCount, tasksDone } = useListTasks();


    return (
        <main className="mt-10 relative">
            <Logo />

            <div className="border-b-2 dark:border-l-gray-200 border-l-gray-400 pb-5 relative w-[110%] mb-14">
                <span className="block dark:text-gray-600 text-gray-400 text-md mt-1">
                    {`${tasksDone} de ${tasksCount}`}
                </span>
            </div>

            <div className="relative">
                <div className="absolute top-[-4px] h-4 w-full bg-gradient-to-b dark:from-gray-800 from-white z-10"></div>
                <div className="flex flex-col items-end max-h-[225px] lg:max-h-[300px] lg:pr-8 overflow-y-scroll scrollbar-thin dark:scrollbar-thumb-gray-850 scrollbar-thumb-gray-200 lg:scrollbar-thumb-gray-400 dark:scrollbar-track-gray-800 scrollbar-track-white relative" >
                    {tasksListItem.length > 0 ?
                        <>
                            {tasksListItem.map(({ id, name, date, done }) => (

                                <TaskItem.Root key={id}>
                                    <TaskItem.Label.Root>
                                        <TaskItem.Label.Checkbox taskId={id} done={done} />
                                        <TaskItem.Label.Content id={id} name={name} date={date} done={done} />
                                        <TaskItem.Label.DefaultCheckbox isChecked={done} />
                                    </TaskItem.Label.Root>
                                    {done && (
                                        <TaskItem.Trash taskId={id} />
                                    )}
                                </TaskItem.Root>

                            ))} 
                        </>

                        :

                        <TaskItem.Root>
                            Sem tarefas no momento
                        </TaskItem.Root>
                    }
                </div>
                <div className="absolute h-6 w-full bottom-[-4px] bg-gradient-to-t dark:from-gray-800 from-white z-50"></div>
            </div>


            <AddTask />
        </main>
    )
}