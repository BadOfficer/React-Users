import { createContext, useContext } from 'react';

export const ModalContext = createContext();

export const useModalContext = () => {
    const context = useContext(ModalContext);

    if (!context) {
        throw new Error('');
    }

    return context;
};
