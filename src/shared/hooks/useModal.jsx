import { useCallback, useEffect, useState } from 'react';

export const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = useCallback((e) => {
        e.stopPropagation();
        setIsOpen(true);
    }, []);

    const handleClose = useCallback(() => {
        setIsOpen(false);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        }

        return () => (document.body.style.overflow = 'auto');
    }, [isOpen]);

    return { isOpen, handleClose, handleOpen };
};
