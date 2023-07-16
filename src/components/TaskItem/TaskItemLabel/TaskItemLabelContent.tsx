interface TaskItemLabelContentProps {
    name: string;
    date: string;
    done: boolean;
}

export function TaskItemLabelContent({ name, date, done }: TaskItemLabelContentProps) {

    return (
        <>
            {done ?

                <div className="flex flex-col ml-6 z-30">
                    <span className="text-md text-red font-medium relative flex items-center justify-center after:content-[''] after:absolute after:-left-2 after:w-[220px] after:h-[2px] after:bg-red">{name}</span>
                    <span className="text-xs dark:text-gray-600 text-gray-400">{date}</span>
                </div>

                :

                <div className="flex flex-col ml-6 z-30">
                    <span className="text-md dark:text-gray-200 text-gray-800 font-medium">{name}</span>
                    <span className="text-xs dark:text-gray-600 text-gray-400">{date}</span>
                </div>

            }
        </>
    )
}