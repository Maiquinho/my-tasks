import { Plus } from "@phosphor-icons/react";

export function AddTask() {

    return (
        <>
            <button className="w-fit p-4 mt-6 bg-red rounded">
                <Plus width={20} height={20} weight="bold" className="text-gray-200" />
            </button>
        </>
    )
}