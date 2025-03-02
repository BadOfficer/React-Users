import { AnimatePresence, motion } from 'motion/react';
import { useRef } from 'react';
import { createPortal } from 'react-dom';
import { useOutsideClick } from '../../../hooks/useOutsideClick';
import { cn } from '../../../utils/cn';
import { ModalContext } from '../context/useModalContext';
import ModalBody from './ModalBody';
import ModalClose from './ModalClose';
import ModalTitle from './ModalTitle';

const Modal = ({ children, isOpen, close, className }) => {
    const modalRef = useRef();
    useOutsideClick(modalRef, close);

    return (
        <AnimatePresence>
            {isOpen && (
                <ModalContext.Provider value={{ isOpen, close }}>
                    {createPortal(
                        <motion.div
                            className='fixed inset-0 bg-black/50 z-1000'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <motion.div
                                initial={{
                                    x: -100,
                                    opacity: 0,
                                }}
                                animate={{
                                    x: 0,
                                    opacity: 1,
                                }}
                                exit={{
                                    opacity: 0,
                                    x: -100,
                                }}
                                className={cn(
                                    'bg-white max-w-4xl flex flex-col gap-4 absolute top-1/2 left-1/2 min-w-xl translate-x-[-50%] translate-y-[-50%] rounded-lg p-4 max-h-96 ',
                                    className,
                                )}
                                ref={modalRef}
                            >
                                {children}
                            </motion.div>
                        </motion.div>,
                        document.body,
                    )}
                </ModalContext.Provider>
            )}
        </AnimatePresence>
    );
};

Modal.CloseTrigger = ModalClose;
Modal.Title = ModalTitle;
Modal.Body = ModalBody;

export default Modal;
