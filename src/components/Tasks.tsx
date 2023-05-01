import { AddTask } from "./AddTask";
import { Logo } from "./Logo";
import { TaskRow } from "./TaskRow";

export function Tasks() {

    return (
        <main className="mt-10 relative">
            <Logo />

            <div className="border-b-2 border-l-gray-400 pb-5 relative w-[110%] mb-14">
                <span className="block text-gray-400 text-md mt-1">1 de 1</span>
            </div>

            <div className="flex flex-col items-end">
                <TaskRow />
                <AddTask />
            </div>
        </main>
    )
}