import { useState } from 'react';
import { InputCheckboxCheckbox } from './InputCheckboxCheckbox';
import { InputCheckboxLabel } from './InputCheckboxLabel';
import { Trash } from "@phosphor-icons/react";


export function Checkbox() {
    const [isChecked, setIsChecked] = useState(false);

    function handleInputCheckbox() {
        if (isChecked == false) {
            setIsChecked(true)
        } else {
            setIsChecked(false)
        }
    }


    return (
        <>
            <label className="flex items-center">

                <InputCheckboxCheckbox onSwitchChange={handleInputCheckbox} isChecked={isChecked} />
                <InputCheckboxLabel taskTitle="Fazer Café" taskDate="Seg, 24 Abr" isChecked={isChecked} />

                <input type="checkbox" className="w-0 opacity-0 invisible -z-50" checked={isChecked} />

            </label>

            {isChecked &&
                <Trash width={20} height={20} weight="bold" className="text-red -mt-2" />
            }
        </>
    )
}