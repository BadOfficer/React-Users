import { cn } from '../../../utils/cn';

const ModalBody = ({ children, className }) => {
    return (
        <div
            className={cn(
                'min-w-xl text-base text-stone-500 h-full flex flex-col gap-3',
                className,
            )}
        >
            {children}
        </div>
    );
};

export default ModalBody;
