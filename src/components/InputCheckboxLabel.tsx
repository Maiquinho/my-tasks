type InputCheckboxLabelProps = {
    taskTitle: string,
    taskDate: string,
    isChecked: boolean
}

export function InputCheckboxLabel({ taskTitle, taskDate, isChecked }: InputCheckboxLabelProps) {

    return (
        <>
            {isChecked ?

                <div className="flex flex-col ml-6 z-30">
                    <span className="text-md text-red font-medium relative flex items-center justify-center after:content-[''] after:absolute after:-left-2 after:w-[220px] after:h-[2px] after:bg-red">{taskTitle}</span>
                    <span className="text-xs text-gray-400">{taskDate}</span>
                </div>

                :
            
                <div className="flex flex-col ml-6 z-30">
                    <span className="text-md text-gray-800 font-medium">{taskTitle}</span>
                    <span className="text-xs text-gray-400">{taskDate}</span>
                </div>
            
            }
        </>
    )
}