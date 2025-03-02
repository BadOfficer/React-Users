import { cn } from '../../utils/cn';

const SelectItem = ({ children, className, onClick }) => {
    return (
        <li
            className={cn(
                'px-3 py-2 cursor-pointer hover:bg-stone-100 flex gap-2 items-center',
                className,
            )}
            onClick={onClick}
        >
            {children}
        </li>
    );
};

export default SelectItem;
