import { useEffect } from 'react';

export const useOutsideClick = (ref, handleClick) => {
    useEffect(() => {
        const clickListener = (e) => {
            if (ref.current && ref.current.contains(e.target)) {
                return null;
            }

            handleClick();
        };

        document.addEventListener('mousedown', clickListener);

        return () => document.removeEventListener('mousedown', clickListener);
    }, [ref, handleClick]);
};
