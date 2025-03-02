import { AnimatePresence } from 'motion/react';
import { useRef, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import SelectItem from './SelectItem';
import SelectList from './SelectList';

const Select = ({
    options,
    label,
    id,
    placeholder,
    onChange,
    value,
    error,
    ...props
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef();

    const toggleSelectList = () => {
        setIsOpen((prevState) => !prevState);
    };

    const closeSelectOptions = () => {
        setIsOpen(false);
    };

    const handleSelect = (e, selectedValue) => {
        e.stopPropagation();
        onChange(selectedValue);
        closeSelectOptions();
    };

    useOutsideClick(selectRef, closeSelectOptions);

    const selectedValue = value || '';

    return (
        <div className='flex flex-col gap-1 relative' ref={selectRef}>
            {label && (
                <label
                    htmlFor={id}
                    className={`pl-3 text-sm ${
                        !error ? 'text-stone-500' : 'text-red-700'
                    }`}
                >
                    {label}
                </label>
            )}
            <div
                className={`relative border py-1 rounded-lg cursor-pointer ${
                    !error ? 'border-stone-500' : 'border-red-700'
                }`}
                onClick={toggleSelectList}
            >
                <input
                    value={selectedValue}
                    placeholder={placeholder}
                    className='pointer-events-none px-3'
                    id={id}
                    {...props}
                    disabled
                />
                <button
                    className='absolute right-1 top-1/2 translate-y-[-50%] cursor-pointer'
                    type='button'
                >
                    <IoIosArrowDown
                        className={`${
                            isOpen ? 'rotate-180' : 'rotate-0'
                        } duration-150`}
                    />
                </button>
                <AnimatePresence>
                    {options && isOpen && (
                        <SelectList>
                            {options.map((option) => (
                                <SelectItem
                                    key={option}
                                    onClick={(e) => handleSelect(e, option)}
                                >
                                    {option}
                                </SelectItem>
                            ))}
                        </SelectList>
                    )}
                </AnimatePresence>
            </div>
            {error && (
                <p className='text-red-700 px-3 max-w-s text-sm'>*{error}</p>
            )}
        </div>
    );
};

export default Select;
