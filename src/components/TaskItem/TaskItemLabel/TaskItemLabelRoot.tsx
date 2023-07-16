import { ReactNode } from "react";

interface TaskItemLabelRootProps {
    children: ReactNode;
}

export function TaskItemLabelRoot({ children }: TaskItemLabelRootProps) {
    return (
        <label className="flex items-center">
            { children }
        </label>
    )
}