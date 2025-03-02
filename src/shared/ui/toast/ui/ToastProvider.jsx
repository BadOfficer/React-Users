import { AnimatePresence } from 'motion/react';
import { useCallback, useState } from 'react';
import { ToastContext } from '../context/ToastContext';
import Toast from './Toast';

const ToastProvider = ({ children, duration = 3000 }) => {
    const [toasts, setToasts] = useState([]);

    const handleAddToast = (message, type) => {
        const newToast = {
            id: Date.now(),
            message,
            type,
        };

        setToasts((prevToasts) => [...prevToasts, newToast]);
    };

    const handleRemoveToast = useCallback((toastId) => {
        setToasts((prevToasts) =>
            prevToasts.filter((toast) => toast.id !== toastId),
        );
    }, []);

    const toast = {
        success: (message) => handleAddToast(message, 'success'),
        error: (message) => handleAddToast(message, 'error'),
    };

    return (
        <ToastContext.Provider value={{ toast }}>
            {children}
            <AnimatePresence>
                {toasts.length > 0 && (
                    <div className='fixed top-4 left-1/2 translate-x-[-50%] flex flex-col gap-3'>
                        {toasts.map((toast) => (
                            <Toast
                                message={toast.message}
                                key={toast.id}
                                id={toast.id}
                                duration={duration}
                                onClose={handleRemoveToast}
                                type={toast.type}
                            />
                        ))}
                    </div>
                )}
            </AnimatePresence>
        </ToastContext.Provider>
    );
};

export default ToastProvider;
