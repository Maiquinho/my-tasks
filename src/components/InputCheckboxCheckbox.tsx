import { Check } from '@phosphor-icons/react';

type inputCheckboxProps = {
    onSwitchChange: () => void,
    isChecked: boolean
}

export function InputCheckboxCheckbox({ onSwitchChange, isChecked }: inputCheckboxProps) {

    return (
        <div onClick={onSwitchChange}>

            {isChecked ?

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