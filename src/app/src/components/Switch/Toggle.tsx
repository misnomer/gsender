import { cn } from 'app/lib/utils';

type Props = {
    checked?: boolean;
    onChange: (
        checked: boolean,
        e: React.ChangeEvent<HTMLInputElement>,
        id: string,
    ) => void;
    disabled?: boolean;
    label?: string;
    className?: string;
    position?: 'horizontal' | 'vertical';
    id?: string;
    value?: number;
};

const Toggle = ({
    checked = false,
    onChange,
    label,
    position = 'horizontal',
    disabled = false,
    id,
    value,
}: Props) => {
    const isVertical = position === 'vertical';

    return (
        <>
            <label
                className={cn(
                    'inline-flex',
                    disabled
                        ? 'cursor-not-allowed opacity-50'
                        : 'cursor-pointer',
                    isVertical ? 'flex-col' : 'items-center',
                )}
            >
                <input
                    id={id}
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => onChange(e.target.checked, e, id)}
                    className="sr-only peer"
                    disabled={disabled}
                    value={value}
                />
                <div
                    className={cn(
                        "relative bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:border-white after:content-[''] after:absolute after:bg-white after:border-gray-300 after:border after:rounded-full after:transition-all dark:border-gray-600 peer-checked:bg-blue-600",
                        isVertical
                            ? 'w-6 h-11 peer-checked:after:translate-y-[-100%] after:left-[2px] after:bottom-[2px] after:h-5 after:w-5'
                            : 'w-11 h-6 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:top-[2px] after:start-[2px] after:h-5 after:w-5',
                        disabled && 'opacity-50 cursor-not-allowed',
                    )}
                ></div>
                {label && (
                    <span
                        className={cn(
                            'text-sm font-medium text-gray-900 dark:text-gray-300',
                            isVertical ? 'mt-3' : 'ms-3',
                            disabled && 'opacity-50',
                        )}
                    >
                        {label}
                    </span>
                )}
            </label>
        </>
    );
};

export default Toggle;
