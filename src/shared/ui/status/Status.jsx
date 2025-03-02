import { cn } from '../../utils/cn';

const Status = ({ textColor, bgColor, children, className }) => {
    return (
        <div
            className={cn(
                `py-1 px-3 rounded-lg inline`,
                `${textColor}`,
                `${bgColor}`,
                className,
            )}
        >
            {children}
        </div>
    );
};

export default Status;
