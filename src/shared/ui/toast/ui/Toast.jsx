import { motion } from 'motion/react';
import { useEffect } from 'react';
import ToastIcon from './ToastIcon';

const Toast = ({ id, message, title, onClose, duration, type }) => {
    useEffect(() => {
        const timer = setTimeout(() => onClose(id), duration);

        return () => clearTimeout(timer);
    }, [id, duration, onClose]);

    return (
        <motion.div
            className={`flex gap-3 px-2 py-2 rounded-lg min-w-60 pr-4 items-center max-w-80 text-base bg-sky-50 shadow-2xl`}
            initial={{
                opacity: 0,
                y: -50,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            exit={{
                opacity: 0,
                y: -50,
            }}
            // transition={{ duration: 0.3 }}
        >
            <ToastIcon type={type} />
            <div>
                {title && <h3>{title}</h3>}
                {message}
            </div>
        </motion.div>
    );
};

export default Toast;
