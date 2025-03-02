import { forwardRef } from 'react';
import { cn } from '../../utils/cn';

const Input = forwardRef(function Input(
    { label, error, placeholder, className, ...props },
    ref,
) {
    return (
        <div className='flex flex-col gap-1'>
            {label && (
                <label
                    htmlFor={props.id}
                    className={`pl-3 text-sm ${
                        error ? 'text-red-700' : 'text-stone-500 '
                    }`}
                >
                    {label}
                </label>
            )}
            <div className='flex flex-col gap-0.5'>
                <input
                    ref={ref}
                    id={props.id}
                    placeholder={placeholder}
                    className={cn(
                        `outline-none border px-3 py-1 rounded-lg focus:ring-blue-400 focus:ring-1 ${
                            error ? 'border-red-700' : 'border-stone-500'
                        }`,
                        className,
                    )}
                    {...props}
                />
                {error && (
                    <p className='text-red-700 px-3 max-w-s text-sm'>
                        *{error}
                    </p>
                )}
            </div>
        </div>
    );
});

export default Input;
