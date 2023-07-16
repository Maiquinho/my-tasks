interface TaskItemLabelDefaultCheckboxProps {
    isChecked: boolean;
}

export function TaskItemLabelDefaultCheckbox({ isChecked }: TaskItemLabelDefaultCheckboxProps) {

    return (
        <input
            type="checkbox" className="w-0 opacity-0 invisible -z-50"
            defaultChecked={isChecked}
        />
    )
}