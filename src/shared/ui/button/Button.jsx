import { cva } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const Button = ({ children, onClick, intent, className }) => {
    const defaultStyles = `px-4 py-2 rounded-lg cursor-pointer duration-300 font-medium text-sm`;

    const button = cva(defaultStyles, {
        variants: {
            intent: {
                primary: `bg-blue-400 text-amber-50 hover:bg-blue-500`,
                outline: `border-1 border-blue-400 hover:bg-blue-400 hover:text-amber-50 text-blue-400`,
            },
        },
        defaultVariants: {
            intent: 'primary',
        },
    });

    return (
        <button onClick={onClick} className={cn(button({ intent }), className)}>
            {children}
        </button>
    );
};

export default Button;
