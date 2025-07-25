import { ControlledInput } from 'app/components/ControlledInput';
export interface NumberSettingInputProps {
    unit?: string;
    value: number;
    index: number;
    min?: number;
    max?: number;
    onChange: (value: number) => void;
}

export function NumberSettingInput({
    unit = null,
    value = 0,
    min = null,
    max = null,
    onChange,
}: NumberSettingInputProps) {
    return (
        <div className="ring-1 ring-gray-300 flex flex-row flex-1 rounded">
            <ControlledInput
                type="number"
                value={value}
                className="flex-1 p-2 focus:outline-none"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    onChange(e.target.valueAsNumber)
                }
                suffix={unit}
                min={min}
                max={max}
            />
        </div>
    );
}
