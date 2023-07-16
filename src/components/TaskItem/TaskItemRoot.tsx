import { ReactNode } from "react"

interface TaskItemRootProps {
    children: ReactNode;
}

export function TaskItemRoot({ children }: TaskItemRootProps){

    return (
        <div className="w-full dark:text-gray-600 text-gray-400 flex justify-between items-center mb-5">
            { children }
        </div>
    )
}