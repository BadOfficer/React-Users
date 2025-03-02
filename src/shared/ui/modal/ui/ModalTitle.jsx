import { cn } from '../../../utils/cn';

const ModalTitle = ({ children, className }) => {
    return <h3 className={cn('text-xl font-medium', className)}>{children}</h3>;
};

export default ModalTitle;
